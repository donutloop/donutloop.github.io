var Nl="160";var Dd=0,wc=1,Ud=2;var eu=1,Fl=2,wn=3,Yn=0,De=1,Tn=2;var fn=0,qi=1,qn=2,bc=3,Tc=4,Nd=5,ci=100,Fd=101,Od=102,Ac=103,Cc=104,kd=200,Bd=201,zd=202,Hd=203,Xa=204,Ya=205,Vd=206,Gd=207,Wd=208,Xd=209,Yd=210,qd=211,Zd=212,$d=213,Jd=214,Kd=0,jd=1,Qd=2,Fr=3,tf=4,ef=5,nf=6,sf=7,Ol=0,rf=1,of=2,Wn=0,kl=1,Bl=2,zl=3,Zs=4,af=5,Hl=6;var nu=300,Ji=301,Ki=302,qa=303,Za=304,go=306,$a=1e3,rn=1001,Ja=1002,ze=1003,Rc=1004;var ua=1005;var Ke=1006,lf=1007;var Bs=1008;var Xn=1009,cf=1010,hf=1011,Vl=1012,iu=1013,Vn=1014,Gn=1015,an=1016,su=1017,ru=1018,ui=1020,uf=1021,on=1023,df=1024,ff=1025,di=1026,ji=1027,pf=1028,ou=1029,mf=1030,au=1031,lu=1033,da=33776,fa=33777,pa=33778,ma=33779,Pc=35840,Lc=35841,Ic=35842,Dc=35843,cu=36196,Uc=37492,Nc=37496,Fc=37808,Oc=37809,kc=37810,Bc=37811,zc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,Yc=37818,qc=37819,Zc=37820,$c=37821,ga=36492,Jc=36494,Kc=36495,gf=36283,jc=36284,Qc=36285,th=36286;var Or=2300,kr=2301,xa=2302,eh=2400,nh=2401,ih=2402;var hu=3e3,fi=3001,xf=3200,_f=3201,Gl=0,yf=1,je="",Ce="srgb",Cn="srgb-linear",Wl="display-p3",xo="display-p3-linear",Br="linear",Qt="srgb",zr="rec709",Hr="p3";var Ti=7680;var sh=519,vf=512,Mf=513,Sf=514,uu=515,Ef=516,wf=517,bf=518,Tf=519,rh=35044,du=35048;var oh="300 es",Ka=1035,An=2e3,Vr=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,Ds=Math.PI/180,zs=180/Math.PI;function os(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Xl(s,t){return(s%t+t)%t}function Af(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Cf(s,t,e){return s!==t?(e-s)/(t-s):0}function Us(s,t,e){return(1-e)*s+e*t}function Rf(s,t,e,n){return Us(s,t,1-Math.exp(-e*n))}function Pf(s,t=1){return t-Math.abs(Xl(s,t*2)-t)}function Lf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function If(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Df(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uf(s,t){return s+Math.random()*(t-s)}function Nf(s){return s*(.5-Math.random())}function Ff(s){s!==void 0&&(ah=s);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Of(s){return s*Ds}function kf(s){return s*zs}function ja(s){return(s&s-1)===0&&s!==0}function Bf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zf(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var as={DEG2RAD:Ds,RAD2DEG:zs,generateUUID:os,clamp:Te,euclideanModulo:Xl,mapLinear:Af,inverseLerp:Cf,lerp:Us,damp:Rf,pingpong:Pf,smoothstep:Lf,smootherstep:If,randInt:Df,randFloat:Uf,randFloatSpread:Nf,seededRandom:Ff,degToRad:Of,radToDeg:kf,isPowerOfTwo:ja,ceilPowerOfTwo:Bf,floorPowerOfTwo:Gr,setQuaternionFromProperEuler:zf,normalize:ke,denormalize:Gi},it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],_=i[4],M=i[7],R=i[2],b=i[5],C=i[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*_+l*b,r[6]=o*p+a*M+l*C,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*b,r[7]=c*p+h*M+u*C,r[2]=d*x+f*y+g*R,r[5]=d*m+f*_+g*b,r[8]=d*p+f*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Xt;function fu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hf(){let s=Wr("canvas");return s.style.display="block",s}var lh={};function Ns(s){s in lh||(lh[s]=!0,console.warn(s))}var ch=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hh=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Cn]:{transfer:Br,primaries:zr,toReference:s=>s,fromReference:s=>s},[Ce]:{transfer:Qt,primaries:zr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xo]:{transfer:Br,primaries:Hr,toReference:s=>s.applyMatrix3(hh),fromReference:s=>s.applyMatrix3(ch)},[Wl]:{transfer:Qt,primaries:Hr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(hh),fromReference:s=>s.applyMatrix3(ch).convertLinearToSRGB()}},Vf=new Set([Cn,xo]),$t={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=cr[t].toReference,i=cr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return cr[s].primaries},getTransfer:function(s){return s===je?Br:cr[s].transfer}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ya(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ai,Xr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Wr("canvas")),Ai.width=t.width,Ai.height=t.height;let n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gf=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(va(i[o].image)):r.push(va(i[o]))}else r=va(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wf=0,ln=class s extends pn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=rn,i=rn,r=Ke,o=Bs,a=on,l=Xn,c=s.DEFAULT_ANISOTROPY,h=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=os(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fi?Ce:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?fi:hu}set encoding(t){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fi?Ce:je}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=nu;ln.DEFAULT_ANISOTROPY=1;var re=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,R=(p+1)/2,b=(h+d)/4,C=(u+x)/4,I=(g+m)/4;return _>M&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=C/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fi?Ce:je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qr=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),b=Math.atan2(R,p*y);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}let M=a*y;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+x*M,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new A,uh=new Zn,qt=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),ur.subVectors(this.max,Ts),Ci.subVectors(t.a,Ts),Ri.subVectors(t.b,Ts),Pi.subVectors(t.c,Ts),On.subVectors(Ri,Ci),kn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let e=[0,-On.z,On.y,0,-kn.z,kn.y,0,-si.z,si.y,On.z,0,-On.x,kn.z,0,-kn.x,si.z,0,-si.x,-On.y,On.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!Sa(e,Ci,Ri,Pi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Ci,Ri,Pi,ur))?!1:(dr.crossVectors(On,kn),e=[dr.x,dr.y,dr.z],Sa(e,Ci,Ri,Pi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yn=[new A,new A,new A,new A,new A,new A,new A,new A],en=new A,hr=new qt,Ci=new A,Ri=new A,Pi=new A,On=new A,kn=new A,si=new A,Ts=new A,ur=new A,dr=new A,ri=new A;function Sa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ri.fromArray(s,r);let a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xf=new qt,As=new A,Ea=new A,$n=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Ea)),this.expandByPoint(As.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new A,wa=new A,fr=new A,Bn=new A,ba=new A,pr=new A,Ta=new A,Zr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(wa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=Bn.dot(this.direction),l=-Bn.dot(fr),c=Bn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wa).addScaledVector(fr,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){ba.subVectors(e,t),pr.subVectors(n,t),Ta.crossVectors(ba,pr);let o=this.direction.dot(Ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);let l=a*this.direction.dot(pr.crossVectors(Bn,pr));if(l<0)return null;let c=a*this.direction.dot(ba.cross(Bn));if(c<0||l+c>o)return null;let h=-a*Bn.dot(Ta);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,qf)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),zn.crossVectors(n,We),zn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),zn.crossVectors(n,We)),zn.normalize(),mr.crossVectors(We,zn),i[0]=zn.x,i[4]=mr.x,i[8]=We.x,i[1]=zn.y,i[5]=mr.y,i[9]=We.y,i[2]=zn.z,i[6]=mr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],M=n[11],R=n[15],b=i[0],C=i[4],I=i[8],v=i[12],E=i[1],D=i[5],F=i[9],q=i[13],P=i[2],N=i[6],V=i[10],Y=i[14],W=i[3],X=i[7],Z=i[11],j=i[15];return r[0]=o*b+a*E+l*P+c*W,r[4]=o*C+a*D+l*N+c*X,r[8]=o*I+a*F+l*V+c*Z,r[12]=o*v+a*q+l*Y+c*j,r[1]=h*b+u*E+d*P+f*W,r[5]=h*C+u*D+d*N+f*X,r[9]=h*I+u*F+d*V+f*Z,r[13]=h*v+u*q+d*Y+f*j,r[2]=g*b+x*E+m*P+p*W,r[6]=g*C+x*D+m*N+p*X,r[10]=g*I+x*F+m*V+p*Z,r[14]=g*v+x*q+m*Y+p*j,r[3]=y*b+_*E+M*P+R*W,r[7]=y*C+_*D+M*N+R*X,r[11]=y*I+_*F+M*V+R*Z,r[15]=y*v+_*q+M*Y+R*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,M=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,b=e*y+n*_+i*M+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return t[0]=y*C,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*C,t[8]=M*C,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=R*C,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,M=l*u,R=n.x,b=n.y,C=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+M)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+_)*C,i[9]=(m-y)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Li.set(i[0],i[1],i[2]).length(),o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);let c=1/r,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=An){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===An)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=An){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,g,x;if(a===An)g=(o+r)*u,x=-2*u;else if(a===Vr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Li=new A,nn=new oe,Yf=new A(0,0,0),qf=new A(1,1,1),zn=new A,mr=new A,We=new A,dh=new oe,fh=new Zn,Qi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,ph=new A,Ii=new Zn,Mn=new oe,gr=new A,Cs=new A,$f=new A,Jf=new Zn,mh=new A(1,0,0),gh=new A(0,1,0),xh=new A(0,0,1),Kf={type:"added"},jf={type:"removed"},ue=class s extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new Qi,n=new Zn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Xt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(gh,t)}rotateZ(t){return this.rotateOnAxis(xh,t)}translateOnAxis(t,e){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(gh,t)}translateZ(t){return this.translateOnAxis(xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Cs,gr,this.up):Mn.lookAt(gr,Cs,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ue.DEFAULT_UP=new A(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new A,Sn=new A,Aa=new A,En=new A,Di=new A,Ui=new A,_h=new A,Ca=new A,Ra=new A,Pa=new A,xr=!1,Wi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),Sn.subVectors(n,e),Aa.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(Sn),l=sn.dot(Aa),c=Sn.dot(Sn),h=Sn.dot(Aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,i,r,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Di.subVectors(i,n),Ui.subVectors(r,n),Ca.subVectors(t,n);let l=Di.dot(Ca),c=Ui.dot(Ca);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,i);let h=Di.dot(Ra),u=Ui.dot(Ra);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);Pa.subVectors(t,r);let f=Di.dot(Pa),g=Ui.dot(Pa);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _h.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(_h,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function La(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Xl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=La(o,r,t+1/3),this.g=La(o,r,t),this.b=La(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return $t.fromWorkingColorSpace(Le.copy(this),t),Math.round(Te(Le.r*255,0,255))*65536+Math.round(Te(Le.g*255,0,255))*256+Math.round(Te(Le.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Le.copy(this),e);let n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ce){$t.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,i=Le.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(_r);let n=Us(Hn.h,_r.h,e),i=Us(Hn.s,_r.s,e),r=Us(Hn.l,_r.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new ft;ft.NAMES=pu;var Qf=0,Rn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=os(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ie=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new A,yr=new it,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rh&&(t.usage=this.usage),t}};var Jr=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}};var tp=0,Je=new oe,Ia=new ue,Ni=new A,Xe=new qt,Rs=new qt,be=new A,me=class s extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?Kr:Jr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Xe.min,Rs.min),Xe.expandByPoint(be),be.addVectors(Xe.max,Rs.max),Xe.expandByPoint(be)):(Xe.expandByPoint(Rs.min),Xe.expandByPoint(Rs.max))}Xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),be.add(Ni)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new A,h[E]=new A;let u=new A,d=new A,f=new A,g=new it,x=new it,m=new it,p=new A,y=new A;function _(E,D,F){u.fromArray(i,E*3),d.fromArray(i,D*3),f.fromArray(i,F*3),g.fromArray(o,E*2),x.fromArray(o,D*2),m.fromArray(o,F*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let q=1/(x.x*m.y-m.x*x.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(q),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(q),c[E].add(p),c[D].add(p),c[F].add(p),h[E].add(y),h[D].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,D=M.length;E<D;++E){let F=M[E],q=F.start,P=F.count;for(let N=q,V=q+P;N<V;N+=3)_(n[N+0],n[N+1],n[N+2])}let R=new A,b=new A,C=new A,I=new A;function v(E){C.fromArray(r,E*3),I.copy(C);let D=c[E];R.copy(D),R.sub(C.multiplyScalar(C.dot(D))).normalize(),b.crossVectors(I,D);let q=b.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=q}for(let E=0,D=M.length;E<D;++E){let F=M[E],q=F.start,P=F.count;for(let N=q,V=q+P;N<V;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new oe,oi=new Zr,vr=new $n,vh=new A,Fi=new A,Oi=new A,ki=new A,Da=new A,Mr=new A,Sr=new it,Er=new it,wr=new it,Mh=new A,Sh=new A,Eh=new A,br=new A,Tr=new A,et=class extends ue{constructor(t=new me,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Da.fromBufferAttribute(u,t),o?Mr.addScaledVector(Da,h):Mr.addScaledVector(Da.sub(e),h))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(vr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(vr,vh)===null||oi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),oi.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=_;M<R;M+=3){let b=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);i=Ar(this,p,t,n,c,h,u,b,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);i=Ar(this,o,t,n,c,h,u,y,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=_;M<R;M+=3){let b=M,C=M+1,I=M+2;i=Ar(this,p,t,n,c,h,u,b,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,M=m+2;i=Ar(this,o,t,n,c,h,u,y,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function ep(s,t,e,n,i,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Yn,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:s}}function Ar(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Fi),s.getVertexPosition(l,Oi),s.getVertexPosition(c,ki);let h=ep(s,t,e,n,Fi,Oi,ki,br);if(h){i&&(Sr.fromBufferAttribute(i,a),Er.fromBufferAttribute(i,l),wr.fromBufferAttribute(i,c),h.uv=Wi.getInterpolation(br,Fi,Oi,ki,Sr,Er,wr,new it)),r&&(Sr.fromBufferAttribute(r,a),Er.fromBufferAttribute(r,l),wr.fromBufferAttribute(r,c),h.uv1=Wi.getInterpolation(br,Fi,Oi,ki,Sr,Er,wr,new it),h.uv2=h.uv1),o&&(Mh.fromBufferAttribute(o,a),Sh.fromBufferAttribute(o,l),Eh.fromBufferAttribute(o,c),h.normal=Wi.getInterpolation(br,Fi,Oi,ki,Mh,Sh,Eh,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};Wi.getNormal(Fi,Oi,ki,u.normal),h.face=u}return h}var Lt=class s extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(x,m,p,y,_,M,R,b,C,I,v){let E=M/C,D=R/I,F=M/2,q=R/2,P=b/2,N=C+1,V=I+1,Y=0,W=0,X=new A;for(let Z=0;Z<V;Z++){let j=Z*D-q;for(let ut=0;ut<N;ut++){let G=ut*E-F;X[x]=G*y,X[m]=j*_,X[p]=P,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(ut/C),u.push(1-Z/I),Y+=1}}for(let Z=0;Z<I;Z++)for(let j=0;j<C;j++){let ut=d+j+N*Z,G=d+j+N*(Z+1),$=d+(j+1)+N*(Z+1),ht=d+(j+1)+N*Z;l.push(ut,G,ht),l.push(G,$,ht),W+=6}a.addGroup(f,W,v),f+=W,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function np(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mu(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}var Kn={clone:ts,merge:Be},ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},jr=class extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bi=-90,zi=1,el=class extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ie(Bi,zi,t,e);i.layers=this.layers,this.add(i);let r=new Ie(Bi,zi,t,e);r.layers=this.layers,this.add(r);let o=new Ie(Bi,zi,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Bi,zi,t,e);a.layers=this.layers,this.add(a);let l=new Ie(Bi,zi,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qr=class extends ln{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fi?Ce:je),this.texture=new Qr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Lt(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:fn});r.uniforms.tEquirect.value=e;let o=new et(i,r),a=e.minFilter;return e.minFilter===Bs&&(e.minFilter=Ke),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ua=new A,rp=new A,op=new Xt,bn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ua.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),i=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new $n,Cr=new A,Hs=class{constructor(t=new bn,e=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+o,d+h,m+g,M+y).normalize(),n[3].setComponents(l-o,d-h,m-g,M-y).normalize(),n[4].setComponents(l-a,d-u,m-x,M-_).normalize(),e===An)n[5].setComponents(l+a,d+u,m+x,M+_).normalize();else if(e===Vr)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ap(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Pn=class s extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let _=0;_<c;_++){let M=_*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,M=y+c*(p+1),R=y+1+c*(p+1),b=y+1+c*p;f.push(_,M,b),f.push(M,R,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
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
}`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:_p,beginnormal_vertex:yp,bsdfs:vp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:kp,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:Yp,fog_fragment:qp,fog_pars_fragment:Zp,gradientmap_pars_fragment:$p,lightmap_fragment:Jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:xm,map_particle_pars_fragment:_m,metalnessmap_fragment:ym,metalnessmap_pars_fragment:vm,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:wm,normal_fragment_begin:bm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:km,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:Zm,skinning_vertex:$m,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:_0,linedashed_vert:y0,linedashed_frag:v0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:E0,meshlambert_frag:w0,meshmatcap_vert:b0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:C0,meshphong_vert:R0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:k0,sprite_vert:B0,sprite_frag:z0},rt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},dn={basic:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Be([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Be([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Be([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Be([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Be([rt.lights,rt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};dn.physical={uniforms:Be([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Rr={r:0,b:0,g:0};function H0(s,t,e,n,i,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===go)?(h===void 0&&(h=new et(new Lt(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:ts(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=$t.getTransfer(_.colorSpace)!==Qt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new et(new Pn(2,2),new Ae({name:"BackgroundMaterial",uniforms:ts(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Rr,mu(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function V0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,N,V,Y,W){let X=!1;if(o){let Z=x(Y,V,N);c!==Z&&(c=Z,f(c.object)),X=p(P,Y,V,W),X&&y(P,Y,V,W)}else{let Z=N.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==Z)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=Z,X=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(P,N,V,Y),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,N,V){let Y=V.wireframe===!0,W=a[P.id];W===void 0&&(W={},a[P.id]=W);let X=W[N.id];X===void 0&&(X={},W[N.id]=X);let Z=X[Y];return Z===void 0&&(Z=m(d()),X[Y]=Z),Z}function m(P){let N=[],V=[],Y=[];for(let W=0;W<i;W++)N[W]=0,V[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,N,V,Y){let W=c.attributes,X=N.attributes,Z=0,j=V.getAttributes();for(let ut in j)if(j[ut].location>=0){let $=W[ut],ht=X[ut];if(ht===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function y(P,N,V,Y){let W={},X=N.attributes,Z=0,j=V.getAttributes();for(let ut in j)if(j[ut].location>=0){let $=X[ut];$===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),W[ut]=ht,Z++}c.attributes=W,c.attributesNum=Z,c.index=Y}function _(){let P=c.newAttributes;for(let N=0,V=P.length;N<V;N++)P[N]=0}function M(P){R(P,0)}function R(P,N){let V=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;V[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),W[P]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),W[P]=N)}function b(){let P=c.newAttributes,N=c.enabledAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]!==P[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function C(P,N,V,Y,W,X,Z){Z===!0?s.vertexAttribIPointer(P,N,V,W,X):s.vertexAttribPointer(P,N,V,Y,W,X)}function I(P,N,V,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let W=Y.attributes,X=V.getAttributes(),Z=N.defaultAttributeValues;for(let j in X){let ut=X[j];if(ut.location>=0){let G=W[j];if(G===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let $=G.normalized,ht=G.itemSize,pt=e.get(G);if(pt===void 0)continue;let mt=pt.buffer,It=pt.type,Ot=pt.bytesPerElement,Ct=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||G.gpuType===iu);if(G.isInterleavedBufferAttribute){let Zt=G.data,O=Zt.stride,Ne=G.offset;if(Zt.isInstancedInterleavedBuffer){for(let Et=0;Et<ut.locationSize;Et++)R(ut.location+Et,Zt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let Et=0;Et<ut.locationSize;Et++)M(ut.location+Et);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Et=0;Et<ut.locationSize;Et++)C(ut.location+Et,ht/ut.locationSize,It,$,O*Ot,(Ne+ht/ut.locationSize*Et)*Ot,Ct)}else{if(G.isInstancedBufferAttribute){for(let Zt=0;Zt<ut.locationSize;Zt++)R(ut.location+Zt,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Zt=0;Zt<ut.locationSize;Zt++)M(ut.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Zt=0;Zt<ut.locationSize;Zt++)C(ut.location+Zt,ht/ut.locationSize,It,$,ht*Ot,ht/ut.locationSize*Zt*Ot,Ct)}}else if(Z!==void 0){let $=Z[j];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ut.location,$);break;case 3:s.vertexAttrib3fv(ut.location,$);break;case 4:s.vertexAttrib4fv(ut.location,$);break;default:s.vertexAttrib1fv(ut.location,$)}}}}b()}function v(){F();for(let P in a){let N=a[P];for(let V in N){let Y=N[V];for(let W in Y)g(Y[W].object),delete Y[W];delete N[V]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let N=a[P.id];for(let V in N){let Y=N[V];for(let W in Y)g(Y[W].object),delete Y[W];delete N[V]}delete a[P.id]}function D(P){for(let N in a){let V=a[N];if(V[P.id]===void 0)continue;let Y=V[P.id];for(let W in Y)g(Y[W].object),delete Y[W];delete V[P.id]}}function F(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:M,disableUnusedAttributes:b}}function G0(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function W0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||t.has("OES_texture_float"),R=_&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function X0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new bn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,M=p.clippingState||null;l.value=M,M=h(g,d,_,f);for(let R=0;R!==_;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Y0(s){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=Ji:a===Za&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Za)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var es=class extends jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xi=4,wh=[.125,.215,.35,.446,.526,.582],hi=20,Na=new es,bh=new ft,Fa=null,Oa=0,ka=0,li=(1+Math.sqrt(5))/2,Hi=1/li,Th=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,li,Hi),new A(0,li,-Hi),new A(Hi,0,li),new A(-Hi,0,li),new A(li,Hi,0),new A(-li,Hi,0)],ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Oa,ka),t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:an,format:on,colorSpace:Cn,depthBuffer:!1},i=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Z0(r,t,e)}return i}_compileMaterial(t){let e=new et(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,i){let a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bh),h.toneMapping=Wn,h.autoClear=!1;let f=new ie({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new et(new Lt,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(bh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Pr(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ji||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Th[(i-1)%Th.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);let p=[],y=0;for(let C=0;C<hi;++C){let I=C/x,v=Math.exp(-I*I/2);p.push(v),C===0?y+=v:C<m&&(y+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let M=this._sizeLods[i],R=3*M*(i>_-Xi?i-_+Xi:0),b=4*(this._cubeSize-M);Pr(e,R,b,3*M,2*M),l.setRenderTarget(e),l.render(u,Na)}};function q0(s){let t=[],e=[],n=[],i=s,r=s-Xi+1+wh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=wh[o-s+Xi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let b=0;b<f;b++){let C=b%3*2/3-1,I=b>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(v,x*g*b),_.set(d,m*g*b);let E=[b,b,b,b,b,b];M.set(E,p*g*b)}let R=new me;R.setAttribute("position",new _e(y,x)),R.setAttribute("uv",new _e(_,m)),R.setAttribute("faceIndex",new _e(M,p)),t.push(R),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(s,t,e){let n=new He(s,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Z0(s,t,e){let n=new Float32Array(hi),i=new A(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ch(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Rh(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function $0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qa||l===Za,h=l===Ji||l===Ki;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ns(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ns(s));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function J0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,M=y.length;_<M;_+=3){let R=y[_+0],b=y[_+1],C=y[_+2];d.push(R,b,b,C,C,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let R=_+0,b=_+1,C=_+2;d.push(R,b,b,C,C,R)}}else return;let m=new(fu(d)?Kr:Jr)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function j0(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Q0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tg(s,t){return s[0]-t[0]}function eg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ng(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),M===!0&&(I=3);let v=h.attributes.position.count*I,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*E*4*g),F=new qr(D,v,E,g);F.type=Gn,F.needsUpdate=!0;let q=I*4;for(let N=0;N<g;N++){let V=R[N],Y=b[N],W=C[N],X=v*E*4*N;for(let Z=0;Z<V.count;Z++){let j=Z*q;y===!0&&(o.fromBufferAttribute(V,Z),D[X+j+0]=o.x,D[X+j+1]=o.y,D[X+j+2]=o.z,D[X+j+3]=0),_===!0&&(o.fromBufferAttribute(Y,Z),D[X+j+4]=o.x,D[X+j+5]=o.y,D[X+j+6]=o.z,D[X+j+7]=0),M===!0&&(o.fromBufferAttribute(W,Z),D[X+j+8]=o.x,D[X+j+9]=o.y,D[X+j+10]=o.z,D[X+j+11]=W.itemSize===4?o.w:1)}}x={count:g,texture:F,size:new it(v,E)},r.set(h,x),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(eg);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(tg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let M=a[_],R=M[0],b=M[1];R!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),i[_]=b,p+=b):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ig(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends ln{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=Vn),n===void 0&&h===ji&&(n=ui),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xu=new ln,_u=new to(1,1);_u.compareFunction=uu;var yu=new qr,vu=new tl,Mu=new Qr,Ph=[],Lh=[],Ih=new Float32Array(16),Dh=new Float32Array(9),Uh=new Float32Array(4);function ls(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ph[i];if(r===void 0&&(r=new Float32Array(i),Ph[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _o(s,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function lg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Uh.set(n),s.uniformMatrix2fv(this.addr,!1,Uh),ve(e,n)}}function cg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Dh.set(n),s.uniformMatrix3fv(this.addr,!1,Dh),ve(e,n)}}function hg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Ih.set(n),s.uniformMatrix4fv(this.addr,!1,Ih),ve(e,n)}}function ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function mg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function _g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function yg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?_u:xu;e.setTexture2D(t||r,i)}function vg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function Mg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mu,i)}function Sg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yu,i)}function Eg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function wg(s,t){s.uniform1fv(this.addr,t)}function bg(s,t){let e=ls(t,this.size,2);s.uniform2fv(this.addr,e)}function Tg(s,t){let e=ls(t,this.size,3);s.uniform3fv(this.addr,e)}function Ag(s,t){let e=ls(t,this.size,4);s.uniform4fv(this.addr,e)}function Cg(s,t){let e=ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rg(s,t){let e=ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pg(s,t){let e=ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lg(s,t){s.uniform1iv(this.addr,t)}function Ig(s,t){s.uniform2iv(this.addr,t)}function Dg(s,t){s.uniform3iv(this.addr,t)}function Ug(s,t){s.uniform4iv(this.addr,t)}function Ng(s,t){s.uniform1uiv(this.addr,t)}function Fg(s,t){s.uniform2uiv(this.addr,t)}function Og(s,t){s.uniform3uiv(this.addr,t)}function kg(s,t){s.uniform4uiv(this.addr,t)}function Bg(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xu,r[o])}function zg(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vu,r[o])}function Hg(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Mu,r[o])}function Vg(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||yu,r[o])}function Gg(s){switch(s){case 5126:return wg;case 35664:return bg;case 35665:return Tg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ba=/(\w+)(\])?(\[|\.)?/g;function Nh(s,t){s.seq.push(t),s.map[t.id]=t}function Wg(s,t,e){let n=s.name,i=n.length;for(Ba.lastIndex=0;;){let r=Ba.exec(n),o=Ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nh(e,c===void 0?new il(a,s,t):new sl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Nh(e,u)),e=u}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Wg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Fh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Xg=37297,Yg=0;function qg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Zg(s){let t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s),n;switch(t===e?n="":t===Hr&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===Hr&&(n="LinearSRGBToLinearDisplayP3"),s){case Cn:case xo:return[n,"LinearTransferOETF"];case Ce:case Wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Oh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+qg(s.getShaderSource(t),o)}else return i}function $g(s,t){let e=Zg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jg(s,t){let e;switch(t){case kl:e="Linear";break;case Bl:e="Reinhard";break;case zl:e="OptimizedCineon";break;case Zs:e="ACESFilmic";break;case Hl:e="AgX";break;case af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function jg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yi).join(`
`)}function Qg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Yi(s){return s!==""}function kh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(ex,ix)}var nx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ix(s,t){let e=Bt[t];if(e===void 0){let n=nx.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(s){return s.replace(sx,rx)}function rx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function ax(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case rf:t="ENVMAP_BLENDING_MIX";break;case of:t="ENVMAP_BLENDING_ADD";break}return t}function hx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ux(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ox(e),c=ax(e),h=lx(e),u=cx(e),d=hx(e),f=e.isWebGL2?"":Kg(e),g=jg(e),x=Qg(r),m=i.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Yi).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Yi).join(`
`),y.length>0&&(y+=`
`)):(p=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),y=[f,Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),o=ol(o),o=kh(o,e),o=Bh(o,e),a=ol(a),a=kh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+p+o,R=_+y+a,b=Fh(i,i.VERTEX_SHADER,M),C=Fh(i,i.FRAGMENT_SHADER,R);i.attachShader(m,b),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(F){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(C).trim(),V=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,C);else{let W=Oh(i,b,"vertex"),X=Oh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||N==="")&&(Y=!1);Y&&(F.diagnostics={runnable:V,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:y}})}i.deleteShader(b),i.deleteShader(C),v=new $i(i,m),E=tx(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,Xg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}var dx=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ll(t),e.set(t,n)),n}},ll=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function fx(s,t,e,n,i,r,o){let a=new $r,l=new al,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,E,D,F,q){let P=F.fog,N=q.geometry,V=v.isMeshStandardMaterial?F.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),W=Y&&Y.mapping===go?Y.image.height:null,X=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=Z!==void 0?Z.length:0,ut=0;N.morphAttributes.position!==void 0&&(ut=1),N.morphAttributes.normal!==void 0&&(ut=2),N.morphAttributes.color!==void 0&&(ut=3);let G,$,ht,pt;if(X){let Fe=dn[X];G=Fe.vertexShader,$=Fe.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,l.update(v),ht=l.getVertexShaderID(v),pt=l.getFragmentShaderID(v);let mt=s.getRenderTarget(),It=q.isInstancedMesh===!0,Ot=q.isBatchedMesh===!0,Ct=!!v.map,Zt=!!v.matcap,O=!!Y,Ne=!!v.aoMap,Et=!!v.lightMap,Ut=!!v.bumpMap,yt=!!v.normalMap,le=!!v.displacementMap,zt=!!v.emissiveMap,T=!!v.metalnessMap,S=!!v.roughnessMap,B=v.anisotropy>0,Q=v.clearcoat>0,K=v.iridescence>0,tt=v.sheen>0,vt=v.transmission>0,ct=B&&!!v.anisotropyMap,gt=Q&&!!v.clearcoatMap,Tt=Q&&!!v.clearcoatNormalMap,Ht=Q&&!!v.clearcoatRoughnessMap,J=K&&!!v.iridescenceMap,Kt=K&&!!v.iridescenceThicknessMap,Yt=tt&&!!v.sheenColorMap,Dt=tt&&!!v.sheenRoughnessMap,St=!!v.specularMap,xt=!!v.specularColorMap,kt=!!v.specularIntensityMap,Jt=vt&&!!v.transmissionMap,de=vt&&!!v.thicknessMap,Gt=!!v.gradientMap,st=!!v.alphaMap,L=v.alphaTest>0,at=!!v.alphaHash,lt=!!v.extensions,Rt=!!N.attributes.uv1,wt=!!N.attributes.uv2,te=!!N.attributes.uv3,ee=Wn;return v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:ht,customFragmentShaderID:pt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ot,instancing:It,instancingColor:It&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Cn,map:Ct,matcap:Zt,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:W,aoMap:Ne,lightMap:Et,bumpMap:Ut,normalMap:yt,displacementMap:d&&le,emissiveMap:zt,normalMapObjectSpace:yt&&v.normalMapType===yf,normalMapTangentSpace:yt&&v.normalMapType===Gl,metalnessMap:T,roughnessMap:S,anisotropy:B,anisotropyMap:ct,clearcoat:Q,clearcoatMap:gt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ht,iridescence:K,iridescenceMap:J,iridescenceThicknessMap:Kt,sheen:tt,sheenColorMap:Yt,sheenRoughnessMap:Dt,specularMap:St,specularColorMap:xt,specularIntensityMap:kt,transmission:vt,transmissionMap:Jt,thicknessMap:de,gradientMap:Gt,opaque:v.transparent===!1&&v.blending===qi,alphaMap:st,alphaTest:L,alphaHash:at,combine:v.combine,mapUv:Ct&&x(v.map.channel),aoMapUv:Ne&&x(v.aoMap.channel),lightMapUv:Et&&x(v.lightMap.channel),bumpMapUv:Ut&&x(v.bumpMap.channel),normalMapUv:yt&&x(v.normalMap.channel),displacementMapUv:le&&x(v.displacementMap.channel),emissiveMapUv:zt&&x(v.emissiveMap.channel),metalnessMapUv:T&&x(v.metalnessMap.channel),roughnessMapUv:S&&x(v.roughnessMap.channel),anisotropyMapUv:ct&&x(v.anisotropyMap.channel),clearcoatMapUv:gt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(v.sheenRoughnessMap.channel),specularMapUv:St&&x(v.specularMap.channel),specularColorMapUv:xt&&x(v.specularColorMap.channel),specularIntensityMapUv:kt&&x(v.specularIntensityMap.channel),transmissionMapUv:Jt&&x(v.transmissionMap.channel),thicknessMapUv:de&&x(v.thicknessMap.channel),alphaMapUv:st&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(yt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:wt,vertexUv3s:te,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(Ct||st),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===Qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===De,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:lt&&v.extensions.derivatives===!0,extensionFragDepth:lt&&v.extensions.fragDepth===!0,extensionDrawBuffers:lt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(E,v),_(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let E=g[v.type],D;if(E){let F=dn[E];D=Kn.clone(F.uniforms)}else D=v.uniforms;return D}function R(v,E){let D;for(let F=0,q=c.length;F<q;F++){let P=c[F];if(P.cacheKey===E){D=P,++D.usedTimes;break}}return D===void 0&&(D=new ux(s,E,v,r),c.push(D)),D}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:I}}function px(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function mx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Vh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||mx),n.length>1&&n.sort(d||Vh),i.length>1&&i.sort(d||Vh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function gx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Gh,s.set(n,[o])):i>=r.length?(o=new Gh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ft};break;case"SpotLight":e={position:new A,direction:new A,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function _x(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var yx=0;function vx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mx(s,t){let e=new xx,n=_x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);let r=new A,o=new oe,a=new oe;function l(h,u){let d=0,f=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,M=0,R=0,b=0,C=0,I=0,v=0;h.sort(vx);let E=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){let P=h[F],N=P.color,V=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*V*E,f+=N.g*V*E,g+=N.b*V*E;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);v++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let Z=P.shadow,j=n.get(P);j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=P.shadow.matrix,M++}i.directional[x]=X,x++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(V*E),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[p]=X;let Z=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=Z.matrix,P.castShadow){let j=n.get(P);j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=W,b++}p++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(N).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=X,y++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Z=P.shadow,j=n.get(P);j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=X,m++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V*E),X.groundColor.copy(P.groundColor).multiplyScalar(V*E),i.hemi[_]=X,_++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==_||D.numDirectionalShadows!==M||D.numPointShadows!==R||D.numSpotShadows!==b||D.numSpotMaps!==C||D.numLightProbes!==v)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,D.directionalLength=x,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=_,D.numDirectionalShadows=M,D.numPointShadows=R,D.numSpotShadows=b,D.numSpotMaps=C,D.numLightProbes=v,i.version=yx++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(M.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Wh(s,t){let e=new Mx(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Sx(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Wh(s,t),e.set(r,[l])):o>=a.length?(l=new Wh(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var cl=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function bx(s,t,e){let n=new Hs,i=new it,r=new it,o=new re,a=new cl({depthPacking:_f}),l=new hl,c={},h=e.maxTextureSize,u={[Yn]:De,[De]:Yn,[Tn]:Tn},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Ex,fragmentShader:wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(b,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let v=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(fn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=p!==wn&&this.type===wn,P=p===wn&&this.type!==wn;for(let N=0,V=b.length;N<V;N++){let Y=b[N],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||q===!0||P===!0){let j=this.type!==wn?{minFilter:ze,magFilter:ze}:{};W.map!==null&&W.map.dispose(),W.map=new He(i.x,i.y,j),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let Z=W.getViewportCount();for(let j=0;j<Z;j++){let ut=W.getViewport(j);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),F.viewport(o),W.updateMatrices(Y,j),n=W.getFrustum(),M(C,I,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&y(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,E,D)};function y(b,C){let I=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new He(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,I,f,x,null)}function _(b,C,I,v){let E=null,D=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=E.uuid,q=C.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let N=P[q];N===void 0&&(N=E.clone(),P[q]=N,C.addEventListener("dispose",R)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,v===wn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=s.properties.get(E);F.light=I}return E}function M(b,C,I,v,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let q=t.update(b),P=b.material;if(Array.isArray(P)){let N=q.groups;for(let V=0,Y=N.length;V<Y;V++){let W=N[V],X=P[W.materialIndex];if(X&&X.visible){let Z=_(b,X,v,E);b.onBeforeShadow(s,b,C,I,q,Z,W),s.renderBufferDirect(I,null,q,Z,b,W),b.onAfterShadow(s,b,C,I,q,Z,W)}}}else if(P.visible){let N=_(b,P,v,E);b.onBeforeShadow(s,b,C,I,q,N,null),s.renderBufferDirect(I,null,q,N,b,null),b.onAfterShadow(s,b,C,I,q,N,null)}}let F=b.children;for(let q=0,P=F.length;q<P;q++)M(F[q],C,I,v,E)}function R(b){b.target.removeEventListener("dispose",R);for(let I in c){let v=c[I],E=b.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Tx(s,t,e){let n=e.isWebGL2;function i(){let L=!1,at=new re,lt=null,Rt=new re(0,0,0,0);return{setMask:function(wt){lt!==wt&&!L&&(s.colorMask(wt,wt,wt,wt),lt=wt)},setLocked:function(wt){L=wt},setClear:function(wt,te,ee,Ee,Fe){Fe===!0&&(wt*=Ee,te*=Ee,ee*=Ee),at.set(wt,te,ee,Ee),Rt.equals(at)===!1&&(s.clearColor(wt,te,ee,Ee),Rt.copy(at))},reset:function(){L=!1,lt=null,Rt.set(-1,0,0,0)}}}function r(){let L=!1,at=null,lt=null,Rt=null;return{setTest:function(wt){wt?Ot(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(wt){at!==wt&&!L&&(s.depthMask(wt),at=wt)},setFunc:function(wt){if(lt!==wt){switch(wt){case Kd:s.depthFunc(s.NEVER);break;case jd:s.depthFunc(s.ALWAYS);break;case Qd:s.depthFunc(s.LESS);break;case Fr:s.depthFunc(s.LEQUAL);break;case tf:s.depthFunc(s.EQUAL);break;case ef:s.depthFunc(s.GEQUAL);break;case nf:s.depthFunc(s.GREATER);break;case sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=wt}},setLocked:function(wt){L=wt},setClear:function(wt){Rt!==wt&&(s.clearDepth(wt),Rt=wt)},reset:function(){L=!1,at=null,lt=null,Rt=null}}}function o(){let L=!1,at=null,lt=null,Rt=null,wt=null,te=null,ee=null,Ee=null,Fe=null;return{setTest:function(ne){L||(ne?Ot(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(ne){at!==ne&&!L&&(s.stencilMask(ne),at=ne)},setFunc:function(ne,Oe,un){(lt!==ne||Rt!==Oe||wt!==un)&&(s.stencilFunc(ne,Oe,un),lt=ne,Rt=Oe,wt=un)},setOp:function(ne,Oe,un){(te!==ne||ee!==Oe||Ee!==un)&&(s.stencilOp(ne,Oe,un),te=ne,ee=Oe,Ee=un)},setLocked:function(ne){L=ne},setClear:function(ne){Fe!==ne&&(s.clearStencil(ne),Fe=ne)},reset:function(){L=!1,at=null,lt=null,Rt=null,wt=null,te=null,ee=null,Ee=null,Fe=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,M=null,R=null,b=null,C=null,I=null,v=new ft(0,0,0),E=0,D=!1,F=null,q=null,P=null,N=null,V=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=X>=2);let j=null,ut={},G=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ht=new re().fromArray(G),pt=new re().fromArray($);function mt(L,at,lt,Rt){let wt=new Uint8Array(4),te=s.createTexture();s.bindTexture(L,te),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<lt;ee++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(at,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(at+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return te}let It={};It[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(s.DEPTH_TEST),l.setFunc(Fr),zt(!1),T(wc),Ot(s.CULL_FACE),yt(fn);function Ot(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Ct(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Zt(L,at){return f[L]!==at?(s.bindFramebuffer(L,at),f[L]=at,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=at),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=at)),!0):!1}function O(L,at){let lt=x,Rt=!1;if(L)if(lt=g.get(at),lt===void 0&&(lt=[],g.set(at,lt)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(lt.length!==wt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=wt.length;te<ee;te++)lt[te]=s.COLOR_ATTACHMENT0+te;lt.length=wt.length,Rt=!0}}else lt[0]!==s.COLOR_ATTACHMENT0&&(lt[0]=s.COLOR_ATTACHMENT0,Rt=!0);else lt[0]!==s.BACK&&(lt[0]=s.BACK,Rt=!0);Rt&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Ne(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let Et={[ci]:s.FUNC_ADD,[Fd]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};if(n)Et[Ac]=s.MIN,Et[Cc]=s.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Et[Ac]=L.MIN_EXT,Et[Cc]=L.MAX_EXT)}let Ut={[kd]:s.ZERO,[Bd]:s.ONE,[zd]:s.SRC_COLOR,[Xa]:s.SRC_ALPHA,[Yd]:s.SRC_ALPHA_SATURATE,[Wd]:s.DST_COLOR,[Vd]:s.DST_ALPHA,[Hd]:s.ONE_MINUS_SRC_COLOR,[Ya]:s.ONE_MINUS_SRC_ALPHA,[Xd]:s.ONE_MINUS_DST_COLOR,[Gd]:s.ONE_MINUS_DST_ALPHA,[qd]:s.CONSTANT_COLOR,[Zd]:s.ONE_MINUS_CONSTANT_COLOR,[$d]:s.CONSTANT_ALPHA,[Jd]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(L,at,lt,Rt,wt,te,ee,Ee,Fe,ne){if(L===fn){p===!0&&(Ct(s.BLEND),p=!1);return}if(p===!1&&(Ot(s.BLEND),p=!0),L!==Nd){if(L!==y||ne!==D){if((_!==ci||b!==ci)&&(s.blendEquation(s.FUNC_ADD),_=ci,b=ci),ne)switch(L){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.ONE,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,R=null,C=null,I=null,v.set(0,0,0),E=0,y=L,D=ne}return}wt=wt||at,te=te||lt,ee=ee||Rt,(at!==_||wt!==b)&&(s.blendEquationSeparate(Et[at],Et[wt]),_=at,b=wt),(lt!==M||Rt!==R||te!==C||ee!==I)&&(s.blendFuncSeparate(Ut[lt],Ut[Rt],Ut[te],Ut[ee]),M=lt,R=Rt,C=te,I=ee),(Ee.equals(v)===!1||Fe!==E)&&(s.blendColor(Ee.r,Ee.g,Ee.b,Fe),v.copy(Ee),E=Fe),y=L,D=!1}function le(L,at){L.side===Tn?Ct(s.CULL_FACE):Ot(s.CULL_FACE);let lt=L.side===De;at&&(lt=!lt),zt(lt),L.blending===qi&&L.transparent===!1?yt(fn):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Rt=L.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function T(L){L!==Dd?(Ot(s.CULL_FACE),L!==q&&(L===wc?s.cullFace(s.BACK):L===Ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),q=L}function S(L){L!==P&&(W&&s.lineWidth(L),P=L)}function B(L,at,lt){L?(Ot(s.POLYGON_OFFSET_FILL),(N!==at||V!==lt)&&(s.polygonOffset(at,lt),N=at,V=lt)):Ct(s.POLYGON_OFFSET_FILL)}function Q(L){L?Ot(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function K(L){L===void 0&&(L=s.TEXTURE0+Y-1),j!==L&&(s.activeTexture(L),j=L)}function tt(L,at,lt){lt===void 0&&(j===null?lt=s.TEXTURE0+Y-1:lt=j);let Rt=ut[lt];Rt===void 0&&(Rt={type:void 0,texture:void 0},ut[lt]=Rt),(Rt.type!==L||Rt.texture!==at)&&(j!==lt&&(s.activeTexture(lt),j=lt),s.bindTexture(L,at||It[L]),Rt.type=L,Rt.texture=at)}function vt(){let L=ut[j];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(L){ht.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function Jt(L){pt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function de(L,at){let lt=u.get(at);lt===void 0&&(lt=new WeakMap,u.set(at,lt));let Rt=lt.get(L);Rt===void 0&&(Rt=s.getUniformBlockIndex(at,L.name),lt.set(L,Rt))}function Gt(L,at){let Rt=u.get(at).get(L);h.get(at)!==Rt&&(s.uniformBlockBinding(at,Rt,L.__bindingPointIndex),h.set(at,Rt))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,ut={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,M=null,R=null,b=null,C=null,I=null,v=new ft(0,0,0),E=0,D=!1,F=null,q=null,P=null,N=null,V=null,ht.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:Ct,bindFramebuffer:Zt,drawBuffers:O,useProgram:Ne,setBlending:yt,setMaterial:le,setFlipSided:zt,setCullFace:T,setLineWidth:S,setPolygonOffset:B,setScissorTest:Q,activeTexture:K,bindTexture:tt,unbindTexture:vt,compressedTexImage2D:ct,compressedTexImage3D:gt,texImage2D:St,texImage3D:xt,updateUBOMapping:de,uniformBlockBinding:Gt,texStorage2D:Yt,texStorage3D:Dt,texSubImage2D:Tt,texSubImage3D:Ht,compressedTexSubImage2D:J,compressedTexSubImage3D:Kt,scissor:kt,viewport:Jt,reset:st}}function Ax(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):Wr("canvas")}function x(T,S,B,Q){let K=1;if((T.width>Q||T.height>Q)&&(K=Q/Math.max(T.width,T.height)),K<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let tt=S?Gr:Math.floor,vt=tt(K*T.width),ct=tt(K*T.height);u===void 0&&(u=g(vt,ct));let gt=B?g(vt,ct):u;return gt.width=vt,gt.height=ct,gt.getContext("2d").drawImage(T,0,0,vt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+vt+"x"+ct+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ja(T.width)&&ja(T.height)}function p(T){return a?!1:T.wrapS!==rn||T.wrapT!==rn||T.minFilter!==ze&&T.minFilter!==Ke}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==ze&&T.minFilter!==Ke}function _(T){s.generateMipmap(T)}function M(T,S,B,Q,K=!1){if(a===!1)return S;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=S;if(S===s.RED&&(B===s.FLOAT&&(tt=s.R32F),B===s.HALF_FLOAT&&(tt=s.R16F),B===s.UNSIGNED_BYTE&&(tt=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(tt=s.R8UI),B===s.UNSIGNED_SHORT&&(tt=s.R16UI),B===s.UNSIGNED_INT&&(tt=s.R32UI),B===s.BYTE&&(tt=s.R8I),B===s.SHORT&&(tt=s.R16I),B===s.INT&&(tt=s.R32I)),S===s.RG&&(B===s.FLOAT&&(tt=s.RG32F),B===s.HALF_FLOAT&&(tt=s.RG16F),B===s.UNSIGNED_BYTE&&(tt=s.RG8)),S===s.RGBA){let vt=K?Br:$t.getTransfer(Q);B===s.FLOAT&&(tt=s.RGBA32F),B===s.HALF_FLOAT&&(tt=s.RGBA16F),B===s.UNSIGNED_BYTE&&(tt=vt===Qt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(T,S,B){return y(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==ze&&T.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){return T===ze||T===Rc||T===ua?s.NEAREST:s.LINEAR}function C(T){let S=T.target;S.removeEventListener("dispose",C),v(S),S.isVideoTexture&&h.delete(S)}function I(T){let S=T.target;S.removeEventListener("dispose",I),D(S)}function v(T){let S=n.get(T);if(S.__webglInit===void 0)return;let B=T.source,Q=d.get(B);if(Q){let K=Q[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(Q).length===0&&d.delete(B)}n.remove(T)}function E(T){let S=n.get(T);s.deleteTexture(S.__webglTexture);let B=T.source,Q=d.get(B);delete Q[S.__cacheKey],o.memory.textures--}function D(T){let S=T.texture,B=n.get(T),Q=n.get(S);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(B.__webglFramebuffer[K]))for(let tt=0;tt<B.__webglFramebuffer[K].length;tt++)s.deleteFramebuffer(B.__webglFramebuffer[K][tt]);else s.deleteFramebuffer(B.__webglFramebuffer[K]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[K])}else{if(Array.isArray(B.__webglFramebuffer))for(let K=0;K<B.__webglFramebuffer.length;K++)s.deleteFramebuffer(B.__webglFramebuffer[K]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let K=0;K<B.__webglColorRenderbuffer.length;K++)B.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[K]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let K=0,tt=S.length;K<tt;K++){let vt=n.get(S[K]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(S[K])}n.remove(S),n.remove(T)}let F=0;function q(){F=0}function P(){let T=F;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),F+=1,T}function N(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function V(T,S){let B=n.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(B,T,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function Y(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ht(B,T,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function W(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ht(B,T,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function X(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){pt(B,T,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}let Z={[$a]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[Ja]:s.MIRRORED_REPEAT},j={[ze]:s.NEAREST,[Rc]:s.NEAREST_MIPMAP_NEAREST,[ua]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[lf]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},ut={[vf]:s.NEVER,[Tf]:s.ALWAYS,[Mf]:s.LESS,[uu]:s.LEQUAL,[Sf]:s.EQUAL,[bf]:s.GEQUAL,[Ef]:s.GREATER,[wf]:s.NOTEQUAL};function G(T,S,B){if(B?(s.texParameteri(T,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Z[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,j[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,j[S.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,b(S.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==ze&&S.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ze||S.minFilter!==ua&&S.minFilter!==Bs||S.type===Gn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===an&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function $(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",C));let Q=S.source,K=d.get(Q);K===void 0&&(K={},d.set(Q,K));let tt=N(S);if(tt!==T.__cacheKey){K[tt]===void 0&&(K[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[tt].usedTimes++;let vt=K[T.__cacheKey];vt!==void 0&&(K[T.__cacheKey].usedTimes--,vt.usedTimes===0&&E(S)),T.__cacheKey=tt,T.__webglTexture=K[tt].texture}return B}function ht(T,S,B){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);let K=$(T,S),tt=S.source;e.bindTexture(Q,T.__webglTexture,s.TEXTURE0+B);let vt=n.get(tt);if(tt.version!==vt.__version||K===!0){e.activeTexture(s.TEXTURE0+B);let ct=$t.getPrimaries($t.workingColorSpace),gt=S.colorSpace===je?null:$t.getPrimaries(S.colorSpace),Tt=S.colorSpace===je||ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ht=p(S)&&m(S.image)===!1,J=x(S.image,Ht,!1,i.maxTextureSize);J=zt(S,J);let Kt=m(J)||a,Yt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),St=M(S.internalFormat,Yt,Dt,S.colorSpace,S.isVideoTexture);G(Q,S,Kt);let xt,kt=S.mipmaps,Jt=a&&S.isVideoTexture!==!0&&St!==cu,de=vt.__version===void 0||K===!0,Gt=R(S,J,Kt);if(S.isDepthTexture)St=s.DEPTH_COMPONENT,a?S.type===Gn?St=s.DEPTH_COMPONENT32F:S.type===Vn?St=s.DEPTH_COMPONENT24:S.type===ui?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:S.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===di&&St===s.DEPTH_COMPONENT&&S.type!==Vl&&S.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vn,Dt=r.convert(S.type)),S.format===ji&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ui,Dt=r.convert(S.type))),de&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,St,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,St,J.width,J.height,0,Yt,Dt,null));else if(S.isDataTexture)if(kt.length>0&&Kt){Jt&&de&&e.texStorage2D(s.TEXTURE_2D,Gt,St,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)xt=kt[st],Jt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,Yt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,st,St,xt.width,xt.height,0,Yt,Dt,xt.data);S.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(s.TEXTURE_2D,Gt,St,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Yt,Dt,J.data)):e.texImage2D(s.TEXTURE_2D,0,St,J.width,J.height,0,Yt,Dt,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,St,kt[0].width,kt[0].height,J.depth);for(let st=0,L=kt.length;st<L;st++)xt=kt[st],S.format!==on?Yt!==null?Jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,J.depth,Yt,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,St,xt.width,xt.height,J.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,J.depth,Yt,Dt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,St,xt.width,xt.height,J.depth,0,Yt,Dt,xt.data)}else{Jt&&de&&e.texStorage2D(s.TEXTURE_2D,Gt,St,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)xt=kt[st],S.format!==on?Yt!==null?Jt?e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,Yt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,St,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,Yt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,st,St,xt.width,xt.height,0,Yt,Dt,xt.data)}else if(S.isDataArrayTexture)Jt?(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,St,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Yt,Dt,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,J.width,J.height,J.depth,0,Yt,Dt,J.data);else if(S.isData3DTexture)Jt?(de&&e.texStorage3D(s.TEXTURE_3D,Gt,St,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Yt,Dt,J.data)):e.texImage3D(s.TEXTURE_3D,0,St,J.width,J.height,J.depth,0,Yt,Dt,J.data);else if(S.isFramebufferTexture){if(de)if(Jt)e.texStorage2D(s.TEXTURE_2D,Gt,St,J.width,J.height);else{let st=J.width,L=J.height;for(let at=0;at<Gt;at++)e.texImage2D(s.TEXTURE_2D,at,St,st,L,0,Yt,Dt,null),st>>=1,L>>=1}}else if(kt.length>0&&Kt){Jt&&de&&e.texStorage2D(s.TEXTURE_2D,Gt,St,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)xt=kt[st],Jt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,Yt,Dt,xt):e.texImage2D(s.TEXTURE_2D,st,St,Yt,Dt,xt);S.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(s.TEXTURE_2D,Gt,St,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Yt,Dt,J)):e.texImage2D(s.TEXTURE_2D,0,St,Yt,Dt,J);y(S,Kt)&&_(Q),vt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function pt(T,S,B){if(S.image.length!==6)return;let Q=$(T,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);let tt=n.get(K);if(K.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);let vt=$t.getPrimaries($t.workingColorSpace),ct=S.colorSpace===je?null:$t.getPrimaries(S.colorSpace),gt=S.colorSpace===je||vt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ht=S.image[0]&&S.image[0].isDataTexture,J=[];for(let st=0;st<6;st++)!Tt&&!Ht?J[st]=x(S.image[st],!1,!0,i.maxCubemapSize):J[st]=Ht?S.image[st].image:S.image[st],J[st]=zt(S,J[st]);let Kt=J[0],Yt=m(Kt)||a,Dt=r.convert(S.format,S.colorSpace),St=r.convert(S.type),xt=M(S.internalFormat,Dt,St,S.colorSpace),kt=a&&S.isVideoTexture!==!0,Jt=tt.__version===void 0||Q===!0,de=R(S,Kt,Yt);G(s.TEXTURE_CUBE_MAP,S,Yt);let Gt;if(Tt){kt&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,de,xt,Kt.width,Kt.height);for(let st=0;st<6;st++){Gt=J[st].mipmaps;for(let L=0;L<Gt.length;L++){let at=Gt[L];S.format!==on?Dt!==null?kt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,at.width,at.height,Dt,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,at.width,at.height,Dt,St,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,xt,at.width,at.height,0,Dt,St,at.data)}}}else{Gt=S.mipmaps,kt&&Jt&&(Gt.length>0&&de++,e.texStorage2D(s.TEXTURE_CUBE_MAP,de,xt,J[0].width,J[0].height));for(let st=0;st<6;st++)if(Ht){kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,J[st].width,J[st].height,Dt,St,J[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,J[st].width,J[st].height,0,Dt,St,J[st].data);for(let L=0;L<Gt.length;L++){let lt=Gt[L].image[st].image;kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,lt.width,lt.height,Dt,St,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,xt,lt.width,lt.height,0,Dt,St,lt.data)}}else{kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,St,J[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,Dt,St,J[st]);for(let L=0;L<Gt.length;L++){let at=Gt[L];kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,Dt,St,at.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,xt,Dt,St,at.image[st])}}}y(S,Yt)&&_(s.TEXTURE_CUBE_MAP),tt.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function mt(T,S,B,Q,K,tt){let vt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),gt=M(B.internalFormat,vt,ct,B.colorSpace);if(!n.get(S).__hasExternalTextures){let Ht=Math.max(1,S.width>>tt),J=Math.max(1,S.height>>tt);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,tt,gt,Ht,J,S.depth,0,vt,ct,null):e.texImage2D(K,tt,gt,Ht,J,0,vt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),yt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,0,Ut(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||yt(S)){let K=S.depthTexture;K&&K.isDepthTexture&&(K.type===Gn?Q=s.DEPTH_COMPONENT32F:K.type===Vn&&(Q=s.DEPTH_COMPONENT24));let tt=Ut(S);yt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){let Q=Ut(S);B&&yt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,S.width,S.height):yt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0;K<Q.length;K++){let tt=Q[K],vt=r.convert(tt.format,tt.colorSpace),ct=r.convert(tt.type),gt=M(tt.internalFormat,vt,ct,tt.colorSpace),Tt=Ut(S);B&&yt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,gt,S.width,S.height):yt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let Q=n.get(S.depthTexture).__webglTexture,K=Ut(S);if(S.depthTexture.format===di)yt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ji)yt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ct(T){let S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ot(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=s.createRenderbuffer(),It(S.__webglDepthbuffer[Q],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),It(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(T,S,B){let Q=n.get(T);S!==void 0&&mt(Q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ct(T)}function O(T){let S=T.texture,B=n.get(T),Q=n.get(S);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,o.memory.textures++);let K=T.isWebGLCubeRenderTarget===!0,tt=T.isWebGLMultipleRenderTargets===!0,vt=m(T)||a;if(K){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let gt=0;gt<S.mipmaps.length;gt++)B.__webglFramebuffer[ct][gt]=s.createFramebuffer()}else B.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)B.__webglFramebuffer[ct]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){let ct=T.texture;for(let gt=0,Tt=ct.length;gt<Tt;gt++){let Ht=n.get(ct[gt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&yt(T)===!1){let ct=tt?S:[S];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){let Tt=ct[gt];B.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[gt]);let Ht=r.convert(Tt.format,Tt.colorSpace),J=r.convert(Tt.type),Kt=M(Tt.internalFormat,Ht,J,Tt.colorSpace,T.isXRRenderTarget===!0),Yt=Ut(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Kt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,B.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),It(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),G(s.TEXTURE_CUBE_MAP,S,vt);for(let ct=0;ct<6;ct++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)mt(B.__webglFramebuffer[ct][gt],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else mt(B.__webglFramebuffer[ct],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(S,vt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let ct=T.texture;for(let gt=0,Tt=ct.length;gt<Tt;gt++){let Ht=ct[gt],J=n.get(Ht);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),G(s.TEXTURE_2D,Ht,vt),mt(B.__webglFramebuffer,T,Ht,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),y(Ht,vt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ct=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,Q.__webglTexture),G(ct,S,vt),a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)mt(B.__webglFramebuffer[gt],T,S,s.COLOR_ATTACHMENT0,ct,gt);else mt(B.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,ct,0);y(S,vt)&&_(ct),e.unbindTexture()}T.depthBuffer&&Ct(T)}function Ne(T){let S=m(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,K=B.length;Q<K;Q++){let tt=B[Q];if(y(tt,S)){let vt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(tt).__webglTexture;e.bindTexture(vt,ct),_(vt),e.unbindTexture()}}}function Et(T){if(a&&T.samples>0&&yt(T)===!1){let S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,Q=T.height,K=s.COLOR_BUFFER_BIT,tt=[],vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(T),gt=T.isWebGLMultipleRenderTargets===!0;if(gt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){tt.push(s.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&tt.push(vt);let Ht=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ht===!1&&(T.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),gt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[Tt]),Ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),gt){let J=n.get(S[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,K,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[Tt]);let Ht=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Ut(T){return Math.min(i.maxSamples,T.samples)}function yt(T){let S=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function zt(T,S){let B=T.colorSpace,Q=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ka||B!==Cn&&B!==je&&($t.getTransfer(B)===Qt?a===!1?t.has("EXT_sRGB")===!0&&Q===on?(T.format=Ka,T.minFilter=Ke,T.generateMipmaps=!1):S=Xr.sRGBToLinear(S):(Q!==on||K!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Zt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=yt}function Cx(s,t,e){let n=e.isWebGL2;function i(r,o=je){let a,l=$t.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===su)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ru)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cf)return s.BYTE;if(r===hf)return s.SHORT;if(r===Vl)return s.UNSIGNED_SHORT;if(r===iu)return s.INT;if(r===Vn)return s.UNSIGNED_INT;if(r===Gn)return s.FLOAT;if(r===an)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===uf)return s.ALPHA;if(r===on)return s.RGBA;if(r===df)return s.LUMINANCE;if(r===ff)return s.LUMINANCE_ALPHA;if(r===di)return s.DEPTH_COMPONENT;if(r===ji)return s.DEPTH_STENCIL;if(r===Ka)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pf)return s.RED;if(r===ou)return s.RED_INTEGER;if(r===mf)return s.RG;if(r===au)return s.RG_INTEGER;if(r===lu)return s.RGBA_INTEGER;if(r===da||r===fa||r===pa||r===ma)if(l===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pc||r===Lc||r===Ic||r===Dc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Pc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uc||r===Nc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Uc)return l===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fc||r===Oc||r===kc||r===Bc||r===zc||r===Hc||r===Vc||r===Gc||r===Wc||r===Xc||r===Yc||r===qc||r===Zc||r===$c)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zc)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$c)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ga||r===Jc||r===Kc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ga)return l===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gf||r===jc||r===Qc||r===th)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ga)return a.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===th)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ui?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ul=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rx={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dl=class extends pn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],M=new it,R=null,b=new Ie;b.layers.enable(1),b.viewport=new re;let C=new Ie;C.layers.enable(2),C.viewport=new re;let I=[b,C],v=new ul;v.layers.enable(1),v.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=y[G];return $===void 0&&($=new Fs,y[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=y[G];return $===void 0&&($=new Fs,y[G]=$),$.getGripSpace()},this.getHand=function(G){let $=y[G];return $===void 0&&($=new Fs,y[G]=$),$.getHandSpace()};function F(G){let $=_.indexOf(G.inputSource);if($===-1)return;let ht=y[$];ht!==void 0&&(ht.update(G.inputSource,G.frame,c||o),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",P);for(let G=0;G<y.length;G++){let $=_[G];$!==null&&(_[G]=null,y[G].disconnect($))}E=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new He(f.framebufferWidth,f.framebufferHeight,{format:on,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,ht=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?ji:di,ht=x.stencil?ui:Vn);let mt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new He(d.textureWidth,d.textureHeight,{format:on,type:Xn,depthTexture:new to(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let It=t.properties.get(p);It.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let $=0;$<G.removed.length;$++){let ht=G.removed[$],pt=_.indexOf(ht);pt>=0&&(_[pt]=null,y[pt].disconnect(ht))}for(let $=0;$<G.added.length;$++){let ht=G.added[$],pt=_.indexOf(ht);if(pt===-1){for(let It=0;It<y.length;It++)if(It>=_.length){_.push(ht),pt=It;break}else if(_[It]===null){_[It]=ht,pt=It;break}if(pt===-1)break}let mt=y[pt];mt&&mt.connect(ht)}}let N=new A,V=new A;function Y(G,$,ht){N.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);let pt=N.distanceTo(V),mt=$.projectionMatrix.elements,It=ht.projectionMatrix.elements,Ot=mt[14]/(mt[10]-1),Ct=mt[14]/(mt[10]+1),Zt=(mt[9]+1)/mt[5],O=(mt[9]-1)/mt[5],Ne=(mt[8]-1)/mt[0],Et=(It[8]+1)/It[0],Ut=Ot*Ne,yt=Ot*Et,le=pt/(-Ne+Et),zt=le*-Ne;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(zt),G.translateZ(le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let T=Ot+le,S=Ct+le,B=Ut-zt,Q=yt+(pt-zt),K=Zt*Ct/S*T,tt=O*Ct/S*T;G.projectionMatrix.makePerspective(B,Q,K,tt,T,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.near=C.near=b.near=G.near,v.far=C.far=b.far=G.far,(E!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,D=v.far);let $=G.parent,ht=v.cameras;W(v,$);for(let pt=0;pt<ht.length;pt++)W(ht[pt],$);ht.length===2?Y(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),X(G,v,$)};function X(G,$,ht){ht===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Z=null;function j(G,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let pt=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let mt=0;mt<ht.length;mt++){let It=ht[mt],Ot=null;if(f!==null)Ot=f.getViewport(It);else{let Zt=u.getViewSubImage(d,It);Ot=Zt.viewport,mt===0&&(t.setRenderTargetTextures(p,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(p))}let Ct=I[mt];Ct===void 0&&(Ct=new Ie,Ct.layers.enable(mt),Ct.viewport=new re,I[mt]=Ct),Ct.matrix.fromArray(It.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(It.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),mt===0&&(v.matrix.copy(Ct.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(Ct)}}for(let ht=0;ht<y.length;ht++){let pt=_[ht],mt=y[ht];pt!==null&&mt!==void 0&&mt.update(pt,$,c||o)}Z&&Z(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ut=new gu;ut.setAnimationLoop(j),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}};function Px(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lx(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let M=_.program;n.uniformBlockBinding(y,M)}function c(y,_){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){let _=u();y.__bindingPointIndex=_;let M=s.createBuffer(),R=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=i[y.id],M=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,C=M.length;b<C;b++){let I=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,E=I.length;v<E;v++){let D=I[v];if(f(D,b,v,R)===!0){let F=D.__offset,q=Array.isArray(D.value)?D.value:[D.value],P=0;for(let N=0;N<q.length;N++){let V=q[N],Y=x(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+P,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,M,R){let b=y.value,C=_+"_"+M;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{let I=R[C];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return R[C]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(y){let _=y.uniforms,M=0,R=16;for(let C=0,I=_.length;C<I;C++){let v=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,D=v.length;E<D;E++){let F=v[E],q=Array.isArray(F.value)?F.value:[F.value];for(let P=0,N=q.length;P<N;P++){let V=q[P],Y=x(V),W=M%R;W!==0&&R-W<Y.boundary&&(M+=R-W),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Y.storage}}}let b=M%R;return b>0&&(M+=R-b),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Vs=class{constructor(t={}){let{canvas:e=Hf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;let _=this,M=!1,R=0,b=0,C=null,I=-1,v=null,E=new re,D=new re,F=null,q=new ft(0),P=0,N=e.width,V=e.height,Y=1,W=null,X=null,Z=new re(0,0,N,V),j=new re(0,0,N,V),ut=!1,G=new Hs,$=!1,ht=!1,pt=null,mt=new oe,It=new it,Ot=new A,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Zt(){return C===null?Y:1}let O=n;function Ne(w,U){for(let z=0;z<w.length;z++){let H=w[z],k=e.getContext(H,U);if(k!==null)return k}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",at,!1),O===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),O=Ne(U,w),O===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Et,Ut,yt,le,zt,T,S,B,Q,K,tt,vt,ct,gt,Tt,Ht,J,Kt,Yt,Dt,St,xt,kt,Jt;function de(){Et=new J0(O),Ut=new W0(O,Et,t),Et.init(Ut),xt=new Cx(O,Et,Ut),yt=new Tx(O,Et,Ut),le=new Q0(O),zt=new px,T=new Ax(O,Et,yt,zt,Ut,xt,le),S=new Y0(_),B=new $0(_),Q=new ap(O,Ut),kt=new V0(O,Et,Q,Ut),K=new K0(O,Q,le,kt),tt=new ig(O,K,Q,le),Yt=new ng(O,Ut,T),Ht=new X0(zt),vt=new fx(_,S,B,Et,Ut,kt,Ht),ct=new Px(_,zt),gt=new gx,Tt=new Sx(Et,Ut),Kt=new H0(_,S,B,yt,tt,d,l),J=new bx(_,tt,Ut),Jt=new Lx(O,le,Ut,yt),Dt=new G0(O,Et,le,Ut),St=new j0(O,Et,le,Ut),le.programs=vt.programs,_.capabilities=Ut,_.extensions=Et,_.properties=zt,_.renderLists=gt,_.shadowMap=J,_.state=yt,_.info=le}de();let Gt=new dl(_,O);this.xr=Gt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(N,V,!1))},this.getSize=function(w){return w.set(N,V)},this.setSize=function(w,U,z=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,V=U,e.width=Math.floor(w*Y),e.height=Math.floor(U*Y),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(N*Y,V*Y).floor()},this.setDrawingBufferSize=function(w,U,z){N=w,V=U,Y=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,U,z,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,U,z,H),yt.viewport(E.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,U,z,H){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,U,z,H),yt.scissor(D.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){yt.setScissorTest(ut=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(w=!0,U=!0,z=!0){let H=0;if(w){let k=!1;if(C!==null){let dt=C.texture.format;k=dt===lu||dt===au||dt===ou}if(k){let dt=C.texture.type,Mt=dt===Xn||dt===Vn||dt===Vl||dt===ui||dt===su||dt===ru,bt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),Vt=bt.r,Nt=bt.g,Ft=bt.b;Mt?(f[0]=Vt,f[1]=Nt,f[2]=Ft,f[3]=Pt,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Vt,g[1]=Nt,g[2]=Ft,g[3]=Pt,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",at,!1),gt.dispose(),Tt.dispose(),zt.dispose(),S.dispose(),B.dispose(),tt.dispose(),kt.dispose(),Jt.dispose(),vt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Fe),Gt.removeEventListener("sessionend",ne),pt&&(pt.dispose(),pt=null),Oe.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=le.autoReset,U=J.enabled,z=J.autoUpdate,H=J.needsUpdate,k=J.type;de(),le.autoReset=w,J.enabled=U,J.autoUpdate=z,J.needsUpdate=H,J.type=k}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){let U=w.target;U.removeEventListener("dispose",lt),Rt(U)}function Rt(w){wt(w),zt.remove(w)}function wt(w){let U=zt.get(w).programs;U!==void 0&&(U.forEach(function(z){vt.releaseProgram(z)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,H,k,dt){U===null&&(U=Ct);let Mt=k.isMesh&&k.matrixWorld.determinant()<0,bt=Rd(w,U,z,H,k);yt.setMaterial(H,Mt);let Pt=z.index,Vt=1;if(H.wireframe===!0){if(Pt=K.getWireframeAttribute(z),Pt===void 0)return;Vt=2}let Nt=z.drawRange,Ft=z.attributes.position,pe=Nt.start*Vt,Ge=(Nt.start+Nt.count)*Vt;dt!==null&&(pe=Math.max(pe,dt.start*Vt),Ge=Math.min(Ge,(dt.start+dt.count)*Vt)),Pt!==null?(pe=Math.max(pe,0),Ge=Math.min(Ge,Pt.count)):Ft!=null&&(pe=Math.max(pe,0),Ge=Math.min(Ge,Ft.count));let we=Ge-pe;if(we<0||we===1/0)return;kt.setup(k,H,bt,z,Pt);let _n,ce=Dt;if(Pt!==null&&(_n=Q.get(Pt),ce=St,ce.setIndex(_n)),k.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*Zt()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(k.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),yt.setLineWidth(Wt*Zt()),k.isLineSegments?ce.setMode(O.LINES):k.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else k.isPoints?ce.setMode(O.POINTS):k.isSprite&&ce.setMode(O.TRIANGLES);if(k.isBatchedMesh)ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ce.renderInstances(pe,we,k.count);else if(z.isInstancedBufferGeometry){let Wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,aa=Math.min(z.instanceCount,Wt);ce.renderInstances(pe,we,aa)}else ce.render(pe,we)};function te(w,U,z){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,lr(w,U,z),w.side=Yn,w.needsUpdate=!0,lr(w,U,z),w.side=Tn):lr(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),m=Tt.get(z),m.init(),y.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==z&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);let H=new Set;return w.traverse(function(k){let dt=k.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let bt=dt[Mt];te(bt,z,k),H.add(bt)}else te(dt,z,k),H.add(dt)}),y.pop(),m=null,H},this.compileAsync=function(w,U,z=null){let H=this.compile(w,U,z);return new Promise(k=>{function dt(){if(H.forEach(function(Mt){zt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){k(w);return}setTimeout(dt,10)}Et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ee=null;function Ee(w){ee&&ee(w)}function Fe(){Oe.stop()}function ne(){Oe.start()}let Oe=new gu;Oe.setAnimationLoop(Ee),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(w){ee=w,Gt.setAnimationLoop(w),w===null?Oe.stop():Oe.start()},Gt.addEventListener("sessionstart",Fe),Gt.addEventListener("sessionend",ne),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(U),U=Gt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,C),m=Tt.get(w,y.length),m.init(),y.push(m),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,$=Ht.init(this.clippingPlanes,ht),x=gt.get(w,p.length),x.init(),p.push(x),un(w,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,X),this.info.render.frame++,$===!0&&Ht.beginShadows();let z=m.state.shadowsArray;if(J.render(z,w,U),$===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(x,w),m.setupLights(_._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let k=0,dt=H.length;k<dt;k++){let Mt=H[k];_c(x,w,Mt,Mt.viewport)}}else _c(x,w,U);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,U),kt.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function un(w,U,z,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){H&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);let Mt=tt.update(w),bt=w.material;bt.visible&&x.push(w,Mt,bt,z,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let Mt=tt.update(w),bt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ot.copy(Mt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(bt)){let Pt=Mt.groups;for(let Vt=0,Nt=Pt.length;Vt<Nt;Vt++){let Ft=Pt[Vt],pe=bt[Ft.materialIndex];pe&&pe.visible&&x.push(w,Mt,pe,z,Ot.z,Ft)}}else bt.visible&&x.push(w,Mt,bt,z,Ot.z,null)}}let dt=w.children;for(let Mt=0,bt=dt.length;Mt<bt;Mt++)un(dt[Mt],U,z,H)}function _c(w,U,z,H){let k=w.opaque,dt=w.transmissive,Mt=w.transparent;m.setupLightsView(z),$===!0&&Ht.setGlobalState(_.clippingPlanes,z),dt.length>0&&Cd(k,dt,U,z),H&&yt.viewport(E.copy(H)),k.length>0&&ar(k,U,z),dt.length>0&&ar(dt,U,z),Mt.length>0&&ar(Mt,U,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Cd(w,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let dt=Ut.isWebGL2;pt===null&&(pt=new He(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?an:Xn,minFilter:Bs,samples:dt?4:0})),_.getDrawingBufferSize(It),dt?pt.setSize(It.x,It.y):pt.setSize(Gr(It.x),Gr(It.y));let Mt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(q),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let bt=_.toneMapping;_.toneMapping=Wn,ar(w,z,H),T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt);let Pt=!1;for(let Vt=0,Nt=U.length;Vt<Nt;Vt++){let Ft=U[Vt],pe=Ft.object,Ge=Ft.geometry,we=Ft.material,_n=Ft.group;if(we.side===Tn&&pe.layers.test(H.layers)){let ce=we.side;we.side=De,we.needsUpdate=!0,yc(pe,z,H,Ge,we,_n),we.side=ce,we.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt)),_.setRenderTarget(Mt),_.setClearColor(q,P),_.toneMapping=bt}function ar(w,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,dt=w.length;k<dt;k++){let Mt=w[k],bt=Mt.object,Pt=Mt.geometry,Vt=H===null?Mt.material:H,Nt=Mt.group;bt.layers.test(z.layers)&&yc(bt,U,z,Pt,Vt,Nt)}}function yc(w,U,z,H,k,dt){w.onBeforeRender(_,U,z,H,k,dt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,U,z,H,w,dt),k.transparent===!0&&k.side===Tn&&k.forceSinglePass===!1?(k.side=De,k.needsUpdate=!0,_.renderBufferDirect(z,U,H,k,w,dt),k.side=Yn,k.needsUpdate=!0,_.renderBufferDirect(z,U,H,k,w,dt),k.side=Tn):_.renderBufferDirect(z,U,H,k,w,dt),w.onAfterRender(_,U,z,H,k,dt)}function lr(w,U,z){U.isScene!==!0&&(U=Ct);let H=zt.get(w),k=m.state.lights,dt=m.state.shadowsArray,Mt=k.state.version,bt=vt.getParameters(w,k.state,dt,U,z),Pt=vt.getProgramCacheKey(bt),Vt=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||H.environment),Vt===void 0&&(w.addEventListener("dispose",lt),Vt=new Map,H.programs=Vt);let Nt=Vt.get(Pt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===Mt)return Mc(w,bt),Nt}else bt.uniforms=vt.getUniforms(w),w.onBuild(z,bt,_),w.onBeforeCompile(bt,_),Nt=vt.acquireProgram(bt,Pt),Vt.set(Pt,Nt),H.uniforms=bt.uniforms;let Ft=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Ht.uniform),Mc(w,bt),H.needsLights=Ld(w),H.lightsStateVersion=Mt,H.needsLights&&(Ft.ambientLightColor.value=k.state.ambient,Ft.lightProbe.value=k.state.probe,Ft.directionalLights.value=k.state.directional,Ft.directionalLightShadows.value=k.state.directionalShadow,Ft.spotLights.value=k.state.spot,Ft.spotLightShadows.value=k.state.spotShadow,Ft.rectAreaLights.value=k.state.rectArea,Ft.ltc_1.value=k.state.rectAreaLTC1,Ft.ltc_2.value=k.state.rectAreaLTC2,Ft.pointLights.value=k.state.point,Ft.pointLightShadows.value=k.state.pointShadow,Ft.hemisphereLights.value=k.state.hemi,Ft.directionalShadowMap.value=k.state.directionalShadowMap,Ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ft.spotShadowMap.value=k.state.spotShadowMap,Ft.spotLightMatrix.value=k.state.spotLightMatrix,Ft.spotLightMap.value=k.state.spotLightMap,Ft.pointShadowMap.value=k.state.pointShadowMap,Ft.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function vc(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=$i.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Mc(w,U){let z=zt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Rd(w,U,z,H,k){U.isScene!==!0&&(U=Ct),T.resetTextureUnits();let dt=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cn,Pt=(H.isMeshStandardMaterial?B:S).get(H.envMap||Mt),Vt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ft=!!z.morphAttributes.position,pe=!!z.morphAttributes.normal,Ge=!!z.morphAttributes.color,we=Wn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=_.toneMapping);let _n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=_n!==void 0?_n.length:0,Wt=zt.get(H),aa=m.state.lights;if($===!0&&(ht===!0||w!==v)){let $e=w===v&&H.id===I;Ht.setState(H,w,$e)}let fe=!1;H.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==aa.state.version||Wt.outputColorSpace!==bt||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||Wt.envMap!==Pt||H.fog===!0&&Wt.fog!==dt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ht.numPlanes||Wt.numIntersection!==Ht.numIntersection)||Wt.vertexAlphas!==Vt||Wt.vertexTangents!==Nt||Wt.morphTargets!==Ft||Wt.morphNormals!==pe||Wt.morphColors!==Ge||Wt.toneMapping!==we||Ut.isWebGL2===!0&&Wt.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Wt.__version=H.version);let ni=Wt.currentProgram;fe===!0&&(ni=lr(H,U,k));let Sc=!1,bs=!1,la=!1,Re=ni.getUniforms(),ii=Wt.uniforms;if(yt.useProgram(ni.program)&&(Sc=!0,bs=!0,la=!0),H.id!==I&&(I=H.id,bs=!0),Sc||v!==w){Re.setValue(O,"projectionMatrix",w.projectionMatrix),Re.setValue(O,"viewMatrix",w.matrixWorldInverse);let $e=Re.map.cameraPosition;$e!==void 0&&$e.setValue(O,Ot.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&Re.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Re.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,bs=!0,la=!0)}if(k.isSkinnedMesh){Re.setOptional(O,k,"bindMatrix"),Re.setOptional(O,k,"bindMatrixInverse");let $e=k.skeleton;$e&&(Ut.floatVertexTextures?($e.boneTexture===null&&$e.computeBoneTexture(),Re.setValue(O,"boneTexture",$e.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Re.setOptional(O,k,"batchingTexture"),Re.setValue(O,"batchingTexture",k._matricesTexture,T));let ca=z.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Ut.isWebGL2===!0)&&Yt.update(k,z,ni),(bs||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,Re.setValue(O,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=Pt,ii.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),bs&&(Re.setValue(O,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&Pd(ii,la),dt&&H.fog===!0&&ct.refreshFogUniforms(ii,dt),ct.refreshMaterialUniforms(ii,H,Y,V,pt),$i.upload(O,vc(Wt),ii,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($i.upload(O,vc(Wt),ii,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Re.setValue(O,"center",k.center),Re.setValue(O,"modelViewMatrix",k.modelViewMatrix),Re.setValue(O,"normalMatrix",k.normalMatrix),Re.setValue(O,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let $e=H.uniformsGroups;for(let ha=0,Id=$e.length;ha<Id;ha++)if(Ut.isWebGL2){let Ec=$e[ha];Jt.update(Ec,ni),Jt.bind(Ec,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Pd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ld(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,z){zt.get(w.texture).__webglTexture=U,zt.get(w.depthTexture).__webglTexture=z;let H=zt.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){let z=zt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){C=w,R=U,b=z;let H=!0,k=null,dt=!1,Mt=!1;if(w){let Pt=zt.get(w);Pt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Pt.__webglFramebuffer===void 0?T.setupRenderTarget(w):Pt.__hasExternalTextures&&T.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);let Nt=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?k=Nt[U][z]:k=Nt[U],dt=!0):Ut.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?k=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[z]:k=Nt,E.copy(w.viewport),D.copy(w.scissor),F=w.scissorTest}else E.copy(Z).multiplyScalar(Y).floor(),D.copy(j).multiplyScalar(Y).floor(),F=ut;if(yt.bindFramebuffer(O.FRAMEBUFFER,k)&&Ut.drawBuffers&&H&&yt.drawBuffers(w,k),yt.viewport(E),yt.scissor(D),yt.setScissorTest(F),dt){let Pt=zt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,z)}else if(Mt){let Pt=zt.get(w.texture),Vt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,z||0,Vt)}I=-1},this.readRenderTargetPixels=function(w,U,z,H,k,dt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){yt.bindFramebuffer(O.FRAMEBUFFER,bt);try{let Pt=w.texture,Vt=Pt.format,Nt=Pt.type;if(Vt!==on&&xt.convert(Vt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Nt===an&&(Et.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Nt!==Xn&&xt.convert(Nt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Gn&&(Ut.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&z>=0&&z<=w.height-k&&O.readPixels(U,z,H,k,xt.convert(Vt),xt.convert(Nt),dt)}finally{let Pt=C!==null?zt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(w,U,z=0){let H=Math.pow(2,-z),k=Math.floor(U.image.width*H),dt=Math.floor(U.image.height*H);T.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,w.x,w.y,k,dt),yt.unbindTexture()},this.copyTextureToTexture=function(w,U,z,H=0){let k=U.image.width,dt=U.image.height,Mt=xt.convert(z.format),bt=xt.convert(z.type);T.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,w.x,w.y,k,dt,Mt,bt,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,w.x,w.y,Mt,bt,U.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z,H,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,bt=w.max.z-w.min.z+1,Pt=xt.convert(H.format),Vt=xt.convert(H.type),Nt;if(H.isData3DTexture)T.setTexture3D(H,0),Nt=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Nt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Ft=O.getParameter(O.UNPACK_ROW_LENGTH),pe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ge=O.getParameter(O.UNPACK_SKIP_PIXELS),we=O.getParameter(O.UNPACK_SKIP_ROWS),_n=O.getParameter(O.UNPACK_SKIP_IMAGES),ce=z.isCompressedTexture?z.mipmaps[k]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Nt,k,U.x,U.y,U.z,dt,Mt,bt,Pt,Vt,ce.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Nt,k,U.x,U.y,U.z,dt,Mt,bt,Pt,ce.data)):O.texSubImage3D(Nt,k,U.x,U.y,U.z,dt,Mt,bt,Pt,Vt,ce),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,we),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_n),k===0&&H.generateMipmaps&&O.generateMipmap(Nt),yt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){R=0,b=0,C=null,yt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wl?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?fi:hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fi?Ce:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},fl=class extends Vs{};fl.prototype.isWebGL1Renderer=!0;var eo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var is=class extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Gs=class extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new oe,Xh=new oe,Lr=[],Yh=new qt,Ix=new oe,Ps=new et,Ls=new $n,Jn=class extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ix)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qt),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Yh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Ls.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vi),Xh.multiplyMatrices(n,Vi),Ps.matrixWorld=Xh,Ps.raycast(t,Lr);for(let o=0,a=Lr.length;o<a;o++){let l=Lr[o];l.instanceId=r,l.object=this,e.push(l)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ws=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qh=new oe,pl=new Zr,Ir=new $n,Dr=new A,no=class extends ue{constructor(t=new me,e=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;qh.copy(i).invert(),pl.copy(t.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Dr.fromBufferAttribute(u,m),Zh(Dr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Dr.fromBufferAttribute(u,g),Zh(Dr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zh(s,t,e,n,i,r,o){let a=pl.distanceSqToPoint(s);if(a<e){let l=new A;pl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],o=[],a=new A,l=new oe;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xs=class extends Qe{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new it,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends Xs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Ur=new A,za=new ql,Ha=new ql,Va=new ql,gl=class extends Qe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ur.subVectors(i[0],i[1]).add(i[0]),c=Ur);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ur.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),za.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Va.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Va.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(za.calc(l),Ha.calc(l),Va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $h(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Dx(s,t){let e=1-s;return e*e*t}function Ux(s,t){return 2*(1-s)*s*t}function Nx(s,t){return s*s*t}function Os(s,t,e,n){return Dx(s,t)+Ux(s,e)+Nx(s,n)}function Fx(s,t){let e=1-s;return e*e*e*t}function Ox(s,t){let e=1-s;return 3*e*e*s*t}function kx(s,t){return 3*(1-s)*s*s*t}function Bx(s,t){return s*s*s*t}function ks(s,t,e,n,i){return Fx(s,t)+Ox(s,e)+kx(s,n)+Bx(s,i)}var io=class extends Qe{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xl=class extends Qe{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y),ks(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},so=class extends Qe{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends Qe{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends Qe{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Os(t,i.x,r.x,o.x),Os(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends Qe{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Os(t,i.x,r.x,o.x),Os(t,i.y,r.y,o.y),Os(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set($h(a,l.x,c.x,h.x,u.x),$h(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},Jh=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:io,CubicBezierCurve3:xl,EllipseCurve:Xs,LineCurve:so,LineCurve3:_l,QuadraticBezierCurve:ro,QuadraticBezierCurve3:yl,SplineCurve:oo}),vl=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Jh[i.type]().fromJSON(i))}return this}},Ml=class extends vl{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new so(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ro(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new io(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Xs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sl=class s extends me{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new it,f=new A,g=new A,x=new A,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*i,M=Math.sin(_),R=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*R,o.push(u.x,u.y,u.z),d.x=y/e,d.y=b/(t.length-1),a.push(d.x,d.y);let C=l[3*b+0]*M,I=l[3*b+1],v=l[3*b+0]*R;c.push(C,I,v)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let M=_+y*t.length,R=M,b=M+t.length,C=M+t.length+1,I=M+1;r.push(R,b,I),r.push(C,I,b)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ao=class s extends Sl{constructor(t=1,e=1,n=4,i=8){let r=new Ml;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Me=class s extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function y(){let M=new A,R=new A,b=0,C=(e-t)/n;for(let I=0;I<=r;I++){let v=[],E=I/r,D=E*(e-t)+t;for(let F=0;F<=i;F++){let q=F/i,P=q*l+a,N=Math.sin(P),V=Math.cos(P);R.x=D*N,R.y=-E*n+m,R.z=D*V,u.push(R.x,R.y,R.z),M.set(N,C,V).normalize(),d.push(M.x,M.y,M.z),f.push(q,1-E),v.push(g++)}x.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){let E=x[v][I],D=x[v+1][I],F=x[v+1][I+1],q=x[v][I+1];h.push(E,D,q),h.push(D,F,q),b+=6}c.addGroup(p,b,0),p+=b}function _(M){let R=g,b=new it,C=new A,I=0,v=M===!0?t:e,E=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=i;F++){let P=F/i*l+a,N=Math.cos(P),V=Math.sin(P);C.x=v*V,C.y=m*E,C.z=v*N,u.push(C.x,C.y,C.z),d.push(0,E,0),b.x=N*.5+.5,b.y=V*.5*E+.5,f.push(b.x,b.y),g++}for(let F=0;F<i;F++){let q=R+F,P=D+F;M===!0?h.push(P,P+1,q):h.push(P+1,P,q),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pi=class s extends Me{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lo=class s extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new A,M=new A,R=new A;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],M),f(e[b+2],R),l(_,M,R,y)}function l(y,_,M,R){let b=R+1,C=[];for(let I=0;I<=b;I++){C[I]=[];let v=y.clone().lerp(M,I/b),E=_.clone().lerp(M,I/b),D=b-I;for(let F=0;F<=D;F++)F===0&&I===b?C[I][F]=v:C[I][F]=v.clone().lerp(E,F/D)}for(let I=0;I<b;I++)for(let v=0;v<2*(b-I)-1;v++){let E=Math.floor(v/2);v%2===0?(d(C[I][E+1]),d(C[I+1][E]),d(C[I][E])):(d(C[I][E+1]),d(C[I+1][E+1]),d(C[I+1][E]))}}function c(y){let _=new A;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let y=new A;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(M,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],M=o[y+2],R=o[y+4],b=Math.max(_,M,R),C=Math.min(_,M,R);b>.9&&C<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let y=new A,_=new A,M=new A,R=new A,b=new it,C=new it,I=new it;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),b.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),R.copy(y).add(_).add(M).divideScalar(3);let D=m(R);x(b,E+0,y,D),x(C,E+2,_,D),x(I,E+4,M,D)}}function x(y,_,M,R){R<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ln=class s extends lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var cn=class s extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let b=R/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+M,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],M=h[p][y],R=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(_,M,b),(p!==n-1||l<Math.PI)&&f.push(M,R,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},co=class s extends lo{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ho=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ot=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mi=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Nr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ss=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends ss{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nh:r=t,a=2*e-n;break;case ih:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nh:o=t,l=2*n-e;break;case ih:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+_*o[l+R]+M*o[u+R];return r}},wl=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},bl=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=kr;var gi=class extends hn{};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Or;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends hn{};Tl.prototype.ValueTypeName="color";var Al=class extends hn{};Al.prototype.ValueTypeName="number";var Cl=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Zn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ys=class extends hn{InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.DefaultInterpolation=kr;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends hn{};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Or;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends hn{};Rl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Hx=new Pl,Ll=class{constructor(t){this.manager=t!==void 0?t:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ga=new oe,Kh=new A,jh=new A,uo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jh),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qh=new oe,Is=new A,Wa=new A,Il=class extends uo{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),Wa.copy(n.position),Wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}},fo=class extends qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Dl=class extends uo{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},mo=class extends qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var rs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=tu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function tu(){return(typeof performance>"u"?Date:performance).now()}var Zl="\\[\\]\\.:\\/",Vx=new RegExp("["+Zl+"]","g"),$l="[^"+Zl+"]",Gx="[^"+Zl.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",$l),Xx=/(WCOD+)?/.source.replace("WCOD",Gx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),Zx=new RegExp("^"+Wx+Xx+Yx+qx+"$"),$x=["material","materials","bones","map"],Ul=class{constructor(t,e,n){let i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let e=Zx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Ul;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);var yo=class extends is{constructor(t=null){super();let e=new Lt;e.deleteAttribute("uv");let n=new ot({side:De}),i=new ot,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new fo(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new et(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new et(e,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new et(e,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new et(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new et(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new et(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new et(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new et(e,cs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new et(e,cs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new et(e,cs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new et(e,cs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new et(e,cs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new et(e,cs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function cs(s){let t=new ie;return t.color.setScalar(s),t}var $s,Js,tn;function Su(){$s=new is,$s.background=new ft(328976),$s.fog=new eo(328976,.025),Js=new Ie(75,window.innerWidth/window.innerHeight,.1,2e4),Js.position.set(0,5,10),tn=new Vs({antialias:!0,powerPreference:"high-performance"}),tn.setSize(window.innerWidth,window.innerHeight),tn.setPixelRatio(window.devicePixelRatio),tn.shadowMap.enabled=!0,tn.shadowMap.type=Fl,tn.toneMapping=Zs,tn.toneMappingExposure=.72,document.getElementById("app").appendChild(tn.domElement);let s=new ns(tn);return $s.environment=s.fromScene(new yo(tn),.04).texture,window.addEventListener("resize",Jx),{scene:$s,camera:Js,renderer:tn}}function Jx(){Js.aspect=window.innerWidth/window.innerHeight,Js.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight)}function Eu(s,t){let e=n=>{let i=s.tick(n);if(!i.first&&!i.skipped){let r=performance.now();t(i.dt),s.reportWork(performance.now()-r)}requestAnimationFrame(e)};requestAnimationFrame(e)}function In(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=wu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=wu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function wu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new _e(o,e,n);return i!==void 0&&(l.gpuType=i),l}var hs=class{constructor(t=1337){this.seed=t>>>0||2654435769,this.state=this.seed}next(){let t=this.state;return t^=t<<13,t^=t>>>17,t^=t<<5,t>>>=0,this.state=t,t}float(){return this.next()/4294967296}int(t){return Math.floor(this.float()*t)}range(t,e){return t+this.float()*(e-t)}},Mo=1337,bu=new hs(Mo);function Tu(s){Mo=s>>>0,bu=new hs(Mo)}function us(){return Mo>>>0}function Au(){return bu}function Jl(s,t,e){return s[0]*t+s[1]*e}var Kx=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],mn=null,Ks=null;function jx(){if(mn)return;let s=[];for(let t=0;t<256;t++)s[t]=Au().int(256);mn=new Array(512),Ks=new Array(512);for(let t=0;t<512;t++)mn[t]=s[t&255],Ks[t]=Kx[mn[t]%12]}function Qx(s,t){jx();let e,n,i,r=.5*(Math.sqrt(3)-1),o=(s+t)*r,a=Math.floor(s+o),l=Math.floor(t+o),c=(3-Math.sqrt(3))/6,h=(a+l)*c,u=a-h,d=l-h,f=s-u,g=t-d,x,m;f>g?(x=1,m=0):(x=0,m=1);let p=f-x+c,y=g-m+c,_=f-1+2*c,M=g-1+2*c,R=a&255,b=l&255,C=.5-f*f-g*g;if(C<0)e=0;else{let E=mn[R+mn[b]]%12;C*=C,e=C*C*Jl(Ks[E],f,g)}let I=.5-p*p-y*y;if(I<0)n=0;else{let E=mn[R+x+mn[b+m]]%12;I*=I,n=I*I*Jl(Ks[E],p,y)}let v=.5-_*_-M*M;if(v<0)i=0;else{let E=mn[R+1+mn[b+1]]%12;v*=v,i=v*v*Jl(Ks[E],_,M)}return 70*(e+n+i)}var _i={noise2D:Qx};function At(s,t,e,n,i,r){let o=new Lt(s,t,e);return o.translate(n,i,r),o}var t_=new Lt(1,1,1);function Dn(s,t,e){let n=[];for(let o of t)if(o&&o.pos)n.push(o);else if(o&&o.type==="BoxGeometry"){o.computeBoundingBox();let a=o.boundingBox;n.push({pos:[(a.min.x+a.max.x)/2,(a.min.y+a.max.y)/2,(a.min.z+a.max.z)/2],scale:[o.parameters.width,o.parameters.height,o.parameters.depth]})}if(n.length===0)return;let i=new Jn(t_,e,n.length);i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let r=new ue;for(let o=0;o<n.length;o++){let a=n[o];r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.scale.set(a.scale[0],a.scale[1],a.scale[2]),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}i.instanceMatrix.needsUpdate=!0,s.add(i)}var Ru=new ot({color:8947848,roughness:.9,metalness:.1}),e_=new ot({color:5592405,roughness:.9,metalness:.15}),n_=new ot({color:11184810,roughness:.8,metalness:.05}),i_=new ot({color:9260604,roughness:.9}),Pu=new ot({color:2241348,roughness:.7,metalness:.15,envMapIntensity:.45}),s_=new ot({color:3359829,roughness:.6,metalness:.2}),Qs=new ot({color:5592405,roughness:.7,metalness:.3,envMapIntensity:.35}),ds=new ot({color:1118481,roughness:.7,metalness:.5}),r_=new ie({color:65535}),Vy=new ie({color:16711935}),So=new ot({color:2236962,roughness:.9}),Lu=new ot({color:5592405,roughness:.9}),o_=new ot({color:3812902,roughness:1}),Kl=new ie({color:16777215}),a_=new ot({color:16777215,roughness:.9,transparent:!0,opacity:.8}),l_=new ie({color:16777130}),Iu=new ie({color:1118481,transparent:!0,opacity:0,depthWrite:!1}),c_=new ot({color:5583633,roughness:.9,name:"trunkBrown"}),h_=new ot({color:15658734,roughness:.8,name:"trunkWhite"}),u_=new ot({color:5089079,roughness:.8,name:"leafGreen"}),d_=new ot({color:2250018,roughness:.9,name:"leafDark"}),f_=new ot({color:16755404,roughness:.8,name:"leafPink"}),p_=new ot({color:14513954,roughness:.8,name:"leafOrange"}),m_=new ot({color:14535714,roughness:.8,name:"leafYellow"}),Gy=new ot({color:8947848,roughness:1}),g_=new ot({color:5980211,roughness:1}),x_=new ot({color:6710886,roughness:.9,name:"trunkGrey"}),__=new ot({color:15265522,roughness:.85,name:"leafSnow"}),y_=new ot({color:1118481,roughness:.8,name:"trunkBlack"}),jn=new Me(.2,.3,1,5).toNonIndexed();jn.translate(0,.5,0);var yi=new Ln(1,1),js=new pi(1,1,5).toNonIndexed();js.translate(0,.5,0);var Eo={trunkBrown:c_,trunkWhite:h_,trunkGrey:x_,trunkBlack:y_,leafGreen:u_,leafDark:d_,leafPink:f_,leafOrange:p_,leafYellow:m_,leafSnow:__,dirt:g_};function jl(s,t,e){for(let n of Object.keys(Eo))t[n]&&t[n].length&&e(t[n],Eo[n])}function v_(s,t,e,n,i,r,o){r==="modern"?Cu(s,t,e,n,i,o):r==="brick"?M_(s,t,e,n,i,o):r==="glass"?S_(s,t,e,n,i,o):r==="future"?E_(s,t,e,n,i,o):Cu(s,t,e,n,i,o),w_(s,t,e,n,i,o)}function Ql(s,t,e,n,i={}){let r=typeof i.rand=="function"?i.rand:Math.random,o=typeof i.rand=="number"?i.rand:r(),a=i.y===void 0?.05:i.y,l=i.scale===void 0?1:i.scale,c=i.leaf||"leafGreen",h=i.leafDark||"leafDark";n.dirt.push(At(1.5*l,.1,1.5*l,t,a+.05,e));let u=2.5+o,d=(f,g,x,m,p=0)=>{let y=f.clone();y.scale(m.x*l,m.y*l,m.z*l),y.rotateY(p),y.translate(t,x*l+a,e),n[g].push(y)};if(s===0)d(jn,"trunkBrown",0,new A(.3,u,.3)),d(yi,c,u,new A(1.8,1.8,1.8));else if(s===1)d(jn,"trunkBrown",0,new A(.2,2,.2)),d(js,h,2,new A(2,1.5,2)),d(js,h,3.2,new A(1.5,1.5,1.5)),d(js,h,4.4,new A(.8,1.5,.8));else if(s===2)d(jn,"trunkWhite",0,new A(.2,4,.2)),d(yi,c,4,new A(1.6,2,1.6));else if(s===3)d(jn,"trunkBrown",0,new A(.25,3,.25)),d(yi,c,3,new A(2,2,2));else if(s===4)d(jn,"trunkBlack",0,new A(.25,4.5,.25)),d(js,h,3.5,new A(1.2,5,1.2));else if(s===5){d(jn,"trunkBrown",0,new A(.3,2.5,.3)),d(yi,c,2.5,new A(2.5,1.5,2.5));let f=8;for(let g=0;g<f;g++){let x=g/f*Math.PI*2,m=Math.sin(x)*1.5,p=Math.cos(x)*1.5;d(yi,c,2,new A(.1,2,.1),0);let y=yi.clone();y.scale(.1*l,2.5*l,.1*l),y.translate(t+m*l,1.5*l+a,e+p*l),n[c].push(y)}}else d(jn,"trunkGrey",0,new A(.3,3,.3)),d(yi,h,3,new A(1.7,1.7,1.7))}function Cu(s,t,e,n,i,r){let o=Math.random(),a=r.concrete;o<.3?a=r.concreteDark:o>.7&&(a=r.concreteLight),a.push(At(e,n,i,s,n/2,t));let l=Math.floor(n/3.5),c=Math.floor(e/3),h=Math.floor(i/3),u=n/l,d=e/c,f=i/h;for(let g=0;g<c;g++)for(let x=1;x<l;x++){let m=s-e/2+d/2+g*d,p=x*u+u/2;r.glass.push(At(d*.7,u*.7,.2,m,p,t+i/2+.05)),r.glass.push(At(d*.7,u*.7,.2,m,p,t-i/2-.05))}for(let g=0;g<h;g++)for(let x=1;x<l;x++){let m=t-i/2+f/2+g*f,p=x*u+u/2;r.glass.push(At(.2,u*.7,f*.7,s+e/2+.05,p,m)),r.glass.push(At(.2,u*.7,f*.7,s-e/2-.05,p,m))}for(let g=0;g<=l;g++)(Math.random()>.5?a:r.darkMetal).push(At(e+.3,.4,i+.3,s,g*u,t));for(let g=0;g<=c;g++)a.push(At(.6,n,i-.5,s-e/2+g*d,n/2,t))}function M_(s,t,e,n,i,r){r.brick.push(At(e,n,i,s,n/2,t));let o=3.2,a=Math.floor(n/o),l=1.8,c=2,h=3,u=Math.floor(e/h);for(let d=1;d<a;d++){let f=d*o+1;for(let g=0;g<u;g++){let x=-e/2+2+g*h;if(x>e/2-1)continue;let m=s+x;r.concrete.push(At(l+.2,c+.2,.2,m,f,t+i/2)),r.concrete.push(At(l+.2,c+.2,.2,m,f,t-i/2)),r.glass.push(At(l,c,.1,m,f,t+i/2+.1)),r.glass.push(At(l,c,.1,m,f,t-i/2-.1))}}for(let d=1;d<a;d++)r.darkMetal.push(At(3,.2,1,s,d*o,t+i/2+.8)),r.darkMetal.push(At(3,.1,.1,s,d*o+.5,t+i/2+1.3)),r.darkMetal.push(At(.6,o+.5,.1,s+1,d*o+o/2,t+i/2+1.2))}function S_(s,t,e,n,i,r){r.glass.push(At(e,n,i,s,n/2,t));let o=Math.floor(e/2);for(let l=0;l<=o;l++){let c=-e/2+l*(e/o);r.metal.push(At(.1,n,i+.05,s+c,n/2,t))}let a=Math.floor(n/4);for(let l=0;l<a;l++)r.metal.push(At(e+.05,.2,i+.05,s,l*4,t))}function E_(s,t,e,n,i,r){r.darkMetal.push(At(e,n,i,s,n/2,t)),r.neon.push(At(e+.1,.5,i+.1,s,n*.8,t)),r.neon.push(At(e+.1,.5,i+.1,s,n*.5,t)),r.neon.push(At(e+.1,.5,i+.1,s,n*.2,t)),r.metal.push(At(.5,10,.5,s,n+5,t)),r.neon.push(At(.2,2,.2,s,n+10,t))}function w_(s,t,e,n,i,r){Math.random()>.3&&r.metal.push(At(2,1.5,2,s+2,n+.75,t+2)),Math.random()<.2&&(r.brick.push(At(2,2.5,2,s-2,n+1.25,t-2)),r.metal.push(At(1.8,.5,1.8,s-2,n+2.5,t-2))),r.concrete.push(At(e,.5,.2,s,n+.25,t+i/2-.1)),r.concrete.push(At(e,.5,.2,s,n+.25,t-i/2+.1)),r.concrete.push(At(.2,.5,i,s+e/2-.1,n+.25,t)),r.concrete.push(At(.2,.5,i,s-e/2+.1,n+.25,t))}function Du(s,t,e,n=24,i=0){let r=new he,o=[],a=[],l=[],c=i>0,h={concrete:[],concreteDark:[],concreteLight:[],brick:[],glass:[],metal:[],darkMetal:[],neon:[],windowLights:[],trunkBrown:[],trunkWhite:[],trunkGrey:[],trunkBlack:[],leafGreen:[],leafDark:[],leafPink:[],leafOrange:[],leafYellow:[],dirt:[],road:[],sidewalk:[],lane:[]};h.road.push(At(e,.1,e,s,-.05,t)),h.lane.push(At(e,.1,.5,s,.02,t)),h.lane.push(At(.5,.1,e,s,.02,t));let u=(e-n)/2,d=(n+u)/2,f=[{x:-d,z:-d},{x:d,z:-d},{x:d,z:d},{x:-d,z:d}];if(f.forEach((x,m)=>{let p=s+x.x,y=t+x.z;if(h.sidewalk.push(At(u,.2,u,p,.1,y)),c){let M=u-12;if(M>8){let R=20+Math.random()*40;h.concrete.push(At(M,R,M,p,R/2,y));let b=new qt;b.min.set(p-M/2,0,y-M/2),b.max.set(p+M/2,R,y+M/2),o.push(b)}}else if(_i.noise2D(p*.05,y*.05)>.55||s===0&&t===0&&m===0){let R=b_(r,h,o,p,y,u);R&&a.push(R)}else if(Math.random()>.1){let b=u-12;if(b>8){let C=Math.random(),I="modern",v=20+Math.random()*40;C<.1?(I="future",v=300+Math.random()*200):C<.25?(I="glass",v=120+Math.random()*100):C<.45?(I="brick",v=15+Math.random()*25):C<.6?(I="glass",v=40+Math.random()*60):C<.7&&(I="future",v=50+Math.random()*50),v_(p,y,b,v,b,I,h),T_(h,p,y,b,v);let E=new qt;E.min.set(p-b/2,0,y-b/2),E.max.set(p+b/2,v,y+b/2),o.push(E)}}}),c||f.forEach(x=>{let m=s+x.x,p=t+x.z,_=u-12;if(u>8){let M=[0,1,2,3];for(let b=M.length-1;b>0;b--){let C=Math.floor(Math.random()*(b+1));[M[b],M[C]]=[M[C],M[b]]}let R=Math.floor(Math.random()*3);for(let b=0;b<R;b++){let C=Math.floor(Math.random()*6),I=(_/2+u/2)/2,v=M[b],E=(Math.random()-.5)*_*.6,D=m,F=p;v===0?(D+=I,F+=E):v===1?(D-=I,F+=E):v===2?(F+=I,D+=E):(F-=I,D+=E),Ql(C,D,F,h)}}}),!c){let x=n/2+1;[{x:-x,z:-x,r:Math.PI/4},{x,z:x,r:-3*Math.PI/4},{x:-x,z:x,r:3*Math.PI/4},{x,z:-x,r:-Math.PI/4}].forEach(p=>{h.darkMetal.push(At(.3,8,.3,s+p.x,4,t+p.z)),h.darkMetal.push(At(2,.2,.2,s+p.x+Math.sin(p.r),7.5,t+p.z+Math.cos(p.r))),l.push(At(.5,.2,.5,s+p.x+Math.sin(p.r)*1.5,7.4,t+p.z+Math.cos(p.r)*1.5))})}let g=(x,m)=>{if(x.length>0){let p=In(x);if(!p)return;let y=new et(p,m);y.castShadow=!0,y.receiveShadow=!0,r.add(y)}};if(Dn(r,h.concrete,Ru),Dn(r,h.concreteDark,e_),Dn(r,h.concreteLight,n_),Dn(r,h.brick,i_),Dn(r,h.glass,Pu),Dn(r,h.metal,Qs),Dn(r,h.darkMetal,ds),Dn(r,h.neon,r_),Dn(r,h.windowLights,Iu),jl(r,h,g),g(h.road,So),g(h.sidewalk,Lu),g(h.lane,Kl),l.length>0){let x=In(l),m=new et(x,l_);r.add(m)}return{mesh:r,colliders:o,lodLevel:i,construction:a}}function Uu(s,t,e,n,i="x"){let r=new he,o=[],a=new et(new Pn(e,e),o_);a.rotation.x=-Math.PI/2,a.position.set(s,-.5,t),a.receiveShadow=!0,r.add(a);let l=i==="x"||i==="cross",c=i==="z"||i==="cross";if(l){let h=new et(new Pn(e,n),So);h.rotation.x=-Math.PI/2,h.position.set(s,0,t),h.receiveShadow=!0,r.add(h);let u=new et(new Pn(e,.5),Kl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}if(c){let h=new et(new Pn(n,e),So);h.rotation.x=-Math.PI/2,h.position.set(s,.01,t),h.receiveShadow=!0,r.add(h);let u=new et(new Pn(.5,e),Kl);u.rotation.x=-Math.PI/2,u.position.set(s,.02,t),r.add(u)}return{mesh:r,colliders:o}}function b_(s,t,e,n,i,r){let o=r/2,a=5+Math.random()*4;t.concrete.push(At(a*.9,a,a*.9,n,a/2,i));let l=a+3,c=o*.8;t.darkMetal.push(At(.15,l,.15,n-c,l/2,i-c)),t.darkMetal.push(At(.15,l,.15,n+c,l/2,i-c)),t.darkMetal.push(At(.15,l,.15,n+c,l/2,i+c)),t.darkMetal.push(At(.15,l,.15,n-c,l/2,i+c)),e.push(new qt().set(new A(n-o,0,i-o),new A(n+o,a,i+o)));let h=34,u=o*1.6,d=n-o*.5,f=i-o*.5,g=new et(new Lt(.35,h,.35),ds);g.position.set(d,h/2,f);let x=new ue;x.position.set(d,h,f);let m=new et(new Lt(u,.25,.25),Qs);m.position.set(u/2,0,0);let p=new et(new Lt(u*.35,.25,.25),Qs);p.position.set(-u*.35/2,0,0);let y=new et(new Lt(.5,.5,.5),ds);y.position.set(0,.4,0);let _=new et(new Lt(.5,.5,.5),ds);_.position.set(-u*.35,.1,0);let M=new et(new Lt(.4,.35,.4),Qs),R=new et(new Lt(.05,1,.05),ds);return R.position.set(0,-1.5,0),x.add(m),x.add(p),x.add(y),x.add(_),x.add(R),x.add(M),s.add(g),s.add(x),{pivot:x,hook:M,cable:R,jibLen:u,phase:0,cx:n,cz:i}}function T_(s,t,e,n,i){if(n<=0||i<=0)return;let r=Math.max(3,Math.floor(n/3)),o=Math.max(2,Math.floor(i/3.5)),a=n/r,l=i/o,c=t<0?1:-1,h=e<0?1:-1,u=(g,x,m)=>_i.noise2D(g*.27+x*.11,m*.17)>.25,d=t+c*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=e-n/2+a/2+m*a;u(d,p,x)&&s.windowLights.push(At(a*.45,l*.55,.2,d,x,p))}}let f=e+h*(n/2);for(let g=0;g<o;g++){let x=2+l/2+g*l;for(let m=0;m<r;m++){let p=t-n/2+a/2+m*a;u(p,f,x)&&s.windowLights.push(At(a*.45,l*.55,.2,p,x,f))}}}async function Nu(s){let t=new mo(2236979,.42);s.add(t);let e=new po(11193599,.3);return e.position.set(50,500,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-80,e.shadow.camera.right=80,e.shadow.camera.top=80,e.shadow.camera.bottom=-80,s.add(e),{roadWidth:26,blockSize:70,citySize:1e3,directionalLight:e,ambientLight:t,materials:{road:So,sidewalk:Lu,building:Ru,glassModern:Pu,glassOffice:s_,metal:Qs,darkMetal:ds,cloud:a_,window:Iu}}}var fs=new Qi(0,0,0,"YXZ"),ps=new A,A_={type:"change"},C_={type:"lock"},R_={type:"unlock"},Fu=Math.PI/2,wo=class extends pn{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=P_.bind(this),this._onPointerlockChange=L_.bind(this),this._onPointerlockError=I_.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){let e=this.camera;ps.setFromMatrixColumn(e.matrix,0),ps.crossVectors(e.up,ps),e.position.addScaledVector(ps,t)}moveRight(t){let e=this.camera;ps.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(ps,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function P_(s){if(this.isLocked===!1)return;let t=s.movementX||s.mozMovementX||s.webkitMovementX||0,e=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;fs.setFromQuaternion(n.quaternion),fs.y-=t*.002*this.pointerSpeed,fs.x-=e*.002*this.pointerSpeed,fs.x=Math.max(Fu-this.maxPolarAngle,Math.min(Fu-this.minPolarAngle,fs.x)),n.quaternion.setFromEuler(fs),this.dispatchEvent(A_)}function L_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(C_),this.isLocked=!0):(this.dispatchEvent(R_),this.isLocked=!1)}function I_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function bo(s,t,e=1,n=.5){if(!s.geometry)return;let i=s.geometry.attributes.position,r=new A,o=t.clone();s.worldToLocal(o);let a=!1;for(let l=0;l<i.count;l++){r.fromBufferAttribute(i,l);let c=r.distanceTo(o);if(c<e){let h=new A(0,0,0),u=n*(1-c/e)*.8;r.lerp(h,u);let d=.5;r.x+=(Math.random()-.5)*n*d,r.y+=(Math.random()-.5)*n*d,r.z+=(Math.random()-.5)*n*d,i.setXYZ(l,r.x,r.y,r.z),a=!0}}a&&(i.needsUpdate=!0,s.geometry.computeVertexNormals())}var Un=Object.freeze({MOVE_FORWARD:"moveForward",MOVE_BACKWARD:"moveBackward",MOVE_LEFT:"moveLeft",MOVE_RIGHT:"moveRight",ENTER_EXIT:"enterExit",JUMP:"jump",PAUSE:"pause",LOCK:"lock"}),qe=Object.freeze({[Un.MOVE_FORWARD]:["KeyW","ArrowUp"],[Un.MOVE_BACKWARD]:["KeyS","ArrowDown"],[Un.MOVE_LEFT]:["KeyA","ArrowLeft"],[Un.MOVE_RIGHT]:["KeyD","ArrowRight"],[Un.ENTER_EXIT]:["KeyE"],[Un.JUMP]:["Space"],[Un.PAUSE]:["KeyP"],[Un.LOCK]:["Enter"]}),Ye=class{constructor(t=qe){this.bindings={},this._byCode={},this._rebuild(t)}_rebuild(t){this.bindings={};for(let[e,n]of Object.entries(t))this.bindings[e]=Array.isArray(n)?n.slice():[n];this._byCode={};for(let[e,n]of Object.entries(this.bindings))for(let i of n)this._byCode[i]=e}remap(t,e){this.bindings[t]=Array.isArray(e)?e.slice():[e],this._byCode={};for(let[n,i]of Object.entries(this.bindings))for(let r of i)this._byCode[r]=n;return this}actionForCode(t){return this._byCode[t]||null}codesFor(t){return this.bindings[t]||[]}snapshot(){let t={};for(let[e,n]of Object.entries(this.bindings))t[e]=n.slice();return{actions:Object.keys(this.bindings).sort(),bindings:t}}};var tr=class{constructor({dom:t=null,map:e=null,onAction:n=null}={}){this.map=e||new Ye(qe),this.onAction=n,this.dom=t,this.bound=!1,this._kd=null,this._ku=null,this._attach()}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._kd=t=>{let e=this.map.actionForCode(t&&t.code);e&&this.onAction&&this.onAction(e,!0,t)},this._ku=t=>{let e=this.map.actionForCode(t&&t.code);e&&this.onAction&&this.onAction(e,!1,t)},this.dom.addEventListener("keydown",this._kd),this.dom.addEventListener("keyup",this._ku),this.bound=!0)}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&(this.dom.removeEventListener("keydown",this._kd),this.dom.removeEventListener("keyup",this._ku)),this._kd=null,this._ku=null,this.bound=!1}snapshot(){return{adapter:"keyboard",bound:this.bound,map:this.map.snapshot()}}};var er=class{constructor({dom:t=null,onLock:e=null,doc:n=null}={}){this.dom=t,this.onLock=e,this.doc=n||(typeof document<"u"?document:null),this.overlay=null,this.bound=!1,this._click=null,this._attach()}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._click=()=>{this.onLock&&this.onLock()},this.dom.addEventListener("click",this._click),this.bound=!0,this._createOverlay())}_createOverlay(){if(!this.doc||!this.doc.createElement||!this.doc.body)return;let t=this.doc.createElement("div");t.style=t.style||{},Object.assign(t.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.8)",zIndex:"1000",cursor:"pointer",color:"#fff",fontSize:"24px",fontFamily:"sans-serif",flexDirection:"column",textAlign:"center"}),t.innerHTML='<h1>Worldloop</h1><p style="font-size: 18px; margin-top: 20px;">WASD = Move | Mouse = Look<br>E = Enter/Exit Car | Space = Jump | P = Pause</p>',this.overlay=t,this.doc.body.appendChild(t)}setLocked(t){this.overlay&&(this.overlay.style.display=t?"none":"flex")}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&this.dom.removeEventListener("click",this._click),this._click=null,this.bound=!1}snapshot(){return{adapter:"mouse",bound:this.bound,overlay:!!this.overlay}}};var nr=class{constructor({dom:t=null,onAction:e=null,doc:n=null}={}){this.dom=t,this.onAction=e,this.doc=n||(typeof document<"u"?document:null),this.map=new Ye(qe),this.bound=!1,this.joystick={active:!1,x:0,y:0},this._attach()}_joystickToActions(t,e){let i=t/2,r=e/2;this.onAction&&(this.onAction("moveForward",r<-.2,{source:"touch"}),this.onAction("moveBackward",r>.2,{source:"touch"}),this.onAction("moveLeft",i<-.2,{source:"touch"}),this.onAction("moveRight",i>.2,{source:"touch"}))}_attach(){!this.dom||typeof this.dom.addEventListener!="function"||(this._ts=t=>{let e=t.touches&&t.touches[0];if(!e)return;let n=e.clientX,i=e.clientY,r=this.dom.clientWidth||1,o=this.dom.clientHeight||1,a=n/r,l=i/o;a<=.5?(this.joystick.active=!0,this.joystick.x=n,this.joystick.y=i):l>.9?this.onAction&&this.onAction("enterExit",!0,{source:"touch"}):l>.75&&this.onAction&&this.onAction("jump",!0,{source:"touch"})},this._tm=t=>{if(!this.joystick.active)return;let e=t.touches&&t.touches[0];if(!e)return;let n=this.dom.clientWidth||1,i=this.dom.clientHeight||1;this._joystickToActions((e.clientX-this.joystick.x)/n,(e.clientY-this.joystick.y)/i)},this._te=()=>{this.joystick.active&&(this.joystick.active=!1,this.onAction&&(this.onAction("moveForward",!1,{source:"touch"}),this.onAction("moveBackward",!1,{source:"touch"}),this.onAction("moveLeft",!1,{source:"touch"}),this.onAction("moveRight",!1,{source:"touch"})))},this.dom.addEventListener("touchstart",this._ts),this.dom.addEventListener("touchmove",this._tm),this.dom.addEventListener("touchend",this._te),this.bound=!0)}detach(){this.bound&&this.dom&&typeof this.dom.removeEventListener=="function"&&(this.dom.removeEventListener("touchstart",this._ts),this.dom.removeEventListener("touchmove",this._tm),this.dom.removeEventListener("touchend",this._te)),this.bound=!1}snapshot(){return{adapter:"touch",bound:this.bound,joystick:{active:this.joystick.active,x:this.joystick.x,y:this.joystick.y}}}};var D_=0,U_=1,Ou=0,ir=class{constructor({map:t=null,onAction:e=null,nav:n=null}={}){this.map=t||new Ye(qe),this.onAction=e,this.nav=n||(typeof navigator<"u"?navigator:null),this.pressedEnterExit=!1}update(){if(!this.nav||typeof this.nav.getGamepads!="function")return;let t=this.nav.getGamepads()&&this.nav.getGamepads()[0];if(!t||!this.onAction)return;let e=t.axes||[],n=t.buttons||[],i=e[U_]||0,r=e[D_]||0;this.onAction("moveForward",i<-.25,{source:"gamepad"}),this.onAction("moveBackward",i>.25,{source:"gamepad"}),this.onAction("moveLeft",r<-.25,{source:"gamepad"}),this.onAction("moveRight",r>.25,{source:"gamepad"});let o=n[Ou]&&n[Ou].pressed;o&&!this.pressedEnterExit?(this.pressedEnterExit=!0,this.onAction("enterExit",!0,{source:"gamepad"})):o||(this.pressedEnterExit=!1)}snapshot(){return{adapter:"gamepad",supported:!!this.nav}}};var N_=new Set(["moveForward","moveBackward","moveLeft","moveRight"]),F_=new Set(["enterExit","jump","pause","lock"]),ms=class{constructor({dom:t=null,map:e=null,onPause:n=null,onLock:i=null}={}){this.map=e||new Ye(qe),this.dom=t,this.onPause=n,this.onLock=i,this.actions={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1},this.events=[],this._pressed={enterExit:!1,jump:!1,pause:!1,lock:!1};let r=(o,a,l)=>this._handle(o,a,l);this.adapters=[new tr({dom:t,map:this.map,onAction:r}),new er({dom:t,onLock:()=>this._fire("lock")}),new nr({dom:t,onAction:r}),new ir({map:this.map,onAction:r})]}_handle(t,e,n){if(N_.has(t)){this.actions[t]=!!e;return}F_.has(t)&&this._fire(t,e)}_fire(t,e=!0){e&&!this._pressed[t]?(this._pressed[t]=!0,this.events.push(t),t==="pause"&&this.onPause&&this.onPause(),t==="lock"&&this.onLock&&this.onLock()):e||(this._pressed[t]=!1)}drain(){let t=this.events;return this.events=[],t}update(t=0){for(let e of this.adapters)e.update&&e.update(t)}setLocked(t){for(let e of this.adapters)e.setLocked&&e.setLocked(t)}detach(){for(let t of this.adapters)t.detach&&t.detach()}snapshot(){return{map:this.map.snapshot(),actions:{...this.actions},events:this.events.slice(),adapters:this.adapters.map(t=>t.snapshot?t.snapshot():null)}}};var To=class{constructor(t,e,n=[],i=null,r=null,o=null,a=null,l=null){this.input=l||new ms({dom:e}),this.camera=t,this.domElement=e,this.colliders=n,this.trafficSystem=i,this.parkingSystem=r,this.effectSystem=o,this.weatherSystem=a,this.controls=new wo(t,e),this.input.actions.moveForward=!1,this.input.actions.moveBackward=!1,this.input.actions.moveLeft=!1,this.input.actions.moveRight=!1,this.canJump=!1,this.isDriving=!1,this.currentCar=null,this.carVelocity=0,this.currentCar=null,this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.shakeIntensity=0,this.velocity=new A,this.direction=new A,this.init()}init(){let t=document.createElement("div");t.style.position="absolute",t.style.bottom="10px",t.style.left="10px",t.style.color="#00ff00",t.style.fontFamily="monospace",t.style.fontWeight="bold",t.style.fontSize="16px",t.innerHTML="STATUS: WAITING FOR CLICK",document.body.appendChild(t);let e=n=>{t.innerHTML=n,console.log(n)};if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){instructions.innerHTML="Pointer Lock not supported in this browser",instructions.style.color="red";return}this.controls.addEventListener("lock",()=>{this.input.setLocked(!0),e("LOCKED")}),this.controls.addEventListener("unlock",()=>{this.input.setLocked(!1),e("UNLOCKED")})}teleport(t,e,n=6){return this.camera.position.set(t,n,e),this.velocity&&this.velocity.set(0,0,0),this.car&&this.car.mesh&&this.car.mesh.position.set(t,n,e),{x:t,y:n,z:e}}_handleInputEvents(){for(let t of this.input.drain())t==="enterExit"?this.isDriving?this.exitCar():this.tryEnterCar():t==="jump"&&(this.canJump===!0&&(this.velocity.y+=20),this.canJump=!1)}update(t){if(this._handleInputEvents(),this.controls.isLocked===!0){if(this.isDriving&&this.currentCar){this.updateCarPhysics(t);return}this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.velocity.y-=9.8*5*t,this.direction.z=Number(this.input.actions.moveForward)-Number(this.input.actions.moveBackward),this.direction.x=Number(this.input.actions.moveRight)-Number(this.input.actions.moveLeft),this.direction.normalize(),(this.input.actions.moveForward||this.input.actions.moveBackward)&&(this.velocity.z-=this.direction.z*150*t),(this.input.actions.moveLeft||this.input.actions.moveRight)&&(this.velocity.x-=this.direction.x*150*t);let e=-this.velocity.x*t,n=-this.velocity.z*t;this.controls.moveRight(e),this.checkCollision()&&(this.controls.moveRight(-e),this.velocity.x=0),this.controls.moveForward(n),this.checkCollision()&&(this.controls.moveForward(-n),this.velocity.z=0),this.camera.position.y+=this.velocity.y*t,this.camera.position.y<2&&(this.velocity.y=0,this.camera.position.y=2,this.canJump=!0)}}tryEnterCar(){let t=this.camera.position,e=null,n=5;if(this.trafficSystem)for(let i of this.trafficSystem.cars){let r=t.distanceTo(i.mesh.position);r<n&&(n=r,e=i)}if(this.parkingSystem)for(let i of this.parkingSystem.cars){let r=t.distanceTo(i.position);r<n&&(n=r,e={mesh:i,isParked:!0})}e&&this.enterCar(e)}enterCar(t){if(this.isDriving=!0,this.currentCar=t,t.isPlayerDriven=!0,t.mesh&&(t.mesh.isPlayerDriven=!0),t.isParked){let e=new qt().setFromObject(t.mesh),n=this.colliders.findIndex(i=>i.intersectsBox(e)&&i.containsBox(e));n!==-1&&this.colliders.splice(n,1)}this.carVelocity=0,this.carSteering=0,this.spinVelocity=0,this.currentCar.mesh.userData.health===void 0&&(this.currentCar.mesh.userData.health=100),console.log("Entered car. Health:",this.currentCar.mesh.userData.health),console.log("Entered car")}exitCar(){if(!this.currentCar)return;if(this.currentCar.isPlayerDriven=!1,this.currentCar.mesh&&(this.currentCar.mesh.isPlayerDriven=!1),this.isDriving=!1,this.currentCar.isParked){let h=new qt().setFromObject(this.currentCar.mesh);this.colliders.push(h)}let t=this.currentCar.mesh.rotation.clone();this.currentCar.mesh.rotation.set(0,0,0),this.currentCar.mesh.updateMatrixWorld();let e=new qt().setFromObject(this.currentCar.mesh),n=new A;e.getSize(n),this.currentCar.mesh.rotation.copy(t),this.currentCar.mesh.updateMatrixWorld();let i=1,r=n.x/2+i,o=n.z/2+i+1,a=[new A(r,0,0),new A(-r,0,0),new A(0,0,-o),new A(0,0,o)],l=null,c=this.camera.position.clone();for(let h of a){h.applyEuler(this.currentCar.mesh.rotation);let u=this.currentCar.mesh.position.clone().add(h);if(u.y=2,this.camera.position.copy(u),!this.checkCollision()){l=u;break}}l?this.camera.position.copy(l):(console.warn("No safe exit found on ground, spawning on top."),this.camera.position.copy(this.currentCar.mesh.position),this.camera.position.y=5),this.currentCar=null,console.log("Exited car")}updateCarPhysics(t){if(!this.currentCar)return;let e=this.getCarStats(this.currentCar.mesh.userData.type||"sedan"),n=this.getDrivingModifiers(),i=e.maxSpeed*n.maxSpeedScale,r=e.acceleration*n.accelerationScale,o=n.friction,a=2;Math.abs(this.spinVelocity)>.1&&(this.currentCar.mesh.rotation.y+=this.spinVelocity*t,this.spinVelocity*=.95,Math.abs(this.spinVelocity)>2&&(this.carVelocity*=.98));let l=this.currentCar.mesh.userData.health;l<=0?(this.carVelocity*=.95,this.effectSystem&&(this.effectSystem.addEmitter(this.currentCar.mesh,"fire"),this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"))):l<20?this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"fire"):l<50&&this.effectSystem&&this.effectSystem.addEmitter(this.currentCar.mesh,"smoke"),this.shakeIntensity>0&&(this.shakeIntensity-=5*t,this.shakeIntensity<0&&(this.shakeIntensity=0)),Math.abs(this.spinVelocity)<5&&l>0&&(this.input.actions.moveForward?this.carVelocity+=r*t:this.input.actions.moveBackward?this.carVelocity-=r*t:(this.carVelocity>0&&(this.carVelocity-=o*t),this.carVelocity<0&&(this.carVelocity+=o*t),Math.abs(this.carVelocity)<.1&&(this.carVelocity=0))),this.carVelocity=Math.max(-i/2,Math.min(i,this.carVelocity)),Math.abs(this.carVelocity)>.1&&Math.abs(this.spinVelocity)<5&&(this.input.actions.moveLeft&&(this.currentCar.mesh.rotation.y+=a*t*Math.sign(this.carVelocity)),this.input.actions.moveRight&&(this.currentCar.mesh.rotation.y-=a*t*Math.sign(this.carVelocity)));let c=new A(0,0,1);if(c.applyEuler(this.currentCar.mesh.rotation),this.currentCar.mesh.position.add(c.multiplyScalar(this.carVelocity*t)),this.checkCarCollision()){this.currentCar.mesh.position.add(c.multiplyScalar(-this.carVelocity*t));let f=Math.abs(this.carVelocity),g=Math.min(f/40,1);if(this.effectSystem&&f>5){let x=this.currentCar.mesh.position.clone().add(c.multiplyScalar(2));this.effectSystem.createCrashEffect(x),this.currentCar.mesh.children.forEach(p=>{bo(p,x,1.5,g*.5)});let m=f*.5;this.currentCar.mesh.userData.health-=m,console.log(`Crash! Speed: ${f.toFixed(1)}, Damage: ${m.toFixed(1)}, Health: ${this.currentCar.mesh.userData.health.toFixed(1)}`),f>10?(this.spinVelocity=(Math.random()-.5)*20*g,this.shakeIntensity=1*g,this.carVelocity=-this.carVelocity*.5):this.carVelocity=0}else this.carVelocity=0,this.shakeIntensity=.2}let u=new A(0,5,-10);u.applyEuler(this.currentCar.mesh.rotation),this.shakeIntensity>0&&(u.x+=(Math.random()-.5)*this.shakeIntensity,u.y+=(Math.random()-.5)*this.shakeIntensity,u.z+=(Math.random()-.5)*this.shakeIntensity);let d=this.currentCar.mesh.position.clone().add(u);this.camera.position.lerp(d,5*t),this.camera.lookAt(this.currentCar.mesh.position)}checkCarCollision(){if(!this.currentCar)return!1;this.currentCar.mesh.updateMatrixWorld();let t;if(this.currentCar.mesh.userData.localBox?t=this.currentCar.mesh.userData.localBox.clone().applyMatrix4(this.currentCar.mesh.matrixWorld):t=new qt().setFromObject(this.currentCar.mesh),this.colliders){for(let e of this.colliders)if(t.intersectsBox(e))return!0}if(this.trafficSystem)for(let e of this.trafficSystem.cars){if(e===this.currentCar)continue;let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i;if(e.mesh.userData.localBox?i=e.mesh.userData.localBox.clone().applyMatrix4(e.mesh.matrixWorld):i=new qt().setFromObject(e.mesh),t.intersectsBox(i)||n<3.5){console.log("HIT TRAFFIC! (Dist: "+n.toFixed(2)+")");let r=this.getImpactPoint(this.currentCar.mesh,e.mesh);return this.applyCrashDamage(this.currentCar.mesh,e.mesh,r,e),e.velocity&&(this.applyCrashPhysics(this.currentCar.mesh,e,r,e.mesh.position),e.stunned=2),{hit:!0,point:r,object:e}}}if(this.pedestrianSystem&&this.pedestrianSystem.peds)for(let e of this.pedestrianSystem.peds){let n=e.mesh.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.mesh.updateMatrixWorld();let i=new qt().setFromObject(e.mesh);if((t.intersectsBox(i)||n<1)&&e.state!=="RAGDOLL"){e.state="RAGDOLL",e.ragdollTimer=4;let r=new A(0,0,1).applyEuler(this.currentCar.mesh.rotation),o=Math.abs(this.carVelocity)||20;return e.velocity.copy(r).multiplyScalar(o*.8+5),e.velocity.y+=6,this.effectSystem&&this.effectSystem.createCrashEffect(e.mesh.position),{hit:!0,point:e.mesh.position.clone(),object:e}}}if(this.parkingSystem)for(let e of this.parkingSystem.cars){if(this.currentCar.mesh===e)continue;let n=e.position.distanceTo(this.currentCar.mesh.position);if(n>25)continue;e.updateMatrixWorld();let i;if(e.userData.localBox?i=e.userData.localBox.clone().applyMatrix4(e.matrixWorld):i=new qt().setFromObject(e),t.intersectsBox(i)||n<3.5){console.log("HIT PARKED! (Dist: "+n.toFixed(2)+")"),e.userData.velocity||(e.userData.velocity=new A,e.userData.angularVelocity=0);let r=this.getImpactPoint(this.currentCar.mesh,e);return this.applyCrashDamage(this.currentCar.mesh,e,r,e.userData),this.applyCrashPhysics(this.currentCar.mesh,e.userData,r,e.position),{hit:!0,point:r,object:e}}}return!1}getImpactPoint(t,e){let n=t.position,i=e.position,r=new A().lerpVectors(n,i,.5);return r.y=.5,r}applyCrashDamage(t,e,n,i){t.children.forEach(l=>{l.isMesh&&bo(l,n,2,1)}),e.children.forEach(l=>{l.isMesh&&(l.userData.isUnique||(l.geometry=l.geometry.clone(),l.userData.isUnique=!0),bo(l,n,2,1))}),this.effectSystem&&this.effectSystem.createCrashEffect(n),(Math.abs(this.carVelocity)||20)>25&&this.emergencySystem&&this.emergencySystem.respond(n.x,n.z);let a=(Math.abs(this.carVelocity)||20)*1.5;t.userData.health!==void 0&&(t.userData.health-=a),i.health!==void 0&&(i.health-=a,e&&e.traverse(c=>{c.isMesh&&c.material&&c.material.color&&(c.userData.isUniqueMat||(c.material=c.material.clone(),c.userData.isUniqueMat=!0),c.material.color.multiplyScalar(.5))}),i.health<60&&this.effectSystem&&this.effectSystem.createSmokeEffect({mesh:e}),i.health<=0&&(this.effectSystem&&this.effectSystem.createFireEffect({mesh:e}),i.stunned!==void 0&&(i.stunned=999)))}getMass(t){switch(t){case"truck":return 4e3;case"suv":return 2500;case"sedan":return 1600;case"sport":return 1200;default:return 1500}}applyCrashPhysics(t,e,n,i){console.warn("APPLYING PHYSICS to",e);let r=this.getMass("player"),o=this.getMass(e.type||"sedan"),a=new A(0,0,1).applyEuler(t.rotation);a.y=0,a.normalize();let l=Math.max(Math.abs(this.carVelocity),8),c=r/o,h=l*c*1.2,u=a.multiplyScalar(h);if(e.velocity.add(u),l>30){let p=(l-30)*.02;e.velocity.y+=Math.min(p,1),e.velocity.y+=Math.random()*.1}else e.velocity.y=0;let d=new A().subVectors(n,i),f=new A().crossVectors(d,u),g=o*.001,x=f.y/g;x=as.clamp(x,-6,6),e.angularVelocity=x;let m=o/(r+o);this.carVelocity*=1-m*.8,this.shakeIntensity=Math.min(h*.5,3)}checkCollision(){if(!this.colliders)return!1;let t=new qt,e=this.camera.position.clone();t.min.set(e.x-.2,e.y-.5,e.z-.2),t.max.set(e.x+.2,e.y+.5,e.z+.2);for(let n of this.colliders)if(t.intersectsBox(n))return!0;if(this.trafficSystem){let n=new qt;for(let i of this.trafficSystem.cars)if(i.mesh.userData.localBox?n.copy(i.mesh.userData.localBox).applyMatrix4(i.mesh.matrixWorld):n.setFromObject(i.mesh),n.expandByScalar(.2),t.intersectsBox(n))return!0}return!1}getDrivingModifiers(){let t=1,e=1,n=1,i=this.weatherSystem?this.weatherSystem.currentWeather:"sunny";return i==="rain"?(t=.6,e=.8,n=.85):i==="snow"&&(t=.35,e=.6,n=.7),{weather:i,grip:t,friction:10*t,maxSpeedScale:e,accelerationScale:n}}getCarStats(t){switch(t){case"sport":return{maxSpeed:60,acceleration:40};case"taxi":return{maxSpeed:55,acceleration:40};case"sedan":return{maxSpeed:45,acceleration:30};case"suv":return{maxSpeed:40,acceleration:25};case"truck":return{maxSpeed:35,acceleration:20};case"bus":return{maxSpeed:30,acceleration:15};default:return{maxSpeed:45,acceleration:30}}}};var O_=new ot({roughness:.5,metalness:.2,envMapIntensity:.35}),k_=new ot({color:1122867,roughness:.65,metalness:.08,envMapIntensity:.25}),B_=new ot({color:1118481,roughness:.9,metalness:.1}),z_=new ot({color:13421772,roughness:.6,metalness:.35,envMapIntensity:.35}),H_=new ot({color:16777215,roughness:.6,metalness:.35,envMapIntensity:.35}),V_=new ot({color:1118481,roughness:.8}),G_=new ot({color:16777215,emissive:16772778,emissiveIntensity:2}),W_=new ot({color:5570560,emissive:16711680,emissiveIntensity:2});function gs(s="sedan",t=null){let e=new he;e.userData.type=s,t||(t=J_(s));let n=O_.clone();n.color.set(t);let i={paint:[],glass:[],rubber:[],rim:[],chrome:[],plastic:[],lightFront:[],lightRear:[]};s==="sedan"?ku(i):s==="suv"?Y_(i):s==="sport"?q_(i):s==="truck"?Z_(i):s==="taxi"?X_(i):s==="bus"?$_(i):s==="ambulance"?K_(i):s==="fire"?j_(i):s==="police"?Q_(i):ku(i);let r=(o,a)=>{if(o.length>0){let l=In(o),c=new et(l,a);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}};return r(i.paint,n),r(i.glass,k_),r(i.rubber,B_),r(i.rim,z_),r(i.chrome,H_),r(i.plastic,V_),r(i.lightFront,G_),r(i.lightRear,W_),e.userData.localBox||(e.userData.localBox=new qt().setFromObject(e)),e.castShadow=!0,e.receiveShadow=!0,e}function nt(s,t,e,n,i,r,o=0,a=0,l=0){let c=new Lt(s,t,e);return(o||a||l)&&c.rotateX(o).rotateY(a).rotateZ(l),c.translate(n,i,r),c}function tc(s,t,e,n,i,r,o,a=0,l=0,c=0){let h=new Me(s,t,e,n);return(a||l||c)&&h.rotateX(a).rotateY(l).rotateZ(c),h.translate(i,r,o),h}function Ao(s,t,e,n,i,r,o){s.glass.push(nt(t+.05,e,n+.05,i,r,o))}function Nn(s,t,e,n=.35){let r=t/2-.1,o=e/2,a=n,l=(c,h,u)=>{s.rubber.push(tc(n,n,.25,24,c,h,u,0,0,Math.PI/2)),s.rim.push(tc(n*.6,n*.6,.25+.02,12,c,h,u,0,0,Math.PI/2))};l(-r,a,o),l(r,a,o),l(-r,a,-o),l(r,a,-o)}function ku(s){s.paint.push(nt(1.9,.55,4.7-.4,0,.35+.55/2,0)),s.plastic.push(nt(1.9,.35,.3,0,.35+.2,4.7/2-.15)),s.plastic.push(nt(1.9,.35,.3,0,.35+.2,-4.7/2+.15)),s.plastic.push(nt(1,.25,.1,0,.35+.35,4.7/2)),s.lightFront.push(nt(.35,.15,.2,-.6,.35+.45,4.7/2-.1)),s.lightFront.push(nt(.35,.15,.2,.6,.35+.45,4.7/2-.1)),s.lightRear.push(nt(.35,.2,.1,-.6,.35+.45,-4.7/2+.05)),s.lightRear.push(nt(.35,.2,.1,.6,.35+.45,-4.7/2+.05)),s.paint.push(nt(1.9-.2,.5,4.7*.4,0,.35+.55+.5/2-.05,-.2)),s.glass.push(nt(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.7*.22-.2,-.3,0,0)),s.glass.push(nt(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.7*.4-.2,.25,0,0)),Ao(s,1.9-.15,.5-.15,4.7*.3,0,.35+.55+.5/2-.05,-.2),s.paint.push(nt(.2,.12,.1,-1.9/2-.05,.35+.55+.1,.5)),s.paint.push(nt(.2,.12,.1,1.9/2+.05,.35+.55+.1,.5)),Nn(s,1.9,2.8,.35)}function X_(s){s.paint.push(nt(1.9,.55,4.8-.5,0,.35+.55/2,0)),s.plastic.push(nt(1.9,.3,.4,0,.35+.2,4.8/2-.2)),s.plastic.push(nt(1.9,.3,.4,0,.35+.2,-4.8/2+.4)),s.plastic.push(nt(.8,.2,.1,0,.35+.4,4.8/2)),s.lightFront.push(nt(.3,.15,.1,-.6,.35+.45,4.8/2)),s.lightFront.push(nt(.3,.15,.1,.6,.35+.45,4.8/2)),s.lightRear.push(nt(.3,.15,.1,-.6,.35+.45,-4.8/2+.2)),s.lightRear.push(nt(.3,.15,.1,.6,.35+.45,-4.8/2+.2)),s.paint.push(nt(1.9-.2,.5,4.8*.45,0,.35+.55+.5/2-.05,-.1)),s.glass.push(nt(1.9-.25,.5-.1,.1,0,.35+.55+.25,4.8*.22,-.2,0,0)),s.glass.push(nt(1.9-.25,.5-.1,.1,0,.35+.55+.25,-4.8*.35,.2,0,0)),Ao(s,1.9-.15,.5-.15,4.8*.35,0,.35+.55+.5/2-.05,-.1),s.plastic.push(nt(.1,.05,1,0,.35+.55+.5,-.1)),s.lightFront.push(nt(.6,.2,.25,0,.35+.55+.5+.15,-.1)),Nn(s,1.9,2.9,.35)}function Y_(s){s.paint.push(nt(2.1,.65,4.9-.2,0,.42+.65/2,0)),s.plastic.push(nt(2.1,.4,.35,0,.42+.25,4.9/2-.1)),s.plastic.push(nt(2.1,.4,.35,0,.42+.25,-4.9/2+.1)),s.chrome.push(nt(1.2,.3,.1,0,.42+.3,4.9/2+.1)),s.plastic.push(nt(1,.4,.1,0,.42+.5,4.9/2)),s.lightFront.push(nt(.35,.25,.1,-.7,.42+.6,4.9/2)),s.lightFront.push(nt(.35,.25,.1,.7,.42+.6,4.9/2)),s.lightRear.push(nt(.2,.5,.1,-.7,.42+.6,-4.9/2+.05)),s.lightRear.push(nt(.2,.5,.1,.7,.42+.6,-4.9/2+.05)),s.paint.push(nt(2.1-.1,.6,4.9*.55,0,.42+.65+.6/2-.05,.1)),s.glass.push(nt(2.1-.15,.6-.1,.1,0,.42+.65+.25,4.9*.27,-.2,0,0)),s.glass.push(nt(2.1-.15,.6-.1,.1,0,.42+.65+.25,-4.9*.27+.1,0,0,0)),Ao(s,2.1-.05,.6-.15,4.9*.45,0,.42+.65+.6/2-.05,.1),s.chrome.push(nt(.1,.1,4.9*.5,-2.1/2+.3,.42+.65+.6,.1)),s.chrome.push(nt(.1,.1,4.9*.5,2.1/2-.3,.42+.65+.6,.1)),s.rubber.push(tc(.35,.35,.25,16,0,.42+.65+.1,-4.9/2-.1,Math.PI/2,0,0)),Nn(s,2.1+.1,2.9,.45)}function q_(s){s.paint.push(nt(2-.2,.45,4.6*.8,0,.35+.45/2,0)),s.paint.push(nt(.4,.45+.15,1.4,2/2-.2,.35+.45/2+.05,-1.2)),s.paint.push(nt(.4,.45+.15,1.4,-2/2+.2,.35+.45/2+.05,-1.2)),s.paint.push(nt(2,.45-.1,1.2,0,.35+.2,1.8,.1,0,0)),s.plastic.push(nt(2+.1,.05,.5,0,.35+.1,2.2)),s.paint.push(nt(2-.5,.45,4.6*.35,0,.35+.45+.45/2-.05,.1)),s.glass.push(nt(2-.55,.45-.1,1.2,0,.35+.45+.45/2-.05,.3,-.3,0,0));let o=.35+.45+.6;s.paint.push(nt(2+.2,.05,.4,0,o,-4.6/2+.2)),s.plastic.push(nt(.05,.4,.2,-.5,o-.2,-4.6/2+.3)),s.plastic.push(nt(.05,.4,.2,.5,o-.2,-4.6/2+.3)),Nn(s,2+.1,2.7,.38)}function Z_(s){s.plastic.push(nt(2.4-.4,.6,5.8,0,.5+.6/2,0));let r=1.3,o=2.2;s.paint.push(nt(2.4,r,o,0,.5+.6+r/2-.1,5.8/2-o/2-.2)),s.glass.push(nt(2.4-.1,.7,.1,0,.5+.6+.8,5.8/2-.15,-.15,0,0)),s.glass.push(nt(2.4-.4,.5,.1,0,.5+.6+.9,5.8/2-o-.25)),Ao(s,2.4+.05,.6,o-.6,0,.5+.6+r/2-.1,5.8/2-o/2-.2);let a=2.6,l=.8;s.paint.push(nt(.2,l,a,-2.4/2+.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(nt(.2,l,a,2.4/2-.1,.5+.6+l/2,-5.8/2+a/2+.4)),s.paint.push(nt(2.4-.4,.1,a,0,.5+.6+.4,-5.8/2+a/2+.4)),s.paint.push(nt(2.4,l,.15,0,.5+.6+l/2,-5.8/2+.4)),s.chrome.push(nt(1.4,.6,.1,0,.5+.8,5.8/2)),s.lightFront.push(nt(.3,.4,.1,-.9,.5+.8,5.8/2)),s.lightFront.push(nt(.3,.4,.1,.9,.5+.8,5.8/2)),Nn(s,2.4+.2,3.8,.6)}function $_(s){s.paint.push(nt(2.6,2.3,9,0,.5+.5+2.3/2-.2,0)),s.plastic.push(nt(2.6-.4,.4,3,0,.5+.5+2.3+.1,-1)),s.glass.push(nt(.1,1.2,9-1.5,-2.6/2-.05,.5+2,0)),s.glass.push(nt(.1,1.2,9-1.5,2.6/2+.05,.5+2,0)),s.glass.push(nt(2.6-.2,1.4,.1,0,.5+1.8,9/2+.05,-.05,0,0)),s.lightFront.push(nt(.25,.25,.1,-2.6/2+.4,.5+.8,9/2+.05)),s.lightFront.push(nt(.25,.25,.1,2.6/2-.4,.5+.8,9/2+.05)),Nn(s,2.6-.3,5.5,.55)}function J_(s){if(s==="taxi")return 16763904;if(s==="bus")return Math.random()<.5?3368652:13382451;if(s==="truck")return 8934707;if(s==="ambulance")return 15921906;if(s==="fire")return 13378082;if(s==="police")return 1710638;let t=[1118481,15658734,8947848,13369344,13260,2250018,5570560];return t[Math.floor(Math.random()*t.length)]}function K_(s){s.paint.push(nt(2.1,1.6,5.6,0,.5+.5+1.6/2-.15,0)),s.glass.push(nt(2.1-.15,.9,.15,0,.5+1.1,5.6/2-.4,-.2,0,0)),s.glass.push(nt(.1,.7,5.6-3.4,-2.1/2-.05,.5+1.4,-.6)),s.glass.push(nt(.1,.7,5.6-3.4,2.1/2+.05,.5+1.4,-.6)),s.plastic.push(nt(.6,.18,.6,0,.5+1.6+.4,-.4)),Nn(s,2.1,3.6,.55)}function j_(s){s.paint.push(nt(2.6,1.4,2.2,0,.6+.7+.6,7/2-1.1-.2)),s.glass.push(nt(2.6-.1,.6,.15,0,.6+1.4,7/2-.5,-.15,0,0)),s.paint.push(nt(2.6,2,3.2,0,.6+.7+1,-.4)),s.plastic.push(nt(.25,.9,3.2,-2.6/2+.15,.6+1.4,-.4)),s.chrome.push(nt(.4,.4,2.6,0,.6+1.8,-7/2+1.6)),Nn(s,2.6-.2,5,.6)}function Q_(s){s.paint.push(nt(2,.55,5-.4,0,.5+.55/2,0)),s.paint.push(nt(2-.25,.5,5*.4,0,.5+.55+.25,.1)),s.glass.push(nt(2-.3,.4,.1,0,.5+.8,5*.22,-.25,0,0)),s.glass.push(nt(2-.3,.4,.1,0,.5+.8,-5*.38,.25,0,0)),Nn(s,2,3,.35)}function Bu(s){s&&s.traverse(t=>{t.isMesh&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&(t.material.userData.isShared||t.material.dispose()))})}function zu(){let s=Math.random();return s<.4?"ambulance":s<.7?"fire":"police"}function Co(){let s=Math.random();return s<.3?"sedan":s<.45?"taxi":s<.75?"suv":s<.85?"truck":s<.95?"bus":"sport"}var Ro=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.roadGraph=null,this.carPool={sedan:[],taxi:[],suv:[],truck:[],bus:[],sport:[]}}getSpeedForType(t){switch(t){case"sport":return 16;case"taxi":return 13;case"sedan":return 11;case"suv":return 9;case"truck":return 6;case"bus":return 5;default:return 8}}getCarFromPool(t){if(this.carPool[t]&&this.carPool[t].length>0){let e=this.carPool[t].pop();return e.visible=!0,e}return gs(t)}returnCarToPool(t,e){t&&(t.visible=!1,this.scene.remove(t),this.carPool[e]||(this.carPool[e]=[]),this.carPool[e].push(t))}loadChunk(t,e,n="city"){let i=[],o=this.blockSize+this.roadWidth,a=t*o,l=e*o,c=["x","z"];n==="highway_x"&&(c=["x"]),n==="highway_z"&&(c=["z"]);for(let h=0;h<3;h++){let u=Co(),d=this.getCarFromPool(u);d.userData.localBox||(d.userData.localBox=new qt().setFromObject(d));let f=this.spawnCarInChunk(d,a,l,o,i,c);if(f){let g=Math.abs(f.pos.x-a)<=7&&Math.abs(f.pos.z-l)<=7;if(n.startsWith("highway")||!g){this.scene.add(d);let m=this.getSpeedForType(u);i.push({mesh:d,axis:f.axis,direction:f.direction,speed:m,type:u,velocity:new A,angularVelocity:0,stunned:0,health:100,chunkX:a,chunkZ:l,chunkSize:o,cx:t,cz:e,lastNodeKey:null})}else this.returnCarToPool(d,u)}else this.returnCarToPool(d,u)}this.chunkCars.set(`${t},${e}`,i),i.forEach(h=>this.cars.push(h))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.returnCarToPool(r.mesh,r.type);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}spawnCarInChunk(t,e,n,i,r=[],o=["x","z"]){for(let c=0;c<10;c++){let h=o[Math.floor(Math.random()*o.length)],u=Math.random()>.5?1:-1,d=new A;h==="x"?d.set(e+(Math.random()-.5)*i,0,n+(u===1?3:-3)+(Math.random()-.5)*2):d.set(e+(u===1?-3:3)+(Math.random()-.5)*2,0,n+(Math.random()-.5)*i);let f=!1;for(let g of r)if(d.distanceTo(g.mesh.position)<8){f=!0;break}if(!f)return t.position.copy(d),h==="x"?t.rotation.y=u>0?Math.PI/2:-Math.PI/2:t.rotation.y=u>0?0:Math.PI,{axis:h,direction:u,pos:d.clone()}}return null}setDependencies(t,e,n,i,r,o,a){this.player=t,this.parkingSystem=e,this.trafficLightSystem=n,this.effectSystem=i,this.pedestrianSystem=r,this.roadGraph=o||null,this.emergencySystem=a||null}pedestrianNearCrosswalk(t){if(!this.pedestrianSystem||!t)return!1;let e=14,n=3.5,i=t.mesh.position,r=this.pedestrianSystem.peds||[];for(let o of r){let a=o.mesh.position,l=0,c=0;if(t.axis==="x"){c=Math.abs(a.z-i.z);let h=a.x-i.x;l=t.direction===1?h:-h}else{c=Math.abs(a.x-i.x);let h=a.z-i.z;l=t.direction===1?h:-h}if(l>0&&l<e&&c<n)return!0}return!1}update(t){let e=[];this.parkingSystem&&(e=e.concat(this.parkingSystem.cars)),this.player&&!this.player.isDriving&&e.push({isPlayer:!0,position:this.player.camera.position,isObject:!0});for(let n of this.chunkCars.values())n.forEach(i=>{if(i.isPlayerDriven)return;if(i.stunned>0){i.stunned-=t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.mesh.rotation.y+=i.angularVelocity*t,i.velocity.multiplyScalar(.98),i.angularVelocity*=.98,i.velocity.length()<.1&&(i.stunned=0,i.health<=0&&(i.stunned=999)),this.effectSystem&&Math.random()<.1&&(i.health<20?this.effectSystem.createFireEffect(i.mesh):i.health<50&&this.effectSystem.createSmokeEffect(i.mesh));return}if(this.checkBlocked(i,e))return;let r=i.direction*i.speed*t;if(i.axis==="x"?i.mesh.position.x+=r:i.mesh.position.z+=r,this.roadGraph){let l=this.roadGraph.nodeAtWorld(i.mesh.position.x,i.mesh.position.z);if(l&&l.key!==i.lastNodeKey){i.lastNodeKey=l.key;let c=i.axis==="x"?"z":"x";if(l[c]&&Math.random()<.25){let h=this.roadGraph.neighbors(l.key).filter(u=>u.axis===c);if(h.length){let u=h[Math.floor(Math.random()*h.length)],d=this.roadGraph.getNode(u.to),f,g;c==="z"?(f=d.cz>l.cz?1:-1,g=d.cz>l.cz?0:Math.PI):(f=d.cx>l.cx?1:-1,g=d.cx>l.cx?Math.PI/2:-Math.PI/2),i.axis=c,i.direction=f,i.mesh.rotation.y=g}}}}let o=Math.round(i.mesh.position.x/i.chunkSize),a=Math.round(i.mesh.position.z/i.chunkSize);if(o!==i.cx||a!==i.cz){let l=`${i.cx},${i.cz}`;if(this.chunkCars.has(l)){let h=this.chunkCars.get(l),u=h.indexOf(i);u>-1&&h.splice(u,1)}let c=`${o},${a}`;this.chunkCars.has(c)||this.chunkCars.set(c,[]),this.chunkCars.get(c).push(i),i.cx=o,i.cz=a,i.chunkX=o*i.chunkSize,i.chunkZ=a*i.chunkSize}})}checkBlocked(t,e){if(this.pedestrianNearCrosswalk(t))return!0;if(this.trafficLightSystem){let a=t.mesh.position.x-t.chunkX,l=t.mesh.position.z-t.chunkZ,c=this.roadWidth/2+3,h=18,u=!1,d=Math.round(t.chunkX/t.chunkSize),f=Math.round(t.chunkZ/t.chunkSize);if(t.axis==="x"?Math.abs(a)>c&&Math.abs(a)<h&&(a>0&&t.direction<0||a<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(d,f,"x")||(u=!0)):Math.abs(l)>c&&Math.abs(l)<h&&(l>0&&t.direction<0||l<0&&t.direction>0)&&(this.trafficLightSystem.checkGreenLight(d,f,"z")||(u=!0)),u)return!0}let n=12,i=2.5,r=t.mesh.position,o=a=>{for(let l of a){if(l===t||l===t.mesh)continue;let c;if(l.isPlayer)c=l.position;else if(l.mesh)c=l.mesh.position;else if(l.position)c=l.position;else continue;let h=0,u=0;if(t.axis==="x"){u=Math.abs(c.z-r.z);let d=c.x-r.x;t.direction===1?h=d:h=-d}else{u=Math.abs(c.x-r.x);let d=c.z-r.z;t.direction===1?h=d:h=-d}if(h>0&&h<n&&u<i)return!0}return!1};if(o(this.cars)||o(e))return!0;if(this.emergencySystem){let a=this.emergencySystem.getColliders();if(a.length&&o(a))return!0}return!1}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.mesh.userData.localBox?t.push(n.mesh.userData.localBox.clone().applyMatrix4(n.mesh.matrixWorld)):t.push(new qt().setFromObject(n.mesh)))});return t}};var Po=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.pool={ambulance:[],fire:[],police:[]},this.active=[],this.events=0,this.effectSystem=null,this.dedupRadius=60}setEffects(t){this.effectSystem=t}getVehicle(t){if(this.pool[t]&&this.pool[t].length>0){let e=this.pool[t].pop();return e.visible=!0,e}return gs(t)}returnVehicle(t){t&&(t.mesh.visible=!1,this.scene.remove(t.mesh),this.pool[t.type]||(this.pool[t.type]=[]),this.pool[t.type].push(t.mesh))}respond(t,e){for(let a of this.active){let l=a.mesh.position.x-t,c=a.mesh.position.z-e;if(l*l+c*c<this.dedupRadius*this.dedupRadius)return null}let n=zu(),i=this.getVehicle(n),r=new A(t+(Math.random()-.5)*10,0,e+(Math.random()-.5)*10);i.position.copy(r),i.rotation.y=0,this.scene.add(i);let o={mesh:i,type:n,target:new A(t,0,e),speed:20,life:20};return this.active.push(o),this.effectSystem&&this.effectSystem.createEmergencyLights(i),this.events++,o}update(t){for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];n.life-=t;let i=n.target,r=i.x-n.mesh.position.x,o=i.z-n.mesh.position.z;if(Math.sqrt(r*r+o*o)<2||n.life<=0){this.returnVehicle(n),this.active.splice(e,1);continue}let l=n.speed*t;Math.abs(r)>Math.abs(o)?(n.mesh.position.x+=Math.sign(r)*Math.min(l,Math.abs(r)),n.mesh.rotation.y=Math.sign(r)*Math.PI/2):(n.mesh.position.z+=Math.sign(o)*Math.min(l,Math.abs(o)),n.mesh.rotation.y=Math.sign(o)>0?0:Math.PI)}}getColliders(){return this.active}};var Lo=class{constructor(t){this.scene=t,this.sites=new Map,this.cranes=[],this.SPEED=.35}loadChunk(t,e,n){let i=n&&n.construction?n.construction:[];if(i.length){this.sites.set(`${t},${e}`,i);for(let r of i)this.cranes.push(r)}}unloadChunk(t,e){let n=`${t},${e}`,i=this.sites.get(n);if(i){for(let r of i){let o=this.cranes.indexOf(r);o>-1&&this.cranes.splice(o,1)}this.sites.delete(n)}}update(t){for(let e of this.cranes){e.phase+=t*this.SPEED;let n=e.phase;e.pivot.rotation.y=n,e.hook.position.x=e.jibLen*(.5+.5*Math.sin(n*.7)),e.hook.position.y=-3-7*Math.max(0,Math.sin(n*.35)),e.cable&&(e.cable.position.y=e.hook.position.y/2,e.cable.scale.y=Math.max(.25,-e.hook.position.y))}}craneCount(){return this.cranes.length}};var Io=class{constructor(t,e,n,i){this.scene=t,this.directionalLight=e,this.ambientLight=n,this.materials=i,this.particles=null,this.particles=null,this.particleCount=12e3,this.particleSystem=null,this.particleSystem=null,this.sun=null,this.clouds=null,this.currentWeather="sunny",this.gameTime=12;let r=new Date,o=new Date(r.getFullYear(),0,0),a=r-o,l=1e3*60*60*24,c=Math.floor(a/l);this.day=c,this.year=1,console.log(`Weather Initialized: Real World Date ${r.toDateString()} -> Game Day ${this.day}`),this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2,this.targetWeatherState={fogDensity:.002,lightIntensity:1.5,ambientIntensity:.6,skyColorHex:8900331,precipAlpha:0,roughness:.9,wetness:0,precipType:"none"},this.currentWeatherState={...this.targetWeatherState},this.transitionSpeed=.5,this.windTime=0,this.windVector=new A(5,0,2),this.initParticles(),this.initSky(),this.pickWeatherForSeason(),this.cloudInstances=[],this.initClouds()}initClouds(){let i=[],r=new ot({color:16777215,roughness:.9,transparent:!0,opacity:.8,flatShading:!0}),o=(c,h,u,d)=>{let f=new Ln(c,0);return f.translate(h,u,d),f};for(let c=0;c<3;c++){let h,u,d;c===0?(h=3+Math.floor(Math.random()*3),u=30,d=15):c===1?(h=8+Math.floor(Math.random()*5),u=70,d=30):(h=15+Math.floor(Math.random()*10),u=140,d=40);let f=[];for(let g=0;g<h;g++){let x=d+Math.random()*d,m=(Math.random()-.5)*u,p=(Math.random()-.5)*u*.4,y=(Math.random()-.5)*u*.6;f.push(o(x,m,p,y))}f.length>0?i.push(In(f)):i.push(new Lt(1,1,1))}let a=Math.ceil(40/3);this.cloudMeshes=[];let l=[];for(let c=0;c<3;c++){let h=new Jn(i[c],r,a);h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.setUsage(du);let u=new ue;for(let d=0;d<a;d++){let f,g,x=!1,m=0;for(;!x&&m<50;){f=(Math.random()-.5)*2e3,g=(Math.random()-.5)*2e3,x=!0;for(let y of l)if(Math.sqrt((f-y.x)**2+(g-y.z)**2)<150){x=!1;break}m++}l.push({x:f,z:g});let p=400+Math.random()*150;u.position.set(f,p,g),u.rotation.y=Math.random()*Math.PI*2,u.scale.setScalar(1+Math.random()*.5),u.updateMatrix(),h.setMatrixAt(d,u.matrix)}h.instanceMatrix.needsUpdate=!0,this.scene.add(h),this.cloudMeshes.push({mesh:h,count:a,dummy:u})}}updateClouds(t,e){if(!this.cloudMeshes)return;let n=15*t,i=1e3;for(let r of this.cloudMeshes){let o=r.mesh,a=r.dummy,l=!1;for(let c=0;c<r.count;c++){o.getMatrixAt(c,a.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.position.x+=n;let h=a.position.x-e.x,u=a.position.z-e.z,d=!1;h>i&&(a.position.x-=i*2,d=!0),h<-i&&(a.position.x+=i*2,d=!0),u>i&&(a.position.z-=i*2,d=!0),u<-i&&(a.position.z+=i*2,d=!0),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l=!0}l&&(o.instanceMatrix.needsUpdate=!0)}}initParticles(){let t=new me,e=[],n=[];for(let r=0;r<this.particleCount;r++)e.push((Math.random()-.5)*1e3),e.push(Math.random()*500),e.push((Math.random()-.5)*1e3),n.push((Math.random()-.5)*20);t.setAttribute("position",new jt(e,3)),t.setAttribute("velocity",new jt(n,1));let i=new Ws({color:11184810,size:.5,transparent:!0,opacity:0,blending:qn,depthWrite:!1});this.particleSystem=new no(t,i),this.particleSystem.visible=!0,this.particleSystem.frustumCulled=!1,this.scene.add(this.particleSystem),this.particles=t}initSky(){let t=new cn(1e3,32,32),e=new ie({color:16768324,fog:!1});this.sun=new et(t,e),this.sun.position.set(500,5e3,500),this.scene.add(this.sun)}setSunny(){console.log("Weather Target: Sunny"),this.currentWeather="sunny",this.targetWeatherState.precipType="none",this.targetWeatherState.fogDensity=.002,this.targetWeatherState.skyColorHex=8900331,this.targetWeatherState.lightIntensity=2,this.targetWeatherState.ambientIntensity=.6,this.targetWeatherState.precipAlpha=0,this.targetWeatherState.roughness=.9,this.targetWeatherState.wetness=0}setRain(){console.log("Weather Target: Rain"),this.currentWeather="rain",this.targetWeatherState.precipType="rain",this.targetWeatherState.fogDensity=.02,this.targetWeatherState.skyColorHex=328976,this.targetWeatherState.lightIntensity=.5,this.targetWeatherState.ambientIntensity=.2,this.targetWeatherState.precipAlpha=.6,this.targetWeatherState.roughness=.1,this.targetWeatherState.wetness=1}setSnow(){console.log("Weather Target: Snow"),this.currentWeather="snow",this.targetWeatherState.precipType="snow",this.targetWeatherState.fogDensity=.03,this.targetWeatherState.skyColorHex=15658734,this.targetWeatherState.lightIntensity=1.5,this.targetWeatherState.ambientIntensity=.8,this.targetWeatherState.precipAlpha=.9,this.targetWeatherState.roughness=1,this.targetWeatherState.wetness=0}update(t,e=new A){this.gameTime+=t*.04,this.gameTime>=24&&(this.gameTime=0,this.day++,console.log(`Day Info: Day ${this.day}, Year ${this.year}`),this.day>365&&(this.day=1,this.year++));let i=Math.min(t*this.transitionSpeed,1),r=this.currentWeatherState,o=this.targetWeatherState;r.fogDensity+=(o.fogDensity-r.fogDensity)*i,r.lightIntensity+=(o.lightIntensity-r.lightIntensity)*i,r.ambientIntensity+=(o.ambientIntensity-r.ambientIntensity)*i,r.precipAlpha+=(o.precipAlpha-r.precipAlpha)*i,r.roughness+=(o.roughness-r.roughness)*i;let a=new ft(r.skyColorHex),l=new ft(o.skyColorHex);if(a.lerp(l,i),r.skyColorHex=a.getHex(),this.materials.road){this.materials.road.roughness=r.roughness;let h=new ft(this.currentWeather==="snow"?15658734:2236962),u=new ft(328965);o.wetness>0?this.materials.road.color.lerp(u,i*.5):this.materials.road.color.lerp(h,i*.5)}this.updateTimeCycle(e),this.windTime+=t;let c=Math.sin(this.windTime*.5)+Math.sin(this.windTime*.1)*.5;this.windVector.x=10+c*10,this.windVector.z=c*5,this.updateParticles(t,e),this.updateClouds(t,e),this.updateWeatherAutomation(t*.04)}updateParticles(t,e){if(!this.particleSystem)return;let n=this.currentWeatherState.precipAlpha;if(this.particleSystem.material.opacity=n,n<.01)return;let i=this.targetWeatherState.precipType==="rain";this.particleSystem.material.color.setHex(i?11193599:16777215),this.particleSystem.material.size=i?.8:1.5;let r=this.particles.attributes.position.array,o=this.particles.attributes.velocity.array,a=500,l=500,c=-50,h=i?90:20,u=this.windVector.x*t,d=this.windVector.z*t,f=this.windTime;for(let g=0;g<this.particleCount;g++){let x=r[g*3],m=r[g*3+1],p=r[g*3+2],y=h;if(!i){let b=o[g],C=Math.sin(f*2+b);y+=C*5,x+=C*5*t,p+=C*5*t,m-=C*2*t}m-=y*t,x-=u,p-=d,m<c&&(m=l);let _=x-e.x,M=p-e.z,R=!1;_>a&&(x-=a*2,R=!0),_<-a&&(x+=a*2,R=!0),M>a&&(p-=a*2,R=!0),M<-a&&(p+=a*2,R=!0),R&&(m=Math.random()*l),r[g*3]=x,r[g*3+1]=m,r[g*3+2]=p}this.particles.attributes.position.needsUpdate=!0}updateTimeCycle(t){let e=this.gameTime,n=0;e>=6&&e<18?n=(e-6)/12*Math.PI:n=(e-6)/24*Math.PI*2;let i=1e4,r=Math.cos(n)*i,o=Math.sin(n)*i;if(this.sun&&(this.sun.position.set(t.x+r,o,t.z),this.sun.visible=this.currentWeatherState.precipAlpha<.5,o<0?(this.sun.material.color.setHex(16777215),this.sun.position.set(t.x-r,-o,t.z)):this.sun.material.color.setHex(16768324)),this.directionalLight){let M=r,R=o;R<0&&(M=-M,R=-R);let b=new A(M,R,0).normalize();this.directionalLight.position.copy(t).add(b.multiplyScalar(100)),this.directionalLight.target.position.copy(t),this.directionalLight.target.updateMatrixWorld()}let a=new ft(1296),l=new ft(16729344),c=new ft(8900331),h=new ft(16604755),u=new ft,d=0,f=0;if(e>=5&&e<7){let M=(e-5)/2;u.lerpColors(a,l,M),M>.5&&u.lerp(c,(M-.5)*2),d=M*1.5,f=.1+M*.5}else if(e>=7&&e<17)u.copy(c),d=1.5,f=.6;else if(e>=17&&e<19){let M=(e-17)/2;u.lerpColors(c,h,M),M>.5&&u.lerp(a,(M-.5)*2),d=1.5-M*1.5,f=.6-M*.5}else u.copy(a),d=.2,f=.1;let g=new ft(this.currentWeatherState.skyColorHex),x=this.currentWeatherState.lightIntensity,m=u.clone();m.lerp(g,this.currentWeatherState.precipAlpha);let p=d*(x/2),y=f*(this.currentWeatherState.ambientIntensity/.6);this.scene.background=m,this.scene.fog&&(this.scene.fog.color.copy(m),this.scene.fog.density=this.currentWeatherState.fogDensity),this.directionalLight.intensity=p,this.ambientLight.intensity=y;let _=0;if(e>19||e<5?_=1:e>=18&&e<=19?_=e-18:e>=5&&e<=6&&(_=1-(e-5)),this.materials.window){let M=new ft(1118481),R=new ft(16777130);this.materials.window.color.lerpColors(M,R,_),this.materials.window.opacity=.08+_*.92}}updateWeatherAutomation(t){this.timeSinceLastWeatherChange+=t,this.timeSinceLastWeatherChange>this.weatherChangeInterval&&(this.timeSinceLastWeatherChange=0,this.weatherChangeInterval=2+Math.random()*2,this.pickWeatherForSeason())}pickWeatherForSeason(){let t="";this.day<=90?t="Winter":this.day<=180?t="Spring":this.day<=270?t="Summer":t="Autumn";let e=Math.random(),n="sunny";switch(t){case"Winter":e<.6?n="snow":e<.8?n="rain":n="sunny";break;case"Spring":e<.4?n="rain":n="sunny";break;case"Summer":e<.1?n="rain":n="sunny";break;case"Autumn":e<.4?n="rain":e<.5?n="snow":n="sunny";break}n!==this.currentWeather&&(n==="sunny"?this.setSunny():n==="rain"?this.setRain():n==="snow"&&this.setSnow())}};var Do=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkPeds=new Map,this.peds=[],this.maxSpeed=2,this.maxForce=5,this.geomBody=new Lt(.45,.75,.25),this.geomHead=new Lt(.25,.25,.25),this.geomLimb=new Lt(.12,.75,.12),this.geomShoe=new Lt(.14,.1,.22),this.geomHair=new Lt(.27,.1,.27),this.matSkin=new ot({color:16764074}),this.matDark=new ot({color:2236962})}setDependencies(t,e){this.trafficLightSystem=t}loadChunk(t,e){let n=[],r=this.blockSize+this.roadWidth,o=t*r,a=e*r;for(let l=0;l<4;l++){let c=this.createPedMesh(),h=this.spawnPedInChunk(c,o,a,this.blockSize);this.scene.add(c);let u={mesh:c,velocity:new A(0,0,0),acceleration:new A(0,0,0),state:"WALKING",target:h.target,chunkX:o,chunkZ:a,chunkSize:r,bounds:h.bounds,legAnimTimer:Math.random()*10,limbs:c.userData.limbs,waitTimer:0,ragdollTimer:0};n.push(u),this.peds.push(u)}this.chunkPeds.set(`${t},${e}`,n)}unloadChunk(t,e){let n=`${t},${e}`;this.chunkPeds.has(n)&&(this.chunkPeds.get(n).forEach(r=>{this.scene.remove(r.mesh);let o=this.peds.indexOf(r);o>-1&&this.peds.splice(o,1)}),this.chunkPeds.delete(n))}createPedMesh(){let t=new he,e=new ft().setHSL(Math.random(),.7,.4),n=new ft().setHSL(Math.random(),.5,.2),i=new ft().setHSL(.08,.6,.5+Math.random()*.4),r=new ft().setHSL(Math.random(),.5,.1+Math.random()*.2),o=new ot({color:e}),a=new ot({color:n}),l=new ot({color:i}),c=new ot({color:r}),h=new et(this.geomBody,o);h.position.y=1,h.castShadow=!0,t.add(h);let u=new et(this.geomHead,l);u.position.y=1.55,u.castShadow=!0,t.add(u);let d=new et(this.geomHair,c);d.position.y=1.7,d.castShadow=!0,t.add(d);let f=new he;f.position.set(-.35,1.35,0);let g=new et(this.geomLimb,o);g.position.y=-.3,g.castShadow=!0,f.add(g);let x=new et(new Lt(.1,.1,.1),l);x.position.y=-.7,f.add(x),t.add(f);let m=new he;m.position.set(.35,1.35,0);let p=new et(this.geomLimb,o);p.position.y=-.3,p.castShadow=!0,m.add(p);let y=new et(new Lt(.1,.1,.1),l);y.position.y=-.7,m.add(y),t.add(m);let _=new he;_.position.set(-.15,.65,0);let M=new et(this.geomLimb,a);M.position.y=-.35,M.castShadow=!0,_.add(M);let R=new et(this.geomShoe,this.matDark);R.position.set(0,-.75,.05),_.add(R),t.add(_);let b=new he;b.position.set(.15,.65,0);let C=new et(this.geomLimb,a);C.position.y=-.35,C.castShadow=!0,b.add(C);let I=new et(this.geomShoe,this.matDark);return I.position.set(0,-.75,.05),b.add(I),t.add(b),t.userData.limbs={leftArm:f,rightArm:m,leftLeg:_,rightLeg:b},t}spawnPedInChunk(t,e,n,i){let r=this.roadWidth/2,o=i/2,l=[{x:-1,z:-1},{x:1,z:-1},{x:1,z:1},{x:-1,z:1}][Math.floor(Math.random()*4)],c=r+Math.random()*o,h=r+Math.random()*o,u=c*l.x,d=h*l.z;t.position.set(e+u,0,n+d);let f=Math.random()>.5?"x":"z",g=Math.random()>.5?1:-1,x=new A(g*100,0,0);f==="z"&&x.set(0,0,g*100),x.add(t.position);let m=r+o/2,p=m*l.x,y=m*l.z,_=(o-4)/2+.5;return{target:x,bounds:{buildingCenterX:p,buildingCenterZ:y,buildingHalfWidth:_}}}update(t){t>.1&&(t=.1);for(let e of this.chunkPeds.values())e.forEach(n=>{if(n.state==="RAGDOLL"){n.velocity.y-=20*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.rotation.x+=t*5,n.mesh.rotation.z+=t*5,n.mesh.position.y<0&&(n.mesh.position.y=0,n.velocity.multiplyScalar(.5),n.velocity.y=0),n.ragdollTimer-=t,n.ragdollTimer<=0&&n.velocity.length()<.1&&(n.state="WALKING",n.mesh.rotation.set(0,0,0),n.mesh.position.y=0);return}let i=new A(0,0,0);if(this.updateState(n,t),n.state!=="WAITING"){let r=this.seek(n,n.target);i.add(r);let o=this.avoidBuilding(n);i.add(o.multiplyScalar(3))}if(n.acceleration.copy(i),n.velocity.add(n.acceleration.multiplyScalar(t)),n.velocity.length()>this.maxSpeed&&n.velocity.setLength(this.maxSpeed),n.state==="WAITING"&&n.velocity.set(0,0,0),n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.velocity.lengthSq()>.01&&n.mesh.lookAt(n.mesh.position.clone().add(n.velocity)),n.velocity.lengthSq()>.1){n.legAnimTimer+=t*12;let r=Math.sin(n.legAnimTimer);n.limbs.leftLeg.rotation.x=r*.6,n.limbs.rightLeg.rotation.x=-r*.6,n.limbs.leftArm.rotation.x=-r*.6,n.limbs.rightArm.rotation.x=r*.6,n.mesh.position.y=Math.abs(Math.sin(n.legAnimTimer*2))*.05}else n.limbs.leftLeg.rotation.x=0,n.limbs.rightLeg.rotation.x=0,n.limbs.leftArm.rotation.x=0,n.limbs.rightArm.rotation.x=0,n.mesh.position.y=0})}updateState(t,e){let n=t.mesh.position.x-t.chunkX,i=t.mesh.position.z-t.chunkZ,r=this.roadWidth/2;if(t.state==="WALKING"){let o=Math.abs(n)-r,a=Math.abs(i)-r;if(Math.abs(n)<r+1&&Math.abs(i)<r+20||Math.abs(i)<r+1&&Math.abs(n)<r+20){let l=Math.abs(t.velocity.x),c=Math.abs(t.velocity.z);l>c?Math.abs(n)<r+.5&&Math.abs(n)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="x"):Math.abs(i)<r+.5&&Math.abs(i)>r-1&&(t.state="WAITING",t.waitTimer=0,t.crossAxis="z")}}else if(t.state==="WAITING")if(this.trafficLightSystem){let o=Math.round(t.chunkX/t.chunkSize),a=Math.round(t.chunkZ/t.chunkSize),l=!1;if(t.crossAxis==="x"?l=this.trafficLightSystem.checkGreenLight(o,a,"z"):l=this.trafficLightSystem.checkGreenLight(o,a,"x"),!l)if(t.state="CROSSING",t.crossAxis==="x"){let c=t.target.x>t.mesh.position.x?1:-1;t.crossingTarget=new A(t.mesh.position.x+c*(this.roadWidth+4),0,t.mesh.position.z)}else{let c=t.target.z>t.mesh.position.z?1:-1;t.crossingTarget=new A(t.mesh.position.x,0,t.mesh.position.z+c*(this.roadWidth+4))}}else t.waitTimer+=e,t.waitTimer>2&&(t.state="CROSSING");else t.state==="CROSSING"&&t.mesh.position.distanceTo(t.crossingTarget)<1&&(t.state="WALKING")}seek(t,e){let n=t.state==="CROSSING"&&t.crossingTarget?t.crossingTarget:e,i=new A().subVectors(n,t.mesh.position);i.normalize().multiplyScalar(this.maxSpeed);let r=new A().subVectors(i,t.velocity);return r.length()>this.maxForce&&r.setLength(this.maxForce),r}avoidBuilding(t){let e=t.mesh.position.x-t.chunkX,n=t.mesh.position.z-t.chunkZ,i=e-t.bounds.buildingCenterX,r=n-t.bounds.buildingCenterZ,o=Math.abs(i),a=Math.abs(r),l=t.bounds.buildingHalfWidth;if(o<l&&a<l){let c=new A(i,0,r);return c.normalize().multiplyScalar(this.maxForce*2),c}return new A(0,0,0)}};var Uo=class{constructor(t,e,n,i){this.scene=t,this.citySize=e,this.blockSize=n,this.roadWidth=i,this.chunkCars=new Map,this.cars=[],this.cars=[],this.effectSystem=null}setDependencies(t){this.effectSystem=t}loadChunk(t,e){let n=[],i=this.blockSize+this.roadWidth,r=t*i,o=e*i;this.spawnRowInChunk(r,o,!0,n,i),this.spawnRowInChunk(r,o,!1,n,i),this.chunkCars.set(`${t},${e}`,n),n.forEach(a=>this.cars.push(a))}unloadChunk(t,e){let n=`${t},${e}`;this.chunkCars.has(n)&&(this.chunkCars.get(n).forEach(r=>{if(r.isPlayerDriven)return;this.scene.remove(r),Bu(r);let o=this.cars.indexOf(r);o>-1&&this.cars.splice(o,1)}),this.chunkCars.delete(n))}getColliders(){let t=[];for(let e of this.chunkCars.values())e.forEach(n=>{n.isPlayerDriven||(n.userData.localBox?t.push(n.userData.localBox.clone().applyMatrix4(n.matrixWorld)):t.push(new qt().setFromObject(n)))});return t}spawnRowInChunk(t,e,n,i,r){let o=this.roadWidth/2,a=r/2,l=2,c=[{start:-a,end:-o-l},{start:o+l,end:a}],h=10,u=o+1.4;c.forEach(d=>{let f=Math.random()*2;for(let g=d.start+f+2;g<d.end-2;g+=h)[u,-u].forEach(x=>{if(Math.random()<.5)return;let m=Co(),p=this.getDimensions(m),y,_,M,R=(Math.random()-.5)*1,b=g+R;if(b+p.l/2>d.end)return;n?(y=t+b,_=e+x,M=Math.random()>.5?Math.PI/2:-Math.PI/2):(y=t+x,_=e+b,M=Math.random()>.5?0:Math.PI);let C,I;n?(C=p.l,I=p.w):(C=p.w,I=p.l);let v=.2,E={minX:y-C/2-v,maxX:y+C/2+v,minZ:_-I/2-v,maxZ:_+I/2+v};if(!this.isBlocked(E,i)){let D=gs(m);D.userData.localBox=new qt().setFromObject(D),D.position.set(y,0,_),D.rotation.y=M,D.userData.health=100,this.scene.add(D),i.push(D)}})})}isBlocked(t,e){for(let n of e){let i=this.getDimensions(n.userData.type),r=n.position.x,o=n.position.z,a=n.rotation.y,l,c;Math.abs(a)<.1||Math.abs(a-Math.PI)<.1?(l=i.w,c=i.l):(l=i.l,c=i.w);let h=.5,u={minX:r-l/2-h,maxX:r+l/2+h,minZ:o-c/2-h,maxZ:o+c/2+h};if(t.maxX>u.minX&&t.minX<u.maxX&&t.maxZ>u.minZ&&t.minZ<u.maxZ)return!0}return!1}getDimensions(t){switch(t){case"truck":return{w:3.5,l:8};case"suv":return{w:2.5,l:5};case"sport":return{w:2.2,l:4.6};default:return{w:2.1,l:4.4}}}update(t){for(let e of this.cars)e.userData.velocity&&(e.position.add(e.userData.velocity.clone().multiplyScalar(t)),e.rotation.y+=(e.userData.angularVelocity||0)*t,e.userData.velocity.multiplyScalar(.98),e.userData.angularVelocity&&(e.userData.angularVelocity*=.98),e.userData.velocity.length()<.1&&(e.userData.velocity=null)),e.userData.health<50&&this.effectSystem&&Math.random()<.05&&(e.userData.health<20?this.effectSystem.createFireEffect(e):this.effectSystem.createSmokeEffect(e))}};var No=class{constructor(t,e){this.scene=t,this.citySize=e,this.airplane=null,this.spawnTimer=0,this.flightSpeed=40,this.flightHeight=50}update(t){this.airplane?this.moveAirplane(t):(this.spawnTimer-=t,this.spawnTimer<=0&&this.spawnAirplane())}spawnAirplane(){this.airplane=this.createAirplaneMesh();let t=300,e=Math.random()>.5?"x":"z",n=Math.random()>.5?1:-1;this.currentFlightData={axis:e,direction:n,limit:t+50};let r=(Math.random()-.5)*100;e==="x"?(this.airplane.position.set(-n*t,this.flightHeight,r),this.airplane.rotation.y=n>0?0:Math.PI):(this.airplane.position.set(r,this.flightHeight,-n*t),this.airplane.rotation.y=n>0?-Math.PI/2:Math.PI/2),this.scene.add(this.airplane)}moveAirplane(t){if(!this.airplane)return;let e=this.currentFlightData.direction*this.flightSpeed*t,n=this.currentFlightData.limit;this.currentFlightData.axis==="x"?(this.airplane.position.x+=e,Math.abs(this.airplane.position.x)>n&&this.removeAirplane()):(this.airplane.position.z+=e,Math.abs(this.airplane.position.z)>n&&this.removeAirplane())}removeAirplane(){this.airplane&&(this.scene.remove(this.airplane),this.airplane=null),this.spawnTimer=15+Math.random()*5}createAirplaneMesh(){let t=new he,e=new ot({color:16777215,roughness:.2}),n=new ot({color:13421772,roughness:.3}),i=new ot({color:3355443,roughness:.1}),r=new ie({color:16711680}),o=new ao(.8,4,4,8),a=new et(o,e);a.rotation.z=Math.PI/2,t.add(a);let l=new Lt(1.5,.1,8),c=new et(l,n);c.position.set(0,0,0),t.add(c);let h=new Lt(1,.1,3),u=new et(h,n);u.position.set(-1.8,0,0),t.add(u);let d=new Lt(.8,1.2,.1),f=new et(d,n);f.position.set(-1.8,.6,0),t.add(f);let g=new Lt(1,.6,.8),x=new et(g,i);x.position.set(.5,.5,0),t.add(x);let m=new et(new Lt(.1,.1,.1),r);m.position.set(0,0,4),t.add(m);let p=new et(new Lt(.1,.1,.1),new ie({color:65280}));p.position.set(0,0,-4),t.add(p);let y=new Me(.3,.3,.8,8),_=new et(y,e);_.rotation.z=Math.PI/2,_.position.set(0,-.2,2),t.add(_);let M=new et(y,e);return M.rotation.z=Math.PI/2,M.position.set(0,-.2,-2),t.add(M),t}};var Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ty=new es(-1,1,1,-1,0,1),ec=class extends me{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}},ey=new ec,Qn=class{constructor(t){this._mesh=new et(ey,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ty)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xs=class extends Ze{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kn.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Qn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sr=class extends Ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Oo=class extends Ze{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xs(Fo),this.copyPass.material.blending=fn,this.clock=new rs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sr!==void 0&&(o instanceof sr?n=!0:o instanceof Oo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bo=class extends Ze{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _s=class s extends Ze{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new He(r,o,{type:an});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new He(r,o,{type:an});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Hu;this.highPassUniforms=Kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Fo;this.copyUniforms=Kn.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new ie,this.fsQuad=new Qn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_s.BlurDirectionX=new it(1,0);_s.BlurDirectionY=new it(0,1);var Vu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zo=class extends Ze{constructor(){super();let t=Vu;this.uniforms=Kn.clone(t.uniforms),this.material=new ho({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Qn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ho=class{constructor(t){this.scene=t,this.particles=[],this.emitters=[],this.sirens=[]}createEmergencyLights(t){let e=new ie({color:16716049,transparent:!0,opacity:0}),n=new ie({color:1118719,transparent:!0,opacity:0}),i=new et(new cn(.16,8,8),e),r=new et(new cn(.16,8,8),n);return i.position.set(-.4,1.5,0),r.position.set(.4,1.5,0),i.userData={parent:t,siren:!0},r.userData={parent:t,siren:!0},this.scene.add(i),this.scene.add(r),this.sirens.push({red:i,blue:r,parent:t,timer:0}),this.sirens[this.sirens.length-1]}addEmitter(t,e){this.emitters.find(i=>i.object===t&&i.type===e)||this.emitters.push({object:t,type:e,timer:0})}createCrashEffect(t){let n=new Lt(.3,.3,.3),i=new ie({color:16755200});for(let r=0;r<20;r++){let o=new et(n,i);o.position.copy(t),o.position.x+=(Math.random()-.5)*1,o.position.y+=(Math.random()-.5)*1,o.position.z+=(Math.random()-.5)*1;let a=new A((Math.random()-.5)*10,Math.random()*10+2,(Math.random()-.5)*10);this.scene.add(o),this.particles.push({mesh:o,velocity:a,life:1})}}createFireEffect(t){let n=new Lt(.4,.4,.4),i=new ie({color:16729088});for(let r=0;r<5;r++){let o=new et(n,i);o.position.set((Math.random()-.5)*1,1+Math.random(),2+(Math.random()-.5)),o.userData={parent:t,offset:o.position.clone(),type:"fire",life:2+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,5,0),life:o.userData.life,isAttached:!0})}}createSmokeEffect(t){let n=new Lt(.5,.5,.5),i=new ie({color:5592405});for(let r=0;r<5;r++){let o=new et(n,i);o.position.set((Math.random()-.5)*1,1.5+Math.random(),2),o.userData={parent:t,offset:o.position.clone(),type:"smoke",life:3+Math.random()},this.scene.add(o),this.particles.push({mesh:o,velocity:new A(0,3,0),life:o.userData.life,isAttached:!0})}}update(t){for(let e of this.emitters)e.timer-=t,e.timer<=0&&(e.type==="fire"?(this.createFireEffect(e.object),e.timer=.1):e.type==="smoke"&&(this.createSmokeEffect(e.object),e.timer=.2));for(let e=this.particles.length-1;e>=0;e--){let n=this.particles[e];if(n.life-=t,n.life<=0)this.scene.remove(n.mesh),this.particles.splice(e,1),n.mesh.geometry&&n.mesh.geometry.dispose();else{if(n.isAttached){if(n.velocity.y+=t*2,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.userData.parent&&n.life>n.mesh.userData.life-.1){let i=n.mesh.userData.parent;if(i&&i.matrixWorld){let r=n.mesh.userData.offset.clone();r.applyMatrix4(i.matrixWorld),n.mesh.position.copy(r)}n.isAttached=!1}}else n.velocity.y-=20*t,n.mesh.position.addScaledVector(n.velocity,t);n.mesh.rotation.x+=t*5,n.mesh.rotation.y+=t*5,n.mesh.scale.setScalar(n.life)}}for(let e=this.sirens.length-1;e>=0;e--){let n=this.sirens[e];if(!(n.parent&&n.parent.visible)){this.scene.remove(n.red),this.scene.remove(n.blue),n.red.geometry.dispose(),n.red.material.dispose(),n.blue.geometry.dispose(),n.blue.material.dispose(),this.sirens.splice(e,1);continue}n.timer+=t;let r=n.timer%.5<.25;n.red.material.opacity=r?1:0,n.blue.material.opacity=r?0:1}}},Vo=class s{constructor({renderer:t=null,scene:e=null,camera:n=null}={}){this.renderer=t,this.scene=e,this.camera=n,this.enabled=!!t&&!!e&&!!n,this.bloom={strength:0,threshold:1,radius:.6},this.droplets={intensity:0},this.passes=["render","bloom","droplets","output"],this.composer=null,this.bloomPass=null,this.dropletPass=null,this.dropletUniforms=null,this.clock=null,this.enabled&&this._build()}static dropletShader(){return{uniforms:{tDiffuse:{value:null},uIntensity:{value:0},uTime:{value:0},uResolution:{value:new it(1,1)}},vertexShader:["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:["uniform float uIntensity;","uniform float uTime;","uniform vec2 uResolution;","varying vec2 vUv;","uniform sampler2D tDiffuse;","","float hash(vec2 p) {","  vec3 p3 = fract(vec3(p.xyx) * 0.1031);","  p3 += dot(p3, p3.zxy + 33.33);","  return fract((p3.x + p3.y) * p3.z);","}","","void main() {","  vec2 uv = vUv;","  float aspect = uResolution.x / uResolution.y;","  vec2 p = vec2(uv.x * aspect, uv.y);","  float grid = 10.0;","  vec2 id = floor(p * grid);","  vec2 gv = fract(p * grid) - 0.5;","  float t = uTime * 6.0;","","  // per-cell droplet: random x, falling y","  vec2 o = vec2(hash(id) - 0.5, -t * (0.25 + hash(id + 1.0)));","  gv -= o;","","  // droplet disc","  float r = length(gv * vec2(1.0, 0.55));","  float drop = smoothstep(0.07, 0.0, r);","","  // thin vertical streak (tail)","  float streak = smoothstep(0.02, 0.0, abs(gv.x))","              * smoothstep(0.28, 0.0, abs(gv.y)) * 0.5;","","  // only some cells carry a droplet","  float has = step(0.25, hash(id + 3.0));","  vec4 sceneColor = texture2D(tDiffuse, vUv);","  float v = (drop + streak) * has * uIntensity;","  gl_FragColor = vec4(sceneColor.rgb + vec3(v) * 0.25, 1.0);","}"].join(`
`)}}_build(){let t=window.innerWidth,e=window.innerHeight;this.composer=new ko(this.renderer),this.composer.addPass(new Bo(this.scene,this.camera)),this.bloomPass=new _s(new it(t,e),this.bloom.strength,this.bloom.radius,this.bloom.threshold),this.composer.addPass(this.bloomPass);let n=s.dropletShader();this.dropletUniforms=n.uniforms,this.dropletUniforms.uResolution.value.set(t,e),this.dropletPass=new xs(n),this.dropletPass.material.blending=qn,this.dropletPass.material.transparent=!0,this.composer.addPass(this.dropletPass),this.composer.addPass(new zo),this.clock=new rs}update(t,e=0){let n=t?t.precipAlpha:0;return this.droplets.intensity=as.clamp(n,0,1),this.bloom.strength=as.clamp(e*.9,0,1.5),this.bloom.threshold=as.clamp(.25+(1-e)*.6,.1,1),this.bloom.radius=.6,this.enabled&&this.bloomPass&&(this.bloomPass.strength=this.bloom.strength,this.bloomPass.threshold=this.bloom.threshold,this.bloomPass.radius=this.bloom.radius),this.enabled&&this.dropletPass&&(this.dropletUniforms.uIntensity.value=this.droplets.intensity,this.dropletUniforms.uTime.value=this.clock.getElapsedTime()),this.estimate()}estimate(){return{enabled:this.enabled,bloom:{...this.bloom},droplets:{...this.droplets},passes:[...this.passes]}}render(){this.enabled&&this.composer&&this.composer.render()}resize(){if(!this.enabled)return;let t=window.innerWidth,e=window.innerHeight;this.bloomPass&&this.bloomPass.setSize(t,e),this.dropletUniforms&&this.dropletUniforms.uResolution.value.set(t,e)}};var Go=class{constructor(t,e,n){this.scene=t,this.roadWidth=e,this.blockSize=n,this.chunkLights=new Map,this.cycleDuration=10}loadChunk(t,e){let n=this.createLightMeshes(),i=this.blockSize+this.roadWidth,r=t*i,o=e*i;n.position.set(r,0,o);let a=(t+e)%2===0;this.chunkLights.set(`${t},${e}`,{mesh:n,cx:t,cz:e,state:a?"NsGreen":"EwGreen",timer:0,materials:n.userData.materials}),this.scene.add(n),this.updateVisuals(this.chunkLights.get(`${t},${e}`))}unloadChunk(t,e){let n=`${t},${e}`;if(this.chunkLights.has(n)){let i=this.chunkLights.get(n);this.scene.remove(i.mesh),this.chunkLights.delete(n)}}createLightMeshes(){let t=new he,e=new Lt(.3,6,.3),n=new Lt(.8,2,.5),i=new Me(.25,.25,.1,16);i.rotateX(Math.PI/2);let r=new ot({color:3355443}),o=new ot({color:1118481}),a=new mi({color:1118481,emissive:0}),l=new mi({color:16711680,emissive:16711680,emissiveIntensity:2}),c=new mi({color:16776960,emissive:16776960,emissiveIntensity:2}),h=new mi({color:65280,emissive:65280,emissiveIntensity:2});t.userData.materials={matOff:a,matRedOn:l,matYellowOn:c,matGreenOn:h};let u=this.roadWidth/2+1;return[{x:u,z:u,rot:Math.PI,type:"Ns"},{x:-u,z:-u,rot:0,type:"Ns"},{x:u,z:-u,rot:-Math.PI/2,type:"Ew"},{x:-u,z:u,rot:Math.PI/2,type:"Ew"}].forEach((f,g)=>{let x=new et(e,r);x.position.set(f.x,3,f.z),t.add(x);let m=new et(n,o);m.position.set(f.x,5.5,f.z),m.rotation.y=f.rot,t.add(m);let p=new et(i,a.clone());p.position.set(0,.5,.26),m.add(p);let y=new et(i,a.clone());y.position.set(0,0,.26),m.add(y);let _=new et(i,a.clone());_.position.set(0,-.5,.26),m.add(_),t.userData[`light_${g}_R`]=p,t.userData[`light_${g}_Y`]=y,t.userData[`light_${g}_G`]=_,t.userData[`light_${g}_type`]=f.type}),t}update(t){for(let e of this.chunkLights.values())e.timer+=t,e.state==="NsGreen"&&e.timer>this.cycleDuration?(e.state="NsYellow",e.timer=0,this.updateVisuals(e)):e.state==="NsYellow"&&e.timer>3?(e.state="AllRed1",e.timer=0,this.updateVisuals(e)):e.state==="AllRed1"&&e.timer>2?(e.state="EwGreen",e.timer=0,this.updateVisuals(e)):e.state==="EwGreen"&&e.timer>this.cycleDuration?(e.state="EwYellow",e.timer=0,this.updateVisuals(e)):e.state==="EwYellow"&&e.timer>3?(e.state="AllRed2",e.timer=0,this.updateVisuals(e)):e.state==="AllRed2"&&e.timer>2&&(e.state="NsGreen",e.timer=0,this.updateVisuals(e))}updateVisuals(t){let{matOff:e,matRedOn:n,matYellowOn:i,matGreenOn:r}=t.materials,o=(c,h)=>{let u=t.mesh.userData[`light_${c}_R`],d=t.mesh.userData[`light_${c}_Y`],f=t.mesh.userData[`light_${c}_G`];u&&(u.material=h==="r"?n:e,d.material=h==="y"?i:e,f.material=h==="g"?r:e)},a="r",l="r";t.state==="NsGreen"?(a="g",l="r"):t.state==="NsYellow"?(a="y",l="r"):t.state==="EwGreen"?(a="r",l="g"):t.state==="EwYellow"&&(a="r",l="y");for(let c=0;c<4;c++)t.mesh.userData[`light_${c}_type`]==="Ns"?o(c,a):o(c,l)}checkGreenLight(t,e,n){let i=`${t},${e}`,r=this.chunkLights.get(i);return r?n==="z"?r.state==="NsGreen"||r.state==="NsYellow":r.state==="EwGreen"||r.state==="EwYellow":!0}};function Se(s,t,e){let n=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Gu(s){return s*s*(3-2*s)}function lc(s,t,e){let n=Math.floor(s),i=Math.floor(t),r=Gu(s-n),o=Gu(t-i),a=Se(n,i,e),l=Se(n+1,i,e),c=Se(n,i+1,e),h=Se(n+1,i+1,e),u=a+(l-a)*r,d=c+(h-c)*r;return u+(d-u)*o}function vi(s,t,{octaves:e=4,lacunarity:n=2,gain:i=.5,seed:r=0}={}){let o=1,a=1,l=0,c=0;for(let h=0;h<e;h++)l+=o*lc(s*a,t*a,r+h*7919|0),c+=o,o*=i,a*=n;return l/c}function Wu(s,t,{octaves:e=4,lacunarity:n=2,gain:i=.5,seed:r=0}={}){let o=1,a=1,l=0,c=0;for(let h=0;h<e;h++){let u=1-Math.abs(lc(s*a,t*a,r+h*6151|0)*2-1);l+=o*u*u,c+=o,o*=i,a*=n}return l/c}function ny(s,t,e){return s<t?t:s>e?e:s}function oc(s){return ny(s,0,1)}function Wo(s,t,e){return s+(t-s)*e}function gn(s,t,e){let n=oc((e-s)/t);return n*n*(3-2*n)}var _t={OCEAN:"ocean",COAST:"coast",LAKE:"lake",BEACH:"beach",WETLAND:"wetland",MEADOW:"meadow",GRASSLAND:"grassland",FOREST:"forest",RAINFOREST:"rainforest",SAVANNA:"savanna",DESERT:"desert",SCRUB:"scrub",TUNDRA:"tundra",BOREAL:"boreal",ALPINE:"alpine",PEAK:"peak",RIVER:"river",CITY:"city"},Xu={[_t.OCEAN]:{ground:1784406,trees:0,props:.05,flora:[],water:!0},[_t.COAST]:{ground:2972274,trees:0,props:.3,flora:["reed"],water:!0},[_t.LAKE]:{ground:2775659,trees:0,props:.35,flora:["reed"],water:!0},[_t.BEACH]:{ground:12757112,trees:.02,props:.25,flora:["driftwood","rock","bush"]},[_t.WETLAND]:{ground:4151866,trees:.05,props:.8,flora:["reed","reed","bush","grass"]},[_t.MEADOW]:{ground:7183174,trees:.06,props:1,flora:["flower","flower","grass","bush"]},[_t.GRASSLAND]:{ground:8231487,trees:.1,props:.85,flora:["grass","flower","bush","rock"]},[_t.FOREST]:{ground:4218924,trees:.75,props:.9,flora:["bush","rock","grass","mushroom"]},[_t.RAINFOREST]:{ground:3103268,trees:1.1,props:1,flora:["fern","bush","mushroom","fern"]},[_t.SAVANNA]:{ground:10128453,trees:.2,props:.6,flora:["grass","rock","bush"]},[_t.DESERT]:{ground:13215850,trees:.03,props:.25,flora:["cactus","rock","bone"]},[_t.SCRUB]:{ground:9076050,trees:.12,props:.4,flora:["bush","rock","bone"]},[_t.TUNDRA]:{ground:9213064,trees:.05,props:.3,flora:["rock","grass","bush"],cold:!0},[_t.BOREAL]:{ground:3953476,trees:.6,props:.5,flora:["bush","rock","mushroom"],cold:!0},[_t.ALPINE]:{ground:7238520,trees:.04,props:.45,flora:["rock","rock","grass"],cold:!0},[_t.PEAK]:{ground:14673642,trees:0,props:.2,flora:["rock"],cold:!0},[_t.RIVER]:{ground:3100515,trees:0,props:.4,flora:["reed"],water:!0},[_t.CITY]:{ground:3815994,trees:.05,props:.1,flora:[]}},Yu={metropolis:{label:"Metropolis",height:[60,260],density:.94,trees:.14,styleMix:{glass:.4,modern:.28,future:.22,brick:.1},landmark:"tower",neon:.35,palette:[10467020,2832970]},downtown:{label:"Downtown",height:[22,95],density:.88,trees:.18,styleMix:{modern:.45,brick:.3,glass:.25},landmark:"plaza",neon:.12,palette:[12104358,4869975]},oldtown:{label:"Old Town",height:[9,30],density:.82,trees:.24,styleMix:{brick:.62,modern:.28,glass:.1},landmark:"clocktower",neon:.04,palette:[11566938,7030322]},industrial:{label:"Industrial Zone",height:[7,28],density:.66,trees:.07,styleMix:{modern:.5,brick:.5},landmark:"refinery",neon:.05,palette:[8423568,3883078],wide:!0},suburbia:{label:"Suburbia",height:[6,16],density:.62,trees:.46,styleMix:{modern:.6,brick:.4},landmark:"school",neon:.02,palette:[13154720,8022613],wide:!0},neon:{label:"Neon District",height:[45,190],density:.9,trees:.08,styleMix:{future:.62,glass:.38},landmark:"pyramid",neon:.95,palette:[1579556,58879]},harbour:{label:"Harbour Town",height:[10,55],density:.72,trees:.14,styleMix:{modern:.42,brick:.36,glass:.22},landmark:"lighthouse",neon:.12,palette:[11122626,3099228],wide:!0,docks:!0},agro:{label:"Agro Settlement",height:[6,20],density:.5,trees:.3,styleMix:{modern:.55,brick:.45},landmark:"silo",neon:.02,palette:[12562058,6056765],wide:!0,farms:!0},outpost:{label:"Desert Outpost",height:[6,34],density:.58,trees:.06,styleMix:{brick:.58,modern:.26,future:.16},landmark:"watertower",neon:.18,palette:[13475946,8016688],wide:!0},winter:{label:"Winter Town",height:[8,42],density:.68,trees:.34,styleMix:{modern:.44,brick:.32,glass:.24},landmark:"cabin",neon:.1,palette:[14081507,4872808],snowcaps:!0}},iy=Object.keys(Yu),ys=["Var","Kel","Ora","Dun","Mar","Tes","Ny","Al","Cer","Vor","Es","Zan","Bel","Fen","Tal","Ith","Rho","Sal","Mor","Glen"],nc=["a","i","o","e","ae","u","ia"],ic=["mar","dun","vel","grad","ford","heim","burg","vale","reach","haven","spire","field","crest","wharf","grove","gate"],sc=["Prime","Major","Minor","Secundus","Nova","Vast","Rest","Terminus","Drift","Anchor"],ac=class s{constructor({seed:t=null,chunkSize:e=96}={}){this.seed=t==null?us()||1337:t>>>0,this.chunkSize=e,this.seaLevel=0,this.elevationScale=210,this.lakeLevel=.66,this.riverWidth=.78,this.moistureContrast=2.3,this.temperatureContrast=2.7,this.continentContrast=1.7,this.cityCell=16,this.cityJitter=4,this.cityChance=.74,this.cityRadius=[3,6],this.spawnCity=!0,this._cityCache=new Map,this._chunkCache=new Map,this._pairCache=new Map,this._heightCache=new Map}elevation(t,e){let n=this.seed,i=(vi(t/2400,e/2400,{octaves:5,seed:n+11})-.5)*this.continentContrast,r=vi(t/620,e/620,{octaves:4,seed:n+23})-.5,o=Wu(t/900,e/900,{octaves:4,seed:n+37}),a=gn(.12,.34,i)*gn(.42,.78,o),l=i+r*.34+a*.85+.16,c=vi(t/520,e/520,{octaves:3,seed:n+51}),h=gn(this.lakeLevel,.13,c)*gn(-.02,.26,i);return l=Wo(l,-.16,h),l*this.elevationScale}riverCarve(t,e){let n=this.seed,i=Wu(t/700,e/700,{octaves:3,seed:n+71}),r=gn(this.riverWidth,.12,i),o=vi(t/260,e/260,{octaves:2,seed:n+83});return r*(.6+.4*o)}surfaceHeight(t,e){let n=this.elevation(t,e);if(n<-6)return n;let i=this.riverCarve(t,e);if(i<=0)return n;let r=gn(0,10,n)*(1-gn(46,88,n));return n-i*r*24}moisture(t,e){let n=this.seed,i=vi(t/1100,e/1100,{octaves:4,seed:n+101}),r=vi(t/300,e/300,{octaves:3,seed:n+113});return oc(.5+(i*.75+r*.25-.5)*this.moistureContrast)}temperature(t,e,n=null){let i=this.seed,r=lc(.5,e/2600,i+127|0)*2-1,o=vi(t/800,e/800,{octaves:3,seed:i+139})-.5,a=n===null?this.surfaceHeight(t,e):n,l=-gn(35,95,a)*.9,c=Math.abs(r)>.55?-(Math.abs(r)-.55)*2.2:0,h=.62+r*.42+o*.5+l+c;return oc(.5+(h-.5)*this.temperatureContrast)}waterDepth(t,e){return this.seaLevel-this.surfaceHeight(t,e)}isWater(t,e){return this.waterDepth(t,e)>0}isRiver(t,e){return this.isWater(t,e)?this.elevation(t,e)>6&&this.riverCarve(t,e)>.5:!1}landRatio(t,e,n){let i=0;for(let r=0;r<8;r++){let o=r*Math.PI/4;this.isWater(t+Math.cos(o)*n,e+Math.sin(o)*n)||i++}return i/8}isLake(t,e){return!this.isWater(t,e)||this.isRiver(t,e)?!1:this.landRatio(t,e,Math.max(120,this.chunkSize*1.6))>=.75}biomeAt(t,e){let n=this.surfaceHeight(t,e),i=this.seaLevel-n;if(i>0)return this.isRiver(t,e)?_t.RIVER:this.isLake(t,e)?_t.LAKE:i>14?_t.OCEAN:_t.COAST;if(i>-2.2)return _t.BEACH;let r=this.temperature(t,e,n),o=this.moisture(t,e);return n>78?n>96?_t.PEAK:_t.ALPINE:r<.2?o>.42?_t.BOREAL:_t.TUNDRA:o>.7?r>.62?_t.RAINFOREST:_t.FOREST:o>.46?r>.7?_t.FOREST:_t.MEADOW:o>.3?r>.7?_t.SAVANNA:_t.GRASSLAND:o>.17?r>.55?_t.SCRUB:_t.TUNDRA:r>.55?_t.DESERT:_t.SCRUB}isWetland(t,e){let n=this.waterDepth(t,e);return n>0||n<-3.5?!1:!this.isRiver(t,e)&&this.moisture(t,e)>.5}static biomeInfo(t){return Xu[t]||Xu[_t.GRASSLAND]}groundHeightCached(t,e){let n=Math.round(t*10),i=Math.round(e*10),r=n*100003+i,o=this._heightCache.get(r);if(o!==void 0)return o;let a=this.groundHeight(n/10,i/10);return this._heightCache.size>6e4&&this._heightCache.clear(),this._heightCache.set(r,a),a}biomeInfo(t){return s.biomeInfo(t)}groundHeight(t,e){let n=this.rawGroundHeight(t,e),i=this.cityAtWorld(t,e);if(i){let o=Math.max(Math.abs(t-i.x),Math.abs(e-i.z));return Wo(0,n,gn(i.r-18,i.r+26,o))}let r=this.routeNear(t,e);return r&&r.dist<70?Wo(0,n,gn(22,62,r.dist)):n}rawGroundHeight(t,e){let n=this.surfaceHeight(t,e);return n<-22?-22+(n+22)*.25:n}_cellKey(t,e){return`${t},${e}`}_chunkKey(t,e){return`${t},${e}`}cityInCell(t,e){let n=this._cellKey(t,e);if(this._cityCache.has(n))return this._cityCache.get(n);let i=this.seed,r=null,o=this.spawnCity&&t===0&&e===0,a=Se(t,e,i+911);if(o||a<this.cityChance){let l=o?0:Math.round((Se(t,e,i+1301)*2-1)*this.cityJitter),c=o?0:Math.round((Se(t,e,i+1733)*2-1)*this.cityJitter),h=t*this.cityCell+l,u=e*this.cityCell+c;r=this._foundCity(h,u,t,e,o)}return this._cityCache.set(n,r),r}_foundCity(t,e,n,i,r){let o=this.seed,a=null;if(r)a={cx:t,cz:e};else{let _=t*this.chunkSize,M=e*this.chunkSize;if(!this.isWater(_,M))a={cx:t,cz:e};else t:for(let R=1;R<=6;R++)for(let b=0;b<8;b++){let C=b*Math.PI/4,I=Math.round(t+Math.cos(C)*R),v=Math.round(e+Math.sin(C)*R);if(!this.isWater(I*this.chunkSize,v*this.chunkSize)){a={cx:I,cz:v};break t}}a&&this._islandsCheck(a.cx,a.cz)&&(a=null)}if(!a)return null;let l=a.cx*this.chunkSize,c=a.cz*this.chunkSize,h=this._nearWater(l,c,this.chunkSize*2),u=this.temperature(l,c),d=this.moisture(l,c),f=this.biomeAt(l,c),g=this._cityKind(f,u,d,h,Se(a.cx,a.cz,o+2111),r),x=Yu[g],m=r?6:Math.round(Wo(this.cityRadius[0],this.cityRadius[1],Se(a.cx,a.cz,o+2311))),p=m*this.chunkSize,y={id:`${a.cx},${a.cz}`,cell:[n,i],cx:a.cx,cz:a.cz,x:l,z:c,radiusChunks:m,r:p,kind:g,label:x.label,name:this._cityName(a.cx,a.cz,g),biome:f,coastal:h,temperature:u,moisture:d,population:0,density:x.density,height:x.height,styleMix:x.styleMix,trees:x.trees,palette:x.palette,neon:x.neon,landmark:x.landmark,wide:!!x.wide,docks:!!x.docks,farms:!!x.farms,snowcaps:!!x.snowcaps,isSpawn:!!r};return y.population=Math.round(m*m*420*x.density*(.6+Se(a.cx,a.cz,o+2411)*.9)),y}_islandsCheck(t,e){let n=0;for(let i=0;i<8;i++){let r=i*Math.PI/4,o=Math.round(t+Math.cos(r)*7),a=Math.round(e+Math.sin(r)*7);this.waterDepth(o*this.chunkSize,a*this.chunkSize)>8&&n++}return n>=7}_nearWater(t,e,n){for(let i=0;i<12;i++){let r=i*Math.PI/6;for(let o of[.55,.8,1])if(this.isWater(t+Math.cos(r)*n*o,e+Math.sin(r)*n*o))return!0}return!1}_cityKind(t,e,n,i,r,o){if(o)return"metropolis";if(i&&r>.42)return"harbour";if(t===_t.DESERT||e>.74&&n<.24)return"outpost";if(e<.22&&r>.25)return"winter";if(n>.62&&e>.5)return r>.6?"metropolis":"downtown";if(n<.34)return r>.5?"agro":"outpost";let a=r*iy.length,l=["downtown","oldtown","suburbia","industrial","neon","metropolis","agro","downtown","oldtown","suburbia"];return l[Math.floor(a)%l.length]}_cityName(t,e,n){let i=this.seed,r=ys[Math.floor(Se(t,e,i+3011)*ys.length)%ys.length],o=Se(t,e,i+3103)>.55?nc[Math.floor(Se(t,e,i+3203)*nc.length)%nc.length]:"",a=ic[Math.floor(Se(t,e,i+3301)*ic.length)%ic.length],l=r+o+a;return Se(t,e,i+3401)>.78&&(l+=" "+sc[Math.floor(Se(t,e,i+3503)*sc.length)%sc.length]),n==="neon"&&(l+=" "+(Math.floor(Se(t,e,i+3601)*900)+100)),l}regionAt(t,e){let n=Math.floor(t/(this.chunkSize*8)),i=Math.floor(e/(this.chunkSize*8)),r=this.seed,o=ys[Math.floor(Se(n,i,r+4001)*ys.length)%ys.length],a=["reach","wilds","expanse","basin","flats","hollow","backlands","reach"][Math.floor(Se(n,i,r+4101)*8)%8];return o+a.charAt(0).toUpperCase()+a.slice(1)}nearestCity(t,e){let n=Math.floor(t/this.chunkSize/this.cityCell),i=Math.floor(e/this.chunkSize/this.cityCell),r=null,o=1/0;for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){let c=this.cityInCell(n+a,i+l);if(!c)continue;let h=Math.hypot(t-c.x,e-c.z);h<o&&(o=h,r=c)}return r?{city:r,dist:o}:null}cityAtWorld(t,e){let n=this.nearestCity(t,e);return n&&Math.max(Math.abs(t-n.city.x),Math.abs(e-n.city.z))<=n.city.r?n.city:null}cityAtChunk(t,e){return this.cityAtWorld(t*this.chunkSize,e*this.chunkSize)}citiesInChunkRange(t,e,n,i){let r=[],o=new Set,a=Math.floor(Math.min(t,n)/this.cityCell)-1,l=Math.floor(Math.max(t,n)/this.cityCell)+1;for(let c=a;c<=l;c++)for(let h=a;h<=l;h++){let u=this.cityInCell(c,h);!u||o.has(u.id)||(o.add(u.id),u.cx+u.radiusChunks>=Math.min(t,n)&&u.cx-u.radiusChunks<=Math.max(t,n)&&u.cz+u.radiusChunks>=Math.min(e,i)&&u.cz-u.radiusChunks<=Math.max(e,i)&&r.push(u))}return r}partners(t){if(this._pairCache.has(t.id))return this._pairCache.get(t.id);let e=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=this.cityInCell(t.cell[0]+r,t.cell[1]+o);a&&a.id!==t.id&&e.push(a)}e.sort((r,o)=>Math.hypot(r.x-t.x,r.z-t.z)-Math.hypot(o.x-t.x,o.z-t.z)||(r.id<o.id?-1:1));let n=5*this.chunkSize,i=e.filter(r=>Math.hypot(r.x-t.x,r.z-t.z)>=n).slice(0,3);return this._pairCache.set(t.id,i),i}legsForCity(t){let e=[];for(let n of this.partners(t))Math.abs(n.cx-t.cx)>=3&&e.push({axis:"x",fixed:t.cz,from:t.cx,to:n.cx,partner:n.id}),Math.abs(n.cz-t.cz)>=3&&e.push({axis:"z",fixed:n.cx,from:t.cz,to:n.cz,partner:n.id});return e}routeNear(t,e){let n=this.chunkSize,i=Math.floor(t/n/this.cityCell),r=Math.floor(e/n/this.cityCell),o=null,a=null;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=this.cityInCell(i+l,r+c);if(h)for(let u of this.legsForCity(h)){let d=Math.min(u.from,u.to)*n-n*.5,f=Math.max(u.from,u.to)*n+n*.5,g=u.fixed*n;if(u.axis==="x"){if(t<d||t>f)continue;let x=Math.abs(e-g);(!o||x<o.dist)&&(o={dist:x,leg:u,axis:"x",city:h})}else{if(e<d||e>f)continue;let x=Math.abs(t-g);(!a||x<a.dist)&&(a={dist:x,leg:u,axis:"z",city:h})}}}return!o&&!a?null:o?a?o.dist<=a.dist?o:a:o:a}routeNearAxis(t,e,n){let i=this.chunkSize,r=Math.floor(t/i/this.cityCell),o=Math.floor(e/i/this.cityCell),a=null;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=this.cityInCell(r+l,o+c);if(h)for(let u of this.legsForCity(h)){if(u.axis!==n)continue;let d=Math.min(u.from,u.to)*i-i*.5,f=Math.max(u.from,u.to)*i+i*.5,g=u.fixed*i;if(n==="x"){if(t<d||t>f)continue;let x=Math.abs(e-g);(!a||x<a.dist)&&(a={dist:x,leg:u,axis:"x",city:h})}else{if(e<d||e>f)continue;let x=Math.abs(t-g);(!a||x<a.dist)&&(a={dist:x,leg:u,axis:"z",city:h})}}}return a}roadInChunk(t,e,n=26){let i=n/2+4,r=t*this.chunkSize,o=e*this.chunkSize,a=[this.routeNearAxis(r-this.chunkSize*.4,o,"x"),this.routeNearAxis(r+this.chunkSize*.4,o,"x")],l=[this.routeNearAxis(r,o-this.chunkSize*.4,"z"),this.routeNearAxis(r,o+this.chunkSize*.4,"z")],c=null;for(let h of a)h&&h.dist<=i&&(c="x");for(let h of l)h&&h.dist<=i&&(c=c?"cross":"z");return c}classifyChunk(t,e,{roadWidth:n=26}={}){let i=this._chunkKey(t,e),r=this._chunkCache.get(i);if(r)return r;let o=this.chunkSize,a=t*o,l=e*o,c=this.cityAtChunk(t,e),h,u;c?(h="city",u=_t.CITY):this.roadInChunk(t,e,n)?(h="road",u=_t.CITY):(h="nature",u=this.dominantBiomeInChunk(t,e));let d=s.biomeInfo(u),f={cx:t,cz:e,id:i,type:h,biome:u,water:d.water===!0,trees:d.trees,flora:d.flora,ground:d.ground,city:c,height:this.rawGroundHeight(a,l),waterDepth:this.waterDepth(a,l),region:this.regionAt(a,l)};if(h==="road"){let g=[this.routeNear(a-o*.45,l),this.routeNear(a+o*.45,l),this.routeNear(a,l-o*.45),this.routeNear(a,l+o*.45)],x=null;for(let m of g)!m||m.dist>o*.55||(m.axis==="x"?x=x==="z"?"cross":"x":m.axis==="z"&&(x=x==="x"?"cross":"z"));f.roadAxis=x||"x"}return this._chunkCache.set(i,f),f}dominantBiomeInChunk(t,e){let n=this.chunkSize,i=t*n,r=e*n,o=new Map,a=(h,u,d)=>{let f=this.biomeAt(h,u);o.set(f,(o.get(f)||0)+d)};a(i,r,3);for(let[h,u]of[[-.33,-.33],[.33,-.33],[.33,.33],[-.33,.33],[0,-.4],[0,.4],[-.4,0],[.4,0]])a(i+h*n,r+u*n,1);let l=_t.GRASSLAND,c=-1;for(let[h,u]of o)(u>c||u===c&&h<l)&&(l=h,c=u);return l}stats(t,e,n,i){let r={},o=0,a=0,l=new Set;for(let c=t;c<=n;c++)for(let h=e;h<=i;h++){let u=this.dominantBiomeInChunk(c,h);r[u]=(r[u]||0)+1,s.biomeInfo(u).water&&o++;let d=this.cityAtChunk(c,h);d&&l.add(d.id),a++}return{cells:a,biomes:r,waterFraction:a?+(o/a).toFixed(3):0,distinctBiomes:Object.keys(r).length,cities:l.size}}reset(){this._cityCache.clear(),this._chunkCache.clear(),this._pairCache.clear(),this._heightCache.clear()}},rc=null;function Yo(s={}){return rc||(rc=new ac(s)),rc}var qu=new Map;function sy(s){let t=qu.get(s);return t||(t=new ot({color:s,roughness:1,metalness:0,vertexColors:!0,flatShading:!1}),t.name="ground-"+s.toString(16),qu.set(s,t)),t}var Ku=new ot({color:9276813,roughness:.95,metalness:.05}),ju=new ot({color:6053728,roughness:.95}),Qu=new ot({color:4157236,roughness:.9}),td=new ot({color:9075269,roughness:.95}),ed=new ot({color:8035135,roughness:1}),nd=new ot({color:6126138,roughness:1}),cc=new ot({color:5077578,roughness:.85}),id=new ot({color:3107642,roughness:.9}),sd=new ot({color:14208958,roughness:.9}),rd=new ot({color:10697258,roughness:.8}),hc=new ot({color:14275261,roughness:.7}),od=new ot({color:7031594,roughness:.95}),uc=new ot({color:14174826,roughness:.7}),ad=new ot({color:15255602,roughness:.7}),ld=new ot({color:9067216,roughness:.7}),cd=new ot({color:4880948,roughness:1}),hd=new ot({color:15660022,roughness:.9}),SM={[_t.OCEAN]:1919595,[_t.COAST]:3107718,[_t.LAKE]:2908014,[_t.RIVER]:3500154};function ry(){return rr.sea||(rr.sea=new ot({color:1919595,roughness:.12,metalness:.15,transparent:!0,opacity:.72,depthWrite:!1,envMapIntensity:.6}),rr.lake=new ot({color:2908014,roughness:.2,metalness:.1,transparent:!0,opacity:.7,depthWrite:!1,envMapIntensity:.5}),rr.river=new ot({color:3500154,roughness:.25,metalness:.05,transparent:!0,opacity:.66,depthWrite:!1})),rr}var rr={},ud=new Ln(1,0);ud.scale(1,.7,.9);var oy=new co(.6,0),dd=new Ln(1,1);dd.scale(1,.75,1);var fd=new pi(.28,1.3,4);fd.translate(0,.65,0);var pd=new Me(.04,.07,1.8,3);pd.translate(0,.9,0);var md=new Me(.09,.05,.4,4);md.translate(0,1.85,0);var gd=new Me(.32,.38,2.4,6);gd.translate(0,1.2,0);var ay=new Me(.16,.18,1,5),xd=new pi(.35,1.1,3);xd.translate(0,.55,0);var _d=new Me(.09,.12,.4,5);_d.translate(0,.2,0);var yd=new cn(.3,6,4,0,Math.PI*2,0,Math.PI/2);yd.translate(0,.4,0);var ly=new Lt(.16,.16,1.5),cy=new cn(.18,5,4),dc=new Me(.28,.32,3.2,6);dc.rotateZ(Math.PI/2);dc.translate(0,.3,0);var vd=new Me(.03,.04,.5,3);vd.translate(0,.25,0);var Md=new cn(.16,5,4);Md.translate(0,.55,0);var Zu={rock:{parts:[{geo:ud,mat:Ku},{geo:oy,mat:ju}],scale:[.5,1.5],collider:1.4},bush:{parts:[{geo:dd,mat:Qu}],scale:[.5,1.3],coldSwap:"snow"},grass:{parts:[{geo:fd,mat:ed}],scale:[.6,1.4],clumps:3},flower:{parts:[{geo:vd,mat:cd},{geo:Md,mat:uc,petals:!0}],scale:[.7,1.3],clumps:4},reed:{parts:[{geo:pd,mat:nd},{geo:md,mat:td}],scale:[.7,1.3],clumps:5},cactus:{parts:[{geo:gd,mat:cc},{geo:ay,mat:cc}],scale:[.7,1.6]},mushroom:{parts:[{geo:_d,mat:sd},{geo:yd,mat:rd}],scale:[.6,1.4],clumps:2},fern:{parts:[{geo:xd,mat:id}],scale:[.7,1.4],clumps:3},bone:{parts:[{geo:ly,mat:hc},{geo:cy,mat:hc}],scale:[.7,1.5]},driftwood:{parts:[{geo:dc,mat:od}],scale:[.7,1.4]}},$u=[uc,ad,ld];function hy(s,t,e,n){if(!e.length)return;let i=new ue;for(let r of t){let o=r.petals&&n?n:r.mat,a=new Jn(r.geo,o,e.length);a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1;for(let l=0;l<e.length;l++){let c=e[l];i.position.set(c.x,c.y,c.z),i.rotation.set(c.rx||0,c.ry||0,c.rz||0),i.scale.set(c.sx,c.sy,c.sz),i.updateMatrix(),a.setMatrixAt(l,i.matrix)}a.instanceMatrix.needsUpdate=!0,a.name="prop:"+(o.name||"prop"),s.add(a)}}var Mi=6,EM=new ue;function uy(s,t,e,n,i){let r=n/Mi,o=n/2,a=Mi+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*3),h=new ft;for(let f=0;f<a;f++)for(let g=0;g<a;g++){let x=t-o+g*r,m=e-o+f*r,p=f*a+g;l[p*3]=x,l[p*3+1]=s.groundHeightCached(x,m),l[p*3+2]=m;let y=i(x,m);h.setHex(y),c[p*3]=h.r,c[p*3+1]=h.g,c[p*3+2]=h.b}let u=[];for(let f=0;f<Mi;f++)for(let g=0;g<Mi;g++){let x=f*a+g,m=x+1,p=x+a,y=p+1;u.push(x,p,m,m,p,y)}let d=new me;return d.setAttribute("position",new _e(l,3)),d.setAttribute("color",new _e(c,3)),d.setIndex(u),d.computeVertexNormals(),d}function dy(s,t,e,n,i){let r=n/Mi,o=n/2,a=[],l=i-.04;for(let h=0;h<Mi;h++)for(let u=0;u<Mi;u++){let d=t-o+(u+.5)*r,f=e-o+(h+.5)*r;if(s.waterDepth(d,f)<=.05)continue;let g=t-o+u*r,x=g+r,m=e-o+h*r,p=m+r;a.push(g,l,m,g,l,p,x,l,p,g,l,m,x,l,p,x,l,m)}if(!a.length)return null;let c=new me;return c.setAttribute("position",new _e(new Float32Array(a),3)),c.computeVertexNormals(),c}var Ju={[_t.FOREST]:[0,0,2,6,1],[_t.RAINFOREST]:[0,0,5,6,2],[_t.BOREAL]:[1,1,4,1,6],[_t.TUNDRA]:[1,6,1],[_t.ALPINE]:[1,6,4],[_t.MEADOW]:[0,2,0,3],[_t.GRASSLAND]:[0,2,3,6],[_t.SAVANNA]:[3,0,6],[_t.SCRUB]:[6,3,0],[_t.BEACH]:[2,0],[_t.WETLAND]:[5,0,1],[_t.DESERT]:[3],[_t.CITY]:[0,2,4]};function Sd(s,t,e,n,i,r={}){let o=new he,a=[],c=(r.lod||0)>0,h=r.waterLevel===void 0?0:r.waterLevel,u=new hs((Math.imul(i.cx|0,73856093)^Math.imul(i.cz|0,19349663)^n.seed*83492791)>>>0),d=()=>u.float(),f=i.biome,g=n.biomeInfo(f),x=!!g.cold,m=new ft(g.ground),y=uy(n,s,t,e,(D,F)=>{let q=1+(fy(D,F)-.5)*.16;return m.clone().multiplyScalar(q).getHex()}),_=new et(y,sy(16777215));if(_.receiveShadow=!0,_.name="surface:"+f,o.add(_),!c){let D=dy(n,s,t,e,h);if(D){let F=ry(),q=F.sea;n.isRiver(s,t)?q=F.river:n.isLake(s,t)&&(q=F.lake);let P=new et(D,q);P.receiveShadow=!1,P.renderOrder=2,P.name="water:"+f,o.add(P)}}if(c)return{mesh:o,colliders:a,type:"nature",biome:f,treeCount:0,propCount:0};let M={trunkBrown:[],trunkWhite:[],trunkGrey:[],trunkBlack:[],leafGreen:[],leafDark:[],leafPink:[],leafOrange:[],leafYellow:[],leafSnow:[],dirt:[]},R=Ju[f]||Ju[_t.GRASSLAND],b=Math.round((g.trees||0)*120*(.7+d()*.6)),C=0;for(let D=0;D<b;D++){let F=s+(d()-.5)*e*.98,q=t+(d()-.5)*e*.98;if(n.waterDepth(F,q)>0)continue;let P=n.groundHeightCached(F,q);if(P<.25)continue;let N=R[Math.floor(d()*R.length)%R.length],V=.75+d()*.9;Ql(N,F,q,M,{rand:d,y:P,scale:V,leaf:x?"leafSnow":"leafGreen",leafDark:x?"leafSnow":"leafDark"});let Y=new qt,W=.9*V;Y.min.set(F-W,P,q-W),Y.max.set(F+W,P+6*V,q+W),a.push(Y),C++}jl(o,M,(D,F)=>{if(!D.length)return;let q=py(D);if(!q)return;let P=new et(q,F);P.castShadow=!0,P.receiveShadow=!0,o.add(P)});let v=g.flora||[],E=0;if(v.length){let D=(g.props===void 0?.5:g.props)*90,F=new Map,q=Math.max(0,Math.round(D*(.7+d()*.6)));for(let P=0;P<q;P++){let N=v[Math.floor(d()*v.length)%v.length],V=Zu[N];if(!V)continue;let Y=s+(d()-.5)*e*.98,W=t+(d()-.5)*e*.98,X=n.waterDepth(Y,W)>0;if(X&&N!=="reed"||!X&&N==="reed")continue;let Z=n.groundHeightCached(Y,W);if(!X&&Z<0)continue;let j=V.scale[0]+d()*(V.scale[1]-V.scale[0]),ut=V.clumps||1,G=V.parts.some(pt=>pt.petals)?Math.floor(d()*$u.length):-1,$=N+"|"+G;F.has($)||F.set($,[]);let ht=F.get($);for(let pt=0;pt<ut;pt++){let mt=pt===0?0:(d()-.5)*1.6,It=pt===0?0:(d()-.5)*1.6;ht.push({x:Y+mt,y:Z,z:W+It,ry:d()*Math.PI*2,rx:N==="bone"||N==="driftwood"?0:(d()-.5)*.12,sx:j*(.85+d()*.3),sy:j*(.8+d()*.5),sz:j*(.85+d()*.3)})}if(V.collider){let pt=new qt,mt=V.collider*j;pt.min.set(Y-mt,Z,W-mt),pt.max.set(Y+mt,Z+mt*1.4,W+mt),a.push(pt)}E+=ut}for(let[P,N]of F){let[V,Y]=P.split("|"),W=Zu[V],X=x&&W.coldSwap?W.parts.map(Z=>({...Z,mat:hd})):W.parts;hy(o,X,N,Y>=0?$u[+Y]:void 0)}}return o.name=`nature_${i.cx},${i.cz}:${f}`,{mesh:o,colliders:a,type:"nature",biome:f,treeCount:C,propCount:E}}function fy(s,t){let e=Math.imul(Math.floor(s*4)|0,374761393)+Math.imul(Math.floor(t*4)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function py(s){try{return In(s)}catch{return null}}var wM={rock:Ku,rockDark:ju,bush:Qu,bushDry:td,tuft:ed,reed:nd,cactus:cc,fern:id,mushStem:sd,mushCap:rd,bone:hc,wood:od,petalA:uc,petalB:ad,petalC:ld,stem:cd,snow:hd,leafSnow:Eo.leafSnow};var fc=class{constructor(t){this.cellSize=t,this.cells=new Map,this.count=0}key(t,e){return`${Math.floor(t/this.cellSize)},${Math.floor(e/this.cellSize)}`}insert(t){let e=(t.min.x+t.max.x)/2,n=(t.min.z+t.max.z)/2,i=this.key(e,n),r=this.cells.get(i);r||(r=[],this.cells.set(i,r)),r.push(t),this.count++}remove(t){let e=(t.min.x+t.max.x)/2,n=(t.min.z+t.max.z)/2,i=this.key(e,n),r=this.cells.get(i);if(!r)return!1;let o=r.indexOf(t);return o>=0&&(r.splice(o,1),this.count--),r.length===0&&this.cells.delete(i),o>=0}query(t,e,n){let i=[],r=Math.floor((t-n)/this.cellSize),o=Math.floor((t+n)/this.cellSize),a=Math.floor((e-n)/this.cellSize),l=Math.floor((e+n)/this.cellSize);for(let c=r;c<=o;c++)for(let h=a;h<=l;h++){let u=this.cells.get(`${c},${h}`);u&&i.push(...u)}return i}clear(){this.cells.clear(),this.count=0}},qo=class{constructor(t,e,n,i,r,o,a,l){this.scene=t,this.player=e,this.worldData=n,this.trafficSystem=i,this.parkingSystem=r,this.pedestrianSystem=o,this.trafficLightSystem=a,this.constructionSystem=l,this.chunks=new Map,this.chunkSize=n.blockSize+n.roadWidth,this.renderDistance=2,this.lodDistance=this.renderDistance*2,this.grid=new fc(this.chunkSize),this.streamBudget=3,this.pendingLoads=[],this.chunkPool=new Map,this.noise=_i,this.planet=Yo({chunkSize:this.chunkSize})}classify(t,e){return this.planet.classifyChunk(t,e,{roadWidth:this.worldData.roadWidth})}update(){if(!this.player)return;let t=this.player.camera.position,e=Math.floor(t.x/this.chunkSize),n=Math.floor(t.z/this.chunkSize),i=new Set;for(let o=-this.renderDistance;o<=this.renderDistance;o++)for(let a=-this.renderDistance;a<=this.renderDistance;a++){let l=e+o,c=n+a,h=`${l},${c}`;i.add(h),!this.chunks.has(h)&&!this.pendingLoads.some(u=>u.id===h)&&this.pendingLoads.push({cx:l,cz:c,id:h})}let r=0;for(;this.pendingLoads.length&&r<this.streamBudget;){let o=this.pendingLoads.shift();this.loadChunk(o.cx,o.cz),r++}for(let[o,a]of this.chunks){if(a.lodLevel===void 0)continue;let l=o.split(","),c=parseInt(l[0],10),h=parseInt(l[1],10),u=this.detailLevel(c,h,e,n);a.lodLevel!==u&&r<this.streamBudget&&(this.unloadChunk(o),this.loadChunk(c,h),r++)}for(let[o,a]of this.chunks)i.has(o)||this.unloadChunk(o)}loadChunk(t,e){let n=`${t},${e}`,i=this.classify(t,e),r=t*this.chunkSize,o=e*this.chunkSize,a=this.chunkPool.get(n),l;if(a&&a.type===i.type)this.chunkPool.delete(n),l=a,this._populate(t,e,i,l);else if(i.type==="city"){let c=0;if(this.player){let h=this.player.camera.position;c=this.detailLevel(t,e,Math.floor(h.x/this.chunkSize),Math.floor(h.z/this.chunkSize))}l=Du(r,o,this.chunkSize,this.worldData.roadWidth,c),l.lodLevel=c,l.type="city",c===0&&this._populate(t,e,i,l)}else if(i.type==="road"){let c=i.roadAxis||"x";l=Uu(r,o,this.chunkSize,this.worldData.roadWidth,c),l.type="road",l.biome="highway",this.trafficSystem&&this.trafficSystem.loadChunk(t,e,`highway_${c}`)}else{let c=this.player?this.detailLevel(t,e,Math.floor(this.player.camera.position.x/this.chunkSize),Math.floor(this.player.camera.position.z/this.chunkSize)):0;l=Sd(r,o,this.chunkSize,this.planet,i,{lod:c,waterLevel:this.planet.seaLevel}),l.lodLevel=c}if(l.mesh&&this.scene.add(l.mesh),this.chunks.set(n,l),l.colliders)for(let c of l.colliders)this.grid.insert(c);return l}_populate(t,e,n,i){n.type==="city"?(this.trafficSystem&&this.trafficSystem.loadChunk(t,e,"city"),this.parkingSystem&&this.parkingSystem.loadChunk(t,e),this.pedestrianSystem&&this.pedestrianSystem.loadChunk(t,e),this.trafficLightSystem&&this.trafficLightSystem.loadChunk(t,e),this.constructionSystem&&this.constructionSystem.loadChunk(t,e,i)):n.type==="road"&&this.trafficSystem&&this.trafficSystem.loadChunk(t,e,`highway_${n.roadAxis||"x"}`)}unloadChunk(t){let e=this.chunks.get(t);if(e){if(e.mesh&&this.scene.remove(e.mesh),e.colliders)for(let o of e.colliders)this.grid.remove(o);let n=t.split(","),i=parseInt(n[0]),r=parseInt(n[1]);this.trafficSystem&&this.trafficSystem.unloadChunk(i,r),this.parkingSystem&&this.parkingSystem.unloadChunk(i,r),this.pedestrianSystem&&this.pedestrianSystem.unloadChunk(i,r),this.trafficLightSystem&&this.trafficLightSystem.unloadChunk(i,r),this.constructionSystem.unloadChunk(i,r)}this.chunks.delete(t),this.chunkPool.set(t,e)}detailLevel(t,e,n,i){let r=t-n,o=e-i;return Math.sqrt(r*r+o*o)>this.lodDistance?1:0}getColliders(){let t=[];for(let e of this.chunks.values())e.colliders&&(t=t.concat(e.colliders));if(this.parkingSystem){let e=this.parkingSystem.getColliders();t=t.concat(e)}if(this.trafficSystem){let e=this.trafficSystem.getColliders();t=t.concat(e)}return t}getCollidersNear(t,e,n=this.chunkSize){let i=this.grid.query(t,e,n);if(this.parkingSystem)for(let r of this.parkingSystem.getColliders()){let o=(r.min.x+r.max.x)/2,a=(r.min.z+r.max.z)/2;Math.abs(o-t)<=n&&Math.abs(a-e)<=n&&i.push(r)}if(this.trafficSystem)for(let r of this.trafficSystem.getColliders()){let o=(r.min.x+r.max.x)/2,a=(r.min.z+r.max.z)/2;Math.abs(o-t)<=n&&Math.abs(a-e)<=n&&i.push(r)}return i}};var Zo=class{constructor(){this.reset()}reset(){this.frames=0,this.avgFrameMs=0,this.lastFps=0,this.drawCalls=0,this.triangles=0,this.instances=0}recordFrame(t,e,n){let i=Math.max(t,1e-4)*1e3,r=this.frames;return this.frames+=1,this.avgFrameMs=r===0?i:(this.avgFrameMs*r+i)/(r+1),this.lastFps=1e3/i,this.drawCalls=e||this.drawCalls,this.triangles=n||this.triangles,this}countDrawCalls(t){let e=0,n=0;return t.traverse(i=>{i.isMesh&&i.visible&&i.material&&(e+=1,n+=i.isInstancedMesh?i.count:1)}),this.drawCalls=e,this.instances=n,{drawCalls:e,instances:n}}measureFrameBudget(t,e=1/60,n=120){let i=performance.now();for(let l=0;l<n;l++)t(e);let r=performance.now()-i,o=r/n,a=1e3/Math.max(o,.001);return this.frames=n,this.avgFrameMs=o,this.lastFps=a,{frames:n,avgFrameMs:o,fps:a,elapsedMs:r}}recordBudget(t){return this.loop=t||null,this.skippedFrames=t?t.skipped:0,this.overBudgetFrames=t?t.overBudget:0,this.clampedDts=t?t.clamped:0,this}recordClock(t){return this.clock=t||null,this}snapshot(){return{frames:this.frames,avgFrameMs:+this.avgFrameMs.toFixed(3),fps:+this.lastFps.toFixed(2),drawCalls:this.drawCalls,instances:this.instances,triangles:this.triangles,loop:this.loop,clock:this.clock,skippedFrames:this.skippedFrames,overBudgetFrames:this.overBudgetFrames,clampedDts:this.clampedDts}}};var $o=class{constructor(t,e=16,n={}){this.chunkSize=t,this.radius=e,this.nodes=new Map,this.maxNodes=n.maxNodes||6e3,this.classify=n.classify||(n.planet?(i,r)=>{let o=n.planet.classifyChunk(i,r);return o.type==="city"?{x:!0,z:!0}:o.type==="road"?o.roadAxis==="cross"?{x:!0,z:!0}:{x:o.roadAxis==="x",z:o.roadAxis==="z"}:{x:!1,z:!1}}:null),this.build()}key(t,e){return`${t},${e}`}roadAxes(t,e){if(this.classify)return this.classify(t,e);if(Math.sqrt(t*t+e*e)<6)return{x:!0,z:!0};let r=Math.abs(e)<=5,o=Math.abs(t)<=5;return{x:r,z:o}}hasRoad(t,e,n){let i=this.nodes.get(this.key(t,e));return i?i[n]:!1}build(){for(let e=-this.radius;e<=this.radius;e++)for(let n=-this.radius;n<=this.radius;n++){let i=this.roadAxes(e,n);(i.x||i.z)&&this.nodes.set(this.key(e,n),{cx:e,cz:n,x:i.x,z:i.z,edges:[],key:this.key(e,n)})}let t=(e,n,i)=>{let r=this.nodes.get(e),o=this.nodes.get(n);return!r||!o||!r[i]||!o[i]?!1:(r.edges.push({to:n,axis:i,dir:1}),o.edges.push({to:e,axis:i,dir:-1}),!0)};for(let e of this.nodes.values()){let n=this.key(e.cx+1,e.cz),i=this.key(e.cx-1,e.cz),r=this.key(e.cx,e.cz+1),o=this.key(e.cx,e.cz-1);t(this.key(e.cx,e.cz),n,"x"),t(this.key(e.cx,e.cz),i,"x"),t(this.key(e.cx,e.cz),r,"z"),t(this.key(e.cx,e.cz),o,"z")}this.centerKey=this.key(0,0)}ensure(t,e,n=1){for(let i=t-n;i<=t+n;i++)for(let r=e-n;r<=e+n;r++){let o=this.key(i,r);if(this.nodes.has(o))continue;let a=this.roadAxes(i,r);if(!a.x&&!a.z)continue;let l={cx:i,cz:r,x:!!a.x,z:!!a.z,edges:[],key:o};this.nodes.set(o,l);for(let[c,h,u]of[[1,0,"x"],[-1,0,"x"],[0,1,"z"],[0,-1,"z"]]){let d=this.nodes.get(this.key(i+c,r+h));d&&d[u]&&l[u]&&(l.edges.push({to:d.key,axis:u,dir:c||h}),d.edges.push({to:o,axis:u,dir:-(c||h)}))}}return this.nodes.size>this.maxNodes&&(this.nodes.clear(),this.build()),this.nodes.size}nodeCount(){return this.nodes.size}edgeCount(){let t=0;for(let e of this.nodes.values())t+=e.edges.length;return t}getNode(t,e){return typeof t=="string"?this.nodes.get(t)||null:this.nodes.get(this.key(t,e))||null}neighbors(t){let e=this.nodes.get(t);return e?e.edges:[]}turnsAt(t,e){let n=this.nodes.get(t);if(!n)return[];let i=e==="x"?"z":"x",r=[];for(let o of n.edges)o.axis===i&&!r.includes(o.to)&&r.push(o.to);return r}connected(){let t=new Set([this.centerKey]),e=[this.centerKey];for(;e.length;){let n=e.shift();for(let i of this.neighbors(n))t.has(i.to)||(t.add(i.to),e.push(i.to))}return{reached:t.size,total:this.nodes.size,connected:t.size===this.nodes.size}}shortestPath(t,e){if(t===e)return[t];let n=new Map([[t,null]]),i=[t];for(;i.length;){let a=i.shift();if(a===e)break;for(let l of this.neighbors(a))n.has(l.to)||(n.set(l.to,a),i.push(l.to))}if(!n.has(e))return null;let r=[],o=e;for(;o!==null&&(r.push(o),o=n.get(o),o!==null););return r.reverse(),r}nodeAtWorld(t,e){let n=Math.round(t/this.chunkSize),i=Math.round(e/this.chunkSize);return this.nodes.has(this.key(n,i))||this.ensure(n,i),this.getNode(n,i)}};var pc={city:"city",highway:"highway",wild:"wild"},Jo=[{name:"Brick Residential",color:"#c8a07a"},{name:"Financial Core",color:"#7aa0d8"},{name:"Neon District",color:"#d87aa0"},{name:"Industrial Zone",color:"#8a8a8a"},{name:"Parkland",color:"#7ac878"}],Ed={metropolis:"#6fa8ff",downtown:"#8fb8e0",oldtown:"#d8a86a",industrial:"#9a9a9a",suburbia:"#a8d08a",neon:"#ff6fd8",harbour:"#5fd0d0",agro:"#c8d06a",outpost:"#e0a05a",winter:"#e8f0ff"};function my(s){return"#"+s.toString(16).padStart(6,"0")}var Ko=class{constructor(t,e={}){this.chunkManager=t,this.size=e.size||180,this.chunkSize=t?t.chunkSize:96,this.renderDistance=e.renderDistance||3,this.planet=t&&t.planet||Yo({chunkSize:this.chunkSize}),this.playerChunk=[0,0],this.district="First Landing",this.region="",this.biome="",this.nearest=null,this.nearbyCities=[],this.activeChunks=[],this.canvas=null,this.ctx=null,this._tryCreateCanvas()}_tryCreateCanvas(){try{let t=document.createElement("canvas");t.width=this.size,t.height=this.size,this.canvas=t,this.ctx=t.getContext&&t.getContext("2d"),this.ctx&&(t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.border="1px solid rgba(255,255,255,0.35)",t.style.boxShadow="0 2px 8px rgba(0,0,0,0.5)",t.style.fontFamily="monospace",document.body.appendChild(t))}catch{this.canvas=null,this.ctx=null}return this}biomeAt(t,e){let n=this.planet.classifyChunk(t,e);return n.type==="city"?pc.city:n.type==="road"?pc.highway:pc.wild}surfaceAt(t,e){return this.planet.classifyChunk(t,e).biome}colorAt(t,e){let n=this.planet.classifyChunk(t,e);if(n.type==="city"){let r=n.city&&n.city.kind;return r&&Ed[r]||Jo[1].color}if(n.type==="road")return"#c8b040";let i=this.planet.biomeInfo(n.biome);return my(i.ground)}districtAt(t,e){let n=this.planet.classifyChunk(t,e);if(n.type==="city"&&n.city){let i=_i.noise2D(t*.23,e*.23),r=Jo[Math.abs(Math.floor(i*Jo.length))%Jo.length].name;return`${n.city.name} \xB7 ${n.city.label} \xB7 ${r}`}return n.type==="road"?"Inter-City Highway":`${n.region} \xB7 ${n.biome}`}settlementsNear(t,e){let n=this.renderDistance+2;return this.planet.citiesInChunkRange(t-n,e-n,t+n,e+n)}nearestSettlement(t,e){let n=this.planet.nearestCity(t,e);if(!n)return null;let i=n.city;return{name:i.name,kind:i.kind,label:i.label,population:i.population,dist:Math.round(n.dist),x:i.x,z:i.z}}update(t){let e=t?t.x:0,n=t?t.z:0;this.playerChunk=[Math.floor(e/this.chunkSize),Math.floor(n/this.chunkSize)],this.district=this.districtAt(this.playerChunk[0],this.playerChunk[1]);let i=this.planet.classifyChunk(this.playerChunk[0],this.playerChunk[1]);if(this.biome=i.biome,this.region=i.region,this.nearest=this.nearestSettlement(e,n),this.nearbyCities=this.settlementsNear(this.playerChunk[0],this.playerChunk[1]),this.activeChunks=[],this.chunkManager)for(let r of this.chunkManager.chunks.keys()){let o=r.split(",").map(Number);this.activeChunks.push({x:o[0],z:o[1],biome:this.surfaceAt(o[0],o[1]),type:this.biomeAt(o[0],o[1])})}return this._draw(),this}_draw(){let t=this.ctx;if(!t)return;let e=this.size;t.clearRect(0,0,e,e),t.fillStyle="rgba(14,16,22,0.92)",t.fillRect(0,0,e,e);let[n,i]=this.playerChunk,r=this.renderDistance,o=e/(r*2+1);for(let a=-r;a<=r;a++)for(let l=-r;l<=r;l++){let c=n+a,h=i+l,u=(a+r)*o,d=(l+r)*o;t.fillStyle=this.colorAt(c,h),t.fillRect(u,d,o,o),t.strokeStyle="rgba(255,255,255,0.10)",t.strokeRect(u+.5,d+.5,o-1,o-1)}t.font="bold 9px monospace";for(let a of this.nearbyCities){let l=a.cx-n,c=a.cz-i;if(Math.abs(l)>r||Math.abs(c)>r)continue;let h=(l+r+.5)*o,u=(c+r+.5)*o;t.strokeStyle=Ed[a.kind]||"#ffffff",t.lineWidth=2,t.beginPath(),t.arc(h,u,Math.max(4,o*.42),0,Math.PI*2),t.stroke(),t.lineWidth=1,t.fillStyle="#ffffff",t.fillText(a.name,h+o*.5,u-2)}t.fillStyle="#ffffff",t.beginPath(),t.arc(e/2,e/2,Math.max(3,o*.32),0,Math.PI*2),t.fill(),t.strokeStyle="#ff4d4d",t.stroke(),t.fillStyle="#ffffff",t.font="bold 11px monospace",t.fillText(this.district,6,e-8),t.fillStyle="rgba(255,255,255,0.6)",t.font="9px monospace",t.fillText(`chunk ${n},${i}`,6,e-20),this.nearest&&(t.fillStyle="rgba(160,200,255,0.95)",t.fillText(`\u25B6 ${this.nearest.name} ${this.nearest.dist}m`,6,12))}dispose(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null,this.ctx=null}};var jo=class{constructor({maxDt:t=.1,budgetMs:e=16.7,onSkip:n=null}={}){this.maxDt=t,this.budgetMs=e,this.onSkip=n,this.prevTime=null,this.skipNext=!1,this.frames=0,this.skipped=0,this.overBudget=0,this.clamped=0,this.lastDt=0,this.lastWorkMs=0}tick(t){if(this.prevTime===null)return this.prevTime=t,this.frames++,{dt:0,first:!0,skipped:!1};let e=(t-this.prevTime)/1e3;return this.prevTime=t,e>this.maxDt&&(e=this.maxDt,this.clamped++),this.lastDt=e,this.frames++,this.skipNext?(this.skipNext=!1,this.skipped++,this.onSkip&&this.onSkip(),{dt:e,first:!1,skipped:!0}):{dt:e,first:!1,skipped:!1}}reportWork(t){return this.lastWorkMs=t,t>this.budgetMs&&(this.overBudget++,this.skipNext=!0),t}step(t=1,e=1/60,n=1){let i=0,r=0,o=0,a=this.prevTime===null?0:this.prevTime;for(let l=0;l<t;l++)a+=e*1e3,this.tick(a).skipped&&i++,e>this.maxDt&&r++,this.reportWork(n),n>this.budgetMs&&o++;return{skipped:i,clamped:r,over:o}}snapshot(){return{frames:this.frames,skipped:this.skipped,overBudget:this.overBudget,clamped:this.clamped,maxDt:this.maxDt,budgetMs:this.budgetMs,lastDt:+this.lastDt.toFixed(3),lastWorkMs:+this.lastWorkMs.toFixed(2)}}};var gy=.03333333333333333,xy=4,Qo=class{constructor({fixedDt:t=gy,maxStepsPerFrame:e=xy}={}){this.fixedDt=t,this.maxStepsPerFrame=e,this.accumulator=0,this.paused=!1,this.frames=0,this.steps=0,this.dropped=0,this.alpha=0}advance(t,e,n){if(this.frames++,this.paused)return this.accumulator=0,this.alpha=0,n&&n(0,t),{steps:0,rendered:!0,alpha:0};this.accumulator+=t;let i=0;for(;this.accumulator>=this.fixedDt&&i<this.maxStepsPerFrame;)e&&e(this.fixedDt),this.accumulator-=this.fixedDt,i++;return this.accumulator>=this.fixedDt&&(this.dropped+=Math.floor(this.accumulator/this.fixedDt),this.accumulator%=this.fixedDt),this.steps+=i,this.alpha=this.accumulator/this.fixedDt,n&&n(this.alpha,t),{steps:i,rendered:!0,alpha:this.alpha}}pause(){this.paused=!0}resume(){this.paused=!1}toggle(){this.paused?this.resume():this.pause()}snapshot(){return{fixedDt:this.fixedDt,maxStepsPerFrame:this.maxStepsPerFrame,accumulator:+this.accumulator.toFixed(4),paused:this.paused,frames:this.frames,steps:this.steps,dropped:this.dropped,alpha:+this.alpha.toFixed(3)}}};var Ue=Object.freeze({BOOT:"boot",LOADING:"loading",MENU:"menu",PLAYING:"playing",PAUSED:"paused",GAMEOVER:"gameover"}),_y=Object.values(Ue),wd=new Set([Ue.BOOT,Ue.LOADING,Ue.MENU,Ue.PAUSED,Ue.GAMEOVER]);function yy(s){return _y.includes(s)}var ta=class{constructor({clock:t=null,onEnter:e=null,onExit:n=null}={}){this.clock=t,this.onEnter=e,this.onExit=n,this.state=Ue.BOOT,this.transitions=0,this.history=[]}transition(t,e=""){if(!yy(t))throw new Error('App: invalid state "'+String(t)+'"');let n=this.state;return this.history.push({from:n,to:t,reason:e}),n!==t&&(this.onExit&&this.onExit(n,t),this.state=t,this.transitions++,this.onEnter&&this.onEnter(t,n),this._syncClock(t)),this}_syncClock(t){this.clock&&(wd.has(t)?this.clock.pause():this.clock.resume())}get isPlaying(){return this.state===Ue.PLAYING}get isPaused(){return this.state===Ue.PAUSED}get isFrozen(){return wd.has(this.state)}togglePause(){return this.state===Ue.PLAYING?this.transition(Ue.PAUSED,"toggle-pause"):this.state===Ue.PAUSED?this.transition(Ue.PLAYING,"toggle-resume"):this.transition(this.state,"toggle-ignored"),this}snapshot(){return{state:this.state,transitions:this.transitions,playing:this.isPlaying,paused:this.isPaused,frozen:this.isFrozen,clockPaused:this.clock?this.clock.paused:null,history:this.history.slice()}}};var Si=Object.freeze({LOW:"low",MEDIUM:"medium",HIGH:"high",ULTRA:"ultra"}),vs=Object.freeze({[Si.LOW]:{pixelRatio:1,drawDistanceScale:.75,postFx:!1,shadowMap:!0},[Si.MEDIUM]:{pixelRatio:1.5,drawDistanceScale:.9,postFx:!0,shadowMap:!0},[Si.HIGH]:{pixelRatio:2,drawDistanceScale:1,postFx:!0,shadowMap:!0},[Si.ULTRA]:{pixelRatio:3,drawDistanceScale:1.15,postFx:!0,shadowMap:!0}}),vy=Object.freeze({quality:Si.HIGH,pixelRatio:0,renderDistance:0,audio:{muted:!1,master:1,music:1,sfx:1},input:{bindings:qe}});function mc(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)}function ea(s,t){let e={};for(let n of Object.keys(s)){let i=s[n],r=t&&t[n];e[n]=mc(i)&&mc(r)?ea(i,r):r===void 0?i:r}return e}function or(){if(typeof localStorage<"u"&&localStorage)return localStorage;let s=new Map;return{getItem:t=>s.has(t)?s.get(t):null,setItem:(t,e)=>s.set(t,String(e)),removeItem:t=>s.delete(t)}}var na=class{constructor({storage:t=null,key:e="worldloop.settings",defaults:n=vy}={}){this.storage=t||or(),this.key=e,this.defaults=n,this._data=ea(n,{}),this.dirty=!1,this.load()}load(){let t=this.storage.getItem(this.key);if(t)try{this._data=ea(this.defaults,JSON.parse(t))}catch{this._data=ea(this.defaults,{})}return this.dirty=!1,this}save(){return this.storage.setItem(this.key,JSON.stringify(this._data)),this.dirty=!1,this}get(t,e=void 0){let n=this._data;for(let i of t.split(".")){if(n==null||!(i in n))return e;n=n[i]}return n}set(t,e){let n=t.split("."),i=this._data;for(let r=0;r<n.length-1;r++){let o=n[r];mc(i[o])||(i[o]={}),i=i[o]}return i[n[n.length-1]]=e,this.dirty=!0,this.save(),this}get quality(){return this._data.quality}get audio(){return this._data.audio}get bindings(){return this._data.input.bindings}get isDirty(){return this.dirty}setQuality(t){let e=vs[t]?t:Si.HIGH;return this._data.quality=e,this.dirty=!0,this.save(),this}setBindings(t){return this._data.input.bindings=t&&typeof t=="object"?t:qe,this.dirty=!0,this.save(),this}setAudio(t={}){return this._data.audio=Object.assign({},this._data.audio,t),this.dirty=!0,this.save(),this}pixelRatioCap(){return this.get("pixelRatio")>0?this.get("pixelRatio"):vs[this.quality].pixelRatio}drawDistanceScale(){return vs[this.quality].drawDistanceScale}postFxEnabled(){return vs[this.quality].postFx}shadowMap(){return this.qualityParams().shadowMap!==!1}qualityParams(){return vs[this.quality]||vs[Si.HIGH]}snapshot(){return{quality:this._data.quality,pixelRatio:this.get("pixelRatio"),renderDistance:this.get("renderDistance"),audio:Object.assign({},this._data.audio),input:{bindings:this._data.input.bindings},dirty:this.dirty}}};var bd=Object.freeze([{postFx:!0,pixelRatioCap:null,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:null,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:1,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:.85,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:.7,shadows:!0,drawDistanceScale:1},{postFx:!1,pixelRatioCap:.7,shadows:!1,drawDistanceScale:1},{postFx:!1,pixelRatioCap:.7,shadows:!1,drawDistanceScale:.85},{postFx:!1,pixelRatioCap:.7,shadows:!1,drawDistanceScale:.7}]),Td=.8,ia=class{constructor({targetFps:t=60,marginFps:e=4,cooldownMs:n=900,recoverFrames:i=120,enabled:r=!0}={}){this.targetFps=t,this.marginFps=e,this.cooldownMs=n,this.recoverFrames=i,this.enabled=r,this.level=0,this.emaMs=0,this.lastStepAt=0,this.overTargetCount=0,this.frameCount=0,this.steps=0}recordFrame(t){return t<=0?this:(this.frameCount++,this.emaMs=this.emaMs===0?t:this.emaMs*Td+t*(1-Td),this)}tick(t){if(!this.enabled||this.emaMs===0)return this.level;let e=1e3/this.emaMs,n=t-this.lastStepAt;return e<this.targetFps?n>=this.cooldownMs&&(this.level=Math.min(this.level+1,bd.length-1),this.lastStepAt=t,this.steps++,this.overTargetCount=0):e>=this.targetFps+this.marginFps?(this.overTargetCount++,this.overTargetCount>=this.recoverFrames&&n>=this.cooldownMs&&(this.level=Math.max(this.level-1,0),this.lastStepAt=t,this.overTargetCount=0)):this.overTargetCount=0,this.level}resolve(t){let e=t.qualityParams?t.qualityParams():{},n=bd[this.level];return{level:this.level,postFx:n.postFx&&e.postFx!==!1,pixelRatioCap:n.pixelRatioCap??e.pixelRatio??1,shadows:n.shadows&&e.shadowMap!==!1,drawDistanceScale:(e.drawDistanceScale??1)*n.drawDistanceScale}}snapshot(){return{enabled:this.enabled,level:this.level,emaFps:this.emaMs?1e3/this.emaMs:null,targetFps:this.targetFps,steps:this.steps,frameCount:this.frameCount}}};var gc=1,My="worldloop.save";function Ad(s){return s?{x:s.x??0,y:s.y??0,z:s.z??0}:null}function Sy(s){if(!s)return null;let t=s.currentCar&&s.currentCar.mesh,e=s.camera;return{position:Ad(e?e.position:null)||{x:0,y:2,z:0},isDriving:!!s.isDriving,carType:t?t.userData&&t.userData.type||"sedan":null,carPosition:Ad(t?t.position:null),carRotationY:t&&t.rotation?t.rotation.y:null,carVelocity:s.carVelocity||0,carSteering:s.carSteering||0,health:t&&t.userData?t.userData.health:null,spinVelocity:s.spinVelocity||0,shakeIntensity:s.shakeIntensity||0}}function Ey(s){return s?typeof s.snapshot=="function"?s.snapshot():{fixedDt:s.fixedDt??1/30,maxStepsPerFrame:s.maxStepsPerFrame??4,accumulator:s.accumulator??0,paused:!!s.paused,frames:s.frames??0,steps:s.steps??0,dropped:s.dropped??0,alpha:s.alpha??0}:null}var sa=class{constructor({storage:t=null,key:e=My}={}){this.storage=t||or(),this.key=e,this._data=null,this.dirty=!1}capture({seed:t=us(),player:e=null,simClock:n=null,progress:i={},meta:r={}}={}){let o=Ey(n);return this._data={version:gc,seed:t>>>0,player:Sy(e),simClock:o,progress:{score:i.score||0,events:i.events||0,simTime:o?+(o.steps*o.fixedDt).toFixed(3):0},meta:Object.assign({},r)},this.dirty=!0,this.snapshot()}serialize(){return this._data?JSON.stringify(this._data):null}save(){return this._data&&(this.storage.setItem(this.key,JSON.stringify(this._data)),this.dirty=!1),this}load(){let t=this.storage.getItem(this.key);if(t)try{let e=JSON.parse(t);if(e&&e.version===gc)return this._data=e,this.dirty=!1,this.snapshot()}catch{}return this._data=null,null}fromJSON(t){let e=JSON.parse(t);return e&&e.version===gc?(this._data=e,this.dirty=!1,this.snapshot()):null}snapshot(){return this._data?JSON.parse(JSON.stringify(this._data)):null}fingerprint(){if(!this._data)return null;let t=this.serialize(),e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}restore({player:t=null,simClock:e=null}={}){let n=this._data;if(!n)return null;if(n.simClock&&e&&(e.steps=n.simClock.steps||0,e.accumulator=n.simClock.accumulator||0,typeof e.pause=="function"&&e.pause()),n.player&&t){let i=n.player,r=t.camera&&t.camera.position;if(i.position&&r&&(typeof r.set=="function"?r.set(i.position.x,i.position.y,i.position.z):(r.x=i.position.x,r.y=i.position.y,r.z=i.position.z)),t.isDriving=!!i.isDriving,t.carVelocity=i.carVelocity||0,t.carSteering=i.carSteering||0,t.spinVelocity=i.spinVelocity||0,t.shakeIntensity=i.shakeIntensity||0,t.currentCar&&t.currentCar.mesh){let o=t.currentCar.mesh;i.carPosition&&(typeof o.position.set=="function"?o.position.set(i.carPosition.x,i.carPosition.y,i.carPosition.z):(o.position.x=i.carPosition.x,o.position.y=i.carPosition.y,o.position.z=i.carPosition.z)),i.carRotationY!=null&&o.rotation&&(o.rotation.y=i.carRotationY),i.carType&&o.userData&&(o.userData.type=i.carType),i.health!=null&&o.userData&&(o.userData.health=i.health)}}return this.snapshot()}};var ae;var wy=0,Fn,Ms,Ei,wi,Ss,ra,ti,xn,Es,ei,oa,ge,bi,xc,ws;function by(){Fn=document.createElement("div"),Fn.style.position="absolute",Fn.style.top="20px",Fn.style.left="20px",Fn.style.color="#fff",Fn.style.fontSize="24px",Fn.style.fontFamily="monospace",Fn.innerHTML="Score: 0",document.body.appendChild(Fn)}window.addEventListener("error",s=>{let t=document.createElement("div");t.style.position="absolute",t.style.top="10px",t.style.left="10px",t.style.color="red",t.style.background="rgba(0,0,0,0.8)",t.style.padding="10px",t.textContent=`Error: ${s.message}`,document.body.appendChild(t)});async function Ty(){by(),Tu(1337);try{let{scene:s,camera:t,renderer:e}=Su(),n=new na({storage:or()});window.settings=n,e.setPixelRatio(n.pixelRatioCap());let i=await Nu(s);ti=new Ho(s),xn=new Vo({renderer:e,scene:s,camera:t});let r=new ia({targetFps:60});xn.enabled=n.postFxEnabled(),e.shadowMap.enabled=n.shadowMap(),e.setPixelRatio(n.pixelRatioCap());let o=n.pixelRatioCap(),a=n.shadowMap(),l=n.drawDistanceScale(),c=n.postFxEnabled();xn.enabled&&window.addEventListener("resize",()=>xn.resize()),Es=new Go(s,i.roadWidth,i.blockSize),oa=new Lo(s),ei=new Po(s,i.roadWidth,i.blockSize),ei.setEffects(ti),window.emergencySystem=ei,Ms=new Ro(s,i.citySize,i.blockSize,i.roadWidth),Ss=new Uo(s,i.citySize,i.blockSize,i.roadWidth),wi=new Do(s,i.citySize,i.blockSize,i.roadWidth);let h=new ms({dom:document.body,map:new Ye(n.bindings)});ae=new To(t,document.body,[],null,null,ti,null,h),ae.emergencySystem=ei,ge=new qo(s,ae,i,Ms,Ss,wi,Es,oa),ge.renderDistance=Math.max(1,Math.round(ge.renderDistance*n.drawDistanceScale())),ge.lodDistance=ge.renderDistance*2,ae.colliders=ge.getColliders(),ae.trafficSystem=Ms,ae.parkingSystem=Ss,ae.pedestrianSystem=wi,xc=new $o(i.blockSize,16,{planet:ge.planet}),window.roadGraph=xc,ws=new Ko(ge),window.minimap=ws,Ms.setDependencies(ae,Ss,Es,ti,wi,xc,ei),Ss.setDependencies(ti),wi.setDependencies(Es,Ss,ti),Ei=new Io(s,i.directionalLight,i.ambientLight,i.materials),ae.weatherSystem=Ei,ra=new No(s,i.citySize),window.airplaneSystem=ra,bi=new Zo,window.frameBudget=bi,window.__worldloop={ready:!1,drawCalls:0,fps:0,triangles:0,errors:0,simClock:null},window.__worldloop.planet=ge.planet,window.__worldloop.chunkManager=ge,window.__worldloop.weather=Ei,window.__worldloop.placeAt=(y,_)=>{let M=Math.floor(y/ge.chunkSize),R=Math.floor(_/ge.chunkSize);return{chunk:[M,R],biome:ws.surfaceAt(M,R),place:ws.districtAt(M,R)}},window.__worldloop.teleport=(y,_)=>{let M=Math.max(6,ge.planet.groundHeightCached(y,_)+6);return ae.teleport(y,_,M),ae.colliders=ge.getCollidersNear(y,_,ge.chunkSize),window.__worldloop.placeAt(y,_)},console.log("Game Initialized with Infinite World + Populated Chunks");let u=document.createElement("div");u.style.position="absolute",u.style.bottom="34px",u.style.right="10px",u.style.color="#8affaa",u.style.background="rgba(0,0,0,0.5)",u.style.padding="5px",u.style.fontFamily="monospace",u.style.fontSize="12px",u.innerHTML="fps -- | dc --",document.body.appendChild(u);let d=0,f=document.createElement("div");f.style.position="absolute",f.style.bottom="10px",f.style.right="10px",f.style.color="white",f.style.background="rgba(0,0,0,0.5)",f.style.padding="5px",f.style.fontFamily="monospace",f.innerHTML="v6.7.0: Living Planet \u2014 biomes, oceans, forests, scattered cities",document.body.appendChild(f);let g=new jo({maxDt:.1,budgetMs:16.7}),x=new Qo({fixedDt:1/30,maxStepsPerFrame:4}),m=new ta({clock:x});window.__worldloop.app=m,m.transition(Ue.LOADING,"init"),h.onPause=()=>m.togglePause(),h.onLock=()=>ae.controls.lock(),window.__worldloop.simClock=x;let p=new sa;window.saveGame=p,window.__worldloop.saveGame=p,p.capture({seed:us(),player:ae,simClock:x,progress:{score:wy,events:ei.events},meta:{slot:"autosave",label:"worldloop"}}),p.save(),m.transition(Ue.PLAYING,"ready"),Eu(g,y=>{try{x.advance(y,_=>{if(ge&&(ge.update(),ae)){let M=ae.camera.position;ae.colliders=ge.getCollidersNear(M.x,M.z,ge.chunkSize)}if(h.update(_),ae&&ae.update(_),ei&&ei.update(_),Ms&&Ms.update(_),Es&&Es.update(_),oa&&oa.update(_),Ei){let M=ae&&ae.mesh?ae.mesh.position:new A;Ei.update(_,M)}wi&&wi.update(_),ra&&ra.update(_)},(_,M)=>{let R=ae&&ae.mesh?ae.mesh.position:new A;if(ws&&ws.update(R),ti&&ti.update(M),xn){let C=0;s&&s.traverse(v=>{if(v.isMesh&&v.material&&v.material.color){let E=v.material.color.getHex();(E===65535||E===16711935)&&C++}}),C=Math.min(1,C/24);let I=Ei?Ei.currentWeatherState:null;xn.update(I,C)}r.recordFrame(M*1e3),r.tick(performance.now());let b=r.resolve(n);if(b.pixelRatioCap!==o&&(o=b.pixelRatioCap,e.setPixelRatio(b.pixelRatioCap)),b.shadows!==a&&(a=b.shadows,e.shadowMap.enabled=b.shadows),b.postFx!==c&&(c=b.postFx,xn.enabled=b.postFx),ge.renderDistance=Math.max(1,Math.round(ge.renderDistance*b.drawDistanceScale/l)),l=b.drawDistanceScale,xn&&xn.enabled?xn.render():e.render(s,t),bi.recordFrame(M,e.info.render.calls,e.info.render.triangles),bi.recordBudget(g.snapshot()),bi.recordClock(x.snapshot()),!window.__worldloop.ready){let C=bi.snapshot();window.__worldloop.drawCalls=C.drawCalls,window.__worldloop.fps=C.fps,window.__worldloop.triangles=C.triangles,window.__worldloop.ready=C.frames>0&&C.drawCalls>0}if(d+=M,d>=.5&&u){d=0;let C=bi.snapshot();u.innerHTML="fps "+C.fps+" | dc "+C.drawCalls}})}catch(_){console.error("Game Loop Error:",_)}})}catch(s){throw console.error(s),s}}Ty();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
