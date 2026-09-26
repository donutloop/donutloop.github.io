var Sl="160";var Ru=0,jl=1,Pu=2;var Rh=1,El=2,Mn=3,zn=0,Ce=1,En=2;var hn=0,Bi=1,Hn=2,Ql=3,tc=4,Lu=5,ni=100,Iu=101,Du=102,ec=103,nc=104,Uu=200,Nu=201,Fu=202,Ou=203,La=204,Ia=205,Bu=206,ku=207,zu=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,Yu=214,qu=0,Zu=1,$u=2,Tr=3,Ju=4,Ku=5,ju=6,Qu=7,bl=0,td=1,ed=2,Bn=0,wl=1,Tl=2,Al=3,Bs=4,nd=5,Cl=6;var Ph=300,Hi=301,Vi=302,Da=303,Ua=304,so=306,Na=1e3,en=1001,Fa=1002,Ne=1003,ic=1004;var Ko=1005;var Ze=1006,id=1007;var Rs=1008;var kn=1009,sd=1010,rd=1011,Rl=1012,Lh=1013,Fn=1014,On=1015,sn=1016,Ih=1017,Dh=1018,si=1020,od=1021,nn=1023,ad=1024,ld=1025,ri=1026,Gi=1027,cd=1028,Uh=1029,hd=1030,Nh=1031,Fh=1033,jo=33776,Qo=33777,ta=33778,ea=33779,sc=35840,rc=35841,oc=35842,ac=35843,Oh=36196,lc=37492,cc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,xc=37815,_c=37816,yc=37817,vc=37818,Mc=37819,Sc=37820,Ec=37821,na=36492,bc=36494,wc=36495,ud=36283,Tc=36284,Ac=36285,Cc=36286;var Ar=2300,Cr=2301,ia=2302,Rc=2400,Pc=2401,Lc=2402;var Bh=3e3,oi=3001,dd=3200,fd=3201,Pl=0,pd=1,$e="",Ee="srgb",wn="srgb-linear",Ll="display-p3",ro="display-p3-linear",Rr="linear",jt="srgb",Pr="rec709",Lr="p3";var xi=7680;var Ic=519,md=512,gd=513,xd=514,kh=515,_d=516,yd=517,vd=518,Md=519,Dc=35044,zh=35048;var Uc="300 es",Oa=1035,bn=2e3,Ir=2001,un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=1234567,Es=Math.PI/180,Ps=180/Math.PI;function Qi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Il(s,t){return(s%t+t)%t}function Sd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ed(s,t,e){return s!==t?(e-s)/(t-s):0}function bs(s,t,e){return(1-e)*s+e*t}function bd(s,t,e,n){return bs(s,t,1-Math.exp(-e*n))}function wd(s,t=1){return t-Math.abs(Il(s,t*2)-t)}function Td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ad(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Cd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Rd(s,t){return s+Math.random()*(t-s)}function Pd(s){return s*(.5-Math.random())}function Ld(s){s!==void 0&&(Nc=s);let t=Nc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(s){return s*Es}function Dd(s){return s*Ps}function Ba(s){return(s&s-1)===0&&s!==0}function Ud(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ts={DEG2RAD:Es,RAD2DEG:Ps,generateUUID:Qi,clamp:ve,euclideanModulo:Il,mapLinear:Sd,inverseLerp:Ed,lerp:bs,damp:bd,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Cd,randFloat:Rd,randFloatSpread:Pd,seededRandom:Ld,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Ba,ceilPowerOfTwo:Ud,floorPowerOfTwo:Dr,setQuaternionFromProperEuler:Nd,normalize:De,denormalize:Ui},it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],_=i[4],S=i[7],R=i[2],w=i[5],C=i[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*_+l*w,r[6]=o*p+a*S+l*C,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*w,r[7]=c*p+h*S+u*C,r[2]=d*x+f*y+g*R,r[5]=d*m+f*_+g*w,r[8]=d*p+f*S+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sa=new Wt;function Hh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fd(){let s=Ur("canvas");return s.style.display="block",s}var Fc={};function ws(s){s in Fc||(Fc[s]=!0,console.warn(s))}var Oc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[wn]:{transfer:Rr,primaries:Pr,toReference:s=>s,fromReference:s=>s},[Ee]:{transfer:jt,primaries:Pr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ro]:{transfer:Rr,primaries:Lr,toReference:s=>s.applyMatrix3(Bc),fromReference:s=>s.applyMatrix3(Oc)},[Ll]:{transfer:jt,primaries:Lr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bc),fromReference:s=>s.applyMatrix3(Oc).convertLinearToSRGB()}},Od=new Set([wn,ro]),Zt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Od.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Qs[t].toReference,i=Qs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Qs[s].primaries},getTransfer:function(s){return s===$e?Rr:Qs[s].transfer}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _i,Nr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Ur("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Qi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(oa(i[o].image)):r.push(oa(i[o]))}else r=oa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kd=0,rn=class s extends un{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=en,i=en,r=Ze,o=Rs,a=nn,l=kn,c=s.DEFAULT_ANISOTROPY,h=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Qi(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?Ee:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?oi:Bh}set encoding(t){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===oi?Ee:$e}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ph;rn.DEFAULT_ANISOTROPY=1;var se=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,S=(f+1)/2,R=(p+1)/2,w=(h+d)/4,C=(u+x)/4,I=(g+m)/4;return _>S&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=C/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?Ee:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var za=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}let S=a*y;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+x*S,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa=new A,kc=new Vn,qt=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),er.subVectors(this.max,gs),yi.subVectors(t.a,gs),vi.subVectors(t.b,gs),Mi.subVectors(t.c,gs),Ln.subVectors(vi,yi),In.subVectors(Mi,vi),Kn.subVectors(yi,Mi);let e=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!la(e,yi,vi,Mi,er)||(e=[1,0,0,0,1,0,0,0,1],!la(e,yi,vi,Mi,er))?!1:(nr.crossVectors(Ln,In),e=[nr.x,nr.y,nr.z],la(e,yi,vi,Mi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gn=[new A,new A,new A,new A,new A,new A,new A,new A],je=new A,tr=new qt,yi=new A,vi=new A,Mi=new A,Ln=new A,In=new A,Kn=new A,gs=new A,er=new A,nr=new A,jn=new A;function la(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){jn.fromArray(s,r);let a=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zd=new qt,xs=new A,ca=new A,Gn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(ca)),this.expandByPoint(xs.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new A,ha=new A,ir=new A,Dn=new A,ua=new A,sr=new A,da=new A,Br=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ha.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=Dn.dot(this.direction),l=-Dn.dot(ir),c=Dn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ha).addScaledVector(ir,d),f}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,r){ua.subVectors(e,t),sr.subVectors(n,t),da.crossVectors(ua,sr);let o=this.direction.dot(da),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);let l=a*this.direction.dot(sr.crossVectors(Dn,sr));if(l<0)return null;let c=a*this.direction.dot(ua.cross(Dn));if(c<0||l+c>o)return null;let h=-a*Dn.dot(da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Vd)}lookAt(t,e,n){let i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Un.crossVectors(n,ze),Un.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Un.crossVectors(n,ze)),Un.normalize(),rr.crossVectors(ze,Un),i[0]=Un.x,i[4]=rr.x,i[8]=ze.x,i[1]=Un.y,i[5]=rr.y,i[9]=ze.y,i[2]=Un.z,i[6]=rr.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],S=n[11],R=n[15],w=i[0],C=i[4],I=i[8],v=i[12],b=i[1],U=i[5],H=i[9],tt=i[13],L=i[2],N=i[6],G=i[10],Y=i[14],X=i[3],W=i[7],J=i[11],Q=i[15];return r[0]=o*w+a*b+l*L+c*X,r[4]=o*C+a*U+l*N+c*W,r[8]=o*I+a*H+l*G+c*J,r[12]=o*v+a*tt+l*Y+c*Q,r[1]=h*w+u*b+d*L+f*X,r[5]=h*C+u*U+d*N+f*W,r[9]=h*I+u*H+d*G+f*J,r[13]=h*v+u*tt+d*Y+f*Q,r[2]=g*w+x*b+m*L+p*X,r[6]=g*C+x*U+m*N+p*W,r[10]=g*I+x*H+m*G+p*J,r[14]=g*v+x*tt+m*Y+p*Q,r[3]=y*w+_*b+S*L+R*X,r[7]=y*C+_*U+S*N+R*W,r[11]=y*I+_*H+S*G+R*J,r[15]=y*v+_*tt+S*Y+R*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,S=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,w=e*y+n*_+i*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=y*C,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*C,t[8]=S*C,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=R*C,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,S=l*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+S)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+_)*C,i[9]=(m-y)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Si.set(i[0],i[1],i[2]).length(),o=Si.set(i[4],i[5],i[6]).length(),a=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);let c=1/r,h=1/o,u=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===bn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ir)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=bn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,g,x;if(a===bn)g=(o+r)*u,x=-2*u;else if(a===Ir)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new A,Qe=new re,Hd=new A(0,0,0),Vd=new A(1,1,1),Un=new A,rr=new A,ze=new A,zc=new re,Hc=new Vn,Wi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,Vc=new A,Ei=new Vn,_n=new re,or=new A,_s=new A,Wd=new A,Xd=new Vn,Gc=new A(1,0,0),Wc=new A(0,1,0),Xc=new A(0,0,1),Yd={type:"added"},qd={type:"removed"},pe=class s extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new Wi,n=new Vn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Wt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(_s,or,this.up):_n.lookAt(or,_s,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(_n),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};pe.DEFAULT_UP=new A(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new A,yn=new A,fa=new A,vn=new A,bi=new A,wi=new A,Yc=new A,pa=new A,ma=new A,ga=new A,ar=!1,Ni=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),yn.subVectors(n,e),fa.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(yn),l=tn.dot(fa),c=yn.dot(yn),h=yn.dot(fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(t,e,n,i,r,o,a,l){return ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ar=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),yn.subVectors(t,e),tn.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ar=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;bi.subVectors(i,n),wi.subVectors(r,n),pa.subVectors(t,n);let l=bi.dot(pa),c=wi.dot(pa);if(l<=0&&c<=0)return e.copy(n);ma.subVectors(t,i);let h=bi.dot(ma),u=wi.dot(ma);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);ga.subVectors(t,r);let f=bi.dot(ga),g=wi.dot(ga);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(wi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Yc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Yc,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(bi,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Il(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xa(o,r,t+1/3),this.g=xa(o,r,t),this.b=xa(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(ve(Te.r*255,0,255))*65536+Math.round(ve(Te.g*255,0,255))*256+Math.round(ve(Te.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ee){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,i=Te.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(lr);let n=bs(Nn.h,lr.h,e),i=bs(Nn.s,lr.s,e),r=bs(Nn.l,lr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new dt;dt.NAMES=Vh;var Zd=0,Tn=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ne=class extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new A,cr=new it,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}};var zr=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var $d=0,qe=new re,_a=new pe,Ti=new A,He=new qt,ys=new qt,ye=new A,Me=class s extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?Hr:zr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(He.min,ys.min),He.expandByPoint(ye),ye.addVectors(He.max,ys.max),He.expandByPoint(ye)):(He.expandByPoint(ys.min),He.expandByPoint(ys.max))}He.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),ye.add(Ti)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new A,h[b]=new A;let u=new A,d=new A,f=new A,g=new it,x=new it,m=new it,p=new A,y=new A;function _(b,U,H){u.fromArray(i,b*3),d.fromArray(i,U*3),f.fromArray(i,H*3),g.fromArray(o,b*2),x.fromArray(o,U*2),m.fromArray(o,H*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let tt=1/(x.x*m.y-m.x*x.y);isFinite(tt)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(tt),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(tt),c[b].add(p),c[U].add(p),c[H].add(p),h[b].add(y),h[U].add(y),h[H].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,U=S.length;b<U;++b){let H=S[b],tt=H.start,L=H.count;for(let N=tt,G=tt+L;N<G;N+=3)_(n[N+0],n[N+1],n[N+2])}let R=new A,w=new A,C=new A,I=new A;function v(b){C.fromArray(r,b*3),I.copy(C);let U=c[b];R.copy(U),R.sub(C.multiplyScalar(C.dot(U))).normalize(),w.crossVectors(I,U);let tt=w.dot(h[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=tt}for(let b=0,U=S.length;b<U;++b){let H=S[b],tt=H.start,L=H.count;for(let N=tt,G=tt+L;N<G;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new re,Qn=new Br,hr=new Gn,Zc=new A,Ai=new A,Ci=new A,Ri=new A,ya=new A,ur=new A,dr=new it,fr=new it,pr=new it,$c=new A,Jc=new A,Kc=new A,mr=new A,gr=new A,nt=class extends pe{constructor(t=new Me,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ya.fromBufferAttribute(u,t),o?ur.addScaledVector(ya,h):ur.addScaledVector(ya.sub(e),h))}e.add(ur)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(hr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(hr,Zc)===null||Qn.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,R=_;S<R;S+=3){let w=a.getX(S),C=a.getX(S+1),I=a.getX(S+2);i=xr(this,p,t,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);i=xr(this,o,t,n,c,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,R=_;S<R;S+=3){let w=S,C=S+1,I=S+2;i=xr(this,p,t,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,S=m+2;i=xr(this,o,t,n,c,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Jd(s,t,e,n,i,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===zn,a),l===null)return null;gr.copy(a),gr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:s}}function xr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ai),s.getVertexPosition(l,Ci),s.getVertexPosition(c,Ri);let h=Jd(s,t,e,n,Ai,Ci,Ri,mr);if(h){i&&(dr.fromBufferAttribute(i,a),fr.fromBufferAttribute(i,l),pr.fromBufferAttribute(i,c),h.uv=Ni.getInterpolation(mr,Ai,Ci,Ri,dr,fr,pr,new it)),r&&(dr.fromBufferAttribute(r,a),fr.fromBufferAttribute(r,l),pr.fromBufferAttribute(r,c),h.uv1=Ni.getInterpolation(mr,Ai,Ci,Ri,dr,fr,pr,new it),h.uv2=h.uv1),o&&($c.fromBufferAttribute(o,a),Jc.fromBufferAttribute(o,l),Kc.fromBufferAttribute(o,c),h.normal=Ni.getInterpolation(mr,Ai,Ci,Ri,$c,Jc,Kc,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};Ni.getNormal(Ai,Ci,Ri,u.normal),h.face=u}return h}var Lt=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,p,y,_,S,R,w,C,I,v){let b=S/C,U=R/I,H=S/2,tt=R/2,L=w/2,N=C+1,G=I+1,Y=0,X=0,W=new A;for(let J=0;J<G;J++){let Q=J*U-tt;for(let ut=0;ut<N;ut++){let V=ut*b-H;W[x]=V*y,W[m]=Q*_,W[p]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(ut/C),u.push(1-J/I),Y+=1}}for(let J=0;J<I;J++)for(let Q=0;Q<C;Q++){let ut=d+Q+N*J,V=d+Q+N*(J+1),q=d+(Q+1)+N*(J+1),ct=d+(Q+1)+N*J;l.push(ut,V,ct),l.push(V,q,ct),X+=6}a.addGroup(f,X,v),f+=X,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){let t={};for(let e=0;e<s.length;e++){let n=Xi(s[e]);for(let i in n)t[i]=n[i]}return t}function Kd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gh(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}var Wn={clone:Xi,merge:Ue},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vr=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ae=class extends Vr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pi=-90,Li=1,Ha=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ae(Pi,Li,t,e);i.layers=this.layers,this.add(i);let r=new Ae(Pi,Li,t,e);r.layers=this.layers,this.add(r);let o=new Ae(Pi,Li,t,e);o.layers=this.layers,this.add(o);let a=new Ae(Pi,Li,t,e);a.layers=this.layers,this.add(a);let l=new Ae(Pi,Li,t,e);l.layers=this.layers,this.add(l);let c=new Ae(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gr=class extends rn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===oi?Ee:$e),this.texture=new Gr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Lt(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:hn});r.uniforms.tEquirect.value=e;let o=new nt(i,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Ze),new Ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},va=new A,tf=new A,ef=new Wt,Sn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=va.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),i=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new Gn,_r=new A,Ls=class{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],_=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+o,d+h,m+g,S+y).normalize(),n[3].setComponents(l-o,d-h,m-g,S-y).normalize(),n[4].setComponents(l-a,d-u,m-x,S-_).normalize(),e===bn)n[5].setComponents(l+a,d+u,m+x,S+_).normalize();else if(e===Ir)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(_r.x=i.normal.x>0?t.max.x:t.min.x,_r.y=i.normal.y>0?t.max.y:t.min.y,_r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nf(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var dn=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let _=0;_<c;_++){let S=_*u-r;g.push(S,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,S=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;f.push(_,S,w),f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:xf,bumpmap_pars_fragment:_f,clipping_planes_fragment:yf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:Ef,color_pars_fragment:bf,color_pars_vertex:wf,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:If,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:zf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_fragment:Yf,lightmap_pars_fragment:qf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:$f,lights_pars_begin:Jf,lights_toon_fragment:jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:xp,morphnormal_vertex:_p,morphtarget_pars_vertex:yp,morphtarget_vertex:vp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:bp,normal_vertex:wp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Pp,opaque_fragment:Lp,packing:Ip,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:Yp,specularmap_fragment:qp,specularmap_pars_fragment:Zp,tonemapping_fragment:$p,tonemapping_pars_fragment:Jp,transmission_fragment:Kp,transmission_pars_fragment:jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:om,cube_vert:am,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:xm,meshbasic_frag:_m,meshlambert_vert:ym,meshlambert_frag:vm,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:bm,meshphong_vert:wm,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Cm,meshtoon_vert:Rm,meshtoon_frag:Pm,points_vert:Lm,points_frag:Im,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Fm},rt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},cn={basic:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([rt.lights,rt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};cn.physical={uniforms:Ue([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var yr={r:0,b:0,g:0};function Om(s,t,e,n,i,r,o){let a=new dt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===so)?(h===void 0&&(h=new nt(new Lt(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Xi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new nt(new dn(2,2),new Se({name:"BackgroundMaterial",uniforms:Xi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(yr,Gh(s)),n.buffers.color.setClear(yr.r,yr.g,yr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function Bm(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,N,G,Y,X){let W=!1;if(o){let J=x(Y,G,N);c!==J&&(c=J,f(c.object)),W=p(L,Y,G,X),W&&y(L,Y,G,X)}else{let J=N.wireframe===!0;(c.geometry!==Y.id||c.program!==G.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=G.id,c.wireframe=J,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(L,N,G,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,G){let Y=G.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let J=W[Y];return J===void 0&&(J=m(d()),W[Y]=J),J}function m(L){let N=[],G=[],Y=[];for(let X=0;X<i;X++)N[X]=0,G[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function p(L,N,G,Y){let X=c.attributes,W=N.attributes,J=0,Q=G.getAttributes();for(let ut in Q)if(Q[ut].location>=0){let q=X[ut],ct=W[ut];if(ct===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function y(L,N,G,Y){let X={},W=N.attributes,J=0,Q=G.getAttributes();for(let ut in Q)if(Q[ut].location>=0){let q=W[ut];q===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),X[ut]=ct,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function _(){let L=c.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function S(L){R(L,0)}function R(L,N){let G=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;G[L]=1,Y[L]===0&&(s.enableVertexAttribArray(L),Y[L]=1),X[L]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function w(){let L=c.newAttributes,N=c.enabledAttributes;for(let G=0,Y=N.length;G<Y;G++)N[G]!==L[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function C(L,N,G,Y,X,W,J){J===!0?s.vertexAttribIPointer(L,N,G,X,W):s.vertexAttribPointer(L,N,G,Y,X,W)}function I(L,N,G,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let X=Y.attributes,W=G.getAttributes(),J=N.defaultAttributeValues;for(let Q in W){let ut=W[Q];if(ut.location>=0){let V=X[Q];if(V===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let q=V.normalized,ct=V.itemSize,vt=e.get(V);if(vt===void 0)continue;let _t=vt.buffer,Ut=vt.type,Ft=vt.bytesPerElement,At=n.isWebGL2===!0&&(Ut===s.INT||Ut===s.UNSIGNED_INT||V.gpuType===Lh);if(V.isInterleavedBufferAttribute){let Yt=V.data,F=Yt.stride,Pe=V.offset;if(Yt.isInstancedInterleavedBuffer){for(let St=0;St<ut.locationSize;St++)R(ut.location+St,Yt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let St=0;St<ut.locationSize;St++)S(ut.location+St);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let St=0;St<ut.locationSize;St++)C(ut.location+St,ct/ut.locationSize,Ut,q,F*Ft,(Pe+ct/ut.locationSize*St)*Ft,At)}else{if(V.isInstancedBufferAttribute){for(let Yt=0;Yt<ut.locationSize;Yt++)R(ut.location+Yt,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Yt=0;Yt<ut.locationSize;Yt++)S(ut.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Yt=0;Yt<ut.locationSize;Yt++)C(ut.location+Yt,ct/ut.locationSize,Ut,q,ct*Ft,ct/ut.locationSize*Yt*Ft,At)}}else if(J!==void 0){let q=J[Q];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(ut.location,q);break;case 3:s.vertexAttrib3fv(ut.location,q);break;case 4:s.vertexAttrib4fv(ut.location,q);break;default:s.vertexAttrib1fv(ut.location,q)}}}}w()}function v(){H();for(let L in a){let N=a[L];for(let G in N){let Y=N[G];for(let X in Y)g(Y[X].object),delete Y[X];delete N[G]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let N=a[L.id];for(let G in N){let Y=N[G];for(let X in Y)g(Y[X].object),delete Y[X];delete N[G]}delete a[L.id]}function U(L){for(let N in a){let G=a[N];if(G[L.id]===void 0)continue;let Y=G[L.id];for(let X in Y)g(Y[X].object),delete Y[X];delete G[L.id]}}function H(){tt(),h=!0,c!==l&&(c=l,f(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:w}}function km(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=o||t.has("OES_texture_float"),R=_&&S,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function Hm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Sn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,S=p.clippingState||null;l.value=S,S=h(g,d,_,f);for(let R=0;R!==_;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==x;++_,S+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Vm(s){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=Hi:a===Ua&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Va(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yi=class extends Vr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fi=4,jc=[.125,.215,.35,.446,.526,.582],ii=20,Ma=new Yi,Qc=new dt,Sa=null,Ea=0,ba=0,ei=(1+Math.sqrt(5))/2,Ii=1/ei,th=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,ei,Ii),new A(0,ei,-Ii),new A(Ii,0,ei),new A(-Ii,0,ei),new A(ei,Ii,0),new A(-ei,Ii,0)],qi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,ba),t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:sn,format:nn,colorSpace:wn,depthBuffer:!1},i=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Wm(r,t,e)}return i}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,i){let a=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Bn,h.autoClear=!1;let f=new ne({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new nt(new Lt,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Qc),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;vr(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hi||t.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=th[(i-1)%th.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ii-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);let p=[],y=0;for(let C=0;C<ii;++C){let I=C/x,v=Math.exp(-I*I/2);p.push(v),C===0?y+=v:C<m&&(y+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let S=this._sizeLods[i],R=3*S*(i>_-Fi?i-_+Fi:0),w=4*(this._cubeSize-S);vr(e,R,w,3*S,2*S),l.setRenderTarget(e),l.render(u,Ma)}};function Gm(s){let t=[],e=[],n=[],i=s,r=s-Fi+1+jc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Fi?l=jc[o-s+Fi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,I=w>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(v,x*g*w),_.set(d,m*g*w);let b=[w,w,w,w,w,w];S.set(b,p*g*w)}let R=new Me;R.setAttribute("position",new Fe(y,x)),R.setAttribute("uv",new Fe(_,m)),R.setAttribute("faceIndex",new Fe(S,p)),t.push(R),i>Fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eh(s,t,e){let n=new Oe(s,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wm(s,t,e){let n=new Float32Array(ii),i=new A(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function nh(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ih(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Ua,h=l===Hi||l===Vi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new qi(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new qi(s));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qm(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,S=y.length;_<S;_+=3){let R=y[_+0],w=y[_+1],C=y[_+2];d.push(R,w,w,C,C,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,S=y.length/3-1;_<S;_+=3){let R=_+0,w=_+1,C=_+2;d.push(R,w,w,C,C,R)}}else return;let m=new(Hh(d)?Hr:zr)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zm(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function $m(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jm(s,t){return s[0]-t[0]}function Km(s,t){return Math.abs(t[1])-Math.abs(s[1])}function jm(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),S===!0&&(I=3);let v=h.attributes.position.count*I,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let U=new Float32Array(v*b*4*g),H=new Or(U,v,b,g);H.type=On,H.needsUpdate=!0;let tt=I*4;for(let N=0;N<g;N++){let G=R[N],Y=w[N],X=C[N],W=v*b*4*N;for(let J=0;J<G.count;J++){let Q=J*tt;y===!0&&(o.fromBufferAttribute(G,J),U[W+Q+0]=o.x,U[W+Q+1]=o.y,U[W+Q+2]=o.z,U[W+Q+3]=0),_===!0&&(o.fromBufferAttribute(Y,J),U[W+Q+4]=o.x,U[W+Q+5]=o.y,U[W+Q+6]=o.z,U[W+Q+7]=0),S===!0&&(o.fromBufferAttribute(X,J),U[W+Q+8]=o.x,U[W+Q+9]=o.y,U[W+Q+10]=o.z,U[W+Q+11]=X.itemSize===4?o.w:1)}}x={count:g,texture:H,size:new it(v,b)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let S=g[_];S[0]=_,S[1]=d[_]}g.sort(Km);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Jm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let S=a[_],R=S[0],w=S[1];R!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),i[_]=w,p+=w):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Qm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Wr=class extends rn{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:ri,h!==ri&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=Fn),n===void 0&&h===Gi&&(n=si),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xh=new rn,Yh=new Wr(1,1);Yh.compareFunction=kh;var qh=new Or,Zh=new za,$h=new Gr,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function es(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function oo(s,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function t0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function s0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),ge(e,n)}}function r0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ah.set(n),s.uniformMatrix3fv(this.addr,!1,ah),ge(e,n)}}function o0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;oh.set(n),s.uniformMatrix4fv(this.addr,!1,oh),ge(e,n)}}function a0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function u0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function m0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Yh:Xh;e.setTexture2D(t||r,i)}function g0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zh,i)}function x0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$h,i)}function _0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qh,i)}function y0(s){switch(s){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(s,t){s.uniform1fv(this.addr,t)}function M0(s,t){let e=es(t,this.size,2);s.uniform2fv(this.addr,e)}function S0(s,t){let e=es(t,this.size,3);s.uniform3fv(this.addr,e)}function E0(s,t){let e=es(t,this.size,4);s.uniform4fv(this.addr,e)}function b0(s,t){let e=es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function w0(s,t){let e=es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function T0(s,t){let e=es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function A0(s,t){s.uniform1iv(this.addr,t)}function C0(s,t){s.uniform2iv(this.addr,t)}function R0(s,t){s.uniform3iv(this.addr,t)}function P0(s,t){s.uniform4iv(this.addr,t)}function L0(s,t){s.uniform1uiv(this.addr,t)}function I0(s,t){s.uniform2uiv(this.addr,t)}function D0(s,t){s.uniform3uiv(this.addr,t)}function U0(s,t){s.uniform4uiv(this.addr,t)}function N0(s,t,e){let n=this.cache,i=t.length,r=oo(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Xh,r[o])}function F0(s,t,e){let n=this.cache,i=t.length,r=oo(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zh,r[o])}function O0(s,t,e){let n=this.cache,i=t.length,r=oo(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$h,r[o])}function B0(s,t,e){let n=this.cache,i=t.length,r=oo(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||qh,r[o])}function k0(s){switch(s){case 5126:return v0;case 35664:return M0;case 35665:return S0;case 35666:return E0;case 35674:return b0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}var Ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}},Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},Xa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},wa=/(\w+)(\])?(\[|\.)?/g;function ch(s,t){s.seq.push(t),s.map[t.id]=t}function z0(s,t,e){let n=s.name,i=n.length;for(wa.lastIndex=0;;){let r=wa.exec(n),o=wa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ch(e,c===void 0?new Ga(a,s,t):new Wa(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Xa(a),ch(e,u)),e=u}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);z0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function hh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var H0=37297,V0=0;function G0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function W0(s){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s),n;switch(t===e?n="":t===Lr&&e===Pr?n="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(n="LinearSRGBToLinearDisplayP3"),s){case wn:case ro:return[n,"LinearTransferOETF"];case Ee:case Ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function uh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+G0(s.getShaderSource(t),o)}else return i}function X0(s,t){let e=W0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Y0(s,t){let e;switch(t){case wl:e="Linear";break;case Tl:e="Reinhard";break;case Al:e="OptimizedCineon";break;case Bs:e="ACESFilmic";break;case Cl:e="AgX";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function q0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function Z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Oi).join(`
`)}function $0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Oi(s){return s!==""}function dh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(K0,Q0)}var j0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Q0(s,t){let e=Bt[t];if(e===void 0){let n=j0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(s){return s.replace(tg,eg)}function eg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function mh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Vi:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function og(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ag(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ng(e),c=ig(e),h=sg(e),u=rg(e),d=og(e),f=e.isWebGL2?"":q0(e),g=Z0(e),x=$0(r),m=i.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Oi).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Oi).join(`
`),y.length>0&&(y+=`
`)):(p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),y=[f,mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Ya(o),o=dh(o,e),o=fh(o,e),a=Ya(a),a=dh(a,e),a=fh(a,e),o=ph(o),a=ph(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let S=_+p+o,R=_+y+a,w=hh(i,i.VERTEX_SHADER,S),C=hh(i,i.FRAGMENT_SHADER,R);i.attachShader(m,w),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(H){if(s.debug.checkShaderErrors){let tt=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(C).trim(),G=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,C);else{let X=uh(i,w,"vertex"),W=uh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+X+`
`+W)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||N==="")&&(Y=!1);Y&&(H.diagnostics={runnable:G,programLog:tt,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:y}})}i.deleteShader(w),i.deleteShader(C),v=new zi(i,m),b=J0(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,H0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}var lg=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Za(t),e.set(t,n)),n}},Za=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function cg(s,t,e,n,i,r,o){let a=new kr,l=new qa,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,b,U,H,tt){let L=H.fog,N=tt.geometry,G=v.isMeshStandardMaterial?H.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),X=Y&&Y.mapping===so?Y.image.height:null,W=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=J!==void 0?J.length:0,ut=0;N.morphAttributes.position!==void 0&&(ut=1),N.morphAttributes.normal!==void 0&&(ut=2),N.morphAttributes.color!==void 0&&(ut=3);let V,q,ct,vt;if(W){let Le=cn[W];V=Le.vertexShader,q=Le.fragmentShader}else V=v.vertexShader,q=v.fragmentShader,l.update(v),ct=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);let _t=s.getRenderTarget(),Ut=tt.isInstancedMesh===!0,Ft=tt.isBatchedMesh===!0,At=!!v.map,Yt=!!v.matcap,F=!!Y,Pe=!!v.aoMap,St=!!v.lightMap,It=!!v.bumpMap,mt=!!v.normalMap,oe=!!v.displacementMap,kt=!!v.emissiveMap,T=!!v.metalnessMap,M=!!v.roughnessMap,B=v.anisotropy>0,K=v.clearcoat>0,$=v.iridescence>0,j=v.sheen>0,gt=v.transmission>0,lt=B&&!!v.anisotropyMap,ft=K&&!!v.clearcoatMap,wt=K&&!!v.clearcoatNormalMap,zt=K&&!!v.clearcoatRoughnessMap,Z=$&&!!v.iridescenceMap,Jt=$&&!!v.iridescenceThicknessMap,Xt=j&&!!v.sheenColorMap,Pt=j&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,pt=!!v.specularColorMap,Ot=!!v.specularIntensityMap,$t=gt&&!!v.transmissionMap,le=gt&&!!v.thicknessMap,Vt=!!v.gradientMap,st=!!v.alphaMap,P=v.alphaTest>0,ot=!!v.alphaHash,at=!!v.extensions,Ct=!!N.attributes.uv1,Et=!!N.attributes.uv2,Qt=!!N.attributes.uv3,te=Bn;return v.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(te=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:q,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ft,instancing:Ut,instancingColor:Ut&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:wn,map:At,matcap:Yt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:St,bumpMap:It,normalMap:mt,displacementMap:d&&oe,emissiveMap:kt,normalMapObjectSpace:mt&&v.normalMapType===pd,normalMapTangentSpace:mt&&v.normalMapType===Pl,metalnessMap:T,roughnessMap:M,anisotropy:B,anisotropyMap:lt,clearcoat:K,clearcoatMap:ft,clearcoatNormalMap:wt,clearcoatRoughnessMap:zt,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:Jt,sheen:j,sheenColorMap:Xt,sheenRoughnessMap:Pt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Ot,transmission:gt,transmissionMap:$t,thicknessMap:le,gradientMap:Vt,opaque:v.transparent===!1&&v.blending===Bi,alphaMap:st,alphaTest:P,alphaHash:ot,combine:v.combine,mapUv:At&&x(v.map.channel),aoMapUv:Pe&&x(v.aoMap.channel),lightMapUv:St&&x(v.lightMap.channel),bumpMapUv:It&&x(v.bumpMap.channel),normalMapUv:mt&&x(v.normalMap.channel),displacementMapUv:oe&&x(v.displacementMap.channel),emissiveMapUv:kt&&x(v.emissiveMap.channel),metalnessMapUv:T&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:lt&&x(v.anisotropyMap.channel),clearcoatMapUv:ft&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(v.sheenRoughnessMap.channel),specularMapUv:Mt&&x(v.specularMap.channel),specularColorMapUv:pt&&x(v.specularColorMap.channel),specularIntensityMapUv:Ot&&x(v.specularIntensityMap.channel),transmissionMapUv:$t&&x(v.transmissionMap.channel),thicknessMapUv:le&&x(v.thicknessMap.channel),alphaMapUv:st&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Et,vertexUv3s:Qt,pointsUvs:tt.isPoints===!0&&!!N.attributes.uv&&(At||st),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===jt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===En,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:at&&v.extensions.derivatives===!0,extensionFragDepth:at&&v.extensions.fragDepth===!0,extensionDrawBuffers:at&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(b,v),_(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){let b=g[v.type],U;if(b){let H=cn[b];U=Wn.clone(H.uniforms)}else U=v.uniforms;return U}function R(v,b){let U;for(let H=0,tt=c.length;H<tt;H++){let L=c[H];if(L.cacheKey===b){U=L,++U.usedTimes;break}}return U===void 0&&(U=new ag(s,b,v,r),c.push(U)),U}function w(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:I}}function hg(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ug(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function gh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||ug),n.length>1&&n.sort(d||gh),i.length>1&&i.sort(d||gh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function dg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new xh,s.set(n,[o])):i>=r.length?(o=new xh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function fg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new dt};break;case"SpotLight":e={position:new A,direction:new A,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function pg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var mg=0;function gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xg(s,t){let e=new fg,n=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);let r=new A,o=new re,a=new re;function l(h,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,S=0,R=0,w=0,C=0,I=0,v=0;h.sort(gg);let b=u===!0?Math.PI:1;for(let H=0,tt=h.length;H<tt;H++){let L=h[H],N=L.color,G=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*G*b,f+=N.g*G*b,g+=N.b*G*b;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],G);v++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let J=L.shadow,Q=n.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,S++}i.directional[x]=W,x++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(G*b),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[p]=W;let J=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=J.matrix,L.castShadow){let Q=n.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=X,w++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(N).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=W,y++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,Q=n.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G*b),W.groundColor.copy(L.groundColor).multiplyScalar(G*b),i.hemi[_]=W,_++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let U=i.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==_||U.numDirectionalShadows!==S||U.numPointShadows!==R||U.numSpotShadows!==w||U.numSpotMaps!==C||U.numLightProbes!==v)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=_,U.numDirectionalShadows=S,U.numPointShadows=R,U.numSpotShadows=w,U.numSpotMaps=C,U.numLightProbes=v,i.version=mg++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let S=h[y];if(S.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(S.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function _h(s,t){let e=new xg(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _g(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new _h(s,t),e.set(r,[l])):o>=a.length?(l=new _h(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var $a=class extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mg(s,t,e){let n=new Ls,i=new it,r=new it,o=new se,a=new $a({depthPacking:fd}),l=new Ja,c={},h=e.maxTextureSize,u={[zn]:Ce,[Ce]:zn,[En]:En},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:yg,fragmentShader:vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=s.getRenderTarget(),b=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(hn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let tt=p!==Mn&&this.type===Mn,L=p===Mn&&this.type!==Mn;for(let N=0,G=w.length;N<G;N++){let Y=w[N],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||tt===!0||L===!0){let Q=this.type!==Mn?{minFilter:Ne,magFilter:Ne}:{};X.map!==null&&X.map.dispose(),X.map=new Oe(i.x,i.y,Q),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let Q=0;Q<J;Q++){let ut=X.getViewport(Q);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),H.viewport(o),X.updateMatrices(Y,Q),n=X.getFrustum(),S(C,I,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Mn&&y(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,U)};function y(w,C){let I=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Oe(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,f,x,null)}function _(w,C,I,v){let b=null,U=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=b.uuid,tt=C.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let N=L[tt];N===void 0&&(N=b.clone(),L[tt]=N,C.addEventListener("dispose",R)),b=N}if(b.visible=C.visible,b.wireframe=C.wireframe,v===Mn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=s.properties.get(b);H.light=I}return b}function S(w,C,I,v,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let tt=t.update(w),L=w.material;if(Array.isArray(L)){let N=tt.groups;for(let G=0,Y=N.length;G<Y;G++){let X=N[G],W=L[X.materialIndex];if(W&&W.visible){let J=_(w,W,v,b);w.onBeforeShadow(s,w,C,I,tt,J,X),s.renderBufferDirect(I,null,tt,J,w,X),w.onAfterShadow(s,w,C,I,tt,J,X)}}}else if(L.visible){let N=_(w,L,v,b);w.onBeforeShadow(s,w,C,I,tt,N,null),s.renderBufferDirect(I,null,tt,N,w,null),w.onAfterShadow(s,w,C,I,tt,N,null)}}let H=w.children;for(let tt=0,L=H.length;tt<L;tt++)S(H[tt],C,I,v,b)}function R(w){w.target.removeEventListener("dispose",R);for(let I in c){let v=c[I],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Sg(s,t,e){let n=e.isWebGL2;function i(){let P=!1,ot=new se,at=null,Ct=new se(0,0,0,0);return{setMask:function(Et){at!==Et&&!P&&(s.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){P=Et},setClear:function(Et,Qt,te,xe,Le){Le===!0&&(Et*=xe,Qt*=xe,te*=xe),ot.set(Et,Qt,te,xe),Ct.equals(ot)===!1&&(s.clearColor(Et,Qt,te,xe),Ct.copy(ot))},reset:function(){P=!1,at=null,Ct.set(-1,0,0,0)}}}function r(){let P=!1,ot=null,at=null,Ct=null;return{setTest:function(Et){Et?Ft(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Et){ot!==Et&&!P&&(s.depthMask(Et),ot=Et)},setFunc:function(Et){if(at!==Et){switch(Et){case qu:s.depthFunc(s.NEVER);break;case Zu:s.depthFunc(s.ALWAYS);break;case $u:s.depthFunc(s.LESS);break;case Tr:s.depthFunc(s.LEQUAL);break;case Ju:s.depthFunc(s.EQUAL);break;case Ku:s.depthFunc(s.GEQUAL);break;case ju:s.depthFunc(s.GREATER);break;case Qu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=Et}},setLocked:function(Et){P=Et},setClear:function(Et){Ct!==Et&&(s.clearDepth(Et),Ct=Et)},reset:function(){P=!1,ot=null,at=null,Ct=null}}}function o(){let P=!1,ot=null,at=null,Ct=null,Et=null,Qt=null,te=null,xe=null,Le=null;return{setTest:function(ee){P||(ee?Ft(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ee){ot!==ee&&!P&&(s.stencilMask(ee),ot=ee)},setFunc:function(ee,Ie,ln){(at!==ee||Ct!==Ie||Et!==ln)&&(s.stencilFunc(ee,Ie,ln),at=ee,Ct=Ie,Et=ln)},setOp:function(ee,Ie,ln){(Qt!==ee||te!==Ie||xe!==ln)&&(s.stencilOp(ee,Ie,ln),Qt=ee,te=Ie,xe=ln)},setLocked:function(ee){P=ee},setClear:function(ee){Le!==ee&&(s.clearStencil(ee),Le=ee)},reset:function(){P=!1,ot=null,at=null,Ct=null,Et=null,Qt=null,te=null,xe=null,Le=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,S=null,R=null,w=null,C=null,I=null,v=new dt(0,0,0),b=0,U=!1,H=null,tt=null,L=null,N=null,G=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let Q=null,ut={},V=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),ct=new se().fromArray(V),vt=new se().fromArray(q);function _t(P,ot,at,Ct){let Et=new Uint8Array(4),Qt=s.createTexture();s.bindTexture(P,Qt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<at;te++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(ot+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return Qt}let Ut={};Ut[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(s.DEPTH_TEST),l.setFunc(Tr),kt(!1),T(jl),Ft(s.CULL_FACE),mt(hn);function Ft(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function At(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Yt(P,ot){return f[P]!==ot?(s.bindFramebuffer(P,ot),f[P]=ot,n&&(P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ot),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function F(P,ot){let at=x,Ct=!1;if(P)if(at=g.get(ot),at===void 0&&(at=[],g.set(ot,at)),P.isWebGLMultipleRenderTargets){let Et=P.texture;if(at.length!==Et.length||at[0]!==s.COLOR_ATTACHMENT0){for(let Qt=0,te=Et.length;Qt<te;Qt++)at[Qt]=s.COLOR_ATTACHMENT0+Qt;at.length=Et.length,Ct=!0}}else at[0]!==s.COLOR_ATTACHMENT0&&(at[0]=s.COLOR_ATTACHMENT0,Ct=!0);else at[0]!==s.BACK&&(at[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Pe(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let St={[ni]:s.FUNC_ADD,[Iu]:s.FUNC_SUBTRACT,[Du]:s.FUNC_REVERSE_SUBTRACT};if(n)St[ec]=s.MIN,St[nc]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(St[ec]=P.MIN_EXT,St[nc]=P.MAX_EXT)}let It={[Uu]:s.ZERO,[Nu]:s.ONE,[Fu]:s.SRC_COLOR,[La]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[zu]:s.DST_COLOR,[Bu]:s.DST_ALPHA,[Ou]:s.ONE_MINUS_SRC_COLOR,[Ia]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[ku]:s.ONE_MINUS_DST_ALPHA,[Gu]:s.CONSTANT_COLOR,[Wu]:s.ONE_MINUS_CONSTANT_COLOR,[Xu]:s.CONSTANT_ALPHA,[Yu]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(P,ot,at,Ct,Et,Qt,te,xe,Le,ee){if(P===hn){p===!0&&(At(s.BLEND),p=!1);return}if(p===!1&&(Ft(s.BLEND),p=!0),P!==Lu){if(P!==y||ee!==U){if((_!==ni||w!==ni)&&(s.blendEquation(s.FUNC_ADD),_=ni,w=ni),ee)switch(P){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hn:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,C=null,I=null,v.set(0,0,0),b=0,y=P,U=ee}return}Et=Et||ot,Qt=Qt||at,te=te||Ct,(ot!==_||Et!==w)&&(s.blendEquationSeparate(St[ot],St[Et]),_=ot,w=Et),(at!==S||Ct!==R||Qt!==C||te!==I)&&(s.blendFuncSeparate(It[at],It[Ct],It[Qt],It[te]),S=at,R=Ct,C=Qt,I=te),(xe.equals(v)===!1||Le!==b)&&(s.blendColor(xe.r,xe.g,xe.b,Le),v.copy(xe),b=Le),y=P,U=!1}function oe(P,ot){P.side===En?At(s.CULL_FACE):Ft(s.CULL_FACE);let at=P.side===Ce;ot&&(at=!at),kt(at),P.blending===Bi&&P.transparent===!1?mt(hn):mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Ct=P.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){H!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),H=P)}function T(P){P!==Ru?(Ft(s.CULL_FACE),P!==tt&&(P===jl?s.cullFace(s.BACK):P===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),tt=P}function M(P){P!==L&&(X&&s.lineWidth(P),L=P)}function B(P,ot,at){P?(Ft(s.POLYGON_OFFSET_FILL),(N!==ot||G!==at)&&(s.polygonOffset(ot,at),N=ot,G=at)):At(s.POLYGON_OFFSET_FILL)}function K(P){P?Ft(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function $(P){P===void 0&&(P=s.TEXTURE0+Y-1),Q!==P&&(s.activeTexture(P),Q=P)}function j(P,ot,at){at===void 0&&(Q===null?at=s.TEXTURE0+Y-1:at=Q);let Ct=ut[at];Ct===void 0&&(Ct={type:void 0,texture:void 0},ut[at]=Ct),(Ct.type!==P||Ct.texture!==ot)&&(Q!==at&&(s.activeTexture(at),Q=at),s.bindTexture(P,ot||Ut[P]),Ct.type=P,Ct.texture=ot)}function gt(){let P=ut[Q];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(P){ct.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ct.copy(P))}function $t(P){vt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function le(P,ot){let at=u.get(ot);at===void 0&&(at=new WeakMap,u.set(ot,at));let Ct=at.get(P);Ct===void 0&&(Ct=s.getUniformBlockIndex(ot,P.name),at.set(P,Ct))}function Vt(P,ot){let Ct=u.get(ot).get(P);h.get(ot)!==Ct&&(s.uniformBlockBinding(ot,Ct,P.__bindingPointIndex),h.set(ot,Ct))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Q=null,ut={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,S=null,R=null,w=null,C=null,I=null,v=new dt(0,0,0),b=0,U=!1,H=null,tt=null,L=null,N=null,G=null,ct.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:At,bindFramebuffer:Yt,drawBuffers:F,useProgram:Pe,setBlending:mt,setMaterial:oe,setFlipSided:kt,setCullFace:T,setLineWidth:M,setPolygonOffset:B,setScissorTest:K,activeTexture:$,bindTexture:j,unbindTexture:gt,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:Mt,texImage3D:pt,updateUBOMapping:le,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Pt,texSubImage2D:wt,texSubImage3D:zt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Jt,scissor:Ot,viewport:$t,reset:st}}function Eg(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Ur("canvas")}function x(T,M,B,K){let $=1;if((T.width>K||T.height>K)&&($=K/Math.max(T.width,T.height)),$<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let j=M?Dr:Math.floor,gt=j($*T.width),lt=j($*T.height);u===void 0&&(u=g(gt,lt));let ft=B?g(gt,lt):u;return ft.width=gt,ft.height=lt,ft.getContext("2d").drawImage(T,0,0,gt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+gt+"x"+lt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Ba(T.width)&&Ba(T.height)}function p(T){return a?!1:T.wrapS!==en||T.wrapT!==en||T.minFilter!==Ne&&T.minFilter!==Ze}function y(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ne&&T.minFilter!==Ze}function _(T){s.generateMipmap(T)}function S(T,M,B,K,$=!1){if(a===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=M;if(M===s.RED&&(B===s.FLOAT&&(j=s.R32F),B===s.HALF_FLOAT&&(j=s.R16F),B===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.R8UI),B===s.UNSIGNED_SHORT&&(j=s.R16UI),B===s.UNSIGNED_INT&&(j=s.R32UI),B===s.BYTE&&(j=s.R8I),B===s.SHORT&&(j=s.R16I),B===s.INT&&(j=s.R32I)),M===s.RG&&(B===s.FLOAT&&(j=s.RG32F),B===s.HALF_FLOAT&&(j=s.RG16F),B===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RGBA){let gt=$?Rr:Zt.getTransfer(K);B===s.FLOAT&&(j=s.RGBA32F),B===s.HALF_FLOAT&&(j=s.RGBA16F),B===s.UNSIGNED_BYTE&&(j=gt===jt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function R(T,M,B){return y(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==Ze?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===Ne||T===ic||T===Ko?s.NEAREST:s.LINEAR}function C(T){let M=T.target;M.removeEventListener("dispose",C),v(M),M.isVideoTexture&&h.delete(M)}function I(T){let M=T.target;M.removeEventListener("dispose",I),U(M)}function v(T){let M=n.get(T);if(M.__webglInit===void 0)return;let B=T.source,K=d.get(B);if(K){let $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(K).length===0&&d.delete(B)}n.remove(T)}function b(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let B=T.source,K=d.get(B);delete K[M.__cacheKey],o.memory.textures--}function U(T){let M=T.texture,B=n.get(T),K=n.get(M);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let j=0;j<B.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(B.__webglFramebuffer[$][j]);else s.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)s.deleteFramebuffer(B.__webglFramebuffer[$]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let $=0,j=M.length;$<j;$++){let gt=n.get(M[$]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(M[$])}n.remove(M),n.remove(T)}let H=0;function tt(){H=0}function L(){let T=H;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),H+=1,T}function N(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function G(T,M){let B=n.get(T);if(T.isVideoTexture&&oe(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,T,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function Y(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ct(B,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function X(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ct(B,T,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function W(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){vt(B,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let J={[Na]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},Q={[Ne]:s.NEAREST,[ic]:s.NEAREST_MIPMAP_NEAREST,[Ko]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[id]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},ut={[md]:s.NEVER,[Md]:s.ALWAYS,[gd]:s.LESS,[kh]:s.LEQUAL,[xd]:s.EQUAL,[vd]:s.GEQUAL,[_d]:s.GREATER,[yd]:s.NOTEQUAL};function V(T,M,B){if(B?(s.texParameteri(T,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Q[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Q[M.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==en||M.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(M.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Ne&&M.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ne||M.minFilter!==Ko&&M.minFilter!==Rs||M.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===sn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function q(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,$=d.get(K);$===void 0&&($={},d.set(K,$));let j=N(M);if(j!==T.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[j].usedTimes++;let gt=$[T.__cacheKey];gt!==void 0&&($[T.__cacheKey].usedTimes--,gt.usedTimes===0&&b(M)),T.__cacheKey=j,T.__webglTexture=$[j].texture}return B}function ct(T,M,B){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);let $=q(T,M),j=M.source;e.bindTexture(K,T.__webglTexture,s.TEXTURE0+B);let gt=n.get(j);if(j.version!==gt.__version||$===!0){e.activeTexture(s.TEXTURE0+B);let lt=Zt.getPrimaries(Zt.workingColorSpace),ft=M.colorSpace===$e?null:Zt.getPrimaries(M.colorSpace),wt=M.colorSpace===$e||lt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let zt=p(M)&&m(M.image)===!1,Z=x(M.image,zt,!1,i.maxTextureSize);Z=kt(M,Z);let Jt=m(Z)||a,Xt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Mt=S(M.internalFormat,Xt,Pt,M.colorSpace,M.isVideoTexture);V(K,M,Jt);let pt,Ot=M.mipmaps,$t=a&&M.isVideoTexture!==!0&&Mt!==Oh,le=gt.__version===void 0||$===!0,Vt=R(M,Z,Jt);if(M.isDepthTexture)Mt=s.DEPTH_COMPONENT,a?M.type===On?Mt=s.DEPTH_COMPONENT32F:M.type===Fn?Mt=s.DEPTH_COMPONENT24:M.type===si?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:M.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ri&&Mt===s.DEPTH_COMPONENT&&M.type!==Rl&&M.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fn,Pt=r.convert(M.type)),M.format===Gi&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,M.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=si,Pt=r.convert(M.type))),le&&($t?e.texStorage2D(s.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Xt,Pt,null));else if(M.isDataTexture)if(Ot.length>0&&Jt){$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,Xt,Pt,pt.data);M.generateMipmaps=!1}else $t?(le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Xt,Pt,Z.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Xt,Pt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Mt,Ot[0].width,Ot[0].height,Z.depth);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],M.format!==nn?Xt!==null?$t?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,Xt,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Mt,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,Xt,Pt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Mt,pt.width,pt.height,Z.depth,0,Xt,Pt,pt.data)}else{$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],M.format!==nn?Xt!==null?$t?e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,Xt,Pt,pt.data)}else if(M.isDataArrayTexture)$t?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Xt,Pt,Z.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,Xt,Pt,Z.data);else if(M.isData3DTexture)$t?(le&&e.texStorage3D(s.TEXTURE_3D,Vt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Xt,Pt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,Xt,Pt,Z.data);else if(M.isFramebufferTexture){if(le)if($t)e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height);else{let st=Z.width,P=Z.height;for(let ot=0;ot<Vt;ot++)e.texImage2D(s.TEXTURE_2D,ot,Mt,st,P,0,Xt,Pt,null),st>>=1,P>>=1}}else if(Ot.length>0&&Jt){$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,Xt,Pt,pt):e.texImage2D(s.TEXTURE_2D,st,Mt,Xt,Pt,pt);M.generateMipmaps=!1}else $t?(le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,Pt,Z)):e.texImage2D(s.TEXTURE_2D,0,Mt,Xt,Pt,Z);y(M,Jt)&&_(K),gt.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function vt(T,M,B){if(M.image.length!==6)return;let K=q(T,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);let j=n.get($);if($.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+B);let gt=Zt.getPrimaries(Zt.workingColorSpace),lt=M.colorSpace===$e?null:Zt.getPrimaries(M.colorSpace),ft=M.colorSpace===$e||gt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let wt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let st=0;st<6;st++)!wt&&!zt?Z[st]=x(M.image[st],!1,!0,i.maxCubemapSize):Z[st]=zt?M.image[st].image:M.image[st],Z[st]=kt(M,Z[st]);let Jt=Z[0],Xt=m(Jt)||a,Pt=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),pt=S(M.internalFormat,Pt,Mt,M.colorSpace),Ot=a&&M.isVideoTexture!==!0,$t=j.__version===void 0||K===!0,le=R(M,Jt,Xt);V(s.TEXTURE_CUBE_MAP,M,Xt);let Vt;if(wt){Ot&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,Jt.width,Jt.height);for(let st=0;st<6;st++){Vt=Z[st].mipmaps;for(let P=0;P<Vt.length;P++){let ot=Vt[P];M.format!==nn?Pt!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,Pt,Mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,pt,ot.width,ot.height,0,Pt,Mt,ot.data)}}}else{Vt=M.mipmaps,Ot&&$t&&(Vt.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,Z[0].width,Z[0].height));for(let st=0;st<6;st++)if(zt){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Z[st].width,Z[st].height,Pt,Mt,Z[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Z[st].width,Z[st].height,0,Pt,Mt,Z[st].data);for(let P=0;P<Vt.length;P++){let at=Vt[P].image[st].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,at.width,at.height,Pt,Mt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,pt,at.width,at.height,0,Pt,Mt,at.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,Mt,Z[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Pt,Mt,Z[st]);for(let P=0;P<Vt.length;P++){let ot=Vt[P];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,Pt,Mt,ot.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,pt,Pt,Mt,ot.image[st])}}}y(M,Xt)&&_(s.TEXTURE_CUBE_MAP),j.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _t(T,M,B,K,$,j){let gt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),ft=S(B.internalFormat,gt,lt,B.colorSpace);if(!n.get(M).__hasExternalTextures){let zt=Math.max(1,M.width>>j),Z=Math.max(1,M.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,j,ft,zt,Z,M.depth,0,gt,lt,null):e.texImage2D($,j,ft,zt,Z,0,gt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,0,It(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(T,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let K=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||mt(M)){let $=M.depthTexture;$&&$.isDepthTexture&&($.type===On?K=s.DEPTH_COMPONENT32F:$.type===Fn&&(K=s.DEPTH_COMPONENT24));let j=It(M);mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,K,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,K,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let K=It(M);B&&mt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let K=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0;$<K.length;$++){let j=K[$],gt=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),ft=S(j.internalFormat,gt,lt,j.colorSpace),wt=It(M);B&&mt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ft,M.width,M.height):mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let K=n.get(M.depthTexture).__webglTexture,$=It(M);if(M.depthTexture.format===ri)mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Gi)mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(T){let M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),Ut(M.__webglDepthbuffer[K],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ut(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(T,M,B){let K=n.get(T);M!==void 0&&_t(K.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(T)}function F(T){let M=T.texture,B=n.get(T),K=n.get(M);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++);let $=T.isWebGLCubeRenderTarget===!0,j=T.isWebGLMultipleRenderTargets===!0,gt=m(T)||a;if($){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let ft=0;ft<M.mipmaps.length;ft++)B.__webglFramebuffer[lt][ft]=s.createFramebuffer()}else B.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)B.__webglFramebuffer[lt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(j)if(i.drawBuffers){let lt=T.texture;for(let ft=0,wt=lt.length;ft<wt;ft++){let zt=n.get(lt[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&mt(T)===!1){let lt=j?M:[M];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){let wt=lt[ft];B.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);let zt=r.convert(wt.format,wt.colorSpace),Z=r.convert(wt.type),Jt=S(wt.internalFormat,zt,Z,wt.colorSpace,T.isXRRenderTarget===!0),Xt=It(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Jt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,gt);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)_t(B.__webglFramebuffer[lt][ft],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else _t(B.__webglFramebuffer[lt],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(M,gt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let lt=T.texture;for(let ft=0,wt=lt.length;ft<wt;ft++){let zt=lt[ft],Z=n.get(zt);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture),V(s.TEXTURE_2D,zt,gt),_t(B.__webglFramebuffer,T,zt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),y(zt,gt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?lt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,K.__webglTexture),V(lt,M,gt),a&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)_t(B.__webglFramebuffer[ft],T,M,s.COLOR_ATTACHMENT0,lt,ft);else _t(B.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,lt,0);y(M,gt)&&_(lt),e.unbindTexture()}T.depthBuffer&&At(T)}function Pe(T){let M=m(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let K=0,$=B.length;K<$;K++){let j=B[K];if(y(j,M)){let gt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(j).__webglTexture;e.bindTexture(gt,lt),_(gt),e.unbindTexture()}}}function St(T){if(a&&T.samples>0&&mt(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,K=T.height,$=s.COLOR_BUFFER_BIT,j=[],gt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(T),ft=T.isWebGLMultipleRenderTargets===!0;if(ft)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){j.push(s.COLOR_ATTACHMENT0+wt),T.depthBuffer&&j.push(gt);let zt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(zt===!1&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ft&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),ft){let Z=n.get(M[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]);let zt=n.get(M[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function It(T){return Math.min(i.maxSamples,T.samples)}function mt(T){let M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function kt(T,M){let B=T.colorSpace,K=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Oa||B!==wn&&B!==$e&&(Zt.getTransfer(B)===jt?a===!1?t.has("EXT_sRGB")===!0&&K===nn?(T.format=Oa,T.minFilter=Ze,T.generateMipmaps=!1):M=Nr.sRGBToLinear(M):(K!==nn||$!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=mt}function bg(s,t,e){let n=e.isWebGL2;function i(r,o=$e){let a,l=Zt.getTransfer(o);if(r===kn)return s.UNSIGNED_BYTE;if(r===Ih)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sd)return s.BYTE;if(r===rd)return s.SHORT;if(r===Rl)return s.UNSIGNED_SHORT;if(r===Lh)return s.INT;if(r===Fn)return s.UNSIGNED_INT;if(r===On)return s.FLOAT;if(r===sn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===od)return s.ALPHA;if(r===nn)return s.RGBA;if(r===ad)return s.LUMINANCE;if(r===ld)return s.LUMINANCE_ALPHA;if(r===ri)return s.DEPTH_COMPONENT;if(r===Gi)return s.DEPTH_STENCIL;if(r===Oa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===cd)return s.RED;if(r===Uh)return s.RED_INTEGER;if(r===hd)return s.RG;if(r===Nh)return s.RG_INTEGER;if(r===Fh)return s.RGBA_INTEGER;if(r===jo||r===Qo||r===ta||r===ea)if(l===jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sc||r===rc||r===oc||r===ac)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lc||r===cc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lc)return l===jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===xc||r===_c||r===yc||r===vc||r===Mc||r===Sc||r===Ec)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_c)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sc)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ec)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===na||r===bc||r===wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===na)return l===jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===Tc||r===Ac||r===Cc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===na)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===si?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ka=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ja=class extends un{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],S=new it,R=null,w=new Ae;w.layers.enable(1),w.viewport=new se;let C=new Ae;C.layers.enable(2),C.viewport=new se;let I=[w,C],v=new Ka;v.layers.enable(1),v.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=y[V];return q===void 0&&(q=new Ts,y[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=y[V];return q===void 0&&(q=new Ts,y[V]=q),q.getGripSpace()},this.getHand=function(V){let q=y[V];return q===void 0&&(q=new Ts,y[V]=q),q.getHandSpace()};function H(V){let q=_.indexOf(V.inputSource);if(q===-1)return;let ct=y[q];ct!==void 0&&(ct.update(V.inputSource,V.frame,c||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function tt(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",L);for(let V=0;V<y.length;V++){let q=_[V];q!==null&&(_[V]=null,y[V].disconnect(q))}b=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Oe(f.framebufferWidth,f.framebufferHeight,{format:nn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,ct=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=x.stencil?Gi:ri,ct=x.stencil?si:Fn);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Oe(d.textureWidth,d.textureHeight,{format:nn,type:kn,depthTexture:new Wr(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let q=0;q<V.removed.length;q++){let ct=V.removed[q],vt=_.indexOf(ct);vt>=0&&(_[vt]=null,y[vt].disconnect(ct))}for(let q=0;q<V.added.length;q++){let ct=V.added[q],vt=_.indexOf(ct);if(vt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=_.length){_.push(ct),vt=Ut;break}else if(_[Ut]===null){_[Ut]=ct,vt=Ut;break}if(vt===-1)break}let _t=y[vt];_t&&_t.connect(ct)}}let N=new A,G=new A;function Y(V,q,ct){N.setFromMatrixPosition(q.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);let vt=N.distanceTo(G),_t=q.projectionMatrix.elements,Ut=ct.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),Yt=(_t[9]+1)/_t[5],F=(_t[9]-1)/_t[5],Pe=(_t[8]-1)/_t[0],St=(Ut[8]+1)/Ut[0],It=Ft*Pe,mt=Ft*St,oe=vt/(-Pe+St),kt=oe*-Pe;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(kt),V.translateZ(oe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Ft+oe,M=At+oe,B=It-kt,K=mt+(vt-kt),$=Yt*At/M*T,j=F*At/M*T;V.projectionMatrix.makePerspective(B,K,$,j,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=C.near=w.near=V.near,v.far=C.far=w.far=V.far,(b!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,U=v.far);let q=V.parent,ct=v.cameras;X(v,q);for(let vt=0;vt<ct.length;vt++)X(ct[vt],q);ct.length===2?Y(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),W(V,v,q)};function W(V,q,ct){ct===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ps*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let J=null;function Q(V,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let _t=0;_t<ct.length;_t++){let Ut=ct[_t],Ft=null;if(f!==null)Ft=f.getViewport(Ut);else{let Yt=u.getViewSubImage(d,Ut);Ft=Yt.viewport,_t===0&&(t.setRenderTargetTextures(p,Yt.colorTexture,d.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(p))}let At=I[_t];At===void 0&&(At=new Ae,At.layers.enable(_t),At.viewport=new se,I[_t]=At),At.matrix.fromArray(Ut.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ut.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),_t===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(At)}}for(let ct=0;ct<y.length;ct++){let vt=_[ct],_t=y[ct];vt!==null&&_t!==void 0&&_t.update(vt,q,c||o)}J&&J(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let ut=new Wh;ut.setAnimationLoop(Q),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}};function Tg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ag(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let S=_.program;n.uniformBlockBinding(y,S)}function c(y,_){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let _=u();y.__bindingPointIndex=_;let S=s.createBuffer(),R=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=i[y.id],S=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,C=S.length;w<C;w++){let I=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,b=I.length;v<b;v++){let U=I[v];if(f(U,w,v,R)===!0){let H=U.__offset,tt=Array.isArray(U.value)?U.value:[U.value],L=0;for(let N=0;N<tt.length;N++){let G=tt[N],Y=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,H+L,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,S,R){let w=y.value,C=_+"_"+S;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let I=R[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(y){let _=y.uniforms,S=0,R=16;for(let C=0,I=_.length;C<I;C++){let v=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,U=v.length;b<U;b++){let H=v[b],tt=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=tt.length;L<N;L++){let G=tt[L],Y=x(G),X=S%R;X!==0&&R-X<Y.boundary&&(S+=R-X),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Y.storage}}}let w=S%R;return w>0&&(S+=R-w),y.__size=S,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Is=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let _=this,S=!1,R=0,w=0,C=null,I=-1,v=null,b=new se,U=new se,H=null,tt=new dt(0),L=0,N=e.width,G=e.height,Y=1,X=null,W=null,J=new se(0,0,N,G),Q=new se(0,0,N,G),ut=!1,V=new Ls,q=!1,ct=!1,vt=null,_t=new re,Ut=new it,Ft=new A,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return C===null?Y:1}let F=n;function Pe(E,D){for(let k=0;k<E.length;k++){let z=E[k],O=e.getContext(z,D);if(O!==null)return O}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){let D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),F=Pe(D,E),F===null)throw Pe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let St,It,mt,oe,kt,T,M,B,K,$,j,gt,lt,ft,wt,zt,Z,Jt,Xt,Pt,Mt,pt,Ot,$t;function le(){St=new Ym(F),It=new zm(F,St,t),St.init(It),pt=new bg(F,St,It),mt=new Sg(F,St,It),oe=new $m(F),kt=new hg,T=new Eg(F,St,mt,kt,It,pt,oe),M=new Vm(_),B=new Xm(_),K=new nf(F,It),Ot=new Bm(F,St,K,It),$=new qm(F,K,oe,Ot),j=new Qm(F,$,K,oe),Xt=new jm(F,It,T),zt=new Hm(kt),gt=new cg(_,M,B,St,It,Ot,zt),lt=new Tg(_,kt),ft=new dg,wt=new _g(St,It),Jt=new Om(_,M,B,mt,j,d,l),Z=new Mg(_,j,It),$t=new Ag(F,oe,It,mt),Pt=new km(F,St,oe,It),Mt=new Zm(F,St,oe,It),oe.programs=gt.programs,_.capabilities=It,_.extensions=St,_.properties=kt,_.renderLists=ft,_.shadowMap=Z,_.state=mt,_.info=oe}le();let Vt=new ja(_,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,D,k=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=D,e.width=Math.floor(E*Y),e.height=Math.floor(D*Y),k===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(N*Y,G*Y).floor()},this.setDrawingBufferSize=function(E,D,k){N=E,G=D,Y=k,e.width=Math.floor(E*k),e.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,D,k,z){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,D,k,z),mt.viewport(b.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,D,k,z){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,D,k,z),mt.scissor(U.copy(Q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){mt.setScissorTest(ut=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(E=!0,D=!0,k=!0){let z=0;if(E){let O=!1;if(C!==null){let ht=C.texture.format;O=ht===Fh||ht===Nh||ht===Uh}if(O){let ht=C.texture.type,xt=ht===kn||ht===Fn||ht===Rl||ht===si||ht===Ih||ht===Dh,bt=Jt.getClearColor(),Rt=Jt.getClearAlpha(),Ht=bt.r,Dt=bt.g,Nt=bt.b;xt?(f[0]=Ht,f[1]=Dt,f[2]=Nt,f[3]=Rt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Ht,g[1]=Dt,g[2]=Nt,g[3]=Rt,F.clearBufferiv(F.COLOR,0,g))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT),k&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),wt.dispose(),kt.dispose(),M.dispose(),B.dispose(),j.dispose(),Ot.dispose(),$t.dispose(),gt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Le),Vt.removeEventListener("sessionend",ee),vt&&(vt.dispose(),vt=null),Ie.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=oe.autoReset,D=Z.enabled,k=Z.autoUpdate,z=Z.needsUpdate,O=Z.type;le(),oe.autoReset=E,Z.enabled=D,Z.autoUpdate=k,Z.needsUpdate=z,Z.type=O}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){let D=E.target;D.removeEventListener("dispose",at),Ct(D)}function Ct(E){Et(E),kt.remove(E)}function Et(E){let D=kt.get(E).programs;D!==void 0&&(D.forEach(function(k){gt.releaseProgram(k)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,z,O,ht){D===null&&(D=At);let xt=O.isMesh&&O.matrixWorld.determinant()<0,bt=wu(E,D,k,z,O);mt.setMaterial(z,xt);let Rt=k.index,Ht=1;if(z.wireframe===!0){if(Rt=$.getWireframeAttribute(k),Rt===void 0)return;Ht=2}let Dt=k.drawRange,Nt=k.attributes.position,de=Dt.start*Ht,ke=(Dt.start+Dt.count)*Ht;ht!==null&&(de=Math.max(de,ht.start*Ht),ke=Math.min(ke,(ht.start+ht.count)*Ht)),Rt!==null?(de=Math.max(de,0),ke=Math.min(ke,Rt.count)):Nt!=null&&(de=Math.max(de,0),ke=Math.min(ke,Nt.count));let _e=ke-de;if(_e<0||_e===1/0)return;Ot.setup(O,z,bt,k,Rt);let mn,ae=Pt;if(Rt!==null&&(mn=K.get(Rt),ae=Mt,ae.setIndex(mn)),O.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Yt()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(O.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),mt.setLineWidth(Gt*Yt()),O.isLineSegments?ae.setMode(F.LINES):O.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else O.isPoints?ae.setMode(F.POINTS):O.isSprite&&ae.setMode(F.TRIANGLES);if(O.isBatchedMesh)ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ae.renderInstances(de,_e,O.count);else if(k.isInstancedBufferGeometry){let Gt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,qo=Math.min(k.instanceCount,Gt);ae.renderInstances(de,_e,qo)}else ae.render(de,_e)};function Qt(E,D,k){E.transparent===!0&&E.side===En&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,js(E,D,k),E.side=zn,E.needsUpdate=!0,js(E,D,k),E.side=En):js(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),m=wt.get(k),m.init(),y.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);let z=new Set;return E.traverse(function(O){let ht=O.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){let bt=ht[xt];Qt(bt,k,O),z.add(bt)}else Qt(ht,k,O),z.add(ht)}),y.pop(),m=null,z},this.compileAsync=function(E,D,k=null){let z=this.compile(E,D,k);return new Promise(O=>{function ht(){if(z.forEach(function(xt){kt.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){O(E);return}setTimeout(ht,10)}St.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let te=null;function xe(E){te&&te(E)}function Le(){Ie.stop()}function ee(){Ie.start()}let Ie=new Wh;Ie.setAnimationLoop(xe),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(E){te=E,Vt.setAnimationLoop(E),E===null?Ie.stop():Ie.start()},Vt.addEventListener("sessionstart",Le),Vt.addEventListener("sessionend",ee),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(D),D=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,D,C),m=wt.get(E,y.length),m.init(),y.push(m),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,q=zt.init(this.clippingPlanes,ct),x=ft.get(E,p.length),x.init(),p.push(x),ln(E,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,W),this.info.render.frame++,q===!0&&zt.beginShadows();let k=m.state.shadowsArray;if(Z.render(k,E,D),q===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(x,E),m.setupLights(_._useLegacyLights),D.isArrayCamera){let z=D.cameras;for(let O=0,ht=z.length;O<ht;O++){let xt=z[O];Yl(x,E,xt,xt.viewport)}}else Yl(x,E,D);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,D),Ot.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ln(E,D,k,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){z&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let xt=j.update(E),bt=E.material;bt.visible&&x.push(E,xt,bt,k,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){let xt=j.update(E),bt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(bt)){let Rt=xt.groups;for(let Ht=0,Dt=Rt.length;Ht<Dt;Ht++){let Nt=Rt[Ht],de=bt[Nt.materialIndex];de&&de.visible&&x.push(E,xt,de,k,Ft.z,Nt)}}else bt.visible&&x.push(E,xt,bt,k,Ft.z,null)}}let ht=E.children;for(let xt=0,bt=ht.length;xt<bt;xt++)ln(ht[xt],D,k,z)}function Yl(E,D,k,z){let O=E.opaque,ht=E.transmissive,xt=E.transparent;m.setupLightsView(k),q===!0&&zt.setGlobalState(_.clippingPlanes,k),ht.length>0&&bu(O,ht,D,k),z&&mt.viewport(b.copy(z)),O.length>0&&Ks(O,D,k),ht.length>0&&Ks(ht,D,k),xt.length>0&&Ks(xt,D,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function bu(E,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ht=It.isWebGL2;vt===null&&(vt=new Oe(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?sn:kn,minFilter:Rs,samples:ht?4:0})),_.getDrawingBufferSize(Ut),ht?vt.setSize(Ut.x,Ut.y):vt.setSize(Dr(Ut.x),Dr(Ut.y));let xt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(tt),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let bt=_.toneMapping;_.toneMapping=Bn,Ks(E,k,z),T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt);let Rt=!1;for(let Ht=0,Dt=D.length;Ht<Dt;Ht++){let Nt=D[Ht],de=Nt.object,ke=Nt.geometry,_e=Nt.material,mn=Nt.group;if(_e.side===En&&de.layers.test(z.layers)){let ae=_e.side;_e.side=Ce,_e.needsUpdate=!0,ql(de,k,z,ke,_e,mn),_e.side=ae,_e.needsUpdate=!0,Rt=!0}}Rt===!0&&(T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt)),_.setRenderTarget(xt),_.setClearColor(tt,L),_.toneMapping=bt}function Ks(E,D,k){let z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ht=E.length;O<ht;O++){let xt=E[O],bt=xt.object,Rt=xt.geometry,Ht=z===null?xt.material:z,Dt=xt.group;bt.layers.test(k.layers)&&ql(bt,D,k,Rt,Ht,Dt)}}function ql(E,D,k,z,O,ht){E.onBeforeRender(_,D,k,z,O,ht),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,D,k,z,E,ht),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=Ce,O.needsUpdate=!0,_.renderBufferDirect(k,D,z,O,E,ht),O.side=zn,O.needsUpdate=!0,_.renderBufferDirect(k,D,z,O,E,ht),O.side=En):_.renderBufferDirect(k,D,z,O,E,ht),E.onAfterRender(_,D,k,z,O,ht)}function js(E,D,k){D.isScene!==!0&&(D=At);let z=kt.get(E),O=m.state.lights,ht=m.state.shadowsArray,xt=O.state.version,bt=gt.getParameters(E,O.state,ht,D,k),Rt=gt.getProgramCacheKey(bt),Ht=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||z.environment),Ht===void 0&&(E.addEventListener("dispose",at),Ht=new Map,z.programs=Ht);let Dt=Ht.get(Rt);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===xt)return $l(E,bt),Dt}else bt.uniforms=gt.getUniforms(E),E.onBuild(k,bt,_),E.onBeforeCompile(bt,_),Dt=gt.acquireProgram(bt,Rt),Ht.set(Rt,Dt),z.uniforms=bt.uniforms;let Nt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),$l(E,bt),z.needsLights=Au(E),z.lightsStateVersion=xt,z.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function Zl(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=zi.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function $l(E,D){let k=kt.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function wu(E,D,k,z,O){D.isScene!==!0&&(D=At),T.resetTextureUnits();let ht=D.fog,xt=z.isMeshStandardMaterial?D.environment:null,bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wn,Rt=(z.isMeshStandardMaterial?B:M).get(z.envMap||xt),Ht=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Nt=!!k.morphAttributes.position,de=!!k.morphAttributes.normal,ke=!!k.morphAttributes.color,_e=Bn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=_.toneMapping);let mn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=mn!==void 0?mn.length:0,Gt=kt.get(z),qo=m.state.lights;if(q===!0&&(ct===!0||E!==v)){let Ye=E===v&&z.id===I;zt.setState(z,E,Ye)}let ce=!1;z.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==qo.state.version||Gt.outputColorSpace!==bt||O.isBatchedMesh&&Gt.batching===!1||!O.isBatchedMesh&&Gt.batching===!0||O.isInstancedMesh&&Gt.instancing===!1||!O.isInstancedMesh&&Gt.instancing===!0||O.isSkinnedMesh&&Gt.skinning===!1||!O.isSkinnedMesh&&Gt.skinning===!0||O.isInstancedMesh&&Gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Gt.instancingColor===!1&&O.instanceColor!==null||Gt.envMap!==Rt||z.fog===!0&&Gt.fog!==ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==zt.numPlanes||Gt.numIntersection!==zt.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Dt||Gt.morphTargets!==Nt||Gt.morphNormals!==de||Gt.morphColors!==ke||Gt.toneMapping!==_e||It.isWebGL2===!0&&Gt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Gt.__version=z.version);let $n=Gt.currentProgram;ce===!0&&($n=js(z,D,O));let Jl=!1,ms=!1,Zo=!1,be=$n.getUniforms(),Jn=Gt.uniforms;if(mt.useProgram($n.program)&&(Jl=!0,ms=!0,Zo=!0),z.id!==I&&(I=z.id,ms=!0),Jl||v!==E){be.setValue(F,"projectionMatrix",E.projectionMatrix),be.setValue(F,"viewMatrix",E.matrixWorldInverse);let Ye=be.map.cameraPosition;Ye!==void 0&&Ye.setValue(F,Ft.setFromMatrixPosition(E.matrixWorld)),It.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&be.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,ms=!0,Zo=!0)}if(O.isSkinnedMesh){be.setOptional(F,O,"bindMatrix"),be.setOptional(F,O,"bindMatrixInverse");let Ye=O.skeleton;Ye&&(It.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),be.setValue(F,"boneTexture",Ye.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(be.setOptional(F,O,"batchingTexture"),be.setValue(F,"batchingTexture",O._matricesTexture,T));let $o=k.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&It.isWebGL2===!0)&&Xt.update(O,k,$n),(ms||Gt.receiveShadow!==O.receiveShadow)&&(Gt.receiveShadow=O.receiveShadow,be.setValue(F,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Jn.envMap.value=Rt,Jn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ms&&(be.setValue(F,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&Tu(Jn,Zo),ht&&z.fog===!0&&lt.refreshFogUniforms(Jn,ht),lt.refreshMaterialUniforms(Jn,z,Y,G,vt),zi.upload(F,Zl(Gt),Jn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(zi.upload(F,Zl(Gt),Jn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&be.setValue(F,"center",O.center),be.setValue(F,"modelViewMatrix",O.modelViewMatrix),be.setValue(F,"normalMatrix",O.normalMatrix),be.setValue(F,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ye=z.uniformsGroups;for(let Jo=0,Cu=Ye.length;Jo<Cu;Jo++)if(It.isWebGL2){let Kl=Ye[Jo];$t.update(Kl,$n),$t.bind(Kl,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Tu(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,D,k){kt.get(E.texture).__webglTexture=D,kt.get(E.depthTexture).__webglTexture=k;let z=kt.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){let k=kt.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){C=E,R=D,w=k;let z=!0,O=null,ht=!1,xt=!1;if(E){let Rt=kt.get(E);Rt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(F.FRAMEBUFFER,null),z=!1):Rt.__webglFramebuffer===void 0?T.setupRenderTarget(E):Rt.__hasExternalTextures&&T.rebindTextures(E,kt.get(E.texture).__webglTexture,kt.get(E.depthTexture).__webglTexture);let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let Dt=kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?O=Dt[D][k]:O=Dt[D],ht=!0):It.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?O=kt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[k]:O=Dt,b.copy(E.viewport),U.copy(E.scissor),H=E.scissorTest}else b.copy(J).multiplyScalar(Y).floor(),U.copy(Q).multiplyScalar(Y).floor(),H=ut;if(mt.bindFramebuffer(F.FRAMEBUFFER,O)&&It.drawBuffers&&z&&mt.drawBuffers(E,O),mt.viewport(b),mt.scissor(U),mt.setScissorTest(H),ht){let Rt=kt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Rt.__webglTexture,k)}else if(xt){let Rt=kt.get(E.texture),Ht=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,k||0,Ht)}I=-1},this.readRenderTargetPixels=function(E,D,k,z,O,ht,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){mt.bindFramebuffer(F.FRAMEBUFFER,bt);try{let Rt=E.texture,Ht=Rt.format,Dt=Rt.type;if(Ht!==nn&&pt.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=Dt===sn&&(St.has("EXT_color_buffer_half_float")||It.isWebGL2&&St.has("EXT_color_buffer_float"));if(Dt!==kn&&pt.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===On&&(It.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&k>=0&&k<=E.height-O&&F.readPixels(D,k,z,O,pt.convert(Ht),pt.convert(Dt),ht)}finally{let Rt=C!==null?kt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,D,k=0){let z=Math.pow(2,-k),O=Math.floor(D.image.width*z),ht=Math.floor(D.image.height*z);T.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,E.x,E.y,O,ht),mt.unbindTexture()},this.copyTextureToTexture=function(E,D,k,z=0){let O=D.image.width,ht=D.image.height,xt=pt.convert(k.format),bt=pt.convert(k.type);T.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,E.x,E.y,O,ht,xt,bt,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,xt,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,z,E.x,E.y,xt,bt,D.image),z===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k,z,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=E.max.x-E.min.x+1,xt=E.max.y-E.min.y+1,bt=E.max.z-E.min.z+1,Rt=pt.convert(z.format),Ht=pt.convert(z.type),Dt;if(z.isData3DTexture)T.setTexture3D(z,0),Dt=F.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)T.setTexture2DArray(z,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);let Nt=F.getParameter(F.UNPACK_ROW_LENGTH),de=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ke=F.getParameter(F.UNPACK_SKIP_PIXELS),_e=F.getParameter(F.UNPACK_SKIP_ROWS),mn=F.getParameter(F.UNPACK_SKIP_IMAGES),ae=k.isCompressedTexture?k.mipmaps[O]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,bt,Rt,Ht,ae.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,bt,Rt,ae.data)):F.texSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,bt,Rt,Ht,ae),F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,_e),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mn),O===0&&z.generateMipmaps&&F.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,mt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ll?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?oi:Bh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===oi?Ee:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Qa=class extends Is{};Qa.prototype.isWebGL1Renderer=!0;var Xr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zi=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ds=class extends Fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new re,yh=new re,Mr=[],vh=new qt,Cg=new re,vs=new nt,Ms=new Gn,$i=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qt),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),vh.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Ms.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),yh.multiplyMatrices(n,Di),vs.matrixWorld=yh,vs.raycast(t,Mr);for(let o=0,a=Mr.length;o<a;o++){let l=Mr[o];l.instanceId=r,l.object=this,e.push(l)}Mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Us=class extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mh=new re,tl=new Br,Sr=new Gn,Er=new A,Yr=class extends pe{constructor(t=new Me,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Mh.copy(i).invert(),tl.copy(t.ray).applyMatrix4(Mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Er.fromBufferAttribute(u,m),Sh(Er,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Er.fromBufferAttribute(u,g),Sh(Er,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sh(s,t,e,n,i,r,o){let a=tl.distanceSqToPoint(s);if(a<e){let l=new A;tl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],o=[],a=new A,l=new re;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ve(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ve(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ns=class extends Je{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new it,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends Ns{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ul(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var br=new A,Ta=new Ul,Aa=new Ul,Ca=new Ul,nl=class extends Je{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(br.subVectors(i[0],i[1]).add(i[0]),c=br);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(br.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ta.calc(l),Aa.calc(l),Ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Rg(s,t){let e=1-s;return e*e*t}function Pg(s,t){return 2*(1-s)*s*t}function Lg(s,t){return s*s*t}function As(s,t,e,n){return Rg(s,t)+Pg(s,e)+Lg(s,n)}function Ig(s,t){let e=1-s;return e*e*e*t}function Dg(s,t){let e=1-s;return 3*e*e*s*t}function Ug(s,t){return 3*(1-s)*s*s*t}function Ng(s,t){return s*s*s*t}function Cs(s,t,e,n,i){return Ig(s,t)+Dg(s,e)+Ug(s,n)+Ng(s,i)}var qr=class extends Je{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,i.x,r.x,o.x,a.x),Cs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends Je{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,i.x,r.x,o.x,a.x),Cs(t,i.y,r.y,o.y,a.y),Cs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends Je{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sl=class extends Je{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends Je{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(As(t,i.x,r.x,o.x),As(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Je{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(As(t,i.x,r.x,o.x),As(t,i.y,r.y,o.y),As(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Eh(a,l.x,c.x,h.x,u.x),Eh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},bh=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:nl,CubicBezierCurve:qr,CubicBezierCurve3:il,EllipseCurve:Ns,LineCurve:Zr,LineCurve3:sl,QuadraticBezierCurve:$r,QuadraticBezierCurve3:rl,SplineCurve:Jr}),ol=class extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new bh[i.type]().fromJSON(i))}return this}},al=class extends ol{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zr(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new $r(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new qr(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Ns(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ll=class s extends Me{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new it,f=new A,g=new A,x=new A,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*i,S=Math.sin(_),R=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*S,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),a.push(d.x,d.y);let C=l[3*w+0]*S,I=l[3*w+1],v=l[3*w+0]*R;c.push(C,I,v)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let S=_+y*t.length,R=S,w=S+t.length,C=S+t.length+1,I=S+1;r.push(R,w,I),r.push(C,I,w)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Kr=class s extends ll{constructor(t=1,e=1,n=4,i=8){let r=new al;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var on=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function y(){let S=new A,R=new A,w=0,C=(e-t)/n;for(let I=0;I<=r;I++){let v=[],b=I/r,U=b*(e-t)+t;for(let H=0;H<=i;H++){let tt=H/i,L=tt*l+a,N=Math.sin(L),G=Math.cos(L);R.x=U*N,R.y=-b*n+m,R.z=U*G,u.push(R.x,R.y,R.z),S.set(N,C,G).normalize(),d.push(S.x,S.y,S.z),f.push(tt,1-b),v.push(g++)}x.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){let b=x[v][I],U=x[v+1][I],H=x[v+1][I+1],tt=x[v][I+1];h.push(b,U,tt),h.push(U,H,tt),w+=6}c.addGroup(p,w,0),p+=w}function _(S){let R=g,w=new it,C=new A,I=0,v=S===!0?t:e,b=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let U=g;for(let H=0;H<=i;H++){let L=H/i*l+a,N=Math.cos(L),G=Math.sin(L);C.x=v*G,C.y=m*b,C.z=v*N,u.push(C.x,C.y,C.z),d.push(0,b,0),w.x=N*.5+.5,w.y=G*.5*b+.5,f.push(w.x,w.y),g++}for(let H=0;H<i;H++){let tt=R+H,L=U+H;S===!0?h.push(L,L+1,tt):h.push(L+1,L,tt),I+=3}c.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jr=class s extends on{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cl=class s extends Me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new A,S=new A,R=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],S),f(e[w+2],R),l(_,S,R,y)}function l(y,_,S,R){let w=R+1,C=[];for(let I=0;I<=w;I++){C[I]=[];let v=y.clone().lerp(S,I/w),b=_.clone().lerp(S,I/w),U=w-I;for(let H=0;H<=U;H++)H===0&&I===w?C[I][H]=v:C[I][H]=v.clone().lerp(b,H/U)}for(let I=0;I<w;I++)for(let v=0;v<2*(w-I)-1;v++){let b=Math.floor(v/2);v%2===0?(d(C[I][b+1]),d(C[I+1][b]),d(C[I][b])):(d(C[I][b+1]),d(C[I+1][b+1]),d(C[I+1][b]))}}function c(y){let _=new A;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(y),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){let y=new A;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let S=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],S=o[y+2],R=o[y+4],w=Math.max(_,S,R),C=Math.min(_,S,R);w>.9&&C<.1&&(_<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let S=y*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){let y=new A,_=new A,S=new A,R=new A,w=new it,C=new it,I=new it;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),w.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),R.copy(y).add(_).add(S).divideScalar(3);let U=m(R);x(w,b+0,y,U),x(C,b+2,_,U),x(I,b+4,S,U)}}function x(y,_,S,R){R<0&&y.x===1&&(o[_]=y.x-1),S.x===0&&S.z===0&&(o[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ji=class s extends cl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ai=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+S,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],S=h[p][y],R=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&f.push(_,S,w),(p!==n-1||l<Math.PI)&&f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qr=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var li=class extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function wr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ki=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends Ki{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:r=t,a=2*e-n;break;case Lc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=t,l=2*n-e;break;case Lc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,S=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+_*o[l+R]+S*o[u+R];return r}},ul=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},dl=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Fg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Cr;var ci=class extends an{};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ar;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends an{};fl.prototype.ValueTypeName="color";var pl=class extends an{};pl.prototype.ValueTypeName="number";var ml=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fs=class extends an{InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.DefaultInterpolation=Cr;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends an{};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ar;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends an{};gl.prototype.ValueTypeName="vector";var xl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Og=new xl,_l=class{constructor(t){this.manager=t!==void 0?t:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ra=new re,wh=new A,Th=new A,to=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ah=new re,Ss=new A,Pa=new A,yl=class extends to{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ss),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),i.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}},eo=class extends Os{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vl=class extends to{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},no=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},io=class extends Os{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ji=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ch(){return(typeof performance>"u"?Date:performance).now()}var Nl="\\[\\]\\.:\\/",Bg=new RegExp("["+Nl+"]","g"),Fl="[^"+Nl+"]",kg="[^"+Nl.replace("\\.","")+"]",zg=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Hg=/(WCOD+)?/.source.replace("WCOD",kg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Wg=new RegExp("^"+zg+Hg+Vg+Gg+"$"),Xg=["material","materials","bones","map"],Ml=class{constructor(t,e,n){let i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ie=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(t){let e=Wg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ie.Composite=Ml;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);var ao=class extends Zi{constructor(t=null){super();let e=new Lt;e.deleteAttribute("uv");let n=new yt({side:Ce}),i=new yt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new eo(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new nt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new nt(e,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new nt(e,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new nt(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new nt(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new nt(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new nt(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new nt(e,ns(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new nt(e,ns(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new nt(e,ns(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new nt(e,ns(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new nt(e,ns(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new nt(e,ns(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(s){let t=new ne;return t.color.setScalar(s),t}var ks,zs,Ke;function Jh(){ks=new Zi,ks.background=new dt(328976),ks.fog=new Xr(328976,.025),zs=new Ae(75,window.innerWidth/window.innerHeight,.1,2e4),zs.position.set(0,5,10),Ke=new Is({antialias:!0,powerPreference:"high-performance"}),Ke.setSize(window.innerWidth,window.innerHeight),Ke.setPixelRatio(window.devicePixelRatio),Ke.shadowMap.enabled=!0,Ke.shadowMap.type=El,Ke.toneMapping=Bs,Ke.toneMappingExposure=.72,document.getElementById("app").appendChild(Ke.domElement);let s=new qi(Ke);return ks.environment=s.fromScene(new ao(Ke),.04).texture,window.addEventListener("resize",Yg),{scene:ks,camera:zs,renderer:Ke}}function Yg(){zs.aspect=window.innerWidth/window.innerHeight,zs.updateProjectionMatrix(),Ke.setSize(window.innerWidth,window.innerHeight)}function Kh(s,t){let e=n=>{let i=s.tick(n);if(!i.first&&!i.skipped){let r=performance.now();t(i.dt),s.reportWork(performance.now()-r)}requestAnimationFrame(e)};requestAnimationFrame(e)}function ui(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=jh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=jh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function jh(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Fe(o,e,n);return i!==void 0&&(l.gpuType=i),l}var lo=class{constructor(t=1337){this.seed=t>>>0||2654435769,this.state=this.seed}next(){let t=this.state;return t^=t<<13,t^=t>>>17,t^=t<<5,t>>>=0,this.state=t,t}float(){return this.next()/4294967296}int(t){return Math.floor(this.float()*t)}range(t,e){return t+this.float()*(e-t)}},co=1337,Qh=new lo(co);function tu(s){co=s>>>0,Qh=new lo(co)}function ho(){return co>>>0}function eu(){return Qh}function Bl(s,t,e){return s[0]*t+s[1]*e}var qg=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],fn=null,Hs=null;function Zg(){if(fn)return;let s=[];for(let t=0;t<256;t++)s[t]=eu().int(256);fn=new Array(512),Hs=new Array(512);for(let t=0;t<512;t++)fn[t]=s[t&255],Hs[t]=qg[fn[t]%12]}function $g(s,t){Zg();let e,n,i,r=.5*(Math.sqrt(3)-1),o=(s+t)*r,a=Math.floor(s+o),l=Math.floor(t+o),c=(3-Math.sqrt(3))/6,h=(a+l)*c,u=a-h,d=l-h,f=s-u,g=t-d,x,m;f>g?(x=1,m=0):(x=0,m=1);let p=f-x+c,y=g-m+c,_=f-1+2*c,S=g-1+2*c,R=a&255,w=l&255,C=.5-f*f-g*g;if(C<0)e=0;else{let b=fn[R+fn[w]]%12;C*=C,e=C*C*Bl(Hs[b],f,g)}let I=.5-p*p-y*y;if(I<0)n=0;else{let b=fn[R+x+fn[w+m]]%12;I*=I,n=I*I*Bl(Hs[b],p,y)}let v=.5-_*_-S*S;if(v<0)i=0;else{let b=fn[R+1+fn[w+1]]%12;v*=v,i=v*v*Bl(Hs[b],_,S)}return 70*(e+n+i)}var di={noise2D:$g};function Tt(s,t,e,n,i,r){let o=new Lt(s,t,e);return o.translate(n,i,r),o}var Jg=new Lt(1,1,1);function An(s,t,e){let n=[];for(let o of t)if(o&&o.pos)n.push(o);else if(o&&o.type==="BoxGeometry"){o.computeBoundingBox();let a=o.boundingBox;n.push({pos:[(a.min.x+a.max.x)/2,(a.min.y+a.max.y)/2,(a.min.z+a.max.z)/2],scale:[o.parameters.width,o.parameters.height,o.parameters.depth]})}if(n.length===0)return;let i=new $i(Jg,e,n.length);i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let r=new pe;for(let o=0;o<n.length;o++){let a=n[o];r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.scale.set(a.scale[0],a.scale[1],a.scale[2]),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}i.instanceMatrix.needsUpdate=!0,s.add(i)}var iu=new yt({color:8947848,roughness:.9,metalness:.1}),Kg=new yt({color:5592405,roughness:.9,metalness:.15}),jg=new yt({color:11184810,roughness:.8,metalness:.05}),Qg=new yt({color:9260604,roughness:.9}),su=new yt({color:2241348,roughness:.7,metalness:.15,envMapIntensity:.45}),tx=new yt({color:3359829,roughness:.6,metalness:.2}),Gs=new yt({color:5592405,roughness:.7,metalness:.3,envMapIntensity:.35}),is=new yt({color:1118481,roughness:.7,metalness:.5}),ex=new ne({color:65535}),w_=new ne({color:16711935}),uo=new yt({color:2236962,roughness:.9}),ru=new yt({color:5592405,roughness:.9}),ou=new yt({color:3812902,roughness:1}),kl=new ne({color:16777215}),nx=new yt({color:16777215,roughness:.9,transparent:!0,opacity:.8}),ix=new ne({color:16777130}),au=new ne({color:1118481,transparent:!0,opacity:0,depthWrite:!1}),sx=new yt({color:5583633,roughness:.9,name:"trunkBrown"}),rx=new yt({color:15658734,roughness:.8,name:"trunkWhite"}),ox=new yt({color:5089079,roughness:.8,name:"leafGreen"}),ax=new yt({color:2250018,roughness:.9,name:"leafDark"}),lx=new yt({color:16755404,roughness:.8,name:"leafPink"}),cx=new yt({color:14513954,roughness:.8,name:"leafOrange"}),hx=new yt({color:14535714,roughness:.8,name:"leafYellow"}),T_=new yt({color:8947848,roughness:1}),ux=new yt({color:5980211,roughness:1}),dx=new yt({color:6710886,roughness:.9,name:"trunkGrey"}),fx=new yt({color:1118481,roughness:.8,name:"trunkBlack"}),Xn=new on(.2,.3,1,5);Xn.translate(0,.5,0);var fi=new Ji(1,1),Vs=new jr(1,1,5);Vs.translate(0,.5,0);function px(s,t,e,n,i,r,o){r==="modern"?nu(s,t,e,n,i,o):r==="brick"?gx(s,t,e,n,i,o):r==="glass"?xx(s,t,e,n,i,o):r==="future"?_x(s,t,e,n,i,o):nu(s,t,e,n,i,o),yx(s,t,e,n,i,o)}function mx(s,t,e,n){n.dirt.push(Tt(1.5,.1,1.5,t,.1,e));let r=2.5+Math.random(),o=(a,l,c,h,u=0)=>{let d=a.clone();d.scale(h.x,h.y,h.z),d.rotateY(u),d.translate(t,c,e),n[l].push(d)};if(s===0)o(Xn,"trunkBrown",0,new A(.3,r,.3)),o(fi,"leafGreen",r,new A(1.8,1.8,1.8));else if(s===1)o(Xn,"trunkBrown",0,new A(.2,2,.2)),o(Vs,"leafDark",2,new A(2,1.5,2)),o(Vs,"leafDark",3.2,new A(1.5,1.5,1.5)),o(Vs,"leafDark",4.4,new A(.8,1.5,.8));else if(s===2)o(Xn,"trunkWhite",0,new A(.2,4,.2)),o(fi,"leafGreen",4,new A(1.6,2,1.6));else if(s===3)o(Xn,"trunkBrown",0,new A(.25,3,.25)),o(fi,"leafGreen",3,new A(2,2,2));else if(s===4)o(Xn,"trunkBlack",0,new A(.25,4.5,.25)),o(Vs,"leafDark",3.5,new A(1.2,5,1.2));else if(s===5){o(Xn,"trunkBrown",0,new A(.3,2.5,.3)),o(fi,"leafGreen",2.5,new A(2.5,1.5,2.5));let a=8;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=Math.sin(c)*1.5,u=Math.cos(c)*1.5;o(fi,"leafGreen",2,new A(.1,2,.1),0);let d=fi.clone();d.scale(.1,2.5,.1),d.translate(t+h,1.5,e+u),n.leafGreen.push(d)}}else o(Xn,"trunkGrey",0,new A(.3,3,.3)),o(fi,"leafDark",3,new A(1.7,1.7,1.7))}function nu(s,t,e,n,i,r){let o=Math.random(),a=r.concrete;o<.3?a=r.concreteDark:o>.7&&(a=r.concreteLight),a.push(Tt(e,n,i,s,n/2,t));let l=Math.floor(n/3.5),c=Math.floor(e/3),h=Math.floor(i/3),u=n/l,d=e/c,f=i/h;for(let g=0;g<c;g++)for(let x=1;x<l;x++){let m=s-e/2+d/2+g*d,p=x*u+u/2;r.glass.push(Tt(d*.7,u*.7,.2,m,p,t+i/2+.05)),r.glass.push(Tt(d*.7,u*.7,.2,m,p,t-i/2-.05))}for(let g=0;g<h;g++)for(let x=1;x<l;x++){let m=t-i/2+f/2+g*f,p=x*u+u/2;r.glass.push(Tt(.2,u*.7,f*.7,s+e/2+.05,p,m)),r.glass.push(Tt(.2,u*.7,f*.7,s-e/2-.05,p,m))}for(let g=0;g<=l;g++)(Math.random()>.5?a:r.darkMetal).push(Tt(e+.3,.4,i+.3,s,g*u,t));for(let g=0;g<=c;g++)a.push(Tt(.6,n,i-.5,s-e/2+g*d,n/2,t))}function gx(s,t,e,n,i,r){r.brick.push(Tt(e,n,i,s,n/2,t));let o=3.2,a=Math.floor(n/o),l=1.8,c=2,h=3,u=Math.floor(e/h);for(let d=1;d<a;d++){let f=d*o+1;for(let g=0;g<u;g++){let x=-e/2+2+g*h;if(x>e/2-1)continue;let m=s+x;r.concrete.push(Tt(l+.2,c+.2,.2,m,f,t+i/2)),r.concrete.push(Tt(l+.2,c+.2,.2,m,f,t-i/2)),r.glass.push(Tt(l,c,.1,m,f,t+i/2+.1)),r.glass.push(Tt(l,c,.1,m,f,t-i/2-.1))}}for(let d=1;d<a;d++)r.darkMetal.push(Tt(3,.2,1,s,d*o,t+i/2+.8)),r.darkMetal.push(Tt(3,.1,.1,s,d*o+.5,t+i/2+1.3)),r.darkMetal.push(Tt(.6,o+.5,.1,s+1,d*o+o/2,t+i/2+1.2))}function xx(s,t,e,n,i,r){r.glass.push(Tt(e,n,i,s,n/2,t));let o=Math.floor(e/2);for(let l=0;l<=o;l++){let c=-e/2+l*(e/o);r.metal.push(Tt(.1,n,i+.05,s+c,n/2,t))}let a=Math.floor(n/4);for(let l=0;l<a;l++)r.metal.push(Tt(e+.05,.2,i+.05,s,l*4,t))}function _x(s,t,e,n,i,r){r.darkMetal.push(Tt(e,n,i,s,n/2,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.8,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.5,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.2,t)),r.metal.push(Tt(.5,10,.5,s,n+5,t)),r.neon.push(Tt(.2,2,.2,s,n+10,t))}function yx(s,t,e,n,i,r){Math.random()>.3&&r.metal.push(Tt(2,1.5,2,s+2,n+.75,t+2)),Math.random()<.2&&(r.brick.push(Tt(2,2.5,2,s-2,n+1.25,t-2)),r.metal.push(Tt(1.8,.5,1.8,s-2,n+2.5,t-2))),r.concrete.push(Tt(e,.5,.2,s,n+.25,t+i/2-.1)),r.concrete.push(Tt(e,.5,.2,s,n+.25,t-i/2+.1)),r.concrete.push(Tt(.2,.5,i,s+e/2-.1,n+.25,t)),r.concrete.push(Tt(.2,.5,i,s-e/2+.1,n+.25,t))}function lu(s,t,e,n=24,i=0){let r=new he,o=[],a=[],l=[],c=i>0,h={concrete:[],concreteDark:[],concreteLight:[],brick:[],glass:[],metal:[],darkMetal:[],neon:[],windowLights:[],trunkBrown:[],trunkWhite:[],trunkGrey:[],trunkBlack:[],leafGreen:[],leafDark:[],leafPink:[],leafOrange:[],leafYellow:[],dirt:[],road:[],sidewalk:[],lane:[]};h.road.push(Tt(e,.1,e,s,-.05,t)),h.lane.push(Tt(e,.1,.5,s,.02,t)),h.lane.push(Tt(.5,.1,e,s,.02,t));let u=(e-n)/2,d=(n+u)/2,f=[{x:-d,z:-d},{x:d,z:-d},{x:d,z:d},{x:-d,z:d}];if(f.forEach((x,m)=>{let p=s+x.x,y=t+x.z;if(h.sidewalk.push(Tt(u,.2,u,p,.1,y)),c){let S=u-12;if(S>8){let R=20+Math.random()*40;h.concrete.push(Tt(S,R,S,p,R/2,y));let w=new qt;w.min.set(p-S/2,0,y-S/2),w.max.set(p+S/2,R,y+S/2),o.push(w)}}else if(di.noise2D(p*.05,y*.05)>.55||s===0&&t===0&&m===0){let R=vx(r,h,o,p,y,u);R&&a.push(R)}else if(Math.random()>.1){let w=u-12;if(w>8){let C=Math.random(),I="modern",v=20+Math.random()*40;C<.1?(I="future",v=300+Math.random()*200):C<.25?(I="glass",v=120+Math.random()*100):C<.45?(I="brick",v=15+Math.random()*25):C<.6?(I="glass",v=40+Math.random()*60):C<.7&&(I="future",v=50+Math.random()*50),px(p,y,w,v,w,I,h),Mx(h,p,y,w,v);let b=new qt;b.min.set(p-w/2,0,y-w/2),b.max.set(p+w/2,v,y+w/2),o.push(b)}}}),c||f.forEach(x=>{let m=s+x.x,p=t+x.z,_=u-12;if(u>8){let S=[0,1,2,3];for(let w=S.length-1;w>0;w--){let C=Math.floor(Math.random()*(w+1));[S[w],S[C]]=[S[C],S[w]]}let R=Math.floor(Math.random()*3);for(let w=0;w<R;w++){let C=Math.floor(Math.random()*6),I=(_/2+u/2)/2,v=S[w],b=(Math.random()-.5)*_*.6,U=m,H=p;v===0?(U+=I,H+=b):v===1?(U-=I,H+=b):v===2?(H+=I,U+=b):(H-=I,U+=b),mx(C,U,H,h)}}}),!c){let x=n/2+1;[{x:-x,z:-x,r:Math.PI/4},{x,z:x,r:-3*Math.PI/4},{x:-x,z:x,r:3*Math.PI/4},{x,z:-x,r:-Math.PI/4}].forEach(p=>{h.darkMetal.push(Tt(.3,8,.3,s+p.x,4,t+p.z)),h.darkMetal.push(Tt(2,.2,.2,s+p.x+Math.sin(p.r),7.5,t+p.z+Math.cos(p.r))),l.push(Tt(.5,.2,.5,s+p.x+Math.sin(p.r)*1.5,7.4,t+p.z+Math.cos(p.r)*1.5))})}let g=(x,m)=>{if(x.length>0){let p=ui(x),y=new nt(p,m);y.castShadow=!0,y.receiveShadow=!0,r.add(y)}};if(An(r,h.concrete,iu),An(r,h.concreteDark,Kg),An(r,h.concreteLight,jg),An(r,h.brick,Qg),An(r,h.glass,su),An(r,h.metal,Gs),An(r,h.darkMetal,is),An(r,h.neon,ex),An(r,h.windowLights,au),g(h.trunkBrown,sx),g(h.trunkWhite,rx),g(h.trunkGrey,dx),g(h.trunkBlack,fx),g(h.leafGreen,ox),g(h.leafDark,ax),g(h.leafPink,lx),g(h.leafOrange,cx),g(h.leafYellow,hx),g(h.dirt,ux),g(h.road,uo),g(h.sidewalk,ru),g(h.lane,kl),l.length>0){let x=ui(l),m=new nt(x,ix);r.add(m)}return{mesh:r,colliders:o,lodLevel:i,construction:a}}function cu(s,t,e,n,i="x"){let r=new he,o=[],a=new nt(new dn(e,e),ou);a.rotation.x=-Math.PI/2,a.position.set(s,-.5,t),a.receiveShadow=!0,r.add(a);let l=i==="x"||i==="cross",c=i==="z"||i==="cross";if(l){let h=new nt(new dn(e,n),uo);h.rotation.x=-Math.PI/2,h.position.set(s,0,t),h.receiveShadow=!0,r.add(h);let u=new nt(new dn(e,.5),kl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}if(c){let h=new nt(new dn(n,e),uo);h.rotation.x=-Math.PI/2,h.position.set(s,.01,t),h.receiveShadow=!0,r.add(h);let u=new nt(new dn(.5,e),kl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}return{mesh:r,colliders:o}}function hu(s,t,e){let n=new he,i=[],r=new nt(new dn(e,e),ou);return r.rotation.x=-Math.PI/2,r.position.set(s,-.5,t),r.receiveShadow=!0,n.add(r),{mesh:n,colliders:i}}function vx(s,t,e,n,i,r){let o=r/2,a=5+Math.random()*4;t.concrete.push(Tt(a*.9,a,a*.9,n,a/2,i));let l=a+3,c=o*.8;t.darkMetal.push(Tt(.15,l,.15,n-c,l/2,i-c)),t.darkMetal.push(Tt(.15,l,.15,n+c,l/2,i-c)),t.darkMetal.push(Tt(.15,l,.15,n+c,l/2,i+c)),t.darkMetal.push(Tt(.15,l,.15,n-c,l/2,i+c)),e.push(new qt().set(new A(n-o,0,i-o),new A(n+o,a,i+o)));let h=34,u=o*1.6,d=n-o*.5,f=i-o*.5,g=new nt(new Lt(.35,h,.35),is);g.position.set(d,h/2,f);let x=new pe;x.position.set(d,h,f);let m=new nt(new Lt(u,.25,.25),Gs);m.position.set(u/2,0,0);let p=new nt(new Lt(u*.35,.25,.25),Gs);p.position.set(-u*.35/2,0,0);let y=new nt(new Lt(.5,.5,.5),is);y.position.set(0,.4,0);let _=new nt(new Lt(.5,.5,.5),is);_.position.set(-u*.35,.1,0);let S=new nt(new Lt(.4,.35,.4),Gs),R=new nt(new Lt(.05,1,.05),is);return R.position.set(0,-1.5,0),x.add(m),x.add(p),x.add(y),x.add(_),x.add(R),x.add(S),s.add(g),s.add(x),{pivot:x,hook:S,cable:R,jibLen:u,phase:0,cx:n,cz:i}}function Mx(s,t,e,n,i){if(n<=0||i<=0)return;let r=Math.max(3,Math.floor(n/3)),o=Math.max(2,Math.floor(i/3.5)),a=n/r,l=i/o,c=t<0?1:-1,h=e<0?1:-1,u=(g,x,m)=>di.noise2D(g*.27+x*.11,m*.17)>.25,d=t+c*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=e-n/2+a/2+m*a;u(d,p,x)&&s.windowLights.push(Tt(a*.45,l*.55,.2,d,x,p))}}let f=e+h*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=t-n/2+a/2+m*a;u(p,f,x)&&s.windowLights.push(Tt(a*.45,l*.55,.2,p,x,f))}}}async function uu(s){let t=new io(2236979,.42);s.add(t);let e=new no(11193599,.3);return e.position.set(50,500,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-80,e.shadow.camera.right=80,e.shadow.camera.top=80,e.shadow.camera.bottom=-80,s.add(e),{roadWidth:26,blockSize:70,citySize:1e3,directionalLight:e,ambientLight:t,materials:{road:uo,sidewalk:ru,building:iu,glassModern:su,glassOffice:tx,metal:Gs,darkMetal:is,cloud:nx,window:au}}}var ss=new Wi(0,0,0,"YXZ"),rs=new A,Sx={type:"change"},Ex={type:"lock"},bx={type:"unlock"},du=Math.PI/2,fo=class extends un{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=wx.bind(this),this._onPointerlockChange=Tx.bind(this),this._onPointerlockError=Ax.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){let e=this.camera;rs.setFromMatrixColumn(e.matrix,0),rs.crossVectors(e.up,rs),e.position.addScaledVector(rs,t)}moveRight(t){let e=this.camera;rs.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(rs,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function wx(s){if(this.isLocked===!1)return;let t=s.movementX||s.mozMovementX||s.webkitMovementX||0,e=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;ss.setFromQuaternion(n.quaternion),ss.y-=t*.002*this.pointerSpeed,ss.x-=e*.002*this.pointerSpeed,ss.x=Math.max(du-this.maxPolarAngle,Math.min(du-this.minPolarAngle,ss.x)),n.quaternion.setFromEuler(ss),this.dispatchEvent(Sx)}function Tx(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ex),this.isLocked=!0):(this.dispatchEvent(bx),this.isLocked=!1)}function Ax(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function po(s,t,e=1,n=.5){if(!s.geometry)return;let i=s.geometry.attributes.position,r=new A,o=t.clone();s.worldToLocal(o);let a=!1;for(let l=0;l<i.count;l++){r.fromBufferAttribute(i,l);let c=r.distanceTo(o);if(c<e){let h=new A(0,0,0),u=n*(1-c/e)*.8;r.lerp(h,u);let d=.5;r.x+=(Math.random()-.5)*n*d,r.y+=(Math.random()-.5)*n*d,r.z+=(Math.random()-.5)*n*d,i.setXYZ(l,r.x,r.y,r.z),a=!0}}a&&(i.needsUpdate=!0,s.geometry.computeVertexNormals())}var Cn=Object.freeze({MOVE_FORWARD:"moveForward",MOVE_BACKWARD:"moveBackward",MOVE_LEFT:"moveLeft",MOVE_RIGHT:"moveRight",ENTER_EXIT:"enterExit",JUMP:"jump",PAUSE:"pause",LOCK:"lock"}),Ge=Object.freeze({[Cn.MOVE_FORWARD]:["KeyW","ArrowUp"],[Cn.MOVE_BACKWARD]:["KeyS","ArrowDown"],[Cn.MOVE_LEFT]:["KeyA","ArrowLeft"],[Cn.MOVE_RIGHT]:["KeyD","ArrowRight"],[Cn.ENTER_EXIT]:["KeyE"],[Cn.JUMP]:["Space"],[Cn.PAUSE]:["KeyP"],[Cn.LOCK]:["Enter"]}),Ve=class{constructor(t=Ge){this.bindings={},this._byCode={},this._rebuild(t)}_rebuild(t){this.bindings={};for(let[e,n]of Object.entries(t))this.bindings[e]=Array.isArray(n)?n.slice():[n];this._byCode={};for(let[e,n]of Object.entries(this.bindings))for(let i of n)this._byCode[i]=e}remap(t,e){this.bindings[t]=Array.isArray(e)?e.slice():[e],this._byCode={};for(let[n,i]of Object.entries(this.bindings))for(let r of i)this._byCode[r]=n;return this}actionForCode(t){return this._byCode[t]||null}codesFor(t){return this.bindings[t]||[]}snapshot(){let t={};for(let[e,n]of Object.entries(this.bindings))t[e]=n.slice();return{actions:Object.keys(this.bindings).sort(),bindings:t}}};var Ws=class{constructor({dom:t=null,map:e=null,onAction:n=null}={}){this.map=e||new Ve(Ge),this.onAction=n,this.dom=t,this.bound=!1,this._kd=null,this._ku=null,this._attach()}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._kd=t=>{let e=this.map.actionForCode(t&&t.code);e&&this.onAction&&this.onAction(e,!0,t)},this._ku=t=>{let e=this.map.actionForCode(t&&t.code);e&&this.onAction&&this.onAction(e,!1,t)},this.dom.addEventListener("keydown",this._kd),this.dom.addEventListener("keyup",this._ku),this.bound=!0)}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&(this.dom.removeEventListener("keydown",this._kd),this.dom.removeEventListener("keyup",this._ku)),this._kd=null,this._ku=null,this.bound=!1}snapshot(){return{adapter:"keyboard",bound:this.bound,map:this.map.snapshot()}}};var Xs=class{constructor({dom:t=null,onLock:e=null,doc:n=null}={}){this.dom=t,this.onLock=e,this.doc=n||(typeof document<"u"?document:null),this.overlay=null,this.bound=!1,this._click=null,this._attach()}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._click=()=>{this.onLock&&this.onLock()},this.dom.addEventListener("click",this._click),this.bound=!0,this._createOverlay())}_createOverlay(){if(!this.doc||!this.doc.createElement||!this.doc.body)return;let t=this.doc.createElement("div");t.style=t.style||{},Object.assign(t.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.8)",zIndex:"1000",cursor:"pointer",color:"#fff",fontSize:"24px",fontFamily:"sans-serif",flexDirection:"column",textAlign:"center"}),t.innerHTML='<h1>Worldloop</h1><p style="font-size: 18px; margin-top: 20px;">WASD = Move | Mouse = Look<br>E = Enter/Exit Car | Space = Jump | P = Pause</p>',this.overlay=t,this.doc.body.appendChild(t)}setLocked(t){this.overlay&&(this.overlay.style.display=t?"none":"flex")}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&this.dom.removeEventListener("click",this._click),this._click=null,this.bound=!1}snapshot(){return{adapter:"mouse",bound:this.bound,overlay:!!this.overlay}}};var Ys=class{constructor({dom:t=null,onAction:e=null,doc:n=null}={}){this.dom=t,this.onAction=e,this.doc=n||(typeof document<"u"?document:null),this.map=new Ve(Ge),this.bound=!1,this.joystick={active:!1,x:0,y:0},this._attach()}_joystickToActions(t,e){let i=t/2,r=e/2;this.onAction&&(this.onAction("moveForward",r<-.2,{source:"touch"}),this.onAction("moveBackward",r>.2,{source:"touch"}),this.onAction("moveLeft",i<-.2,{source:"touch"}),this.onAction("moveRight",i>.2,{source:"touch"}))}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._ts=t=>{let e=t.touches&&t.touches[0];if(!e)return;let n=e.clientX,i=e.clientY,r=this.dom.clientWidth||1,o=this.dom.clientHeight||1,a=n/r,l=i/o;a<=.5?(this.joystick.active=!0,this.joystick.x=n,this.joystick.y=i):l>.9?this.onAction&&this.onAction("enterExit",!0,{source:"touch"}):l>.75&&this.onAction&&this.onAction("jump",!0,{source:"touch"})},this._tm=t=>{if(!this.joystick.active)return;let e=t.touches&&t.touches[0];if(!e)return;let n=this.dom.clientWidth||1,i=this.dom.clientHeight||1;this._joystickToActions((e.clientX-this.joystick.x)/n,(e.clientY-this.joystick.y)/i)},this._te=()=>{this.joystick.active&&(this.joystick.active=!1,this.onAction&&(this.onAction("moveForward",!1,{source:"touch"}),this.onAction("moveBackward",!1,{source:"touch"}),this.onAction("moveLeft",!1,{source:"touch"}),this.onAction("moveRight",!1,{source:"touch"})))},this.dom.addEventListener("touchstart",this._ts),this.dom.addEventListener("touchmove",this._tm),this.dom.addEventListener("touchend",this._te),this.bound=!0)}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&(this.dom.removeEventListener("touchstart",this._ts),this.dom.removeEventListener("touchmove",this._tm),this.dom.removeEventListener("touchend",this._te)),this.bound=!1}snapshot(){return{adapter:"touch",bound:this.bound,joystick:{active:this.joystick.active,x:this.joystick.x,y:this.joystick.y}}}};var Cx=0,Rx=1,fu=0,qs=class{constructor({map:t=null,onAction:e=null,nav:n=null}={}){this.map=t||new Ve(Ge),this.onAction=e,this.nav=n||(typeof navigator<"u"?navigator:null),this.pressedEnterExit=!1}update(){if(!this.nav||typeof this.nav.getGamepads!="function")return;let t=this.nav.getGamepads()&&this.nav.getGamepads()[0];if(!t||!this.onAction)return;let e=t.axes||[],n=t.buttons||[],i=e[Rx]||0,r=e[Cx]||0;this.onAction("moveForward",i<-.25,{source:"gamepad"}),this.onAction("moveBackward",i>.25,{source:"gamepad"}),this.onAction("moveLeft",r<-.25,{source:"gamepad"}),this.onAction("moveRight",r>.25,{source:"gamepad"});let o=n[fu]&&n[fu].pressed;o&&!this.pressedEnterExit?(this.pressedEnterExit=!0,this.onAction("enterExit",!0,{source:"gamepad"})):o||(this.pressedEnterExit=!1)}snapshot(){return{adapter:"gamepad",supported:!!this.nav}}};var Px=new Set(["moveForward","moveBackward","moveLeft","moveRight"]),Lx=new Set(["enterExit","jump","pause","lock"]),os=class{constructor({dom:t=null,map:e=null,onPause:n=null,onLock:i=null}={}){this.map=e||new Ve(Ge),this.dom=t,this.onPause=n,this.onLock=i,this.actions={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1},this.events=[],this._pressed={enterExit:!1,jump:!1,pause:!1,lock:!1};let r=(o,a,l)=>this._handle(o,a,l);this.adapters=[new Ws({dom:t,map:this.map,onAction:r}),new Xs({dom:t,onLock:()=>this._fire("lock")}),new Ys({dom:t,onAction:r}),new qs({map:this.map,onAction:r})]}_handle(t,e,n){if(Px.has(t)){this.actions[t]=!!e;return}Lx.has(t)&&this._fire(t,e)}_fire(t,e=!0){e&&!this._pressed[t]?(this._pressed[t]=!0,this.events.push(t),t==="pause"&&this.onPause&&this.onPause(),t==="lock"&&this.onLock&&this.onLock()):e||(this._pressed[t]=!1)}drain(){let t=this.events;return this.events=[],t}update(t=0){for(let e of this.adapters)e.update&&e.update(t)}setLocked(t){for(let e of this.adapters)e.setLocked&&e.setLocked(t)}detach(){for(let t of this.adapters)t.detach&&t.detach()}snapshot(){return{map:this.map.snapshot(),actions:{...this.actions},events:this.events.slice(),adapters:this.adapters.map(t=>t.snapshot?t.snapshot():null)}}};var mo=class{constructor(t,e,n=[],i=null,r=null,o=null,a=null,l=null){this.input=l||new os({dom:e}),this.camera=t,this.domElement=e,this.colliders=n,this.trafficSystem=i,this.parkingSystem=r,this.effectSystem=o,this.weatherSystem=a,this.controls=new fo(t,e),this.input.actions.moveForward=!1,this.input.actions.moveBackward=!1,this.input.actions.moveLeft=!1,this.input.actions.moveRight=!1,this.canJump=!1,this.isDriving=!1,this.currentCar=null,this.carVelocity=0,this.currentCar=null,this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.shakeIntensity=0,this.velocity=new A,this.direction=new A,this.init()}init(){let t=document.createElement("div");t.style.position="absolute",t.style.bottom="10px",t.style.left="10px",t.style.color="#00ff00",t.style.fontFamily="monospace",t.style.fontWeight="bold",t.style.fontSize="16px",t.innerHTML="STATUS: WAITING FOR CLICK",document.body.appendChild(t);let e=n=>{t.innerHTML=n,console.log(n)};if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){instructions.innerHTML="Pointer Lock not supported in this browser",instructions.style.color="red";return}this.controls.addEventListener("lock",()=>{this.input.setLocked(!0),e("LOCKED")}),this.controls.addEventListener("unlock",()=>{this.input.setLocked(!1),e("UNLOCKED")})}_handleInputEvents(){for(let t of this.input.drain())t==="enterExit"?this.isDriving?this.exitCar():this.tryEnterCar():t==="jump"&&(this.canJump===!0&&(this.velocity.y+=20),this.canJump=!1)}update(t){if(this._handleInputEvents(),this.controls.isLocked===!0){if(this.isDriving&&this.currentCar){this.updateCarPhysics(t);return}this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.velocity.y-=9.8*5*t,this.direction.z=Number(this.input.actions.moveForward)-Number(this.input.actions.moveBackward),this.direction.x=Number(this.input.actions.moveRight)-Number(this.input.actions.moveLeft),this.direction.normalize(),(this.input.actions.moveForward||this.input.actions.moveBackward)&&(this.velocity.z-=this.direction.z*150*t),(this.input.actions.moveLeft||this.input.actions.moveRight)&&(this.velocity.x-=this.direction.x*150*t);let e=-this.velocity.x*t,n=-this.velocity.z*t;this.controls.moveRight(e),this.checkCollision()&&(this.controls.moveRight(-e),this.velocity.x=0),this.controls.moveForward(n),this.checkCollision()&&(this.controls.moveForward(-n),this.velocity.z=0),this.camera.position.y+=this.velocity.y*t,this.camera.position.y<2&&(this.velocity.y=0,this.camera.position.y=2,this.canJump=!0)}}tryEnterCar(){let t=this.camera.position,e=null,n=5;if(this.trafficSystem)for(let i of this.trafficSystem.cars){let r=t.distanceTo(i.mesh.position);r<n&&(n=r,e=i)}if(this.parkingSystem)for(let i of this.parkingSystem.cars){let r=t.distanceTo(i.position);r<n&&(n=r,e={mesh:i,isParked:!0})}e&&this.enterCar(e)}enterCar(t){if(this.isDriving=!0,this.currentCar=t,t.isPlayerDriven=!0,t.mesh&&(t.mesh.isPlayerDriven=!0),t.isParked){let e=new qt().setFromObject(t.mesh),n=this.colliders.findIndex(i=>i.intersectsBox(e)&&i.containsBox(e));n!==-1&&this.colliders.splice(n,1)}this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.currentCar.mesh.userData.health===void 0&&(this.currentCar.mesh.userData.health=100),console.log("Entered car. Health:",this.currentCar.mesh.userData.health),console.log("Entered car")}exitCar(){if(!this.currentCar)return;if(this.currentCar.isPlayerDriven=!1,this.currentCar.mesh&&(this.currentCar.mesh.isPlayerDriven=!1),this.isDriving=!1,this.currentCar.isParked){let h=new qt().setFromObject(this.currentCar.mesh);this.colliders.push(h)}let t=this.currentCar.mesh.rotation.clone();this.currentCar.mesh.rotation.set(0,0,0),this.currentCar.mesh.updateMatrixWorld();let e=new qt().setFromObject(this.currentCar.mesh),n=new A;e.getSize(n),this.currentCar.mesh.rotation.copy(t),this.currentCar.mesh.updateMatrixWorld();let i=1,r=n.x/2+i,o=n.z/2+i+1,a=[new A(r,0,0),new A(-r,0,0),new A(0,0,-o),new A(0,0,o)],l=null,c=this.camera.position.clone();for(let h of a){h.applyEuler(this.currentCar.mesh.rotation);let u=this.currentCar.mesh.position.clone().add(h);if(u.y=2,this.camera.position.copy(u),!this.checkCollision()){l=u;break}}l?this.camera.position.copy(l):(console.warn("No safe exit found on ground, spawning on top."),this.camera.position.copy(this.currentCar.mesh.position),this.camera.position.y=5),this.currentCar=null,console.log("Exited car")}updateCarPhysics(t){if(!this.currentCar)return;let e=this.getCarStats(this.currentCar.mesh.userData.type||"sedan"),n=this.getDrivingModifiers(),i=e.maxSpeed*n.maxSpeedScale,r=e.acceleration*n.accelerationScale,o=n.friction,a=2;Math.abs(this.spinVelocity)>.1&&(this.currentCar.mesh.rotation.y+=this.spinVelocity*t,this.spinVelocity*=.95,Math.abs(this.spinVelocity)>2&&(this.carVelocity*=.98));let l=this.currentCar.mesh.userData.health;l<=0?(this.carVelocity*=.95,this.effectSystem&&(this.effectSystem.addEmitter(this.currentCar.mesh,"fire"),this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"))):l<20?this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"fire"):l<50&&this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"),this.shakeIntensity>0&&(this.shakeIntensity-=5*t,this.shakeIntensity<0&&(this.shakeIntensity=0)),Math.abs(this.spinVelocity)<5&&l>0&&(this.input.actions.moveForward?this.carVelocity+=r*t:this.input.actions.moveBackward?this.carVelocity-=r*t:(this.carVelocity>0&&(this.carVelocity-=o*t),this.carVelocity<0&&(this.carVelocity+=o*t),Math.abs(this.carVelocity)<.1&&(this.carVelocity=0))),this.carVelocity=Math.max(-i/2,Math.min(i,this.carVelocity)),Math.abs(this.carVelocity)>.1&&Math.abs(this.spinVelocity)<5&&(this.input.actions.moveLeft&&(this.currentCar.mesh.rotation.y+=a*t*Math.sign(this.carVelocity)),this.input.actions.moveRight&&(this.currentCar.mesh.rotation.y-=a*t*Math.sign(this.carVelocity)));let c=new A(0,0,1);if(c.applyEuler(this.currentCar.mesh.rotation),this.currentCar.mesh.position.add(c.multiplyScalar(this.carVelocity*t)),this.checkCarCollision()){this.currentCar.mesh.position.add(c.multiplyScalar(-this.carVelocity*t));let f=Math.abs(this.carVelocity),g=Math.min(f/40,1);if(this.effectSystem&&f>5){let x=this.currentCar.mesh.position.clone().add(c.multiplyScalar(2));this.effectSystem.createCrashEffect(x),this.currentCar.mesh.children.forEach(p=>{po(p,x,1.5,g*.5)});let m=f*.5;this.currentCar.mesh.userData.health-=m,console.log(`Crash! Speed: ${f.toFixed(1)}, Damage: ${m.toFixed(1)}, Health: ${this.currentCar.mesh.userData.health.toFixed(1)}`),f>10?(this.spinVelocity=(Math.random()-.5)*20*g,this.shakeIntensity=1*g,this.carVelocity=-this.carVelocity*.5):this.carVelocity=0}else this.carVelocity=0,this.shakeIntensity=.2}let u=new A(0,5,-10);u.applyEuler(this.currentCar.mesh.rotation),this.shakeIntensity>0&&(u.x+=(Math.random()-.5)*this.shakeIntensity,u.y+=(Math.random()-.5)*this.shakeIntensity,u.z+=(Math.random()-.5)*this.shakeIntensity);let d=this.currentCar.mesh.position.clone().add(u);this.camera.position.lerp(d,5*t),this.camera.lookAt(this.currentCar.mesh.position)}checkCarCollision(){if(!this.currentCar)return!1;this.currentCar.mesh.updateMatrixWorld();let t;if(this.currentCar.mesh.userData.localBox?t=this.currentCar.mesh.userData.localBox.clone().applyMatrix4(this.currentCar.mesh.matrixWorld):t=new qt().setFromObject(this.currentCar.mesh),this.colliders){for(let e of this.colliders)if(t.intersectsBox(e))return!0}if(this.trafficSystem)for(let e of this.trafficSystem.cars){if(e===this.currentCar)continue;let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i;if(e.mesh.userData.localBox?i=e.mesh.userData.localBox.clone().applyMatrix4(e.mesh.matrixWorld):i=new qt().setFromObject(e.mesh),t.intersectsBox(i)||n<3.5){console.log("HIT TRAFFIC! (Dist: "+n.toFixed(2)+")");let r=this.getImpactPoint(this.currentCar.mesh,e.mesh);return this.applyCrashDamage(this.currentCar.mesh,e.mesh,r,e),e.velocity&&(this.applyCrashPhysics(this.currentCar.mesh,e,r,e.mesh.position),e.stunned=2),{hit:!0,point:r,object:e}}}if(this.pedestrianSystem&&this.pedestrianSystem.peds)for(let e of this.pedestrianSystem.peds){let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i=new qt().setFromObject(e.mesh);if((t.intersectsBox(i)||n<1)&&e.state!=="RAGDOLL"){e.state="RAGDOLL",e.ragdollTimer=4;let r=new A(0,0,1).applyEuler(this.currentCar.mesh.rotation),o=Math.abs(this.carVelocity)||20;return e.velocity.copy(r).multiplyScalar(o*.8+5),e.velocity.y+=6,this.effectSystem&&this.effectSystem.createCrashEffect(e.mesh.position),{hit:!0,point:e.mesh.position.clone(),object:e}}}if(this.parkingSystem)for(let e of this.parkingSystem.cars){if(this.currentCar.mesh===e)continue;let n=e.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.updateMatrixWorld();let i;if(e.userData.localBox?i=e.userData.localBox.clone().applyMatrix4(e.matrixWorld):i=new qt().setFromObject(e),t.intersectsBox(i)||n<3.5){console.log("HIT PARKED! (Dist: "+n.toFixed(2)+")"),e.userData.velocity||(e.userData.velocity=new A,e.userData.angularVelocity=0);let r=this.getImpactPoint(this.currentCar.mesh,e);return this.applyCrashDamage(this.currentCar.mesh,e,r,e.userData),this.applyCrashPhysics(this.currentCar.mesh,e.userData,r,e.position),{hit:!0,point:r,object:e}}}return!1}getImpactPoint(t,e){let n=t.position,i=e.position,r=new A().lerpVectors(n,i,.5);return r.y=.5,r}applyCrashDamage(t,e,n,i){t.children.forEach(l=>{l.isMesh&&po(l,n,2,1)}),e.children.forEach(l=>{l.isMesh&&(l.userData.isUnique||(l.geometry=l.geometry.clone(),l.userData.isUnique=!0),po(l,n,2,1))}),this.effectSystem&&this.effectSystem.createCrashEffect(n),(Math.abs(this.carVelocity)||20)>25&&this.emergencySystem&&this.emergencySystem.respond(n.x,n.z);let a=(Math.abs(this.carVelocity)||20)*1.5;t.userData.health!==void 0&&(t.userData.health-=a),i.health!==void 0&&(i.health-=a,e&&e.traverse(c=>{c.isMesh&&c.material&&c.material.color&&(c.userData.isUniqueMat||(c.material=c.material.clone(),c.userData.isUniqueMat=!0),c.material.color.multiplyScalar(.5))}),i.health<60&&this.effectSystem&&this.effectSystem.createSmokeEffect({mesh:e}),i.health<=0&&(this.effectSystem&&this.effectSystem.createFireEffect({mesh:e}),i.stunned!==void 0&&(i.stunned=999)))}getMass(t){switch(t){case"truck":return 4e3;case"suv":return 2500;case"sedan":return 1600;case"sport":return 1200;default:return 1500}}applyCrashPhysics(t,e,n,i){console.warn("APPLYING PHYSICS to",e);let r=this.getMass("player"),o=this.getMass(e.type||"sedan"),a=new A(0,0,1).applyEuler(t.rotation);a.y=0,a.normalize();let l=Math.max(Math.abs(this.carVelocity),8),c=r/o,h=l*c*1.2,u=a.multiplyScalar(h);if(e.velocity.add(u),l>30){let p=(l-30)*.02;e.velocity.y+=Math.min(p,1),e.velocity.y+=Math.random()*.1}else e.velocity.y=0;let d=new A().subVectors(n,i),f=new A().crossVectors(d,u),g=o*.001,x=f.y/g;x=ts.clamp(x,-6,6),e.angularVelocity=x;let m=o/(r+o);this.carVelocity*=1-m*.8,this.shakeIntensity=Math.min(h*.5,3)}checkCollision(){if(!this.colliders)return!1;let t=new qt,e=this.camera.position.clone();t.min.set(e.x-.2,e.y-.5,e.z-.2),t.max.set(e.x+.2,e.y+.5,e.z+.2);for(let n of this.colliders)if(t.intersectsBox(n))return!0;if(this.trafficSystem){let n=new qt;for(let i of this.trafficSystem.cars)if(i.mesh.userData.localBox?n.copy(i.mesh.userData.localBox).applyMatrix4(i.mesh.matrixWorld):n.setFromObject(i.mesh),n.expandByScalar(.2),t.intersectsBox(n))return!0}return!1}getDrivingModifiers(){let t=1,e=1,n=1,i=this.weatherSystem?this.weatherSystem.currentWeather:"sunny";return i==="rain"?(t=.6,e=.8,n=.85):i==="snow"&&(t=.35,e=.6,n=.7),{weather:i,grip:t,friction:10*t,maxSpeedScale:e,accelerationScale:n}}getCarStats(t){switch(t){case"sport":return{maxSpeed:60,acceleration:40};case"taxi":return{maxSpeed:55,acceleration:40};case"sedan":return{maxSpeed:45,acceleration:30};case"suv":return{maxSpeed:40,acceleration:25};case"truck":return{maxSpeed:35,acceleration:20};case"bus":return{maxSpeed:30,acceleration:15};default:return{maxSpeed:45,acceleration:30}}}};var Ix=new yt({roughness:.5,metalness:.2,envMapIntensity:.35}),Dx=new yt({color:1122867,roughness:.65,metalness:.08,envMapIntensity:.25}),Ux=new yt({color:1118481,roughness:.9,metalness:.1}),Nx=new yt({color:13421772,roughness:.6,metalness:.35,envMapIntensity:.35}),Fx=new yt({color:16777215,roughness:.6,metalness:.35,envMapIntensity:.35}),Ox=new yt({color:1118481,roughness:.8}),Bx=new yt({color:16777215,emissive:16772778,emissiveIntensity:2}),kx=new yt({color:5570560,emissive:16711680,emissiveIntensity:2});function as(s="sedan",t=null){let e=new he;e.userData.type=s,t||(t=Xx(s));let n=Ix.clone();n.color.set(t);let i={paint:[],glass:[],rubber:[],rim:[],chrome:[],plastic:[],lightFront:[],lightRear:[]};s==="sedan"?pu(i):s==="suv"?Hx(i):s==="sport"?Vx(i):s==="truck"?Gx(i):s==="taxi"?zx(i):s==="bus"?Wx(i):s==="ambulance"?Yx(i):s==="fire"?qx(i):s==="police"?Zx(i):pu(i);let r=(o,a)=>{if(o.length>0){let l=ui(o),c=new nt(l,a);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}};return r(i.paint,n),r(i.glass,Dx),r(i.rubber,Ux),r(i.rim,Nx),r(i.chrome,Fx),r(i.plastic,Ox),r(i.lightFront,Bx),r(i.lightRear,kx),e.userData.localBox||(e.userData.localBox=new qt().setFromObject(e)),e.castShadow=!0,e.receiveShadow=!0,e}function et(s,t,e,n,i,r,o=0,a=0,l=0){let c=new Lt(s,t,e);return(o||a||l)&&c.rotateX(o).rotateY(a).rotateZ(l),c.translate(n,i,r),c}function zl(s,t,e,n,i,r,o,a=0,l=0,c=0){let h=new on(s,t,e,n);return(a||l||c)&&h.rotateX(a).rotateY(l).rotateZ(c),h.translate(i,r,o),h}function go(s,t,e,n,i,r,o){s.glass.push(et(t+.05,e,n+.05,i,r,o))}function Rn(s,t,e,n=.35){let r=t/2-.1,o=e/2,a=n,l=(c,h,u)=>{s.rubber.push(zl(n,n,.25,24,c,h,u,0,0,Math.PI/2)),s.rim.push(zl(n*.6,n*.6,.25+.02,12,c,h,u,0,0,Math.PI/2))};l(-r,a,o),l(r,a,o),l(-r,a,-o),l(r,a,-o)}function pu(s){s.paint.push(et(1.9,.55,4.7-.4,0,.35+.55/2,0)),s.plastic.push(et(1.9,.35,.3,0,.35+.2,4.7/2-.15)),s.plastic.push(et(1.9,.35,.3,0,.35+.2,-4.7/2+.15)),s.plastic.push(et(1,.25,.1,0,.35+.35,4.7/2)),s.lightFront.push(et(.35,.15,.2,-.6,.35+.45,4.7/2-.1)),s.lightFront.push(et(.35,.15,.2,.6,.35+.45,4.7/2-.1)),s.lightRear.push(et(.35,.2,.1,-.6,.35+.45,-4.7/2+.05)),s.lightRear.push(et(.35,.2,.1,.6,.35+.45,-4.7/2+.05)),s.paint.push(et(1.9-.2,.5,4.7*.4,0,.35+.55+.5/2-.05,-.2)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.7*.22-.2,-.3,0,0)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.7*.4-.2,.25,0,0)),go(s,1.9-.15,.5-.15,4.7*.3,0,.35+.55+.5/2-.05,-.2),s.paint.push(et(.2,.12,.1,-1.9/2-.05,.35+.55+.1,.5)),s.paint.push(et(.2,.12,.1,1.9/2+.05,.35+.55+.1,.5)),Rn(s,1.9,2.8,.35)}function zx(s){s.paint.push(et(1.9,.55,4.8-.5,0,.35+.55/2,0)),s.plastic.push(et(1.9,.3,.4,0,.35+.2,4.8/2-.2)),s.plastic.push(et(1.9,.3,.4,0,.35+.2,-4.8/2+.4)),s.plastic.push(et(.8,.2,.1,0,.35+.4,4.8/2)),s.lightFront.push(et(.3,.15,.1,-.6,.35+.45,4.8/2)),s.lightFront.push(et(.3,.15,.1,.6,.35+.45,4.8/2)),s.lightRear.push(et(.3,.15,.1,-.6,.35+.45,-4.8/2+.2)),s.lightRear.push(et(.3,.15,.1,.6,.35+.45,-4.8/2+.2)),s.paint.push(et(1.9-.2,.5,4.8*.45,0,.35+.55+.5/2-.05,-.1)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.8*.22,-.2,0,0)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.8*.35,.2,0,0)),go(s,1.9-.15,.5-.15,4.8*.35,0,.35+.55+.5/2-.05,-.1),s.plastic.push(et(.1,.05,1,0,.35+.55+.5,-.1)),s.lightFront.push(et(.6,.2,.25,0,.35+.55+.5+.15,-.1)),Rn(s,1.9,2.9,.35)}function Hx(s){s.paint.push(et(2.1,.65,4.9-.2,0,.42+.65/2,0)),s.plastic.push(et(2.1,.4,.35,0,.42+.25,4.9/2-.1)),s.plastic.push(et(2.1,.4,.35,0,.42+.25,-4.9/2+.1)),s.chrome.push(et(1.2,.3,.1,0,.42+.3,4.9/2+.1)),s.plastic.push(et(1,.4,.1,0,.42+.5,4.9/2)),s.lightFront.push(et(.35,.25,.1,-.7,.42+.6,4.9/2)),s.lightFront.push(et(.35,.25,.1,.7,.42+.6,4.9/2)),s.lightRear.push(et(.2,.5,.1,-.7,.42+.6,-4.9/2+.05)),s.lightRear.push(et(.2,.5,.1,.7,.42+.6,-4.9/2+.05)),s.paint.push(et(2.1-.1,.6,4.9*.55,0,.42+.65+.6/2-.05,.1)),s.glass.push(et(2.1-.15,.6-.1,.1,0,.42+.65+.25,4.9*.27,-.2,0,0)),s.glass.push(et(2.1-.15,.6-.1,.1,0,.42+.65+.25,-4.9*.27+.1,0,0,0)),go(s,2.1-.05,.6-.15,4.9*.45,0,.42+.65+.6/2-.05,.1),s.chrome.push(et(.1,.1,4.9*.5,-2.1/2+.3,.42+.65+.6,.1)),s.chrome.push(et(.1,.1,4.9*.5,2.1/2-.3,.42+.65+.6,.1)),s.rubber.push(zl(.35,.35,.25,16,0,.42+.65+.1,-4.9/2-.1,Math.PI/2,0,0)),Rn(s,2.1+.1,2.9,.45)}function Vx(s){s.paint.push(et(2-.2,.45,4.6*.8,0,.35+.45/2,0)),s.paint.push(et(.4,.45+.15,1.4,2/2-.2,.35+.45/2+.05,-1.2)),s.paint.push(et(.4,.45+.15,1.4,-2/2+.2,.35+.45/2+.05,-1.2)),s.paint.push(et(2,.45-.1,1.2,0,.35+.2,1.8,.1,0,0)),s.plastic.push(et(2+.1,.05,.5,0,.35+.1,2.2)),s.paint.push(et(2-.5,.45,4.6*.35,0,.35+.45+.45/2-.05,.1)),s.glass.push(et(2-.55,.45-.1,1.2,0,.35+.45+.45/2-.05,.3,-.3,0,0));let o=.35+.45+.6;s.paint.push(et(2+.2,.05,.4,0,o,-4.6/2+.2)),s.plastic.push(et(.05,.4,.2,-.5,o-.2,-4.6/2+.3)),s.plastic.push(et(.05,.4,.2,.5,o-.2,-4.6/2+.3)),Rn(s,2+.1,2.7,.38)}function Gx(s){s.plastic.push(et(2.4-.4,.6,5.8,0,.5+.6/2,0));let r=1.3,o=2.2;s.paint.push(et(2.4,r,o,0,.5+.6+r/2-.1,5.8/2-o/2-.2)),s.glass.push(et(2.4-.1,.7,.1,0,.5+.6+.8,5.8/2-.15,-.15,0,0)),s.glass.push(et(2.4-.4,.5,.1,0,.5+.6+.9,5.8/2-o-.25)),go(s,2.4+.05,.6,o-.6,0,.5+.6+r/2-.1,5.8/2-o/2-.2);let a=2.6,l=.8;s.paint.push(et(.2,l,a,-2.4/2+.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(et(.2,l,a,2.4/2-.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(et(2.4-.4,.1,a,0,.5+.6+.4,-5.8/2+a/2+.4)),s.paint.push(et(2.4,l,.15,0,.5+.6+l/2,-5.8/2+.4)),s.chrome.push(et(1.4,.6,.1,0,.5+.8,5.8/2)),s.lightFront.push(et(.3,.4,.1,-.9,.5+.8,5.8/2)),s.lightFront.push(et(.3,.4,.1,.9,.5+.8,5.8/2)),Rn(s,2.4+.2,3.8,.6)}function Wx(s){s.paint.push(et(2.6,2.3,9,0,.5+.5+2.3/2-.2,0)),s.plastic.push(et(2.6-.4,.4,3,0,.5+.5+2.3+.1,-1)),s.glass.push(et(.1,1.2,9-1.5,-2.6/2-.05,.5+2,0)),s.glass.push(et(.1,1.2,9-1.5,2.6/2+.05,.5+2,0)),s.glass.push(et(2.6-.2,1.4,.1,0,.5+1.8,9/2+.05,-.05,0,0)),s.lightFront.push(et(.25,.25,.1,-2.6/2+.4,.5+.8,9/2+.05)),s.lightFront.push(et(.25,.25,.1,2.6/2-.4,.5+.8,9/2+.05)),Rn(s,2.6-.3,5.5,.55)}function Xx(s){if(s==="taxi")return 16763904;if(s==="bus")return Math.random()<.5?3368652:13382451;if(s==="truck")return 8934707;if(s==="ambulance")return 15921906;if(s==="fire")return 13378082;if(s==="police")return 1710638;let t=[1118481,15658734,8947848,13369344,13260,2250018,5570560];return t[Math.floor(Math.random()*t.length)]}function Yx(s){s.paint.push(et(2.1,1.6,5.6,0,.5+.5+1.6/2-.15,0)),s.glass.push(et(2.1-.15,.9,.15,0,.5+1.1,5.6/2-.4,-.2,0,0)),s.glass.push(et(.1,.7,5.6-3.4,-2.1/2-.05,.5+1.4,-.6)),s.glass.push(et(.1,.7,5.6-3.4,2.1/2+.05,.5+1.4,-.6)),s.plastic.push(et(.6,.18,.6,0,.5+1.6+.4,-.4)),Rn(s,2.1,3.6,.55)}function qx(s){s.paint.push(et(2.6,1.4,2.2,0,.6+.7+.6,7/2-1.1-.2)),s.glass.push(et(2.6-.1,.6,.15,0,.6+1.4,7/2-.5,-.15,0,0)),s.paint.push(et(2.6,2,3.2,0,.6+.7+1,-.4)),s.plastic.push(et(.25,.9,3.2,-2.6/2+.15,.6+1.4,-.4)),s.chrome.push(et(.4,.4,2.6,0,.6+1.8,-7/2+1.6)),Rn(s,2.6-.2,5,.6)}function Zx(s){s.paint.push(et(2,.55,5-.4,0,.5+.55/2,0)),s.paint.push(et(2-.25,.5,5*.4,0,.5+.55+.25,.1)),s.glass.push(et(2-.3,.4,.1,0,.5+.8,5*.22,-.25,0,0)),s.glass.push(et(2-.3,.4,.1,0,.5+.8,-5*.38,.25,0,0)),Rn(s,2,3,.35)}function mu(s){s&&s.traverse(t=>{t.isMesh&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&(t.material.userData.isShared||t.material.dispose()))})}function gu(){let s=Math.random();return s<.4?"ambulance":s<.7?"fire":"police"}function xo(){let s=Math.random();return s<.3?"sedan":s<.45?"taxi":s<.75?"suv":s<.85?"truck":s<.95?"bus":"sport"}var _o=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.roadGraph=null,this.carPool={sedan:[],taxi:[],suv:[],truck:[],bus:[],sport:[]}}getSpeedForType(t){switch(t){case"sport":return 16;case"taxi":return 13;case"sedan":return 11;case"suv":return 9;case"truck":return 6;case"bus":return 5;default:return 8}}getCarFromPool(t){if(this.carPool[t]&&this.carPool[t].length>0){let e=this.carPool[t].pop();return e.visible=!0,e}return as(t)}returnCarToPool(t,e){t&&(t.visible=!1,this.scene.remove(t),this.carPool[e]||(this.carPool[e]=[]),this.carPool[e].push(t))}loadChunk(t,e,n="city"){let i=[],o=this.blockSize+this.roadWidth,a=t*o,l=e*o,c=["x","z"];n==="highway_x"&&(c=["x"]),n==="highway_z"&&(c=["z"]);for(let h=0;h<3;h++){let u=xo(),d=this.getCarFromPool(u);d.userData.localBox||(d.userData.localBox=new qt().setFromObject(d));let f=this.spawnCarInChunk(d,a,l,o,i,c);if(f){let g=Math.abs(f.pos.x-a)<=7&&Math.abs(f.pos.z-l)<=7;if(n.startsWith("highway")||!g){this.scene.add(d);let m=this.getSpeedForType(u);i.push({mesh:d,axis:f.axis,direction:f.direction,speed:m,type:u,velocity:new A,angularVelocity:0,stunned:0,health:100,chunkX:a,chunkZ:l,chunkSize:o,cx:t,cz:e,lastNodeKey:null})}else this.returnCarToPool(d,u)}else this.returnCarToPool(d,u)}this.chunkCars.set(`${t},${e}`,i),i.forEach(h=>this.cars.push(h))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.returnCarToPool(r.mesh,r.type);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}spawnCarInChunk(t,e,n,i,r=[],o=["x","z"]){for(let c=0;c<10;c++){let h=o[Math.floor(Math.random()*o.length)],u=Math.random()>.5?1:-1,d=new A;h==="x"?d.set(e+(Math.random()-.5)*i,0,n+(u===1?3:-3)+(Math.random()-.5)*2):d.set(e+(u===1?-3:3)+(Math.random()-.5)*2,0,n+(Math.random()-.5)*i);let f=!1;for(let g of r)if(d.distanceTo(g.mesh.position)<8){f=!0;break}if(!f)return t.position.copy(d),h==="x"?t.rotation.y=u>0?Math.PI/2:-Math.PI/2:t.rotation.y=u>0?0:Math.PI,{axis:h,direction:u,pos:d.clone()}}return null}setDependencies(t,e,n,i,r,o,a){this.player=t,this.parkingSystem=e,this.trafficLightSystem=n,this.effectSystem=i,this.pedestrianSystem=r,this.roadGraph=o||null,this.emergencySystem=a||null}pedestrianNearCrosswalk(t){if(!this.pedestrianSystem||!t)return!1;let e=14,n=3.5,i=t.mesh.position,r=this.pedestrianSystem.peds||[];for(let o of r){let a=o.mesh.position,l=0,c=0;if(t.axis==="x"){c=Math.abs(a.z-i.z);let h=a.x-i.x;l=t.direction===1?h:-h}else{c=Math.abs(a.x-i.x);let h=a.z-i.z;l=t.direction===1?h:-h}if(l>0&&l<e&&c<n)return!0}return!1}update(t){let e=[];this.parkingSystem&&(e=e.concat(this.parkingSystem.cars)),this.player&&!this.player.isDriving&&e.push({isPlayer:!0,position:this.player.camera.position,isObject:!0});for(let n of this.chunkCars.values())n.forEach(i=>{if(i.isPlayerDriven)return;if(i.stunned>0){i.stunned-=t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.mesh.rotation.y+=i.angularVelocity*t,i.velocity.multiplyScalar(.98),i.angularVelocity*=.98,i.velocity.length()<.1&&(i.stunned=0,i.health<=0&&(i.stunned=999)),this.effectSystem&&Math.random()<.1&&(i.health<20?this.effectSystem.createFireEffect(i.mesh):i.health<50&&this.effectSystem.createSmokeEffect(i.mesh));return}if(this.checkBlocked(i,e))return;let r=i.direction*i.speed*t;if(i.axis==="x"?i.mesh.position.x+=r:i.mesh.position.z+=r,this.roadGraph){let l=this.roadGraph.nodeAtWorld(i.mesh.position.x,i.mesh.position.z);if(l&&l.key!==i.lastNodeKey){i.lastNodeKey=l.key;let c=i.axis==="x"?"z":"x";if(l[c]&&Math.random()<.25){let h=this.roadGraph.neighbors(l.key).filter(u=>u.axis===c);if(h.length){let u=h[Math.floor(Math.random()*h.length)],d=this.roadGraph.getNode(u.to),f,g;c==="z"?(f=d.cz>l.cz?1:-1,g=d.cz>l.cz?0:Math.PI):(f=d.cx>l.cx?1:-1,g=d.cx>l.cx?Math.PI/2:-Math.PI/2),i.axis=c,i.direction=f,i.mesh.rotation.y=g}}}}let o=Math.round(i.mesh.position.x/i.chunkSize),a=Math.round(i.mesh.position.z/i.chunkSize);if(o!==i.cx||a!==i.cz){let l=`${i.cx},${i.cz}`;if(this.chunkCars.has(l)){let h=this.chunkCars.get(l),u=h.indexOf(i);u>-1&&h.splice(u,1)}let c=`${o},${a}`;this.chunkCars.has(c)||this.chunkCars.set(c,[]),this.chunkCars.get(c).push(i),i.cx=o,i.cz=a,i.chunkX=o*i.chunkSize,i.chunkZ=a*i.chunkSize}})}checkBlocked(t,e){if(this.pedestrianNearCrosswalk(t))return!0;if(this.trafficLightSystem){let a=t.mesh.position.x-t.chunkX,l=t.mesh.position.z-t.chunkZ,c=this.roadWidth/2+3,h=18,u=!1,d=Math.round(t.chunkX/t.chunkSize),f=Math.round(t.chunkZ/t.chunkSize);if(t.axis==="x"?Math.abs(a)>c&&Math.abs(a)<h&&(a>0&&t.direction<0||a<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(d,f,"x")||(u=!0)):Math.abs(l)>c&&Math.abs(l)<h&&(l>0&&t.direction<0||l<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(d,f,"z")||(u=!0)),u)return!0}let n=12,i=2.5,r=t.mesh.position,o=a=>{for(let l of a){if(l===t||l===t.mesh)continue;let c;if(l.isPlayer)c=l.position;else if(l.mesh)c=l.mesh.position;else if(l.position)c=l.position;else continue;let h=0,u=0;if(t.axis==="x"){u=Math.abs(c.z-r.z);let d=c.x-r.x;t.direction===1?h=d:h=-d}else{u=Math.abs(c.x-r.x);let d=c.z-r.z;t.direction===1?h=d:h=-d}if(h>0&&h<n&&u<i)return!0}return!1};if(o(this.cars)||o(e))return!0;if(this.emergencySystem){let a=this.emergencySystem.getColliders();if(a.length&&o(a))return!0}return!1}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.mesh.userData.localBox?t.push(n.mesh.userData.localBox.clone().applyMatrix4(n.mesh.matrixWorld)):t.push(new qt().setFromObject(n.mesh)))});return t}};var yo=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.pool={ambulance:[],fire:[],police:[]},this.active=[],this.events=0,this.effectSystem=null,this.dedupRadius=60}setEffects(t){this.effectSystem=t}getVehicle(t){if(this.pool[t]&&this.pool[t].length>0){let e=this.pool[t].pop();return e.visible=!0,e}return as(t)}returnVehicle(t){t&&(t.mesh.visible=!1,this.scene.remove(t.mesh),this.pool[t.type]||(this.pool[t.type]=[]),this.pool[t.type].push(t.mesh))}respond(t,e){for(let a of this.active){let l=a.mesh.position.x-t,c=a.mesh.position.z-e;if(l*l+c*c<this.dedupRadius*this.dedupRadius)return null}let n=gu(),i=this.getVehicle(n),r=new A(t+(Math.random()-.5)*10,0,e+(Math.random()-.5)*10);i.position.copy(r),i.rotation.y=0,this.scene.add(i);let o={mesh:i,type:n,target:new A(t,0,e),speed:20,life:20};return this.active.push(o),this.effectSystem&&this.effectSystem.createEmergencyLights(i),this.events++,o}update(t){for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];n.life-=t;let i=n.target,r=i.x-n.mesh.position.x,o=i.z-n.mesh.position.z;if(Math.sqrt(r*r+o*o)<2||n.life<=0){this.returnVehicle(n),this.active.splice(e,1);continue}let l=n.speed*t;Math.abs(r)>Math.abs(o)?(n.mesh.position.x+=Math.sign(r)*Math.min(l,Math.abs(r)),n.mesh.rotation.y=Math.sign(r)*Math.PI/2):(n.mesh.position.z+=Math.sign(o)*Math.min(l,Math.abs(o)),n.mesh.rotation.y=Math.sign(o)>0?0:Math.PI)}}getColliders(){return this.active}};var vo=class{constructor(t){this.scene=t,this.sites=new Map,this.cranes=[],this.SPEED=.35}loadChunk(t,e,n){let i=n&&n.construction?n.construction:[];if(i.length){this.sites.set(`${t},${e}`,i);for(let r of i)this.cranes.push(r)}}unloadChunk(t,e){let n=`${t},${e}`,i=this.sites.get(n);if(i){for(let r of i){let o=this.cranes.indexOf(r);o>-1&&this.cranes.splice(o,1)}this.sites.delete(n)}}update(t){for(let e of this.cranes){e.phase+=t*this.SPEED;let n=e.phase;e.pivot.rotation.y=n,e.hook.position.x=e.jibLen*(.5+.5*Math.sin(n*.7)),e.hook.position.y=-3-7*Math.max(0,Math.sin(n*.35)),e.cable&&(e.cable.position.y=e.hook.position.y/2,e.cable.scale.y=Math.max(.25,-e.hook.position.y))}}craneCount(){return this.cranes.length}};var Mo=class{constructor(t,e,n,i){this.scene=t,this.directionalLight=e,this.ambientLight=n,this.materials=i,this.particles=null,this.particles=null,this.particleCount=12e3,this.particleSystem=null,this.particleSystem=null,this.sun=null,this.clouds=null,this.currentWeather="sunny",this.gameTime=12;let r=new Date,o=new Date(r.getFullYear(),0,0),a=r-o,l=1e3*60*60*24,c=Math.floor(a/l);this.day=c,this.year=1,console.log(`Weather Initialized: Real World Date ${r.toDateString()} -> Game Day ${this.day}`),this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2,this.targetWeatherState={fogDensity:.002,lightIntensity:1.5,ambientIntensity:.6,skyColorHex:8900331,precipAlpha:0,roughness:.9,wetness:0,precipType:"none"},this.currentWeatherState={...this.targetWeatherState},this.transitionSpeed=.5,this.windTime=0,this.windVector=new A(5,0,2),this.initParticles(),this.initSky(),this.pickWeatherForSeason(),this.cloudInstances=[],this.initClouds()}initClouds(){let i=[],r=new yt({color:16777215,roughness:.9,transparent:!0,opacity:.8,flatShading:!0}),o=(c,h,u,d)=>{let f=new Ji(c,0);return f.translate(h,u,d),f};for(let c=0;c<3;c++){let h,u,d;c===0?(h=3+Math.floor(Math.random()*3),u=30,d=15):c===1?(h=8+Math.floor(Math.random()*5),u=70,d=30):(h=15+Math.floor(Math.random()*10),u=140,d=40);let f=[];for(let g=0;g<h;g++){let x=d+Math.random()*d,m=(Math.random()-.5)*u,p=(Math.random()-.5)*u*.4,y=(Math.random()-.5)*u*.6;f.push(o(x,m,p,y))}f.length>0?i.push(ui(f)):i.push(new Lt(1,1,1))}let a=Math.ceil(40/3);this.cloudMeshes=[];let l=[];for(let c=0;c<3;c++){let h=new $i(i[c],r,a);h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.setUsage(zh);let u=new pe;for(let d=0;d<a;d++){let f,g,x=!1,m=0;for(;!x&&m<50;){f=(Math.random()-.5)*2e3,g=(Math.random()-.5)*2e3,x=!0;for(let y of l)if(Math.sqrt((f-y.x)**2+(g-y.z)**2)<150){x=!1;break}m++}l.push({x:f,z:g});let p=400+Math.random()*150;u.position.set(f,p,g),u.rotation.y=Math.random()*Math.PI*2,u.scale.setScalar(1+Math.random()*.5),u.updateMatrix(),h.setMatrixAt(d,u.matrix)}h.instanceMatrix.needsUpdate=!0,this.scene.add(h),this.cloudMeshes.push({mesh:h,count:a,dummy:u})}}updateClouds(t,e){if(!this.cloudMeshes)return;let n=15*t,i=1e3;for(let r of this.cloudMeshes){let o=r.mesh,a=r.dummy,l=!1;for(let c=0;c<r.count;c++){o.getMatrixAt(c,a.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.position.x+=n;let h=a.position.x-e.x,u=a.position.z-e.z,d=!1;h>i&&(a.position.x-=i*2,d=!0),h<-i&&(a.position.x+=i*2,d=!0),u>i&&(a.position.z-=i*2,d=!0),u<-i&&(a.position.z+=i*2,d=!0),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l=!0}l&&(o.instanceMatrix.needsUpdate=!0)}}initParticles(){let t=new Me,e=[],n=[];for(let r=0;r<this.particleCount;r++)e.push((Math.random()-.5)*1e3),e.push(Math.random()*500),e.push((Math.random()-.5)*1e3),n.push((Math.random()-.5)*20);t.setAttribute("position",new Kt(e,3)),t.setAttribute("velocity",new Kt(n,1));let i=new Us({color:11184810,size:.5,transparent:!0,opacity:0,blending:Hn,depthWrite:!1});this.particleSystem=new Yr(t,i),this.particleSystem.visible=!0,this.particleSystem.frustumCulled=!1,this.scene.add(this.particleSystem),this.particles=t}initSky(){let t=new ai(1e3,32,32),e=new ne({color:16768324,fog:!1});this.sun=new nt(t,e),this.sun.position.set(500,5e3,500),this.scene.add(this.sun)}setSunny(){console.log("Weather Target: Sunny"),this.currentWeather="sunny",this.targetWeatherState.precipType="none",this.targetWeatherState.fogDensity=.002,this.targetWeatherState.skyColorHex=8900331,this.targetWeatherState.lightIntensity=2,this.targetWeatherState.ambientIntensity=.6,this.targetWeatherState.precipAlpha=0,this.targetWeatherState.roughness=.9,this.targetWeatherState.wetness=0}setRain(){console.log("Weather Target: Rain"),this.currentWeather="rain",this.targetWeatherState.precipType="rain",this.targetWeatherState.fogDensity=.02,this.targetWeatherState.skyColorHex=328976,this.targetWeatherState.lightIntensity=.5,this.targetWeatherState.ambientIntensity=.2,this.targetWeatherState.precipAlpha=.6,this.targetWeatherState.roughness=.1,this.targetWeatherState.wetness=1}setSnow(){console.log("Weather Target: Snow"),this.currentWeather="snow",this.targetWeatherState.precipType="snow",this.targetWeatherState.fogDensity=.03,this.targetWeatherState.skyColorHex=15658734,this.targetWeatherState.lightIntensity=1.5,this.targetWeatherState.ambientIntensity=.8,this.targetWeatherState.precipAlpha=.9,this.targetWeatherState.roughness=1,this.targetWeatherState.wetness=0}update(t,e=new A){this.gameTime+=t*.04,this.gameTime>=24&&(this.gameTime=0,this.day++,console.log(`Day Info: Day ${this.day}, Year ${this.year}`),this.day>365&&(this.day=1,this.year++));let i=Math.min(t*this.transitionSpeed,1),r=this.currentWeatherState,o=this.targetWeatherState;r.fogDensity+=(o.fogDensity-r.fogDensity)*i,r.lightIntensity+=(o.lightIntensity-r.lightIntensity)*i,r.ambientIntensity+=(o.ambientIntensity-r.ambientIntensity)*i,r.precipAlpha+=(o.precipAlpha-r.precipAlpha)*i,r.roughness+=(o.roughness-r.roughness)*i;let a=new dt(r.skyColorHex),l=new dt(o.skyColorHex);if(a.lerp(l,i),r.skyColorHex=a.getHex(),this.materials.road){this.materials.road.roughness=r.roughness;let h=new dt(this.currentWeather==="snow"?15658734:2236962),u=new dt(328965);o.wetness>0?this.materials.road.color.lerp(u,i*.5):this.materials.road.color.lerp(h,i*.5)}this.updateTimeCycle(e),this.windTime+=t;let c=Math.sin(this.windTime*.5)+Math.sin(this.windTime*.1)*.5;this.windVector.x=10+c*10,this.windVector.z=c*5,this.updateParticles(t,e),this.updateClouds(t,e),this.updateWeatherAutomation(t*.04)}updateParticles(t,e){if(!this.particleSystem)return;let n=this.currentWeatherState.precipAlpha;if(this.particleSystem.material.opacity=n,n<.01)return;let i=this.targetWeatherState.precipType==="rain";this.particleSystem.material.color.setHex(i?11193599:16777215),this.particleSystem.material.size=i?.8:1.5;let r=this.particles.attributes.position.array,o=this.particles.attributes.velocity.array,a=500,l=500,c=-50,h=i?90:20,u=this.windVector.x*t,d=this.windVector.z*t,f=this.windTime;for(let g=0;g<this.particleCount;g++){let x=r[g*3],m=r[g*3+1],p=r[g*3+2],y=h;if(!i){let w=o[g],C=Math.sin(f*2+w);y+=C*5,x+=C*5*t,p+=C*5*t,m-=C*2*t}m-=y*t,x-=u,p-=d,m<c&&(m=l);let _=x-e.x,S=p-e.z,R=!1;_>a&&(x-=a*2,R=!0),_<-a&&(x+=a*2,R=!0),S>a&&(p-=a*2,R=!0),S<-a&&(p+=a*2,R=!0),R&&(m=Math.random()*l),r[g*3]=x,r[g*3+1]=m,r[g*3+2]=p}this.particles.attributes.position.needsUpdate=!0}updateTimeCycle(t){let e=this.gameTime,n=0;e>=6&&e<18?n=(e-6)/12*Math.PI:n=(e-6)/24*Math.PI*2;let i=1e4,r=Math.cos(n)*i,o=Math.sin(n)*i;if(this.sun&&(this.sun.position.set(t.x+r,o,t.z),this.sun.visible=this.currentWeatherState.precipAlpha<.5,o<0?(this.sun.material.color.setHex(16777215),this.sun.position.set(t.x-r,-o,t.z)):this.sun.material.color.setHex(16768324)),this.directionalLight){let S=r,R=o;R<0&&(S=-S,R=-R);let w=new A(S,R,0).normalize();this.directionalLight.position.copy(t).add(w.multiplyScalar(100)),this.directionalLight.target.position.copy(t),this.directionalLight.target.updateMatrixWorld()}let a=new dt(1296),l=new dt(16729344),c=new dt(8900331),h=new dt(16604755),u=new dt,d=0,f=0;if(e>=5&&e<7){let S=(e-5)/2;u.lerpColors(a,l,S),S>.5&&u.lerp(c,(S-.5)*2),d=S*1.5,f=.1+S*.5}else if(e>=7&&e<17)u.copy(c),d=1.5,f=.6;else if(e>=17&&e<19){let S=(e-17)/2;u.lerpColors(c,h,S),S>.5&&u.lerp(a,(S-.5)*2),d=1.5-S*1.5,f=.6-S*.5}else u.copy(a),d=.2,f=.1;let g=new dt(this.currentWeatherState.skyColorHex),x=this.currentWeatherState.lightIntensity,m=u.clone();m.lerp(g,this.currentWeatherState.precipAlpha);let p=d*(x/2),y=f*(this.currentWeatherState.ambientIntensity/.6);this.scene.background=m,this.scene.fog&&(this.scene.fog.color.copy(m),this.scene.fog.density=this.currentWeatherState.fogDensity),this.directionalLight.intensity=p,this.ambientLight.intensity=y;let _=0;if(e>19||e<5?_=1:e>=18&&e<=19?_=e-18:e>=5&&e<=6&&(_=1-(e-5)),this.materials.window){let S=new dt(1118481),R=new dt(16777130);this.materials.window.color.lerpColors(S,R,_),this.materials.window.opacity=.08+_*.92}}updateWeatherAutomation(t){this.timeSinceLastWeatherChange+=t,this.timeSinceLastWeatherChange>this.weatherChangeInterval&&(this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2+Math.random()*2,this.pickWeatherForSeason())}pickWeatherForSeason(){let t="";this.day<=90?t="Winter":this.day<=180?t="Spring":this.day<=270?t="Summer":t="Autumn";let e=Math.random(),n="sunny";switch(t){case"Winter":e<.6?n="snow":e<.8?n="rain":n="sunny";break;case"Spring":e<.4?n="rain":n="sunny";break;case"Summer":e<.1?n="rain":n="sunny";break;case"Autumn":e<.4?n="rain":e<.5?n="snow":n="sunny";break}n!==this.currentWeather&&(n==="sunny"?this.setSunny():n==="rain"?this.setRain():n==="snow"&&this.setSnow())}};var So=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkPeds=new Map,this.peds=[],this.maxSpeed=2,this.maxForce=5,this.geomBody=new Lt(.45,.75,.25),this.geomHead=new Lt(.25,.25,.25),this.geomLimb=new Lt(.12,.75,.12),this.geomShoe=new Lt(.14,.1,.22),this.geomHair=new Lt(.27,.1,.27),this.matSkin=new yt({color:16764074}),this.matDark=new yt({color:2236962})}setDependencies(t,e){this.trafficLightSystem=t}loadChunk(t,e){let n=[],r=this.blockSize+this.roadWidth,o=t*r,a=e*r;for(let l=0;l<4;l++){let c=this.createPedMesh(),h=this.spawnPedInChunk(c,o,a,this.blockSize);this.scene.add(c);let u={mesh:c,velocity:new A(0,0,0),acceleration:new A(0,0,0),state:"WALKING",target:h.target,chunkX:o,chunkZ:a,chunkSize:r,bounds:h.bounds,legAnimTimer:Math.random()*10,limbs:c.userData.limbs,waitTimer:0,ragdollTimer:0};n.push(u),this.peds.push(u)}this.chunkPeds.set(`${t},${e}`,n)}unloadChunk(t,e){let n=`${t},${e}`;this.chunkPeds.has(n)&&(this.chunkPeds.get(n).forEach(r=>{this.scene.remove(r.mesh);let o=this.peds.indexOf(r);o>-1&&this.peds.splice(o,1)}),this.chunkPeds.delete(n))}createPedMesh(){let t=new he,e=new dt().setHSL(Math.random(),.7,.4),n=new dt().setHSL(Math.random(),.5,.2),i=new dt().setHSL(.08,.6,.5+Math.random()*.4),r=new dt().setHSL(Math.random(),.5,.1+Math.random()*.2),o=new yt({color:e}),a=new yt({color:n}),l=new yt({color:i}),c=new yt({color:r}),h=new nt(this.geomBody,o);h.position.y=1,h.castShadow=!0,t.add(h);let u=new nt(this.geomHead,l);u.position.y=1.55,u.castShadow=!0,t.add(u);let d=new nt(this.geomHair,c);d.position.y=1.7,d.castShadow=!0,t.add(d);let f=new he;f.position.set(-.35,1.35,0);let g=new nt(this.geomLimb,o);g.position.y=-.3,g.castShadow=!0,f.add(g);let x=new nt(new Lt(.1,.1,.1),l);x.position.y=-.7,f.add(x),t.add(f);let m=new he;m.position.set(.35,1.35,0);let p=new nt(this.geomLimb,o);p.position.y=-.3,p.castShadow=!0,m.add(p);let y=new nt(new Lt(.1,.1,.1),l);y.position.y=-.7,m.add(y),t.add(m);let _=new he;_.position.set(-.15,.65,0);let S=new nt(this.geomLimb,a);S.position.y=-.35,S.castShadow=!0,_.add(S);let R=new nt(this.geomShoe,this.matDark);R.position.set(0,-.75,.05),_.add(R),t.add(_);let w=new he;w.position.set(.15,.65,0);let C=new nt(this.geomLimb,a);C.position.y=-.35,C.castShadow=!0,w.add(C);let I=new nt(this.geomShoe,this.matDark);return I.position.set(0,-.75,.05),w.add(I),t.add(w),t.userData.limbs={leftArm:f,rightArm:m,leftLeg:_,rightLeg:w},t}spawnPedInChunk(t,e,n,i){let r=this.roadWidth/2,o=i/2,l=[{x:-1,z:-1},{x:1,z:-1},{x:1,z:1},{x:-1,z:1}][Math.floor(Math.random()*4)],c=r+Math.random()*o,h=r+Math.random()*o,u=c*l.x,d=h*l.z;t.position.set(e+u,0,n+d);let f=Math.random()>.5?"x":"z",g=Math.random()>.5?1:-1,x=new A(g*100,0,0);f==="z"&&x.set(0,0,g*100),x.add(t.position);let m=r+o/2,p=m*l.x,y=m*l.z,_=(o-4)/2+.5;return{target:x,bounds:{buildingCenterX:p,buildingCenterZ:y,buildingHalfWidth:_}}}update(t){t>.1&&(t=.1);for(let e of this.chunkPeds.values())e.forEach(n=>{if(n.state==="RAGDOLL"){n.velocity.y-=20*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.rotation.x+=t*5,n.mesh.rotation.z+=t*5,n.mesh.position.y<0&&(n.mesh.position.y=0,n.velocity.multiplyScalar(.5),n.velocity.y=0),n.ragdollTimer-=t,n.ragdollTimer<=0&&n.velocity.length()<.1&&(n.state="WALKING",n.mesh.rotation.set(0,0,0),n.mesh.position.y=0);return}let i=new A(0,0,0);if(this.updateState(n,t),n.state!=="WAITING"){let r=this.seek(n,n.target);i.add(r);let o=this.avoidBuilding(n);i.add(o.multiplyScalar(3))}if(n.acceleration.copy(i),n.velocity.add(n.acceleration.multiplyScalar(t)),n.velocity.length()>this.maxSpeed&&n.velocity.setLength(this.maxSpeed),n.state==="WAITING"&&n.velocity.set(0,0,0),n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.velocity.lengthSq()>.01&&n.mesh.lookAt(n.mesh.position.clone().add(n.velocity)),n.velocity.lengthSq()>.1){n.legAnimTimer+=t*12;let r=Math.sin(n.legAnimTimer);n.limbs.leftLeg.rotation.x=r*.6,n.limbs.rightLeg.rotation.x=-r*.6,n.limbs.leftArm.rotation.x=-r*.6,n.limbs.rightArm.rotation.x=r*.6,n.mesh.position.y=Math.abs(Math.sin(n.legAnimTimer*2))*.05}else n.limbs.leftLeg.rotation.x=0,n.limbs.rightLeg.rotation.x=0,n.limbs.leftArm.rotation.x=0,n.limbs.rightArm.rotation.x=0,n.mesh.position.y=0})}updateState(t,e){let n=t.mesh.position.x-t.chunkX,i=t.mesh.position.z-t.chunkZ,r=this.roadWidth/2;if(t.state==="WALKING"){let o=Math.abs(n)-r,a=Math.abs(i)-r;if(Math.abs(n)<r+1&&Math.abs(i)<r+20||Math.abs(i)<r+1&&Math.abs(n)<r+20){let l=Math.abs(t.velocity.x),c=Math.abs(t.velocity.z);l>c?Math.abs(n)<r+.5&&Math.abs(n)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="x"):Math.abs(i)<r+.5&&Math.abs(i)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="z")}}else if(t.state==="WAITING")if(this.trafficLightSystem){let o=Math.round(t.chunkX/t.chunkSize),a=Math.round(t.chunkZ/t.chunkSize),l=!1;if(t.crossAxis==="x"?l=this.trafficLightSystem.checkGreenLight(o,a,"z"):l=this.trafficLightSystem.checkGreenLight(o,a,"x"),!l)if(t.state="CROSSING",t.crossAxis==="x"){let c=t.target.x>t.mesh.position.x?1:-1;t.crossingTarget=new A(t.mesh.position.x+c*(this.roadWidth+4),0,t.mesh.position.z)}else{let c=t.target.z>t.mesh.position.z?1:-1;t.crossingTarget=new A(t.mesh.position.x,0,t.mesh.position.z+c*(this.roadWidth+4))}}else t.waitTimer+=e,t.waitTimer>2&&(t.state="CROSSING");else t.state==="CROSSING"&&t.mesh.position.distanceTo(t.crossingTarget)<1&&(t.state="WALKING")}seek(t,e){let n=t.state==="CROSSING"&&t.crossingTarget?t.crossingTarget:e,i=new A().subVectors(n,t.mesh.position);i.normalize().multiplyScalar(this.maxSpeed);let r=new A().subVectors(i,t.velocity);return r.length()>this.maxForce&&r.setLength(this.maxForce),r}avoidBuilding(t){let e=t.mesh.position.x-t.chunkX,n=t.mesh.position.z-t.chunkZ,i=e-t.bounds.buildingCenterX,r=n-t.bounds.buildingCenterZ,o=Math.abs(i),a=Math.abs(r),l=t.bounds.buildingHalfWidth;if(o<l&&a<l){let c=new A(i,0,r);return c.normalize().multiplyScalar(this.maxForce*2),c}return new A(0,0,0)}};var Eo=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.cars=[],this.effectSystem=null}setDependencies(t){this.effectSystem=t}loadChunk(t,e){let n=[],i=this.blockSize+this.roadWidth,r=t*i,o=e*i;this.spawnRowInChunk(r,o,!0,n,i),this.spawnRowInChunk(r,o,!1,n,i),this.chunkCars.set(`${t},${e}`,n),n.forEach(a=>this.cars.push(a))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.scene.remove(r),mu(r);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.userData.localBox?t.push(n.userData.localBox.clone().applyMatrix4(n.matrixWorld)):t.push(new qt().setFromObject(n)))});return t}spawnRowInChunk(t,e,n,i,r){let o=this.roadWidth/2,a=r/2,l=2,c=[{start:-a,end:-o-l},{start:o+l,end:a}],h=10,u=o+1.4;c.forEach(d=>{let f=Math.random()*2;for(let g=d.start+f+2;g<d.end-2;g+=h)[u,-u].forEach(x=>{if(Math.random()<.5)return;let m=xo(),p=this.getDimensions(m),y,_,S,R=(Math.random()-.5)*1,w=g+R;if(w+p.l/2>d.end)return;n?(y=t+w,_=e+x,S=Math.random()>.5?Math.PI/2:-Math.PI/2):(y=t+x,_=e+w,S=Math.random()>.5?0:Math.PI);let C,I;n?(C=p.l,I=p.w):(C=p.w,I=p.l);let v=.2,b={minX:y-C/2-v,maxX:y+C/2+v,minZ:_-I/2-v,maxZ:_+I/2+v};if(!this.isBlocked(b,i)){let U=as(m);U.userData.localBox=new qt().setFromObject(U),U.position.set(y,0,_),U.rotation.y=S,U.userData.health=100,this.scene.add(U),i.push(U)}})})}isBlocked(t,e){for(let n of e){let i=this.getDimensions(n.userData.type),r=n.position.x,o=n.position.z,a=n.rotation.y,l,c;Math.abs(a)<.1||Math.abs(a-Math.PI)<.1?(l=i.w,c=i.l):(l=i.l,c=i.w);let h=.5,u={minX:r-l/2-h,maxX:r+l/2+h,minZ:o-c/2-h,maxZ:o+c/2+h};if(t.maxX>u.minX&&t.minX<u.maxX&&t.maxZ>u.minZ&&t.minZ<u.maxZ)return!0}return!1}getDimensions(t){switch(t){case"truck":return{w:3.5,l:8};case"suv":return{w:2.5,l:5};case"sport":return{w:2.2,l:4.6};default:return{w:2.1,l:4.4}}}update(t){for(let e of this.cars)e.userData.velocity&&(e.position.add(e.userData.velocity.clone().multiplyScalar(t)),e.rotation.y+=(e.userData.angularVelocity||0)*t,e.userData.velocity.multiplyScalar(.98),e.userData.angularVelocity&&(e.userData.angularVelocity*=.98),e.userData.velocity.length()<.1&&(e.userData.velocity=null)),e.userData.health<50&&this.effectSystem&&Math.random()<.05&&(e.userData.health<20?this.effectSystem.createFireEffect(e):this.effectSystem.createSmokeEffect(e))}};var bo=class{constructor(t,e){this.scene=t,this.citySize=e,this.airplane=null,this.spawnTimer=0,this.flightSpeed=40,this.flightHeight=50}update(t){this.airplane?this.moveAirplane(t):(this.spawnTimer-=t,this.spawnTimer<=0&&this.spawnAirplane())}spawnAirplane(){this.airplane=this.createAirplaneMesh();let t=300,e=Math.random()>.5?"x":"z",n=Math.random()>.5?1:-1;this.currentFlightData={axis:e,direction:n,limit:t+50};let r=(Math.random()-.5)*100;e==="x"?(this.airplane.position.set(-n*t,this.flightHeight,r),this.airplane.rotation.y=n>0?0:Math.PI):(this.airplane.position.set(r,this.flightHeight,-n*t),this.airplane.rotation.y=n>0?-Math.PI/2:Math.PI/2),this.scene.add(this.airplane)}moveAirplane(t){if(!this.airplane)return;let e=this.currentFlightData.direction*this.flightSpeed*t,n=this.currentFlightData.limit;this.currentFlightData.axis==="x"?(this.airplane.position.x+=e,Math.abs(this.airplane.position.x)>n&&this.removeAirplane()):(this.airplane.position.z+=e,Math.abs(this.airplane.position.z)>n&&this.removeAirplane())}removeAirplane(){this.airplane&&(this.scene.remove(this.airplane),this.airplane=null),this.spawnTimer=15+Math.random()*5}createAirplaneMesh(){let t=new he,e=new yt({color:16777215,roughness:.2}),n=new yt({color:13421772,roughness:.3}),i=new yt({color:3355443,roughness:.1}),r=new ne({color:16711680}),o=new Kr(.8,4,4,8),a=new nt(o,e);a.rotation.z=Math.PI/2,t.add(a);let l=new Lt(1.5,.1,8),c=new nt(l,n);c.position.set(0,0,0),t.add(c);let h=new Lt(1,.1,3),u=new nt(h,n);u.position.set(-1.8,0,0),t.add(u);let d=new Lt(.8,1.2,.1),f=new nt(d,n);f.position.set(-1.8,.6,0),t.add(f);let g=new Lt(1,.6,.8),x=new nt(g,i);x.position.set(.5,.5,0),t.add(x);let m=new nt(new Lt(.1,.1,.1),r);m.position.set(0,0,4),t.add(m);let p=new nt(new Lt(.1,.1,.1),new ne({color:65280}));p.position.set(0,0,-4),t.add(p);let y=new on(.3,.3,.8,8),_=new nt(y,e);_.rotation.z=Math.PI/2,_.position.set(0,-.2,2),t.add(_);let S=new nt(y,e);return S.rotation.z=Math.PI/2,S.position.set(0,-.2,-2),t.add(S),t}};var wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$x=new Yi(-1,1,1,-1,0,1),Hl=class extends Me{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},Jx=new Hl,Yn=class{constructor(t){this._mesh=new nt(Jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$x)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ls=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zs=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},To=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ao=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ls(wo),this.copyPass.material.blending=hn,this.clock=new ji}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zs!==void 0&&(o instanceof Zs?n=!0:o instanceof To&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Co=class extends We{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var xu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var cs=class s extends We{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Oe(r,o,{type:sn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Oe(r,o,{type:sn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=xu;this.highPassUniforms=Wn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=wo;this.copyUniforms=Wn.clone(h.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new ne,this.fsQuad=new Yn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};cs.BlurDirectionX=new it(1,0);cs.BlurDirectionY=new it(0,1);var _u={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ro=class extends We{constructor(){super();let t=_u;this.uniforms=Wn.clone(t.uniforms),this.material=new Qr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Po=class{constructor(t){this.scene=t,this.particles=[],this.emitters=[],this.sirens=[]}createEmergencyLights(t){let e=new ne({color:16716049,transparent:!0,opacity:0}),n=new ne({color:1118719,transparent:!0,opacity:0}),i=new nt(new ai(.16,8,8),e),r=new nt(new ai(.16,8,8),n);return i.position.set(-.4,1.5,0),r.position.set(.4,1.5,0),i.userData={parent:t,siren:!0},r.userData={parent:t,siren:!0},this.scene.add(i),this.scene.add(r),this.sirens.push({red:i,blue:r,parent:t,timer:0}),this.sirens[this.sirens.length-1]}addEmitter(t,e){this.emitters.find(i=>i.object===t&&i.type===e)||this.emitters.push({object:t,type:e,timer:0})}createCrashEffect(t){let n=new Lt(.3,.3,.3),i=new ne({color:16755200});for(let r=0;r<20;r++){let o=new nt(n,i);o.position.copy(t),o.position.x+=(Math.random()-.5)*1,o.position.y+=(Math.random()-.5)*1,o.position.z+=(Math.random()-.5)*1;let a=new A((Math.random()-.5)*10,Math.random()*10+2,(Math.random()-.5)*10);this.scene.add(o),this.particles.push({mesh:o,velocity:a,life:1})}}createFireEffect(t){let n=new Lt(.4,.4,.4),i=new ne({color:16729088});for(let r=0;r<5;r++){let o=new nt(n,i);o.position.set((Math.random()-.5)*1,1+Math.random(),2+(Math.random()-.5)),o.userData={parent:t,offset:o.position.clone(),type:"fire",life:2+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,5,0),life:o.userData.life,isAttached:!0})}}createSmokeEffect(t){let n=new Lt(.5,.5,.5),i=new ne({color:5592405});for(let r=0;r<5;r++){let o=new nt(n,i);o.position.set((Math.random()-.5)*1,1.5+Math.random(),2),o.userData={parent:t,offset:o.position.clone(),type:"smoke",life:3+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,3,0),life:o.userData.life,isAttached:!0})}}update(t){for(let e of this.emitters)e.timer-=t,e.timer<=0&&(e.type==="fire"?(this.createFireEffect(e.object),e.timer=.1):e.type==="smoke"&&(this.createSmokeEffect(e.object),e.timer=.2));for(let e=this.particles.length-1;e>=0;e--){let n=this.particles[e];if(n.life-=t,n.life<=0)this.scene.remove(n.mesh),this.particles.splice(e,1),n.mesh.geometry&&n.mesh.geometry.dispose();else{if(n.isAttached){if(n.velocity.y+=t*2,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.userData.parent&&n.life>n.mesh.userData.life-.1){let i=n.mesh.userData.parent;if(i&&i.matrixWorld){let r=n.mesh.userData.offset.clone();r.applyMatrix4(i.matrixWorld),n.mesh.position.copy(r)}n.isAttached=!1}}else n.velocity.y-=20*t,n.mesh.position.addScaledVector(n.velocity,t);n.mesh.rotation.x+=t*5,n.mesh.rotation.y+=t*5,n.mesh.scale.setScalar(n.life)}}for(let e=this.sirens.length-1;e>=0;e--){let n=this.sirens[e];if(!(n.parent&&n.parent.visible)){this.scene.remove(n.red),this.scene.remove(n.blue),n.red.geometry.dispose(),n.red.material.dispose(),n.blue.geometry.dispose(),n.blue.material.dispose(),this.sirens.splice(e,1);continue}n.timer+=t;let r=n.timer%.5<.25;n.red.material.opacity=r?1:0,n.blue.material.opacity=r?0:1}}},Lo=class s{constructor({renderer:t=null,scene:e=null,camera:n=null}={}){this.renderer=t,this.scene=e,this.camera=n,this.enabled=!!t&&!!e&&!!n,this.bloom={strength:0,threshold:1,radius:.6},this.droplets={intensity:0},this.passes=["render","bloom","droplets","output"],this.composer=null,this.bloomPass=null,this.dropletPass=null,this.dropletUniforms=null,this.clock=null,this.enabled&&this._build()}static dropletShader(){return{uniforms:{tDiffuse:{value:null},uIntensity:{value:0},uTime:{value:0},uResolution:{value:new it(1,1)}},vertexShader:["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:["uniform float uIntensity;","uniform float uTime;","uniform vec2 uResolution;","varying vec2 vUv;","uniform sampler2D tDiffuse;","","float hash(vec2 p) {","  vec3 p3 = fract(vec3(p.xyx) * 0.1031);","  p3 += dot(p3, p3.zxy + 33.33);","  return fract((p3.x + p3.y) * p3.z);","}","","void main() {","  vec2 uv = vUv;","  float aspect = uResolution.x / uResolution.y;","  vec2 p = vec2(uv.x * aspect, uv.y);","  float grid = 10.0;","  vec2 id = floor(p * grid);","  vec2 gv = fract(p * grid) - 0.5;","  float t = uTime * 6.0;","","  // per-cell droplet: random x, falling y","  vec2 o = vec2(hash(id) - 0.5, -t * (0.25 + hash(id + 1.0)));","  gv -= o;","","  // droplet disc","  float r = length(gv * vec2(1.0, 0.55));","  float drop = smoothstep(0.07, 0.0, r);","","  // thin vertical streak (tail)","  float streak = smoothstep(0.02, 0.0, abs(gv.x))","              * smoothstep(0.28, 0.0, abs(gv.y)) * 0.5;","","  // only some cells carry a droplet","  float has = step(0.25, hash(id + 3.0));","  vec4 sceneColor = texture2D(tDiffuse, vUv);","  float v = (drop + streak) * has * uIntensity;","  gl_FragColor = vec4(sceneColor.rgb + vec3(v) * 0.25, 1.0);","}"].join(`
`)}}_build(){let t=window.innerWidth,e=window.innerHeight;this.composer=new Ao(this.renderer),this.composer.addPass(new Co(this.scene,this.camera)),this.bloomPass=new cs(new it(t,e),this.bloom.strength,this.bloom.radius,this.bloom.threshold),this.composer.addPass(this.bloomPass);let n=s.dropletShader();this.dropletUniforms=n.uniforms,this.dropletUniforms.uResolution.value.set(t,e),this.dropletPass=new ls(n),this.dropletPass.material.blending=Hn,this.dropletPass.material.transparent=!0,this.composer.addPass(this.dropletPass),this.composer.addPass(new Ro),this.clock=new ji}update(t,e=0){let n=t?t.precipAlpha:0;return this.droplets.intensity=ts.clamp(n,0,1),this.bloom.strength=ts.clamp(e*.9,0,1.5),this.bloom.threshold=ts.clamp(.25+(1-e)*.6,.1,1),this.bloom.radius=.6,this.enabled&&this.bloomPass&&(this.bloomPass.strength=this.bloom.strength,this.bloomPass.threshold=this.bloom.threshold,this.bloomPass.radius=this.bloom.radius),this.enabled&&this.dropletPass&&(this.dropletUniforms.uIntensity.value=this.droplets.intensity,this.dropletUniforms.uTime.value=this.clock.getElapsedTime()),this.estimate()}estimate(){return{enabled:this.enabled,bloom:{...this.bloom},droplets:{...this.droplets},passes:[...this.passes]}}render(){this.enabled&&this.composer&&this.composer.render()}resize(){if(!this.enabled)return;let t=window.innerWidth,e=window.innerHeight;this.bloomPass&&this.bloomPass.setSize(t,e),this.dropletUniforms&&this.dropletUniforms.uResolution.value.set(t,e)}};var Io=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.chunkLights=new Map,this.cycleDuration=10}loadChunk(t,e){let n=this.createLightMeshes(),i=this.blockSize+this.roadWidth,r=t*i,o=e*i;n.position.set(r,0,o);let a=(t+e)%2===0;this.chunkLights.set(`${t},${e}`,{mesh:n,cx:t,cz:e,state:a?"NsGreen":"EwGreen",timer:0,materials:n.userData.materials}),this.scene.add(n),this.updateVisuals(this.chunkLights.get(`${t},${e}`))}unloadChunk(t,e){let n=`${t},${e}`;if(this.chunkLights.has(n)){let i=this.chunkLights.get(n);this.scene.remove(i.mesh),this.chunkLights.delete(n)}}createLightMeshes(){let t=new he,e=new Lt(.3,6,.3),n=new Lt(.8,2,.5),i=new on(.25,.25,.1,16);i.rotateX(Math.PI/2);let r=new yt({color:3355443}),o=new yt({color:1118481}),a=new li({color:1118481,emissive:0}),l=new li({color:16711680,emissive:16711680,emissiveIntensity:2}),c=new li({color:16776960,emissive:16776960,emissiveIntensity:2}),h=new li({color:65280,emissive:65280,emissiveIntensity:2});t.userData.materials={matOff:a,matRedOn:l,matYellowOn:c,matGreenOn:h};let u=this.roadWidth/2+1;return[{x:u,z:u,rot:Math.PI,type:"Ns"},{x:-u,z:-u,rot:0,type:"Ns"},{x:u,z:-u,rot:-Math.PI/2,type:"Ew"},{x:-u,z:u,rot:Math.PI/2,type:"Ew"}].forEach((f,g)=>{let x=new nt(e,r);x.position.set(f.x,3,f.z),t.add(x);let m=new nt(n,o);m.position.set(f.x,5.5,f.z),m.rotation.y=f.rot,t.add(m);let p=new nt(i,a.clone());p.position.set(0,.5,.26),m.add(p);let y=new nt(i,a.clone());y.position.set(0,0,.26),m.add(y);let _=new nt(i,a.clone());_.position.set(0,-.5,.26),m.add(_),t.userData[`light_${g}_R`]=p,t.userData[`light_${g}_Y`]=y,t.userData[`light_${g}_G`]=_,t.userData[`light_${g}_type`]=f.type}),t}update(t){for(let e of this.chunkLights.values())e.timer+=t,e.state==="NsGreen"&&e.timer>this.cycleDuration?(e.state="NsYellow",e.timer=0,this.updateVisuals(e)):e.state==="NsYellow"&&e.timer>3?(e.state="AllRed1",e.timer=0,this.updateVisuals(e)):e.state==="AllRed1"&&e.timer>2?(e.state="EwGreen",e.timer=0,this.updateVisuals(e)):e.state==="EwGreen"&&e.timer>this.cycleDuration?(e.state="EwYellow",e.timer=0,this.updateVisuals(e)):e.state==="EwYellow"&&e.timer>3?(e.state="AllRed2",e.timer=0,this.updateVisuals(e)):e.state==="AllRed2"&&e.timer>2&&(e.state="NsGreen",e.timer=0,this.updateVisuals(e))}updateVisuals(t){let{matOff:e,matRedOn:n,matYellowOn:i,matGreenOn:r}=t.materials,o=(c,h)=>{let u=t.mesh.userData[`light_${c}_R`],d=t.mesh.userData[`light_${c}_Y`],f=t.mesh.userData[`light_${c}_G`];u&&(u.material=h==="r"?n:e,d.material=h==="y"?i:e,f.material=h==="g"?r:e)},a="r",l="r";t.state==="NsGreen"?(a="g",l="r"):t.state==="NsYellow"?(a="y",l="r"):t.state==="EwGreen"?(a="r",l="g"):t.state==="EwYellow"&&(a="r",l="y");for(let c=0;c<4;c++)t.mesh.userData[`light_${c}_type`]==="Ns"?o(c,a):o(c,l)}checkGreenLight(t,e,n){let i=`${t},${e}`,r=this.chunkLights.get(i);return r?n==="z"?r.state==="NsGreen"||r.state==="NsYellow":r.state==="EwGreen"||r.state==="EwYellow":!0}};var Vl=class{constructor(t){this.cellSize=t,this.cells=new Map,this.count=0}key(t,e){return`${Math.floor(t/this.cellSize)},${Math.floor(e/this.cellSize)}`}insert(t){let e=(t.min.x+t.max.x)/2,n=(t.min.z+t.max.z)/2,i=this.key(e,n),r=this.cells.get(i);r||(r=[],this.cells.set(i,r)),r.push(t),this.count++}remove(t){let e=(t.min.x+t.max.x)/2,n=(t.min.z+t.max.z)/2,i=this.key(e,n),r=this.cells.get(i);if(!r)return!1;let o=r.indexOf(t);return o>=0&&(r.splice(o,1),this.count--),r.length===0&&this.cells.delete(i),o>=0}query(t,e,n){let i=[],r=Math.floor((t-n)/this.cellSize),o=Math.floor((t+n)/this.cellSize),a=Math.floor((e-n)/this.cellSize),l=Math.floor((e+n)/this.cellSize);for(let c=r;c<=o;c++)for(let h=a;h<=l;h++){let u=this.cells.get(`${c},${h}`);u&&i.push(...u)}return i}clear(){this.cells.clear(),this.count=0}},Do=class{constructor(t,e,n,i,r,o,a,l){this.scene=t,this.player=e,this.worldData=n,this.trafficSystem=i,this.parkingSystem=r,this.pedestrianSystem=o,this.trafficLightSystem=a,this.constructionSystem=l,this.chunks=new Map,this.chunkSize=n.blockSize+n.roadWidth,this.renderDistance=2,this.lodDistance=this.renderDistance*2,this.grid=new Vl(this.chunkSize),this.streamBudget=3,this.pendingLoads=[],this.chunkPool=new Map,this.noise=di}update(){if(!this.player)return;let t=this.player.camera.position,e=Math.floor(t.x/this.chunkSize),n=Math.floor(t.z/this.chunkSize),i=new Set;for(let o=-this.renderDistance;o<=this.renderDistance;o++)for(let a=-this.renderDistance;a<=this.renderDistance;a++){let l=e+o,c=n+a,h=`${l},${c}`;i.add(h),!this.chunks.has(h)&&!this.pendingLoads.some(u=>u.id===h)&&this.pendingLoads.push({cx:l,cz:c,id:h})}let r=0;for(;this.pendingLoads.length&&r<this.streamBudget;){let o=this.pendingLoads.shift();this.loadChunk(o.cx,o.cz),r++}for(let[o,a]of this.chunks){if(a.lodLevel===void 0)continue;let l=o.split(","),c=parseInt(l[0],10),h=parseInt(l[1],10),u=this.detailLevel(c,h,e,n);a.lodLevel!==u&&r<this.streamBudget&&(this.unloadChunk(o),this.loadChunk(c,h),r++)}for(let[o,a]of this.chunks)i.has(o)||this.unloadChunk(o)}loadChunk(t,e){let n=this.noise.noise2D(t*.1,e*.1),i=Math.sqrt(t*t+e*e),r=i<6,o=!r&&Math.abs(e)<=5,a=!r&&Math.abs(t)<=5,l=o||a,c=t*this.chunkSize,h=e*this.chunkSize,u=`${t},${e}`,d=this.chunkPool.get(u),f;if(d){if(this.chunkPool.delete(u),f=d,r&&f.lodLevel===0)this.trafficSystem&&this.trafficSystem.loadChunk(t,e,"city"),this.parkingSystem&&this.parkingSystem.loadChunk(t,e),this.pedestrianSystem&&this.pedestrianSystem.loadChunk(t,e),this.trafficLightSystem&&this.trafficLightSystem.loadChunk(t,e),this.constructionSystem.loadChunk(t,e,f);else if(l){let g="x";o&&a?g="cross":a&&(g="z"),this.trafficSystem&&this.trafficSystem.loadChunk(t,e,`highway_${g}`)}}else if(r){let g=0;if(this.player){let x=this.player.camera.position,m=Math.floor(x.x/this.chunkSize),p=Math.floor(x.z/this.chunkSize);g=this.detailLevel(t,e,m,p)}else g=i>this.lodDistance?1:0;f=lu(c,h,this.chunkSize,this.worldData.roadWidth,g),f.lodLevel=g,g===0&&(this.trafficSystem&&this.trafficSystem.loadChunk(t,e,"city"),this.parkingSystem&&this.parkingSystem.loadChunk(t,e),this.pedestrianSystem&&this.pedestrianSystem.loadChunk(t,e),this.trafficLightSystem&&this.trafficLightSystem.loadChunk(t,e),this.constructionSystem.loadChunk(t,e,f))}else if(l){let g="x";o&&a?g="cross":a&&(g="z"),f=cu(c,h,this.chunkSize,this.worldData.roadWidth,g),this.trafficSystem&&this.trafficSystem.loadChunk(t,e,`highway_${g}`)}else f=hu(c,h,this.chunkSize);if(f.mesh&&this.scene.add(f.mesh),this.chunks.set(`${t},${e}`,f),f.colliders)for(let g of f.colliders)this.grid.insert(g)}unloadChunk(t){let e=this.chunks.get(t);if(e){if(e.mesh&&this.scene.remove(e.mesh),e.colliders)for(let o of e.colliders)this.grid.remove(o);let n=t.split(","),i=parseInt(n[0]),r=parseInt(n[1]);this.trafficSystem&&this.trafficSystem.unloadChunk(i,r),this.parkingSystem&&this.parkingSystem.unloadChunk(i,r),this.pedestrianSystem&&this.pedestrianSystem.unloadChunk(i,r),this.trafficLightSystem&&this.trafficLightSystem.unloadChunk(i,r),this.constructionSystem.unloadChunk(i,r)}this.chunks.delete(t),this.chunkPool.set(t,e)}detailLevel(t,e,n,i){let r=t-n,o=e-i;return Math.sqrt(r*r+o*o)>this.lodDistance?1:0}getColliders(){let t=[];for(let e of this.chunks.values())e.colliders&&(t=t.concat(e.colliders));if(this.parkingSystem){let e=this.parkingSystem.getColliders();t=t.concat(e)}if(this.trafficSystem){let e=this.trafficSystem.getColliders();t=t.concat(e)}return t}getCollidersNear(t,e,n=this.chunkSize){let i=this.grid.query(t,e,n);if(this.parkingSystem)for(let r of this.parkingSystem.getColliders()){let o=(r.min.x+r.max.x)/2,a=(r.min.z+r.max.z)/2;Math.abs(o-t)<=n&&Math.abs(a-e)<=n&&i.push(r)}if(this.trafficSystem)for(let r of this.trafficSystem.getColliders()){let o=(r.min.x+r.max.x)/2,a=(r.min.z+r.max.z)/2;Math.abs(o-t)<=n&&Math.abs(a-e)<=n&&i.push(r)}return i}};var Uo=class{constructor(){this.reset()}reset(){this.frames=0,this.avgFrameMs=0,this.lastFps=0,this.drawCalls=0,this.triangles=0,this.instances=0}recordFrame(t,e,n){let i=Math.max(t,1e-4)*1e3,r=this.frames;return this.frames+=1,this.avgFrameMs=r===0?i:(this.avgFrameMs*r+i)/(r+1),this.lastFps=1e3/i,this.drawCalls=e||this.drawCalls,this.triangles=n||this.triangles,this}countDrawCalls(t){let e=0,n=0;return t.traverse(i=>{i.isMesh&&i.visible&&i.material&&(e+=1,n+=i.isInstancedMesh?i.count:1)}),this.drawCalls=e,this.instances=n,{drawCalls:e,instances:n}}measureFrameBudget(t,e=1/60,n=120){let i=performance.now();for(let l=0;l<n;l++)t(e);let r=performance.now()-i,o=r/n,a=1e3/Math.max(o,.001);return this.frames=n,this.avgFrameMs=o,this.lastFps=a,{frames:n,avgFrameMs:o,fps:a,elapsedMs:r}}recordBudget(t){return this.loop=t||null,this.skippedFrames=t?t.skipped:0,this.overBudgetFrames=t?t.overBudget:0,this.clampedDts=t?t.clamped:0,this}recordClock(t){return this.clock=t||null,this}snapshot(){return{frames:this.frames,avgFrameMs:+this.avgFrameMs.toFixed(3),fps:+this.lastFps.toFixed(2),drawCalls:this.drawCalls,instances:this.instances,triangles:this.triangles,loop:this.loop,clock:this.clock,skippedFrames:this.skippedFrames,overBudgetFrames:this.overBudgetFrames,clampedDts:this.clampedDts}}};var No=class{constructor(t,e=16){this.chunkSize=t,this.radius=e,this.nodes=new Map,this.build()}key(t,e){return`${t},${e}`}roadAxes(t,e){if(Math.sqrt(t*t+e*e)<6)return{x:!0,z:!0};let r=Math.abs(e)<=5,o=Math.abs(t)<=5;return{x:r,z:o}}hasRoad(t,e,n){let i=this.nodes.get(this.key(t,e));return i?i[n]:!1}build(){for(let e=-this.radius;e<=this.radius;e++)for(let n=-this.radius;n<=this.radius;n++){let i=this.roadAxes(e,n);(i.x||i.z)&&this.nodes.set(this.key(e,n),{cx:e,cz:n,x:i.x,z:i.z,edges:[],key:this.key(e,n)})}let t=(e,n,i)=>{let r=this.nodes.get(e),o=this.nodes.get(n);return!r||!o||!r[i]||!o[i]?!1:(r.edges.push({to:n,axis:i,dir:1}),o.edges.push({to:e,axis:i,dir:-1}),!0)};for(let e of this.nodes.values()){let n=this.key(e.cx+1,e.cz),i=this.key(e.cx-1,e.cz),r=this.key(e.cx,e.cz+1),o=this.key(e.cx,e.cz-1);t(this.key(e.cx,e.cz),n,"x"),t(this.key(e.cx,e.cz),i,"x"),t(this.key(e.cx,e.cz),r,"z"),t(this.key(e.cx,e.cz),o,"z")}this.centerKey=this.key(0,0)}nodeCount(){return this.nodes.size}edgeCount(){let t=0;for(let e of this.nodes.values())t+=e.edges.length;return t}getNode(t,e){return typeof t=="string"?this.nodes.get(t)||null:this.nodes.get(this.key(t,e))||null}neighbors(t){let e=this.nodes.get(t);return e?e.edges:[]}turnsAt(t,e){let n=this.nodes.get(t);if(!n)return[];let i=e==="x"?"z":"x",r=[];for(let o of n.edges)o.axis===i&&!r.includes(o.to)&&r.push(o.to);return r}connected(){let t=new Set([this.centerKey]),e=[this.centerKey];for(;e.length;){let n=e.shift();for(let i of this.neighbors(n))t.has(i.to)||(t.add(i.to),e.push(i.to))}return{reached:t.size,total:this.nodes.size,connected:t.size===this.nodes.size}}shortestPath(t,e){if(t===e)return[t];let n=new Map([[t,null]]),i=[t];for(;i.length;){let a=i.shift();if(a===e)break;for(let l of this.neighbors(a))n.has(l.to)||(n.set(l.to,a),i.push(l.to))}if(!n.has(e))return null;let r=[],o=e;for(;o!==null&&(r.push(o),o=n.get(o),o!==null););return r.reverse(),r}nodeAtWorld(t,e){let n=Math.round(t/this.chunkSize),i=Math.round(e/this.chunkSize);return this.getNode(n,i)}};var $s={city:"city",highway:"highway",wasteland:"wasteland"},Kx=[{name:"Brick Residential",color:"#c8a07a"},{name:"Financial Core",color:"#7aa0d8"},{name:"Neon District",color:"#d87aa0"},{name:"Industrial Zone",color:"#8a8a8a"},{name:"Parkland",color:"#7ac878"}],jx={city:"rgba(80,120,220,0.9)",highway:"rgba(230,200,90,0.9)",wasteland:"rgba(120,100,80,0.9)"},Fo=class{constructor(t,e={}){this.chunkManager=t,this.size=e.size||160,this.chunkSize=t?t.chunkSize:34,this.renderDistance=e.renderDistance||3,this.playerChunk=[0,0],this.district="City Center",this.activeChunks=[],this.canvas=null,this.ctx=null,this._tryCreateCanvas()}_tryCreateCanvas(){try{let t=document.createElement("canvas");t.width=this.size,t.height=this.size,this.canvas=t,this.ctx=t.getContext&&t.getContext("2d"),this.ctx&&(t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.border="1px solid rgba(255,255,255,0.35)",t.style.boxShadow="0 2px 8px rgba(0,0,0,0.5)",t.style.fontFamily="monospace",document.body.appendChild(t))}catch{this.canvas=null,this.ctx=null}return this}biomeAt(t,e){if(Math.sqrt(t*t+e*e)<6)return $s.city;let i=Math.abs(e)<=5,r=Math.abs(t)<=5;return i||r?$s.highway:$s.wasteland}districtAt(t,e){let n=this.biomeAt(t,e);if(n===$s.wasteland)return"Wasteland";if(n===$s.highway)return"Highway Corridor";let i=di.noise2D(t*.23,e*.23),r=0;return i<.15?r=0:i<.35?r=1:i<.55?r=2:i<.75?r=3:r=4,Kx[r].name}update(t){let e=t?t.x:0,n=t?t.z:0;if(this.playerChunk=[Math.floor(e/this.chunkSize),Math.floor(n/this.chunkSize)],this.district=this.districtAt(this.playerChunk[0],this.playerChunk[1]),this.activeChunks=[],this.chunkManager)for(let i of this.chunkManager.chunks.keys()){let r=i.split(",").map(Number);this.activeChunks.push({x:r[0],z:r[1],biome:this.biomeAt(r[0],r[1])})}return this._draw(),this}_draw(){let t=this.ctx;if(!t)return;let e=this.size;t.clearRect(0,0,e,e),t.fillStyle="rgba(20,20,28,0.92)",t.fillRect(0,0,e,e);let[n,i]=this.playerChunk,r=e/(this.renderDistance*2+1),o=new Set;for(let a=-this.renderDistance;a<=this.renderDistance;a++)for(let l=-this.renderDistance;l<=this.renderDistance;l++){let c=n+a,h=i+l,u=`${c},${h}`;o.add(u);let d=(a+this.renderDistance)*r,f=(l+this.renderDistance)*r;t.fillStyle=jx[this.biomeAt(c,h)],t.fillRect(d+1,f+1,r-2,r-2),t.strokeStyle="rgba(255,255,255,0.15)",t.strokeRect(d+1,f+1,r-2,r-2)}t.fillStyle="#ffffff",t.beginPath(),t.arc(e/2,e/2,Math.max(3,r*.35),0,Math.PI*2),t.fill(),t.strokeStyle="#ff4d4d",t.stroke(),t.fillStyle="#ffffff",t.font="bold 11px monospace",t.fillText(this.district,6,e-8),t.fillStyle="rgba(255,255,255,0.6)",t.font="9px monospace",t.fillText(`chunk ${this.playerChunk[0]},${this.playerChunk[1]}`,6,e-20)}dispose(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null,this.ctx=null}};var Oo=class{constructor({maxDt:t=.1,budgetMs:e=16.7,onSkip:n=null}={}){this.maxDt=t,this.budgetMs=e,this.onSkip=n,this.prevTime=null,this.skipNext=!1,this.frames=0,this.skipped=0,this.overBudget=0,this.clamped=0,this.lastDt=0,this.lastWorkMs=0}tick(t){if(this.prevTime===null)return this.prevTime=t,this.frames++,{dt:0,first:!0,skipped:!1};let e=(t-this.prevTime)/1e3;return this.prevTime=t,e>this.maxDt&&(e=this.maxDt,this.clamped++),this.lastDt=e,this.frames++,this.skipNext?(this.skipNext=!1,this.skipped++,this.onSkip&&this.onSkip(),{dt:e,first:!1,skipped:!0}):{dt:e,first:!1,skipped:!1}}reportWork(t){return this.lastWorkMs=t,t>this.budgetMs&&(this.overBudget++,this.skipNext=!0),t}step(t=1,e=1/60,n=1){let i=0,r=0,o=0,a=this.prevTime===null?0:this.prevTime;for(let l=0;l<t;l++)a+=e*1e3,this.tick(a).skipped&&i++,e>this.maxDt&&r++,this.reportWork(n),n>this.budgetMs&&o++;return{skipped:i,clamped:r,over:o}}snapshot(){return{frames:this.frames,skipped:this.skipped,overBudget:this.overBudget,clamped:this.clamped,maxDt:this.maxDt,budgetMs:this.budgetMs,lastDt:+this.lastDt.toFixed(3),lastWorkMs:+this.lastWorkMs.toFixed(2)}}};var Qx=.03333333333333333,t_=4,Bo=class{constructor({fixedDt:t=Qx,maxStepsPerFrame:e=t_}={}){this.fixedDt=t,this.maxStepsPerFrame=e,this.accumulator=0,this.paused=!1,this.frames=0,this.steps=0,this.dropped=0,this.alpha=0}advance(t,e,n){if(this.frames++,this.paused)return this.accumulator=0,this.alpha=0,n&&n(0,t),{steps:0,rendered:!0,alpha:0};this.accumulator+=t;let i=0;for(;this.accumulator>=this.fixedDt&&i<this.maxStepsPerFrame;)e&&e(this.fixedDt),this.accumulator-=this.fixedDt,i++;return this.accumulator>=this.fixedDt&&(this.dropped+=Math.floor(this.accumulator/this.fixedDt),this.accumulator%=this.fixedDt),this.steps+=i,this.alpha=this.accumulator/this.fixedDt,n&&n(this.alpha,t),{steps:i,rendered:!0,alpha:this.alpha}}pause(){this.paused=!0}resume(){this.paused=!1}toggle(){this.paused?this.resume():this.pause()}snapshot(){return{fixedDt:this.fixedDt,maxStepsPerFrame:this.maxStepsPerFrame,accumulator:+this.accumulator.toFixed(4),paused:this.paused,frames:this.frames,steps:this.steps,dropped:this.dropped,alpha:+this.alpha.toFixed(3)}}};var Re=Object.freeze({BOOT:"boot",LOADING:"loading",MENU:"menu",PLAYING:"playing",PAUSED:"paused",GAMEOVER:"gameover"}),e_=Object.values(Re),yu=new Set([Re.BOOT,Re.LOADING,Re.MENU,Re.PAUSED,Re.GAMEOVER]);function n_(s){return e_.includes(s)}var ko=class{constructor({clock:t=null,onEnter:e=null,onExit:n=null}={}){this.clock=t,this.onEnter=e,this.onExit=n,this.state=Re.BOOT,this.transitions=0,this.history=[]}transition(t,e=""){if(!n_(t))throw new Error('App: invalid state "'+String(t)+'"');let n=this.state;return this.history.push({from:n,to:t,reason:e}),n!==t&&(this.onExit&&this.onExit(n,t),this.state=t,this.transitions++,this.onEnter&&this.onEnter(t,n),this._syncClock(t)),this}_syncClock(t){this.clock&&(yu.has(t)?this.clock.pause():this.clock.resume())}get isPlaying(){return this.state===Re.PLAYING}get isPaused(){return this.state===Re.PAUSED}get isFrozen(){return yu.has(this.state)}togglePause(){return this.state===Re.PLAYING?this.transition(Re.PAUSED,"toggle-pause"):this.state===Re.PAUSED?this.transition(Re.PLAYING,"toggle-resume"):this.transition(this.state,"toggle-ignored"),this}snapshot(){return{state:this.state,transitions:this.transitions,playing:this.isPlaying,paused:this.isPaused,frozen:this.isFrozen,clockPaused:this.clock?this.clock.paused:null,history:this.history.slice()}}};var pi=Object.freeze({LOW:"low",MEDIUM:"medium",HIGH:"high",ULTRA:"ultra"}),hs=Object.freeze({[pi.LOW]:{pixelRatio:1,drawDistanceScale:.75,postFx:!1,shadowMap:!0},[pi.MEDIUM]:{pixelRatio:1.5,drawDistanceScale:.9,postFx:!0,shadowMap:!0},[pi.HIGH]:{pixelRatio:2,drawDistanceScale:1,postFx:!0,shadowMap:!0},[pi.ULTRA]:{pixelRatio:3,drawDistanceScale:1.15,postFx:!0,shadowMap:!0}}),i_=Object.freeze({quality:pi.HIGH,pixelRatio:0,renderDistance:0,audio:{muted:!1,master:1,music:1,sfx:1},input:{bindings:Ge}});function Gl(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)}function zo(s,t){let e={};for(let n of Object.keys(s)){let i=s[n],r=t&&t[n];e[n]=Gl(i)&&Gl(r)?zo(i,r):r===void 0?i:r}return e}function Js(){if(typeof localStorage<"u"&&localStorage)return localStorage;let s=new Map;return{getItem:t=>s.has(t)?s.get(t):null,setItem:(t,e)=>s.set(t,String(e)),removeItem:t=>s.delete(t)}}var Ho=class{constructor({storage:t=null,key:e="worldloop.settings",defaults:n=i_}={}){this.storage=t||Js(),this.key=e,this.defaults=n,this._data=zo(n,{}),this.dirty=!1,this.load()}load(){let t=this.storage.getItem(this.key);if(t)try{this._data=zo(this.defaults,JSON.parse(t))}catch{this._data=zo(this.defaults,{})}return this.dirty=!1,this}save(){return this.storage.setItem(this.key,JSON.stringify(this._data)),this.dirty=!1,this}get(t,e=void 0){let n=this._data;for(let i of t.split(".")){if(n==null||!(i in n))return e;n=n[i]}return n}set(t,e){let n=t.split("."),i=this._data;for(let r=0;r<n.length-1;r++){let o=n[r];Gl(i[o])||(i[o]={}),i=i[o]}return i[n[n.length-1]]=e,this.dirty=!0,this.save(),this}get quality(){return this._data.quality}get audio(){return this._data.audio}get bindings(){return this._data.input.bindings}get isDirty(){return this.dirty}setQuality(t){let e=hs[t]?t:pi.HIGH;return this._data.quality=e,this.dirty=!0,this.save(),this}setBindings(t){return this._data.input.bindings=t&&typeof t=="object"?t:Ge,this.dirty=!0,this.save(),this}setAudio(t={}){return this._data.audio=Object.assign({},this._data.audio,t),this.dirty=!0,this.save(),this}pixelRatioCap(){return this.get("pixelRatio")>0?this.get("pixelRatio"):hs[this.quality].pixelRatio}drawDistanceScale(){return hs[this.quality].drawDistanceScale}postFxEnabled(){return hs[this.quality].postFx}shadowMap(){return this.qualityParams().shadowMap!==!1}qualityParams(){return hs[this.quality]||hs[pi.HIGH]}snapshot(){return{quality:this._data.quality,pixelRatio:this.get("pixelRatio"),renderDistance:this.get("renderDistance"),audio:Object.assign({},this._data.audio),input:{bindings:this._data.input.bindings},dirty:this.dirty}}};var vu=Object.freeze([{postFx:!0,pixelRatioCap:null,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:null,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:1,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:1,shadows:!1,drawDistanceScale:1},{postFx:!1,pixelRatioCap:1,shadows:!1,drawDistanceScale:.85},{postFx:!1,pixelRatioCap:1,shadows:!1,drawDistanceScale:.7}]),Mu=.8,Vo=class{constructor({targetFps:t=60,marginFps:e=4,cooldownMs:n=900,recoverFrames:i=120,enabled:r=!0}={}){this.targetFps=t,this.marginFps=e,this.cooldownMs=n,this.recoverFrames=i,this.enabled=r,this.level=0,this.emaMs=0,this.lastStepAt=0,this.overTargetCount=0,this.frameCount=0,this.steps=0}recordFrame(t){return t<=0?this:(this.frameCount++,this.emaMs=this.emaMs===0?t:this.emaMs*Mu+t*(1-Mu),this)}tick(t){if(!this.enabled||this.emaMs===0)return this.level;let e=1e3/this.emaMs,n=t-this.lastStepAt;return e<this.targetFps?n>=this.cooldownMs&&(this.level=Math.min(this.level+1,vu.length-1),this.lastStepAt=t,this.steps++,this.overTargetCount=0):e>=this.targetFps+this.marginFps?(this.overTargetCount++,this.overTargetCount>=this.recoverFrames&&n>=this.cooldownMs&&(this.level=Math.max(this.level-1,0),this.lastStepAt=t,this.overTargetCount=0)):this.overTargetCount=0,this.level}resolve(t){let e=t.qualityParams?t.qualityParams():{},n=vu[this.level];return{level:this.level,postFx:n.postFx&&e.postFx!==!1,pixelRatioCap:n.pixelRatioCap??e.pixelRatio??1,shadows:n.shadows&&e.shadowMap!==!1,drawDistanceScale:(e.drawDistanceScale??1)*n.drawDistanceScale}}snapshot(){return{enabled:this.enabled,level:this.level,emaFps:this.emaMs?1e3/this.emaMs:null,targetFps:this.targetFps,steps:this.steps,frameCount:this.frameCount}}};var Wl=1,s_="worldloop.save";function Su(s){return s?{x:s.x??0,y:s.y??0,z:s.z??0}:null}function r_(s){if(!s)return null;let t=s.currentCar&&s.currentCar.mesh,e=s.camera;return{position:Su(e?e.position:null)||{x:0,y:2,z:0},isDriving:!!s.isDriving,carType:t?t.userData&&t.userData.type||"sedan":null,carPosition:Su(t?t.position:null),carRotationY:t&&t.rotation?t.rotation.y:null,carVelocity:s.carVelocity||0,carSteering:s.carSteering||0,health:t&&t.userData?t.userData.health:null,spinVelocity:s.spinVelocity||0,shakeIntensity:s.shakeIntensity||0}}function o_(s){return s?typeof s.snapshot=="function"?s.snapshot():{fixedDt:s.fixedDt??1/30,maxStepsPerFrame:s.maxStepsPerFrame??4,accumulator:s.accumulator??0,paused:!!s.paused,frames:s.frames??0,steps:s.steps??0,dropped:s.dropped??0,alpha:s.alpha??0}:null}var Go=class{constructor({storage:t=null,key:e=s_}={}){this.storage=t||Js(),this.key=e,this._data=null,this.dirty=!1}capture({seed:t=ho(),player:e=null,simClock:n=null,progress:i={},meta:r={}}={}){let o=o_(n);return this._data={version:Wl,seed:t>>>0,player:r_(e),simClock:o,progress:{score:i.score||0,events:i.events||0,simTime:o?+(o.steps*o.fixedDt).toFixed(3):0},meta:Object.assign({},r)},this.dirty=!0,this.snapshot()}serialize(){return this._data?JSON.stringify(this._data):null}save(){return this._data&&(this.storage.setItem(this.key,JSON.stringify(this._data)),this.dirty=!1),this}load(){let t=this.storage.getItem(this.key);if(t)try{let e=JSON.parse(t);if(e&&e.version===Wl)return this._data=e,this.dirty=!1,this.snapshot()}catch{}return this._data=null,null}fromJSON(t){let e=JSON.parse(t);return e&&e.version===Wl?(this._data=e,this.dirty=!1,this.snapshot()):null}snapshot(){return this._data?JSON.parse(JSON.stringify(this._data)):null}fingerprint(){if(!this._data)return null;let t=this.serialize(),e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}restore({player:t=null,simClock:e=null}={}){let n=this._data;if(!n)return null;if(n.simClock&&e&&(e.steps=n.simClock.steps||0,e.accumulator=n.simClock.accumulator||0,typeof e.pause=="function"&&e.pause()),n.player&&t){let i=n.player,r=t.camera&&t.camera.position;if(i.position&&r&&(typeof r.set=="function"?r.set(i.position.x,i.position.y,i.position.z):(r.x=i.position.x,r.y=i.position.y,r.z=i.position.z)),t.isDriving=!!i.isDriving,t.carVelocity=i.carVelocity||0,t.carSteering=i.carSteering||0,t.spinVelocity=i.spinVelocity||0,t.shakeIntensity=i.shakeIntensity||0,t.currentCar&&t.currentCar.mesh){let o=t.currentCar.mesh;i.carPosition&&(typeof o.position.set=="function"?o.position.set(i.carPosition.x,i.carPosition.y,i.carPosition.z):(o.position.x=i.carPosition.x,o.position.y=i.carPosition.y,o.position.z=i.carPosition.z)),i.carRotationY!=null&&o.rotation&&(o.rotation.y=i.carRotationY),i.carType&&o.userData&&(o.userData.type=i.carType),i.health!=null&&o.userData&&(o.userData.health=i.health)}}return this.snapshot()}};var ue;var a_=0,Pn,us,ds,mi,fs,Wo,qn,pn,ps,Zn,Xo,Xe,gi,Xl,Yo;function l_(){Pn=document.createElement("div"),Pn.style.position="absolute",Pn.style.top="20px",Pn.style.left="20px",Pn.style.color="#fff",Pn.style.fontSize="24px",Pn.style.fontFamily="monospace",Pn.innerHTML="Score: 0",document.body.appendChild(Pn)}window.addEventListener("error",s=>{let t=document.createElement("div");t.style.position="absolute",t.style.top="10px",t.style.left="10px",t.style.color="red",t.style.background="rgba(0,0,0,0.8)",t.style.padding="10px",t.textContent=`Error: ${s.message}`,document.body.appendChild(t)});async function c_(){l_(),tu(1337);try{let{scene:s,camera:t,renderer:e}=Jh(),n=new Ho({storage:Js()});window.settings=n,e.setPixelRatio(n.pixelRatioCap());let i=await uu(s);qn=new Po(s),pn=new Lo({renderer:e,scene:s,camera:t});let r=new Vo({targetFps:60});pn.enabled=n.postFxEnabled(),e.shadowMap.enabled=n.shadowMap(),e.setPixelRatio(n.pixelRatioCap());let o=n.pixelRatioCap(),a=n.shadowMap(),l=n.drawDistanceScale(),c=n.postFxEnabled();pn.enabled&&window.addEventListener("resize",()=>pn.resize()),ps=new Io(s,i.roadWidth,i.blockSize),Xo=new vo(s),Zn=new yo(s,i.roadWidth,i.blockSize),Zn.setEffects(qn),window.emergencySystem=Zn,us=new _o(s,i.citySize,i.blockSize,i.roadWidth),fs=new Eo(s,i.citySize,i.blockSize,i.roadWidth),mi=new So(s,i.citySize,i.blockSize,i.roadWidth);let h=new os({dom:document.body,map:new Ve(n.bindings)});ue=new mo(t,document.body,[],null,null,qn,null,h),ue.emergencySystem=Zn,Xe=new Do(s,ue,i,us,fs,mi,ps,Xo),Xe.renderDistance=Math.max(1,Math.round(Xe.renderDistance*n.drawDistanceScale())),Xe.lodDistance=Xe.renderDistance*2,ue.colliders=Xe.getColliders(),ue.trafficSystem=us,ue.parkingSystem=fs,ue.pedestrianSystem=mi,Xl=new No(i.blockSize,16),window.roadGraph=Xl,Yo=new Fo(Xe),window.minimap=Yo,us.setDependencies(ue,fs,ps,qn,mi,Xl,Zn),fs.setDependencies(qn),mi.setDependencies(ps,fs,qn),ds=new Mo(s,i.directionalLight,i.ambientLight,i.materials),ue.weatherSystem=ds,Wo=new bo(s,i.citySize),window.airplaneSystem=Wo,gi=new Uo,window.frameBudget=gi,window.__worldloop={ready:!1,drawCalls:0,fps:0,triangles:0,errors:0,simClock:null},console.log("Game Initialized with Infinite World + Populated Chunks");let u=document.createElement("div");u.style.position="absolute",u.style.bottom="34px",u.style.right="10px",u.style.color="#8affaa",u.style.background="rgba(0,0,0,0.5)",u.style.padding="5px",u.style.fontFamily="monospace",u.style.fontSize="12px",u.innerHTML="fps -- | dc --",document.body.appendChild(u);let d=0,f=document.createElement("div");f.style.position="absolute",f.style.bottom="10px",f.style.right="10px",f.style.color="white",f.style.background="rgba(0,0,0,0.5)",f.style.padding="5px",f.style.fontFamily="monospace",f.innerHTML="v6.6.1: Parked Cars Off the Street",document.body.appendChild(f);let g=new Oo({maxDt:.1,budgetMs:16.7}),x=new Bo({fixedDt:1/30,maxStepsPerFrame:4}),m=new ko({clock:x});window.__worldloop.app=m,m.transition(Re.LOADING,"init"),h.onPause=()=>m.togglePause(),h.onLock=()=>ue.controls.lock(),window.__worldloop.simClock=x;let p=new Go;window.saveGame=p,window.__worldloop.saveGame=p,p.capture({seed:ho(),player:ue,simClock:x,progress:{score:a_,events:Zn.events},meta:{slot:"autosave",label:"worldloop"}}),p.save(),m.transition(Re.PLAYING,"ready"),Kh(g,y=>{try{x.advance(y,_=>{if(Xe&&(Xe.update(),ue)){let S=ue.camera.position;ue.colliders=Xe.getCollidersNear(S.x,S.z,Xe.chunkSize)}if(h.update(_),ue&&ue.update(_),Zn&&Zn.update(_),us&&us.update(_),ps&&ps.update(_),Xo&&Xo.update(_),ds){let S=ue&&ue.mesh?ue.mesh.position:new A;ds.update(_,S)}mi&&mi.update(_),Wo&&Wo.update(_)},(_,S)=>{let R=ue&&ue.mesh?ue.mesh.position:new A;if(Yo&&Yo.update(R),qn&&qn.update(S),pn){let C=0;s&&s.traverse(v=>{if(v.isMesh&&v.material&&v.material.color){let b=v.material.color.getHex();(b===65535||b===16711935)&&C++}}),C=Math.min(1,C/24);let I=ds?ds.currentWeatherState:null;pn.update(I,C)}r.recordFrame(S*1e3),r.tick(performance.now());let w=r.resolve(n);if(w.pixelRatioCap!==o&&(o=w.pixelRatioCap,e.setPixelRatio(w.pixelRatioCap)),w.shadows!==a&&(a=w.shadows,e.shadowMap.enabled=w.shadows),w.postFx!==c&&(c=w.postFx,pn.enabled=w.postFx),Xe.renderDistance=Math.max(1,Math.round(Xe.renderDistance*w.drawDistanceScale/l)),l=w.drawDistanceScale,pn&&pn.enabled?pn.render():e.render(s,t),gi.recordFrame(S,e.info.render.calls,e.info.render.triangles),gi.recordBudget(g.snapshot()),gi.recordClock(x.snapshot()),!window.__worldloop.ready){let C=gi.snapshot();window.__worldloop.drawCalls=C.drawCalls,window.__worldloop.fps=C.fps,window.__worldloop.triangles=C.triangles,window.__worldloop.ready=C.frames>0&&C.drawCalls>0}if(d+=S,d>=.5&&u){d=0;let C=gi.snapshot();u.innerHTML="fps "+C.fps+" | dc "+C.drawCalls}})}catch(_){console.error("Game Loop Error:",_)}})}catch(s){throw console.error(s),s}}c_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
