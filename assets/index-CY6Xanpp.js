(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function Zp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ho={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function Kp(){if(Y0)return ai;Y0=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,m){var v=null;if(m!==void 0&&(v=""+m),d.key!==void 0&&(v=""+d.key),"key"in d){m={};for(var A in d)A!=="key"&&(m[A]=d[A])}else m=d;return d=m.ref,{$$typeof:i,type:r,key:v,ref:d!==void 0?d:null,props:m}}return ai.Fragment=c,ai.jsx=o,ai.jsxs=o,ai}var X0;function Jp(){return X0||(X0=1,ho.exports=Kp()),ho.exports}var f=Jp(),mo={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function $p(){if(Q0)return ne;Q0=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.iterator;function U(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,k={};function L(b,N,G){this.props=b,this.context=N,this.refs=k,this.updater=G||H}L.prototype.isReactComponent={},L.prototype.setState=function(b,N){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,N,"setState")},L.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Q(){}Q.prototype=L.prototype;function B(b,N,G){this.props=b,this.context=N,this.refs=k,this.updater=G||H}var V=B.prototype=new Q;V.constructor=B,q(V,L.prototype),V.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function $(b,N,G,X,W,oe){return G=oe.ref,{$$typeof:i,type:b,key:N,ref:G!==void 0?G:null,props:oe}}function Ae(b,N){return $(b.type,N,void 0,void 0,void 0,b.props)}function je(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function tt(b){var N={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(G){return N[G]})}var nt=/\/+/g;function Le(b,N){return typeof b=="object"&&b!==null&&b.key!=null?tt(""+b.key):N.toString(36)}function Kt(){}function Jt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Kt,Kt):(b.status="pending",b.then(function(N){b.status==="pending"&&(b.status="fulfilled",b.value=N)},function(N){b.status==="pending"&&(b.status="rejected",b.reason=N)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ge(b,N,G,X,W){var oe=typeof b;(oe==="undefined"||oe==="boolean")&&(b=null);var I=!1;if(b===null)I=!0;else switch(oe){case"bigint":case"string":case"number":I=!0;break;case"object":switch(b.$$typeof){case i:case c:I=!0;break;case S:return I=b._init,Ge(I(b._payload),N,G,X,W)}}if(I)return W=W(b),I=X===""?"."+Le(b,0):X,ae(W)?(G="",I!=null&&(G=I.replace(nt,"$&/")+"/"),Ge(W,N,G,"",function(Fe){return Fe})):W!=null&&(je(W)&&(W=Ae(W,G+(W.key==null||b&&b.key===W.key?"":(""+W.key).replace(nt,"$&/")+"/")+I)),N.push(W)),1;I=0;var Ye=X===""?".":X+":";if(ae(b))for(var pe=0;pe<b.length;pe++)X=b[pe],oe=Ye+Le(X,pe),I+=Ge(X,N,G,oe,W);else if(pe=U(b),typeof pe=="function")for(b=pe.call(b),pe=0;!(X=b.next()).done;)X=X.value,oe=Ye+Le(X,pe++),I+=Ge(X,N,G,oe,W);else if(oe==="object"){if(typeof b.then=="function")return Ge(Jt(b),N,G,X,W);throw N=String(b),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return I}function D(b,N,G){if(b==null)return b;var X=[],W=0;return Ge(b,X,"","",function(oe){return N.call(G,oe,W++)}),X}function Y(b){if(b._status===-1){var N=b._result;N=N(),N.then(function(G){(b._status===0||b._status===-1)&&(b._status=1,b._result=G)},function(G){(b._status===0||b._status===-1)&&(b._status=2,b._result=G)}),b._status===-1&&(b._status=0,b._result=N)}if(b._status===1)return b._result.default;throw b._result}var F=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function re(){}return ne.Children={map:D,forEach:function(b,N,G){D(b,function(){N.apply(this,arguments)},G)},count:function(b){var N=0;return D(b,function(){N++}),N},toArray:function(b){return D(b,function(N){return N})||[]},only:function(b){if(!je(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ne.Component=L,ne.Fragment=o,ne.Profiler=d,ne.PureComponent=B,ne.StrictMode=r,ne.Suspense=y,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ne.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Z.H.useMemoCache(b)}},ne.cache=function(b){return function(){return b.apply(null,arguments)}},ne.cloneElement=function(b,N,G){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=q({},b.props),W=b.key,oe=void 0;if(N!=null)for(I in N.ref!==void 0&&(oe=void 0),N.key!==void 0&&(W=""+N.key),N)!le.call(N,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&N.ref===void 0||(X[I]=N[I]);var I=arguments.length-2;if(I===1)X.children=G;else if(1<I){for(var Ye=Array(I),pe=0;pe<I;pe++)Ye[pe]=arguments[pe+2];X.children=Ye}return $(b.type,W,void 0,void 0,oe,X)},ne.createContext=function(b){return b={$$typeof:v,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},ne.createElement=function(b,N,G){var X,W={},oe=null;if(N!=null)for(X in N.key!==void 0&&(oe=""+N.key),N)le.call(N,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=N[X]);var I=arguments.length-2;if(I===1)W.children=G;else if(1<I){for(var Ye=Array(I),pe=0;pe<I;pe++)Ye[pe]=arguments[pe+2];W.children=Ye}if(b&&b.defaultProps)for(X in I=b.defaultProps,I)W[X]===void 0&&(W[X]=I[X]);return $(b,oe,void 0,void 0,null,W)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(b){return{$$typeof:A,render:b}},ne.isValidElement=je,ne.lazy=function(b){return{$$typeof:S,_payload:{_status:-1,_result:b},_init:Y}},ne.memo=function(b,N){return{$$typeof:g,type:b,compare:N===void 0?null:N}},ne.startTransition=function(b){var N=Z.T,G={};Z.T=G;try{var X=b(),W=Z.S;W!==null&&W(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(re,F)}catch(oe){F(oe)}finally{Z.T=N}},ne.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ne.use=function(b){return Z.H.use(b)},ne.useActionState=function(b,N,G){return Z.H.useActionState(b,N,G)},ne.useCallback=function(b,N){return Z.H.useCallback(b,N)},ne.useContext=function(b){return Z.H.useContext(b)},ne.useDebugValue=function(){},ne.useDeferredValue=function(b,N){return Z.H.useDeferredValue(b,N)},ne.useEffect=function(b,N,G){var X=Z.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(b,N)},ne.useId=function(){return Z.H.useId()},ne.useImperativeHandle=function(b,N,G){return Z.H.useImperativeHandle(b,N,G)},ne.useInsertionEffect=function(b,N){return Z.H.useInsertionEffect(b,N)},ne.useLayoutEffect=function(b,N){return Z.H.useLayoutEffect(b,N)},ne.useMemo=function(b,N){return Z.H.useMemo(b,N)},ne.useOptimistic=function(b,N){return Z.H.useOptimistic(b,N)},ne.useReducer=function(b,N,G){return Z.H.useReducer(b,N,G)},ne.useRef=function(b){return Z.H.useRef(b)},ne.useState=function(b){return Z.H.useState(b)},ne.useSyncExternalStore=function(b,N,G){return Z.H.useSyncExternalStore(b,N,G)},ne.useTransition=function(){return Z.H.useTransition()},ne.version="19.1.1",ne}var k0;function Uo(){return k0||(k0=1,mo.exports=$p()),mo.exports}var C=Uo();const Mt=Zp(C);var po={exports:{}},li={},go={exports:{}},vo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function Wp(){return V0||(V0=1,(function(i){function c(D,Y){var F=D.length;D.push(Y);e:for(;0<F;){var re=F-1>>>1,b=D[re];if(0<d(b,Y))D[re]=Y,D[F]=b,F=re;else break e}}function o(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Y=D[0],F=D.pop();if(F!==Y){D[0]=F;e:for(var re=0,b=D.length,N=b>>>1;re<N;){var G=2*(re+1)-1,X=D[G],W=G+1,oe=D[W];if(0>d(X,F))W<b&&0>d(oe,X)?(D[re]=oe,D[W]=F,re=W):(D[re]=X,D[G]=F,re=G);else if(W<b&&0>d(oe,F))D[re]=oe,D[W]=F,re=W;else break e}}return Y}function d(D,Y){var F=D.sortIndex-Y.sortIndex;return F!==0?F:D.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var v=Date,A=v.now();i.unstable_now=function(){return v.now()-A}}var y=[],g=[],S=1,_=null,U=3,H=!1,q=!1,k=!1,L=!1,Q=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function ae(D){for(var Y=o(g);Y!==null;){if(Y.callback===null)r(g);else if(Y.startTime<=D)r(g),Y.sortIndex=Y.expirationTime,c(y,Y);else break;Y=o(g)}}function Z(D){if(k=!1,ae(D),!q)if(o(y)!==null)q=!0,le||(le=!0,Le());else{var Y=o(g);Y!==null&&Ge(Z,Y.startTime-D)}}var le=!1,$=-1,Ae=5,je=-1;function tt(){return L?!0:!(i.unstable_now()-je<Ae)}function nt(){if(L=!1,le){var D=i.unstable_now();je=D;var Y=!0;try{e:{q=!1,k&&(k=!1,B($),$=-1),H=!0;var F=U;try{t:{for(ae(D),_=o(y);_!==null&&!(_.expirationTime>D&&tt());){var re=_.callback;if(typeof re=="function"){_.callback=null,U=_.priorityLevel;var b=re(_.expirationTime<=D);if(D=i.unstable_now(),typeof b=="function"){_.callback=b,ae(D),Y=!0;break t}_===o(y)&&r(y),ae(D)}else r(y);_=o(y)}if(_!==null)Y=!0;else{var N=o(g);N!==null&&Ge(Z,N.startTime-D),Y=!1}}break e}finally{_=null,U=F,H=!1}Y=void 0}}finally{Y?Le():le=!1}}}var Le;if(typeof V=="function")Le=function(){V(nt)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Jt=Kt.port2;Kt.port1.onmessage=nt,Le=function(){Jt.postMessage(null)}}else Le=function(){Q(nt,0)};function Ge(D,Y){$=Q(function(){D(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(D){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var F=U;U=Y;try{return D()}finally{U=F}},i.unstable_requestPaint=function(){L=!0},i.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=U;U=D;try{return Y()}finally{U=F}},i.unstable_scheduleCallback=function(D,Y,F){var re=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,D){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,D={id:S++,callback:Y,priorityLevel:D,startTime:F,expirationTime:b,sortIndex:-1},F>re?(D.sortIndex=F,c(g,D),o(y)===null&&D===o(g)&&(k?(B($),$=-1):k=!0,Ge(Z,F-re))):(D.sortIndex=b,c(y,D),q||H||(q=!0,le||(le=!0,Le()))),D},i.unstable_shouldYield=tt,i.unstable_wrapCallback=function(D){var Y=U;return function(){var F=U;U=Y;try{return D.apply(this,arguments)}finally{U=F}}}})(vo)),vo}var Z0;function Fp(){return Z0||(Z0=1,go.exports=Wp()),go.exports}var yo={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Pp(){if(K0)return et;K0=1;var i=Uo();function c(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(y,g,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:y,containerInfo:g,implementation:S}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,et.createPortal=function(y,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return m(y,g,null,S)},et.flushSync=function(y){var g=v.T,S=r.p;try{if(v.T=null,r.p=2,y)return y()}finally{v.T=g,r.p=S,r.d.f()}},et.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(y,g))},et.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},et.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var S=g.as,_=A(S,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,H=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?r.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:U,fetchPriority:H}):S==="script"&&r.d.X(y,{crossOrigin:_,integrity:U,fetchPriority:H,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},et.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=A(g.as,g.crossOrigin);r.d.M(y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(y)},et.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,_=A(S,g.crossOrigin);r.d.L(y,S,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},et.preloadModule=function(y,g){if(typeof y=="string")if(g){var S=A(g.as,g.crossOrigin);r.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(y)},et.requestFormReset=function(y){r.d.r(y)},et.unstable_batchedUpdates=function(y,g){return y(g)},et.useFormState=function(y,g,S){return v.H.useFormState(y,g,S)},et.useFormStatus=function(){return v.H.useHostTransitionStatus()},et.version="19.1.1",et}var J0;function Ip(){if(J0)return yo.exports;J0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),yo.exports=Pp(),yo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function e2(){if($0)return li;$0=1;var i=Fp(),c=Uo(),o=Ip();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(m(e)!==e)throw Error(r(188))}function y(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return A(n),e;if(u===l)return A(n),t;u=u.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=u;else{for(var s=!1,h=n.child;h;){if(h===a){s=!0,a=n,l=u;break}if(h===l){s=!0,l=n,a=u;break}h=h.sibling}if(!s){for(h=u.child;h;){if(h===a){s=!0,a=u,l=n;break}if(h===l){s=!0,l=u,a=n;break}h=h.sibling}if(!s)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var Kt=Symbol.for("react.client.reference");function Jt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Kt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case L:return"Profiler";case k:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case V:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Jt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Jt(e(t))}catch{}}return null}var Ge=Array.isArray,D=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},re=[],b=-1;function N(e){return{current:e}}function G(e){0>b||(e.current=re[b],re[b]=null,b--)}function X(e,t){b++,re[b]=e.current,e.current=t}var W=N(null),oe=N(null),I=N(null),Ye=N(null);function pe(e,t){switch(X(I,t),X(oe,e),X(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?p0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=p0(t),e=g0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),X(W,e)}function Fe(){G(W),G(oe),G(I)}function Ya(e){e.memoizedState!==null&&X(Ye,e);var t=W.current,a=g0(t,e.type);t!==a&&(X(oe,e),X(W,a))}function $t(e){oe.current===e&&(G(W),G(oe)),Ye.current===e&&(G(Ye),Fn._currentValue=F)}var St=Object.prototype.hasOwnProperty,Iu=i.unstable_scheduleCallback,ec=i.unstable_cancelCallback,zh=i.unstable_shouldYield,Ah=i.unstable_requestPaint,qt=i.unstable_now,Rh=i.unstable_getCurrentPriorityLevel,Jo=i.unstable_ImmediatePriority,$o=i.unstable_UserBlockingPriority,mi=i.unstable_NormalPriority,Th=i.unstable_LowPriority,Wo=i.unstable_IdlePriority,_h=i.log,Dh=i.unstable_setDisableYieldValue,nn=null,ft=null;function pa(e){if(typeof _h=="function"&&Dh(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(nn,e)}catch{}}var dt=Math.clz32?Math.clz32:Ch,Oh=Math.log,Mh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(Oh(e)/Mh|0)|0}var pi=256,gi=4194304;function Xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~u,l!==0?n=Xa(l):(s&=h,s!==0?n=Xa(s):a||(a=h&~e,a!==0&&(n=Xa(a))))):(h=l&~u,h!==0?n=Xa(h):s!==0?n=Xa(s):a||(a=l&~e,a!==0&&(n=Xa(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var e=pi;return pi<<=1,(pi&4194048)===0&&(pi=256),e}function Po(){var e=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),e}function tc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function cn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nh(e,t,a,l,n,u){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,p=e.expirationTimes,z=e.hiddenUpdates;for(a=s&~a;0<a;){var O=31-dt(a),w=1<<O;h[O]=0,p[O]=-1;var R=z[O];if(R!==null)for(z[O]=null,O=0;O<R.length;O++){var T=R[O];T!==null&&(T.lane&=-536870913)}a&=~w}l!==0&&Io(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(s&~t))}function Io(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function es(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-dt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ac(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ts(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function Uh(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ga=Math.random().toString(36).slice(2),Pe="__reactFiber$"+ga,it="__reactProps$"+ga,ol="__reactContainer$"+ga,nc="__reactEvents$"+ga,Hh="__reactListeners$"+ga,Bh="__reactHandles$"+ga,as="__reactResources$"+ga,rn="__reactMarker$"+ga;function ic(e){delete e[Pe],delete e[it],delete e[nc],delete e[Hh],delete e[Bh]}function sl(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ol]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=x0(e);e!==null;){if(a=e[Pe])return a;e=x0(e)}return t}e=a,a=e.parentNode}return null}function fl(e){if(e=e[Pe]||e[ol]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function on(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function dl(e){var t=e[as];return t||(t=e[as]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[rn]=!0}var ls=new Set,ns={};function Qa(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(ns[e]=t,e=0;e<t.length;e++)ls.add(t[e])}var qh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),is={},us={};function Lh(e){return St.call(us,e)?!0:St.call(is,e)?!1:qh.test(e)?us[e]=!0:(is[e]=!0,!1)}function yi(e,t,a){if(Lh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Wt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var uc,cs;function ml(e){if(uc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||"",cs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uc+e+cs}var cc=!1;function rc(e,t){if(!e||cc)return"";cc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(T){var R=T}Reflect.construct(e,[],w)}else{try{w.call()}catch(T){R=T}e.call(w.prototype)}}else{try{throw Error()}catch(T){R=T}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(T){if(T&&R&&typeof T.stack=="string")return[T.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),s=u[0],h=u[1];if(s&&h){var p=s.split(`
`),z=h.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===z.length)for(l=p.length-1,n=z.length-1;1<=l&&0<=n&&p[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==z[n]){var O=`
`+p[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=n);break}}}finally{cc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ml(a):""}function Gh(e){switch(e.tag){case 26:case 27:case 5:return ml(e.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 15:return rc(e.type,!1);case 11:return rc(e.type.render,!1);case 1:return rc(e.type,!0);case 31:return ml("Activity");default:return""}}function rs(e){try{var t="";do t+=Gh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yh(e){var t=os(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,u.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=Yh(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=os(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xh=/[\n"\\]/g;function Et(e){return e.replace(Xh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function oc(e,t,a,l,n,u,s,h){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?sc(e,s,jt(t)):a!=null?sc(e,s,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function fs(e,t,a,l,n,u,s,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function sc(e,t,a){t==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ds(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function hs(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ge(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function gl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ms(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ps(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ms(e,n,l)}else for(var u in t)t.hasOwnProperty(u)&&ms(e,u,t[u])}function fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ji(e){return Vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var dc=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,yl=null;function gs(e){var t=fl(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(oc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(r(90));oc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ss(l)}break e;case"textarea":ds(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pl(e,!!a.multiple,t,!1)}}}var mc=!1;function vs(e,t,a){if(mc)return e(t,a);mc=!0;try{var l=e(t);return l}finally{if(mc=!1,(vl!==null||yl!==null)&&(cu(),vl&&(t=vl,e=yl,yl=vl=null,gs(t),e)))for(t=0;t<e.length;t++)gs(e[t])}}function sn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(Ft)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){pc=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{pc=!1}var va=null,gc=null,Ei=null;function ys(){if(Ei)return Ei;var e,t=gc,a=t.length,l,n="value"in va?va.value:va.textContent,u=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[u-l];l++);return Ei=n.slice(e,1<l?1-l:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function bs(){return!1}function ut(e){function t(a,l,n,u,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ai:bs,this.isPropagationStopped=bs,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=ut(ka),dn=S({},ka,{view:0,detail:0}),Zh=ut(dn),vc,yc,hn,Ti=S({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(vc=e.screenX-hn.screenX,yc=e.screenY-hn.screenY):yc=vc=0,hn=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),xs=ut(Ti),Kh=S({},Ti,{dataTransfer:0}),Jh=ut(Kh),$h=S({},dn,{relatedTarget:0}),bc=ut($h),Wh=S({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=ut(Wh),Ph=S({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=ut(Ph),em=S({},ka,{data:0}),Ss=ut(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function xc(){return nm}var im=S({},dn,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=ut(im),cm=S({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=ut(cm),rm=S({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),om=ut(rm),sm=S({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=ut(sm),dm=S({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ut(dm),mm=S({},ka,{newState:0,oldState:0}),pm=ut(mm),gm=[9,13,27,32],Sc=Ft&&"CompositionEvent"in window,mn=null;Ft&&"documentMode"in document&&(mn=document.documentMode);var vm=Ft&&"TextEvent"in window&&!mn,Es=Ft&&(!Sc||mn&&8<mn&&11>=mn),zs=" ",As=!1;function Rs(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function ym(e,t){switch(e){case"compositionend":return Ts(t);case"keypress":return t.which!==32?null:(As=!0,zs);case"textInput":return e=t.data,e===zs&&As?null:e;default:return null}}function bm(e,t){if(bl)return e==="compositionend"||!Sc&&Rs(e,t)?(e=ys(),Ei=gc=va=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Es&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function Ds(e,t,a,l){vl?yl?yl.push(l):yl=[l]:vl=l,t=hu(t,"onChange"),0<t.length&&(a=new Ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var pn=null,gn=null;function Sm(e){s0(e,0)}function _i(e){var t=on(e);if(ss(t))return e}function Os(e,t){if(e==="change")return t}var Ms=!1;if(Ft){var jc;if(Ft){var Ec="oninput"in document;if(!Ec){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),Ec=typeof Cs.oninput=="function"}jc=Ec}else jc=!1;Ms=jc&&(!document.documentMode||9<document.documentMode)}function ws(){pn&&(pn.detachEvent("onpropertychange",Ns),gn=pn=null)}function Ns(e){if(e.propertyName==="value"&&_i(gn)){var t=[];Ds(t,gn,e,hc(e)),vs(Sm,t)}}function jm(e,t,a){e==="focusin"?(ws(),pn=t,gn=a,pn.attachEvent("onpropertychange",Ns)):e==="focusout"&&ws()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(gn)}function zm(e,t){if(e==="click")return _i(t)}function Am(e,t){if(e==="input"||e==="change")return _i(t)}function Rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Rm;function vn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!St.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,t){var a=Us(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Us(a)}}function Bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Si(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Si(e.document)}return t}function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tm=Ft&&"documentMode"in document&&11>=document.documentMode,xl=null,Ac=null,yn=null,Rc=!1;function Ls(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||xl==null||xl!==Si(l)||(l=xl,"selectionStart"in l&&zc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yn&&vn(yn,l)||(yn=l,l=hu(Ac,"onSelect"),0<l.length&&(t=new Ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=xl)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sl={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Tc={},Gs={};Ft&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function Za(e){if(Tc[e])return Tc[e];if(!Sl[e])return e;var t=Sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gs)return Tc[e]=t[a];return e}var Ys=Za("animationend"),Xs=Za("animationiteration"),Qs=Za("animationstart"),_m=Za("transitionrun"),Dm=Za("transitionstart"),Om=Za("transitioncancel"),ks=Za("transitionend"),Vs=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function Nt(e,t){Vs.set(e,t),Qa(t,[e])}var Zs=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=Zs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:rs(t)},Zs.set(e,t),t)}return{value:e,source:t,stack:rs(t)}}var At=[],jl=0,Dc=0;function Di(){for(var e=jl,t=Dc=jl=0;t<e;){var a=At[t];At[t++]=null;var l=At[t];At[t++]=null;var n=At[t];At[t++]=null;var u=At[t];if(At[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}u!==0&&Ks(a,n,u)}}function Oi(e,t,a,l){At[jl++]=e,At[jl++]=t,At[jl++]=a,At[jl++]=l,Dc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Oc(e,t,a,l){return Oi(e,t,a,l),Mi(e)}function El(e,t){return Oi(e,null,null,t),Mi(e)}function Ks(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-dt(a),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),u):null}function Mi(e){if(50<Qn)throw Qn=0,Hr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zl={};function Mm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new Mm(e,t,a,l)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Js(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,a,l,n,u){var s=0;if(l=e,typeof e=="function")Mc(e)&&(s=1);else if(typeof e=="string")s=wp(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case je:return e=mt(31,a,t,n),e.elementType=je,e.lanes=u,e;case q:return Ka(a.children,n,u,t);case k:s=8,n|=24;break;case L:return e=mt(12,a,t,n|2),e.elementType=L,e.lanes=u,e;case Z:return e=mt(13,a,t,n),e.elementType=Z,e.lanes=u,e;case le:return e=mt(19,a,t,n),e.elementType=le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:case V:s=10;break e;case B:s=9;break e;case ae:s=11;break e;case $:s=14;break e;case Ae:s=16,l=null;break e}s=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=mt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=u,t}function Ka(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function Cc(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function wc(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Al=[],Rl=0,wi=null,Ni=0,Rt=[],Tt=0,Ja=null,It=1,ea="";function $a(e,t){Al[Rl++]=Ni,Al[Rl++]=wi,wi=e,Ni=t}function $s(e,t,a){Rt[Tt++]=It,Rt[Tt++]=ea,Rt[Tt++]=Ja,Ja=e;var l=It;e=ea;var n=32-dt(l)-1;l&=~(1<<n),a+=1;var u=32-dt(t)+n;if(30<u){var s=n-n%5;u=(l&(1<<s)-1).toString(32),l>>=s,n-=s,It=1<<32-dt(t)+n|a<<n|l,ea=u+e}else It=1<<u|a<<n|l,ea=e}function Nc(e){e.return!==null&&($a(e,1),$s(e,1,0))}function Uc(e){for(;e===wi;)wi=Al[--Rl],Al[Rl]=null,Ni=Al[--Rl],Al[Rl]=null;for(;e===Ja;)Ja=Rt[--Tt],Rt[Tt]=null,ea=Rt[--Tt],Rt[Tt]=null,It=Rt[--Tt],Rt[Tt]=null}var at=null,Oe=null,me=!1,Wa=null,Lt=!1,Hc=Error(r(519));function Fa(e){var t=Error(r(418,""));throw Sn(zt(t,e)),Hc}function Ws(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Pe]=e,t[it]=l,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Vn.length;a++)fe(Vn[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),fs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xi(t);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),hs(t,l.value,l.defaultValue,l.children),xi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||m0(t.textContent,a)?(l.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),l.onScroll!=null&&fe("scroll",t),l.onScrollEnd!=null&&fe("scrollend",t),l.onClick!=null&&(t.onclick=mu),t=!0):t=!1,t||Fa(e)}function Fs(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:at=at.return}}function bn(e){if(e!==at)return!1;if(!me)return Fs(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pr(e.type,e.memoizedProps)),a=!a),a&&Oe&&Fa(e),Fs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Oe=Ht(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,wa(e.type)?(e=ao,ao=null,Oe=e):Oe=t):Oe=at?Ht(e.stateNode.nextSibling):null;return!0}function xn(){Oe=at=null,me=!1}function Ps(){var e=Wa;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Wa=null),e}function Sn(e){Wa===null?Wa=[e]:Wa.push(e)}var Bc=N(null),Pa=null,ta=null;function ya(e,t,a){X(Bc,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=Bc.current,G(Bc)}function qc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Lc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var s=n.child;u=u.firstContext;e:for(;u!==null;){var h=u;u=n;for(var p=0;p<t.length;p++)if(h.context===t[p]){u.lanes|=a,h=u.alternate,h!==null&&(h.lanes|=a),qc(u.return,a,e),l||(s=null);break e}u=h.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(r(341));s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),qc(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function jn(e,t,a,l){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var h=n.type;ht(n.pendingProps.value,s.value)||(e!==null?e.push(h):e=[h])}}else if(n===Ye.current){if(s=n.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Fn):e=[Fn])}n=n.return}e!==null&&Lc(t,e,a,l),t.flags|=262144}function Ui(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Pa=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Is(Pa,e)}function Hi(e,t){return Pa===null&&Ia(e),Is(e,t)}function Is(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(r(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var Cm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wm=i.unstable_scheduleCallback,Nm=i.unstable_NormalPriority,Be={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new Cm,data:new Map,refCount:0}}function En(e){e.refCount--,e.refCount===0&&wm(Nm,function(){e.controller.abort()})}var zn=null,Yc=0,Tl=0,_l=null;function Um(e,t){if(zn===null){var a=zn=[];Yc=0,Tl=Qr(),_l={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Yc++,t.then(ef,ef),t}function ef(){if(--Yc===0&&zn!==null){_l!==null&&(_l.status="fulfilled");var e=zn;zn=null,Tl=0,_l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var tf=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(e,t),tf!==null&&tf(e,t)};var el=N(null);function Xc(){var e=el.current;return e!==null?e:ze.pooledCache}function Bi(e,t){t===null?X(el,el.current):X(el,t.pool)}function af(){var e=Xc();return e===null?null:{parent:Be._currentValue,pool:e}}var An=Error(r(460)),lf=Error(r(474)),qi=Error(r(542)),Qc={then:function(){}};function nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Li(){}function uf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Li,Li),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rf(e),e;default:if(typeof t.status=="string")t.then(Li,Li);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rf(e),e}throw Rn=t,An}}var Rn=null;function cf(){if(Rn===null)throw Error(r(459));var e=Rn;return Rn=null,e}function rf(e){if(e===An||e===qi)throw Error(r(483))}var ba=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Mi(e),Ks(e,null,a),t}return Oi(e,l,t,a),Mi(e)}function Tn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,es(e,a)}}function Zc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=s:u=u.next=s,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Kc=!1;function _n(){if(Kc){var e=_l;if(e!==null)throw e}}function Dn(e,t,a,l){Kc=!1;var n=e.updateQueue;ba=!1;var u=n.firstBaseUpdate,s=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var p=h,z=p.next;p.next=null,s===null?u=z:s.next=z,s=p;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==s&&(h===null?O.firstBaseUpdate=z:h.next=z,O.lastBaseUpdate=p))}if(u!==null){var w=n.baseState;s=0,O=z=p=null,h=u;do{var R=h.lane&-536870913,T=R!==h.lane;if(T?(de&R)===R:(l&R)===R){R!==0&&R===Tl&&(Kc=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var te=e,P=h;R=t;var Se=a;switch(P.tag){case 1:if(te=P.payload,typeof te=="function"){w=te.call(Se,w,R);break e}w=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=P.payload,R=typeof te=="function"?te.call(Se,w,R):te,R==null)break e;w=S({},w,R);break e;case 2:ba=!0}}R=h.callback,R!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[R]:T.push(R))}else T={lane:R,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(z=O=T,p=w):O=O.next=T,s|=R;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;T=h,h=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);O===null&&(p=w),n.baseState=p,n.firstBaseUpdate=z,n.lastBaseUpdate=O,u===null&&(n.shared.lanes=0),Da|=s,e.lanes=s,e.memoizedState=w}}function of(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function sf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)of(a[e],t)}var Dl=N(null),Gi=N(0);function ff(e,t){e=oa,X(Gi,e),X(Dl,t),oa=e|t.baseLanes}function Jc(){X(Gi,oa),X(Dl,Dl.current)}function $c(){oa=Gi.current,G(Dl),G(Gi)}var ja=0,ue=null,be=null,Ne=null,Yi=!1,Ol=!1,tl=!1,Xi=0,On=0,Ml=null,Bm=0;function Ce(){throw Error(r(321))}function Wc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Fc(e,t,a,l,n,u){return ja=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Jf:$f,tl=!1,u=a(l,n),tl=!1,Ol&&(u=hf(t,a,l,n)),df(e),u}function df(e){D.H=Ji;var t=be!==null&&be.next!==null;if(ja=0,Ne=be=ue=null,Yi=!1,On=0,Ml=null,t)throw Error(r(300));e===null||Qe||(e=e.dependencies,e!==null&&Ui(e)&&(Qe=!0))}function hf(e,t,a,l){ue=e;var n=0;do{if(Ol&&(Ml=null),On=0,Ol=!1,25<=n)throw Error(r(301));if(n+=1,Ne=be=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=km,u=t(a,l)}while(Ol);return u}function qm(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Mn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ue.flags|=1024),t}function Pc(){var e=Xi!==0;return Xi=0,e}function Ic(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function er(e){if(Yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yi=!1}ja=0,Ne=be=ue=null,Ol=!1,On=Xi=0,Ml=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ue(){if(be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ne===null?ue.memoizedState:Ne.next;if(t!==null)Ne=t,be=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mn(e){var t=On;return On+=1,Ml===null&&(Ml=[]),e=uf(Ml,e,t),t=ue,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Jf:$f),e}function Qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mn(e);if(e.$$typeof===V)return Ie(e)}throw Error(r(438,String(e)))}function ar(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=tr(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=tt;return t.index++,a}function la(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=Ue();return lr(t,be,e)}function lr(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var s=n.next;n.next=u.next,u.next=s}t.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var h=s=null,p=null,z=t,O=!1;do{var w=z.lane&-536870913;if(w!==z.lane?(de&w)===w:(ja&w)===w){var R=z.revertLane;if(R===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),w===Tl&&(O=!0);else if((ja&R)===R){z=z.next,R===Tl&&(O=!0);continue}else w={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},p===null?(h=p=w,s=u):p=p.next=w,ue.lanes|=R,Da|=R;w=z.action,tl&&a(u,w),u=z.hasEagerState?z.eagerState:a(u,w)}else R={lane:w,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},p===null?(h=p=R,s=u):p=p.next=R,ue.lanes|=w,Da|=w;z=z.next}while(z!==null&&z!==t);if(p===null?s=u:p.next=h,!ht(u,e.memoizedState)&&(Qe=!0,O&&(a=_l,a!==null)))throw a;e.memoizedState=u,e.baseState=s,e.baseQueue=p,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function nr(e){var t=Ue(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do u=e(u,s.action),s=s.next;while(s!==n);ht(u,t.memoizedState)||(Qe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function mf(e,t,a){var l=ue,n=Ue(),u=me;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var s=!ht((be||n).memoizedState,a);s&&(n.memoizedState=a,Qe=!0),n=n.queue;var h=vf.bind(null,l,n,e);if(Cn(2048,8,h,[e]),n.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(l.flags|=2048,Cl(9,Vi(),gf.bind(null,l,n,a,t),null),ze===null)throw Error(r(349));u||(ja&124)!==0||pf(l,t,a)}return a}function pf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=tr(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function gf(e,t,a,l){t.value=a,t.getSnapshot=l,yf(t)&&bf(e)}function vf(e,t,a){return a(function(){yf(t)&&bf(e)})}function yf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function bf(e){var t=El(e,2);t!==null&&bt(t,e,2)}function ir(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),tl){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function xf(e,t,a,l){return e.baseState=a,lr(e,be,typeof l=="function"?l:la)}function Lm(e,t,a,l,n){if(Ki(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};D.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,Sf(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Sf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var u=D.T,s={};D.T=s;try{var h=a(n,l),p=D.S;p!==null&&p(s,h),jf(e,t,h)}catch(z){ur(e,t,z)}finally{D.T=u}}else try{u=a(n,l),jf(e,t,u)}catch(z){ur(e,t,z)}}function jf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ef(e,t,l)},function(l){return ur(e,t,l)}):Ef(e,t,a)}function Ef(e,t,a){t.status="fulfilled",t.value=a,zf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Sf(e,a)))}function ur(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,zf(t),t=t.next;while(t!==l)}e.action=null}function zf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Af(e,t){return t}function Rf(e,t){if(me){var a=ze.formState;if(a!==null){e:{var l=ue;if(me){if(Oe){t:{for(var n=Oe,u=Lt;n.nodeType!==8;){if(!u){n=null;break t}if(n=Ht(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Oe=Ht(n.nextSibling),l=n.data==="F!";break e}}Fa(l)}l=!1}l&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Af,lastRenderedState:t},a.queue=l,a=Vf.bind(null,ue,l),l.dispatch=a,l=ir(!1),u=fr.bind(null,ue,!1,l.queue),l=ct(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Lm.bind(null,ue,n,u,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Tf(e){var t=Ue();return _f(t,be,e)}function _f(e,t,a){if(t=lr(e,t,Af)[0],e=ki(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Mn(t)}catch(s){throw s===An?qi:s}else l=t;t=Ue();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Cl(9,Vi(),Gm.bind(null,n,a),null)),[l,u,e]}function Gm(e,t){e.action=t}function Df(e){var t=Ue(),a=be;if(a!==null)return _f(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=tr(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Vi(){return{destroy:void 0,resource:void 0}}function Of(){return Ue().memoizedState}function Zi(e,t,a,l){var n=ct();l=l===void 0?null:l,ue.flags|=e,n.memoizedState=Cl(1|t,Vi(),a,l)}function Cn(e,t,a,l){var n=Ue();l=l===void 0?null:l;var u=n.memoizedState.inst;be!==null&&l!==null&&Wc(l,be.memoizedState.deps)?n.memoizedState=Cl(t,u,a,l):(ue.flags|=e,n.memoizedState=Cl(1|t,u,a,l))}function Mf(e,t){Zi(8390656,8,e,t)}function Cf(e,t){Cn(2048,8,e,t)}function wf(e,t){return Cn(4,2,e,t)}function Nf(e,t){return Cn(4,4,e,t)}function Uf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hf(e,t,a){a=a!=null?a.concat([e]):null,Cn(4,4,Uf.bind(null,t,e),a)}function cr(){}function Bf(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Wc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function qf(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Wc(t,l[1]))return l[0];if(l=e(),tl){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l}function rr(e,t,a){return a===void 0||(ja&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Yd(),ue.lanes|=e,Da|=e,a)}function Lf(e,t,a,l){return ht(a,t)?a:Dl.current!==null?(e=rr(e,a,l),ht(e,t)||(Qe=!0),e):(ja&42)===0?(Qe=!0,e.memoizedState=a):(e=Yd(),ue.lanes|=e,Da|=e,t)}function Gf(e,t,a,l,n){var u=Y.p;Y.p=u!==0&&8>u?u:8;var s=D.T,h={};D.T=h,fr(e,!1,t,a);try{var p=n(),z=D.S;if(z!==null&&z(h,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=Hm(p,l);wn(e,t,O,yt(e))}else wn(e,t,l,yt(e))}catch(w){wn(e,t,{then:function(){},status:"rejected",reason:w},yt())}finally{Y.p=u,D.T=s}}function Ym(){}function or(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=Yf(e).queue;Gf(e,n,t,F,a===null?Ym:function(){return Xf(e),a(l)})}function Yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xf(e){var t=Yf(e).next.queue;wn(e,t,{},yt())}function sr(){return Ie(Fn)}function Qf(){return Ue().memoizedState}function kf(){return Ue().memoizedState}function Xm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=yt();e=xa(a);var l=Sa(t,e,a);l!==null&&(bt(l,t,a),Tn(l,t,a)),t={cache:Gc()},e.payload=t;return}t=t.return}}function Qm(e,t,a){var l=yt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)?Zf(t,a):(a=Oc(e,t,a,l),a!==null&&(bt(a,e,l),Kf(a,t,l)))}function Vf(e,t,a){var l=yt();wn(e,t,a,l)}function wn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Zf(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var s=t.lastRenderedState,h=u(s,a);if(n.hasEagerState=!0,n.eagerState=h,ht(h,s))return Oi(e,t,n,0),ze===null&&Di(),!1}catch{}finally{}if(a=Oc(e,t,n,l),a!==null)return bt(a,e,l),Kf(a,t,l),!0}return!1}function fr(e,t,a,l){if(l={lane:2,revertLane:Qr(),action:l,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(t)throw Error(r(479))}else t=Oc(e,a,l,2),t!==null&&bt(t,e,2)}function Ki(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Zf(e,t){Ol=Yi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Kf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,es(e,a)}}var Ji={readContext:Ie,use:Qi,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce},Jf={readContext:Ie,use:Qi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Mf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Zi(4194308,4,Uf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){Zi(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var l=e();if(tl){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ct();if(a!==void 0){var n=a(t);if(tl){pa(!0);try{a(t)}finally{pa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Qm.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=ir(e);var t=e.queue,a=Vf.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:cr,useDeferredValue:function(e,t){var a=ct();return rr(a,e,t)},useTransition:function(){var e=ir(!1);return e=Gf.bind(null,ue,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,n=ct();if(me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),ze===null)throw Error(r(349));(de&124)!==0||pf(l,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,Mf(vf.bind(null,l,u,e),[e]),l.flags|=2048,Cl(9,Vi(),gf.bind(null,l,u,a,t),null),a},useId:function(){var e=ct(),t=ze.identifierPrefix;if(me){var a=ea,l=It;a=(l&~(1<<32-dt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Xi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Bm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:sr,useFormState:Rf,useActionState:Rf,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=fr.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:ar,useCacheRefresh:function(){return ct().memoizedState=Xm.bind(null,ue)}},$f={readContext:Ie,use:Qi,useCallback:Bf,useContext:Ie,useEffect:Cf,useImperativeHandle:Hf,useInsertionEffect:wf,useLayoutEffect:Nf,useMemo:qf,useReducer:ki,useRef:Of,useState:function(){return ki(la)},useDebugValue:cr,useDeferredValue:function(e,t){var a=Ue();return Lf(a,be.memoizedState,e,t)},useTransition:function(){var e=ki(la)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:mf,useId:Qf,useHostTransitionStatus:sr,useFormState:Tf,useActionState:Tf,useOptimistic:function(e,t){var a=Ue();return xf(a,be,e,t)},useMemoCache:ar,useCacheRefresh:kf},km={readContext:Ie,use:Qi,useCallback:Bf,useContext:Ie,useEffect:Cf,useImperativeHandle:Hf,useInsertionEffect:wf,useLayoutEffect:Nf,useMemo:qf,useReducer:nr,useRef:Of,useState:function(){return nr(la)},useDebugValue:cr,useDeferredValue:function(e,t){var a=Ue();return be===null?rr(a,e,t):Lf(a,be.memoizedState,e,t)},useTransition:function(){var e=nr(la)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:mf,useId:Qf,useHostTransitionStatus:sr,useFormState:Df,useActionState:Df,useOptimistic:function(e,t){var a=Ue();return be!==null?xf(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ar,useCacheRefresh:kf},wl=null,Nn=0;function $i(e){var t=Nn;return Nn+=1,wl===null&&(wl=[]),uf(wl,e,t)}function Un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wi(e,t){throw t.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wf(e){var t=e._init;return t(e._payload)}function Ff(e){function t(j,x){if(e){var E=j.deletions;E===null?(j.deletions=[x],j.flags|=16):E.push(x)}}function a(j,x){if(!e)return null;for(;x!==null;)t(j,x),x=x.sibling;return null}function l(j){for(var x=new Map;j!==null;)j.key!==null?x.set(j.key,j):x.set(j.index,j),j=j.sibling;return x}function n(j,x){return j=Pt(j,x),j.index=0,j.sibling=null,j}function u(j,x,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<x?(j.flags|=67108866,x):E):(j.flags|=67108866,x)):(j.flags|=1048576,x)}function s(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,x,E,M){return x===null||x.tag!==6?(x=Cc(E,j.mode,M),x.return=j,x):(x=n(x,E),x.return=j,x)}function p(j,x,E,M){var K=E.type;return K===q?O(j,x,E.props.children,M,E.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Wf(K)===x.type)?(x=n(x,E.props),Un(x,E),x.return=j,x):(x=Ci(E.type,E.key,E.props,null,j.mode,M),Un(x,E),x.return=j,x)}function z(j,x,E,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=wc(E,j.mode,M),x.return=j,x):(x=n(x,E.children||[]),x.return=j,x)}function O(j,x,E,M,K){return x===null||x.tag!==7?(x=Ka(E,j.mode,M,K),x.return=j,x):(x=n(x,E),x.return=j,x)}function w(j,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Cc(""+x,j.mode,E),x.return=j,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return E=Ci(x.type,x.key,x.props,null,j.mode,E),Un(E,x),E.return=j,E;case H:return x=wc(x,j.mode,E),x.return=j,x;case Ae:var M=x._init;return x=M(x._payload),w(j,x,E)}if(Ge(x)||Le(x))return x=Ka(x,j.mode,E,null),x.return=j,x;if(typeof x.then=="function")return w(j,$i(x),E);if(x.$$typeof===V)return w(j,Hi(j,x),E);Wi(j,x)}return null}function R(j,x,E,M){var K=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return K!==null?null:h(j,x,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return E.key===K?p(j,x,E,M):null;case H:return E.key===K?z(j,x,E,M):null;case Ae:return K=E._init,E=K(E._payload),R(j,x,E,M)}if(Ge(E)||Le(E))return K!==null?null:O(j,x,E,M,null);if(typeof E.then=="function")return R(j,x,$i(E),M);if(E.$$typeof===V)return R(j,x,Hi(j,E),M);Wi(j,E)}return null}function T(j,x,E,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return j=j.get(E)||null,h(x,j,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case U:return j=j.get(M.key===null?E:M.key)||null,p(x,j,M,K);case H:return j=j.get(M.key===null?E:M.key)||null,z(x,j,M,K);case Ae:var ce=M._init;return M=ce(M._payload),T(j,x,E,M,K)}if(Ge(M)||Le(M))return j=j.get(E)||null,O(x,j,M,K,null);if(typeof M.then=="function")return T(j,x,E,$i(M),K);if(M.$$typeof===V)return T(j,x,E,Hi(x,M),K);Wi(x,M)}return null}function te(j,x,E,M){for(var K=null,ce=null,J=x,ee=x=0,Ve=null;J!==null&&ee<E.length;ee++){J.index>ee?(Ve=J,J=null):Ve=J.sibling;var he=R(j,J,E[ee],M);if(he===null){J===null&&(J=Ve);break}e&&J&&he.alternate===null&&t(j,J),x=u(he,x,ee),ce===null?K=he:ce.sibling=he,ce=he,J=Ve}if(ee===E.length)return a(j,J),me&&$a(j,ee),K;if(J===null){for(;ee<E.length;ee++)J=w(j,E[ee],M),J!==null&&(x=u(J,x,ee),ce===null?K=J:ce.sibling=J,ce=J);return me&&$a(j,ee),K}for(J=l(J);ee<E.length;ee++)Ve=T(J,j,ee,E[ee],M),Ve!==null&&(e&&Ve.alternate!==null&&J.delete(Ve.key===null?ee:Ve.key),x=u(Ve,x,ee),ce===null?K=Ve:ce.sibling=Ve,ce=Ve);return e&&J.forEach(function(qa){return t(j,qa)}),me&&$a(j,ee),K}function P(j,x,E,M){if(E==null)throw Error(r(151));for(var K=null,ce=null,J=x,ee=x=0,Ve=null,he=E.next();J!==null&&!he.done;ee++,he=E.next()){J.index>ee?(Ve=J,J=null):Ve=J.sibling;var qa=R(j,J,he.value,M);if(qa===null){J===null&&(J=Ve);break}e&&J&&qa.alternate===null&&t(j,J),x=u(qa,x,ee),ce===null?K=qa:ce.sibling=qa,ce=qa,J=Ve}if(he.done)return a(j,J),me&&$a(j,ee),K;if(J===null){for(;!he.done;ee++,he=E.next())he=w(j,he.value,M),he!==null&&(x=u(he,x,ee),ce===null?K=he:ce.sibling=he,ce=he);return me&&$a(j,ee),K}for(J=l(J);!he.done;ee++,he=E.next())he=T(J,j,ee,he.value,M),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?ee:he.key),x=u(he,x,ee),ce===null?K=he:ce.sibling=he,ce=he);return e&&J.forEach(function(Vp){return t(j,Vp)}),me&&$a(j,ee),K}function Se(j,x,E,M){if(typeof E=="object"&&E!==null&&E.type===q&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case U:e:{for(var K=E.key;x!==null;){if(x.key===K){if(K=E.type,K===q){if(x.tag===7){a(j,x.sibling),M=n(x,E.props.children),M.return=j,j=M;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Wf(K)===x.type){a(j,x.sibling),M=n(x,E.props),Un(M,E),M.return=j,j=M;break e}a(j,x);break}else t(j,x);x=x.sibling}E.type===q?(M=Ka(E.props.children,j.mode,M,E.key),M.return=j,j=M):(M=Ci(E.type,E.key,E.props,null,j.mode,M),Un(M,E),M.return=j,j=M)}return s(j);case H:e:{for(K=E.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){a(j,x.sibling),M=n(x,E.children||[]),M.return=j,j=M;break e}else{a(j,x);break}else t(j,x);x=x.sibling}M=wc(E,j.mode,M),M.return=j,j=M}return s(j);case Ae:return K=E._init,E=K(E._payload),Se(j,x,E,M)}if(Ge(E))return te(j,x,E,M);if(Le(E)){if(K=Le(E),typeof K!="function")throw Error(r(150));return E=K.call(E),P(j,x,E,M)}if(typeof E.then=="function")return Se(j,x,$i(E),M);if(E.$$typeof===V)return Se(j,x,Hi(j,E),M);Wi(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,x!==null&&x.tag===6?(a(j,x.sibling),M=n(x,E),M.return=j,j=M):(a(j,x),M=Cc(E,j.mode,M),M.return=j,j=M),s(j)):a(j,x)}return function(j,x,E,M){try{Nn=0;var K=Se(j,x,E,M);return wl=null,K}catch(J){if(J===An||J===qi)throw J;var ce=mt(29,J,null,j.mode);return ce.lanes=M,ce.return=j,ce}finally{}}}var Nl=Ff(!0),Pf=Ff(!1),_t=N(null),Gt=null;function Ea(e){var t=e.alternate;X(qe,qe.current&1),X(_t,e),Gt===null&&(t===null||Dl.current!==null||t.memoizedState!==null)&&(Gt=e)}function If(e){if(e.tag===22){if(X(qe,qe.current),X(_t,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else za()}function za(){X(qe,qe.current),X(_t,_t.current)}function na(e){G(_t),Gt===e&&(Gt=null),G(qe)}var qe=N(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||to(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function dr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=yt(),n=xa(l);n.payload=t,a!=null&&(n.callback=a),t=Sa(e,n,l),t!==null&&(bt(t,e,l),Tn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=yt(),n=xa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Sa(e,n,l),t!==null&&(bt(t,e,l),Tn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=yt(),l=xa(a);l.tag=2,t!=null&&(l.callback=t),t=Sa(e,l,a),t!==null&&(bt(t,e,a),Tn(t,e,a))}};function ed(e,t,a,l,n,u,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,s):t.prototype&&t.prototype.isPureReactComponent?!vn(a,l)||!vn(n,u):!0}function td(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&hr.enqueueReplaceState(t,t.state,null)}function al(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ad(e){Pi(e)}function ld(e){console.error(e)}function nd(e){Pi(e)}function Ii(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function id(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mr(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ii(e,t)},a}function ud(e){return e=xa(e),e.tag=3,e}function cd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){id(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){id(t,a,l),typeof n!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function Vm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&jn(t,a,n,!0),a=_t.current,a!==null){switch(a.tag){case 13:return Gt===null?qr():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Qc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Gr(e,l,n)),!1;case 22:return a.flags|=65536,l===Qc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Gr(e,l,n)),!1}throw Error(r(435,a.tag))}return Gr(e,l,n),qr(),!1}if(me)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Hc&&(e=Error(r(422),{cause:l}),Sn(zt(e,a)))):(l!==Hc&&(t=Error(r(423),{cause:l}),Sn(zt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=zt(l,a),n=mr(e.stateNode,l,n),Zc(e,n),Me!==4&&(Me=2)),!1;var u=Error(r(520),{cause:l});if(u=zt(u,a),Xn===null?Xn=[u]:Xn.push(u),Me!==4&&(Me=2),t===null)return!0;l=zt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=mr(a.stateNode,l,e),Zc(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Oa===null||!Oa.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ud(n),cd(n,e,a,l),Zc(a,n),!1}a=a.return}while(a!==null);return!1}var rd=Error(r(461)),Qe=!1;function Ke(e,t,a,l){t.child=e===null?Pf(t,null,a,l):Nl(t,e.child,a,l)}function od(e,t,a,l,n){a=a.render;var u=t.ref;if("ref"in l){var s={};for(var h in l)h!=="ref"&&(s[h]=l[h])}else s=l;return Ia(t),l=Fc(e,t,a,s,u,n),h=Pc(),e!==null&&!Qe?(Ic(e,t,n),ia(e,t,n)):(me&&h&&Nc(t),t.flags|=1,Ke(e,t,l,n),t.child)}function sd(e,t,a,l,n){if(e===null){var u=a.type;return typeof u=="function"&&!Mc(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,fd(e,t,u,l,n)):(e=Ci(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!jr(e,n)){var s=u.memoizedProps;if(a=a.compare,a=a!==null?a:vn,a(s,l)&&e.ref===t.ref)return ia(e,t,n)}return t.flags|=1,e=Pt(u,l),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,a,l,n){if(e!==null){var u=e.memoizedProps;if(vn(u,l)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=l=u,jr(e,n))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ia(e,t,n)}return pr(e,t,a,l,n)}function dd(e,t,a){var l=t.pendingProps,n=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return hd(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bi(t,u!==null?u.cachePool:null),u!==null?ff(t,u):Jc(),If(t);else return t.lanes=t.childLanes=536870912,hd(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(Bi(t,u.cachePool),ff(t,u),za(),t.memoizedState=null):(e!==null&&Bi(t,null),Jc(),za());return Ke(e,t,n,a),t.child}function hd(e,t,a,l){var n=Xc();return n=n===null?null:{parent:Be._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Bi(t,null),Jc(),If(t),e!==null&&jn(e,t,l,!0),null}function eu(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function pr(e,t,a,l,n){return Ia(t),a=Fc(e,t,a,l,void 0,n),l=Pc(),e!==null&&!Qe?(Ic(e,t,n),ia(e,t,n)):(me&&l&&Nc(t),t.flags|=1,Ke(e,t,a,n),t.child)}function md(e,t,a,l,n,u){return Ia(t),t.updateQueue=null,a=hf(t,l,a,n),df(e),l=Pc(),e!==null&&!Qe?(Ic(e,t,u),ia(e,t,u)):(me&&l&&Nc(t),t.flags|=1,Ke(e,t,a,u),t.child)}function pd(e,t,a,l,n){if(Ia(t),t.stateNode===null){var u=zl,s=a.contextType;typeof s=="object"&&s!==null&&(u=Ie(s)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=hr,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},kc(t),s=a.contextType,u.context=typeof s=="object"&&s!==null?Ie(s):zl,u.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(dr(t,a,s,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&hr.enqueueReplaceState(u,u.state,null),Dn(t,l,u,n),_n(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var h=t.memoizedProps,p=al(a,h);u.props=p;var z=u.context,O=a.contextType;s=zl,typeof O=="object"&&O!==null&&(s=Ie(O));var w=a.getDerivedStateFromProps;O=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||z!==s)&&td(t,u,l,s),ba=!1;var R=t.memoizedState;u.state=R,Dn(t,l,u,n),_n(),z=t.memoizedState,h||R!==z||ba?(typeof w=="function"&&(dr(t,a,w,l),z=t.memoizedState),(p=ba||ed(t,a,p,l,R,z,s))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),u.props=l,u.state=z,u.context=s,l=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Vc(e,t),s=t.memoizedProps,O=al(a,s),u.props=O,w=t.pendingProps,R=u.context,z=a.contextType,p=zl,typeof z=="object"&&z!==null&&(p=Ie(z)),h=a.getDerivedStateFromProps,(z=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==w||R!==p)&&td(t,u,l,p),ba=!1,R=t.memoizedState,u.state=R,Dn(t,l,u,n),_n();var T=t.memoizedState;s!==w||R!==T||ba||e!==null&&e.dependencies!==null&&Ui(e.dependencies)?(typeof h=="function"&&(dr(t,a,h,l),T=t.memoizedState),(O=ba||ed(t,a,O,l,R,T,p)||e!==null&&e.dependencies!==null&&Ui(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,T,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,T,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),u.props=l,u.state=T,u.context=p,l=O):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,eu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Nl(t,e.child,null,n),t.child=Nl(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=u.state,e=t.child):e=ia(e,t,n),e}function gd(e,t,a,l){return xn(),t.flags|=256,Ke(e,t,a,l),t.child}var gr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vr(e){return{baseLanes:e,cachePool:af()}}function yr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function vd(e,t,a){var l=t.pendingProps,n=!1,u=(t.flags&128)!==0,s;if((s=u)||(s=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?Ea(t):za(),me){var h=Oe,p;if(p=h){e:{for(p=h,h=Lt;p.nodeType!==8;){if(!h){h=null;break e}if(p=Ht(p.nextSibling),p===null){h=null;break e}}h=p}h!==null?(t.memoizedState={dehydrated:h,treeContext:Ja!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},p=mt(18,null,null,0),p.stateNode=h,p.return=t,t.child=p,at=t,Oe=null,p=!0):p=!1}p||Fa(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return to(h)?t.lanes=32:t.lanes=536870912,null;na(t)}return h=l.children,l=l.fallback,n?(za(),n=t.mode,h=tu({mode:"hidden",children:h},n),l=Ka(l,n,a,null),h.return=t,l.return=t,h.sibling=l,t.child=h,n=t.child,n.memoizedState=vr(a),n.childLanes=yr(e,s,a),t.memoizedState=gr,l):(Ea(t),br(t,h))}if(p=e.memoizedState,p!==null&&(h=p.dehydrated,h!==null)){if(u)t.flags&256?(Ea(t),t.flags&=-257,t=xr(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),n=l.fallback,h=t.mode,l=tu({mode:"visible",children:l.children},h),n=Ka(n,h,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,Nl(t,e.child,null,a),l=t.child,l.memoizedState=vr(a),l.childLanes=yr(e,s,a),t.memoizedState=gr,t=n);else if(Ea(t),to(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var z=s.dgst;s=z,l=Error(r(419)),l.stack="",l.digest=s,Sn({value:l,source:null,stack:null}),t=xr(e,t,a)}else if(Qe||jn(e,t,a,!1),s=(a&e.childLanes)!==0,Qe||s){if(s=ze,s!==null&&(l=a&-a,l=(l&42)!==0?1:ac(l),l=(l&(s.suspendedLanes|a))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,El(e,l),bt(s,e,l),rd;h.data==="$?"||qr(),t=xr(e,t,a)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Oe=Ht(h.nextSibling),at=t,me=!0,Wa=null,Lt=!1,e!==null&&(Rt[Tt++]=It,Rt[Tt++]=ea,Rt[Tt++]=Ja,It=e.id,ea=e.overflow,Ja=t),t=br(t,l.children),t.flags|=4096);return t}return n?(za(),n=l.fallback,h=t.mode,p=e.child,z=p.sibling,l=Pt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,z!==null?n=Pt(z,n):(n=Ka(n,h,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,h=e.child.memoizedState,h===null?h=vr(a):(p=h.cachePool,p!==null?(z=Be._currentValue,p=p.parent!==z?{parent:z,pool:z}:p):p=af(),h={baseLanes:h.baseLanes|a,cachePool:p}),n.memoizedState=h,n.childLanes=yr(e,s,a),t.memoizedState=gr,l):(Ea(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function br(e,t){return t=tu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tu(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xr(e,t,a){return Nl(t,e.child,null,a),e=br(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),qc(e.return,t,a)}function Sr(e,t,a,l,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n)}function bd(e,t,a){var l=t.pendingProps,n=l.revealOrder,u=l.tail;if(Ke(e,t,l.children,a),l=qe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(X(qe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Fi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Sr(t,!1,n,a,u);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Fi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Sr(t,!0,a,null,u);break;case"together":Sr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ui(e)))}function Zm(e,t,a){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),ya(t,Be,e.memoizedState.cache),xn();break;case 27:case 5:Ya(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vd(e,t,a):(Ea(t),e=ia(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(jn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return bd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),X(qe,qe.current),l)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,a);case 24:ya(t,Be,e.memoizedState.cache)}return ia(e,t,a)}function xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!jr(e,a)&&(t.flags&128)===0)return Qe=!1,Zm(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&$s(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Mc(l)?(e=al(l,e),t.tag=1,t=pd(null,t,l,e,a)):(t.tag=0,t=pr(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ae){t.tag=11,t=od(null,t,l,e,a);break e}else if(n===$){t.tag=14,t=sd(null,t,l,e,a);break e}}throw t=Jt(l)||l,Error(r(306,t,""))}}return t;case 0:return pr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=al(l,t.pendingProps),pd(e,t,l,n,a);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var u=t.memoizedState;n=u.element,Vc(e,t),Dn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,ya(t,Be,l),l!==u.cache&&Lc(t,[Be],a,!0),_n(),l=s.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=gd(e,t,l,a);break e}else if(l!==n){n=zt(Error(r(424)),t),Sn(n),t=gd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Ht(e.firstChild),at=t,me=!0,Wa=null,Lt=!0,a=Pf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xn(),l===n){t=ia(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return eu(e,t),e===null?(a=z0(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=pu(I.current).createElement(a),l[Pe]=t,l[it]=e,$e(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=z0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ya(t),e===null&&me&&(l=t.stateNode=S0(t.type,t.pendingProps,I.current),at=t,Lt=!0,n=Oe,wa(t.type)?(ao=n,Oe=Ht(l.firstChild)):Oe=n),Ke(e,t,t.pendingProps.children,a),eu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=Oe)&&(l=xp(l,t.type,t.pendingProps,Lt),l!==null?(t.stateNode=l,at=t,Oe=Ht(l.firstChild),Lt=!1,n=!0):n=!1),n||Fa(t)),Ya(t),n=t.type,u=t.pendingProps,s=e!==null?e.memoizedProps:null,l=u.children,Pr(n,u)?l=null:s!==null&&Pr(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Fc(e,t,qm,null,null,a),Fn._currentValue=n),eu(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Oe)&&(a=Sp(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,at=t,Oe=null,e=!0):e=!1),e||Fa(t)),null;case 13:return vd(e,t,a);case 4:return pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Nl(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return od(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ya(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ia(t),n=Ie(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return sd(e,t,t.type,t.pendingProps,a);case 15:return fd(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=tu(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Pt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return dd(e,t,a);case 24:return Ia(t),l=Ie(Be),e===null?(n=Xc(),n===null&&(n=ze,u=Gc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:l,cache:n},kc(t),ya(t,Be,n)):((e.lanes&a)!==0&&(Vc(e,t),Dn(t,null,null,a),_n()),n=e.memoizedState,u=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ya(t,Be,l)):(l=u.cache,ya(t,Be,l),l!==n.cache&&Lc(t,[Be],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ua(e){e.flags|=4}function Sd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D0(t)){if(t=_t.current,t!==null&&((de&4194048)===de?Gt!==null:(de&62914560)!==de&&(de&536870912)===0||t!==Gt))throw Rn=Qc,lf;e.flags|=8192}}function au(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Po():536870912,e.lanes|=t,ql|=t)}function Hn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Km(e,t,a){var l=t.pendingProps;switch(Uc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),aa(Be),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bn(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ps())),_e(t),null;case 26:return a=t.memoizedState,e===null?(ua(t),a!==null?(_e(t),Sd(t,a)):(_e(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ua(t),_e(t),Sd(t,a)):(_e(t),t.flags&=-16777217):(e.memoizedProps!==l&&ua(t),_e(t),t.flags&=-16777217),null;case 27:$t(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return _e(t),null}e=W.current,bn(t)?Ws(t):(e=S0(n,l,a),t.stateNode=e,ua(t))}return _e(t),null;case 5:if($t(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return _e(t),null}if(e=W.current,bn(t))Ws(t);else{switch(n=pu(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Pe]=t,e[it]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch($e(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ua(t)}}return _e(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=I.current,bn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=at,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||m0(e.nodeValue,a)),e||Fa(t)}else e=pu(e).createTextNode(l),e[Pe]=t,t.stateNode=e}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=bn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Pe]=t}else xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),n=!1}else n=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(na(t),t):(na(t),null)}if(na(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),au(t,t.updateQueue),_e(t),null;case 4:return Fe(),e===null&&Kr(t.stateNode.containerInfo),_e(t),null;case 10:return aa(t.type),_e(t),null;case 19:if(G(qe),n=t.memoizedState,n===null)return _e(t),null;if(l=(t.flags&128)!==0,u=n.rendering,u===null)if(l)Hn(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Fi(e),u!==null){for(t.flags|=128,Hn(n,!1),e=u.updateQueue,t.updateQueue=e,au(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Js(a,e),a=a.sibling;return X(qe,qe.current&1|2),t.child}e=e.sibling}n.tail!==null&&qt()>iu&&(t.flags|=128,l=!0,Hn(n,!1),t.lanes=4194304)}else{if(!l)if(e=Fi(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,au(t,e),Hn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!me)return _e(t),null}else 2*qt()-n.renderingStartTime>iu&&a!==536870912&&(t.flags|=128,l=!0,Hn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=qt(),t.sibling=null,e=qe.current,X(qe,l?e&1|2:e&1),t):(_e(t),null);case 22:case 23:return na(t),$c(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&au(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&G(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Be),_e(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Jm(e,t){switch(Uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Be),Fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $t(t),null;case 13:if(na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(qe),null;case 4:return Fe(),null;case 10:return aa(t.type),null;case 22:case 23:return na(t),$c(),e!==null&&G(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Be),null;case 25:return null;default:return null}}function jd(e,t){switch(Uc(t),t.tag){case 3:aa(Be),Fe();break;case 26:case 27:case 5:$t(t);break;case 4:Fe();break;case 13:na(t);break;case 19:G(qe);break;case 10:aa(t.type);break;case 22:case 23:na(t),$c(),e!==null&&G(el);break;case 24:aa(Be)}}function Bn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var u=a.create,s=a.inst;l=u(),s.destroy=l}a=a.next}while(a!==n)}}catch(h){Ee(t,t.return,h)}}function Aa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var s=l.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,n=t;var p=a,z=h;try{z()}catch(O){Ee(n,p,O)}}}l=l.next}while(l!==u)}}catch(O){Ee(t,t.return,O)}}function Ed(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{sf(t,a)}catch(l){Ee(e,e.return,l)}}}function zd(e,t,a){a.props=al(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ee(e,t,l)}}function qn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ee(e,t,n)}}function Yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ee(e,t,n)}else a.current=null}function Ad(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ee(e,e.return,n)}}function Er(e,t,a){try{var l=e.stateNode;pp(l,e.type,a,t),l[it]=t}catch(n){Ee(e,e.return,n)}}function Rd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function zr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ar(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=mu));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ar(e,t,a),e=e.sibling;e!==null;)Ar(e,t,a),e=e.sibling}function lu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(lu(e,t,a),e=e.sibling;e!==null;)lu(e,t,a),e=e.sibling}function Td(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Pe]=e,t[it]=a}catch(u){Ee(e,e.return,u)}}var ca=!1,we=!1,Rr=!1,_d=typeof WeakSet=="function"?WeakSet:Set,ke=null;function $m(e,t){if(e=e.containerInfo,Wr=Su,e=qs(e),zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var s=0,h=-1,p=-1,z=0,O=0,w=e,R=null;t:for(;;){for(var T;w!==a||n!==0&&w.nodeType!==3||(h=s+n),w!==u||l!==0&&w.nodeType!==3||(p=s+l),w.nodeType===3&&(s+=w.nodeValue.length),(T=w.firstChild)!==null;)R=w,w=T;for(;;){if(w===e)break t;if(R===a&&++z===n&&(h=s),R===u&&++O===l&&(p=s),(T=w.nextSibling)!==null)break;w=R,R=w.parentNode}w=T}a=h===-1||p===-1?null:{start:h,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fr={focusedElem:e,selectionRange:a},Su=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var te=al(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(te,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Ee(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)eo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function Dd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),l&4&&Bn(5,a);break;case 1:if(Ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Ee(a,a.return,s)}else{var n=al(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ee(a,a.return,s)}}l&64&&Ed(a),l&512&&qn(a,a.return);break;case 3:if(Ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{sf(e,t)}catch(s){Ee(a,a.return,s)}}break;case 27:t===null&&l&4&&Td(a);case 26:case 5:Ra(e,a),t===null&&l&4&&Ad(a),l&512&&qn(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),l&4&&Cd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=np.bind(null,a),jp(e,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){t=t!==null&&t.memoizedState!==null||we,n=ca;var u=we;ca=l,(we=t)&&!u?Ta(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),ca=n,we=u}break;case 30:break;default:Ra(e,a)}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ic(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,rt=!1;function ra(e,t,a){for(a=a.child;a!==null;)Md(e,t,a),a=a.sibling}function Md(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(nn,a)}catch{}switch(a.tag){case 26:we||Yt(a,t),ra(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:we||Yt(a,t);var l=Te,n=rt;wa(a.type)&&(Te=a.stateNode,rt=!1),ra(e,t,a),Kn(a.stateNode),Te=l,rt=n;break;case 5:we||Yt(a,t);case 6:if(l=Te,n=rt,Te=null,ra(e,t,a),Te=l,rt=n,Te!==null)if(rt)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(u){Ee(a,t,u)}else try{Te.removeChild(a.stateNode)}catch(u){Ee(a,t,u)}break;case 18:Te!==null&&(rt?(e=Te,b0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ti(e)):b0(Te,a.stateNode));break;case 4:l=Te,n=rt,Te=a.stateNode.containerInfo,rt=!0,ra(e,t,a),Te=l,rt=n;break;case 0:case 11:case 14:case 15:we||Aa(2,a,t),we||Aa(4,a,t),ra(e,t,a);break;case 1:we||(Yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zd(a,t,l)),ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:we=(l=we)||a.memoizedState!==null,ra(e,t,a),we=l;break;default:ra(e,t,a)}}function Cd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ti(e)}catch(a){Ee(t,t.return,a)}}function Wm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _d),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _d),t;default:throw Error(r(435,e.tag))}}function Tr(e,t){var a=Wm(e);t.forEach(function(l){var n=ip.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function pt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],u=e,s=t,h=s;e:for(;h!==null;){switch(h.tag){case 27:if(wa(h.type)){Te=h.stateNode,rt=!1;break e}break;case 5:Te=h.stateNode,rt=!1;break e;case 3:case 4:Te=h.stateNode.containerInfo,rt=!0;break e}h=h.return}if(Te===null)throw Error(r(160));Md(u,s,n),Te=null,rt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}var Ut=null;function wd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),gt(e),l&4&&(Aa(3,e,e.return),Bn(3,e),Aa(5,e,e.return));break;case 1:pt(t,e),gt(e),l&512&&(we||a===null||Yt(a,a.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(pt(t,e),gt(e),l&512&&(we||a===null||Yt(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[rn]||u[Pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),$e(u,l,a),u[Pe]=e,Xe(u),l=u;break e;case"link":var s=T0("link","href",n).get(l+(a.href||""));if(s){for(var h=0;h<s.length;h++)if(u=s[h],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(h,1);break t}}u=n.createElement(l),$e(u,l,a),n.head.appendChild(u);break;case"meta":if(s=T0("meta","content",n).get(l+(a.content||""))){for(h=0;h<s.length;h++)if(u=s[h],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(h,1);break t}}u=n.createElement(l),$e(u,l,a),n.head.appendChild(u);break;default:throw Error(r(468,l))}u[Pe]=e,Xe(u),l=u}e.stateNode=l}else _0(n,e.type,e.stateNode);else e.stateNode=R0(n,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?_0(n,e.type,e.stateNode):R0(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Er(e,e.memoizedProps,a.memoizedProps)}break;case 27:pt(t,e),gt(e),l&512&&(we||a===null||Yt(a,a.return)),a!==null&&l&4&&Er(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pt(t,e),gt(e),l&512&&(we||a===null||Yt(a,a.return)),e.flags&32){n=e.stateNode;try{gl(n,"")}catch(T){Ee(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Er(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Rr=!0);break;case 6:if(pt(t,e),gt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){Ee(e,e.return,T)}}break;case 3:if(yu=null,n=Ut,Ut=gu(t.containerInfo),pt(t,e),Ut=n,gt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(T){Ee(e,e.return,T)}Rr&&(Rr=!1,Nd(e));break;case 4:l=Ut,Ut=gu(e.stateNode.containerInfo),pt(t,e),gt(e),Ut=l;break;case 12:pt(t,e),gt(e);break;case 13:pt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wr=qt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tr(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,z=ca,O=we;if(ca=z||n,we=O||p,pt(t,e),we=O,ca=z,gt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||ca||we||ll(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(u=p.stateNode,n)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=p.stateNode;var w=p.memoizedProps.style,R=w!=null&&w.hasOwnProperty("display")?w.display:null;h.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(T){Ee(p,p.return,T)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(T){Ee(p,p.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Tr(e,a))));break;case 19:pt(t,e),gt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tr(e,l)));break;case 30:break;case 21:break;default:pt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Rd(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,u=zr(e);lu(e,u,n);break;case 5:var s=a.stateNode;a.flags&32&&(gl(s,""),a.flags&=-33);var h=zr(e);lu(e,h,s);break;case 3:case 4:var p=a.stateNode.containerInfo,z=zr(e);Ar(e,z,p);break;default:throw Error(r(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dd(e,t.alternate,t),t=t.sibling}function ll(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),ll(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zd(t,t.return,a),ll(t);break;case 27:Kn(t.stateNode);case 26:case 5:Yt(t,t.return),ll(t);break;case 22:t.memoizedState===null&&ll(t);break;case 30:ll(t);break;default:ll(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,u=t,s=u.flags;switch(u.tag){case 0:case 11:case 15:Ta(n,u,a),Bn(4,u);break;case 1:if(Ta(n,u,a),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){Ee(l,l.return,z)}if(l=u,n=l.updateQueue,n!==null){var h=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)of(p[n],h)}catch(z){Ee(l,l.return,z)}}a&&s&64&&Ed(u),qn(u,u.return);break;case 27:Td(u);case 26:case 5:Ta(n,u,a),a&&l===null&&s&4&&Ad(u),qn(u,u.return);break;case 12:Ta(n,u,a);break;case 13:Ta(n,u,a),a&&s&4&&Cd(n,u);break;case 22:u.memoizedState===null&&Ta(n,u,a),qn(u,u.return);break;case 30:break;default:Ta(n,u,a)}t=t.sibling}}function _r(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&En(a))}function Dr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e))}function Xt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,l),t=t.sibling}function Ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,l),n&2048&&Bn(9,t);break;case 1:Xt(e,t,a,l);break;case 3:Xt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e)));break;case 12:if(n&2048){Xt(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,s=u.id,h=u.onPostCommit;typeof h=="function"&&h(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ee(t,t.return,p)}}else Xt(e,t,a,l);break;case 13:Xt(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,s=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,a,l):Ln(e,t):u._visibility&2?Xt(e,t,a,l):(u._visibility|=2,Ul(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&_r(s,t);break;case 24:Xt(e,t,a,l),n&2048&&Dr(t.alternate,t);break;default:Xt(e,t,a,l)}}function Ul(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,s=t,h=a,p=l,z=s.flags;switch(s.tag){case 0:case 11:case 15:Ul(u,s,h,p,n),Bn(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?Ul(u,s,h,p,n):Ln(u,s):(O._visibility|=2,Ul(u,s,h,p,n)),n&&z&2048&&_r(s.alternate,s);break;case 24:Ul(u,s,h,p,n),n&&z&2048&&Dr(s.alternate,s);break;default:Ul(u,s,h,p,n)}t=t.sibling}}function Ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Ln(a,l),n&2048&&_r(l.alternate,l);break;case 24:Ln(a,l),n&2048&&Dr(l.alternate,l);break;default:Ln(a,l)}t=t.sibling}}var Gn=8192;function Hl(e){if(e.subtreeFlags&Gn)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 26:Hl(e),e.flags&Gn&&e.memoizedState!==null&&Up(Ut,e.memoizedState,e.memoizedProps);break;case 5:Hl(e);break;case 3:case 4:var t=Ut;Ut=gu(e.stateNode.containerInfo),Hl(e),Ut=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Gn,Gn=16777216,Hl(e),Gn=t):Hl(e));break;default:Hl(e)}}function Bd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Ld(l,e)}Bd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:Yn(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Yn(e);break;case 12:Yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,nu(e)):Yn(e);break;default:Yn(e)}}function nu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Ld(l,e)}Bd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),nu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,nu(t));break;default:nu(t)}e=e.sibling}}function Ld(e,t){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:Aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:En(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ke=l;else e:for(a=e;ke!==null;){l=ke;var n=l.sibling,u=l.return;if(Od(l),l===a){ke=null;break e}if(n!==null){n.return=u,ke=n;break e}ke=u}}}var Fm={getCacheForType:function(e){var t=Ie(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Pm=typeof WeakMap=="function"?WeakMap:Map,ve=0,ze=null,se=null,de=0,ye=0,vt=null,_a=!1,Bl=!1,Or=!1,oa=0,Me=0,Da=0,nl=0,Mr=0,Dt=0,ql=0,Xn=null,ot=null,Cr=!1,wr=0,iu=1/0,uu=null,Oa=null,Je=0,Ma=null,Ll=null,Gl=0,Nr=0,Ur=null,Gd=null,Qn=0,Hr=null;function yt(){if((ve&2)!==0&&de!==0)return de&-de;if(D.T!==null){var e=Tl;return e!==0?e:Qr()}return ts()}function Yd(){Dt===0&&(Dt=(de&536870912)===0||me?Fo():536870912);var e=_t.current;return e!==null&&(e.flags|=32),Dt}function bt(e,t,a){(e===ze&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Yl(e,0),Ca(e,de,Dt,!1)),cn(e,a),((ve&2)===0||e!==ze)&&(e===ze&&((ve&2)===0&&(nl|=a),Me===4&&Ca(e,de,Dt,!1)),Qt(e))}function Xd(e,t,a){if((ve&6)!==0)throw Error(r(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||un(e,t),n=l?tp(e,t):Lr(e,t,!0),u=l;do{if(n===0){Bl&&!l&&Ca(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Im(a)){n=Lr(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var h=e;n=Xn;var p=h.current.memoizedState.isDehydrated;if(p&&(Yl(h,s).flags|=256),s=Lr(h,s,!1),s!==2){if(Or&&!p){h.errorRecoveryDisabledLanes|=u,nl|=u,n=4;break e}u=ot,ot=n,u!==null&&(ot===null?ot=u:ot.push.apply(ot,u))}n=s}if(u=!1,n!==2)continue}}if(n===1){Yl(e,0),Ca(e,t,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ca(l,t,Dt,!_a);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=wr+300-qt(),10<n)){if(Ca(l,t,Dt,!_a),vi(l,0,!0)!==0)break e;l.timeoutHandle=v0(Qd.bind(null,l,a,ot,uu,Cr,t,Dt,nl,ql,_a,u,2,-0,0),n);break e}Qd(l,a,ot,uu,Cr,t,Dt,nl,ql,_a,u,0,-0,0)}}break}while(!0);Qt(e)}function Qd(e,t,a,l,n,u,s,h,p,z,O,w,R,T){if(e.timeoutHandle=-1,w=t.subtreeFlags,(w&8192||(w&16785408)===16785408)&&(Wn={stylesheets:null,count:0,unsuspend:Np},Hd(t),w=Hp(),w!==null)){e.cancelPendingCommit=w(Wd.bind(null,e,t,u,a,l,n,s,h,p,O,1,R,T)),Ca(e,u,s,!z);return}Wd(e,t,u,a,l,n,s,h,p)}function Im(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],u=n.getSnapshot;n=n.value;try{if(!ht(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,a,l){t&=~Mr,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var u=31-dt(n),s=1<<u;l[u]=-1,n&=~s}a!==0&&Io(e,a,t)}function cu(){return(ve&6)===0?(kn(0),!1):!0}function Br(){if(se!==null){if(ye===0)var e=se.return;else e=se,ta=Pa=null,er(e),wl=null,Nn=0,e=se;for(;e!==null;)jd(e.alternate,e),e=e.return;se=null}}function Yl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Br(),ze=e,se=a=Pt(e.current,null),de=t,ye=0,vt=null,_a=!1,Bl=un(e,t),Or=!1,ql=Dt=Mr=nl=Da=Me=0,ot=Xn=null,Cr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-dt(l),u=1<<n;t|=e[n],l&=~u}return oa=t,Di(),a}function kd(e,t){ue=null,D.H=Ji,t===An||t===qi?(t=cf(),ye=3):t===lf?(t=cf(),ye=4):ye=t===rd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,se===null&&(Me=1,Ii(e,zt(t,e.current)))}function Vd(){var e=D.H;return D.H=Ji,e===null?Ji:e}function Zd(){var e=D.A;return D.A=Fm,e}function qr(){Me=4,_a||(de&4194048)!==de&&_t.current!==null||(Bl=!0),(Da&134217727)===0&&(nl&134217727)===0||ze===null||Ca(ze,de,Dt,!1)}function Lr(e,t,a){var l=ve;ve|=2;var n=Vd(),u=Zd();(ze!==e||de!==t)&&(uu=null,Yl(e,t)),t=!1;var s=Me;e:do try{if(ye!==0&&se!==null){var h=se,p=vt;switch(ye){case 8:Br(),s=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var z=ye;if(ye=0,vt=null,Xl(e,h,p,z),a&&Bl){s=0;break e}break;default:z=ye,ye=0,vt=null,Xl(e,h,p,z)}}ep(),s=Me;break}catch(O){kd(e,O)}while(!0);return t&&e.shellSuspendCounter++,ta=Pa=null,ve=l,D.H=n,D.A=u,se===null&&(ze=null,de=0,Di()),s}function ep(){for(;se!==null;)Kd(se)}function tp(e,t){var a=ve;ve|=2;var l=Vd(),n=Zd();ze!==e||de!==t?(uu=null,iu=qt()+500,Yl(e,t)):Bl=un(e,t);e:do try{if(ye!==0&&se!==null){t=se;var u=vt;t:switch(ye){case 1:ye=0,vt=null,Xl(e,t,u,1);break;case 2:case 9:if(nf(u)){ye=0,vt=null,Jd(t);break}t=function(){ye!==2&&ye!==9||ze!==e||(ye=7),Qt(e)},u.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:nf(u)?(ye=0,vt=null,Jd(t)):(ye=0,vt=null,Xl(e,t,u,7));break;case 5:var s=null;switch(se.tag){case 26:s=se.memoizedState;case 5:case 27:var h=se;if(!s||D0(s)){ye=0,vt=null;var p=h.sibling;if(p!==null)se=p;else{var z=h.return;z!==null?(se=z,ru(z)):se=null}break t}}ye=0,vt=null,Xl(e,t,u,5);break;case 6:ye=0,vt=null,Xl(e,t,u,6);break;case 8:Br(),Me=6;break e;default:throw Error(r(462))}}ap();break}catch(O){kd(e,O)}while(!0);return ta=Pa=null,D.H=l,D.A=n,ve=a,se!==null?0:(ze=null,de=0,Di(),Me)}function ap(){for(;se!==null&&!zh();)Kd(se)}function Kd(e){var t=xd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?ru(e):se=t}function Jd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=md(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=md(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:er(t);default:jd(a,t),t=se=Js(t,oa),t=xd(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?ru(e):se=t}function Xl(e,t,a,l){ta=Pa=null,er(t),wl=null,Nn=0;var n=t.return;try{if(Vm(e,n,t,a,de)){Me=1,Ii(e,zt(a,e.current)),se=null;return}}catch(u){if(n!==null)throw se=n,u;Me=1,Ii(e,zt(a,e.current)),se=null;return}t.flags&32768?(me||l===1?e=!0:Bl||(de&536870912)!==0?e=!1:(_a=e=!0,(l===2||l===9||l===3||l===6)&&(l=_t.current,l!==null&&l.tag===13&&(l.flags|=16384))),$d(t,e)):ru(t)}function ru(e){var t=e;do{if((t.flags&32768)!==0){$d(t,_a);return}e=t.return;var a=Km(t.alternate,t,oa);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Me===0&&(Me=5)}function $d(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Me=6,se=null}function Wd(e,t,a,l,n,u,s,h,p){e.cancelPendingCommit=null;do ou();while(Je!==0);if((ve&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=Dc,Nh(e,a,u,s,h,p),e===ze&&(se=ze=null,de=0),Ll=t,Ma=e,Gl=a,Nr=u,Ur=n,Gd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,up(mi,function(){return t0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=Y.p,Y.p=2,s=ve,ve|=4;try{$m(e,t,a)}finally{ve=s,Y.p=n,D.T=l}}Je=1,Fd(),Pd(),Id()}}function Fd(){if(Je===1){Je=0;var e=Ma,t=Ll,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{wd(t,e);var u=Fr,s=qs(e.containerInfo),h=u.focusedElem,p=u.selectionRange;if(s!==h&&h&&h.ownerDocument&&Bs(h.ownerDocument.documentElement,h)){if(p!==null&&zc(h)){var z=p.start,O=p.end;if(O===void 0&&(O=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(O,h.value.length);else{var w=h.ownerDocument||document,R=w&&w.defaultView||window;if(R.getSelection){var T=R.getSelection(),te=h.textContent.length,P=Math.min(p.start,te),Se=p.end===void 0?P:Math.min(p.end,te);!T.extend&&P>Se&&(s=Se,Se=P,P=s);var j=Hs(h,P),x=Hs(h,Se);if(j&&x&&(T.rangeCount!==1||T.anchorNode!==j.node||T.anchorOffset!==j.offset||T.focusNode!==x.node||T.focusOffset!==x.offset)){var E=w.createRange();E.setStart(j.node,j.offset),T.removeAllRanges(),P>Se?(T.addRange(E),T.extend(x.node,x.offset)):(E.setEnd(x.node,x.offset),T.addRange(E))}}}}for(w=[],T=h;T=T.parentNode;)T.nodeType===1&&w.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<w.length;h++){var M=w[h];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Su=!!Wr,Fr=Wr=null}finally{ve=n,Y.p=l,D.T=a}}e.current=t,Je=2}}function Pd(){if(Je===2){Je=0;var e=Ma,t=Ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=Y.p;Y.p=2;var n=ve;ve|=4;try{Dd(e,t.alternate,t)}finally{ve=n,Y.p=l,D.T=a}}Je=3}}function Id(){if(Je===4||Je===3){Je=0,Ah();var e=Ma,t=Ll,a=Gl,l=Gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Ll=Ma=null,e0(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Oa=null),lc(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(nn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=Y.p,Y.p=2,D.T=null;try{for(var u=e.onRecoverableError,s=0;s<l.length;s++){var h=l[s];u(h.value,{componentStack:h.stack})}}finally{D.T=t,Y.p=n}}(Gl&3)!==0&&ou(),Qt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Hr?Qn++:(Qn=0,Hr=e):Qn=0,kn(0)}}function e0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,En(t)))}function ou(e){return Fd(),Pd(),Id(),t0()}function t0(){if(Je!==5)return!1;var e=Ma,t=Nr;Nr=0;var a=lc(Gl),l=D.T,n=Y.p;try{Y.p=32>a?32:a,D.T=null,a=Ur,Ur=null;var u=Ma,s=Gl;if(Je=0,Ll=Ma=null,Gl=0,(ve&6)!==0)throw Error(r(331));var h=ve;if(ve|=4,qd(u.current),Ud(u,u.current,s,a),ve=h,kn(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(nn,u)}catch{}return!0}finally{Y.p=n,D.T=l,e0(e,t)}}function a0(e,t,a){t=zt(a,t),t=mr(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(cn(e,2),Qt(e))}function Ee(e,t,a){if(e.tag===3)a0(e,e,a);else for(;t!==null;){if(t.tag===3){a0(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){e=zt(a,e),a=ud(2),l=Sa(t,a,2),l!==null&&(cd(a,l,t,e),cn(l,2),Qt(l));break}}t=t.return}}function Gr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Or=!0,n.add(a),e=lp.bind(null,e,t,a),t.then(e,e))}function lp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(de&a)===a&&(Me===4||Me===3&&(de&62914560)===de&&300>qt()-wr?(ve&2)===0&&Yl(e,0):Mr|=a,ql===de&&(ql=0)),Qt(e)}function l0(e,t){t===0&&(t=Po()),e=El(e,t),e!==null&&(cn(e,t),Qt(e))}function np(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),l0(e,a)}function ip(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),l0(e,a)}function up(e,t){return Iu(e,t)}var su=null,Ql=null,Yr=!1,fu=!1,Xr=!1,il=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?su=Ql=e:Ql=Ql.next=e),fu=!0,Yr||(Yr=!0,rp())}function kn(e,t){if(!Xr&&fu){Xr=!0;do for(var a=!1,l=su;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var s=l.suspendedLanes,h=l.pingedLanes;u=(1<<31-dt(42|e)+1)-1,u&=n&~(s&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,c0(l,u))}else u=de,u=vi(l,l===ze?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||un(l,u)||(a=!0,c0(l,u));l=l.next}while(a);Xr=!1}}function cp(){n0()}function n0(){fu=Yr=!1;var e=0;il!==0&&(gp()&&(e=il),il=0);for(var t=qt(),a=null,l=su;l!==null;){var n=l.next,u=i0(l,t);u===0?(l.next=null,a===null?su=n:a.next=n,n===null&&(Ql=a)):(a=l,(e!==0||(u&3)!==0)&&(fu=!0)),l=n}kn(e)}function i0(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var s=31-dt(u),h=1<<s,p=n[s];p===-1?((h&a)===0||(h&l)!==0)&&(n[s]=wh(h,t)):p<=t&&(e.expiredLanes|=h),u&=~h}if(t=ze,a=de,a=vi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ec(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ec(l),lc(a)){case 2:case 8:a=$o;break;case 32:a=mi;break;case 268435456:a=Wo;break;default:a=mi}return l=u0.bind(null,e),a=Iu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ec(l),e.callbackPriority=2,e.callbackNode=null,2}function u0(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ou()&&e.callbackNode!==a)return null;var l=de;return l=vi(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xd(e,l,t),i0(e,qt()),e.callbackNode!=null&&e.callbackNode===a?u0.bind(null,e):null)}function c0(e,t){if(ou())return null;Xd(e,t,!0)}function rp(){yp(function(){(ve&6)!==0?Iu(Jo,cp):n0()})}function Qr(){return il===0&&(il=Fo()),il}function r0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ji(""+e)}function o0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function op(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var u=r0((n[it]||null).action),s=l.submitter;s&&(t=(t=s[it]||null)?r0(t.formAction):s.getAttribute("formAction"),t!==null&&(u=t,s=null));var h=new Ri("action","action",null,l,n);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(il!==0){var p=s?o0(n,s):new FormData(n);or(a,{pending:!0,data:p,method:n.method,action:u},null,p)}}else typeof u=="function"&&(h.preventDefault(),p=s?o0(n,s):new FormData(n),or(a,{pending:!0,data:p,method:n.method,action:u},u,p))},currentTarget:n}]})}}for(var kr=0;kr<_c.length;kr++){var Vr=_c[kr],sp=Vr.toLowerCase(),fp=Vr[0].toUpperCase()+Vr.slice(1);Nt(sp,"on"+fp)}Nt(Ys,"onAnimationEnd"),Nt(Xs,"onAnimationIteration"),Nt(Qs,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(_m,"onTransitionRun"),Nt(Dm,"onTransitionStart"),Nt(Om,"onTransitionCancel"),Nt(ks,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vn));function s0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var s=l.length-1;0<=s;s--){var h=l[s],p=h.instance,z=h.currentTarget;if(h=h.listener,p!==u&&n.isPropagationStopped())break e;u=h,n.currentTarget=z;try{u(n)}catch(O){Pi(O)}n.currentTarget=null,u=p}else for(s=0;s<l.length;s++){if(h=l[s],p=h.instance,z=h.currentTarget,h=h.listener,p!==u&&n.isPropagationStopped())break e;u=h,n.currentTarget=z;try{u(n)}catch(O){Pi(O)}n.currentTarget=null,u=p}}}}function fe(e,t){var a=t[nc];a===void 0&&(a=t[nc]=new Set);var l=e+"__bubble";a.has(l)||(f0(t,e,2,!1),a.add(l))}function Zr(e,t,a){var l=0;t&&(l|=4),f0(a,e,l,t)}var du="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[du]){e[du]=!0,ls.forEach(function(a){a!=="selectionchange"&&(dp.has(a)||Zr(a,!1,e),Zr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[du]||(t[du]=!0,Zr("selectionchange",!1,t))}}function f0(e,t,a,l){switch(U0(t)){case 2:var n=Lp;break;case 8:n=Gp;break;default:n=co}a=n.bind(null,t,a,e),n=void 0,!pc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Jr(e,t,a,l,n){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var h=l.stateNode.containerInfo;if(h===n)break;if(s===4)for(s=l.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;h!==null;){if(s=sl(h),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){l=u=s;continue e}h=h.parentNode}}l=l.return}vs(function(){var z=u,O=hc(a),w=[];e:{var R=Vs.get(e);if(R!==void 0){var T=Ri,te=e;switch(e){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":T=um;break;case"focusin":te="focus",T=bc;break;case"focusout":te="blur",T=bc;break;case"beforeblur":case"afterblur":T=bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=om;break;case Ys:case Xs:case Qs:T=Fh;break;case ks:T=fm;break;case"scroll":case"scrollend":T=Zh;break;case"wheel":T=hm;break;case"copy":case"cut":case"paste":T=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=js;break;case"toggle":case"beforetoggle":T=pm}var P=(t&4)!==0,Se=!P&&(e==="scroll"||e==="scrollend"),j=P?R!==null?R+"Capture":null:R;P=[];for(var x=z,E;x!==null;){var M=x;if(E=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||E===null||j===null||(M=sn(x,j),M!=null&&P.push(Zn(x,M,E))),Se)break;x=x.return}0<P.length&&(R=new T(R,te,null,a,O),w.push({event:R,listeners:P}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",R&&a!==dc&&(te=a.relatedTarget||a.fromElement)&&(sl(te)||te[ol]))break e;if((T||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,T?(te=a.relatedTarget||a.toElement,T=z,te=te?sl(te):null,te!==null&&(Se=m(te),P=te.tag,te!==Se||P!==5&&P!==27&&P!==6)&&(te=null)):(T=null,te=z),T!==te)){if(P=xs,M="onMouseLeave",j="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=js,M="onPointerLeave",j="onPointerEnter",x="pointer"),Se=T==null?R:on(T),E=te==null?R:on(te),R=new P(M,x+"leave",T,a,O),R.target=Se,R.relatedTarget=E,M=null,sl(O)===z&&(P=new P(j,x+"enter",te,a,O),P.target=E,P.relatedTarget=Se,M=P),Se=M,T&&te)t:{for(P=T,j=te,x=0,E=P;E;E=kl(E))x++;for(E=0,M=j;M;M=kl(M))E++;for(;0<x-E;)P=kl(P),x--;for(;0<E-x;)j=kl(j),E--;for(;x--;){if(P===j||j!==null&&P===j.alternate)break t;P=kl(P),j=kl(j)}P=null}else P=null;T!==null&&d0(w,R,T,P,!1),te!==null&&Se!==null&&d0(w,Se,te,P,!0)}}e:{if(R=z?on(z):window,T=R.nodeName&&R.nodeName.toLowerCase(),T==="select"||T==="input"&&R.type==="file")var K=Os;else if(_s(R))if(Ms)K=Am;else{K=Em;var ce=jm}else T=R.nodeName,!T||T.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?z&&fc(z.elementType)&&(K=Os):K=zm;if(K&&(K=K(e,z))){Ds(w,K,a,O);break e}ce&&ce(e,R,z),e==="focusout"&&z&&R.type==="number"&&z.memoizedProps.value!=null&&sc(R,"number",R.value)}switch(ce=z?on(z):window,e){case"focusin":(_s(ce)||ce.contentEditable==="true")&&(xl=ce,Ac=z,yn=null);break;case"focusout":yn=Ac=xl=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Ls(w,a,O);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Ls(w,a,O)}var J;if(Sc)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else bl?Rs(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Es&&a.locale!=="ko"&&(bl||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&bl&&(J=ys()):(va=O,gc="value"in va?va.value:va.textContent,bl=!0)),ce=hu(z,ee),0<ce.length&&(ee=new Ss(ee,e,null,a,O),w.push({event:ee,listeners:ce}),J?ee.data=J:(J=Ts(a),J!==null&&(ee.data=J)))),(J=vm?ym(e,a):bm(e,a))&&(ee=hu(z,"onBeforeInput"),0<ee.length&&(ce=new Ss("onBeforeInput","beforeinput",null,a,O),w.push({event:ce,listeners:ee}),ce.data=J)),op(w,e,z,a,O)}s0(w,t)})}function Zn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function hu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=sn(e,a),n!=null&&l.unshift(Zn(e,n,u)),n=sn(e,t),n!=null&&l.push(Zn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function kl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d0(e,t,a,l,n){for(var u=t._reactName,s=[];a!==null&&a!==l;){var h=a,p=h.alternate,z=h.stateNode;if(h=h.tag,p!==null&&p===l)break;h!==5&&h!==26&&h!==27||z===null||(p=z,n?(z=sn(a,u),z!=null&&s.unshift(Zn(a,z,p))):n||(z=sn(a,u),z!=null&&s.push(Zn(a,z,p)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var hp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function h0(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(mp,"")}function m0(e,t){return t=h0(t),h0(e)===t}function mu(){}function xe(e,t,a,l,n,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||gl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&gl(e,""+l);break;case"className":bi(e,"class",l);break;case"tabIndex":bi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,l);break;case"style":ps(e,l,u);break;case"data":if(t!=="object"){bi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ji(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ji(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=mu);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ji(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),yi(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kh.get(a)||a,yi(e,a,l))}}function $r(e,t,a,l,n,u){switch(a){case"style":ps(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?gl(e,l):(typeof l=="number"||typeof l=="bigint")&&gl(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ns.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=e[it]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):yi(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var s=a[u];if(s!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:xe(e,t,u,s,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var h=u=s=n=null,p=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":n=O;break;case"type":s=O;break;case"checked":p=O;break;case"defaultChecked":z=O;break;case"value":u=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:xe(e,t,l,O,a,null)}}fs(e,u,h,p,z,s,n,!1),xi(e);return;case"select":fe("invalid",e),l=s=u=null;for(n in a)if(a.hasOwnProperty(n)&&(h=a[n],h!=null))switch(n){case"value":u=h;break;case"defaultValue":s=h;break;case"multiple":l=h;default:xe(e,t,n,h,a,null)}t=u,a=s,e.multiple=!!l,t!=null?pl(e,!!l,t,!1):a!=null&&pl(e,!!l,a,!0);return;case"textarea":fe("invalid",e),u=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(h=a[s],h!=null))switch(s){case"value":l=h;break;case"defaultValue":n=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:xe(e,t,s,h,a,null)}hs(e,l,n,u),xi(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(e,t,p,l,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Vn.length;l++)fe(Vn[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:xe(e,t,z,l,a,null)}return;default:if(fc(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&$r(e,t,O,l,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null&&xe(e,t,h,l,a,null))}function pp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,s=null,h=null,p=null,z=null,O=null;for(T in a){var w=a[T];if(a.hasOwnProperty(T)&&w!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":p=w;default:l.hasOwnProperty(T)||xe(e,t,T,null,l,w)}}for(var R in l){var T=l[R];if(w=a[R],l.hasOwnProperty(R)&&(T!=null||w!=null))switch(R){case"type":u=T;break;case"name":n=T;break;case"checked":z=T;break;case"defaultChecked":O=T;break;case"value":s=T;break;case"defaultValue":h=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,t));break;default:T!==w&&xe(e,t,R,T,l,w)}}oc(e,s,h,p,z,O,u,n);return;case"select":T=s=h=R=null;for(u in a)if(p=a[u],a.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":T=p;default:l.hasOwnProperty(u)||xe(e,t,u,null,l,p)}for(n in l)if(u=l[n],p=a[n],l.hasOwnProperty(n)&&(u!=null||p!=null))switch(n){case"value":R=u;break;case"defaultValue":h=u;break;case"multiple":s=u;default:u!==p&&xe(e,t,n,u,l,p)}t=h,a=s,l=T,R!=null?pl(e,!!a,R,!1):!!l!=!!a&&(t!=null?pl(e,!!a,t,!0):pl(e,!!a,a?[]:"",!1));return;case"textarea":T=R=null;for(h in a)if(n=a[h],a.hasOwnProperty(h)&&n!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:xe(e,t,h,null,l,n)}for(s in l)if(n=l[s],u=a[s],l.hasOwnProperty(s)&&(n!=null||u!=null))switch(s){case"value":R=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==u&&xe(e,t,s,n,l,u)}ds(e,R,T);return;case"option":for(var te in a)if(R=a[te],a.hasOwnProperty(te)&&R!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:xe(e,t,te,null,l,R)}for(p in l)if(R=l[p],T=a[p],l.hasOwnProperty(p)&&R!==T&&(R!=null||T!=null))switch(p){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:xe(e,t,p,R,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)R=a[P],a.hasOwnProperty(P)&&R!=null&&!l.hasOwnProperty(P)&&xe(e,t,P,null,l,R);for(z in l)if(R=l[z],T=a[z],l.hasOwnProperty(z)&&R!==T&&(R!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:xe(e,t,z,R,l,T)}return;default:if(fc(t)){for(var Se in a)R=a[Se],a.hasOwnProperty(Se)&&R!==void 0&&!l.hasOwnProperty(Se)&&$r(e,t,Se,void 0,l,R);for(O in l)R=l[O],T=a[O],!l.hasOwnProperty(O)||R===T||R===void 0&&T===void 0||$r(e,t,O,R,l,T);return}}for(var j in a)R=a[j],a.hasOwnProperty(j)&&R!=null&&!l.hasOwnProperty(j)&&xe(e,t,j,null,l,R);for(w in l)R=l[w],T=a[w],!l.hasOwnProperty(w)||R===T||R==null&&T==null||xe(e,t,w,R,l,T)}var Wr=null,Fr=null;function pu(e){return e.nodeType===9?e:e.ownerDocument}function p0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ir=null;function gp(){var e=window.event;return e&&e.type==="popstate"?e===Ir?!1:(Ir=e,!0):(Ir=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(bp)}:v0;function bp(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function b0(e,t){var a=t,l=0,n=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<l&&8>l){a=l;var s=e.ownerDocument;if(a&1&&Kn(s.documentElement),a&2&&Kn(s.body),a&4)for(a=s.head,Kn(a),s=a.firstChild;s;){var h=s.nextSibling,p=s.nodeName;s[rn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=h}}if(n===0){e.removeChild(u),ti(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=u}while(a);ti(t)}function eo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eo(a),ic(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function Sp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function to(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jp(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ao=null;function x0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function S0(e,t,a){switch(t=pu(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Kn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ic(e)}var Ot=new Map,j0=new Set;function gu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=Y.d;Y.d={f:Ep,r:zp,D:Ap,C:Rp,L:Tp,m:_p,X:Op,S:Dp,M:Mp};function Ep(){var e=sa.f(),t=cu();return e||t}function zp(e){var t=fl(e);t!==null&&t.tag===5&&t.type==="form"?Xf(t):sa.r(e)}var Vl=typeof document>"u"?null:document;function E0(e,t,a){var l=Vl;if(l&&typeof t=="string"&&t){var n=Et(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),j0.has(n)||(j0.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function Ap(e){sa.D(e),E0("dns-prefetch",e,null)}function Rp(e,t){sa.C(e,t),E0("preconnect",e,t)}function Tp(e,t,a){sa.L(e,t,a);var l=Vl;if(l&&e&&t){var n='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Et(a.imageSizes)+'"]')):n+='[href="'+Et(e)+'"]';var u=n;switch(t){case"style":u=Zl(e);break;case"script":u=Kl(e)}Ot.has(u)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(u,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Jn(u))||t==="script"&&l.querySelector($n(u))||(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function _p(e,t){sa.m(e,t);var a=Vl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Et(l)+'"][href="'+Et(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Kl(e)}if(!Ot.has(u)&&(e=S({rel:"modulepreload",href:e},t),Ot.set(u,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($n(u)))return}l=a.createElement("link"),$e(l,"link",e),Xe(l),a.head.appendChild(l)}}}function Dp(e,t,a){sa.S(e,t,a);var l=Vl;if(l&&e){var n=dl(l).hoistableStyles,u=Zl(e);t=t||"default";var s=n.get(u);if(!s){var h={loading:0,preload:null};if(s=l.querySelector(Jn(u)))h.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(u))&&lo(e,a);var p=s=l.createElement("link");Xe(p),$e(p,"link",e),p._p=new Promise(function(z,O){p.onload=z,p.onerror=O}),p.addEventListener("load",function(){h.loading|=1}),p.addEventListener("error",function(){h.loading|=2}),h.loading|=4,vu(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:h},n.set(u,s)}}}function Op(e,t){sa.X(e,t);var a=Vl;if(a&&e){var l=dl(a).hoistableScripts,n=Kl(e),u=l.get(n);u||(u=a.querySelector($n(n)),u||(e=S({src:e,async:!0},t),(t=Ot.get(n))&&no(e,t),u=a.createElement("script"),Xe(u),$e(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Mp(e,t){sa.M(e,t);var a=Vl;if(a&&e){var l=dl(a).hoistableScripts,n=Kl(e),u=l.get(n);u||(u=a.querySelector($n(n)),u||(e=S({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&no(e,t),u=a.createElement("script"),Xe(u),$e(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function z0(e,t,a,l){var n=(n=I.current)?gu(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Zl(a.href),a=dl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zl(a.href);var u=dl(n).hoistableStyles,s=u.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,s),(u=n.querySelector(Jn(e)))&&!u._p&&(s.instance=u,s.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),u||Cp(n,e,a,s.state))),t&&l===null)throw Error(r(528,""));return s}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kl(a),a=dl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zl(e){return'href="'+Et(e)+'"'}function Jn(e){return'link[rel="stylesheet"]['+e+"]"}function A0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Cp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Xe(t),e.head.appendChild(t))}function Kl(e){return'[src="'+Et(e)+'"]'}function $n(e){return"script[async]"+e}function R0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),$e(l,"style",n),vu(l,a.precedence,e),t.instance=l;case"stylesheet":n=Zl(a.href);var u=e.querySelector(Jn(n));if(u)return t.state.loading|=4,t.instance=u,Xe(u),u;l=A0(a),(n=Ot.get(n))&&lo(l,n),u=(e.ownerDocument||e).createElement("link"),Xe(u);var s=u;return s._p=new Promise(function(h,p){s.onload=h,s.onerror=p}),$e(u,"link",l),t.state.loading|=4,vu(u,a.precedence,e),t.instance=u;case"script":return u=Kl(a.src),(n=e.querySelector($n(u)))?(t.instance=n,Xe(n),n):(l=a,(n=Ot.get(u))&&(l=S({},a),no(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,vu(l,a.precedence,e));return t.instance}function vu(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,s=0;s<l.length;s++){var h=l[s];if(h.dataset.precedence===t)u=h;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function no(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yu=null;function T0(e,t,a){if(yu===null){var l=new Map,n=yu=new Map;n.set(a,l)}else n=yu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var u=a[n];if(!(u[rn]||u[Pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(t)||"";s=e+s;var h=l.get(s);h?h.push(u):l.set(s,[u])}}return l}function _0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function D0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wn=null;function Np(){}function Up(e,t,a){if(Wn===null)throw Error(r(475));var l=Wn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Zl(a.href),u=e.querySelector(Jn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=bu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,Xe(u);return}u=e.ownerDocument||e,a=A0(a),(n=Ot.get(n))&&lo(a,n),u=u.createElement("link"),Xe(u);var s=u;s._p=new Promise(function(h,p){s.onload=h,s.onerror=p}),$e(u,"link",a),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=bu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Hp(){if(Wn===null)throw Error(r(475));var e=Wn;return e.stylesheets&&e.count===0&&io(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&io(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function bu(){if(this.count--,this.count===0){if(this.stylesheets)io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function io(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(Bp,e),xu=null,bu.call(e))}function Bp(e,t){if(!(t.state.loading&4)){var a=xu.get(e);if(a)var l=a.get(null);else{a=new Map,xu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var s=n[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),u=a.get(s)||l,u===l&&a.set(null,n),a.set(s,n),this.count++,l=bu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Fn={$$typeof:V,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function qp(e,t,a,l,n,u,s,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.hiddenUpdates=tc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function O0(e,t,a,l,n,u,s,h,p,z,O,w){return e=new qp(e,t,a,s,h,p,z,w),t=1,u===!0&&(t|=24),u=mt(3,null,null,t),e.current=u,u.stateNode=e,t=Gc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},kc(u),e}function M0(e){return e?(e=zl,e):zl}function C0(e,t,a,l,n,u){n=M0(n),l.context===null?l.context=n:l.pendingContext=n,l=xa(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=Sa(e,l,t),a!==null&&(bt(a,e,t),Tn(a,e,t))}function w0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function uo(e,t){w0(e,t),(e=e.alternate)&&w0(e,t)}function N0(e){if(e.tag===13){var t=El(e,67108864);t!==null&&bt(t,e,67108864),uo(e,67108864)}}var Su=!0;function Lp(e,t,a,l){var n=D.T;D.T=null;var u=Y.p;try{Y.p=2,co(e,t,a,l)}finally{Y.p=u,D.T=n}}function Gp(e,t,a,l){var n=D.T;D.T=null;var u=Y.p;try{Y.p=8,co(e,t,a,l)}finally{Y.p=u,D.T=n}}function co(e,t,a,l){if(Su){var n=ro(l);if(n===null)Jr(e,t,l,ju,a),H0(e,l);else if(Xp(n,e,t,a,l))l.stopPropagation();else if(H0(e,l),t&4&&-1<Yp.indexOf(e)){for(;n!==null;){var u=fl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=Xa(u.pendingLanes);if(s!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var p=1<<31-dt(s);h.entanglements[1]|=p,s&=~p}Qt(u),(ve&6)===0&&(iu=qt()+500,kn(0))}}break;case 13:h=El(u,2),h!==null&&bt(h,u,2),cu(),uo(u,2)}if(u=ro(l),u===null&&Jr(e,t,l,ju,a),u===n)break;n=u}n!==null&&l.stopPropagation()}else Jr(e,t,l,null,a)}}function ro(e){return e=hc(e),oo(e)}var ju=null;function oo(e){if(ju=null,e=sl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ju=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rh()){case Jo:return 2;case $o:return 8;case mi:case Th:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var so=!1,Na=null,Ua=null,Ha=null,Pn=new Map,In=new Map,Ba=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function ei(e,t,a,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},t!==null&&(t=fl(t),t!==null&&N0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xp(e,t,a,l,n){switch(t){case"focusin":return Na=ei(Na,e,t,a,l,n),!0;case"dragenter":return Ua=ei(Ua,e,t,a,l,n),!0;case"mouseover":return Ha=ei(Ha,e,t,a,l,n),!0;case"pointerover":var u=n.pointerId;return Pn.set(u,ei(Pn.get(u)||null,e,t,a,l,n)),!0;case"gotpointercapture":return u=n.pointerId,In.set(u,ei(In.get(u)||null,e,t,a,l,n)),!0}return!1}function B0(e){var t=sl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Uh(e.priority,function(){if(a.tag===13){var l=yt();l=ac(l);var n=El(a,l);n!==null&&bt(n,a,l),uo(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ro(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);dc=l,a.target.dispatchEvent(l),dc=null}else return t=fl(a),t!==null&&N0(t),e.blockedOn=a,!1;t.shift()}return!0}function q0(e,t,a){Eu(e)&&a.delete(t)}function Qp(){so=!1,Na!==null&&Eu(Na)&&(Na=null),Ua!==null&&Eu(Ua)&&(Ua=null),Ha!==null&&Eu(Ha)&&(Ha=null),Pn.forEach(q0),In.forEach(q0)}function zu(e,t){e.blockedOn===t&&(e.blockedOn=null,so||(so=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Qp)))}var Au=null;function L0(e){Au!==e&&(Au=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Au===e&&(Au=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(oo(l||a)===null)continue;break}var u=fl(a);u!==null&&(e.splice(t,3),t-=3,or(u,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function ti(e){function t(p){return zu(p,e)}Na!==null&&zu(Na,e),Ua!==null&&zu(Ua,e),Ha!==null&&zu(Ha,e),Pn.forEach(t),In.forEach(t);for(var a=0;a<Ba.length;a++){var l=Ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],u=a[l+1],s=n[it]||null;if(typeof u=="function")s||L0(a);else if(s){var h=null;if(u&&u.hasAttribute("formAction")){if(n=u,s=u[it]||null)h=s.formAction;else if(oo(n)!==null)continue}else h=s.action;typeof h=="function"?a[l+1]=h:(a.splice(l,3),l-=3),L0(a)}}}function fo(e){this._internalRoot=e}Ru.prototype.render=fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=yt();C0(a,l,e,t,null,null)},Ru.prototype.unmount=fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;C0(e.current,2,null,e,null,null),cu(),t[ol]=null}};function Ru(e){this._internalRoot=e}Ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=ts();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&B0(e)}};var G0=c.version;if(G0!=="19.1.1")throw Error(r(527,G0,"19.1.1"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var kp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{nn=Tu.inject(kp),ft=Tu}catch{}}return li.createRoot=function(e,t){if(!d(e))throw Error(r(299));var a=!1,l="",n=ad,u=ld,s=nd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=O0(e,1,!1,null,null,a,l,n,u,s,h,null),e[ol]=t.current,Kr(e),new fo(t)},li.hydrateRoot=function(e,t,a){if(!d(e))throw Error(r(299));var l=!1,n="",u=ad,s=ld,h=nd,p=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=O0(e,1,!0,t,a??null,l,n,u,s,h,p,z),t.context=M0(null),a=t.current,l=yt(),l=ac(l),n=xa(l),n.callback=null,Sa(a,n,l),a=l,t.current.lanes=a,cn(t,a),Qt(t),e[ol]=t.current,Kr(e),new Ru(t)},li.version="19.1.1",li}var W0;function t2(){if(W0)return po.exports;W0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),po.exports=e2(),po.exports}var a2=t2();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var F0="popstate";function l2(i={}){function c(r,d){let{pathname:m,search:v,hash:A}=r.location;return Ao("",{pathname:m,search:v,hash:A},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(r,d){return typeof d=="string"?d:ci(d)}return i2(c,o,null,i)}function De(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Vt(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function n2(){return Math.random().toString(36).substring(2,10)}function P0(i,c){return{usr:i.state,key:i.key,idx:c}}function Ao(i,c,o=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?tn(c):c,state:o,key:c&&c.key||r||n2()}}function ci({pathname:i="/",search:c="",hash:o=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function tn(i){let c={};if(i){let o=i.indexOf("#");o>=0&&(c.hash=i.substring(o),i=i.substring(0,o));let r=i.indexOf("?");r>=0&&(c.search=i.substring(r),i=i.substring(0,r)),i&&(c.pathname=i)}return c}function i2(i,c,o,r={}){let{window:d=document.defaultView,v5Compat:m=!1}=r,v=d.history,A="POP",y=null,g=S();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function S(){return(v.state||{idx:null}).idx}function _(){A="POP";let L=S(),Q=L==null?null:L-g;g=L,y&&y({action:A,location:k.location,delta:Q})}function U(L,Q){A="PUSH";let B=Ao(k.location,L,Q);g=S()+1;let V=P0(B,g),ae=k.createHref(B);try{v.pushState(V,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(ae)}m&&y&&y({action:A,location:k.location,delta:1})}function H(L,Q){A="REPLACE";let B=Ao(k.location,L,Q);g=S();let V=P0(B,g),ae=k.createHref(B);v.replaceState(V,"",ae),m&&y&&y({action:A,location:k.location,delta:0})}function q(L){return u2(L)}let k={get action(){return A},get location(){return i(d,v)},listen(L){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(F0,_),y=L,()=>{d.removeEventListener(F0,_),y=null}},createHref(L){return c(d,L)},createURL:q,encodeLocation(L){let Q=q(L);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:H,go(L){return v.go(L)}};return k}function u2(i,c=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),De(o,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:ci(i);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function b1(i,c,o="/"){return c2(i,c,o,!1)}function c2(i,c,o,r){let d=typeof c=="string"?tn(c):c,m=ha(d.pathname||"/",o);if(m==null)return null;let v=x1(i);r2(v);let A=null;for(let y=0;A==null&&y<v.length;++y){let g=b2(m);A=v2(v[y],g,r)}return A}function x1(i,c=[],o=[],r="",d=!1){let m=(v,A,y=d,g)=>{let S={relativePath:g===void 0?v.path||"":g,caseSensitive:v.caseSensitive===!0,childrenIndex:A,route:v};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(r)&&y)return;De(S.relativePath.startsWith(r),`Absolute route path "${S.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(r.length)}let _=da([r,S.relativePath]),U=o.concat(S);v.children&&v.children.length>0&&(De(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),x1(v.children,c,U,_,y)),!(v.path==null&&!v.index)&&c.push({path:_,score:p2(_,v.index),routesMeta:U})};return i.forEach((v,A)=>{if(v.path===""||!v.path?.includes("?"))m(v,A);else for(let y of S1(v.path))m(v,A,!0,y)}),c}function S1(i){let c=i.split("/");if(c.length===0)return[];let[o,...r]=c,d=o.endsWith("?"),m=o.replace(/\?$/,"");if(r.length===0)return d?[m,""]:[m];let v=S1(r.join("/")),A=[];return A.push(...v.map(y=>y===""?m:[m,y].join("/"))),d&&A.push(...v),A.map(y=>i.startsWith("/")&&y===""?"/":y)}function r2(i){i.sort((c,o)=>c.score!==o.score?o.score-c.score:g2(c.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var o2=/^:[\w-]+$/,s2=3,f2=2,d2=1,h2=10,m2=-2,I0=i=>i==="*";function p2(i,c){let o=i.split("/"),r=o.length;return o.some(I0)&&(r+=m2),c&&(r+=f2),o.filter(d=>!I0(d)).reduce((d,m)=>d+(o2.test(m)?s2:m===""?d2:h2),r)}function g2(i,c){return i.length===c.length&&i.slice(0,-1).every((r,d)=>r===c[d])?i[i.length-1]-c[c.length-1]:0}function v2(i,c,o=!1){let{routesMeta:r}=i,d={},m="/",v=[];for(let A=0;A<r.length;++A){let y=r[A],g=A===r.length-1,S=m==="/"?c:c.slice(m.length)||"/",_=qu({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},S),U=y.route;if(!_&&g&&o&&!r[r.length-1].route.index&&(_=qu({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},S)),!_)return null;Object.assign(d,_.params),v.push({params:d,pathname:da([m,_.pathname]),pathnameBase:E2(da([m,_.pathnameBase])),route:U}),_.pathnameBase!=="/"&&(m=da([m,_.pathnameBase]))}return v}function qu(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,r]=y2(i.path,i.caseSensitive,i.end),d=c.match(o);if(!d)return null;let m=d[0],v=m.replace(/(.)\/+$/,"$1"),A=d.slice(1);return{params:r.reduce((g,{paramName:S,isOptional:_},U)=>{if(S==="*"){let q=A[U]||"";v=m.slice(0,m.length-q.length).replace(/(.)\/+$/,"$1")}const H=A[U];return _&&!H?g[S]=void 0:g[S]=(H||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:v,pattern:i}}function y2(i,c=!1,o=!0){Vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,A,y)=>(r.push({paramName:A,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),r]}function b2(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function ha(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,r=i.charAt(o);return r&&r!=="/"?null:i.slice(o)||"/"}function x2(i,c="/"){let{pathname:o,search:r="",hash:d=""}=typeof i=="string"?tn(i):i;return{pathname:o?o.startsWith("/")?o:S2(o,c):c,search:z2(r),hash:A2(d)}}function S2(i,c){let o=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function bo(i,c,o,r){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function j2(i){return i.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function j1(i){let c=j2(i);return c.map((o,r)=>r===c.length-1?o.pathname:o.pathnameBase)}function E1(i,c,o,r=!1){let d;typeof i=="string"?d=tn(i):(d={...i},De(!d.pathname||!d.pathname.includes("?"),bo("?","pathname","search",d)),De(!d.pathname||!d.pathname.includes("#"),bo("#","pathname","hash",d)),De(!d.search||!d.search.includes("#"),bo("#","search","hash",d)));let m=i===""||d.pathname==="",v=m?"/":d.pathname,A;if(v==null)A=o;else{let _=c.length-1;if(!r&&v.startsWith("..")){let U=v.split("/");for(;U[0]==="..";)U.shift(),_-=1;d.pathname=U.join("/")}A=_>=0?c[_]:"/"}let y=x2(d,A),g=v&&v!=="/"&&v.endsWith("/"),S=(m||v===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(g||S)&&(y.pathname+="/"),y}var da=i=>i.join("/").replace(/\/\/+/g,"/"),E2=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),z2=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,A2=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function R2(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var z1=["POST","PUT","PATCH","DELETE"];new Set(z1);var T2=["GET",...z1];new Set(T2);var an=C.createContext(null);an.displayName="DataRouter";var Vu=C.createContext(null);Vu.displayName="DataRouterState";C.createContext(!1);var A1=C.createContext({isTransitioning:!1});A1.displayName="ViewTransition";var _2=C.createContext(new Map);_2.displayName="Fetchers";var D2=C.createContext(null);D2.displayName="Await";var Zt=C.createContext(null);Zt.displayName="Navigation";var oi=C.createContext(null);oi.displayName="Location";var ma=C.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var Ho=C.createContext(null);Ho.displayName="RouteError";function O2(i,{relative:c}={}){De(si(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=C.useContext(Zt),{hash:d,pathname:m,search:v}=fi(i,{relative:c}),A=m;return o!=="/"&&(A=m==="/"?o:da([o,m])),r.createHref({pathname:A,search:v,hash:d})}function si(){return C.useContext(oi)!=null}function Ga(){return De(si(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(oi).location}var R1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T1(i){C.useContext(Zt).static||C.useLayoutEffect(i)}function Bo(){let{isDataRoute:i}=C.useContext(ma);return i?Q2():M2()}function M2(){De(si(),"useNavigate() may be used only in the context of a <Router> component.");let i=C.useContext(an),{basename:c,navigator:o}=C.useContext(Zt),{matches:r}=C.useContext(ma),{pathname:d}=Ga(),m=JSON.stringify(j1(r)),v=C.useRef(!1);return T1(()=>{v.current=!0}),C.useCallback((y,g={})=>{if(Vt(v.current,R1),!v.current)return;if(typeof y=="number"){o.go(y);return}let S=E1(y,JSON.parse(m),d,g.relative==="path");i==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:da([c,S.pathname])),(g.replace?o.replace:o.push)(S,g.state,g)},[c,o,m,d,i])}C.createContext(null);function fi(i,{relative:c}={}){let{matches:o}=C.useContext(ma),{pathname:r}=Ga(),d=JSON.stringify(j1(o));return C.useMemo(()=>E1(i,JSON.parse(d),r,c==="path"),[i,d,r,c])}function C2(i,c){return _1(i,c)}function _1(i,c,o,r,d){De(si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=C.useContext(Zt),{matches:v}=C.useContext(ma),A=v[v.length-1],y=A?A.params:{},g=A?A.pathname:"/",S=A?A.pathnameBase:"/",_=A&&A.route;{let B=_&&_.path||"";D1(g,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let U=Ga(),H;if(c){let B=typeof c=="string"?tn(c):c;De(S==="/"||B.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${B.pathname}" was given in the \`location\` prop.`),H=B}else H=U;let q=H.pathname||"/",k=q;if(S!=="/"){let B=S.replace(/^\//,"").split("/");k="/"+q.replace(/^\//,"").split("/").slice(B.length).join("/")}let L=b1(i,{pathname:k});Vt(_||L!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Vt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=B2(L&&L.map(B=>Object.assign({},B,{params:Object.assign({},y,B.params),pathname:da([S,m.encodeLocation?m.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?S:da([S,m.encodeLocation?m.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),v,o,r,d);return c&&Q?C.createElement(oi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},Q):Q}function w2(){let i=X2(),c=R2(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:m},"ErrorBoundary")," or"," ",C.createElement("code",{style:m},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},c),o?C.createElement("pre",{style:d},o):null,v)}var N2=C.createElement(w2,null),U2=class extends C.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.unstable_onError?this.props.unstable_onError(i,c):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?C.createElement(ma.Provider,{value:this.props.routeContext},C.createElement(Ho.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function H2({routeContext:i,match:c,children:o}){let r=C.useContext(an);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),C.createElement(ma.Provider,{value:i},o)}function B2(i,c=[],o=null,r=null,d=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let m=i,v=o?.errors;if(v!=null){let g=m.findIndex(S=>S.route.id&&v?.[S.route.id]!==void 0);De(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),m=m.slice(0,Math.min(m.length,g+1))}let A=!1,y=-1;if(o)for(let g=0;g<m.length;g++){let S=m[g];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=g),S.route.id){let{loaderData:_,errors:U}=o,H=S.route.loader&&!_.hasOwnProperty(S.route.id)&&(!U||U[S.route.id]===void 0);if(S.route.lazy||H){A=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}return m.reduceRight((g,S,_)=>{let U,H=!1,q=null,k=null;o&&(U=v&&S.route.id?v[S.route.id]:void 0,q=S.route.errorElement||N2,A&&(y<0&&_===0?(D1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,k=null):y===_&&(H=!0,k=S.route.hydrateFallbackElement||null)));let L=c.concat(m.slice(0,_+1)),Q=()=>{let B;return U?B=q:H?B=k:S.route.Component?B=C.createElement(S.route.Component,null):S.route.element?B=S.route.element:B=g,C.createElement(H2,{match:S,routeContext:{outlet:g,matches:L,isDataRoute:o!=null},children:B})};return o&&(S.route.ErrorBoundary||S.route.errorElement||_===0)?C.createElement(U2,{location:o.location,revalidation:o.revalidation,component:q,error:U,children:Q(),routeContext:{outlet:null,matches:L,isDataRoute:!0},unstable_onError:r}):Q()},null)}function qo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q2(i){let c=C.useContext(an);return De(c,qo(i)),c}function L2(i){let c=C.useContext(Vu);return De(c,qo(i)),c}function G2(i){let c=C.useContext(ma);return De(c,qo(i)),c}function Lo(i){let c=G2(i),o=c.matches[c.matches.length-1];return De(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function Y2(){return Lo("useRouteId")}function X2(){let i=C.useContext(Ho),c=L2("useRouteError"),o=Lo("useRouteError");return i!==void 0?i:c.errors?.[o]}function Q2(){let{router:i}=q2("useNavigate"),c=Lo("useNavigate"),o=C.useRef(!1);return T1(()=>{o.current=!0}),C.useCallback(async(d,m={})=>{Vt(o.current,R1),o.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:c,...m}))},[i,c])}var e1={};function D1(i,c,o){!c&&!e1[i]&&(e1[i]=!0,Vt(!1,o))}C.memo(k2);function k2({routes:i,future:c,state:o,unstable_onError:r}){return _1(i,void 0,o,r,c)}function Ro(i){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function V2({basename:i="/",children:c=null,location:o,navigationType:r="POP",navigator:d,static:m=!1}){De(!si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),A=C.useMemo(()=>({basename:v,navigator:d,static:m,future:{}}),[v,d,m]);typeof o=="string"&&(o=tn(o));let{pathname:y="/",search:g="",hash:S="",state:_=null,key:U="default"}=o,H=C.useMemo(()=>{let q=ha(y,v);return q==null?null:{location:{pathname:q,search:g,hash:S,state:_,key:U},navigationType:r}},[v,y,g,S,_,U,r]);return Vt(H!=null,`<Router basename="${v}"> is not able to match the URL "${y}${g}${S}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:C.createElement(Zt.Provider,{value:A},C.createElement(oi.Provider,{children:c,value:H}))}function Z2({children:i,location:c}){return C2(To(i),c)}function To(i,c=[]){let o=[];return C.Children.forEach(i,(r,d)=>{if(!C.isValidElement(r))return;let m=[...c,d];if(r.type===C.Fragment){o.push.apply(o,To(r.props.children,m));return}De(r.type===Ro,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!r.props.index||!r.props.children,"An index route cannot have child routes.");let v={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(v.children=To(r.props.children,m)),o.push(v)}),o}var Mu="get",Cu="application/x-www-form-urlencoded";function Zu(i){return i!=null&&typeof i.tagName=="string"}function K2(i){return Zu(i)&&i.tagName.toLowerCase()==="button"}function J2(i){return Zu(i)&&i.tagName.toLowerCase()==="form"}function $2(i){return Zu(i)&&i.tagName.toLowerCase()==="input"}function W2(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function F2(i,c){return i.button===0&&(!c||c==="_self")&&!W2(i)}var _u=null;function P2(){if(_u===null)try{new FormData(document.createElement("form"),0),_u=!1}catch{_u=!0}return _u}var I2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xo(i){return i!=null&&!I2.has(i)?(Vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cu}"`),null):i}function eg(i,c){let o,r,d,m,v;if(J2(i)){let A=i.getAttribute("action");r=A?ha(A,c):null,o=i.getAttribute("method")||Mu,d=xo(i.getAttribute("enctype"))||Cu,m=new FormData(i)}else if(K2(i)||$2(i)&&(i.type==="submit"||i.type==="image")){let A=i.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||A.getAttribute("action");if(r=y?ha(y,c):null,o=i.getAttribute("formmethod")||A.getAttribute("method")||Mu,d=xo(i.getAttribute("formenctype"))||xo(A.getAttribute("enctype"))||Cu,m=new FormData(A,i),!P2()){let{name:g,type:S,value:_}=i;if(S==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,_)}}else{if(Zu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Mu,r=null,d=Cu,v=i}return m&&d==="text/plain"&&(v=m,m=void 0),{action:r,method:o.toLowerCase(),encType:d,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Go(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function tg(i,c,o){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${o}`:c&&ha(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function ag(i,c){if(i.id in c)return c[i.id];try{let o=await import(i.module);return c[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lg(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ng(i,c,o){let r=await Promise.all(i.map(async d=>{let m=c.routes[d.route.id];if(m){let v=await ag(m,o);return v.links?v.links():[]}return[]}));return rg(r.flat(1).filter(lg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function t1(i,c,o,r,d,m){let v=(y,g)=>o[g]?y.route.id!==o[g].route.id:!0,A=(y,g)=>o[g].pathname!==y.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==y.params["*"];return m==="assets"?c.filter((y,g)=>v(y,g)||A(y,g)):m==="data"?c.filter((y,g)=>{let S=r.routes[y.route.id];if(!S||!S.hasLoader)return!1;if(v(y,g)||A(y,g))return!0;if(y.route.shouldRevalidate){let _=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function ig(i,c,{includeHydrateFallback:o}={}){return ug(i.map(r=>{let d=c.routes[r.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function ug(i){return[...new Set(i)]}function cg(i){let c={},o=Object.keys(i).sort();for(let r of o)c[r]=i[r];return c}function rg(i,c){let o=new Set;return new Set(c),i.reduce((r,d)=>{let m=JSON.stringify(cg(d));return o.has(m)||(o.add(m),r.push({key:m,link:d})),r},[])}function O1(){let i=C.useContext(an);return Go(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function og(){let i=C.useContext(Vu);return Go(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Yo=C.createContext(void 0);Yo.displayName="FrameworkContext";function M1(){let i=C.useContext(Yo);return Go(i,"You must render this element inside a <HydratedRouter> element"),i}function sg(i,c){let o=C.useContext(Yo),[r,d]=C.useState(!1),[m,v]=C.useState(!1),{onFocus:A,onBlur:y,onMouseEnter:g,onMouseLeave:S,onTouchStart:_}=c,U=C.useRef(null);C.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let k=Q=>{Q.forEach(B=>{v(B.isIntersecting)})},L=new IntersectionObserver(k,{threshold:.5});return U.current&&L.observe(U.current),()=>{L.disconnect()}}},[i]),C.useEffect(()=>{if(r){let k=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(k)}}},[r]);let H=()=>{d(!0)},q=()=>{d(!1),v(!1)};return o?i!=="intent"?[m,U,{}]:[m,U,{onFocus:ni(A,H),onBlur:ni(y,q),onMouseEnter:ni(g,H),onMouseLeave:ni(S,q),onTouchStart:ni(_,H)}]:[!1,U,{}]}function ni(i,c){return o=>{i&&i(o),o.defaultPrevented||c(o)}}function fg({page:i,...c}){let{router:o}=O1(),r=C.useMemo(()=>b1(o.routes,i,o.basename),[o.routes,i,o.basename]);return r?C.createElement(hg,{page:i,matches:r,...c}):null}function dg(i){let{manifest:c,routeModules:o}=M1(),[r,d]=C.useState([]);return C.useEffect(()=>{let m=!1;return ng(i,c,o).then(v=>{m||d(v)}),()=>{m=!0}},[i,c,o]),r}function hg({page:i,matches:c,...o}){let r=Ga(),{manifest:d,routeModules:m}=M1(),{basename:v}=O1(),{loaderData:A,matches:y}=og(),g=C.useMemo(()=>t1(i,c,y,d,r,"data"),[i,c,y,d,r]),S=C.useMemo(()=>t1(i,c,y,d,r,"assets"),[i,c,y,d,r]),_=C.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let q=new Set,k=!1;if(c.forEach(Q=>{let B=d.routes[Q.route.id];!B||!B.hasLoader||(!g.some(V=>V.route.id===Q.route.id)&&Q.route.id in A&&m[Q.route.id]?.shouldRevalidate||B.hasClientLoader?k=!0:q.add(Q.route.id))}),q.size===0)return[];let L=tg(i,v,"data");return k&&q.size>0&&L.searchParams.set("_routes",c.filter(Q=>q.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[L.pathname+L.search]},[v,A,r,d,g,c,i,m]),U=C.useMemo(()=>ig(S,d),[S,d]),H=dg(S);return C.createElement(C.Fragment,null,_.map(q=>C.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),U.map(q=>C.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),H.map(({key:q,link:k})=>C.createElement("link",{key:q,nonce:o.nonce,...k})))}function mg(...i){return c=>{i.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var C1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{C1&&(window.__reactRouterVersion="7.8.2")}catch{}function pg({basename:i,children:c,window:o}){let r=C.useRef();r.current==null&&(r.current=l2({window:o,v5Compat:!0}));let d=r.current,[m,v]=C.useState({action:d.action,location:d.location}),A=C.useCallback(y=>{C.startTransition(()=>v(y))},[v]);return C.useLayoutEffect(()=>d.listen(A),[d,A]),C.createElement(V2,{basename:i,children:c,location:m.location,navigationType:m.action,navigator:d})}var w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N1=C.forwardRef(function({onClick:c,discover:o="render",prefetch:r="none",relative:d,reloadDocument:m,replace:v,state:A,target:y,to:g,preventScrollReset:S,viewTransition:_,...U},H){let{basename:q}=C.useContext(Zt),k=typeof g=="string"&&w1.test(g),L,Q=!1;if(typeof g=="string"&&k&&(L=g,C1))try{let je=new URL(window.location.href),tt=g.startsWith("//")?new URL(je.protocol+g):new URL(g),nt=ha(tt.pathname,q);tt.origin===je.origin&&nt!=null?g=nt+tt.search+tt.hash:Q=!0}catch{Vt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=O2(g,{relative:d}),[V,ae,Z]=sg(r,U),le=bg(g,{replace:v,state:A,target:y,preventScrollReset:S,relative:d,viewTransition:_});function $(je){c&&c(je),je.defaultPrevented||le(je)}let Ae=C.createElement("a",{...U,...Z,href:L||B,onClick:Q||m?c:$,ref:mg(H,ae),target:y,"data-discover":!k&&o==="render"?"true":void 0});return V&&!k?C.createElement(C.Fragment,null,Ae,C.createElement(fg,{page:B})):Ae});N1.displayName="Link";var gg=C.forwardRef(function({"aria-current":c="page",caseSensitive:o=!1,className:r="",end:d=!1,style:m,to:v,viewTransition:A,children:y,...g},S){let _=fi(v,{relative:g.relative}),U=Ga(),H=C.useContext(Vu),{navigator:q,basename:k}=C.useContext(Zt),L=H!=null&&zg(_)&&A===!0,Q=q.encodeLocation?q.encodeLocation(_).pathname:_.pathname,B=U.pathname,V=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(B=B.toLowerCase(),V=V?V.toLowerCase():null,Q=Q.toLowerCase()),V&&k&&(V=ha(V,k)||V);const ae=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let Z=B===Q||!d&&B.startsWith(Q)&&B.charAt(ae)==="/",le=V!=null&&(V===Q||!d&&V.startsWith(Q)&&V.charAt(Q.length)==="/"),$={isActive:Z,isPending:le,isTransitioning:L},Ae=Z?c:void 0,je;typeof r=="function"?je=r($):je=[r,Z?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let tt=typeof m=="function"?m($):m;return C.createElement(N1,{...g,"aria-current":Ae,className:je,ref:S,style:tt,to:v,viewTransition:A},typeof y=="function"?y($):y)});gg.displayName="NavLink";var vg=C.forwardRef(({discover:i="render",fetcherKey:c,navigate:o,reloadDocument:r,replace:d,state:m,method:v=Mu,action:A,onSubmit:y,relative:g,preventScrollReset:S,viewTransition:_,...U},H)=>{let q=jg(),k=Eg(A,{relative:g}),L=v.toLowerCase()==="get"?"get":"post",Q=typeof A=="string"&&w1.test(A),B=V=>{if(y&&y(V),V.defaultPrevented)return;V.preventDefault();let ae=V.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||v;q(ae||V.currentTarget,{fetcherKey:c,method:Z,navigate:o,replace:d,state:m,relative:g,preventScrollReset:S,viewTransition:_})};return C.createElement("form",{ref:H,method:L,action:k,onSubmit:r?y:B,...U,"data-discover":!Q&&i==="render"?"true":void 0})});vg.displayName="Form";function yg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U1(i){let c=C.useContext(an);return De(c,yg(i)),c}function bg(i,{target:c,replace:o,state:r,preventScrollReset:d,relative:m,viewTransition:v}={}){let A=Bo(),y=Ga(),g=fi(i,{relative:m});return C.useCallback(S=>{if(F2(S,c)){S.preventDefault();let _=o!==void 0?o:ci(y)===ci(g);A(i,{replace:_,state:r,preventScrollReset:d,relative:m,viewTransition:v})}},[y,A,g,o,r,c,i,d,m,v])}var xg=0,Sg=()=>`__${String(++xg)}__`;function jg(){let{router:i}=U1("useSubmit"),{basename:c}=C.useContext(Zt),o=Y2();return C.useCallback(async(r,d={})=>{let{action:m,method:v,encType:A,formData:y,body:g}=eg(r,c);if(d.navigate===!1){let S=d.fetcherKey||Sg();await i.fetch(S,o,d.action||m,{preventScrollReset:d.preventScrollReset,formData:y,body:g,formMethod:d.method||v,formEncType:d.encType||A,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:y,body:g,formMethod:d.method||v,formEncType:d.encType||A,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,c,o])}function Eg(i,{relative:c}={}){let{basename:o}=C.useContext(Zt),r=C.useContext(ma);De(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),m={...fi(i||".",{relative:c})},v=Ga();if(i==null){m.search=v.search;let A=new URLSearchParams(m.search),y=A.getAll("index");if(y.some(S=>S==="")){A.delete("index"),y.filter(_=>_).forEach(_=>A.append("index",_));let S=A.toString();m.search=S?`?${S}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:da([o,m.pathname])),ci(m)}function zg(i,{relative:c}={}){let o=C.useContext(A1);De(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=U1("useViewTransitionState"),d=fi(i,{relative:c});if(!o.isTransitioning)return!1;let m=ha(o.currentLocation.pathname,r)||o.currentLocation.pathname,v=ha(o.nextLocation.pathname,r)||o.nextLocation.pathname;return qu(d.pathname,v)!=null||qu(d.pathname,m)!=null}var st=function(){return st=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(c[m]=o[m])}return c},st.apply(this,arguments)};function Lu(i,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,m;r<d;r++)(m||!(r in c))&&(m||(m=Array.prototype.slice.call(c,0,r)),m[r]=c[r]);return i.concat(m||Array.prototype.slice.call(c))}var Re="-ms-",ui="-moz-",ge="-webkit-",H1="comm",Ku="rule",Xo="decl",Ag="@import",B1="@keyframes",Rg="@layer",q1=Math.abs,Qo=String.fromCharCode,_o=Object.assign;function Tg(i,c){return Ze(i,0)^45?(((c<<2^Ze(i,0))<<2^Ze(i,1))<<2^Ze(i,2))<<2^Ze(i,3):0}function L1(i){return i.trim()}function fa(i,c){return(i=c.exec(i))?i[0]:i}function ie(i,c,o){return i.replace(c,o)}function wu(i,c,o){return i.indexOf(c,o)}function Ze(i,c){return i.charCodeAt(c)|0}function Wl(i,c,o){return i.slice(c,o)}function kt(i){return i.length}function G1(i){return i.length}function ii(i,c){return c.push(i),i}function _g(i,c){return i.map(c).join("")}function a1(i,c){return i.filter(function(o){return!fa(o,c)})}var Ju=1,Fl=1,Y1=0,Ct=0,He=0,ln="";function $u(i,c,o,r,d,m,v,A){return{value:i,root:c,parent:o,type:r,props:d,children:m,line:Ju,column:Fl,length:v,return:"",siblings:A}}function La(i,c){return _o($u("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function Jl(i){for(;i.root;)i=La(i.root,{children:[i]});ii(i,i.siblings)}function Dg(){return He}function Og(){return He=Ct>0?Ze(ln,--Ct):0,Fl--,He===10&&(Fl=1,Ju--),He}function Bt(){return He=Ct<Y1?Ze(ln,Ct++):0,Fl++,He===10&&(Fl=1,Ju++),He}function cl(){return Ze(ln,Ct)}function Nu(){return Ct}function Wu(i,c){return Wl(ln,i,c)}function Do(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(i){return Ju=Fl=1,Y1=kt(ln=i),Ct=0,[]}function Cg(i){return ln="",i}function So(i){return L1(Wu(Ct-1,Oo(i===91?i+2:i===40?i+1:i)))}function wg(i){for(;(He=cl())&&He<33;)Bt();return Do(i)>2||Do(He)>3?"":" "}function Ng(i,c){for(;--c&&Bt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Wu(i,Nu()+(c<6&&cl()==32&&Bt()==32))}function Oo(i){for(;Bt();)switch(He){case i:return Ct;case 34:case 39:i!==34&&i!==39&&Oo(He);break;case 40:i===41&&Oo(i);break;case 92:Bt();break}return Ct}function Ug(i,c){for(;Bt()&&i+He!==57;)if(i+He===84&&cl()===47)break;return"/*"+Wu(c,Ct-1)+"*"+Qo(i===47?i:Bt())}function Hg(i){for(;!Do(cl());)Bt();return Wu(i,Ct)}function Bg(i){return Cg(Uu("",null,null,null,[""],i=Mg(i),0,[0],i))}function Uu(i,c,o,r,d,m,v,A,y){for(var g=0,S=0,_=v,U=0,H=0,q=0,k=1,L=1,Q=1,B=0,V="",ae=d,Z=m,le=r,$=V;L;)switch(q=B,B=Bt()){case 40:if(q!=108&&Ze($,_-1)==58){wu($+=ie(So(B),"&","&\f"),"&\f",q1(g?A[g-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:$+=So(B);break;case 9:case 10:case 13:case 32:$+=wg(q);break;case 92:$+=Ng(Nu()-1,7);continue;case 47:switch(cl()){case 42:case 47:ii(qg(Ug(Bt(),Nu()),c,o,y),y);break;default:$+="/"}break;case 123*k:A[g++]=kt($)*Q;case 125*k:case 59:case 0:switch(B){case 0:case 125:L=0;case 59+S:Q==-1&&($=ie($,/\f/g,"")),H>0&&kt($)-_&&ii(H>32?n1($+";",r,o,_-1,y):n1(ie($," ","")+";",r,o,_-2,y),y);break;case 59:$+=";";default:if(ii(le=l1($,c,o,g,S,d,A,V,ae=[],Z=[],_,m),m),B===123)if(S===0)Uu($,c,le,le,ae,m,_,A,Z);else switch(U===99&&Ze($,3)===110?100:U){case 100:case 108:case 109:case 115:Uu(i,le,le,r&&ii(l1(i,le,le,0,0,d,A,V,d,ae=[],_,Z),Z),d,Z,_,A,r?ae:Z);break;default:Uu($,le,le,le,[""],Z,0,A,Z)}}g=S=H=0,k=Q=1,V=$="",_=v;break;case 58:_=1+kt($),H=q;default:if(k<1){if(B==123)--k;else if(B==125&&k++==0&&Og()==125)continue}switch($+=Qo(B),B*k){case 38:Q=S>0?1:($+="\f",-1);break;case 44:A[g++]=(kt($)-1)*Q,Q=1;break;case 64:cl()===45&&($+=So(Bt())),U=cl(),S=_=kt(V=$+=Hg(Nu())),B++;break;case 45:q===45&&kt($)==2&&(k=0)}}return m}function l1(i,c,o,r,d,m,v,A,y,g,S,_){for(var U=d-1,H=d===0?m:[""],q=G1(H),k=0,L=0,Q=0;k<r;++k)for(var B=0,V=Wl(i,U+1,U=q1(L=v[k])),ae=i;B<q;++B)(ae=L1(L>0?H[B]+" "+V:ie(V,/&\f/g,H[B])))&&(y[Q++]=ae);return $u(i,c,o,d===0?Ku:A,y,g,S,_)}function qg(i,c,o,r){return $u(i,c,o,H1,Qo(Dg()),Wl(i,2,-2),0,r)}function n1(i,c,o,r,d){return $u(i,c,o,Xo,Wl(i,0,r),Wl(i,r+1,-1),r,d)}function X1(i,c,o){switch(Tg(i,c)){case 5103:return ge+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+i+i;case 4789:return ui+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+i+ui+i+Re+i+i;case 5936:switch(Ze(i,c+11)){case 114:return ge+i+Re+ie(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ge+i+Re+ie(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ge+i+Re+ie(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ge+i+Re+i+i;case 6165:return ge+i+Re+"flex-"+i+i;case 5187:return ge+i+ie(i,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Re+"flex-$1$2")+i;case 5443:return ge+i+Re+"flex-item-"+ie(i,/flex-|-self/g,"")+(fa(i,/flex-|baseline/)?"":Re+"grid-row-"+ie(i,/flex-|-self/g,""))+i;case 4675:return ge+i+Re+"flex-line-pack"+ie(i,/align-content|flex-|-self/g,"")+i;case 5548:return ge+i+Re+ie(i,"shrink","negative")+i;case 5292:return ge+i+Re+ie(i,"basis","preferred-size")+i;case 6060:return ge+"box-"+ie(i,"-grow","")+ge+i+Re+ie(i,"grow","positive")+i;case 4554:return ge+ie(i,/([^-])(transform)/g,"$1"+ge+"$2")+i;case 6187:return ie(ie(ie(i,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),i,"")+i;case 5495:case 3959:return ie(i,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ie(ie(i,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+i+i;case 4200:if(!fa(i,/flex-|baseline/))return Re+"grid-column-align"+Wl(i,c)+i;break;case 2592:case 3360:return Re+ie(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,fa(r.props,/grid-\w+-end/)})?~wu(i+(o=o[c].value),"span",0)?i:Re+ie(i,"-start","")+i+Re+"grid-row-span:"+(~wu(o,"span",0)?fa(o,/\d+/):+fa(o,/\d+/)-+fa(i,/\d+/))+";":Re+ie(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(r){return fa(r.props,/grid-\w+-start/)})?i:Re+ie(ie(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ie(i,/(.+)-inline(.+)/,ge+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(i)-1-c>6)switch(Ze(i,c+1)){case 109:if(Ze(i,c+4)!==45)break;case 102:return ie(i,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+ui+(Ze(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~wu(i,"stretch",0)?X1(ie(i,"stretch","fill-available"),c,o)+i:i}break;case 5152:case 5920:return ie(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,m,v,A,y,g){return Re+d+":"+m+g+(v?Re+d+"-span:"+(A?y:+y-+m)+g:"")+i});case 4949:if(Ze(i,c+6)===121)return ie(i,":",":"+ge)+i;break;case 6444:switch(Ze(i,Ze(i,14)===45?18:11)){case 120:return ie(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(Ze(i,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Re+"$2box$3")+i;case 100:return ie(i,":",":"+Re)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(i,"scroll-","scroll-snap-")+i}return i}function Gu(i,c){for(var o="",r=0;r<i.length;r++)o+=c(i[r],r,i,c)||"";return o}function Lg(i,c,o,r){switch(i.type){case Rg:if(i.children.length)break;case Ag:case Xo:return i.return=i.return||i.value;case H1:return"";case B1:return i.return=i.value+"{"+Gu(i.children,r)+"}";case Ku:if(!kt(i.value=i.props.join(",")))return""}return kt(o=Gu(i.children,r))?i.return=i.value+"{"+o+"}":""}function Gg(i){var c=G1(i);return function(o,r,d,m){for(var v="",A=0;A<c;A++)v+=i[A](o,r,d,m)||"";return v}}function Yg(i){return function(c){c.root||(c=c.return)&&i(c)}}function Xg(i,c,o,r){if(i.length>-1&&!i.return)switch(i.type){case Xo:i.return=X1(i.value,i.length,o);return;case B1:return Gu([La(i,{value:ie(i.value,"@","@"+ge)})],r);case Ku:if(i.length)return _g(o=i.props,function(d){switch(fa(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jl(La(i,{props:[ie(d,/:(read-\w+)/,":"+ui+"$1")]})),Jl(La(i,{props:[d]})),_o(i,{props:a1(o,r)});break;case"::placeholder":Jl(La(i,{props:[ie(d,/:(plac\w+)/,":"+ge+"input-$1")]})),Jl(La(i,{props:[ie(d,/:(plac\w+)/,":"+ui+"$1")]})),Jl(La(i,{props:[ie(d,/:(plac\w+)/,Re+"input-$1")]})),Jl(La(i,{props:[d]})),_o(i,{props:a1(o,r)});break}return""})}}var Qg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},Pl=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Q1="active",k1="data-styled-version",Fu="6.1.19",ko=`/*!sc*/
`,Yu=typeof window<"u"&&typeof document<"u",kg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),Pu=Object.freeze([]),Il=Object.freeze({});function Vg(i,c,o){return o===void 0&&(o=Il),i.theme!==o.theme&&i.theme||c||o.theme}var V1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kg=/(^-|-$)/g;function i1(i){return i.replace(Zg,"-").replace(Kg,"")}var Jg=/(a)(d)/gi,Du=52,u1=function(i){return String.fromCharCode(i+(i>25?39:97))};function Mo(i){var c,o="";for(c=Math.abs(i);c>Du;c=c/Du|0)o=u1(c%Du)+o;return(u1(c%Du)+o).replace(Jg,"$1-$2")}var jo,Z1=5381,$l=function(i,c){for(var o=c.length;o;)i=33*i^c.charCodeAt(--o);return i},K1=function(i){return $l(Z1,i)};function $g(i){return Mo(K1(i)>>>0)}function Wg(i){return i.displayName||i.name||"Component"}function Eo(i){return typeof i=="string"&&!0}var J1=typeof Symbol=="function"&&Symbol.for,$1=J1?Symbol.for("react.memo"):60115,Fg=J1?Symbol.for("react.forward_ref"):60112,Pg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ig={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e3=((jo={})[Fg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jo[$1]=W1,jo);function c1(i){return("type"in(c=i)&&c.type.$$typeof)===$1?W1:"$$typeof"in i?e3[i.$$typeof]:Pg;var c}var t3=Object.defineProperty,a3=Object.getOwnPropertyNames,r1=Object.getOwnPropertySymbols,l3=Object.getOwnPropertyDescriptor,n3=Object.getPrototypeOf,o1=Object.prototype;function F1(i,c,o){if(typeof c!="string"){if(o1){var r=n3(c);r&&r!==o1&&F1(i,r,o)}var d=a3(c);r1&&(d=d.concat(r1(c)));for(var m=c1(i),v=c1(c),A=0;A<d.length;++A){var y=d[A];if(!(y in Ig||o&&o[y]||v&&y in v||m&&y in m)){var g=l3(c,y);try{t3(i,y,g)}catch{}}}}return i}function en(i){return typeof i=="function"}function Vo(i){return typeof i=="object"&&"styledComponentId"in i}function ul(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function s1(i,c){if(i.length===0)return"";for(var o=i[0],r=1;r<i.length;r++)o+=i[r];return o}function ri(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Co(i,c,o){if(o===void 0&&(o=!1),!o&&!ri(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)i[r]=Co(i[r],c[r]);else if(ri(c))for(var r in c)i[r]=Co(i[r],c[r]);return i}function Zo(i,c){Object.defineProperty(i,"toString",{value:c})}function di(i){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var i3=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return i.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},i.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,m=d;c>=m;)if((m<<=1)<0)throw di(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var v=d;v<m;v++)this.groupSizes[v]=0}for(var A=this.indexOfGroup(c+1),y=(v=0,o.length);v<y;v++)this.tag.insertRule(A,o[v])&&(this.groupSizes[c]++,A++)},i.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var m=r;m<d;m++)this.tag.deleteRule(r)}},i.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),m=d+r,v=d;v<m;v++)o+="".concat(this.tag.getRule(v)).concat(ko);return o},i})(),Hu=new Map,Xu=new Map,Bu=1,Ou=function(i){if(Hu.has(i))return Hu.get(i);for(;Xu.has(Bu);)Bu++;var c=Bu++;return Hu.set(i,c),Xu.set(c,i),c},u3=function(i,c){Bu=c+1,Hu.set(i,c),Xu.set(c,i)},c3="style[".concat(Pl,"][").concat(k1,'="').concat(Fu,'"]'),r3=new RegExp("^".concat(Pl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),o3=function(i,c,o){for(var r,d=o.split(","),m=0,v=d.length;m<v;m++)(r=d[m])&&i.registerName(c,r)},s3=function(i,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(ko),d=[],m=0,v=r.length;m<v;m++){var A=r[m].trim();if(A){var y=A.match(r3);if(y){var g=0|parseInt(y[1],10),S=y[2];g!==0&&(u3(S,g),o3(i,S,y[3]),i.getTag().insertRules(g,d)),d.length=0}else d.push(A)}}},f1=function(i){for(var c=document.querySelectorAll(c3),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(Pl)!==Q1&&(s3(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function f3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P1=function(i){var c=document.head,o=i||c,r=document.createElement("style"),d=(function(A){var y=Array.from(A.querySelectorAll("style[".concat(Pl,"]")));return y[y.length-1]})(o),m=d!==void 0?d.nextSibling:null;r.setAttribute(Pl,Q1),r.setAttribute(k1,Fu);var v=f3();return v&&r.setAttribute("nonce",v),o.insertBefore(r,m),r},d3=(function(){function i(c){this.element=P1(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,m=r.length;d<m;d++){var v=r[d];if(v.ownerNode===o)return v}throw di(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},i})(),h3=(function(){function i(c){this.element=P1(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),m3=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),d1=Yu,p3={isServer:!Yu,useCSSOMInjection:!kg},I1=(function(){function i(c,o,r){c===void 0&&(c=Il),o===void 0&&(o={});var d=this;this.options=st(st({},p3),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Yu&&d1&&(d1=!1,f1(this)),Zo(this,function(){return(function(m){for(var v=m.getTag(),A=v.length,y="",g=function(_){var U=(function(Q){return Xu.get(Q)})(_);if(U===void 0)return"continue";var H=m.names.get(U),q=v.getGroup(_);if(H===void 0||!H.size||q.length===0)return"continue";var k="".concat(Pl,".g").concat(_,'[id="').concat(U,'"]'),L="";H!==void 0&&H.forEach(function(Q){Q.length>0&&(L+="".concat(Q,","))}),y+="".concat(q).concat(k,'{content:"').concat(L,'"}').concat(ko)},S=0;S<A;S++)g(S);return y})(d)})}return i.registerId=function(c){return Ou(c)},i.prototype.rehydrate=function(){!this.server&&Yu&&f1(this)},i.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new i(st(st({},this.options),c),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new m3(d):r?new d3(d):new h3(d)})(this.options),new i3(c)));var c},i.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},i.prototype.registerName=function(c,o){if(Ou(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},i.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Ou(c),r)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(Ou(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),g3=/&/g,v3=/^\s*\/\/.*$/gm;function eh(i,c){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=eh(o.children,c)),o})}function y3(i){var c,o,r,d=Il,m=d.options,v=m===void 0?Il:m,A=d.plugins,y=A===void 0?Pu:A,g=function(U,H,q){return q.startsWith(o)&&q.endsWith(o)&&q.replaceAll(o,"").length>0?".".concat(c):U},S=y.slice();S.push(function(U){U.type===Ku&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(g3,o).replace(r,g))}),v.prefix&&S.push(Xg),S.push(Lg);var _=function(U,H,q,k){H===void 0&&(H=""),q===void 0&&(q=""),k===void 0&&(k="&"),c=k,o=H,r=new RegExp("\\".concat(o,"\\b"),"g");var L=U.replace(v3,""),Q=Bg(q||H?"".concat(q," ").concat(H," { ").concat(L," }"):L);v.namespace&&(Q=eh(Q,v.namespace));var B=[];return Gu(Q,Gg(S.concat(Yg(function(V){return B.push(V)})))),B};return _.hash=y.length?y.reduce(function(U,H){return H.name||di(15),$l(U,H.name)},Z1).toString():"",_}var b3=new I1,wo=y3(),th=Mt.createContext({shouldForwardProp:void 0,styleSheet:b3,stylis:wo});th.Consumer;Mt.createContext(void 0);function h1(){return C.useContext(th)}var x3=(function(){function i(c,o){var r=this;this.inject=function(d,m){m===void 0&&(m=wo);var v=r.name+m.hash;d.hasNameForId(r.id,v)||d.insertRules(r.id,v,m(r.rules,v,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,Zo(this,function(){throw di(12,String(r.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=wo),this.name+c.hash},i})(),S3=function(i){return i>="A"&&i<="Z"};function m1(i){for(var c="",o=0;o<i.length;o++){var r=i[o];if(o===1&&r==="-"&&i[0]==="-")return i;S3(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var ah=function(i){return i==null||i===!1||i===""},lh=function(i){var c,o,r=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!ah(m)&&(Array.isArray(m)&&m.isCss||en(m)?r.push("".concat(m1(d),":"),m,";"):ri(m)?r.push.apply(r,Lu(Lu(["".concat(d," {")],lh(m),!1),["}"],!1)):r.push("".concat(m1(d),": ").concat((c=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Qg||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function rl(i,c,o,r){if(ah(i))return[];if(Vo(i))return[".".concat(i.styledComponentId)];if(en(i)){if(!en(m=i)||m.prototype&&m.prototype.isReactComponent||!c)return[i];var d=i(c);return rl(d,c,o,r)}var m;return i instanceof x3?o?(i.inject(o,r),[i.getName(r)]):[i]:ri(i)?lh(i):Array.isArray(i)?Array.prototype.concat.apply(Pu,i.map(function(v){return rl(v,c,o,r)})):[i.toString()]}function j3(i){for(var c=0;c<i.length;c+=1){var o=i[c];if(en(o)&&!Vo(o))return!1}return!0}var E3=K1(Fu),z3=(function(){function i(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&j3(c),this.componentId=o,this.baseHash=$l(E3,o),this.baseStyle=r,I1.registerId(o)}return i.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ul(d,this.staticRulesId);else{var m=s1(rl(this.rules,c,o,r)),v=Mo($l(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,v)){var A=r(m,".".concat(v),void 0,this.componentId);o.insertRules(this.componentId,v,A)}d=ul(d,v),this.staticRulesId=v}else{for(var y=$l(this.baseHash,r.hash),g="",S=0;S<this.rules.length;S++){var _=this.rules[S];if(typeof _=="string")g+=_;else if(_){var U=s1(rl(_,c,o,r));y=$l(y,U+S),g+=U}}if(g){var H=Mo(y>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,r(g,".".concat(H),void 0,this.componentId)),d=ul(d,H)}}return d},i})(),nh=Mt.createContext(void 0);nh.Consumer;var zo={};function A3(i,c,o){var r=Vo(i),d=i,m=!Eo(i),v=c.attrs,A=v===void 0?Pu:v,y=c.componentId,g=y===void 0?(function(ae,Z){var le=typeof ae!="string"?"sc":i1(ae);zo[le]=(zo[le]||0)+1;var $="".concat(le,"-").concat($g(Fu+le+zo[le]));return Z?"".concat(Z,"-").concat($):$})(c.displayName,c.parentComponentId):y,S=c.displayName,_=S===void 0?(function(ae){return Eo(ae)?"styled.".concat(ae):"Styled(".concat(Wg(ae),")")})(i):S,U=c.displayName&&c.componentId?"".concat(i1(c.displayName),"-").concat(c.componentId):c.componentId||g,H=r&&d.attrs?d.attrs.concat(A).filter(Boolean):A,q=c.shouldForwardProp;if(r&&d.shouldForwardProp){var k=d.shouldForwardProp;if(c.shouldForwardProp){var L=c.shouldForwardProp;q=function(ae,Z){return k(ae,Z)&&L(ae,Z)}}else q=k}var Q=new z3(o,U,r?d.componentStyle:void 0);function B(ae,Z){return(function(le,$,Ae){var je=le.attrs,tt=le.componentStyle,nt=le.defaultProps,Le=le.foldedComponentIds,Kt=le.styledComponentId,Jt=le.target,Ge=Mt.useContext(nh),D=h1(),Y=le.shouldForwardProp||D.shouldForwardProp,F=Vg($,Ge,nt)||Il,re=(function(oe,I,Ye){for(var pe,Fe=st(st({},I),{className:void 0,theme:Ye}),Ya=0;Ya<oe.length;Ya+=1){var $t=en(pe=oe[Ya])?pe(Fe):pe;for(var St in $t)Fe[St]=St==="className"?ul(Fe[St],$t[St]):St==="style"?st(st({},Fe[St]),$t[St]):$t[St]}return I.className&&(Fe.className=ul(Fe.className,I.className)),Fe})(je,$,F),b=re.as||Jt,N={};for(var G in re)re[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&re.theme===F||(G==="forwardedAs"?N.as=re.forwardedAs:Y&&!Y(G,b)||(N[G]=re[G]));var X=(function(oe,I){var Ye=h1(),pe=oe.generateAndInjectStyles(I,Ye.styleSheet,Ye.stylis);return pe})(tt,re),W=ul(Le,Kt);return X&&(W+=" "+X),re.className&&(W+=" "+re.className),N[Eo(b)&&!V1.has(b)?"class":"className"]=W,Ae&&(N.ref=Ae),C.createElement(b,N)})(V,ae,Z)}B.displayName=_;var V=Mt.forwardRef(B);return V.attrs=H,V.componentStyle=Q,V.displayName=_,V.shouldForwardProp=q,V.foldedComponentIds=r?ul(d.foldedComponentIds,d.styledComponentId):"",V.styledComponentId=U,V.target=r?d.target:i,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=r?(function(Z){for(var le=[],$=1;$<arguments.length;$++)le[$-1]=arguments[$];for(var Ae=0,je=le;Ae<je.length;Ae++)Co(Z,je[Ae],!0);return Z})({},d.defaultProps,ae):ae}}),Zo(V,function(){return".".concat(V.styledComponentId)}),m&&F1(V,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function p1(i,c){for(var o=[i[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],i[r+1]);return o}var g1=function(i){return Object.assign(i,{isCss:!0})};function R3(i){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(en(i)||ri(i))return g1(rl(p1(Pu,Lu([i],c,!0))));var r=i;return c.length===0&&r.length===1&&typeof r[0]=="string"?rl(r):g1(rl(p1(r,c)))}function No(i,c,o){if(o===void 0&&(o=Il),!c)throw di(1,c);var r=function(d){for(var m=[],v=1;v<arguments.length;v++)m[v-1]=arguments[v];return i(c,o,R3.apply(void 0,Lu([d],m,!1)))};return r.attrs=function(d){return No(i,c,st(st({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return No(i,c,st(st({},o),d))},r}var ih=function(i){return No(A3,i)},wt=ih;V1.forEach(function(i){wt[i]=ih(i)});const T3=wt.header`
  width: 100%;
  background: ${({scrolled:i})=>i?"rgba(48, 27, 97, 1)":"transparent"} !important;
  backdrop-filter: ${({scrolled:i})=>i?"blur(6px)":"none"};
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  display: flex;
  height: 100px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  

  z-index: 99999;
  transform: translateY(-100%);
  animation: slideDown 1s forwards;

  h1 {
    font-size: 1.8rem;
    color: #ededed;
  }

  .menu-desktop {
    display: none;
  }

  .menu-hamburger {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ededed;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      color: #8b5cf6;
    }
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2rem;
      color: #ededed;
      cursor: default;
    }

    .menu-desktop {
      display: none;
    }

    .menu-hamburger {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ededed;
      cursor: pointer;
      transition: 0.4s ease;

      &:hover {
        color: #8b5cf6;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline: 0px;
    justify-content: space-around;
    h1 {
      font-size: 1.8rem;
      color: #ededed;
    }

    .menu-desktop {
      display: flex;
      gap: 20px;
    }

    .menu-desktop a {
      color: #ededed;;
      text-decoration: none;
      font-size: 1rem;
      transition: 0.4s ease;

      &:hover {
        color: #8b5cf6;
      }
    }

    .menu-hamburger {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-inline: 0px;
    justify-content: space-around;
    h1 {
      font-size: 2.2rem;
      color: #ededed;
    }

    .menu-desktop {
      display: flex;
      gap: 20px;
    }

    .menu-desktop a {
      color: #ededed;
      text-decoration: none;
      font-size: 1.3rem;
    }

    .menu-hamburger {
      display: none;
    }
  }

  @keyframes slideDown {
    to {
      transform: translateY(0);
    }
  }
`,_3=wt.div`
  position: fixed;
  top: 0;
  right: ${({open:i})=>i?"0":"-300px"};
  width: 250px;
  height: 100%;
  background: rgba(48, 27, 97, 1);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  gap: 20px;
  transition: right 0.3s ease;
  z-index: 100000;

  a {
    color: #ededed;
    text-decoration: none;
    font-size: 1.2rem;
    transition: 0.3s ease;

    &:hover {
      color: #8b5cf6;
    }
  }

  @media screen and (min-width: 531px) {
    display: none;
  }
`,D3=wt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  opacity: ${({open:i})=>i?"1":"0"};
  pointer-events: ${({open:i})=>i?"auto":"none"};
  transition: opacity 0.3s ease;
  z-index: 99999;

  @media screen and (min-width: 531px) {
    display: none;
  }
`,O3=wt.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #ededed;
  cursor: pointer;
  z-index: 100002;

  &:hover {
    color: #8b5cf6;
  }
`;function M3(){const[i,c]=C.useState(!1),[o,r]=C.useState(!1);C.useEffect(()=>{const m=()=>{c(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const d=()=>r(m=>!m);return f.jsxs(f.Fragment,{children:[f.jsxs(T3,{scrolled:i,children:[f.jsx("h1",{children:"Portfólio"}),f.jsxs("div",{className:"menu-desktop",children:[f.jsx("a",{href:"#",children:"Início"}),f.jsx("a",{href:"#sobre",children:"Sobre"}),f.jsx("a",{href:"#habilidades",children:"Habilidades"}),f.jsx("a",{href:"#projetos",children:"Projetos"}),f.jsx("a",{href:"#contato",children:"Contato"})]}),f.jsx("div",{className:"menu-hamburger",onClick:d,children:o?"":"☰"})]}),f.jsx(D3,{open:o,onClick:d}),f.jsxs(_3,{open:o,children:[f.jsx(O3,{onClick:d,children:"×"}),f.jsx("a",{href:"#",onClick:d,children:"Início"}),f.jsx("a",{href:"#sobre",onClick:d,children:"Sobre"}),f.jsx("a",{href:"#habilidades",onClick:d,children:"Habilidades"}),f.jsx("a",{href:"#projetos",onClick:d,children:"Projetos"}),f.jsx("a",{href:"#contato",onClick:d,children:"Contato"})]})]})}const C3=wt.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #00000075;

  p {
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    color: #8800f7ff;
    &:hover {
    color: #610ea5ff;
     
    }
  }

  @media screen and (min-width: 530px) {
    p {
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;function w3(){return f.jsx(C3,{children:f.jsxs("p",{children:["© Site criado por ",f.jsx("a",{href:"",children:"Gabriel da Costa Rodrigues"})]})})}const N3="/Portfolio-Front-end-Developer/assets/backk2-C6OP1j_g.png",U3=wt.div`
  min-height: 100vh;
padding-top: 100px; /* mesma altura do header */
/* display: flex;
align-items: center;
justify-content: center; */
height: auto;
  width: 100%;
 overflow-x: hidden;
  background-color: #0d0d0d;
  /* background-color: black; */
  background-image: url(${N3});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
 




  .content-section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
    color: #ebebeb;
  }

  .social-medias {
    display: flex;
    gap: 15px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }


  

  /* Ícones sociais com animação suave de entrada em cascata */
  .social-medias svg {
    font-size: 35px;
    color: #d1c4e9;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transform: translateX(-150vw); /* começa fora da tela */
    animation: slideRight 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    transition: 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      background-color: #6e00ff;
      color: white;
      border-color: #ff00ff;
      box-shadow: 0 0 10px #6e00ff, 0 0 20px #ff00ff, 0 0 30px #6e00ff;
      transform: scale(1.1);
    }
  }

  /* Delays para entrada em cascata dos 3 ícones */
  .social-medias  a:nth-child(1) svg{ animation-delay: 0s; }
  .social-medias  a:nth-child(2) svg{ animation-delay: 0.2s; }
  .social-medias  a:nth-child(3) svg{ animation-delay: 0.4s; }

.perfil {
  transform: translateX(100%);
  animation: slideLeft 1.2s forwards;
}

.perfil img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 50px;
  animation: float 3s ease-in-out infinite, glow 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 15px #6e00ff, 0 0 20px #6e00ff, 0 0 25px #6e00ff;
  }
  50% {
    box-shadow: 0 0 25px #6e00ff, 0 0 35px #ff00ff, 0 0 45px #6e00ff; /* brilho maior */
  }
}

  .content-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }

h1 {
  font-size: 2rem;
  margin-top: 10px;
  color: #ebebeb;
  text-shadow: none; /* mantém conforme o original */
  opacity: 0; /* começa invisível */
  animation: fadeIn 2s ease forwards; /* fade-in apenas */
}

h2 {
  font-size: 1.6rem;
  margin-top: 5px;
  color: #6e00ff;
  text-shadow: 0 0 2px #6e00ff, 0 0 20px #6e00ff;
  opacity: 0;
  animation: fadeIn 2s ease 0.5s forwards; /* delay para h2 */
}

/* Keyframes fade-in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
p {
  margin-top: 20px;
  color: #d1c4e9;
  max-width: 600px;
  line-height: 1.5;
  text-align: justify;
  width: 90%;
  /* /* display: inline-block;   */
}

p {
  display: inline-block;
  transform: scale(0); /* começa invisível */
  animation: scaleUp 1s forwards;
}

/* Keyframes para crescer */
@keyframes scaleUp {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

  /* Cores para cada tecnologia */
  .tech {
    font-weight: bold;
  }
  .tech.react { color: #61dafb; }
  .tech.js { color: #f7df1e; }
  .tech.html { color: #e34f26; }
  .tech.css { color: #2965f1; }
  .tech.node{color: #339933}

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .btn button {
    margin-top: 30px;
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(90deg, #6e00ff, #ff00ff);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.4s ease;
    box-shadow: 0 0 10px #6e00ff, 0 0 20px #ff00ff;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transform: scale(0); /* começa invisível */
  animation: scaleUp 1s forwards;
  }

  .btn button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #6e00ff, 0 0 40px #ff00ff, 0 0 60px #6e00ff;
  }

  @media screen and (min-width: 530px) {
    h1 { font-size: 2.1rem; }
    h2 { font-size: 1.7rem; }
    p { font-size: 1.1rem; }
    .btn button { font-size: 1.1rem; }
  }

  @media screen and (min-width: 768px) {
    padding-top:0;
    height: 100vh;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      
    /* height: 100vh; */
    .content-section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 50px;
      height: 80%;
      gap: 50px;
    }
    .social-medias {
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      margin: 0;
    }
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      padding: 0 20px;
      text-align: start;
      width: 100%;
    }
    .perfil { flex-shrink: 0; margin-left: 20px; }
    h1 { 
      font-size: 2.1rem;
      width: 90%;
     }
    h2 { 
      font-size: 1.6rem;
      width: 90%;
      

    }
   
    p { font-size: 1.2rem; }
    .btn button { font-size: 1.1rem; }
    .perfil img{
  margin-top: 0px;
  width: 200px;
  height: 200px;

    }
  }




  @media screen and (min-width: 992px) {
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 0 20px;
      max-width: 600px;
      text-align: start;
    }
    .content-text h1,
    .content-text h2,
    .content-text p {
      margin: 0;
      width: 100%;
    }
    .content-text h1 { font-size: 2.5rem }
    h2 { font-size: 1.9rem }
    p { line-height: 1.5; }
    .btn { 
      width: 90%; 
    
  }
  .btn button{
    font-size: 1.2rem;
  }
    .perfil img { margin-top: 0px;
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (min-width: 1200px) {
    .perfil img {
      width: 315px;
      height: 315px;
      object-fit: cover;
      border-radius: 50%;
     animation: float 3s ease-in-out infinite, glow 3s ease-in-out infinite;
    }
    .content-section { justify-content: space-between; }
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 0 20px;
      max-width: 700px;
    }
    .content-text h1,
    .content-text h2,
    .content-text p { margin: 0; width: 100%; }
    h1 { font-size: 3.5rem !important; }
    h2 { font-size: 2rem; }
    p { line-height: 1.6; }
    .btn { width: 90%; }
    .social-medias svg { font-size: 40px; }
  }

  /* Animações */
  @keyframes slideRight {
    to { transform: translateX(0); }
  }

   @keyframes slideLeft {
    to { transform: translateX(0); }
  }
`;var uh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v1=Mt.createContext&&Mt.createContext(uh),H3=["attr","size","title"];function B3(i,c){if(i==null)return{};var o=q3(i,c),r,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(d=0;d<m.length;d++)r=m[d],!(c.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(o[r]=i[r])}return o}function q3(i,c){if(i==null)return{};var o={};for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){if(c.indexOf(r)>=0)continue;o[r]=i[r]}return o}function Qu(){return Qu=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])}return i},Qu.apply(this,arguments)}function y1(i,c){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);c&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),o.push.apply(o,r)}return o}function ku(i){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?y1(Object(o),!0).forEach(function(r){L3(i,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):y1(Object(o)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(o,r))})}return i}function L3(i,c,o){return c=G3(c),c in i?Object.defineProperty(i,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[c]=o,i}function G3(i){var c=Y3(i,"string");return typeof c=="symbol"?c:c+""}function Y3(i,c){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var r=o.call(i,c);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function ch(i){return i&&i.map((c,o)=>Mt.createElement(c.tag,ku({key:o},c.attr),ch(c.child)))}function lt(i){return c=>Mt.createElement(X3,Qu({attr:ku({},i.attr)},c),ch(i.child))}function X3(i){var c=o=>{var{attr:r,size:d,title:m}=i,v=B3(i,H3),A=d||o.size||"1em",y;return o.className&&(y=o.className),i.className&&(y=(y?y+" ":"")+i.className),Mt.createElement("svg",Qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,v,{className:y,style:ku(ku({color:i.color||o.color},o.style),i.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),m&&Mt.createElement("title",null,m),i.children)};return v1!==void 0?Mt.createElement(v1.Consumer,null,o=>c(o)):c(uh)}function Q3(i){return lt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function k3(i){return lt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function V3(i){return lt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}const Z3="/Portfolio-Front-end-Developer/assets/profile-DbjR2BzC.png";function K3(){return f.jsx(U3,{id:"inicio",children:f.jsxs("div",{className:"content-section",children:[f.jsxs("div",{className:"social-medias",children:[f.jsx("a",{href:"https://www.linkedin.com/in/grodriguess10/",target:"_blank",children:f.jsx(k3,{})}),f.jsx("a",{href:"https://wa.me/5521965476339",target:"_blank",rel:"noopener noreferrer",children:f.jsx(V3,{})}),f.jsx("a",{href:"https://github.com/GRodrigues10",target:"_blank",children:f.jsx(Q3,{})})]}),f.jsxs("div",{className:"content-text",children:[f.jsx("h1",{children:"Olá, eu sou o Gabriel"}),f.jsx("h2",{children:"Front-end Developer"}),f.jsxs("p",{children:["Desenvolvedor Front-end formado em Análise e Desenvolvimento de Sistemas pela Universidade La Salle. Tenho experiência prática em projetos web utilizando tecnologias como"," ",f.jsx("span",{className:"tech react",children:"React"}),","," ",f.jsx("span",{className:"tech js",children:"JavaScript"}),","," ",f.jsx("span",{className:"tech html",children:"HTML"}),","," ",f.jsx("span",{className:"tech css",children:"CSS"})," e"," ",f.jsx("span",{className:"tech node",children:"Node"}),", com foco em criar interfaces modernas, responsivas e centradas na experiência do usuário."]}),f.jsx("div",{className:"btn",children:f.jsx("a",{href:"/Portfolio-Front-end-Developer/Currículo_Gabriel_Rodrigues_Frontend.pdf",download:"Gabriel_Rodrigues_Curriculo.pdf",children:f.jsx("button",{children:"Currículo"})})})]}),f.jsx("div",{className:"perfil",children:f.jsx("img",{src:Z3,alt:"Imagem do Perfil"})})]})})}const J3="/Portfolio-Front-end-Developer/assets/backgroundPortfolio_-dkxJTp3g.png",$3=wt.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0A001A;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 100px;

  .content-section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #e6e6fa;
      padding-top: 40px;
      span {
        color: #6e00ff;
      }
    }

    p {
      color: #cccce5;
      text-align: justify;
      margin: 30px 0;
      font-size: 1.1rem;
      max-width: 1250px;
      span {
        color: #d8ccff;
        font-weight: 600;
      }
    }
  }

  .boxs {
    display: flex;
    flex-direction: column; 
    gap: 20px;
    margin: 20px 0;
    color: #e6e6fa;
    max-width: 1200px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      text-shadow: 0 0 6px rgba(110,0,255,0.7);
    }

    ul{
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-inline: 20px;
    }

    li {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    div {
      background: rgba(20, 18, 54, 0.6);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 25px;
      border-radius: 15px;
      gap: 10px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
      min-height: 250px;
    }

    div:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 20px #6e00ff, 0 0 40px #6e00ff55;
      border: 1px solid #6e00ff55;
      cursor: context-menu;
    }
  }

  /* Media Query 768px */
  @media screen and (min-width: 768px) {
    background: url(${J3}) top center/ cover no-repeat fixed;

    .content-section {
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }

    .boxs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      h3 {
        font-size: 1.7rem;
      }
      li {
        font-size: 1.15rem;
      }
    }
  }

  /* Media Query 992px */
  @media screen and (min-width: 992px) {
    .content-section {
      h1 {
        font-size: 2.4rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  /* Media Query 1200px */
  @media screen and (min-width: 1200px) {
    .content-section {
      padding: 60px;
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.4rem;
      }
    }

    .boxs {
      h3 {
        font-size: 2rem;
      }
      li {
        font-size: 1.4rem;
      }
    }


  }
`;function W3(){return f.jsx($3,{id:"sobre",children:f.jsxs("div",{className:"content-section",children:[f.jsxs("h1",{children:["Sobre ",f.jsx("span",{children:"Mim"})]}),f.jsxs("p",{children:["Meu nome é Gabriel da Costa Rodrigues, tenho ",f.jsx("span",{children:"23 anos"})," e sou formado em ",f.jsx("span",{children:"Análise e Desenvolvimento de Sistemas"}),". Minha primeira experiência profissional foi como"," ",f.jsx("span",{children:"editor de vídeo"}),", atuando por 5 anos como autônomo, o que me permitiu desenvolver disciplina, criatividade e atenção a detalhes. Atualmente, estou migrando para a área de ",f.jsx("span",{children:" Desenvolvedor Front-end"}),", com experiência prática em projetos de desenvolvimento de interfaces. Sou dedicado, adaptável e motivado a crescer na área de tecnologia, contribuindo com soluções criativas e eficientes."]}),f.jsxs("div",{className:"boxs",children:[f.jsxs("div",{className:"p1",children:[f.jsx("h3",{children:"Educação"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Colégio Santa Terezinha (Ensino Médio | 2017 - 2019)"}),f.jsx("li",{children:"Universidade La Salle (Tecnólogo em ADS | 2023 - 2024)"})]})]}),f.jsxs("div",{className:"p2",children:[f.jsx("h3",{children:"Experiências"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Editor de Vídeo (Autônomo | 2019 - 2025)"}),f.jsx("li",{children:"Desenvolvedor Front-end ( Freelance | 2024 - Presente)"})]})]}),f.jsxs("div",{className:"p3",children:[f.jsx("h3",{children:"Cursos"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Curso de Html5, CSS3 e JavaScript"}),f.jsx("li",{children:"Curso de React e Next"}),f.jsx("li",{children:"Curso de Node e TypeScript"})]})]}),f.jsxs("div",{className:"p4",children:[f.jsx("h3",{children:"Objetivos"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Contribuir com soluções eficientes e criativas em projetos Front-end"}),f.jsx("li",{children:"Ajudar a resolver problemas enquanto agrego valor à equipe e à empresa"})]})]})]})]})})}const F3="/Portfolio-Front-end-Developer/assets/skills-BbeSaT2j.png",P3=wt.div`
  width: 100%;
  min-height: 100vh;
 background-color: #0d0d0d;
  background-size: cover;
  background-position: center center;
  color: #dcdcdc; /* texto base */
  display: flex;
  align-items: center;
  justify-content:center;
   scroll-margin-top: 100px; 
  
  .content-section {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .content-section h1 {
    margin-top: 30px;
    margin-bottom: 30px;
   color: #e6e6fa; /* agora branco */
    
  }

  .content-section .skills {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    font-size: 2.5rem;
    gap: 20px;
    margin-bottom: 20px;
  }

  .content-section .skills div {
    background: rgba(15, 15, 15, 0.7); /* dark translúcido */
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
    width: 100%;
    text-align: center;
    transition: 0.4s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: float 3s ease-in-out infinite;
    color: #dcdcdc;
  }

  .content-section .skills div:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1); /* branco translúcido no hover */
    border: 1px solid #fff;
    box-shadow: 0 0 15px #fff, 0 0 30px rgba(255, 255, 255, 0.5);
    color: #fff;
    cursor: context-menu;
  }

  .content-section .skills div svg {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: white; /* ícones em cinza claro */
    transition: 0.4s ease;
  }

  .content-section .skills div:hover svg {
    color: #fff; /* ícone fica branco no hover */
  }

  .content-section .skills div span {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.4s ease;
  }

  .content-section .skills div:hover span {
    color: #fff;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @media screen and (min-width: 530px){
    .content-section .skills{
      grid-template-columns: repeat(2, 1fr);
    }
    .content-section{
    padding: 30px;

    }
   
  }

  @media screen and (min-width: 768px){
  background: url(${F3});
 background-position:center center;
      background-attachment: fixed;


    .content-section .skills{
      grid-template-columns: repeat(3, 1fr);
    }
    .content-section .skills div {
      width: 200px;
      height: 150px;
    }

    .content-section .skills {
      font-size: 3rem;
    }
  }

    @media screen and (min-width: 992px){
      
    .content-section h1 {
      font-size: 2.4rem;
    }
    .content-section p {
      font-size: 1.3rem;
    }

    .content-section .skills div {
      width:280px;
      height: 200px;
    }

    .content-section .skills {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section{
        padding: 60px
    }
    .content-section .skills {
      grid-template-columns: repeat(4, 1fr);
      font-size: 3.5rem;
    }

    .content-section .skills div {
      width: 270px;
      height: 225px;
    }

    h1 {
      font-size: 3rem !important;
      padding-bottom: 20px !important;
    }

    p {
      font-size: 1.4rem;
      color: #cfcfcf;
    }
  }
`;function I3(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"},child:[]}]})(i)}function ev(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(i)}function tv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(i)}function av(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},child:[]}]})(i)}function lv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(i)}function nv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(i)}function iv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(i)}function uv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(i)}function cv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(i)}function rv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"},child:[]}]})(i)}function ov(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"},child:[]}]})(i)}function sv(i){return lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(i)}const fv=[{icon:f.jsx(lv,{}),name:"HTML"},{icon:f.jsx(ev,{}),name:"CSS"},{icon:f.jsx(nv,{}),name:"JavaScript"},{icon:f.jsx(cv,{}),name:"React"},{icon:f.jsx(iv,{}),name:"Next"},{icon:f.jsx(sv,{}),name:"Tailwind CSS"},{icon:f.jsx(I3,{}),name:"Bootstrap"},{icon:f.jsx(uv,{}),name:"Node"},{icon:f.jsx(tv,{}),name:"Git"},{icon:f.jsx(av,{}),name:"GitHub"},{icon:f.jsx(rv,{}),name:"Sass"},{icon:f.jsx(ov,{}),name:"Styled Components"}];function dv(){return f.jsx(P3,{id:"habilidades",children:f.jsxs("div",{className:"content-section",children:[f.jsx("h1",{children:"Habilidades"}),f.jsx("div",{className:"skills",children:fv.map((i,c)=>f.jsxs("div",{style:{animationDelay:`${c*.2}s`},children:[i.icon,f.jsx("span",{children:i.name})]},c))})]})})}const rh="/Portfolio-Front-end-Developer/assets/bac-BUoQEGRr.png",oh="/Portfolio-Front-end-Developer/assets/back-CZAhwb_o.png",hv=wt.div`
  width: 100%;
  min-height: 100vh;
  color: #e6e6fa;
  display: flex;
  background-image: url(${oh});
  background-position: center center;
  background-size: cover;
  align-items: center;
  justify-content: center;

  scroll-margin-top: 100px; 

  /* ==================== Content Section ==================== */
  .content-section {
    width: 100%;
    max-width: 1200px;
    text-align: center;
      padding: 30px;
  }

  .content-section h1 {
    margin-top: 0px;
    margin-bottom: 40px;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
    color: white;
    text-shadow: 1px 2px 3px #00000086;
  }

  /* ==================== Grid ==================== */
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  /* ==================== Card ==================== */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);

    color: white;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
      0 0 20px 5px rgba(80, 0, 120, 0.5);
     
  }

  .card h3 {
    font-size: 1.4rem; /* menor em geral */
    margin-bottom: 10px;
 

  }

  .card p {
    font-size: 0.95rem; /* menor em geral */
    text-align: justify;
    margin-bottom: 15px;
    text-shadow: 1px 1px 2px #000;
   color: white;
    border-radius: 10px;
    background-color: #00000086;
    padding: 10px;
   
    

   

  }

  /* ==================== Card Image ==================== */
  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* ==================== Tech Tags ==================== */
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 5px;
  }

  .tech p {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid;
    font-size: 0.7rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;
 


    &:hover {
      background-color: #4da6ff;
      color: black;
    }
  }

  /* ==================== Buttons ==================== */
  .btns {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .btns button {
    padding: 10px 18px;
    border-radius: 8px;
    background: #500078;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.95rem;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    border: 1px solid purple;
  }

  .btns button:hover {
    background: #31004a7a;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(80, 0, 120, 0.6);
  }

  .see-more {
    margin-top: 50px;
    width: 100%;
  }

  .see-more button {
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    max-width: 380px;

    &:hover {
      box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
        0 0 20px 5px rgba(80, 0, 120, 0.5);
    }
  }

  /* ==================== Media Queries ==================== */
  @media screen and (min-width: 530px) {
   .cards{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .cards .card{
    max-width: 400px;

   }
    .card img {
      height: 180px;
    }
  }

  @media screen and (min-width: 768px) {
      background-image: url(${rh});
  background-size: cover;
  background-position: center;
      background-attachment: fixed;
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
        align-items: stretch;
  

    }
    .card img {
      height: 200px;
    }
    .card h3 {
      font-size: 1.35rem;
    }
    .card p {
      font-size: 0.9rem;
    }
    .tech p {
      font-size: 0.8rem;
    }
    .see-more button {
      font-size: 1.1rem;
    }

  }

  @media screen and (min-width: 992px) {

    .cards {
      grid-template-columns: repeat(3, 1fr);
    }

    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.2rem; /* menor */
    }
    .card p {
      font-size: 0.8rem !important; /* menor */
    }
    .tech p {
      font-size: 0.6rem !important;
    }
    .content-section h1 {
      font-size: 2.4rem;
    }
    .content-section p {
      font-size: 1.3rem;
    }
    .btns{
      margin-top: auto;
    }
    .btns button{
      font-size: 0.7rem;
      
    }
    .see-more button {
      font-size: 1.3rem ;
    }

  }

  @media screen and (min-width: 1200px) {


    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.5rem; /* menor */
    }
    .card p {
      font-size: 1rem !important; /* menor */
    }
    .tech p {
      font-size: 0.8rem !important;
    }
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1rem;
    }

       .btns button{
      font-size: 0.9rem;
    }
  }
`,sh="/Portfolio-Front-end-Developer/assets/produ-woKPoc_u.png",fh="/Portfolio-Front-end-Developer/assets/astro3-014Vyp6s.png",dh="/Portfolio-Front-end-Developer/assets/file2-B6YifcyF.png",hh="/Portfolio-Front-end-Developer/assets/lightsaber-BXEyDd8g.png",mh="/Portfolio-Front-end-Developer/assets/backend-BC0VUoLu.png",ph="/Portfolio-Front-end-Developer/assets/net-DklSMyDo.png";function mv(){const i=Bo(),c=()=>{i("/details")},o=()=>{alert("Esse é um projeto puramente Back-end!")},r=()=>{alert("Esse projeto ainda está em desenvolvimento!")};return f.jsx(hv,{id:"projetos",children:f.jsxs("div",{className:"content-section",children:[f.jsx("h1",{children:"Projetos"}),f.jsxs("div",{className:"cards",children:[f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"AstroLens"}),f.jsx("img",{src:fh,alt:"Capa do AstroLens"}),f.jsx("p",{children:"Aplicação web em React que explora astronomia: planetas, imagens da NASA, APOD e clima espacial, com design moderno e intuitivo."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"APIs RESTful"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"LocalStorage"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/AstroLens",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/AstroLens/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Netflix-Clone"}),f.jsx("img",{src:ph,alt:"Capa da Netfix"}),f.jsx("p",{children:"Clone da Netflix em React, modular e responsivo, integrado à API TMDB para exibir filmes, séries e detalhes com design moderno e otimizado."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"APIs RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Movies-ReactJS",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Movies-ReactJS/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"StarApp"}),f.jsx("img",{src:hh,alt:"Capa do Star Wars"}),f.jsx("p",{children:"App web de Star Wars full stack, exibindo filmes e séries, mostrando detalhes de cada título em interface moderna e responsiva."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"Next JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"Insomnia"}),f.jsx("p",{children:"MongoDB"}),f.jsx("p",{children:"node JS"}),f.jsx("p",{children:"APIs Restful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("button",{onClick:r,children:"Github"}),f.jsx("button",{onClick:r,children:"Deploy"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"API de Filmes"}),f.jsx("img",{src:mh,alt:"Capa da API de Filmes"}),f.jsx("p",{children:"Projeto de API de séries feito na faculdade com Express.js e MongoDB, permitindo adicionar, listar, atualizar, excluir e agrupar séries RESTful."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"JavaScript"}),f.jsx("p",{children:"MongoDB"}),f.jsx("p",{children:"Express"}),f.jsx("p",{children:"Insommia"}),f.jsx("p",{children:"Endpoints RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-API-Faculdade",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("button",{onClick:o,children:"Deploy"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Produtime"}),f.jsx("img",{src:sh,alt:"Capa do Produtime"}),f.jsx("p",{children:"App web responsivo para organizar tarefas, acompanhar progresso e otimizar tempo, ideal para profissionais focados e produtivos."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"UuID"}),f.jsx("p",{children:"LocalStorage"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/produtime-reactjs",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/produtime-reactjs/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Conversor de Arquivos"}),f.jsx("img",{src:dh,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"App web que permite arrastar ou selecionar arquivos e convertê-los em TXT, CSV, JSON, PNG ou JPG com interface simples e ágil."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"File-Saver"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/File-Converter",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/File-Converter/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]})]}),f.jsx("div",{className:"see-more",children:f.jsx("button",{onClick:c,children:"Ver Mais"})})]})})}const pv="/Portfolio-Front-end-Developer/assets/contact-CEzY32D9.png",gv=wt.div`
  width: 100%;
  min-height: 100vh;
  
 background-color: #0d0d0d;

  background-size: cover;
  background-position: center center;

  color: #e6e6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-section {
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content-section .direct-contact {
    font-size: 1rem;
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 10px;
    color: white;
    text-shadow: 1px 1px 1px black;
    div{
        display: flex;
        flex-direction: column;
        gap:10px;
    }
  }

  .content-section .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .content-section .names {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    gap: 10px;
  }

  .content-section .emails {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 700px;
  }
  .content-section h1 {
    margin-bottom: 30px;
  }

  .content-section input {
    background-color: #0000006e;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 600px;

    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid lightblue;
    outline: none;
    color: white;
  }

  textarea {
    width: 100%;
    max-width: 700px;

    background-color: #0000006e;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    height: 250px;
    border: 1px solid lightblue;
    outline: none;
    color: white;
    resize: none;
  }

  .content-section button {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    background-color: #0000006e;
    color: lightblue;
    font-size: 1rem;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.4s ease;
    &:hover {
      background-color: #aeaeffff;
      color: black;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.1rem;
    }

    .content-section input {
      font-size: 1.1rem;
    }

    textarea {
      font-size: 1.1rem;
    }

    .content-section button {
      font-size: 1.1rem;
    }

      .content-section .direct-contact {
    font-size: 1.1rem;
  }
  }

  @media screen and (min-width: 768px) {
      background-attachment: fixed;
       background-image: url(${pv}); 
     min-height: 100vh;
    .content-section h1 {
      font-size: 2.2rem;
    }

    .content-section input {
      font-size: 1.2rem;
    }

    textarea {
      font-size: 1.2rem;
    }

    .content-section button {
      font-size: 1.2rem;
    }

    .content-section .names {
      flex-direction: row;
    }

    .content-section .emails {
      flex-direction: row;
    }
      .content-section .direct-contact {
    font-size: 1.2rem;
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    gap: 10px;
    color: white;
    width: 100%;
    max-width: 700px;
    text-shadow: 1px 1px 1px black;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap:10px;
    }
  }
  }
  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 3rem;
    }

    .content-section input {
      font-size: 1.3rem;
    }

    textarea {
      font-size: 1.3rem;
    }

    .content-section button {
      font-size: 1.3rem;
    }
        .content-section .direct-contact {
    font-size: 1.5rem;
  }
  }
`;class hi{constructor(c=0,o="Network Error"){this.status=c,this.text=o}}const vv=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,c)=>Promise.resolve(localStorage.setItem(i,c)),remove:i=>Promise.resolve(localStorage.removeItem(i))}},We={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:vv()},Ko=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{},yv=(i,c="https://api.emailjs.com")=>{if(!i)return;const o=Ko(i);We.publicKey=o.publicKey,We.blockHeadless=o.blockHeadless,We.storageProvider=o.storageProvider,We.blockList=o.blockList,We.limitRate=o.limitRate,We.origin=o.origin||c},gh=async(i,c,o={})=>{const r=await fetch(We.origin+i,{method:"POST",headers:o,body:c}),d=await r.text(),m=new hi(r.status,d);if(r.ok)return m;throw m},vh=(i,c,o)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!c||typeof c!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},bv=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},yh=i=>i.webdriver||!i.languages||i.languages.length===0,bh=()=>new hi(451,"Unavailable For Headless Browser"),xv=(i,c)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof c!="string")throw"The BlockList watchVariable has to be a string"},Sv=i=>!i.list?.length||!i.watchVariable,jv=(i,c)=>i instanceof FormData?i.get(c):i[c],xh=(i,c)=>{if(Sv(i))return!1;xv(i.list,i.watchVariable);const o=jv(c,i.watchVariable);return typeof o!="string"?!1:i.list.includes(o)},Sh=()=>new hi(403,"Forbidden"),Ev=(i,c)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(c&&typeof c!="string")throw"The LimitRate ID has to be a non-empty string"},zv=async(i,c,o)=>{const r=Number(await o.get(i)||0);return c-Date.now()+r},jh=async(i,c,o)=>{if(!c.throttle||!o)return!1;Ev(c.throttle,c.id);const r=c.id||i;return await zv(r,c.throttle,o)>0?!0:(await o.set(r,Date.now().toString()),!1)},Eh=()=>new hi(429,"Too Many Requests"),Av=async(i,c,o,r)=>{const d=Ko(r),m=d.publicKey||We.publicKey,v=d.blockHeadless||We.blockHeadless,A=d.storageProvider||We.storageProvider,y={...We.blockList,...d.blockList},g={...We.limitRate,...d.limitRate};return v&&yh(navigator)?Promise.reject(bh()):(vh(m,i,c),bv(o),o&&xh(y,o)?Promise.reject(Sh()):await jh(location.pathname,g,A)?Promise.reject(Eh()):gh("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:m,service_id:i,template_id:c,template_params:o}),{"Content-type":"application/json"}))},Rv=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Tv=i=>typeof i=="string"?document.querySelector(i):i,_v=async(i,c,o,r)=>{const d=Ko(r),m=d.publicKey||We.publicKey,v=d.blockHeadless||We.blockHeadless,A=We.storageProvider||d.storageProvider,y={...We.blockList,...d.blockList},g={...We.limitRate,...d.limitRate};if(v&&yh(navigator))return Promise.reject(bh());const S=Tv(o);vh(m,i,c),Rv(S);const _=new FormData(S);return xh(y,_)?Promise.reject(Sh()):await jh(location.pathname,g,A)?Promise.reject(Eh()):(_.append("lib_version","4.4.1"),_.append("service_id",i),_.append("template_id",c),_.append("user_id",m),gh("/api/v1.0/email/send-form",_))},Dv={init:yv,send:Av,sendForm:_v,EmailJSResponseStatus:hi};function Ov(){const i=c=>{c.preventDefault(),Dv.sendForm("service_w7iacft","template_ub7g5w2",c.target,"law81UOVlzmXzpuq-").then(()=>{alert("Mensagem enviada com sucesso!")},o=>{alert("Erro ao enviar: "+o.text)}),c.target.reset()};return f.jsx(gv,{id:"contato",children:f.jsxs("div",{className:"content-section",children:[f.jsx("h1",{children:"Contato"}),f.jsxs("form",{className:"inputs",onSubmit:i,children:[f.jsxs("div",{className:"names",children:[f.jsx("input",{type:"text",name:"nome",placeholder:"Nome",required:!0}),f.jsx("input",{type:"text",name:"sobrenome",placeholder:"Sobrenome",required:!0})]}),f.jsxs("div",{className:"emails",children:[f.jsx("input",{type:"text",name:"email",placeholder:"E-mail",required:!0}),f.jsx("input",{type:"text",name:"assunto",placeholder:"Assunto",required:!0})]}),f.jsx("textarea",{name:"mensagem",placeholder:"Digite o Assunto...",required:!0}),f.jsx("button",{type:"submit",children:"Enviar Mensagem"})]})]})})}const Mv=wt.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #e6e6fa;
  padding: 30px;
  padding-top: 60px;
  box-sizing: border-box;
    /* background-image: url(${oh}); */
    background-color: #0A001A ; 

  background-position: center center;
  /* background-attachment: scroll; */
  background-repeat: no-repeat;
  background-size: cover;


  .content-section {
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
     justify-items: center; /* centraliza os cards horizontalmente */
  align-items: start; /* evita esticamento vertical */
  }

  /* ==================== Card ==================== */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
     
  max-width: 400px; /* limita largura igual ao Section4 */
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);
    height: 100%; /* ocupa toda altura do grid */
    color: white;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
      0 0 20px 5px rgba(80, 0, 120, 0.5);
     

  }

  .card h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 0.95rem;
    text-align: justify;
    margin-bottom: 15px;
    text-shadow: 1px 1px 1px black;
    background-color: #00000086;
    padding: 10px;
    border-radius: 10px;
   color: white;

   
   
  }

  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 5px;
    
  }

  .tech p {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #ADD8E6;
    font-size: 0.7rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;



    &:hover {
      background-color: #4da6ff;
      color: black;
      border: 1px solid black;
    }
  }

  .btns {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: auto;
    
  }

  .btns button {
    padding: 10px 18px;
    border-radius: 8px;
    background: #500078;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.95rem;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    border: 1px solid purple;
    margin-top: 10px;
    margin-bottom: 10px;

    
  }

  .btns button:hover {
    background: #31004a7a;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(80, 0, 120, 0.6);
    color: white;
  }

  button{
    padding: 10px;
    font-size: 1rem;
    margin-top: 50px;
    margin-bottom: 20px;
    background:transparent;
    color: white;
    border-radius: 5px;
    border: 1px solid;
    max-width: 400px;
    width: 100%;
    cursor: pointer;
    transition: .4s ease;

    &:hover{
      background-color: #4da6ff;
      color: black;
    }
  }

  /* ==================== Media Queries ==================== */
  @media screen and (min-width: 530px) {
    .cards {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .cards .card {
      max-width: 400px;
    }
    .card img {
      height: 180px;
    }
    button{
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
      background-image: url(${rh});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

      background-attachment: fixed;
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: stretch;
    }
    .card img {
      height: 200px;
    }
    .card h3 {
      font-size: 1.35rem;
    }
    .card p {
      font-size: 0.9rem;
    }
    .tech p {
      font-size: 0.8rem;
    }
    button{
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.2rem;
    }
    .card p {
      font-size: 0.8rem !important;
    }
    .tech p {
      font-size: 0.6rem !important;
    }
    .content-section h1 {
      font-size: 2.4rem;
    }
    .content-section p {
      font-size: 1.3rem;
    }
    .btns button {
      font-size: 0.7rem;
    }
    button{
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.5rem;
    }
    .card p {
      font-size: 1rem !important;
    }
    .tech p {
      font-size: 0.85rem !important;
    }
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1rem;
    }
    .btns button {
      font-size: 0.9rem;
    }
  }
`,Cv="/Portfolio-Front-end-Developer/assets/cat6-DepsECrw.png",wv="/Portfolio-Front-end-Developer/assets/cep3-DCddgarr.png",Nv="/Portfolio-Front-end-Developer/assets/clima2-SZiwMBMF.png",Uv="/Portfolio-Front-end-Developer/assets/cake-Cm5f90Mn.png",Hv="/Portfolio-Front-end-Developer/assets/technology-CWQtWRbI.png",Bv="/Portfolio-Front-end-Developer/assets/img_cordel-BxCjXXLD.png";function qv(){const i=Bo(),c=()=>{i("/")},o=()=>{alert("Esse projeto está em desenvolvimento!")},r=()=>{alert("Esse é um projeto puramente Back-end!")};return f.jsx(Mv,{children:f.jsxs("div",{className:"content-section",children:[f.jsx("h1",{children:"Projetos"}),f.jsxs("div",{className:"cards",children:[f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"AstroLens"}),f.jsx("img",{src:fh,alt:"Capa do AstroLens"}),f.jsx("p",{children:"AstroLens é um app web em React que explora astronomia: planetas, imagens da NASA, APOD e clima espacial, com interface moderna e intuitiva."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"APIs RESTful"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"LocalStorage"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/AstroLens",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/AstroLens/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Netflix-Clone"}),f.jsx("img",{src:ph,alt:"Capa da Netfix"}),f.jsx("p",{children:"Clone da Netflix em React, modular e responsivo, integrado à API TMDB para exibir filmes, séries e detalhes com design moderno e otimizado."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"APIs RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Movies-ReactJS",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Movies-ReactJS/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"StarApp"}),f.jsx("img",{src:hh,alt:"Capa do Star Wars"}),f.jsx("p",{children:"App web de Star Wars full stack, exibindo filmes e séries, mostrando detalhes de cada título em interface moderna e responsiva."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"Next JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"Insomnia"}),f.jsx("p",{children:"MongoDB"}),f.jsx("p",{children:"node JS"}),f.jsx("p",{children:"APIs Restful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("button",{onClick:o,children:"Github"}),f.jsx("button",{onClick:o,children:"Deploy"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"API de Filmes"}),f.jsx("img",{src:mh,alt:"Capa da API de Filmes"}),f.jsx("p",{children:"Projeto de API de séries feito na faculdade com Express.js e MongoDB, permitindo adicionar, listar, atualizar, excluir e agrupar séries RESTful."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"JavaScript"}),f.jsx("p",{children:"MongoDB"}),f.jsx("p",{children:"Express"}),f.jsx("p",{children:"Insommia"}),f.jsx("p",{children:"Endpoints RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-API-Faculdade",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("button",{onClick:r,children:"Deploy"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Produtime"}),f.jsx("img",{src:sh,alt:"Capa do Produtime"}),f.jsx("p",{children:"Produtime é um app responsivo que ajuda a organizar tarefas, acompanhar progresso e otimizar tempo, ideal para profissionais focados e produtivos."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"Mobile First"}),f.jsx("p",{children:"UuID"}),f.jsx("p",{children:"LocalStorage"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/produtime-reactjs",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/produtime-reactjs/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Conversor de Arquivos"}),f.jsx("img",{src:dh,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"App web que permite arrastar ou selecionar arquivos e convertê-los em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"Styled Components"}),f.jsx("p",{children:"React Router"}),f.jsx("p",{children:"File-Saver"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/File-Converter",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/File-Converter/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Buscador de CEP"}),f.jsx("img",{src:wv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"App web feito em React que retorna rapidamente endereços precisos, com interface intuitiva, responsiva e experiência fluida para o usuário."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"CSS3"}),f.jsx("p",{children:"API RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-Busca-CEP-ReactJS",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Projeto-Busca-CEP-ReactJS/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Catify"}),f.jsx("img",{src:Cv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"Catify é um site interativo que exibe fotos aleatórias de gatos de diversas raças, oferecendo diversão e descobertas para amantes de felinos."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"CSS3"}),f.jsx("p",{children:"JavaScript"}),f.jsx("p",{children:"API RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Catify",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Catify/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Buscador Climático"}),f.jsx("img",{src:Nv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"App web que mostra a previsão do tempo em qualquer cidade usando a API Weather, com design moderno, responsivo e fácil de usar."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"React JS"}),f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"CSS3"}),f.jsx("p",{children:"API RESTful"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-Clima",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Projeto-Clima/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Projeto Tecnologia"}),f.jsx("img",{src:Hv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"Página web criada em HTML5 e CSS3 como exercício prático para curso em vídeo, demonstrando estrutura e estilo básicos de desenvolvimento web."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"CSS3"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-Android",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Projeto-Android/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Confeitaria Online"}),f.jsx("img",{src:Uv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"Site desenvolvido em Bootstrap 5, moderno e responsivo, apresentando doces e produtos com foco em uma experiência intuitiva e agradável."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"Bootstrap 5"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-Bootstrap",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Projeto-Bootstrap/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Projeto Cordel"}),f.jsx("img",{src:Bv,alt:"Capa do Conversor de Arquivos"}),f.jsx("p",{children:"Página web criada como exercício do Curso em Vídeo, com layout responsivo e efeito parallax, destacando versos e tipografia temática."}),f.jsxs("div",{className:"tech",children:[f.jsx("p",{children:"HTML5"}),f.jsx("p",{children:"CSS3"})]}),f.jsxs("div",{className:"btns",children:[f.jsx("a",{href:"https://github.com/GRodrigues10/Projeto-Cordel",target:"_blank",children:f.jsx("button",{children:"Github"})}),f.jsx("a",{href:"https://grodrigues10.github.io/Projeto-Cordel/",target:"_blank",children:f.jsx("button",{children:"Deploy"})})]})]})]}),f.jsx("button",{onClick:c,children:"Voltar"})]})})}function Lv({children:i}){const{pathname:c}=Ga();return C.useEffect(()=>{window.scrollTo(0,0)},[c]),i}function Gv(){return f.jsxs(pg,{basename:"/Portfolio-Front-end-Developer",children:[f.jsx(Lv,{children:f.jsxs(Z2,{children:[f.jsx(Ro,{path:"/",element:f.jsxs(f.Fragment,{children:[f.jsx(M3,{}),f.jsx(K3,{}),f.jsx(W3,{}),f.jsx(dv,{}),f.jsx(mv,{}),f.jsx(Ov,{})]})}),f.jsx(Ro,{path:"/details",element:f.jsx(qv,{})})]})}),f.jsx(w3,{})]})}a2.createRoot(document.getElementById("root")).render(f.jsx(C.StrictMode,{children:f.jsx(Gv,{})}));
