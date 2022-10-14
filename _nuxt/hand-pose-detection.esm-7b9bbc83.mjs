import{al as Zt}from"./entry-a25ca61c.mjs";var Nu={};(function(){var n;function t(u){var f=0;return function(){return f<u.length?{done:!1,value:u[f++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,d){return u==Array.prototype||u==Object.prototype||(u[f]=d.value),u};function r(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zt=="object"&&Zt];for(var f=0;f<u.length;++f){var d=u[f];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=r(this);function a(u,f){if(f)t:{var d=s;u=u.split(".");for(var b=0;b<u.length-1;b++){var S=u[b];if(!(S in d))break t;d=d[S]}u=u[u.length-1],b=d[u],f=f(b),f!=b&&f!=null&&e(d,u,{configurable:!0,writable:!0,value:f})}}a("Symbol",function(u){function f($){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new d(b+($||"")+"_"+S++,$)}function d($,E){this.g=$,e(this,"description",{configurable:!0,writable:!0,value:E})}if(u)return u;d.prototype.toString=function(){return this.g};var b="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",S=0;return f}),a("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<f.length;d++){var b=s[f[d]];typeof b=="function"&&typeof b.prototype[u]!="function"&&e(b.prototype,u,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return u});function o(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function i(u){var f=typeof Symbol!="undefined"&&Symbol.iterator&&u[Symbol.iterator];return f?f.call(u):{next:t(u)}}function c(u){if(!(u instanceof Array)){u=i(u);for(var f,d=[];!(f=u.next()).done;)d.push(f.value);u=d}return u}var l=typeof Object.create=="function"?Object.create:function(u){function f(){}return f.prototype=u,new f},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var h;t:{var g={a:!0},y={};try{y.__proto__=g,h=y.a;break t}catch{}h=!1}p=h?function(u,f){if(u.__proto__=f,u.__proto__!==f)throw new TypeError(u+" is not extensible");return u}:null}var v=p;function N(u,f){if(u.prototype=l(f.prototype),u.prototype.constructor=u,v)v(u,f);else for(var d in f)if(d!="prototype")if(Object.defineProperties){var b=Object.getOwnPropertyDescriptor(f,d);b&&Object.defineProperty(u,d,b)}else u[d]=f[d];u.ra=f.prototype}function x(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function I(u){if(u.l)throw new TypeError("Generator is already running");u.l=!0}x.prototype.s=function(u){this.h=u};function R(u,f){u.j={fa:f,ga:!0},u.g=u.o||u.u}x.prototype.return=function(u){this.j={return:u},this.g=this.u};function C(u,f,d){return u.g=d,{value:f}}function P(u){this.g=new x,this.h=u}function D(u,f){I(u.g);var d=u.g.i;return d?B(u,"return"in d?d.return:function(b){return{value:b,done:!0}},f,u.g.return):(u.g.return(f),j(u))}function B(u,f,d,b){try{var S=f.call(u.g.i,d);if(!(S instanceof Object))throw new TypeError("Iterator result "+S+" is not an object");if(!S.done)return u.g.l=!1,S;var $=S.value}catch(E){return u.g.i=null,R(u.g,E),j(u)}return u.g.i=null,b.call(u.g,$),j(u)}function j(u){for(;u.g.g;)try{var f=u.h(u.g);if(f)return u.g.l=!1,{value:f.value,done:!1}}catch(d){u.g.h=void 0,R(u.g,d)}if(u.g.l=!1,u.g.j){if(f=u.g.j,u.g.j=null,f.ga)throw f.fa;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function M(u){this.next=function(f){return I(u.g),u.g.i?f=B(u,u.g.i.next,f,u.g.s):(u.g.s(f),f=j(u)),f},this.throw=function(f){return I(u.g),u.g.i?f=B(u,u.g.i.throw,f,u.g.s):(R(u.g,f),f=j(u)),f},this.return=function(f){return D(u,f)},this[Symbol.iterator]=function(){return this}}function V(u){function f(b){return u.next(b)}function d(b){return u.throw(b)}return new Promise(function(b,S){function $(E){E.done?b(E.value):Promise.resolve(E.value).then(f,d).then($,S)}$(u.next())})}function L(u){return V(new M(new P(u)))}a("Promise",function(u){function f(E){this.h=0,this.i=void 0,this.g=[],this.s=!1;var A=this.j();try{E(A.resolve,A.reject)}catch(O){A.reject(O)}}function d(){this.g=null}function b(E){return E instanceof f?E:new f(function(A){A(E)})}if(u)return u;d.prototype.h=function(E){if(this.g==null){this.g=[];var A=this;this.i(function(){A.l()})}this.g.push(E)};var S=s.setTimeout;d.prototype.i=function(E){S(E,0)},d.prototype.l=function(){for(;this.g&&this.g.length;){var E=this.g;this.g=[];for(var A=0;A<E.length;++A){var O=E[A];E[A]=null;try{O()}catch(z){this.j(z)}}}this.g=null},d.prototype.j=function(E){this.i(function(){throw E})},f.prototype.j=function(){function E(z){return function(H){O||(O=!0,z.call(A,H))}}var A=this,O=!1;return{resolve:E(this.D),reject:E(this.l)}},f.prototype.D=function(E){if(E===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(E instanceof f)this.H(E);else{t:switch(typeof E){case"object":var A=E!=null;break t;case"function":A=!0;break t;default:A=!1}A?this.A(E):this.o(E)}},f.prototype.A=function(E){var A=void 0;try{A=E.then}catch(O){this.l(O);return}typeof A=="function"?this.I(A,E):this.o(E)},f.prototype.l=function(E){this.u(2,E)},f.prototype.o=function(E){this.u(1,E)},f.prototype.u=function(E,A){if(this.h!=0)throw Error("Cannot settle("+E+", "+A+"): Promise already settled in state"+this.h);this.h=E,this.i=A,this.h===2&&this.G(),this.B()},f.prototype.G=function(){var E=this;S(function(){if(E.C()){var A=s.console;typeof A!="undefined"&&A.error(E.i)}},1)},f.prototype.C=function(){if(this.s)return!1;var E=s.CustomEvent,A=s.Event,O=s.dispatchEvent;return typeof O=="undefined"?!0:(typeof E=="function"?E=new E("unhandledrejection",{cancelable:!0}):typeof A=="function"?E=new A("unhandledrejection",{cancelable:!0}):(E=s.document.createEvent("CustomEvent"),E.initCustomEvent("unhandledrejection",!1,!0,E)),E.promise=this,E.reason=this.i,O(E))},f.prototype.B=function(){if(this.g!=null){for(var E=0;E<this.g.length;++E)$.h(this.g[E]);this.g=null}};var $=new d;return f.prototype.H=function(E){var A=this.j();E.M(A.resolve,A.reject)},f.prototype.I=function(E,A){var O=this.j();try{E.call(A,O.resolve,O.reject)}catch(z){O.reject(z)}},f.prototype.then=function(E,A){function O(q,K){return typeof q=="function"?function(G){try{z(q(G))}catch(nt){H(nt)}}:K}var z,H,J=new f(function(q,K){z=q,H=K});return this.M(O(E,z),O(A,H)),J},f.prototype.catch=function(E){return this.then(void 0,E)},f.prototype.M=function(E,A){function O(){switch(z.h){case 1:E(z.i);break;case 2:A(z.i);break;default:throw Error("Unexpected state: "+z.h)}}var z=this;this.g==null?$.h(O):this.g.push(O),this.s=!0},f.resolve=b,f.reject=function(E){return new f(function(A,O){O(E)})},f.race=function(E){return new f(function(A,O){for(var z=i(E),H=z.next();!H.done;H=z.next())b(H.value).M(A,O)})},f.all=function(E){var A=i(E),O=A.next();return O.done?b([]):new f(function(z,H){function J(G){return function(nt){q[G]=nt,K--,K==0&&z(q)}}var q=[],K=0;do q.push(void 0),K++,b(O.value).M(J(q.length-1),H),O=A.next();while(!O.done)})},f});function U(u,f){u instanceof String&&(u+="");var d=0,b=!1,S={next:function(){if(!b&&d<u.length){var $=d++;return{value:f($,u[$]),done:!1}}return b=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}var Y=typeof Object.assign=="function"?Object.assign:function(u,f){for(var d=1;d<arguments.length;d++){var b=arguments[d];if(b)for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(u[S]=b[S])}return u};a("Object.assign",function(u){return u||Y}),a("Object.is",function(u){return u||function(f,d){return f===d?f!==0||1/f===1/d:f!==f&&d!==d}}),a("Array.prototype.includes",function(u){return u||function(f,d){var b=this;b instanceof String&&(b=String(b));var S=b.length;for(d=d||0,0>d&&(d=Math.max(d+S,0));d<S;d++){var $=b[d];if($===f||Object.is($,f))return!0}return!1}}),a("String.prototype.includes",function(u){return u||function(f,d){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,d||0)!==-1}}),a("Array.prototype.keys",function(u){return u||function(){return U(this,function(f){return f})}});var Z=this||self;function Q(u,f){u=u.split(".");var d=Z;u[0]in d||typeof d.execScript=="undefined"||d.execScript("var "+u[0]);for(var b;u.length&&(b=u.shift());)u.length||f===void 0?d[b]&&d[b]!==Object.prototype[b]?d=d[b]:d=d[b]={}:d[b]=f}function tt(){throw Error("Invalid UTF8")}function dt(u,f){return f=String.fromCharCode.apply(null,f),u==null?f:u+f}var xt,he=typeof TextDecoder!="undefined",ee,rr=typeof TextEncoder!="undefined",As={},qe=null;function Os(u){var f;f===void 0&&(f=0),Cs(),f=As[f];for(var d=Array(Math.floor(u.length/3)),b=f[64]||"",S=0,$=0;S<u.length-2;S+=3){var E=u[S],A=u[S+1],O=u[S+2],z=f[E>>2];E=f[(E&3)<<4|A>>4],A=f[(A&15)<<2|O>>6],O=f[O&63],d[$++]=z+E+A+O}switch(z=0,O=b,u.length-S){case 2:z=u[S+1],O=f[(z&15)<<2]||b;case 1:u=u[S],d[$]=f[u>>2]+f[(u&3)<<4|z>>4]+O+b}return d.join("")}function Ds(u){var f=u.length,d=3*f/4;d%3?d=Math.floor(d):"=.".indexOf(u[f-1])!=-1&&(d="=.".indexOf(u[f-2])!=-1?d-2:d-1);var b=new Uint8Array(d),S=0;return ji(u,function($){b[S++]=$}),S!==d?b.subarray(0,S):b}function ji(u,f){function d(O){for(;b<u.length;){var z=u.charAt(b++),H=qe[z];if(H!=null)return H;if(!/^[\s\xa0]*$/.test(z))throw Error("Unknown base64 encoding at char: "+z)}return O}Cs();for(var b=0;;){var S=d(-1),$=d(0),E=d(64),A=d(64);if(A===64&&S===-1)break;f(S<<2|$>>4),E!=64&&(f($<<4&240|E>>2),A!=64&&f(E<<6&192|A))}}function Cs(){if(!qe){qe={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var b=u.concat(f[d].split(""));As[d]=b;for(var S=0;S<b.length;S++){var $=b[S];qe[$]===void 0&&(qe[$]=S)}}}}var Fs=typeof Uint8Array=="function";function sr(u){return Fs&&u!=null&&u instanceof Uint8Array}var gn;function Ps(u){if(this.L=u,u!==null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}var Mi=typeof Uint8Array.prototype.slice=="function",ne=0,fe=0;function Ui(u,f){if(u.constructor===Uint8Array)return u;if(u.constructor===ArrayBuffer)return new Uint8Array(u);if(u.constructor===Array)return new Uint8Array(u);if(u.constructor===String)return Ds(u);if(u.constructor===Ps)return!f&&(f=u.L)&&f.constructor===Uint8Array?f:(f=u.L,f=f==null||sr(f)?f:typeof f=="string"?Ds(f):null,(u=u.L=f)?new Uint8Array(u):gn||(gn=new Uint8Array(0)));if(u instanceof Uint8Array)return new Uint8Array(u.buffer,u.byteOffset,u.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}function Bs(u,f){return Error("Invalid wire type: "+u+" (at position "+f+")")}function ar(){return Error("Failed to read varint, encoding is invalid.")}function Ls(u,f){f=f===void 0?{}:f,f=f.v===void 0?!1:f.v,this.h=null,this.g=this.i=this.j=0,this.v=f,u&&or(this,u)}function or(u,f){u.h=Ui(f,u.v),u.j=0,u.i=u.h.length,u.g=u.j}Ls.prototype.reset=function(){this.g=this.j};function At(u){if(u.g>u.i)throw Error("Tried to read past the end of the data "+u.g+" > "+u.i)}function Ge(u){var f=u.h,d=f[u.g],b=d&127;if(128>d)return u.g+=1,At(u),b;if(d=f[u.g+1],b|=(d&127)<<7,128>d)return u.g+=2,At(u),b;if(d=f[u.g+2],b|=(d&127)<<14,128>d)return u.g+=3,At(u),b;if(d=f[u.g+3],b|=(d&127)<<21,128>d)return u.g+=4,At(u),b;if(d=f[u.g+4],u.g+=5,b|=(d&15)<<28,128>d)return At(u),b;if(128<=f[u.g++]&&128<=f[u.g++]&&128<=f[u.g++]&&128<=f[u.g++]&&128<=f[u.g++])throw ar();return At(u),b}var Rs=[];function ir(){this.g=[]}ir.prototype.length=function(){return this.g.length},ir.prototype.end=function(){var u=this.g;return this.g=[],u};function Se(u,f){for(;127<f;)u.g.push(f&127|128),f>>>=7;u.g.push(f)}function zs(u){var f={},d=f.W===void 0?!1:f.W;this.l={v:f.v===void 0?!1:f.v},this.W=d,f=this.l,Rs.length?(d=Rs.pop(),f&&(d.v=f.v),u&&or(d,u),u=d):u=new Ls(u,f),this.g=u,this.j=this.g.g,this.h=this.i=-1}zs.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};function Vs(u){var f=u.g;if(f.g==f.i)return!1;u.j=u.g.g;var d=Ge(u.g)>>>0;if(f=d>>>3,d&=7,!(0<=d&&5>=d))throw Bs(d,u.j);if(1>f)throw Error("Invalid field number: "+f+" (at position "+u.j+")");return u.i=f,u.h=d,!0}function yn(u){switch(u.h){case 0:if(u.h!=0)yn(u);else t:{u=u.g;for(var f=u.g,d=f+10;f<d;)if((u.h[f++]&128)===0){u.g=f,At(u);break t}throw ar()}break;case 1:u=u.g,u.g+=8,At(u);break;case 2:u.h!=2?yn(u):(f=Ge(u.g)>>>0,u=u.g,u.g+=f,At(u));break;case 5:u=u.g,u.g+=4,At(u);break;case 3:f=u.i;do{if(!Vs(u))throw Error("Unmatched start-group tag: stream EOF");if(u.h==4){if(u.i!=f)throw Error("Unmatched end-group tag");break}yn(u)}while(1);break;default:throw Bs(u.h,u.j)}}var bn=[];function Hi(){this.i=[],this.h=0,this.g=new ir}function Be(u,f){f.length!==0&&(u.i.push(f),u.h+=f.length)}function Ki(u,f){if(f=f.ca){Be(u,u.g.end());for(var d=0;d<f.length;d++)Be(u,f[d])}}var wn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function js(u,f){Object.isFrozen(u)||(wn?u[wn]|=f:u.N!==void 0?u.N|=f:Object.defineProperties(u,{N:{value:f,configurable:!0,writable:!0,enumerable:!1}}))}function Ms(u){var f;return wn?f=u[wn]:f=u.N,f==null?0:f}function Xe(u){return js(u,1),u}function Ye(u){return Array.isArray(u)?!!(Ms(u)&2):!1}function ur(u){if(!Array.isArray(u))throw Error("cannot mark non-array as immutable");js(u,2)}function Us(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var vn=Object.freeze(Xe([]));function Hs(u){if(Ye(u.m))throw Error("Cannot mutate an immutable Message")}var Ks=typeof Symbol!="undefined"&&typeof Symbol.hasInstance!="undefined";function Ws(u){return{value:u,configurable:!1,writable:!1,enumerable:!1}}function Ut(u,f,d){return f===-1?null:f>=u.i?u.g?u.g[f]:void 0:(d===void 0?0:d)&&u.g&&(d=u.g[f],d!=null)?d:u.m[f+u.h]}function yt(u,f,d,b){b=b===void 0?!1:b,Hs(u),f<u.i&&!b?u.m[f+u.h]=d:(u.g||(u.g=u.m[u.i+u.h]={}))[f]=d}function qs(u,f,d,b){d=d===void 0?!0:d,b=b===void 0?!1:b;var S=Ut(u,f,b);return S==null&&(S=vn),Ye(u.m)?d&&(ur(S),Object.freeze(S)):(S===vn||Ye(S))&&(S=Xe(S.slice()),yt(u,f,S,b)),S}function Xt(u,f,d){return u=Ut(u,f),u=u==null?u:+u,u==null?d===void 0?0:d:u}function Je(u,f,d,b){u.j||(u.j={});var S=Ye(u.m),$=u.j[d];if(!$){b=qs(u,d,!0,b===void 0?!1:b),$=[],S=S||Ye(b);for(var E=0;E<b.length;E++)$[E]=new f(b[E]),S&&ur($[E].m);S&&(ur($),Object.freeze($)),u.j[d]=$}return $}function Gs(u,f,d,b,S){var $=$===void 0?!1:$;return Hs(u),$=Je(u,d,f,$),d=b||new d,u=qs(u,f),S!=null?($.splice(S,0,d),u.splice(S,0,d.m)):($.push(d),u.push(d.m)),d}function Xs(u,f){return u=Ut(u,f),u==null?0:u}function Ys(u,f){return u=Ut(u,f),u==null?"":u}function Wi(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u&&!Array.isArray(u)){if(sr(u))return Os(u);if(u instanceof Ps){var f=u.L;return f=f==null||typeof f=="string"?f:Fs&&f instanceof Uint8Array?Os(f):null,(u.L=f)||""}}}return u}function Js(u){var f=qi;return f=f===void 0?Gi:f,Qs(u,f)}function Zs(u,f){if(u!=null){if(Array.isArray(u))u=Qs(u,f);else if(Us(u)){var d={},b;for(b in u)d[b]=Zs(u[b],f);u=d}else u=f(u);return u}}function Qs(u,f){for(var d=u.slice(),b=0;b<d.length;b++)d[b]=Zs(d[b],f);return Array.isArray(u)&&Ms(u)&1&&Xe(d),d}function qi(u){return u&&typeof u=="object"&&u.toJSON?u.toJSON():(u=Wi(u),Array.isArray(u)?Js(u):u)}function Gi(u){return sr(u)?new Uint8Array(u):u}function Nn(u,f,d){u||(u=ta),ta=null;var b=this.constructor.h;u||(u=b?[b]:[]),this.h=(b?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=u;t:{if(b=this.m.length,u=b-1,b&&(b=this.m[u],Us(b))){this.i=u-this.h,this.g=b;break t}f!==void 0&&-1<f?(this.i=Math.max(f,u+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(d)for(f=0;f<d.length;f++)if(u=d[f],u<this.i)u+=this.h,(b=this.m[u])?Array.isArray(b)&&Xe(b):this.m[u]=vn;else{b=this.g||(this.g=this.m[this.i+this.h]={});var S=b[u];S?Array.isArray(S)&&Xe(S):b[u]=vn}}Nn.prototype.toJSON=function(){return Js(this.m)},Nn.prototype.toString=function(){return this.m.toString()};var ta;function Tn(){Nn.apply(this,arguments)}if(N(Tn,Nn),Ks){var ea={};Object.defineProperties(Tn,(ea[Symbol.hasInstance]=Ws(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),ea))}function na(u,f,d){if(d){var b={},S;for(S in d){var $=d[S],E=$.ja;E||(b.F=$.pa||$.ha.P,$.ba?(b.U=oa($.ba),E=function(A){return function(O,z,H){return A.F(O,z,H,A.U)}}(b)):$.da?(b.T=ia($.X.g,$.da),E=function(A){return function(O,z,H){return A.F(O,z,H,A.T)}}(b)):E=b.F,$.ja=E),E(f,u,$.X),b={F:b.F,U:b.U,T:b.T}}}Ki(f,u)}var Sn=Symbol();function ra(u,f,d){return u[Sn]||(u[Sn]=function(b,S){return f(b,S,d)})}function sa(u){var f=u[Sn];if(!f){var d=pa(u);f=function(b,S){return ha(b,S,d)},u[Sn]=f}return f}function Xi(u){var f=u.ba;if(f)return sa(f);if(f=u.oa)return ra(u.X.g,f,u.da)}function Yi(u){var f=Xi(u),d=u.X,b=u.ha.O;return f?function(S,$){return b(S,$,d,f)}:function(S,$){return b(S,$,d)}}function aa(u,f,d,b,S,$){u=u();var E=0;for(u.length&&typeof u[0]!="number"&&(d(f,u[0]),E++);E<u.length;){d=u[E++];for(var A=E+1;A<u.length&&typeof u[A]!="number";)A++;var O=u[E++];switch(A-=E,A){case 0:b(f,d,O);break;case 1:b(f,d,O,u[E++]);break;case 2:S(f,d,O,u[E++],u[E++]);break;case 3:A=u[E++];var z=u[E++],H=u[E++];Array.isArray(H)?S(f,d,O,A,z,H):$(f,d,O,A,z,H);break;case 4:$(f,d,O,u[E++],u[E++],u[E++],u[E++]);break;default:throw Error("unexpected number of binary field arguments: "+A)}}return f}var xn=Symbol();function oa(u){var f=u[xn];if(!f){var d=ca(u);f=function(b,S){return fa(b,S,d)},u[xn]=f}return f}function ia(u,f){var d=u[xn];return d||(d=function(b,S){return na(b,S,f)},u[xn]=d),d}var ua=Symbol();function Ji(u,f){u.push(f)}function Zi(u,f,d){u.push(f,d.P)}function Qi(u,f,d,b,S){var $=oa(S),E=d.P;u.push(f,function(A,O,z){return E(A,O,z,b,$)})}function tu(u,f,d,b,S,$){var E=ia(b,$),A=d.P;u.push(f,function(O,z,H){return A(O,z,H,b,E)})}function ca(u){var f=u[ua];return f||aa(u,u[ua]=[],Ji,Zi,Qi,tu)}var la=Symbol();function eu(u,f){u[0]=f}function nu(u,f,d,b){var S=d.O;u[f]=b?function($,E,A){return S($,E,A,b)}:S}function ru(u,f,d,b,S,$){var E=d.O,A=sa(S);u[f]=function(O,z,H){return E(O,z,H,b,A,$)}}function su(u,f,d,b,S,$,E){var A=d.O,O=ra(b,S,$);u[f]=function(z,H,J){return A(z,H,J,b,O,E)}}function pa(u){var f=u[la];return f||aa(u,u[la]={},eu,nu,ru,su)}function ha(u,f,d){for(;Vs(f)&&f.h!=4;){var b=f.i,S=d[b];if(!S){var $=d[0];$&&($=$[b])&&(S=d[b]=Yi($))}if((!S||!S(f,u,b))&&(S=f,b=u,$=S.j,yn(S),!S.W)){var E=S.g.h;S=S.g.g,S=$===S?gn||(gn=new Uint8Array(0)):Mi?E.slice($,S):new Uint8Array(E.subarray($,S)),($=b.ca)?$.push(S):b.ca=[S]}}return u}function Ze(u,f,d){if(bn.length){var b=bn.pop();u&&(or(b.g,u),b.i=-1,b.h=-1),u=b}else u=new zs(u);try{return ha(new f,u,pa(d))}finally{f=u.g,f.h=null,f.j=0,f.i=0,f.g=0,f.v=!1,u.i=-1,u.h=-1,100>bn.length&&bn.push(u)}}function fa(u,f,d){for(var b=d.length,S=b%2==1,$=S?1:0;$<b;$+=2)(0,d[$+1])(f,u,d[$]);na(u,f,S?d[0]:void 0)}function cr(u,f){var d=new Hi;fa(u,d,ca(f)),Be(d,d.g.end()),u=new Uint8Array(d.h),f=d.i;for(var b=f.length,S=0,$=0;$<b;$++){var E=f[$];u.set(E,S),S+=E.length}return d.i=[u],u}function Qe(u,f){return{O:u,P:f}}var Ht=Qe(function(u,f,d){if(u.h!==5)return!1;u=u.g;var b=u.h[u.g],S=u.h[u.g+1],$=u.h[u.g+2],E=u.h[u.g+3];return u.g+=4,At(u),S=(b<<0|S<<8|$<<16|E<<24)>>>0,u=2*(S>>31)+1,b=S>>>23&255,S&=8388607,yt(f,d,b==255?S?NaN:1/0*u:b==0?u*Math.pow(2,-149)*S:u*Math.pow(2,b-150)*(S+Math.pow(2,23))),!0},function(u,f,d){if(f=Ut(f,d),f!=null){Se(u.g,8*d+5),u=u.g;var b=f;b=(d=0>b?1:0)?-b:b,b===0?0<1/b?ne=fe=0:(fe=0,ne=2147483648):isNaN(b)?(fe=0,ne=2147483647):34028234663852886e22<b?(fe=0,ne=(d<<31|2139095040)>>>0):11754943508222875e-54>b?(b=Math.round(b/Math.pow(2,-149)),fe=0,ne=(d<<31|b)>>>0):(f=Math.floor(Math.log(b)/Math.LN2),b*=Math.pow(2,-f),b=Math.round(8388608*b),16777216<=b&&++f,fe=0,ne=(d<<31|f+127<<23|b&8388607)>>>0),d=ne,u.g.push(d>>>0&255),u.g.push(d>>>8&255),u.g.push(d>>>16&255),u.g.push(d>>>24&255)}}),au=Qe(function(u,f,d){if(u.h!==0)return!1;for(var b=u.g,S=128,$=0,E=u=0;4>E&&128<=S;E++)S=b.h[b.g++],At(b),$|=(S&127)<<7*E;if(128<=S&&(S=b.h[b.g++],At(b),$|=(S&127)<<28,u|=(S&127)>>4),128<=S)for(E=0;5>E&&128<=S;E++)S=b.h[b.g++],At(b),u|=(S&127)<<7*E+3;if(128>S)b=$>>>0,S=u>>>0,(u=S&2147483648)&&(b=~b+1>>>0,S=~S>>>0,b==0&&(S=S+1>>>0)),b=4294967296*S+(b>>>0);else throw ar();return yt(f,d,u?-b:b),!0},function(u,f,d){if(f=Ut(f,d),f!=null&&f!=null){Se(u.g,8*d),u=u.g;var b=f;for(d=0>b,b=Math.abs(b),f=b>>>0,b=Math.floor((b-f)/4294967296),b>>>=0,d&&(b=~b>>>0,f=(~f>>>0)+1,4294967295<f&&(f=0,b++,4294967295<b&&(b=0))),ne=f,fe=b,d=ne,f=fe;0<f||127<d;)u.g.push(d&127|128),d=(d>>>7|f<<25)>>>0,f>>>=7;u.g.push(d)}}),ou=Qe(function(u,f,d){return u.h!==0?!1:(yt(f,d,Ge(u.g)),!0)},function(u,f,d){if(f=Ut(f,d),f!=null&&f!=null)if(Se(u.g,8*d),u=u.g,d=f,0<=d)Se(u,d);else{for(f=0;9>f;f++)u.g.push(d&127|128),d>>=7;u.g.push(1)}}),ma=Qe(function(u,f,d){if(u.h!==2)return!1;var b=Ge(u.g)>>>0;u=u.g;var S=u.g;u.g+=b,At(u),u=u.h;var $;if(he)($=xt)||($=xt=new TextDecoder("utf-8",{fatal:!0})),$=$.decode(u.subarray(S,S+b));else{b=S+b;for(var E=[],A=null,O,z,H;S<b;)O=u[S++],128>O?E.push(O):224>O?S>=b?tt():(z=u[S++],194>O||(z&192)!==128?(S--,tt()):E.push((O&31)<<6|z&63)):240>O?S>=b-1?tt():(z=u[S++],(z&192)!==128||O===224&&160>z||O===237&&160<=z||(($=u[S++])&192)!==128?(S--,tt()):E.push((O&15)<<12|(z&63)<<6|$&63)):244>=O?S>=b-2?tt():(z=u[S++],(z&192)!==128||(O<<28)+(z-144)>>30!==0||(($=u[S++])&192)!==128||((H=u[S++])&192)!==128?(S--,tt()):(O=(O&7)<<18|(z&63)<<12|($&63)<<6|H&63,O-=65536,E.push((O>>10&1023)+55296,(O&1023)+56320))):tt(),8192<=E.length&&(A=dt(A,E),E.length=0);$=dt(A,E)}return yt(f,d,$),!0},function(u,f,d){if(f=Ut(f,d),f!=null){var b=!1;if(b=b===void 0?!1:b,rr){if(b&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(f))throw Error("Found an unpaired surrogate");f=(ee||(ee=new TextEncoder)).encode(f)}else{for(var S=0,$=new Uint8Array(3*f.length),E=0;E<f.length;E++){var A=f.charCodeAt(E);if(128>A)$[S++]=A;else{if(2048>A)$[S++]=A>>6|192;else{if(55296<=A&&57343>=A){if(56319>=A&&E<f.length){var O=f.charCodeAt(++E);if(56320<=O&&57343>=O){A=1024*(A-55296)+O-56320+65536,$[S++]=A>>18|240,$[S++]=A>>12&63|128,$[S++]=A>>6&63|128,$[S++]=A&63|128;continue}else E--}if(b)throw Error("Found an unpaired surrogate");A=65533}$[S++]=A>>12|224,$[S++]=A>>6&63|128}$[S++]=A&63|128}}f=$.subarray(0,S)}Se(u.g,8*d+2),Se(u.g,f.length),Be(u,u.g.end()),Be(u,f)}}),da=Qe(function(u,f,d,b,S){if(u.h!==2)return!1;f=Gs(f,d,b),d=u.g.i,b=Ge(u.g)>>>0;var $=u.g.g+b,E=$-d;if(0>=E&&(u.g.i=$,S(f,u),E=$-u.g.g),E)throw Error("Message parsing ended unexpectedly. Expected to read "+(b+" bytes, instead read "+(b-E)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.g.g=$,u.g.i=d,!0},function(u,f,d,b,S){if(f=Je(f,b,d),f!=null)for(b=0;b<f.length;b++){var $=u;Se($.g,8*d+2);var E=$.g.end();Be($,E),E.push($.h),$=E,S(f[b],u),E=u;var A=$.pop();for(A=E.h+E.g.length()-A;127<A;)$.push(A&127|128),A>>>=7,E.h++;$.push(A),E.h++}});function Bt(){Tn.apply(this,arguments)}if(N(Bt,Tn),Ks){var ga={};Object.defineProperties(Bt,(ga[Symbol.hasInstance]=Ws(Object[Symbol.hasInstance]),ga))}function tn(u){Bt.call(this,u)}N(tn,Bt);function ya(){return[1,ou,2,Ht,3,ma,4,ma]}function kn(u){Bt.call(this,u,-1,iu)}N(kn,Bt),kn.prototype.addClassification=function(u,f){return Gs(this,1,tn,u,f),this};function ba(){return[1,da,tn,ya]}var iu=[1];function en(u){Bt.call(this,u)}N(en,Bt);function wa(){return[1,Ht,2,Ht,3,Ht,4,Ht,5,Ht]}function lr(u){Bt.call(this,u,-1,uu)}N(lr,Bt);function va(){return[1,da,en,wa]}var uu=[1];function pr(u){Bt.call(this,u)}N(pr,Bt);function Na(){return[1,Ht,2,Ht,3,Ht,4,Ht,5,Ht,6,au]}function Ta(u,f,d){if(d=u.createShader(d===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(d,f),u.compileShader(d),!u.getShaderParameter(d,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(d));return d}function Sa(u){return Je(u,tn,1).map(function(f){return{index:Xs(f,1),score:Xt(f,2),label:Ut(f,3)!=null?Ys(f,3):void 0,displayName:Ut(f,4)!=null?Ys(f,4):void 0}})}function xa(u){return{x:Xt(u,1),y:Xt(u,2),z:Xt(u,3),visibility:Ut(u,4)!=null?Xt(u,4):void 0}}function ka(u){return u.map(function(f){return Je(Ze(f,lr,va),en,1).map(xa)})}function hr(u,f){this.h=u,this.g=f,this.l=0}function Ea(u,f,d){return cu(u,f),typeof u.g.canvas.transferToImageBitmap=="function"?Promise.resolve(u.g.canvas.transferToImageBitmap()):d?Promise.resolve(u.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.g.canvas):(u.i===void 0&&(u.i=document.createElement("canvas")),new Promise(function(b){u.i.height=u.g.canvas.height,u.i.width=u.g.canvas.width,u.i.getContext("2d",{}).drawImage(u.g.canvas,0,0,u.g.canvas.width,u.g.canvas.height),b(u.i)}))}function cu(u,f){var d=u.g;if(u.o===void 0){var b=Ta(d,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),S=Ta(d,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),$=d.createProgram();if(d.attachShader($,b),d.attachShader($,S),d.linkProgram($),!d.getProgramParameter($,d.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+d.getProgramInfoLog($));b=u.o=$,d.useProgram(b),S=d.getUniformLocation(b,"sampler0"),u.j={K:d.getAttribLocation(b,"aVertex"),J:d.getAttribLocation(b,"aTex"),qa:S},u.u=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,u.u),d.enableVertexAttribArray(u.j.K),d.vertexAttribPointer(u.j.K,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),u.s=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,u.s),d.enableVertexAttribArray(u.j.J),d.vertexAttribPointer(u.j.J,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),d.uniform1i(S,0)}b=u.j,d.useProgram(u.o),d.canvas.width=f.width,d.canvas.height=f.height,d.viewport(0,0,f.width,f.height),d.activeTexture(d.TEXTURE0),u.h.bindTexture2d(f.glName),d.enableVertexAttribArray(b.K),d.bindBuffer(d.ARRAY_BUFFER,u.u),d.vertexAttribPointer(b.K,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(b.J),d.bindBuffer(d.ARRAY_BUFFER,u.s),d.vertexAttribPointer(b.J,2,d.FLOAT,!1,0,0),d.bindFramebuffer(d.DRAW_FRAMEBUFFER?d.DRAW_FRAMEBUFFER:d.FRAMEBUFFER,null),d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.colorMask(!0,!0,!0,!0),d.drawArrays(d.TRIANGLE_FAN,0,4),d.disableVertexAttribArray(b.K),d.disableVertexAttribArray(b.J),d.bindBuffer(d.ARRAY_BUFFER,null),u.h.bindTexture2d(0)}function lu(u){this.g=u}var pu=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function hu(u,f){return f+u}function _a(u,f){window[u]=f}function fu(u){var f=document.createElement("script");return f.setAttribute("src",u),f.setAttribute("crossorigin","anonymous"),new Promise(function(d){f.addEventListener("load",function(){d()},!1),f.addEventListener("error",function(){d()},!1),document.body.appendChild(f)})}function mu(){return L(function(u){switch(u.g){case 1:return u.o=2,C(u,WebAssembly.instantiate(pu),4);case 4:u.g=3,u.o=0;break;case 2:return u.o=0,u.j=null,u.return(!1);case 3:return u.return(!0)}})}function fr(u){if(this.g=u,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.$=!0,this.D=Promise.resolve(),this.Z="",this.C={},this.locateFile=u&&u.locateFile||hu,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location!="undefined")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.aa=f,u.options){f=i(Object.keys(u.options));for(var d=f.next();!d.done;d=f.next()){d=d.value;var b=u.options[d].default;b!==void 0&&(this.j[d]=typeof b=="function"?b():b)}}}n=fr.prototype,n.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function du(u){var f,d,b,S,$,E,A,O,z,H,J;return L(function(q){switch(q.g){case 1:return u.$?(f=u.g.files===void 0?[]:typeof u.g.files=="function"?u.g.files(u.j):u.g.files,C(q,mu(),2)):q.return();case 2:if(d=q.h,typeof window=="object")return _a("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),_a("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),E=f.filter(function(K){return K.data!==void 0}),A=f.filter(function(K){return K.data===void 0}),O=Promise.all(E.map(function(K){var G=En(u,K.url);if(K.path!==void 0){var nt=K.path;G=G.then(function(pt){return u.overrideFile(nt,pt),Promise.resolve(pt)})}return G})),z=Promise.all(A.map(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d?fu(u.locateFile(K.url,u.aa)):Promise.resolve()})).then(function(){var K,G,nt;return L(function(pt){if(pt.g==1)return K=window.createMediapipeSolutionsWasm,G=window.createMediapipeSolutionsPackedAssets,nt=u,C(pt,K(G),2);nt.h=pt.h,pt.g=0})}),H=function(){return L(function(K){return u.g.graph&&u.g.graph.url?K=C(K,En(u,u.g.graph.url),0):(K.g=0,K=void 0),K})}(),C(q,Promise.all([z,O,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return b=f.filter(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d}).map(function(K){return u.locateFile(K.url,u.aa)}),importScripts.apply(null,c(b)),S=u,C(q,createMediapipeSolutionsWasm(Module),6);case 6:S.h=q.h,u.l=new OffscreenCanvas(1,1),u.h.canvas=u.l,$=u.h.GL.createContext(u.l,{antialias:!1,alpha:!1,na:typeof WebGL2RenderingContext!="undefined"?2:1}),u.h.GL.makeContextCurrent($),q.g=4;break;case 7:if(u.l=document.createElement("canvas"),J=u.l.getContext("webgl2",{}),!J&&(J=u.l.getContext("webgl",{}),!J))return alert("Failed to create WebGL canvas context when passing video frame."),q.return();u.G=J,u.h.canvas=u.l,u.h.createContext(u.l,!0,!0,{});case 4:u.i=new u.h.SolutionWasm,u.$=!1,q.g=0}})}function gu(u){var f,d,b,S,$,E,A,O;return L(function(z){if(z.g==1){if(u.g.graph&&u.g.graph.url&&u.Z===u.g.graph.url)return z.return();if(u.s=!0,!u.g.graph||!u.g.graph.url){z.g=2;return}return u.Z=u.g.graph.url,C(z,En(u,u.g.graph.url),3)}for(z.g!=2&&(f=z.h,u.i.loadGraph(f)),d=i(Object.keys(u.C)),b=d.next();!b.done;b=d.next())S=b.value,u.i.overrideFile(S,u.C[S]);if(u.C={},u.g.listeners)for($=i(u.g.listeners),E=$.next();!E.done;E=$.next())A=E.value,vu(u,A);O=u.j,u.j={},u.setOptions(O),z.g=0})}n.reset=function(){var u=this;return L(function(f){u.i&&(u.i.reset(),u.o={},u.u={}),f.g=0})},n.setOptions=function(u,f){var d=this;if(f=f||this.g.options){for(var b=[],S=[],$={},E=i(Object.keys(u)),A=E.next();!A.done;$={R:$.R,S:$.S},A=E.next()){var O=A.value;O in this.j&&this.j[O]===u[O]||(this.j[O]=u[O],A=f[O],A!==void 0&&(A.onChange&&($.R=A.onChange,$.S=u[O],b.push(function(z){return function(){var H;return L(function(J){if(J.g==1)return C(J,z.R(z.S),2);H=J.h,H===!0&&(d.s=!0),J.g=0})}}($))),A.graphOptionXref&&(O={valueNumber:A.type===1?u[O]:0,valueBoolean:A.type===0?u[O]:!1,valueString:A.type===2?u[O]:""},A=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),A.graphOptionXref),O),S.push(A))))}(b.length!==0||S.length!==0)&&(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(S),this.A=(this.A===void 0?[]:this.A).concat(b))}};function yu(u){var f,d,b,S,$,E,A;return L(function(O){switch(O.g){case 1:if(!u.s)return O.return();if(!u.A){O.g=2;break}f=i(u.A),d=f.next();case 3:if(d.done){O.g=5;break}return b=d.value,C(O,b(),4);case 4:d=f.next(),O.g=3;break;case 5:u.A=void 0;case 2:if(u.B){for(S=new u.h.GraphOptionChangeRequestList,$=i(u.B),E=$.next();!E.done;E=$.next())A=E.value,S.push_back(A);u.i.changeOptions(S),S.delete(),u.B=void 0}u.s=!1,O.g=0}})}n.initialize=function(){var u=this;return L(function(f){return f.g==1?C(f,du(u),2):f.g!=3?C(f,gu(u),3):C(f,yu(u),0)})};function En(u,f){var d,b;return L(function(S){return f in u.H?S.return(u.H[f]):(d=u.locateFile(f,""),b=fetch(d).then(function($){return $.arrayBuffer()}),u.H[f]=b,S.return(b))})}n.overrideFile=function(u,f){this.i?this.i.overrideFile(u,f):this.C[u]=f},n.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},n.send=function(u,f){var d=this,b,S,$,E,A,O,z,H,J;return L(function(q){switch(q.g){case 1:return d.g.inputs?(b=1e3*(f==null?performance.now():f),C(q,d.D,2)):q.return();case 2:return C(q,d.initialize(),3);case 3:for(S=new d.h.PacketDataList,$=i(Object.keys(u)),E=$.next();!E.done;E=$.next())if(A=E.value,O=d.g.inputs[A]){t:{var K=u[A];switch(O.type){case"video":var G=d.o[O.stream];if(G||(G=new hr(d.h,d.G),d.o[O.stream]=G),G.l===0&&(G.l=G.h.createTexture()),typeof HTMLVideoElement!="undefined"&&K instanceof HTMLVideoElement)var nt=K.videoWidth,pt=K.videoHeight;else typeof HTMLImageElement!="undefined"&&K instanceof HTMLImageElement?(nt=K.naturalWidth,pt=K.naturalHeight):(nt=K.width,pt=K.height);pt={glName:G.l,width:nt,height:pt},nt=G.g,nt.canvas.width=pt.width,nt.canvas.height=pt.height,nt.activeTexture(nt.TEXTURE0),G.h.bindTexture2d(G.l),nt.texImage2D(nt.TEXTURE_2D,0,nt.RGBA,nt.RGBA,nt.UNSIGNED_BYTE,K),G.h.bindTexture2d(0),G=pt;break t;case"detections":for(G=d.o[O.stream],G||(G=new lu(d.h),d.o[O.stream]=G),G.data||(G.data=new G.g.DetectionListData),G.data.reset(K.length),pt=0;pt<K.length;++pt){nt=K[pt];var ut=G.data,kt=ut.setBoundingBox,Lt=pt,Ct=nt.ea,rt=new pr;if(yt(rt,1,Ct.ka),yt(rt,2,Ct.la),yt(rt,3,Ct.height),yt(rt,4,Ct.width),yt(rt,5,Ct.rotation),yt(rt,6,Ct.ia),Ct=cr(rt,Na),kt.call(ut,Lt,Ct),nt.Y)for(ut=0;ut<nt.Y.length;++ut){rt=nt.Y[ut];var bt=!!rt.visibility;kt=G.data,Lt=kt.addNormalizedLandmark,Ct=pt,rt=Object.assign(Object.assign({},rt),{visibility:bt?rt.visibility:0}),bt=new en,yt(bt,1,rt.x),yt(bt,2,rt.y),yt(bt,3,rt.z),rt.visibility&&yt(bt,4,rt.visibility),rt=cr(bt,wa),Lt.call(kt,Ct,rt)}if(nt.V)for(ut=0;ut<nt.V.length;++ut)kt=G.data,Lt=kt.addClassification,Ct=pt,rt=nt.V[ut],bt=new tn,yt(bt,2,rt.score),rt.index&&yt(bt,1,rt.index),rt.label&&yt(bt,3,rt.label),rt.displayName&&yt(bt,4,rt.displayName),rt=cr(bt,ya),Lt.call(kt,Ct,rt)}G=G.data;break t;default:G={}}}switch(z=G,H=O.stream,O.type){case"video":S.pushTexture2d(Object.assign(Object.assign({},z),{stream:H,timestamp:b}));break;case"detections":J=z,J.stream=H,J.timestamp=b,S.pushDetectionList(J);break;default:throw Error("Unknown input config type: '"+O.type+"'")}}return d.i.send(S),C(q,d.D,4);case 4:S.delete(),q.g=0}})};function bu(u,f,d){var b,S,$,E,A,O,z,H,J,q,K,G,nt,pt;return L(function(ut){switch(ut.g){case 1:if(!d)return ut.return(f);for(b={},S=0,$=i(Object.keys(d)),E=$.next();!E.done;E=$.next())A=E.value,O=d[A],typeof O!="string"&&O.type==="texture"&&f[O.stream]!==void 0&&++S;1<S&&(u.I=!1),z=i(Object.keys(d)),E=z.next();case 2:if(E.done){ut.g=4;break}if(H=E.value,J=d[H],typeof J=="string")return nt=b,pt=H,C(ut,wu(u,H,f[J]),14);if(q=f[J.stream],J.type==="detection_list"){if(q){for(var kt=q.getRectList(),Lt=q.getLandmarksList(),Ct=q.getClassificationsList(),rt=[],bt=0;bt<kt.size();++bt){var me=Ze(kt.get(bt),pr,Na);me={ea:{ka:Xt(me,1),la:Xt(me,2),height:Xt(me,3),width:Xt(me,4),rotation:Xt(me,5,0),ia:Xs(me,6)},Y:Je(Ze(Lt.get(bt),lr,va),en,1).map(xa),V:Sa(Ze(Ct.get(bt),kn,ba))},rt.push(me)}kt=rt}else kt=[];b[H]=kt,ut.g=7;break}if(J.type==="proto_list"){if(q){for(kt=Array(q.size()),Lt=0;Lt<q.size();Lt++)kt[Lt]=q.get(Lt);q.delete()}else kt=[];b[H]=kt,ut.g=7;break}if(q===void 0){ut.g=3;break}if(J.type==="float_list"){b[H]=q,ut.g=7;break}if(J.type==="proto"){b[H]=q,ut.g=7;break}if(J.type!=="texture")throw Error("Unknown output config type: '"+J.type+"'");return K=u.u[H],K||(K=new hr(u.h,u.G),u.u[H]=K),C(ut,Ea(K,q,u.I),13);case 13:G=ut.h,b[H]=G;case 7:J.transform&&b[H]&&(b[H]=J.transform(b[H])),ut.g=3;break;case 14:nt[pt]=ut.h;case 3:E=z.next(),ut.g=2;break;case 4:return ut.return(b)}})}function wu(u,f,d){var b;return L(function(S){return typeof d=="number"||d instanceof Uint8Array||d instanceof u.h.Uint8BlobList?S.return(d):d instanceof u.h.Texture2dDataOut?(b=u.u[f],b||(b=new hr(u.h,u.G),u.u[f]=b),S.return(Ea(b,d,u.I))):S.return(void 0)})}function vu(u,f){for(var d=f.name||"$",b=[].concat(c(f.wants)),S=new u.h.StringList,$=i(f.wants),E=$.next();!E.done;E=$.next())S.push_back(E.value);$=u.h.PacketListener.implement({onResults:function(A){for(var O={},z=0;z<f.wants.length;++z)O[b[z]]=A.get(z);var H=u.listeners[d];H&&(u.D=bu(u,O,f.outs).then(function(J){J=H(J);for(var q=0;q<f.wants.length;++q){var K=O[b[q]];typeof K=="object"&&K.hasOwnProperty&&K.hasOwnProperty("delete")&&K.delete()}J&&(u.D=J)}))}}),u.i.attachMultiListener(S,$),S.delete()}n.onResults=function(u,f){this.listeners[f||"$"]=u},Q("Solution",fr),Q("OptionType",{BOOL:0,NUMBER:1,ma:2,0:"BOOL",1:"NUMBER",2:"STRING"});function $a(u){return u===void 0&&(u=0),u===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Ia(u){var f=this;u=u||{},this.g=new fr({locateFile:u.locateFile,files:function(d){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:$a(d.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:ka},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:ka},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(d){return d.map(function(b){return Sa(Ze(b,kn,ba))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(d){var b,S,$;return L(function(E){return E.g==1?(b=$a(d),S="third_party/mediapipe/modules/hand_landmark/"+b,C(E,En(f.g,b),2)):($=E.h,f.g.overrideFile(S,$),E.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=Ia.prototype,n.close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(u){this.g.onResults(u)},n.initialize=function(){var u=this;return L(function(f){return C(f,u.g.initialize(),0)})},n.reset=function(){this.g.reset()},n.send=function(u){var f=this;return L(function(d){return C(d,f.g.send(u),0)})},n.setOptions=function(u){this.g.setOptions(u)},Q("Hands",Ia),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1646424915")}).call(Zt);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tu=1e-7,Su=1e-4;class xu{refCount(t){return Pt("refCount")}incRef(t){return Pt("incRef")}timerAvailable(){return!0}time(t){return Pt("time")}read(t){return Pt("read")}readSync(t){return Pt("readSync")}readToGPU(t,e){return Pt("readToGPU")}numDataIds(){return Pt("numDataIds")}disposeData(t,e){return Pt("disposeData")}write(t,e,r){return Pt("write")}move(t,e,r,s,a){return Pt("move")}memory(){return Pt("memory")}floatPrecision(){return Pt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Tu:Su}dispose(){return Pt("dispose")}}function Pt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Mt(n,t,e=""){T(be(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Ke(n){T(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Wn(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||te(n)&&!e)for(let r=0;r<n.length;++r)Wn(n[r],t,e);else t.push(n);return t}function Nt(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function be(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function cn(n){return n%1===0}function $n(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function qn(n,t){const e=t.length;return n=n==null?t.map((r,s)=>s):[].concat(n),T(n.every(r=>r>=-e&&r<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),T(n.every(r=>cn(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?e+r:r)}function ku(n,t){const e=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||s?null:qn(t,n).sort();let o=0;for(let i=0;i<n.length;++i){if(a!=null){if(a[o]===i&&n[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${n[i]}' is not 1`);(a[o]==null||a[o]>i)&&n[i]===1&&(e.push(n[i]),r.push(i)),a[o]<=i&&o++}n[i]!==1&&(e.push(n[i]),r.push(i))}return{newShape:e,keptDims:r}}function Eu(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function _u(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function $u(n,t){for(let e=0;e<n.length;e++){const r=n[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Iu(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function te(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function Aa(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Au(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function ns(n){return typeof n=="string"||n instanceof String}function Ou(n){return typeof n=="boolean"}function Du(n){return typeof n=="number"}function rs(n){return Array.isArray(n)?rs(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Du(n)?"float32":ns(n)?"string":Ou(n)?"bool":"float32"}function Oa(n){return!!(n&&n.constructor&&n.call&&n.apply)}function ss(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function ho(n,t,e,r=!1){const s=new Array;if(t.length===1){const a=t[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=e[n+o]}else{const a=t[0],o=t.slice(1),i=o.reduce((c,l)=>c*l)*(r?2:1);for(let c=0;c<a;c++)s[c]=ho(n+c*i,o,e,r)}return s}function Er(n,t,e=!1){if(n.length===0)return t[0];const r=n.reduce((s,a)=>s*a)*(e?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return ho(0,n,t,e)}function fo(n,t){const e=as(n,t);for(let r=0;r<e.length;r++)e[r]=1;return e}function as(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function mo(n){n.forEach(t=>{T(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function je(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Da="tfjsflags";class Cu{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Fu,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(st().getBool("IS_TEST")||st().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];st().getBool("IS_TEST")||st().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(je(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global=="undefined"||typeof this.global.location=="undefined"||typeof this.global.location.search=="undefined")return;const t=this.getQueryParams(this.global.location.search);Da in t&&t[Da].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=Bu(s,a)})}}function Fu(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>(Pu(t,r[0],r[1]),r.join("="))),t}function Pu(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Bu(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function st(){return go}let go=null;function Lu(n){go=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let mr;function yo(){if(mr==null){let n;if(typeof window!="undefined")n=window;else if(typeof global!="undefined")n=global;else if(typeof process!="undefined")n=process;else if(typeof self!="undefined")n=self;else throw new Error("Could not find a global object");mr=n}return mr}function Ru(){const n=yo();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function os(n,t){const e=Ru();if(e.has(n))return e.get(n);{const r=t();return e.set(n,r),e.get(n)}}const zu="Abs",Vu="Acos",ju="Acosh",bo="Add",Mu="AddN",Uu="All",Hu="Any",Ku="ArgMax",Wu="ArgMin",qu="Asin",Gu="Asinh",Xu="Atan",Yu="Atanh",Ju="Atan2",Zu="AvgPool",Qu="AvgPool3D",tc="BatchMatMul",ec="BatchToSpaceND",nc="Bincount",rc="BroadcastArgs",wo="Cast",sc="Ceil",ac="ClipByValue",oc="Complex",ic="ComplexAbs",uc="Concat",cc="Conv2D",lc="Conv2DBackpropFilter",pc="Conv2DBackpropInput",hc="Conv3D",fc="Conv3DBackpropInputV2",mc="Cos",dc="Cosh",gc="Cumprod",yc="Cumsum",bc="CropAndResize",wc="DenseBincount",vc="DepthToSpace",Nc="DepthwiseConv2dNative",Tc="DepthwiseConv2dNativeBackpropFilter",Sc="DepthwiseConv2dNativeBackpropInput",xc="Diag",kc="Dilation2D",Ec="RealDiv",_c="Einsum",$c="Elu",Ic="Erf",Ac="Equal",Oc="Exp",Dc="ExpandDims",Cc="Expm1",Fc="FFT",Pc="Fill",Bc="FlipLeftRight",Lc="Floor",Rc="FloorDiv",zc="FusedBatchNorm",Vc="GatherV2",jc="GatherNd",Mc="Greater",Uc="GreaterEqual",vo="Identity",Hc="IFFT",Kc="Imag",Wc="IsFinite",qc="IsInf",Gc="IsNan",Xc="LeakyRelu",Yc="Less",Jc="LessEqual",Zc="LinSpace",Qc="Log",tl="Log1p",el="LogicalAnd",nl="LogicalNot",rl="LogicalOr",sl="LRN",al="Max",ol="Maximum",il="MaxPool",ul="MaxPool3D",cl="MaxPoolWithArgmax",ll="Mean",pl="Min",hl="Minimum",fl="MirrorPad",ml="Mod",dl="Multinomial",gl="Multiply",yl="Neg",bl="NotEqual",wl="NonMaxSuppressionV3",vl="NonMaxSuppressionV4",Nl="NonMaxSuppressionV5",Tl="OnesLike",Sl="OneHot",xl="Pack",kl="PadV2",El="Pow",_l="Prelu",$l="Prod",Il="Range",Al="Real",Ol="Reciprocal",Dl="Relu",Cl="Reshape",Fl="ResizeNearestNeighbor",Pl="ResizeBilinear",Bl="Relu6",Ll="Reverse",Rl="Round",zl="Rsqrt",Vl="ScatterNd",jl="SearchSorted",Ml="Select",Ul="Selu",Hl="Slice",Kl="Sin",Wl="Sinh",ql="Sign",Gl="Sigmoid",Xl="Softplus",Yl="Sqrt",Jl="Sum",Zl="SpaceToBatchND",Ql="SplitV",tp="Softmax",ep="SparseFillEmptyRows",np="SparseReshape",rp="SparseSegmentMean",sp="SparseSegmentSum",ap="SparseToDense",op="SquaredDifference",ip="StridedSlice",up="StringNGrams",cp="StringSplit",lp="StringToHashBucketFast",pp="Sub",hp="Tan",fp="Tanh",No="Tile",mp="TopK",dp="Transform",dr="Transpose",gp="Unique",yp="Unpack",bp="UnsortedSegmentSum",wp="ZerosLike",vp="Step",Ca="FromPixels",Np="RotateWithOffset",Fa="_FusedMatMul",Pa="FusedConv2D",Ba="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nn(...n){st().getBool("IS_TEST")||st().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const To=os("kernelRegistry",()=>new Map),Tp=os("gradRegistry",()=>new Map);function _r(n,t){const e=Sp(n,t);return To.get(e)}function La(n){return Tp.get(n)}function Ra(n){const t=To.entries(),e=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===n&&e.push(o)}return e}function Sp(n,t){return`${t}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function So(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Wn(n)),st().getBool("DEBUG")&&$u(n,t),xp(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let r=0;r<e.length;++r)Math.round(n[r])!==0&&(e[r]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Cn(){return st().platform.now()}function kp(n,t="utf-8"){return t=t||"utf-8",st().platform.encode(n,t)}function za(n,t="utf-8"){return t=t||"utf-8",st().platform.decode(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ep{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new $p)}profileKernel(t,e,r){let s;const a=()=>{s=r()};let o;const i=Cn();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const l of s)l.dataSync();o=Promise.resolve({kernelMs:Cn()-i})}if(st().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const p=s[l];p.data().then(h=>{_p(h,p.dtype,t)})}return{kernelName:t,outputs:s,inputs:e,timeMs:o.then(l=>l.kernelMs),extraInfo:o.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:r,timeMs:s,inputs:a,extraInfo:o}=t;r.forEach(i=>{Promise.all([i.data(),s,o]).then(c=>{this.logger.logKernelProfile(e,i,c[0],c[1],a,c[2])})})}}function _p(n,t,e){if(t!=="float32")return!1;for(let r=0;r<n.length;r++){const s=n[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${e}'`),!0}return!1}class $p{logKernelProfile(t,e,r,s,a,o){const i=typeof s=="number"?$n(`${s}ms`,9):s.error,c=$n(t,25),l=e.rank,p=e.size,h=$n(e.shape.toString(),14);let g="";for(const y in a){const v=a[y];if(v!=null){const N=v.shape||e.shape,x=N.length;g+=`${y}: ${x}D ${x>0?N:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${h}	%c${p}	%c${g}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(n,t,e){const r={},s={};for(let c=0;c<t.length;c++)r[t[c].id]=!0;for(let c=0;c<n.length;c++){const l=n[c],p=l.inputs;for(const h in p){const g=p[h];let y=!1;for(let v=0;v<t.length;v++)if(r[g.id]){l.outputs.forEach(N=>r[N.id]=!0),y=!0,s[l.id]=!0;break}if(y)break}}const a={};a[e.id]=!0;const o={};for(let c=n.length-1;c>=0;c--){const l=n[c],p=l.inputs;for(let h=0;h<l.outputs.length;h++)if(a[l.outputs[h].id]){for(const g in p)a[p[g].id]=!0,o[l.id]=!0;break}}const i=[];for(let c=0;c<n.length;c++){const l=n[c];if(s[l.id]&&o[l.id]){const p={};for(const g in l.inputs){const y=l.inputs[g];r[y.id]&&(p[g]=y)}const h=Object.assign({},l);h.inputs=p,h.outputs=l.outputs,i.push(h)}}return i}function Ap(n,t,e,r){for(let s=t.length-1;s>=0;s--){const a=t[s],o=[];if(a.outputs.forEach(c=>{const l=n[c.id];l!=null?o.push(l):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const c in a.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=e(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const p=a.inputs[c];if(!be(l.shape,p.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${p.shape}'`);if(n[p.id]==null)n[p.id]=l;else{const h=n[p.id];n[p.id]=r(h,l),h.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Va=20,rn=3,gr=7;function Op(n,t,e,r){const s=ss(t),a=Dp(n,t,e,s),o=t.length,i=In(n,t,e,s,a),c=["Tensor"];return r&&(c.push(`  dtype: ${e}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function Dp(n,t,e,r){const s=Nt(t),a=r[r.length-1],o=new Array(a).fill(0),i=t.length,c=e==="complex64"?on(n):n;if(i>1)for(let l=0;l<s/a;l++){const p=l*a;for(let h=0;h<a;h++)o[h]=Math.max(o[h],an(c[p+h],0,e).length)}return o}function an(n,t,e){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(gr))} + ${parseFloat(n[1].toFixed(gr))}j`:ns(n)?r=`'${n}'`:e==="bool"?r=xo(n):r=parseFloat(n.toFixed(gr)).toString(),$n(r,t)}function xo(n){return n===0?"false":"true"}function In(n,t,e,r,s,a=!0){const o=e==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(e==="complex64"){const N=on(n);return[an(N[0],0,e)]}return e==="bool"?[xo(n[0])]:[n[0].toString()]}if(c===1){if(i>Va){const x=rn*o;let I=Array.from(n.slice(0,x)),R=Array.from(n.slice((i-rn)*o,i*o));return e==="complex64"&&(I=on(I),R=on(R)),["["+I.map((C,P)=>an(C,s[P],e)).join(", ")+", ..., "+R.map((C,P)=>an(C,s[i-rn+P],e)).join(", ")+"]"]}const N=e==="complex64"?on(n):Array.from(n);return["["+N.map((x,I)=>an(x,s[I],e)).join(", ")+"]"]}const l=t.slice(1),p=r.slice(1),h=r[0]*o,g=[];if(i>Va){for(let N=0;N<rn;N++){const x=N*h,I=x+h;g.push(...In(n.slice(x,I),l,e,p,s,!1))}g.push("...");for(let N=i-rn;N<i;N++){const x=N*h,I=x+h;g.push(...In(n.slice(x,I),l,e,p,s,N===i-1))}}else for(let N=0;N<i;N++){const x=N*h,I=x+h;g.push(...In(n.slice(x,I),l,e,p,s,N===i-1))}const y=c===2?",":"";g[0]="["+g[0]+y;for(let N=1;N<g.length-1;N++)g[N]=" "+g[N]+y;let v=`,
`;for(let N=2;N<c;N++)v+=`
`;return g[g.length-1]=" "+g[g.length-1]+"]"+(a?"":v),g}function on(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $r{constructor(t,e,r){if(this.dtype=e,this.shape=t.slice(),this.size=Nt(t),r!=null){const s=r.length;T(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||_u(e,this.size),this.strides=ss(t)}set(t,...e){e.length===0&&(e=[0]),T(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const r=this.locToIndex(e);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const s of t){if(s<0||s>=this.shape[e]){const a=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(a)}e++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Kt().makeTensor(this.values,this.shape,this.dtype)}}let Kt=null,Le=null;function Cp(n){Kt=n}function Fp(n){Le=n}class gt{constructor(t,e,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Nt(t),this.strides=ss(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Le.buffer(this.shape,this.dtype,t)}bufferSync(){return Le.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Er(this.shape,t,this.dtype==="complex64")}arraySync(){return Er(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Kt().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(r=>za(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Kt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Kt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>za(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Kt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Kt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Le.print(this,t)}clone(){return this.throwIfDisposed(),Le.clone(this)}toString(t=!1){const e=this.dataSync();return Op(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Le.cast(this,t)}variable(t=!0,e,r){return this.throwIfDisposed(),Kt().makeVariable(this,t,e,r)}}Object.defineProperty(gt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Pp(){return os("Tensor",()=>gt)}Pp();class Ir extends gt{constructor(t,e,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=e,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!be(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Kt().disposeTensor(this),this.dataId=t.dataId,Kt().incRef(this,null)}dispose(){Kt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ir,Symbol.hasInstance,{value:n=>n instanceof gt&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ja;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(ja||(ja={}));var Ar;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Ar||(Ar={}));var Or;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Or||(Or={}));var Dr;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Dr||(Dr={}));var Cr;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Cr||(Cr={}));const Bp={float32:Dr,int32:Ar,bool:Or,complex64:Cr};function Lp(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Bp[n][t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ft(n,t){if(n.dtype===t.dtype)return[n,t];const e=Lp(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Rp(n,t){T(n.dtype===t.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`)}function ko(n){const t=[];return Eo(n,t,new Set),t}function Eo(n,t,e){if(n==null)return;if(n instanceof gt){t.push(n);return}if(!zp(n))return;const r=n;for(const s in r){const a=r[s];e.has(a)||(e.add(a),Eo(a,t,e))}}function zp(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yr(n){return n.kernelName!=null}class Ma{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Me{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ma}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,r=1){return t in this.registryFactory?(nn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:r}=this.initializeBackend(t);if(!(r?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Ep(this.backendInstance),!0}setupRegisteredKernels(){Ra(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Ra(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=e.factory();if(r&&!(r instanceof xu)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,nn(`Initialization of backend ${t} failed`),nn(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return nn(`Initialization of backend ${t} failed`),nn(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const r=this.state.tensorInfo.get(e),s=r.backend,a=this.readSync(e),o=s.refCount(e);s.disposeData(e,!0),r.backend=t,t.move(e,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let r=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=e(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,e,r){t();try{const s=r();return e(),s}catch(s){throw e(),s}}nextTensorId(){return Me.nextTensorId++}nextVariableId(){return Me.nextVariableId++}clone(t){const e=_.runKernel(vo,{x:t}),r={x:t},s=o=>({x:()=>{const i="float32",c={x:o},l={dtype:i};return _.runKernel(wo,c,l)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[e],s,a,{}),e}runKernel(t,e,r){if(this.backendName==null&&this.backend,!(_r(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,r){const s=this.backend.numDataIds();let a=0;r.forEach(c=>{a+=c.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-e-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let e,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=yr(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(yr(t)){const{kernelName:v,inputs:N,attrs:x}=t;this.backendName==null&&this.backend;const I=_r(v,this.backendName);T(I!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),i=()=>{const R=this.backend.numDataIds();c=I.kernelFunc({inputs:N,attrs:x,backend:this.backend});const C=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,R,C);const P=C.map(D=>D.rank!=null?D:this.makeTensorFromTensorInfo(D));if(s){const D=this.getTensorsForGradient(v,N,P);r=this.saveTensorsForBackwardMode(D)}return P}}else{const{forwardFunc:v}=t,N=x=>{!s||(r=x.map(I=>this.keep(this.clone(I))))};i=()=>{const x=this.backend.numDataIds();c=this.tidy(()=>v(this.backend,N));const I=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,x,I),I}}const{inputs:p,attrs:h}=t,g=yr(t)?null:t.backwardsFunc;let y;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=i():(y=this.profiler.profileKernel(l,p,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(y),e=y.outputs)}),s&&this.addTapeNode(l,p,e,g,r,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(v=>p[v]!=null?p[v].shape:null),outputShapes:e.map(v=>v.shape),kernelTimeMs:y.timeMs,extraInfo:y.extraInfo}),Array.isArray(c)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,e,r){const s=La(t);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(T(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(e).map(l=>e[l])):i=a.map(l=>e[l]);const c=r.filter((l,p)=>o[p]);return i.concat(c)}return[]}makeTensor(t,e,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=t;r==="string"&&ns(t[0])&&(a=t.map(c=>kp(c)));const o=s.write(a,e,r),i=new gt(e,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const c=this.state.tensorInfo.get(o),l=Au(a);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,e,r,s){r=r||"float32";const a={dataId:t,shape:e,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(t,e){const{dataId:r,shape:s,dtype:a}=t,o=new gt(s,a,r,this.nextTensorId());return this.trackTensor(o,e),o}makeVariable(t,e=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const a=new Ir(t,e,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*Aa(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Ir||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*Aa(t.dtype);this.state.numBytes-=r}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:a},c=La(t);c!=null&&(s=c.gradFunc),s!=null&&(i.gradient=l=>(l=l.map((p,h)=>{if(p==null){const g=r[h],y=as(g.size,g.dtype);return this.makeTensor(y,g.shape,g.dtype)}return p}),s(l.length>1?l:l[0],a,o))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=ko(t),r=new Set(e.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(t,e,r,s=!1){if(T(e.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));T(a instanceof gt,()=>"The result y returned by f() must be a tensor.");const o=Ip(this.state.activeTape,e,a);if(!s&&o.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r==null?Vp(a.shape):r,Ap(i,o,l=>this.tidy(l),jp);const c=e.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const p of l.saved)p.dispose()}),this.state.activeTape=null),{value:a,grads:c}})}customGrad(t){return T(Oa(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{T(e.every(i=>i instanceof gt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};e.forEach((i,c)=>{s[c]=i});const a=(i,c)=>(r=t(...e,c),T(r.value instanceof gt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),T(Oa(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,c)=>{const l=r.gradFunc(i,c),p=Array.isArray(l)?l:[l];T(p.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),T(p.every(g=>g instanceof gt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return p.forEach((g,y)=>{h[y]=()=>g}),h};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Cn(),r=await this.backend.time(t);return r.wallMs=Cn()-e,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ma;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Me.nextTensorId=0;Me.nextVariableId=0;function Vp(n){const t=fo(Nt(n),"float32");return _.makeTensor(t,n,"float32")}function _o(){const n=yo();if(n._tfengine==null){const t=new Cu(n);n._tfengine=new Me(t)}return Lu(n._tfengine.ENV),Cp(()=>n._tfengine),n._tfengine}const _=_o();function jp(n,t){const e={a:n,b:t};return _.runKernel(bo,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jt=st();jt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});jt.registerFlag("IS_BROWSER",()=>Mp());jt.registerFlag("IS_NODE",()=>typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined");jt.registerFlag("IS_CHROME",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));jt.registerFlag("PROD",()=>!1);jt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>jt.getBool("DEBUG"));jt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);jt.registerFlag("IS_TEST",()=>!1);jt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);jt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);jt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ve(n,t){let e=n;if(te(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(e)||te(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&st().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&$o(n,r,[]),r}function $o(n,t,e){if(e=e||[],!Array.isArray(n)&&!te(n)){T(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}T(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),T(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const r=t.slice(1);for(let s=0;s<n.length;++s)$o(n[s],r,e.concat(s))}function Ua(n,t,e,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${r}' must be ${n} tensor, but got ${t} tensor`)}}function w(n,t,e,r="numeric"){if(n instanceof gt)return Ua(r,n.dtype,t,e),n;let s=rs(n);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Ua(r,s,t,e),n==null||!te(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const c=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${c}'`)}const a=ve(n,s);!te(n)&&!Array.isArray(n)&&(n=[n]);const i=s!=="string"?So(n,s):Wn(n,[],!0);return _.makeTensor(i,a,s)}function Fn(n,t,e,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((a,o)=>w(a,`${t}[${o}]`,e,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Io="__op";function k(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+Io;const s=(...a)=>{_.startScope(e);try{const o=r(...a);return je(o)&&console.error("Cannot return a Promise inside of tidy."),_.endScope(o),o}catch(o){throw _.endScope(null),o}};return Object.defineProperty(s,"name",{value:e,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(n,t){const e=w(n,"real","complex"),r=w(t,"imag","complex");Mt(e.shape,r.shape,`real and imag shapes, ${e.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:e,imag:r};return _.runKernel(oc,s)}const we=k({complex_:Up});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(n,t,e,r){if(r==null&&(r=rs(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!te(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){mo(t);const s=Nt(t),a=Nt(e);T(s===a,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<e.length;++o){const i=e[o],c=o===e.length-1?i!==Nt(t.slice(o)):!0;T(e[o]===t[o]||!c,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!te(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=r!=="string"?So(n,r):Wn(n,[],!0),_.makeTensor(n,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qt(n,t,e){const r=ve(n,e);return Ne(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fr={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn=4;async function Hp(n,t){const e=[],r=[],s=Array.isArray(n)?n.map(o=>o.name):Object.keys(n);for(let o=0;o<s.length;++o){const i=s[o],c=Array.isArray(n)?n[o].tensor:n[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const p=new Promise(async h=>{const g=await c.bytes(),y=g.reduce((x,I)=>x+I.length,0)+Pn*g.length,v=new Uint8Array(y);let N=0;for(let x=0;x<g.length;x++){const I=g[x],R=new Uint8Array(new Uint32Array([I.length]).buffer);v.set(R,N),N+=Pn,v.set(I,N),N+=I.length}h(v)});r.push(p)}else r.push(c.data());t!=null&&(l.group=t),e.push(l)}const a=await Promise.all(r);return{data:Kp(a),specs:e}}function Ao(n,t){const e={};let r,s=0;for(const a of t){const o=a.name,i=a.dtype,c=a.shape,l=Nt(c);let p;if("quantization"in a){const h=a.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${a.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(i!=="float32")throw new Error(`Weight ${a.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${i}.`)}else throw new Error(`Weight ${a.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const g=Fr[h.dtype],y=n.slice(s,s+l*g),v=h.dtype==="uint8"?new Uint8Array(y):new Uint16Array(y);if(i==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){p=new Float32Array(v.length);for(let N=0;N<v.length;N++){const x=v[N];p[N]=x*h.scale+h.min}}else if(h.dtype==="float16")r===void 0&&(r=Jp()),p=r(v);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(i==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);p=new Int32Array(v.length);for(let N=0;N<v.length;N++){const x=v[N];p[N]=Math.round(x*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);s+=l*g}else if(i==="string"){const h=Nt(a.shape);p=[];for(let g=0;g<h;g++){const y=new Uint32Array(n.slice(s,s+Pn))[0];s+=Pn;const v=new Uint8Array(n.slice(s,s+y));p.push(v),s+=y}}else{const h=Fr[i],g=n.slice(s,s+l*h);if(i==="float32")p=new Float32Array(g);else if(i==="int32")p=new Int32Array(g);else if(i==="bool")p=new Uint8Array(g);else if(i==="complex64"){p=new Float32Array(g);const y=new Float32Array(p.length/2),v=new Float32Array(p.length/2);for(let I=0;I<y.length;I++)y[I]=p[I*2],v[I]=p[I*2+1];const N=Qt(y,c,"float32"),x=Qt(v,c,"float32");e[o]=we(N,x),N.dispose(),x.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);s+=l*h}i!=="complex64"&&(e[o]=Qt(p,c,i))}return e}function Kp(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(a=>{if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(t);let s=0;return e.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const is=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function Ha(n){return is?Buffer.byteLength(n):new Blob([n]).size}function Wp(n){if(is)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let r=0,s=t.length;r<s;r++)e+=String.fromCharCode(t[r]);return btoa(e)}function qp(n){if(is){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e.set([t.charCodeAt(r)],r);return e.buffer}function us(n){if(n.length===1)return n[0];let t=0;n.forEach(s=>{t+=s.byteLength});const e=new Uint8Array(t);let r=0;return n.forEach(s=>{e.set(new Uint8Array(s),r),r+=s.byteLength}),e.buffer}function Ka(n){const t="/";for(n=n.trim();n.endsWith(t);)n=n.slice(0,n.length-1);const e=n.split(t);return e[e.length-1]}function Oo(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}async function cs(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),n.weightsManifest!=null){const[r,s]=await t(n.weightsManifest);e.weightSpecs=r,e.weightData=s}return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),e}function mn(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Ha(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Ha(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function Gp(){const n=e=>{let r=e<<13,s=0;for(;(r&8388608)===0;)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function Xp(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function Yp(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function Jp(){const n=Gp(),t=Xp(),e=Yp();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],c=n[e[i>>10]+(i&1023)]+t[i>>10];a[o]=c}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ht{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ht.instance==null&&(ht.instance=new ht),ht.instance}static registerSaveRouter(t){ht.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ht.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ht.getHandlers(t,"save")}static getLoadHandlers(t,e){return ht.getHandlers(t,"load",e)}static getHandlers(t,e,r){const s=[];return(e==="load"?ht.getInstance().loadRouters:ht.getInstance().saveRouters).forEach(o=>{const i=o(t,r);i!==null&&s.push(i)}),s}}const Zp=n=>ht.registerSaveRouter(n),Qp=n=>ht.registerLoadRouter(n),th=n=>ht.getSaveHandlers(n),eh=(n,t)=>ht.getLoadHandlers(n,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pr="tensorflowjs",Br=1,ke="models_store",de="model_info_store";function Do(){if(!st().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window=="undefined"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Lr(n){const t=n.result;t.createObjectStore(ke,{keyPath:"modelPath"}),t.createObjectStore(de,{keyPath:"modelPath"})}class Ie{constructor(t){if(this.indexedDB=Do(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((r,s)=>{const a=this.indexedDB.open(Pr,Br);a.onupgradeneeded=()=>Lr(a),a.onsuccess=()=>{const o=a.result;if(e==null){const i=o.transaction(ke,"readonly"),l=i.objectStore(ke).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=p=>(o.close(),s(l.error)),i.oncomplete=()=>o.close()}else{const i=mn(e),c=o.transaction(de,"readwrite");let l=c.objectStore(de);const p=l.put({modelPath:this.modelPath,modelArtifactsInfo:i});let h;p.onsuccess=()=>{h=o.transaction(ke,"readwrite");const y=h.objectStore(ke).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:i});y.onsuccess=()=>r({modelArtifactsInfo:i}),y.onerror=v=>{l=c.objectStore(de);const N=l.delete(this.modelPath);N.onsuccess=()=>(o.close(),s(y.error)),N.onerror=x=>(o.close(),s(y.error))}},p.onerror=g=>(o.close(),s(p.error)),c.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}Ie.URL_SCHEME="indexeddb://";const Co=n=>st().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ie.URL_SCHEME)?nh(n.slice(Ie.URL_SCHEME.length)):null;ht.registerSaveRouter(Co);ht.registerLoadRouter(Co);function nh(n){return new Ie(n)}function rh(n){return n.startsWith(Ie.URL_SCHEME)?n.slice(Ie.URL_SCHEME.length):n}class sh{constructor(){this.indexedDB=Do()}async listModels(){return new Promise((t,e)=>{const r=this.indexedDB.open(Pr,Br);r.onupgradeneeded=()=>Lr(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(de,"readonly"),i=a.objectStore(de).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(s.close(),e(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>e(r.error)})}async removeModel(t){return t=rh(t),new Promise((e,r)=>{const s=this.indexedDB.open(Pr,Br);s.onupgradeneeded=()=>Lr(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(de,"readwrite"),i=o.objectStore(de),c=i.get(t);let l;c.onsuccess=()=>{if(c.result==null)return a.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const p=i.delete(t),h=()=>{l=a.transaction(ke,"readwrite");const y=l.objectStore(ke).delete(t);y.onsuccess=()=>e(c.result.modelArtifactsInfo),y.onerror=v=>r(c.error)};p.onsuccess=h,p.onerror=g=>(h(),a.close(),r(c.error))}},c.onerror=p=>(a.close(),r(c.error)),o.oncomplete=()=>{l==null?a.close():l.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ae="/",Re="tensorflowjs_models",Fo="info",ah="model_topology",oh="weight_specs",ih="weight_data",uh="model_metadata";function Po(n){return{info:[Re,n,Fo].join(ae),topology:[Re,n,ah].join(ae),weightSpecs:[Re,n,oh].join(ae),weightData:[Re,n,ih].join(ae),modelMetadata:[Re,n,uh].join(ae)}}function Bo(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function ch(n){const t=n.split(ae);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(ae)}function lh(n){return n.startsWith(Ae.URL_SCHEME)?n.slice(Ae.URL_SCHEME.length):n}class Ae{constructor(t){if(!st().getBool("IS_BROWSER")||typeof window=="undefined"||typeof window.localStorage=="undefined")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Po(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=mn(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,Wp(t.weightData));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw Bo(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,i.signature!=null&&(e.signature=i.signature),i.userDefinedMetadata!=null&&(e.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(e.modelInitializer=i.modelInitializer),i.trainingConfig!=null&&(e.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=qp(o),e}}Ae.URL_SCHEME="localstorage://";const Lo=n=>st().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ae.URL_SCHEME)?ph(n.slice(Ae.URL_SCHEME.length)):null;ht.registerSaveRouter(Lo);ht.registerLoadRouter(Lo);function ph(n){return new Ae(n)}class hh{constructor(){T(st().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),T(typeof window=="undefined"||typeof window.localStorage!="undefined",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Re+ae,r=ae+Fo;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(e)&&a.endsWith(r)){const o=ch(a);t[o]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){t=lh(t);const e=Po(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(e.info));return Bo(e),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ze="://";class _t{constructor(){this.managers={}}static getInstance(){return _t.instance==null&&(_t.instance=new _t),_t.instance}static registerManager(t,e){T(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ze)&&(t=t.slice(0,t.indexOf(ze))),T(t.length>0,()=>"scheme must not be an empty string.");const r=_t.getInstance();T(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=e}static getManager(t){const e=_t.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(_t.getInstance().managers)}}function An(n){if(n.indexOf(ze)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${_t.getSchemes().join(",")}`);return{scheme:n.split(ze)[0],path:n.split(ze)[1]}}async function Ro(n,t,e=!1){T(n!==t,()=>`Old path and new path are the same: '${n}'`);const r=ht.getLoadHandlers(n);T(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),T(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const s=r[0],a=ht.getSaveHandlers(t);T(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),T(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const o=a[0],i=An(n).scheme,c=An(n).path,l=i===An(n).scheme,p=await s.load();e&&l&&await _t.getManager(i).removeModel(c);const h=await o.save(p);return e&&!l&&await _t.getManager(i).removeModel(c),h.modelArtifactsInfo}async function fh(){const n=_t.getSchemes(),t={};for(const e of n){const r=await _t.getManager(e).listModels();for(const s in r){const a=e+ze+s;t[a]=r[s]}}return t}async function mh(n){const t=An(n);return _t.getManager(t.scheme).removeModel(t.path)}async function dh(n,t){return Ro(n,t,!1)}async function gh(n,t){return Ro(n,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yh{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}}if(st().get("IS_BROWSER")){st().setPlatform("browser",new yh);try{_t.registerManager(Ae.URL_SCHEME,new hh)}catch{}try{_t.registerManager(Ie.URL_SCHEME,new sh)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bh={importFetch:()=>require("node-fetch")};let br;class wh{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return st().global.fetch!=null?st().global.fetch(t,e):(br==null&&(br=bh.importFetch()),br(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}st().get("IS_NODE")&&!st().get("IS_BROWSER")&&st().setPlatform("node",new wh);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ie(n,t="float32",e){return t=t||"float32",mo(n),new $r(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vh(n,t){const e=w(n,"x","cast");if(!Iu(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:e},s={dtype:t};return _.runKernel(wo,r,s)}const mt=k({cast_:vh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nh(n){const e={x:w(n,"x","clone","string_or_numeric")};return _.runKernel(vo,e)}const ye=k({clone_:Nh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zo(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */_o();const Th={buffer:ie,cast:mt,clone:ye,print:zo};Fp(Th);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sh="model",xh=".json",kh=".weights.bin";function Wa(n){return new Promise(t=>setTimeout(t)).then(n)}class Oe{constructor(t){if(!st().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Oe.URL_SCHEME)&&(t=t.slice(Oe.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Sh),this.modelJsonFileName=t+xh,this.weightDataFileName=t+kh}async save(t){if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=Oo(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=a,await Wa(()=>o.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const i=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=e,await Wa(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:mn(t)}}}}Oe.URL_SCHEME="downloads://";class Eh{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const c=cs(a,l=>this.loadWeights(l));t(c)},r.onerror=s=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const e=[],r=[];for(const o of t)e.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(t),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[e,us(o)])}loadWeightsFile(t,e){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${t}'.`),a.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){const e=[],r=this.weightsFiles.map(a=>Ka(a.name)),s={};for(const a of t)a.paths.forEach(o=>{const i=Ka(o);if(e.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(e.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const _h=n=>st().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Oe.URL_SCHEME)?$h(n.slice(Oe.URL_SCHEME.length)):null;ht.registerSaveRouter(_h);function $h(n="model"){return new Oe(n)}function Ih(n){return new Eh(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qa(n,t,e,r){o(n),e=e==null?0:e,r=r==null?1:r,i(e,r);let s=0;const a=c=>(c.then(l=>{const p=e+ ++s/n.length*(r-e);return t(p),l}),c);function o(c){T(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){T(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),T(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),T(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(n.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Vo(n,t){t==null&&(t={});const e=t.fetchFunc==null?st().platform.fetch:t.fetchFunc,r=n.map(h=>e(h,t.requestInit,{isBinary:!0})),s=0,a=.5,i=(t.onProgress==null?await Promise.all(r):await qa(r,t.onProgress,s,a)).map(h=>h.arrayBuffer()),c=.5,l=1;return t.onProgress==null?await Promise.all(i):await qa(i,t.onProgress,c,l)}async function Ah(n,t="",e,r){return jo(o=>Vo(o,{requestInit:r}))(n,t,e)}function jo(n){return async(t,e="",r)=>{const s=t.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(t.forEach((y,v)=>{let N=0;y.weights.forEach(x=>{const I="quantization"in x?x.quantization.dtype:x.dtype,R=Fr[I]*Nt(x.shape),C=()=>{s[v]=!0,a[v]==null&&(a[v]=[]),a[v].push({manifestEntry:x,groupOffset:N,sizeBytes:R})};r!=null?r.forEach((P,D)=>{P===x.name&&(C(),o[D]=!0)}):C(),i.push(x.name),N+=R})}),!o.every(y=>y)){const y=r.filter((v,N)=>!o[N]);throw new Error(`Could not find weights in manifest with names: ${y.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=s.reduce((y,v,N)=>(v&&y.push(N),y),[]),l=[];c.forEach(y=>{t[y].paths.forEach(v=>{const N=e+(e.endsWith("/")?"":"/")+v;l.push(N)})});const p=await n(l),h={};let g=0;return c.forEach(y=>{const v=t[y].paths.length;let N=0;for(let P=0;P<v;P++)N+=p[g+P].byteLength;const x=new ArrayBuffer(N),I=new Uint8Array(x);let R=0;for(let P=0;P<v;P++){const D=new Uint8Array(p[g+P]);I.set(D,R),R+=D.byteLength}a[y].forEach(P=>{const D=x.slice(P.groupOffset,P.groupOffset+P.sizeBytes),B=Ao(D,[P.manifestEntry]);for(const j in B)h[j]=B[j]}),g+=v}),h}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oh="application/octet-stream",Dh="application/json";class ls{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(T(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=st().platform.fetch,T(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&T(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=Oo(t,r);e.body.append("model.json",new Blob([JSON.stringify(s)],{type:Dh}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:Oh}),"model.weights.bin");const a=await this.fetch(this.path,e);if(a.ok)return{modelArtifactsInfo:mn(t),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=e.modelTopology,s=e.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return cs(e,a=>this.loadWeights(a))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=Ch(e),a=this.weightPathPrefix||r,o=[];for(const p of t)o.push(...p.weights);const i=[],c=[];for(const p of t)for(const h of p.paths)this.weightUrlConverter!=null?c.push(this.weightUrlConverter(h)):i.push(a+h+s);this.weightUrlConverter&&i.push(...await Promise.all(c));const l=await Vo(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,us(l)]}}ls.URL_SCHEME_REGEX=/^https?:\/\//;function Ch(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),r=n.substring(0,t),s=e>t?n.substring(e):"";return[r+"/",s]}function Rr(n){return n.match(ls.URL_SCHEME_REGEX)!=null}const Mo=(n,t)=>{if(typeof fetch=="undefined"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(r=>Rr(r)):e=Rr(n),e)return ps(n,t)}return null};ht.registerSaveRouter(Mo);ht.registerLoadRouter(Mo);function ps(n,t){return new ls(n,t)}function Fh(n,t){return ps(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wr{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Uo{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Ph{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function Bh(n,t,e,r){const s=arguments;return new Ph(Ho(...s))}function Ho(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new wr(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wr({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wr({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))}function Lh(n){return new Uo(n)}function Rh(n){return new Uo(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ko=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:Ih,browserHTTPRequest:Fh,concatenateArrayBuffers:us,decodeWeights:Ao,encodeWeights:Hp,fromMemory:Bh,fromMemorySync:Ho,getLoadHandlers:eh,getModelArtifactsForJSON:cs,getModelArtifactsInfoForJSON:mn,getSaveHandlers:th,http:ps,isHTTPScheme:Rr,loadWeights:Ah,registerLoadRouter:Qp,registerSaveRouter:Zp,weightsLoaderFactory:jo,withSaveHandler:Lh,withSaveHandlerSync:Rh,copyModel:dh,listModels:fh,moveModel:gh,removeModel:mh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zh(n,t,e=!1,r=!1){let s=w(n,"a","matMul"),a=w(t,"b","matMul");[s,a]=ft(s,a);const o={a:s,b:a},i={transposeA:e,transposeB:r};return _.runKernel(tc,o,i)}const ot=k({matMul_:zh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vh(n,t,e=1,r=0){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:w(n,"indices","oneHot","int32")},o={depth:t,onValue:e,offValue:r};return _.runKernel(Sl,a,o)}const jh=k({oneHot_:Vh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(n,t){return _.tidy(n,t)}function Yt(n){ko(n).forEach(e=>e.dispose())}function ge(n){return _.keep(n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mh(n){const e={input:w(n,"input","imag")};return _.runKernel(Kc,e)}const Gn=k({imag_:Mh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(n){const e={x:w(n,"x","neg")};return _.runKernel(yl,e)}const oe=k({neg_:Uh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hh(n){const e={input:w(n,"input","real")};return _.runKernel(Al,e)}const ln=k({real_:Hh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kh(n,t,e){const r=w(n,"x","transpose");if(t==null&&(t=r.shape.map((o,i)=>i).reverse()),T(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(o=>{T(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:t};return r.dtype==="complex64"?Tt(()=>{let o=ln(r),i=Gn(r);return o=_.runKernel(dr,{x:o},a),i=_.runKernel(dr,{x:i},a),e&&(i=oe(i)),we(o,i)}):_.runKernel(dr,s,a)}const zr=k({transpose_:Kh});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wh(n,t){const e=[];for(let r=0;r<t.length;r++){const s=n[n.length-r-1],a=t.length-r-1,o=t[a];(s==null||s===1&&o>1)&&e.unshift(a)}return e}function wt(n,t){const e=[],r=Math.max(n.length,t.length);for(let s=0;s<r;s++){let a=n[n.length-s-1];a==null&&(a=1);let o=t[t.length-s-1];if(o==null&&(o=1),a===1)e.unshift(o);else if(o===1)e.unshift(a);else if(a!==o){const i=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(i)}else e.unshift(a)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wo(n,t,e){if(Ke(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=ve(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ne(n,t,r,e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let xe;function qh(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData!="undefined"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement)a=!0;else if(n.getContext!=null)o=!0;else if(typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(s&&s&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(_r(Ca,_.backendName)!=null){const v={pixels:n},N={numChannels:t};return _.runKernel(Ca,v,N)}const[l,p]=s?[n.videoWidth,n.videoHeight]:[n.width,n.height];let h;if(o)h=n.getContext("2d").getImageData(0,0,l,p).data;else if(r||e)h=n.data;else if(a||s||i){if(xe==null)if(typeof document=="undefined")if(typeof OffscreenCanvas!="undefined"&&typeof OffscreenCanvasRenderingContext2D!="undefined")xe=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else xe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});xe.canvas.width=l,xe.canvas.height=p,xe.drawImage(n,0,0,l,p),h=xe.getImageData(0,0,l,p).data}let g;if(t===4)g=new Int32Array(h);else{const v=l*p;g=new Int32Array(v*t);for(let N=0;N<v;N++)for(let x=0;x<t;++x)g[N*t+x]=h[N*4+x]}return Wo(g,[p,l,t],"int32")}async function Gh(n,t){let e=w(n,"img","toPixels");if(!(n instanceof gt)){const l=e;e=mt(l,"int32"),l.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,s]=e.shape.slice(0,2),a=e.rank===2?1:e.shape[2];if(a>4||a===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${a}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const o=await e.data(),i=e.dtype==="float32"?255:1,c=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const p=[0,0,0,255];for(let g=0;g<a;g++){const y=o[l*a+g];if(e.dtype==="float32"){if(y<0||y>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${y}.`)}else if(e.dtype==="int32"&&(y<0||y>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${y}.`);a===1?(p[0]=y*i,p[1]=y*i,p[2]=y*i):p[g]=y*i}const h=l*4;c[h+0]=Math.round(p[0]),c[h+1]=Math.round(p[1]),c[h+2]=Math.round(p[2]),c[h+3]=Math.round(p[3])}if(t!=null){t.width=s,t.height=r;const l=t.getContext("2d"),p=new ImageData(c,s,r);l.putImageData(p,0,0)}return e!==n&&e.dispose(),c}const Xh=k({fromPixels_:qh});function Yh(n,t,e){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${s}.`;if(e.rank<s)throw new Error(a+` update.rank < ${s}. `);if(n.length<r+(e.rank-s))throw new Error(a+` Output shape length < ${r+(e.rank-s)}`);if(e.rank!==s+n.length-r)throw new Error(a+` update.rank != ${s+n.length-r}`);for(let o=0;o<s;++o)if(e.shape[o]!==t.shape[o])throw new Error(a+` updates.shape[${o}] (${e.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<e.rank-s;++o)if(e.shape[o+s]!==n[o+r])throw new Error(a+` updates.shape[${o+s}] (${e.shape[o+s]}) != shape[${o+s}] (${n[o+s]})`)}function Jh(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Yh(e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zh(n,t){let e=w(n,"a","add"),r=w(t,"b","add");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(bo,s)}const ct=k({add_:Zh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(n,t){let e=w(n,"a","floorDiv"),r=w(t,"b","floorDiv");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(Rc,s)}const qo=k({floorDiv_:Qh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(n,t){let e=w(n,"a","div"),r=w(t,"b","div");if([e,r]=ft(e,r),e.dtype==="int32"&&r.dtype==="int32")return qo(e,r);const s={a:e,b:r},a={};return _.runKernel(Ec,s,a)}const it=k({div_:tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ef(n,t){let e=w(n,"a","mul"),r=w(t,"b","mul");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(gl,s)}const W=k({mul_:ef});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(n){const t=w(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return _.runKernel(ic,e)}else{const e={x:t};return _.runKernel(zu,e)}}const zt=k({abs_:nf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rf(n){const e={x:w(n,"x","acos")};return _.runKernel(Vu,e)}const sf=k({acos_:rf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(n){const e={x:w(n,"x","acosh")};return _.runKernel(ju,e)}const of=k({acosh_:af});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(n){T(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),T(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const t=n.map((s,a)=>w(s,`tensors${a}`,"addN")),e=t[0];t.forEach(s=>{if(s.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!be(s.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return _.runKernel(Mu,r)}const cf=k({addN_:uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lf(n,t=null,e=!1){const s={x:w(n,"x","all","bool")},a={axis:t,keepDims:e};return _.runKernel(Uu,s,a)}const pf=k({all_:lf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(n,t=null,e=!1){const s={x:w(n,"x","any","bool")},a={axis:t,keepDims:e};return _.runKernel(Hu,s,a)}const ff=k({any_:hf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(n,t=0){const r={x:w(n,"x","argMax")},s={axis:t};return _.runKernel(Ku,r,s)}const df=k({argMax_:mf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(n,t=0){const r={x:w(n,"x","argMin")},s={axis:t};return _.runKernel(Wu,r,s)}const yf=k({argMin_:gf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(n){const e={x:w(n,"x","asin")};return _.runKernel(qu,e)}const wf=k({asin_:bf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vf(n){const e={x:w(n,"x","asinh")};return _.runKernel(Gu,e)}const Nf=k({asinh_:vf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tf(n){const e={x:w(n,"x","atan")};return _.runKernel(Xu,e)}const Sf=k({atan_:Tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xf(n,t){let e=w(n,"a","atan2"),r=w(t,"b","atan2");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(Ju,s)}const kf=k({atan2_:xf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(n){const e={x:w(n,"x","atanh")};return _.runKernel(Yu,e)}const _f=k({atanh_:Ef});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(n,t,e,r,s,a,o="channelsLast"){const[i,c]=Bn(t);let l;if(o==="channelsLast")l=[i,c,n[3],n[3]];else if(o==="channelsFirst")l=[i,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return hs(n,l,e,r,s,a,!1,o)}function hs(n,t,e,r,s,a,o=!1,i="channelsLast"){let[c,l,p,h]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,p,h]=n;else if(i==="channelsFirst")[c,h,l,p]=n;else throw new Error(`Unknown dataFormat ${i}`);const[g,y,,v]=t,[N,x]=Bn(e),[I,R]=Bn(r),C=Vr(g,I),P=Vr(y,R),{padInfo:D,outHeight:B,outWidth:j}=Of(s,l,p,N,x,C,P,a,i),M=o?v*h:v;let V;return i==="channelsFirst"?V=[c,M,B,j]:i==="channelsLast"&&(V=[c,B,j,M]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:p,inChannels:h,outHeight:B,outWidth:j,outChannels:M,padInfo:D,strideHeight:N,strideWidth:x,filterHeight:g,filterWidth:y,effectiveFilterHeight:C,effectiveFilterWidth:P,dilationHeight:I,dilationWidth:R,inShape:n,outShape:V,filterShape:t}}function If(n,t,e,r,s){r==null&&(r=Af(n,t,e));const a=n[0],o=n[1],i=Ln((a-t+2*r)/e+1,s),c=Ln((o-t+2*r)/e+1,s);return[i,c]}function Af(n,t,e,r=1){const s=Vr(t,r);return Math.floor((n[0]*(e-1)-e+s)/2)}function Bn(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Vr(n,t){return t<=1?n:n+(n-1)*(t-1)}function Of(n,t,e,r,s,a,o,i,c){let l,p,h;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const y=If([t,e],a,r,n,i);p=y[0],h=y[1]}else if(n==="same"){p=Math.ceil(t/r),h=Math.ceil(e/s);const g=Math.max(0,(p-1)*r+a-t),y=Math.max(0,(h-1)*s+o-e),v=Math.floor(g/2),N=g-v,x=Math.floor(y/2),I=y-x;l={top:v,bottom:N,left:x,right:I,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((t-a+1)/r),h=Math.ceil((e-o+1)/s);else if(typeof n=="object"){const g=c==="channelsLast"?n[1][0]:n[2][0],y=c==="channelsLast"?n[1][1]:n[2][1],v=c==="channelsLast"?n[2][0]:n[3][0],N=c==="channelsLast"?n[2][1]:n[3][1];l={top:g,bottom:y,left:v,right:N,type:g===0&&y===0&&v===0&&N===0?"VALID":"EXPLICIT"},p=Ln((t-a+g+y)/r+1,i),h=Ln((e-o+v+N)/s+1,i)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:p,outWidth:h}}function Ln(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Rn(n){const[t,e,r]=Bn(n);return t===1&&e===1&&r===1}function Te(n,t){return Rn(n)||Rn(t)}function Gt(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")T(cn(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{T(cn(s),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${s}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(n,t){const r={x:w(n,"x","reshape","string_or_numeric")},s={shape:t};return _.runKernel(Cl,r,s)}const F=k({reshape_:Df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(n,t,e,r,s){const a=w(n,"x","avgPool","float32"),o=1;T(Te(e,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);let i=a,c=!1;a.rank===3&&(c=!0,i=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Gt("avgPool",r,s);const l={x:i},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s};let h=_.runKernel(Zu,l,p);return h=mt(h,a.dtype),c?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Go=k({avgPool_:Cf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(n,t,e,r,s,a="NDHWC"){const o=w(n,"x","avgPool3d","float32");let i=o,c=!1;o.rank===4&&(c=!0,i=F(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),T(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),T(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Gt("avgPool3d",r,s);const l={x:i},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:a};let h=_.runKernel(Qu,l,p);return h=mt(h,i.dtype),c?F(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Pf=k({avgPool3d_:Ff});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bf(n,t=0){T(n.length>=1,()=>"Pass at least one tensor to concat");const e=Fn(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),e.length===1)return ye(e[0]);const r=e,s={axis:t};return _.runKernel(uc,r,s)}const St=k({concat_:Bf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(n){const e={x:w(n,"x","sigmoid","float32")};return _.runKernel(Gl,e)}const _e=k({sigmoid_:Lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rf(n,t,e){const r=w(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:t,size:e};return _.runKernel(Hl,s,a)}const X=k({slice_:Rf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(n){const e={x:w(n,"x","tanh","float32")};return _.runKernel(fp,e)}const jr=k({tanh_:zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(n,t,e,r,s,a){const o=w(n,"forgetBias","basicLSTMCell"),i=w(t,"lstmKernel","basicLSTMCell"),c=w(e,"lstmBias","basicLSTMCell"),l=w(r,"data","basicLSTMCell"),p=w(s,"c","basicLSTMCell"),h=w(a,"h","basicLSTMCell"),g=St([l,h],1),y=ot(g,i),v=ct(y,c),N=v.shape[0],x=v.shape[1]/4,I=[N,x],R=X(v,[0,0],I),C=X(v,[0,x],I),P=X(v,[0,x*2],I),D=X(v,[0,x*3],I),B=ct(W(_e(R),jr(C)),W(p,_e(ct(o,P)))),j=W(jr(B),_e(D));return[B,j]}const jf=k({basicLSTMCell_:Vf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(n,t,e){const r=w(n,"x","batchToSpaceND"),s=t.reduce((i,c)=>i*c);T(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),T(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),T(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const a={x:r},o={blockShape:t,crops:e};return _.runKernel(ec,a,o)}const Xo=k({batchToSpaceND_:Mf});function Uf(n){let t;return n.rank===0||n.rank===1?t=F(n,[1,1,1,n.size]):n.rank===2?t=F(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(n,t,e,r,s,a){a==null&&(a=.001);const o=w(n,"x","batchNorm"),i=w(t,"mean","batchNorm"),c=w(e,"variance","batchNorm");let l;s!=null&&(l=w(s,"scale","batchNorm"));let p;r!=null&&(p=w(r,"offset","batchNorm")),T(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(p==null||i.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const g={x:Uf(o),scale:l,offset:p,mean:i,variance:c},y={varianceEpsilon:a},v=_.runKernel(zc,g,y);return F(v,o.shape)}const Xn=k({batchNorm_:Hf});function Kf(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),i=w(t,"mean","batchNorm"),c=w(e,"variance","batchNorm");let l;s!=null&&(l=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),T(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),T(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),T(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&T(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),p!=null&&T(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),Xn(o,i,c,p,l,a)}const Wf=k({batchNorm2d_:Kf});function qf(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),i=w(t,"mean","batchNorm"),c=w(e,"variance","batchNorm");let l;s!=null&&(l=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),T(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),T(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),T(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&T(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),p!=null&&T(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),Xn(o,i,c,p,l,a)}const Gf=k({batchNorm3d_:qf});function Xf(n,t,e,r,s,a){const o=w(n,"x","batchNorm"),i=w(t,"mean","batchNorm"),c=w(e,"variance","batchNorm");let l;s!=null&&(l=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),T(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),T(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),T(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&T(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),p!=null&&T(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),Xn(o,i,c,p,l,a)}const Yf=k({batchNorm4d_:Xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(n,t,e){const r=w(n,"x","bincount"),s=w(t,"weights","bincount");T(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:e};return _.runKernel(nc,a,o)}const Yo=k({bincount_:Jf});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(n,t){const e=w(n,"s0","broadcastArgs","int32"),r=w(t,"s1","broadcastArgs","int32");if(e.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:e,s1:r};return _.runKernel(rc,s)}const Qf=k({broadcastArgs_:Zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(n,t){let e=w(n,"broadcastTo","x");const r=e.shape;if(t.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const l=e.shape.slice();for(;l.length<t.length;)l.unshift(1);e=F(e,l)}const s=e.shape,a=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])a[l]=1;else if(e.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((l,p)=>l>1?p:-1).filter(l=>l>=0).length===0)return ye(e);const i={x:e},c={reps:a};return _.runKernel(No,i,c)}const On=k({broadcastTo_:tm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(n){const e={x:w(n,"x","ceil","float32")};return _.runKernel(sc,e)}const nm=k({ceil_:em});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(n,t,e){const r=w(n,"x","clipByValue");T(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`);const s={x:r},a={clipValueMin:t,clipValueMax:e};return _.runKernel(ac,s,a)}const Jo=k({clipByValue_:rm});function sm(n){return St(n,0)}const am=k({concat1d_:sm});function om(n,t){return St(n,t)}const im=k({concat2d_:om});function um(n,t){return St(n,t)}const cm=k({concat3d_:um});function lm(n,t){return St(n,t)}const pm=k({concat4d_:lm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(n,t,e,r,s="NHWC",a=[1,1],o){const i=w(n,"x","conv2d","float32"),c=w(t,"filter","conv2d","float32");let l=i,p=!1;i.rank===3&&(p=!0,l=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),T(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),Gt("conv2d",r,o);const h=s==="NHWC"?l.shape[3]:l.shape[1];T(h===c.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${c.shape[2]}.`),T(Te(e,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);const g={x:l,filter:c},y={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},v=_.runKernel(cc,g,y);return p?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Yn=k({conv2d_:hm});function fm(n,t,e,r,s="NWC",a=1,o){const i=w(n,"x","conv1d"),c=w(t,"filter","conv1d");let l=i,p=!1;i.rank===2&&(p=!0,l=F(i,[1,i.shape[0],i.shape[1]])),T(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),T(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),Gt("conv1d",r,o),T(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),T(Te(e,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${a}'`),T(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const h=F(c,[1,c.shape[0],c.shape[1],c.shape[2]]),g=F(l,[l.shape[0],1,l.shape[1],l.shape[2]]),x=Yn(g,h,[1,e],r,"NHWC",[1,a],o);return p?F(x,[x.shape[2],x.shape[3]]):F(x,[x.shape[0],x.shape[2],x.shape[3]])}const mm=k({conv1d_:fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(n,t,e,r,s,a="NHWC",o){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let i=n,c=t,l=!1;t.rank===3&&(l=!0,c=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,n[0],n[1],n[2]]),T(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),T(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),T(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const p=a==="NHWC"?i[3]:i[1],h=a==="NHWC"?c.shape[3]:c.shape[1];T(p===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${e.shape[2]}.`),T(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),Gt("conv2dDerInput",s,o);const g={dy:c,filter:e},y={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},v=_.runKernel(pc,g,y);return l?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Zo=k({conv2DBackpropInput_:dm});function gm(n,t,e,r,s,a){const o=w(n,"x","conv2dTranspose"),i=w(t,"filter","conv2dTranspose");return Zo(e,o,i,r,s,"NHWC",a)}const ym=k({conv2dTranspose_:gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(n,t,e,r,s="NDHWC",a=[1,1,1]){const o=w(n,"x","conv3d"),i=w(t,"filter","conv3d");let c=o,l=!1;o.rank===4&&(l=!0,c=F(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),T(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),T(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),T(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),T(Te(e,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),T(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const p={x:c,filter:i},h={strides:e,pad:r,dataFormat:s,dilations:a},g=_.runKernel(hc,p,h);return l?F(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const wm=k({conv3d_:bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vm(n,t,e,r,s){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,o=t,i=!1;t.rank===4&&(i=!0,o=F(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,n[0],n[1],n[2],n[3]]);const c=a[4],l=o.shape[4];T(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),T(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),T(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),T(c===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[3]}.`),T(l===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${e.shape[4]}.`);const p={dy:o,filter:e},h={pad:s,strides:r,inputShape:a},g=_.runKernel(fc,p,h);return i?F(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const Nm=k({conv3DBackpropInput_:vm});function Tm(n,t,e,r,s){const a=w(n,"x","conv3dTranspose"),o=w(t,"filter","conv3dTranspose");return Nm(e,a,o,r,s)}const Sm=k({conv3dTranspose_:Tm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(n){const e={x:w(n,"x","cos","float32")};return _.runKernel(mc,e)}const km=k({cos_:xm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Em(n){const e={x:w(n,"x","cosh","float32")};return _.runKernel(dc,e)}const _m=k({cosh_:Em});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(n,t=0,e=!1,r=!1){const a={x:w(n,"x","cumprod")},o={axis:t,exclusive:e,reverse:r};return _.runKernel(gc,a,o)}const Im=k({cumprod_:$m});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(n,t=0,e=!1,r=!1){const a={x:w(n,"x","cumsum")},o={axis:t,exclusive:e,reverse:r};return _.runKernel(yc,a,o)}const Om=k({cumsum_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(n,t,e,r=!1){const s=w(n,"x","denseBincount"),a=w(t,"weights","denseBincount");T(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),T(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:e,binaryOutput:r};return _.runKernel(wc,o,i)}const Cm=k({denseBincount_:Dm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fm(n,t,e="NHWC"){const r=w(n,"x","depthToSpace","float32"),s=e==="NHWC"?r.shape[1]:r.shape[2],a=e==="NHWC"?r.shape[2]:r.shape[3],o=e==="NHWC"?r.shape[3]:r.shape[1];T(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),T(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),T(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),T(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},c={blockSize:t,dataFormat:e};return _.runKernel(vc,i,c)}const Pm=k({depthToSpace_:Fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(n,t,e,r,s="NHWC",a=[1,1],o){const i=w(n,"x","depthwiseConv2d","float32"),c=w(t,"filter","depthwiseConv2d","float32");let l=i,p=!1;i.rank===3&&(p=!0,l=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),T(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const h=s==="NHWC"?l.shape[3]:l.shape[1];T(h===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${c.shape[2]}.`),Gt("depthwiseConv2d",r,o);const g={x:l,filter:c},y={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},v=_.runKernel(Nc,g,y);return p?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const fs=k({depthwiseConv2d_:Bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(n){const e={x:w(n,"x","diag")};return _.runKernel(xc,e)}const Rm=k({diag_:Lm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(n,t,e,r,s=[1,1],a="NHWC"){const o=w(n,"x","dilation2d"),i=w(t,"filter","dilation2d");T(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),T(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),T(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=F(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);const p={x:c,filter:i},h={strides:e,pad:r,dilations:s},g=_.runKernel(kc,p,h);return l?F(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Vm=k({dilation2d_:zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(n,t){let e=w(n,"a","equal","string_or_numeric"),r=w(t,"b","equal","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(Ac,s)}const Qo=k({equal_:jm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(n,t,e){const r=w(t,"a","where"),s=w(e,"b","where"),a=w(n,"condition","where","bool"),o=wt(wt(a.shape,r.shape),s.shape),i=On(a,o),c=On(r,o),l=On(s,o),p={condition:i,t:c,e:l};return _.runKernel(Ml,p)}const Ue=k({where_:Mm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Um(n){const e={x:w(n,"x","zerosLike")};return _.runKernel(wp,e)}const ms=k({zerosLike_:Um});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(n,t){let e=w(n,"a","div"),r=w(t,"b","div");[e,r]=ft(e,r);const s=it(e,r),a=ms(s),o=Qo(r,a);return Ue(o,a,s)}const Km=k({divNoNan_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(n,t){const e=w(n,"t1","dot"),r=w(t,"t2","dot");T((e.rank===1||e.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${r.rank}.`);const s=e.rank===1?e.size:e.shape[1],a=r.rank===1?r.size:r.shape[0];if(T(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),e.rank===1&&r.rank===1){const o=F(e,[1,-1]),i=F(r,[-1,1]),c=ot(o,i);return F(c,[])}else if(e.rank===1&&r.rank===2){const o=F(e,[1,-1]),i=F(r,[r.shape[0],r.shape[1]]),c=ot(o,i);return F(c,[c.size])}else if(e.rank===2&&r.rank===1){const o=F(r,[-1,1]),i=ot(e,o);return F(i,[i.size])}else{const o=F(r,[r.shape[0],r.shape[1]]);return ot(e,o)}}const qm=k({dot_:Wm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(n,...t){const e=t.map((s,a)=>w(s,`tensors${a}`,"einsum")),r={equation:n};return _.runKernel(_c,e,r)}const Xm=k({einsum_:Gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(n){const e={x:w(n,"x","elu","float32")};return _.runKernel($c,e)}const ti=k({elu_:Ym});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(n){let t=w(n,"x","erf");T(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=mt(t,"float32"));const e={x:t};return _.runKernel(Ic,e)}const Zm=k({erf_:Jm});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(n,t,e){const r=n.length+t.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)e.indexOf(i)===-1?s.push(n[a++]):s.push(t[o++]);return s}function Jn(n,t){const e=t.map(r=>1);return Qm(n,e,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(n,t=null,e=!1){const s={x:w(n,"x","max")},a={reductionIndices:t,keepDims:e};return _.runKernel(al,s,a)}const Ve=k({max_:td});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(n,t=null,e=!1){const s={x:w(n,"x","min")},a={axis:t,keepDims:e};return _.runKernel(pl,s,a)}const Mr=k({min_:ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(n,t){let e=w(n,"base","pow"),r=w(t,"exp","pow");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(El,s)}const ds=k({pow_:nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function at(n,t){if((te(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&te(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ne(n,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rd(n){const e={x:w(n,"x","sqrt","float32")};return _.runKernel(Yl,e)}const Ur=k({sqrt_:rd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(n){const t=w(n,"x","square"),e={};return _.runKernel("Square",{x:t},e)}const Zn=k({square_:sd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(n,t=null,e=!1){let r=w(n,"x","sum");r.dtype==="bool"&&(r=mt(r,"int32"));const s={x:r},a={axis:t,keepDims:e};return _.runKernel(Jl,s,a)}const lt=k({sum_:ad});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(n,t="euclidean",e=null,r=!1){n=w(n,"x","norm");const s=ei(n,t,e);let a=s.shape;if(r){const o=qn(e,n.shape);a=Jn(s.shape,o)}return F(s,a)}function ei(n,t,e=null){if(n.rank===0)return zt(n);if(n.rank!==1&&e===null)return ei(F(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return lt(zt(n),e);if(t===1/0)return Ve(zt(n),e);if(t===-1/0)return Mr(zt(n),e);if(t==="euclidean"||t===2)return Ur(lt(ds(zt(n),at(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Ve(lt(zt(n),e[0]),e[1]-1);if(t===1/0)return Ve(lt(zt(n),e[1]),e[0]);if(t===-1/0)return Mr(lt(zt(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ur(lt(Zn(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Qn=k({norm_:od});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(n,t=null,e=!1){return Qn(n,"euclidean",t,e)}const ud=k({euclideanNorm_:id});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(n){const e={x:w(n,"x","exp")};return _.runKernel(Oc,e)}const ue=k({exp_:cd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ld(n,t=0){const e=w(n,"x","expandDims","string_or_numeric");T(t<=e.rank,()=>"Axis must be <= rank of the tensor");const r={input:e},s={dim:t};return _.runKernel(Dc,r,s)}const re=k({expandDims_:ld});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(n){const e={x:w(n,"x","expm1")};return _.runKernel(Cc,e)}const hd=k({expm1_:pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(n,t){const e=w(n,"x","tile","string_or_numeric");T(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const r={x:e},s={reps:t};return _.runKernel(No,r,s)}const un=k({tile_:fd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(n,t,e,r="float32"){t==null&&(t=n);const s=ie([n,t],r),a=n<=t?n:t;for(let i=0;i<a;++i)s.set(1,i,i);const o=F(s.toTensor(),[n,t]);if(e==null)return o;if(e.length===1)return un(re(o,0),[e[0],1,1]);if(e.length===2)return un(re(re(o,0),0),[e[0],e[1],1,1]);if(e.length===3)return un(re(re(re(o,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const ni=k({eye_:md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gs(n,t,e){const r={shape:n,value:t,dtype:e};return _.runKernel(Pc,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(n){const e={x:w(n,"x","floor","float32")};return _.runKernel(Lc,e)}const ri=k({floor_:dd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(n,t,e=0,r=0){const s=w(n,"x","gather"),a=w(t,"indices","gather","int32"),o={x:s,indices:a},i={axis:e,batchDims:r};return _.runKernel(Vc,o,i)}const si=k({gather_:gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(n,t){let e=w(n,"a","greater","string_or_numeric"),r=w(t,"b","greater","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(Mc,s)}const tr=k({greater_:yd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(n,t){let e=w(n,"a","greaterEqual","string_or_numeric"),r=w(t,"b","greaterEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(Uc,s)}const ai=k({greaterEqual_:bd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(n){const e={x:w(n,"x","isFinite")};return _.runKernel(Wc,e)}const vd=k({isFinite_:wd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(n){const e={x:w(n,"x","isInf")};return _.runKernel(qc,e)}const Td=k({isInf_:Nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd(n){const e={x:w(n,"x","isNaN")};return _.runKernel(Gc,e)}const xd=k({isNaN_:Sd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(n,t=.2){const r={x:w(n,"x","leakyRelu")},s={alpha:t};return _.runKernel(Xc,r,s)}const oi=k({leakyRelu_:kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(n,t){let e=w(n,"a","less","string_or_numeric"),r=w(t,"b","less","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(Yc,s)}const _d=k({less_:Ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(n,t){let e=w(n,"a","lessEqual","string_or_numeric"),r=w(t,"b","lessEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(Jc,s)}const ys=k({lessEqual_:$d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:t,num:e};return _.runKernel(Zc,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(n,t=5,e=1,r=1,s=.5){const a=w(n,"x","localResponseNormalization");T(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),T(cn(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=F(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const c={x:o},l={depthRadius:t,bias:e,alpha:r,beta:s},p=_.runKernel(sl,c,l);return i?F(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Od=k({localResponseNormalization_:Ad});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(n){const e={x:w(n,"x","log","float32")};return _.runKernel(Qc,e)}const pn=k({log_:Dd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(n){const e={x:w(n,"x","log1p")};return _.runKernel(tl,e)}const ii=k({log1p_:Cd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(n){return _.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(n){const e={x:w(n,"x","softplus")};return _.runKernel(Xl,e)}const ui=k({softplus_:Fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(n){const t=w(n,"x","logSigmoid");return ce(r=>({value:oe(ui(oe(r))),gradFunc:o=>W(o,_e(oe(r)))}))(t)}const Bd=k({logSigmoid_:Pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(n,t){let e=w(n,"a","sub"),r=w(t,"b","sub");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(pp,s)}const et=k({sub_:Ld});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(n,t=-1){const e=w(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return ce((s,a)=>{const i=Ve(s,t,!0),c=et(s,i),l=et(mt(c,"float32"),pn(lt(ue(c),t,!0)));return a([l]),{value:l,gradFunc:(h,g)=>{const[y]=g,v=!0,N=ue(y);return et(h,W(lt(h,t,v),N))}}})(e)}const zd=k({logSoftmax_:Rd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vd(n,t=null,e=!1){const r=w(n,"x","logSumExp"),s=qn(t,r.shape),a=Ve(r,s,!0),o=et(r,a),i=ue(o),c=lt(i,s),l=pn(c),p=ct(F(a,l.shape),l);if(e){const h=Jn(p.shape,s);return F(p,h)}return p}const ci=k({logSumExp_:Vd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(n,t){const e=w(n,"a","logicalAnd","bool"),r=w(t,"b","logicalAnd","bool");wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(el,s)}const zn=k({logicalAnd_:jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Md(n){const e={x:w(n,"x","logicalNot","bool")};return _.runKernel(nl,e)}const li=k({logicalNot_:Md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(n,t){const e=w(n,"a","logicalOr","bool"),r=w(t,"b","logicalOr","bool");wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(rl,s)}const pi=k({logicalOr_:Ud});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(n,t){const e=w(n,"a","logicalXor","bool"),r=w(t,"b","logicalXor","bool");return wt(e.shape,r.shape),zn(pi(n,t),li(zn(n,t)))}const Kd=k({logicalXor_:Hd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _n=2147483648;function Wd(n,t,e="left"){const r=w(n,"sortedSequence","searchSorted"),s=w(t,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=F(r,[-1,a]),c=F(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Nt(c.shape)>=_n)throw new Error(`values tensor size must less than ${_n}`);if(i.shape[1]>=_n)throw new Error(`trailing dim_size must less than ${_n} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:c},p={side:e};return _.runKernel(jl,l,p)}const bs=k({searchSorted_:Wd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(n,t){return bs(n,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(n,t,e,r,s){const a=w(n,"x","maxPool"),o=1;let i=a,c=!1;a.rank===3&&(c=!0,i=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),T(Te(e,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),Gt("maxPool",r,s);const l={x:i},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s},h=_.runKernel(il,l,p);return c?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const hi=k({maxPool_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(n,t=[1,1,1],e,r,s,a="NDHWC"){const o=w(n,"x","maxPool3d");let i=o,c=!1;o.rank===4&&(c=!0,i=F(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),T(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),T(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Gt("maxPool3d",r,s);const l={x:i},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:a},h=_.runKernel(ul,l,p);return c?F(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Yd=k({maxPool3d_:Xd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(n,t,e,r,s=!1){const o={x:w(n,"x","maxPoolWithArgmax")},i={filterSize:t,strides:e,pad:r,includeBatchInIndex:s},c=_.runKernel(cl,o,i);return{result:c[0],indexes:c[1]}}const Zd=k({maxPoolWithArgmax_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(n,t){let e=w(n,"a","maximum"),r=w(t,"b","maximum");[e,r]=ft(e,r),e.dtype==="bool"&&(e=mt(e,"int32"),r=mt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(ol,s)}const tg=k({maximum_:Qd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(n,t=null,e=!1){const s={x:w(n,"x","mean")},a={axis:t,keepDims:e};return _.runKernel(ll,s,a)}const Vn=k({mean_:eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function He(n,t="float32"){if(t==="complex64"){const r=He(n,"float32"),s=He(n,"float32");return we(r,s)}const e=as(Nt(n),t);return _.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(n,t="float32"){if(t==="complex64"){const r=Ee(n,"float32"),s=He(n,"float32");return we(r,s)}const e=fo(Nt(n),t);return _.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(n,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=w(n,"x","meshgrid",n instanceof gt?n.dtype:"float32");if(t===void 0)return[r];let s=w(t,"y","meshgrid",t instanceof gt?t.dtype:"float32");const a=Nt(r.shape),o=Nt(s.shape);return e==="xy"?(r=F(r,[1,-1]),s=F(s,[-1,1]),[ot(Ee([o,1],r.dtype),r),ot(s,Ee([1,a],s.dtype))]):(r=F(r,[-1,1]),s=F(s,[1,-1]),[ot(r,Ee([1,o],r.dtype)),ot(Ee([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n,t){let e=w(n,"a","minimum"),r=w(t,"b","minimum");[e,r]=ft(e,r),e.dtype==="bool"&&(e=mt(e,"int32"),r=mt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(hl,s)}const fi=k({minimum_:rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sg(n,t,e){T(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const r=w(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");T(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=e==="reflect"?1:0;for(let i=0;i<r.rank;i++)T(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),T(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:t,mode:e},o={x:r};return _.runKernel(fl,o,a)}const ag=k({mirrorPad_:sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(n,t){let e=w(n,"a","mod"),r=w(t,"b","mod");[e,r]=ft(e,r);const s={a:e,b:r};return _.runKernel(ml,s)}const ig=k({mod_:og});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(n,t=null,e=!1){n=w(n,"x","moments");const r=qn(t,n.shape),s=Vn(n,r,e);let a=s.shape;e||(a=Jn(s.shape,r));const o=Zn(et(mt(n,"float32"),F(s,a))),i=Vn(o,r,e);return{mean:s,variance:i}}const cg=k({moments_:ug});function lg(n,t,e,r){const s=w(t,"data","multiRNNCell"),a=Fn(e,"c","multiRNNCell"),o=Fn(r,"h","multiRNNCell");let i=s;const c=[];for(let h=0;h<n.length;h++){const g=n[h](i,a[h],o[h]);c.push(g[0]),c.push(g[1]),i=g[1]}const l=[],p=[];for(let h=0;h<c.length;h+=2)l.push(c[h]),p.push(c[h+1]);return[l,p]}const pg=k({multiRNNCell_:lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(n,t,e,r=!1){const s=w(n,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);e=e||Math.random();const c={logits:o===1?F(s,[1,-1]):s},l={numSamples:t,seed:e,normalized:r},p=_.runKernel(dl,c,l);return o===1?F(p,[p.size]):p}const fg=k({multinomial_:hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(n,t){let e=w(n,"a","notEqual","string_or_numeric"),r=w(t,"b","notEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return _.runKernel(bl,s)}const mi=k({notEqual_:mg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(n){const e={x:w(n,"x","onesLike")};return _.runKernel(Tl,e)}const gg=k({onesLike_:dg});function yg(n,t){const e=w(n,"v1","outerProduct"),r=w(t,"v2","outerProduct");T(e.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${r.rank}.`);const s=F(e,[-1,1]),a=F(r,[1,-1]);return ot(s,a)}const bg=k({outerProduct_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(n,t,e=0){const r=w(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:e},a={x:r};return _.runKernel(kl,a,s)}const dn=k({pad_:wg});function vg(n,t,e=0){return T(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),dn(n,[t],e)}const Ng=k({pad1d_:vg});function Tg(n,t,e=0){return T(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),dn(n,t,e)}const Sg=k({pad2d_:Tg});function xg(n,t,e=0){return T(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),dn(n,t,e)}const kg=k({pad3d_:xg});function Eg(n,t,e=0){return T(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),dn(n,t,e)}const _g=k({pad4d_:Eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(n,t,e){const r=w(n,"x","spaceToBatchND");T(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),T(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),T(r.shape.reduce((o,i,c)=>c>0&&c<=t.length?o&&(i+e[c-1][0]+e[c-1][1])%t[c-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},a={blockShape:t,paddings:e};return _.runKernel(Zl,s,a)}const di=k({spaceToBatchND_:$g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(n,t,e,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=w(n,"x","maxPool");let c=i,l=!1;i.rank===3&&(l=!0,c=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),T(Te(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const p=$f(c.shape,t,a,s,r),h=[p.dilationHeight,p.dilationWidth];let g;r==="same"?g=Og([p.filterHeight,p.filterWidth],h):g=[[0,0],[0,0]];const y=h[0]===1&&h[1]===1,[v,N]=Ag([p.inHeight,p.inWidth],h,g),x=y?r:"valid",I=y?c:di(c,h,v),C=(e==="avg"?()=>Go(I,t,a,x,o):()=>hi(I,t,a,x,o))(),P=y?C:Xo(C,h,N);return l?F(P,[P.shape[1],P.shape[2],P.shape[3]]):P}function Ag(n,t,e){const r=e.map(p=>p[0]),s=e.map(p=>p[1]),a=n.concat(r,s),o=t.map((p,h)=>(p-a[h]%p)%p),i=s.map((p,h)=>p+o[h]),c=t.map((p,h)=>[r[h],i[h]]),l=t.map((p,h)=>[0,o[h]]);return[c,l]}function Og(n,t){const r=n.map((o,i)=>o+(o-1)*(t[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const Dg=k({pool_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(n,t){const e=w(n,"x","prelu"),r=w(t,"alpha","prelu"),s={x:e,alpha:r};return _.runKernel(_l,s)}const gi=k({prelu_:Cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(n,t=null,e=!1){let r=w(n,"x","prod");r.dtype==="bool"&&(r=mt(r,"int32"));const s={x:r},a={axis:t,keepDims:e};return _.runKernel($l,s,a)}const Pg=k({prod_:Fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(n,t,e){const r=Nt(n);let s=null;if(e==null||e==="float32")s=new Float32Array(r);else if(e==="int32")s=new Int32Array(r);else if(e==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${e}`);for(let a=0;a<r;a++)s[a]=t();return _.makeTensor(s,n,e)}const Lg=k({rand_:Bg});var yi={exports:{}};(function(n){(function(t,e,r){function s(c){var l=this,p=i();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=p(" "),l.s1=p(" "),l.s2=p(" "),l.s0-=p(c),l.s0<0&&(l.s0+=1),l.s1-=p(c),l.s1<0&&(l.s1+=1),l.s2-=p(c),l.s2<0&&(l.s2+=1),p=null}function a(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function o(c,l){var p=new s(c),h=l&&l.state,g=p.next;return g.int32=function(){return p.next()*4294967296|0},g.double=function(){return g()+(g()*2097152|0)*11102230246251565e-32},g.quick=g,h&&(typeof h=="object"&&a(h,p),g.state=function(){return a(p,{})}),g}function i(){var c=4022871197,l=function(p){p=String(p);for(var h=0;h<p.length;h++){c+=p.charCodeAt(h);var g=.02519603282416938*c;c=g>>>0,g-=c,g*=c,c=g>>>0,g-=c,c+=g*4294967296}return(c>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.alea=o})(Zt,n,!1)})(yi);var bi={exports:{}};(function(n){(function(t,e,r){function s(i){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},i===(i|0)?c.x=i:l+=i;for(var p=0;p<l.length+64;p++)c.x^=l.charCodeAt(p)|0,c.next()}function a(i,c){return c.x=i.x,c.y=i.y,c.z=i.z,c.w=i.w,c}function o(i,c){var l=new s(i),p=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var g=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(g+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,p&&(typeof p=="object"&&a(p,l),h.state=function(){return a(l,{})}),h}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xor128=o})(Zt,n,!1)})(bi);var wi={exports:{}};(function(n){(function(t,e,r){function s(i){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,i===(i|0)?c.x=i:l+=i;for(var p=0;p<l.length+64;p++)c.x^=l.charCodeAt(p)|0,p==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function a(i,c){return c.x=i.x,c.y=i.y,c.z=i.z,c.w=i.w,c.v=i.v,c.d=i.d,c}function o(i,c){var l=new s(i),p=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var g=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(g+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,p&&(typeof p=="object"&&a(p,l),h.state=function(){return a(l,{})}),h}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xorwow=o})(Zt,n,!1)})(wi);var vi={exports:{}};(function(n){(function(t,e,r){function s(i){var c=this;c.next=function(){var p=c.x,h=c.i,g,y;return g=p[h],g^=g>>>7,y=g^g<<24,g=p[h+1&7],y^=g^g>>>10,g=p[h+3&7],y^=g^g>>>3,g=p[h+4&7],y^=g^g<<7,g=p[h+7&7],g=g^g<<13,y^=g^g<<9,p[h]=y,c.i=h+1&7,y};function l(p,h){var g,y=[];if(h===(h|0))y[0]=h;else for(h=""+h,g=0;g<h.length;++g)y[g&7]=y[g&7]<<15^h.charCodeAt(g)+y[g+1&7]<<13;for(;y.length<8;)y.push(0);for(g=0;g<8&&y[g]===0;++g);for(g==8?y[7]=-1:y[g],p.x=y,p.i=0,g=256;g>0;--g)p.next()}l(c,i)}function a(i,c){return c.x=i.x.slice(),c.i=i.i,c}function o(i,c){i==null&&(i=+new Date);var l=new s(i),p=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var g=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(g+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,p&&(p.x&&a(p,l),h.state=function(){return a(l,{})}),h}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xorshift7=o})(Zt,n,!1)})(vi);var Ni={exports:{}};(function(n){(function(t,e,r){function s(i){var c=this;c.next=function(){var p=c.w,h=c.X,g=c.i,y,v;return c.w=p=p+1640531527|0,v=h[g+34&127],y=h[g=g+1&127],v^=v<<13,y^=y<<17,v^=v>>>15,y^=y>>>12,v=h[g]=v^y,c.i=g,v+(p^p>>>16)|0};function l(p,h){var g,y,v,N,x,I=[],R=128;for(h===(h|0)?(y=h,h=null):(h=h+"\0",y=0,R=Math.max(R,h.length)),v=0,N=-32;N<R;++N)h&&(y^=h.charCodeAt((N+32)%h.length)),N===0&&(x=y),y^=y<<10,y^=y>>>15,y^=y<<4,y^=y>>>13,N>=0&&(x=x+1640531527|0,g=I[N&127]^=y+x,v=g==0?v+1:0);for(v>=128&&(I[(h&&h.length||0)&127]=-1),v=127,N=4*128;N>0;--N)y=I[v+34&127],g=I[v=v+1&127],y^=y<<13,g^=g<<17,y^=y>>>15,g^=g>>>12,I[v]=y^g;p.w=x,p.X=I,p.i=v}l(c,i)}function a(i,c){return c.i=i.i,c.w=i.w,c.X=i.X.slice(),c}function o(i,c){i==null&&(i=+new Date);var l=new s(i),p=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var g=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(g+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,p&&(p.X&&a(p,l),h.state=function(){return a(l,{})}),h}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.xor4096=o})(Zt,n,!1)})(Ni);var Ti={exports:{}};(function(n){(function(t,e,r){function s(i){var c=this,l="";c.next=function(){var h=c.b,g=c.c,y=c.d,v=c.a;return h=h<<25^h>>>7^g,g=g-y|0,y=y<<24^y>>>8^v,v=v-h|0,c.b=h=h<<20^h>>>12^g,c.c=g=g-y|0,c.d=y<<16^g>>>16^v,c.a=v-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,i===Math.floor(i)?(c.a=i/4294967296|0,c.b=i|0):l+=i;for(var p=0;p<l.length+20;p++)c.b^=l.charCodeAt(p)|0,c.next()}function a(i,c){return c.a=i.a,c.b=i.b,c.c=i.c,c.d=i.d,c}function o(i,c){var l=new s(i),p=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var g=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(g+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,p&&(typeof p=="object"&&a(p,l),h.state=function(){return a(l,{})}),h}e&&e.exports?e.exports=o:r&&r.amd?r(function(){return o}):this.tychei=o})(Zt,n,!1)})(Ti);var Si={exports:{}};(function(n){(function(t,e,r){var s=256,a=6,o=52,i="random",c=r.pow(s,a),l=r.pow(2,o),p=l*2,h=s-1,g;function y(P,D,B){var j=[];D=D==!0?{entropy:!0}:D||{};var M=I(x(D.entropy?[P,C(e)]:P==null?R():P,3),j),V=new v(j),L=function(){for(var U=V.g(a),Y=c,Z=0;U<l;)U=(U+Z)*s,Y*=s,Z=V.g(1);for(;U>=p;)U/=2,Y/=2,Z>>>=1;return(U+Z)/Y};return L.int32=function(){return V.g(4)|0},L.quick=function(){return V.g(4)/4294967296},L.double=L,I(C(V.S),e),(D.pass||B||function(U,Y,Z,Q){return Q&&(Q.S&&N(Q,V),U.state=function(){return N(V,{})}),Z?(r[i]=U,Y):U})(L,M,"global"in D?D.global:this==r,D.state)}function v(P){var D,B=P.length,j=this,M=0,V=j.i=j.j=0,L=j.S=[];for(B||(P=[B++]);M<s;)L[M]=M++;for(M=0;M<s;M++)L[M]=L[V=h&V+P[M%B]+(D=L[M])],L[V]=D;(j.g=function(U){for(var Y,Z=0,Q=j.i,tt=j.j,dt=j.S;U--;)Y=dt[Q=h&Q+1],Z=Z*s+dt[h&(dt[Q]=dt[tt=h&tt+Y])+(dt[tt]=Y)];return j.i=Q,j.j=tt,Z})(s)}function N(P,D){return D.i=P.i,D.j=P.j,D.S=P.S.slice(),D}function x(P,D){var B=[],j=typeof P,M;if(D&&j=="object")for(M in P)try{B.push(x(P[M],D-1))}catch{}return B.length?B:j=="string"?P:P+"\0"}function I(P,D){for(var B=P+"",j,M=0;M<B.length;)D[h&M]=h&(j^=D[h&M]*19)+B.charCodeAt(M++);return C(D)}function R(){try{var P;return g&&(P=g.randomBytes)?P=P(s):(P=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(P)),C(P)}catch{var D=t.navigator,B=D&&D.plugins;return[+new Date,t,B,t.screen,C(e)]}}function C(P){return String.fromCharCode.apply(0,P)}if(I(r.random(),e),n.exports){n.exports=y;try{g=require("crypto")}catch{}}else r["seed"+i]=y})(typeof self!="undefined"?self:Zt,[],Math)})(Si);var Rg=yi.exports,zg=bi.exports,Vg=wi.exports,jg=vi.exports,Mg=Ni.exports,Ug=Ti.exports,Fe=Si.exports;Fe.alea=Rg;Fe.xor128=zg;Fe.xorwow=Vg;Fe.xorshift7=jg;Fe.xor4096=Mg;Fe.tychei=Ug;var ws=Fe;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vs{constructor(t,e,r,s,a){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=ws.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,e,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*s*i,e=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Hg{constructor(t,e,r,s){this.alpha=t,this.beta=1/e,this.dtype=r;const a=s||Math.random();this.randu=ws.alea(a.toString()),this.randn=new vs(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,t=s*s,e=1-.331*t*t,r=.5*t+this.d*(1-o+Math.log(o)),a=this.randu(),a<e||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Kg{constructor(t=0,e=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=ws.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(n,t,e=1,r="float32",s){if(e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new Hg(t,e,r,s),o=ie(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const qg=k({randomGamma_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new vs(t,e,r,!1,s),o=ie(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const xi=k({randomNormal_:Gg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(n,t,e){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return xi(n,0,1,t,e)}const Yg=k({randomStandardNormal_:Xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(n,t=0,e=1,r="float32",s){const a=ie(n,r),o=new Kg(t,e,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const ki=k({randomUniform_:Jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(n,t,e=1,r="float32"){if(e===0)throw new Error("Cannot have a step of zero");const s={start:n,stop:t,step:e,dtype:r};return _.runKernel(Il,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(n){const e={x:w(n,"x","reciprocal")};return _.runKernel(Ol,e)}const Qg=k({reciprocal_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(n){const e={x:w(n,"x","relu")};return _.runKernel(Dl,e)}const er=k({relu_:ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(n){const e={x:w(n,"x","relu6")};return _.runKernel(Bl,e)}const Ei=k({relu6_:ey});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ny(n,t){const r={x:w(n,"x","reverse")},s={dims:t};return _.runKernel(Ll,r,s)}const De=k({reverse_:ny});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ry(n){const t=w(n,"x","reverse");return T(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),De(t,0)}const sy=k({reverse1d_:ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(n,t){const e=w(n,"x","reverse");return T(e.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),De(e,t)}const oy=k({reverse2d_:ay});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(n,t){const e=w(n,"x","reverse");return T(e.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),De(e,t)}const uy=k({reverse3d_:iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(n,t){const e=w(n,"x","reverse");return T(e.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),De(e,t)}const ly=k({reverse4d_:cy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(n){const e={x:w(n,"x","round")};return _.runKernel(Rl,e)}const _i=k({round_:py});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(n){const e={x:w(n,"x","rsqrt","float32")};return _.runKernel(zl,e)}const fy=k({rsqrt_:hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(n){const e={x:w(n,"x","selu")};return _.runKernel(Ul,e)}const dy=k({selu_:my});function gy(n,t,e,r,s,a=[1,1],o="NHWC"){const i=w(n,"x","separableConv2d"),c=w(t,"depthwiseFilter","separableConv2d"),l=w(e,"pointwiseFilter","separableConv2d");let p=i,h=!1;if(i.rank===3&&(h=!0,p=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");T(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),T(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),T(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),T(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const g=c.shape[2],y=c.shape[3];T(l.shape[2]===g*y,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${g*y}, but got ${l.shape[2]}.`);const v=fs(p,c,r,s,o,a),x=Yn(v,l,1,"valid",o);return h?F(x,[x.shape[1],x.shape[2],x.shape[3]]):x}const yy=k({separableConv2d_:gy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function by(n,t){const e=w(n,"x","setdiff1d"),r=w(t,"y","setdiff1d");T(e.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${r.dtype}).`),T(e.rank===1,()=>`x should be 1D tensor, but got x (${e.shape}).`),T(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await e.data(),a=await r.data(),o=new Set(a);let i=0;for(let p=0;p<s.length;p++)o.has(s[p])||i++;const c=new $r([i],e.dtype),l=new $r([i],"int32");for(let p=0,h=0;p<s.length;p++)o.has(s[p])||(c.values[h]=s[p],l.values[h]=p,h++);return[c.toTensor(),l.toTensor()]}const wy=by;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(n){const e={x:w(n,"x","sign")};return _.runKernel(ql,e)}const Ny=k({sign_:vy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ty(n){const e={x:w(n,"x","sin","float32")};return _.runKernel(Kl,e)}const Sy=k({sin_:Ty});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(n){const e={x:w(n,"x","sinh")};return _.runKernel(Wl,e)}const ky=k({sinh_:xy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(n,t,e){const r=w(n,"x","slice1d");return T(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),X(r,[t],[e])}const _y=k({slice1d_:Ey});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $y(n,t,e){const r=w(n,"x","slice2d");return T(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),X(r,t,e)}const Iy=k({slice2d_:$y});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(n,t,e){const r=w(n,"x","slice3d");return T(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),X(r,t,e)}const Oy=k({slice3d_:Ay});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(n,t,e){const r=w(n,"x","slice4d");return T(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),X(r,t,e)}const Cy=k({slice4d_:Dy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(n,t=-1){const e=w(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const r={logits:e},s={dim:t};return _.runKernel(tp,r,s)}const Py=k({softmax_:Fy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function By(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return _.runKernel(Fc,t)}const Ns=k({fft_:By});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ly(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return _.runKernel(Hc,t)}const jn=k({ifft_:Ly});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(n){const t=n.shape[n.shape.length-1],e=n.size/t;let r;if(t<=2){const s=F(n,[e,t]);r=jn(s)}else{const s=[e,2*(t-1)],a=F(ln(n),[e,t]),o=F(Gn(n),[e,t]),i=De(X(a,[0,1],[e,t-2]),1),c=W(De(X(o,[0,1],[e,t-2]),1),at(-1)),l=St([a,i],1),p=St([o,c],1),h=F(we(l,p),[s[0],s[1]]);r=jn(h)}if(r=ln(r),n.rank===3&&n.shape[0]!==0){const s=r,a=n.shape[0];r=F(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const $i=k({irfft_:Ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(n,t,e=0){const s={x:w(n,"x","split")},a={numOrSizeSplits:t,axis:e};return _.runKernel(Ql,s,a)}const fn=k({split_:zy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(n,t){T(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const r=n.size/e;let s;if(t!=null&&t<e){const v=n.shape.map(x=>0),N=n.shape.map(x=>x);N[n.shape.length-1]=t,s=X(n,v,N),e=t}else if(t!=null&&t>e){const v=n.shape.map(N=>N);v[n.shape.length-1]=t-e,s=St([n,He(v)],n.shape.length-1),e=t}else s=n;const a=ms(s),o=F(we(s,a),[r,e]),i=Ns(o),c=Math.floor(e/2)+1,l=ln(i),p=Gn(i),h=fn(l,[c,e-c],l.shape.length-1),g=fn(p,[c,e-c],p.shape.length-1),y=s.shape.slice();return y[s.shape.length-1]=c,F(we(h[0],g[0]),y)}const Ts=k({rfft_:Vy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(n,t){let e=w(n,"a","squaredDifference"),r=w(t,"b","squaredDifference");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r},a={};return _.runKernel(op,s,a)}const Ii=k({squaredDifference_:jy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function My(n,t){const e=w(n,"x","squeeze","string_or_numeric");return F(e,ku(e.shape,t).newShape)}const vt=k({squeeze_:My});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(n,t=0){const e=Fn(n,"tensors","stack","string_or_numeric");T(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&T(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const r=e,s={axis:t};return _.runKernel(xl,r,s)}const le=k({stack_:Uy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hy(n,t=0){const r={x:w(n,"x","step")},s={alpha:t};return _.runKernel(vp,r,s)}const Ai=k({step_:Hy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ky(n,t,e,r,s=0,a=0,o=0,i=0,c=0){const p={x:w(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:c};return _.runKernel(ip,p,h)}const Wy=k({stridedSlice_:Ky});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(n){const e={x:w(n,"x","tan","float32")};return _.runKernel(hp,e)}const Gy=k({tan_:qy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function It(n,t){Ke(n);const e=ve(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ne(n,null,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(n,t,e){if(Ke(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=ve(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ne(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(n,t,e){if(Ke(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=ve(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ne(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(n,t,e){if(Ke(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=ve(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ne(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jy(n,t,e){if(Ke(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=ve(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,Ne(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zy(n,t=1,e=!0){const r=w(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const a={x:r},o={k:t,sorted:e},[i,c]=_.runKernel(mp,a,o);return{values:i,indices:c}}const Qy=k({topk_:Zy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tb(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new vs(t,e,r,!0,s),o=ie(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const eb=k({truncatedNormal_:tb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nb(n,t=0){const e=w(n,"x","unique","string_or_numeric");T(e.rank>0,()=>"The input tensor must be at least 1D");const r={x:e},s={axis:t},[a,o]=_.runKernel(gp,r,s);return{values:a,indices:o}}const rb=k({unique_:nb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sb(n,t,e){const r=w(n,"x","unsortedSegmentSum"),s=w(t,"segmentIds","unsortedSegmentSum","int32");T(cn(e),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:e};return _.runKernel(bp,a,o)}const ab=k({unsortedSegmentSum_:sb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(n,t=0){const e=w(n,"x","unstack","string_or_numeric");T(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const r={value:e},s={axis:t};return _.runKernel(yp,r,s)}const Pe=k({unstack_:ob});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(n,t){return bs(n,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ub(n,t=!0,e,r){return _.makeVariable(n,t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(n,t){const e=[];for(let a=0;a<t.length;a++)t[a]&&e.push(a);const r=ie(n,"int32"),s=ie([e.length,n.length],"int32");for(let a=0;a<e.length;a++){const o=r.indexToLoc(e[a]),i=a*n.length;s.values.set(o,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function lb(n){const t=w(n,"condition","whereAsync","bool"),e=await t.data(),r=cb(t.shape,e);return n!==t&&t.dispose(),r}const Oi=lb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function pb(n,t,e){const r=w(n,"tensor","boolMask"),s=w(t,"mask","boolMask","bool"),a=e==null?0:e,o=s.rank,i=r.shape;T(o>0,()=>"mask cannot be scalar"),Mt(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let N=a;N<a+o;N++)c*=i[N];const l=i.slice(0,a).concat([c],i.slice(a+o)),p=F(r,l),h=F(s,[-1]),g=await Oi(h),y=vt(g,[1]),v=si(p,y,a);return n!==r&&r.dispose(),t!==s&&s.dispose(),y.dispose(),p.dispose(),h.dispose(),g.dispose(),v}const hb=pb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(n,t,e,r,s=!0){const a=w(n,"v","movingAverage"),o=w(t,"x","movingAverage"),i=w(e,"decay","movingAverage");Rp(a,o),T(be(a.shape,o.shape),()=>"Shape mismatch in v and x");const c=at(1),l=et(c,i);let p=W(et(o,a),l);if(s){T(r!=null,()=>"When using zeroDebias: true, step is required.");const h=w(r,"step","movingAverage");p=it(p,et(c,ds(i,h)))}return ct(a,p)}const mb=k({movingAverage_:fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(n,t,e){const r=w(n,"indices","scatterND","int32"),s=w(t,"updates","scatterND");Jh(s,r,e);const a={indices:r,updates:s},o={shape:e};return _.runKernel(Vl,a,o)}const gb=k({scatterND_:db});function yb(n,t,e,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const s=n.rank>0?n.shape[0]:1,a=n.rank>1?n.shape[1]:1;if(e.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${a}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(n,t,e,r=0){const s=w(n,"sparseIndices","sparseToDense","int32"),a=w(t,"sparseValues","sparseToDense","string_or_numeric"),o=w(r,"defaultValue","sparseToDense",a.dtype);yb(s,a,e,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},c={outputShape:e};return _.runKernel(ap,i,c)}const wb=k({sparseToDense_:bb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(n,t){const e=w(t,"indices","gatherND","int32"),s={params:w(n,"x","gatherND","string_or_numeric"),indices:e};return _.runKernel(jc,s)}const Nb=k({gatherND_:vb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(n,t){if(t==null)return n.shape.slice();if(be(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let r=0;r<n.shape.length;r++)t[r]==null&&n.shape[r]!=null?e.push(n.shape[r]):e.push(t[r]);return e}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sb(n,t,e,r){const s=w(n,"x","dropout");if(T(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),T(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof gt?s.clone():s;const a=Tb(s,e),o=1-t,i=it(ri(ct(ki(a,0,1,"float32",r),o)),o);return W(s,i)}const xb=k({dropout_:Sb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Di(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Ss(n,t,e){const r=1-n%2,s=new Float32Array(n);for(let a=0;a<n;++a){const o=2*Math.PI*a/(n+r-1);s[a]=t-e*Math.cos(o)}return It(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function kb(n,t,e=1){const r=w(n,"predictions","inTopK"),s=w(t,"targets","inTopK");T(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),T(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Mt(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];T(e>0&&e<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${e}`);const o=await r.data(),i=await s.data(),[c,l]=[o.length/a,a],p=Eu("bool",c);for(let h=0;h<c;h++){const g=h*l,y=o.subarray(g,g+l),v=[];for(let N=0;N<y.length;N++)v.push({value:y[N],index:N});v.sort((N,x)=>x.value-N.value),p[h]=0;for(let N=0;N<e;N++)if(v[N].index===i[h]){p[h]=1;break}}return n!==r&&r.dispose(),t!==s&&s.dispose(),Qt(p,s.shape,"bool")}const Eb=kb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(n,t,e,r,s,a="NHWC",o){let i=n;n.rank===3&&(i=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=F(t,[1,t.shape[0],t.shape[1],t.shape[2]])),T(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),T(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),T(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const l=a==="NHWC"?i.shape[3]:i.shape[1],p=a==="NHWC"?c.shape[3]:c.shape[1];T(l===e[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${e[2]}.`),T(p===e[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${e[3]}).`),Gt("conv2dDerFilter",s,o);const h={x:i,dy:c},g={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:e};return _.runKernel(lc,h,g)}const $b=k({conv2DBackpropFilter_:_b});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xs(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return W(n,Ai(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function ks(n,t){let e=t;const r=Wh(n.shape,t.shape);return r.length>0&&(e=lt(e,r)),F(e,n.shape)}function Es(n,t,e,r){if(t==="linear")return n;if(t==="relu")return er(n);if(t==="elu")return ti(n);if(t==="relu6")return Ei(n);if(t==="prelu")return gi(n,e);if(t==="leakyrelu")return oi(n,r);if(t==="sigmoid")return _e(n);throw new Error(`Unknown fused activation ${t}.`)}const _s=(n,t)=>!(n>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:p}){if(c=c||"linear",_s(_.state.gradientDepth,c)===!1){T(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let B=Yn(n,t,e,r,s,a,o);return i!=null&&(B=ct(B,i)),Es(B,c,l,p)}const h=w(n,"x","conv2d","float32"),g=w(t,"filter","conv2d","float32");let y=h,v=!1;h.rank===3&&(v=!0,y=F(h,[1,h.shape[0],h.shape[1],h.shape[2]])),T(y.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${y.rank}.`),T(g.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${g.rank}.`),Gt("fused conv2d",r,o);const N=s==="NHWC"?y.shape[3]:y.shape[1];T(g.shape[2]===N,()=>`Error in conv2d: depth of input (${N}) must match input depth for filter ${g.shape[2]}.`),T(Te(e,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);const x=hs(y.shape,g.shape,e,a,r,o);let I;i!=null&&(I=w(i,"bias","fused conv2d"),[I]=ft(I,h),s==="NHWC"?wt(x.outShape,I.shape):(T(I.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${I.shape.length}.`),T(I.shape.length===0||I.shape[0]===x.outChannels||I.shape[0]===1,()=>`Error in fused conv2d: bias shape (${I.shape}) is not compatible with the number of output channels (${x.outChannels})`)));let R;if(l!=null){const B=l.shape;if(T(B.length<=1||B.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${B.length}.`),B.length===1)T(B[0]===1||B[0]===x.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the number of output channels (${x.outChannels}).`);else if(B.length===3)try{wt(B,x.outShape)}catch{const M=`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the output shape of the conv2d (${x.outShape}).`;throw Error(M)}R=w(l,"prelu weights","fused conv2d")}const C=(B,j)=>{T(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[M,V,L,U]=j,Y=xs(B,L,c);T(Rn(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const Z=Zo(V.shape,Y,M,e,r),Q=$b(V,Y,M.shape,e,r),tt=[Z,Q];if(U!=null){const dt=ks(U,Y);tt.push(dt)}return tt},P={x:y,filter:g,bias:I,preluActivationWeights:R},D={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:p};return i==null?ce((j,M,V)=>{let L=_.runKernel(Pa,P,D);return V([M,j,L]),v&&(L=F(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:C}})(y,g):ce((j,M,V,L)=>{let U=_.runKernel(Pa,P,D);return L([M,j,U,V]),v&&(U=F(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:C}})(y,g,I)}const Ab=k({fusedConv2d_:Ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(n,t,e,r,s,a=[1,1],o){let i=n;n.rank===3&&(i=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:c},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:e};return _.runKernel(Tc,l,p)}const Db=k({depthwiseConv2dNativeBackpropFilter_:Ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(n,t,e,r,s,a=[1,1],o){let i=t,c=!1;t.rank===3&&(c=!0,i=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:e},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:n},h=_.runKernel(Sc,l,p);return c?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Fb=k({depthwiseConv2dNativeBackpropInput_:Cb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:p}){if(_s(_.state.gradientDepth,c)===!1){let D=fs(n,t,e,r,s,a,o);return i!=null&&(D=ct(D,i)),Es(D,c,l,p)}const h=w(n,"x","depthwiseConv2d","float32"),g=w(t,"filter","depthwiseConv2d","float32");let y=h,v=!1;h.rank===3&&(v=!0,y=F(h,[1,h.shape[0],h.shape[1],h.shape[2]])),T(y.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${y.rank}.`),T(g.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${g.rank}.`),T(y.shape[3]===g.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${y.shape[3]}) must match the inChannels dimension in filter ${g.shape[2]}.`),a==null&&(a=[1,1]),T(Te(e,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),Gt("fused depthwiseConv2d",r,o);const N=hs(y.shape,g.shape,e,a,r,o,!0);let x;i!=null&&(x=w(i,"bias","fused conv2d"),[x]=ft(x,h),wt(N.outShape,x.shape));let I;l!=null&&(I=w(l,"prelu weights","fused depthwiseConv2d"));const R=(D,B)=>{T(Rn(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[j,M,V,L]=B,U=xs(D,V,c),Y=Fb(M.shape,U,j,e,r,a,o),Z=Db(M,U,j.shape,e,r,a,o);if(L!=null){const Q=ks(x,U);return[Y,Z,Q]}return[Y,Z]},C={x:y,filter:g,bias:x,preluActivationWeights:I},P={strides:e,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:p};return i==null?ce((B,j,M)=>{let V=_.runKernel(Ba,C,P);return M([j,B,V]),v&&(V=F(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:R}})(y,g):ce((B,j,M,V)=>{let L=_.runKernel(Ba,C,P);return V([j,B,L,M]),v&&(L=F(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:R}})(y,g,x)}const Bb=k({fusedDepthwiseConv2d_:Pb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lb({a:n,b:t,transposeA:e=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(_s(_.state.gradientDepth,a)===!1){let U=ot(n,t,e,r);return s!=null&&(U=ct(U,s)),Es(U,a,o,i)}let c=w(n,"a","fused matMul"),l=w(t,"b","fused matMul");[c,l]=ft(c,l);const p=e?c.shape[c.rank-2]:c.shape[c.rank-1],h=r?l.shape[l.rank-1]:l.shape[l.rank-2],g=e?c.shape[c.rank-1]:c.shape[c.rank-2],y=r?l.shape[l.rank-2]:l.shape[l.rank-1],v=c.shape.slice(0,-2),N=l.shape.slice(0,-2),x=Nt(v),I=Nt(N);T(p===h,()=>`Error in fused matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${e} and transposeB=${r} must match.`);const C=wt(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([g,y]),P=e?F(c,[x,p,g]):F(c,[x,g,p]),D=r?F(l,[I,y,h]):F(l,[I,h,y]);let B;s!=null&&(B=w(s,"bias","fused matMul"),[B]=ft(B,c),wt(C,B.shape));let j;o!=null&&(j=w(o,"prelu weights","fused matMul"));const M=(U,Y)=>{const[Z,Q,tt,dt]=Y,xt=xs(F(U,tt.shape),tt,a);let he,ee;if(!e&&!r?(he=ot(xt,Q,!1,!0),ee=ot(Z,xt,!0,!1)):!e&&r?(he=ot(xt,Q,!1,!1),ee=ot(xt,Z,!0,!1)):e&&!r?(he=ot(Q,xt,!1,!0),ee=ot(Z,xt,!1,!1)):(he=ot(Q,xt,!0,!0),ee=ot(xt,Z,!0,!0)),s!=null){const rr=ks(dt,xt);return[he,ee,rr]}else return[he,ee]},V={a:P,b:D,bias:B,preluActivationWeights:j},L={transposeA:e,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?ce((Y,Z,Q)=>{const tt=_.runKernel(Fa,V,L);return Q([Y,Z,tt]),{value:F(tt,C),gradFunc:M}})(P,D):ce((Y,Z,Q,tt)=>{const dt=_.runKernel(Fa,V,L);return tt([Y,Z,dt,Q]),{value:F(dt,C),gradFunc:M}})(P,D,B)}const Rb=k({fusedMatMul_:Lb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var zb=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Ab,depthwiseConv2d:Bb,matMul:Rb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(n){return Ss(n,.54,.46)}const jb=k({hammingWindow_:Vb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(n){return Ss(n,.5,.5)}const Ci=k({hannWindow_:Mb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ub(n,t,e,r=!1,s=0){let a=0;const o=[];for(;a+t<=n.size;)o.push(X(n,a,t)),a+=e;if(r)for(;a<n.size;){const i=a+t-n.size,c=St([X(n,a,t-i),gs([i],s)]);o.push(c),a+=e}return o.length===0?$e([],[0,t]):F(St(o),[o.length,t])}const Fi=k({frame_:Ub});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(n,t,e,r,s=Ci){r==null&&(r=Di(t));const a=Fi(n,t,e),o=W(a,s(t));return Ts(o,r)}const Kb=k({stft_:Hb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(n,t,e,r,s="bilinear",a=0){const o=w(n,"image","cropAndResize"),i=w(t,"boxes","cropAndResize","float32"),c=w(e,"boxInd","cropAndResize","int32"),l=i.shape[0];T(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),T(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),T(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),T(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),T(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),T(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const p={image:o,boxes:i,boxInd:c},h={method:s,extrapolationValue:a,cropSize:r};return _.runKernel(bc,p,h)}const qb=k({cropAndResize_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(n){const t=w(n,"image","flipLeftRight","float32");T(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return _.runKernel(Bc,e,{})}const Xb=k({flipLeftRight_:Gb});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(n){const t=w(n,"image","grayscaleToRGB"),e=t.rank-1,r=t.shape[e];T(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),T(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,e),s[e]=3,un(t,s)}const Jb=k({grayscaleToRGB_:Yb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(n,t,e=0,r=.5){const s=w(n,"image","rotateWithOffset","float32");T(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:t,fillValue:e,center:r};return _.runKernel(Np,a,o)}const Qb=k({rotateWithOffset_:Zb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(n,t,e,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=n.shape[0];return e=Math.min(e,o),T(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),T(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),T(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),T(t.rank===1,()=>"scores must be a 1D tensor"),T(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),T(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(n,"boxes","nonMaxSuppression","float32"),o=w(t,"scores","nonMaxSuppression","float32"),i=We(a,o,e,r,s);e=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c={maxOutputSize:e,iouThreshold:r,scoreThreshold:s};return _.runKernel(wl,{boxes:a,scores:o},c)}const e0=k({nonMaxSuppression_:t0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(n,t,e){const r=r0(n,t,e),s=r<0?-(r+1):r;n.splice(s,0,t)}function r0(n,t,e){return a0(n,t,e||s0)}function s0(n,t){return n>t?1:n<t?-1:0}function a0(n,t,e){let r=0,s=n.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=e(t,n[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0(n,t,e,r,s){return $s(n,t,e,r,s,0)}function i0(n,t,e,r,s,a){return $s(n,t,e,r,s,0,!1,a,!0)}function u0(n,t,e,r,s,a){return $s(n,t,e,r,s,a,!0)}function $s(n,t,e,r,s,a,o=!1,i=!1,c=!1){const l=[];for(let x=0;x<t.length;x++)t[x]>s&&l.push({score:t[x],boxIndex:x,suppressBeginIndex:0});l.sort(Ga);const p=a>0?-.5/a:0,h=[],g=[];for(;h.length<e&&l.length>0;){const x=l.pop(),{score:I,boxIndex:R,suppressBeginIndex:C}=x;if(I<s)break;let P=!1;for(let D=h.length-1;D>=C;--D){const B=c0(n,R,h[D]);if(B>=r){P=!0;break}if(x.score=x.score*l0(r,p,B),x.score<=s)break}x.suppressBeginIndex=h.length,P||(x.score===I?(h.push(R),g.push(x.score)):x.score>s&&n0(l,x,Ga))}const y=h.length,v=e-y;i&&v>0&&(h.push(...new Array(v).fill(0)),g.push(...new Array(v).fill(0)));const N={selectedIndices:h};return o&&(N.selectedScores=g),c&&(N.validOutputs=y),N}function c0(n,t,e){const r=n.subarray(t*4,t*4+4),s=n.subarray(e*4,e*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),p=Math.min(s[1],s[3]),h=Math.max(s[0],s[2]),g=Math.max(s[1],s[3]),y=(i-a)*(c-o),v=(h-l)*(g-p);if(y<=0||v<=0)return 0;const N=Math.max(a,l),x=Math.max(o,p),I=Math.min(i,h),R=Math.min(c,g),C=Math.max(I-N,0)*Math.max(R-x,0);return C/(y+v-C)}function l0(n,t,e){const r=Math.exp(t*e*e);return e<=n?r:0}function Ga(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function p0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(n,"boxes","nonMaxSuppressionAsync"),o=w(t,"scores","nonMaxSuppressionAsync"),i=We(a,o,e,r,s);e=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c=await Promise.all([a.data(),o.data()]),l=c[0],p=c[1],{selectedIndices:h}=o0(l,p,e,r,s);return a!==n&&a.dispose(),o!==t&&o.dispose(),It(h,"int32")}const h0=p0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(n,"boxes","nonMaxSuppression"),i=w(t,"scores","nonMaxSuppression"),c=We(o,i,e,r,s,a);e=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,a=c.softNmsSigma;const l={boxes:o,scores:i},p={maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},h=_.runKernel(Nl,l,p);return{selectedIndices:h[0],selectedScores:h[1]}}const m0=k({nonMaxSuppressionWithScore_:f0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function d0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(n,"boxes","nonMaxSuppressionAsync"),i=w(t,"scores","nonMaxSuppressionAsync"),c=We(o,i,e,r,s,a);e=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,a=c.softNmsSigma;const l=await Promise.all([o.data(),i.data()]),p=l[0],h=l[1],{selectedIndices:g,selectedScores:y}=u0(p,h,e,r,s,a);return o!==n&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:It(g,"int32"),selectedScores:It(y)}}const g0=d0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(n,"boxes","nonMaxSuppression"),i=w(t,"scores","nonMaxSuppression"),c=We(o,i,e,r,s,null),l=c.maxOutputSize,p=c.iouThreshold,h=c.scoreThreshold,g={boxes:o,scores:i},y={maxOutputSize:l,iouThreshold:p,scoreThreshold:h,padToMaxOutputSize:a},v=_.runKernel(vl,g,y);return{selectedIndices:v[0],validOutputs:v[1]}}const b0=k({nonMaxSuppressionPadded_:y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function w0(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(n,"boxes","nonMaxSuppressionAsync"),i=w(t,"scores","nonMaxSuppressionAsync"),c=We(o,i,e,r,s,null),l=c.maxOutputSize,p=c.iouThreshold,h=c.scoreThreshold,[g,y]=await Promise.all([o.data(),i.data()]),{selectedIndices:v,validOutputs:N}=i0(g,y,l,p,h,a);return o!==n&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:It(v,"int32"),validOutputs:at(N,"int32")}}const v0=w0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,t,e=!1,r=!1){const s=w(n,"images","resizeBilinear");T(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),T(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),T(r===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=F(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},c={alignCorners:e,halfPixelCenters:r,size:t},l=_.runKernel(Pl,i,c);return o?F(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const T0=k({resizeBilinear_:N0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S0(n,t,e=!1,r=!1){const s=w(n,"images","resizeNearestNeighbor");T(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),T(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),T(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),T(r===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=F(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},c={alignCorners:e,halfPixelCenters:r,size:t},l=_.runKernel(Fl,i,c);return o?F(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const x0=k({resizeNearestNeighbor_:S0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k0(n,t="binary",e=!1,r=.5){const s=w(n,"image","threshold"),a=.2989,o=.587,i=.114,c=s.shape[0]*s.shape[1];let l=W(It([r]),255),p,h,g,y;if(T(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),T(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),T(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),T(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[p,h,g]=fn(s,[1,1,1],-1);const x=W(p,a),I=W(h,o),R=W(g,i);y=ct(ct(x,I),R)}else y=n;if(t==="otsu"){const x=Yo(mt(_i(y),"int32"),Qt([]),256);l=E0(x,c)}const v=e?ys(y,l):tr(y,l);return mt(W(v,255),"int32")}function E0(n,t){let e=It([-1]),r=It([0]),s=It([0]),a,o,i,c,l,p;for(let h=0;h<n.size-1;h++){a=X(n,0,h+1),o=X(n,h+1),l=it(lt(a),t),p=it(lt(o),t);const g=lt(W(a,hn(0,a.size)));i=it(g,lt(a));const y=gs(o.shape,a.size),v=ct(hn(0,o.size),y),N=W(o,v);c=it(lt(N),lt(o));const x=et(i,c),I=et(i,c),R=W(l,p);s=W(W(R,x),I);const C=tr(s,r);r=Ue(C,s,r),e=Ue(C,It([h]),e)}return e}const _0=k({threshold_:k0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(n,t,e="nearest",r="constant",s=0,a){const o=w(n,"image","transform","float32"),i=w(t,"transforms","transform","float32");T(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),T(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),T(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const c={image:o,transforms:i},l={interpolation:e,fillMode:r,fillValue:s,outputShape:a};return _.runKernel(dp,c,l)}const I0=k({transform_:$0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A0(n,t,e){T(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),T(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const r=w(n,"a","bandPart");T(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);if(!(t<=a))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(e<=o))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),e<0&&(e=o);const i=F(hn(0,a,1,"int32"),[-1,1]),c=hn(0,o,1,"int32"),l=et(i,c),p=zn(ys(l,at(+t,"int32")),ai(l,at(-e,"int32"))),h=He([a,o],r.dtype);return F(le(Pe(F(r,[-1,a,o])).map(g=>Ue(p,g,h))),s)}const O0=k({bandPart_:A0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D0(n){let t;if(Array.isArray(n)){t=!1,T(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=n[0].shape[0];for(let a=1;a<n.length;++a)T(n[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[a].shape[0]} vs. ${s})`)}else t=!0,n=fn(n,n.shape[0],0).map(s=>vt(s,[0]));T(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],r=n;for(let s=0;s<n.length;++s)e.push(_.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=W(lt(W(e[o],a)),e[o]);a=et(a,i)}return it(a,Qn(a,"euclidean"))}));return t?le(e,0):e}const C0=k({gramSchmidt_:D0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F0(n,t=!1){if(T(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Xa(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((c,l)=>c*l),r=Pe(F(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],a=[];r.forEach(c=>{const[l,p]=Xa(c,t);s.push(l),a.push(p)});const o=F(le(s,0),n.shape),i=F(le(a,0),n.shape);return[o,i]}}function Xa(n,t=!1){return _.tidy(()=>{T(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],r=n.shape[1];let s=ni(e),a=ye(n);const o=$e([[1]],[1,1]);let i=ye(o);const c=e>=r?r:e;for(let l=0;l<c;++l){const p=a,h=i,g=s;[i,a,s]=_.tidy(()=>{const y=X(a,[l,l],[e-l,1]),v=Qn(y),N=X(a,[l,l],[1,1]),x=Ue(tr(N,0),$e([[-1]]),$e([[1]])),I=et(N,W(x,v)),R=it(y,I);R.shape[0]===1?i=ye(o):i=St([o,X(R,[1,0],[R.shape[0]-1,R.shape[1]])],0);const C=oe(it(ot(x,I),v)),P=X(a,[l,0],[e-l,r]),D=W(C,i),B=zr(i);if(l===0)a=et(P,ot(D,ot(B,P)));else{const V=et(P,ot(D,ot(B,P)));a=St([X(a,[0,0],[l,r]),V],0)}const j=zr(D),M=X(s,[0,l],[e,s.shape[1]-l]);if(l===0)s=et(M,ot(ot(M,i),j));else{const V=et(M,ot(ot(M,i),j));s=St([X(s,[0,0],[e,l]),V],1)}return[i,a,s]}),Yt([p,h,g])}return!t&&e>r&&(s=X(s,[0,0],[e,r]),a=X(a,[0,0],[r,r])),[s,a]})}const P0=k({qr_:F0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Dt;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Dt||(Dt={}));function B0(n,t,e=Dt.SUM_BY_NONZERO_WEIGHTS){const r=w(n,"losses","computeWeightedLoss");let s=null;t!=null&&(s=w(t,"weights","computeWeightedLoss"));const a=s==null?r:W(r,s);if(e===Dt.NONE)return a;if(e===Dt.SUM)return lt(a);if(e===Dt.MEAN){if(s==null)return Vn(a);{const o=r.size/s.size,i=it(lt(a),lt(s));return o>1?it(i,at(o)):i}}if(e===Dt.SUM_BY_NONZERO_WEIGHTS){if(s==null)return it(lt(a),at(r.size));{const o=W(s,Ee(r.shape)),i=mt(lt(mi(o,at(0))),"float32");return it(lt(a),i)}}throw Error(`Unknown reduction: ${e}`)}const pe=k({computeWeightedLoss_:B0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L0(n,t,e,r=Dt.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","absoluteDifference"),a=w(t,"predictions","absoluteDifference");let o=null;e!=null&&(o=w(e,"weights","absoluteDifference")),Mt(s.shape,a.shape,"Error in absoluteDifference: ");const i=zt(et(s,a));return pe(i,o,r)}const R0=k({absoluteDifference_:L0});function z0(n,t,e,r,s=Dt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","cosineDistance"),o=w(t,"predictions","cosineDistance");let i=null;r!=null&&(i=w(r,"weights","cosineDistance")),Mt(a.shape,o.shape,"Error in cosineDistance: ");const c=at(1),l=et(c,lt(W(a,o),e,!0));return pe(l,i,s)}const V0=k({cosineDistance_:z0});function j0(n,t,e,r=Dt.SUM_BY_NONZERO_WEIGHTS){let s=w(n,"labels","hingeLoss");const a=w(t,"predictions","hingeLoss");let o=null;e!=null&&(o=w(e,"weights","hingeLoss")),Mt(s.shape,a.shape,"Error in hingeLoss: ");const i=at(1);s=et(W(at(2),s),i);const c=er(et(i,W(s,a)));return pe(c,o,r)}const M0=k({hingeLoss_:j0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(n,t,e,r=1,s=Dt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","huberLoss"),o=w(t,"predictions","huberLoss");let i=null;e!=null&&(i=w(e,"weights","huberLoss")),Mt(a.shape,o.shape,"Error in huberLoss: ");const c=at(r),l=zt(et(o,a)),p=fi(l,c),h=et(l,p),g=ct(W(at(.5),Zn(p)),W(c,h));return pe(g,i,s)}const H0=k({huberLoss_:U0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K0(n,t,e,r=1e-7,s=Dt.SUM_BY_NONZERO_WEIGHTS){const a=w(n,"labels","logLoss"),o=w(t,"predictions","logLoss");let i=null;e!=null&&(i=w(e,"weights","logLoss")),Mt(a.shape,o.shape,"Error in logLoss: ");const c=at(1),l=at(r),p=oe(W(a,pn(ct(o,l)))),h=W(et(c,a),pn(ct(et(c,o),l))),g=et(p,h);return pe(g,i,s)}const W0=k({logLoss_:K0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n,t,e,r=Dt.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","meanSquaredError"),a=w(t,"predictions","meanSquaredError");let o=null;e!=null&&(o=w(e,"weights","meanSquaredError")),Mt(s.shape,a.shape,"Error in meanSquaredError: ");const i=Ii(s,a);return pe(i,o,r)}const G0=k({meanSquaredError_:q0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X0(n,t){const e=w(n,"labels","sigmoidCrossEntropyWithLogits"),r=w(t,"logits","sigmoidCrossEntropyWithLogits");Mt(e.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=er(r),a=W(r,e),o=ii(ue(oe(zt(r))));return ct(et(s,a),o)}function Y0(n,t,e,r=0,s=Dt.SUM_BY_NONZERO_WEIGHTS){let a=w(n,"multiClassLabels","sigmoidCrossEntropy");const o=w(t,"logits","sigmoidCrossEntropy");let i=null;if(e!=null&&(i=w(e,"weights","sigmoidCrossEntropy")),Mt(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=at(r),p=at(1),h=at(.5);a=ct(W(a,et(p,l)),W(h,l))}const c=X0(a,o);return pe(c,i,s)}const J0=k({sigmoidCrossEntropy_:Y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z0(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return ce((s,a,o)=>{const c=ci(a,[e],!0),l=et(mt(a,"float32"),c);o([s,l]);const p=oe(W(l,s));return{value:lt(p,[e]),gradFunc:(y,v)=>{const[N,x]=v,I=Jn(y.shape,[e]);return[W(F(y,I),et(mt(N,"float32"),ue(x))),W(F(y,I),et(ue(x),mt(N,"float32")))]}}})(n,t)}function Q0(n,t,e,r=0,s=Dt.SUM_BY_NONZERO_WEIGHTS){let a=w(n,"onehotLabels","softmaxCrossEntropy");const o=w(t,"logits","softmaxCrossEntropy");let i=null;if(e!=null&&(i=w(e,"weights","softmaxCrossEntropy")),Mt(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const l=at(r),p=at(1),h=at(a.shape[1]);a=ct(W(a,et(p,l)),it(l,h))}const c=Z0(a,o);return pe(c,i,s)}const tw=k({softmaxCrossEntropy_:Q0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(n,t,e,r){const s=w(n,"indices","sparseFillEmptyRows","int32"),a=w(t,"values","sparseFillEmptyRows"),o=w(e,"denseShape","sparseFillEmptyRows","int32"),i=w(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:s,values:a,denseShape:o,defaultValue:i},l=_.runKernel(ep,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const nw=k({sparseFillEmptyRows_:ew});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(n,t,e){const r=w(n,"inputIndices","sparseReshape","int32"),s=w(t,"inputShape","sparseReshape","int32"),a=w(e,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=_.runKernel(np,o);return{outputIndices:i[0],outputShape:i[1]}}const sw=k({sparseReshape_:rw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(n,t,e){const r=w(n,"data","sparseSegmentMean"),s=w(t,"indices","sparseSegmentMean","int32"),a=w(e,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return _.runKernel(rp,o)}const ow=k({sparseSegmentMean_:aw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(n,t,e){const r=w(n,"data","sparseSegmentSum"),s=w(t,"indices","sparseSegmentSum","int32"),a=w(e,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return _.runKernel(sp,o)}const uw=k({sparseSegmentSum_:iw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cw(n,t,e,r,s,a,o,i){const c=w(n,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=w(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const p={separator:e,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},h={data:c,dataSplits:l},g=_.runKernel(up,h,p);return{nGrams:g[0],nGramsSplits:g[1]}}const lw=k({stringNGrams_:cw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(n,t,e=!0){const r=w(n,"input","stringSplit","string"),s=w(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:e},o={input:r,delimiter:s},i=_.runKernel(cp,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const hw=k({stringSplit_:pw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(n,t){const e=w(n,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:e};return _.runKernel(lp,s,r)}const mw=k({stringToHashBucketFast_:fw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dw={fft:Ns,ifft:jn,rfft:Ts,irfft:$i},gw={hammingWindow:jb,hannWindow:Ci,frame:Fi,stft:Kb},nr={flipLeftRight:Xb,grayscaleToRGB:Jb,resizeNearestNeighbor:x0,resizeBilinear:T0,rotateWithOffset:Qb,cropAndResize:qb,nonMaxSuppression:e0,nonMaxSuppressionAsync:h0,nonMaxSuppressionWithScore:m0,nonMaxSuppressionWithScoreAsync:g0,nonMaxSuppressionPadded:b0,nonMaxSuppressionPaddedAsync:v0,threshold:_0,transform:I0},yw={bandPart:O0,gramSchmidt:C0,qr:P0},bw={absoluteDifference:R0,computeWeightedLoss:pe,cosineDistance:V0,hingeLoss:M0,huberLoss:H0,logLoss:W0,meanSquaredError:G0,sigmoidCrossEntropy:J0,softmaxCrossEntropy:tw},ww={sparseFillEmptyRows:nw,sparseReshape:sw,sparseSegmentMean:ow,sparseSegmentSum:uw},vw={stringNGrams:lw,stringSplit:hw,stringToHashBucketFast:mw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nw=st();Nw.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Rt;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(Rt||(Rt={}));var Ya;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Ya||(Ya={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tw={};function Pi(n){return Tw[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m(n,t,e,r,s){const a=t.inputParams[n];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,c=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd;if(a.type==="tensor")return $t(t.inputNames[a.inputIndexStart],e,r,s);if(a.type==="tensors")return t.inputNames.slice(i,c).map(g=>$t(g,e,r,s));const l=$t(t.inputNames.slice(i)[0],e,r,s),p=l.dataSync();return a.type==="number"?p[0]:Er(l.shape,p)}const o=t.attrParams[n];return o&&o.value}function $t(n,t,e,r){const[s,a]=Ft(n);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=e.currentContextIds.find(i=>!!t[Mn(s,i)]);return o!==void 0?t[Mn(s,o)][a]:void 0}function Sw(n,t,e){return t[Mn(n,e.currentContextId)]}function Jt(n,t){const[e,r,s]=Ft(n);return[Mn(e,t&&t.currentContextId),r,s]}function Mn(n,t){return t?`${n}-${t}`:n}function Ft(n){const t=n.split(":");if(t.length===1)return[n,0,void 0];const e=t[0],r=t.length===3?t[1]:void 0,s=Number(t[t.length-1]);return[e,s,r]}function Dn(n,t,e){let r=m("pad",n,t,e);if(r==="explicit"){r=m("explicitPaddings",n,t,e);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function se(n){return n.kept?n:ye(n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xw=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var kw=Object.freeze(Object.defineProperty({__proto__:null,json:xw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ew=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var _w=Object.freeze(Object.defineProperty({__proto__:null,json:Ew},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $w=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var Iw=Object.freeze(Object.defineProperty({__proto__:null,json:$w},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Aw=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var Ow=Object.freeze(Object.defineProperty({__proto__:null,json:Aw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dw=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var Cw=Object.freeze(Object.defineProperty({__proto__:null,json:Dw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fw=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Pw=Object.freeze(Object.defineProperty({__proto__:null,json:Fw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bw=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var Lw=Object.freeze(Object.defineProperty({__proto__:null,json:Bw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rw=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var zw=Object.freeze(Object.defineProperty({__proto__:null,json:Rw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vw=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var jw=Object.freeze(Object.defineProperty({__proto__:null,json:Vw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mw=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var Uw=Object.freeze(Object.defineProperty({__proto__:null,json:Mw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hw=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Kw=Object.freeze(Object.defineProperty({__proto__:null,json:Hw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ww=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var qw=Object.freeze(Object.defineProperty({__proto__:null,json:Ww},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gw=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var Xw=Object.freeze(Object.defineProperty({__proto__:null,json:Gw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yw=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var Jw=Object.freeze(Object.defineProperty({__proto__:null,json:Yw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zw=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var Qw=Object.freeze(Object.defineProperty({__proto__:null,json:Zw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t1=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var e1=Object.freeze(Object.defineProperty({__proto__:null,json:t1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n1=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var r1=Object.freeze(Object.defineProperty({__proto__:null,json:n1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s1=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var a1=Object.freeze(Object.defineProperty({__proto__:null,json:s1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o1=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var i1=Object.freeze(Object.defineProperty({__proto__:null,json:o1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ja{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[kw,_w,Iw,Ow,Cw,Pw,Lw,zw,jw,Uw,Kw,qw,Xw,Jw,Qw,e1,r1,a1,i1],e=[].concat(...t.map(r=>r.json));this.opMappers=e.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,e={}){const r=t.node,s=[],a=[],o=[],i=r.reduce((N,x)=>(N[x.name]=this.mapNode(x),x.op.startsWith("Placeholder")?s.push(N[x.name]):x.op==="Const"?a.push(N[x.name]):(x.input==null||x.input.length===0)&&o.push(N[x.name]),N),{});let c=[];const l=[];let p={},h={};e!=null&&(p=this.mapSignatureEntries(e.inputs),h=this.mapSignatureEntries(e.outputs));const g=Object.keys(i);g.forEach(N=>{const x=i[N];x.inputNames.forEach((I,R)=>{const[C,,P]=Jt(I),D=i[C];if(D.outputs!=null){const B=D.outputs.indexOf(P);if(B!==-1){const j=`${C}:${B}`;x.inputNames[R]=j}}x.inputs.push(D),D.children.push(x)})}),Object.keys(h).length===0?g.forEach(N=>{const x=i[N];x.children.length===0&&l.push(x)}):Object.keys(h).forEach(N=>{const[x]=Jt(N),I=i[x];I!=null&&(I.signatureKey=h[N],l.push(I))}),Object.keys(p).length>0?Object.keys(p).forEach(N=>{const[x]=Jt(N),I=i[x];I&&(I.signatureKey=p[N],c.push(I))}):c=s;let y={};t.library!=null&&t.library.function!=null&&(y=t.library.function.reduce((N,x)=>(N[x.signature.name]=this.mapFunction(x),N),{}));const v={nodes:i,inputs:c,outputs:l,weights:a,placeholders:s,signature:e,functions:y};return o.length>0&&(v.initNodes=o),v}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,r)=>(e[t[r].name]=r,e),{})}mapNode(t){const e=Pi(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(r.inputParams=e.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),e.attrs!=null&&(r.attrParams=e.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=Hr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Hr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=Jr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Jr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Wr(t.attr,a.tfName,a.defaultValue||0),i===void 0&&!!a.tfDeprecatedName&&(i=Wr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=Yr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Yr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Kr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Kr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Qr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Qr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Xr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Xr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Zr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Zr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=qr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=qr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Gr(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Gr(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=Za(t.attr,a.tfName,a.defaultValue),i===void 0&&!!a.tfDeprecatedName&&(i=Za(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${t.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(t){const e=t.nodeDef,r=[],s=[];let a={};e!=null&&(a=e.reduce((h,g)=>(h[g.name]=this.mapNode(g),g.op==="Const"&&s.push(h[g.name]),h),{}));const o=[],i=[];t.signature.inputArg.forEach(h=>{const[g]=Jt(h.name),y={name:g,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Is(h.type),type:"dtype"}},children:[]};y.signatureKey=h.name,o.push(y),a[g]=y}),Object.keys(a).forEach(h=>{const g=a[h];g.inputNames.forEach((y,v)=>{const[N,,x]=Jt(y),I=a[N];if(I.outputs!=null){const R=I.outputs.indexOf(x);if(R!==-1){const C=`${N}:${R}`;g.inputNames[v]=C}}g.inputs.push(I),I.children.push(g)})});const l=t.ret;t.signature.outputArg.forEach(h=>{const[g,y]=Jt(l[h.name]),v=a[g];v!=null&&(v.defaultOutput=y,i.push(v))});const p=this.mapArgsToSignature(t);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:p}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r),e),{}),outputs:t.signature.outputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r,t.ret),e),{})}}mapArgToTensorInfo(t,e){let r=t.name;return e!=null&&(r=e[r]),{name:r,dtype:t.type}}}function u1(n){if(st().global,typeof globalThis.atob!="undefined")return globalThis.atob(n);if(typeof Buffer!="undefined")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Bi(n,t){const e=Array.isArray(n)?String.fromCharCode.apply(null,n):u1(n);return t?e:e.toLowerCase()}function Hr(n,t,e,r=!1){const s=n[t];return s!=null?Bi(s.s,r):e}function Kr(n,t,e){const r=n[t];return r?r.b:e}function Wr(n,t,e){const r=n[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:e;return typeof s=="number"?s:parseInt(s,10)}function Is(n){switch(typeof n=="string"&&(n=Rt[n]),n){case Rt.DT_FLOAT:case Rt.DT_HALF:return"float32";case Rt.DT_INT32:case Rt.DT_INT64:case Rt.DT_INT8:case Rt.DT_UINT8:return"int32";case Rt.DT_BOOL:return"bool";case Rt.DT_DOUBLE:return"float32";case Rt.DT_STRING:return"string";default:return null}}function Za(n,t,e){const r=n[t];return r&&r.func?r.func.name:e}function qr(n,t,e){const r=n[t];return r&&r.type?Is(r.type):e}function Gr(n,t,e){const r=n[t];return r&&r.list&&r.list.type?r.list.type.map(s=>Is(s)):e}function Li(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Xr(n,t,e){const r=n[t];return r&&r.shape?Li(r.shape):e}function Yr(n,t,e){const r=n[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):e}function Jr(n,t,e,r=!1){const s=n[t];return s&&s.list&&s.list.s?s.list.s.map(a=>Bi(a,r)):e}function Zr(n,t,e){const r=n[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Li(s)):e}function Qr(n,t,e){const r=n[t];return r&&r.list&&r.list.b?r.list.b:e}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class c1{constructor(t,e,r){this.node=t,this.tensorMap=e,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(t){return $t(t,this.tensorMap,this.context)}getAttr(t,e){const r=this.node.rawAttrs[t];if(r.tensor!=null)return $t(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Wr(this.node.rawAttrs,t,e);if(r.s!=null)return Hr(this.node.rawAttrs,t,e);if(r.b!=null)return Kr(this.node.rawAttrs,t,e);if(r.shape!=null)return Xr(this.node.rawAttrs,t,e);if(r.type!=null)return qr(this.node.rawAttrs,t,e);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Yr(this.node.rawAttrs,t,e);if(r.list.s!=null)return Jr(this.node.rawAttrs,t,e);if(r.list.shape!=null)return Zr(this.node.rawAttrs,t,e);if(r.list.b!=null)return Qr(this.node.rawAttrs,t,e);if(r.list.type!=null)return Gr(this.node.rawAttrs,t,e)}return e}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Et=Object.freeze(Object.defineProperty({__proto__:null,abs:zt,acos:sf,acosh:of,add:ct,addN:cf,all:pf,any:ff,argMax:df,argMin:yf,asin:wf,asinh:Nf,atan:Sf,atan2:kf,atanh:_f,avgPool:Go,avgPool3d:Pf,basicLSTMCell:jf,batchToSpaceND:Xo,batchNorm:Xn,batchNorm2d:Wf,batchNorm3d:Gf,batchNorm4d:Yf,bincount:Yo,broadcastArgs:Qf,broadcastTo:On,buffer:ie,cast:mt,ceil:nm,clipByValue:Jo,clone:ye,complex:we,concat:St,concat1d:am,concat2d:im,concat3d:cm,concat4d:pm,conv1d:mm,conv2d:Yn,conv2dTranspose:ym,conv3d:wm,conv3dTranspose:Sm,cos:km,cosh:_m,cumprod:Im,cumsum:Om,denseBincount:Cm,depthToSpace:Pm,depthwiseConv2d:fs,diag:Rm,dilation2d:Vm,div:it,divNoNan:Km,dot:qm,einsum:Xm,elu:ti,equal:Qo,erf:Zm,euclideanNorm:ud,exp:ue,expandDims:re,expm1:hd,eye:ni,fill:gs,floor:ri,floorDiv:qo,gather:si,greater:tr,greaterEqual:ai,imag:Gn,isFinite:vd,isInf:Td,isNaN:xd,leakyRelu:oi,less:_d,lessEqual:ys,linspace:Id,localResponseNormalization:Od,log:pn,log1p:ii,logSigmoid:Bd,logSoftmax:zd,logSumExp:ci,logicalAnd:zn,logicalNot:li,logicalOr:pi,logicalXor:Kd,lowerBound:qd,matMul:ot,max:Ve,maxPool:hi,maxPool3d:Yd,maxPoolWithArgmax:Zd,maximum:tg,mean:Vn,meshgrid:ng,min:Mr,minimum:fi,mirrorPad:ag,mod:ig,moments:cg,mul:W,multiRNNCell:pg,multinomial:fg,neg:oe,notEqual:mi,oneHot:jh,ones:Ee,onesLike:gg,outerProduct:bg,pad:dn,pad1d:Ng,pad2d:Sg,pad3d:kg,pad4d:_g,pool:Dg,pow:ds,prelu:gi,print:zo,prod:Pg,rand:Lg,randomGamma:qg,randomNormal:xi,randomStandardNormal:Yg,randomUniform:ki,range:hn,real:ln,reciprocal:Qg,relu:er,relu6:Ei,reshape:F,reverse:De,reverse1d:sy,reverse2d:oy,reverse3d:uy,reverse4d:ly,round:_i,rsqrt:fy,scalar:at,selu:dy,separableConv2d:yy,setdiff1dAsync:wy,sigmoid:_e,sign:Ny,sin:Sy,sinh:ky,slice:X,slice1d:_y,slice2d:Iy,slice3d:Oy,slice4d:Cy,softmax:Py,softplus:ui,spaceToBatchND:di,fft:Ns,ifft:jn,irfft:$i,rfft:Ts,split:fn,sqrt:Ur,square:Zn,squaredDifference:Ii,squeeze:vt,stack:le,step:Ai,stridedSlice:Wy,sub:et,sum:lt,tan:Gy,tanh:jr,tensor:Qt,tensor1d:It,tensor2d:$e,tensor3d:Wo,tensor4d:Xy,tensor5d:Yy,tensor6d:Jy,tile:un,topk:Qy,truncatedNormal:eb,unique:rb,unsortedSegmentSum:ab,unstack:Pe,upperBound:ib,variable:ub,where:Ue,whereAsync:Oi,zeros:He,zerosLike:ms,op:k,OP_SCOPE_SUFFIX:Io,booleanMaskAsync:hb,transpose:zr,norm:Qn,movingAverage:mb,scatterND:gb,searchSorted:bs,sparseToDense:wb,gatherND:Nb,dropout:xb,enclosingPowerOfTwo:Di,cosineWindow:Ss,inTopKAsync:Eb,image:nr,linalg:yw,losses:bw,spectral:dw,fused:zb,signal:gw,sparse:ww,string:vw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l1=(n,t,e,r=Et)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",n,t,e),m("b",n,t,e))];case"AddN":return[r.addN(m("tensors",n,t,e))];case"FloorMod":case"Mod":return[r.mod(m("a",n,t,e),m("b",n,t,e))];case"Mul":return[r.mul(m("a",n,t,e),m("b",n,t,e))];case"RealDiv":case"Div":return[r.div(m("a",n,t,e),m("b",n,t,e))];case"DivNoNan":return[r.divNoNan(m("a",n,t,e),m("b",n,t,e))];case"FloorDiv":return[r.floorDiv(m("a",n,t,e),m("b",n,t,e))];case"Sub":return[r.sub(m("a",n,t,e),m("b",n,t,e))];case"Minimum":return[r.minimum(m("a",n,t,e),m("b",n,t,e))];case"Maximum":return[r.maximum(m("a",n,t,e),m("b",n,t,e))];case"Pow":return[r.pow(m("a",n,t,e),m("b",n,t,e))];case"SquaredDifference":return[r.squaredDifference(m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p1=(n,t,e,r=Et)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",n,t,e))];case"Acos":return[r.acos(m("x",n,t,e))];case"Acosh":return[r.acosh(m("x",n,t,e))];case"Asin":return[r.asin(m("x",n,t,e))];case"Asinh":return[r.asinh(m("x",n,t,e))];case"Atan":return[r.atan(m("x",n,t,e))];case"Atan2":return[r.atan2(m("x",n,t,e),m("y",n,t,e))];case"Atanh":return[r.atanh(m("x",n,t,e))];case"Ceil":return[r.ceil(m("x",n,t,e))];case"Complex":return[r.complex(m("real",n,t,e),m("imag",n,t,e))];case"Cos":return[r.cos(m("x",n,t,e))];case"Cosh":return[r.cosh(m("x",n,t,e))];case"Elu":return[r.elu(m("x",n,t,e))];case"Erf":return[r.erf(m("x",n,t,e))];case"Exp":return[r.exp(m("x",n,t,e))];case"Expm1":return[r.expm1(m("x",n,t,e))];case"Floor":return[r.floor(m("x",n,t,e))];case"Log":return[r.log(m("x",n,t,e))];case"Log1p":return[r.log1p(m("x",n,t,e))];case"Imag":return[r.imag(m("x",n,t,e))];case"Neg":return[r.neg(m("x",n,t,e))];case"Reciprocal":return[r.reciprocal(m("x",n,t,e))];case"Real":return[r.real(m("x",n,t,e))];case"Relu":return[r.relu(m("x",n,t,e))];case"Round":return[r.round(m("x",n,t,e))];case"Selu":return[r.selu(m("x",n,t,e))];case"Sigmoid":return[r.sigmoid(m("x",n,t,e))];case"Sin":return[r.sin(m("x",n,t,e))];case"Sign":return[r.sign(m("x",n,t,e))];case"Sinh":return[r.sinh(m("x",n,t,e))];case"Softplus":return[r.softplus(m("x",n,t,e))];case"Sqrt":return[r.sqrt(m("x",n,t,e))];case"Square":return[r.square(m("x",n,t,e))];case"Tanh":return[r.tanh(m("x",n,t,e))];case"Tan":return[r.tan(m("x",n,t,e))];case"ClipByValue":return[r.clipByValue(m("x",n,t,e),m("clipValueMin",n,t,e),m("clipValueMax",n,t,e))];case"Relu6":return[r.relu6(m("x",n,t,e))];case"Rsqrt":return[r.rsqrt($t(n.inputNames[0],t,e))];case"Prod":return[r.prod(m("x",n,t,e),m("axes",n,t,e))];case"LeakyRelu":return[r.leakyRelu(m("x",n,t,e),m("alpha",n,t,e))];case"Prelu":return[r.prelu(m("x",n,t,e),m("alpha",n,t,e))];case"IsNan":return[r.isNaN($t(n.inputNames[0],t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vt(n,t,e=""){if(!(typeof n=="number"||typeof t=="number")){T(n.length===t.length,()=>e+` Shapes ${n} and ${t} must match`);for(let r=0;r<n.length;r++){const s=n[r],a=t[r];T(s<0||a<0||s===a,()=>e+` Shapes ${n} and ${t} must match`)}}}function Qa(n){return!(typeof n=="number"||n.some(t=>t<0))}function sn(n,t,e){let r=ts(n,e);const s=!Qa(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(a=>{r=ts(a.shape,r)}),!Qa(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function ts(n,t){if(typeof n=="number")return t;if(typeof t=="number")return n;if(n.length!==t.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${t}`);const e=[];for(let r=0;r<n.length;++r){const s=n[r],a=t[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${n} vs. ${t}`);e[r]=s>=0?s:a}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class h1{constructor(t,e,r,s,a,o,i){this.name=t,this.dtype=e,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=at(0),ge(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),Vt(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=e,ge(e),r.written=!0,this.tensors[t]=r}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((r,s)=>this.write(r,e[s]))}gather(t,e){if(!!e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return Qt([],[0].concat(this.elementShape));const r=this.readMany(t);return Vt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),le(r,0)}concat(t){if(!!t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return Qt([],[0].concat(this.elementShape));const e=[];for(let s=0;s<this.size();s++)e.push(s);const r=this.readMany(e);return Vt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),St(r,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,Pe(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let r=0;const s=t.map(c=>(r+=c,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:e.size/r,o=[];Tt(()=>{e=F(e,[1,r,a]);for(let c=0;c<t.length;++c){const l=c===0?0:s[c-1],p=[0,l,0],h=[1,t[c],a];o[c]=F(X(e,p,h),this.elementShape)}return o});const i=[];for(let c=0;c<t.length;c++)i[c]=c;this.writeMany(i,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ce{constructor(t,e,r,s=-1){this.tensors=t,this.elementShape=e,this.elementDtype=r,t!=null&&t.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);Vt(e,a.shape,"TensorList shape mismatch: "),ge(a)}),this.idTensor=at(0),this.maxNumElements=s,ge(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Ce([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,r=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Vt(t,this.elementShape,"TensorList shape mismatch: ");const s=sn(this.elementShape,this.tensors,t);return Tt(()=>{const a=this.tensors.map(o=>F(o,s));return le(a,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=sn(this.elementShape,this.tensors,t),s=this.tensors.pop();return Vt(s.shape,t,"TensorList shape mismatch: "),F(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Vt(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");ge(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const e=new Ce([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)e.tensors[r]=this.tensors[r];return e}getItem(t,e,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Vt(this.tensors[t].shape,e,"TensorList shape mismatch: ");const s=sn(this.elementShape,this.tensors,e);return F(this.tensors[t],s)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Vt(this.elementShape,e.shape,"TensorList shape mismatch: "),ge(e),this.tensors[t]=e}gather(t,e,r){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);Vt(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=sn(this.elementShape,this.tensors,r);return t.length===0?Qt([],[0].concat(s)):Tt(()=>{const a=t.map(o=>F(this.tensors[o],s));return le(a,0)})}concat(t,e){if(!!t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Vt(this.elementShape,e,"TensorList shape mismatch: ");const r=sn(this.elementShape,this.tensors,e);return this.size()===0?Qt([],[0].concat(r)):Tt(()=>{const s=this.tensors.map(a=>F(a,r));return St(s,0)})}}function f1(n,t,e){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==e)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${e}`);const s=n.shape.slice(1);Vt(s,t,"TensorList shape mismatch: ");const a=Pe(n);return new Ce(a,t,r)}function m1(n,t,e,r){return new Ce([],n,t,r)}function d1(n,t,e,r){if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Ce([],e,n.dtype,r),o=Pe(n,0);return t.forEach((i,c)=>{a.setItem(i,o[c])}),a}function g1(n,t,e){let r=0;const s=t.map(p=>(r+=p,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const a=n.shape.slice(1),o=ts(a,e),i=r===0?0:n.size/r,c=Tt(()=>{const p=[];n=F(n,[1,r,i]);for(let h=0;h<t.length;++h){const g=h===0?0:s[h-1],y=[0,g,0],v=[1,t[h],i];p[h]=F(X(n,y,v),o)}return n.dispose(),p}),l=new Ce([],e,n.dtype,t.length);for(let p=0;p<c.length;p++)l.setItem(p,c[p]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y1=async(n,t,e)=>{switch(n.op){case"If":case"StatelessIf":{const r=m("thenBranch",n,t,e),s=m("elseBranch",n,t,e),a=m("cond",n,t,e),o=m("args",n,t,e);return(await a.data())[0]?e.functionMap[r].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap):e.functionMap[s].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",n,t,e),s=m("cond",n,t,e),a=m("args",n,t,e),o=await e.functionMap[s].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap),i=a.map(p=>p.id);let c=await o[0].data();o.forEach(p=>{!p.kept&&i.indexOf(p.id)===-1&&p.dispose()});let l=a;for(;c[0];){const p=l;l=await e.functionMap[r].executeFunctionAsync(l,e.tensorArrayMap,e.tensorListMap);const h=l.map(y=>y.id);p.forEach(y=>{!y.kept&&i.indexOf(y.id)===-1&&h.indexOf(y.id)===-1&&y.dispose()});const g=await e.functionMap[s].executeFunctionAsync(l,e.tensorArrayMap,e.tensorListMap);c=await g[0].data(),g.forEach(y=>{!y.kept&&i.indexOf(y.id)===-1&&h.indexOf(y.id)===-1&&y.dispose()})}return l}case"LoopCond":{const r=m("pred",n,t,e);return[se(r)]}case"Switch":{const r=m("pred",n,t,e);let s=m("data",n,t,e);return s.kept||(s=se(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=n.inputNames.find(s=>$t(s,t,e)!==void 0);if(r){const s=$t(r,t,e);return[se(s)]}return}case"Enter":{const r=m("frameName",n,t,e),s=m("tensor",n,t,e);return e.enterFrame(r),[se(s)]}case"Exit":{const r=m("tensor",n,t,e);return e.exitFrame(),[se(r)]}case"NextIteration":{const r=m("tensor",n,t,e);return e.nextIteration(),[se(r)]}case"TensorArrayV3":{const r=m("size",n,t,e),s=m("dtype",n,t,e),a=m("elementShape",n,t,e),o=m("dynamicSize",n,t,e),i=m("clearAfterRead",n,t,e),c=m("identicalElementShapes",n,t,e),l=m("name",n,t,e),p=new h1(l,s,r,a,c,o,i);return e.addTensorArray(p),[p.idTensor,at(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e),a=m("tensor",n,t,e),o=e.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e);return[e.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),a=m("dtype",n,t,e);return[e.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),a=m("tensor",n,t,e),o=e.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id),a=m("dtype",n,t,e);return[s.concat(a)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",n,t,e),s=m("tensor",n,t,e),a=m("lengths",n,t,e),o=e.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return[at(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),a=m("tensor",n,t,e),o=e.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),a=m("elementShape",n,t,e),o=m("elementDType",n,t,e);return[e.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",n,t,e),s=m("tensor",n,t,e),a=m("elementShape",n,t,e),o=m("numElements",n,t,e),i=d1(s,r,a,o);return e.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",n,t,e),s=m("elementDType",n,t,e);let a;n.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=m(a,n,t,e),i=n.op==="TensorListReserve"?-1:o,c=m1(r,s,o,i);return e.addTensorList(c),[c.idTensor]}case"TensorListGather":{const r=m("tensorListId",n,t,e),s=m("indices",n,t,e),a=m("elementShape",n,t,e),o=m("elementDType",n,t,e);return[e.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e),o=m("numElements",n,t,e);return[e.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e),o=f1(r,s,a);return e.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id),a=m("dtype",n,t,e),o=m("elementShape",n,t,e);return[s.concat(a,o)]}case"TensorListPushBack":{const r=m("tensorListId",n,t,e),s=m("tensor",n,t,e),a=e.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),a=m("elementDType",n,t,e);return[e.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),a=m("lengths",n,t,e),o=g1(r,a,s);return e.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id);return[at(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",n,t,e),s=m("size",n,t,e),o=e.getTensorList(r.id).resize(s);return e.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(n,t,e){const[r,s]=m("fusedOps",n,t,e),a=r==="biasadd",o=!a,i=s==="prelu",c=r==="fusedbatchnorm",l=m("numArgs",n,t,e);if(a){if(i&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(c)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const p=m("strides",n,t,e),h=Dn(n,t,e),g=m("dataFormat",n,t,e).toUpperCase(),y=m("dilations",n,t,e);let[v,N]=m("args",n,t,e);o&&(N=v,v=void 0);const x=m("leakyreluAlpha",n,t,e);return{stride:p,pad:h,dataFormat:g,dilations:y,biasArg:v,preluArg:N,activationFunc:s,leakyreluAlpha:x}}const b1=(n,t,e,r=Et)=>{switch(n.op){case"Conv1D":{const s=m("stride",n,t,e),a=m("pad",n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),i=m("dilation",n,t,e);return[r.conv1d(m("x",n,t,e),m("filter",n,t,e),s,a,o,i)]}case"Conv2D":{const s=m("strides",n,t,e),a=Dn(n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),i=m("dilations",n,t,e);return[r.conv2d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:c,preluArg:l,activationFunc:p,leakyreluAlpha:h}=to(n,t,e);return[r.fused.conv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:c,activation:p,preluActivationWeights:l,leakyreluAlpha:h})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:c,preluArg:l,activationFunc:p,leakyreluAlpha:h}=to(n,t,e);return[r.fused.depthwiseConv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:c,activation:p,preluActivationWeights:l,leakyreluAlpha:h})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",n,t,e),a=m("strides",n,t,e),o=Dn(n,t,e);return[r.conv2dTranspose(m("x",n,t,e),m("filter",n,t,e),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",n,t,e),a=Dn(n,t,e),o=m("dilations",n,t,e),i=m("dataFormat",n,t,e).toUpperCase();return[r.depthwiseConv2d(m("input",n,t,e),m("filter",n,t,e),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("dataFormat",n,t,e).toUpperCase(),i=m("dilations",n,t,e);return[r.conv3d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.avgPool(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.maxPool(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e),i=m("includeBatchInIndex",n,t,e),{result:c,indexes:l}=r.maxPoolWithArgmax(m("x",n,t,e),[o[1],o[2]],[s[1],s[2]],a,i);return[c,l]}case"AvgPool3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.avgPool3d(m("x",n,t,e),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("kernelSize",n,t,e);return[r.maxPool3d(m("x",n,t,e),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=m("strides",n,t,e),a=m("pad",n,t,e),o=m("dilations",n,t,e),i=s[1],c=s[2],l=o[1],p=o[2];return[r.dilation2d(m("x",n,t,e),m("filter",n,t,e),[i,c],a,[l,p],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w1=(n,t,e,r=Et)=>{switch(n.op){case"Fill":{const s=m("shape",n,t,e),a=m("dtype",n,t,e),o=m("value",n,t,e);return[r.fill(s,o,a)]}case"LinSpace":{const s=m("start",n,t,e),a=m("stop",n,t,e),o=m("num",n,t,e);return[r.linspace(s,a,o)]}case"Multinomial":{const s=m("logits",n,t,e),a=m("numSamples",n,t,e),o=m("seed",n,t,e);return[r.multinomial(s,a,o)]}case"OneHot":{const s=m("indices",n,t,e),a=m("depth",n,t,e),o=m("onValue",n,t,e),i=m("offValue",n,t,e);return[r.oneHot(s,a,o,i)]}case"Ones":return[r.ones(m("shape",n,t,e),m("dtype",n,t,e))];case"OnesLike":return[r.onesLike(m("x",n,t,e))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",n,t,e),m("dtype",n,t,e),m("seed",n,t,e))];case"RandomUniform":return[r.randomUniform(m("shape",n,t,e),m("minval",n,t,e),m("maxval",n,t,e),m("dtype",n,t,e))];case"Range":{const s=m("start",n,t,e),a=m("stop",n,t,e),o=m("step",n,t,e);return[r.range(s,a,o,m("dtype",n,t,e))]}case"TruncatedNormal":{const s=m("shape",n,t,e),a=m("mean",n,t,e),o=m("stdDev",n,t,e),i=m("seed",n,t,e);return[r.truncatedNormal(s,a,o,m("dtype",n,t,e),i)]}case"Zeros":return[r.zeros(m("shape",n,t,e),m("dtype",n,t,e))];case"ZerosLike":return[r.zerosLike(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vr(n,t,e){const r=m("boxes",n,t,e),s=m("scores",n,t,e),a=m("maxOutputSize",n,t,e),o=m("iouThreshold",n,t,e),i=m("scoreThreshold",n,t,e),c=m("softNmsSigma",n,t,e);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:c}}const v1=async(n,t,e,r,s=Et)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:c,scoreThreshold:l,softNmsSigma:p}=vr(n,t,e),h=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,c,l,p);return[h.selectedIndices,h.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:c,scoreThreshold:l}=vr(n,t,e),p=m("padToMaxOutputSize",n,t,e),h=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,c,l,p);return[h.selectedIndices,h.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:c,scoreThreshold:l}=vr(n,t,e);return[await s.image.nonMaxSuppressionAsync(a,o,i,c,l)]}case"Where":{const a=s.cast(m("condition",n,t,e),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(m("x",n,t,e),m("y",n,t,e));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N1=(n,t,e,r=Et)=>{switch(n.op){case"LowerBound":{const s=m("sortedSequence",n,t,e),a=m("values",n,t,e);return[r.lowerBound(s,a)]}case"TopKV2":{const s=m("x",n,t,e),a=m("k",n,t,e),o=m("sorted",n,t,e),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=m("sortedSequence",n,t,e),a=m("values",n,t,e);return[r.upperBound(s,a)]}case"Unique":{const s=m("x",n,t,e),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=m("x",n,t,e),a=m("axis",n,t,e),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T1=(n,t,e,r=Et)=>{switch(n.op){case"Const":return t[n.name];case"PlaceholderWithDefault":const s=m("default",n,t,e);return[$t(n.name,t,e)||s];case"Placeholder":return[$t(n.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const p=m("x",n,t,e);return[se(p)]}case"IdentityN":return m("x",n,t,e).map(p=>se(p));case"Snapshot":const a=m("x",n,t,e);return[se(a)];case"Shape":return[r.tensor1d(m("x",n,t,e).shape,"int32")];case"ShapeN":return m("x",n,t,e).map(p=>r.tensor1d(p.shape));case"Size":return[r.scalar(m("x",n,t,e).size,"int32")];case"Rank":return[r.scalar(m("x",n,t,e).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=m("x",n,t,e),i=m("data",n,t,e),c=m("message",n,t,e),l=m("summarize",n,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(c);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S1{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=at(0),this.tensorMap=new Map,ge(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return at(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),Tt(()=>{const s=Pe(e),a=r.length,o=s.length;T(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const c=r[i],l=s[i];ge(l),this.tensorMap.set(c,l)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return Tt(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,e);s.push(i)}return le(s)})}findWithDefault(t,e){const r=this.tensorMap.get(t);return r!=null?r:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x1=async(n,t,e,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const s=m("keyDType",n,t,e),a=m("valueDType",n,t,e),o=new S1(s,a);return r.addHashTable(n.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",n,t,e,r),a=m("keys",n,t,e),o=m("values",n,t,e);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",n,t,e,r),a=m("keys",n,t,e),o=m("defaultValue",n,t,e);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",n,t,e,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k1=(n,t,e,r=Et)=>{switch(n.op){case"ResizeBilinear":{const s=m("images",n,t,e),a=m("size",n,t,e),o=m("alignCorners",n,t,e),i=m("halfPixelCenters",n,t,e);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=m("images",n,t,e),a=m("size",n,t,e),o=m("alignCorners",n,t,e),i=m("halfPixelCenters",n,t,e);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=m("image",n,t,e),a=m("boxes",n,t,e),o=m("boxInd",n,t,e),i=m("cropSize",n,t,e),c=m("method",n,t,e),l=m("extrapolationValue",n,t,e);return[r.image.cropAndResize(s,a,o,i,c,l)]}case"ImageProjectiveTransformV3":{const s=m("images",n,t,e),a=m("transforms",n,t,e),o=m("outputShape",n,t,e),i=m("fillValue",n,t,e),c=m("interpolation",n,t,e),l=m("fillMode",n,t,e);return[r.image.transform(s,a,c.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1=(n,t,e,r=Et)=>{switch(n.op){case"Equal":return[r.equal(m("a",n,t,e),m("b",n,t,e))];case"NotEqual":return[r.notEqual(m("a",n,t,e),m("b",n,t,e))];case"Greater":return[r.greater(m("a",n,t,e),m("b",n,t,e))];case"GreaterEqual":return[r.greaterEqual(m("a",n,t,e),m("b",n,t,e))];case"Less":return[r.less(m("a",n,t,e),m("b",n,t,e))];case"LessEqual":return[r.lessEqual(m("a",n,t,e),m("b",n,t,e))];case"LogicalAnd":return[r.logicalAnd(m("a",n,t,e),m("b",n,t,e))];case"LogicalNot":return[r.logicalNot(m("a",n,t,e))];case"LogicalOr":return[r.logicalOr(m("a",n,t,e),m("b",n,t,e))];case"Select":case"SelectV2":return[r.where(m("condition",n,t,e),m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _1=(n,t,e,r=Et)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",n,t,e),m("b",n,t,e),m("transposeA",n,t,e),m("transposeB",n,t,e))];case"Einsum":return[r.einsum(m("equation",n,t,e),...m("tensors",n,t,e))];case"Transpose":return[r.transpose(m("x",n,t,e),m("perm",n,t,e))];case"_FusedMatMul":const[s,a]=m("fusedOps",n,t,e),o=s==="biasadd",i=a==="prelu",c=m("numArgs",n,t,e),l=m("leakyreluAlpha",n,t,e);if(o){if(i&&c!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&c!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,h]=m("args",n,t,e);return[r.fused.matMul({a:m("a",n,t,e),b:m("b",n,t,e),transposeA:m("transposeA",n,t,e),transposeB:m("transposeB",n,t,e),bias:p,activation:a,preluActivationWeights:h,leakyreluAlpha:l})];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $1=(n,t,e,r=Et)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",n,t,e),m("axis",n,t,e),m("keepDims",n,t,e))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"FusedBatchNormV3":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"LRN":return[r.localResponseNormalization(m("x",n,t,e),m("radius",n,t,e),m("bias",n,t,e),m("alpha",n,t,e),m("beta",n,t,e))];case"Softmax":return[r.softmax(m("x",n,t,e))];case"LogSoftmax":return[r.logSoftmax(m("x",n,t,e))];case"SparseToDense":return[r.sparseToDense(m("sparseIndices",n,t,e),m("outputShape",n,t,e),m("sparseValues",n,t,e),m("defaultValue",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I1=(n,t,e,r=Et)=>{switch(n.op){case"Max":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.max(m("x",n,t,e),i,c)]}case"Mean":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.mean(m("x",n,t,e),i,c)]}case"Min":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.min(m("x",n,t,e),i,c)]}case"Sum":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.sum(m("x",n,t,e),i,c)]}case"All":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.all(m("x",n,t,e),i,c)]}case"Any":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.any(m("x",n,t,e),i,c)]}case"ArgMax":{const i=m("axis",n,t,e);return[r.argMax(m("x",n,t,e),i)]}case"ArgMin":{const i=m("axis",n,t,e);return[r.argMin(m("x",n,t,e),i)]}case"Prod":{const i=m("axis",n,t,e),c=m("keepDims",n,t,e);return[r.prod(m("x",n,t,e),i,c)]}case"Cumprod":{const i=m("axis",n,t,e),c=m("exclusive",n,t,e),l=m("reverse",n,t,e);return[r.cumprod(m("x",n,t,e),i,c,l)]}case"Cumsum":{const i=m("axis",n,t,e),c=m("exclusive",n,t,e),l=m("reverse",n,t,e);return[r.cumsum(m("x",n,t,e),i,c,l)]}case"Bincount":const s=m("x",n,t,e),a=m("weights",n,t,e),o=m("size",n,t,e);return[r.bincount(s,a,o)];case"DenseBincount":{const i=m("x",n,t,e),c=m("weights",n,t,e),l=m("size",n,t,e),p=m("binaryOutput",n,t,e);return[r.denseBincount(i,c,l,p)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A1=(n,t,e,r=Et)=>{switch(n.op){case"ConcatV2":case"Concat":{const s=m("n",n,t,e),a=m("axis",n,t,e);let o=m("tensors",n,t,e);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=m("x",n,t,e),a=m("indices",n,t,e);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=m("axis",n,t,e),a=m("batchDims",n,t,e),o=m("x",n,t,e),i=m("indices",n,t,e);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=m("dims",n,t,e),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=m("x",n,t,e);return[r.reverse(o,a)]}case"ReverseV2":{const s=m("axis",n,t,e),a=m("x",n,t,e);return[r.reverse(a,s)]}case"Slice":{const s=m("begin",n,t,e),a=m("size",n,t,e);return[r.slice(m("x",n,t,e),s,a)]}case"StridedSlice":{const s=m("begin",n,t,e),a=m("end",n,t,e),o=m("strides",n,t,e),i=m("beginMask",n,t,e),c=m("endMask",n,t,e),l=m("ellipsisMask",n,t,e),p=m("newAxisMask",n,t,e),h=m("shrinkAxisMask",n,t,e),g=m("x",n,t,e);return[r.stridedSlice(g,s,a,o,i,c,l,p,h)]}case"Pack":return Tt(()=>{const s=m("axis",n,t,e),a=m("tensors",n,t,e),o=a[0].shape,i=r.squeeze(a[0]).shape,c=a.map(l=>{const p=be(l.shape,o);if(!p&&!be(r.squeeze(l).shape,i))throw new Error("the input tensors shape does not match");return p?l:r.reshape(l,o)});return[r.stack(c,s)]});case"Unpack":{const s=m("axis",n,t,e),a=m("tensor",n,t,e);return r.unstack(a,s)}case"Tile":{const s=m("reps",n,t,e);return[r.tile(m("x",n,t,e),s)]}case"Split":case"SplitV":{const s=m("axis",n,t,e),a=m("numOrSizeSplits",n,t,e),o=m("x",n,t,e);return r.split(o,a,s)}case"ScatterNd":{const s=m("indices",n,t,e),a=m("values",n,t,e),o=m("shape",n,t,e);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=m("x",n,t,e),a=m("indices",n,t,e);return[r.gatherND(s,a)]}case"SparseToDense":{const s=m("sparseIndices",n,t,e),a=m("outputShape",n,t,e),o=m("sparseValues",n,t,e),i=m("defaultValue",n,t,e);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O1=(n,t,e,r=Et)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(m("indices",n,t,e),m("values",n,t,e),m("denseShape",n,t,e),m("defaultValue",n,t,e));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(m("inputIndices",n,t,e),m("inputShape",n,t,e),m("newShape",n,t,e));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D1=(n,t,e,r=Et)=>{switch(n.op){case"FFT":return[r.fft(m("x",n,t,e))];case"IFFT":return[r.ifft(m("x",n,t,e))];case"RFFT":return[r.rfft(m("x",n,t,e))];case"IRFFT":return[r.irfft(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C1=(n,t,e,r=Et)=>{switch(n.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(m("data",n,t,e),m("dataSplits",n,t,e),m("separator",n,t,e),m("nGramWidths",n,t,e),m("leftPad",n,t,e),m("rightPad",n,t,e),m("padWidth",n,t,e),m("preserveShortSequences",n,t,e));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(m("input",n,t,e),m("delimiter",n,t,e),m("skipEmpty",n,t,e));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",n,t,e),m("numBuckets",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F1=(n,t,e,r=Et)=>{switch(n.op){case"Cast":return[r.cast(m("x",n,t,e),m("dtype",n,t,e))];case"ExpandDims":{const s=m("axis",n,t,e);return[r.expandDims(m("x",n,t,e),s)]}case"Squeeze":{const s=m("axis",n,t,e);return[r.squeeze(m("x",n,t,e),s)]}case"Reshape":return[r.reshape(m("x",n,t,e),m("shape",n,t,e))];case"MirrorPad":return[r.mirrorPad(m("x",n,t,e),m("padding",n,t,e),m("mode",n,t,e))];case"PadV2":case"Pad":return[r.pad(m("x",n,t,e),m("padding",n,t,e),m("constantValue",n,t,e))];case"SpaceToBatchND":{const s=m("blockShape",n,t,e),a=m("paddings",n,t,e);return[r.spaceToBatchND(m("x",n,t,e),s,a)]}case"BatchToSpaceND":{const s=m("blockShape",n,t,e),a=m("crops",n,t,e);return[r.batchToSpaceND(m("x",n,t,e),s,a)]}case"DepthToSpace":{const s=m("blockSize",n,t,e),a=m("dataFormat",n,t,e).toUpperCase();return[r.depthToSpace(m("x",n,t,e),s,a)]}case"BroadcastTo":return[r.broadcastTo(m("x",n,t,e),m("shape",n,t,e))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",n,t,e),m("s1",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eo(n,t,e,r,s=Tt){const a=((o,i,c)=>{switch(o.category){case"arithmetic":return s(()=>l1(o,i,c));case"basic_math":return s(()=>p1(o,i,c));case"control":return y1(o,i,c);case"convolution":return s(()=>b1(o,i,c));case"creation":return s(()=>w1(o,i,c));case"dynamic":return v1(o,i,c);case"evaluation":return s(()=>N1(o,i,c));case"image":return s(()=>k1(o,i,c));case"graph":return s(()=>T1(o,i,c));case"logical":return s(()=>E1(o,i,c));case"matrices":return s(()=>_1(o,i,c));case"normalization":return s(()=>$1(o,i,c));case"reduction":return s(()=>I1(o,i,c));case"slice_join":return s(()=>A1(o,i,c));case"sparse":return s(()=>O1(o,i,c));case"spectral":return s(()=>D1(o,i,c));case"string":return s(()=>C1(o,i,c));case"transformation":return s(()=>F1(o,i,c));case"hash_table":return x1(o,i,c,r);case"custom":const l=Pi(o.op);if(l&&l.customExecutor)return l.customExecutor(new c1(o,i,c));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,t,e);return je(a)?a.then(o=>[].concat(o)):[].concat(a)}class no{constructor(t={},e={},r={},s={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=r,this.functionMap=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const r=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(n,t,e,r){const s=new Set,a=[];let o=null,i=null;const c=new Set,l=Object.keys(n).map(g=>Ft(g)[0]);let p=[];r!=null&&(p=r.map(g=>Ft(g.name)[0]));const h=[...t];for(;h.length>0;){const g=h.pop();if((Ri(g)||z1(g)||V1(g))&&o==null&&(o=g,i=o.children.map(y=>y.name).filter(y=>s.has(y))),s.add(g.name),e[g.name]==null&&l.indexOf(g.name)===-1&&p.indexOf(g.name)===-1){if(g.inputs.length===0){a.push(g.name);continue}g.inputs.forEach(y=>{c.has(y.name)||(c.add(y.name),h.push(y))})}}return{inputs:n,outputs:t,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function P1(n,t,e){const{usedNodes:r,inputs:s}=e,a=[],o=Object.keys(s).map(p=>Ft(p)[0]).map(p=>n.nodes[p]),i=n.initNodes;o.forEach(p=>{r.has(p.name)&&a.push(p)}),n.weights.forEach(p=>{r.has(p.name)&&a.push(p)}),i!=null&&i.forEach(p=>{r.has(p.name)&&a.push(p)});const c=new Set,l=[];for(;a.length>0;){const p=a.pop();c.add(p.name),t[p.name]||l.push(p),p.children.forEach(h=>{!c.has(h.name)&&r.has(h.name)&&h.inputs.every(g=>c.has(g.name))&&a.push(h)})}return l}const B1=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],L1=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],R1=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Ri(n){return B1.indexOf(n.op)>=0}function z1(n){return L1.indexOf(n.op)>=0}function V1(n){return R1.indexOf(n.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Un{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new Un(t.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const r=t.map(a=>a.name).sort(),s=e.map(a=>a.name).sort();return r.join(this.SEPERATOR)+"--"+s.join(this.SEPERATOR)}compile(t,e){const r=ro(t,e,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const i=e.map(l=>l.name),c=Object.keys(t);throw new Error(`Cannot compute the outputs [${i}] from the provided inputs [${c}]. Missing the following inputs: [${s}]`)}return P1(this.graph,this.weightMap,r)}execute(t,e){t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const s=r.map(h=>this.graph.nodes[Ft(h)[0]]),a=e.map(h=>Ft(h)[0]);let o=a.map(h=>this.graph.nodes[h]);this.resetIntermediateTensors(),o.length===0&&(o=this._outputs);const i=this.getCompilationKey(s,o);let c=this.compiledMap.get(i);c==null&&(c=this.compile(t,o),this.compiledMap.set(i,c));const l={},p={};return Tt(()=>{const h=new no(this.weightMap,l,p,this.functionExecutorMap),g=Object.assign({},this.weightMap);Object.keys(t).forEach(N=>{const[x,I]=Ft(N),R=[];R[I]=t[N],g[x]=R});const y=this.getFrozenTensorIds(g),v={};for(let N=0;N<c.length;N++){const x=c[N];if(!g[x.name]){const I=eo(x,g,h,this._resourceManager);if(je(I))throw new Error(`The execution of the op '${x.op}' returned a promise. Please use model.executeAsync() instead.`);g[x.name]=I,this.checkTensorForDisposal(x.name,x,g,h,y,a,v)}}return this.parent==null&&h.dispose(y),e.map(N=>$t(N,g,h))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(e)}checkTensorForDisposal(t,e,r,s,a,o,i){e.category==="control"||o.indexOf(t)!==-1||(r[t].forEach(c=>{c!=null&&(i[c.id]=(i[c.id]||0)+e.children.length)}),e.inputs.forEach(c=>{if(c.category!=="control"){const l=Sw(c.name,r,s);l!=null&&l.forEach(p=>{if(p&&!p.kept&&!a.has(p.id)){const h=i[p.id];if(h===1){if(!this.keepTensorForDebug)p.dispose();else{const[g,y]=Jt(e.name,s);this.intermediateTensors[g]?this.intermediateTensors[g][y]=p:(this.intermediateTensors[g]=[],this.intermediateTensors[g][y]=p)}delete i[p.id]}else h!=null&&i[p.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){!this.intermediateTensors||(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(e=>e.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){!this.tensorsMap||Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(r=>{r&&!r.kept&&!r.isDisposed&&!this.keepIds.has(r.id)&&r.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach(e=>e.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,e,r=!1,s={},a={}){r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepTensorForDebug=st().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){console.warn(p.message)}this.resetIntermediateTensors();const o=new no(this.weightMap,s,a,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,o,e,r);const i=e.map(p=>$t(p,this.tensorsMap,o)),c=i.map(p=>p.id),l=Object.keys(t).map(p=>t[p].id);return this.keepIds=new Set([...c,...l,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&o.dispose(this.keepIds),i}async executeFunctionAsync(t,e,r){const s=t.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,e,r)}async executeWithControlFlow(t,e,r,s){const a=Object.keys(t),o=a.map(C=>this.graph.nodes[Ft(C)[0]]),i=r.map(C=>Ft(C)[0]);let c=i.map(C=>this.graph.nodes[C]);c.length===0&&(c=this._outputs);const{usedNodes:l,missingInputs:p,dynamicNode:h,syncInputs:g}=ro(t,c,this.weightMap,this._initNodes),y=[...o,...this.graph.weights,...this._initNodes||[]].map(C=>({node:C,contexts:e.currentContext})),v=Object.assign({},this.weightMap);Object.keys(t).forEach(C=>{const[P,D]=Ft(C),B=[];B[D]=t[C],v[P]=B});const N={},x=this.getFrozenTensorIds(v),I={};for(;y.length>0;){const C=this.processStack(o,y,e,v,I,x,i,N,l);await Promise.all(C)}h==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const R=c.filter(C=>!Ri(C)&&!$t(C.name,v,e)).map(C=>C.name);if(R.length>0){let C="";throw h!=null&&(C=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${g}]`),new Error(`Cannot compute the outputs [${R}] from the provided inputs [${a}]. Consider providing the following inputs: [${p}]. ${C}`)}return v}processStack(t,e,r,s,a,o,i,c,l){const p=[];for(;e.length>0;){const h=e.pop();r.currentContext=h.contexts;let g="";if(h.node.op==="Enter"&&m("isConstant",h.node,s,r)&&([g]=Jt(h.node.name,r)),s[h.node.name]==null){const y=eo(h.node,s,r,this._resourceManager);g||([g]=Jt(h.node.name,r));const v=r.currentContext;je(y)?p.push(y.then(N=>(s[g]=N,r.currentContext=v,this.checkTensorForDisposal(g,h.node,s,r,o,i,c),this.processChildNodes(h.node,e,r,s,a,l),N))):(s[g]=y,this.checkTensorForDisposal(g,h.node,s,r,o,i,c),this.processChildNodes(h.node,e,r,s,a,l))}else this.processChildNodes(h.node,e,r,s,a,l)}return p}processChildNodes(t,e,r,s,a,o){t.children.forEach(i=>{const[c]=Jt(i.name,r);a[c]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(l=>!!$t(l,s,r))&&(a[c]=!0,e.push({contexts:r.currentContext,node:i})):i.inputNames.every(l=>!!$t(l,s,r))&&(a[c]=!0,e.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const r=t[e],[s]=Ft(e),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((c,l)=>o[l]===-1||o[l]===c);T(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&T(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){const e={};for(const r in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const s=this._signature.inputs[r];e[s.name]=t[r]}else e[r]=t[r];return e}checkInputs(t){const e=Object.keys(t).filter(r=>{const[s]=Ft(r);return this.graph.nodes[s]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(t){t.forEach(e=>{const[r]=Ft(e);if(!this.graph.nodes[r])throw new Error(`The output '${e}' is not found in the graph`)})}}class j1{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M1="?tfjs-format=file",U1="model.json";class H1{constructor(t,e={},r=Ko){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=r,e==null&&(this.loadOptions={}),this.resourceManager=new j1}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const e=this.io.getLoadHandlers(t,this.loadOptions);if(e.length===0)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return je(t)?t.then(e=>this.loadSync(e)):this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}this.signature=r,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new Un(Ja.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const a=Ja.Instance.transformGraph(t.modelInitializer);this.initializer=new Un(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){const r=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const s=r instanceof gt?[r]:r,a={};return s.forEach((o,i)=>a[this.structuredOutputKeys[i]]=o),a}return r}normalizeInputs(t){if(!(t instanceof gt)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,r,s)=>(e[r]=t[s],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=this.executor.execute(t,e);return r.length>1?r:r[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=await this.executor.executeAsync(t,e);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,r)=>(e[r]=[t[r]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function so(n,t={},e=Ko){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof n=="string"&&(n=K1(n));const r=new H1(n,t,e);return await r.load(),r}function K1(n){return n.endsWith("/")||(n=n+"/"),`${n}${U1}${M1}`}/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Ot=function(){return(Ot=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n}).apply(this,arguments)};function Wt(n,t,e,r){return new(e||(e=Promise))(function(s,a){function o(l){try{c(r.next(l))}catch(p){a(p)}}function i(l){try{c(r.throw(l))}catch(p){a(p)}}function c(l){var p;l.done?s(l.value):(p=l.value,p instanceof e?p:new e(function(h){h(p)})).then(o,i)}c((r=r.apply(n,t||[])).next())})}function qt(n,t){var e,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(c){return function(l){return function(p){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(s=2&p[0]?r.return:p[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,p[1])).done)return s;switch(r=0,s&&(p=[2&p[0],s.value]),p[0]){case 0:case 1:s=p;break;case 4:return o.label++,{value:p[1],done:!1};case 5:o.label++,r=p[1],p=[0];continue;case 7:p=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!((s=s.length>0&&s[s.length-1])||p[0]!==6&&p[0]!==2)){o=0;continue}if(p[0]===3&&(!s||p[1]>s[0]&&p[1]<s[3])){o.label=p[1];break}if(p[0]===6&&o.label<s[1]){o.label=s[1],s=p;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(p);break}s[2]&&o.ops.pop(),o.trys.pop();continue}p=t.call(n,o)}catch(h){p=[6,h],r=0}finally{e=s=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([c,l])}}}var Hn=["wrist","thumb_cmc","thumb_mcp","thumb_ip","thumb_tip","index_finger_mcp","index_finger_pip","index_finger_dip","index_finger_tip","middle_finger_mcp","middle_finger_pip","middle_finger_dip","middle_finger_tip","ring_finger_mcp","ring_finger_pip","ring_finger_dip","ring_finger_tip","pinky_finger_mcp","pinky_finger_pip","pinky_finger_dip","pinky_finger_tip"],Nr={runtime:"mediapipe",maxHands:2,modelType:"full"},W1=function(){function n(t){var e,r=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.handsSolution=new Nu.Hands({locateFile:function(s,a){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:a+"/"+s}}),t.modelType){case"lite":e=0;break;case"full":default:e=1}this.handsSolution.setOptions({modelComplexity:e,selfieMode:this.selfieMode,maxNumHands:t.maxHands}),this.handsSolution.onResults(function(s){if(r.height=s.image.height,r.width=s.image.width,r.hands=[],s.multiHandLandmarks!==null)for(var a=s.multiHandedness,o=s.multiHandLandmarks,i=s.multiHandWorldLandmarks,c=0;c<a.length;c++)r.hands.push(Ot(Ot({},r.translateOutput(o[c],i[c])),{score:a[c].score,handedness:a[c].label}))})}return n.prototype.translateOutput=function(t,e){var r=this;return{keypoints:t.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,score:s.visibility,name:Hn[a]}}),keypoints3D:e.map(function(s,a){return{x:s.x,y:s.y,z:s.z,score:s.visibility,name:Hn[a]}})}},n.prototype.estimateHands=function(t,e){return Wt(this,void 0,void 0,function(){var r,s;return qt(this,function(a){switch(a.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.handsSolution.setOptions({selfieMode:this.selfieMode})),t instanceof gt?(s=ImageData.bind,[4,Gh(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,a.label=3;case 3:return t=r,[4,this.handsSolution.send({image:t})];case 4:return a.sent(),[2,this.hands]}})})},n.prototype.dispose=function(){this.handsSolution.close()},n.prototype.reset=function(){this.handsSolution.reset(),this.width=0,this.height=0,this.hands=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.handsSolution.initialize()},n}();function q1(n){return Wt(this,void 0,void 0,function(){var t,e;return qt(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Ot({},Nr);var a=Ot({},s);return a.runtime="mediapipe",a.maxHands==null&&(a.maxHands=Nr.maxHands),a.modelType==null&&(a.modelType=Nr.modelType),a}(n),[4,(e=new W1(t)).initialize()];case 1:return r.sent(),[2,e]}})})}function Tr(n){return n.width*n.height}function ao(n){var t=n.xCenter-n.width/2,e=t+n.width,r=n.yCenter-n.height/2;return{xMin:t,xMax:e,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function G1(n,t){var e=ao(n),r=ao(t);if(!function(o,i){return!(o.xMax<i.xMin||i.xMax<o.xMin||o.yMax<i.yMin||i.yMax<o.yMin)}(e,r))return 0;var s=Tr(function(o,i){var c=Math.max(o.xMin,i.xMin),l=Math.min(o.xMax,i.xMax),p=Math.max(o.yMin,i.yMin),h=Math.min(o.yMax,i.yMax);return{xMin:c,xMax:l,yMin:p,yMax:h,width:Math.max(l-c,0),height:Math.max(h-p,0)}}(e,r)),a=Tr(e)+Tr(r)-s;return a>0?s/a:0}function X1(n,t,e,r){var s=n.width,a=n.height,o=r?-1:1,i=Math.cos(n.rotation),c=Math.sin(n.rotation),l=n.xCenter,p=n.yCenter,h=1/t,g=1/e,y=new Array(16);return y[0]=s*i*o*h,y[1]=-a*c*h,y[2]=0,y[3]=(-.5*s*i*o+.5*a*c+l)*h,y[4]=s*c*o*g,y[5]=a*i*g,y[6]=0,y[7]=(-.5*a*i-.5*s*c*o+p)*g,y[8]=0,y[9]=0,y[10]=s*h,y[11]=0,y[12]=0,y[13]=0,y[14]=0,y[15]=1,function(v){if(v.length!==16)throw new Error("Array length must be 16 but got "+v.length);return[[v[0],v[1],v[2],v[3]],[v[4],v[5],v[6],v[7]],[v[8],v[9],v[10],v[11]],[v[12],v[13],v[14],v[15]]]}(y)}function zi(n){return n instanceof gt?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function Kn(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function Vi(n){return n instanceof gt?n:Xh(n)}function Sr(n,t){T(n.width!==0,function(){return t+" width cannot be 0."}),T(n.height!==0,function(){return t+" height cannot be 0."})}function Y1(n,t){var e=function(r,s,a,o){var i=s-r,c=o-a;if(i===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var l=c/i;return{scale:l,offset:a-r*l}}(0,255,t[0],t[1]);return Tt(function(){return ct(W(n,e.scale),e.offset)})}function oo(n,t,e){var r=t.outputTensorSize,s=t.keepAspectRatio,a=t.borderMode,o=t.outputTensorFloatRange,i=zi(n),c=function(h,g){return g?{xCenter:g.xCenter*h.width,yCenter:g.yCenter*h.height,width:g.width*h.width,height:g.height*h.height,rotation:g.rotation}:{xCenter:.5*h.width,yCenter:.5*h.height,width:h.width,height:h.height,rotation:0}}(i,e),l=function(h,g,y){if(y===void 0&&(y=!1),!y)return{top:0,left:0,right:0,bottom:0};var v=g.height,N=g.width;Sr(g,"targetSize"),Sr(h,"roi");var x,I,R=v/N,C=h.height/h.width,P=0,D=0;return R>C?(x=h.width,I=h.width*R,D=(1-C/R)/2):(x=h.height/R,I=h.height,P=(1-R/C)/2),h.width=x,h.height=I,{top:D,left:P,right:P,bottom:D}}(c,r,s),p=X1(c,i.width,i.height,!1);return{imageTensor:Tt(function(){var h=Vi(n),g=$e(function(N,x,I){return Sr(I,"inputResolution"),[1/I.width*N[0][0]*x.width,1/I.height*N[0][1]*x.width,N[0][3]*x.width,1/I.width*N[1][0]*x.height,1/I.height*N[1][1]*x.height,N[1][3]*x.height,0,0]}(p,i,r),[1,8]),y=a==="zero"?"constant":"nearest",v=nr.transform(re(mt(h,"float32")),g,"bilinear",y,0,[r.height,r.width]);return o!=null?Y1(v,o):v}),padding:l,transformationMatrix:p}}function io(n,t,e,r){return r===1?.5*(n+t):n+(t-n)*e/(r-1)}function uo(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function co(n){var t=n.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var e=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,a=Number.MIN_VALUE;return t.forEach(function(o){e=Math.min(e,o.x),s=Math.max(s,o.x),r=Math.min(r,o.y),a=Math.max(a,o.y)}),{xCenter:(e+s)/2,yCenter:(r+a)/2,width:s-e,height:a-r}}function J1(n,t,e,r,s){var a=e==="rect"?function(o,i,c){var l,p=o.locationData;if(i==="boundingbox")l=uo(p.boundingBox);else{l=co(p);var h=c.width,g=c.height;l.xCenter=Math.round(l.xCenter*h),l.yCenter=Math.round(l.yCenter*g),l.width=Math.round(l.width*h),l.height=Math.round(l.height*g)}return l}(n,t,r):function(o,i){var c=o.locationData;return i==="boundingbox"?uo(c.relativeBoundingBox):co(c)}(n,t);return s&&(a.rotation=function(o,i,c){var l,p=o.locationData,h=c.rotationVectorStartKeypointIndex,g=c.rotationVectorEndKeypointIndex;l=c.rotationVectorTargetAngle?c.rotationVectorTargetAngle:Math.PI*c.rotationVectorTargetAngleDegree/180;var y=p.relativeKeypoints[h].x*i.width,v=p.relativeKeypoints[h].y*i.height,N=p.relativeKeypoints[g].x*i.width,x=p.relativeKeypoints[g].y*i.height;return Kn(l-Math.atan2(-(x-v),N-y))}(n,r,s)),a}function Z1(n){return Tt(function(){var t=function(s){return Tt(function(){return[X(s,[0,0,0],[1,-1,1]),X(s,[0,0,1],[1,-1,-1])]})}(n),e=t[0],r=t[1];return{boxes:vt(r),logits:vt(e)}})}function Q1(n,t,e,r){return Wt(this,void 0,void 0,function(){var s,a,o,i,c;return qt(this,function(l){switch(l.label){case 0:return n.sort(function(p,h){return Math.max.apply(Math,h.score)-Math.max.apply(Math,p.score)}),s=$e(n.map(function(p){return[p.locationData.relativeBoundingBox.yMin,p.locationData.relativeBoundingBox.xMin,p.locationData.relativeBoundingBox.yMax,p.locationData.relativeBoundingBox.xMax]})),a=It(n.map(function(p){return p.score[0]})),[4,nr.nonMaxSuppressionAsync(s,a,t,e)];case 1:return[4,(o=l.sent()).array()];case 2:return i=l.sent(),c=n.filter(function(p,h){return i.indexOf(h)>-1}),Yt([s,a,o]),[2,c]}})})}function tv(n,t){return n.map(function(e){var r=Ot(Ot({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(r.z=e.z*t.width),r})}function ev(n,t,e){return Wt(this,void 0,void 0,function(){var r,s,a,o,i;return qt(this,function(c){switch(c.label){case 0:return r=n[0],s=n[1],a=function(l,p,h){return Tt(function(){var g,y,v,N;h.reverseOutputOrder?(y=vt(X(l,[0,h.boxCoordOffset+0],[-1,1])),g=vt(X(l,[0,h.boxCoordOffset+1],[-1,1])),N=vt(X(l,[0,h.boxCoordOffset+2],[-1,1])),v=vt(X(l,[0,h.boxCoordOffset+3],[-1,1]))):(g=vt(X(l,[0,h.boxCoordOffset+0],[-1,1])),y=vt(X(l,[0,h.boxCoordOffset+1],[-1,1])),v=vt(X(l,[0,h.boxCoordOffset+2],[-1,1])),N=vt(X(l,[0,h.boxCoordOffset+3],[-1,1]))),y=ct(W(it(y,h.xScale),p.w),p.x),g=ct(W(it(g,h.yScale),p.h),p.y),h.applyExponentialOnBoxSize?(v=W(ue(it(v,h.hScale)),p.h),N=W(ue(it(N,h.wScale)),p.w)):(v=W(it(v,h.hScale),p.h),N=W(it(N,h.wScale),p.h));var x=et(g,it(v,2)),I=et(y,it(N,2)),R=ct(g,it(v,2)),C=ct(y,it(N,2)),P=St([F(x,[h.numBoxes,1]),F(I,[h.numBoxes,1]),F(R,[h.numBoxes,1]),F(C,[h.numBoxes,1])],1);if(h.numKeypoints)for(var D=0;D<h.numKeypoints;++D){var B=h.keypointCoordOffset+D*h.numValuesPerKeypoint,j=void 0,M=void 0;h.reverseOutputOrder?(j=vt(X(l,[0,B],[-1,1])),M=vt(X(l,[0,B+1],[-1,1]))):(M=vt(X(l,[0,B],[-1,1])),j=vt(X(l,[0,B+1],[-1,1])));var V=ct(W(it(j,h.xScale),p.w),p.x),L=ct(W(it(M,h.yScale),p.h),p.y);P=St([P,F(V,[h.numBoxes,1]),F(L,[h.numBoxes,1])],1)}return P})}(s,t,e),o=Tt(function(){var l=r;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(l=Jo(r,-e.scoreClippingThresh,e.scoreClippingThresh)),l=_e(l)):l}),[4,nv(a,o,e)];case 1:return i=c.sent(),Yt([a,o]),[2,i]}})})}function nv(n,t,e){return Wt(this,void 0,void 0,function(){var r,s,a,o,i,c,l,p,h,g,y,v;return qt(this,function(N){switch(N.label){case 0:return r=[],[4,n.data()];case 1:return s=N.sent(),[4,t.data()];case 2:for(a=N.sent(),o=0;o<e.numBoxes;++o)if(!(e.minScoreThresh!=null&&a[o]<e.minScoreThresh||(i=o*e.numCoords,c=rv(s[i+0],s[i+1],s[i+2],s[i+3],a[o],e.flipVertically,o),(l=c.locationData.relativeBoundingBox).width<0||l.height<0))){if(e.numKeypoints>0)for((p=c.locationData).relativeKeypoints=[],h=e.numKeypoints*e.numValuesPerKeypoint,g=0;g<h;g+=e.numValuesPerKeypoint)y=i+e.keypointCoordOffset+g,v={x:s[y+0],y:e.flipVertically?1-s[y+1]:s[y+1]},p.relativeKeypoints.push(v);r.push(c)}return[2,r]}})})}function rv(n,t,e,r,s,a,o){return{score:[s],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:a?1-e:n,xMax:r,yMax:a?1-n:e,width:r-t,height:e-n}}}}function sv(n,t){return n==="none"?t:function(e){return 1/(1+Math.exp(-e))}(t)}function lo(n,t,e,r){return Wt(this,void 0,void 0,function(){var s,a,o,i,c,l,p,h;return qt(this,function(g){switch(g.label){case 0:return e=e||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=n.size,a=s/t.numLandmarks,[4,n.data()];case 1:for(o=g.sent(),i=[],c=0;c<t.numLandmarks;++c)l=c*a,(h={x:0,y:0}).x=e?t.inputImageWidth-o[l]:o[l],a>1&&(h.y=r?t.inputImageHeight-o[l+1]:o[l+1]),a>2&&(h.z=o[l+2]),a>3&&(h.score=sv(t.visibilityActivation,o[l+3])),i.push(h);for(p=0;p<i.length;++p)(h=i[p]).x=h.x/t.inputImageWidth,h.y=h.y/t.inputImageHeight,h.z=h.z/t.inputImageWidth/(t.normalizeZ||1);return[2,i]}})})}function po(n,t,e){var r=n.width,s=n.height,a=n.rotation;if(e.rotation==null&&e.rotationDegree==null||(a=function(p,h){return h.rotation!=null?p+=h.rotation:h.rotationDegree!=null&&(p+=Math.PI*h.rotationDegree/180),Kn(p)}(a,e)),a===0)n.xCenter=n.xCenter+r*e.shiftX,n.yCenter=n.yCenter+s*e.shiftY;else{var o=(t.width*r*e.shiftX*Math.cos(a)-t.height*s*e.shiftY*Math.sin(a))/t.width,i=(t.width*r*e.shiftX*Math.sin(a)+t.height*s*e.shiftY*Math.cos(a))/t.height;n.xCenter=n.xCenter+o,n.yCenter=n.yCenter+i}if(e.squareLong){var c=Math.max(r*t.width,s*t.height);r=c/t.width,s=c/t.height}else if(e.squareShort){var l=Math.min(r*t.width,s*t.height);r=l/t.width,s=l/t.height}return n.width=r*e.scaleX,n.height=s*e.scaleY,n}function av(n,t){for(var e=function(U,Y){var Z=U[0].x*Y.width,Q=U[0].y*Y.height,tt=(U[4].x+U[8].x)/2,dt=(U[4].y+U[8].y)/2;return tt=(tt+U[6].x)/2*Y.width,dt=(dt+U[6].y)/2*Y.height,Kn(Math.PI/2-Math.atan2(-(dt-Q),tt-Z))}(n,t),r=Kn(-e),s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,c=0,l=n;c<l.length;c++){var p=(x=l[c]).x,h=x.y;s=Math.min(s,p),a=Math.max(a,p),o=Math.min(o,h),i=Math.max(i,h)}var g=(a+s)/2,y=(i+o)/2;s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(var v=0,N=n;v<N.length;v++){var x,I=((x=N[v]).x-g)*t.width,R=(x.y-y)*t.height,C=I*Math.cos(r)-R*Math.sin(r),P=I*Math.sin(r)+R*Math.cos(r);s=Math.min(s,C),a=Math.max(a,C),o=Math.min(o,P),i=Math.max(i,P)}var D=(a+s)/2,B=(i+o)/2,j=D*Math.cos(e)-B*Math.sin(e)+t.width*g,M=D*Math.sin(e)+B*Math.cos(e)+t.height*y,V=(a-s)/t.width,L=(i-o)/t.height;return{xCenter:j/t.width,yCenter:M/t.height,width:V,height:L,rotation:e}}var ov={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},xr={runtime:"tfjs",modelType:"full",maxHands:2,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"},kr={flipHorizontal:!1,staticImageMode:!1},iv={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2016,numCoords:18,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:7,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.5},uv=.3,cv={shiftX:0,shiftY:-.5,scaleX:2.6,scaleY:2.6,squareLong:!0},lv={shiftX:0,shiftY:-.1,scaleX:2,scaleY:2,squareLong:!0},pv={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},hv={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},fv={numLandmarks:21,inputImageWidth:224,inputImageHeight:224,normalizeZ:.4,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},mv={numLandmarks:21,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},es,dv=function(){function n(t,e,r){this.detectorModel=t,this.landmarkModel=e,this.maxHands=r,this.prevHandRectsFromLandmarks=null,this.anchors=function(c){c.reduceBoxesInLowestLayer==null&&(c.reduceBoxesInLowestLayer=!1),c.interpolatedScaleAspectRatio==null&&(c.interpolatedScaleAspectRatio=1),c.fixedAnchorSize==null&&(c.fixedAnchorSize=!1);for(var l=[],p=0;p<c.numLayers;){for(var h=[],g=[],y=[],v=[],N=p;N<c.strides.length&&c.strides[N]===c.strides[p];){var x=io(c.minScale,c.maxScale,N,c.strides.length);if(N===0&&c.reduceBoxesInLowestLayer)y.push(1),y.push(2),y.push(.5),v.push(.1),v.push(x),v.push(x);else{for(var I=0;I<c.aspectRatios.length;++I)y.push(c.aspectRatios[I]),v.push(x);if(c.interpolatedScaleAspectRatio>0){var R=N===c.strides.length-1?1:io(c.minScale,c.maxScale,N+1,c.strides.length);v.push(Math.sqrt(x*R)),y.push(c.interpolatedScaleAspectRatio)}}N++}for(var C=0;C<y.length;++C){var P=Math.sqrt(y[C]);h.push(v[C]/P),g.push(v[C]*P)}var D=0,B=0;if(c.featureMapHeight.length>0)D=c.featureMapHeight[p],B=c.featureMapWidth[p];else{var j=c.strides[p];D=Math.ceil(c.inputSizeHeight/j),B=Math.ceil(c.inputSizeWidth/j)}for(var M=0;M<D;++M)for(var V=0;V<B;++V)for(var L=0;L<h.length;++L){var U={xCenter:(V+c.anchorOffsetX)/B,yCenter:(M+c.anchorOffsetY)/D,width:0,height:0};c.fixedAnchorSize?(U.width=1,U.height=1):(U.width=g[L],U.height=h[L]),l.push(U)}p=N}return l}(ov);var s=It(this.anchors.map(function(c){return c.width})),a=It(this.anchors.map(function(c){return c.height})),o=It(this.anchors.map(function(c){return c.xCenter})),i=It(this.anchors.map(function(c){return c.yCenter}));this.anchorTensor={x:o,y:i,w:s,h:a}}return n.prototype.estimateHands=function(t,e){return Wt(this,void 0,void 0,function(){var r,s,a,o,i,c,l,p,h,g,y,v,N,x,I,R,C,P,D=this;return qt(this,function(B){switch(B.label){case 0:return r=function(V){if(V==null)return Ot({},kr);var L=Ot({},V);return L.flipHorizontal==null&&(L.flipHorizontal=kr.flipHorizontal),L.staticImageMode==null&&(L.staticImageMode=kr.staticImageMode),L}(e),t==null?(this.reset(),[2,[]]):(s=zi(t),a=Tt(function(){var V=mt(Vi(t),"float32");return r.flipHorizontal&&(V=vt(nr.flipLeftRight(re(V,0)),[0])),V}),o=this.prevHandRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxHands?[4,this.detectPalm(a)]:[3,2]);case 1:return(c=B.sent()).length===0?(this.reset(),a.dispose(),[2,[]]):(l=c.map(function(V){return D.palmDetectionToRoi(V,s)}),i=l,[3,3]);case 2:i=o,B.label=3;case 3:return j=.5,M=[],[i].forEach(function(V){return V.forEach(function(L){(M=M.filter(function(U){return G1(L,U)<=j})).push(L)})}),i=M,[4,Promise.all(i.map(function(V){return D.handLandmarks(V,a)}))];case 4:for(p=B.sent(),h=[],this.prevHandRectsFromLandmarks=[],g=0,y=p;g<y.length;g++)(v=y[g])!=null&&(N=v.landmarks,x=v.worldLandmarks,I=v.handScore,R=v.handedness,this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(N,s)),(C=tv(N,s))!=null&&C.forEach(function(V,L){delete V.z,V.name=Hn[L]}),(P=x)!=null&&P.forEach(function(V,L){V.name=Hn[L]}),h.push({keypoints:C,keypoints3D:P,handedness:R,score:I}));return a.dispose(),[2,h]}var j,M})})},n.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),Yt([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){this.prevHandRectsFromLandmarks=null},n.prototype.detectPalm=function(t){return Wt(this,void 0,void 0,function(){var e,r,s,a,o,i,c,l,p,h;return qt(this,function(g){switch(g.label){case 0:return e=oo(t,pv),r=e.imageTensor,s=e.padding,a=this.detectorModel.predict(r),o=Z1(a),i=o.boxes,[4,ev([c=o.logits,i],this.anchorTensor,iv)];case 1:return(l=g.sent()).length===0?(Yt([r,a,c,i]),[2,l]):[4,Q1(l,this.maxHands,uv)];case 2:return p=g.sent(),h=function(y,v){y===void 0&&(y=[]);for(var N=v.left,x=v.top,I=v.left+v.right,R=v.top+v.bottom,C=0;C<y.length;C++){var P=y[C],D=P.locationData.relativeBoundingBox,B=(D.xMin-N)/(1-I),j=(D.yMin-x)/(1-R),M=D.width/(1-I),V=D.height/(1-R);D.xMin=B,D.yMin=j,D.width=M,D.height=V,D.xMax=B+M,D.yMax=j+V;var L=P.locationData.relativeKeypoints;L&&L.forEach(function(U){var Y=(U.x-N)/(1-I),Z=(U.y-x)/(1-R);U.x=Y,U.y=Z})}return y}(p,s),Yt([r,a,c,i]),[2,h]}})})},n.prototype.palmDetectionToRoi=function(t,e){return po(J1(t,"boundingbox","normRect",e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:2,rotationVectorTargetAngleDegree:90}),e,cv)},n.prototype.handLandmarks=function(t,e){return Wt(this,void 0,void 0,function(){var r,s,a,o,i,c,l,p,h,g,y,v,N,x,I,R;return qt(this,function(C){switch(C.label){case 0:return r=oo(e,hv,t),s=r.imageTensor,a=r.padding,o=this.landmarkModel.execute(s,["Identity_2:0","Identity_1:0","Identity:0","Identity_3:0"]),i=o[0],c=o[1],l=o[2],p=o[3],[4,c.data()];case 1:return(h=C.sent()[0])<.5?(Yt(o),Yt(s),[2,null]):[4,l.data()];case 2:return g=C.sent()[0],y=g>=.5?"Left":"Right",[4,lo(i,fv)];case 3:return v=C.sent(),[4,lo(p,mv)];case 4:return N=C.sent(),x=function(P,D){var B=D.left,j=D.top,M=D.left+D.right,V=D.top+D.bottom;return P.map(function(L){return Ot(Ot({},L),{x:(L.x-B)/(1-M),y:(L.y-j)/(1-V),z:L.z/(1-M)})})}(v,a),I=function(P,D,B){B===void 0&&(B={ignoreRotation:!1});for(var j=[],M=0,V=P;M<V.length;M++){var L=V[M],U=L.x-.5,Y=L.y-.5,Z=B.ignoreRotation?0:D.rotation,Q=Math.cos(Z)*U-Math.sin(Z)*Y,tt=Math.sin(Z)*U+Math.cos(Z)*Y;Q=Q*D.width+D.xCenter,tt=tt*D.height+D.yCenter;var dt=L.z*D.width,xt=Ot({},L);xt.x=Q,xt.y=tt,xt.z=dt,j.push(xt)}return j}(x,t),R=function(P,D){for(var B=[],j=0,M=P;j<M.length;j++){var V=M[j],L=V.x,U=V.y,Y=D.rotation,Z=Math.cos(Y)*L-Math.sin(Y)*U,Q=Math.sin(Y)*L+Math.cos(Y)*U,tt=Ot({},V);tt.x=Z,tt.y=Q,B.push(tt)}return B}(N,t),Yt(o),Yt(s),[2,{landmarks:I,worldLandmarks:R,handScore:h,handedness:y}]}})})},n.prototype.handLandmarksToRoi=function(t,e){return po(av([].concat(t.slice(0,4),t.slice(5,7),t.slice(9,11),t.slice(13,15),t.slice(17,19)),e),e,lv)},n}();function gv(n){return Wt(this,void 0,void 0,function(){var t,e,r,s,a,o;return qt(this,function(i){switch(i.label){case 0:return t=function(c){if(c==null)return Ot({},xr);var l=Ot({},c);if(l.runtime="tfjs",l.maxHands==null&&(l.maxHands=xr.maxHands),l.modelType==null&&(l.modelType=xr.modelType),l.modelType!=="lite"&&l.modelType!=="full")throw new Error("Model type must be one of lite or full, but got "+l.modelType);if(l.detectorModelUrl==null)switch(l.modelType){case"lite":l.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";break;case"full":default:l.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1"}if(l.landmarkModelUrl==null)switch(l.modelType){case"lite":l.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";break;case"full":default:l.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"}return l}(n),e=t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([so(t.detectorModelUrl,{fromTFHub:e}),so(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return s=i.sent(),a=s[0],o=s[1],[2,new dv(a,o,t.maxHands)]}})})}function bv(n,t){return Wt(this,void 0,void 0,function(){var e,r;return qt(this,function(s){switch(n){case es.MediaPipeHands:if(r=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,gv(e)];if(e.runtime==="mediapipe")return[2,q1(e)];r=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r);default:throw new Error(n+" is not a supported model name.")}})})}(function(n){n.MediaPipeHands="MediaPipeHands"})(es||(es={}));export{es as SupportedModels,bv as createDetector};
