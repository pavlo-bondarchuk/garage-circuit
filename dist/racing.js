import * as T from './three.module.js';
export const GREEN_MIN=5900,GREEN_MAX=6600,REDLINE=7200;
const ratios=[0,.24,.38,.53,.70,.86,1];
export class DragEngine{
 constructor(hp,max,electric=false){this.hp=hp;this.max=max/3.6;this.electric=electric;this.gear=1;this.rpm=900;this.temp=85;this.shiftTime=0;this.message='';this.messageTime=0;this.damage=0;this.launch=0;this.started=false;}
 shift(delta,speed){if(this.electric||this.shiftTime>0)return false;const next=Math.max(1,Math.min(6,this.gear+delta));if(next===this.gear)return false;const rpm=Math.max(900,Math.abs(speed)/this.max/ratios[next]*REDLINE);if(delta<0&&rpm>REDLINE){this.message='ПОНИЖЕНИЕ ЗАБЛОКИРОВАНО';this.messageTime=1;return false;}const good=this.rpm>=GREEN_MIN&&this.rpm<=GREEN_MAX;this.message=delta<0?'ПЕРЕДАЧА НИЖЕ':good?'ТОЧНОЕ ПЕРЕКЛЮЧЕНИЕ':this.rpm<GREEN_MIN?'РАНО — ПОТЕРЯ ТЯГИ':'ПОЗДНО — ОТСЕЧКА';this.messageTime=1.3;this.shiftTime=good?.18:.38;this.gear=next;this.rpm=rpm;return true;}
 step(dt,speed,throttle,staged=false){this.shiftTime=Math.max(0,this.shiftTime-dt);this.messageTime=Math.max(0,this.messageTime-dt);if(this.electric){this.rpm=0;return staged?0:throttle*(6+Math.sqrt(this.hp)*.44)*Math.max(.16,1-speed/this.max)-.004*speed*speed;}
 if(staged){this.rpm+=(throttle?6800-this.rpm:900-this.rpm)*Math.min(1,dt*3);return 0;}
 if(!this.started){this.started=true;this.launch=this.rpm>=3000&&this.rpm<=5500?1:.55;this.message=this.launch===1?'ХОРОШИЙ СТАРТ':this.rpm>5500?'ПРОБУКСОВКА':'СЛАБЫЙ СТАРТ';this.messageTime=1.2;}
 const wheelRpm=Math.abs(speed)/this.max/ratios[this.gear]*REDLINE;
 this.rpm=Math.max(900,wheelRpm,this.gear===1&&throttle&&speed<6?2600:0);
 const over=this.rpm>=REDLINE;
 this.temp=Math.min(160,Math.max(80,this.temp+dt*((over&&throttle?13:throttle&&this.rpm>GREEN_MAX?3.8:throttle?.55:-4)-Math.abs(speed)*.016)));
 if(this.temp>125)this.damage+=dt*(this.temp-125)*.15;
 const torque=Math.max(.035,Math.min(1,Math.pow(this.rpm/4500,1.8)))*(this.rpm>6600?.82:1);
 const gearing=ratios[1]/ratios[this.gear];
 const cooling=this.temp>115?Math.max(.15,1-(this.temp-115)/35):1;
 const launch=speed<8?this.launch:1;
 const force=(6+Math.sqrt(this.hp)*.44)*1.45*gearing*torque*cooling*launch;
 return (throttle&&this.shiftTime===0&&!over?force:0)-.0025*speed*speed-.12;
 }
}
export function makeCourse(kind){const closed=kind==='race';const coords=closed?[[0,0,-95],[90,0,-95],[125,0,-30],[105,0,70],[25,0,105],[-80,0,85],[-120,0,15],[-90,0,-80]]:[[-155,0,155],[-135,2,100],[-65,6,110],[-25,10,55],[-85,7,5],[-115,3,-55],[-45,6,-95],[30,12,-65],[85,8,-10],[145,3,-60],[120,0,-145]];const curve=new T.CatmullRomCurve3(coords.map(p=>new T.Vector3(...p)),closed,'catmullrom',.35);const length=curve.getLength(),samples=curve.getSpacedPoints(500);return {closed,curve,length,samples,width:closed?18:12,at(distance){const u=closed?((distance/length)%1+1)%1:Math.max(0,Math.min(1,distance/length));return {point:curve.getPointAt(u),tangent:curve.getTangentAt(u)};},nearest(position){let best=Infinity,result;for(let i=0;i<samples.length-1;i++){const a=samples[i],b=samples[i+1],dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((position.x-a.x)*dx+(position.z-a.z)*dz)/(dx*dx+dz*dz))),x=a.x+dx*t,z=a.z+dz*t,d=Math.hypot(position.x-x,position.z-z);if(d<best){best=d;result={distance:(i+t)/500*length,offset:d,height:a.y+(b.y-a.y)*t};}}return result;}};}
export function courseMesh(course){const positions=[],colors=[],indices=[];const color=new T.Color(course.closed?'#414b48':'#a88b60');for(let i=0;i<=500;i++){const p=course.samples[i],t=course.curve.getTangentAt(i/500),n=new T.Vector3(-t.z,0,t.x).normalize();for(const side of [-1,1]){positions.push(p.x+n.x*course.width/2*side,p.y+.045,p.z+n.z*course.width/2*side);const shade=course.closed?1:.92+.08*Math.sin(i*2.7);colors.push(color.r*shade,color.g*shade,color.b*shade);}if(i<500){const j=i*2;indices.push(j,j+2,j+1,j+1,j+2,j+3);}}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();const mesh=new T.Mesh(geo,new T.MeshStandardMaterial({vertexColors:true,roughness:1,side:T.DoubleSide}));mesh.receiveShadow=true;return mesh;}
export function terrainMesh(course){const geo=new T.PlaneGeometry(460,460,65,65);geo.rotateX(-Math.PI/2);const a=geo.attributes.position;for(let i=0;i<a.count;i++){const near=course.nearest({x:a.getX(i),z:a.getZ(i)});a.setY(i,course.closed?-.12:near.height*Math.max(0,1-Math.max(0,near.offset-6)/42)-.14);}geo.computeVertexNormals();const mesh=new T.Mesh(geo,new T.MeshStandardMaterial({color:course.closed?'#637455':'#7a8052',roughness:1}));mesh.receiveShadow=true;return mesh;}
