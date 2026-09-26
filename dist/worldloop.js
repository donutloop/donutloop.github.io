var nl="160";var eu=0,Pl=1,nu=2;var ah=1,il=2,gn=3,Un=0,Ce=1,_n=2;var on=0,Ii=1,Nn=2,Ll=3,Il=4,iu=5,Jn=100,su=101,ru=102,Dl=103,Ul=104,ou=200,au=201,lu=202,cu=203,ua=204,fa=205,hu=206,uu=207,fu=208,du=209,pu=210,mu=211,gu=212,xu=213,_u=214,yu=0,vu=1,Mu=2,pr=3,Su=4,bu=5,Eu=6,wu=7,sl=0,Tu=1,Au=2,In=0,rl=1,ol=2,al=3,Ls=4,Cu=5,ll=6;var lh=300,Ni=301,Fi=302,da=303,pa=304,Yr=306,ma=1e3,Ke=1001,ga=1002,Ue=1003,Nl=1004;var Lo=1005;var We=1006,Ru=1007;var Ss=1008;var Dn=1009,Pu=1010,Lu=1011,cl=1012,ch=1013,Pn=1014,Ln=1015,je=1016,hh=1017,uh=1018,Qn=1020,Iu=1021,Qe=1023,Du=1024,Uu=1025,jn=1026,Oi=1027,Nu=1028,fh=1029,Fu=1030,dh=1031,ph=1033,Io=33776,Do=33777,Uo=33778,No=33779,Fl=35840,Ol=35841,Bl=35842,kl=35843,mh=36196,zl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,Yl=37812,ql=37813,Zl=37814,$l=37815,Jl=37816,Kl=37817,Ql=37818,jl=37819,tc=37820,ec=37821,Fo=36492,nc=36494,ic=36495,Ou=36283,sc=36284,rc=36285,oc=36286;var mr=2300,gr=2301,Oo=2302,ac=2400,lc=2401,cc=2402;var gh=3e3,ti=3001,Bu=3200,ku=3201,hl=0,zu=1,Xe="",be="srgb",vn="srgb-linear",ul="display-p3",qr="display-p3-linear",xr="linear",Qt="srgb",_r="rec709",yr="p3";var ui=7680;var hc=519,Hu=512,Vu=513,Gu=514,xh=515,Wu=516,Xu=517,Yu=518,qu=519,uc=35044,_h=35048;var fc="300 es",xa=1035,yn=2e3,vr=2001,an=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=1234567,gs=Math.PI/180,bs=180/Math.PI;function qi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function fl(s,t){return(s%t+t)%t}function Zu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function $u(s,t,e){return s!==t?(e-s)/(t-s):0}function xs(s,t,e){return(1-e)*s+e*t}function Ju(s,t,e,n){return xs(s,t,1-Math.exp(-e*n))}function Ku(s,t=1){return t-Math.abs(fl(s,t*2)-t)}function Qu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ju(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ef(s,t){return s+Math.random()*(t-s)}function nf(s){return s*(.5-Math.random())}function sf(s){s!==void 0&&(dc=s);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(s){return s*gs}function of(s){return s*bs}function _a(s){return(s&s-1)===0&&s!==0}function af(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lf(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Zi={DEG2RAD:gs,RAD2DEG:bs,generateUUID:qi,clamp:ve,euclideanModulo:fl,mapLinear:Zu,inverseLerp:$u,lerp:xs,damp:Ju,pingpong:Ku,smoothstep:Qu,smootherstep:ju,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:_a,ceilPowerOfTwo:af,floorPowerOfTwo:Mr,setQuaternionFromProperEuler:lf,normalize:Ie,denormalize:Ci},it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],_=i[4],S=i[7],R=i[2],T=i[5],C=i[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*_+l*T,r[6]=o*p+a*S+l*C,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*T,r[7]=c*p+h*S+u*C,r[2]=f*x+d*y+g*R,r[5]=f*m+d*_+g*T,r[8]=f*p+d*S+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new Wt;function yh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cf(){let s=Sr("canvas");return s.style.display="block",s}var pc={};function _s(s){s in pc||(pc[s]=!0,console.warn(s))}var mc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[vn]:{transfer:xr,primaries:_r,toReference:s=>s,fromReference:s=>s},[be]:{transfer:Qt,primaries:_r,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qr]:{transfer:xr,primaries:yr,toReference:s=>s.applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc)},[ul]:{transfer:Qt,primaries:yr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc).convertLinearToSRGB()}},hf=new Set([vn,qr]),Zt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Hs[t].toReference,i=Hs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Hs[s].primaries},getTransfer:function(s){return s===Xe?xr:Hs[s].transfer}};function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ko(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fi,br=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=Sr("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uf=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=qi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zo(i[o].image)):r.push(zo(i[o]))}else r=zo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?br.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ff=0,tn=class s extends an{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ke,i=Ke,r=We,o=Ss,a=Qe,l=Dn,c=s.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=qi(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?be:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?ti:gh}set encoding(t){_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?be:Xe}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=lh;tn.DEFAULT_ANISOTROPY=1;var se=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,S=(d+1)/2,R=(p+1)/2,T=(h+f)/4,C=(u+x)/4,I=(g+m)/4;return _>S&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=C/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends an{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(_s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?be:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let S=a*y;if(l=l*m+f*S,c=c*m+d*S,h=h*m+g*S,u=u*m+x*S,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ho=new A,xc=new Fn,qt=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Gs.subVectors(this.max,cs),di.subVectors(t.a,cs),pi.subVectors(t.b,cs),mi.subVectors(t.c,cs),wn.subVectors(pi,di),Tn.subVectors(mi,pi),Xn.subVectors(di,mi);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-Xn.z,Xn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,Xn.z,0,-Xn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-Xn.y,Xn.x,0];return!Vo(e,di,pi,mi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,di,pi,mi,Gs))?!1:(Ws.crossVectors(wn,Tn),e=[Ws.x,Ws.y,Ws.z],Vo(e,di,pi,mi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},un=[new A,new A,new A,new A,new A,new A,new A,new A],Ze=new A,Vs=new qt,di=new A,pi=new A,mi=new A,wn=new A,Tn=new A,Xn=new A,cs=new A,Gs=new A,Ws=new A,Yn=new A;function Vo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yn.fromArray(s,r);let a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var df=new qt,hs=new A,Go=new A,On=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);let e=hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Go)),this.expandByPoint(hs.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new A,Wo=new A,Xs=new A,An=new A,Xo=new A,Ys=new A,Yo=new A,Tr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wo.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Wo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xs),a=An.dot(this.direction),l=-An.dot(Xs),c=An.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wo).addScaledVector(Xs,f),d}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){Xo.subVectors(e,t),Ys.subVectors(n,t),Yo.crossVectors(Xo,Ys);let o=this.direction.dot(Yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);let l=a*this.direction.dot(Ys.crossVectors(An,Ys));if(l<0)return null;let c=a*this.direction.dot(Xo.cross(An));if(c<0||l+c>o)return null;let h=-a*An.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){let i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Cn.crossVectors(n,ke),Cn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Cn.crossVectors(n,ke)),Cn.normalize(),qs.crossVectors(ke,Cn),i[0]=Cn.x,i[4]=qs.x,i[8]=ke.x,i[1]=Cn.y,i[5]=qs.y,i[9]=ke.y,i[2]=Cn.z,i[6]=qs.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],S=n[11],R=n[15],T=i[0],C=i[4],I=i[8],v=i[12],E=i[1],U=i[5],H=i[9],tt=i[13],L=i[2],N=i[6],G=i[10],Y=i[14],X=i[3],W=i[7],J=i[11],j=i[15];return r[0]=o*T+a*E+l*L+c*X,r[4]=o*C+a*U+l*N+c*W,r[8]=o*I+a*H+l*G+c*J,r[12]=o*v+a*tt+l*Y+c*j,r[1]=h*T+u*E+f*L+d*X,r[5]=h*C+u*U+f*N+d*W,r[9]=h*I+u*H+f*G+d*J,r[13]=h*v+u*tt+f*Y+d*j,r[2]=g*T+x*E+m*L+p*X,r[6]=g*C+x*U+m*N+p*W,r[10]=g*I+x*H+m*G+p*J,r[14]=g*v+x*tt+m*Y+p*j,r[3]=y*T+_*E+S*L+R*X,r[7]=y*C+_*U+S*N+R*W,r[11]=y*I+_*H+S*G+R*J,r[15]=y*v+_*tt+S*Y+R*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,S=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=e*y+n*_+i*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*C,t[4]=_*C,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*C,t[8]=S*C,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=R*C,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,S=l*u,R=n.x,T=n.y,C=n.z;return i[0]=(1-(x+p))*R,i[1]=(d+S)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(d-S)*T,i[5]=(1-(f+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+_)*C,i[9]=(m-y)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=gi.set(i[0],i[1],i[2]).length(),o=gi.set(i[4],i[5],i[6]).length(),a=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);let c=1/r,h=1/o,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=yn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===yn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=yn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,g,x;if(a===yn)g=(o+r)*u,x=-2*u;else if(a===vr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gi=new A,$e=new re,pf=new A(0,0,0),mf=new A(1,1,1),Cn=new A,qs=new A,ke=new A,_c=new re,yc=new Fn,Bi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gf=0,vc=new A,xi=new Fn,dn=new re,Zs=new A,us=new A,xf=new A,_f=new Fn,Mc=new A(1,0,0),Sc=new A(0,1,0),bc=new A(0,0,1),yf={type:"added"},vf={type:"removed"},de=class s extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new Bi,n=new Fn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Wt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(us,Zs,this.up):dn.lookAt(Zs,us,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(dn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};de.DEFAULT_UP=new A(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new A,pn=new A,qo=new A,mn=new A,_i=new A,yi=new A,Ec=new A,Zo=new A,$o=new A,Jo=new A,$s=!1,Ri=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Je.subVectors(i,e),pn.subVectors(n,e),qo.subVectors(t,e);let o=Je.dot(Je),a=Je.dot(pn),l=Je.dot(qo),c=pn.dot(pn),h=pn.dot(qo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,r,o,a,l){return $s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$s=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),pn.subVectors(t,e),Je.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return $s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$s=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;_i.subVectors(i,n),yi.subVectors(r,n),Zo.subVectors(t,n);let l=_i.dot(Zo),c=yi.dot(Zo);if(l<=0&&c<=0)return e.copy(n);$o.subVectors(t,i);let h=_i.dot($o),u=yi.dot($o);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_i,o);Jo.subVectors(t,r);let d=_i.dot(Jo),g=yi.dot(Jo);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(yi,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ec.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Ec,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(_i,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=fl(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ko(o,r,t+1/3),this.g=Ko(o,r,t),this.b=Ko(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(ve(Te.r*255,0,255))*65536+Math.round(ve(Te.g*255,0,255))*256+Math.round(ve(Te.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=be){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,i=Te.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Js);let n=xs(Rn.h,Js.h,e),i=xs(Rn.s,Js.s,e),r=xs(Rn.l,Js.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new ft;ft.NAMES=vh;var Mf=0,Mn=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Ii,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ne=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new A,Ks=new it,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}};var Cr=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Sf=0,Ge=new re,Qo=new de,vi=new A,ze=new qt,fs=new qt,ye=new A,Me=class s extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?Rr:Cr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ze.min,fs.min),ze.expandByPoint(ye),ye.addVectors(ze.max,fs.max),ze.expandByPoint(ye)):(ze.expandByPoint(fs.min),ze.expandByPoint(fs.max))}ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(t,c),ye.add(vi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new A,h[E]=new A;let u=new A,f=new A,d=new A,g=new it,x=new it,m=new it,p=new A,y=new A;function _(E,U,H){u.fromArray(i,E*3),f.fromArray(i,U*3),d.fromArray(i,H*3),g.fromArray(o,E*2),x.fromArray(o,U*2),m.fromArray(o,H*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let tt=1/(x.x*m.y-m.x*x.y);isFinite(tt)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(tt),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(tt),c[E].add(p),c[U].add(p),c[H].add(p),h[E].add(y),h[U].add(y),h[H].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,U=S.length;E<U;++E){let H=S[E],tt=H.start,L=H.count;for(let N=tt,G=tt+L;N<G;N+=3)_(n[N+0],n[N+1],n[N+2])}let R=new A,T=new A,C=new A,I=new A;function v(E){C.fromArray(r,E*3),I.copy(C);let U=c[E];R.copy(U),R.sub(C.multiplyScalar(C.dot(U))).normalize(),T.crossVectors(I,U);let tt=T.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=tt}for(let E=0,U=S.length;E<U;++E){let H=S[E],tt=H.start,L=H.count;for(let N=tt,G=tt+L;N<G;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new re,qn=new Tr,Qs=new On,Tc=new A,Mi=new A,Si=new A,bi=new A,jo=new A,js=new A,tr=new it,er=new it,nr=new it,Ac=new A,Cc=new A,Rc=new A,ir=new A,sr=new A,nt=class extends de{constructor(t=new Me,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(jo.fromBufferAttribute(u,t),o?js.addScaledVector(jo,h):js.addScaledVector(jo.sub(e),h))}e.add(js)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Qs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Qs,Tc)===null||qn.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),qn.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,R=_;S<R;S+=3){let T=a.getX(S),C=a.getX(S+1),I=a.getX(S+2);i=rr(this,p,t,n,c,h,u,T,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);i=rr(this,o,t,n,c,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,R=_;S<R;S+=3){let T=S,C=S+1,I=S+2;i=rr(this,p,t,n,c,h,u,T,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,S=m+2;i=rr(this,o,t,n,c,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function bf(s,t,e,n,i,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Un,a),l===null)return null;sr.copy(a),sr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Mi),s.getVertexPosition(l,Si),s.getVertexPosition(c,bi);let h=bf(s,t,e,n,Mi,Si,bi,ir);if(h){i&&(tr.fromBufferAttribute(i,a),er.fromBufferAttribute(i,l),nr.fromBufferAttribute(i,c),h.uv=Ri.getInterpolation(ir,Mi,Si,bi,tr,er,nr,new it)),r&&(tr.fromBufferAttribute(r,a),er.fromBufferAttribute(r,l),nr.fromBufferAttribute(r,c),h.uv1=Ri.getInterpolation(ir,Mi,Si,bi,tr,er,nr,new it),h.uv2=h.uv1),o&&(Ac.fromBufferAttribute(o,a),Cc.fromBufferAttribute(o,l),Rc.fromBufferAttribute(o,c),h.normal=Ri.getInterpolation(ir,Mi,Si,bi,Ac,Cc,Rc,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};Ri.getNormal(Mi,Si,bi,u.normal),h.face=u}return h}var Lt=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,p,y,_,S,R,T,C,I,v){let E=S/C,U=R/I,H=S/2,tt=R/2,L=T/2,N=C+1,G=I+1,Y=0,X=0,W=new A;for(let J=0;J<G;J++){let j=J*U-tt;for(let ut=0;ut<N;ut++){let V=ut*E-H;W[x]=V*y,W[m]=j*_,W[p]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(ut/C),u.push(1-J/I),Y+=1}}for(let J=0;J<I;J++)for(let j=0;j<C;j++){let ut=f+j+N*J,V=f+j+N*(J+1),q=f+(j+1)+N*(J+1),ct=f+(j+1)+N*J;l.push(ut,V,ct),l.push(V,q,ct),X+=6}a.addGroup(d,X,v),d+=X,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ki(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){let t={};for(let e=0;e<s.length;e++){let n=ki(s[e]);for(let i in n)t[i]=n[i]}return t}function Ef(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mh(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}var Bn={clone:ki,merge:De},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ae=class extends Pr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ei=-90,wi=1,Ma=class extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ae(Ei,wi,t,e);i.layers=this.layers,this.add(i);let r=new Ae(Ei,wi,t,e);r.layers=this.layers,this.add(r);let o=new Ae(Ei,wi,t,e);o.layers=this.layers,this.add(o);let a=new Ae(Ei,wi,t,e);a.layers=this.layers,this.add(a);let l=new Ae(Ei,wi,t,e);l.layers=this.layers,this.add(l);let c=new Ae(Ei,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lr=class extends tn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sa=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(_s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?be:Xe),this.texture=new Lr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Lt(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:on});r.uniforms.tEquirect.value=e;let o=new nt(i,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=We),new Ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ta=new A,Af=new A,Cf=new Wt,xn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ta.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cf.getNormalMatrix(t),i=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new On,or=new A,Es=class{constructor(t=new xn,e=new xn,n=new xn,i=new xn,r=new xn,o=new xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],_=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,m-d,S-p).normalize(),n[1].setComponents(l+r,f+c,m+d,S+p).normalize(),n[2].setComponents(l+o,f+h,m+g,S+y).normalize(),n[3].setComponents(l-o,f-h,m-g,S-y).normalize(),n[4].setComponents(l-a,f-u,m-x,S-_).normalize(),e===yn)n[5].setComponents(l+a,f+u,m+x,S+_).normalize();else if(e===vr)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rf(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var ln=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let S=_*u-r;g.push(S,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,S=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;d.push(_,S,T),d.push(S,R,T)}this.setIndex(d),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`
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
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Rd=`struct PhysicalMaterial {
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
}`,Pd=`
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,Yp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,$p=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:kf,begin_vertex:zf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Zf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:jf,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:od,colorspace_pars_fragment:ad,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:bd,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:xd,lightmap_fragment:_d,lightmap_pars_fragment:yd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Td,lights_phong_pars_fragment:Ad,lights_physical_fragment:Cd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Pd,lights_fragment_maps:Ld,lights_fragment_end:Id,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:Fd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:kd,map_particle_pars_fragment:zd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:Yd,normal_fragment_begin:qd,normal_fragment_maps:Zd,normal_pars_fragment:$d,normal_pars_vertex:Jd,normal_vertex:Kd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:op,dithering_fragment:ap,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:xp,skinnormal_vertex:_p,specularmap_fragment:yp,specularmap_pars_fragment:vp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:bp,transmission_pars_fragment:Ep,uv_pars_fragment:wp,uv_pars_vertex:Tp,uv_vertex:Ap,worldpos_vertex:Cp,background_vert:Rp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Dp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distanceRGBA_vert:Op,distanceRGBA_frag:Bp,equirect_vert:kp,equirect_frag:zp,linedashed_vert:Hp,linedashed_frag:Vp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:Yp,meshmatcap_vert:qp,meshmatcap_frag:Zp,meshnormal_vert:$p,meshnormal_frag:Jp,meshphong_vert:Kp,meshphong_frag:Qp,meshphysical_vert:jp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:lm},rt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},rn={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var ar={r:0,b:0,g:0};function cm(s,t,e,n,i,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Yr)?(h===void 0&&(h=new nt(new Lt(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:ki(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Qt,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new nt(new ln(2,2),new Se({name:"BackgroundMaterial",uniforms:ki(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ar,Mh(s)),n.buffers.color.setClear(ar.r,ar.g,ar.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function hm(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,N,G,Y,X){let W=!1;if(o){let J=x(Y,G,N);c!==J&&(c=J,d(c.object)),W=p(L,Y,G,X),W&&y(L,Y,G,X)}else{let J=N.wireframe===!0;(c.geometry!==Y.id||c.program!==G.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=G.id,c.wireframe=J,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(L,N,G,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,G){let Y=G.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let J=W[Y];return J===void 0&&(J=m(f()),W[Y]=J),J}function m(L){let N=[],G=[],Y=[];for(let X=0;X<i;X++)N[X]=0,G[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function p(L,N,G,Y){let X=c.attributes,W=N.attributes,J=0,j=G.getAttributes();for(let ut in j)if(j[ut].location>=0){let q=X[ut],ct=W[ut];if(ct===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function y(L,N,G,Y){let X={},W=N.attributes,J=0,j=G.getAttributes();for(let ut in j)if(j[ut].location>=0){let q=W[ut];q===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),X[ut]=ct,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function _(){let L=c.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function S(L){R(L,0)}function R(L,N){let G=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;G[L]=1,Y[L]===0&&(s.enableVertexAttribArray(L),Y[L]=1),X[L]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function T(){let L=c.newAttributes,N=c.enabledAttributes;for(let G=0,Y=N.length;G<Y;G++)N[G]!==L[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function C(L,N,G,Y,X,W,J){J===!0?s.vertexAttribIPointer(L,N,G,X,W):s.vertexAttribPointer(L,N,G,Y,X,W)}function I(L,N,G,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let X=Y.attributes,W=G.getAttributes(),J=N.defaultAttributeValues;for(let j in W){let ut=W[j];if(ut.location>=0){let V=X[j];if(V===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let q=V.normalized,ct=V.itemSize,vt=e.get(V);if(vt===void 0)continue;let _t=vt.buffer,Ut=vt.type,Ft=vt.bytesPerElement,At=n.isWebGL2===!0&&(Ut===s.INT||Ut===s.UNSIGNED_INT||V.gpuType===ch);if(V.isInterleavedBufferAttribute){let Yt=V.data,F=Yt.stride,Re=V.offset;if(Yt.isInstancedInterleavedBuffer){for(let St=0;St<ut.locationSize;St++)R(ut.location+St,Yt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let St=0;St<ut.locationSize;St++)S(ut.location+St);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let St=0;St<ut.locationSize;St++)C(ut.location+St,ct/ut.locationSize,Ut,q,F*Ft,(Re+ct/ut.locationSize*St)*Ft,At)}else{if(V.isInstancedBufferAttribute){for(let Yt=0;Yt<ut.locationSize;Yt++)R(ut.location+Yt,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Yt=0;Yt<ut.locationSize;Yt++)S(ut.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Yt=0;Yt<ut.locationSize;Yt++)C(ut.location+Yt,ct/ut.locationSize,Ut,q,ct*Ft,ct/ut.locationSize*Yt*Ft,At)}}else if(J!==void 0){let q=J[j];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(ut.location,q);break;case 3:s.vertexAttrib3fv(ut.location,q);break;case 4:s.vertexAttrib4fv(ut.location,q);break;default:s.vertexAttrib1fv(ut.location,q)}}}}T()}function v(){H();for(let L in a){let N=a[L];for(let G in N){let Y=N[G];for(let X in Y)g(Y[X].object),delete Y[X];delete N[G]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let N=a[L.id];for(let G in N){let Y=N[G];for(let X in Y)g(Y[X].object),delete Y[X];delete N[G]}delete a[L.id]}function U(L){for(let N in a){let G=a[N];if(G[L.id]===void 0)continue;let Y=G[L.id];for(let X in Y)g(Y[X].object),delete Y[X];delete G[L.id]}}function H(){tt(),h=!0,c!==l&&(c=l,d(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function um(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function fm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=o||t.has("OES_texture_float"),R=_&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function dm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new xn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,S=p.clippingState||null;l.value=S,S=h(g,f,_,d);for(let R=0;R!==_;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=d;_!==x;++_,S+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function pm(s){let t=new WeakMap;function e(o,a){return a===da?o.mapping=Ni:a===pa&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===pa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sa(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zi=class extends Pr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pi=4,Pc=[.125,.215,.35,.446,.526,.582],Kn=20,ea=new zi,Lc=new ft,na=null,ia=0,sa=0,$n=(1+Math.sqrt(5))/2,Ti=1/$n,Ic=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,$n,Ti),new A(0,$n,-Ti),new A(Ti,0,$n),new A(-Ti,0,$n),new A($n,Ti,0),new A(-$n,Ti,0)],Hi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:je,format:Qe,colorSpace:vn,depthBuffer:!1},i=Dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return i}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,i){let a=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lc),h.toneMapping=In,h.autoClear=!1;let d=new ne({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new nt(new Lt,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Lc),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;lr(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ni||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ic[(i-1)%Ic.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);let p=[],y=0;for(let C=0;C<Kn;++C){let I=C/x,v=Math.exp(-I*I/2);p.push(v),C===0?y+=v:C<m&&(y+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let S=this._sizeLods[i],R=3*S*(i>_-Pi?i-_+Pi:0),T=4*(this._cubeSize-S);lr(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(u,ea)}};function mm(s){let t=[],e=[],n=[],i=s,r=s-Pi+1+Pc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Pi?l=Pc[o-s+Pi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let T=0;T<d;T++){let C=T%3*2/3-1,I=T>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(v,x*g*T),_.set(f,m*g*T);let E=[T,T,T,T,T,T];S.set(E,p*g*T)}let R=new Me;R.setAttribute("position",new Ne(y,x)),R.setAttribute("uv",new Ne(_,m)),R.setAttribute("faceIndex",new Ne(S,p)),t.push(R),i>Pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dc(s,t,e){let n=new Fe(s,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function gm(s,t,e){let n=new Float32Array(Kn),i=new A(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dl(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Uc(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Nc(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function xm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===pa,h=l===Ni||l===Fi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Hi(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Hi(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _m(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ym(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,S=y.length;_<S;_+=3){let R=y[_+0],T=y[_+1],C=y[_+2];f.push(R,T,T,C,C,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,S=y.length/3-1;_<S;_+=3){let R=_+0,T=_+1,C=_+2;f.push(R,T,T,C,C,R)}}else return;let m=new(yh(f)?Rr:Cr)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vm(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Mm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Sm(s,t){return s[0]-t[0]}function bm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Em(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),S===!0&&(I=3);let v=h.attributes.position.count*I,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let U=new Float32Array(v*E*4*g),H=new wr(U,v,E,g);H.type=Ln,H.needsUpdate=!0;let tt=I*4;for(let N=0;N<g;N++){let G=R[N],Y=T[N],X=C[N],W=v*E*4*N;for(let J=0;J<G.count;J++){let j=J*tt;y===!0&&(o.fromBufferAttribute(G,J),U[W+j+0]=o.x,U[W+j+1]=o.y,U[W+j+2]=o.z,U[W+j+3]=0),_===!0&&(o.fromBufferAttribute(Y,J),U[W+j+4]=o.x,U[W+j+5]=o.y,U[W+j+6]=o.z,U[W+j+7]=0),S===!0&&(o.fromBufferAttribute(X,J),U[W+j+8]=o.x,U[W+j+9]=o.y,U[W+j+10]=o.z,U[W+j+11]=X.itemSize===4?o.w:1)}}x={count:g,texture:H,size:new it(v,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let S=g[_];S[0]=_,S[1]=f[_]}g.sort(bm);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Sm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let S=a[_],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),i[_]=T,p+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function wm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ir=class extends tn{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:jn,h!==jn&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===jn&&(n=Pn),n===void 0&&h===Oi&&(n=Qn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bh=new tn,Eh=new Ir(1,1);Eh.compareFunction=xh;var wh=new wr,Th=new va,Ah=new Lr,Fc=[],Oc=[],Bc=new Float32Array(16),kc=new Float32Array(9),zc=new Float32Array(4);function $i(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Fc[i];if(r===void 0&&(r=new Float32Array(i),Fc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zr(s,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Am(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Cm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Rm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function Pm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;zc.set(n),s.uniformMatrix2fv(this.addr,!1,zc),me(e,n)}}function Lm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;kc.set(n),s.uniformMatrix3fv(this.addr,!1,kc),me(e,n)}}function Im(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),me(e,n)}}function Dm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Um(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Fm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function Om(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Hm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Eh:bh;e.setTexture2D(t||r,i)}function Vm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Th,i)}function Gm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ah,i)}function Wm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wh,i)}function Xm(s){switch(s){case 5126:return Tm;case 35664:return Am;case 35665:return Cm;case 35666:return Rm;case 35674:return Pm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return km;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}function Ym(s,t){s.uniform1fv(this.addr,t)}function qm(s,t){let e=$i(t,this.size,2);s.uniform2fv(this.addr,e)}function Zm(s,t){let e=$i(t,this.size,3);s.uniform3fv(this.addr,e)}function $m(s,t){let e=$i(t,this.size,4);s.uniform4fv(this.addr,e)}function Jm(s,t){let e=$i(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Km(s,t){let e=$i(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qm(s,t){let e=$i(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function jm(s,t){s.uniform1iv(this.addr,t)}function t0(s,t){s.uniform2iv(this.addr,t)}function e0(s,t){s.uniform3iv(this.addr,t)}function n0(s,t){s.uniform4iv(this.addr,t)}function i0(s,t){s.uniform1uiv(this.addr,t)}function s0(s,t){s.uniform2uiv(this.addr,t)}function r0(s,t){s.uniform3uiv(this.addr,t)}function o0(s,t){s.uniform4uiv(this.addr,t)}function a0(s,t,e){let n=this.cache,i=t.length,r=Zr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||bh,r[o])}function l0(s,t,e){let n=this.cache,i=t.length,r=Zr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Th,r[o])}function c0(s,t,e){let n=this.cache,i=t.length,r=Zr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ah,r[o])}function h0(s,t,e){let n=this.cache,i=t.length,r=Zr(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wh,r[o])}function u0(s){switch(s){case 5126:return Ym;case 35664:return qm;case 35665:return Zm;case 35666:return $m;case 35674:return Jm;case 35675:return Km;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}var ba=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}},Ea=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u0(e.type)}},wa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;function Hc(s,t){s.seq.push(t),s.map[t.id]=t}function f0(s,t,e){let n=s.name,i=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),o=ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hc(e,c===void 0?new ba(a,s,t):new Ea(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new wa(a),Hc(e,u)),e=u}}}var Ui=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);f0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Vc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var d0=37297,p0=0;function m0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function g0(s){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s),n;switch(t===e?n="":t===yr&&e===_r?n="LinearDisplayP3ToLinearSRGB":t===_r&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),s){case vn:case qr:return[n,"LinearTransferOETF"];case be:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Gc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+m0(s.getShaderSource(t),o)}else return i}function x0(s,t){let e=g0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _0(s,t){let e;switch(t){case rl:e="Linear";break;case ol:e="Reinhard";break;case al:e="OptimizedCineon";break;case Ls:e="ACESFilmic";break;case ll:e="AgX";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function y0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function v0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function M0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Li(s){return s!==""}function Wc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(b0,w0)}var E0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w0(s,t){let e=Bt[t];if(e===void 0){let n=E0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}var T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(T0,A0)}function A0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function R0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function L0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sl:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function I0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function D0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=C0(e),c=R0(e),h=P0(e),u=L0(e),f=I0(e),d=e.isWebGL2?"":y0(e),g=v0(e),x=M0(r),m=i.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Li).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Li).join(`
`),y.length>0&&(y+=`
`)):(p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),y=[d,qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Bt.tonemapping_pars_fragment:"",e.toneMapping!==In?_0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),o=Ta(o),o=Wc(o,e),o=Xc(o,e),a=Ta(a),a=Wc(a,e),a=Xc(a,e),o=Yc(o),a=Yc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let S=_+p+o,R=_+y+a,T=Vc(i,i.VERTEX_SHADER,S),C=Vc(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(H){if(s.debug.checkShaderErrors){let tt=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),N=i.getShaderInfoLog(C).trim(),G=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,C);else{let X=Gc(i,T,"vertex"),W=Gc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+X+`
`+W)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||N==="")&&(Y=!1);Y&&(H.diagnostics={runnable:G,programLog:tt,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:y}})}i.deleteShader(T),i.deleteShader(C),v=new Ui(i,m),E=S0(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,d0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var U0=0,Aa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ca(t),e.set(t,n)),n}},Ca=class{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}};function N0(s,t,e,n,i,r,o){let a=new Ar,l=new Aa,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,E,U,H,tt){let L=H.fog,N=tt.geometry,G=v.isMeshStandardMaterial?H.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),X=Y&&Y.mapping===Yr?Y.image.height:null,W=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=J!==void 0?J.length:0,ut=0;N.morphAttributes.position!==void 0&&(ut=1),N.morphAttributes.normal!==void 0&&(ut=2),N.morphAttributes.color!==void 0&&(ut=3);let V,q,ct,vt;if(W){let Pe=rn[W];V=Pe.vertexShader,q=Pe.fragmentShader}else V=v.vertexShader,q=v.fragmentShader,l.update(v),ct=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);let _t=s.getRenderTarget(),Ut=tt.isInstancedMesh===!0,Ft=tt.isBatchedMesh===!0,At=!!v.map,Yt=!!v.matcap,F=!!Y,Re=!!v.aoMap,St=!!v.lightMap,It=!!v.bumpMap,mt=!!v.normalMap,oe=!!v.displacementMap,kt=!!v.emissiveMap,w=!!v.metalnessMap,M=!!v.roughnessMap,B=v.anisotropy>0,K=v.clearcoat>0,$=v.iridescence>0,Q=v.sheen>0,gt=v.transmission>0,lt=B&&!!v.anisotropyMap,dt=K&&!!v.clearcoatMap,wt=K&&!!v.clearcoatNormalMap,zt=K&&!!v.clearcoatRoughnessMap,Z=$&&!!v.iridescenceMap,Jt=$&&!!v.iridescenceThicknessMap,Xt=Q&&!!v.sheenColorMap,Pt=Q&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,pt=!!v.specularColorMap,Ot=!!v.specularIntensityMap,$t=gt&&!!v.transmissionMap,le=gt&&!!v.thicknessMap,Vt=!!v.gradientMap,st=!!v.alphaMap,P=v.alphaTest>0,ot=!!v.alphaHash,at=!!v.extensions,Ct=!!N.attributes.uv1,bt=!!N.attributes.uv2,jt=!!N.attributes.uv3,te=In;return v.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(te=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:q,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ft,instancing:Ut,instancingColor:Ut&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:vn,map:At,matcap:Yt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:X,aoMap:Re,lightMap:St,bumpMap:It,normalMap:mt,displacementMap:f&&oe,emissiveMap:kt,normalMapObjectSpace:mt&&v.normalMapType===zu,normalMapTangentSpace:mt&&v.normalMapType===hl,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:lt,clearcoat:K,clearcoatMap:dt,clearcoatNormalMap:wt,clearcoatRoughnessMap:zt,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:Jt,sheen:Q,sheenColorMap:Xt,sheenRoughnessMap:Pt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Ot,transmission:gt,transmissionMap:$t,thicknessMap:le,gradientMap:Vt,opaque:v.transparent===!1&&v.blending===Ii,alphaMap:st,alphaTest:P,alphaHash:ot,combine:v.combine,mapUv:At&&x(v.map.channel),aoMapUv:Re&&x(v.aoMap.channel),lightMapUv:St&&x(v.lightMap.channel),bumpMapUv:It&&x(v.bumpMap.channel),normalMapUv:mt&&x(v.normalMap.channel),displacementMapUv:oe&&x(v.displacementMap.channel),emissiveMapUv:kt&&x(v.emissiveMap.channel),metalnessMapUv:w&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:lt&&x(v.anisotropyMap.channel),clearcoatMapUv:dt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(v.sheenRoughnessMap.channel),specularMapUv:Mt&&x(v.specularMap.channel),specularColorMapUv:pt&&x(v.specularColorMap.channel),specularIntensityMapUv:Ot&&x(v.specularIntensityMap.channel),transmissionMapUv:$t&&x(v.transmissionMap.channel),thicknessMapUv:le&&x(v.thicknessMap.channel),alphaMapUv:st&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:bt,vertexUv3s:jt,pointsUvs:tt.isPoints===!0&&!!N.attributes.uv&&(At||st),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===Qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:at&&v.extensions.derivatives===!0,extensionFragDepth:at&&v.extensions.fragDepth===!0,extensionDrawBuffers:at&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(E,v),_(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){let E=g[v.type],U;if(E){let H=rn[E];U=Bn.clone(H.uniforms)}else U=v.uniforms;return U}function R(v,E){let U;for(let H=0,tt=c.length;H<tt;H++){let L=c[H];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new D0(s,E,v,r),c.push(U)),U}function T(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:I}}function F0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function O0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $c(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||O0),n.length>1&&n.sort(f||Zc),i.length>1&&i.sort(f||Zc)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function B0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new $c,s.set(n,[o])):i>=r.length?(o=new $c,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function k0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ft};break;case"SpotLight":e={position:new A,direction:new A,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function z0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var H0=0;function V0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function G0(s,t){let e=new k0,n=z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);let r=new A,o=new re,a=new re;function l(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,S=0,R=0,T=0,C=0,I=0,v=0;h.sort(V0);let E=u===!0?Math.PI:1;for(let H=0,tt=h.length;H<tt;H++){let L=h[H],N=L.color,G=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*G*E,d+=N.g*G*E,g+=N.b*G*E;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],G);v++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,S++}i.directional[x]=W,x++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(G*E),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[p]=W;let J=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=J.matrix,L.castShadow){let j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=X,T++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(N).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=W,y++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G*E),W.groundColor.copy(L.groundColor).multiplyScalar(G*E),i.hemi[_]=W,_++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let U=i.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==_||U.numDirectionalShadows!==S||U.numPointShadows!==R||U.numSpotShadows!==T||U.numSpotMaps!==C||U.numLightProbes!==v)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=_,U.numDirectionalShadows=S,U.numPointShadows=R,U.numSpotShadows=T,U.numSpotMaps=C,U.numLightProbes=v,i.version=H0++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let S=h[y];if(S.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(S.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Jc(s,t){let e=new G0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function W0(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Jc(s,t),e.set(r,[l])):o>=a.length?(l=new Jc(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ra=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
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
}`;function q0(s,t,e){let n=new Es,i=new it,r=new it,o=new se,a=new Ra({depthPacking:ku}),l=new Pa,c={},h=e.maxTextureSize,u={[Un]:Ce,[Ce]:Un,[_n]:_n},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:X0,fragmentShader:Y0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),E=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(on),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let tt=p!==gn&&this.type===gn,L=p===gn&&this.type!==gn;for(let N=0,G=T.length;N<G;N++){let Y=T[N],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||tt===!0||L===!0){let j=this.type!==gn?{minFilter:Ue,magFilter:Ue}:{};X.map!==null&&X.map.dispose(),X.map=new Fe(i.x,i.y,j),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let j=0;j<J;j++){let ut=X.getViewport(j);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),H.viewport(o),X.updateMatrices(Y,j),n=X.getFrustum(),S(C,I,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&y(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,E,U)};function y(T,C){let I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fe(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,I,d,x,null)}function _(T,C,I,v){let E=null,U=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=E.uuid,tt=C.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let N=L[tt];N===void 0&&(N=E.clone(),L[tt]=N,C.addEventListener("dispose",R)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,v===gn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=s.properties.get(E);H.light=I}return E}function S(T,C,I,v,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let tt=t.update(T),L=T.material;if(Array.isArray(L)){let N=tt.groups;for(let G=0,Y=N.length;G<Y;G++){let X=N[G],W=L[X.materialIndex];if(W&&W.visible){let J=_(T,W,v,E);T.onBeforeShadow(s,T,C,I,tt,J,X),s.renderBufferDirect(I,null,tt,J,T,X),T.onAfterShadow(s,T,C,I,tt,J,X)}}}else if(L.visible){let N=_(T,L,v,E);T.onBeforeShadow(s,T,C,I,tt,N,null),s.renderBufferDirect(I,null,tt,N,T,null),T.onAfterShadow(s,T,C,I,tt,N,null)}}let H=T.children;for(let tt=0,L=H.length;tt<L;tt++)S(H[tt],C,I,v,E)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let v=c[I],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Z0(s,t,e){let n=e.isWebGL2;function i(){let P=!1,ot=new se,at=null,Ct=new se(0,0,0,0);return{setMask:function(bt){at!==bt&&!P&&(s.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){P=bt},setClear:function(bt,jt,te,xe,Pe){Pe===!0&&(bt*=xe,jt*=xe,te*=xe),ot.set(bt,jt,te,xe),Ct.equals(ot)===!1&&(s.clearColor(bt,jt,te,xe),Ct.copy(ot))},reset:function(){P=!1,at=null,Ct.set(-1,0,0,0)}}}function r(){let P=!1,ot=null,at=null,Ct=null;return{setTest:function(bt){bt?Ft(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(bt){ot!==bt&&!P&&(s.depthMask(bt),ot=bt)},setFunc:function(bt){if(at!==bt){switch(bt){case yu:s.depthFunc(s.NEVER);break;case vu:s.depthFunc(s.ALWAYS);break;case Mu:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case Su:s.depthFunc(s.EQUAL);break;case bu:s.depthFunc(s.GEQUAL);break;case Eu:s.depthFunc(s.GREATER);break;case wu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=bt}},setLocked:function(bt){P=bt},setClear:function(bt){Ct!==bt&&(s.clearDepth(bt),Ct=bt)},reset:function(){P=!1,ot=null,at=null,Ct=null}}}function o(){let P=!1,ot=null,at=null,Ct=null,bt=null,jt=null,te=null,xe=null,Pe=null;return{setTest:function(ee){P||(ee?Ft(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ee){ot!==ee&&!P&&(s.stencilMask(ee),ot=ee)},setFunc:function(ee,Le,sn){(at!==ee||Ct!==Le||bt!==sn)&&(s.stencilFunc(ee,Le,sn),at=ee,Ct=Le,bt=sn)},setOp:function(ee,Le,sn){(jt!==ee||te!==Le||xe!==sn)&&(s.stencilOp(ee,Le,sn),jt=ee,te=Le,xe=sn)},setLocked:function(ee){P=ee},setClear:function(ee){Pe!==ee&&(s.clearStencil(ee),Pe=ee)},reset:function(){P=!1,ot=null,at=null,Ct=null,bt=null,jt=null,te=null,xe=null,Pe=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,S=null,R=null,T=null,C=null,I=null,v=new ft(0,0,0),E=0,U=!1,H=null,tt=null,L=null,N=null,G=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let j=null,ut={},V=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),ct=new se().fromArray(V),vt=new se().fromArray(q);function _t(P,ot,at,Ct){let bt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(P,jt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<at;te++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(ot+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return jt}let Ut={};Ut[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(s.DEPTH_TEST),l.setFunc(pr),kt(!1),w(Pl),Ft(s.CULL_FACE),mt(on);function Ft(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function At(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Yt(P,ot){return d[P]!==ot?(s.bindFramebuffer(P,ot),d[P]=ot,n&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ot),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function F(P,ot){let at=x,Ct=!1;if(P)if(at=g.get(ot),at===void 0&&(at=[],g.set(ot,at)),P.isWebGLMultipleRenderTargets){let bt=P.texture;if(at.length!==bt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,te=bt.length;jt<te;jt++)at[jt]=s.COLOR_ATTACHMENT0+jt;at.length=bt.length,Ct=!0}}else at[0]!==s.COLOR_ATTACHMENT0&&(at[0]=s.COLOR_ATTACHMENT0,Ct=!0);else at[0]!==s.BACK&&(at[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Re(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let St={[Jn]:s.FUNC_ADD,[su]:s.FUNC_SUBTRACT,[ru]:s.FUNC_REVERSE_SUBTRACT};if(n)St[Dl]=s.MIN,St[Ul]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(St[Dl]=P.MIN_EXT,St[Ul]=P.MAX_EXT)}let It={[ou]:s.ZERO,[au]:s.ONE,[lu]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[pu]:s.SRC_ALPHA_SATURATE,[fu]:s.DST_COLOR,[hu]:s.DST_ALPHA,[cu]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[du]:s.ONE_MINUS_DST_COLOR,[uu]:s.ONE_MINUS_DST_ALPHA,[mu]:s.CONSTANT_COLOR,[gu]:s.ONE_MINUS_CONSTANT_COLOR,[xu]:s.CONSTANT_ALPHA,[_u]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(P,ot,at,Ct,bt,jt,te,xe,Pe,ee){if(P===on){p===!0&&(At(s.BLEND),p=!1);return}if(p===!1&&(Ft(s.BLEND),p=!0),P!==iu){if(P!==y||ee!==U){if((_!==Jn||T!==Jn)&&(s.blendEquation(s.FUNC_ADD),_=Jn,T=Jn),ee)switch(P){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Il:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,C=null,I=null,v.set(0,0,0),E=0,y=P,U=ee}return}bt=bt||ot,jt=jt||at,te=te||Ct,(ot!==_||bt!==T)&&(s.blendEquationSeparate(St[ot],St[bt]),_=ot,T=bt),(at!==S||Ct!==R||jt!==C||te!==I)&&(s.blendFuncSeparate(It[at],It[Ct],It[jt],It[te]),S=at,R=Ct,C=jt,I=te),(xe.equals(v)===!1||Pe!==E)&&(s.blendColor(xe.r,xe.g,xe.b,Pe),v.copy(xe),E=Pe),y=P,U=!1}function oe(P,ot){P.side===_n?At(s.CULL_FACE):Ft(s.CULL_FACE);let at=P.side===Ce;ot&&(at=!at),kt(at),P.blending===Ii&&P.transparent===!1?mt(on):mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Ct=P.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){H!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),H=P)}function w(P){P!==eu?(Ft(s.CULL_FACE),P!==tt&&(P===Pl?s.cullFace(s.BACK):P===nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),tt=P}function M(P){P!==L&&(X&&s.lineWidth(P),L=P)}function B(P,ot,at){P?(Ft(s.POLYGON_OFFSET_FILL),(N!==ot||G!==at)&&(s.polygonOffset(ot,at),N=ot,G=at)):At(s.POLYGON_OFFSET_FILL)}function K(P){P?Ft(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function $(P){P===void 0&&(P=s.TEXTURE0+Y-1),j!==P&&(s.activeTexture(P),j=P)}function Q(P,ot,at){at===void 0&&(j===null?at=s.TEXTURE0+Y-1:at=j);let Ct=ut[at];Ct===void 0&&(Ct={type:void 0,texture:void 0},ut[at]=Ct),(Ct.type!==P||Ct.texture!==ot)&&(j!==at&&(s.activeTexture(at),j=at),s.bindTexture(P,ot||Ut[P]),Ct.type=P,Ct.texture=ot)}function gt(){let P=ut[j];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(P){ct.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ct.copy(P))}function $t(P){vt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function le(P,ot){let at=u.get(ot);at===void 0&&(at=new WeakMap,u.set(ot,at));let Ct=at.get(P);Ct===void 0&&(Ct=s.getUniformBlockIndex(ot,P.name),at.set(P,Ct))}function Vt(P,ot){let Ct=u.get(ot).get(P);h.get(ot)!==Ct&&(s.uniformBlockBinding(ot,Ct,P.__bindingPointIndex),h.set(ot,Ct))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},j=null,ut={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,S=null,R=null,T=null,C=null,I=null,v=new ft(0,0,0),E=0,U=!1,H=null,tt=null,L=null,N=null,G=null,ct.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:At,bindFramebuffer:Yt,drawBuffers:F,useProgram:Re,setBlending:mt,setMaterial:oe,setFlipSided:kt,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:K,activeTexture:$,bindTexture:Q,unbindTexture:gt,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:Mt,texImage3D:pt,updateUBOMapping:le,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Pt,texSubImage2D:wt,texSubImage3D:zt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Jt,scissor:Ot,viewport:$t,reset:st}}function $0(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):Sr("canvas")}function x(w,M,B,K){let $=1;if((w.width>K||w.height>K)&&($=K/Math.max(w.width,w.height)),$<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let Q=M?Mr:Math.floor,gt=Q($*w.width),lt=Q($*w.height);u===void 0&&(u=g(gt,lt));let dt=B?g(gt,lt):u;return dt.width=gt,dt.height=lt,dt.getContext("2d").drawImage(w,0,0,gt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+gt+"x"+lt+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return _a(w.width)&&_a(w.height)}function p(w){return a?!1:w.wrapS!==Ke||w.wrapT!==Ke||w.minFilter!==Ue&&w.minFilter!==We}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ue&&w.minFilter!==We}function _(w){s.generateMipmap(w)}function S(w,M,B,K,$=!1){if(a===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===s.RED&&(B===s.FLOAT&&(Q=s.R32F),B===s.HALF_FLOAT&&(Q=s.R16F),B===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.R8UI),B===s.UNSIGNED_SHORT&&(Q=s.R16UI),B===s.UNSIGNED_INT&&(Q=s.R32UI),B===s.BYTE&&(Q=s.R8I),B===s.SHORT&&(Q=s.R16I),B===s.INT&&(Q=s.R32I)),M===s.RG&&(B===s.FLOAT&&(Q=s.RG32F),B===s.HALF_FLOAT&&(Q=s.RG16F),B===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RGBA){let gt=$?xr:Zt.getTransfer(K);B===s.FLOAT&&(Q=s.RGBA32F),B===s.HALF_FLOAT&&(Q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Q=gt===Qt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(w,M,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Ue&&w.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){return w===Ue||w===Nl||w===Lo?s.NEAREST:s.LINEAR}function C(w){let M=w.target;M.removeEventListener("dispose",C),v(M),M.isVideoTexture&&h.delete(M)}function I(w){let M=w.target;M.removeEventListener("dispose",I),U(M)}function v(w){let M=n.get(w);if(M.__webglInit===void 0)return;let B=w.source,K=f.get(B);if(K){let $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(w),Object.keys(K).length===0&&f.delete(B)}n.remove(w)}function E(w){let M=n.get(w);s.deleteTexture(M.__webglTexture);let B=w.source,K=f.get(B);delete K[M.__cacheKey],o.memory.textures--}function U(w){let M=w.texture,B=n.get(w),K=n.get(M);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let Q=0;Q<B.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)s.deleteFramebuffer(B.__webglFramebuffer[$]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,Q=M.length;$<Q;$++){let gt=n.get(M[$]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(M[$])}n.remove(M),n.remove(w)}let H=0;function tt(){H=0}function L(){let w=H;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),H+=1,w}function N(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function G(w,M){let B=n.get(w);if(w.isVideoTexture&&oe(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,w,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function Y(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ct(B,w,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function X(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ct(B,w,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function W(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){vt(B,w,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let J={[ma]:s.REPEAT,[Ke]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},j={[Ue]:s.NEAREST,[Nl]:s.NEAREST_MIPMAP_NEAREST,[Lo]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},ut={[Hu]:s.NEVER,[qu]:s.ALWAYS,[Vu]:s.LESS,[xh]:s.LEQUAL,[Gu]:s.EQUAL,[Yu]:s.GEQUAL,[Wu]:s.GREATER,[Xu]:s.NOTEQUAL};function V(w,M,B){if(B?(s.texParameteri(w,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,J[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,j[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,j[M.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Ke||M.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,T(M.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Ue&&M.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ue||M.minFilter!==Lo&&M.minFilter!==Ss||M.type===Ln&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===je&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function q(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,$=f.get(K);$===void 0&&($={},f.set(K,$));let Q=N(M);if(Q!==w.__cacheKey){$[Q]===void 0&&($[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[Q].usedTimes++;let gt=$[w.__cacheKey];gt!==void 0&&($[w.__cacheKey].usedTimes--,gt.usedTimes===0&&E(M)),w.__cacheKey=Q,w.__webglTexture=$[Q].texture}return B}function ct(w,M,B){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);let $=q(w,M),Q=M.source;e.bindTexture(K,w.__webglTexture,s.TEXTURE0+B);let gt=n.get(Q);if(Q.version!==gt.__version||$===!0){e.activeTexture(s.TEXTURE0+B);let lt=Zt.getPrimaries(Zt.workingColorSpace),dt=M.colorSpace===Xe?null:Zt.getPrimaries(M.colorSpace),wt=M.colorSpace===Xe||lt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let zt=p(M)&&m(M.image)===!1,Z=x(M.image,zt,!1,i.maxTextureSize);Z=kt(M,Z);let Jt=m(Z)||a,Xt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Mt=S(M.internalFormat,Xt,Pt,M.colorSpace,M.isVideoTexture);V(K,M,Jt);let pt,Ot=M.mipmaps,$t=a&&M.isVideoTexture!==!0&&Mt!==mh,le=gt.__version===void 0||$===!0,Vt=R(M,Z,Jt);if(M.isDepthTexture)Mt=s.DEPTH_COMPONENT,a?M.type===Ln?Mt=s.DEPTH_COMPONENT32F:M.type===Pn?Mt=s.DEPTH_COMPONENT24:M.type===Qn?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:M.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jn&&Mt===s.DEPTH_COMPONENT&&M.type!==cl&&M.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pn,Pt=r.convert(M.type)),M.format===Oi&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,M.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Qn,Pt=r.convert(M.type))),le&&($t?e.texStorage2D(s.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Xt,Pt,null));else if(M.isDataTexture)if(Ot.length>0&&Jt){$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,Xt,Pt,pt.data);M.generateMipmaps=!1}else $t?(le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Xt,Pt,Z.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Xt,Pt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Mt,Ot[0].width,Ot[0].height,Z.depth);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],M.format!==Qe?Xt!==null?$t?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,Xt,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Mt,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,Xt,Pt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Mt,pt.width,pt.height,Z.depth,0,Xt,Pt,pt.data)}else{$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],M.format!==Qe?Xt!==null?$t?e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,pt.width,pt.height,Xt,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,st,Mt,pt.width,pt.height,0,Xt,Pt,pt.data)}else if(M.isDataArrayTexture)$t?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Xt,Pt,Z.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,Xt,Pt,Z.data);else if(M.isData3DTexture)$t?(le&&e.texStorage3D(s.TEXTURE_3D,Vt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Xt,Pt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,Xt,Pt,Z.data);else if(M.isFramebufferTexture){if(le)if($t)e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height);else{let st=Z.width,P=Z.height;for(let ot=0;ot<Vt;ot++)e.texImage2D(s.TEXTURE_2D,ot,Mt,st,P,0,Xt,Pt,null),st>>=1,P>>=1}}else if(Ot.length>0&&Jt){$t&&le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Ot[0].width,Ot[0].height);for(let st=0,P=Ot.length;st<P;st++)pt=Ot[st],$t?e.texSubImage2D(s.TEXTURE_2D,st,0,0,Xt,Pt,pt):e.texImage2D(s.TEXTURE_2D,st,Mt,Xt,Pt,pt);M.generateMipmaps=!1}else $t?(le&&e.texStorage2D(s.TEXTURE_2D,Vt,Mt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,Pt,Z)):e.texImage2D(s.TEXTURE_2D,0,Mt,Xt,Pt,Z);y(M,Jt)&&_(K),gt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function vt(w,M,B){if(M.image.length!==6)return;let K=q(w,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);let Q=n.get($);if($.version!==Q.__version||K===!0){e.activeTexture(s.TEXTURE0+B);let gt=Zt.getPrimaries(Zt.workingColorSpace),lt=M.colorSpace===Xe?null:Zt.getPrimaries(M.colorSpace),dt=M.colorSpace===Xe||gt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let wt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let st=0;st<6;st++)!wt&&!zt?Z[st]=x(M.image[st],!1,!0,i.maxCubemapSize):Z[st]=zt?M.image[st].image:M.image[st],Z[st]=kt(M,Z[st]);let Jt=Z[0],Xt=m(Jt)||a,Pt=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),pt=S(M.internalFormat,Pt,Mt,M.colorSpace),Ot=a&&M.isVideoTexture!==!0,$t=Q.__version===void 0||K===!0,le=R(M,Jt,Xt);V(s.TEXTURE_CUBE_MAP,M,Xt);let Vt;if(wt){Ot&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,Jt.width,Jt.height);for(let st=0;st<6;st++){Vt=Z[st].mipmaps;for(let P=0;P<Vt.length;P++){let ot=Vt[P];M.format!==Qe?Pt!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,Pt,Mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,pt,ot.width,ot.height,0,Pt,Mt,ot.data)}}}else{Vt=M.mipmaps,Ot&&$t&&(Vt.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,Z[0].width,Z[0].height));for(let st=0;st<6;st++)if(zt){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Z[st].width,Z[st].height,Pt,Mt,Z[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Z[st].width,Z[st].height,0,Pt,Mt,Z[st].data);for(let P=0;P<Vt.length;P++){let at=Vt[P].image[st].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,at.width,at.height,Pt,Mt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,pt,at.width,at.height,0,Pt,Mt,at.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,Mt,Z[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Pt,Mt,Z[st]);for(let P=0;P<Vt.length;P++){let ot=Vt[P];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,Pt,Mt,ot.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,pt,Pt,Mt,ot.image[st])}}}y(M,Xt)&&_(s.TEXTURE_CUBE_MAP),Q.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _t(w,M,B,K,$,Q){let gt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),dt=S(B.internalFormat,gt,lt,B.colorSpace);if(!n.get(M).__hasExternalTextures){let zt=Math.max(1,M.width>>Q),Z=Math.max(1,M.height>>Q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Q,dt,zt,Z,M.depth,0,gt,lt,null):e.texImage2D($,Q,dt,zt,Z,0,gt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,0,It(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(w,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let K=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||mt(M)){let $=M.depthTexture;$&&$.isDepthTexture&&($.type===Ln?K=s.DEPTH_COMPONENT32F:$.type===Pn&&(K=s.DEPTH_COMPONENT24));let Q=It(M);mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let K=It(M);B&&mt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let K=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0;$<K.length;$++){let Q=K[$],gt=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),dt=S(Q.internalFormat,gt,lt,Q.colorSpace),wt=It(M);B&&mt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,dt,M.width,M.height):mt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let K=n.get(M.depthTexture).__webglTexture,$=It(M);if(M.depthTexture.format===jn)mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Oi)mt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(w){let M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),Ut(M.__webglDepthbuffer[K],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ut(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(w,M,B){let K=n.get(w);M!==void 0&&_t(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(w)}function F(w){let M=w.texture,B=n.get(w),K=n.get(M);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++);let $=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,gt=m(w)||a;if($){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let dt=0;dt<M.mipmaps.length;dt++)B.__webglFramebuffer[lt][dt]=s.createFramebuffer()}else B.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)B.__webglFramebuffer[lt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){let lt=w.texture;for(let dt=0,wt=lt.length;dt<wt;dt++){let zt=n.get(lt[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&mt(w)===!1){let lt=Q?M:[M];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<lt.length;dt++){let wt=lt[dt];B.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);let zt=r.convert(wt.format,wt.colorSpace),Z=r.convert(wt.type),Jt=S(wt.internalFormat,zt,Z,wt.colorSpace,w.isXRRenderTarget===!0),Xt=It(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Jt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,gt);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(B.__webglFramebuffer[lt][dt],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else _t(B.__webglFramebuffer[lt],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(M,gt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let lt=w.texture;for(let dt=0,wt=lt.length;dt<wt;dt++){let zt=lt[dt],Z=n.get(zt);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture),V(s.TEXTURE_2D,zt,gt),_t(B.__webglFramebuffer,w,zt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),y(zt,gt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?lt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,K.__webglTexture),V(lt,M,gt),a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(B.__webglFramebuffer[dt],w,M,s.COLOR_ATTACHMENT0,lt,dt);else _t(B.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,lt,0);y(M,gt)&&_(lt),e.unbindTexture()}w.depthBuffer&&At(w)}function Re(w){let M=m(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,$=B.length;K<$;K++){let Q=B[K];if(y(Q,M)){let gt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(Q).__webglTexture;e.bindTexture(gt,lt),_(gt),e.unbindTexture()}}}function St(w){if(a&&w.samples>0&&mt(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,K=w.height,$=s.COLOR_BUFFER_BIT,Q=[],gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(w),dt=w.isWebGLMultipleRenderTargets===!0;if(dt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){Q.push(s.COLOR_ATTACHMENT0+wt),w.depthBuffer&&Q.push(gt);let zt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),dt){let Z=n.get(M[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]);let zt=n.get(M[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function It(w){return Math.min(i.maxSamples,w.samples)}function mt(w){let M=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function kt(w,M){let B=w.colorSpace,K=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===xa||B!==vn&&B!==Xe&&(Zt.getTransfer(B)===Qt?a===!1?t.has("EXT_sRGB")===!0&&K===Qe?(w.format=xa,w.minFilter=We,w.generateMipmaps=!1):M=br.sRGBToLinear(M):(K!==Qe||$!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=mt}function J0(s,t,e){let n=e.isWebGL2;function i(r,o=Xe){let a,l=Zt.getTransfer(o);if(r===Dn)return s.UNSIGNED_BYTE;if(r===hh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===uh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pu)return s.BYTE;if(r===Lu)return s.SHORT;if(r===cl)return s.UNSIGNED_SHORT;if(r===ch)return s.INT;if(r===Pn)return s.UNSIGNED_INT;if(r===Ln)return s.FLOAT;if(r===je)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Iu)return s.ALPHA;if(r===Qe)return s.RGBA;if(r===Du)return s.LUMINANCE;if(r===Uu)return s.LUMINANCE_ALPHA;if(r===jn)return s.DEPTH_COMPONENT;if(r===Oi)return s.DEPTH_STENCIL;if(r===xa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nu)return s.RED;if(r===fh)return s.RED_INTEGER;if(r===Fu)return s.RG;if(r===dh)return s.RG_INTEGER;if(r===ph)return s.RGBA_INTEGER;if(r===Io||r===Do||r===Uo||r===No)if(l===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===No)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Do)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===No)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fl||r===Ol||r===Bl||r===kl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zl||r===Hl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zl)return l===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vl||r===Gl||r===Wl||r===Xl||r===Yl||r===ql||r===Zl||r===$l||r===Jl||r===Kl||r===Ql||r===jl||r===tc||r===ec)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ql)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$l)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ql)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jl)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ec)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fo||r===nc||r===ic)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Fo)return l===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ou||r===sc||r===rc||r===oc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var La=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}},K0={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ia=class extends an{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],S=new it,R=null,T=new Ae;T.layers.enable(1),T.viewport=new se;let C=new Ae;C.layers.enable(2),C.viewport=new se;let I=[T,C],v=new La;v.layers.enable(1),v.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=y[V];return q===void 0&&(q=new ys,y[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=y[V];return q===void 0&&(q=new ys,y[V]=q),q.getGripSpace()},this.getHand=function(V){let q=y[V];return q===void 0&&(q=new ys,y[V]=q),q.getHandSpace()};function H(V){let q=_.indexOf(V.inputSource);if(q===-1)return;let ct=y[q];ct!==void 0&&(ct.update(V.inputSource,V.frame,c||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function tt(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",L);for(let V=0;V<y.length;V++){let q=_[V];q!==null&&(_[V]=null,y[V].disconnect(q))}E=null,U=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Fe(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,ct=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=x.stencil?Oi:jn,ct=x.stencil?Qn:Pn);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(_t),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Fe(f.textureWidth,f.textureHeight,{format:Qe,type:Dn,depthTexture:new Ir(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let q=0;q<V.removed.length;q++){let ct=V.removed[q],vt=_.indexOf(ct);vt>=0&&(_[vt]=null,y[vt].disconnect(ct))}for(let q=0;q<V.added.length;q++){let ct=V.added[q],vt=_.indexOf(ct);if(vt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=_.length){_.push(ct),vt=Ut;break}else if(_[Ut]===null){_[Ut]=ct,vt=Ut;break}if(vt===-1)break}let _t=y[vt];_t&&_t.connect(ct)}}let N=new A,G=new A;function Y(V,q,ct){N.setFromMatrixPosition(q.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);let vt=N.distanceTo(G),_t=q.projectionMatrix.elements,Ut=ct.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),Yt=(_t[9]+1)/_t[5],F=(_t[9]-1)/_t[5],Re=(_t[8]-1)/_t[0],St=(Ut[8]+1)/Ut[0],It=Ft*Re,mt=Ft*St,oe=vt/(-Re+St),kt=oe*-Re;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(kt),V.translateZ(oe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let w=Ft+oe,M=At+oe,B=It-kt,K=mt+(vt-kt),$=Yt*At/M*w,Q=F*At/M*w;V.projectionMatrix.makePerspective(B,K,$,Q,w,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=C.near=T.near=V.near,v.far=C.far=T.far=V.far,(E!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,U=v.far);let q=V.parent,ct=v.cameras;X(v,q);for(let vt=0;vt<ct.length;vt++)X(ct[vt],q);ct.length===2?Y(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),W(V,v,q)};function W(V,q,ct){ct===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=bs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let J=null;function j(V,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let vt=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let _t=0;_t<ct.length;_t++){let Ut=ct[_t],Ft=null;if(d!==null)Ft=d.getViewport(Ut);else{let Yt=u.getViewSubImage(f,Ut);Ft=Yt.viewport,_t===0&&(t.setRenderTargetTextures(p,Yt.colorTexture,f.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(p))}let At=I[_t];At===void 0&&(At=new Ae,At.layers.enable(_t),At.viewport=new se,I[_t]=At),At.matrix.fromArray(Ut.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ut.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),_t===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(At)}}for(let ct=0;ct<y.length;ct++){let vt=_[ct],_t=y[ct];vt!==null&&_t!==void 0&&_t.update(vt,q,c||o)}J&&J(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let ut=new Sh;ut.setAnimationLoop(j),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}};function Q0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j0(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let S=_.program;n.uniformBlockBinding(y,S)}function c(y,_){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let _=u();y.__bindingPointIndex=_;let S=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=i[y.id],S=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,E=I.length;v<E;v++){let U=I[v];if(d(U,T,v,R)===!0){let H=U.__offset,tt=Array.isArray(U.value)?U.value:[U.value],L=0;for(let N=0;N<tt.length;N++){let G=tt[N],Y=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,H+L,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,_,S,R){let T=y.value,C=_+"_"+S;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let I=R[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let _=y.uniforms,S=0,R=16;for(let C=0,I=_.length;C<I;C++){let v=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,U=v.length;E<U;E++){let H=v[E],tt=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=tt.length;L<N;L++){let G=tt[L],Y=x(G),X=S%R;X!==0&&R-X<Y.boundary&&(S+=R-X),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Y.storage}}}let T=S%R;return T>0&&(S+=R-T),y.__size=S,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ws=class{constructor(t={}){let{canvas:e=cf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;let _=this,S=!1,R=0,T=0,C=null,I=-1,v=null,E=new se,U=new se,H=null,tt=new ft(0),L=0,N=e.width,G=e.height,Y=1,X=null,W=null,J=new se(0,0,N,G),j=new se(0,0,N,G),ut=!1,V=new Es,q=!1,ct=!1,vt=null,_t=new re,Ut=new it,Ft=new A,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return C===null?Y:1}let F=n;function Re(b,D){for(let k=0;k<b.length;k++){let z=b[k],O=e.getContext(z,D);if(O!==null)return O}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){let D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),F=Re(D,b),F===null)throw Re(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,It,mt,oe,kt,w,M,B,K,$,Q,gt,lt,dt,wt,zt,Z,Jt,Xt,Pt,Mt,pt,Ot,$t;function le(){St=new _m(F),It=new fm(F,St,t),St.init(It),pt=new J0(F,St,It),mt=new Z0(F,St,It),oe=new Mm(F),kt=new F0,w=new $0(F,St,mt,kt,It,pt,oe),M=new pm(_),B=new xm(_),K=new Rf(F,It),Ot=new hm(F,St,K,It),$=new ym(F,K,oe,Ot),Q=new wm(F,$,K,oe),Xt=new Em(F,It,w),zt=new dm(kt),gt=new N0(_,M,B,St,It,Ot,zt),lt=new Q0(_,kt),dt=new B0,wt=new W0(St,It),Jt=new cm(_,M,B,mt,Q,f,l),Z=new q0(_,Q,It),$t=new j0(F,oe,It,mt),Pt=new um(F,St,oe,It),Mt=new vm(F,St,oe,It),oe.programs=gt.programs,_.capabilities=It,_.extensions=St,_.properties=kt,_.renderLists=dt,_.shadowMap=Z,_.state=mt,_.info=oe}le();let Vt=new Ia(_,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(N,G,!1))},this.getSize=function(b){return b.set(N,G)},this.setSize=function(b,D,k=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,G=D,e.width=Math.floor(b*Y),e.height=Math.floor(D*Y),k===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(N*Y,G*Y).floor()},this.setDrawingBufferSize=function(b,D,k){N=b,G=D,Y=k,e.width=Math.floor(b*k),e.height=Math.floor(D*k),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,D,k,z){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,D,k,z),mt.viewport(E.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,D,k,z){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,D,k,z),mt.scissor(U.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){mt.setScissorTest(ut=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(b=!0,D=!0,k=!0){let z=0;if(b){let O=!1;if(C!==null){let ht=C.texture.format;O=ht===ph||ht===dh||ht===fh}if(O){let ht=C.texture.type,xt=ht===Dn||ht===Pn||ht===cl||ht===Qn||ht===hh||ht===uh,Et=Jt.getClearColor(),Rt=Jt.getClearAlpha(),Ht=Et.r,Dt=Et.g,Nt=Et.b;xt?(d[0]=Ht,d[1]=Dt,d[2]=Nt,d[3]=Rt,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ht,g[1]=Dt,g[2]=Nt,g[3]=Rt,F.clearBufferiv(F.COLOR,0,g))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT),k&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),wt.dispose(),kt.dispose(),M.dispose(),B.dispose(),Q.dispose(),Ot.dispose(),$t.dispose(),gt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Pe),Vt.removeEventListener("sessionend",ee),vt&&(vt.dispose(),vt=null),Le.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=oe.autoReset,D=Z.enabled,k=Z.autoUpdate,z=Z.needsUpdate,O=Z.type;le(),oe.autoReset=b,Z.enabled=D,Z.autoUpdate=k,Z.needsUpdate=z,Z.type=O}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){let D=b.target;D.removeEventListener("dispose",at),Ct(D)}function Ct(b){bt(b),kt.remove(b)}function bt(b){let D=kt.get(b).programs;D!==void 0&&(D.forEach(function(k){gt.releaseProgram(k)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,k,z,O,ht){D===null&&(D=At);let xt=O.isMesh&&O.matrixWorld.determinant()<0,Et=Kh(b,D,k,z,O);mt.setMaterial(z,xt);let Rt=k.index,Ht=1;if(z.wireframe===!0){if(Rt=$.getWireframeAttribute(k),Rt===void 0)return;Ht=2}let Dt=k.drawRange,Nt=k.attributes.position,ue=Dt.start*Ht,Be=(Dt.start+Dt.count)*Ht;ht!==null&&(ue=Math.max(ue,ht.start*Ht),Be=Math.min(Be,(ht.start+ht.count)*Ht)),Rt!==null?(ue=Math.max(ue,0),Be=Math.min(Be,Rt.count)):Nt!=null&&(ue=Math.max(ue,0),Be=Math.min(Be,Nt.count));let _e=Be-ue;if(_e<0||_e===1/0)return;Ot.setup(O,z,Et,k,Rt);let hn,ae=Pt;if(Rt!==null&&(hn=K.get(Rt),ae=Mt,ae.setIndex(hn)),O.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Yt()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(O.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),mt.setLineWidth(Gt*Yt()),O.isLineSegments?ae.setMode(F.LINES):O.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else O.isPoints?ae.setMode(F.POINTS):O.isSprite&&ae.setMode(F.TRIANGLES);if(O.isBatchedMesh)ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ae.renderInstances(ue,_e,O.count);else if(k.isInstancedBufferGeometry){let Gt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ao=Math.min(k.instanceCount,Gt);ae.renderInstances(ue,_e,Ao)}else ae.render(ue,_e)};function jt(b,D,k){b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Ce,b.needsUpdate=!0,zs(b,D,k),b.side=Un,b.needsUpdate=!0,zs(b,D,k),b.side=_n):zs(b,D,k)}this.compile=function(b,D,k=null){k===null&&(k=b),m=wt.get(k),m.init(),y.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==k&&b.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);let z=new Set;return b.traverse(function(O){let ht=O.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){let Et=ht[xt];jt(Et,k,O),z.add(Et)}else jt(ht,k,O),z.add(ht)}),y.pop(),m=null,z},this.compileAsync=function(b,D,k=null){let z=this.compile(b,D,k);return new Promise(O=>{function ht(){if(z.forEach(function(xt){kt.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){O(b);return}setTimeout(ht,10)}St.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let te=null;function xe(b){te&&te(b)}function Pe(){Le.stop()}function ee(){Le.start()}let Le=new Sh;Le.setAnimationLoop(xe),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(b){te=b,Vt.setAnimationLoop(b),b===null?Le.stop():Le.start()},Vt.addEventListener("sessionstart",Pe),Vt.addEventListener("sessionend",ee),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(D),D=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,C),m=wt.get(b,y.length),m.init(),y.push(m),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,q=zt.init(this.clippingPlanes,ct),x=dt.get(b,p.length),x.init(),p.push(x),sn(b,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,W),this.info.render.frame++,q===!0&&zt.beginShadows();let k=m.state.shadowsArray;if(Z.render(k,b,D),q===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(x,b),m.setupLights(_._useLegacyLights),D.isArrayCamera){let z=D.cameras;for(let O=0,ht=z.length;O<ht;O++){let xt=z[O];El(x,b,xt,xt.viewport)}}else El(x,b,D);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,D),Ot.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function sn(b,D,k,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){z&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let xt=Q.update(b),Et=b.material;Et.visible&&x.push(b,xt,Et,k,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){let xt=Q.update(b),Et=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Et)){let Rt=xt.groups;for(let Ht=0,Dt=Rt.length;Ht<Dt;Ht++){let Nt=Rt[Ht],ue=Et[Nt.materialIndex];ue&&ue.visible&&x.push(b,xt,ue,k,Ft.z,Nt)}}else Et.visible&&x.push(b,xt,Et,k,Ft.z,null)}}let ht=b.children;for(let xt=0,Et=ht.length;xt<Et;xt++)sn(ht[xt],D,k,z)}function El(b,D,k,z){let O=b.opaque,ht=b.transmissive,xt=b.transparent;m.setupLightsView(k),q===!0&&zt.setGlobalState(_.clippingPlanes,k),ht.length>0&&Jh(O,ht,D,k),z&&mt.viewport(E.copy(z)),O.length>0&&ks(O,D,k),ht.length>0&&ks(ht,D,k),xt.length>0&&ks(xt,D,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Jh(b,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ht=It.isWebGL2;vt===null&&(vt=new Fe(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?je:Dn,minFilter:Ss,samples:ht?4:0})),_.getDrawingBufferSize(Ut),ht?vt.setSize(Ut.x,Ut.y):vt.setSize(Mr(Ut.x),Mr(Ut.y));let xt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(tt),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=In,ks(b,k,z),w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt);let Rt=!1;for(let Ht=0,Dt=D.length;Ht<Dt;Ht++){let Nt=D[Ht],ue=Nt.object,Be=Nt.geometry,_e=Nt.material,hn=Nt.group;if(_e.side===_n&&ue.layers.test(z.layers)){let ae=_e.side;_e.side=Ce,_e.needsUpdate=!0,wl(ue,k,z,Be,_e,hn),_e.side=ae,_e.needsUpdate=!0,Rt=!0}}Rt===!0&&(w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt)),_.setRenderTarget(xt),_.setClearColor(tt,L),_.toneMapping=Et}function ks(b,D,k){let z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ht=b.length;O<ht;O++){let xt=b[O],Et=xt.object,Rt=xt.geometry,Ht=z===null?xt.material:z,Dt=xt.group;Et.layers.test(k.layers)&&wl(Et,D,k,Rt,Ht,Dt)}}function wl(b,D,k,z,O,ht){b.onBeforeRender(_,D,k,z,O,ht),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,D,k,z,b,ht),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Ce,O.needsUpdate=!0,_.renderBufferDirect(k,D,z,O,b,ht),O.side=Un,O.needsUpdate=!0,_.renderBufferDirect(k,D,z,O,b,ht),O.side=_n):_.renderBufferDirect(k,D,z,O,b,ht),b.onAfterRender(_,D,k,z,O,ht)}function zs(b,D,k){D.isScene!==!0&&(D=At);let z=kt.get(b),O=m.state.lights,ht=m.state.shadowsArray,xt=O.state.version,Et=gt.getParameters(b,O.state,ht,D,k),Rt=gt.getProgramCacheKey(Et),Ht=z.programs;z.environment=b.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||z.environment),Ht===void 0&&(b.addEventListener("dispose",at),Ht=new Map,z.programs=Ht);let Dt=Ht.get(Rt);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===xt)return Al(b,Et),Dt}else Et.uniforms=gt.getUniforms(b),b.onBuild(k,Et,_),b.onBeforeCompile(Et,_),Dt=gt.acquireProgram(Et,Rt),Ht.set(Rt,Dt),z.uniforms=Et.uniforms;let Nt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),Al(b,Et),z.needsLights=jh(b),z.lightsStateVersion=xt,z.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function Tl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Ui.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Al(b,D){let k=kt.get(b);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Kh(b,D,k,z,O){D.isScene!==!0&&(D=At),w.resetTextureUnits();let ht=D.fog,xt=z.isMeshStandardMaterial?D.environment:null,Et=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vn,Rt=(z.isMeshStandardMaterial?B:M).get(z.envMap||xt),Ht=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Nt=!!k.morphAttributes.position,ue=!!k.morphAttributes.normal,Be=!!k.morphAttributes.color,_e=In;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=_.toneMapping);let hn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=hn!==void 0?hn.length:0,Gt=kt.get(z),Ao=m.state.lights;if(q===!0&&(ct===!0||b!==v)){let Ve=b===v&&z.id===I;zt.setState(z,b,Ve)}let ce=!1;z.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ao.state.version||Gt.outputColorSpace!==Et||O.isBatchedMesh&&Gt.batching===!1||!O.isBatchedMesh&&Gt.batching===!0||O.isInstancedMesh&&Gt.instancing===!1||!O.isInstancedMesh&&Gt.instancing===!0||O.isSkinnedMesh&&Gt.skinning===!1||!O.isSkinnedMesh&&Gt.skinning===!0||O.isInstancedMesh&&Gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Gt.instancingColor===!1&&O.instanceColor!==null||Gt.envMap!==Rt||z.fog===!0&&Gt.fog!==ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==zt.numPlanes||Gt.numIntersection!==zt.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Dt||Gt.morphTargets!==Nt||Gt.morphNormals!==ue||Gt.morphColors!==Be||Gt.toneMapping!==_e||It.isWebGL2===!0&&Gt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Gt.__version=z.version);let Gn=Gt.currentProgram;ce===!0&&(Gn=zs(z,D,O));let Cl=!1,ls=!1,Co=!1,Ee=Gn.getUniforms(),Wn=Gt.uniforms;if(mt.useProgram(Gn.program)&&(Cl=!0,ls=!0,Co=!0),z.id!==I&&(I=z.id,ls=!0),Cl||v!==b){Ee.setValue(F,"projectionMatrix",b.projectionMatrix),Ee.setValue(F,"viewMatrix",b.matrixWorldInverse);let Ve=Ee.map.cameraPosition;Ve!==void 0&&Ve.setValue(F,Ft.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,ls=!0,Co=!0)}if(O.isSkinnedMesh){Ee.setOptional(F,O,"bindMatrix"),Ee.setOptional(F,O,"bindMatrixInverse");let Ve=O.skeleton;Ve&&(It.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ee.setValue(F,"boneTexture",Ve.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ee.setOptional(F,O,"batchingTexture"),Ee.setValue(F,"batchingTexture",O._matricesTexture,w));let Ro=k.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&It.isWebGL2===!0)&&Xt.update(O,k,Gn),(ls||Gt.receiveShadow!==O.receiveShadow)&&(Gt.receiveShadow=O.receiveShadow,Ee.setValue(F,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=Rt,Wn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ls&&(Ee.setValue(F,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&Qh(Wn,Co),ht&&z.fog===!0&&lt.refreshFogUniforms(Wn,ht),lt.refreshMaterialUniforms(Wn,z,Y,G,vt),Ui.upload(F,Tl(Gt),Wn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ui.upload(F,Tl(Gt),Wn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ee.setValue(F,"center",O.center),Ee.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(F,"normalMatrix",O.normalMatrix),Ee.setValue(F,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ve=z.uniformsGroups;for(let Po=0,tu=Ve.length;Po<tu;Po++)if(It.isWebGL2){let Rl=Ve[Po];$t.update(Rl,Gn),$t.bind(Rl,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Qh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function jh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,D,k){kt.get(b.texture).__webglTexture=D,kt.get(b.depthTexture).__webglTexture=k;let z=kt.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let k=kt.get(b);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,k=0){C=b,R=D,T=k;let z=!0,O=null,ht=!1,xt=!1;if(b){let Rt=kt.get(b);Rt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(F.FRAMEBUFFER,null),z=!1):Rt.__webglFramebuffer===void 0?w.setupRenderTarget(b):Rt.__hasExternalTextures&&w.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let Dt=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?O=Dt[D][k]:O=Dt[D],ht=!0):It.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?O=kt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[k]:O=Dt,E.copy(b.viewport),U.copy(b.scissor),H=b.scissorTest}else E.copy(J).multiplyScalar(Y).floor(),U.copy(j).multiplyScalar(Y).floor(),H=ut;if(mt.bindFramebuffer(F.FRAMEBUFFER,O)&&It.drawBuffers&&z&&mt.drawBuffers(b,O),mt.viewport(E),mt.scissor(U),mt.setScissorTest(H),ht){let Rt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Rt.__webglTexture,k)}else if(xt){let Rt=kt.get(b.texture),Ht=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,k||0,Ht)}I=-1},this.readRenderTargetPixels=function(b,D,k,z,O,ht,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){mt.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Rt=b.texture,Ht=Rt.format,Dt=Rt.type;if(Ht!==Qe&&pt.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=Dt===je&&(St.has("EXT_color_buffer_half_float")||It.isWebGL2&&St.has("EXT_color_buffer_float"));if(Dt!==Dn&&pt.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===Ln&&(It.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&k>=0&&k<=b.height-O&&F.readPixels(D,k,z,O,pt.convert(Ht),pt.convert(Dt),ht)}finally{let Rt=C!==null?kt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(b,D,k=0){let z=Math.pow(2,-k),O=Math.floor(D.image.width*z),ht=Math.floor(D.image.height*z);w.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,b.x,b.y,O,ht),mt.unbindTexture()},this.copyTextureToTexture=function(b,D,k,z=0){let O=D.image.width,ht=D.image.height,xt=pt.convert(k.format),Et=pt.convert(k.type);w.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,b.x,b.y,O,ht,xt,Et,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,xt,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,z,b.x,b.y,xt,Et,D.image),z===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,k,z,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=b.max.x-b.min.x+1,xt=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,Rt=pt.convert(z.format),Ht=pt.convert(z.type),Dt;if(z.isData3DTexture)w.setTexture3D(z,0),Dt=F.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)w.setTexture2DArray(z,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);let Nt=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Be=F.getParameter(F.UNPACK_SKIP_PIXELS),_e=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES),ae=k.isCompressedTexture?k.mipmaps[O]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,Et,Rt,Ht,ae.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,Et,Rt,ae.data)):F.texSubImage3D(Dt,O,D.x,D.y,D.z,ht,xt,Et,Rt,Ht,ae),F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),F.pixelStorei(F.UNPACK_SKIP_ROWS,_e),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),O===0&&z.generateMipmaps&&F.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,mt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ul?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?ti:gh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?be:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Da=class extends ws{};Da.prototype.isWebGL1Renderer=!0;var Dr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vi=class extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ts=class extends Ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ai=new re,Kc=new re,cr=[],Qc=new qt,tg=new re,ds=new nt,ps=new On,Gi=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qt),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Qc.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),ps.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ai),Kc.multiplyMatrices(n,Ai),ds.matrixWorld=Kc,ds.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){let l=cr[o];l.instanceId=r,l.object=this,e.push(l)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jc=new re,Ua=new Tr,hr=new On,ur=new A,Ur=class extends de{constructor(t=new Me,e=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;jc.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(jc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);ur.fromBufferAttribute(u,m),th(ur,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ur.fromBufferAttribute(u,g),th(ur,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function th(s,t,e,n,i,r,o){let a=Ua.distanceSqToPoint(s);if(a<e){let l=new A;Ua.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Ye=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],o=[],a=new A,l=new re;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ve(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ve(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends Ye{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new it,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Na=class extends Cs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var fr=new A,oa=new pl,aa=new pl,la=new pl,Fa=class extends Ye{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(fr.subVectors(i[0],i[1]).add(i[0]),c=fr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(fr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),oa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),aa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),la.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),aa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),la.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(oa.calc(l),aa.calc(l),la.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function eg(s,t){let e=1-s;return e*e*t}function ng(s,t){return 2*(1-s)*s*t}function ig(s,t){return s*s*t}function vs(s,t,e,n){return eg(s,t)+ng(s,e)+ig(s,n)}function sg(s,t){let e=1-s;return e*e*e*t}function rg(s,t){let e=1-s;return 3*e*e*s*t}function og(s,t){return 3*(1-s)*s*s*t}function ag(s,t){return s*s*s*t}function Ms(s,t,e,n,i){return sg(s,t)+rg(s,e)+og(s,n)+ag(s,i)}var Nr=class extends Ye{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,o.x,a.x),Ms(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oa=class extends Ye{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,o.x,a.x),Ms(t,i.y,r.y,o.y,a.y),Ms(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Ye{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Ye{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Ye{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(t,i.x,r.x,o.x),vs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends Ye{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(t,i.x,r.x,o.x),vs(t,i.y,r.y,o.y),vs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(eh(a,l.x,c.x,h.x,u.x),eh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},nh=Object.freeze({__proto__:null,ArcCurve:Na,CatmullRomCurve3:Fa,CubicBezierCurve:Nr,CubicBezierCurve3:Oa,EllipseCurve:Cs,LineCurve:Fr,LineCurve3:Ba,QuadraticBezierCurve:Or,QuadraticBezierCurve3:ka,SplineCurve:Br}),za=class extends Ye{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new nh[i.type]().fromJSON(i))}return this}},Ha=class extends za{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Or(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Nr(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Cs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Va=class s extends Me{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,f=new it,d=new A,g=new A,x=new A,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*i,S=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*S,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let C=l[3*T+0]*S,I=l[3*T+1],v=l[3*T+0]*R;c.push(C,I,v)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let S=_+y*t.length,R=S,T=S+t.length,C=S+t.length+1,I=S+1;r.push(R,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},kr=class s extends Va{constructor(t=1,e=1,n=4,i=8){let r=new Ha;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var en=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function y(){let S=new A,R=new A,T=0,C=(e-t)/n;for(let I=0;I<=r;I++){let v=[],E=I/r,U=E*(e-t)+t;for(let H=0;H<=i;H++){let tt=H/i,L=tt*l+a,N=Math.sin(L),G=Math.cos(L);R.x=U*N,R.y=-E*n+m,R.z=U*G,u.push(R.x,R.y,R.z),S.set(N,C,G).normalize(),f.push(S.x,S.y,S.z),d.push(tt,1-E),v.push(g++)}x.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){let E=x[v][I],U=x[v+1][I],H=x[v+1][I+1],tt=x[v][I+1];h.push(E,U,tt),h.push(U,H,tt),T+=6}c.addGroup(p,T,0),p+=T}function _(S){let R=g,T=new it,C=new A,I=0,v=S===!0?t:e,E=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let U=g;for(let H=0;H<=i;H++){let L=H/i*l+a,N=Math.cos(L),G=Math.sin(L);C.x=v*G,C.y=m*E,C.z=v*N,u.push(C.x,C.y,C.z),f.push(0,E,0),T.x=N*.5+.5,T.y=G*.5*E+.5,d.push(T.x,T.y),g++}for(let H=0;H<i;H++){let tt=R+H,L=U+H;S===!0?h.push(L,L+1,tt):h.push(L+1,L,tt),I+=3}c.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zr=class s extends en{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ga=class s extends Me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new A,S=new A,R=new A;for(let T=0;T<e.length;T+=3)d(e[T+0],_),d(e[T+1],S),d(e[T+2],R),l(_,S,R,y)}function l(y,_,S,R){let T=R+1,C=[];for(let I=0;I<=T;I++){C[I]=[];let v=y.clone().lerp(S,I/T),E=_.clone().lerp(S,I/T),U=T-I;for(let H=0;H<=U;H++)H===0&&I===T?C[I][H]=v:C[I][H]=v.clone().lerp(E,H/U)}for(let I=0;I<T;I++)for(let v=0;v<2*(T-I)-1;v++){let E=Math.floor(v/2);v%2===0?(f(C[I][E+1]),f(C[I+1][E]),f(C[I][E])):(f(C[I][E+1]),f(C[I+1][E+1]),f(C[I+1][E]))}}function c(y){let _=new A;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(y),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){let y=new A;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let S=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],S=o[y+2],R=o[y+4],T=Math.max(_,S,R),C=Math.min(_,S,R);T>.9&&C<.1&&(_<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let S=y*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){let y=new A,_=new A,S=new A,R=new A,T=new it,C=new it,I=new it;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),T.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),R.copy(y).add(_).add(S).divideScalar(3);let U=m(R);x(T,E+0,y,U),x(C,E+2,_,U),x(I,E+4,S,U)}}function x(y,_,S,R){R<0&&y.x===1&&(o[_]=y.x-1),S.x===0&&S.z===0&&(o[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Wi=class s extends Ga{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ei=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+S,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],S=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(_,S,T),(p!==n-1||l<Math.PI)&&d.push(S,R,T)}this.setIndex(d),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hr=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ni=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Xi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wa=class extends Xi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=t,a=2*e-n;break;case cc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=t,l=2*n-e;break;case cc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+_*o[l+R]+S*o[u+R];return r}},Xa=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ya=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case gr:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&lg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=gr;var ii=class extends nn{};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=mr;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends nn{};qa.prototype.ValueTypeName="color";var Za=class extends nn{};Za.prototype.ValueTypeName="number";var $a=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Rs=class extends nn{InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.DefaultInterpolation=gr;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends nn{};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=mr;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends nn{};Ja.prototype.ValueTypeName="vector";var Ka=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},cg=new Ka,Qa=class{constructor(t){this.manager=t!==void 0?t:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var ca=new re,ih=new A,sh=new A,Vr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rh=new re,ms=new A,ha=new A,ja=class extends Vr{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}},Gr=class extends Ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ja}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tl=class extends Vr{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new tl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xr=class extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function oh(){return(typeof performance>"u"?Date:performance).now()}var ml="\\[\\]\\.:\\/",hg=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",ug="[^"+ml.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",gl),dg=/(WCOD+)?/.source.replace("WCOD",ug),pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),gg=new RegExp("^"+fg+dg+pg+mg+"$"),xg=["material","materials","bones","map"],el=class{constructor(t,e,n){let i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ie=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(t){let e=gg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ie.Composite=el;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);var $r=class extends Vi{constructor(t=null){super();let e=new Lt;e.deleteAttribute("uv");let n=new yt({side:Ce}),i=new yt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new Gr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new nt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new nt(e,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new nt(e,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new nt(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new nt(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new nt(e,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new nt(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new nt(e,Ji(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new nt(e,Ji(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new nt(e,Ji(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new nt(e,Ji(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new nt(e,Ji(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new nt(e,Ji(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ji(s){let t=new ne;return t.color.setScalar(s),t}var Is,Ds,qe;function Ch(){Is=new Vi,Is.background=new ft(328976),Is.fog=new Dr(328976,.025),Ds=new Ae(75,window.innerWidth/window.innerHeight,.1,2e4),Ds.position.set(0,5,10),qe=new ws({antialias:!0,powerPreference:"high-performance"}),qe.setSize(window.innerWidth,window.innerHeight),qe.setPixelRatio(window.devicePixelRatio),qe.shadowMap.enabled=!0,qe.shadowMap.type=il,qe.toneMapping=Ls,qe.toneMappingExposure=1,document.getElementById("app").appendChild(qe.domElement);let s=new Hi(qe);return Is.environment=s.fromScene(new $r(qe),.04).texture,window.addEventListener("resize",_g),{scene:Is,camera:Ds,renderer:qe}}function _g(){Ds.aspect=window.innerWidth/window.innerHeight,Ds.updateProjectionMatrix(),qe.setSize(window.innerWidth,window.innerHeight)}function Rh(s,t){let e=n=>{let i=s.tick(n);if(!i.first&&!i.skipped){let r=performance.now();t(i.dt),s.reportWork(performance.now()-r)}requestAnimationFrame(e)};requestAnimationFrame(e)}function ri(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ph(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Ph(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ph(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Ne(o,e,n);return i!==void 0&&(l.gpuType=i),l}var Jr=class{constructor(t=1337){this.seed=t>>>0||2654435769,this.state=this.seed}next(){let t=this.state;return t^=t<<13,t^=t>>>17,t^=t<<5,t>>>=0,this.state=t,t}float(){return this.next()/4294967296}int(t){return Math.floor(this.float()*t)}range(t,e){return t+this.float()*(e-t)}},_l=1337,Lh=new Jr(_l);function Ih(s){_l=s>>>0,Lh=new Jr(_l)}function Dh(){return Lh}function yl(s,t,e){return s[0]*t+s[1]*e}var yg=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],cn=null,Us=null;function vg(){if(cn)return;let s=[];for(let t=0;t<256;t++)s[t]=Dh().int(256);cn=new Array(512),Us=new Array(512);for(let t=0;t<512;t++)cn[t]=s[t&255],Us[t]=yg[cn[t]%12]}function Mg(s,t){vg();let e,n,i,r=.5*(Math.sqrt(3)-1),o=(s+t)*r,a=Math.floor(s+o),l=Math.floor(t+o),c=(3-Math.sqrt(3))/6,h=(a+l)*c,u=a-h,f=l-h,d=s-u,g=t-f,x,m;d>g?(x=1,m=0):(x=0,m=1);let p=d-x+c,y=g-m+c,_=d-1+2*c,S=g-1+2*c,R=a&255,T=l&255,C=.5-d*d-g*g;if(C<0)e=0;else{let E=cn[R+cn[T]]%12;C*=C,e=C*C*yl(Us[E],d,g)}let I=.5-p*p-y*y;if(I<0)n=0;else{let E=cn[R+x+cn[T+m]]%12;I*=I,n=I*I*yl(Us[E],p,y)}let v=.5-_*_-S*S;if(v<0)i=0;else{let E=cn[R+1+cn[T+1]]%12;v*=v,i=v*v*yl(Us[E],_,S)}return 70*(e+n+i)}var oi={noise2D:Mg};function Tt(s,t,e,n,i,r){let o=new Lt(s,t,e);return o.translate(n,i,r),o}var Sg=new Lt(1,1,1);function Sn(s,t,e){let n=[];for(let o of t)if(o&&o.pos)n.push(o);else if(o&&o.type==="BoxGeometry"){o.computeBoundingBox();let a=o.boundingBox;n.push({pos:[(a.min.x+a.max.x)/2,(a.min.y+a.max.y)/2,(a.min.z+a.max.z)/2],scale:[o.parameters.width,o.parameters.height,o.parameters.depth]})}if(n.length===0)return;let i=new Gi(Sg,e,n.length);i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let r=new de;for(let o=0;o<n.length;o++){let a=n[o];r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.scale.set(a.scale[0],a.scale[1],a.scale[2]),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}i.instanceMatrix.needsUpdate=!0,s.add(i)}var Nh=new yt({color:8947848,roughness:.9,metalness:.1}),bg=new yt({color:5592405,roughness:.9,metalness:.15}),Eg=new yt({color:11184810,roughness:.8,metalness:.05}),wg=new yt({color:9260604,roughness:.9}),Fh=new yt({color:2241348,roughness:.1,metalness:.9,envMapIntensity:1.5}),Tg=new yt({color:3359829,roughness:.2,metalness:.8}),Fs=new yt({color:5592405,roughness:.4,metalness:.8}),Ki=new yt({color:1118481,roughness:.7,metalness:.5}),Ag=new ne({color:65535}),kx=new ne({color:16711935}),Kr=new yt({color:2236962,roughness:.9}),Oh=new yt({color:5592405,roughness:.9}),Bh=new yt({color:3812902,roughness:1}),vl=new ne({color:16777215}),Cg=new yt({color:16777215,roughness:.9,transparent:!0,opacity:.8}),Rg=new ne({color:16777130}),kh=new ne({color:1118481,transparent:!0,opacity:0,depthWrite:!1}),Pg=new yt({color:5583633,roughness:.9,name:"trunkBrown"}),Lg=new yt({color:15658734,roughness:.8,name:"trunkWhite"}),Ig=new yt({color:5089079,roughness:.8,name:"leafGreen"}),Dg=new yt({color:2250018,roughness:.9,name:"leafDark"}),Ug=new yt({color:16755404,roughness:.8,name:"leafPink"}),Ng=new yt({color:14513954,roughness:.8,name:"leafOrange"}),Fg=new yt({color:14535714,roughness:.8,name:"leafYellow"}),zx=new yt({color:8947848,roughness:1}),Og=new yt({color:5980211,roughness:1}),Bg=new yt({color:6710886,roughness:.9,name:"trunkGrey"}),kg=new yt({color:1118481,roughness:.8,name:"trunkBlack"}),kn=new en(.2,.3,1,5);kn.translate(0,.5,0);var ai=new Wi(1,1),Ns=new zr(1,1,5);Ns.translate(0,.5,0);function zg(s,t,e,n,i,r,o){r==="modern"?Uh(s,t,e,n,i,o):r==="brick"?Vg(s,t,e,n,i,o):r==="glass"?Gg(s,t,e,n,i,o):r==="future"?Wg(s,t,e,n,i,o):Uh(s,t,e,n,i,o),Xg(s,t,e,n,i,o)}function Hg(s,t,e,n){n.dirt.push(Tt(1.5,.1,1.5,t,.1,e));let r=2.5+Math.random(),o=(a,l,c,h,u=0)=>{let f=a.clone();f.scale(h.x,h.y,h.z),f.rotateY(u),f.translate(t,c,e),n[l].push(f)};if(s===0)o(kn,"trunkBrown",0,new A(.3,r,.3)),o(ai,"leafGreen",r,new A(1.8,1.8,1.8));else if(s===1)o(kn,"trunkBrown",0,new A(.2,2,.2)),o(Ns,"leafDark",2,new A(2,1.5,2)),o(Ns,"leafDark",3.2,new A(1.5,1.5,1.5)),o(Ns,"leafDark",4.4,new A(.8,1.5,.8));else if(s===2)o(kn,"trunkWhite",0,new A(.2,4,.2)),o(ai,"leafGreen",4,new A(1.6,2,1.6));else if(s===3)o(kn,"trunkBrown",0,new A(.25,3,.25)),o(ai,"leafGreen",3,new A(2,2,2));else if(s===4)o(kn,"trunkBlack",0,new A(.25,4.5,.25)),o(Ns,"leafDark",3.5,new A(1.2,5,1.2));else if(s===5){o(kn,"trunkBrown",0,new A(.3,2.5,.3)),o(ai,"leafGreen",2.5,new A(2.5,1.5,2.5));let a=8;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=Math.sin(c)*1.5,u=Math.cos(c)*1.5;o(ai,"leafGreen",2,new A(.1,2,.1),0);let f=ai.clone();f.scale(.1,2.5,.1),f.translate(t+h,1.5,e+u),n.leafGreen.push(f)}}else o(kn,"trunkGrey",0,new A(.3,3,.3)),o(ai,"leafDark",3,new A(1.7,1.7,1.7))}function Uh(s,t,e,n,i,r){let o=Math.random(),a=r.concrete;o<.3?a=r.concreteDark:o>.7&&(a=r.concreteLight),a.push(Tt(e,n,i,s,n/2,t));let l=Math.floor(n/3.5),c=Math.floor(e/3),h=Math.floor(i/3),u=n/l,f=e/c,d=i/h;for(let g=0;g<c;g++)for(let x=1;x<l;x++){let m=s-e/2+f/2+g*f,p=x*u+u/2;r.glass.push(Tt(f*.7,u*.7,.2,m,p,t+i/2+.05)),r.glass.push(Tt(f*.7,u*.7,.2,m,p,t-i/2-.05))}for(let g=0;g<h;g++)for(let x=1;x<l;x++){let m=t-i/2+d/2+g*d,p=x*u+u/2;r.glass.push(Tt(.2,u*.7,d*.7,s+e/2+.05,p,m)),r.glass.push(Tt(.2,u*.7,d*.7,s-e/2-.05,p,m))}for(let g=0;g<=l;g++)(Math.random()>.5?a:r.darkMetal).push(Tt(e+.3,.4,i+.3,s,g*u,t));for(let g=0;g<=c;g++)a.push(Tt(.6,n,i-.5,s-e/2+g*f,n/2,t))}function Vg(s,t,e,n,i,r){r.brick.push(Tt(e,n,i,s,n/2,t));let o=3.2,a=Math.floor(n/o),l=1.8,c=2,h=3,u=Math.floor(e/h);for(let f=1;f<a;f++){let d=f*o+1;for(let g=0;g<u;g++){let x=-e/2+2+g*h;if(x>e/2-1)continue;let m=s+x;r.concrete.push(Tt(l+.2,c+.2,.2,m,d,t+i/2)),r.concrete.push(Tt(l+.2,c+.2,.2,m,d,t-i/2)),r.glass.push(Tt(l,c,.1,m,d,t+i/2+.1)),r.glass.push(Tt(l,c,.1,m,d,t-i/2-.1))}}for(let f=1;f<a;f++)r.darkMetal.push(Tt(3,.2,1,s,f*o,t+i/2+.8)),r.darkMetal.push(Tt(3,.1,.1,s,f*o+.5,t+i/2+1.3)),r.darkMetal.push(Tt(.6,o+.5,.1,s+1,f*o+o/2,t+i/2+1.2))}function Gg(s,t,e,n,i,r){r.glass.push(Tt(e,n,i,s,n/2,t));let o=Math.floor(e/2);for(let l=0;l<=o;l++){let c=-e/2+l*(e/o);r.metal.push(Tt(.1,n,i+.05,s+c,n/2,t))}let a=Math.floor(n/4);for(let l=0;l<a;l++)r.metal.push(Tt(e+.05,.2,i+.05,s,l*4,t))}function Wg(s,t,e,n,i,r){r.darkMetal.push(Tt(e,n,i,s,n/2,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.8,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.5,t)),r.neon.push(Tt(e+.1,.5,i+.1,s,n*.2,t)),r.metal.push(Tt(.5,10,.5,s,n+5,t)),r.neon.push(Tt(.2,2,.2,s,n+10,t))}function Xg(s,t,e,n,i,r){Math.random()>.3&&r.metal.push(Tt(2,1.5,2,s+2,n+.75,t+2)),Math.random()<.2&&(r.brick.push(Tt(2,2.5,2,s-2,n+1.25,t-2)),r.metal.push(Tt(1.8,.5,1.8,s-2,n+2.5,t-2))),r.concrete.push(Tt(e,.5,.2,s,n+.25,t+i/2-.1)),r.concrete.push(Tt(e,.5,.2,s,n+.25,t-i/2+.1)),r.concrete.push(Tt(.2,.5,i,s+e/2-.1,n+.25,t)),r.concrete.push(Tt(.2,.5,i,s-e/2+.1,n+.25,t))}function zh(s,t,e,n=24,i=0){let r=new he,o=[],a=[],l=[],c=i>0,h={concrete:[],concreteDark:[],concreteLight:[],brick:[],glass:[],metal:[],darkMetal:[],neon:[],windowLights:[],trunkBrown:[],trunkWhite:[],trunkGrey:[],trunkBlack:[],leafGreen:[],leafDark:[],leafPink:[],leafOrange:[],leafYellow:[],dirt:[],road:[],sidewalk:[],lane:[]};h.road.push(Tt(e,.1,e,s,-.05,t)),h.lane.push(Tt(e,.1,.5,s,.02,t)),h.lane.push(Tt(.5,.1,e,s,.02,t));let u=(e-n)/2,f=(n+u)/2,d=[{x:-f,z:-f},{x:f,z:-f},{x:f,z:f},{x:-f,z:f}];if(d.forEach((x,m)=>{let p=s+x.x,y=t+x.z;if(h.sidewalk.push(Tt(u,.2,u,p,.1,y)),c){let S=u-12;if(S>8){let R=20+Math.random()*40;h.concrete.push(Tt(S,R,S,p,R/2,y));let T=new qt;T.min.set(p-S/2,0,y-S/2),T.max.set(p+S/2,R,y+S/2),o.push(T)}}else if(oi.noise2D(p*.05,y*.05)>.55||s===0&&t===0&&m===0){let R=Yg(r,h,o,p,y,u);R&&a.push(R)}else if(Math.random()>.1){let T=u-12;if(T>8){let C=Math.random(),I="modern",v=20+Math.random()*40;C<.1?(I="future",v=300+Math.random()*200):C<.25?(I="glass",v=120+Math.random()*100):C<.45?(I="brick",v=15+Math.random()*25):C<.6?(I="glass",v=40+Math.random()*60):C<.7&&(I="future",v=50+Math.random()*50),zg(p,y,T,v,T,I,h),qg(h,p,y,T,v);let E=new qt;E.min.set(p-T/2,0,y-T/2),E.max.set(p+T/2,v,y+T/2),o.push(E)}}}),c||d.forEach(x=>{let m=s+x.x,p=t+x.z,_=u-12;if(u>8){let S=[0,1,2,3];for(let T=S.length-1;T>0;T--){let C=Math.floor(Math.random()*(T+1));[S[T],S[C]]=[S[C],S[T]]}let R=Math.floor(Math.random()*3);for(let T=0;T<R;T++){let C=Math.floor(Math.random()*6),I=(_/2+u/2)/2,v=S[T],E=(Math.random()-.5)*_*.6,U=m,H=p;v===0?(U+=I,H+=E):v===1?(U-=I,H+=E):v===2?(H+=I,U+=E):(H-=I,U+=E),Hg(C,U,H,h)}}}),!c){let x=n/2+1;[{x:-x,z:-x,r:Math.PI/4},{x,z:x,r:-3*Math.PI/4},{x:-x,z:x,r:3*Math.PI/4},{x,z:-x,r:-Math.PI/4}].forEach(p=>{h.darkMetal.push(Tt(.3,8,.3,s+p.x,4,t+p.z)),h.darkMetal.push(Tt(2,.2,.2,s+p.x+Math.sin(p.r),7.5,t+p.z+Math.cos(p.r))),l.push(Tt(.5,.2,.5,s+p.x+Math.sin(p.r)*1.5,7.4,t+p.z+Math.cos(p.r)*1.5))})}let g=(x,m)=>{if(x.length>0){let p=ri(x),y=new nt(p,m);y.castShadow=!0,y.receiveShadow=!0,r.add(y)}};if(Sn(r,h.concrete,Nh),Sn(r,h.concreteDark,bg),Sn(r,h.concreteLight,Eg),Sn(r,h.brick,wg),Sn(r,h.glass,Fh),Sn(r,h.metal,Fs),Sn(r,h.darkMetal,Ki),Sn(r,h.neon,Ag),Sn(r,h.windowLights,kh),g(h.trunkBrown,Pg),g(h.trunkWhite,Lg),g(h.trunkGrey,Bg),g(h.trunkBlack,kg),g(h.leafGreen,Ig),g(h.leafDark,Dg),g(h.leafPink,Ug),g(h.leafOrange,Ng),g(h.leafYellow,Fg),g(h.dirt,Og),g(h.road,Kr),g(h.sidewalk,Oh),g(h.lane,vl),l.length>0){let x=ri(l),m=new nt(x,Rg);r.add(m)}return{mesh:r,colliders:o,lodLevel:i,construction:a}}function Hh(s,t,e,n,i="x"){let r=new he,o=[],a=new nt(new ln(e,e),Bh);a.rotation.x=-Math.PI/2,a.position.set(s,-.5,t),a.receiveShadow=!0,r.add(a);let l=i==="x"||i==="cross",c=i==="z"||i==="cross";if(l){let h=new nt(new ln(e,n),Kr);h.rotation.x=-Math.PI/2,h.position.set(s,0,t),h.receiveShadow=!0,r.add(h);let u=new nt(new ln(e,.5),vl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}if(c){let h=new nt(new ln(n,e),Kr);h.rotation.x=-Math.PI/2,h.position.set(s,.01,t),h.receiveShadow=!0,r.add(h);let u=new nt(new ln(.5,e),vl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}return{mesh:r,colliders:o}}function Vh(s,t,e){let n=new he,i=[],r=new nt(new ln(e,e),Bh);return r.rotation.x=-Math.PI/2,r.position.set(s,-.5,t),r.receiveShadow=!0,n.add(r),{mesh:n,colliders:i}}function Yg(s,t,e,n,i,r){let o=r/2,a=5+Math.random()*4;t.concrete.push(Tt(a*.9,a,a*.9,n,a/2,i));let l=a+3,c=o*.8;t.darkMetal.push(Tt(.15,l,.15,n-c,l/2,i-c)),t.darkMetal.push(Tt(.15,l,.15,n+c,l/2,i-c)),t.darkMetal.push(Tt(.15,l,.15,n+c,l/2,i+c)),t.darkMetal.push(Tt(.15,l,.15,n-c,l/2,i+c)),e.push(new qt().set(new A(n-o,0,i-o),new A(n+o,a,i+o)));let h=34,u=o*1.6,f=n-o*.5,d=i-o*.5,g=new nt(new Lt(.35,h,.35),Ki);g.position.set(f,h/2,d);let x=new de;x.position.set(f,h,d);let m=new nt(new Lt(u,.25,.25),Fs);m.position.set(u/2,0,0);let p=new nt(new Lt(u*.35,.25,.25),Fs);p.position.set(-u*.35/2,0,0);let y=new nt(new Lt(.5,.5,.5),Ki);y.position.set(0,.4,0);let _=new nt(new Lt(.5,.5,.5),Ki);_.position.set(-u*.35,.1,0);let S=new nt(new Lt(.4,.35,.4),Fs),R=new nt(new Lt(.05,1,.05),Ki);return R.position.set(0,-1.5,0),x.add(m),x.add(p),x.add(y),x.add(_),x.add(R),x.add(S),s.add(g),s.add(x),{pivot:x,hook:S,cable:R,jibLen:u,phase:0,cx:n,cz:i}}function qg(s,t,e,n,i){if(n<=0||i<=0)return;let r=Math.max(3,Math.floor(n/3)),o=Math.max(2,Math.floor(i/3.5)),a=n/r,l=i/o,c=t<0?1:-1,h=e<0?1:-1,u=(g,x,m)=>oi.noise2D(g*.27+x*.11,m*.17)>.25,f=t+c*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=e-n/2+a/2+m*a;u(f,p,x)&&s.windowLights.push(Tt(a*.45,l*.55,.2,f,x,p))}}let d=e+h*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=t-n/2+a/2+m*a;u(p,d,x)&&s.windowLights.push(Tt(a*.45,l*.55,.2,p,x,d))}}}async function Gh(s){let t=new Xr(2236979,.3);s.add(t);let e=new Wr(11193599,.5);return e.position.set(50,500,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-200,e.shadow.camera.right=200,e.shadow.camera.top=200,e.shadow.camera.bottom=-200,s.add(e),{roadWidth:26,blockSize:70,citySize:1e3,directionalLight:e,ambientLight:t,materials:{road:Kr,sidewalk:Oh,building:Nh,glassModern:Fh,glassOffice:Tg,metal:Fs,darkMetal:Ki,cloud:Cg,window:kh}}}var Qi=new Bi(0,0,0,"YXZ"),ji=new A,Zg={type:"change"},$g={type:"lock"},Jg={type:"unlock"},Wh=Math.PI/2,Qr=class extends an{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Kg.bind(this),this._onPointerlockChange=Qg.bind(this),this._onPointerlockError=jg.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){let e=this.camera;ji.setFromMatrixColumn(e.matrix,0),ji.crossVectors(e.up,ji),e.position.addScaledVector(ji,t)}moveRight(t){let e=this.camera;ji.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(ji,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function Kg(s){if(this.isLocked===!1)return;let t=s.movementX||s.mozMovementX||s.webkitMovementX||0,e=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;Qi.setFromQuaternion(n.quaternion),Qi.y-=t*.002*this.pointerSpeed,Qi.x-=e*.002*this.pointerSpeed,Qi.x=Math.max(Wh-this.maxPolarAngle,Math.min(Wh-this.minPolarAngle,Qi.x)),n.quaternion.setFromEuler(Qi),this.dispatchEvent(Zg)}function Qg(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent($g),this.isLocked=!0):(this.dispatchEvent(Jg),this.isLocked=!1)}function jg(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function jr(s,t,e=1,n=.5){if(!s.geometry)return;let i=s.geometry.attributes.position,r=new A,o=t.clone();s.worldToLocal(o);let a=!1;for(let l=0;l<i.count;l++){r.fromBufferAttribute(i,l);let c=r.distanceTo(o);if(c<e){let h=new A(0,0,0),u=n*(1-c/e)*.8;r.lerp(h,u);let f=.5;r.x+=(Math.random()-.5)*n*f,r.y+=(Math.random()-.5)*n*f,r.z+=(Math.random()-.5)*n*f,i.setXYZ(l,r.x,r.y,r.z),a=!0}}a&&(i.needsUpdate=!0,s.geometry.computeVertexNormals())}var to=class{constructor(t,e,n=[],i=null,r=null,o=null,a=null){this.camera=t,this.domElement=e,this.colliders=n,this.trafficSystem=i,this.parkingSystem=r,this.effectSystem=o,this.weatherSystem=a,this.controls=new Qr(t,e),this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.canJump=!1,this.isDriving=!1,this.currentCar=null,this.carVelocity=0,this.currentCar=null,this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.shakeIntensity=0,this.velocity=new A,this.direction=new A,this.init()}init(){let t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.background="rgba(0,0,0,0.8)",t.style.zIndex="1000",t.style.cursor="pointer",t.style.color="#ffffff",t.style.fontSize="24px",t.style.fontFamily="sans-serif",t.style.flexDirection="column",t.style.textAlign="center",t.innerHTML=`
            <h1>Worldloop</h1>
            <p style="font-size: 18px; margin-top: 20px;">
                WASD = Move | Mouse = Look<br>
                ENTER = Enter/Exit Car<br>
                1, 2, 3 = Change Weather
            </p>
        `,document.body.appendChild(t);let e=document.createElement("div");e.style.position="absolute",e.style.bottom="10px",e.style.left="10px",e.style.color="#00ff00",e.style.fontFamily="monospace",e.style.fontWeight="bold",e.style.fontSize="16px",e.innerHTML="STATUS: WAITING FOR CLICK",document.body.appendChild(e);let n=r=>{e.innerHTML=r,console.log(r)};if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){t.innerHTML="Pointer Lock not supported in this browser",t.style.color="red";return}let i=()=>{n("ATTEMPTING LOCK..."),this.controls.lock()};t.addEventListener("click",()=>{i()}),this.controls.addEventListener("lock",()=>{t.style.display="none",n("LOCKED - USE WASD")}),this.controls.addEventListener("unlock",()=>{t.style.display="flex",n("UNLOCKED - CLICK TO PLAY")}),document.addEventListener("keydown",r=>{this.controls.isLocked&&n(`KEY: ${r.code}`),r.code==="Enter"&&i(),this.onKeyDown(r)}),document.addEventListener("keyup",r=>this.onKeyUp(r))}onKeyDown(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyE":this.isDriving?this.exitCar():this.tryEnterCar();break;case"Space":this.canJump===!0&&(this.velocity.y+=20),this.canJump=!1;break}}onKeyUp(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}}update(t){if(this.controls.isLocked===!0){if(this.isDriving&&this.currentCar){this.updateCarPhysics(t);return}this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.velocity.y-=9.8*5*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*150*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*150*t);let e=-this.velocity.x*t,n=-this.velocity.z*t;this.controls.moveRight(e),this.checkCollision()&&(this.controls.moveRight(-e),this.velocity.x=0),this.controls.moveForward(n),this.checkCollision()&&(this.controls.moveForward(-n),this.velocity.z=0),this.camera.position.y+=this.velocity.y*t,this.camera.position.y<2&&(this.velocity.y=0,this.camera.position.y=2,this.canJump=!0)}}tryEnterCar(){let t=this.camera.position,e=null,n=5;if(this.trafficSystem)for(let i of this.trafficSystem.cars){let r=t.distanceTo(i.mesh.position);r<n&&(n=r,e=i)}if(this.parkingSystem)for(let i of this.parkingSystem.cars){let r=t.distanceTo(i.position);r<n&&(n=r,e={mesh:i,isParked:!0})}e&&this.enterCar(e)}enterCar(t){if(this.isDriving=!0,this.currentCar=t,t.isPlayerDriven=!0,t.mesh&&(t.mesh.isPlayerDriven=!0),t.isParked){let e=new qt().setFromObject(t.mesh),n=this.colliders.findIndex(i=>i.intersectsBox(e)&&i.containsBox(e));n!==-1&&this.colliders.splice(n,1)}this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.currentCar.mesh.userData.health===void 0&&(this.currentCar.mesh.userData.health=100),console.log("Entered car. Health:",this.currentCar.mesh.userData.health),console.log("Entered car")}exitCar(){if(!this.currentCar)return;if(this.currentCar.isPlayerDriven=!1,this.currentCar.mesh&&(this.currentCar.mesh.isPlayerDriven=!1),this.isDriving=!1,this.currentCar.isParked){let h=new qt().setFromObject(this.currentCar.mesh);this.colliders.push(h)}let t=this.currentCar.mesh.rotation.clone();this.currentCar.mesh.rotation.set(0,0,0),this.currentCar.mesh.updateMatrixWorld();let e=new qt().setFromObject(this.currentCar.mesh),n=new A;e.getSize(n),this.currentCar.mesh.rotation.copy(t),this.currentCar.mesh.updateMatrixWorld();let i=1,r=n.x/2+i,o=n.z/2+i+1,a=[new A(r,0,0),new A(-r,0,0),new A(0,0,-o),new A(0,0,o)],l=null,c=this.camera.position.clone();for(let h of a){h.applyEuler(this.currentCar.mesh.rotation);let u=this.currentCar.mesh.position.clone().add(h);if(u.y=2,this.camera.position.copy(u),!this.checkCollision()){l=u;break}}l?this.camera.position.copy(l):(console.warn("No safe exit found on ground, spawning on top."),this.camera.position.copy(this.currentCar.mesh.position),this.camera.position.y=5),this.currentCar=null,console.log("Exited car")}updateCarPhysics(t){if(!this.currentCar)return;let e=this.getCarStats(this.currentCar.mesh.userData.type||"sedan"),n=this.getDrivingModifiers(),i=e.maxSpeed*n.maxSpeedScale,r=e.acceleration*n.accelerationScale,o=n.friction,a=2;Math.abs(this.spinVelocity)>.1&&(this.currentCar.mesh.rotation.y+=this.spinVelocity*t,this.spinVelocity*=.95,Math.abs(this.spinVelocity)>2&&(this.carVelocity*=.98));let l=this.currentCar.mesh.userData.health;l<=0?(this.carVelocity*=.95,this.effectSystem&&(this.effectSystem.addEmitter(this.currentCar.mesh,"fire"),this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"))):l<20?this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"fire"):l<50&&this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"),this.shakeIntensity>0&&(this.shakeIntensity-=5*t,this.shakeIntensity<0&&(this.shakeIntensity=0)),Math.abs(this.spinVelocity)<5&&l>0&&(this.moveForward?this.carVelocity+=r*t:this.moveBackward?this.carVelocity-=r*t:(this.carVelocity>0&&(this.carVelocity-=o*t),this.carVelocity<0&&(this.carVelocity+=o*t),Math.abs(this.carVelocity)<.1&&(this.carVelocity=0))),this.carVelocity=Math.max(-i/2,Math.min(i,this.carVelocity)),Math.abs(this.carVelocity)>.1&&Math.abs(this.spinVelocity)<5&&(this.moveLeft&&(this.currentCar.mesh.rotation.y+=a*t*Math.sign(this.carVelocity)),this.moveRight&&(this.currentCar.mesh.rotation.y-=a*t*Math.sign(this.carVelocity)));let c=new A(0,0,1);if(c.applyEuler(this.currentCar.mesh.rotation),this.currentCar.mesh.position.add(c.multiplyScalar(this.carVelocity*t)),this.checkCarCollision()){this.currentCar.mesh.position.add(c.multiplyScalar(-this.carVelocity*t));let d=Math.abs(this.carVelocity),g=Math.min(d/40,1);if(this.effectSystem&&d>5){let x=this.currentCar.mesh.position.clone().add(c.multiplyScalar(2));this.effectSystem.createCrashEffect(x),this.currentCar.mesh.children.forEach(p=>{jr(p,x,1.5,g*.5)});let m=d*.5;this.currentCar.mesh.userData.health-=m,console.log(`Crash! Speed: ${d.toFixed(1)}, Damage: ${m.toFixed(1)}, Health: ${this.currentCar.mesh.userData.health.toFixed(1)}`),d>10?(this.spinVelocity=(Math.random()-.5)*20*g,this.shakeIntensity=1*g,this.carVelocity=-this.carVelocity*.5):this.carVelocity=0}else this.carVelocity=0,this.shakeIntensity=.2}let u=new A(0,5,-10);u.applyEuler(this.currentCar.mesh.rotation),this.shakeIntensity>0&&(u.x+=(Math.random()-.5)*this.shakeIntensity,u.y+=(Math.random()-.5)*this.shakeIntensity,u.z+=(Math.random()-.5)*this.shakeIntensity);let f=this.currentCar.mesh.position.clone().add(u);this.camera.position.lerp(f,5*t),this.camera.lookAt(this.currentCar.mesh.position)}checkCarCollision(){if(!this.currentCar)return!1;this.currentCar.mesh.updateMatrixWorld();let t;if(this.currentCar.mesh.userData.localBox?t=this.currentCar.mesh.userData.localBox.clone().applyMatrix4(this.currentCar.mesh.matrixWorld):t=new qt().setFromObject(this.currentCar.mesh),this.colliders){for(let e of this.colliders)if(t.intersectsBox(e))return!0}if(this.trafficSystem)for(let e of this.trafficSystem.cars){if(e===this.currentCar)continue;let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i;if(e.mesh.userData.localBox?i=e.mesh.userData.localBox.clone().applyMatrix4(e.mesh.matrixWorld):i=new qt().setFromObject(e.mesh),t.intersectsBox(i)||n<3.5){console.log("HIT TRAFFIC! (Dist: "+n.toFixed(2)+")");let r=this.getImpactPoint(this.currentCar.mesh,e.mesh);return this.applyCrashDamage(this.currentCar.mesh,e.mesh,r,e),e.velocity&&(this.applyCrashPhysics(this.currentCar.mesh,e,r,e.mesh.position),e.stunned=2),{hit:!0,point:r,object:e}}}if(this.pedestrianSystem&&this.pedestrianSystem.peds)for(let e of this.pedestrianSystem.peds){let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i=new qt().setFromObject(e.mesh);if((t.intersectsBox(i)||n<1)&&e.state!=="RAGDOLL"){e.state="RAGDOLL",e.ragdollTimer=4;let r=new A(0,0,1).applyEuler(this.currentCar.mesh.rotation),o=Math.abs(this.carVelocity)||20;return e.velocity.copy(r).multiplyScalar(o*.8+5),e.velocity.y+=6,this.effectSystem&&this.effectSystem.createCrashEffect(e.mesh.position),{hit:!0,point:e.mesh.position.clone(),object:e}}}if(this.parkingSystem)for(let e of this.parkingSystem.cars){if(this.currentCar.mesh===e)continue;let n=e.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.updateMatrixWorld();let i;if(e.userData.localBox?i=e.userData.localBox.clone().applyMatrix4(e.matrixWorld):i=new qt().setFromObject(e),t.intersectsBox(i)||n<3.5){console.log("HIT PARKED! (Dist: "+n.toFixed(2)+")"),e.userData.velocity||(e.userData.velocity=new A,e.userData.angularVelocity=0);let r=this.getImpactPoint(this.currentCar.mesh,e);return this.applyCrashDamage(this.currentCar.mesh,e,r,e.userData),this.applyCrashPhysics(this.currentCar.mesh,e.userData,r,e.position),{hit:!0,point:r,object:e}}}return!1}getImpactPoint(t,e){let n=t.position,i=e.position,r=new A().lerpVectors(n,i,.5);return r.y=.5,r}applyCrashDamage(t,e,n,i){t.children.forEach(l=>{l.isMesh&&jr(l,n,2,1)}),e.children.forEach(l=>{l.isMesh&&(l.userData.isUnique||(l.geometry=l.geometry.clone(),l.userData.isUnique=!0),jr(l,n,2,1))}),this.effectSystem&&this.effectSystem.createCrashEffect(n),(Math.abs(this.carVelocity)||20)>25&&this.emergencySystem&&this.emergencySystem.respond(n.x,n.z);let a=(Math.abs(this.carVelocity)||20)*1.5;t.userData.health!==void 0&&(t.userData.health-=a),i.health!==void 0&&(i.health-=a,e&&e.traverse(c=>{c.isMesh&&c.material&&c.material.color&&(c.userData.isUniqueMat||(c.material=c.material.clone(),c.userData.isUniqueMat=!0),c.material.color.multiplyScalar(.5))}),i.health<60&&this.effectSystem&&this.effectSystem.createSmokeEffect({mesh:e}),i.health<=0&&(this.effectSystem&&this.effectSystem.createFireEffect({mesh:e}),i.stunned!==void 0&&(i.stunned=999)))}getMass(t){switch(t){case"truck":return 4e3;case"suv":return 2500;case"sedan":return 1600;case"sport":return 1200;default:return 1500}}applyCrashPhysics(t,e,n,i){console.warn("APPLYING PHYSICS to",e);let r=this.getMass("player"),o=this.getMass(e.type||"sedan"),a=new A(0,0,1).applyEuler(t.rotation);a.y=0,a.normalize();let l=Math.max(Math.abs(this.carVelocity),8),c=r/o,h=l*c*1.2,u=a.multiplyScalar(h);if(e.velocity.add(u),l>30){let p=(l-30)*.02;e.velocity.y+=Math.min(p,1),e.velocity.y+=Math.random()*.1}else e.velocity.y=0;let f=new A().subVectors(n,i),d=new A().crossVectors(f,u),g=o*.001,x=d.y/g;x=Zi.clamp(x,-6,6),e.angularVelocity=x;let m=o/(r+o);this.carVelocity*=1-m*.8,this.shakeIntensity=Math.min(h*.5,3)}checkCollision(){if(!this.colliders)return!1;let t=new qt,e=this.camera.position.clone();t.min.set(e.x-.2,e.y-.5,e.z-.2),t.max.set(e.x+.2,e.y+.5,e.z+.2);for(let n of this.colliders)if(t.intersectsBox(n))return!0;if(this.trafficSystem){let n=new qt;for(let i of this.trafficSystem.cars)if(i.mesh.userData.localBox?n.copy(i.mesh.userData.localBox).applyMatrix4(i.mesh.matrixWorld):n.setFromObject(i.mesh),n.expandByScalar(.2),t.intersectsBox(n))return!0}return!1}getDrivingModifiers(){let t=1,e=1,n=1,i=this.weatherSystem?this.weatherSystem.currentWeather:"sunny";return i==="rain"?(t=.6,e=.8,n=.85):i==="snow"&&(t=.35,e=.6,n=.7),{weather:i,grip:t,friction:10*t,maxSpeedScale:e,accelerationScale:n}}getCarStats(t){switch(t){case"sport":return{maxSpeed:60,acceleration:40};case"taxi":return{maxSpeed:55,acceleration:40};case"sedan":return{maxSpeed:45,acceleration:30};case"suv":return{maxSpeed:40,acceleration:25};case"truck":return{maxSpeed:35,acceleration:20};case"bus":return{maxSpeed:30,acceleration:15};default:return{maxSpeed:45,acceleration:30}}}};var tx=new yt({roughness:.2,metalness:.7,envMapIntensity:1}),ex=new yt({color:1122867,roughness:.1,metalness:.9,envMapIntensity:1}),nx=new yt({color:1118481,roughness:.9,metalness:.1}),ix=new yt({color:13421772,roughness:.2,metalness:.8}),sx=new yt({color:16777215,roughness:.2,metalness:.9}),rx=new yt({color:1118481,roughness:.8}),ox=new yt({color:16777215,emissive:16772778,emissiveIntensity:2}),ax=new yt({color:5570560,emissive:16711680,emissiveIntensity:2});function ts(s="sedan",t=null){let e=new he;e.userData.type=s,t||(t=dx(s));let n=tx.clone();n.color.set(t);let i={paint:[],glass:[],rubber:[],rim:[],chrome:[],plastic:[],lightFront:[],lightRear:[]};s==="sedan"?Xh(i):s==="suv"?cx(i):s==="sport"?hx(i):s==="truck"?ux(i):s==="taxi"?lx(i):s==="bus"?fx(i):s==="ambulance"?px(i):s==="fire"?mx(i):s==="police"?gx(i):Xh(i);let r=(o,a)=>{if(o.length>0){let l=ri(o),c=new nt(l,a);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}};return r(i.paint,n),r(i.glass,ex),r(i.rubber,nx),r(i.rim,ix),r(i.chrome,sx),r(i.plastic,rx),r(i.lightFront,ox),r(i.lightRear,ax),e.userData.localBox||(e.userData.localBox=new qt().setFromObject(e)),e.castShadow=!0,e.receiveShadow=!0,e}function et(s,t,e,n,i,r,o=0,a=0,l=0){let c=new Lt(s,t,e);return(o||a||l)&&c.rotateX(o).rotateY(a).rotateZ(l),c.translate(n,i,r),c}function Ml(s,t,e,n,i,r,o,a=0,l=0,c=0){let h=new en(s,t,e,n);return(a||l||c)&&h.rotateX(a).rotateY(l).rotateZ(c),h.translate(i,r,o),h}function eo(s,t,e,n,i,r,o){s.glass.push(et(t+.05,e,n+.05,i,r,o))}function bn(s,t,e,n=.35){let r=t/2-.1,o=e/2,a=n,l=(c,h,u)=>{s.rubber.push(Ml(n,n,.25,24,c,h,u,0,0,Math.PI/2)),s.rim.push(Ml(n*.6,n*.6,.25+.02,12,c,h,u,0,0,Math.PI/2))};l(-r,a,o),l(r,a,o),l(-r,a,-o),l(r,a,-o)}function Xh(s){s.paint.push(et(1.9,.55,4.7-.4,0,.35+.55/2,0)),s.plastic.push(et(1.9,.35,.3,0,.35+.2,4.7/2-.15)),s.plastic.push(et(1.9,.35,.3,0,.35+.2,-4.7/2+.15)),s.plastic.push(et(1,.25,.1,0,.35+.35,4.7/2)),s.lightFront.push(et(.35,.15,.2,-.6,.35+.45,4.7/2-.1)),s.lightFront.push(et(.35,.15,.2,.6,.35+.45,4.7/2-.1)),s.lightRear.push(et(.35,.2,.1,-.6,.35+.45,-4.7/2+.05)),s.lightRear.push(et(.35,.2,.1,.6,.35+.45,-4.7/2+.05)),s.paint.push(et(1.9-.2,.5,4.7*.4,0,.35+.55+.5/2-.05,-.2)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.7*.22-.2,-.3,0,0)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.7*.4-.2,.25,0,0)),eo(s,1.9-.15,.5-.15,4.7*.3,0,.35+.55+.5/2-.05,-.2),s.paint.push(et(.2,.12,.1,-1.9/2-.05,.35+.55+.1,.5)),s.paint.push(et(.2,.12,.1,1.9/2+.05,.35+.55+.1,.5)),bn(s,1.9,2.8,.35)}function lx(s){s.paint.push(et(1.9,.55,4.8-.5,0,.35+.55/2,0)),s.plastic.push(et(1.9,.3,.4,0,.35+.2,4.8/2-.2)),s.plastic.push(et(1.9,.3,.4,0,.35+.2,-4.8/2+.4)),s.plastic.push(et(.8,.2,.1,0,.35+.4,4.8/2)),s.lightFront.push(et(.3,.15,.1,-.6,.35+.45,4.8/2)),s.lightFront.push(et(.3,.15,.1,.6,.35+.45,4.8/2)),s.lightRear.push(et(.3,.15,.1,-.6,.35+.45,-4.8/2+.2)),s.lightRear.push(et(.3,.15,.1,.6,.35+.45,-4.8/2+.2)),s.paint.push(et(1.9-.2,.5,4.8*.45,0,.35+.55+.5/2-.05,-.1)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.8*.22,-.2,0,0)),s.glass.push(et(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.8*.35,.2,0,0)),eo(s,1.9-.15,.5-.15,4.8*.35,0,.35+.55+.5/2-.05,-.1),s.plastic.push(et(.1,.05,1,0,.35+.55+.5,-.1)),s.lightFront.push(et(.6,.2,.25,0,.35+.55+.5+.15,-.1)),bn(s,1.9,2.9,.35)}function cx(s){s.paint.push(et(2.1,.65,4.9-.2,0,.42+.65/2,0)),s.plastic.push(et(2.1,.4,.35,0,.42+.25,4.9/2-.1)),s.plastic.push(et(2.1,.4,.35,0,.42+.25,-4.9/2+.1)),s.chrome.push(et(1.2,.3,.1,0,.42+.3,4.9/2+.1)),s.plastic.push(et(1,.4,.1,0,.42+.5,4.9/2)),s.lightFront.push(et(.35,.25,.1,-.7,.42+.6,4.9/2)),s.lightFront.push(et(.35,.25,.1,.7,.42+.6,4.9/2)),s.lightRear.push(et(.2,.5,.1,-.7,.42+.6,-4.9/2+.05)),s.lightRear.push(et(.2,.5,.1,.7,.42+.6,-4.9/2+.05)),s.paint.push(et(2.1-.1,.6,4.9*.55,0,.42+.65+.6/2-.05,.1)),s.glass.push(et(2.1-.15,.6-.1,.1,0,.42+.65+.25,4.9*.27,-.2,0,0)),s.glass.push(et(2.1-.15,.6-.1,.1,0,.42+.65+.25,-4.9*.27+.1,0,0,0)),eo(s,2.1-.05,.6-.15,4.9*.45,0,.42+.65+.6/2-.05,.1),s.chrome.push(et(.1,.1,4.9*.5,-2.1/2+.3,.42+.65+.6,.1)),s.chrome.push(et(.1,.1,4.9*.5,2.1/2-.3,.42+.65+.6,.1)),s.rubber.push(Ml(.35,.35,.25,16,0,.42+.65+.1,-4.9/2-.1,Math.PI/2,0,0)),bn(s,2.1+.1,2.9,.45)}function hx(s){s.paint.push(et(2-.2,.45,4.6*.8,0,.35+.45/2,0)),s.paint.push(et(.4,.45+.15,1.4,2/2-.2,.35+.45/2+.05,-1.2)),s.paint.push(et(.4,.45+.15,1.4,-2/2+.2,.35+.45/2+.05,-1.2)),s.paint.push(et(2,.45-.1,1.2,0,.35+.2,1.8,.1,0,0)),s.plastic.push(et(2+.1,.05,.5,0,.35+.1,2.2)),s.paint.push(et(2-.5,.45,4.6*.35,0,.35+.45+.45/2-.05,.1)),s.glass.push(et(2-.55,.45-.1,1.2,0,.35+.45+.45/2-.05,.3,-.3,0,0));let o=.35+.45+.6;s.paint.push(et(2+.2,.05,.4,0,o,-4.6/2+.2)),s.plastic.push(et(.05,.4,.2,-.5,o-.2,-4.6/2+.3)),s.plastic.push(et(.05,.4,.2,.5,o-.2,-4.6/2+.3)),bn(s,2+.1,2.7,.38)}function ux(s){s.plastic.push(et(2.4-.4,.6,5.8,0,.5+.6/2,0));let r=1.3,o=2.2;s.paint.push(et(2.4,r,o,0,.5+.6+r/2-.1,5.8/2-o/2-.2)),s.glass.push(et(2.4-.1,.7,.1,0,.5+.6+.8,5.8/2-.15,-.15,0,0)),s.glass.push(et(2.4-.4,.5,.1,0,.5+.6+.9,5.8/2-o-.25)),eo(s,2.4+.05,.6,o-.6,0,.5+.6+r/2-.1,5.8/2-o/2-.2);let a=2.6,l=.8;s.paint.push(et(.2,l,a,-2.4/2+.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(et(.2,l,a,2.4/2-.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(et(2.4-.4,.1,a,0,.5+.6+.4,-5.8/2+a/2+.4)),s.paint.push(et(2.4,l,.15,0,.5+.6+l/2,-5.8/2+.4)),s.chrome.push(et(1.4,.6,.1,0,.5+.8,5.8/2)),s.lightFront.push(et(.3,.4,.1,-.9,.5+.8,5.8/2)),s.lightFront.push(et(.3,.4,.1,.9,.5+.8,5.8/2)),bn(s,2.4+.2,3.8,.6)}function fx(s){s.paint.push(et(2.6,2.3,9,0,.5+.5+2.3/2-.2,0)),s.plastic.push(et(2.6-.4,.4,3,0,.5+.5+2.3+.1,-1)),s.glass.push(et(.1,1.2,9-1.5,-2.6/2-.05,.5+2,0)),s.glass.push(et(.1,1.2,9-1.5,2.6/2+.05,.5+2,0)),s.glass.push(et(2.6-.2,1.4,.1,0,.5+1.8,9/2+.05,-.05,0,0)),s.lightFront.push(et(.25,.25,.1,-2.6/2+.4,.5+.8,9/2+.05)),s.lightFront.push(et(.25,.25,.1,2.6/2-.4,.5+.8,9/2+.05)),bn(s,2.6-.3,5.5,.55)}function dx(s){if(s==="taxi")return 16763904;if(s==="bus")return Math.random()<.5?3368652:13382451;if(s==="truck")return 8934707;if(s==="ambulance")return 15921906;if(s==="fire")return 13378082;if(s==="police")return 1710638;let t=[1118481,15658734,8947848,13369344,13260,2250018,5570560];return t[Math.floor(Math.random()*t.length)]}function px(s){s.paint.push(et(2.1,1.6,5.6,0,.5+.5+1.6/2-.15,0)),s.glass.push(et(2.1-.15,.9,.15,0,.5+1.1,5.6/2-.4,-.2,0,0)),s.glass.push(et(.1,.7,5.6-3.4,-2.1/2-.05,.5+1.4,-.6)),s.glass.push(et(.1,.7,5.6-3.4,2.1/2+.05,.5+1.4,-.6)),s.plastic.push(et(.6,.18,.6,0,.5+1.6+.4,-.4)),bn(s,2.1,3.6,.55)}function mx(s){s.paint.push(et(2.6,1.4,2.2,0,.6+.7+.6,7/2-1.1-.2)),s.glass.push(et(2.6-.1,.6,.15,0,.6+1.4,7/2-.5,-.15,0,0)),s.paint.push(et(2.6,2,3.2,0,.6+.7+1,-.4)),s.plastic.push(et(.25,.9,3.2,-2.6/2+.15,.6+1.4,-.4)),s.chrome.push(et(.4,.4,2.6,0,.6+1.8,-7/2+1.6)),bn(s,2.6-.2,5,.6)}function gx(s){s.paint.push(et(2,.55,5-.4,0,.5+.55/2,0)),s.paint.push(et(2-.25,.5,5*.4,0,.5+.55+.25,.1)),s.glass.push(et(2-.3,.4,.1,0,.5+.8,5*.22,-.25,0,0)),s.glass.push(et(2-.3,.4,.1,0,.5+.8,-5*.38,.25,0,0)),bn(s,2,3,.35)}function Yh(s){s&&s.traverse(t=>{t.isMesh&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&(t.material.userData.isShared||t.material.dispose()))})}function qh(){let s=Math.random();return s<.4?"ambulance":s<.7?"fire":"police"}function no(){let s=Math.random();return s<.3?"sedan":s<.45?"taxi":s<.75?"suv":s<.85?"truck":s<.95?"bus":"sport"}var io=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.roadGraph=null,this.carPool={sedan:[],taxi:[],suv:[],truck:[],bus:[],sport:[]}}getSpeedForType(t){switch(t){case"sport":return 16;case"taxi":return 13;case"sedan":return 11;case"suv":return 9;case"truck":return 6;case"bus":return 5;default:return 8}}getCarFromPool(t){if(this.carPool[t]&&this.carPool[t].length>0){let e=this.carPool[t].pop();return e.visible=!0,e}return ts(t)}returnCarToPool(t,e){t&&(t.visible=!1,this.scene.remove(t),this.carPool[e]||(this.carPool[e]=[]),this.carPool[e].push(t))}loadChunk(t,e,n="city"){let i=[],o=this.blockSize+this.roadWidth,a=t*o,l=e*o,c=["x","z"];n==="highway_x"&&(c=["x"]),n==="highway_z"&&(c=["z"]);for(let h=0;h<3;h++){let u=no(),f=this.getCarFromPool(u);f.userData.localBox||(f.userData.localBox=new qt().setFromObject(f));let d=this.spawnCarInChunk(f,a,l,o,i,c);if(d){let g=Math.abs(d.pos.x-a)<=7&&Math.abs(d.pos.z-l)<=7;if(n.startsWith("highway")||!g){this.scene.add(f);let m=this.getSpeedForType(u);i.push({mesh:f,axis:d.axis,direction:d.direction,speed:m,type:u,velocity:new A,angularVelocity:0,stunned:0,health:100,chunkX:a,chunkZ:l,chunkSize:o,cx:t,cz:e,lastNodeKey:null})}else this.returnCarToPool(f,u)}else this.returnCarToPool(f,u)}this.chunkCars.set(`${t},${e}`,i),i.forEach(h=>this.cars.push(h))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.returnCarToPool(r.mesh,r.type);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}spawnCarInChunk(t,e,n,i,r=[],o=["x","z"]){for(let c=0;c<10;c++){let h=o[Math.floor(Math.random()*o.length)],u=Math.random()>.5?1:-1,f=new A;h==="x"?f.set(e+(Math.random()-.5)*i,0,n+(u===1?3:-3)+(Math.random()-.5)*2):f.set(e+(u===1?-3:3)+(Math.random()-.5)*2,0,n+(Math.random()-.5)*i);let d=!1;for(let g of r)if(f.distanceTo(g.mesh.position)<8){d=!0;break}if(!d)return t.position.copy(f),h==="x"?t.rotation.y=u>0?Math.PI/2:-Math.PI/2:t.rotation.y=u>0?0:Math.PI,{axis:h,direction:u,pos:f.clone()}}return null}setDependencies(t,e,n,i,r,o,a){this.player=t,this.parkingSystem=e,this.trafficLightSystem=n,this.effectSystem=i,this.pedestrianSystem=r,this.roadGraph=o||null,this.emergencySystem=a||null}pedestrianNearCrosswalk(t){if(!this.pedestrianSystem||!t)return!1;let e=14,n=3.5,i=t.mesh.position,r=this.pedestrianSystem.peds||[];for(let o of r){let a=o.mesh.position,l=0,c=0;if(t.axis==="x"){c=Math.abs(a.z-i.z);let h=a.x-i.x;l=t.direction===1?h:-h}else{c=Math.abs(a.x-i.x);let h=a.z-i.z;l=t.direction===1?h:-h}if(l>0&&l<e&&c<n)return!0}return!1}update(t){let e=[];this.parkingSystem&&(e=e.concat(this.parkingSystem.cars)),this.player&&!this.player.isDriving&&e.push({isPlayer:!0,position:this.player.camera.position,isObject:!0});for(let n of this.chunkCars.values())n.forEach(i=>{if(i.isPlayerDriven)return;if(i.stunned>0){i.stunned-=t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.mesh.rotation.y+=i.angularVelocity*t,i.velocity.multiplyScalar(.98),i.angularVelocity*=.98,i.velocity.length()<.1&&(i.stunned=0,i.health<=0&&(i.stunned=999)),this.effectSystem&&Math.random()<.1&&(i.health<20?this.effectSystem.createFireEffect(i.mesh):i.health<50&&this.effectSystem.createSmokeEffect(i.mesh));return}if(this.checkBlocked(i,e))return;let r=i.direction*i.speed*t;if(i.axis==="x"?i.mesh.position.x+=r:i.mesh.position.z+=r,this.roadGraph){let l=this.roadGraph.nodeAtWorld(i.mesh.position.x,i.mesh.position.z);if(l&&l.key!==i.lastNodeKey){i.lastNodeKey=l.key;let c=i.axis==="x"?"z":"x";if(l[c]&&Math.random()<.25){let h=this.roadGraph.neighbors(l.key).filter(u=>u.axis===c);if(h.length){let u=h[Math.floor(Math.random()*h.length)],f=this.roadGraph.getNode(u.to),d,g;c==="z"?(d=f.cz>l.cz?1:-1,g=f.cz>l.cz?0:Math.PI):(d=f.cx>l.cx?1:-1,g=f.cx>l.cx?Math.PI/2:-Math.PI/2),i.axis=c,i.direction=d,i.mesh.rotation.y=g}}}}let o=Math.round(i.mesh.position.x/i.chunkSize),a=Math.round(i.mesh.position.z/i.chunkSize);if(o!==i.cx||a!==i.cz){let l=`${i.cx},${i.cz}`;if(this.chunkCars.has(l)){let h=this.chunkCars.get(l),u=h.indexOf(i);u>-1&&h.splice(u,1)}let c=`${o},${a}`;this.chunkCars.has(c)||this.chunkCars.set(c,[]),this.chunkCars.get(c).push(i),i.cx=o,i.cz=a,i.chunkX=o*i.chunkSize,i.chunkZ=a*i.chunkSize}})}checkBlocked(t,e){if(this.pedestrianNearCrosswalk(t))return!0;if(this.trafficLightSystem){let a=t.mesh.position.x-t.chunkX,l=t.mesh.position.z-t.chunkZ,c=this.roadWidth/2+3,h=18,u=!1,f=Math.round(t.chunkX/t.chunkSize),d=Math.round(t.chunkZ/t.chunkSize);if(t.axis==="x"?Math.abs(a)>c&&Math.abs(a)<h&&(a>0&&t.direction<0||a<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(f,d,"x")||(u=!0)):Math.abs(l)>c&&Math.abs(l)<h&&(l>0&&t.direction<0||l<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(f,d,"z")||(u=!0)),u)return!0}let n=12,i=2.5,r=t.mesh.position,o=a=>{for(let l of a){if(l===t||l===t.mesh)continue;let c;if(l.isPlayer)c=l.position;else if(l.mesh)c=l.mesh.position;else if(l.position)c=l.position;else continue;let h=0,u=0;if(t.axis==="x"){u=Math.abs(c.z-r.z);let f=c.x-r.x;t.direction===1?h=f:h=-f}else{u=Math.abs(c.x-r.x);let f=c.z-r.z;t.direction===1?h=f:h=-f}if(h>0&&h<n&&u<i)return!0}return!1};if(o(this.cars)||o(e))return!0;if(this.emergencySystem){let a=this.emergencySystem.getColliders();if(a.length&&o(a))return!0}return!1}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.mesh.userData.localBox?t.push(n.mesh.userData.localBox.clone().applyMatrix4(n.mesh.matrixWorld)):t.push(new qt().setFromObject(n.mesh)))});return t}};var so=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.pool={ambulance:[],fire:[],police:[]},this.active=[],this.events=0,this.effectSystem=null,this.dedupRadius=60}setEffects(t){this.effectSystem=t}getVehicle(t){if(this.pool[t]&&this.pool[t].length>0){let e=this.pool[t].pop();return e.visible=!0,e}return ts(t)}returnVehicle(t){t&&(t.mesh.visible=!1,this.scene.remove(t.mesh),this.pool[t.type]||(this.pool[t.type]=[]),this.pool[t.type].push(t.mesh))}respond(t,e){for(let a of this.active){let l=a.mesh.position.x-t,c=a.mesh.position.z-e;if(l*l+c*c<this.dedupRadius*this.dedupRadius)return null}let n=qh(),i=this.getVehicle(n),r=new A(t+(Math.random()-.5)*10,0,e+(Math.random()-.5)*10);i.position.copy(r),i.rotation.y=0,this.scene.add(i);let o={mesh:i,type:n,target:new A(t,0,e),speed:20,life:20};return this.active.push(o),this.effectSystem&&this.effectSystem.createEmergencyLights(i),this.events++,o}update(t){for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];n.life-=t;let i=n.target,r=i.x-n.mesh.position.x,o=i.z-n.mesh.position.z;if(Math.sqrt(r*r+o*o)<2||n.life<=0){this.returnVehicle(n),this.active.splice(e,1);continue}let l=n.speed*t;Math.abs(r)>Math.abs(o)?(n.mesh.position.x+=Math.sign(r)*Math.min(l,Math.abs(r)),n.mesh.rotation.y=Math.sign(r)*Math.PI/2):(n.mesh.position.z+=Math.sign(o)*Math.min(l,Math.abs(o)),n.mesh.rotation.y=Math.sign(o)>0?0:Math.PI)}}getColliders(){return this.active}};var ro=class{constructor(t){this.scene=t,this.sites=new Map,this.cranes=[],this.SPEED=.35}loadChunk(t,e,n){let i=n&&n.construction?n.construction:[];if(i.length){this.sites.set(`${t},${e}`,i);for(let r of i)this.cranes.push(r)}}unloadChunk(t,e){let n=`${t},${e}`,i=this.sites.get(n);if(i){for(let r of i){let o=this.cranes.indexOf(r);o>-1&&this.cranes.splice(o,1)}this.sites.delete(n)}}update(t){for(let e of this.cranes){e.phase+=t*this.SPEED;let n=e.phase;e.pivot.rotation.y=n,e.hook.position.x=e.jibLen*(.5+.5*Math.sin(n*.7)),e.hook.position.y=-3-7*Math.max(0,Math.sin(n*.35)),e.cable&&(e.cable.position.y=e.hook.position.y/2,e.cable.scale.y=Math.max(.25,-e.hook.position.y))}}craneCount(){return this.cranes.length}};var oo=class{constructor(t,e,n,i){this.scene=t,this.directionalLight=e,this.ambientLight=n,this.materials=i,this.particles=null,this.particles=null,this.particleCount=12e3,this.particleSystem=null,this.particleSystem=null,this.sun=null,this.clouds=null,this.currentWeather="sunny",this.gameTime=12;let r=new Date,o=new Date(r.getFullYear(),0,0),a=r-o,l=1e3*60*60*24,c=Math.floor(a/l);this.day=c,this.year=1,console.log(`Weather Initialized: Real World Date ${r.toDateString()} -> Game Day ${this.day}`),this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2,this.targetWeatherState={fogDensity:.002,lightIntensity:1.5,ambientIntensity:.6,skyColorHex:8900331,precipAlpha:0,roughness:.9,wetness:0,precipType:"none"},this.currentWeatherState={...this.targetWeatherState},this.transitionSpeed=.5,this.windTime=0,this.windVector=new A(5,0,2),this.initParticles(),this.initSky(),this.pickWeatherForSeason(),this.cloudInstances=[],this.initClouds()}initClouds(){let i=[],r=new yt({color:16777215,roughness:.9,transparent:!0,opacity:.8,flatShading:!0}),o=(c,h,u,f)=>{let d=new Wi(c,0);return d.translate(h,u,f),d};for(let c=0;c<3;c++){let h,u,f;c===0?(h=3+Math.floor(Math.random()*3),u=30,f=15):c===1?(h=8+Math.floor(Math.random()*5),u=70,f=30):(h=15+Math.floor(Math.random()*10),u=140,f=40);let d=[];for(let g=0;g<h;g++){let x=f+Math.random()*f,m=(Math.random()-.5)*u,p=(Math.random()-.5)*u*.4,y=(Math.random()-.5)*u*.6;d.push(o(x,m,p,y))}d.length>0?i.push(ri(d)):i.push(new Lt(1,1,1))}let a=Math.ceil(40/3);this.cloudMeshes=[];let l=[];for(let c=0;c<3;c++){let h=new Gi(i[c],r,a);h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.setUsage(_h);let u=new de;for(let f=0;f<a;f++){let d,g,x=!1,m=0;for(;!x&&m<50;){d=(Math.random()-.5)*2e3,g=(Math.random()-.5)*2e3,x=!0;for(let y of l)if(Math.sqrt((d-y.x)**2+(g-y.z)**2)<150){x=!1;break}m++}l.push({x:d,z:g});let p=400+Math.random()*150;u.position.set(d,p,g),u.rotation.y=Math.random()*Math.PI*2,u.scale.setScalar(1+Math.random()*.5),u.updateMatrix(),h.setMatrixAt(f,u.matrix)}h.instanceMatrix.needsUpdate=!0,this.scene.add(h),this.cloudMeshes.push({mesh:h,count:a,dummy:u})}}updateClouds(t,e){if(!this.cloudMeshes)return;let n=15*t,i=1e3;for(let r of this.cloudMeshes){let o=r.mesh,a=r.dummy,l=!1;for(let c=0;c<r.count;c++){o.getMatrixAt(c,a.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.position.x+=n;let h=a.position.x-e.x,u=a.position.z-e.z,f=!1;h>i&&(a.position.x-=i*2,f=!0),h<-i&&(a.position.x+=i*2,f=!0),u>i&&(a.position.z-=i*2,f=!0),u<-i&&(a.position.z+=i*2,f=!0),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l=!0}l&&(o.instanceMatrix.needsUpdate=!0)}}initParticles(){let t=new Me,e=[],n=[];for(let r=0;r<this.particleCount;r++)e.push((Math.random()-.5)*1e3),e.push(Math.random()*500),e.push((Math.random()-.5)*1e3),n.push((Math.random()-.5)*20);t.setAttribute("position",new Kt(e,3)),t.setAttribute("velocity",new Kt(n,1));let i=new As({color:11184810,size:.5,transparent:!0,opacity:0,blending:Nn,depthWrite:!1});this.particleSystem=new Ur(t,i),this.particleSystem.visible=!0,this.particleSystem.frustumCulled=!1,this.scene.add(this.particleSystem),this.particles=t}initSky(){let t=new ei(1e3,32,32),e=new ne({color:16768324,fog:!1});this.sun=new nt(t,e),this.sun.position.set(500,5e3,500),this.scene.add(this.sun)}setSunny(){console.log("Weather Target: Sunny"),this.currentWeather="sunny",this.targetWeatherState.precipType="none",this.targetWeatherState.fogDensity=.002,this.targetWeatherState.skyColorHex=8900331,this.targetWeatherState.lightIntensity=2,this.targetWeatherState.ambientIntensity=.6,this.targetWeatherState.precipAlpha=0,this.targetWeatherState.roughness=.9,this.targetWeatherState.wetness=0}setRain(){console.log("Weather Target: Rain"),this.currentWeather="rain",this.targetWeatherState.precipType="rain",this.targetWeatherState.fogDensity=.02,this.targetWeatherState.skyColorHex=328976,this.targetWeatherState.lightIntensity=.5,this.targetWeatherState.ambientIntensity=.2,this.targetWeatherState.precipAlpha=.6,this.targetWeatherState.roughness=.1,this.targetWeatherState.wetness=1}setSnow(){console.log("Weather Target: Snow"),this.currentWeather="snow",this.targetWeatherState.precipType="snow",this.targetWeatherState.fogDensity=.03,this.targetWeatherState.skyColorHex=15658734,this.targetWeatherState.lightIntensity=1.5,this.targetWeatherState.ambientIntensity=.8,this.targetWeatherState.precipAlpha=.9,this.targetWeatherState.roughness=1,this.targetWeatherState.wetness=0}update(t,e=new A){this.gameTime+=t*.04,this.gameTime>=24&&(this.gameTime=0,this.day++,console.log(`Day Info: Day ${this.day}, Year ${this.year}`),this.day>365&&(this.day=1,this.year++));let i=Math.min(t*this.transitionSpeed,1),r=this.currentWeatherState,o=this.targetWeatherState;r.fogDensity+=(o.fogDensity-r.fogDensity)*i,r.lightIntensity+=(o.lightIntensity-r.lightIntensity)*i,r.ambientIntensity+=(o.ambientIntensity-r.ambientIntensity)*i,r.precipAlpha+=(o.precipAlpha-r.precipAlpha)*i,r.roughness+=(o.roughness-r.roughness)*i;let a=new ft(r.skyColorHex),l=new ft(o.skyColorHex);if(a.lerp(l,i),r.skyColorHex=a.getHex(),this.materials.road){this.materials.road.roughness=r.roughness;let h=new ft(this.currentWeather==="snow"?15658734:2236962),u=new ft(328965);o.wetness>0?this.materials.road.color.lerp(u,i*.5):this.materials.road.color.lerp(h,i*.5)}this.updateTimeCycle(e),this.windTime+=t;let c=Math.sin(this.windTime*.5)+Math.sin(this.windTime*.1)*.5;this.windVector.x=10+c*10,this.windVector.z=c*5,this.updateParticles(t,e),this.updateClouds(t,e),this.updateWeatherAutomation(t*.04)}updateParticles(t,e){if(!this.particleSystem)return;let n=this.currentWeatherState.precipAlpha;if(this.particleSystem.material.opacity=n,n<.01)return;let i=this.targetWeatherState.precipType==="rain";this.particleSystem.material.color.setHex(i?11193599:16777215),this.particleSystem.material.size=i?.8:1.5;let r=this.particles.attributes.position.array,o=this.particles.attributes.velocity.array,a=500,l=500,c=-50,h=i?90:20,u=this.windVector.x*t,f=this.windVector.z*t,d=this.windTime;for(let g=0;g<this.particleCount;g++){let x=r[g*3],m=r[g*3+1],p=r[g*3+2],y=h;if(!i){let T=o[g],C=Math.sin(d*2+T);y+=C*5,x+=C*5*t,p+=C*5*t,m-=C*2*t}m-=y*t,x-=u,p-=f,m<c&&(m=l);let _=x-e.x,S=p-e.z,R=!1;_>a&&(x-=a*2,R=!0),_<-a&&(x+=a*2,R=!0),S>a&&(p-=a*2,R=!0),S<-a&&(p+=a*2,R=!0),R&&(m=Math.random()*l),r[g*3]=x,r[g*3+1]=m,r[g*3+2]=p}this.particles.attributes.position.needsUpdate=!0}updateTimeCycle(t){let e=this.gameTime,n=0;e>=6&&e<18?n=(e-6)/12*Math.PI:n=(e-6)/24*Math.PI*2;let i=1e4,r=Math.cos(n)*i,o=Math.sin(n)*i;if(this.sun&&(this.sun.position.set(t.x+r,o,t.z),this.sun.visible=this.currentWeatherState.precipAlpha<.5,o<0?(this.sun.material.color.setHex(16777215),this.sun.position.set(t.x-r,-o,t.z)):this.sun.material.color.setHex(16768324)),this.directionalLight){let S=r,R=o;R<0&&(S=-S,R=-R);let T=new A(S,R,0).normalize();this.directionalLight.position.copy(t).add(T.multiplyScalar(100)),this.directionalLight.target.position.copy(t),this.directionalLight.target.updateMatrixWorld()}let a=new ft(1296),l=new ft(16729344),c=new ft(8900331),h=new ft(16604755),u=new ft,f=0,d=0;if(e>=5&&e<7){let S=(e-5)/2;u.lerpColors(a,l,S),S>.5&&u.lerp(c,(S-.5)*2),f=S*1.5,d=.1+S*.5}else if(e>=7&&e<17)u.copy(c),f=1.5,d=.6;else if(e>=17&&e<19){let S=(e-17)/2;u.lerpColors(c,h,S),S>.5&&u.lerp(a,(S-.5)*2),f=1.5-S*1.5,d=.6-S*.5}else u.copy(a),f=.2,d=.1;let g=new ft(this.currentWeatherState.skyColorHex),x=this.currentWeatherState.lightIntensity,m=u.clone();m.lerp(g,this.currentWeatherState.precipAlpha);let p=f*(x/2),y=d*(this.currentWeatherState.ambientIntensity/.6);this.scene.background=m,this.scene.fog&&(this.scene.fog.color.copy(m),this.scene.fog.density=this.currentWeatherState.fogDensity),this.directionalLight.intensity=p,this.ambientLight.intensity=y;let _=0;if(e>19||e<5?_=1:e>=18&&e<=19?_=e-18:e>=5&&e<=6&&(_=1-(e-5)),this.materials.window){let S=new ft(1118481),R=new ft(16777130);this.materials.window.color.lerpColors(S,R,_),this.materials.window.opacity=.08+_*.92}}updateWeatherAutomation(t){this.timeSinceLastWeatherChange+=t,this.timeSinceLastWeatherChange>this.weatherChangeInterval&&(this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2+Math.random()*2,this.pickWeatherForSeason())}pickWeatherForSeason(){let t="";this.day<=90?t="Winter":this.day<=180?t="Spring":this.day<=270?t="Summer":t="Autumn";let e=Math.random(),n="sunny";switch(t){case"Winter":e<.6?n="snow":e<.8?n="rain":n="sunny";break;case"Spring":e<.4?n="rain":n="sunny";break;case"Summer":e<.1?n="rain":n="sunny";break;case"Autumn":e<.4?n="rain":e<.5?n="snow":n="sunny";break}n!==this.currentWeather&&(n==="sunny"?this.setSunny():n==="rain"?this.setRain():n==="snow"&&this.setSnow())}};var ao=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkPeds=new Map,this.peds=[],this.maxSpeed=2,this.maxForce=5,this.geomBody=new Lt(.45,.75,.25),this.geomHead=new Lt(.25,.25,.25),this.geomLimb=new Lt(.12,.75,.12),this.geomShoe=new Lt(.14,.1,.22),this.geomHair=new Lt(.27,.1,.27),this.matSkin=new yt({color:16764074}),this.matDark=new yt({color:2236962})}setDependencies(t,e){this.trafficLightSystem=t}loadChunk(t,e){let n=[],r=this.blockSize+this.roadWidth,o=t*r,a=e*r;for(let l=0;l<4;l++){let c=this.createPedMesh(),h=this.spawnPedInChunk(c,o,a,this.blockSize);this.scene.add(c);let u={mesh:c,velocity:new A(0,0,0),acceleration:new A(0,0,0),state:"WALKING",target:h.target,chunkX:o,chunkZ:a,chunkSize:r,bounds:h.bounds,legAnimTimer:Math.random()*10,limbs:c.userData.limbs,waitTimer:0,ragdollTimer:0};n.push(u),this.peds.push(u)}this.chunkPeds.set(`${t},${e}`,n)}unloadChunk(t,e){let n=`${t},${e}`;this.chunkPeds.has(n)&&(this.chunkPeds.get(n).forEach(r=>{this.scene.remove(r.mesh);let o=this.peds.indexOf(r);o>-1&&this.peds.splice(o,1)}),this.chunkPeds.delete(n))}createPedMesh(){let t=new he,e=new ft().setHSL(Math.random(),.7,.4),n=new ft().setHSL(Math.random(),.5,.2),i=new ft().setHSL(.08,.6,.5+Math.random()*.4),r=new ft().setHSL(Math.random(),.5,.1+Math.random()*.2),o=new yt({color:e}),a=new yt({color:n}),l=new yt({color:i}),c=new yt({color:r}),h=new nt(this.geomBody,o);h.position.y=1,h.castShadow=!0,t.add(h);let u=new nt(this.geomHead,l);u.position.y=1.55,u.castShadow=!0,t.add(u);let f=new nt(this.geomHair,c);f.position.y=1.7,f.castShadow=!0,t.add(f);let d=new he;d.position.set(-.35,1.35,0);let g=new nt(this.geomLimb,o);g.position.y=-.3,g.castShadow=!0,d.add(g);let x=new nt(new Lt(.1,.1,.1),l);x.position.y=-.7,d.add(x),t.add(d);let m=new he;m.position.set(.35,1.35,0);let p=new nt(this.geomLimb,o);p.position.y=-.3,p.castShadow=!0,m.add(p);let y=new nt(new Lt(.1,.1,.1),l);y.position.y=-.7,m.add(y),t.add(m);let _=new he;_.position.set(-.15,.65,0);let S=new nt(this.geomLimb,a);S.position.y=-.35,S.castShadow=!0,_.add(S);let R=new nt(this.geomShoe,this.matDark);R.position.set(0,-.75,.05),_.add(R),t.add(_);let T=new he;T.position.set(.15,.65,0);let C=new nt(this.geomLimb,a);C.position.y=-.35,C.castShadow=!0,T.add(C);let I=new nt(this.geomShoe,this.matDark);return I.position.set(0,-.75,.05),T.add(I),t.add(T),t.userData.limbs={leftArm:d,rightArm:m,leftLeg:_,rightLeg:T},t}spawnPedInChunk(t,e,n,i){let r=this.roadWidth/2,o=i/2,l=[{x:-1,z:-1},{x:1,z:-1},{x:1,z:1},{x:-1,z:1}][Math.floor(Math.random()*4)],c=r+Math.random()*o,h=r+Math.random()*o,u=c*l.x,f=h*l.z;t.position.set(e+u,0,n+f);let d=Math.random()>.5?"x":"z",g=Math.random()>.5?1:-1,x=new A(g*100,0,0);d==="z"&&x.set(0,0,g*100),x.add(t.position);let m=r+o/2,p=m*l.x,y=m*l.z,_=(o-4)/2+.5;return{target:x,bounds:{buildingCenterX:p,buildingCenterZ:y,buildingHalfWidth:_}}}update(t){t>.1&&(t=.1);for(let e of this.chunkPeds.values())e.forEach(n=>{if(n.state==="RAGDOLL"){n.velocity.y-=20*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.rotation.x+=t*5,n.mesh.rotation.z+=t*5,n.mesh.position.y<0&&(n.mesh.position.y=0,n.velocity.multiplyScalar(.5),n.velocity.y=0),n.ragdollTimer-=t,n.ragdollTimer<=0&&n.velocity.length()<.1&&(n.state="WALKING",n.mesh.rotation.set(0,0,0),n.mesh.position.y=0);return}let i=new A(0,0,0);if(this.updateState(n,t),n.state!=="WAITING"){let r=this.seek(n,n.target);i.add(r);let o=this.avoidBuilding(n);i.add(o.multiplyScalar(3))}if(n.acceleration.copy(i),n.velocity.add(n.acceleration.multiplyScalar(t)),n.velocity.length()>this.maxSpeed&&n.velocity.setLength(this.maxSpeed),n.state==="WAITING"&&n.velocity.set(0,0,0),n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.velocity.lengthSq()>.01&&n.mesh.lookAt(n.mesh.position.clone().add(n.velocity)),n.velocity.lengthSq()>.1){n.legAnimTimer+=t*12;let r=Math.sin(n.legAnimTimer);n.limbs.leftLeg.rotation.x=r*.6,n.limbs.rightLeg.rotation.x=-r*.6,n.limbs.leftArm.rotation.x=-r*.6,n.limbs.rightArm.rotation.x=r*.6,n.mesh.position.y=Math.abs(Math.sin(n.legAnimTimer*2))*.05}else n.limbs.leftLeg.rotation.x=0,n.limbs.rightLeg.rotation.x=0,n.limbs.leftArm.rotation.x=0,n.limbs.rightArm.rotation.x=0,n.mesh.position.y=0})}updateState(t,e){let n=t.mesh.position.x-t.chunkX,i=t.mesh.position.z-t.chunkZ,r=this.roadWidth/2;if(t.state==="WALKING"){let o=Math.abs(n)-r,a=Math.abs(i)-r;if(Math.abs(n)<r+1&&Math.abs(i)<r+20||Math.abs(i)<r+1&&Math.abs(n)<r+20){let l=Math.abs(t.velocity.x),c=Math.abs(t.velocity.z);l>c?Math.abs(n)<r+.5&&Math.abs(n)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="x"):Math.abs(i)<r+.5&&Math.abs(i)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="z")}}else if(t.state==="WAITING")if(this.trafficLightSystem){let o=Math.round(t.chunkX/t.chunkSize),a=Math.round(t.chunkZ/t.chunkSize),l=!1;if(t.crossAxis==="x"?l=this.trafficLightSystem.checkGreenLight(o,a,"z"):l=this.trafficLightSystem.checkGreenLight(o,a,"x"),!l)if(t.state="CROSSING",t.crossAxis==="x"){let c=t.target.x>t.mesh.position.x?1:-1;t.crossingTarget=new A(t.mesh.position.x+c*(this.roadWidth+4),0,t.mesh.position.z)}else{let c=t.target.z>t.mesh.position.z?1:-1;t.crossingTarget=new A(t.mesh.position.x,0,t.mesh.position.z+c*(this.roadWidth+4))}}else t.waitTimer+=e,t.waitTimer>2&&(t.state="CROSSING");else t.state==="CROSSING"&&t.mesh.position.distanceTo(t.crossingTarget)<1&&(t.state="WALKING")}seek(t,e){let n=t.state==="CROSSING"&&t.crossingTarget?t.crossingTarget:e,i=new A().subVectors(n,t.mesh.position);i.normalize().multiplyScalar(this.maxSpeed);let r=new A().subVectors(i,t.velocity);return r.length()>this.maxForce&&r.setLength(this.maxForce),r}avoidBuilding(t){let e=t.mesh.position.x-t.chunkX,n=t.mesh.position.z-t.chunkZ,i=e-t.bounds.buildingCenterX,r=n-t.bounds.buildingCenterZ,o=Math.abs(i),a=Math.abs(r),l=t.bounds.buildingHalfWidth;if(o<l&&a<l){let c=new A(i,0,r);return c.normalize().multiplyScalar(this.maxForce*2),c}return new A(0,0,0)}};var lo=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.cars=[],this.effectSystem=null}setDependencies(t){this.effectSystem=t}loadChunk(t,e){let n=[],i=this.blockSize+this.roadWidth,r=t*i,o=e*i;this.spawnRowInChunk(r,o,!0,n,i),this.spawnRowInChunk(r,o,!1,n,i),this.chunkCars.set(`${t},${e}`,n),n.forEach(a=>this.cars.push(a))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.scene.remove(r),Yh(r);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.userData.localBox?t.push(n.userData.localBox.clone().applyMatrix4(n.matrixWorld)):t.push(new qt().setFromObject(n)))});return t}spawnRowInChunk(t,e,n,i,r){let o=this.roadWidth/2,a=r/2,l=2,c=[{start:-a,end:-o-l},{start:o+l,end:a}],h=10,u=o-1.4;c.forEach(f=>{let d=Math.random()*2;for(let g=f.start+d+2;g<f.end-2;g+=h)[u,-u].forEach(x=>{if(Math.random()<.5)return;let m=no(),p=this.getDimensions(m),y,_,S,R=(Math.random()-.5)*1,T=g+R;if(T+p.l/2>f.end)return;n?(y=t+T,_=e+x,S=Math.random()>.5?Math.PI/2:-Math.PI/2):(y=t+x,_=e+T,S=Math.random()>.5?0:Math.PI);let C,I;n?(C=p.l,I=p.w):(C=p.w,I=p.l);let v=.2,E={minX:y-C/2-v,maxX:y+C/2+v,minZ:_-I/2-v,maxZ:_+I/2+v};if(!this.isBlocked(E,i)){let U=ts(m);U.userData.localBox=new qt().setFromObject(U),U.position.set(y,0,_),U.rotation.y=S,U.userData.health=100,this.scene.add(U),i.push(U)}})})}isBlocked(t,e){for(let n of e){let i=this.getDimensions(n.userData.type),r=n.position.x,o=n.position.z,a=n.rotation.y,l,c;Math.abs(a)<.1||Math.abs(a-Math.PI)<.1?(l=i.w,c=i.l):(l=i.l,c=i.w);let h=.5,u={minX:r-l/2-h,maxX:r+l/2+h,minZ:o-c/2-h,maxZ:o+c/2+h};if(t.maxX>u.minX&&t.minX<u.maxX&&t.maxZ>u.minZ&&t.minZ<u.maxZ)return!0}return!1}getDimensions(t){switch(t){case"truck":return{w:3.5,l:8};case"suv":return{w:2.5,l:5};case"sport":return{w:2.2,l:4.6};default:return{w:2.1,l:4.4}}}update(t){for(let e of this.cars)e.userData.velocity&&(e.position.add(e.userData.velocity.clone().multiplyScalar(t)),e.rotation.y+=(e.userData.angularVelocity||0)*t,e.userData.velocity.multiplyScalar(.98),e.userData.angularVelocity&&(e.userData.angularVelocity*=.98),e.userData.velocity.length()<.1&&(e.userData.velocity=null)),e.userData.health<50&&this.effectSystem&&Math.random()<.05&&(e.userData.health<20?this.effectSystem.createFireEffect(e):this.effectSystem.createSmokeEffect(e))}};var co=class{constructor(t,e){this.scene=t,this.citySize=e,this.airplane=null,this.spawnTimer=0,this.flightSpeed=40,this.flightHeight=50}update(t){this.airplane?this.moveAirplane(t):(this.spawnTimer-=t,this.spawnTimer<=0&&this.spawnAirplane())}spawnAirplane(){this.airplane=this.createAirplaneMesh();let t=300,e=Math.random()>.5?"x":"z",n=Math.random()>.5?1:-1;this.currentFlightData={axis:e,direction:n,limit:t+50};let r=(Math.random()-.5)*100;e==="x"?(this.airplane.position.set(-n*t,this.flightHeight,r),this.airplane.rotation.y=n>0?0:Math.PI):(this.airplane.position.set(r,this.flightHeight,-n*t),this.airplane.rotation.y=n>0?-Math.PI/2:Math.PI/2),this.scene.add(this.airplane)}moveAirplane(t){if(!this.airplane)return;let e=this.currentFlightData.direction*this.flightSpeed*t,n=this.currentFlightData.limit;this.currentFlightData.axis==="x"?(this.airplane.position.x+=e,Math.abs(this.airplane.position.x)>n&&this.removeAirplane()):(this.airplane.position.z+=e,Math.abs(this.airplane.position.z)>n&&this.removeAirplane())}removeAirplane(){this.airplane&&(this.scene.remove(this.airplane),this.airplane=null),this.spawnTimer=15+Math.random()*5}createAirplaneMesh(){let t=new he,e=new yt({color:16777215,roughness:.2}),n=new yt({color:13421772,roughness:.3}),i=new yt({color:3355443,roughness:.1}),r=new ne({color:16711680}),o=new kr(.8,4,4,8),a=new nt(o,e);a.rotation.z=Math.PI/2,t.add(a);let l=new Lt(1.5,.1,8),c=new nt(l,n);c.position.set(0,0,0),t.add(c);let h=new Lt(1,.1,3),u=new nt(h,n);u.position.set(-1.8,0,0),t.add(u);let f=new Lt(.8,1.2,.1),d=new nt(f,n);d.position.set(-1.8,.6,0),t.add(d);let g=new Lt(1,.6,.8),x=new nt(g,i);x.position.set(.5,.5,0),t.add(x);let m=new nt(new Lt(.1,.1,.1),r);m.position.set(0,0,4),t.add(m);let p=new nt(new Lt(.1,.1,.1),new ne({color:65280}));p.position.set(0,0,-4),t.add(p);let y=new en(.3,.3,.8,8),_=new nt(y,e);_.rotation.z=Math.PI/2,_.position.set(0,-.2,2),t.add(_);let S=new nt(y,e);return S.rotation.z=Math.PI/2,S.position.set(0,-.2,-2),t.add(S),t}};var ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var He=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xx=new zi(-1,1,1,-1,0,1),Sl=class extends Me{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},_x=new Sl,zn=class{constructor(t){this._mesh=new nt(_x,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var es=class extends He{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Os=class extends He{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},uo=class extends He{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var fo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(ho),this.copyPass.material.blending=on,this.clock=new Yi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Os!==void 0&&(o instanceof Os?n=!0:o instanceof uo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var po=class extends He{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Zh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ns=class s extends He{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,o,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Fe(r,o,{type:je});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Fe(r,o,{type:je});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Zh;this.highPassUniforms=Bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ho;this.copyUniforms=Bn.clone(h.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new ne,this.fsQuad=new zn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};ns.BlurDirectionX=new it(1,0);ns.BlurDirectionY=new it(0,1);var $h={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var mo=class extends He{constructor(){super();let t=$h;this.uniforms=Bn.clone(t.uniforms),this.material=new Hr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ll&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var go=class{constructor(t){this.scene=t,this.particles=[],this.emitters=[],this.sirens=[]}createEmergencyLights(t){let e=new ne({color:16716049,transparent:!0,opacity:0}),n=new ne({color:1118719,transparent:!0,opacity:0}),i=new nt(new ei(.16,8,8),e),r=new nt(new ei(.16,8,8),n);return i.position.set(-.4,1.5,0),r.position.set(.4,1.5,0),i.userData={parent:t,siren:!0},r.userData={parent:t,siren:!0},this.scene.add(i),this.scene.add(r),this.sirens.push({red:i,blue:r,parent:t,timer:0}),this.sirens[this.sirens.length-1]}addEmitter(t,e){this.emitters.find(i=>i.object===t&&i.type===e)||this.emitters.push({object:t,type:e,timer:0})}createCrashEffect(t){let n=new Lt(.3,.3,.3),i=new ne({color:16755200});for(let r=0;r<20;r++){let o=new nt(n,i);o.position.copy(t),o.position.x+=(Math.random()-.5)*1,o.position.y+=(Math.random()-.5)*1,o.position.z+=(Math.random()-.5)*1;let a=new A((Math.random()-.5)*10,Math.random()*10+2,(Math.random()-.5)*10);this.scene.add(o),this.particles.push({mesh:o,velocity:a,life:1})}}createFireEffect(t){let n=new Lt(.4,.4,.4),i=new ne({color:16729088});for(let r=0;r<5;r++){let o=new nt(n,i);o.position.set((Math.random()-.5)*1,1+Math.random(),2+(Math.random()-.5)),o.userData={parent:t,offset:o.position.clone(),type:"fire",life:2+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,5,0),life:o.userData.life,isAttached:!0})}}createSmokeEffect(t){let n=new Lt(.5,.5,.5),i=new ne({color:5592405});for(let r=0;r<5;r++){let o=new nt(n,i);o.position.set((Math.random()-.5)*1,1.5+Math.random(),2),o.userData={parent:t,offset:o.position.clone(),type:"smoke",life:3+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,3,0),life:o.userData.life,isAttached:!0})}}update(t){for(let e of this.emitters)e.timer-=t,e.timer<=0&&(e.type==="fire"?(this.createFireEffect(e.object),e.timer=.1):e.type==="smoke"&&(this.createSmokeEffect(e.object),e.timer=.2));for(let e=this.particles.length-1;e>=0;e--){let n=this.particles[e];if(n.life-=t,n.life<=0)this.scene.remove(n.mesh),this.particles.splice(e,1),n.mesh.geometry&&n.mesh.geometry.dispose();else{if(n.isAttached){if(n.velocity.y+=t*2,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.userData.parent&&n.life>n.mesh.userData.life-.1){let i=n.mesh.userData.parent;if(i&&i.matrixWorld){let r=n.mesh.userData.offset.clone();r.applyMatrix4(i.matrixWorld),n.mesh.position.copy(r)}n.isAttached=!1}}else n.velocity.y-=20*t,n.mesh.position.addScaledVector(n.velocity,t);n.mesh.rotation.x+=t*5,n.mesh.rotation.y+=t*5,n.mesh.scale.setScalar(n.life)}}for(let e=this.sirens.length-1;e>=0;e--){let n=this.sirens[e];if(!(n.parent&&n.parent.visible)){this.scene.remove(n.red),this.scene.remove(n.blue),n.red.geometry.dispose(),n.red.material.dispose(),n.blue.geometry.dispose(),n.blue.material.dispose(),this.sirens.splice(e,1);continue}n.timer+=t;let r=n.timer%.5<.25;n.red.material.opacity=r?1:0,n.blue.material.opacity=r?0:1}}},xo=class s{constructor({renderer:t=null,scene:e=null,camera:n=null}={}){this.renderer=t,this.scene=e,this.camera=n,this.enabled=!!t&&!!e&&!!n,this.bloom={strength:0,threshold:1,radius:.6},this.droplets={intensity:0},this.passes=["render","bloom","droplets","output"],this.composer=null,this.bloomPass=null,this.dropletPass=null,this.dropletUniforms=null,this.clock=null,this.enabled&&this._build()}static dropletShader(){return{uniforms:{tDiffuse:{value:null},uIntensity:{value:0},uTime:{value:0},uResolution:{value:new it(1,1)}},vertexShader:["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:["uniform float uIntensity;","uniform float uTime;","uniform vec2 uResolution;","varying vec2 vUv;","uniform sampler2D tDiffuse;","","float hash(vec2 p) {","  vec3 p3 = fract(vec3(p.xyx) * 0.1031);","  p3 += dot(p3, p3.zxy + 33.33);","  return fract((p3.x + p3.y) * p3.z);","}","","void main() {","  vec2 uv = vUv;","  float aspect = uResolution.x / uResolution.y;","  vec2 p = vec2(uv.x * aspect, uv.y);","  float grid = 10.0;","  vec2 id = floor(p * grid);","  vec2 gv = fract(p * grid) - 0.5;","  float t = uTime * 6.0;","","  // per-cell droplet: random x, falling y","  vec2 o = vec2(hash(id) - 0.5, -t * (0.25 + hash(id + 1.0)));","  gv -= o;","","  // droplet disc","  float r = length(gv * vec2(1.0, 0.55));","  float drop = smoothstep(0.07, 0.0, r);","","  // thin vertical streak (tail)","  float streak = smoothstep(0.02, 0.0, abs(gv.x))","              * smoothstep(0.28, 0.0, abs(gv.y)) * 0.5;","","  // only some cells carry a droplet","  float has = step(0.25, hash(id + 3.0));","  vec4 sceneColor = texture2D(tDiffuse, vUv);","  float v = (drop + streak) * has * uIntensity;","  gl_FragColor = vec4(sceneColor.rgb + vec3(v) * 0.25, 1.0);","}"].join(`
`)}}_build(){let t=window.innerWidth,e=window.innerHeight;this.composer=new fo(this.renderer),this.composer.addPass(new po(this.scene,this.camera)),this.bloomPass=new ns(new it(t,e),this.bloom.strength,this.bloom.radius,this.bloom.threshold),this.composer.addPass(this.bloomPass);let n=s.dropletShader();this.dropletUniforms=n.uniforms,this.dropletUniforms.uResolution.value.set(t,e),this.dropletPass=new es(n),this.dropletPass.material.blending=Nn,this.dropletPass.material.transparent=!0,this.composer.addPass(this.dropletPass),this.composer.addPass(new mo),this.clock=new Yi}update(t,e=0){let n=t?t.precipAlpha:0;return this.droplets.intensity=Zi.clamp(n,0,1),this.bloom.strength=Zi.clamp(e*.9,0,1.5),this.bloom.threshold=Zi.clamp(.25+(1-e)*.6,.1,1),this.bloom.radius=.6,this.enabled&&this.bloomPass&&(this.bloomPass.strength=this.bloom.strength,this.bloomPass.threshold=this.bloom.threshold,this.bloomPass.radius=this.bloom.radius),this.enabled&&this.dropletPass&&(this.dropletUniforms.uIntensity.value=this.droplets.intensity,this.dropletUniforms.uTime.value=this.clock.getElapsedTime()),this.estimate()}estimate(){return{enabled:this.enabled,bloom:{...this.bloom},droplets:{...this.droplets},passes:[...this.passes]}}render(){this.enabled&&this.composer&&this.composer.render()}resize(){if(!this.enabled)return;let t=window.innerWidth,e=window.innerHeight;this.bloomPass&&this.bloomPass.setSize(t,e),this.dropletUniforms&&this.dropletUniforms.uResolution.value.set(t,e)}};var _o=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.chunkLights=new Map,this.cycleDuration=10}loadChunk(t,e){let n=this.createLightMeshes(),i=this.blockSize+this.roadWidth,r=t*i,o=e*i;n.position.set(r,0,o);let a=(t+e)%2===0;this.chunkLights.set(`${t},${e}`,{mesh:n,cx:t,cz:e,state:a?"NsGreen":"EwGreen",timer:0,materials:n.userData.materials}),this.scene.add(n),this.updateVisuals(this.chunkLights.get(`${t},${e}`))}unloadChunk(t,e){let n=`${t},${e}`;if(this.chunkLights.has(n)){let i=this.chunkLights.get(n);this.scene.remove(i.mesh),this.chunkLights.delete(n)}}createLightMeshes(){let t=new he,e=new Lt(.3,6,.3),n=new Lt(.8,2,.5),i=new en(.25,.25,.1,16);i.rotateX(Math.PI/2);let r=new yt({color:3355443}),o=new yt({color:1118481}),a=new ni({color:1118481,emissive:0}),l=new ni({color:16711680,emissive:16711680,emissiveIntensity:2}),c=new ni({color:16776960,emissive:16776960,emissiveIntensity:2}),h=new ni({color:65280,emissive:65280,emissiveIntensity:2});t.userData.materials={matOff:a,matRedOn:l,matYellowOn:c,matGreenOn:h};let u=this.roadWidth/2+1;return[{x:u,z:u,rot:Math.PI,type:"Ns"},{x:-u,z:-u,rot:0,type:"Ns"},{x:u,z:-u,rot:-Math.PI/2,type:"Ew"},{x:-u,z:u,rot:Math.PI/2,type:"Ew"}].forEach((d,g)=>{let x=new nt(e,r);x.position.set(d.x,3,d.z),t.add(x);let m=new nt(n,o);m.position.set(d.x,5.5,d.z),m.rotation.y=d.rot,t.add(m);let p=new nt(i,a.clone());p.position.set(0,.5,.26),m.add(p);let y=new nt(i,a.clone());y.position.set(0,0,.26),m.add(y);let _=new nt(i,a.clone());_.position.set(0,-.5,.26),m.add(_),t.userData[`light_${g}_R`]=p,t.userData[`light_${g}_Y`]=y,t.userData[`light_${g}_G`]=_,t.userData[`light_${g}_type`]=d.type}),t}update(t){for(let e of this.chunkLights.values())e.timer+=t,e.state==="NsGreen"&&e.timer>this.cycleDuration?(e.state="NsYellow",e.timer=0,this.updateVisuals(e)):e.state==="NsYellow"&&e.timer>3?(e.state="AllRed1",e.timer=0,this.updateVisuals(e)):e.state==="AllRed1"&&e.timer>2?(e.state="EwGreen",e.timer=0,this.updateVisuals(e)):e.state==="EwGreen"&&e.timer>this.cycleDuration?(e.state="EwYellow",e.timer=0,this.updateVisuals(e)):e.state==="EwYellow"&&e.timer>3?(e.state="AllRed2",e.timer=0,this.updateVisuals(e)):e.state==="AllRed2"&&e.timer>2&&(e.state="NsGreen",e.timer=0,this.updateVisuals(e))}updateVisuals(t){let{matOff:e,matRedOn:n,matYellowOn:i,matGreenOn:r}=t.materials,o=(c,h)=>{let u=t.mesh.userData[`light_${c}_R`],f=t.mesh.userData[`light_${c}_Y`],d=t.mesh.userData[`light_${c}_G`];u&&(u.material=h==="r"?n:e,f.material=h==="y"?i:e,d.material=h==="g"?r:e)},a="r",l="r";t.state==="NsGreen"?(a="g",l="r"):t.state==="NsYellow"?(a="y",l="r"):t.state==="EwGreen"?(a="r",l="g"):t.state==="EwYellow"&&(a="r",l="y");for(let c=0;c<4;c++)t.mesh.userData[`light_${c}_type`]==="Ns"?o(c,a):o(c,l)}checkGreenLight(t,e,n){let i=`${t},${e}`,r=this.chunkLights.get(i);return r?n==="z"?r.state==="NsGreen"||r.state==="NsYellow":r.state==="EwGreen"||r.state==="EwYellow":!0}};var yo=class{constructor(t,e,n,i,r,o,a,l){this.scene=t,this.player=e,this.worldData=n,this.trafficSystem=i,this.parkingSystem=r,this.pedestrianSystem=o,this.trafficLightSystem=a,this.constructionSystem=l,this.chunks=new Map,this.chunkSize=n.blockSize+n.roadWidth,this.renderDistance=3,this.lodDistance=2,this.noise=oi}update(){if(!this.player)return;let t=this.player.camera.position,e=Math.floor(t.x/this.chunkSize),n=Math.floor(t.z/this.chunkSize),i=new Set;for(let r=-this.renderDistance;r<=this.renderDistance;r++)for(let o=-this.renderDistance;o<=this.renderDistance;o++){let a=e+r,l=n+o,c=`${a},${l}`;if(i.add(c),!this.chunks.has(c)){this.loadChunk(a,l);return}}for(let[r,o]of this.chunks){if(o.lodLevel===void 0)continue;let a=r.split(","),l=parseInt(a[0],10),c=parseInt(a[1],10),h=this.detailLevel(l,c,e,n);if(o.lodLevel!==h){this.unloadChunk(r),this.loadChunk(l,c);return}}for(let[r,o]of this.chunks)i.has(r)||this.unloadChunk(r)}loadChunk(t,e){let n=this.noise.noise2D(t*.1,e*.1),i=Math.sqrt(t*t+e*e),r=i<6,o=!r&&Math.abs(e)<=5,a=!r&&Math.abs(t)<=5,l=o||a,c=t*this.chunkSize,h=e*this.chunkSize,u;if(r){let f=0;if(this.player){let d=this.player.camera.position,g=Math.floor(d.x/this.chunkSize),x=Math.floor(d.z/this.chunkSize);f=this.detailLevel(t,e,g,x)}else f=i>this.lodDistance?1:0;u=zh(c,h,this.chunkSize,this.worldData.roadWidth,f),u.lodLevel=f,f===0&&(this.trafficSystem&&this.trafficSystem.loadChunk(t,e,"city"),this.parkingSystem&&this.parkingSystem.loadChunk(t,e),this.pedestrianSystem&&this.pedestrianSystem.loadChunk(t,e),this.trafficLightSystem&&this.trafficLightSystem.loadChunk(t,e),this.constructionSystem.loadChunk(t,e,u))}else if(l){let f="x";o&&a?f="cross":a&&(f="z"),u=Hh(c,h,this.chunkSize,this.worldData.roadWidth,f),this.trafficSystem&&this.trafficSystem.loadChunk(t,e,`highway_${f}`)}else u=Vh(c,h,this.chunkSize);u.mesh&&this.scene.add(u.mesh),this.chunks.set(`${t},${e}`,u)}unloadChunk(t){let e=this.chunks.get(t);if(e){e.mesh&&this.scene.remove(e.mesh);let n=t.split(","),i=parseInt(n[0]),r=parseInt(n[1]);this.trafficSystem&&this.trafficSystem.unloadChunk(i,r),this.parkingSystem&&this.parkingSystem.unloadChunk(i,r),this.pedestrianSystem&&this.pedestrianSystem.unloadChunk(i,r),this.trafficLightSystem&&this.trafficLightSystem.unloadChunk(i,r),this.constructionSystem.unloadChunk(i,r)}this.chunks.delete(t)}detailLevel(t,e,n,i){let r=t-n,o=e-i;return Math.sqrt(r*r+o*o)>this.lodDistance?1:0}getColliders(){let t=[];for(let e of this.chunks.values())e.colliders&&(t=t.concat(e.colliders));if(this.parkingSystem){let e=this.parkingSystem.getColliders();t=t.concat(e)}if(this.trafficSystem){let e=this.trafficSystem.getColliders();t=t.concat(e)}return t}};var vo=class{constructor(){this.reset()}reset(){this.frames=0,this.avgFrameMs=0,this.lastFps=0,this.drawCalls=0,this.triangles=0,this.instances=0}recordFrame(t,e,n){let i=Math.max(t,1e-4)*1e3,r=this.frames;return this.frames+=1,this.avgFrameMs=r===0?i:(this.avgFrameMs*r+i)/(r+1),this.lastFps=1e3/i,this.drawCalls=e||this.drawCalls,this.triangles=n||this.triangles,this}countDrawCalls(t){let e=0,n=0;return t.traverse(i=>{i.isMesh&&i.visible&&i.material&&(e+=1,n+=i.isInstancedMesh?i.count:1)}),this.drawCalls=e,this.instances=n,{drawCalls:e,instances:n}}measureFrameBudget(t,e=1/60,n=120){let i=performance.now();for(let l=0;l<n;l++)t(e);let r=performance.now()-i,o=r/n,a=1e3/Math.max(o,.001);return this.frames=n,this.avgFrameMs=o,this.lastFps=a,{frames:n,avgFrameMs:o,fps:a,elapsedMs:r}}recordBudget(t){return this.loop=t||null,this.skippedFrames=t?t.skipped:0,this.overBudgetFrames=t?t.overBudget:0,this.clampedDts=t?t.clamped:0,this}snapshot(){return{frames:this.frames,avgFrameMs:+this.avgFrameMs.toFixed(3),fps:+this.lastFps.toFixed(2),drawCalls:this.drawCalls,instances:this.instances,triangles:this.triangles,loop:this.loop,skippedFrames:this.skippedFrames,overBudgetFrames:this.overBudgetFrames,clampedDts:this.clampedDts}}};var Mo=class{constructor(t,e=16){this.chunkSize=t,this.radius=e,this.nodes=new Map,this.build()}key(t,e){return`${t},${e}`}roadAxes(t,e){if(Math.sqrt(t*t+e*e)<6)return{x:!0,z:!0};let r=Math.abs(e)<=5,o=Math.abs(t)<=5;return{x:r,z:o}}hasRoad(t,e,n){let i=this.nodes.get(this.key(t,e));return i?i[n]:!1}build(){for(let e=-this.radius;e<=this.radius;e++)for(let n=-this.radius;n<=this.radius;n++){let i=this.roadAxes(e,n);(i.x||i.z)&&this.nodes.set(this.key(e,n),{cx:e,cz:n,x:i.x,z:i.z,edges:[],key:this.key(e,n)})}let t=(e,n,i)=>{let r=this.nodes.get(e),o=this.nodes.get(n);return!r||!o||!r[i]||!o[i]?!1:(r.edges.push({to:n,axis:i,dir:1}),o.edges.push({to:e,axis:i,dir:-1}),!0)};for(let e of this.nodes.values()){let n=this.key(e.cx+1,e.cz),i=this.key(e.cx-1,e.cz),r=this.key(e.cx,e.cz+1),o=this.key(e.cx,e.cz-1);t(this.key(e.cx,e.cz),n,"x"),t(this.key(e.cx,e.cz),i,"x"),t(this.key(e.cx,e.cz),r,"z"),t(this.key(e.cx,e.cz),o,"z")}this.centerKey=this.key(0,0)}nodeCount(){return this.nodes.size}edgeCount(){let t=0;for(let e of this.nodes.values())t+=e.edges.length;return t}getNode(t,e){return typeof t=="string"?this.nodes.get(t)||null:this.nodes.get(this.key(t,e))||null}neighbors(t){let e=this.nodes.get(t);return e?e.edges:[]}turnsAt(t,e){let n=this.nodes.get(t);if(!n)return[];let i=e==="x"?"z":"x",r=[];for(let o of n.edges)o.axis===i&&!r.includes(o.to)&&r.push(o.to);return r}connected(){let t=new Set([this.centerKey]),e=[this.centerKey];for(;e.length;){let n=e.shift();for(let i of this.neighbors(n))t.has(i.to)||(t.add(i.to),e.push(i.to))}return{reached:t.size,total:this.nodes.size,connected:t.size===this.nodes.size}}shortestPath(t,e){if(t===e)return[t];let n=new Map([[t,null]]),i=[t];for(;i.length;){let a=i.shift();if(a===e)break;for(let l of this.neighbors(a))n.has(l.to)||(n.set(l.to,a),i.push(l.to))}if(!n.has(e))return null;let r=[],o=e;for(;o!==null&&(r.push(o),o=n.get(o),o!==null););return r.reverse(),r}nodeAtWorld(t,e){let n=Math.round(t/this.chunkSize),i=Math.round(e/this.chunkSize);return this.getNode(n,i)}};var Bs={city:"city",highway:"highway",wasteland:"wasteland"},yx=[{name:"Brick Residential",color:"#c8a07a"},{name:"Financial Core",color:"#7aa0d8"},{name:"Neon District",color:"#d87aa0"},{name:"Industrial Zone",color:"#8a8a8a"},{name:"Parkland",color:"#7ac878"}],vx={city:"rgba(80,120,220,0.9)",highway:"rgba(230,200,90,0.9)",wasteland:"rgba(120,100,80,0.9)"},So=class{constructor(t,e={}){this.chunkManager=t,this.size=e.size||160,this.chunkSize=t?t.chunkSize:34,this.renderDistance=e.renderDistance||3,this.playerChunk=[0,0],this.district="City Center",this.activeChunks=[],this.canvas=null,this.ctx=null,this._tryCreateCanvas()}_tryCreateCanvas(){try{let t=document.createElement("canvas");t.width=this.size,t.height=this.size,this.canvas=t,this.ctx=t.getContext&&t.getContext("2d"),this.ctx&&(t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.border="1px solid rgba(255,255,255,0.35)",t.style.boxShadow="0 2px 8px rgba(0,0,0,0.5)",t.style.fontFamily="monospace",document.body.appendChild(t))}catch{this.canvas=null,this.ctx=null}return this}biomeAt(t,e){if(Math.sqrt(t*t+e*e)<6)return Bs.city;let i=Math.abs(e)<=5,r=Math.abs(t)<=5;return i||r?Bs.highway:Bs.wasteland}districtAt(t,e){let n=this.biomeAt(t,e);if(n===Bs.wasteland)return"Wasteland";if(n===Bs.highway)return"Highway Corridor";let i=oi.noise2D(t*.23,e*.23),r=0;return i<.15?r=0:i<.35?r=1:i<.55?r=2:i<.75?r=3:r=4,yx[r].name}update(t){let e=t?t.x:0,n=t?t.z:0;if(this.playerChunk=[Math.floor(e/this.chunkSize),Math.floor(n/this.chunkSize)],this.district=this.districtAt(this.playerChunk[0],this.playerChunk[1]),this.activeChunks=[],this.chunkManager)for(let i of this.chunkManager.chunks.keys()){let r=i.split(",").map(Number);this.activeChunks.push({x:r[0],z:r[1],biome:this.biomeAt(r[0],r[1])})}return this._draw(),this}_draw(){let t=this.ctx;if(!t)return;let e=this.size;t.clearRect(0,0,e,e),t.fillStyle="rgba(20,20,28,0.92)",t.fillRect(0,0,e,e);let[n,i]=this.playerChunk,r=e/(this.renderDistance*2+1),o=new Set;for(let a=-this.renderDistance;a<=this.renderDistance;a++)for(let l=-this.renderDistance;l<=this.renderDistance;l++){let c=n+a,h=i+l,u=`${c},${h}`;o.add(u);let f=(a+this.renderDistance)*r,d=(l+this.renderDistance)*r;t.fillStyle=vx[this.biomeAt(c,h)],t.fillRect(f+1,d+1,r-2,r-2),t.strokeStyle="rgba(255,255,255,0.15)",t.strokeRect(f+1,d+1,r-2,r-2)}t.fillStyle="#ffffff",t.beginPath(),t.arc(e/2,e/2,Math.max(3,r*.35),0,Math.PI*2),t.fill(),t.strokeStyle="#ff4d4d",t.stroke(),t.fillStyle="#ffffff",t.font="bold 11px monospace",t.fillText(this.district,6,e-8),t.fillStyle="rgba(255,255,255,0.6)",t.font="9px monospace",t.fillText(`chunk ${this.playerChunk[0]},${this.playerChunk[1]}`,6,e-20)}dispose(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null,this.ctx=null}};var bo=class{constructor({maxDt:t=.1,budgetMs:e=16.7,onSkip:n=null}={}){this.maxDt=t,this.budgetMs=e,this.onSkip=n,this.prevTime=null,this.skipNext=!1,this.frames=0,this.skipped=0,this.overBudget=0,this.clamped=0,this.lastDt=0,this.lastWorkMs=0}tick(t){if(this.prevTime===null)return this.prevTime=t,this.frames++,{dt:0,first:!0,skipped:!1};let e=(t-this.prevTime)/1e3;return this.prevTime=t,e>this.maxDt&&(e=this.maxDt,this.clamped++),this.lastDt=e,this.frames++,this.skipNext?(this.skipNext=!1,this.skipped++,this.onSkip&&this.onSkip(),{dt:e,first:!1,skipped:!0}):{dt:e,first:!1,skipped:!1}}reportWork(t){return this.lastWorkMs=t,t>this.budgetMs&&(this.overBudget++,this.skipNext=!0),t}step(t=1,e=1/60,n=1){let i=0,r=0,o=0,a=this.prevTime===null?0:this.prevTime;for(let l=0;l<t;l++)a+=e*1e3,this.tick(a).skipped&&i++,e>this.maxDt&&r++,this.reportWork(n),n>this.budgetMs&&o++;return{skipped:i,clamped:r,over:o}}snapshot(){return{frames:this.frames,skipped:this.skipped,overBudget:this.overBudget,clamped:this.clamped,maxDt:this.maxDt,budgetMs:this.budgetMs,lastDt:+this.lastDt.toFixed(3),lastWorkMs:+this.lastWorkMs.toFixed(2)}}};var ge;var En,is,ss,li,rs,Eo,Hn,Vn,os,ci,wo,hi,as,bl,To;function Sx(){En=document.createElement("div"),En.style.position="absolute",En.style.top="20px",En.style.left="20px",En.style.color="#fff",En.style.fontSize="24px",En.style.fontFamily="monospace",En.innerHTML="Score: 0",document.body.appendChild(En)}window.addEventListener("error",s=>{let t=document.createElement("div");t.style.position="absolute",t.style.top="10px",t.style.left="10px",t.style.color="red",t.style.background="rgba(0,0,0,0.8)",t.style.padding="10px",t.textContent=`Error: ${s.message}`,document.body.appendChild(t)});async function bx(){Sx(),Ih(1337);try{let{scene:s,camera:t,renderer:e}=Ch(),n=await Gh(s);Hn=new go(s),Vn=new xo({renderer:e,scene:s,camera:t}),Vn.enabled&&window.addEventListener("resize",()=>Vn.resize()),os=new _o(s,n.roadWidth,n.blockSize),wo=new ro(s),ci=new so(s,n.roadWidth,n.blockSize),ci.setEffects(Hn),window.emergencySystem=ci,is=new io(s,n.citySize,n.blockSize,n.roadWidth),rs=new lo(s,n.citySize,n.blockSize,n.roadWidth),li=new ao(s,n.citySize,n.blockSize,n.roadWidth),ge=new to(t,document.body,[],null,null,Hn),ge.emergencySystem=ci,hi=new yo(s,ge,n,is,rs,li,os,wo),hi.update(),ge.colliders=hi.getColliders(),ge.trafficSystem=is,ge.parkingSystem=rs,ge.pedestrianSystem=li,bl=new Mo(n.blockSize,16),window.roadGraph=bl,To=new So(hi),window.minimap=To,is.setDependencies(ge,rs,os,Hn,li,bl,ci),rs.setDependencies(Hn),li.setDependencies(os,rs,Hn),ss=new oo(s,n.directionalLight,n.ambientLight,n.materials),ge.weatherSystem=ss,Eo=new co(s,n.citySize),window.airplaneSystem=Eo,as=new vo,window.frameBudget=as,window.__worldloop={ready:!1,drawCalls:0,fps:0,triangles:0,errors:0},console.log("Game Initialized with Infinite World + Populated Chunks");let i=document.createElement("div");i.style.position="absolute",i.style.bottom="34px",i.style.right="10px",i.style.color="#8affaa",i.style.background="rgba(0,0,0,0.5)",i.style.padding="5px",i.style.fontFamily="monospace",i.style.fontSize="12px",i.innerHTML="fps -- | dc --",document.body.appendChild(i);let r=0,o=document.createElement("div");o.style.position="absolute",o.style.bottom="10px",o.style.right="10px",o.style.color="white",o.style.background="rgba(0,0,0,0.5)",o.style.padding="5px",o.style.fontFamily="monospace",o.innerHTML="v6.4.2: Varied Cloud Sizes",document.body.appendChild(o);let a=new bo({maxDt:.1,budgetMs:16.7});Rh(a,l=>{try{if(hi&&(hi.update(),ge&&(ge.colliders=hi.getColliders())),ge&&ge.update(l),ci&&ci.update(l),is&&is.update(l),os&&os.update(l),wo&&wo.update(l),ss){let c=ge&&ge.mesh?ge.mesh.position:new A;ss.update(l,c)}if(li&&li.update(l),Eo&&Eo.update(l),To){let c=ge&&ge.mesh?ge.mesh.position:new A;To.update(c)}if(Hn&&Hn.update(l),Vn){let c=0;s&&s.traverse(u=>{if(u.isMesh&&u.material&&u.material.color){let f=u.material.color.getHex();(f===65535||f===16711935)&&c++}}),c=Math.min(1,c/24);let h=ss?ss.currentWeatherState:null;Vn.update(h,c)}if(Vn&&Vn.enabled?Vn.render():e.render(s,t),as.recordFrame(l,e.info.render.calls,e.info.render.triangles),as.recordBudget(a.snapshot()),!window.__worldloop.ready){let c=as.snapshot();window.__worldloop.drawCalls=c.drawCalls,window.__worldloop.fps=c.fps,window.__worldloop.triangles=c.triangles,window.__worldloop.ready=c.frames>0&&c.drawCalls>0}if(r+=l,r>=.5&&i){r=0;let c=as.snapshot();i.innerHTML="fps "+c.fps+" | dc "+c.drawCalls}}catch(c){console.error("Game Loop Error:",c)}})}catch(s){throw console.error(s),s}}bx();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
