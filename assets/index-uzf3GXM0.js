function ax(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function lx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q0={exports:{}},bu={},H0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),ux=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),px=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),gx=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),vx=Symbol.for("react.lazy"),Bm=Symbol.iterator;function _x(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var W0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,G0={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||W0}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q0(){}Q0.prototype=Cs.prototype;function pf(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||W0}var mf=pf.prototype=new Q0;mf.constructor=pf;K0(mf,Cs.prototype);mf.isPureReactComponent=!0;var zm=Array.isArray,Y0=Object.prototype.hasOwnProperty,gf={current:null},X0={key:!0,ref:!0,__self:!0,__source:!0};function J0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Y0.call(e,r)&&!X0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:gf.current}}function wx(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function Ex(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qm=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ex(""+t.key):e.toString(36)}function dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case ux:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Fc(o,0):r,zm(i)?(n="",t!=null&&(n=t.replace(qm,"$&/")+"/"),dl(i,e,n,"",function(h){return h})):i!=null&&(yf(i)&&(i=wx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Fc(s,l);o+=dl(s,e,n,u,i)}else if(u=_x(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Fc(s,l++),o+=dl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},fl={transition:null},Tx={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:fl,ReactCurrentOwner:gf};ce.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Cs;ce.Fragment=cx;ce.Profiler=dx;ce.PureComponent=pf;ce.StrictMode=hx;ce.Suspense=gx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=K0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Y0.call(e,u)&&!X0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fx,_context:t},t.Consumer=t};ce.createElement=J0;ce.createFactory=function(t){var e=J0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:mx,render:t}};ce.isValidElement=yf;ce.lazy=function(t){return{$$typeof:vx,_payload:{_status:-1,_result:t},_init:xx}};ce.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Ot.current.useCallback(t,e)};ce.useContext=function(t){return Ot.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ot.current.useEffect(t,e)};ce.useId=function(){return Ot.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ot.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};ce.useRef=function(t){return Ot.current.useRef(t)};ce.useState=function(t){return Ot.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ot.current.useTransition()};ce.version="18.2.0";H0.exports=ce;var z=H0.exports;const Re=lx(z),Sx=ax({__proto__:null,default:Re},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=z,Ax=Symbol.for("react.element"),Ix=Symbol.for("react.fragment"),Rx=Object.prototype.hasOwnProperty,Px=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kx={key:!0,ref:!0,__self:!0,__source:!0};function Z0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Rx.call(e,r)&&!kx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ax,type:t,key:s,ref:o,props:i,_owner:Px.current}}bu.Fragment=Ix;bu.jsx=Z0;bu.jsxs=Z0;q0.exports=bu;var x=q0.exports,Vh={},e1={exports:{}},Zt={},t1={exports:{}},n1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var ne=K.length;K.push(Z);e:for(;0<ne;){var ve=ne-1>>>1,ue=K[ve];if(0<i(ue,Z))K[ve]=Z,K[ne]=ue,ne=ve;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],ne=K.pop();if(ne!==Z){K[0]=ne;e:for(var ve=0,ue=K.length,Ie=ue>>>1;ve<Ie;){var _t=2*(ve+1)-1,wt=K[_t],tt=_t+1,at=K[tt];if(0>i(wt,ne))tt<ue&&0>i(at,wt)?(K[ve]=at,K[tt]=ne,ve=tt):(K[ve]=wt,K[_t]=ne,ve=_t);else if(tt<ue&&0>i(at,ne))K[ve]=at,K[tt]=ne,ve=tt;else break e}}return Z}function i(K,Z){var ne=K.sortIndex-Z.sortIndex;return ne!==0?ne:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],d=1,p=null,m=3,T=!1,A=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(K){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=K)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function D(K){if(k=!1,_(K),!A)if(n(u)!==null)A=!0,et(F);else{var Z=n(h);Z!==null&&Ae(D,Z.startTime-K)}}function F(K,Z){A=!1,k&&(k=!1,w(v),v=-1),T=!0;var ne=m;try{for(_(Z),p=n(u);p!==null&&(!(p.expirationTime>Z)||K&&!N());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var ue=ve(p.expirationTime<=Z);Z=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),_(Z)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var _t=n(h);_t!==null&&Ae(D,_t.startTime-Z),Ie=!1}return Ie}finally{p=null,m=ne,T=!1}}var U=!1,E=null,v=-1,C=5,I=-1;function N(){return!(t.unstable_now()-I<C)}function b(){if(E!==null){var K=t.unstable_now();I=K;var Z=!0;try{Z=E(!0,K)}finally{Z?S():(U=!1,E=null)}}else U=!1}var S;if(typeof y=="function")S=function(){y(b)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ce=he.port2;he.port1.onmessage=b,S=function(){Ce.postMessage(null)}}else S=function(){R(b,0)};function et(K){E=K,U||(U=!0,S())}function Ae(K,Z){v=R(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){A||T||(A=!0,et(F))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return K()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=m;m=K;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function(K,Z,ne){var ve=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,K){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ne+ue,K={id:d++,callback:Z,priorityLevel:K,startTime:ne,expirationTime:ue,sortIndex:-1},ne>ve?(K.sortIndex=ne,e(h,K),n(u)===null&&K===n(h)&&(k?(w(v),v=-1):k=!0,Ae(D,ne-ve))):(K.sortIndex=ue,e(u,K),A||T||(A=!0,et(F))),K},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(K){var Z=m;return function(){var ne=m;m=Z;try{return K.apply(this,arguments)}finally{m=ne}}}})(n1);t1.exports=n1;var bx=t1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=z,Jt=bx;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i1=new Set,Oo={};function yi(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Oo[t]=e,t=0;t<e.length;t++)i1.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oh=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},Wm={};function Dx(t){return Oh.call(Wm,t)?!0:Oh.call(Hm,t)?!1:Nx.test(t)?Wm[t]=!0:(Hm[t]=!0,!1)}function Vx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ox(t,e,n,r){if(e===null||typeof e>"u"||Vx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,_f);yt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,_f);yt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,_f);yt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ox(e,n,i,r)&&(n=null),r||i===null?Dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),a1=Symbol.for("react.offscreen"),Km=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Km&&t[Km]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Mc;function ho(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Uc=!1;function $c(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function Lx(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case ji:return"Portal";case Lh:return"Profiler";case Ef:return"StrictMode";case jh:return"Suspense";case Fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o1:return(t.displayName||"Context")+".Consumer";case s1:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function jx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fx(t){var e=l1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=Fx(t))}function u1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c1(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function $h(t,e){c1(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bh(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(fo(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function h1(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,f1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mx=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){Mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function p1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function m1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ux=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hh(t,e){if(e){if(Ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,Ji=null,Zi=null;function Jm(t){if(t=da(t)){if(typeof Gh!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Lu(e),Gh(t.stateNode,t.type,e))}}function g1(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function y1(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function v1(t,e){return t(e)}function _1(){}var Bc=!1;function w1(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return v1(t,e,n)}finally{Bc=!1,(Ji!==null||Zi!==null)&&(_1(),y1())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Qh=!1;if(Yn)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Qh=!1}function $x(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(d){this.onError(d)}}var Eo=!1,Ml=null,Ul=!1,Yh=null,Bx={onError:function(t){Eo=!0,Ml=t}};function zx(t,e,n,r,i,s,o,l,u){Eo=!1,Ml=null,$x.apply(Bx,arguments)}function qx(t,e,n,r,i,s,o,l,u){if(zx.apply(this,arguments),Eo){if(Eo){var h=Ml;Eo=!1,Ml=null}else throw Error(q(198));Ul||(Ul=!0,Yh=h)}}function vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if(vi(t)!==t)throw Error(q(188))}function Hx(t){var e=t.alternate;if(!e){if(e=vi(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zm(i),t;if(s===r)return Zm(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function x1(t){return t=Hx(t),t!==null?T1(t):null}function T1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T1(t);if(e!==null)return e;t=t.sibling}return null}var S1=Jt.unstable_scheduleCallback,eg=Jt.unstable_cancelCallback,Wx=Jt.unstable_shouldYield,Kx=Jt.unstable_requestPaint,Ke=Jt.unstable_now,Gx=Jt.unstable_getCurrentPriorityLevel,Cf=Jt.unstable_ImmediatePriority,C1=Jt.unstable_UserBlockingPriority,$l=Jt.unstable_NormalPriority,Qx=Jt.unstable_LowPriority,A1=Jt.unstable_IdlePriority,Nu=null,On=null;function Yx(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Zx,Xx=Math.log,Jx=Math.LN2;function Zx(t){return t>>>=0,t===0?32:31-(Xx(t)/Jx|0)|0}var qa=64,Ha=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=po(l):(s&=o,s!==0&&(r=po(s)))}else o=n&~i,o!==0?r=po(o):s!==0&&(r=po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function eT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I1(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function nT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function R1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P1,If,k1,b1,N1,Jh=!1,Wa=[],xr=null,Tr=null,Sr=null,Fo=new Map,Mo=new Map,fr=[],rT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iT(t,e,n,r,i){switch(e){case"focusin":return xr=Xs(xr,t,e,n,r,i),!0;case"dragenter":return Tr=Xs(Tr,t,e,n,r,i),!0;case"mouseover":return Sr=Xs(Sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,Xs(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Xs(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function D1(t){var e=Gr(t.target);if(e!==null){var n=vi(e);if(n!==null){if(e=n.tag,e===13){if(e=E1(n),e!==null){t.blockedOn=e,N1(t.priority,function(){k1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kh=r,n.target.dispatchEvent(r),Kh=null}else return e=da(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function ng(t,e,n){pl(t)&&n.delete(e)}function sT(){Jh=!1,xr!==null&&pl(xr)&&(xr=null),Tr!==null&&pl(Tr)&&(Tr=null),Sr!==null&&pl(Sr)&&(Sr=null),Fo.forEach(ng),Mo.forEach(ng)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,sT)))}function Uo(t){function e(i){return Js(i,t)}if(0<Wa.length){Js(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&Js(xr,t),Tr!==null&&Js(Tr,t),Sr!==null&&Js(Sr,t),Fo.forEach(e),Mo.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)D1(n),n.blockedOn===null&&fr.shift()}var es=nr.ReactCurrentBatchConfig,zl=!0;function oT(t,e,n,r){var i=Te,s=es.transition;es.transition=null;try{Te=1,Rf(t,e,n,r)}finally{Te=i,es.transition=s}}function aT(t,e,n,r){var i=Te,s=es.transition;es.transition=null;try{Te=4,Rf(t,e,n,r)}finally{Te=i,es.transition=s}}function Rf(t,e,n,r){if(zl){var i=Zh(t,e,n,r);if(i===null)Zc(t,e,r,ql,n),tg(t,r);else if(iT(i,t,e,n,r))r.stopPropagation();else if(tg(t,r),e&4&&-1<rT.indexOf(t)){for(;i!==null;){var s=da(i);if(s!==null&&P1(s),s=Zh(t,e,n,r),s===null&&Zc(t,e,r,ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zc(t,e,r,null,n)}}var ql=null;function Zh(t,e,n,r){if(ql=null,t=Sf(r),t=Gr(t),t!==null)if(e=vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function V1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gx()){case Cf:return 1;case C1:return 4;case $l:case Qx:return 16;case A1:return 536870912;default:return 16}default:return 16}}var gr=null,Pf=null,ml=null;function O1(){if(ml)return ml;var t,e=Pf,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ml=i.slice(t,1<r?1-r:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function rg(){return!1}function en(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:rg,this.isPropagationStopped=rg,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=en(As),ha=Me({},As,{view:0,detail:0}),lT=en(ha),qc,Hc,Zs,Du=Me({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(qc=t.screenX-Zs.screenX,Hc=t.screenY-Zs.screenY):Hc=qc=0,Zs=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),ig=en(Du),uT=Me({},Du,{dataTransfer:0}),cT=en(uT),hT=Me({},ha,{relatedTarget:0}),Wc=en(hT),dT=Me({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=en(dT),pT=Me({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mT=en(pT),gT=Me({},As,{data:0}),sg=en(gT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function bf(){return wT}var ET=Me({},ha,{key:function(t){if(t.key){var e=yT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xT=en(ET),TT=Me({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=en(TT),ST=Me({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),CT=en(ST),AT=Me({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),IT=en(AT),RT=Me({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PT=en(RT),kT=[9,13,27,32],Nf=Yn&&"CompositionEvent"in window,xo=null;Yn&&"documentMode"in document&&(xo=document.documentMode);var bT=Yn&&"TextEvent"in window&&!xo,L1=Yn&&(!Nf||xo&&8<xo&&11>=xo),ag=" ",lg=!1;function j1(t,e){switch(t){case"keyup":return kT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function NT(t,e){switch(t){case"compositionend":return F1(e);case"keypress":return e.which!==32?null:(lg=!0,ag);case"textInput":return t=e.data,t===ag&&lg?null:t;default:return null}}function DT(t,e){if(Mi)return t==="compositionend"||!Nf&&j1(t,e)?(t=O1(),ml=Pf=gr=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L1&&e.locale!=="ko"?null:e.data;default:return null}}var VT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VT[t.type]:e==="textarea"}function M1(t,e,n,r){g1(r),e=Hl(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,$o=null;function OT(t){Y1(t,0)}function Vu(t){var e=Bi(t);if(u1(e))return t}function LT(t,e){if(t==="change")return e}var U1=!1;if(Yn){var Kc;if(Yn){var Gc="oninput"in document;if(!Gc){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Gc=typeof cg.oninput=="function"}Kc=Gc}else Kc=!1;U1=Kc&&(!document.documentMode||9<document.documentMode)}function hg(){To&&(To.detachEvent("onpropertychange",$1),$o=To=null)}function $1(t){if(t.propertyName==="value"&&Vu($o)){var e=[];M1(e,$o,t,Sf(t)),w1(OT,e)}}function jT(t,e,n){t==="focusin"?(hg(),To=e,$o=n,To.attachEvent("onpropertychange",$1)):t==="focusout"&&hg()}function FT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu($o)}function MT(t,e){if(t==="click")return Vu(e)}function UT(t,e){if(t==="input"||t==="change")return Vu(e)}function $T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var An=typeof Object.is=="function"?Object.is:$T;function Bo(t,e){if(An(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oh.call(e,i)||!An(t[i],e[i]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function B1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z1(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BT(t){var e=z1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B1(n.ownerDocument.documentElement,n)){if(r!==null&&Df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fg(n,s);var o=fg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zT=Yn&&"documentMode"in document&&11>=document.documentMode,Ui=null,ed=null,So=null,td=!1;function pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ui==null||Ui!==Fl(r)||(r=Ui,"selectionStart"in r&&Df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Bo(So,r)||(So=r,r=Hl(ed,"onSelect"),0<r.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ui)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Qc={},q1={};Yn&&(q1=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Ou(t){if(Qc[t])return Qc[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q1)return Qc[t]=e[n];return t}var H1=Ou("animationend"),W1=Ou("animationiteration"),K1=Ou("animationstart"),G1=Ou("transitionend"),Q1=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){Q1.set(t,e),yi(e,[t])}for(var Yc=0;Yc<mg.length;Yc++){var Xc=mg[Yc],qT=Xc.toLowerCase(),HT=Xc[0].toUpperCase()+Xc.slice(1);Fr(qT,"on"+HT)}Fr(H1,"onAnimationEnd");Fr(W1,"onAnimationIteration");Fr(K1,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(G1,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WT=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function gg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qx(r,e,void 0,t),t.currentTarget=null}function Y1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;gg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;gg(i,l,h),s=u}}}if(Ul)throw t=Yh,Ul=!1,Yh=null,t}function be(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(X1(e,t,2,!1),n.add(r))}function Jc(t,e,n){var r=0;e&&(r|=4),X1(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[Qa]){t[Qa]=!0,i1.forEach(function(n){n!=="selectionchange"&&(WT.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,Jc("selectionchange",!1,e))}}function X1(t,e,n,r){switch(V1(e)){case 1:var i=oT;break;case 4:i=aT;break;default:i=Rf}n=i.bind(null,e,n,t),i=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}w1(function(){var h=s,d=Sf(n),p=[];e:{var m=Q1.get(t);if(m!==void 0){var T=kf,A=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":T=xT;break;case"focusin":A="focus",T=Wc;break;case"focusout":A="blur",T=Wc;break;case"beforeblur":case"afterblur":T=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=cT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=CT;break;case H1:case W1:case K1:T=fT;break;case G1:T=IT;break;case"scroll":T=lT;break;case"wheel":T=PT;break;case"copy":case"cut":case"paste":T=mT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=og}var k=(e&4)!==0,R=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var y=h,_;y!==null;){_=y;var D=_.stateNode;if(_.tag===5&&D!==null&&(_=D,w!==null&&(D=jo(y,w),D!=null&&k.push(qo(y,D,_)))),R)break;y=y.return}0<k.length&&(m=new T(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Kh&&(A=n.relatedTarget||n.fromElement)&&(Gr(A)||A[Xn]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(A=n.relatedTarget||n.toElement,T=h,A=A?Gr(A):null,A!==null&&(R=vi(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(T=null,A=h),T!==A)){if(k=ig,D="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=og,D="onPointerLeave",w="onPointerEnter",y="pointer"),R=T==null?m:Bi(T),_=A==null?m:Bi(A),m=new k(D,y+"leave",T,n,d),m.target=R,m.relatedTarget=_,D=null,Gr(d)===h&&(k=new k(w,y+"enter",A,n,d),k.target=_,k.relatedTarget=R,D=k),R=D,T&&A)t:{for(k=T,w=A,y=0,_=k;_;_=bi(_))y++;for(_=0,D=w;D;D=bi(D))_++;for(;0<y-_;)k=bi(k),y--;for(;0<_-y;)w=bi(w),_--;for(;y--;){if(k===w||w!==null&&k===w.alternate)break t;k=bi(k),w=bi(w)}k=null}else k=null;T!==null&&yg(p,m,T,k,!1),A!==null&&R!==null&&yg(p,R,A,k,!0)}}e:{if(m=h?Bi(h):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var F=LT;else if(ug(m))if(U1)F=UT;else{F=FT;var U=jT}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=MT);if(F&&(F=F(t,h))){M1(p,F,n,d);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Bh(m,"number",m.value)}switch(U=h?Bi(h):window,t){case"focusin":(ug(U)||U.contentEditable==="true")&&(Ui=U,ed=h,So=null);break;case"focusout":So=ed=Ui=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,pg(p,n,d);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":pg(p,n,d)}var E;if(Nf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Mi?j1(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(L1&&n.locale!=="ko"&&(Mi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Mi&&(E=O1()):(gr=d,Pf="value"in gr?gr.value:gr.textContent,Mi=!0)),U=Hl(h,v),0<U.length&&(v=new sg(v,t,null,n,d),p.push({event:v,listeners:U}),E?v.data=E:(E=F1(n),E!==null&&(v.data=E)))),(E=bT?NT(t,n):DT(t,n))&&(h=Hl(h,"onBeforeInput"),0<h.length&&(d=new sg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:h}),d.data=E))}Y1(p,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(qo(t,s,i)),s=jo(t,e),s!=null&&r.push(qo(t,s,i))),t=t.return}return r}function bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=jo(n,s),u!=null&&o.unshift(qo(n,u,l))):i||(u=jo(n,s),u!=null&&o.push(qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(KT,`
`).replace(GT,"")}function Ya(t,e,n){if(e=vg(e),vg(t)!==e&&n)throw Error(q(425))}function Wl(){}var nd=null,rd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,YT=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(XT)}:sd;function XT(t){setTimeout(function(){throw t})}function eh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Is,Ho="__reactProps$"+Is,Xn="__reactContainer$"+Is,od="__reactEvents$"+Is,JT="__reactListeners$"+Is,ZT="__reactHandles$"+Is;function Gr(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[Nn])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[Nn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Lu(t){return t[Ho]||null}var ad=[],zi=-1;function Mr(t){return{current:t}}function Ve(t){0>zi||(t.current=ad[zi],ad[zi]=null,zi--)}function Pe(t,e){zi++,ad[zi]=t.current,t.current=e}var Vr={},Pt=Mr(Vr),Bt=Mr(!1),li=Vr;function ls(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function Kl(){Ve(Bt),Ve(Pt)}function Eg(t,e,n){if(Pt.current!==Vr)throw Error(q(168));Pe(Pt,e),Pe(Bt,n)}function J1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,jx(t)||"Unknown",i));return Me({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,li=Pt.current,Pe(Pt,t),Pe(Bt,Bt.current),!0}function xg(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=J1(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,Ve(Bt),Ve(Pt),Pe(Pt,t)):Ve(Bt),Pe(Bt,n)}var Wn=null,ju=!1,th=!1;function Z1(t){Wn===null?Wn=[t]:Wn.push(t)}function eS(t){ju=!0,Z1(t)}function Ur(){if(!th&&Wn!==null){th=!0;var t=0,e=Te;try{var n=Wn;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,ju=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),S1(Cf,Ur),i}finally{Te=e,th=!1}}return null}var qi=[],Hi=0,Ql=null,Yl=0,sn=[],on=0,ui=null,Kn=1,Gn="";function Hr(t,e){qi[Hi++]=Yl,qi[Hi++]=Ql,Ql=t,Yl=e}function ev(t,e,n){sn[on++]=Kn,sn[on++]=Gn,sn[on++]=ui,ui=t;var r=Kn;t=Gn;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-En(e)+i|n<<i|r,Gn=s+t}else Kn=1<<s|n<<i|r,Gn=t}function Vf(t){t.return!==null&&(Hr(t,1),ev(t,1,0))}function Of(t){for(;t===Ql;)Ql=qi[--Hi],qi[Hi]=null,Yl=qi[--Hi],qi[Hi]=null;for(;t===ui;)ui=sn[--on],sn[on]=null,Gn=sn[--on],sn[on]=null,Kn=sn[--on],sn[on]=null}var Yt=null,Qt=null,Le=!1,vn=null;function tv(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Kn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Qt=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(Le){var e=Qt;if(e){var n=e;if(!Tg(t,e)){if(ld(t))throw Error(q(418));e=Cr(n.nextSibling);var r=Yt;e&&Tg(t,e)?tv(r,n):(t.flags=t.flags&-4097|2,Le=!1,Yt=t)}}else{if(ld(t))throw Error(q(418));t.flags=t.flags&-4097|2,Le=!1,Yt=t}}}function Sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Xa(t){if(t!==Yt)return!1;if(!Le)return Sg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Qt)){if(ld(t))throw nv(),Error(q(418));for(;e;)tv(t,e),e=Cr(e.nextSibling)}if(Sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Yt?Cr(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=Qt;t;)t=Cr(t.nextSibling)}function us(){Qt=Yt=null,Le=!1}function Lf(t){vn===null?vn=[t]:vn.push(t)}var tS=nr.ReactCurrentBatchConfig;function gn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xl=Mr(null),Jl=null,Wi=null,jf=null;function Ff(){jf=Wi=Jl=null}function Mf(t){var e=Xl.current;Ve(Xl),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){Jl=t,jf=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(Jl===null)throw Error(q(308));Wi=t,Jl.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var Qr=null;function Uf(t){Qr===null?Qr=[t]:Qr.push(t)}function rv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Uf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Uf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}function Cg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=h=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,T=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(T,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(T,p,m):A,m==null)break e;p=Me({},p,m);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=T,u=p):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=p}}function Ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var sv=new r1.Component().refs;function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Rr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(xn(e,t,i,r),yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Rr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(xn(e,t,i,r),yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=Rr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(xn(e,t,r,n),yl(e,t,r))}};function Ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,s):!0}function ov(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=zt(e)?li:Pt.current,r=e.contextTypes,s=(r=r!=null)?ls(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sv,$f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=zt(e)?li:Pt.current,i.context=ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===sv&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pg(t){var e=t._init;return e(t._payload)}function av(t){function e(w,y){if(t){var _=w.deletions;_===null?(w.deletions=[y],w.flags|=16):_.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=Pr(w,y),w.index=0,w.sibling=null,w}function s(w,y,_){return w.index=_,t?(_=w.alternate,_!==null?(_=_.index,_<y?(w.flags|=2,y):_):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,y,_,D){return y===null||y.tag!==6?(y=lh(_,w.mode,D),y.return=w,y):(y=i(y,_),y.return=w,y)}function u(w,y,_,D){var F=_.type;return F===Fi?d(w,y,_.props.children,D,_.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hr&&Pg(F)===y.type)?(D=i(y,_.props),D.ref=eo(w,y,_),D.return=w,D):(D=Tl(_.type,_.key,_.props,null,w.mode,D),D.ref=eo(w,y,_),D.return=w,D)}function h(w,y,_,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=uh(_,w.mode,D),y.return=w,y):(y=i(y,_.children||[]),y.return=w,y)}function d(w,y,_,D,F){return y===null||y.tag!==7?(y=ni(_,w.mode,D,F),y.return=w,y):(y=i(y,_),y.return=w,y)}function p(w,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=lh(""+y,w.mode,_),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return _=Tl(y.type,y.key,y.props,null,w.mode,_),_.ref=eo(w,null,y),_.return=w,_;case ji:return y=uh(y,w.mode,_),y.return=w,y;case hr:var D=y._init;return p(w,D(y._payload),_)}if(fo(y)||Qs(y))return y=ni(y,w.mode,_,null),y.return=w,y;Ja(w,y)}return null}function m(w,y,_,D){var F=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return F!==null?null:l(w,y,""+_,D);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return _.key===F?u(w,y,_,D):null;case ji:return _.key===F?h(w,y,_,D):null;case hr:return F=_._init,m(w,y,F(_._payload),D)}if(fo(_)||Qs(_))return F!==null?null:d(w,y,_,D,null);Ja(w,_)}return null}function T(w,y,_,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(_)||null,l(y,w,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $a:return w=w.get(D.key===null?_:D.key)||null,u(y,w,D,F);case ji:return w=w.get(D.key===null?_:D.key)||null,h(y,w,D,F);case hr:var U=D._init;return T(w,y,_,U(D._payload),F)}if(fo(D)||Qs(D))return w=w.get(_)||null,d(y,w,D,F,null);Ja(y,D)}return null}function A(w,y,_,D){for(var F=null,U=null,E=y,v=y=0,C=null;E!==null&&v<_.length;v++){E.index>v?(C=E,E=null):C=E.sibling;var I=m(w,E,_[v],D);if(I===null){E===null&&(E=C);break}t&&E&&I.alternate===null&&e(w,E),y=s(I,y,v),U===null?F=I:U.sibling=I,U=I,E=C}if(v===_.length)return n(w,E),Le&&Hr(w,v),F;if(E===null){for(;v<_.length;v++)E=p(w,_[v],D),E!==null&&(y=s(E,y,v),U===null?F=E:U.sibling=E,U=E);return Le&&Hr(w,v),F}for(E=r(w,E);v<_.length;v++)C=T(E,w,v,_[v],D),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?v:C.key),y=s(C,y,v),U===null?F=C:U.sibling=C,U=C);return t&&E.forEach(function(N){return e(w,N)}),Le&&Hr(w,v),F}function k(w,y,_,D){var F=Qs(_);if(typeof F!="function")throw Error(q(150));if(_=F.call(_),_==null)throw Error(q(151));for(var U=F=null,E=y,v=y=0,C=null,I=_.next();E!==null&&!I.done;v++,I=_.next()){E.index>v?(C=E,E=null):C=E.sibling;var N=m(w,E,I.value,D);if(N===null){E===null&&(E=C);break}t&&E&&N.alternate===null&&e(w,E),y=s(N,y,v),U===null?F=N:U.sibling=N,U=N,E=C}if(I.done)return n(w,E),Le&&Hr(w,v),F;if(E===null){for(;!I.done;v++,I=_.next())I=p(w,I.value,D),I!==null&&(y=s(I,y,v),U===null?F=I:U.sibling=I,U=I);return Le&&Hr(w,v),F}for(E=r(w,E);!I.done;v++,I=_.next())I=T(E,w,v,I.value,D),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),y=s(I,y,v),U===null?F=I:U.sibling=I,U=I);return t&&E.forEach(function(b){return e(w,b)}),Le&&Hr(w,v),F}function R(w,y,_,D){if(typeof _=="object"&&_!==null&&_.type===Fi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:e:{for(var F=_.key,U=y;U!==null;){if(U.key===F){if(F=_.type,F===Fi){if(U.tag===7){n(w,U.sibling),y=i(U,_.props.children),y.return=w,w=y;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hr&&Pg(F)===U.type){n(w,U.sibling),y=i(U,_.props),y.ref=eo(w,U,_),y.return=w,w=y;break e}n(w,U);break}else e(w,U);U=U.sibling}_.type===Fi?(y=ni(_.props.children,w.mode,D,_.key),y.return=w,w=y):(D=Tl(_.type,_.key,_.props,null,w.mode,D),D.ref=eo(w,y,_),D.return=w,w=D)}return o(w);case ji:e:{for(U=_.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(w,y.sibling),y=i(y,_.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=uh(_,w.mode,D),y.return=w,w=y}return o(w);case hr:return U=_._init,R(w,y,U(_._payload),D)}if(fo(_))return A(w,y,_,D);if(Qs(_))return k(w,y,_,D);Ja(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,_),y.return=w,w=y):(n(w,y),y=lh(_,w.mode,D),y.return=w,w=y),o(w)):n(w,y)}return R}var cs=av(!0),lv=av(!1),fa={},Ln=Mr(fa),Wo=Mr(fa),Ko=Mr(fa);function Yr(t){if(t===fa)throw Error(q(174));return t}function Bf(t,e){switch(Pe(Ko,e),Pe(Wo,t),Pe(Ln,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qh(e,t)}Ve(Ln),Pe(Ln,e)}function hs(){Ve(Ln),Ve(Wo),Ve(Ko)}function uv(t){Yr(Ko.current);var e=Yr(Ln.current),n=qh(e,t.type);e!==n&&(Pe(Wo,t),Pe(Ln,n))}function zf(t){Wo.current===t&&(Ve(Ln),Ve(Wo))}var je=Mr(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function qf(){for(var t=0;t<nh.length;t++)nh[t]._workInProgressVersionPrimary=null;nh.length=0}var vl=nr.ReactCurrentDispatcher,rh=nr.ReactCurrentBatchConfig,ci=0,Fe=null,rt=null,ut=null,tu=!1,Co=!1,Go=0,nS=0;function Tt(){throw Error(q(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!An(t[n],e[n]))return!1;return!0}function Wf(t,e,n,r,i,s){if(ci=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?oS:aS,t=n(r,i),Co){s=0;do{if(Co=!1,Go=0,25<=s)throw Error(q(301));s+=1,ut=rt=null,e.updateQueue=null,vl.current=lS,t=n(r,i)}while(Co)}if(vl.current=nu,e=rt!==null&&rt.next!==null,ci=0,ut=rt=Fe=null,tu=!1,e)throw Error(q(300));return t}function Kf(){var t=Go!==0;return Go=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Fe.memoizedState=ut=t:ut=ut.next=t,ut}function cn(){if(rt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ut===null?Fe.memoizedState:ut.next;if(e!==null)ut=e,rt=t;else{if(t===null)throw Error(q(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ut===null?Fe.memoizedState=ut=t:ut=ut.next=t}return ut}function Qo(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=cn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var d=h.lane;if((ci&d)===d)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Fe.lanes|=d,hi|=d}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,An(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sh(t){var e=cn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);An(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cv(){}function hv(t,e){var n=Fe,r=cn(),i=e(),s=!An(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,Gf(pv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Yo(9,fv.bind(null,n,r,i,e),void 0,null),ht===null)throw Error(q(349));ci&30||dv(n,e,i)}return i}function dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,r){e.value=n,e.getSnapshot=r,mv(e)&&gv(t)}function pv(t,e,n){return n(function(){mv(e)&&gv(t)})}function mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!An(t,n)}catch{return!0}}function gv(t){var e=Jn(t,1);e!==null&&xn(e,t,1,-1)}function kg(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=sS.bind(null,Fe,t),[e.memoizedState,t]}function Yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return cn().memoizedState}function _l(t,e,n,r){var i=kn();Fe.flags|=t,i.memoizedState=Yo(1|e,n,void 0,r===void 0?null:r)}function Mu(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&Hf(r,o.deps)){i.memoizedState=Yo(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=Yo(1|e,n,s,r)}function bg(t,e){return _l(8390656,8,t,e)}function Gf(t,e){return Mu(2048,8,t,e)}function vv(t,e){return Mu(4,2,t,e)}function _v(t,e){return Mu(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ev(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,wv.bind(null,e,t),n)}function Qf(){}function xv(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sv(t,e,n){return ci&21?(An(n,e)||(n=I1(),Fe.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function rS(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=rh.transition;rh.transition={};try{t(!1),e()}finally{Te=n,rh.transition=r}}function Cv(){return cn().memoizedState}function iS(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Iv(e,n);else if(n=rv(t,e,n,r),n!==null){var i=Vt();xn(n,t,r,i),Rv(n,e,r)}}function sS(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Iv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,An(l,o)){var u=e.interleaved;u===null?(i.next=i,Uf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=rv(t,e,i,r),n!==null&&(i=Vt(),xn(n,t,r,i),Rv(n,e,r))}}function Av(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Iv(t,e){Co=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}var nu={readContext:un,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},oS={readContext:un,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iS.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Qf,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=rS.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=kn();if(Le){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),ht===null)throw Error(q(349));ci&30||dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bg(pv.bind(null,r,s,t),[t]),r.flags|=2048,Yo(9,fv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=ht.identifierPrefix;if(Le){var n=Gn,r=Kn;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aS={readContext:un,useCallback:xv,useContext:un,useEffect:Gf,useImperativeHandle:Ev,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Tv,useReducer:ih,useRef:yv,useState:function(){return ih(Qo)},useDebugValue:Qf,useDeferredValue:function(t){var e=cn();return Sv(e,rt.memoizedState,t)},useTransition:function(){var t=ih(Qo)[0],e=cn().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:hv,useId:Cv,unstable_isNewReconciler:!1},lS={readContext:un,useCallback:xv,useContext:un,useEffect:Gf,useImperativeHandle:Ev,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Tv,useReducer:sh,useRef:yv,useState:function(){return sh(Qo)},useDebugValue:Qf,useDeferredValue:function(t){var e=cn();return rt===null?e.memoizedState=t:Sv(e,rt.memoizedState,t)},useTransition:function(){var t=sh(Qo)[0],e=cn().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:hv,useId:Cv,unstable_isNewReconciler:!1};function ds(t,e){try{var n="",r=e;do n+=Lx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){iu||(iu=!0,Td=r),fd(t,e)},n}function kv(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TS.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var cS=nr.ReactCurrentOwner,Ut=!1;function bt(t,e,n,r){e.child=t===null?lv(e,null,n,r):cs(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=Wf(t,e,n,r,s,i),n=Kf(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Le&&n&&Vf(e),e.flags|=1,bt(t,e,r,i),e.child)}function Lg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bv(t,e,s,r,i)):(t=Tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function bv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bo(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return pd(t,e,n,r,i)}function Nv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Gi,Gt),Gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Gi,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(Gi,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(Gi,Gt),Gt|=r;return bt(t,e,i,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var s=zt(n)?li:Pt.current;return s=ls(e,s),ts(e,i),n=Wf(t,e,n,r,s,i),r=Kf(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Le&&r&&Vf(e),e.flags|=1,bt(t,e,n,i),e.child)}function jg(t,e,n,r,i){if(zt(n)){var s=!0;Gl(e)}else s=!1;if(ts(e,i),e.stateNode===null)wl(t,e),ov(e,n,r),dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=un(h):(h=zt(n)?li:Pt.current,h=ls(e,h));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rg(e,o,r,h),dr=!1;var m=e.memoizedState;o.state=m,Zl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Bt.current||dr?(typeof d=="function"&&(hd(e,n,d,r),u=e.memoizedState),(l=dr||Ig(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:gn(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=zt(n)?li:Pt.current,u=ls(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Rg(e,o,r,u),dr=!1,m=e.memoizedState,o.state=m,Zl(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||Bt.current||dr?(typeof T=="function"&&(hd(e,n,T,r),A=e.memoizedState),(h=dr||Ig(e,n,h,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,s,i)}function md(t,e,n,r,i,s){Dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xg(e,n,!1),Zn(t,e,s);r=e.stateNode,cS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&xg(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?Eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Eg(t,e.context,!1),Bf(t,e.containerInfo)}function Fg(t,e,n,r,i){return us(),Lf(i),e.flags|=256,bt(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ov(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(je,i&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bu(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=gd,t):Yf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pr(l,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yf(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&Lf(r),cs(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oh(Error(q(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bu({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=gd,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=oh(s,r,void 0),Za(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ut||l){if(r=ht,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),xn(r,t,i,-1))}return np(),r=oh(Error(q(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Cr(i.nextSibling),Yt=e,Le=!0,vn=null,t!==null&&(sn[on++]=Kn,sn[on++]=Gn,sn[on++]=ui,Kn=t.id,Gn=t.overflow,ui=e),e=Yf(e,r.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ah(e,!0,n,null,s);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dS(t,e,n){switch(e.tag){case 3:Vv(e),us();break;case 5:uv(e);break;case 1:zt(e.type)&&Gl(e);break;case 4:Bf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(Xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?Ov(t,e,n):(Pe(je,je.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);Pe(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,Nv(t,e,n)}return Zn(t,e,n)}var jv,vd,Fv,Mv;jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};Fv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(Ln.current);var s=null;switch(n){case"input":i=Uh(t,i),r=Uh(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wl)}Hh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&be("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Mv=function(t,e,n,r){n!==r&&(e.flags|=4)};function to(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fS(t,e,n){var r=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return zt(e.type)&&Kl(),St(e),null;case 3:return r=e.stateNode,hs(),Ve(Bt),Ve(Pt),qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Ad(vn),vn=null))),vd(t,e),St(e),null;case 5:zf(e);var i=Yr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return St(e),null}if(t=Yr(Ln.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)be(mo[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Gm(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":Ym(r,s),be("invalid",r)}Hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Ba(r),Qm(r,s,!0);break;case"textarea":Ba(r),Xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Ho]=r,jv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)be(mo[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":Gm(t,r),i=Uh(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),be("invalid",t);break;case"textarea":Ym(t,r),i=zh(t,r),be("invalid",t);break;default:i=r}Hh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?m1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&f1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lo(t,u):typeof u=="number"&&Lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&be("scroll",t):u!=null&&wf(t,s,u,o))}switch(n){case"input":Ba(t),Qm(t,r,!1);break;case"textarea":Ba(t),Xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)Mv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Yr(Ko.current),Yr(Ln.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return St(e),null;case 13:if(Ve(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Qt!==null&&e.mode&1&&!(e.flags&128))nv(),us(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Nn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else vn!==null&&(Ad(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?st===0&&(st=3):np())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return hs(),vd(t,e),t===null&&zo(e.stateNode.containerInfo),St(e),null;case 10:return Mf(e.type._context),St(e),null;case 17:return zt(e.type)&&Kl(),St(e),null;case 19:if(Ve(je),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)to(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,to(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>fs&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304)}else{if(!r)if(t=eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return St(e),null}else 2*Ke()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=je.current,Pe(je,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function pS(t,e){switch(Of(e),e.tag){case 1:return zt(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),Ve(Bt),Ve(Pt),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zf(e),null;case 13:if(Ve(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve(je),null;case 4:return hs(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var el=!1,It=!1,mS=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function _d(t,e,n){try{n()}catch(r){Be(t,e,r)}}var Ug=!1;function gS(t,e){if(nd=zl,t=z1(),Df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,d=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++d===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},zl=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,R=A.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:gn(e.type,k),R);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(D){Be(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return A=Ug,Ug=!1,A}function Ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_d(e,n,s)}i=i.next}while(i!==r)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uv(t){var e=t.alternate;e!==null&&(t.alternate=null,Uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Ho],delete e[od],delete e[JT],delete e[ZT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var ft=null,yn=!1;function lr(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:It||Ki(n,e);case 6:var r=ft,i=yn;ft=null,lr(t,e,n),ft=r,yn=i,ft!==null&&(yn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(yn?(t=ft,n=n.stateNode,t.nodeType===8?eh(t.parentNode,n):t.nodeType===1&&eh(t,n),Uo(t)):eh(ft,n.stateNode));break;case 4:r=ft,i=yn,ft=n.stateNode.containerInfo,yn=!0,lr(t,e,n),ft=r,yn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_d(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!It&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,lr(t,e,n),It=r):lr(t,e,n);break;default:lr(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mS),e.forEach(function(r){var i=CS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ft=l.stateNode,yn=!1;break e;case 3:ft=l.stateNode.containerInfo,yn=!0;break e;case 4:ft=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(ft===null)throw Error(q(160));Bv(s,o,i),ft=null,yn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Be(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,t),e=e.sibling}function zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),Pn(t),r&4){try{Ao(3,t,t.return),Uu(3,t)}catch(k){Be(t,t.return,k)}try{Ao(5,t,t.return)}catch(k){Be(t,t.return,k)}}break;case 1:mn(e,t),Pn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(mn(e,t),Pn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{Lo(i,"")}catch(k){Be(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&c1(i,s),Wh(l,o);var h=Wh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?m1(i,p):d==="dangerouslySetInnerHTML"?f1(i,p):d==="children"?Lo(i,p):wf(i,d,p,h)}switch(l){case"input":$h(i,s);break;case"textarea":h1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Xi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(k){Be(t,t.return,k)}}break;case 6:if(mn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Be(t,t.return,k)}}break;case 3:if(mn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(k){Be(t,t.return,k)}break;case 4:mn(e,t),Pn(t);break;case 13:mn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zf=Ke())),r&4&&Bg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(h=It)||d,mn(e,t),It=h):mn(e,t),Pn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!d&&t.mode&1)for(X=t,d=t.child;d!==null;){for(p=X=d;X!==null;){switch(m=X,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ao(4,m,m.return);break;case 1:Ki(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Be(r,n,k)}}break;case 5:Ki(m,m.return);break;case 22:if(m.memoizedState!==null){qg(p);continue}}T!==null?(T.return=m,X=T):qg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=p1("display",o))}catch(k){Be(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){Be(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:mn(e,t),Pn(t),r&4&&Bg(t);break;case 21:break;default:mn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var s=$g(t);xd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$g(t);Ed(t,l,o);break;default:throw Error(q(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){X=t,qv(t)}function qv(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||It;l=el;var h=It;if(el=o,(It=u)&&!h)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?Hg(i):u!==null?(u.return=o,X=u):Hg(i);for(;s!==null;)X=s,qv(s),s=s.sibling;X=i,el=l,It=h}zg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):zg(t)}}function zg(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ag(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ag(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}It||e.flags&512&&wd(e)}catch(m){Be(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function qg(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Hg(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{wd(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{wd(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var vS=Math.ceil,ru=nr.ReactCurrentDispatcher,Xf=nr.ReactCurrentOwner,ln=nr.ReactCurrentBatchConfig,ye=0,ht=null,Je=null,mt=0,Gt=0,Gi=Mr(0),st=0,Xo=null,hi=0,$u=0,Jf=0,Io=null,Mt=null,Zf=0,fs=1/0,qn=null,iu=!1,Td=null,Ir=null,tl=!1,yr=null,su=0,Ro=0,Sd=null,El=-1,xl=0;function Vt(){return ye&6?Ke():El!==-1?El:El=Ke()}function Rr(t){return t.mode&1?ye&2&&mt!==0?mt&-mt:tS.transition!==null?(xl===0&&(xl=I1()),xl):(t=Te,t!==0||(t=window.event,t=t===void 0?16:V1(t.type)),t):1}function xn(t,e,n,r){if(50<Ro)throw Ro=0,Sd=null,Error(q(185));ca(t,n,r),(!(ye&2)||t!==ht)&&(t===ht&&(!(ye&2)&&($u|=n),st===4&&pr(t,mt)),qt(t,r),n===1&&ye===0&&!(e.mode&1)&&(fs=Ke()+500,ju&&Ur()))}function qt(t,e){var n=t.callbackNode;tT(t,e);var r=Bl(t,t===ht?mt:0);if(r===0)n!==null&&eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&eg(n),e===1)t.tag===0?eS(Wg.bind(null,t)):Z1(Wg.bind(null,t)),YT(function(){!(ye&6)&&Ur()}),n=null;else{switch(R1(r)){case 1:n=Cf;break;case 4:n=C1;break;case 16:n=$l;break;case 536870912:n=A1;break;default:n=$l}n=Jv(n,Hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hv(t,e){if(El=-1,xl=0,ye&6)throw Error(q(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=Bl(t,t===ht?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ou(t,r);else{e=r;var i=ye;ye|=2;var s=Kv();(ht!==t||mt!==e)&&(qn=null,fs=Ke()+500,ti(t,e));do try{ES();break}catch(l){Wv(t,l)}while(!0);Ff(),ru.current=s,ye=i,Je!==null?e=0:(ht=null,mt=0,e=st)}if(e!==0){if(e===2&&(i=Xh(t),i!==0&&(r=i,e=Cd(t,i))),e===1)throw n=Xo,ti(t,0),pr(t,r),qt(t,Ke()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!_S(i)&&(e=ou(t,r),e===2&&(s=Xh(t),s!==0&&(r=s,e=Cd(t,s))),e===1))throw n=Xo,ti(t,0),pr(t,r),qt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Wr(t,Mt,qn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Zf+500-Ke(),10<e)){if(Bl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sd(Wr.bind(null,t,Mt,qn),e);break}Wr(t,Mt,qn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vS(r/1960))-r,10<r){t.timeoutHandle=sd(Wr.bind(null,t,Mt,qn),r);break}Wr(t,Mt,qn);break;case 5:Wr(t,Mt,qn);break;default:throw Error(q(329))}}}return qt(t,Ke()),t.callbackNode===n?Hv.bind(null,t):null}function Cd(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=ou(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Ad(e)),t}function Ad(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!An(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Jf,e&=~$u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function Wg(t){if(ye&6)throw Error(q(327));ns();var e=Bl(t,0);if(!(e&1))return qt(t,Ke()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var r=Xh(t);r!==0&&(e=r,n=Cd(t,r))}if(n===1)throw n=Xo,ti(t,0),pr(t,e),qt(t,Ke()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Mt,qn),qt(t,Ke()),null}function ep(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(fs=Ke()+500,ju&&Ur())}}function di(t){yr!==null&&yr.tag===0&&!(ye&6)&&ns();var e=ye;ye|=1;var n=ln.transition,r=Te;try{if(ln.transition=null,Te=1,t)return t()}finally{Te=r,ln.transition=n,ye=e,!(ye&6)&&Ur()}}function tp(){Gt=Gi.current,Ve(Gi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QT(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(Of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:hs(),Ve(Bt),Ve(Pt),qf();break;case 5:zf(r);break;case 4:hs();break;case 13:Ve(je);break;case 19:Ve(je);break;case 10:Mf(r.type._context);break;case 22:case 23:tp()}n=n.return}if(ht=t,Je=t=Pr(t.current,null),mt=Gt=e,st=0,Xo=null,Jf=$u=hi=0,Mt=Io=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function Wv(t,e){do{var n=Je;try{if(Ff(),vl.current=nu,tu){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tu=!1}if(ci=0,ut=rt=Fe=null,Co=!1,Go=0,Xf.current=null,n===null||n.return===null){st=1,Xo=e,Je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Dg(o);if(T!==null){T.flags&=-257,Vg(T,o,l,s,e),T.mode&1&&Ng(s,h,e),e=T,u=h;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Ng(s,h,e),np();break e}u=Error(q(426))}}else if(Le&&l.mode&1){var R=Dg(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Vg(R,o,l,s,e),Lf(ds(u,l));break e}}s=u=ds(u,l),st!==4&&(st=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Pv(s,u,e);Cg(s,w);break e;case 1:l=u;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ir===null||!Ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=kv(s,l,e);Cg(s,D);break e}}s=s.return}while(s!==null)}Qv(n)}catch(F){e=F,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function Kv(){var t=ru.current;return ru.current=nu,t===null?nu:t}function np(){(st===0||st===3||st===2)&&(st=4),ht===null||!(hi&268435455)&&!($u&268435455)||pr(ht,mt)}function ou(t,e){var n=ye;ye|=2;var r=Kv();(ht!==t||mt!==e)&&(qn=null,ti(t,e));do try{wS();break}catch(i){Wv(t,i)}while(!0);if(Ff(),ye=n,ru.current=r,Je!==null)throw Error(q(261));return ht=null,mt=0,st}function wS(){for(;Je!==null;)Gv(Je)}function ES(){for(;Je!==null&&!Wx();)Gv(Je)}function Gv(t){var e=Xv(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?Qv(t):Je=e,Xf.current=null}function Qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pS(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Je=null;return}}else if(n=fS(n,e,Gt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);st===0&&(st=5)}function Wr(t,e,n){var r=Te,i=ln.transition;try{ln.transition=null,Te=1,xS(t,e,n,r)}finally{ln.transition=i,Te=r}return null}function xS(t,e,n,r){do ns();while(yr!==null);if(ye&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nT(t,s),t===ht&&(Je=ht=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Jv($l,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=Te;Te=1;var l=ye;ye|=4,Xf.current=null,gS(t,n),zv(n,t),BT(rd),zl=!!nd,rd=nd=null,t.current=n,yS(n),Kx(),ye=l,Te=o,ln.transition=s}else t.current=n;if(tl&&(tl=!1,yr=t,su=i),s=t.pendingLanes,s===0&&(Ir=null),Yx(n.stateNode),qt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,t=Td,Td=null,t;return su&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===Sd?Ro++:(Ro=0,Sd=t):Ro=0,Ur(),null}function ns(){if(yr!==null){var t=R1(su),e=ln.transition,n=Te;try{if(ln.transition=null,Te=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,su=0,ye&6)throw Error(q(331));var i=ye;for(ye|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(X=h;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:Ao(8,d,s)}var p=d.child;if(p!==null)p.return=d,X=p;else for(;X!==null;){d=X;var m=d.sibling,T=d.return;if(Uv(d),d===h){X=null;break}if(m!==null){m.return=T,X=m;break}X=T}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,X=w;break e}X=s.return}}var y=t.current;for(X=y;X!==null;){o=X;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,X=_;else e:for(o=y;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uu(9,l)}}catch(F){Be(l,l.return,F)}if(l===o){X=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,X=D;break e}X=l.return}}if(ye=i,Ur(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Nu,t)}catch{}r=!0}return r}finally{Te=n,ln.transition=e}}return!1}function Kg(t,e,n){e=ds(n,e),e=Pv(t,e,1),t=Ar(t,e,1),e=Vt(),t!==null&&(ca(t,1,e),qt(t,e))}function Be(t,e,n){if(t.tag===3)Kg(t,t,n);else for(;e!==null;){if(e.tag===3){Kg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ds(n,t),t=kv(e,t,1),e=Ar(e,t,1),t=Vt(),e!==null&&(ca(e,1,t),qt(e,t));break}}e=e.return}}function TS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(mt&n)===n&&(st===4||st===3&&(mt&130023424)===mt&&500>Ke()-Zf?ti(t,0):Jf|=n),qt(t,e)}function Yv(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=Vt();t=Jn(t,e),t!==null&&(ca(t,e,n),qt(t,n))}function SS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yv(t,n)}function CS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),Yv(t,n)}var Xv;Xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,dS(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Le&&e.flags&1048576&&ev(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wl(t,e),t=e.pendingProps;var i=ls(e,Pt.current);ts(e,n),i=Wf(null,e,r,t,i,n);var s=Kf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$f(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,dd(e,r,t,n),e=md(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Vf(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IS(r),t=gn(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=jg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Lg(null,e,r,gn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),jg(t,e,r,i,n);case 3:e:{if(Vv(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iv(t,e),Zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(q(423)),e),e=Fg(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(q(424)),e),e=Fg(t,e,r,n,i);break e}else for(Qt=Cr(e.stateNode.containerInfo.firstChild),Yt=e,Le=!0,vn=null,n=lv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=Zn(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return uv(e),t===null&&ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=32),Dv(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Ov(t,e,n);case 4:return Bf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Og(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(Xl,r._currentValue),r._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===i.children&&!Bt.current){e=Zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?u.next=u:(u.next=d.next,d.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=un(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),Lg(t,e,r,i,n);case 15:return bv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),wl(t,e),e.tag=1,zt(r)?(t=!0,Gl(e)):t=!1,ts(e,n),ov(e,r,i),dd(e,r,i,n),md(null,e,r,!0,t,n);case 19:return Lv(t,e,n);case 22:return Nv(t,e,n)}throw Error(q(156,e.tag))};function Jv(t,e){return S1(t,e)}function AS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new AS(t,e,n,r)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IS(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===Tf)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ni(n.children,i,s,e);case Ef:o=8,i|=8;break;case Lh:return t=an(12,n,e,i|2),t.elementType=Lh,t.lanes=s,t;case jh:return t=an(13,n,e,i),t.elementType=jh,t.lanes=s,t;case Fh:return t=an(19,n,e,i),t.elementType=Fh,t.lanes=s,t;case a1:return Bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s1:o=10;break e;case o1:o=9;break e;case xf:o=11;break e;case Tf:o=14;break e;case hr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Bu(t,e,n,r){return t=an(22,t,r,e),t.elementType=a1,t.lanes=n,t.stateNode={isHidden:!1},t}function lh(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function uh(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ip(t,e,n,r,i,s,o,l,u){return t=new RS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(s),t}function PS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zv(t){if(!t)return Vr;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(zt(n))return J1(t,n,e)}return e}function e_(t,e,n,r,i,s,o,l,u){return t=ip(n,r,!0,t,i,s,o,l,u),t.context=Zv(null),n=t.current,r=Vt(),i=Rr(n),s=Qn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,ca(t,i,r),qt(t,r),t}function zu(t,e,n,r){var i=e.current,s=Vt(),o=Rr(i);return n=Zv(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(xn(t,i,o,s),yl(t,i,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sp(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function kS(){return null}var t_=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}qu.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));zu(t,e,null,null)};qu.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){zu(null,t,null,null)}),e[Xn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=b1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&D1(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function bS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=au(o);s.call(h)}}var o=e_(e,r,t,0,null,!1,!1,"",Qg);return t._reactRootContainer=o,t[Xn]=o.current,zo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=au(u);l.call(h)}}var u=ip(t,0,!1,null,null,!1,!1,"",Qg);return t._reactRootContainer=u,t[Xn]=u.current,zo(t.nodeType===8?t.parentNode:t),di(function(){zu(e,u,n,r)}),u}function Wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=au(o);l.call(u)}}zu(e,o,t,i)}else o=bS(n,e,t,i,r);return au(o)}P1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Af(e,n|1),qt(e,Ke()),!(ye&6)&&(fs=Ke()+500,Ur()))}break;case 13:di(function(){var r=Jn(t,1);if(r!==null){var i=Vt();xn(r,t,1,i)}}),sp(t,1)}};If=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=Vt();xn(e,t,134217728,n)}sp(t,134217728)}};k1=function(t){if(t.tag===13){var e=Rr(t),n=Jn(t,e);if(n!==null){var r=Vt();xn(n,t,e,r)}sp(t,e)}};b1=function(){return Te};N1=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Gh=function(t,e,n){switch(e){case"input":if($h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(q(90));u1(r),$h(r,i)}}}break;case"textarea":h1(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};v1=ep;_1=di;var NS={usingClientEntryPoint:!1,Events:[da,Bi,Lu,g1,y1,ep]},no={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DS={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x1(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||kS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Nu=nl.inject(DS),On=nl}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(q(200));return PS(t,e,null,n)};Zt.createRoot=function(t,e){if(!ap(t))throw Error(q(299));var n=!1,r="",i=t_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ip(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,zo(t.nodeType===8?t.parentNode:t),new op(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=x1(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return di(t)};Zt.hydrate=function(t,e,n){if(!Hu(e))throw Error(q(200));return Wu(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=t_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e_(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qu(e)};Zt.render=function(t,e,n){if(!Hu(e))throw Error(q(200));return Wu(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(q(40));return t._reactRootContainer?(di(function(){Wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Zt.unstable_batchedUpdates=ep;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Wu(t,e,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";function n_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n_)}catch(t){console.error(t)}}n_(),e1.exports=Zt;var VS=e1.exports,Yg=VS;Vh.createRoot=Yg.createRoot,Vh.hydrateRoot=Yg.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vr||(vr={}));const Xg="popstate";function OS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=_i(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Id("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,h=u.indexOf("#");l=h===-1?u:u.slice(0,h)}return l+"#"+(typeof s=="string"?s:lu(s))}function r(i,s){lp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return jS(e,n,r,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LS(){return Math.random().toString(36).substr(2,8)}function Jg(t,e){return{usr:t.state,key:t.key,idx:e}}function Id(t,e,n,r){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_i(e):e,{state:n,key:e&&e.key||r||LS()})}function lu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _i(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=vr.Pop,u=null,h=d();h==null&&(h=0,o.replaceState(Jo({},o.state,{idx:h}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=vr.Pop;let R=d(),w=R==null?null:R-h;h=R,u&&u({action:l,location:k.location,delta:w})}function m(R,w){l=vr.Push;let y=Id(k.location,R,w);n&&n(y,R),h=d()+1;let _=Jg(y,h),D=k.createHref(y);try{o.pushState(_,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function T(R,w){l=vr.Replace;let y=Id(k.location,R,w);n&&n(y,R),h=d();let _=Jg(y,h),D=k.createHref(y);o.replaceState(_,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function A(R){let w=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof R=="string"?R:lu(R);return y=y.replace(/ $/,"%20"),Ze(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let k={get action(){return l},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xg,p),u=R,()=>{i.removeEventListener(Xg,p),u=null}},createHref(R){return e(i,R)},createURL:A,encodeLocation(R){let w=A(R);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:T,go(R){return o.go(R)}};return k}var Zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zg||(Zg={}));function FS(t,e,n){return n===void 0&&(n="/"),MS(t,e,n,!1)}function MS(t,e,n,r){let i=typeof e=="string"?_i(e):e,s=up(i.pathname||"/",n);if(s==null)return null;let o=r_(t);US(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=XS(s);l=QS(o[u],h,r)}return l}function r_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=kr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),r_(s.children,e,d,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:KS(h,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of i_(s.path))i(s,o,u)}),e}function i_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function US(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $S=/^:[\w-]+$/,BS=3,zS=2,qS=1,HS=10,WS=-2,ey=t=>t==="*";function KS(t,e){let n=t.split("/"),r=n.length;return n.some(ey)&&(r+=WS),e&&(r+=zS),n.filter(i=>!ey(i)).reduce((i,s)=>i+($S.test(s)?BS:s===""?qS:HS),r)}function GS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QS(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=ty({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},d),m=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=ty({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:kr([s,p.pathname]),pathnameBase:tC(kr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=kr([s,p.pathnameBase]))}return o}function ty(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,d,p)=>{let{paramName:m,isOptional:T}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return T&&!A?h[m]=void 0:h[m]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function YS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function up(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_i(t):t;return{pathname:n?n.startsWith("/")?n:ZS(n,e):e,search:nC(r),hash:rC(i)}}function ZS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ch(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function s_(t,e){let n=eC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function o_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_i(t):(i=Jo({},t),Ze(!i.pathname||!i.pathname.includes("?"),ch("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),ch("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),ch("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=JS(i,l),h=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||d)&&(u.pathname+="/"),u}const kr=t=>t.join("/").replace(/\/\/+/g,"/"),tC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const a_=["post","put","patch","delete"];new Set(a_);const sC=["get",...a_];new Set(sC);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}const cp=z.createContext(null),oC=z.createContext(null),wi=z.createContext(null),Ku=z.createContext(null),Ei=z.createContext({outlet:null,matches:[],isDataRoute:!1}),l_=z.createContext(null);function aC(t,e){let{relative:n}=e===void 0?{}:e;pa()||Ze(!1);let{basename:r,navigator:i}=z.useContext(wi),{hash:s,pathname:o,search:l}=c_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:kr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function pa(){return z.useContext(Ku)!=null}function Gu(){return pa()||Ze(!1),z.useContext(Ku).location}function u_(t){z.useContext(wi).static||z.useLayoutEffect(t)}function rr(){let{isDataRoute:t}=z.useContext(Ei);return t?wC():lC()}function lC(){pa()||Ze(!1);let t=z.useContext(cp),{basename:e,future:n,navigator:r}=z.useContext(wi),{matches:i}=z.useContext(Ei),{pathname:s}=Gu(),o=JSON.stringify(s_(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return u_(()=>{l.current=!0}),z.useCallback(function(h,d){if(d===void 0&&(d={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=o_(h,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:kr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function c_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(wi),{matches:i}=z.useContext(Ei),{pathname:s}=Gu(),o=JSON.stringify(s_(i,r.v7_relativeSplatPath));return z.useMemo(()=>o_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uC(t,e){return cC(t,e)}function cC(t,e,n,r){pa()||Ze(!1);let{navigator:i}=z.useContext(wi),{matches:s}=z.useContext(Ei),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Gu(),d;if(e){var p;let R=typeof e=="string"?_i(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||Ze(!1),d=R}else d=h;let m=d.pathname||"/",T=m;if(u!=="/"){let R=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let A=FS(t,{pathname:T}),k=mC(A&&A.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:kr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:kr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&k?z.createElement(Ku.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:vr.Pop}},k):k}function hC(){let t=_C(),e=iC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const dC=z.createElement(hC,null);class fC extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Ei.Provider,{value:this.props.routeContext},z.createElement(l_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pC(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(cp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Ei.Provider,{value:e},r)}function mC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:T}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||A){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let T,A=!1,k=null,R=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||dC,u&&(h<0&&m===0?(EC("route-fallback",!1),A=!0,R=null):h===m&&(A=!0,R=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),y=()=>{let _;return T?_=k:A?_=R:p.route.Component?_=z.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=d,z.createElement(pC,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:_})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement(fC,{location:n.location,revalidation:n.revalidation,component:k,error:T,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}var h_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(h_||{}),uu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uu||{});function gC(t){let e=z.useContext(cp);return e||Ze(!1),e}function yC(t){let e=z.useContext(oC);return e||Ze(!1),e}function vC(t){let e=z.useContext(Ei);return e||Ze(!1),e}function d_(t){let e=vC(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function _C(){var t;let e=z.useContext(l_),n=yC(uu.UseRouteError),r=d_(uu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wC(){let{router:t}=gC(h_.UseNavigateStable),e=d_(uu.UseNavigateStable),n=z.useRef(!1);return u_(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zo({fromRouteId:e},s)))},[t,e])}const ny={};function EC(t,e,n){!e&&!ny[t]&&(ny[t]=!0)}function zn(t){Ze(!1)}function xC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vr.Pop,navigator:s,static:o=!1,future:l}=t;pa()&&Ze(!1);let u=e.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Zo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=_i(r));let{pathname:d="/",search:p="",hash:m="",state:T=null,key:A="default"}=r,k=z.useMemo(()=>{let R=up(d,u);return R==null?null:{location:{pathname:R,search:p,hash:m,state:T,key:A},navigationType:i}},[u,d,p,m,T,A,i]);return k==null?null:z.createElement(wi.Provider,{value:h},z.createElement(Ku.Provider,{children:n,value:k}))}function TC(t){let{children:e,location:n}=t;return uC(Rd(e),n)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,Rd(r.props.children,s));return}r.type!==zn&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pd.apply(this,arguments)}function SC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AC(t,e){return t.button===0&&(!e||e==="_self")&&!CC(t)}const IC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RC="6";try{window.__reactRouterVersion=RC}catch{}const PC="startTransition",ry=Sx[PC];function kC(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=OS({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},d=z.useCallback(p=>{h&&ry?ry(()=>u(p)):u(p)},[u,h]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.createElement(xC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const bC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_n=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:d,unstable_viewTransition:p}=e,m=SC(e,IC),{basename:T}=z.useContext(wi),A,k=!1;if(typeof h=="string"&&NC.test(h)&&(A=h,bC))try{let _=new URL(window.location.href),D=h.startsWith("//")?new URL(_.protocol+h):new URL(h),F=up(D.pathname,T);D.origin===_.origin&&F!=null?h=F+D.search+D.hash:k=!0}catch{}let R=aC(h,{relative:i}),w=DC(h,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function y(_){r&&r(_),_.defaultPrevented||w(_)}return z.createElement("a",Pd({},m,{href:A||R,onClick:k||s?r:y,ref:n,target:u}))});var iy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(iy||(iy={}));var sy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sy||(sy={}));function DC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=rr(),h=Gu(),d=c_(t,{relative:o});return z.useCallback(p=>{if(AC(p,n)){p.preventDefault();let m=r!==void 0?r:lu(h)===lu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,d,r,i,n,t,s,o,l])}var $t=function(){return $t=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$t.apply(this,arguments)};function ea(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ne="-ms-",Po="-moz-",xe="-webkit-",f_="comm",Qu="rule",hp="decl",VC="@import",p_="@keyframes",OC="@layer",m_=Math.abs,dp=String.fromCharCode,kd=Object.assign;function LC(t,e){return ct(t,0)^45?(((e<<2^ct(t,0))<<2^ct(t,1))<<2^ct(t,2))<<2^ct(t,3):0}function g_(t){return t.trim()}function Hn(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Sl(t,e,n){return t.indexOf(e,n)}function ct(t,e){return t.charCodeAt(e)|0}function ps(t,e,n){return t.slice(e,n)}function bn(t){return t.length}function y_(t){return t.length}function go(t,e){return e.push(t),t}function jC(t,e){return t.map(e).join("")}function oy(t,e){return t.filter(function(n){return!Hn(n,e)})}var Yu=1,ms=1,v_=0,hn=0,Xe=0,Rs="";function Xu(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Yu,column:ms,length:o,return:"",siblings:l}}function cr(t,e){return kd(Xu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ni(t){for(;t.root;)t=cr(t.root,{children:[t]});go(t,t.siblings)}function FC(){return Xe}function MC(){return Xe=hn>0?ct(Rs,--hn):0,ms--,Xe===10&&(ms=1,Yu--),Xe}function Tn(){return Xe=hn<v_?ct(Rs,hn++):0,ms++,Xe===10&&(ms=1,Yu++),Xe}function ri(){return ct(Rs,hn)}function Cl(){return hn}function Ju(t,e){return ps(Rs,t,e)}function bd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function UC(t){return Yu=ms=1,v_=bn(Rs=t),hn=0,[]}function $C(t){return Rs="",t}function hh(t){return g_(Ju(hn-1,Nd(t===91?t+2:t===40?t+1:t)))}function BC(t){for(;(Xe=ri())&&Xe<33;)Tn();return bd(t)>2||bd(Xe)>3?"":" "}function zC(t,e){for(;--e&&Tn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return Ju(t,Cl()+(e<6&&ri()==32&&Tn()==32))}function Nd(t){for(;Tn();)switch(Xe){case t:return hn;case 34:case 39:t!==34&&t!==39&&Nd(Xe);break;case 40:t===41&&Nd(t);break;case 92:Tn();break}return hn}function qC(t,e){for(;Tn()&&t+Xe!==57;)if(t+Xe===84&&ri()===47)break;return"/*"+Ju(e,hn-1)+"*"+dp(t===47?t:Tn())}function HC(t){for(;!bd(ri());)Tn();return Ju(t,hn)}function WC(t){return $C(Al("",null,null,null,[""],t=UC(t),0,[0],t))}function Al(t,e,n,r,i,s,o,l,u){for(var h=0,d=0,p=o,m=0,T=0,A=0,k=1,R=1,w=1,y=0,_="",D=i,F=s,U=r,E=_;R;)switch(A=y,y=Tn()){case 40:if(A!=108&&ct(E,p-1)==58){Sl(E+=le(hh(y),"&","&\f"),"&\f",m_(h?l[h-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:E+=hh(y);break;case 9:case 10:case 13:case 32:E+=BC(A);break;case 92:E+=zC(Cl()-1,7);continue;case 47:switch(ri()){case 42:case 47:go(KC(qC(Tn(),Cl()),e,n,u),u);break;default:E+="/"}break;case 123*k:l[h++]=bn(E)*w;case 125*k:case 59:case 0:switch(y){case 0:case 125:R=0;case 59+d:w==-1&&(E=le(E,/\f/g,"")),T>0&&bn(E)-p&&go(T>32?ly(E+";",r,n,p-1,u):ly(le(E," ","")+";",r,n,p-2,u),u);break;case 59:E+=";";default:if(go(U=ay(E,e,n,h,d,i,l,_,D=[],F=[],p,s),s),y===123)if(d===0)Al(E,e,U,U,D,s,p,l,F);else switch(m===99&&ct(E,3)===110?100:m){case 100:case 108:case 109:case 115:Al(t,U,U,r&&go(ay(t,U,U,0,0,i,l,_,i,D=[],p,F),F),i,F,p,l,r?D:F);break;default:Al(E,U,U,U,[""],F,0,l,F)}}h=d=T=0,k=w=1,_=E="",p=o;break;case 58:p=1+bn(E),T=A;default:if(k<1){if(y==123)--k;else if(y==125&&k++==0&&MC()==125)continue}switch(E+=dp(y),y*k){case 38:w=d>0?1:(E+="\f",-1);break;case 44:l[h++]=(bn(E)-1)*w,w=1;break;case 64:ri()===45&&(E+=hh(Tn())),m=ri(),d=p=bn(_=E+=HC(Cl())),y++;break;case 45:A===45&&bn(E)==2&&(k=0)}}return s}function ay(t,e,n,r,i,s,o,l,u,h,d,p){for(var m=i-1,T=i===0?s:[""],A=y_(T),k=0,R=0,w=0;k<r;++k)for(var y=0,_=ps(t,m+1,m=m_(R=o[k])),D=t;y<A;++y)(D=g_(R>0?T[y]+" "+_:le(_,/&\f/g,T[y])))&&(u[w++]=D);return Xu(t,e,n,i===0?Qu:l,u,h,d,p)}function KC(t,e,n,r){return Xu(t,e,n,f_,dp(FC()),ps(t,2,-2),0,r)}function ly(t,e,n,r,i){return Xu(t,e,n,hp,ps(t,0,r),ps(t,r+1,-1),r,i)}function __(t,e,n){switch(LC(t,e)){case 5103:return xe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+t+t;case 4789:return Po+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+t+Po+t+Ne+t+t;case 5936:switch(ct(t,e+11)){case 114:return xe+t+Ne+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return xe+t+Ne+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return xe+t+Ne+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return xe+t+Ne+t+t;case 6165:return xe+t+Ne+"flex-"+t+t;case 5187:return xe+t+le(t,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Ne+"flex-$1$2")+t;case 5443:return xe+t+Ne+"flex-item-"+le(t,/flex-|-self/g,"")+(Hn(t,/flex-|baseline/)?"":Ne+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return xe+t+Ne+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return xe+t+Ne+le(t,"shrink","negative")+t;case 5292:return xe+t+Ne+le(t,"basis","preferred-size")+t;case 6060:return xe+"box-"+le(t,"-grow","")+xe+t+Ne+le(t,"grow","positive")+t;case 4554:return xe+le(t,/([^-])(transform)/g,"$1"+xe+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+t+t;case 4200:if(!Hn(t,/flex-|baseline/))return Ne+"grid-column-align"+ps(t,e)+t;break;case 2592:case 3360:return Ne+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Hn(r.props,/grid-\w+-end/)})?~Sl(t+(n=n[e].value),"span",0)?t:Ne+le(t,"-start","")+t+Ne+"grid-row-span:"+(~Sl(n,"span",0)?Hn(n,/\d+/):+Hn(n,/\d+/)-+Hn(t,/\d+/))+";":Ne+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Hn(r.props,/grid-\w+-start/)})?t:Ne+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,xe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(t)-1-e>6)switch(ct(t,e+1)){case 109:if(ct(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Po+(ct(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Sl(t,"stretch",0)?__(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,h){return Ne+i+":"+s+h+(o?Ne+i+"-span:"+(l?u:+u-+s)+h:"")+t});case 4949:if(ct(t,e+6)===121)return le(t,":",":"+xe)+t;break;case 6444:switch(ct(t,ct(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(ct(t,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Ne+"$2box$3")+t;case 100:return le(t,":",":"+Ne)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function cu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function GC(t,e,n,r){switch(t.type){case OC:if(t.children.length)break;case VC:case hp:return t.return=t.return||t.value;case f_:return"";case p_:return t.return=t.value+"{"+cu(t.children,r)+"}";case Qu:if(!bn(t.value=t.props.join(",")))return""}return bn(n=cu(t.children,r))?t.return=t.value+"{"+n+"}":""}function QC(t){var e=y_(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function YC(t){return function(e){e.root||(e=e.return)&&t(e)}}function XC(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case hp:t.return=__(t.value,t.length,n);return;case p_:return cu([cr(t,{value:le(t.value,"@","@"+xe)})],r);case Qu:if(t.length)return jC(n=t.props,function(i){switch(Hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(cr(t,{props:[le(i,/:(read-\w+)/,":"+Po+"$1")]})),Ni(cr(t,{props:[i]})),kd(t,{props:oy(n,r)});break;case"::placeholder":Ni(cr(t,{props:[le(i,/:(plac\w+)/,":"+xe+"input-$1")]})),Ni(cr(t,{props:[le(i,/:(plac\w+)/,":"+Po+"$1")]})),Ni(cr(t,{props:[le(i,/:(plac\w+)/,Ne+"input-$1")]})),Ni(cr(t,{props:[i]})),kd(t,{props:oy(n,r)});break}return""})}}var JC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},gs=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",w_="active",E_="data-styled-version",Zu="6.1.12",fp=`/*!sc*/
`,hu=typeof window<"u"&&"HTMLElement"in window,ZC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),ec=Object.freeze([]),ys=Object.freeze({});function e2(t,e,n){return n===void 0&&(n=ys),t.theme!==n.theme&&t.theme||e||n.theme}var x_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n2=/(^-|-$)/g;function uy(t){return t.replace(t2,"-").replace(n2,"")}var r2=/(a)(d)/gi,rl=52,cy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Dd(t){var e,n="";for(e=Math.abs(t);e>rl;e=e/rl|0)n=cy(e%rl)+n;return(cy(e%rl)+n).replace(r2,"$1-$2")}var dh,T_=5381,Qi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},S_=function(t){return Qi(T_,t)};function C_(t){return Dd(S_(t)>>>0)}function i2(t){return t.displayName||t.name||"Component"}function fh(t){return typeof t=="string"&&!0}var A_=typeof Symbol=="function"&&Symbol.for,I_=A_?Symbol.for("react.memo"):60115,s2=A_?Symbol.for("react.forward_ref"):60112,o2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l2=((dh={})[s2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dh[I_]=R_,dh);function hy(t){return("type"in(e=t)&&e.type.$$typeof)===I_?R_:"$$typeof"in t?l2[t.$$typeof]:o2;var e}var u2=Object.defineProperty,c2=Object.getOwnPropertyNames,dy=Object.getOwnPropertySymbols,h2=Object.getOwnPropertyDescriptor,d2=Object.getPrototypeOf,fy=Object.prototype;function P_(t,e,n){if(typeof e!="string"){if(fy){var r=d2(e);r&&r!==fy&&P_(t,r,n)}var i=c2(e);dy&&(i=i.concat(dy(e)));for(var s=hy(t),o=hy(e),l=0;l<i.length;++l){var u=i[l];if(!(u in a2||n&&n[u]||o&&u in o||s&&u in s)){var h=h2(e,u);try{u2(t,u,h)}catch{}}}}return t}function vs(t){return typeof t=="function"}function pp(t){return typeof t=="object"&&"styledComponentId"in t}function Xr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Vd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ta(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Od(t,e,n){if(n===void 0&&(n=!1),!n&&!ta(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Od(t[r],e[r]);else if(ta(e))for(var r in e)t[r]=Od(t[r],e[r]);return t}function mp(t,e){Object.defineProperty(t,"toString",{value:e})}function ma(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var f2=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ma(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(fp);return n},t}(),Il=new Map,du=new Map,Rl=1,il=function(t){if(Il.has(t))return Il.get(t);for(;du.has(Rl);)Rl++;var e=Rl++;return Il.set(t,e),du.set(e,t),e},p2=function(t,e){Rl=e+1,Il.set(t,e),du.set(e,t)},m2="style[".concat(gs,"][").concat(E_,'="').concat(Zu,'"]'),g2=new RegExp("^".concat(gs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),y2=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},v2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(fp),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(g2);if(u){var h=0|parseInt(u[1],10),d=u[2];h!==0&&(p2(d,h),y2(t,d,u[3]),t.getTag().insertRules(h,i)),i.length=0}else i.push(l)}}},py=function(t){for(var e=document.querySelectorAll(m2),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(gs)!==w_&&(v2(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function _2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var k_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(gs,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(gs,w_),r.setAttribute(E_,Zu);var o=_2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},w2=function(){function t(e){this.element=k_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ma(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),E2=function(){function t(e){this.element=k_(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),x2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),my=hu,T2={isServer:!hu,useCSSOMInjection:!ZC},b_=function(){function t(e,n,r){e===void 0&&(e=ys),n===void 0&&(n={});var i=this;this.options=$t($t({},T2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&hu&&my&&(my=!1,py(this)),mp(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",h=function(p){var m=function(w){return du.get(w)}(p);if(m===void 0)return"continue";var T=s.names.get(m),A=o.getGroup(p);if(T===void 0||!T.size||A.length===0)return"continue";var k="".concat(gs,".g").concat(p,'[id="').concat(m,'"]'),R="";T!==void 0&&T.forEach(function(w){w.length>0&&(R+="".concat(w,","))}),u+="".concat(A).concat(k,'{content:"').concat(R,'"}').concat(fp)},d=0;d<l;d++)h(d);return u}(i)})}return t.registerId=function(e){return il(e)},t.prototype.rehydrate=function(){!this.server&&hu&&py(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t($t($t({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new x2(i):r?new w2(i):new E2(i)}(this.options),new f2(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(il(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(il(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(il(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),S2=/&/g,C2=/^\s*\/\/.*$/gm;function N_(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=N_(n.children,e)),n})}function A2(t){var e,n,r,i=t===void 0?ys:t,s=i.options,o=s===void 0?ys:s,l=i.plugins,u=l===void 0?ec:l,h=function(m,T,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Qu&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(S2,n).replace(r,h))}),o.prefix&&d.push(XC),d.push(GC);var p=function(m,T,A,k){T===void 0&&(T=""),A===void 0&&(A=""),k===void 0&&(k="&"),e=k,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(C2,""),w=WC(A||T?"".concat(A," ").concat(T," { ").concat(R," }"):R);o.namespace&&(w=N_(w,o.namespace));var y=[];return cu(w,QC(d.concat(YC(function(_){return y.push(_)})))),y};return p.hash=u.length?u.reduce(function(m,T){return T.name||ma(15),Qi(m,T.name)},T_).toString():"",p}var I2=new b_,Ld=A2(),D_=Re.createContext({shouldForwardProp:void 0,styleSheet:I2,stylis:Ld});D_.Consumer;Re.createContext(void 0);function gy(){return z.useContext(D_)}var V_=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ld);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,mp(this,function(){throw ma(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ld),this.name+e.hash},t}(),R2=function(t){return t>="A"&&t<="Z"};function yy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;R2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var O_=function(t){return t==null||t===!1||t===""},L_=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!O_(s)&&(Array.isArray(s)&&s.isCss||vs(s)?r.push("".concat(yy(i),":"),s,";"):ta(s)?r.push.apply(r,ea(ea(["".concat(i," {")],L_(s),!1),["}"],!1)):r.push("".concat(yy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in JC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ii(t,e,n,r){if(O_(t))return[];if(pp(t))return[".".concat(t.styledComponentId)];if(vs(t)){if(!vs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ii(i,e,n,r)}var s;return t instanceof V_?n?(t.inject(n,r),[t.getName(r)]):[t]:ta(t)?L_(t):Array.isArray(t)?Array.prototype.concat.apply(ec,t.map(function(o){return ii(o,e,n,r)})):[t.toString()]}function P2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(vs(n)&&!pp(n))return!1}return!0}var k2=S_(Zu),b2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&P2(e),this.componentId=n,this.baseHash=Qi(k2,n),this.baseStyle=r,b_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Xr(i,this.staticRulesId);else{var s=Vd(ii(this.rules,e,n,r)),o=Dd(Qi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Xr(i,o),this.staticRulesId=o}else{for(var u=Qi(this.baseHash,r.hash),h="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var m=Vd(ii(p,e,n,r));u=Qi(u,m+d),h+=m}}if(h){var T=Dd(u>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(h,".".concat(T),void 0,this.componentId)),i=Xr(i,T)}}return i},t}(),j_=Re.createContext(void 0);j_.Consumer;var ph={};function N2(t,e,n){var r=pp(t),i=t,s=!fh(t),o=e.attrs,l=o===void 0?ec:o,u=e.componentId,h=u===void 0?function(D,F){var U=typeof D!="string"?"sc":uy(D);ph[U]=(ph[U]||0)+1;var E="".concat(U,"-").concat(C_(Zu+U+ph[U]));return F?"".concat(F,"-").concat(E):E}(e.displayName,e.parentComponentId):u,d=e.displayName,p=d===void 0?function(D){return fh(D)?"styled.".concat(D):"Styled(".concat(i2(D),")")}(t):d,m=e.displayName&&e.componentId?"".concat(uy(e.displayName),"-").concat(e.componentId):e.componentId||h,T=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,A=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;A=function(D,F){return k(D,F)&&R(D,F)}}else A=k}var w=new b2(n,m,r?i.componentStyle:void 0);function y(D,F){return function(U,E,v){var C=U.attrs,I=U.componentStyle,N=U.defaultProps,b=U.foldedComponentIds,S=U.styledComponentId,he=U.target,Ce=Re.useContext(j_),et=gy(),Ae=U.shouldForwardProp||et.shouldForwardProp,K=e2(E,Ce,N)||ys,Z=function(wt,tt,at){for(var fn,tn=$t($t({},tt),{className:void 0,theme:at}),Rn=0;Rn<wt.length;Rn+=1){var nn=vs(fn=wt[Rn])?fn(tn):fn;for(var jt in nn)tn[jt]=jt==="className"?Xr(tn[jt],nn[jt]):jt==="style"?$t($t({},tn[jt]),nn[jt]):nn[jt]}return tt.className&&(tn.className=Xr(tn.className,tt.className)),tn}(C,E,K),ne=Z.as||he,ve={};for(var ue in Z)Z[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&Z.theme===K||(ue==="forwardedAs"?ve.as=Z.forwardedAs:Ae&&!Ae(ue,ne)||(ve[ue]=Z[ue]));var Ie=function(wt,tt){var at=gy(),fn=wt.generateAndInjectStyles(tt,at.styleSheet,at.stylis);return fn}(I,Z),_t=Xr(b,S);return Ie&&(_t+=" "+Ie),Z.className&&(_t+=" "+Z.className),ve[fh(ne)&&!x_.has(ne)?"class":"className"]=_t,ve.ref=v,z.createElement(ne,ve)}(_,D,F)}y.displayName=p;var _=Re.forwardRef(y);return _.attrs=T,_.componentStyle=w,_.displayName=p,_.shouldForwardProp=A,_.foldedComponentIds=r?Xr(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=m,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(F){for(var U=[],E=1;E<arguments.length;E++)U[E-1]=arguments[E];for(var v=0,C=U;v<C.length;v++)Od(F,C[v],!0);return F}({},i.defaultProps,D):D}}),mp(_,function(){return".".concat(_.styledComponentId)}),s&&P_(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function vy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var _y=function(t){return Object.assign(t,{isCss:!0})};function F_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(vs(t)||ta(t))return _y(ii(vy(ec,ea([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ii(r):_y(ii(vy(r,e)))}function jd(t,e,n){if(n===void 0&&(n=ys),!e)throw ma(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,F_.apply(void 0,ea([i],s,!1)))};return r.attrs=function(i){return jd(t,e,$t($t({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return jd(t,e,$t($t({},n),i))},r}var M_=function(t){return jd(N2,t)},$=M_;x_.forEach(function(t){$[t]=M_(t)});function D2(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Vd(F_.apply(void 0,ea([t],e,!1))),i=C_(r);return new V_(i,r)}const V2="modulepreload",O2=function(t){return"https://LucasRenatoMelgaRios.github.io/PaginaPrueba/"+t},wy={},L2=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(u=>{if(u=O2(u),u in wy)return;wy[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let T=s.length-1;T>=0;T--){const A=s[T];if(A.href===u&&(!h||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":V2,h||(m.as="script",m.crossOrigin=""),m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((T,A)=>{m.addEventListener("load",T),m.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function U_(t,e){return function(){return t.apply(e,arguments)}}const{toString:j2}=Object.prototype,{getPrototypeOf:gp}=Object,tc=(t=>e=>{const n=j2.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),In=t=>(t=t.toLowerCase(),e=>tc(e)===t),nc=t=>e=>typeof e===t,{isArray:Ps}=Array,na=nc("undefined");function F2(t){return t!==null&&!na(t)&&t.constructor!==null&&!na(t.constructor)&&Xt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const $_=In("ArrayBuffer");function M2(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$_(t.buffer),e}const U2=nc("string"),Xt=nc("function"),B_=nc("number"),rc=t=>t!==null&&typeof t=="object",$2=t=>t===!0||t===!1,Pl=t=>{if(tc(t)!=="object")return!1;const e=gp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},B2=In("Date"),z2=In("File"),q2=In("Blob"),H2=In("FileList"),W2=t=>rc(t)&&Xt(t.pipe),K2=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Xt(t.append)&&((e=tc(t))==="formdata"||e==="object"&&Xt(t.toString)&&t.toString()==="[object FormData]"))},G2=In("URLSearchParams"),[Q2,Y2,X2,J2]=["ReadableStream","Request","Response","Headers"].map(In),Z2=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ga(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Ps(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function z_(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,q_=t=>!na(t)&&t!==Jr;function Fd(){const{caseless:t}=q_(this)&&this||{},e={},n=(r,i)=>{const s=t&&z_(e,i)||i;Pl(e[s])&&Pl(r)?e[s]=Fd(e[s],r):Pl(r)?e[s]=Fd({},r):Ps(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ga(arguments[r],n);return e}const eA=(t,e,n,{allOwnKeys:r}={})=>(ga(e,(i,s)=>{n&&Xt(i)?t[s]=U_(i,n):t[s]=i},{allOwnKeys:r}),t),tA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),nA=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rA=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&gp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},iA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},sA=t=>{if(!t)return null;if(Ps(t))return t;let e=t.length;if(!B_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},oA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&gp(Uint8Array)),aA=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},lA=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},uA=In("HTMLFormElement"),cA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ey=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),hA=In("RegExp"),H_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ga(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},dA=t=>{H_(t,(e,n)=>{if(Xt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Xt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fA=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Ps(t)?r(t):r(String(t).split(e)),n},pA=()=>{},mA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,mh="abcdefghijklmnopqrstuvwxyz",xy="0123456789",W_={DIGIT:xy,ALPHA:mh,ALPHA_DIGIT:mh+mh.toUpperCase()+xy},gA=(t=16,e=W_.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function yA(t){return!!(t&&Xt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const vA=t=>{const e=new Array(10),n=(r,i)=>{if(rc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Ps(r)?[]:{};return ga(r,(o,l)=>{const u=n(o,i+1);!na(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},_A=In("AsyncFunction"),wA=t=>t&&(rc(t)||Xt(t))&&Xt(t.then)&&Xt(t.catch),K_=((t,e)=>t?setImmediate:e?((n,r)=>(Jr.addEventListener("message",({source:i,data:s})=>{i===Jr&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Jr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Xt(Jr.postMessage)),EA=typeof queueMicrotask<"u"?queueMicrotask.bind(Jr):typeof process<"u"&&process.nextTick||K_,j={isArray:Ps,isArrayBuffer:$_,isBuffer:F2,isFormData:K2,isArrayBufferView:M2,isString:U2,isNumber:B_,isBoolean:$2,isObject:rc,isPlainObject:Pl,isReadableStream:Q2,isRequest:Y2,isResponse:X2,isHeaders:J2,isUndefined:na,isDate:B2,isFile:z2,isBlob:q2,isRegExp:hA,isFunction:Xt,isStream:W2,isURLSearchParams:G2,isTypedArray:oA,isFileList:H2,forEach:ga,merge:Fd,extend:eA,trim:Z2,stripBOM:tA,inherits:nA,toFlatObject:rA,kindOf:tc,kindOfTest:In,endsWith:iA,toArray:sA,forEachEntry:aA,matchAll:lA,isHTMLForm:uA,hasOwnProperty:Ey,hasOwnProp:Ey,reduceDescriptors:H_,freezeMethods:dA,toObjectSet:fA,toCamelCase:cA,noop:pA,toFiniteNumber:mA,findKey:z_,global:Jr,isContextDefined:q_,ALPHABET:W_,generateString:gA,isSpecCompliantForm:yA,toJSONObject:vA,isAsyncFn:_A,isThenable:wA,setImmediate:K_,asap:EA};function oe(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const G_=oe.prototype,Q_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Q_[t]={value:t}});Object.defineProperties(oe,Q_);Object.defineProperty(G_,"isAxiosError",{value:!0});oe.from=(t,e,n,r,i,s)=>{const o=Object.create(G_);return j.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),oe.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const xA=null;function Md(t){return j.isPlainObject(t)||j.isArray(t)}function Y_(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function Ty(t,e,n){return t?t.concat(e).map(function(i,s){return i=Y_(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function TA(t){return j.isArray(t)&&!t.some(Md)}const SA=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function ic(t,e,n){if(!j.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,R){return!j.isUndefined(R[k])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(e);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function h(A){if(A===null)return"";if(j.isDate(A))return A.toISOString();if(!u&&j.isBlob(A))throw new oe("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(A)||j.isTypedArray(A)?u&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function d(A,k,R){let w=A;if(A&&!R&&typeof A=="object"){if(j.endsWith(k,"{}"))k=r?k:k.slice(0,-2),A=JSON.stringify(A);else if(j.isArray(A)&&TA(A)||(j.isFileList(A)||j.endsWith(k,"[]"))&&(w=j.toArray(A)))return k=Y_(k),w.forEach(function(_,D){!(j.isUndefined(_)||_===null)&&e.append(o===!0?Ty([k],D,s):o===null?k:k+"[]",h(_))}),!1}return Md(A)?!0:(e.append(Ty(R,k,s),h(A)),!1)}const p=[],m=Object.assign(SA,{defaultVisitor:d,convertValue:h,isVisitable:Md});function T(A,k){if(!j.isUndefined(A)){if(p.indexOf(A)!==-1)throw Error("Circular reference detected in "+k.join("."));p.push(A),j.forEach(A,function(w,y){(!(j.isUndefined(w)||w===null)&&i.call(e,w,j.isString(y)?y.trim():y,k,m))===!0&&T(w,k?k.concat(y):[y])}),p.pop()}}if(!j.isObject(t))throw new TypeError("data must be an object");return T(t),e}function Sy(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function yp(t,e){this._pairs=[],t&&ic(t,this,e)}const X_=yp.prototype;X_.append=function(e,n){this._pairs.push([e,n])};X_.toString=function(e){const n=e?function(r){return e.call(this,r,Sy)}:Sy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function CA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function J_(t,e,n){if(!e)return t;const r=n&&n.encode||CA,i=n&&n.serialize;let s;if(i?s=i(e,n):s=j.isURLSearchParams(e)?e.toString():new yp(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Cy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Z_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},AA=typeof URLSearchParams<"u"?URLSearchParams:yp,IA=typeof FormData<"u"?FormData:null,RA=typeof Blob<"u"?Blob:null,PA={isBrowser:!0,classes:{URLSearchParams:AA,FormData:IA,Blob:RA},protocols:["http","https","file","blob","url","data"]},vp=typeof window<"u"&&typeof document<"u",kA=(t=>vp&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),bA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",NA=vp&&window.location.href||"http://localhost",DA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vp,hasStandardBrowserEnv:kA,hasStandardBrowserWebWorkerEnv:bA,origin:NA},Symbol.toStringTag,{value:"Module"})),Sn={...DA,...PA};function VA(t,e){return ic(t,new Sn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Sn.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function OA(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function LA(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function ew(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&j.isArray(i)?i.length:o,u?(j.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!j.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&j.isArray(i[o])&&(i[o]=LA(i[o])),!l)}if(j.isFormData(t)&&j.isFunction(t.entries)){const n={};return j.forEachEntry(t,(r,i)=>{e(OA(r),i,n,0)}),n}return null}function jA(t,e,n){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const _p={transitional:Z_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=j.isObject(e);if(s&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return i?JSON.stringify(ew(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)||j.isReadableStream(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VA(e,this.formSerializer).toString();if((l=j.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ic(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),jA(e)):e}],transformResponse:[function(e){const n=this.transitional||_p.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(j.isResponse(e)||j.isReadableStream(e))return e;if(e&&j.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?oe.from(l,oe.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Sn.classes.FormData,Blob:Sn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],t=>{_p.headers[t]={}});const wp=_p,FA=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MA=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&FA[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ay=Symbol("internals");function ro(t){return t&&String(t).trim().toLowerCase()}function kl(t){return t===!1||t==null?t:j.isArray(t)?t.map(kl):String(t)}function UA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const $A=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gh(t,e,n,r,i){if(j.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!j.isString(e)){if(j.isString(r))return e.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(e)}}function BA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function zA(t,e){const n=j.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class sc{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,h){const d=ro(u);if(!d)throw new Error("header name must be a non-empty string");const p=j.findKey(i,d);(!p||i[p]===void 0||h===!0||h===void 0&&i[p]!==!1)&&(i[p||u]=kl(l))}const o=(l,u)=>j.forEach(l,(h,d)=>s(h,d,u));if(j.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(j.isString(e)&&(e=e.trim())&&!$A(e))o(MA(e),n);else if(j.isHeaders(e))for(const[l,u]of e.entries())s(u,l,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ro(e),e){const r=j.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return UA(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ro(e),e){const r=j.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gh(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ro(o),o){const l=j.findKey(r,o);l&&(!n||gh(r,r[l],l,n))&&(delete r[l],i=!0)}}return j.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||gh(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return j.forEach(this,(i,s)=>{const o=j.findKey(r,s);if(o){n[o]=kl(i),delete n[s];return}const l=e?BA(s):String(s).trim();l!==s&&delete n[s],n[l]=kl(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Ay]=this[Ay]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=ro(o);r[l]||(zA(i,o),r[l]=!0)}return j.isArray(e)?e.forEach(s):s(e),this}}sc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(sc.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});j.freezeMethods(sc);const Cn=sc;function yh(t,e){const n=this||wp,r=e||n,i=Cn.from(r.headers);let s=r.data;return j.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function tw(t){return!!(t&&t.__CANCEL__)}function ks(t,e,n){oe.call(this,t??"canceled",oe.ERR_CANCELED,e,n),this.name="CanceledError"}j.inherits(ks,oe,{__CANCEL__:!0});function nw(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function qA(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function HA(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const h=Date.now(),d=r[s];o||(o=h),n[i]=u,r[i]=h;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),h-o<e)return;const T=d&&h-d;return T?Math.round(m*1e3/T):void 0}}function WA(t,e){let n=0,r=1e3/e,i,s;const o=(h,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,h)};return[(...h)=>{const d=Date.now(),p=d-n;p>=r?o(h,d):(i=h,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const fu=(t,e,n=3)=>{let r=0;const i=HA(50,250);return WA(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,u=o-r,h=i(u),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:h||void 0,estimated:h&&l&&d?(l-o)/h:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Iy=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ry=t=>(...e)=>j.asap(()=>t(...e)),KA=Sn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=j.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),GA=Sn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];j.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),j.isString(r)&&o.push("path="+r),j.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QA(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function YA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function rw(t,e){return t&&!QA(e)?YA(t,e):e}const Py=t=>t instanceof Cn?{...t}:t;function fi(t,e){e=e||{};const n={};function r(h,d,p){return j.isPlainObject(h)&&j.isPlainObject(d)?j.merge.call({caseless:p},h,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(h,d,p){if(j.isUndefined(d)){if(!j.isUndefined(h))return r(void 0,h,p)}else return r(h,d,p)}function s(h,d){if(!j.isUndefined(d))return r(void 0,d)}function o(h,d){if(j.isUndefined(d)){if(!j.isUndefined(h))return r(void 0,h)}else return r(void 0,d)}function l(h,d,p){if(p in e)return r(h,d);if(p in t)return r(void 0,h)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(h,d)=>i(Py(h),Py(d),!0)};return j.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,m=p(t[d],e[d],d);j.isUndefined(m)&&p!==l||(n[d]=m)}),n}const iw=t=>{const e=fi({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;e.headers=o=Cn.from(o),e.url=J_(rw(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(j.isFormData(n)){if(Sn.hasStandardBrowserEnv||Sn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[h,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([h||"multipart/form-data",...d].join("; "))}}if(Sn.hasStandardBrowserEnv&&(r&&j.isFunction(r)&&(r=r(e)),r||r!==!1&&KA(e.url))){const h=i&&s&&GA.read(s);h&&o.set(i,h)}return e},XA=typeof XMLHttpRequest<"u",JA=XA&&function(t){return new Promise(function(n,r){const i=iw(t);let s=i.data;const o=Cn.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:h}=i,d,p,m,T,A;function k(){T&&T(),A&&A(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let R=new XMLHttpRequest;R.open(i.method.toUpperCase(),i.url,!0),R.timeout=i.timeout;function w(){if(!R)return;const _=Cn.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),F={data:!l||l==="text"||l==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:_,config:t,request:R};nw(function(E){n(E),k()},function(E){r(E),k()},F),R=null}"onloadend"in R?R.onloadend=w:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(w)},R.onabort=function(){R&&(r(new oe("Request aborted",oe.ECONNABORTED,t,R)),R=null)},R.onerror=function(){r(new oe("Network Error",oe.ERR_NETWORK,t,R)),R=null},R.ontimeout=function(){let D=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const F=i.transitional||Z_;i.timeoutErrorMessage&&(D=i.timeoutErrorMessage),r(new oe(D,F.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,t,R)),R=null},s===void 0&&o.setContentType(null),"setRequestHeader"in R&&j.forEach(o.toJSON(),function(D,F){R.setRequestHeader(F,D)}),j.isUndefined(i.withCredentials)||(R.withCredentials=!!i.withCredentials),l&&l!=="json"&&(R.responseType=i.responseType),h&&([m,A]=fu(h,!0),R.addEventListener("progress",m)),u&&R.upload&&([p,T]=fu(u),R.upload.addEventListener("progress",p),R.upload.addEventListener("loadend",T)),(i.cancelToken||i.signal)&&(d=_=>{R&&(r(!_||_.type?new ks(null,t,R):_),R.abort(),R=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const y=qA(i.url);if(y&&Sn.protocols.indexOf(y)===-1){r(new oe("Unsupported protocol "+y+":",oe.ERR_BAD_REQUEST,t));return}R.send(s||null)})},ZA=(t,e)=>{let n=new AbortController,r;const i=function(u){if(!r){r=!0,o();const h=u instanceof Error?u:this.reason;n.abort(h instanceof oe?h:new ks(h instanceof Error?h.message:h))}};let s=e&&setTimeout(()=>{i(new oe(`timeout ${e} of ms exceeded`,oe.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",i):u.unsubscribe(i))}),t=null)};t.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=o,[l,()=>{s&&clearTimeout(s),s=null}]},eI=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},tI=async function*(t,e,n){for await(const r of t)yield*eI(ArrayBuffer.isView(r)?r:await n(String(r)),e)},ky=(t,e,n,r,i)=>{const s=tI(t,e,i);let o=0,l,u=h=>{l||(l=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:d,value:p}=await s.next();if(d){u(),h.close();return}let m=p.byteLength;if(n){let T=o+=m;n(T)}h.enqueue(new Uint8Array(p))}catch(d){throw u(d),d}},cancel(h){return u(h),s.return()}},{highWaterMark:2})},oc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",sw=oc&&typeof ReadableStream=="function",Ud=oc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),ow=(t,...e)=>{try{return!!t(...e)}catch{return!1}},nI=sw&&ow(()=>{let t=!1;const e=new Request(Sn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),by=64*1024,$d=sw&&ow(()=>j.isReadableStream(new Response("").body)),pu={stream:$d&&(t=>t.body)};oc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!pu[e]&&(pu[e]=j.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new oe(`Response type '${e}' is not supported`,oe.ERR_NOT_SUPPORT,r)})})})(new Response);const rI=async t=>{if(t==null)return 0;if(j.isBlob(t))return t.size;if(j.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(j.isArrayBufferView(t)||j.isArrayBuffer(t))return t.byteLength;if(j.isURLSearchParams(t)&&(t=t+""),j.isString(t))return(await Ud(t)).byteLength},iI=async(t,e)=>{const n=j.toFiniteNumber(t.getContentLength());return n??rI(e)},sI=oc&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:l,onUploadProgress:u,responseType:h,headers:d,withCredentials:p="same-origin",fetchOptions:m}=iw(t);h=h?(h+"").toLowerCase():"text";let[T,A]=i||s||o?ZA([i,s],o):[],k,R;const w=()=>{!k&&setTimeout(()=>{T&&T.unsubscribe()}),k=!0};let y;try{if(u&&nI&&n!=="get"&&n!=="head"&&(y=await iI(d,r))!==0){let U=new Request(e,{method:"POST",body:r,duplex:"half"}),E;if(j.isFormData(r)&&(E=U.headers.get("content-type"))&&d.setContentType(E),U.body){const[v,C]=Iy(y,fu(Ry(u)));r=ky(U.body,by,v,C,Ud)}}j.isString(p)||(p=p?"include":"omit"),R=new Request(e,{...m,signal:T,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:p});let _=await fetch(R);const D=$d&&(h==="stream"||h==="response");if($d&&(l||D)){const U={};["status","statusText","headers"].forEach(I=>{U[I]=_[I]});const E=j.toFiniteNumber(_.headers.get("content-length")),[v,C]=l&&Iy(E,fu(Ry(l),!0))||[];_=new Response(ky(_.body,by,v,()=>{C&&C(),D&&w()},Ud),U)}h=h||"text";let F=await pu[j.findKey(pu,h)||"text"](_,t);return!D&&w(),A&&A(),await new Promise((U,E)=>{nw(U,E,{data:F,headers:Cn.from(_.headers),status:_.status,statusText:_.statusText,config:t,request:R})})}catch(_){throw w(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,t,R),{cause:_.cause||_}):oe.from(_,_&&_.code,t,R)}}),Bd={http:xA,xhr:JA,fetch:sI};j.forEach(Bd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ny=t=>`- ${t}`,oI=t=>j.isFunction(t)||t===null||t===!1,aw={getAdapter:t=>{t=j.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!oI(n)&&(r=Bd[(o=String(n)).toLowerCase()],r===void 0))throw new oe(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ny).join(`
`):" "+Ny(s[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Bd};function vh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ks(null,t)}function Dy(t){return vh(t),t.headers=Cn.from(t.headers),t.data=yh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),aw.getAdapter(t.adapter||wp.adapter)(t).then(function(r){return vh(t),r.data=yh.call(t,t.transformResponse,r),r.headers=Cn.from(r.headers),r},function(r){return tw(r)||(vh(t),r&&r.response&&(r.response.data=yh.call(t,t.transformResponse,r.response),r.response.headers=Cn.from(r.response.headers))),Promise.reject(r)})}const lw="1.7.4",Ep={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ep[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Vy={};Ep.transitional=function(e,n,r){function i(s,o){return"[Axios v"+lw+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new oe(i(o," has been removed"+(n?" in "+n:"")),oe.ERR_DEPRECATED);return n&&!Vy[o]&&(Vy[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function aI(t,e,n){if(typeof t!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new oe("option "+s+" must be "+u,oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new oe("Unknown option "+s,oe.ERR_BAD_OPTION)}}const zd={assertOptions:aI,validators:Ep},ur=zd.validators;class mu{constructor(e){this.defaults=e,this.interceptors={request:new Cy,response:new Cy}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=fi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&zd.assertOptions(r,{silentJSONParsing:ur.transitional(ur.boolean),forcedJSONParsing:ur.transitional(ur.boolean),clarifyTimeoutError:ur.transitional(ur.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:zd.assertOptions(i,{encode:ur.function,serialize:ur.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],A=>{delete s[A]}),n.headers=Cn.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(u=u&&k.synchronous,l.unshift(k.fulfilled,k.rejected))});const h=[];this.interceptors.response.forEach(function(k){h.push(k.fulfilled,k.rejected)});let d,p=0,m;if(!u){const A=[Dy.bind(this),void 0];for(A.unshift.apply(A,l),A.push.apply(A,h),m=A.length,d=Promise.resolve(n);p<m;)d=d.then(A[p++],A[p++]);return d}m=l.length;let T=n;for(p=0;p<m;){const A=l[p++],k=l[p++];try{T=A(T)}catch(R){k.call(this,R);break}}try{d=Dy.call(this,T)}catch(A){return Promise.reject(A)}for(p=0,m=h.length;p<m;)d=d.then(h[p++],h[p++]);return d}getUri(e){e=fi(this.defaults,e);const n=rw(e.baseURL,e.url);return J_(n,e.params,e.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(e){mu.prototype[e]=function(n,r){return this.request(fi(r||{},{method:e,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(fi(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}mu.prototype[e]=n(),mu.prototype[e+"Form"]=n(!0)});const bl=mu;class xp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new ks(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new xp(function(i){e=i}),cancel:e}}}const lI=xp;function uI(t){return function(n){return t.apply(null,n)}}function cI(t){return j.isObject(t)&&t.isAxiosError===!0}const qd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qd).forEach(([t,e])=>{qd[e]=t});const hI=qd;function uw(t){const e=new bl(t),n=U_(bl.prototype.request,e);return j.extend(n,bl.prototype,e,{allOwnKeys:!0}),j.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return uw(fi(t,i))},n}const Ge=uw(wp);Ge.Axios=bl;Ge.CanceledError=ks;Ge.CancelToken=lI;Ge.isCancel=tw;Ge.VERSION=lw;Ge.toFormData=ic;Ge.AxiosError=oe;Ge.Cancel=Ge.CanceledError;Ge.all=function(e){return Promise.all(e)};Ge.spread=uI;Ge.isAxiosError=cI;Ge.mergeConfig=fi;Ge.AxiosHeaders=Cn;Ge.formToJSON=t=>ew(j.isHTMLForm(t)?new FormData(t):t);Ge.getAdapter=aw.getAdapter;Ge.HttpStatusCode=hI;Ge.default=Ge;const dI=async()=>{try{const t=await Ge.get("https://66abe0b7f009b9d5c7309922.mockapi.io/api/v1/series",{headers:{"Content-Type":"application/json"}});return console.log("listando series"),t.data}catch(t){throw console.error("Error deleting data:",t),t}};var cw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Oy=Re.createContext&&Re.createContext(cw),fI=["attr","size","title"];function pI(t,e){if(t==null)return{};var n=mI(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function mI(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}function Ly(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function yu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ly(Object(n),!0).forEach(function(r){gI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gI(t,e,n){return e=yI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yI(t){var e=vI(t,"string");return typeof e=="symbol"?e:e+""}function vI(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hw(t){return t&&t.map((e,n)=>Re.createElement(e.tag,yu({key:n},e.attr),hw(e.child)))}function dn(t){return e=>Re.createElement(_I,gu({attr:yu({},t.attr)},e),hw(t.child))}function _I(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=pI(t,fI),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Re.createElement("svg",gu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:yu(yu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Re.createElement("title",null,s),t.children)};return Oy!==void 0?Re.createElement(Oy.Consumer,null,n=>e(n)):e(cw)}function wI(t){return dn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"},child:[]},{tag:"path",attr:{d:"M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"},child:[]}]})(t)}function EI(t){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(t)}function xI(t){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(t)}const ya=({itemsPerPage:t,totalItems:e,paginate:n,currentPage:r})=>{const i=[],s=Math.ceil(e/t),o=2;for(let p=1;p<=s;p++)i.push(p);const u=(()=>{if(s<=5)return i;const p=Math.max(r-o,1),m=Math.min(r+o,s);let T=i.slice(p-1,m);return p>1&&(T=[1,"..."].concat(T)),m<s&&(T=T.concat(["...",s])),T})(),h=()=>{window.scrollTo({top:0,behavior:"smooth"})},d=p=>{n(p),h()};return x.jsx(TI,{children:x.jsxs(SI,{children:[x.jsx(_h,{children:x.jsx("button",{onClick:()=>d(Math.max(r-1,1)),children:x.jsx(EI,{})})}),u.map((p,m)=>x.jsx(_h,{children:p==="..."?x.jsx("span",{className:"ellipsis",children:"..."}):x.jsx("button",{onClick:()=>d(p),className:p===r?"active":"",children:p})},m)),x.jsx(_h,{children:x.jsx("button",{onClick:()=>d(Math.min(r+1,s)),children:x.jsx(xI,{})})})]})})},TI=$.nav`
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  
    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  `,SI=$.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
  `,_h=$.li`
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(250, 250, 250);
      font-weight: 500;
      border-radius: 12px;
      padding: 10px;
      text-decoration: none;
      width: 2.4vw;
      height: 2.3vw;
      min-width: 35px;
      min-height: 35px;
      font-size: clamp(14px, 1.5vw, 18px);
      transition: background-color 0.3s;
      border: 1px solid #2b2727;
      cursor: pointer;
      background: none;
  
      &:hover {
        border: 1px solid #f5f5f5;
      }
  
      &.active {
        background-color: rgb(99, 102, 241); /* Color morado para la página activa */
      }
    }
  
    .ellipsis {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(100, 100, 100);
      padding: 10px;
      width: 2.4vw;
      height: 2.3vw;
      min-width: 35px;
      min-height: 35px;
      font-size: clamp(14px, 1.5vw, 18px);
      border-radius: 12px;
    }
  
    @media (max-width: 1600px) {
      button {
        font-size: clamp(14px, 2vw, 18px);
      }
    }
  `,CI=D2`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`,AI=$.div`
  width: 100%; /* Asegura que ocupa todo el contenedor del padre */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${CI} 1.5s infinite;
  border-radius: 1px;
`,II=()=>x.jsx(AI,{children:x.jsx("h3",{style:{color:"#888",fontSize:"1.2em"},children:"Loading..."})}),RI=z.lazy(()=>L2(()=>import("./LazyImage-BAHwzsc4.js"),[])),PI=({setSelectedSerie:t})=>{const[e,n]=z.useState([]),[r,i]=z.useState(1),s=15,o=rr();z.useEffect(()=>{(async()=>{const T=await dI();n(T)})()},[]);const l=r*s,u=l-s,h=e.slice(u,l),d=m=>i(m),p=m=>{t(m),o("/series-info")};return x.jsxs(kI,{children:[x.jsx(bI,{style:{fontSize:"clamp(14px, 1.6vw, 18px)",marginBottom:"20px"},children:"Nuevos capítulos"}),x.jsx(NI,{children:h.map(m=>x.jsxs(DI,{onClick:()=>p(m),children:[x.jsx(z.Suspense,{fallback:x.jsx(II,{}),children:x.jsx(RI,{src:m.imagen,alt:m.nombre})}),x.jsxs(VI,{children:[x.jsxs(jy,{children:[x.jsx(OI,{tipo:m.tipo,children:m.tipo}),x.jsx(LI,{children:m.nombre})]}),x.jsxs(jI,{children:["Capítulo ",m.capitulo]}),x.jsxs(jy,{children:[x.jsx(wI,{}),x.jsx(FI,{children:m.subido_hace})]})]})]},m.id))}),x.jsx(ya,{itemsPerPage:s,totalItems:e.length,paginate:d,currentPage:r})]})},kI=$.main`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,bI=$.h1`
    margin-bottom: 20px;
    font-size: clamp(14px, 1.5vw, 18px);
    padding-left: 20px;
`,jy=$.div`
  display: flex;
  gap: 6px;
`,NI=$.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
  gap: 20px; /* Espacio entre los elementos del grid */
  padding: 20px;

  @media (max-width: 868px) {
    grid-template-columns: 1fr; /* Una columna en pantallas más pequeñas */
  }
`,DI=$.div`
  background-color: #161616;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  max-height: 128px;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #3f3b3b;
  min-width: 322px;

  &:hover {
    border: 1px solid #ffff;
  }
`,VI=$.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1; /* Asegura que use todo el espacio disponible en el contenedor padre */
  overflow: hidden; /* Asegura que el contenido adicional se oculte */
`,OI=$.span`
  display: inline-block;
  background-color: ${({tipo:t})=>t==="Cómic"?"rgb(14, 165, 233)":"rgb(98, 195, 112)"};
  color: #000000;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: 0.8em;
  margin-bottom: 8px;
  max-height: 20.34px;
`,LI=$.h2`
  font-size: 1em;
  margin: 0 0 5px;
  color: #afafaf;
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Esconde el texto que desborda */
  text-overflow: ellipsis; /* Aplica los puntos suspensivos */
  width: calc(100% - 60px); /* Ajusta el ancho para permitir espacio al Badge */
`,jI=$.div`
  font-size: clamp(14px, 1.5vw, 18px);
  color: #ffffff;
  font-weight: bold;
`,FI=$.div`
  font-size: 0.8em;
  color: #d4d4d4;
`,MI=$.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  margin-top: 20px;

  @media (max-width: 1024px) {
    height: 50vh; 
  }

  @media (max-width: 768px) {
    height: 40vh;
  }
`,UI=$.div`
  width: 100%;
  height: 100%;
  background-image: url(${t=>t.image});
  background-repeat: no-repeat;
  /* background-position: top -60px; */
  background-position: top -70px left 0px;

    background-size: cover; /* O prueba con contain según lo que necesites */
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${t=>t.isActive?1:0};
  transition: opacity 0.5s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 60%, /* Parte superior más transparente */
      rgba(0, 0, 0, 0.9) 100% /* Parte inferior más oscura */
    ),
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 70%, /* Lado derecho más transparente */
      rgba(0, 0, 0, 0.8) 100% /* Lado izquierdo más oscuro */
    );
  }
`,$I=$.div`
  position: absolute;
  left: 100px;
  bottom: 40%;
  color: white;
  z-index: 9;
  max-width: 40%;
  background-color: transparent;

  @media (max-width: 800px) {
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    text-align: center;
    max-width: 80%;
  }
`,BI=$.img`
  width: clamp(100px, 50%, 400px);
  max-width: 100%;
  height: auto;
`,zI=$.h1`
  font-size: clamp(5rem, 30vw, 50%);
  margin-bottom: 10px;
  background-color: transparent;

  @media (max-width: 800px) {
    font-size: clamp(3rem, 20vw, 30%);
  }
`,qI=$.p`
  font-size: clamp(1rem, 20vw, 30%);
  line-height: 1.5;
  background-color: transparent;

  @media (max-width: 800px) {
    font-size: clamp(0.8rem, 10vw, 20%);
  }
`,Fy=$.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 9;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${t=>t.direction==="left"?"left: 20px;":"right: 20px;"}
`,My=[{url:"https://imgsrv.crunchyroll.com/cdn-cgi/image/quality=100,width=1680,blur=0/cr/portrait_large/c6359707-2c91-4bce-8d43-3b14bf94bda4.png",title:"Título 1",description:"Descripción de la imagen 1.",logo:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/3f7c196e-9f68-4292-9173-0ae553077741.png"},{url:"https://anime-dandadan.com/_assets/images/top/fv/fv_003_pc.png?202406",title:"Título 2",description:"Descripción de la imagen 2.",logo:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/67a17a44-9ca2-419c-a761-5db1bb4e1b2d.png"},{url:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a72f74e160304530a2131fe8b765a3a5.jpg",title:"Crunchyroll Logo",description:"Descro",logo:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/67a17a44-9ca2-419c-a761-5db1bb4e1b2d.png"}],HI=()=>{const[t,e]=z.useState(0),n=My.length;z.useEffect(()=>{const s=setInterval(()=>{e(o=>(o+1)%n)},5e3);return()=>clearInterval(s)},[n]);const r=()=>{e(s=>(s+1)%n)},i=()=>{e(s=>s===0?n-1:s-1)};return x.jsxs(MI,{children:[My.map((s,o)=>x.jsxs("div",{children:[x.jsx(UI,{image:s.url,isActive:o===t}),o===t&&x.jsxs($I,{children:[s.logo?x.jsx(BI,{src:s.logo,alt:"Crunchyroll Logo"}):x.jsx(zI,{children:s.title}),x.jsx(qI,{children:s.description})]})]},o)),x.jsx(Fy,{direction:"left",onClick:i,children:"❮"}),x.jsx(Fy,{direction:"right",onClick:r,children:"❯"})]})},WI=({setSelectedSerie:t})=>x.jsxs(KI,{children:[x.jsx(HI,{}),x.jsx(PI,{setSelectedSerie:t})]}),KI=$.main`
  max-width: 100%;
  min-width: 100%;
`;var Uy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,T=h&63;u||(T=64,o||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new QI;const m=s<<2|l>>4;if(r.push(m),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const A=h<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YI=function(t){const e=dw(t);return fw.encodeByteArray(e,!0)},vu=function(t){return YI(t).replace(/\./g,"")},XI=function(t){try{return fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=()=>JI().__FIREBASE_DEFAULTS__,eR=()=>{if(typeof process>"u"||typeof Uy>"u")return;const t=Uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XI(t[1]);return e&&JSON.parse(e)},Tp=()=>{try{return ZI()||eR()||tR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nR=t=>{var e,n;return(n=(e=Tp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rR=t=>{const e=nR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pw=()=>{var t;return(t=Tp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aR(){var t;const e=(t=Tp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lR(){return!aR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uR(){try{return typeof indexedDB=="object"}catch{return!1}}function cR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="FirebaseError";class bs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hR,Object.setPrototypeOf(this,bs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mw.prototype.create)}}class mw{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bs(i,l,r)}}function dR(t,e){return t.replace(fR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fR=/\{\$([^}]+)}/g;function Hd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($y(s)&&$y(o)){if(!Hd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $y(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){return t&&t._delegate?t._delegate:t}class ra{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yR(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gR(t){return t===Kr?void 0:t}function yR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const _R={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},wR=me.INFO,ER={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},xR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ER[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gw{constructor(e){this.name=e,this._logLevel=wR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const TR=(t,e)=>e.some(n=>t instanceof n);let By,zy;function SR(){return By||(By=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CR(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yw=new WeakMap,Wd=new WeakMap,vw=new WeakMap,wh=new WeakMap,Sp=new WeakMap;function AR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yw.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function IR(t){if(Wd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wd.set(t,e)}let Kd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RR(t){Kd=t(Kd)}function PR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eh(this),e,...n);return vw.set(r,e.sort?e.sort():[e]),br(r)}:CR().includes(t)?function(...e){return t.apply(Eh(this),e),br(yw.get(this))}:function(...e){return br(t.apply(Eh(this),e))}}function kR(t){return typeof t=="function"?PR(t):(t instanceof IDBTransaction&&IR(t),TR(t,SR())?new Proxy(t,Kd):t)}function br(t){if(t instanceof IDBRequest)return AR(t);if(wh.has(t))return wh.get(t);const e=kR(t);return e!==t&&(wh.set(t,e),Sp.set(e,t)),e}const Eh=t=>Sp.get(t);function bR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const NR=["get","getKey","getAll","getAllKeys","count"],DR=["put","add","delete","clear"],xh=new Map;function qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return xh.set(e,s),s}RR(t=>({...t,get:(e,n,r)=>qy(e,n)||t.get(e,n,r),has:(e,n)=>!!qy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gd="@firebase/app",Hy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new gw("@firebase/app"),LR="@firebase/app-compat",jR="@firebase/analytics-compat",FR="@firebase/analytics",MR="@firebase/app-check-compat",UR="@firebase/app-check",$R="@firebase/auth",BR="@firebase/auth-compat",zR="@firebase/database",qR="@firebase/data-connect",HR="@firebase/database-compat",WR="@firebase/functions",KR="@firebase/functions-compat",GR="@firebase/installations",QR="@firebase/installations-compat",YR="@firebase/messaging",XR="@firebase/messaging-compat",JR="@firebase/performance",ZR="@firebase/performance-compat",eP="@firebase/remote-config",tP="@firebase/remote-config-compat",nP="@firebase/storage",rP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/vertexai-preview",oP="@firebase/firestore-compat",aP="firebase",lP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",uP={[Gd]:"fire-core",[LR]:"fire-core-compat",[FR]:"fire-analytics",[jR]:"fire-analytics-compat",[UR]:"fire-app-check",[MR]:"fire-app-check-compat",[$R]:"fire-auth",[BR]:"fire-auth-compat",[zR]:"fire-rtdb",[qR]:"fire-data-connect",[HR]:"fire-rtdb-compat",[WR]:"fire-fn",[KR]:"fire-fn-compat",[GR]:"fire-iid",[QR]:"fire-iid-compat",[YR]:"fire-fcm",[XR]:"fire-fcm-compat",[JR]:"fire-perf",[ZR]:"fire-perf-compat",[eP]:"fire-rc",[tP]:"fire-rc-compat",[nP]:"fire-gcs",[rP]:"fire-gcs-compat",[iP]:"fire-fst",[oP]:"fire-fst-compat",[sP]:"fire-vertex","fire-js":"fire-js",[aP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map,cP=new Map,Yd=new Map;function Wy(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wu(t){const e=t.name;if(Yd.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,t);for(const n of _u.values())Wy(n,t);for(const n of cP.values())Wy(n,t);return!0}function hP(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new mw("app","Firebase",dP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ra("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=lP;function _w(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=pw()),!n)throw Nr.create("no-options");const s=_u.get(i);if(s){if(Hd(n,s.options)&&Hd(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new vR(i);for(const u of Yd.values())o.addComponent(u);const l=new fP(n,r,o);return _u.set(i,l),l}function mP(t=Qd){const e=_u.get(t);if(!e&&t===Qd&&pw())return _w();if(!e)throw Nr.create("no-app",{appName:t});return e}function rs(t,e,n){var r;let i=(r=uP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}wu(new ra(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="firebase-heartbeat-database",yP=1,ia="firebase-heartbeat-store";let Th=null;function ww(){return Th||(Th=bR(gP,yP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Th}async function vP(t){try{const n=(await ww()).transaction(ia),r=await n.objectStore(ia).get(Ew(t));return await n.done,r}catch(e){if(e instanceof bs)er.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Ky(t,e){try{const r=(await ww()).transaction(ia,"readwrite");await r.objectStore(ia).put(e,Ew(t)),await r.done}catch(n){if(n instanceof bs)er.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function Ew(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=1024,wP=30*24*60*60*1e3;class EP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=wP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gy(),{heartbeatsToSend:r,unsentEntries:i}=xP(this._heartbeatsCache.heartbeats),s=vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function Gy(){return new Date().toISOString().substring(0,10)}function xP(t,e=_P){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uR()?cR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qy(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){wu(new ra("platform-logger",e=>new VR(e),"PRIVATE")),wu(new ra("heartbeat",e=>new EP(e),"PRIVATE")),rs(Gd,Hy,t),rs(Gd,Hy,"esm2017"),rs("fire-js","")}SP("");var Yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var si,xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function C(){}C.prototype=v.prototype,E.D=v.prototype,E.prototype=new C,E.prototype.constructor=E,E.C=function(I,N,b){for(var S=Array(arguments.length-2),he=2;he<arguments.length;he++)S[he-2]=arguments[he];return v.prototype[N].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,C){C||(C=0);var I=Array(16);if(typeof v=="string")for(var N=0;16>N;++N)I[N]=v.charCodeAt(C++)|v.charCodeAt(C++)<<8|v.charCodeAt(C++)<<16|v.charCodeAt(C++)<<24;else for(N=0;16>N;++N)I[N]=v[C++]|v[C++]<<8|v[C++]<<16|v[C++]<<24;v=E.g[0],C=E.g[1],N=E.g[2];var b=E.g[3],S=v+(b^C&(N^b))+I[0]+3614090360&4294967295;v=C+(S<<7&4294967295|S>>>25),S=b+(N^v&(C^N))+I[1]+3905402710&4294967295,b=v+(S<<12&4294967295|S>>>20),S=N+(C^b&(v^C))+I[2]+606105819&4294967295,N=b+(S<<17&4294967295|S>>>15),S=C+(v^N&(b^v))+I[3]+3250441966&4294967295,C=N+(S<<22&4294967295|S>>>10),S=v+(b^C&(N^b))+I[4]+4118548399&4294967295,v=C+(S<<7&4294967295|S>>>25),S=b+(N^v&(C^N))+I[5]+1200080426&4294967295,b=v+(S<<12&4294967295|S>>>20),S=N+(C^b&(v^C))+I[6]+2821735955&4294967295,N=b+(S<<17&4294967295|S>>>15),S=C+(v^N&(b^v))+I[7]+4249261313&4294967295,C=N+(S<<22&4294967295|S>>>10),S=v+(b^C&(N^b))+I[8]+1770035416&4294967295,v=C+(S<<7&4294967295|S>>>25),S=b+(N^v&(C^N))+I[9]+2336552879&4294967295,b=v+(S<<12&4294967295|S>>>20),S=N+(C^b&(v^C))+I[10]+4294925233&4294967295,N=b+(S<<17&4294967295|S>>>15),S=C+(v^N&(b^v))+I[11]+2304563134&4294967295,C=N+(S<<22&4294967295|S>>>10),S=v+(b^C&(N^b))+I[12]+1804603682&4294967295,v=C+(S<<7&4294967295|S>>>25),S=b+(N^v&(C^N))+I[13]+4254626195&4294967295,b=v+(S<<12&4294967295|S>>>20),S=N+(C^b&(v^C))+I[14]+2792965006&4294967295,N=b+(S<<17&4294967295|S>>>15),S=C+(v^N&(b^v))+I[15]+1236535329&4294967295,C=N+(S<<22&4294967295|S>>>10),S=v+(N^b&(C^N))+I[1]+4129170786&4294967295,v=C+(S<<5&4294967295|S>>>27),S=b+(C^N&(v^C))+I[6]+3225465664&4294967295,b=v+(S<<9&4294967295|S>>>23),S=N+(v^C&(b^v))+I[11]+643717713&4294967295,N=b+(S<<14&4294967295|S>>>18),S=C+(b^v&(N^b))+I[0]+3921069994&4294967295,C=N+(S<<20&4294967295|S>>>12),S=v+(N^b&(C^N))+I[5]+3593408605&4294967295,v=C+(S<<5&4294967295|S>>>27),S=b+(C^N&(v^C))+I[10]+38016083&4294967295,b=v+(S<<9&4294967295|S>>>23),S=N+(v^C&(b^v))+I[15]+3634488961&4294967295,N=b+(S<<14&4294967295|S>>>18),S=C+(b^v&(N^b))+I[4]+3889429448&4294967295,C=N+(S<<20&4294967295|S>>>12),S=v+(N^b&(C^N))+I[9]+568446438&4294967295,v=C+(S<<5&4294967295|S>>>27),S=b+(C^N&(v^C))+I[14]+3275163606&4294967295,b=v+(S<<9&4294967295|S>>>23),S=N+(v^C&(b^v))+I[3]+4107603335&4294967295,N=b+(S<<14&4294967295|S>>>18),S=C+(b^v&(N^b))+I[8]+1163531501&4294967295,C=N+(S<<20&4294967295|S>>>12),S=v+(N^b&(C^N))+I[13]+2850285829&4294967295,v=C+(S<<5&4294967295|S>>>27),S=b+(C^N&(v^C))+I[2]+4243563512&4294967295,b=v+(S<<9&4294967295|S>>>23),S=N+(v^C&(b^v))+I[7]+1735328473&4294967295,N=b+(S<<14&4294967295|S>>>18),S=C+(b^v&(N^b))+I[12]+2368359562&4294967295,C=N+(S<<20&4294967295|S>>>12),S=v+(C^N^b)+I[5]+4294588738&4294967295,v=C+(S<<4&4294967295|S>>>28),S=b+(v^C^N)+I[8]+2272392833&4294967295,b=v+(S<<11&4294967295|S>>>21),S=N+(b^v^C)+I[11]+1839030562&4294967295,N=b+(S<<16&4294967295|S>>>16),S=C+(N^b^v)+I[14]+4259657740&4294967295,C=N+(S<<23&4294967295|S>>>9),S=v+(C^N^b)+I[1]+2763975236&4294967295,v=C+(S<<4&4294967295|S>>>28),S=b+(v^C^N)+I[4]+1272893353&4294967295,b=v+(S<<11&4294967295|S>>>21),S=N+(b^v^C)+I[7]+4139469664&4294967295,N=b+(S<<16&4294967295|S>>>16),S=C+(N^b^v)+I[10]+3200236656&4294967295,C=N+(S<<23&4294967295|S>>>9),S=v+(C^N^b)+I[13]+681279174&4294967295,v=C+(S<<4&4294967295|S>>>28),S=b+(v^C^N)+I[0]+3936430074&4294967295,b=v+(S<<11&4294967295|S>>>21),S=N+(b^v^C)+I[3]+3572445317&4294967295,N=b+(S<<16&4294967295|S>>>16),S=C+(N^b^v)+I[6]+76029189&4294967295,C=N+(S<<23&4294967295|S>>>9),S=v+(C^N^b)+I[9]+3654602809&4294967295,v=C+(S<<4&4294967295|S>>>28),S=b+(v^C^N)+I[12]+3873151461&4294967295,b=v+(S<<11&4294967295|S>>>21),S=N+(b^v^C)+I[15]+530742520&4294967295,N=b+(S<<16&4294967295|S>>>16),S=C+(N^b^v)+I[2]+3299628645&4294967295,C=N+(S<<23&4294967295|S>>>9),S=v+(N^(C|~b))+I[0]+4096336452&4294967295,v=C+(S<<6&4294967295|S>>>26),S=b+(C^(v|~N))+I[7]+1126891415&4294967295,b=v+(S<<10&4294967295|S>>>22),S=N+(v^(b|~C))+I[14]+2878612391&4294967295,N=b+(S<<15&4294967295|S>>>17),S=C+(b^(N|~v))+I[5]+4237533241&4294967295,C=N+(S<<21&4294967295|S>>>11),S=v+(N^(C|~b))+I[12]+1700485571&4294967295,v=C+(S<<6&4294967295|S>>>26),S=b+(C^(v|~N))+I[3]+2399980690&4294967295,b=v+(S<<10&4294967295|S>>>22),S=N+(v^(b|~C))+I[10]+4293915773&4294967295,N=b+(S<<15&4294967295|S>>>17),S=C+(b^(N|~v))+I[1]+2240044497&4294967295,C=N+(S<<21&4294967295|S>>>11),S=v+(N^(C|~b))+I[8]+1873313359&4294967295,v=C+(S<<6&4294967295|S>>>26),S=b+(C^(v|~N))+I[15]+4264355552&4294967295,b=v+(S<<10&4294967295|S>>>22),S=N+(v^(b|~C))+I[6]+2734768916&4294967295,N=b+(S<<15&4294967295|S>>>17),S=C+(b^(N|~v))+I[13]+1309151649&4294967295,C=N+(S<<21&4294967295|S>>>11),S=v+(N^(C|~b))+I[4]+4149444226&4294967295,v=C+(S<<6&4294967295|S>>>26),S=b+(C^(v|~N))+I[11]+3174756917&4294967295,b=v+(S<<10&4294967295|S>>>22),S=N+(v^(b|~C))+I[2]+718787259&4294967295,N=b+(S<<15&4294967295|S>>>17),S=C+(b^(N|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+N&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var C=v-this.blockSize,I=this.B,N=this.h,b=0;b<v;){if(N==0)for(;b<=C;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<v;)if(I[N++]=E.charCodeAt(b++),N==this.blockSize){i(this,I),N=0;break}}else for(;b<v;)if(I[N++]=E[b++],N==this.blockSize){i(this,I),N=0;break}}this.h=N,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var C=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=C&255,C/=256;for(this.u(E),E=Array(16),v=C=0;4>v;++v)for(var I=0;32>I;I+=8)E[C++]=this.g[v]>>>I&255;return E};function s(E,v){var C=l;return Object.prototype.hasOwnProperty.call(C,E)?C[E]:C[E]=v(E)}function o(E,v){this.h=v;for(var C=[],I=!0,N=E.length-1;0<=N;N--){var b=E[N]|0;I&&b==v||(C[N]=b,I=!1)}this.g=C}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return R(h(-E));for(var v=[],C=1,I=0;E>=C;I++)v[I]=E/C|0,C*=4294967296;return new o(v,0)}function d(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return R(d(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=h(Math.pow(v,8)),I=p,N=0;N<E.length;N+=8){var b=Math.min(8,E.length-N),S=parseInt(E.substring(N,N+b),v);8>b?(b=h(Math.pow(v,b)),I=I.j(b).add(h(S))):(I=I.j(C),I=I.add(h(S)))}return I}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var E=0,v=1,C=0;C<this.g.length;C++){var I=this.i(C);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var v=h(Math.pow(E,6)),C=this,I="";;){var N=D(C,v).g;C=w(C,N.j(v));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(E);if(C=N,A(C))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:A(E)?0:1};function R(E){for(var v=E.g.length,C=[],I=0;I<v;I++)C[I]=~E.g[I];return new o(C,~E.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),C=[],I=0,N=0;N<=v;N++){var b=I+(this.i(N)&65535)+(E.i(N)&65535),S=(b>>>16)+(this.i(N)>>>16)+(E.i(N)>>>16);I=S>>>16,b&=65535,S&=65535,C[N]=S<<16|b}return new o(C,C[C.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(R(v))}t.j=function(E){if(A(this)||A(E))return p;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(T)&&0>E.l(T))return h(this.m()*E.m());for(var v=this.g.length+E.g.length,C=[],I=0;I<2*v;I++)C[I]=0;for(I=0;I<this.g.length;I++)for(var N=0;N<E.g.length;N++){var b=this.i(I)>>>16,S=this.i(I)&65535,he=E.i(N)>>>16,Ce=E.i(N)&65535;C[2*I+2*N]+=S*Ce,y(C,2*I+2*N),C[2*I+2*N+1]+=b*Ce,y(C,2*I+2*N+1),C[2*I+2*N+1]+=S*he,y(C,2*I+2*N+1),C[2*I+2*N+2]+=b*he,y(C,2*I+2*N+2)}for(I=0;I<v;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=v;I<2*v;I++)C[I]=0;return new o(C,0)};function y(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function _(E,v){this.g=E,this.h=v}function D(E,v){if(A(v))throw Error("division by zero");if(A(E))return new _(p,p);if(k(E))return v=D(R(E),v),new _(R(v.g),R(v.h));if(k(v))return v=D(E,R(v)),new _(R(v.g),v.h);if(30<E.g.length){if(k(E)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var C=m,I=v;0>=I.l(E);)C=F(C),I=F(I);var N=U(C,1),b=U(I,1);for(I=U(I,2),C=U(C,2);!A(I);){var S=b.add(I);0>=S.l(E)&&(N=N.add(C),b=S),I=U(I,1),C=U(C,1)}return v=w(E,N.j(v)),new _(N,v)}for(N=p;0<=E.l(v);){for(C=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(C)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=h(C),S=b.j(v);k(S)||0<S.l(E);)C-=I,b=h(C),S=b.j(v);A(b)&&(b=m),N=N.add(b),E=w(E,S)}return new _(N,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),C=[],I=0;I<v;I++)C[I]=this.i(I)&E.i(I);return new o(C,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),C=[],I=0;I<v;I++)C[I]=this.i(I)|E.i(I);return new o(C,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),C=[],I=0;I<v;I++)C[I]=this.i(I)^E.i(I);return new o(C,this.h^E.h)};function F(E){for(var v=E.g.length+1,C=[],I=0;I<v;I++)C[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(C,E.h)}function U(E,v){var C=v>>5;v%=32;for(var I=E.g.length-C,N=[],b=0;b<I;b++)N[b]=0<v?E.i(b+C)>>>v|E.i(b+C+1)<<32-v:E.i(b+C);return new o(N,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,si=o}).apply(typeof Yy<"u"?Yy:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tw,yo,Sw,Nl,Xd,Cw,Aw,Iw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var V=a[g];if(!(V in f))break e;f=f[V]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,g=!1,V={next:function(){if(!g&&f<a.length){var L=f++;return{value:c(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function d(a,c,f){return a.call.apply(a.bind,arguments)}function p(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,g),a.apply(c,V)}}return function(){return a.apply(c,arguments)}}function m(a,c,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,V,L){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return c.prototype[V].apply(g,W)}}function k(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function R(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const V=a.length||0,L=g.length||0;a.length=V+L;for(let W=0;W<L;W++)a[V+W]=g[W]}else a.push(g)}}class w{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(a){return/^[\s\xa0]*$/.test(a)}function _(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function U(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function E(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function v(a){const c={};for(const f in a)c[f]=a[f];return c}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,g;for(let V=1;V<arguments.length;V++){g=arguments[V];for(f in g)a[f]=g[f];for(let L=0;L<C.length;L++)f=C[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function N(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class he{constructor(){this.h=this.g=null}add(c,f){const g=Ce.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ce=new w(()=>new et,a=>a.reset());class et{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,K=!1,Z=new he,ne=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(ve)}};var ve=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){b(f)}var c=Ce;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}K=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function wt(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var V=!0;break e}catch{}V=!1}V||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wt.aa.h.call(this)}}A(wt,Ie);var tt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),fn=0;function tn(a,c,f,g,V){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=V,this.key=++fn,this.da=this.fa=!1}function Rn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function nn(a){this.src=a,this.g={},this.h=0}nn.prototype.add=function(a,c,f,g,V){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var W=xi(a,c,g,V);return-1<W?(c=a[W],f||(c.fa=!1)):(c=new tn(c,this.src,L,!!g,V),c.fa=f,a.push(c)),c};function jt(a,c){var f=c.type;if(f in a.g){var g=a.g[f],V=Array.prototype.indexOf.call(g,c,void 0),L;(L=0<=V)&&Array.prototype.splice.call(g,V,1),L&&(Rn(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function xi(a,c,f,g){for(var V=0;V<a.length;++V){var L=a[V];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==g)return V}return-1}var Ti="closure_lm_"+(1e6*Math.random()|0),Ta={};function _c(a,c,f,g,V){if(g&&g.once)return O(a,c,f,g,V);if(Array.isArray(c)){for(var L=0;L<c.length;L++)_c(a,c[L],f,g,V);return null}return f=Oe(f),a&&a[at]?a.K(c,f,h(g)?!!g.capture:!!g,V):wc(a,c,f,!1,g,V)}function wc(a,c,f,g,V,L){if(!c)throw Error("Invalid event type");var W=h(V)?!!V.capture:!!V,Se=te(a);if(Se||(a[Ti]=Se=new nn(a)),f=Se.add(c,f,g,W,L),f.proxy)return f;if(g=P(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)_t||(V=W),V===void 0&&(V=!1),a.addEventListener(c.toString(),g,V);else if(a.attachEvent)a.attachEvent(G(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function P(){function a(f){return c.call(a.src,a.listener,f)}const c=H;return a}function O(a,c,f,g,V){if(Array.isArray(c)){for(var L=0;L<c.length;L++)O(a,c[L],f,g,V);return null}return f=Oe(f),a&&a[at]?a.L(c,f,h(g)?!!g.capture:!!g,V):wc(a,c,f,!0,g,V)}function M(a,c,f,g,V){if(Array.isArray(c))for(var L=0;L<c.length;L++)M(a,c[L],f,g,V);else g=h(g)?!!g.capture:!!g,f=Oe(f),a&&a[at]?(a=a.i,c=String(c).toString(),c in a.g&&(L=a.g[c],f=xi(L,f,g,V),-1<f&&(Rn(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[c],a.h--)))):a&&(a=te(a))&&(c=a.g[c.toString()],a=-1,c&&(a=xi(c,f,g,V)),(f=-1<a?c[a]:null)&&Y(f))}function Y(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[at])jt(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(G(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=te(c))?(jt(f,a),f.h==0&&(f.src=null,c[Ti]=null)):Rn(a)}}}function G(a){return a in Ta?Ta[a]:Ta[a]="on"+a}function H(a,c){if(a.da)a=!0;else{c=new wt(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&Y(a),a=f.call(g,c)}return a}function te(a){return a=a[Ti],a instanceof nn?a:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oe(a){return typeof a=="function"?a:(a[de]||(a[de]=function(c){return a.handleEvent(c)}),a[de])}function Ee(){ue.call(this),this.i=new nn(this),this.M=this,this.F=null}A(Ee,ue),Ee.prototype[at]=!0,Ee.prototype.removeEventListener=function(a,c,f,g){M(this,a,c,f,g)};function Ue(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var V=c;c=new Ie(g,a),I(c,V)}if(V=!0,f)for(var L=f.length-1;0<=L;L--){var W=c.g=f[L];V=Si(W,g,!0,c)&&V}if(W=c.g=a,V=Si(W,g,!0,c)&&V,V=Si(W,g,!1,c)&&V,f)for(L=0;L<f.length;L++)W=c.g=f[L],V=Si(W,g,!1,c)&&V}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)Rn(f[g]);delete a.g[c],a.h--}}this.F=null},Ee.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},Ee.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function Si(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var V=!0,L=0;L<c.length;++L){var W=c[L];if(W&&!W.da&&W.capture==f){var Se=W.listener,dt=W.ha||W.src;W.fa&&jt(a.i,W),V=Se.call(dt,g)!==!1&&V}}return V&&!g.defaultPrevented}function Ci(a,c,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ai(a){a.g=Ci(()=>{a.g=null,a.i&&(a.i=!1,Ai(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ec extends ue{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(a){ue.call(this),this.h=a,this.g={}}A(ir,ue);var Sa=[];function Ls(a){U(a.g,function(c,f){this.g.hasOwnProperty(f)&&Y(c)},a),a.g={}}ir.prototype.N=function(){ir.aa.N.call(this),Ls(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xc=l.JSON.stringify,LE=l.JSON.parse,jE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Tc(){}Tc.prototype.h=null;function Xp(a){return a.h||(a.h=a.i())}function Jp(){}var js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){Ie.call(this,"d")}A(Sc,Ie);function Cc(){Ie.call(this,"c")}A(Cc,Ie);var $r={},Zp=null;function Ca(){return Zp=Zp||new Ee}$r.La="serverreachability";function em(a){Ie.call(this,$r.La,a)}A(em,Ie);function Fs(a){const c=Ca();Ue(c,new em(c))}$r.STAT_EVENT="statevent";function tm(a,c){Ie.call(this,$r.STAT_EVENT,a),this.stat=c}A(tm,Ie);function kt(a){const c=Ca();Ue(c,new tm(c,a))}$r.Ma="timingevent";function nm(a,c){Ie.call(this,$r.Ma,a),this.size=c}A(nm,Ie);function Ms(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function FE(a,c,f,g,V,L){a.info(function(){if(a.g)if(L)for(var W="",Se=L.split("&"),dt=0;dt<Se.length;dt++){var _e=Se[dt].split("=");if(1<_e.length){var Et=_e[0];_e=_e[1];var xt=Et.split("_");W=2<=xt.length&&xt[1]=="type"?W+(Et+"="+_e+"&"):W+(Et+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+g+") [attempt "+V+"]: "+c+`
`+f+`
`+W})}function ME(a,c,f,g,V,L,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+V+"]: "+c+`
`+f+`
`+L+" "+W})}function Ii(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+$E(a,f)+(g?" "+g:"")})}function UE(a,c){a.info(function(){return"TIMEOUT: "+c})}Us.prototype.info=function(){};function $E(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var V=g[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<V.length;W++)V[W]=""}}}}return xc(f)}catch{return c}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ac;function Ia(){}A(Ia,Tc),Ia.prototype.g=function(){return new XMLHttpRequest},Ia.prototype.i=function(){return{}},Ac=new Ia;function sr(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var sm={},Ic={};function Rc(a,c,f){a.L=1,a.v=ba(Un(c)),a.m=f,a.P=!0,om(a,null)}function om(a,c){a.F=Date.now(),Ra(a),a.A=Un(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new im,a.g=Fm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new Ec(m(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(Sa[0]=V.toString()),V=Sa);for(var L=0;L<V.length;L++){var W=_c(f,V[L],g||c.handleEvent,!1,c.h||c);if(!W)break;c.g[W.key]=W}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Fs(),FE(a.i,a.u,a.A,a.l,a.R,a.m)}sr.prototype.ca=function(a){a=a.target;const c=this.M;c&&$n(a)==3?c.j():this.Y(a)},sr.prototype.Y=function(a){try{if(a==this.g)e:{const xt=$n(this.g);var c=this.g.Ba();const ki=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Im(this.g)))){this.J||xt!=4||c==7||(c==8||0>=ki?Fs(3):Fs(2)),Pc(this);var f=this.g.Z();this.X=f;t:if(am(this)){var g=Im(this.g);a="";var V=g.length,L=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),$s(this);var W="";break t}this.h.i=new l.TextDecoder}for(c=0;c<V;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(L&&c==V-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,ME(this.i,this.u,this.A,this.l,this.R,xt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,dt=this.g;if((Se=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Se)){var _e=Se;break t}}_e=null}if(f=_e)Ii(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kc(this,f);else{this.o=!1,this.s=3,kt(12),Br(this),$s(this);break e}}if(this.P){f=!0;let pn;for(;!this.J&&this.C<W.length;)if(pn=BE(this,W),pn==Ic){xt==4&&(this.s=4,kt(14),f=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==sm){this.s=4,kt(15),Ii(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Ii(this.i,this.l,pn,null),kc(this,pn);if(am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||W.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)Ii(this.i,this.l,W,"[Invalid Chunked Response]"),Br(this),$s(this);else if(0<W.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Lc(Et),Et.M=!0,kt(11))}}else Ii(this.i,this.l,W,null),kc(this,W);xt==4&&Br(this),this.o&&!this.J&&(xt==4?Vm(this.j,this):(this.o=!1,Ra(this)))}else sx(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Br(this),$s(this)}}}catch{}finally{}};function am(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function BE(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?Ic:(f=Number(c.substring(f,g)),isNaN(f)?sm:(g+=1,g+f>c.length?Ic:(c=c.slice(g,g+f),a.C=g+f,c)))}sr.prototype.cancel=function(){this.J=!0,Br(this)};function Ra(a){a.S=Date.now()+a.I,lm(a,a.I)}function lm(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(m(a.ba,a),c)}function Pc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}sr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(UE(this.i,this.A),this.L!=2&&(Fs(),kt(17)),Br(this),this.s=2,$s(this)):lm(this,this.S-a)};function $s(a){a.j.G==0||a.J||Vm(a.j,a)}function Br(a){Pc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ls(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function kc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||bc(f.h,a))){if(!a.K&&bc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var V=g;if(V[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ja(f),Oa(f);else break e;Oc(f),kt(18)}}else f.za=V[1],0<f.za-f.T&&37500>V[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ms(m(f.Za,f),6e3));if(1>=hm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else qr(f,11)}else if((a.K||f.g==a)&&ja(f),!y(c))for(V=f.Da.g.parse(c),c=0;c<V.length;c++){let _e=V[c];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const Et=_e[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const xt=_e[4];xt!=null&&(f.Aa=xt,f.j.info("SVER="+f.Aa));const ki=_e[5];ki!=null&&typeof ki=="number"&&0<ki&&(g=1.5*ki,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const pn=a.g;if(pn){const Ma=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var L=g.h;L.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Nc(L,L.h),L.h=null))}if(g.D){const jc=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;jc&&(g.ya=jc,ke(g.I,g.D,jc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=jm(g,g.J?g.ia:null,g.W),W.K){dm(g.h,W);var Se=W,dt=g.L;dt&&(Se.I=dt),Se.B&&(Pc(Se),Ra(Se)),g.g=W}else Nm(g);0<f.i.length&&La(f)}else _e[0]!="stop"&&_e[0]!="close"||qr(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?qr(f,7):Vc(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}Fs(4)}catch{}}var zE=class{constructor(a,c){this.g=a,this.map=c}};function um(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hm(a){return a.h?1:a.g?a.g.size:0}function bc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Nc(a,c){a.g?a.g.add(c):a.h=c}function dm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}um.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return k(a.i)}function qE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function HE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function pm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=HE(a),g=qE(a),V=g.length,L=0;L<V;L++)c.call(void 0,g[L],f&&f[L],a)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WE(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),V=null;if(0<=g){var L=a[f].substring(0,g);V=a[f].substring(g+1)}else L=a[f];c(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,Pa(this,a.j),this.o=a.o,this.g=a.g,ka(this,a.s),this.l=a.l;var c=a.i,f=new qs;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),gm(this,f),this.m=a.m}else a&&(c=String(a).match(mm))?(this.h=!1,Pa(this,c[1]||"",!0),this.o=Bs(c[2]||""),this.g=Bs(c[3]||"",!0),ka(this,c[4]),this.l=Bs(c[5]||"",!0),gm(this,c[6]||"",!0),this.m=Bs(c[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}zr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(zs(c,ym,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(zs(c,ym,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?QE:GE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,XE)),a.join("")};function Un(a){return new zr(a)}function Pa(a,c,f){a.j=f?Bs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ka(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function gm(a,c,f){c instanceof qs?(a.i=c,JE(a.i,a.h)):(f||(c=zs(c,YE)),a.i=new qs(c,a.h))}function ke(a,c,f){a.i.set(c,f)}function ba(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,KE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ym=/[#\/\?@]/g,GE=/[#\?:]/g,QE=/[#\?]/g,YE=/[#\?@]/g,XE=/#/g;function qs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&WE(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=qs.prototype,t.add=function(a,c){or(this),this.i=null,a=Ri(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function vm(a,c){or(a),c=Ri(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function _m(a,c){return or(a),c=Ri(a,c),a.g.has(c)}t.forEach=function(a,c){or(this),this.g.forEach(function(f,g){f.forEach(function(V){a.call(c,V,g,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const V=a[g];for(let L=0;L<V.length;L++)f.push(c[g])}return f},t.V=function(a){or(this);let c=[];if(typeof a=="string")_m(this,a)&&(c=c.concat(this.g.get(Ri(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return or(this),this.i=null,a=Ri(this,a),_m(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function wm(a,c,f){vm(a,c),0<f.length&&(a.i=null,a.g.set(Ri(a,c),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const L=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var V=L;W[g]!==""&&(V+="="+encodeURIComponent(String(W[g]))),a.push(V)}}return this.i=a.join("&")};function Ri(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function JE(a,c){c&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,g){var V=g.toLowerCase();g!=V&&(vm(this,g),wm(this,V,f))},a)),a.j=c}function ZE(a,c){const f=new Us;if(l.Image){const g=new Image;g.onload=T(ar,f,"TestLoadImage: loaded",!0,c,g),g.onerror=T(ar,f,"TestLoadImage: error",!1,c,g),g.onabort=T(ar,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=T(ar,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function ex(a,c){const f=new Us,g=new AbortController,V=setTimeout(()=>{g.abort(),ar(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(V),L.ok?ar(f,"TestPingServer: ok",!0,c):ar(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(V),ar(f,"TestPingServer: error",!1,c)})}function ar(a,c,f,g,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),g(f)}catch{}}function tx(){this.g=new jE}function nx(a,c,f){const g=f||"";try{pm(a,function(V,L){let W=V;h(V)&&(W=xc(V)),c.push(g+L+"="+encodeURIComponent(W))})}catch(V){throw c.push(g+"type="+encodeURIComponent("_badmap")),V}}function Na(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Na,Tc),Na.prototype.g=function(){return new Da(this.l,this.j)},Na.prototype.i=function(a){return function(){return a}}({});function Da(a,c){Ee.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Da,Ee),t=Da.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Em(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Em(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Hs(this):Ws(this),this.readyState==3&&Em(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ws(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xm(a){let c="";return U(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function Dc(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=xm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,c,f))}function $e(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A($e,Ee);var rx=/^https?$/i,ix=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ac.g(),this.v=this.o?Xp(this.o):Xp(Ac),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(L){Tm(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var V in g)f.set(V,g[V]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ix,c,void 0))||g||V||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of f)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Am(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Tm(this,L)}};function Tm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Sm(a),Va(a)}function Sm(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cm(this):this.bb())},t.bb=function(){Cm(this)};function Cm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||$n(a)!=4||a.Z()!=2)){if(a.u&&$n(a)==4)Ci(a.Ea,0,a);else if(Ue(a,"readystatechange"),$n(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=W===0){var V=String(a.D).match(mm)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),g=!rx.test(V?V.toLowerCase():"")}f=g}if(f)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var L=2<$n(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Sm(a)}}finally{Va(a)}}}}function Va(a,c){if(a.g){Am(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ue(a,"ready");try{f.onreadystatechange=g}catch{}}}function Am(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),LE(c)}};function Im(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sx(a){const c={};a=(a.g&&2<=$n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=N(a[g]);const V=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[V]||[];c[V]=L,L.push(f)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Rm(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new um(a&&a.concurrentRequestLimit),this.Da=new tx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rm.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){kt(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=jm(this,null,this.W),La(this)};function Vc(a){if(Pm(a),a.G==3){var c=a.U++,f=Un(a.I);if(ke(f,"SID",a.K),ke(f,"RID",c),ke(f,"TYPE","terminate"),Gs(a,f),c=new sr(a,a.j,c),c.L=2,c.v=ba(Un(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Fm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ra(c)}Lm(a)}function Oa(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function Pm(a){Oa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ja(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function La(a){if(!cm(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ae||ne(),K||(Ae(),K=!0),Z.add(c,a),a.B=0}}function ox(a,c){return hm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(m(a.Ga,a,c),Om(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new sr(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=bm(this,V,c),f=Un(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),Gs(this,f),L&&(this.O?c="headers="+encodeURIComponent(String(xm(L)))+"&"+c:this.m&&Dc(f,this.m,L)),Nc(this.h,V),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",c),ke(f,"SID","null"),V.T=!0,Rc(V,f,null)):Rc(V,f,c),this.G=2}}else this.G==3&&(a?km(this,a):this.i.length==0||cm(this.h)||km(this))};function km(a,c){var f;c?f=c.l:f=a.U++;const g=Un(a.I);ke(g,"SID",a.K),ke(g,"RID",f),ke(g,"AID",a.T),Gs(a,g),a.m&&a.o&&Dc(g,a.m,a.o),f=new sr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=bm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nc(a.h,f),Rc(f,g,c)}function Gs(a,c){a.H&&U(a.H,function(f,g){ke(c,g,f)}),a.l&&pm({},function(f,g){ke(c,g,f)})}function bm(a,c,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var V=a.i;let L=-1;for(;;){const W=["count="+f];L==-1?0<f?(L=V[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let Se=!0;for(let dt=0;dt<f;dt++){let _e=V[dt].g;const Et=V[dt].map;if(_e-=L,0>_e)L=Math.max(0,V[dt].g-100),Se=!1;else try{nx(Et,W,"req"+_e+"_")}catch{g&&g(Et)}}if(Se){g=W.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function Nm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ae||ne(),K||(Ae(),K=!0),Z.add(c,a),a.v=0}}function Oc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(m(a.Fa,a),Om(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Oa(this),Dm(this))};function Lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dm(a){a.g=new sr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Un(a.qa);ke(c,"RID","rpc"),ke(c,"SID",a.K),ke(c,"AID",a.T),ke(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(c,"TO",a.ja),ke(c,"TYPE","xmlhttp"),Gs(a,c),a.m&&a.o&&Dc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ba(Un(c)),f.m=null,f.P=!0,om(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Oa(this),Oc(this),kt(19))};function ja(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Vm(a,c){var f=null;if(a.g==c){ja(a),Lc(a),a.g=null;var g=2}else if(bc(a.h,c))f=c.D,dm(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var V=a.B;g=Ca(),Ue(g,new nm(g,f)),La(a)}else Nm(a);else if(V=c.s,V==3||V==0&&0<c.X||!(g==1&&ox(a,c)||g==2&&Oc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),V){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function Om(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function qr(a,c){if(a.j.info("Error code "+c),c==2){var f=m(a.fb,a),g=a.Xa;const V=!g;g=new zr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pa(g,"https"),ba(g),V?ZE(g.toString(),f):ex(g.toString(),f)}else kt(2);a.G=0,a.l&&a.l.sa(c),Lm(a),Pm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Lm(a){if(a.G=0,a.ka=[],a.l){const c=fm(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function jm(a,c,f){var g=f instanceof zr?Un(f):new zr(f);if(g.g!="")c&&(g.g=c+"."+g.g),ka(g,g.s);else{var V=l.location;g=V.protocol,c=c?c+"."+V.hostname:V.hostname,V=+V.port;var L=new zr(null);g&&Pa(L,g),c&&(L.g=c),V&&ka(L,V),f&&(L.l=f),g=L}return f=a.D,c=a.ya,f&&c&&ke(g,f,c),ke(g,"VER",a.la),Gs(a,g),g}function Fm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new $e(new Na({eb:f})):new $e(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fa(){}Fa.prototype.g=function(a,c){return new Wt(a,c)};function Wt(a,c){Ee.call(this),this.g=new Rm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!y(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Pi(this)}A(Wt,Ee),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Vc(this.g)},Wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=xc(a),a=f);c.i.push(new zE(c.Ya++,a)),c.G==3&&La(c)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,Wt.aa.N.call(this)};function Um(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(Um,Sc);function $m(){Cc.call(this),this.status=1}A($m,Cc);function Pi(a){this.g=a}A(Pi,Mm),Pi.prototype.ua=function(){Ue(this.g,"a")},Pi.prototype.ta=function(a){Ue(this.g,new Um(a))},Pi.prototype.sa=function(a){Ue(this.g,new $m)},Pi.prototype.ra=function(){Ue(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Iw=function(){return new Fa},Aw=function(){return Ca()},Cw=$r,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Nl=Aa,rm.COMPLETE="complete",Sw=rm,Jp.EventType=js,js.OPEN="a",js.CLOSE="b",js.ERROR="c",js.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,yo=Jp,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Tw=$e}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});const Xy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new gw("@firebase/firestore");function io(){return pi.logLevel}function ee(t,...e){if(pi.logLevel<=me.DEBUG){const n=e.map(Cp);pi.debug(`Firestore (${Ns}): ${t}`,...n)}}function tr(t,...e){if(pi.logLevel<=me.ERROR){const n=e.map(Cp);pi.error(`Firestore (${Ns}): ${t}`,...n)}}function _s(t,...e){if(pi.logLevel<=me.WARN){const n=e.map(Cp);pi.warn(`Firestore (${Ns}): ${t}`,...n)}}function Cp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function qe(t,e){t||ae()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends bs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class AP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IP{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new Rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new At(e)}}class RP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){qe(this.o===void 0);const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.R=n.token,new kP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ht.fromMillis(Date.now())}static fromDate(e){return Ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Ht(0,0))}static max(){return new se(new Ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends sa{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const VP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends sa{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return VP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new re(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ze.fromString(e))}static fromName(e){return new ie(ze.fromString(e).popFirst(5))}static empty(){return new ie(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ze(e.slice()))}}function OP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new Or(i,ie.empty(),e)}function LP(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(se.min(),ie.empty(),-1)}static max(){return new Or(se.max(),ie.empty(),-1)}}function jP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t){if(t.code!==Q.FAILED_PRECONDITION||t.message!==FP)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(d=>{o[h]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function UP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function va(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ip.oe=-1;function ac(t){return t==null}function Jd(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new _r([])}unionWith(e){let n=new gt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _r(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pw("Invalid base64 string: "+s):s}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const BP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(qe(!!t),typeof t=="string"){let e=0;const n=BP.exec(t);if(qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pp(t){const e=t.mapValue.fields.__previous_value__;return Rp(e)?Pp(e):e}function oa(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rp(t)?4:HP(t)?9007199254740991:qP(t)?10:11:ae()}function Fn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mi(i.bytesValue).isEqual(mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),l=We(s.doubleValue);return o===l?Jd(o)===Jd(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Jy(o)!==Jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Fn(o[u],l[u])))return!1;return!0}(t,e);default:return ae()}}function la(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=We(s.integerValue||s.doubleValue),u=We(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return e0(t.timestampValue,e.timestampValue);case 4:return e0(oa(t),oa(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mi(s),u=mi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=we(l[h],u[h]);if(d!==0)return d}return we(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=we(We(s.latitude),We(o.latitude));return l!==0?l:we(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return t0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,d;const p=s.fields||{},m=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=we(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:t0(T,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===al.mapValue&&o===al.mapValue)return 0;if(s===al.mapValue)return 1;if(o===al.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=we(u[p],d[p]);if(m!==0)return m;const T=Es(l[u[p]],h[d[p]]);if(T!==0)return T}return we(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function e0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Lr(t),r=Lr(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function t0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Es(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function xs(t){return Zd(t)}function Zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zd(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function ef(t){return!!t&&"integerValue"in t}function kp(t){return!!t&&"arrayValue"in t}function n0(t){return!!t&&"nullValue"in t}function r0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sh(t){return!!t&&"mapValue"in t}function qP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lc(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Sh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ko(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Sh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Sh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){lc(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dn(ko(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Rt(e,0,se.min(),se.min(),se.min(),Dn.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,se.min(),se.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,se.min(),se.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.position=e,this.inclusive=n}}function i0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function WP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{}class it extends kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GP(e,n,r):n==="array-contains"?new XP(e,r):n==="in"?new JP(e,r):n==="not-in"?new ZP(e,r):n==="array-contains-any"?new e4(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QP(e,r):new YP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return bw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bw(t){return t.op==="and"}function Nw(t){return KP(t)&&bw(t)}function KP(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function tf(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(Nw(t))return t.filters.map(e=>tf(e)).join(",");{const e=t.filters.map(n=>tf(n)).join(",");return`${t.op}(${e})`}}function Dw(t,e){return t instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Dw(o,i.filters[l]),!0):!1}(t,e):void ae()}function Vw(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vw).join(" ,")+"}"}(t):"Filter"}class GP extends it{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class QP extends it{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YP extends it{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class XP extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kp(n)&&la(n.arrayValue,this.value)}}class JP extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class ZP extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!la(this.value.arrayValue,n)}}class e4 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function o0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new t4(t,e,n,r,i,s,o)}function bp(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.ue=n}return e.ue}function Np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s0(t.startAt,e.startAt)&&s0(t.endAt,e.endAt)}function nf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function n4(t,e,n,r,i,s,o,l){return new uc(t,e,n,r,i,s,o,l)}function Lw(t){return new uc(t)}function a0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r4(t){return t.collectionGroup!==null}function bo(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(Dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new xu(s,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new xu(Dt.keyField(),r))}return e.ce}function jn(t){const e=pe(t);return e.le||(e.le=i4(e,bo(t))),e.le}function i4(t,e){if(t.limitType==="F")return o0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xu(i.field,s)});const n=t.endAt?new Eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Eu(t.startAt.position,t.startAt.inclusive):null;return o0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rf(t,e,n){return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return Np(jn(t),jn(e))&&t.limitType===e.limitType}function jw(t){return`${bp(jn(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Vw(i)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(jn(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=i0(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,bo(r),i)||r.endAt&&!function(o,l,u){const h=i0(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,bo(r),i))}(t,e)}function s4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fw(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=o4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function o4(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Es(u,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){lc(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $P(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new Qe(ie.comparator);function jr(){return a4}const Mw=new Qe(ie.comparator);function vo(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function l4(t){let e=Mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return No()}function Uw(){return No()}function No(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const u4=new gt(ie.comparator);function ge(...t){let e=u4;for(const n of t)e=e.add(n);return e}const c4=new gt(we);function h4(){return c4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jd(e)?"-0":e}}function f4(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function p4(t,e,n){return t instanceof sf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rp(s)&&(s=Pp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Tu?$w(t,e):t instanceof Su?Bw(t,e):function(i,s){const o=g4(i,s),l=l0(o)+l0(i.Pe);return ef(o)&&ef(i.Pe)?f4(l):d4(i.serializer,l)}(t,e)}function m4(t,e,n){return t instanceof Tu?$w(t,e):t instanceof Su?Bw(t,e):n}function g4(t,e){return t instanceof of?function(r){return ef(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sf extends dc{}class Tu extends dc{constructor(e){super(),this.elements=e}}function $w(t,e){const n=zw(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Su extends dc{constructor(e){super(),this.elements=e}}function Bw(t,e){let n=zw(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class of extends dc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l0(t){return We(t.integerValue||t.doubleValue)}function zw(t){return kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function y4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Tu&&i instanceof Tu||r instanceof Su&&i instanceof Su?ws(r.elements,i.elements,Fn):r instanceof of&&i instanceof of?Fn(r.Pe,i.Pe):r instanceof sf&&i instanceof sf}(t.transform,e.transform)}class ai{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ai}static exists(e){return new ai(void 0,e)}static updateTime(e){return new ai(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dp{}function qw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _4(t.key,ai.none()):new Vp(t.key,t.data,ai.none());{const n=t.data,r=Dn.empty();let i=new gt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fc(t.key,r,new _r(i.toArray()),ai.none())}}function v4(t,e,n){t instanceof Vp?function(i,s,o){const l=i.value.clone(),u=c0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fc?function(i,s,o){if(!Dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=c0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Hw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Vp?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const h=s.value.clone(),d=h0(s.fieldTransforms,u,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof fc?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const h=h0(s.fieldTransforms,u,o),d=o.data;return d.setAll(Hw(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function u0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ws(r,i,(s,o)=>y4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vp extends Dp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fc extends Dp{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c0(t,e,n){const r=new Map;qe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,m4(o,l,n[i]))}return r}function h0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,p4(s,o,e))}return r}class _4 extends Dp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Uw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=qw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>u0(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>u0(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E4=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,fe;function Ww(t){if(t===void 0)return tr("GRPC error has no .code"),Q.UNKNOWN;switch(t){case Ye.OK:return Q.OK;case Ye.CANCELLED:return Q.CANCELLED;case Ye.UNKNOWN:return Q.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return Q.INTERNAL;case Ye.UNAVAILABLE:return Q.UNAVAILABLE;case Ye.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Ye.NOT_FOUND:return Q.NOT_FOUND;case Ye.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Ye.ABORTED:return Q.ABORTED;case Ye.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Ye.DATA_LOSS:return Q.DATA_LOSS;default:return ae()}}(fe=Ye||(Ye={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=new si([4294967295,4294967295],0);function d0(t){const e=T4().encode(t),n=new xw;return n.update(e),new Uint8Array(n.digest())}function f0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new si([n,r],0),new si([i,s],0)]}class Op{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(r<0)throw new _o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=si.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(si.fromNumber(r)));return i.compare(S4)===1&&(i=new si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Op(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pc(se.min(),i,new Qe(we),jr(),ge())}}class _a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Kw{constructor(e,n){this.targetId=e,this.me=n}}class Gw{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p0{constructor(){this.fe=0,this.ge=g0(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new _a(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=g0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class C4{constructor(e){this.Le=e,this.Be=new Map,this.ke=jr(),this.qe=m0(),this.Qe=new Qe(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(nf(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Rt.newNoDocument(o,se.min()))}else qe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mi(r).toUint8Array()}catch(u){if(u instanceof Pw)return _s("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Op(o,i,s)}catch(u){return _s(u instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&nf(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ge();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new pc(e,n,this.Qe,this.ke,r);return this.ke=jr(),this.qe=m0(),this.Qe=new Qe(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new p0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new p0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function m0(){return new Qe(ie.comparator)}function g0(){return new Qe(ie.comparator)}const A4={asc:"ASCENDING",desc:"DESCENDING"},I4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R4={and:"AND",or:"OR"};class P4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function af(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function k4(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b4(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function is(t){return qe(!!t),se.fromTimestamp(function(n){const r=Lr(n);return new Ht(r.seconds,r.nanos)}(t))}function N4(t,e){return lf(t,e).canonicalString()}function lf(t,e){const n=function(i){return new ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=ze.fromString(t);return qe(eE(e)),e}function Ch(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new re(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Xw(n))}function Yw(t,e){return N4(t.databaseId,e)}function D4(t){const e=Qw(t);return e.length===4?ze.emptyPath():Xw(e)}function y0(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function V4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(qe(d===void 0||typeof d=="string"),vt.fromBase64String(d||"")):(qe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?Q.UNKNOWN:Ww(h.code);return new re(d,h.message||"")}(o);n=new Gw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(t,r.document.name),s=is(r.document.updateTime),o=r.document.createTime?is(r.document.createTime):se.min(),l=new Dn({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,s,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Vl(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ch(t,r.document),s=r.readTime?is(r.readTime):se.min(),o=Rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Vl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ch(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new x4(i,s),l=r.targetId;n=new Kw(l,o)}}return n}function O4(t,e){return{documents:[Yw(t,e.path)]}}function L4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,i);const s=function(h){if(h.length!==0)return Zw(Mn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Oi(m.field),direction:M4(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=af(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function j4(t){let e=D4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){qe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=Jw(p);return m instanceof Mn&&Nw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new xu(Li(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ac(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Eu(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new Eu(T,m)}(n.endAt)),n4(e,i,o,s,l,"F",u,h)}function F4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Li(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(n.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>Jw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function M4(t){return A4[t]}function U4(t){return I4[t]}function $4(t){return R4[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Li(t){return Dt.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof it?function(n){if(n.op==="=="){if(r0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(n0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(n0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:U4(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>Zw(i));return r.length===1?r[0]:{compositeFilter:{op:$4(n.op),filters:r}}}(t):ae()}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.ct=e}}function z4(t){const e=j4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(){this.un=new H4}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Or.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class H4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(ze.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ts(0)}static kn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,_r.empty(),Ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=vo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=jr();const o=No(),l=function(){return No()}();return n.forEach((u,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof fc)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Do(d.mutation,h,d.mutation.getFieldMask(),Ht.now())):o.set(h.key,_r.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new K4(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let i=new Qe((o,l)=>o-l),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||_r.empty();d=l.applyToLocalView(h,d),r.set(u,d);const p=(i.get(l.batchId)||ge()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,p=Uw();d.forEach(m=>{if(!s.has(m)){const T=qw(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Zr());let l=-1,u=s;return o.next(h=>B.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ge())).next(d=>({batchId:l,changes:l4(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=vo();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const h=function(p,m){return new uc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Rt.newInvalidDocument(d)))});let l=vo();return o.forEach((u,h)=>{const d=s.get(u);d!==void 0&&Do(d.mutation,h,_r.empty(),Ht.now()),hc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:is(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:z4(i.bundledQuery),readTime:is(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(){this.overlays=new Qe(ie.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Zr(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E4(n,r));let s=this.Ir.get(n);s===void 0&&(s=ge(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Tr=new gt(lt.Er),this.dr=new gt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new ze([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new ze([])),r=new lt(n,e),i=new lt(n,e+1);let s=ge();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(lt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w4(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new lt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(we);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new lt(new ie(s),0);let l=new gt(we);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){qe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),i=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e){this.Mr=e,this.docs=function(){return new Qe(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=jr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jr();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||jP(LP(d),r)<=0||(i.has(d.key)||hc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ek(this)}getSize(e){return B.resolve(this.size)}}class ek extends W4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.persistence=e,this.Nr=new Ds(n=>bp(n),Np),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lp,this.targetCount=0,this.kr=Ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ip(0),this.Kr=!1,this.Kr=!0,this.$r=new X4,this.referenceDelegate=e(this),this.Ur=new tk(this),this.indexManager=new q4,this.remoteDocumentCache=function(i){return new Z4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new B4(n),this.Gr=new Q4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new J4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new rk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class rk extends MP{constructor(e){super(),this.currentSequenceNumber=e}}class jp{constructor(e){this.persistence=e,this.Jr=new Lp,this.Yr=null}static Zr(e){return new jp(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const i=ie.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lR()?8:UP(oR())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ik;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(io()<=me.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(io()<=me.DEBUG&&ee("QueryEngine","Query:",Vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(io()<=me.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):B.resolve())}Yi(e,n){if(a0(n))return B.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rf(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,rf(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return a0(n)||i.isEqual(se.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?B.resolve(null):(io()<=me.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vi(n)),this.rs(e,o,n,OP(i,-1)).next(l=>l))})}ts(e,n){let r=new gt(Fw(e));return n.forEach((i,s)=>{hc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return io()<=me.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Qe(we),this._s=new Ds(s=>bp(s),Np),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ak(t,e,n,r){return new ok(t,e,n,r)}async function tE(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ge();for(const h of i){o.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function nE(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lk(t,e){const n=pe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(vt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(k,R,w){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,T,d)&&l.push(n.Ur.updateTargetData(s,T))});let u=jr(),h=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(uk(s,o,e.documentUpdates).next(d=>{u=d.Ps,h=d.Is})),!r.isEqual(se.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function uk(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ck(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function uf(t,e,n){const r=pe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!va(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function v0(t,e,n){const r=pe(t);let i=se.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,d){const p=pe(u),m=p._s.get(d);return m!==void 0?B.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,jn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:ge())).next(l=>(hk(r,s4(e),l),{documents:l,Ts:s})))}function hk(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class _0{constructor(){this.activeTargetIds=h4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dk{constructor(){this.so=new _0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;function Ah(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class gk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Ah(),u=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw _s("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=pk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ah();return new Promise((o,l)=>{const u=new Tw;u.setWithCredentials(!0),u.listenOnce(Sw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Nl.NO_ERROR:const d=u.getResponseJson();ee(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Nl.TIMEOUT:ee(Ct,`RPC '${e}' ${s} timed out`),l(new re(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const p=u.getStatus();if(ee(Ct,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const A=function(R){const w=R.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(w)>=0?w:Q.UNKNOWN}(T.status);l(new re(A,T.message))}else l(new re(Q.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(Q.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{ee(Ct,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);ee(Ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Ah(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iw(),l=Aw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ee(Ct,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,T=!1;const A=new mk({Io:R=>{T?ee(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(ee(Ct,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),ee(Ct,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},To:()=>p.close()}),k=(R,w,y)=>{R.listen(w,_=>{try{y(_)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,yo.EventType.OPEN,()=>{T||(ee(Ct,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),k(p,yo.EventType.CLOSE,()=>{T||(T=!0,ee(Ct,`RPC '${e}' stream ${i} transport closed`),A.So())}),k(p,yo.EventType.ERROR,R=>{T||(T=!0,_s(Ct,`RPC '${e}' stream ${i} transport errored:`,R),A.So(new re(Q.UNAVAILABLE,"The operation could not be completed")))}),k(p,yo.EventType.MESSAGE,R=>{var w;if(!T){const y=R.data[0];qe(!!y);const _=y,D=_.error||((w=_[0])===null||w===void 0?void 0:w.error);if(D){ee(Ct,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let U=function(C){const I=Ye[C];if(I!==void 0)return Ww(I)}(F),E=D.message;U===void 0&&(U=Q.INTERNAL,E="Unknown error status: "+F+" with message "+D.message),T=!0,A.So(new re(U,E)),p.close()}else ee(Ct,`RPC '${e}' stream ${i} received:`,y),A.bo(y)}}),k(l,Cw.STAT_EVENT,R=>{R.stat===Xd.PROXY?ee(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Xd.NOPROXY&&ee(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Ih(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){return new P4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new iE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new re(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vk extends yk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=V4(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?is(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=y0(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=nf(u)?{documents:O4(s,u)}:{query:L4(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=b4(s,o.resumeToken);const h=af(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=k4(s,o.snapshotVersion.toTimestamp());const h=af(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=F4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=y0(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new re(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,lf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(Q.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,lf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(Q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(tr(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ea(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=pe(u);h.L_.add(4),await wa(h),h.q_.set("Unknown"),h.L_.delete(4),await mc(h)}(this))})}),this.q_=new wk(r,i)}}async function mc(t){if(Ea(t))for(const e of t.B_)await e(!0)}async function wa(t){for(const e of t.B_)await e(!1)}function sE(t,e){const n=pe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bp(n)?$p(n):Vs(n).r_()&&Up(n,e))}function Mp(t,e){const n=pe(t),r=Vs(n);n.N_.delete(e),r.r_()&&oE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ea(n)&&n.q_.set("Unknown"))}function Up(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function oE(t,e){t.Q_.xe(e),Vs(t).R_(e)}function $p(t){t.Q_=new C4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function Bp(t){return Ea(t)&&!Vs(t).n_()&&t.N_.size>0}function Ea(t){return pe(t).L_.size===0}function aE(t){t.Q_=void 0}async function xk(t){t.q_.set("Online")}async function Tk(t){t.N_.forEach((e,n)=>{Up(t,e)})}async function Sk(t,e){aE(t),Bp(t)?(t.q_.M_(e),$p(t)):t.q_.set("Unknown")}async function Ck(t,e,n){if(t.q_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await E0(t,r)}else if(e instanceof Vl?t.Q_.Ke(e):e instanceof Kw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await nE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(h);d&&s.N_.set(h,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),oE(s,u);const p=new wr(d.target,u,h,d.sequenceNumber);Up(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await E0(t,r)}}async function E0(t,e,n){if(!va(e))throw e;t.L_.add(1),await wa(t),t.q_.set("Offline"),n||(n=()=>nE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await mc(t)})}async function x0(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Ea(n);n.L_.add(3),await wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await mc(n)}async function Ak(t,e){const n=pe(t);e?(n.L_.delete(2),await mc(n)):e||(n.L_.add(2),await wa(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,i){const s=pe(n);return s.w_(),new vk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xk.bind(null,t),Ro:Tk.bind(null,t),mo:Sk.bind(null,t),d_:Ck.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bp(t)?$p(t):t.q_.set("Unknown")):(await t.K_.stop(),aE(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lE(t,e){if(tr("AsyncQueue",`${e}: ${t}`),va(t))return new re(Q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=vo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(){this.W_=new Qe(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ss(e,n,ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Rk{constructor(){this.queries=S0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=pe(n),s=i.queries;i.queries=S0(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new re(Q.ABORTED,"Firestore shutting down"))}}function S0(){return new Ds(t=>jw(t),cc)}async function Pk(t,e){const n=pe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Ik,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=lE(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&qp(n)}async function kk(t,e){const n=pe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bk(t,e){const n=pe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&qp(n)}function Nk(t,e,n){const r=pe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function qp(t){t.Y_.forEach(e=>{e.next()})}var cf,C0;(C0=cf||(cf={})).ea="default",C0.Cache="cache";class Dk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.key=e}}class cE{constructor(e){this.key=e}}class Vk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Fw(e),this.Ra=new ss(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new T0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),T=hc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;m&&T?m.data.isEqual(T.data)?A!==k&&(r.track({type:3,doc:T}),R=!0):this.ga(m,T)||(r.track({type:2,doc:T}),R=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),R=!0):m&&!T&&(r.track({type:1,doc:m}),R=!0,(u||h)&&(l=!0)),R&&(T?(o=o.add(T),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(T,A){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return k(T)-k(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new T0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new cE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new uE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ok{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Lk{constructor(e){this.key=e,this.va=!1}}class jk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ds(l=>jw(l),cc),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(ie.comparator),this.Na=new Map,this.La=new Lp,this.Ba={},this.ka=new Map,this.qa=Ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fk(t,e,n=!0){const r=mE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hE(r,e,n,!0),i}async function Mk(t,e){const n=mE(t);await hE(n,e,!0,!1)}async function hE(t,e,n,r){const i=await ck(t.localStore,jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Uk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&sE(t.remoteStore,i),l}async function Uk(t,e,n,r,i){t.Ka=(p,m,T)=>async function(k,R,w,y){let _=R.view.ma(w);_.ns&&(_=await v0(k.localStore,R.query,!1).then(({documents:E})=>R.view.ma(E,_)));const D=y&&y.targetChanges.get(R.targetId),F=y&&y.targetMismatches.get(R.targetId)!=null,U=R.view.applyChanges(_,k.isPrimaryClient,D,F);return I0(k,R.targetId,U.wa),U.snapshot}(t,p,m,T);const s=await v0(t.localStore,e,!0),o=new Vk(e,s.Ts),l=o.ma(s.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);I0(t,n,h.wa);const d=new Ok(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function $k(t,e,n){const r=pe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!cc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await uf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mp(r.remoteStore,i.targetId),hf(r,i.targetId)}).catch(Ap)):(hf(r,i.targetId),await uf(r.localStore,i.targetId,!0))}async function Bk(t,e){const n=pe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mp(n.remoteStore,r.targetId))}async function dE(t,e){const n=pe(t);try{const r=await lk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?qe(o.va):i.removedDocuments.size>0&&(qe(o.va),o.va=!1))}),await pE(n,r,e)}catch(r){await Ap(r)}}function A0(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=pe(o);u.onlineState=l;let h=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&qp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zk(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Qe(ie.comparator);o=o.insert(s,Rt.newNoDocument(s,se.min()));const l=ge().add(s),u=new pc(se.min(),new Map,new Qe(we),o,l);await dE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hp(r)}else await uf(r.localStore,e,!1).then(()=>hf(r,e,n)).catch(Ap)}function hf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fE(t,r)})}function fE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Mp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Hp(t))}function I0(t,e,n){for(const r of n)r instanceof uE?(t.La.addReference(r.key,e),qk(t,r)):r instanceof cE?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fE(t,r.key)):ae()}function qk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Hp(t))}function Hp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(ze.fromString(e)),r=t.qa.next();t.Na.set(r,new Lk(n)),t.Oa=t.Oa.insert(n,r),sE(t.remoteStore,new wr(jn(Lw(n.path)),r,"TargetPurposeLimboResolution",Ip.oe))}}async function pE(t,e,n){const r=pe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Fp.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const d=pe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(h,m=>B.forEach(m.$i,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>B.forEach(m.Ui,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!va(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=d.os.get(m),A=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function Hk(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await tE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new re(Q.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pE(n,r.hs)}}function Wk(t,e){const n=pe(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let i=ge();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function mE(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zk.bind(null,e),e.Ca.d_=bk.bind(null,e.eventManager),e.Ca.$a=Nk.bind(null,e.eventManager),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rE(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ak(this.persistence,new sk,e.initialUser,this.serializer)}Ga(e){return new nk(jp.Zr,this.serializer)}Wa(e){return new dk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class df{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await Ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rk}()}createDatastore(e){const n=rE(e.databaseInfo.databaseId),r=function(s){return new gk(s)}(e.databaseInfo);return function(s,o,l,u){return new _k(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Ek(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>A0(this.syncEngine,n,0),function(){return w0.D()?new w0:new fk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,d){const p=new jk(i,s,o,l,u,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=pe(i);ee("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await wa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}df.provider={build:()=>new df};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=DP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qk(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>x0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>x0(e.remoteStore,i)),t._onlineComponents=e}async function Qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Q.FAILED_PRECONDITION||i.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await Rh(t,new Cu)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Rh(t,new Cu);return t._offlineComponents}async function Yk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await R0(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await R0(t,new df))),t._onlineComponents}async function Xk(t){const e=await Yk(t),n=e.eventManager;return n.onListen=Fk.bind(null,e.syncEngine),n.onUnlisten=$k.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Mk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Bk.bind(null,e.syncEngine),n}function Jk(t,e,n={}){const r=new oi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const d=new Kk({next:m=>{d.Za(),o.enqueueAndForget(()=>kk(s,p)),m.fromCache&&u.source==="server"?h.reject(new re(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Dk(l,d,{includeMetadataChanges:!0,_a:!0});return Pk(s,p)}(await Xk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e,n){if(!n)throw new re(Q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function e3(t,e,n,r){if(e===!0&&r===!0)throw new re(Q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k0(t){if(ie.isDocumentKey(t))throw new re(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function t3(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function ff(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=t3(t);throw new re(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CP;switch(r.type){case"firstParty":return new PP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=P0.get(n);r&&(ee("ComponentProvider","Removing Datastore"),P0.delete(n),r.terminate())}(this),Promise.resolve()}}function n3(t,e,n,r={}){var i;const s=(t=ff(t,Wp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=At.MOCK_USER;else{l=sR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new re(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new At(h)}t._authCredentials=new AP(new Rw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gc(this.firestore,e,this._query)}}class Os{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Os(this.firestore,e,this._key)}}class os extends gc{constructor(e,n,r){super(e,n,Lw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Os(this.firestore,null,new ie(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function r3(t,e,...n){if(t=pR(t),Zk("collection","path",e),t instanceof Wp){const r=ze.fromString(e,...n);return k0(r),new os(t,null,r)}{if(!(t instanceof Os||t instanceof os))throw new re(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return k0(r),new os(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iE(this,"async_queue_retry"),this.Vu=()=>{const r=Ih();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ih();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new oi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!va(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=zp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class yE extends Wp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new N0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N0(e),this._firestoreClient=void 0,await e}}}function i3(t,e){const n=typeof t=="object"?t:mP(),r=typeof t=="string"?t:e||"(default)",i=hP(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rR("firestore");s&&n3(i,...s)}return i}function s3(t){if(t._terminated)throw new re(Q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||o3(t),t._firestoreClient}function o3(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,d){return new zP(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,gE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Gk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Au(vt.fromBase64String(e))}catch(n){throw new re(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Au(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const u3=new RegExp("[~\\*/\\[\\]]");function c3(t,e,n){if(e.search(u3)>=0)throw D0(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vE(...e.split("."))._internalPath}catch{throw D0(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function D0(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(Q.INVALID_ARGUMENT,l+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Os(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class h3 extends _E{data(){return super.data()}}function wE(t,e){return typeof e=="string"?c3(t,e):e instanceof vE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f3{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lc(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>We(o.doubleValue));return new l3(s)}convertGeoPoint(e){return new a3(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);qe(eE(r));const i=new aa(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class p3 extends _E{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ol extends p3{data(e={}){return super.data(e)}}class m3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ul(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new ul(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ul(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ul(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:g3(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}class y3 extends f3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Au(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Os(this.firestore,null,n)}}function v3(t){t=ff(t,gc);const e=ff(t.firestore,yE),n=s3(e),r=new y3(e);return d3(t._query),Jk(n,t._query).then(i=>new m3(e,r,t,i))}(function(e,n=!0){(function(i){Ns=i})(pP),wu(new ra("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new yE(new IP(r.getProvider("auth-internal")),new bP(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(h.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),rs(Xy,"4.7.3",e),rs(Xy,"4.7.3","esm2017")})();var _3="firebase",w3="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rs(_3,w3,"app");const E3={apiKey:"AIzaSyDv2xe0_Xy3JBnb_NMNe-pN-3OGE-WLfq0",authDomain:"ikigai-4506d.firebaseapp.com",projectId:"ikigai-4506d",storageBucket:"ikigai-4506d.appspot.com",messagingSenderId:"549956605153",appId:"1:549956605153:web:dc55c518f92536e40193a0",measurementId:"G-NGLRBCA4PYB"},x3=_w(E3),T3=i3(x3),EE=async()=>(await v3(r3(T3,"obras"))).docs.map(n=>({id:n.id,...n.data()}));function xE(t){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256.22 18.375c-132.32 0-239.783 107.43-239.783 239.75S123.9 497.905 256.22 497.905 496 390.446 496 258.126 388.54 18.375 256.22 18.375zm0 17.875c102.773 0 189.092 69.664 214.374 164.406l-79.313-81.47-6.967-7.155-6.688 7.47-77.22 86.438c-11.493-10.268-22.98-20.284-34.467-30.063l-6.563-5.625-6.125 6.156c-18.41 18.527-36.937 37.61-55.438 57.094l-76.437-83.375-6.875-7.5-6.875 7.5-71.188 77.313C51.364 119.34 143.983 36.25 256.22 36.25zm102.25 147.28l-3.845 35.376 21.563-32 10.75 16.688 9.968-8.47 27.188 26.814L417 187.344l19.5 5.062 39.188 40.25.843-.812c1.016 8.618 1.564 17.388 1.564 26.28 0 37.033-9.06 71.917-25.063 102.595-46.25-53.48-92.512-100.116-138.75-142.283l11-12.312 33.19-22.594zM138.31 206.28l26.438 18.782 20.22 22.032c-39.47 42.024-78.63 85.836-115.94 130.344-21.98-34.443-34.718-75.38-34.718-119.313v-.78l16.25-17.658 37.25-20.187-17.187 54.063 41.813-51.22 27.312 32.72-1.438-48.782zm141.375 61.657l53.157 60.938-7.688-54.563L386.312 315c18.918 19.863 37.83 40.733 56.75 62.78l.188-.186C403.853 439.216 334.868 480.03 256.22 480.03c-71.76 0-135.483-33.992-176.033-86.75 19.135-22.91 38.775-45.645 58.72-68.06l56.155-33.814-29.312 76.75 61.53-73.375 6.25 32.19 19.532-36.783 47.844 69.5-21.22-91.75z"},child:[]}]})(t)}function TE(t){return dn({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66ZM160,90h40a6,6,0,0,1,0,12H160a6,6,0,0,1,0-12Zm46,38a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,128Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,160Z"},child:[]}]})(t)}function SE(t){return dn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8V16C2 16.5523 2.44772 17 3 17H16.6202C16.9121 17 17.1895 16.8724 17.3795 16.6508L20.808 12.6508C21.129 12.2763 21.129 11.7237 20.808 11.3492L17.3795 7.34921C17.1895 7.12756 16.9121 7 16.6202 7H3C2.44772 7 2 7.44772 2 8ZM0 8V16C0 17.6569 1.34315 19 3 19H16.6202C17.496 19 18.328 18.6173 18.898 17.9524L22.3265 13.9524C23.2895 12.8289 23.2895 11.1711 22.3265 10.0476L18.898 6.04763C18.328 5.38269 17.496 5 16.6202 5H3C1.34315 5 0 6.34315 0 8Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z",fill:"currentColor"},child:[]}]})(t)}const S3=({setSelectedObra:t})=>{const[e,n]=z.useState([]),[r,i]=z.useState(1),s=15,o=rr();z.useEffect(()=>{(async()=>{const T=await EE();console.log("Datos obtenidos de Firestore:",T),n(T)})()},[]);const l=r*s,u=l-s,h=e.slice(u,l),d=m=>i(m),p=m=>{t(m),o("/obra-info")};return x.jsxs(C3,{children:[x.jsx(A3,{children:"Últimas series"}),x.jsx(R3,{children:h.map(m=>x.jsxs(k3,{onClick:()=>p(m),children:[x.jsx(P3,{children:x.jsx("img",{src:m.avatar,alt:""})}),x.jsxs(b3,{children:[x.jsxs(I3,{children:[x.jsxs(Ph,{estado:m.estado,children:[x.jsx(xE,{}),m.estado]}),x.jsxs(Ph,{children:[x.jsx(TE,{}),m.capitulos," capitulos"]}),x.jsxs(Ph,{children:[x.jsx(SE,{}),m.tipo]})]}),x.jsx(N3,{children:m.nombre})]})]},m.id))}),x.jsx(ya,{itemsPerPage:s,totalItems:e.length,paginate:d,currentPage:r})]})},C3=$.main`
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 2100px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,A3=$.h1`
  margin-bottom: 20px;
  font-size: clamp(14px, 1.5vw, 18px);
  padding-left: 20px;
`,I3=$.div`
  display: flex;
  gap: 6px;
  width: 100%;
`,R3=$.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajuste automático de columnas */
  gap: 10px;
  padding: 20px;
  width: 100%; /* Ancho máximo permitido */
  @media (max-width: 2268px) {
    width: 90%;
  }

  @media (max-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,P3=$.div`
    width: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`,k3=$.div`
  background-color: #161616;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #3f3b3b;
  &:hover {
    border: 1px solid #ffff;
  }
`,b3=$.div`
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1; /* Asegura que use todo el espacio disponible en el contenedor padre */
  overflow: hidden; /* Asegura que el contenido adicional se oculte */
  align-items: center;
`,Ph=$.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: clamp(11px, 0.6em, 18px);
  max-height: 20.34px;
  background-color: ${({estado:t})=>t==="En Curso"?"rgb(129, 140, 248)":"inherit"};
  color: ${({estado:t})=>t==="En Curso"?"#312e2e":"#9b9696"}; 
`,N3=$.h2`
  font-size: 1em;
  margin: 0 0 5px;
  color: #e9e9e9;
  width: calc(100% - 0px); /* Ajusta el ancho para permitir espacio al Badge */
`,D3=({setSelectedObra:t})=>x.jsxs(V3,{children:[x.jsx(S3,{setSelectedObra:t})," "]}),V3=$.main`
  width: 100%;
`;var xa=t=>t.type==="checkbox",Yi=t=>t instanceof Date,Nt=t=>t==null;const CE=t=>typeof t=="object";var ot=t=>!Nt(t)&&!Array.isArray(t)&&CE(t)&&!Yi(t),O3=t=>ot(t)&&t.target?xa(t.target)?t.target.checked:t.target.value:t,L3=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,j3=(t,e)=>t.has(L3(e)),F3=t=>{const e=t.constructor&&t.constructor.prototype;return ot(e)&&e.hasOwnProperty("isPrototypeOf")},Kp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function rn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Kp&&(t instanceof Blob||t instanceof FileList))&&(n||ot(t)))if(e=n?[]:{},!n&&!F3(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=rn(t[r]));else return t;return e}var yc=t=>Array.isArray(t)?t.filter(Boolean):[],He=t=>t===void 0,J=(t,e,n)=>{if(!e||!ot(t))return n;const r=yc(e.split(/[,[\].]+?/)).reduce((i,s)=>Nt(i)?i:i[s],t);return He(r)||r===t?He(t[e])?n:t[e]:r},mr=t=>typeof t=="boolean",Gp=t=>/^\w*$/.test(t),AE=t=>yc(t.replace(/["|']|\]/g,"").split(/\.|\[/)),De=(t,e,n)=>{let r=-1;const i=Gp(e)?[e]:AE(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let u=n;if(r!==o){const h=t[l];u=ot(h)||Array.isArray(h)?h:isNaN(+i[r+1])?{}:[]}if(l==="__proto__")return;t[l]=u,t=t[l]}return t};const V0={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},wn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Re.createContext(null);var M3=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==wn.all&&(e._proxyFormState[o]=!r||wn.all),n&&(n[o]=!0),t[o]}});return i},Ft=t=>ot(t)&&!Object.keys(t).length,U3=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Ft(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||wn.all))},Ll=t=>Array.isArray(t)?t:[t];function $3(t){const e=Re.useRef(t);e.current=t,Re.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Vn=t=>typeof t=="string",B3=(t,e,n,r,i)=>Vn(t)?(r&&e.watch.add(t),J(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),J(n,s))):(r&&(e.watchAll=!0),n),z3=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},O0=t=>({isOnSubmit:!t||t===wn.onSubmit,isOnBlur:t===wn.onBlur,isOnChange:t===wn.onChange,isOnAll:t===wn.all,isOnTouch:t===wn.onTouched}),L0=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const Vo=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=J(t,i);if(s){const{_f:o,...l}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;Vo(l,e)}else ot(l)&&Vo(l,e)}}};var q3=(t,e,n)=>{const r=Ll(J(t,n));return De(r,"root",e[n]),De(t,n,r),t},Qp=t=>t.type==="file",Er=t=>typeof t=="function",Iu=t=>{if(!Kp)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},jl=t=>Vn(t),Yp=t=>t.type==="radio",Ru=t=>t instanceof RegExp;const j0={value:!1,isValid:!1},F0={value:!0,isValid:!0};var IE=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!He(t[0].attributes.value)?He(t[0].value)||t[0].value===""?F0:{value:t[0].value,isValid:!0}:F0:j0}return j0};const M0={isValid:!1,value:null};var RE=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,M0):M0;function U0(t,e,n="validate"){if(jl(t)||Array.isArray(t)&&t.every(jl)||mr(t)&&!t)return{type:n,message:jl(t)?t:"",ref:e}}var Di=t=>ot(t)&&!Ru(t)?t:{value:t,message:""},$0=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:u,minLength:h,min:d,max:p,pattern:m,validate:T,name:A,valueAsNumber:k,mount:R,disabled:w}=t._f,y=J(e,A);if(!R||w)return{};const _=o?o[0]:s,D=b=>{r&&_.reportValidity&&(_.setCustomValidity(mr(b)?"":b||""),_.reportValidity())},F={},U=Yp(s),E=xa(s),v=U||E,C=(k||Qp(s))&&He(s.value)&&He(y)||Iu(s)&&s.value===""||y===""||Array.isArray(y)&&!y.length,I=z3.bind(null,A,n,F),N=(b,S,he,Ce=Bn.maxLength,et=Bn.minLength)=>{const Ae=b?S:he;F[A]={type:b?Ce:et,message:Ae,ref:s,...I(b?Ce:et,Ae)}};if(i?!Array.isArray(y)||!y.length:l&&(!v&&(C||Nt(y))||mr(y)&&!y||E&&!IE(o).isValid||U&&!RE(o).isValid)){const{value:b,message:S}=jl(l)?{value:!!l,message:l}:Di(l);if(b&&(F[A]={type:Bn.required,message:S,ref:_,...I(Bn.required,S)},!n))return D(S),F}if(!C&&(!Nt(d)||!Nt(p))){let b,S;const he=Di(p),Ce=Di(d);if(!Nt(y)&&!isNaN(y)){const et=s.valueAsNumber||y&&+y;Nt(he.value)||(b=et>he.value),Nt(Ce.value)||(S=et<Ce.value)}else{const et=s.valueAsDate||new Date(y),Ae=ne=>new Date(new Date().toDateString()+" "+ne),K=s.type=="time",Z=s.type=="week";Vn(he.value)&&y&&(b=K?Ae(y)>Ae(he.value):Z?y>he.value:et>new Date(he.value)),Vn(Ce.value)&&y&&(S=K?Ae(y)<Ae(Ce.value):Z?y<Ce.value:et<new Date(Ce.value))}if((b||S)&&(N(!!b,he.message,Ce.message,Bn.max,Bn.min),!n))return D(F[A].message),F}if((u||h)&&!C&&(Vn(y)||i&&Array.isArray(y))){const b=Di(u),S=Di(h),he=!Nt(b.value)&&y.length>+b.value,Ce=!Nt(S.value)&&y.length<+S.value;if((he||Ce)&&(N(he,b.message,S.message),!n))return D(F[A].message),F}if(m&&!C&&Vn(y)){const{value:b,message:S}=Di(m);if(Ru(b)&&!y.match(b)&&(F[A]={type:Bn.pattern,message:S,ref:s,...I(Bn.pattern,S)},!n))return D(S),F}if(T){if(Er(T)){const b=await T(y,e),S=U0(b,_);if(S&&(F[A]={...S,...I(Bn.validate,S.message)},!n))return D(S.message),F}else if(ot(T)){let b={};for(const S in T){if(!Ft(b)&&!n)break;const he=U0(await T[S](y,e),_,S);he&&(b={...he,...I(S,he.message)},D(he.message),n&&(F[A]=b))}if(!Ft(b)&&(F[A]={ref:_,...b},!n))return F}}return D(!0),F};function H3(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=He(t)?r++:t[e[r++]];return t}function W3(t){for(const e in t)if(t.hasOwnProperty(e)&&!He(t[e]))return!1;return!0}function nt(t,e){const n=Array.isArray(e)?e:Gp(e)?[e]:AE(e),r=n.length===1?t:H3(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ot(r)&&Ft(r)||Array.isArray(r)&&W3(r))&&nt(t,n.slice(0,-1)),t}var kh=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},Pu=t=>Nt(t)||!CE(t);function ei(t,e){if(Pu(t)||Pu(e))return t===e;if(Yi(t)&&Yi(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Yi(s)&&Yi(o)||ot(s)&&ot(o)||Array.isArray(s)&&Array.isArray(o)?!ei(s,o):s!==o)return!1}}return!0}var PE=t=>t.type==="select-multiple",K3=t=>Yp(t)||xa(t),bh=t=>Iu(t)&&t.isConnected,kE=t=>{for(const e in t)if(Er(t[e]))return!0;return!1};function ku(t,e={}){const n=Array.isArray(t);if(ot(t)||n)for(const r in t)Array.isArray(t[r])||ot(t[r])&&!kE(t[r])?(e[r]=Array.isArray(t[r])?[]:{},ku(t[r],e[r])):Nt(t[r])||(e[r]=!0);return e}function bE(t,e,n){const r=Array.isArray(t);if(ot(t)||r)for(const i in t)Array.isArray(t[i])||ot(t[i])&&!kE(t[i])?He(e)||Pu(n[i])?n[i]=Array.isArray(t[i])?ku(t[i],[]):{...ku(t[i])}:bE(t[i],Nt(e)?{}:e[i],n[i]):n[i]=!ei(t[i],e[i]);return n}var cl=(t,e)=>bE(t,e,ku(e)),NE=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>He(t)?t:e?t===""?NaN:t&&+t:n&&Vn(t)?new Date(t):r?r(t):t;function Nh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Qp(e)?e.files:Yp(e)?RE(t.refs).value:PE(e)?[...e.selectedOptions].map(({value:n})=>n):xa(e)?IE(t.refs).value:NE(He(e.value)?t.ref.value:e.value,t)}var G3=(t,e,n,r)=>{const i={};for(const s of t){const o=J(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},so=t=>He(t)?t:Ru(t)?t.source:ot(t)?Ru(t.value)?t.value.source:t.value:t,Q3=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function B0(t,e,n){const r=J(t,n);if(r||Gp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=J(e,s),l=J(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var Y3=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,X3=(t,e)=>!yc(J(t,e)).length&&nt(t,e);const J3={mode:wn.onSubmit,reValidateMode:wn.onChange,shouldFocusError:!0};function Z3(t={}){let e={...J3,...t},n={submitCount:0,isDirty:!1,isLoading:Er(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=ot(e.defaultValues)||ot(e.values)?rn(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:rn(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,h=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:kh(),array:kh(),state:kh()},m=O0(e.mode),T=O0(e.reValidateMode),A=e.criteriaMode===wn.all,k=P=>O=>{clearTimeout(h),h=setTimeout(P,O)},R=async P=>{if(d.isValid||P){const O=e.resolver?Ft((await v()).errors):await I(r,!0);O!==n.isValid&&p.state.next({isValid:O})}},w=(P,O)=>{(d.isValidating||d.validatingFields)&&((P||Array.from(l.mount)).forEach(M=>{M&&(O?De(n.validatingFields,M,O):nt(n.validatingFields,M))}),p.state.next({validatingFields:n.validatingFields,isValidating:!Ft(n.validatingFields)}))},y=(P,O=[],M,Y,G=!0,H=!0)=>{if(Y&&M){if(o.action=!0,H&&Array.isArray(J(r,P))){const te=M(J(r,P),Y.argA,Y.argB);G&&De(r,P,te)}if(H&&Array.isArray(J(n.errors,P))){const te=M(J(n.errors,P),Y.argA,Y.argB);G&&De(n.errors,P,te),X3(n.errors,P)}if(d.touchedFields&&H&&Array.isArray(J(n.touchedFields,P))){const te=M(J(n.touchedFields,P),Y.argA,Y.argB);G&&De(n.touchedFields,P,te)}d.dirtyFields&&(n.dirtyFields=cl(i,s)),p.state.next({name:P,isDirty:b(P,O),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else De(s,P,O)},_=(P,O)=>{De(n.errors,P,O),p.state.next({errors:n.errors})},D=P=>{n.errors=P,p.state.next({errors:n.errors,isValid:!1})},F=(P,O,M,Y)=>{const G=J(r,P);if(G){const H=J(s,P,He(M)?J(i,P):M);He(H)||Y&&Y.defaultChecked||O?De(s,P,O?H:Nh(G._f)):Ce(P,H),o.mount&&R()}},U=(P,O,M,Y,G)=>{let H=!1,te=!1;const de={name:P},Oe=!!(J(r,P)&&J(r,P)._f&&J(r,P)._f.disabled);if(!M||Y){d.isDirty&&(te=n.isDirty,n.isDirty=de.isDirty=b(),H=te!==de.isDirty);const Ee=Oe||ei(J(i,P),O);te=!!(!Oe&&J(n.dirtyFields,P)),Ee||Oe?nt(n.dirtyFields,P):De(n.dirtyFields,P,!0),de.dirtyFields=n.dirtyFields,H=H||d.dirtyFields&&te!==!Ee}if(M){const Ee=J(n.touchedFields,P);Ee||(De(n.touchedFields,P,M),de.touchedFields=n.touchedFields,H=H||d.touchedFields&&Ee!==M)}return H&&G&&p.state.next(de),H?de:{}},E=(P,O,M,Y)=>{const G=J(n.errors,P),H=d.isValid&&mr(O)&&n.isValid!==O;if(t.delayError&&M?(u=k(()=>_(P,M)),u(t.delayError)):(clearTimeout(h),u=null,M?De(n.errors,P,M):nt(n.errors,P)),(M?!ei(G,M):G)||!Ft(Y)||H){const te={...Y,...H&&mr(O)?{isValid:O}:{},errors:n.errors,name:P};n={...n,...te},p.state.next(te)}},v=async P=>{w(P,!0);const O=await e.resolver(s,e.context,G3(P||l.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return w(P),O},C=async P=>{const{errors:O}=await v(P);if(P)for(const M of P){const Y=J(O,M);Y?De(n.errors,M,Y):nt(n.errors,M)}else n.errors=O;return O},I=async(P,O,M={valid:!0})=>{for(const Y in P){const G=P[Y];if(G){const{_f:H,...te}=G;if(H){const de=l.array.has(H.name);w([Y],!0);const Oe=await $0(G,s,A,e.shouldUseNativeValidation&&!O,de);if(w([Y]),Oe[H.name]&&(M.valid=!1,O))break;!O&&(J(Oe,H.name)?de?q3(n.errors,Oe,H.name):De(n.errors,H.name,Oe[H.name]):nt(n.errors,H.name))}!Ft(te)&&await I(te,O,M)}}return M.valid},N=()=>{for(const P of l.unMount){const O=J(r,P);O&&(O._f.refs?O._f.refs.every(M=>!bh(M)):!bh(O._f.ref))&&tt(P)}l.unMount=new Set},b=(P,O)=>(P&&O&&De(s,P,O),!ei(ve(),i)),S=(P,O,M)=>B3(P,l,{...o.mount?s:He(O)?i:Vn(P)?{[P]:O}:O},M,O),he=P=>yc(J(o.mount?s:i,P,t.shouldUnregister?J(i,P,[]):[])),Ce=(P,O,M={})=>{const Y=J(r,P);let G=O;if(Y){const H=Y._f;H&&(!H.disabled&&De(s,P,NE(O,H)),G=Iu(H.ref)&&Nt(O)?"":O,PE(H.ref)?[...H.ref.options].forEach(te=>te.selected=G.includes(te.value)):H.refs?xa(H.ref)?H.refs.length>1?H.refs.forEach(te=>(!te.defaultChecked||!te.disabled)&&(te.checked=Array.isArray(G)?!!G.find(de=>de===te.value):G===te.value)):H.refs[0]&&(H.refs[0].checked=!!G):H.refs.forEach(te=>te.checked=te.value===G):Qp(H.ref)?H.ref.value="":(H.ref.value=G,H.ref.type||p.values.next({name:P,values:{...s}})))}(M.shouldDirty||M.shouldTouch)&&U(P,G,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&ne(P)},et=(P,O,M)=>{for(const Y in O){const G=O[Y],H=`${P}.${Y}`,te=J(r,H);(l.array.has(P)||!Pu(G)||te&&!te._f)&&!Yi(G)?et(H,G,M):Ce(H,G,M)}},Ae=(P,O,M={})=>{const Y=J(r,P),G=l.array.has(P),H=rn(O);De(s,P,H),G?(p.array.next({name:P,values:{...s}}),(d.isDirty||d.dirtyFields)&&M.shouldDirty&&p.state.next({name:P,dirtyFields:cl(i,s),isDirty:b(P,H)})):Y&&!Y._f&&!Nt(H)?et(P,H,M):Ce(P,H,M),L0(P,l)&&p.state.next({...n}),p.values.next({name:o.mount?P:void 0,values:{...s}})},K=async P=>{o.mount=!0;const O=P.target;let M=O.name,Y=!0;const G=J(r,M),H=()=>O.type?Nh(G._f):O3(P),te=de=>{Y=Number.isNaN(de)||de===J(s,M,de)};if(G){let de,Oe;const Ee=H(),Ue=P.type===V0.BLUR||P.type===V0.FOCUS_OUT,Si=!Q3(G._f)&&!e.resolver&&!J(n.errors,M)&&!G._f.deps||Y3(Ue,J(n.touchedFields,M),n.isSubmitted,T,m),Ci=L0(M,l,Ue);De(s,M,Ee),Ue?(G._f.onBlur&&G._f.onBlur(P),u&&u(0)):G._f.onChange&&G._f.onChange(P);const Ai=U(M,Ee,Ue,!1),Ec=!Ft(Ai)||Ci;if(!Ue&&p.values.next({name:M,type:P.type,values:{...s}}),Si)return d.isValid&&R(),Ec&&p.state.next({name:M,...Ci?{}:Ai});if(!Ue&&Ci&&p.state.next({...n}),e.resolver){const{errors:ir}=await v([M]);if(te(Ee),Y){const Sa=B0(n.errors,r,M),Ls=B0(ir,r,Sa.name||M);de=Ls.error,M=Ls.name,Oe=Ft(ir)}}else w([M],!0),de=(await $0(G,s,A,e.shouldUseNativeValidation))[M],w([M]),te(Ee),Y&&(de?Oe=!1:d.isValid&&(Oe=await I(r,!0)));Y&&(G._f.deps&&ne(G._f.deps),E(M,Oe,de,Ai))}},Z=(P,O)=>{if(J(n.errors,O)&&P.focus)return P.focus(),1},ne=async(P,O={})=>{let M,Y;const G=Ll(P);if(e.resolver){const H=await C(He(P)?P:G);M=Ft(H),Y=P?!G.some(te=>J(H,te)):M}else P?(Y=(await Promise.all(G.map(async H=>{const te=J(r,H);return await I(te&&te._f?{[H]:te}:te)}))).every(Boolean),!(!Y&&!n.isValid)&&R()):Y=M=await I(r);return p.state.next({...!Vn(P)||d.isValid&&M!==n.isValid?{}:{name:P},...e.resolver||!P?{isValid:M}:{},errors:n.errors}),O.shouldFocus&&!Y&&Vo(r,Z,P?G:l.mount),Y},ve=P=>{const O={...o.mount?s:i};return He(P)?O:Vn(P)?J(O,P):P.map(M=>J(O,M))},ue=(P,O)=>({invalid:!!J((O||n).errors,P),isDirty:!!J((O||n).dirtyFields,P),error:J((O||n).errors,P),isValidating:!!J(n.validatingFields,P),isTouched:!!J((O||n).touchedFields,P)}),Ie=P=>{P&&Ll(P).forEach(O=>nt(n.errors,O)),p.state.next({errors:P?n.errors:{}})},_t=(P,O,M)=>{const Y=(J(r,P,{_f:{}})._f||{}).ref,G=J(n.errors,P)||{},{ref:H,message:te,type:de,...Oe}=G;De(n.errors,P,{...Oe,...O,ref:Y}),p.state.next({name:P,errors:n.errors,isValid:!1}),M&&M.shouldFocus&&Y&&Y.focus&&Y.focus()},wt=(P,O)=>Er(P)?p.values.subscribe({next:M=>P(S(void 0,O),M)}):S(P,O,!0),tt=(P,O={})=>{for(const M of P?Ll(P):l.mount)l.mount.delete(M),l.array.delete(M),O.keepValue||(nt(r,M),nt(s,M)),!O.keepError&&nt(n.errors,M),!O.keepDirty&&nt(n.dirtyFields,M),!O.keepTouched&&nt(n.touchedFields,M),!O.keepIsValidating&&nt(n.validatingFields,M),!e.shouldUnregister&&!O.keepDefaultValue&&nt(i,M);p.values.next({values:{...s}}),p.state.next({...n,...O.keepDirty?{isDirty:b()}:{}}),!O.keepIsValid&&R()},at=({disabled:P,name:O,field:M,fields:Y,value:G})=>{if(mr(P)&&o.mount||P){const H=P?void 0:He(G)?Nh(M?M._f:J(Y,O)._f):G;De(s,O,H),U(O,H,!1,!1,!0)}},fn=(P,O={})=>{let M=J(r,P);const Y=mr(O.disabled);return De(r,P,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:P}},name:P,mount:!0,...O}}),l.mount.add(P),M?at({field:M,disabled:O.disabled,name:P,value:O.value}):F(P,!0,O.value),{...Y?{disabled:O.disabled}:{},...e.progressive?{required:!!O.required,min:so(O.min),max:so(O.max),minLength:so(O.minLength),maxLength:so(O.maxLength),pattern:so(O.pattern)}:{},name:P,onChange:K,onBlur:K,ref:G=>{if(G){fn(P,O),M=J(r,P);const H=He(G.value)&&G.querySelectorAll&&G.querySelectorAll("input,select,textarea")[0]||G,te=K3(H),de=M._f.refs||[];if(te?de.find(Oe=>Oe===H):H===M._f.ref)return;De(r,P,{_f:{...M._f,...te?{refs:[...de.filter(bh),H,...Array.isArray(J(i,P))?[{}]:[]],ref:{type:H.type,name:P}}:{ref:H}}}),F(P,!1,void 0,H)}else M=J(r,P,{}),M._f&&(M._f.mount=!1),(e.shouldUnregister||O.shouldUnregister)&&!(j3(l.array,P)&&o.action)&&l.unMount.add(P)}}},tn=()=>e.shouldFocusError&&Vo(r,Z,l.mount),Rn=P=>{mr(P)&&(p.state.next({disabled:P}),Vo(r,(O,M)=>{const Y=J(r,M);Y&&(O.disabled=Y._f.disabled||P,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(G=>{G.disabled=Y._f.disabled||P}))},0,!1))},nn=(P,O)=>async M=>{let Y;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let G=rn(s);if(p.state.next({isSubmitting:!0}),e.resolver){const{errors:H,values:te}=await v();n.errors=H,G=te}else await I(r);if(nt(n.errors,"root"),Ft(n.errors)){p.state.next({errors:{}});try{await P(G,M)}catch(H){Y=H}}else O&&await O({...n.errors},M),tn(),setTimeout(tn);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ft(n.errors)&&!Y,submitCount:n.submitCount+1,errors:n.errors}),Y)throw Y},jt=(P,O={})=>{J(r,P)&&(He(O.defaultValue)?Ae(P,rn(J(i,P))):(Ae(P,O.defaultValue),De(i,P,rn(O.defaultValue))),O.keepTouched||nt(n.touchedFields,P),O.keepDirty||(nt(n.dirtyFields,P),n.isDirty=O.defaultValue?b(P,rn(J(i,P))):b()),O.keepError||(nt(n.errors,P),d.isValid&&R()),p.state.next({...n}))},xi=(P,O={})=>{const M=P?rn(P):i,Y=rn(M),G=Ft(P),H=G?i:Y;if(O.keepDefaultValues||(i=M),!O.keepValues){if(O.keepDirtyValues)for(const te of l.mount)J(n.dirtyFields,te)?De(H,te,J(s,te)):Ae(te,J(H,te));else{if(Kp&&He(P))for(const te of l.mount){const de=J(r,te);if(de&&de._f){const Oe=Array.isArray(de._f.refs)?de._f.refs[0]:de._f.ref;if(Iu(Oe)){const Ee=Oe.closest("form");if(Ee){Ee.reset();break}}}}r={}}s=t.shouldUnregister?O.keepDefaultValues?rn(i):{}:rn(H),p.array.next({values:{...H}}),p.values.next({values:{...H}})}l={mount:O.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!d.isValid||!!O.keepIsValid||!!O.keepDirtyValues,o.watch=!!t.shouldUnregister,p.state.next({submitCount:O.keepSubmitCount?n.submitCount:0,isDirty:G?!1:O.keepDirty?n.isDirty:!!(O.keepDefaultValues&&!ei(P,i)),isSubmitted:O.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:G?{}:O.keepDirtyValues?O.keepDefaultValues&&s?cl(i,s):n.dirtyFields:O.keepDefaultValues&&P?cl(i,P):O.keepDirty?n.dirtyFields:{},touchedFields:O.keepTouched?n.touchedFields:{},errors:O.keepErrors?n.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ti=(P,O)=>xi(Er(P)?P(s):P,O);return{control:{register:fn,unregister:tt,getFieldState:ue,handleSubmit:nn,setError:_t,_executeSchema:v,_getWatch:S,_getDirty:b,_updateValid:R,_removeUnmounted:N,_updateFieldArray:y,_updateDisabledField:at,_getFieldArray:he,_reset:xi,_resetDefaultValues:()=>Er(e.defaultValues)&&e.defaultValues().then(P=>{Ti(P,e.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:P=>{n={...n,...P}},_disableForm:Rn,_subjects:p,_proxyFormState:d,_setErrors:D,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(P){o=P},get _defaultValues(){return i},get _names(){return l},set _names(P){l=P},get _formState(){return n},set _formState(P){n=P},get _options(){return e},set _options(P){e={...e,...P}}},trigger:ne,register:fn,handleSubmit:nn,watch:wt,setValue:Ae,getValues:ve,reset:Ti,resetField:jt,clearErrors:Ie,unregister:tt,setError:_t,setFocus:(P,O={})=>{const M=J(r,P),Y=M&&M._f;if(Y){const G=Y.refs?Y.refs[0]:Y.ref;G.focus&&(G.focus(),O.shouldSelect&&G.select())}},getFieldState:ue}}function e5(t={}){const e=Re.useRef(),n=Re.useRef(),[r,i]=Re.useState({isDirty:!1,isValidating:!1,isLoading:Er(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Er(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...Z3(t),formState:r});const s=e.current.control;return s._options=t,$3({subject:s._subjects.state,next:o=>{U3(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Re.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),Re.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Re.useEffect(()=>{t.values&&!ei(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),Re.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),Re.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),Re.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=M3(r,s),e.current}const t5=async t=>{try{const e=await Ge.post("https://66abe0b7f009b9d5c7309922.mockapi.io/api/v1/obras",t,{headers:{"Content-Type":"application/json"}});return console.log("Obra creada exitosamente"),e.data}catch(e){throw console.error("Error al crear la obra:",e),e}},n5=()=>{const{register:t,handleSubmit:e,reset:n,formState:{errors:r}}=e5(),i=async s=>{const o={...s,id:Date.now().toString(),estado:"En Curso"};try{const l=await t5(o);console.log("Obra creada exitosamente:",l),n()}catch(l){console.error("Error al crear la obra:",l)}};return x.jsxs(r5,{children:[x.jsx("h1",{children:"Agregar Nueva Obra"}),x.jsxs("form",{onSubmit:e(i),children:[x.jsxs(oo,{children:[x.jsx("label",{children:"Nombre:"}),x.jsx("input",{...t("nombre",{required:"El nombre es obligatorio",minLength:{value:3,message:"El nombre debe tener al menos 3 caracteres"}}),placeholder:"Nombre de la obra"}),r.nombre&&x.jsx(ao,{children:r.nombre.message})]}),x.jsxs(oo,{children:[x.jsx("label",{children:"Avatar (URL):"}),x.jsx("input",{...t("avatar",{required:"La URL del avatar es obligatoria",pattern:{value:/^(ftp|http|https):\/\/[^ "]+$/,message:"Debe ser una URL válida"}}),placeholder:"URL de la imagen del avatar"}),r.avatar&&x.jsx(ao,{children:r.avatar.message})]}),x.jsxs(oo,{children:[x.jsx("label",{children:"Capítulos:"}),x.jsx("input",{type:"number",...t("capitulos",{required:"El número de capítulos es obligatorio",min:{value:1,message:"Debe tener al menos 1 capítulo"}}),placeholder:"Número de capítulos"}),r.capitulos&&x.jsx(ao,{children:r.capitulos.message})]}),x.jsxs(oo,{children:[x.jsx("label",{children:"Tipo:"}),x.jsxs("select",{...t("tipo",{required:"El tipo es obligatorio"}),children:[x.jsx("option",{value:"Comic",children:"Comic"}),x.jsx("option",{value:"Manga",children:"Manga"}),x.jsx("option",{value:"Novela",children:"Novela"})]}),r.tipo&&x.jsx(ao,{children:r.tipo.message})]}),x.jsxs(oo,{children:[x.jsx("label",{children:"Descripción:"}),x.jsx("textarea",{...t("descripcion",{required:"La descripción es obligatoria",minLength:{value:10,message:"La descripción debe tener al menos 10 caracteres"}}),placeholder:"Descripción de la obra"}),r.descripcion&&x.jsx(ao,{children:r.descripcion.message})]}),x.jsx(i5,{type:"submit",children:"Agregar Obra"})]})]})},r5=$.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 150px;
`,oo=$.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #ffffff;
  }

  input,
  select,
  textarea {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #2e2e2e;
    color: #ffffff;
  }
`,i5=$.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`,ao=$.span`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 5px;
`,s5=()=>x.jsx("h1",{children:"Biblioteca Page"}),o5=()=>x.jsx("h1",{children:"Biblioteca Page"}),DE="https://LucasRenatoMelgaRios.github.io/PaginaPrueba/assets/nombrePagina--tJqWKdj.png",a5="https://LucasRenatoMelgaRios.github.io/PaginaPrueba/assets/userImage--eZQnlj8.png",l5=$.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 15px 10px 15px 0px;
  max-width: 200px; /* Ancho máximo por defecto */
  height: 40px;
  color: #ffffff;
  background-color: #4e4d4d2e;
  overflow: hidden; /* Evita el desbordamiento */

  @media (max-width: 310px) {
    max-width: 120px; /* Reducir el ancho en pantallas pequeñas */
    height: 20px; /* Reducir la altura en pantallas pequeñas */
    padding: 10px 8px; /* Ajustar el padding */
  }
`,u5=$.input`
  background-color: transparent;
  border: none;
  color: #ffffff;
  flex: 1;
  outline: none;
  padding: 5px;
  padding-left: 20px;

  /* Evitar desbordamiento del texto */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Estilo del placeholder */
  ::placeholder {
    color: #ffffff; /* Placeholder blanco */
  }

  @media (max-width: 310px) {
    font-size: 12px; /* Reducir tamaño de fuente en pantallas pequeñas */
    padding-left: 10px; /* Ajustar padding para mantener espacio */
  }
`,c5=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: -45px;

  svg {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 310px) {
    margin-left: -35px; /* Ajustar posición del ícono en pantallas pequeñas */
    svg {
      width: 14px; /* Reducir tamaño del ícono */
      height: 14px;
    }
  }
`,h5=({setSearchQuery:t})=>{const[e,n]=z.useState(""),r=rr(),i=l=>{n(l.target.value)},s=()=>{console.log("Submitting search:",e),t(e),r("/resultados")},o=l=>{l.key==="Enter"&&s()};return x.jsxs(l5,{children:[x.jsx(u5,{type:"text",placeholder:"Buscar...",value:e,onChange:i,onKeyDown:o}),x.jsx(c5,{onClick:s,children:x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:x.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.442 1.058a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"})})})]})};function vc(t){return dn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(t)}function VE(t){return dn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(t)}function d5(t){return dn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function OE(t){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(t)}const f5=({setSearchQuery:t})=>{const[e,n]=z.useState(!1),r=()=>{n(i=>!i)};return z.useEffect(()=>{const i=()=>{window.innerWidth>740&&n(!1)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),x.jsxs(x.Fragment,{children:[x.jsx(p5,{children:x.jsxs(m5,{children:[x.jsx(g5,{children:x.jsx(_n,{to:"/",children:x.jsx("img",{src:DE,alt:"Marca"})})}),x.jsx(y5,{children:x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx(hl,{to:"/",children:"Inicio"})}),x.jsx("li",{children:x.jsx(hl,{to:"/biblioteca",children:"Biblioteca"})}),x.jsx("li",{children:x.jsx(hl,{to:"/clasificacion",children:"Clasificación"})}),x.jsx("li",{children:x.jsx(hl,{to:"/grupos",children:"Grupos"})})]})}),x.jsxs(v5,{children:[x.jsx(h5,{setSearchQuery:t}),x.jsx("img",{src:a5,alt:"Usuario"}),x.jsx(_5,{onClick:r,children:x.jsx(d5,{size:24,color:"#fff"})})]})]})}),e&&x.jsx(w5,{children:x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx(_n,{to:"/",onClick:r,children:"Inicio"})}),x.jsx("li",{children:x.jsx(_n,{to:"/biblioteca",onClick:r,children:"Biblioteca"})}),x.jsx("li",{children:x.jsx(_n,{to:"/clasificacion",onClick:r,children:"Clasificación"})}),x.jsx("li",{children:x.jsx(_n,{to:"/grupos",onClick:r,children:"Grupos"})})]})})]})},p5=$.header`
  display: flex;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  height: clamp(40px, 6vh, 100px);
  background-color: rgb(25, 25, 25);
  box-shadow: 0 7px 8px rgb(29, 29, 29);
  align-items: center;
  justify-content: center;
  position: relative;
`,m5=$.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: clamp(10px, 5vw, 30px);
  justify-content: space-between;
  padding: 0 clamp(10px, 2vw, 20px);
  margin-top: clamp(10px, 2vh, 20px);

  @media (max-width: 865px) {
    justify-content: space-around;
  }
`,g5=$.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: clamp(50px, 10vw, 120px);
    margin-top: 5px;
  }
`,y5=$.nav`
  flex: 3;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: clamp(5px, 1.5vw, 20px);
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul > li > a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: clamp(10px, 0.7vw, 16px);
  }

  @media (max-width: 865px) {
    display: none; /* Ocultar el NavBar en pantallas pequeñas */
  }
`,v5=$.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: clamp(25px, 3vw, 50px);
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`,_5=$.div`
  display: none;

  @media (max-width: 865px) {
    display: block;
    cursor: pointer;
  }
`,w5=$.nav`
  position: fixed; /* Asegúrate de que esté fijo en la parte superior */
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(5, 4, 4, 0.95); /* Fondo más opaco */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  z-index: 10; /* Asegúrate de que esté encima de otros elementos */
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar verticalmente el contenido */
  flex-direction: column; /* Alinear el contenido en una columna */
  overflow-y: auto; /* Habilitar el desplazamiento si es necesario */

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
    }
  }
`,hl=$(_n)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(14px, 2vw, 16px);
  padding: 5px 15px;
  border: 1px solid #2b2727;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid #f5f5f5;
  }
`;function E5(t){return dn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(t)}const x5=()=>x.jsxs(x.Fragment,{children:[x.jsxs(T5,{children:[x.jsxs(S5,{children:[x.jsx("img",{src:DE,alt:"Marca"}),x.jsx(C5,{children:"9 de cada 10 médicos recomiendan leer su serie en ikigai mangas."}),x.jsx(E5,{})]}),x.jsxs(A5,{children:[x.jsx(lo,{children:"Condiciones del Servicio"}),x.jsx(lo,{children:"Política de Privacidad"}),x.jsx(lo,{children:"Acerca de Nosotros"}),x.jsx(lo,{children:"Discord"}),x.jsx(lo,{children:"Contacto"})]})]}),x.jsx(I5,{})]}),T5=$.footer`
  display: flex;
  width: 100%;
  height: clamp(250px, 45vh, 600px); /* Ajuste flexible para el alto */
  padding: clamp(15px, 5vw, 40px) 0; /* Ajuste de padding */
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(8, 8, 8);
  box-shadow: 0 -7px 8px rgb(29, 29, 29);
  align-items: center;
  justify-content: space-around;

  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
    height: auto; /* Para pantallas pequeñas, permitir que la altura se ajuste automáticamente */
  }
`,S5=$.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(10px, 4vw, 30px); /* Ajuste del gap entre elementos */

  img {
    width: clamp(100px, 20vw, 250px);
    margin-left: -10px;
  }

  svg {
    font-size: clamp(25px, 5vw, 50px); /* Ajuste dinámico del icono */
  }

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`,C5=$.p`
  color: rgb(164, 166, 168);
  font-size: clamp(14px, 1.5vw, 20px); /* Ajuste del tamaño de texto */
  line-height: clamp(20px, 4vw, 28px); /* Ajuste dinámico de la altura de línea */
  width: clamp(70%, 80%, 90%); /* Ajuste flexible del ancho */
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
    text-align: center; /* Centrar el texto en pantallas pequeñas */
  }
`,lo=$.button`
  font-size: clamp(6px, 1vw, 10px); /* Ajuste del tamaño de texto en botones */
  transition: background-color 0.3s;
  border: 1px solid #2b2727;
  cursor: pointer;
  background-color: inherit;
  color: rgb(216, 212, 212);
  padding: clamp(8px, 2vw, 15px); /* Ajuste del padding interno */
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: clamp(120px, 20vw, 180px); /* Ancho mínimo dinámico */

  &:hover {
    border: 1px solid #f5f5f5;
  }

  @media (max-width: 460px) {
    font-size: clamp(6px, 1vw, 10px); /* Ajuste del tamaño de texto en botones */
    padding: 10px;
    min-width: 140px;
  }

    @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr; /* En pantallas muy pequeñas, un botón por fila */
  }
`,A5=$.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Mantiene dos columnas */
  gap: clamp(10px, 2vw, 20px); /* Ajuste del espacio entre botones */

  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr; /* Mantener dos botones por fila en pantallas más pequeñas */
    gap: 5px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* En pantallas muy pequeñas, un botón por fila */
  }
`,I5=$.div`
  width: 100%;
  padding: clamp(10px, 2vw, 20px);
  text-align: center;
  color: rgb(164, 166, 168);
  font-size: clamp(10px, 1vw, 14px); /* Texto pequeño con ajuste flexible */
`,R5=({selectedSerie:t})=>{const[e,n]=z.useState(!1),[r,i]=z.useState(1),[s,o]=z.useState(!0),l=15,u=rr(),h=()=>{n(!e)},d=()=>{o(!s)};if(!t)return u("/"),null;const p=Array.from({length:t.capitulo},(w,y)=>({numero:y+1,fecha:"Hace 10 meses",likes:Math.floor(Math.random()*20)+1,imagen:t.imagen})),m=[...p].sort((w,y)=>s?w.numero-y.numero:y.numero-w.numero),T=r*l,A=T-l,k=m.slice(A,T),R=w=>i(w);return x.jsx(P5,{children:x.jsxs(k5,{children:[x.jsxs(b5,{expanded:e,children:[x.jsxs(N5,{children:[x.jsx(uo,{children:t.tipo}),x.jsx(uo,{children:"En Curso"})]}),x.jsx(D5,{children:x.jsx("img",{src:t.imagen,alt:t.nombre})}),x.jsxs(V5,{expanded:e,children:[x.jsx(O5,{children:t.nombre})," ",x.jsx(L5,{expanded:e,children:"Yura, que sufre de fobia al contacto físico, solo está con su amigo de la infancia Hae-won, pero cuando conoce a Go In woo, Kwon Mina y otras personas, aprende nuevas emociones y construye relaciones verdaderas."}),x.jsx(j5,{onClick:h,children:e?x.jsxs(x.Fragment,{children:["Ver menos ",x.jsx(VE,{})," "]}):x.jsxs(x.Fragment,{children:["Ver más ",x.jsx(vc,{})," "]})}),x.jsxs(F5,{children:[x.jsx(uo,{children:"Romance"}),x.jsx(uo,{children:"Drama"}),x.jsx(uo,{children:"Vida Escolar"})]})]})]}),x.jsxs(M5,{children:[x.jsxs(U5,{children:[x.jsxs($5,{children:[t.capitulo," Capítulos"]}),x.jsxs(B5,{onClick:d,children:[s?"Ascendente":"Descendente"," ",x.jsx(z5,{isAscending:s})]})]}),x.jsx(q5,{children:k.map(w=>x.jsxs(H5,{children:[x.jsx(W5,{src:w.imagen,alt:`Capítulo ${w.numero}`}),x.jsxs(K5,{children:[x.jsxs(G5,{children:["Capítulo ",w.numero]}),x.jsxs(Q5,{children:[x.jsx("span",{children:w.fecha}),x.jsxs(Y5,{children:[x.jsx(OE,{}),x.jsx("span",{children:w.likes})]})]})]})]},w.numero))}),x.jsx(ya,{itemsPerPage:l,totalItems:p.length,paginate:R,currentPage:r})]})]})})},P5=$.main`
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 2100px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,k5=$.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 988px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`,b5=$.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 320px;
  height: ${t=>t.expanded?"820px":"720px"};
  min-height: 720px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  border-radius: 12px;
  padding: 3px;
  transition: height 0.3s ease; /* Animación suave para el cambio de altura */
  position: relative; /* Necesario para el posicionamiento del overlay */
`,N5=$.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  span {
    font-size: clamp(10px, 0.4vw, 18px);
  }
`,D5=$.div`
  width: 100%;
  height: 450px; /* Fija la altura de la imagen para que no cambie */

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
`,V5=$.div`
  width: 100%;
  padding: 10px;
  height: 40%; /* Ajusta la altura del contenedor de contenido */
  flex: 1; /* Permite que el contenedor crezca para llenar el espacio disponible */
  display: flex;
  flex-direction: column;

`,O5=$.h2`
  font-size: clamp(22px, 1.4vw, 28px);
`,L5=$.p`
  font-size: clamp(15px, 0.6vw, 19px);
  color: #dddddd;
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.expanded?"none":3}; /* Limita a 3 líneas si no está expandido */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,j5=$.button`
  width: 40%;
  margin-top: 10px;
  background-color: inherit;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 28px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  white-space: nowrap; /* Evita el salto de línea */
  font-size: clamp(8px, 0.6vw, 18px);

  svg {
    margin-top: 2px;
    font-size: clamp(10px, 0.6vw, 17px);
  }
`,F5=$.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex: 3;
  align-items: end;
`,uo=$.span`
  background-color: #1c1c1c;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
`,M5=$.div`
  width: 70%;
`,U5=$.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,$5=$.h2`
  font-size: 24px;
  color: #fff;
`,B5=$.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`,z5=$(vc)`
  margin-left: 5px;
  transform: ${({isAscending:t})=>t?"rotate(0)":"rotate(180deg)"};
  transition: transform 0.3s ease;
`,q5=$.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas grandes */
  gap: 10px;
    max-width: 600px; /* Limitar el ancho del grid */


  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna para pantallas pequeñas */
  }
`,H5=$.div`
  display: flex;
  background-color: #161616;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  transition: transform 0.2s;
  cursor: pointer;
  max-height: 75px;

  &:hover {
    transform: scale(1.02);
  }
`,W5=$.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`,K5=$.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenido del capítulo use todo el espacio disponible */
`,G5=$.h3`
  font-size: 18px;
  color: #fff;
  margin: 0;
`,Q5=$.div`
  font-size: clamp(14px, 0.7vw, 18px);
  color: #9b9b9b;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Asegura que los elementos se distribuyan correctamente */
  gap: 10px;
`,Y5=$.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    margin-right: 3px;
  }
`,X5=({selectedSerie:t})=>{const e=rr();return z.useEffect(()=>{t?window.scrollTo({top:0,behavior:"smooth"}):e("/")},[t,e]),x.jsx(J5,{children:x.jsx(R5,{selectedSerie:t})})},J5=$.div`
  padding: 20px;
`,Z5=({selectedObra:t})=>{const[e,n]=z.useState(!1),[r,i]=z.useState(1),[s,o]=z.useState(!0),l=15,u=rr(),h=()=>{n(!e)},d=()=>{o(!s)};if(!t)return u("/"),null;const p=Array.from({length:t.capitulos},(w,y)=>({numero:y+1,fecha:"Hace 10 meses",likes:Math.floor(Math.random()*20)+1,imagen:t.avatar})),m=[...p].sort((w,y)=>s?w.numero-y.numero:y.numero-w.numero),T=r*l,A=T-l,k=m.slice(A,T),R=w=>i(w);return x.jsx(e6,{children:x.jsxs(t6,{children:[x.jsxs(n6,{expanded:e,children:[x.jsxs(r6,{children:[x.jsx(co,{children:t.tipo}),x.jsx(co,{children:"En Curso"})]}),x.jsx(i6,{children:x.jsx("img",{src:t.avatar,alt:t.nombre})}),x.jsxs(s6,{expanded:e,children:[x.jsx(o6,{children:t.nombre})," ",x.jsx(a6,{expanded:e,children:t.descripcion}),x.jsx(l6,{onClick:h,children:e?x.jsxs(x.Fragment,{children:["Ver menos ",x.jsx(VE,{})," "]}):x.jsxs(x.Fragment,{children:["Ver más ",x.jsx(vc,{})," "]})}),x.jsxs(u6,{children:[x.jsx(co,{children:"Romance"}),x.jsx(co,{children:"Drama"}),x.jsx(co,{children:"Vida Escolar"})]})]})]}),x.jsxs(c6,{children:[x.jsxs(h6,{children:[x.jsxs(d6,{children:[t.capitulo," Capítulos"]}),x.jsxs(f6,{onClick:d,children:[s?"Ascendente":"Descendente"," ",x.jsx(p6,{isAscending:s})]})]}),x.jsx(m6,{children:k.map(w=>x.jsxs(g6,{children:[x.jsx(y6,{src:w.imagen,alt:`Capítulo ${w.numero}`}),x.jsxs(v6,{children:[x.jsxs(_6,{children:["Capítulo ",w.numero]}),x.jsxs(w6,{children:[x.jsx("span",{children:w.fecha}),x.jsxs(E6,{children:[x.jsx(OE,{}),x.jsx("span",{children:w.likes})]})]})]})]},w.numero))}),x.jsx(ya,{itemsPerPage:l,totalItems:p.length,paginate:R,currentPage:r})]})]})})},e6=$.main`
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 2100px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,t6=$.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 988px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`,n6=$.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 320px;
  height: ${t=>t.expanded?"820px":"720px"};
  min-height: 720px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  border-radius: 12px;
  padding: 3px;
  transition: height 0.3s ease; /* Animación suave para el cambio de altura */
  position: relative; /* Necesario para el posicionamiento del overlay */
`,r6=$.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  span {
    font-size: clamp(10px, 0.4vw, 18px);
  }
`,i6=$.div`
  width: 100%;
  height: 450px; /* Fija la altura de la imagen para que no cambie */

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
`,s6=$.div`
  width: 100%;
  padding: 10px;
  height: 40%; /* Ajusta la altura del contenedor de contenido */
  flex: 1; /* Permite que el contenedor crezca para llenar el espacio disponible */
  display: flex;
  flex-direction: column;

`,o6=$.h2`
  font-size: clamp(22px, 1.4vw, 28px);
`,a6=$.p`
  font-size: clamp(15px, 0.6vw, 19px);
  color: #dddddd;
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.expanded?"none":3}; /* Limita a 3 líneas si no está expandido */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,l6=$.button`
  width: 40%;
  margin-top: 10px;
  background-color: inherit;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 28px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  white-space: nowrap; /* Evita el salto de línea */
  font-size: clamp(8px, 0.6vw, 18px);

  svg {
    margin-top: 2px;
    font-size: clamp(10px, 0.6vw, 17px);
  }
`,u6=$.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex: 3;
  align-items: end;
`,co=$.span`
  background-color: #1c1c1c;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
`,c6=$.div`
  width: 70%;
`,h6=$.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,d6=$.h2`
  font-size: 24px;
  color: #fff;
`,f6=$.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`,p6=$(vc)`
  margin-left: 5px;
  transform: ${({isAscending:t})=>t?"rotate(0)":"rotate(180deg)"};
  transition: transform 0.3s ease;
`,m6=$.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas grandes */
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna para pantallas pequeñas */
  }
`,g6=$.div`
  display: flex;
  background-color: #161616;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  transition: transform 0.2s;
  cursor: pointer;
  max-height: 75px;

  &:hover {
    transform: scale(1.02);
  }
`,y6=$.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`,v6=$.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenido del capítulo use todo el espacio disponible */
`,_6=$.h3`
  font-size: 18px;
  color: #fff;
  margin: 0;
`,w6=$.div`
  font-size: clamp(14px, 0.7vw, 18px);
  color: #9b9b9b;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Asegura que los elementos se distribuyan correctamente */
  gap: 10px;
`,E6=$.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    margin-right: 3px;
  }
`,x6=({selectedObra:t})=>{const e=rr();return z.useEffect(()=>{t?window.scrollTo({top:0,behavior:"smooth"}):e("/")},[t,e]),x.jsx(T6,{children:x.jsx(Z5,{selectedObra:t})})},T6=$.div`
  padding: 20px;
`;function S6(t){return dn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(t)}const C6=({searchQuery:t,setSelectedObra:e,setSearchQuery:n})=>{const[r,i]=z.useState([]),[s,o]=z.useState([]),[l,u]=z.useState(1),h=15,d=rr();z.useEffect(()=>{console.log("Listando obras"),(async()=>{const D=await EE();i(D),console.log("Obras cargadas:",D)})()},[]),z.useEffect(()=>{if(console.log("Filtrando obras con query:",t),t.trim()!==""){const _=r.filter(D=>{const F=D.nombre.toLowerCase().trim(),U=t.toLowerCase().trim();return F.includes(U)});o(_),console.log("Resultados filtrados:",_)}else o(r)},[r,t]);const p=l*h,m=p-h,T=s.slice(m,p),A=_=>u(_),k=_=>{e(_),d("/obra-info")},R=_=>{n(_.target.value)},w=()=>{console.log("Submitting search:",t)},y=_=>{_.key==="Enter"&&w()};return x.jsxs(A6,{children:[x.jsxs(I6,{children:[x.jsx("h1",{children:"Biblioteca"}),x.jsx(z0,{children:"Filtros"}),x.jsxs(R6,{children:[x.jsx(P6,{type:"text",placeholder:"Buscar...",value:t,onChange:R,onKeyDown:y}),x.jsx(k6,{onClick:w,children:x.jsx(S6,{size:24})})]})]}),s.length>0?x.jsxs(x.Fragment,{children:[x.jsxs(z0,{children:[s.length," Obras"]}),x.jsx(N6,{children:T.map(_=>x.jsxs(V6,{onClick:()=>k(_),children:[x.jsx(D6,{children:x.jsx("img",{src:_.avatar,alt:_.nombre})}),x.jsxs(O6,{children:[x.jsxs(b6,{children:[x.jsxs(Dh,{estado:_.estado,children:[x.jsx(xE,{})," ",_.estado]}),x.jsxs(Dh,{children:[x.jsx(TE,{})," ",_.capitulos," capítulos"]}),x.jsxs(Dh,{children:[x.jsx(SE,{})," ",_.tipo]})]}),x.jsx(L6,{children:_.nombre})]})]},_.id))}),x.jsx(ya,{itemsPerPage:h,totalItems:s.length,paginate:A,currentPage:l})]}):x.jsxs("p",{children:['No se encontraron resultados para "',t,'".']})]})},A6=$.main`
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 2100px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`,I6=$.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 88%;
    margin-bottom: 300px;

`,R6=$.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  background-color: #333;
  
`,P6=$.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  padding-left: 10px;
`,k6=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,b6=$.div`
  display: flex;
  gap: 6px;
  width: 100%;
`,N6=$.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
  width: 100%;

  @media (max-width: 2268px) {
    width: 90%;
  }

  @media (max-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,D6=$.div`
    width: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`,V6=$.div`
  background-color: #161616;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  border: 1px solid #3f3b3b;
  &:hover {
    border: 1px solid #ffff;
  }
`,O6=$.div`
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  overflow: hidden;
  align-items: center;
`,Dh=$.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: clamp(11px, 0.6em, 18px);
  max-height: 20.34px;
  background-color: ${({estado:t})=>t==="En Curso"?"rgb(129, 140, 248)":"inherit"};
  color: ${({estado:t})=>t==="En Curso"?"#312e2e":"#9b9696"}; 
`,L6=$.h2`
  font-size: 1em;
  margin: 0 0 5px;
  color: #e9e9e9;
  width: calc(100% - 0px);
`,z0=$.p`
    font-size: clamp(15px, 1.3vw, 65px);
    font-weight: bold;
`,j6=({searchQuery:t,setSearchQuery:e,setSelectedObra:n})=>x.jsx(F6,{children:x.jsx(C6,{searchQuery:t,setSelectedObra:n,setSearchQuery:e})}),F6=$.main`
  width: 100%;
`,M6=({selectedSerie:t,setSelectedSerie:e,selectedObra:n,setSelectedObra:r,searchQuery:i,setSearchQuery:s})=>{const[o,l]=z.useState(!1),u=()=>{l(h=>!h)};return z.useEffect(()=>{const h=()=>{window.innerWidth>740&&l(!1)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]),console.log("MyRouters searchQuery state:",i),x.jsxs(kC,{children:[x.jsx(f5,{setSearchQuery:s}),o&&x.jsx(U6,{children:x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx(_n,{to:"/",onClick:u,children:"Inicio"})}),x.jsx("li",{children:x.jsx(_n,{to:"/biblioteca",onClick:u,children:"Biblioteca"})}),x.jsx("li",{children:x.jsx(_n,{to:"/clasificacion",onClick:u,children:"Clasificación"})}),x.jsx("li",{children:x.jsx(_n,{to:"/grupos",onClick:u,children:"Grupos"})}),x.jsx("li",{children:x.jsx(_n,{to:"/favoritos-feed",onClick:u,children:"Favoritos Feed"})})]})}),x.jsxs(TC,{children:[x.jsx(zn,{path:"/",element:x.jsx(WI,{setSelectedSerie:e})}),x.jsx(zn,{path:"/biblioteca",element:x.jsx(D3,{setSelectedObra:r})}),x.jsx(zn,{path:"/clasificacion",element:x.jsx(n5,{searchQuery:i})}),x.jsx(zn,{path:"/grupos",element:x.jsx(s5,{})}),x.jsx(zn,{path:"/favoritos-feed",element:x.jsx(o5,{})}),x.jsx(zn,{path:"/series-info",element:x.jsx(X5,{selectedSerie:t})}),x.jsx(zn,{path:"/obra-info",element:x.jsx(x6,{selectedObra:n})}),x.jsx(zn,{path:"/resultados",element:x.jsx(j6,{searchQuery:i,setSearchQuery:s,setSelectedObra:r})})]}),x.jsx(x5,{})]})},U6=$.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;function $6(){const[t,e]=z.useState(null),[n,r]=z.useState(null),[i,s]=z.useState("");return x.jsx(M6,{selectedSerie:t,setSelectedSerie:e,selectedObra:n,setSelectedObra:r,searchQuery:i,setSearchQuery:s})}Vh.createRoot(document.getElementById("root")).render(x.jsx(Re.StrictMode,{children:x.jsx($6,{})}));export{$ as d,x as j};
