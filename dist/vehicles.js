import * as T from './three.module.js';

const designs={
'301':{w:1.75,l:4.44,wheel:.32,axles:[-1.38,1.28],belt:.98,roof:1.48,front:-.9,rear:1.23,rf:-.38,rr:.79,rw:.70,nose:.76,hood:.91,tail:.99,doors:4},
golf:{w:1.8,l:4.27,wheel:.34,axles:[-1.3,1.28],belt:1.01,roof:1.47,front:-.95,rear:1.77,rf:-.43,rr:1.37,rw:.73,nose:.78,hood:.94,tail:1.02,doors:4},
bmw:{w:1.72,l:4.34,wheel:.32,axles:[-1.33,1.24],belt:.94,roof:1.35,front:-.83,rear:1.18,rf:-.39,rr:.72,rw:.70,nose:.82,hood:.93,tail:.96,doors:2},
jeep:{w:1.94,l:4.65,wheel:.43,axles:[-1.46,1.41],belt:1.31,roof:1.88,front:-.89,rear:1.98,rf:-.64,rr:1.91,rw:.81,nose:1.24,hood:1.32,tail:1.28,doors:4},
rover:{w:1.99,l:4.76,wheel:.42,axles:[-1.48,1.43],belt:1.34,roof:1.96,front:-1.03,rear:2.03,rf:-.65,rr:1.93,rw:.84,nose:1.15,hood:1.30,tail:1.35,doors:4},
gtr:{w:1.90,l:4.71,wheel:.355,axles:[-1.40,1.39],belt:1.00,roof:1.37,front:-.85,rear:1.25,rf:-.31,rr:.70,rw:.73,nose:.73,hood:.89,tail:1.02,doors:2},
benz:{w:1.94,l:4.55,wheel:.36,axles:[-1.4,1.22],belt:.94,roof:1.28,front:-.34,rear:1.36,rf:.06,rr:.85,rw:.70,nose:.64,hood:.82,tail:.94,doors:2},
rally:{w:1.75,l:4.42,wheel:.34,axles:[-1.30,1.29],belt:1.01,roof:1.44,front:-.93,rear:1.21,rf:-.44,rr:.76,rw:.70,nose:.81,hood:.97,tail:1.01,doors:4},
drag:{w:1.98,l:5.14,wheel:.39,axles:[-1.61,1.35],belt:.98,roof:1.36,front:-.72,rear:1.45,rf:-.28,rr:.80,rw:.75,nose:.78,hood:.91,tail:1.00,doors:2},
pickup:{w:2.14,l:5.75,wheel:.46,axles:[-1.84,1.73],belt:1.42,roof:2.04,front:-1.32,rear:.85,rf:-.96,rr:.77,rw:.88,nose:1.26,hood:1.41,tail:1.40,doors:4},
truck:{w:2.46,l:6.85,wheel:.51,axles:[-2.02,1.42,2.62],belt:1.25,roof:3.64,front:-3.10,rear:-.82,rf:-2.94,rr:-.88,rw:1.12,nose:1.2,hood:1.3,tail:.8,doors:2},
legend:{w:2.06,l:4.86,wheel:.37,axles:[-1.44,1.43],belt:.97,roof:1.33,front:-.91,rear:1.22,rf:-.32,rr:.71,rw:.73,nose:.58,hood:.86,tail:1.05,doors:2}
};


Object.assign(designs,{
civic:{...designs.golf,w:1.88,l:4.56,front:-.92,rear:1.82,rf:-.32,rr:1.1,roof:1.43,axles:[-1.35,1.34]},
accord:{...designs['301'],w:1.87,l:4.90,front:-1.03,rear:1.49,rf:-.44,rr:.94,roof:1.45,axles:[-1.48,1.42],wheel:.35},
s2000:{...designs.benz,w:1.75,l:4.13,front:-.47,rear:1.04,rf:-.09,rr:.54,roof:1.28,axles:[-1.22,1.17],wheel:.32},
model3:{...designs['301'],w:1.85,l:4.72,front:-1.0,rear:1.50,rf:-.46,rr:.88,roof:1.44,wheel:.35,axles:[-1.42,1.40]},
models:{...designs['301'],w:1.98,l:4.98,front:-1.08,rear:1.74,rf:-.47,rr:1.01,roof:1.43,wheel:.37,axles:[-1.53,1.47]},
brz:{...designs.gtr,w:1.78,l:4.27,front:-.71,rear:1.24,rf:-.23,rr:.72,roof:1.31,axles:[-1.24,1.27],wheel:.33},
forester:{...designs.rover,w:1.83,l:4.64,front:-1.07,rear:1.85,rf:-.63,rr:1.53,roof:1.77,belt:1.15,hood:1.08,nose:.96,tail:1.15,wheel:.37,axles:[-1.37,1.31]},
cherokee:{...designs.rover,w:1.98,l:4.91,front:-1.08,rear:1.96,rf:-.57,rr:1.50,roof:1.80,belt:1.22,hood:1.16,nose:1.02,tail:1.21,wheel:.40,axles:[-1.48,1.45]},
gladiator:{...designs.pickup,w:1.94,l:5.54,front:-1.38,rear:.59,rf:-1.18,rr:.54,roof:1.91,belt:1.34,hood:1.34,nose:1.25,tail:1.33,rw:.81,wheel:.43,axles:[-1.71,1.75]},
mustang:{...designs.gtr,w:1.91,l:4.79,front:-.62,rear:1.44,rf:-.12,rr:.75,roof:1.37,hood:.89,nose:.76,axles:[-1.45,1.36],wheel:.36},
focus:{...designs.golf,w:1.83,l:4.39,front:-.92,rear:1.76,rf:-.40,rr:1.33,roof:1.48,axles:[-1.33,1.30],wheel:.35},
bronco:{...designs.jeep,w:2.01,l:4.81,front:-1.00,rear:2.02,rf:-.71,rr:1.94,roof:1.93,wheel:.44,axles:[-1.48,1.46]}
});

export function createVehicle(c,color,upgrades={}){
const d=designs[c.id]||designs['301'],g=new T.Group();g.name=c.name;g.userData={wheels:[],parts:[],modelVersion:4,bodyType:c.type};
const painted=new T.Group(),detail=new T.Group();g.add(painted,detail);g.userData.parts.push(painted);
const paint=new T.MeshPhysicalMaterial({color,metalness:.28,roughness:.36,clearcoat:.4,clearcoatRoughness:.32,flatShading:true});
const mat=(color,metalness=0,roughness=.7)=>new T.MeshStandardMaterial({color,metalness,roughness,flatShading:true});
const black=mat('#151b1c'),trim=mat('#303939',.15,.48),rubber=mat('#15191b',0,.94),chrome=mat('#adb5b8',.72,.29),rimMat=mat(c.id==='rally'?'#b19a56':'#bac1c2',.65,.35),glass=new T.MeshPhysicalMaterial({color:'#223942',metalness:.28,roughness:.17,clearcoat:.7,side:T.DoubleSide,flatShading:true}),lamp=new T.MeshStandardMaterial({color:'#ede8cf',emissive:'#d0d9ce',emissiveIntensity:.35,roughness:.25}),red=new T.MeshStandardMaterial({color:'#bf2728',emissive:'#9b1010',emissiveIntensity:.3,roughness:.3});
function mesh(geo,m=paint,parent=painted){const o=new T.Mesh(geo,m);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function box(w,h,l,x,y,z,m=paint,parent=painted){const o=mesh(new T.BoxGeometry(w,h,l),m,parent);o.position.set(x,y,z);return o;}
function poly(points,m=paint,parent=painted){const geo=new T.BufferGeometry(),vertices=[];for(let i=1;i<points.length-1;i++)vertices.push(...points[0],...points[i],...points[i+1]);geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.computeVertexNormals();return mesh(geo,m,parent);}
function doublePoly(points,m=paint,parent=painted){poly(points,m,parent);poly([...points].reverse(),m,parent);}
function cylinder(r,depth,x,y,z,m=chrome,parent=detail,axis='z',segments=16){const o=mesh(new T.CylinderGeometry(r,r,depth,segments),m,parent);o.position.set(x,y,z);if(axis==='z')o.rotation.x=Math.PI/2;else if(axis==='x')o.rotation.z=Math.PI/2;return o;}
function rod(a,b,r,m=chrome,parent=detail){const v1=new T.Vector3(...a),v2=new T.Vector3(...b),v=v2.clone().sub(v1),o=mesh(new T.CylinderGeometry(r,r,v.length(),8),m,parent);o.position.copy(v1.add(v2).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());return o;}
function line(points,m=black,r=.007,parent=detail){for(let i=0;i<points.length-1;i++)rod(points[i],points[i+1],r,m,parent);}
function consolidate(parent){
parent.updateWorldMatrix(true,true);const inverse=parent.matrixWorld.clone().invert(),buckets=new Map(),old=[];
parent.traverse(o=>{if(!o.isMesh)return;old.push(o);const geometry=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geometry.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld));const key=o.material.uuid;let entry=buckets.get(key);if(!entry){entry={material:o.material,p:[],n:[],uv:[]};buckets.set(key,entry)}const pos=geometry.attributes.position,normal=geometry.attributes.normal,uv=geometry.attributes.uv;for(let i=0;i<pos.count;i++){entry.p.push(pos.getX(i),pos.getY(i),pos.getZ(i));entry.n.push(normal.getX(i),normal.getY(i),normal.getZ(i));entry.uv.push(uv?uv.getX(i):0,uv?uv.getY(i):0)}geometry.dispose()});
parent.clear();old.forEach(o=>o.geometry.dispose());for(const b of buckets.values()){const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(b.p,3));geo.setAttribute('normal',new T.Float32BufferAttribute(b.n,3));geo.setAttribute('uv',new T.Float32BufferAttribute(b.uv,2));mesh(geo,b.material,parent);}
}
function finish(){[painted,detail,g.userData.hood,g.userData.engine,...g.userData.wheels].forEach(consolidate);g.userData.parts=[painted];return g;}
const front=-d.l/2,back=d.l/2,bottom=d.wheel*.73,fw=d.w*.455,sw=d.w/2;
function shoulder(z){if(z<d.front)return T.MathUtils.lerp(d.nose,d.hood,(z-front)/(d.front-front));if(z>d.rear)return T.MathUtils.lerp(d.belt,d.tail,(z-d.rear)/(back-d.rear));return d.belt;}
function width(z){const end=Math.max(0,(Math.abs(z)-(d.l/2-.6))/.6);return sw*(1-end*.10);}
function archY(z){let y=bottom;for(const axle of d.axles){const t=Math.abs(z-axle),r=d.wheel*1.15;if(t<r)y=Math.max(y,d.wheel+Math.sqrt(r*r-t*t));}return y;}
function body(){const zs=new Set([front,front+.18,d.front,d.rear,back-.18,back]);for(const axle of d.axles){const r=d.wheel*1.15;for(let i=0;i<=10;i++)zs.add(axle+Math.cos(i*Math.PI/10)*r);}const cuts=[...zs].filter(z=>z>=front&&z<=back).sort((a,b)=>a-b);
for(let i=0;i<cuts.length-1;i++){const z1=cuts[i],z2=cuts[i+1],h1=shoulder(z1),h2=shoulder(z2),w1=width(z1),w2=width(z2);for(const sign of [-1,1]){const low1=archY(z1),low2=archY(z2);doublePoly([[sign*w1,Math.max(low1,h1-.17),z1],[sign*w2,Math.max(low2,h2-.17),z2],[sign*w2*.93,h2,z2],[sign*w1*.93,h1,z1]]);if(low1<h1-.16||low2<h2-.16)doublePoly([[sign*w1*.96,low1,z1],[sign*w2*.96,low2,z2],[sign*w2,Math.max(low2,h2-.17),z2],[sign*w1,Math.max(low1,h1-.17),z1]]);}const hoodZone=z2<=d.front+.001,bedZone=c.type==='pickup'&&z1>d.rear-.001;if(!hoodZone&&!bedZone)doublePoly([[-w1*.93,h1,z1],[w1*.93,h1,z1],[w2*.93,h2,z2],[-w2*.93,h2,z2]]);}
doublePoly([[-fw,bottom,front],[fw,bottom,front],[fw*.99,d.nose,front],[-fw*.99,d.nose,front]]);doublePoly([[fw,bottom,back],[-fw,bottom,back],[-fw*.99,d.tail,back],[fw*.99,d.tail,back]]);
box(d.w*.65,.09,d.l-.65,0,bottom-.06,0,black,detail);
for(const sign of [-1,1]){box(.10,.12,d.axles.at(-1)-d.axles[0]-d.wheel*2,sign*(sw-.04),bottom+.01,(d.axles.at(-1)+d.axles[0])/2,trim,detail);for(const axle of d.axles){const rr=d.wheel*1.15;for(let i=0;i<10;i++){const a=i*Math.PI/10,b=(i+1)*Math.PI/10,z1=axle+Math.cos(a)*rr,z2=axle+Math.cos(b)*rr,y1=d.wheel+Math.sin(a)*rr,y2=d.wheel+Math.sin(b)*rr;doublePoly([[sign*(sw+.035),y1,z1],[sign*(sw+.035),y2,z2],[sign*(sw+.015),y2+.065,z2],[sign*(sw+.015),y1+.065,z1]],['jeep','rover','pickup','bronco','gladiator','forester','cherokee'].includes(c.id)?trim:paint,['jeep','rover','pickup','bronco','gladiator','forester','cherokee'].includes(c.id)?detail:painted);}}}}
function cabin(){const cabinGroup=new T.Group();painted.add(cabinGroup);const roofMat=['jeep','rover','bronco','gladiator'].includes(c.id)?trim:paint;
const bf=d.front,br=d.rear,rf=d.rf,rr=d.rr,by=d.belt,ry=d.roof,bw=d.w*.455,rw=d.rw;
doublePoly([[-rw,ry,rf],[rw,ry,rf],[rw,ry,rr],[-rw,ry,rr]],roofMat,cabinGroup);
for(const sign of [-1,1]){doublePoly([[sign*bw,by,bf],[sign*rw,ry,rf],[sign*rw,ry,rr],[sign*bw,by,br]],paint,cabinGroup);
const middle=bf+(br-bf)*(d.doors===4?.51:.65),roofMiddle=rf+(rr-rf)*(d.doors===4?.48:.66);
const lowerX=sign*(bw+.012),upperX=sign*(rw+.012);
doublePoly([[lowerX,by+.055,bf+.10],[upperX,ry-.07,rf+.09],[upperX,ry-.07,roofMiddle-.045],[lowerX,by+.055,middle-.05]],glass,detail);
doublePoly([[lowerX,by+.055,middle+.05],[upperX,ry-.07,roofMiddle+.045],[upperX,ry-.07,rr-.11],[lowerX,by+.055,br-.12]],glass,detail);
line([[lowerX,by+.025,bf+.07],[lowerX,by+.025,br-.1]],chrome,.009);rod([sign*bw,by+.03,middle],[sign*rw,ry-.015,roofMiddle],.026,trim);
const mirror=box(.18,.13,.25,sign*(sw+.10),by+.11,bf+.22,paint);box(.015,.092,.18,sign*(sw+.196),by+.12,bf+.24,chrome,detail);rod([sign*bw,by,bf+.28],[sign*(sw+.1),by+.1,bf+.28],.025,trim);
const doorRear=d.doors===4?middle:br-.12;for(const z of d.doors===4?[middle,br-.15]:[doorRear]){line([[sign*(sw*.96+.015),bottom+.17,z],[sign*(sw+.015),by-.18,z],[sign*(bw+.015),by+.02,z]],black,.007);box(.02,.035,.18,sign*(sw+.015),by-.12,z-.18,chrome,detail);}
}
doublePoly([[-bw,by,bf],[-rw,ry,rf],[rw,ry,rf],[bw,by,bf]],paint,cabinGroup);
doublePoly([[-bw*.91,by+.065,bf-.012],[-rw*.94,ry-.07,rf-.016],[rw*.94,ry-.07,rf-.016],[bw*.91,by+.065,bf-.012]],glass,detail);
doublePoly([[bw,by,br],[rw,ry,rr],[-rw,ry,rr],[-bw,by,br]],paint,cabinGroup);
doublePoly([[bw*.88,by+.06,br+.012],[rw*.9,ry-.075,rr+.016],[-rw*.9,ry-.075,rr+.016],[-bw*.88,by+.06,br+.012]],glass,detail);
for(const x of [-.32,.32])rod([x,by+.07,bf-.025],[x+.20,by+.105,bf+.03],.009,black);
}
function hoodAndEngine(){const pivot=new T.Group();pivot.position.set(0,d.hood,d.front);g.add(pivot);g.userData.hood=pivot;const len=d.front-front,ww=d.w*.443;
const ys=d.nose-d.hood;doublePoly([[-ww,0,0],[ww,0,0],[ww*.94,ys,-len],[-ww*.94,ys,-len]],paint,pivot);
for(const sign of [-1,1]){doublePoly([[sign*ww,0,0],[sign*ww*.94,ys,-len],[sign*ww*.67,ys+.026,-len*.94],[sign*ww*.69,.025,-.09]],paint,pivot);line([[sign*ww,0,0],[sign*ww*.94,ys,-len]],black,.006,pivot);}
const engine=new T.Group();engine.position.set(0,d.hood-.20,(front+d.front)/2);g.add(engine);g.userData.engine=engine;
box(d.w*.73,.035,Math.max(.25,len-.12),0,-.06,0,black,engine);if(c.electric){box(d.w*.55,.12,len*.65,0,-.015,0,trim,engine);return;}box(.63,.23,Math.min(.72,len*.65),0,.055,0,chrome,engine);box(.5,.08,.45,0,.205,0,trim,engine);for(const sign of [-1,1])for(let i=0;i<4;i++)cylinder(.065,.23,sign*.26,.13,-.23+i*.14,chrome,engine,'x',8);
box(.2,.17,.3,-.48,.035,.14,black,engine);box(.16,.17,.14,.49,.035,.13,mat('#ddd8bd'),engine);rod([-.38,.1,-.18],[-.53,.13,-.43],.055,trim,engine);if(upgrades.turbo)cylinder(.14,.17,.39,.13,-.2,chrome,engine,'x',10);
}
function wheels(){for(const z of d.axles)for(const sign of [-1,1]){const wh=new T.Group(),r=d.wheel,wide=c.id==='drag'&&z>0?.39:c.id==='truck'?.34:.25;wh.position.set(sign*(sw-.035),r,z);g.add(wh);g.userData.wheels.push(wh);
const tire=mesh(new T.TorusGeometry(r*.78,r*.22,6,20),rubber,wh);tire.rotation.y=Math.PI/2;tire.scale.z=wide/(r*.44);
cylinder(r*.60,wide+.012,0,0,0,rimMat,wh,'x',16);cylinder(r*.51,wide+.025,0,0,0,black,wh,'x',16);cylinder(r*.39,wide+.03,0,0,0,mat('#5d6364',.6,.6),wh,'x',16);
const spokeX=sign*(wide/2+.025);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;rod([spokeX,Math.sin(a)*r*.13,Math.cos(a)*r*.13],[spokeX,Math.sin(a+.13)*r*.53,Math.cos(a+.13)*r*.53],r*.045,rimMat,wh);rod([spokeX,Math.sin(a)*r*.13,Math.cos(a)*r*.13],[spokeX,Math.sin(a-.10)*r*.53,Math.cos(a-.10)*r*.53],r*.025,rimMat,wh);}
cylinder(r*.13,wide+.065,0,0,0,chrome,wh,'x',10);box(.045,r*.30,.09,sign*(wide/2+.012),r*.18,r*.22,mat('#b3422d'),wh);
}}
function panel(w,h,x,y,z,m=black){return box(w,h,.027,x,y,z,m,detail)}
function frontGrille(w,h,y){panel(w,h,0,y,front-.021,black);for(let i=0;i<4;i++)panel(w-.055,.012,0,y-h*.35+i*h*.23,front-.043,trim);}
function headlight(sign,shape='angular'){const x=sign*d.w*.34,y=d.nose-.13,z=front-.048;if(shape==='round'){cylinder(.17,.045,x,y,z,chrome);cylinder(.13,.052,x,y,z-.009,lamp);return;}doublePoly([[x-sign*.25,y-.07,z],[x+sign*.22,y-.04,z+.025],[x+sign*.25,y+.095,z+.06],[x-sign*.19,y+.065,z]],black,detail);doublePoly([[x-sign*.21,y-.043,z-.006],[x+sign*.18,y-.025,z+.013],[x+sign*.2,y+.06,z+.035],[x-sign*.17,y+.042,z-.006]],lamp,detail);}
function spoiler(high=.30,breadth=d.w*.94){for(const sign of [-1,1])box(.055,high,.16,sign*d.w*.31,d.tail+high/2,back-.28,trim,detail);box(breadth,.065,.33,0,d.tail+high,back-.28,paint);for(const sign of [-1,1])box(.035,.18,.40,sign*breadth/2,d.tail+high+.03,back-.28,trim,detail);}
function rear(){for(const sign of [-1,1]){panel(.48,.13,sign*d.w*.32,d.tail-.16,back+.025,red);if(!c.electric){cylinder(.065,.17,sign*d.w*.34,bottom+.025,back+.055,chrome);cylinder(.046,.18,sign*d.w*.34,bottom+.025,back+.064,black);}}panel(.34,.12,0,d.tail-.31,back+.033,mat('#d5d6c9'));panel(.36,.11,0,bottom+.11,front-.06,mat('#cbd0cd'));box(d.w*.94,.09,.14,0,bottom,front-.035,trim,detail);box(d.w*.92,.10,.13,0,bottom,back+.025,trim,detail);}
if(c.id==='truck'){
const ch=box(1.04,.22,5.8,0,.78,.35,trim,detail);for(const sign of [-1,1]){box(.16,.23,5.8,sign*.48,.81,.35,black,detail);box(.52,.50,1.04,sign*.78,.70,.04,chrome,detail);for(let i=0;i<3;i++)box(.36,.07,.7,sign*1.12,.42+i*.2,-2.15,chrome,detail);box(.25,.17,2.25,sign*1.08,1.11,2.0,trim,detail);}
box(2.34,1.05,2.25,0,1.54,-2.0,paint);const cab=box(2.33,1.67,2.24,0,2.90,-2.0,paint);g.userData.parts.push(cab);panel(2.02,.78,0,2.55,-3.135,glass);panel(2.06,.12,0,3.02,-3.16,trim);for(const sign of [-1,1]){box(.028,.76,1.35,sign*1.18,2.54,-2.18,glass,detail);box(.14,.4,.3,sign*1.39,2.39,-2.8,black,detail);rod([sign*1.15,2.71,-2.8],[sign*1.39,2.62,-2.8],.03,chrome);box(.055,.13,.3,sign*1.18,1.82,-1.60,black,detail);panel(.56,.16,sign*.79,1.02,-3.15,lamp);panel(.46,.10,sign*.79,.77,-3.16,lamp);}
panel(1.64,.88,0,1.41,-3.15,black);for(let i=0;i<6;i++)panel(1.53,.026,0,1.09+i*.12,-3.17,chrome);rod([-.67,1.06,-3.19],[.67,1.75,-3.19],.017,chrome);cylinder(.11,.025,0,1.40,-3.21,chrome);cylinder(.075,.032,0,1.40,-3.23,black);
box(2.38,.25,.3,0,.64,-3.13,trim,detail);box(2.10,.24,1.9,0,3.84,-1.91,paint);cylinder(.48,.11,0,1.0,1.61,black,detail,'y');box(1.9,.12,.28,0,.66,back,trim,detail);for(const sign of [-1,1])panel(.32,.13,sign*.76,.65,back+.15,red);
const pivot=new T.Group();pivot.position.set(0,1.1,-3.12);g.add(pivot);g.updateMatrixWorld(true);for(const parent of [painted,detail])for(const child of [...parent.children]){const bb=new T.Box3().setFromObject(child);if(bb.min.y>1.05&&bb.max.z<-.75)pivot.attach(child);}g.userData.hood=pivot;const engine=new T.Group();g.add(engine);g.userData.engine=engine;box(.8,.4,1,0,1.14,-1.8,chrome,engine);wheels();return finish();
}
body();if(c.id==='s2000'){doublePoly([[-.72,d.belt,d.front],[-.65,d.roof,d.rf],[.65,d.roof,d.rf],[.72,d.belt,d.front]],glass,detail);for(const sign of [-1,1]){rod([sign*.72,d.belt,d.front],[sign*.65,d.roof,d.rf],.028,chrome);box(.43,.10,.49,sign*.40,d.belt+.02,.37,black,detail);box(.40,.38,.13,sign*.40,d.belt+.21,.63,black,detail);cylinder(.13,.05,sign*.4,d.belt+.42,.68,trim);}rod([-.65,d.roof,d.rf],[.65,d.roof,d.rf],.025,chrome);}else cabin();hoodAndEngine();wheels();rear();
if(c.id==='301'){frontGrille(.92,.23,d.nose-.16);for(const sign of [-1,1]){headlight(sign);panel(.21,.095,sign*.62,bottom+.1,front-.07,chrome);}line([[-.45,d.nose-.04,front-.05],[0,d.nose-.025,front-.05],[.45,d.nose-.04,front-.05]],chrome,.014);box(.055,.07,.025,0,d.nose-.15,front-.061,chrome,detail);}
if(c.id==='golf'){frontGrille(1.1,.14,d.nose-.10);panel(1.56,.022,0,d.nose-.04,front-.061,red);for(const sign of [-1,1])headlight(sign);cylinder(.075,.035,0,d.nose-.11,front-.07,chrome);cylinder(.045,.04,0,d.nose-.11,front-.08,black);panel(1.12,.17,0,bottom+.12,front-.07,black);}
if(c.id==='bmw'){frontGrille(1.5,.23,d.nose-.12);for(const sign of [-1,1]){for(const x of [.47,.71]){cylinder(.12,.045,sign*x,d.nose-.10,front-.057,chrome);cylinder(.091,.054,sign*x,d.nose-.1,front-.07,lamp);}panel(.15,.22,sign*.10,d.nose-.12,front-.078,chrome);panel(.105,.17,sign*.10,d.nose-.12,front-.094,black);}panel(1.04,.15,0,bottom+.11,front-.06,black);spoiler(.13);}
if(c.id==='jeep'){for(let i=0;i<7;i++){panel(.079,.35,-.36+i*.12,d.nose-.23,front-.045,black);panel(.032,.28,-.36+i*.12,d.nose-.23,front-.063,trim);}for(const sign of [-1,1]){headlight(sign,'round');box(.33,.12,.55,sign*(sw-.04),d.wheel+.56,d.axles[0]-.16,trim,detail);box(.12,.11,1.9,sign*(sw+.1),.43,.04,trim,detail);for(const z of [-.34,.95])box(.04,.045,.10,sign*(sw+.02),d.belt-.24,z,chrome,detail);}cylinder(.41,.25,0,1.07,back+.19,rubber);cylinder(.22,.28,0,1.07,back+.21,rimMat);box(1.70,.18,.34,0,.54,front-.16,black,detail);}
if(c.id==='rover'){frontGrille(.99,.19,d.nose-.20);for(const sign of [-1,1]){panel(.4,.31,sign*.69,d.nose-.12,front-.045,black);cylinder(.12,.045,sign*.69,d.nose-.12,front-.065,lamp);cylinder(.082,.05,sign*.69,d.nose-.12,front-.073,black);box(.08,.06,2.38,sign*.69,d.roof+.08,.55,trim,detail);box(.15,.10,2.2,sign*(sw+.02),.46,.10,trim,detail);}panel(1.2,.17,0,bottom+.19,front-.045,chrome);cylinder(.41,.22,0,1.08,back+.16,rubber);cylinder(.29,.245,0,1.08,back+.17,trim);}
if(c.id==='gtr'||c.id==='legend'){frontGrille(1.02,.37,d.nose-.15);for(const sign of [-1,1]){headlight(sign);panel(.26,.18,sign*.70,bottom+.13,front-.07,black);for(const x of [.49,.77]){cylinder(.123,.04,sign*x,d.tail-.16,back+.05,red);cylinder(.069,.045,sign*x,d.tail-.16,back+.06,black);}box(.025,.055,.5,sign*(sw+.02),d.belt-.14,-.89,black,detail);}spoiler(c.id==='legend'?.48:.28,c.id==='legend'?2.12:1.82);if(c.id==='legend'){box(2.12,.055,.43,0,bottom-.025,front-.10,trim,detail);for(const sign of [-1,1]){box(.20,.075,2.3,sign*sw,bottom-.02,0,trim,detail);doublePoly([[sign*sw,.48,front+.19],[sign*(sw+.17),.40,front-.11],[sign*sw,.61,front+.32]],trim,detail);}for(let x=-.6;x<=.6;x+=.2)box(.03,.17,.4,x,bottom-.035,back-.05,black,detail);}}
if(c.id==='benz'){frontGrille(1.06,.35,d.nose-.12);for(let i=0;i<11;i++)panel(.018,.29,-.45+i*.09,d.nose-.12,front-.052,chrome);cylinder(.11,.025,0,d.nose-.11,front-.075,chrome);for(let i=0;i<3;i++){let a=i*2*Math.PI/3;rod([0,d.nose-.11,front-.094],[Math.sin(a)*.08,d.nose-.11+Math.cos(a)*.08,front-.094],.009,chrome);}for(const sign of [-1,1]){headlight(sign);box(.025,.12,.40,sign*(sw+.014),d.belt-.14,-.65,black,detail);for(let z=-.80;z<-.45;z+=.12)box(.035,.13,.024,sign*(sw+.03),d.belt-.14,z,chrome,detail);} }
if(c.id==='rally'){frontGrille(.66,.2,d.nose-.12);for(const sign of [-1,1]){headlight(sign);for(const x of [.25,.60]){cylinder(.13,.10,sign*x,d.nose+.08,front-.15,black);cylinder(.105,.115,sign*x,d.nose+.08,front-.175,lamp);}box(.07,.20,.33,sign*(sw-.04),.20,d.axles[1]+.36,black,detail);}box(.53,.13,.45,0,.11,-.51,paint,g.userData.hood);box(.46,.08,.018,0,.10,-.75,black,g.userData.hood);spoiler(.42);}
if(c.id==='drag'){frontGrille(1.65,.25,d.nose-.13);for(const sign of [-1,1]){panel(.42,.18,sign*.60,d.nose-.13,front-.054,trim);rod([sign*.55,.22,back-.05],[sign*.55,.15,back+.7],.025,chrome);cylinder(.085,.08,sign*.55,.13,back+.7,rubber,detail,'x',12);}box(.63,.26,.68,0,.12,-.7,chrome,g.userData.hood);for(const x of [-.20,0,.20]){cylinder(.095,.14,x,.35,-.97,chrome,g.userData.hood);cylinder(.07,.15,x,.35,-.99,black,g.userData.hood);}}
if(c.id==='pickup'){frontGrille(1.40,.39,d.nose-.17);for(const sign of [-1,1]){panel(.26,.32,sign*.84,d.nose-.15,front-.045,black);line([[sign*.73,d.nose+.02,front-.07],[sign*.96,d.nose+.02,front-.07],[sign*.96,d.nose-.3,front-.07],[sign*.76,d.nose-.3,front-.07]],lamp,.024);box(.16,.11,2.15,sign*(sw+.05),.41,-.25,trim,detail);}for(const x of [-.29,0,.29])panel(.042,.025,x,d.nose+.035,front-.07,mat('#df923d'));const bedFront=d.rear+.02,bedBack=back-.06;box(d.w*.86,.075,bedBack-bedFront,0,d.belt-.30,(bedBack+bedFront)/2,black,detail);for(const sign of [-1,1]){box(.10,.35,bedBack-bedFront,sign*(sw-.05),d.belt-.12,(bedBack+bedFront)/2,paint);box(.11,.035,bedBack-bedFront,sign*(sw-.04),d.belt+.07,(bedBack+bedFront)/2,trim,detail);}box(d.w*.94,.37,.10,0,d.belt-.11,back-.02,paint);box(d.w*.86,.03,.14,0,d.belt+.085,back-.02,trim,detail);for(let x=-.75;x<=.75;x+=.15)box(.027,.025,bedBack-bedFront-.1,x,d.belt-.25,(bedBack+bedFront)/2,trim,detail);}

if(['civic','accord','s2000'].includes(c.id)){
frontGrille(c.id==='s2000'?.91:1.07,c.id==='s2000'?.24:.15,d.nose-.16);for(const sign of [-1,1])headlight(sign);
for(const sign of [-1,1])rod([sign*.033,d.nose-.18,front-.077],[sign*.041,d.nose-.10,front-.077],.009,chrome);rod([-.036,d.nose-.14,front-.077],[.036,d.nose-.14,front-.077],.009,chrome);
if(c.id==='civic'){spoiler(.41);box(d.w*.98,.055,.26,0,bottom-.025,front-.05,trim,detail);for(const sign of [-1,1])panel(.25,.19,sign*.69,bottom+.12,front-.065,black);}
if(c.id==='accord')panel(1.42,.036,0,d.nose-.075,front-.065,chrome);
}
if(c.electric){for(const sign of [-1,1])headlight(sign);panel(.98,.065,0,bottom+.085,front-.05,black);panel(.095,.012,0,d.nose+.01,front-.045,chrome);panel(.012,.055,0,d.nose-.01,front-.045,chrome);doublePoly([[-d.rw*.91,d.roof+.008,d.rf+.06],[d.rw*.91,d.roof+.008,d.rf+.06],[d.rw*.91,d.roof+.008,d.rr-.07],[-d.rw*.91,d.roof+.008,d.rr-.07]],glass,detail);box(d.w*.75,.07,d.axles[1]-d.axles[0],0,bottom-.10,0,trim,detail);for(const sign of [-1,1])panel(.39,.025,sign*.62,d.tail-.1,back+.041,red);}
if(['brz','forester'].includes(c.id)){frontGrille(c.id==='brz'?.98:.81,.24,d.nose-.19);for(const sign of [-1,1])headlight(sign);panel(.11,.055,0,d.nose-.13,front-.066,mat('#275291'));if(c.id==='forester')for(const sign of [-1,1])box(.055,.055,2.14,sign*.65,d.roof+.055,.40,trim,detail);}
if(['cherokee','gladiator'].includes(c.id)){for(let i=0;i<7;i++){panel(.084,.24,-.36+i*.12,d.nose-.16,front-.05,chrome);panel(.053,.20,-.36+i*.12,d.nose-.16,front-.067,black);}for(const sign of [-1,1])headlight(sign,c.id==='gladiator'?'round':'angular');}
if(c.id==='gladiator'){const bf=d.rear+.03,bb=back-.09;box(d.w*.84,.06,bb-bf,0,d.belt-.30,(bb+bf)/2,black,detail);for(const sign of [-1,1]){box(.12,.35,bb-bf,sign*(sw-.06),d.belt-.12,(bb+bf)/2,paint);box(.13,.035,bb-bf,sign*(sw-.055),d.belt+.06,(bb+bf)/2,trim,detail);}box(d.w*.94,.36,.10,0,d.belt-.11,back-.03,paint);}
if(c.id==='mustang'){frontGrille(1.07,.26,d.nose-.14);for(const sign of [-1,1]){headlight(sign);for(let i=0;i<3;i++){panel(.044,.19,sign*(.48+i*.10),d.tail-.17,back+.046,red);panel(.016,.055,sign*(.56+i*.055),d.nose-.14,front-.07,lamp);}}}
if(c.id==='focus'){frontGrille(1.08,.35,d.nose-.13);for(const sign of [-1,1])headlight(sign);spoiler(.25);panel(.12,.055,.32,d.nose-.17,front-.065,mat('#448cb8'));}
if(c.id==='bronco'){frontGrille(1.57,.22,d.nose-.15);for(const sign of [-1,1]){headlight(sign,'round');panel(.21,.028,sign*.47,d.nose-.13,front-.09,lamp);}cylinder(.43,.25,0,1.10,back+.19,rubber);cylinder(.24,.27,0,1.10,back+.21,rimMat);for(const sign of [-1,1])box(.12,.10,2.0,sign*(sw+.01),.42,.04,trim,detail);}

if(upgrades.spoiler&&!['gtr','legend','bmw','rally','civic','focus'].includes(c.id))spoiler(.25);return finish();
}
