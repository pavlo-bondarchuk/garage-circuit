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


Object.assign(designs,{
scania:{...designs.truck,roof:3.85},man:{...designs.truck,roof:3.55},actros:{...designs.truck,roof:3.78},daf:{...designs.truck,roof:3.9},iveco:{...designs.truck,roof:3.65},
evo:{...designs.rally,w:1.84,l:4.49,roof:1.44,front:-.93,rear:1.32,rr:.88},
yaris:{...designs.golf,w:1.86,l:4.0,roof:1.45,front:-.76,rear:1.56,rf:-.30,rr:1.20,doors:2,axles:[-1.25,1.18]},
quattro:{...designs.bmw,w:1.88,l:4.16,roof:1.34,front:-.65,rear:1.36,rf:-.27,rr:.94,axles:[-1.28,1.17]},
fiesta:{...designs.golf,w:1.84,l:3.99,front:-.81,rear:1.6,rf:-.34,rr:1.19,roof:1.44,doors:2,axles:[-1.22,1.21]},
'205':{...designs.golf,w:1.80,l:3.72,front:-.65,rear:1.51,rf:-.32,rr:1.31,roof:1.37,doors:2,axles:[-1.10,1.10]},
supra:{...designs.gtr,w:1.85,l:4.52,front:-.62,rear:1.34,rf:-.18,rr:.79,roof:1.29,axles:[-1.32,1.27]},
porsche:{...designs.gtr,w:1.84,l:4.50,front:-.99,rear:1.64,rf:-.42,rr:.81,roof:1.30,hood:.79,nose:.62,axles:[-1.25,1.22]},
rx7:{...designs.benz,w:1.78,l:4.28,front:-.70,rear:1.27,rf:-.25,rr:.73,roof:1.23,hood:.81,nose:.66,axles:[-1.28,1.17]},
silvia:{...designs.gtr,w:1.76,l:4.44,front:-.83,rear:1.26,rf:-.32,rr:.75,roof:1.29,axles:[-1.28,1.24]},
'350z':{...designs.gtr,w:1.83,l:4.31,front:-.69,rear:1.47,rf:-.22,rr:.78,roof:1.32,axles:[-1.27,1.28]},
rs6:{...designs.accord,w:1.95,l:4.99,rear:2.15,rr:1.82,roof:1.49,doors:4},
g63:{...designs.jeep,w:1.98,l:4.82,roof:1.97,front:-1.00,rear:2.03,rf:-.75,rr:1.95,axles:[-1.44,1.41]},
m5:{...designs.accord,w:1.93,l:4.96,roof:1.46,front:-1.04,rear:1.40,rr:.83,wheel:.37},
camaro:{...designs.mustang,w:1.92,l:4.78,front:-.53,rear:1.43,rf:-.03,rr:.91,roof:1.32,rw:.73},
beetle:{...designs.golf,w:1.78,l:4.1,front:-1.14,rear:1.72,rf:-.45,rr:.80,roof:1.52,hood:.81,nose:.68,doors:2,axles:[-1.21,1.20]}
});

Object.assign(designs,{
"volvofh12":{...designs["truck"],"roof":3.5},
"scaniat":{...designs["scania"],"l":7.5,"roof":3.65,"axles":[-2.4, 1.6, 2.7]},
"scaniastream":{...designs["scania"],"roof":4.0},
"mantgxv8":{...designs["man"],"roof":3.8},
"actrosmp3":{...designs["actros"],"roof":3.55},
"dafxf":{...designs["daf"],"roof":3.75},
"ivecostralis":{...designs["iveco"],"roof":3.55},
"renaultt":{...designs["truck"],"roof":3.96},
"kenworth":{...designs["truck"],"l":7.6,"roof":3.8,"axles":[-2.45, 1.9, 2.95]},
"peterbilt":{...designs["truck"],"l":7.6,"roof":3.8,"axles":[-2.45, 1.9, 2.95]},
"supradrag":{...designs["supra"],},
"camarodrag":{...designs["camaro"],},
"mustangdrag":{...designs["mustang"],},
"gtrdrag":{...designs["gtr"],},
"rx7drag":{...designs["rx7"],},
"silviadrag":{...designs["silvia"],},
"challengerdrag":{...designs["drag"],},
"chevelledrag":{...designs["drag"],},
"civicdrag":{...designs["civic"],},
"corvettedrag":{...designs["benz"],},
"lfa":{...designs["gtr"],"l":4.5,"roof":1.22,"front":-0.6,"rf":-0.15,"rear":1.3,"rr":0.76},
"m4":{...designs["m5"],"l":4.79,"roof":1.39,"doors":2,"rear":1.35,"rr":0.79},
"r8":{...designs["benz"],"l":4.43,"front":-0.84,"rf":-0.43,"rear":1.02,"rr":0.62,"roof":1.23},
"c63":{...designs["accord"],"l":4.75,"rear":1.37,"rr":0.86},
"gt86":{...designs["brz"],},
"nsx":{...designs["rx7"],"l":4.43,"front":-0.8,"rf":-0.36,"rear":1.12,"rr":0.64,"roof":1.17},
"ek9":{...designs["205"],"l":4.18,"rear":1.74,"rr":1.46,"roof":1.39},
"mx5":{...designs["s2000"],"l":3.92,"roof":1.24,"axles":[-1.18, 1.12]},
"mini":{...designs["205"],"l":3.86,"roof":1.43,"front":-0.73,"rf":-0.44,"rear":1.53,"rr":1.31},
"clio":{...designs["fiesta"],"l":4.06,"roof":1.45},
"i30":{...designs["golf"],"l":4.34,"roof":1.45},
"stinger":{...designs["accord"],"l":4.83,"roof":1.4,"rr":1.12},
"octavia":{...designs["accord"],"l":4.7,"roof":1.47,"rear":1.61,"rr":1.05},
"volvo850":{...designs["rs6"],"l":4.71,"roof":1.43,"front":-0.99,"rf":-0.62,"rear":2.02,"rr":1.86},
"viper":{...designs["benz"],"l":4.46,"roof":1.2,"front":-0.21,"rf":0.12,"rear":1.34,"rr":0.78},
"corvette":{...designs["benz"],"l":4.49,"roof":1.2,"front":-0.38,"rf":0.02,"rr":0.86},
"f40":{...designs["gtr"],"l":4.36,"roof":1.12,"front":-0.81,"rf":-0.36,"rear":1.14,"rr":0.68,"nose":0.54,"hood":0.72},
"countach":{...designs["gtr"],"l":4.14,"roof":1.08,"front":-0.91,"rf":-0.48,"rear":0.99,"rr":0.68,"nose":0.48,"hood":0.67},
"bentley":{...designs["mustang"],"l":4.85,"roof":1.4,"rw":0.79},
"lc300":{...designs["cherokee"],"l":4.98,"roof":1.94,"rear":2.1,"rr":1.81,"nose":1.19,"hood":1.3,"belt":1.36}
});
const badgeTextures=new Map();
function brandFor(id){const more={"volvofh12": "VOLVO", "scaniat": "SCANIA", "scaniastream": "SCANIA", "mantgxv8": "MAN", "actrosmp3": "MERCEDES", "dafxf": "DAF", "ivecostralis": "IVECO", "renaultt": "RENAULT", "kenworth": "KENWORTH", "peterbilt": "PETERBILT", "supradrag": "TOYOTA", "camarodrag": "CHEVROLET", "mustangdrag": "Ford", "gtrdrag": "NISSAN", "rx7drag": "MAZDA", "silviadrag": "NISSAN", "challengerdrag": "DODGE", "chevelledrag": "CHEVROLET", "civicdrag": "HONDA", "corvettedrag": "CHEVROLET", "lfa": "LEXUS", "m4": "BMW", "r8": "AUDI", "c63": "MERCEDES", "gt86": "TOYOTA", "nsx": "HONDA", "ek9": "HONDA", "mx5": "MAZDA", "mini": "MINI", "clio": "RENAULT", "i30": "HYUNDAI", "stinger": "KIA", "octavia": "SKODA", "volvo850": "VOLVO", "viper": "DODGE", "corvette": "CHEVROLET", "f40": "FERRARI", "countach": "LAMBORGHINI", "bentley": "BENTLEY", "lc300": "TOYOTA"};if(more[id])return more[id];const extra={scania:'SCANIA',man:'MAN',actros:'MERCEDES',daf:'DAF',iveco:'IVECO',evo:'MITSUBISHI',yaris:'TOYOTA',quattro:'AUDI',fiesta:'Ford','205':'PEUGEOT',supra:'TOYOTA',porsche:'PORSCHE',rx7:'MAZDA',silvia:'NISSAN','350z':'NISSAN',rs6:'AUDI',g63:'MERCEDES',m5:'BMW',camaro:'CHEVROLET',beetle:'VW'};if(extra[id])return extra[id];if(['civic','accord','s2000'].includes(id))return 'HONDA';if(['model3','models'].includes(id))return 'TESLA';if(['rally','brz','forester'].includes(id))return 'SUBARU';if(['jeep','gladiator','cherokee'].includes(id))return 'Jeep';if(['pickup','mustang','focus','bronco'].includes(id))return 'Ford';return {'301':'PEUGEOT',golf:'VW',bmw:'BMW',rover:'LAND ROVER',gtr:'NISSAN',legend:'NISSAN',benz:'MERCEDES',truck:'VOLVO',drag:'DODGE'}[id]||id;}
function badgeTexture(brand){if(badgeTextures.has(brand))return badgeTextures.get(brand);const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#151b21';ctx.strokeStyle='#d9e1e5';ctx.lineWidth=9;ctx.beginPath();ctx.ellipse(128,128,brand==='Ford'||brand==='SUBARU'||brand==='LAND ROVER'?121:104,brand==='Ford'||brand==='SUBARU'||brand==='LAND ROVER'?66:104,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#edf1f4';ctx.textAlign='center';ctx.textBaseline='middle';
if(brand==='BMW'){ctx.save();ctx.beginPath();ctx.arc(128,128,63,0,Math.PI*2);ctx.clip();for(let y=0;y<2;y++)for(let x=0;x<2;x++){ctx.fillStyle=(x+y)%2?'#eff4f5':'#4387be';ctx.fillRect(65+x*63,65+y*63,63,63);}ctx.restore();ctx.fillStyle='#eef3f5';ctx.font='bold 35px Arial';ctx.fillText('BMW',128,45);}
else if(brand==='MERCEDES'){for(let i=0;i<3;i++){const a=i*Math.PI*2/3-Math.PI/2;ctx.beginPath();ctx.moveTo(128,128);ctx.lineTo(128+Math.cos(a)*91,128+Math.sin(a)*91);ctx.stroke();}}
else if(brand==='VW'){ctx.font='bold 88px Arial';ctx.fillText('V',128,99);ctx.fillText('W',128,161);}
else if(brand==='HONDA'){ctx.font='bold 160px Arial';ctx.fillText('H',128,126);}
else if(brand==='TESLA'){ctx.font='bold 155px serif';ctx.fillText('T',128,126);}
else if(brand==='SUBARU'){ctx.fillStyle='#396ba0';ctx.beginPath();ctx.ellipse(128,128,108,54,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#e9eff2';for(const [x,y,r] of [[76,122,23],[128,100,10],[159,111,10],[184,134,10],[145,142,10],[111,148,10]]){ctx.beginPath();ctx.moveTo(x-r,y);ctx.lineTo(x,y-r*.65);ctx.lineTo(x+r,y);ctx.lineTo(x,y+r*.65);ctx.closePath();ctx.fill();}}
else if(brand==='LAND ROVER'){ctx.fillStyle='#224a39';ctx.beginPath();ctx.ellipse(128,128,109,55,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#eef0d9';ctx.font='bold italic 34px Arial';ctx.fillText('LAND',128,108);ctx.fillText('ROVER',128,148);}
else{ctx.font=brand==='Ford'?'italic bold 75px cursive':brand==='Jeep'?'bold 61px Arial':'bold 33px Arial';ctx.fillText(brand,128,128,190);}
const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;badgeTextures.set(brand,texture);return texture;}

const signatureIds=new Set(['301','bmw','gtr','jeep','pickup','kenworth']);
Object.assign(designs['301'],{front:-.98,rear:1.30,rf:-.43,rr:.74,rw:.665,belt:1.02,hood:.94,nose:.79,tail:1.04});
Object.assign(designs.bmw,{w:1.74,front:-.87,rear:1.27,rf:-.45,rr:.73,rw:.665,belt:.96,roof:1.34,tail:1.01});
Object.assign(designs.gtr,{w:1.91,front:-.88,rear:1.34,rf:-.29,rr:.68,rw:.69,belt:1.02,roof:1.36,nose:.75,hood:.94,tail:1.08});
Object.assign(designs.jeep,{w:1.89,front:-.83,rear:1.98,rf:-.66,rr:1.91,rw:.79,belt:1.35,roof:1.86});
Object.assign(designs.pickup,{front:-1.31,rear:.82,rf:-.96,rr:.69,rw:.86,belt:1.43,roof:1.98});
Object.assign(designs.kenworth,{l:8.4,w:2.46,roof:3.55,axles:[-2.70,2.15,3.25],front:-1.50,rear:1.05,nose:1.95,hood:2.07});
export function createVehicle(c,color,upgrades={}){
const original=c;c={...c,id:c.visualBase||c.id};const signature=true;const base=designs[c.id]||designs['301'];const longTruck=c.id==='kenworth';const scale=original.bodyLength&&!longTruck?original.bodyLength/base.l:1;const d={...base,l:longTruck?base.l:original.bodyLength||base.l,w:longTruck?base.w:original.bodyWidth||base.w,roof:longTruck?base.roof:original.bodyHeight||base.roof,axles:base.axles.map(z=>z*scale),front:base.front*scale,rear:base.rear*scale,rf:base.rf*scale,rr:base.rr*scale};const g=new T.Group();g.name=c.name;g.userData={wheels:[],parts:[],modelVersion:signature?5:4,bodyType:c.type,dimensions:{length:original.bodyLength||d.l,width:original.bodyWidth||d.w}};
const painted=new T.Group(),detail=new T.Group();g.add(painted,detail);g.userData.parts.push(painted);
const paint=new T.MeshPhysicalMaterial({color,metalness:.28,roughness:signature?.27:.36,clearcoat:signature?.65:.4,clearcoatRoughness:.24,flatShading:true});
const mat=(color,metalness=0,roughness=.7)=>new T.MeshStandardMaterial({color,metalness,roughness,flatShading:true});
const black=mat('#151b1c'),trim=mat('#303939',.15,.48),rubber=mat('#15191b',0,.94),chrome=mat('#adb5b8',.72,.29),rimMat=mat(c.type==='rally'?'#b19a56':'#bac1c2',.65,.35),glass=new T.MeshPhysicalMaterial({color:'#223942',metalness:.28,roughness:.17,clearcoat:.7,side:T.DoubleSide,flatShading:true}),lamp=new T.MeshStandardMaterial({color:'#ede8cf',emissive:'#d0d9ce',emissiveIntensity:.35,roughness:.25}),red=new T.MeshStandardMaterial({color:'#bf2728',emissive:'#9b1010',emissiveIntensity:.3,roughness:.3});
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
function engineDetails(){const e=g.userData.engine;e.updateMatrixWorld(true);const bounds=new T.Box3();for(const o of e.children){if(!o.isMesh)continue;o.geometry.computeBoundingBox();bounds.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrix));}if(bounds.isEmpty())return;const size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3()),w=Math.min(1.1,size.x*.8),len=Math.min(1.15,size.z*.8),y=bounds.max.y-.045;
if(c.electric){for(const side of [-1,1]){box(w*.22,.025,len*.6,center.x+side*w*.3,y-.02,center.z,chrome,e);rod([side*w*.3,y-.03,center.z-len*.2],[side*w*.15,y-.03,center.z+len*.2],.014,mat('#dd743b'),e);}return;}
for(const side of [-1,1]){box(w*.20,.025,len*.66,center.x+side*w*.2,y-.01,center.z,trim,e);for(let i=0;i<6;i++){const z=center.z-len*.25+i*len*.10;box(w*.17,.014,.014,center.x+side*w*.2,y+.011,z,chrome,e);cylinder(.012,.012,center.x+side*w*.25,y+.020,z,chrome,e,'y',6);rod([center.x+side*w*.21,y+.024,z],[center.x+side*w*.4,y-.13,z],.009,black,e);}}
const radiatorZ=center.z-len*.48;box(w*.8,.13,.045,center.x,y-.12,radiatorZ,black,e);for(let i=0;i<14;i++)box(.012,.11,.049,center.x-w*.36+i*w*.055,y-.12,radiatorZ,chrome,e);
rod([center.x-w*.38,y-.13,radiatorZ],[center.x-w*.36,y-.05,center.z],.023,trim,e);rod([center.x-w*.36,y-.05,center.z],[center.x-w*.18,y-.04,center.z+.10],.023,trim,e);
box(w*.20,.08,len*.25,center.x+w*.35,y-.07,center.z+len*.24,black,e);for(const side of [-1,1])cylinder(.015,.018,center.x+w*.35+side*w*.055,y-.022,center.z+len*.24,side<0?red:chrome,e,'y',6);
cylinder(.032,.022,center.x-w*.20,y+.022,center.z+len*.16,mat('#c9ad55'),e,'y',10);cylinder(.06,.018,center.x,y-.10,radiatorZ+.04,trim,e,'z',12);
}
function installDamage(){const targets=[];for(const parent of [painted,detail,g.userData.hood])parent.traverse(o=>{if(o.isMesh&&!o.material.map)targets.push(o);});g.userData.applyImpact=(point,strength)=>{const push=new T.Vector3(-point.x,0,-point.z).normalize(),radius=1.15+strength*.025;g.updateMatrixWorld(true);const inverse=g.matrixWorld.clone().invert();for(const o of targets){const transform=new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld),backTransform=transform.clone().invert(),a=o.geometry.attributes.position;if(!o.userData.originalPositions)o.userData.originalPositions=a.array.slice();const originals=o.userData.originalPositions;let touched=false;for(let i=0;i<a.count;i++){const originalPoint=new T.Vector3().fromArray(originals,i*3).applyMatrix4(transform),distance=originalPoint.distanceTo(point);if(distance>radius)continue;const weight=Math.pow(1-distance/radius,2),v=new T.Vector3().fromBufferAttribute(a,i).applyMatrix4(transform),amount=Math.min(.48,strength*.018)*weight;v.addScaledVector(push,amount);v.y+=Math.sin(originalPoint.x*8+originalPoint.z*6)*amount*.22;const displacement=v.clone().sub(originalPoint);if(displacement.length()>.72)v.copy(originalPoint).add(displacement.setLength(.72));v.applyMatrix4(backTransform);a.setXYZ(i,v.x,v.y,v.z);touched=true;}if(touched){a.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();o.geometry.computeBoundingBox();}}
if(strength>12){const glassMesh=targets.find(o=>o.material===glass);if(glassMesh&&!glassMesh.userData.cracked){const a=glassMesh.geometry.attributes.position,transform=new T.Matrix4().multiplyMatrices(inverse,glassMesh.matrixWorld);let nearest=Infinity,start=0;for(let i=0;i<a.count;i+=3){const v=new T.Vector3().fromBufferAttribute(a,i).applyMatrix4(transform),dist=v.distanceTo(point);if(dist<nearest){nearest=dist;start=i;}}if(nearest<2.7){const v=[0,1,2].map(i=>new T.Vector3().fromBufferAttribute(a,start+i)),center=v[0].clone().add(v[1]).add(v[2]).multiplyScalar(1/3),normal=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize().multiplyScalar(.006),vertices=[];for(let i=0;i<9;i++){const edge=v[i%3].clone().lerp(v[(i+1)%3],(i+1)/10),end=center.clone().lerp(edge,.85);vertices.push(...center.clone().add(normal).toArray(),...end.add(normal).toArray());}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));const cracks=new T.LineSegments(geo,new T.LineBasicMaterial({color:'#cbd8d7',transparent:true,opacity:.8,depthTest:false}));glassMesh.add(cracks);glassMesh.userData.cracked=true;}}}};}
function finish(){engineDetails();const brand=original.brand||brandFor(c.id),bm=new T.MeshStandardMaterial({map:badgeTexture(brand),transparent:true,alphaTest:.1,metalness:.15,roughness:.4,depthWrite:false});const size=c.type==='truck'?.27:.17;const frontBadge=mesh(new T.PlaneGeometry(size,size),bm,detail);frontBadge.position.set(0,c.type==='truck'?1.40:d.nose-.11,c.id==='kenworth'?front-.12:c.type==='truck'?-3.245:front-.105);frontBadge.rotation.y=Math.PI;const rearBadge=mesh(new T.PlaneGeometry(size*.85,size*.85),bm,detail);rearBadge.position.set(0,d.tail-.13,back+.055);[painted,detail,g.userData.hood,g.userData.engine,...g.userData.wheels].forEach(consolidate);g.userData.parts=[painted];installDamage();const exhaust=new T.Group();g.add(exhaust);g.userData.exhaust=exhaust;exhaust.visible=false;if(!c.electric){for(const side of [-1,1]){const jet=new T.Group();jet.position.set(side*d.w*.34,c.type==='truck'?.64:bottom+.025,back+.12);exhaust.add(jet);for(const [r,h,col,op] of [[.095,.65,0xff5318,.75],[.046,.42,0xffcf5a,.90],[.025,.20,0x8fbaff,.9]]){const geo=new T.ConeGeometry(r,h,7);geo.rotateX(Math.PI/2);geo.translate(0,0,h/2);const flame=new T.Mesh(geo,new T.MeshBasicMaterial({color:col,transparent:true,opacity:op,blending:T.AdditiveBlending,depthWrite:false,side:T.DoubleSide}));jet.add(flame);}}}if(longTruck&&original.bodyLength)g.scale.set(original.bodyWidth/base.w,original.bodyHeight/base.roof,original.bodyLength/base.l);return g;}
const front=-d.l/2,back=d.l/2,bottom=d.wheel*.73,fw=d.w*.455,sw=d.w/2;
function shoulder(z){if(z<d.front)return T.MathUtils.lerp(d.nose,d.hood,(z-front)/(d.front-front));if(z>d.rear)return T.MathUtils.lerp(d.belt,d.tail,(z-d.rear)/(back-d.rear));return d.belt;}
function width(z){const sculpt=signature&&c.type!=='truck'?Math.max(...d.axles.map(a=>Math.exp(-Math.pow((z-a)/.48,2))))*(c.type==='drag'?.065:c.type==='rally'?.052:c.id==='gtr'?.052:c.id==='bmw'?.035:.025):0;const end=Math.max(0,(Math.abs(z)-(d.l/2-.6))/.6);return sw*(1-end*(signature?.14:.10))+sculpt;}function hoodCrown(z){return signature&&!c.electric?Math.sin(Math.PI*T.MathUtils.clamp((z-front)/(d.front-front),0,1))*(c.id==='gtr'?.055:.025):0;}
function archY(z){let y=bottom;for(const axle of d.axles){const t=Math.abs(z-axle),r=d.wheel*1.15;if(t<r)y=Math.max(y,d.wheel+Math.sqrt(r*r-t*t));}return y;}
function body(){const zs=new Set([front,front+.18,front+.6,d.front,d.rear,back-.6,back-.18,back]);for(const axle of d.axles){const r=d.wheel*1.15;for(let i=0;i<=10;i++)zs.add(axle+Math.cos(i*Math.PI/10)*r);}const cuts=[...zs].filter(z=>z>=front&&z<=back).sort((a,b)=>a-b);
for(let i=0;i<cuts.length-1;i++){const z1=cuts[i],z2=cuts[i+1],h1=shoulder(z1),h2=shoulder(z2),w1=width(z1),w2=width(z2);for(const sign of [-1,1]){const low1=archY(z1),low2=archY(z2);doublePoly([[sign*w1,Math.max(low1,h1-.17),z1],[sign*w2,Math.max(low2,h2-.17),z2],[sign*w2*.93,h2,z2],[sign*w1*.93,h1,z1]]);if(low1<h1-.16||low2<h2-.16)doublePoly([[sign*w1*.96,low1,z1],[sign*w2*.96,low2,z2],[sign*w2,Math.max(low2,h2-.17),z2],[sign*w1,Math.max(low1,h1-.17),z1]]);}const hoodZone=z2<=d.front+.001,bedZone=c.type==='pickup'&&z1>d.rear-.001;if(!hoodZone&&!bedZone)doublePoly([[-w1*.93,h1,z1],[w1*.93,h1,z1],[w2*.93,h2,z2],[-w2*.93,h2,z2]]);}
doublePoly([[-fw,bottom,front],[fw,bottom,front],[fw*.99,d.nose,front],[-fw*.99,d.nose,front]]);doublePoly([[fw,bottom,back],[-fw,bottom,back],[-fw*.99,d.tail,back],[fw*.99,d.tail,back]]);
box(d.w*.65,.09,d.l-.65,0,bottom-.06,0,black,detail);
for(const sign of [-1,1]){box(.10,.12,d.axles.at(-1)-d.axles[0]-d.wheel*2,sign*(sw-.04),bottom+.01,(d.axles.at(-1)+d.axles[0])/2,trim,detail);for(const axle of d.axles){const rr=d.wheel*1.15;for(let i=0;i<10;i++){const a=i*Math.PI/10,b=(i+1)*Math.PI/10,z1=axle+Math.cos(a)*rr,z2=axle+Math.cos(b)*rr,y1=d.wheel+Math.sin(a)*rr,y2=d.wheel+Math.sin(b)*rr;doublePoly([[sign*(sw+.035),y1,z1],[sign*(sw+.035),y2,z2],[sign*(sw+.015),y2+.065,z2],[sign*(sw+.015),y1+.065,z1]],['jeep','rover','pickup','bronco','gladiator','forester','cherokee'].includes(c.id)?trim:paint,['jeep','rover','pickup','bronco','gladiator','forester','cherokee'].includes(c.id)?detail:painted);}}}}
function cabin(){function windowPane(points,m,parent){if(signature){const side=points.every(p=>p[0]>0)?1:points.every(p=>p[0]<0)?-1:0;const rearWindow=!side&&points[0][2]>0;points=points.map(([x,y,z])=>{const t=(y-d.belt)/(d.roof-d.belt);return side?[side*(T.MathUtils.lerp(d.w*.455,d.rw,t)+.008),y,z]:[x,y,T.MathUtils.lerp(rearWindow?d.rear:d.front,rearWindow?d.rr:d.rf,t)+(rearWindow?.008:-.008)];});}doublePoly(points,m,parent);}const cabinGroup=new T.Group();painted.add(cabinGroup);const roofMat=['jeep','rover','bronco','gladiator'].includes(c.id)?trim:paint;
const bf=d.front,br=d.rear,rf=d.rf,rr=d.rr,by=d.belt,ry=d.roof,bw=d.w*.455,rw=d.rw;
for(const side of [-1,1])doublePoly([[side*rw,ry,rf],[0,ry+.04,rf],[0,ry+.04,rr],[side*rw,ry,rr]],roofMat,cabinGroup);
for(const sign of [-1,1]){doublePoly([[sign*bw,by,bf],[sign*rw,ry,rf],[sign*rw,ry,rr],[sign*bw,by,br]],paint,cabinGroup);
const middle=bf+(br-bf)*(d.doors===4?.51:.65),roofMiddle=rf+(rr-rf)*(d.doors===4?.48:.66);
const lowerX=sign*(bw+.012),upperX=sign*(rw+.012);
windowPane([[lowerX,by+.055,bf+.10],[upperX,ry-.07,rf+.09],[upperX,ry-.07,roofMiddle-.045],[lowerX,by+.055,middle-.05]],glass,detail);
windowPane([[lowerX,by+.055,middle+.05],[upperX,ry-.07,roofMiddle+.045],[upperX,ry-.07,rr-.11],[lowerX,by+.055,br-.12]],glass,detail);
line([[lowerX,by+.025,bf+.07],[lowerX,by+.025,br-.1]],chrome,.009);rod([sign*bw,by+.03,middle],[sign*rw,ry-.015,roofMiddle],.026,trim);
const mirror=box(.18,.13,.25,sign*(sw+.10),by+.11,bf+.22,paint);box(.015,.092,.18,sign*(sw+.196),by+.12,bf+.24,chrome,detail);rod([sign*bw,by,bf+.28],[sign*(sw+.1),by+.1,bf+.28],.025,trim);
const doorRear=d.doors===4?middle:br-.12;for(const z of d.doors===4?[middle,br-.15]:[doorRear]){line([[sign*(sw*.96+.015),bottom+.17,z],[sign*(sw+.015),by-.18,z],[sign*(bw+.015),by+.02,z]],black,.007);box(.02,.035,.18,sign*(sw+.015),by-.12,z-.18,chrome,detail);}
}
doublePoly([[-bw,by,bf],[-rw,ry,rf],[rw,ry,rf],[bw,by,bf]],paint,cabinGroup);
windowPane([[-bw*.91,by+.065,bf-.012],[-rw*.94,ry-.07,rf-.016],[rw*.94,ry-.07,rf-.016],[bw*.91,by+.065,bf-.012]],glass,detail);
doublePoly([[bw,by,br],[rw,ry,rr],[-rw,ry,rr],[-bw,by,br]],paint,cabinGroup);
windowPane([[bw*.88,by+.06,br+.012],[rw*.9,ry-.075,rr+.016],[-rw*.9,ry-.075,rr+.016],[-bw*.88,by+.06,br+.012]],glass,detail);
for(const x of [-.32,.32])rod([x,by+.07,bf-.025],[x+.20,by+.105,bf+.03],.009,black);
}
function hoodAndEngine(){const pivot=new T.Group();pivot.position.set(0,d.hood,d.front);g.add(pivot);g.userData.hood=pivot;const len=d.front-front;
const cuts=[front,Math.min(front+.18,d.front),Math.min(front+.60,d.front),d.front].filter((z,i,a)=>i===0||z>a[i-1]);
for(let i=0;i<cuts.length-1;i++){const a=cuts[i],b=cuts[i+1],wa=width(a)*.93,wb=width(b)*.93,ya=shoulder(a)-d.hood,yb=shoulder(b)-d.hood;for(const side of [-1,1])doublePoly([[side*wa,ya,a-d.front],[side*wa*.55,ya+hoodCrown(a),a-d.front],[side*wb*.55,yb+hoodCrown(b),b-d.front],[side*wb,yb,b-d.front]],paint,pivot);doublePoly([[-wa*.55,ya+hoodCrown(a),a-d.front],[wa*.55,ya+hoodCrown(a),a-d.front],[wb*.55,yb+hoodCrown(b),b-d.front],[-wb*.55,yb+hoodCrown(b),b-d.front]],paint,pivot);for(const side of [-1,1])doublePoly([[side*wa,ya,a-d.front],[side*wb,yb,b-d.front],[side*wb,yb-.028,b-d.front],[side*wa,ya-.028,a-d.front]],paint,pivot);}
const endWidth=width(d.front)*.93;doublePoly([[-endWidth,d.hood,d.front],[-endWidth,d.belt,d.front],[endWidth,d.belt,d.front],[endWidth,d.hood,d.front]],paint,painted);
const engine=new T.Group();engine.position.set(0,Math.min(d.hood,d.nose)-.34,(front+d.front)/2);g.add(engine);g.userData.engine=engine;
box(d.w*.73,.035,Math.max(.25,len-.12),0,-.06,0,black,engine);if(c.electric){box(d.w*.55,.12,len*.65,0,-.015,0,trim,engine);return;}box(.63,.23,Math.min(.72,len*.65),0,.055,0,chrome,engine);box(.5,.08,.45,0,.205,0,trim,engine);for(const sign of [-1,1])for(let i=0;i<4;i++)cylinder(.065,.23,sign*.26,.13,-.23+i*.14,chrome,engine,'x',8);
box(.2,.17,.3,-.48,.035,.14,black,engine);box(.16,.17,.14,.49,.035,.13,mat('#ddd8bd'),engine);rod([-.38,.1,-.18],[-.53,.13,-.43],.055,trim,engine);if(upgrades.turbo)cylinder(.14,.17,.39,.13,-.2,chrome,engine,'x',10);
}
function wheels(){for(const z of d.axles)for(const sign of [-1,1]){const wh=new T.Group(),r=d.wheel,wide=c.id==='drag'&&z>0?.39:c.type==='truck'?.34:c.type==='rally'?.29:c.type==='drag'&&z>0?.34:.25;wh.position.set(sign*(sw-.035),r,z);g.add(wh);g.userData.wheels.push(wh);
const tire=mesh(new T.TorusGeometry(r*.78,r*.22,6,20),rubber,wh);tire.rotation.y=Math.PI/2;tire.scale.z=wide/(r*.44);
cylinder(r*.60,wide+.012,0,0,0,rimMat,wh,'x',16);cylinder(r*.51,wide+.025,0,0,0,black,wh,'x',16);cylinder(r*.39,wide+.03,0,0,0,mat('#5d6364',.6,.6),wh,'x',16);
const spokeX=sign*(wide/2+.025);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;rod([spokeX,Math.sin(a)*r*.13,Math.cos(a)*r*.13],[spokeX,Math.sin(a+.13)*r*.53,Math.cos(a+.13)*r*.53],r*.045,rimMat,wh);rod([spokeX,Math.sin(a)*r*.13,Math.cos(a)*r*.13],[spokeX,Math.sin(a-.10)*r*.53,Math.cos(a-.10)*r*.53],r*.025,rimMat,wh);}
cylinder(r*.13,wide+.065,0,0,0,chrome,wh,'x',10);box(.045,r*.30,.09,sign*(wide/2+.012),r*.18,r*.22,mat('#b3422d'),wh);
}}
function panel(w,h,x,y,z,m=black){return box(w,h,.027,x,y,z,m,detail)}
function frontGrille(w,h,y){panel(w,h,0,y,front-.021,black);for(let i=0;i<4;i++)panel(w-.055,.012,0,y-h*.35+i*h*.23,front-.043,trim);}
function headlight(sign,shape='angular'){const x=sign*d.w*.34,y=d.nose-.13,z=front-.048;if(shape==='round'){cylinder(.17,.045,x,y,z,chrome);cylinder(.13,.052,x,y,z-.009,lamp);return;}doublePoly([[x-sign*.25,y-.07,z],[x+sign*.22,y-.04,z+(signature?0:.025)],[x+sign*.25,y+.095,z+(signature?0:.06)],[x-sign*.19,y+.065,z]],black,detail);doublePoly([[x-sign*.21,y-.043,z-.006],[x+sign*.18,y-.025,z+(signature?-.006:.013)],[x+sign*.2,y+.06,z+(signature?-.006:.035)],[x-sign*.17,y+.042,z-.006]],lamp,detail);}
function spoiler(high=.30,breadth=d.w*.94){for(const sign of [-1,1])box(.055,high,.16,sign*d.w*.31,d.tail+high/2,back-.28,trim,detail);box(breadth,.065,.33,0,d.tail+high,back-.28,paint);for(const sign of [-1,1])box(.035,.18,.40,sign*breadth/2,d.tail+high+.03,back-.28,trim,detail);}
function rear(){for(const sign of [-1,1]){if(c.id!=='gtr')panel(c.id==='pickup'?.16:.48,c.id==='pickup'?.38:.13,sign*d.w*(c.id==='pickup'?.42:.32),d.tail-.16,back+.025,red);if(!c.electric){cylinder(.065,.17,sign*d.w*.34,bottom+.025,back+.055,chrome);cylinder(.046,.18,sign*d.w*.34,bottom+.025,back+.064,black);}}panel(.34,.12,0,d.tail-.31,back+.033,mat('#d5d6c9'));panel(.36,.11,0,bottom+.11,front-.06,mat('#cbd0cd'));box(d.w*.94,.09,.14,0,bottom,front-.035,trim,detail);box(d.w*.92,.10,.13,0,bottom,back+.025,trim,detail);}
function bevelBlock(w,h,l,x,y,z,m=paint,parent=painted,bevel=.09){const shape=new T.Shape(),a=w/2,b=h/2,k=Math.min(bevel,w/4,h/4);shape.moveTo(-a+k,-b);shape.lineTo(a-k,-b);shape.lineTo(a,-b+k);shape.lineTo(a,b-k);shape.lineTo(a-k,b);shape.lineTo(-a+k,b);shape.lineTo(-a,b-k);shape.lineTo(-a,-b+k);shape.closePath();const geo=new T.ExtrudeGeometry(shape,{depth:l,bevelEnabled:false,steps:1});geo.translate(x,y,z-l/2);return mesh(geo,m,parent);}
if(c.id==='kenworth'){
for(const side of [-1,1]){box(.17,.25,7.7,side*.48,.78,.05,trim,detail);cylinder(.34,1.2,side*.94,.84,.05,chrome,detail);box(.47,.10,1.35,side*1.03,.47,-.66,chrome,detail);cylinder(.075,2.8,side*1.04,2.24,.45,chrome,detail,'y',10);cylinder(.058,.08,side*1.04,3.66,.45,black,detail,'y',10);bevelBlock(.78,.25,2.45,side*.97,1.15,2.73,trim,detail);}
bevelBlock(1.92,1.72,1.78,0,2.10,-.64);bevelBlock(2.05,2.25,1.20,0,2.08,.82);bevelBlock(1.90,.22,1.83,0,3.04,-.64,paint);for(const side of [-1,1]){doublePoly([[side*.035,2.34,-1.543],[side*.82,2.34,-1.543],[side*.77,2.91,-1.543],[side*.035,2.91,-1.543]],glass,detail);box(.026,.58,1.12,side*.97,2.62,-.61,glass,detail);box(.05,.055,.24,side*.99,1.96,-.07,chrome,detail);box(.15,.40,.18,side*1.23,2.58,-1.22,chrome,detail);rod([side*.95,2.79,-1.28],[side*1.23,2.75,-1.22],.028,chrome);box(.08,.10,.10,side*.63,3.20,-1.28,lamp,detail);}
const pivot=new T.Group();pivot.position.set(0,.96,front+.12);g.add(pivot);g.userData.hood=pivot;
bevelBlock(1.47,1.08,2.58,0,1.54,-2.85,paint);const hoodMeshes=[...painted.children].filter(o=>{o.geometry.computeBoundingBox();return o.geometry.boundingBox.max.z<-1.5;});g.updateMatrixWorld(true);for(const o of hoodMeshes)pivot.attach(o);
for(const side of [-1,1]){bevelBlock(.67,.24,1.66,side*.99,1.39,-2.70,paint);panel(.55,.24,side*.99,1.33,front-.06,chrome);for(const x of [-.12,.12])panel(.18,.16,side*.99+x,1.33,front-.082,lamp);}
if(original.visualBase){const aero=['kwt680','cascadia','mackanthem'].includes(original.id);for(const side of [-1,1]){if(aero)bevelBlock(.26,.54,1.40,side*.82,1.61,-2.62,paint);else box(.025,.30,.65,side*.75,1.78,-2.48,chrome,detail);}if(original.brand==='MACK')box(.10,.12,.16,0,2.19,front+.20,chrome,detail);}
panel(1.36,1.29,0,1.48,front-.06,chrome);panel(1.15,1.10,0,1.48,front-.082,black);for(let i=0;i<12;i++)panel(.035,1.04,-.51+i*.093,1.48,front-.103,chrome);box(2.43,.30,.24,0,.67,front-.06,chrome,detail);
const engine=new T.Group();g.add(engine);g.userData.engine=engine;box(.80,.51,1.45,0,1.33,-2.57,chrome,engine);box(.52,.12,1.20,0,1.64,-2.57,trim,engine);cylinder(.48,.11,0,1.02,2.38,black,detail,'y');box(2.05,.14,.24,0,.73,back-.12,trim,detail);for(const side of [-1,1])panel(.29,.13,side*.78,.78,back+.02,red);wheels();return finish();}
if(c.type==='truck'){
const ch=box(1.04,.22,5.8,0,.78,.35,trim,detail);for(const sign of [-1,1]){box(.16,.23,5.8,sign*.48,.81,.35,black,detail);box(.52,.50,1.04,sign*.78,.70,.04,chrome,detail);for(let i=0;i<3;i++)box(.36,.07,.7,sign*1.12,.42+i*.2,-2.15,chrome,detail);box(.25,.17,2.25,sign*1.08,1.11,2.0,trim,detail);}
bevelBlock(2.34,1.05,2.25,0,1.54,-2.0,paint);const cab=bevelBlock(2.33,d.roof-2.065,2.24,0,(d.roof+2.065)/2,-2.0,paint);g.userData.parts.push(cab);panel(2.02,.78,0,2.55,-3.135,glass);panel(2.06,.12,0,3.02,-3.16,trim);for(const sign of [-1,1]){box(.028,.76,1.35,sign*1.18,2.54,-2.18,glass,detail);box(.14,.4,.3,sign*1.39,2.39,-2.8,black,detail);rod([sign*1.15,2.71,-2.8],[sign*1.39,2.62,-2.8],.03,chrome);box(.055,.13,.3,sign*1.18,1.82,-1.60,black,detail);panel(.56,.16,sign*.79,1.02,-3.15,lamp);panel(.46,.10,sign*.79,.77,-3.16,lamp);}
panel(1.64,.88,0,1.41,-3.15,black);for(let i=0;i<(c.id==='man'?3:c.id==='daf'?5:6);i++)panel(c.id==='scania'?1.75:1.53,c.id==='man'?.055:.026,0,1.09+i*(c.id==='man'?.23:.12),-3.17,chrome);rod([-.67,1.06,-3.19],[.67,1.75,-3.19],.017,chrome);cylinder(.11,.025,0,1.40,-3.21,chrome);cylinder(.075,.032,0,1.40,-3.23,black);
box(2.38,.25,.3,0,.64,-3.13,trim,detail);box(2.10,.24,1.9,0,d.roof+.20,-1.91,paint);cylinder(.48,.11,0,1.0,1.61,black,detail,'y');box(1.9,.12,.28,0,.66,back,trim,detail);for(const sign of [-1,1])panel(.32,.13,sign*.76,.65,back+.15,red);
if(c.id==='scania'){box(2.18,.11,.16,0,d.roof+.36,-2.73,chrome,detail);for(const x of [-.78,-.39,0,.39,.78])cylinder(.09,.08,x,d.roof+.36,-2.83,lamp);}if(c.id==='actros')for(const side of [-1,1])box(.045,.42,.13,side*1.34,2.56,-2.76,black,detail);if(c.id==='iveco')panel(1.60,.10,0,1.94,-3.17,chrome);if(c.id==='daf')panel(2.12,.12,0,3.07,-3.17,trim);const pivot=new T.Group();pivot.position.set(0,1.1,-3.12);g.add(pivot);g.updateMatrixWorld(true);for(const parent of [painted,detail])for(const child of [...parent.children]){const bb=new T.Box3().setFromObject(child);if(bb.min.y>1.05&&bb.max.z<-.75){pivot.attach(child);if(['scaniat','kenworth','peterbilt'].includes(c.id))child.position.z+=1.05;}}if(['scaniat','kenworth','peterbilt'].includes(c.id)){box(1.45,.70,1.35,0,1.48,-2.54,paint);for(const side of [-1,1]){box(.09,1.8,.09,side*1.13,2.0,-.65,chrome,detail);box(.38,.17,1.18,side*1.02,1.02,-2.50,paint);}}g.userData.hood=pivot;const engine=new T.Group();g.add(engine);g.userData.engine=engine;box(.8,.4,1,0,1.14,-1.8,chrome,engine);wheels();return finish();
}
body();if(['s2000','mx5'].includes(c.id)){doublePoly([[-.72,d.belt,d.front],[-.65,d.roof,d.rf],[.65,d.roof,d.rf],[.72,d.belt,d.front]],glass,detail);for(const sign of [-1,1]){rod([sign*.72,d.belt,d.front],[sign*.65,d.roof,d.rf],.028,chrome);box(.43,.10,.49,sign*.40,d.belt+.02,.37,black,detail);box(.40,.38,.13,sign*.40,d.belt+.21,.63,black,detail);cylinder(.13,.05,sign*.4,d.belt+.42,.68,trim);}rod([-.65,d.roof,d.rf],[.65,d.roof,d.rf],.025,chrome);}else cabin();hoodAndEngine();wheels();rear();
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


if(['evo','yaris','quattro','fiesta','205'].includes(c.id)){
frontGrille(c.id==='yaris'?1.18:1.02,.28,d.nose-.15);for(const sign of [-1,1]){headlight(sign);box(.12,.09,d.axles[1]-d.axles[0]-d.wheel*1.8,sign*(sw+.025),bottom-.015,0,trim,detail);for(const axle of d.axles)box(.075,.22,.14,sign*(sw-.015),.21,axle+.38,black,detail);for(const x of [.24,.57]){cylinder(.12,.09,sign*x,d.nose+.10,front-.18,black);cylinder(.096,.105,sign*x,d.nose+.1,front-.205,lamp);}}
spoiler(c.id==='205'?.22:.40);box(.43,.10,.34,0,d.roof+.03,(d.rf+d.rr)/2,paint);box(.36,.055,.023,0,d.roof+.03,(d.rf+d.rr)/2-.18,black,detail);box(d.w*.96,.045,.23,0,bottom-.03,front-.055,trim,detail);
if(c.id==='evo')for(const side of [-1,1])box(.20,.025,.30,side*.29,.012,-.46,black,g.userData.hood);
if(c.id==='quattro')for(const side of [-1,1])box(.18,.10,.64,side*(sw+.02),d.wheel+.34,d.axles[1],paint);
if(c.id==='205')for(const side of [-1,1])box(.035,.18,.38,side*(sw+.015),d.belt-.14,1.15,black,detail);
}
if(['supra','rx7','silvia','350z','rs6','m5','camaro'].includes(c.id)){
frontGrille(c.id==='rs6'?1.22:.99,c.id==='rs6'?.34:.22,d.nose-.14);for(const side of [-1,1])headlight(side);
if(c.id==='supra')spoiler(.39);if(c.id==='rx7')for(const side of [-1,1])box(.28,.035,.29,side*.50,shoulder(front+.28)+.01,front+.28,paint);
if(c.id==='m5')for(const side of [-1,1]){panel(.24,.24,side*.16,d.nose-.14,front-.06,chrome);panel(.19,.19,side*.16,d.nose-.14,front-.077,black);}
if(c.id==='rs6')for(const side of [-1,1])box(.045,.035,2.48,side*.68,d.roof+.04,.55,chrome,detail);
if(c.id==='camaro')panel(1.18,.035,0,d.nose-.075,front-.07,black);
}
if(['porsche','beetle','g63'].includes(c.id)){frontGrille(c.id==='g63'?1.02:.85,.19,d.nose-.13);for(const side of [-1,1]){headlight(side,'round');if(c.id==='porsche'||c.id==='beetle')box(.27,.07,.38,side*.62,d.nose-.02,front+.15,paint);}if(c.id==='g63'){for(let i=0;i<9;i++)panel(.018,.18,-.36+i*.09,d.nose-.13,front-.06,chrome);cylinder(.40,.23,0,1.08,back+.17,trim);for(const side of [-1,1])box(.16,.07,2.10,side*(sw+.03),.43,.04,chrome,detail);}}


if(["supradrag", "camarodrag", "mustangdrag", "gtrdrag", "rx7drag", "silviadrag", "challengerdrag", "chevelledrag", "civicdrag", "corvettedrag", "lfa", "m4", "r8", "c63", "gt86", "nsx", "ek9", "mx5", "mini", "clio", "i30", "stinger", "octavia", "volvo850", "viper", "corvette", "f40", "countach", "bentley", "lc300"].includes(c.id)){frontGrille(['countach','f40','r8'].includes(c.id)?.86:1.07,['countach','f40'].includes(c.id)?.12:.22,d.nose-.13);for(const side of [-1,1]){headlight(side,['mini','bentley'].includes(c.id)?'round':'angular');panel(.22,.10,side*d.w*.36,bottom+.11,front-.06,black);}
if(['m4','bentley','lfa','lc300'].includes(c.id)){for(let i=0;i<9;i++)panel(.015,.17,-.36+i*.09,d.nose-.13,front-.067,chrome);}
if(['f40','countach'].includes(c.id)){spoiler(.36);for(const side of [-1,1]){box(.032,.20,.42,side*(sw+.025),d.belt-.10,1.05,black,detail);box(.16,.05,2.1,side*sw,bottom-.025,0,trim,detail);}}
if(['nsx','rx7drag'].includes(c.id))for(const side of [-1,1])box(.27,.05,.31,side*.52,shoulder(front+.25)+.01,front+.25,paint);
if(['volvo850','lc300'].includes(c.id))for(const side of [-1,1])box(.045,.04,2.20,side*.67,d.roof+.065,.40,trim,detail);
}
if(["supradrag", "camarodrag", "mustangdrag", "gtrdrag", "rx7drag", "silviadrag", "challengerdrag", "chevelledrag", "civicdrag", "corvettedrag"].includes(c.id)){spoiler(.25);for(const wheel of g.userData.wheels)if(wheel.position.z>0)wheel.scale.x=1.5;for(const side of [-1,1]){rod([side*.51,.22,back-.05],[side*.51,.16,back+.67],.022,chrome);cylinder(.072,.08,side*.51,.10,back+.67,rubber,detail,'x',10);}box(.28,.28,.21,0,bottom+.22,back+.10,black,detail);box(d.w*.97,.045,.25,0,bottom-.02,front-.06,trim,detail);}

if(c.type==='rally'){for(const side of [-1,1]){for(const axle of d.axles)box(.26,.27,.035,side*(sw-.08),.21,axle+d.wheel+.10,black,detail);if(original.visualBase){cylinder(.13,.08,side*.29,d.nose-.11,front-.15,black);cylinder(.105,.095,side*.29,d.nose-.11,front-.17,lamp);}box(.035,.24,.29,side*(sw+.032),d.belt-.25,.02,mat('#e7e4d3'),detail);box(.04,.17,.035,side*(sw+.055),d.belt-.25,.02,black,detail);}if(original.visualBase)spoiler(.30);box(.4,.06,.3,0,d.roof+.05,(d.rf+d.rr)/2,trim,detail);}
if(c.type==='drag'&&original.visualBase){for(const wh of g.userData.wheels)if(wh.position.z>0)wh.scale.x=1.45;for(const side of [-1,1]){rod([side*.5,.22,back-.08],[side*.5,.15,back+.60],.022,chrome);cylinder(.075,.09,side*.5,.11,back+.60,rubber,detail,'x',10);}box(.26,.25,.20,0,bottom+.23,back+.12,black,detail);if(!['gtr','bmw','rally','evo','civic','focus','f40','countach'].includes(c.id))spoiler(.22);}
if(signature){
for(const side of [-1,1]){for(const axle of d.axles){const radius=d.wheel*1.15;for(let i=0;i<8;i++){const a=i*Math.PI/8,b=(i+1)*Math.PI/8,z1=axle+Math.cos(a)*radius,z2=axle+Math.cos(b)*radius,y1=d.wheel+Math.sin(a)*radius,y2=d.wheel+Math.sin(b)*radius,outer=side*(sw+(c.id==='gtr'?.065:.04));doublePoly([[side*(sw-.14),y1,z1],[outer,y1,z1],[outer,y2,z2],[side*(sw-.14),y2,z2]],black,detail);}}}
const bumperHeight=c.id==='pickup'?.22:c.id==='jeep'?.15:.19;bevelBlock(d.w*.93,bumperHeight,.22,0,bottom+.08,front+.02,paint,painted,.07);bevelBlock(d.w*.93,.17,.19,0,bottom+.09,back-.025,paint,painted,.06);

if(c.id==='bmw'){for(const side of [-1,1]){box(.035,.08,2.44,side*(sw+.016),.63,0,trim,detail);panel(.20,.055,side*.62,.49,front-.115,mat('#d89445'));}panel(1.30,.065,0,.38,front-.12,black);}
if(c.id==='gtr'){for(const side of [-1,1]){box(.10,.07,2.10,side*(sw+.015),bottom+.005,.02,trim,detail);for(const x of [.57,.74]){cylinder(.067,.18,side*x,bottom+.04,back+.12,chrome);cylinder(.050,.19,side*x,bottom+.04,back+.13,black);}}for(const x of [-.44,-.22,0,.22,.44])box(.025,.12,.40,x,bottom-.015,back-.10,trim,detail);}
if(c.id==='jeep'){for(const side of [-1,1]){for(const z of [-.68,.52]){box(.035,.065,.14,side*(sw*.92+.03),d.belt-.14,z,trim,detail);box(.035,.065,.14,side*(sw*.92+.03),d.belt-.36,z,trim,detail);}box(.035,.06,.11,side*.71,d.hood-.055,front+.38,black,detail);}line([[-.74,d.roof+.015,.62],[.74,d.roof+.015,.62]],black,.008);}
if(c.id==='pickup'){for(const side of [-1,1]){bevelBlock(.25,.29,.73,side*.77,d.belt-.32,d.axles[1],trim,detail);box(.13,.035,back-d.rear-.1,side*(sw-.04),d.belt+.075,(back+d.rear)/2,trim,detail);}for(let x=-.65;x<=.65;x+=.13)box(.028,.018,back-d.rear-.18,x,d.belt-.253,(back+d.rear)/2,trim,detail);panel(.36,.06,0,d.tail-.12,back+.06,chrome);}
}
if(upgrades.spoiler&&c.type!=='drag'&&!['gtr','legend','bmw','rally','civic','focus','evo','yaris','quattro','fiesta','205','supra'].includes(c.id))spoiler(.25);return finish();
}
