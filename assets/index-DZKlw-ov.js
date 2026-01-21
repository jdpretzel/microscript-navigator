(function(){const G=document.createElement("link").relList;if(G&&G.supports&&G.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))h(L);new MutationObserver(L=>{for(const K of L)if(K.type==="childList")for(const ce of K.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&h(ce)}).observe(document,{childList:!0,subtree:!0});function j(L){const K={};return L.integrity&&(K.integrity=L.integrity),L.referrerPolicy&&(K.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?K.credentials="include":L.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function h(L){if(L.ep)return;L.ep=!0;const K=j(L);fetch(L.href,K)}})();var lr={exports:{}},Sn={};var yf;function ep(){if(yf)return Sn;yf=1;var T=Symbol.for("react.transitional.element"),G=Symbol.for("react.fragment");function j(h,L,K){var ce=null;if(K!==void 0&&(ce=""+K),L.key!==void 0&&(ce=""+L.key),"key"in L){K={};for(var Ae in L)Ae!=="key"&&(K[Ae]=L[Ae])}else K=L;return L=K.ref,{$$typeof:T,type:h,key:ce,ref:L!==void 0?L:null,props:K}}return Sn.Fragment=G,Sn.jsx=j,Sn.jsxs=j,Sn}var gf;function ap(){return gf||(gf=1,lr.exports=ep()),lr.exports}var w=ap(),rr={exports:{}},q={};var vf;function ip(){if(vf)return q;vf=1;var T=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),me=Symbol.iterator;function _e(u){return u===null||typeof u!="object"?null:(u=me&&u[me]||u["@@iterator"],typeof u=="function"?u:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ie=Object.assign,ia={};function F(u,R,M){this.props=u,this.context=R,this.refs=ia,this.updater=M||ze}F.prototype.isReactComponent={},F.prototype.setState=function(u,R){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,R,"setState")},F.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function xa(){}xa.prototype=F.prototype;function De(u,R,M){this.props=u,this.context=R,this.refs=ia,this.updater=M||ze}var Ye=De.prototype=new xa;Ye.constructor=De,Ie(Ye,F.prototype),Ye.isPureReactComponent=!0;var Pe=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function he(u,R,M){var D=M.ref;return{$$typeof:T,type:u,key:R,ref:D!==void 0?D:null,props:M}}function ta(u,R){return he(u.type,R,u.props)}function ha(u){return typeof u=="object"&&u!==null&&u.$$typeof===T}function Be(u){var R={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(M){return R[M]})}var Fa=/\/+/g;function Ca(u,R){return typeof u=="object"&&u!==null&&u.key!=null?Be(""+u.key):R.toString(36)}function Qe(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(I,I):(u.status="pending",u.then(function(R){u.status==="pending"&&(u.status="fulfilled",u.value=R)},function(R){u.status==="pending"&&(u.status="rejected",u.reason=R)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function v(u,R,M,D,U){var J=typeof u;(J==="undefined"||J==="boolean")&&(u=null);var ie=!1;if(u===null)ie=!0;else switch(J){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(u.$$typeof){case T:case G:ie=!0;break;case W:return ie=u._init,v(ie(u._payload),R,M,D,U)}}if(ie)return U=U(u),ie=D===""?"."+Ca(u,0):D,Pe(U)?(M="",ie!=null&&(M=ie.replace(Fa,"$&/")+"/"),v(U,R,M,"",function(Dt){return Dt})):U!=null&&(ha(U)&&(U=ta(U,M+(U.key==null||u&&u.key===U.key?"":(""+U.key).replace(Fa,"$&/")+"/")+ie)),R.push(U)),1;ie=0;var Ge=D===""?".":D+":";if(Pe(u))for(var Re=0;Re<u.length;Re++)D=u[Re],J=Ge+Ca(D,Re),ie+=v(D,R,M,J,U);else if(Re=_e(u),typeof Re=="function")for(u=Re.call(u),Re=0;!(D=u.next()).done;)D=D.value,J=Ge+Ca(D,Re++),ie+=v(D,R,M,J,U);else if(J==="object"){if(typeof u.then=="function")return v(Qe(u),R,M,D,U);throw R=String(u),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ie}function C(u,R,M){if(u==null)return u;var D=[],U=0;return v(u,D,"","",function(J){return R.call(M,J,U++)}),D}function k(u){if(u._status===-1){var R=u._result;R=R(),R.then(function(M){(u._status===0||u._status===-1)&&(u._status=1,u._result=M)},function(M){(u._status===0||u._status===-1)&&(u._status=2,u._result=M)}),u._status===-1&&(u._status=0,u._result=R)}if(u._status===1)return u._result.default;throw u._result}var oe=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},de={map:C,forEach:function(u,R,M){C(u,function(){R.apply(this,arguments)},M)},count:function(u){var R=0;return C(u,function(){R++}),R},toArray:function(u){return C(u,function(R){return R})||[]},only:function(u){if(!ha(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return q.Activity=O,q.Children=de,q.Component=F,q.Fragment=j,q.Profiler=L,q.PureComponent=De,q.StrictMode=h,q.Suspense=x,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,q.__COMPILER_RUNTIME={__proto__:null,c:function(u){return N.H.useMemoCache(u)}},q.cache=function(u){return function(){return u.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(u,R,M){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var D=Ie({},u.props),U=u.key;if(R!=null)for(J in R.key!==void 0&&(U=""+R.key),R)!ue.call(R,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&R.ref===void 0||(D[J]=R[J]);var J=arguments.length-2;if(J===1)D.children=M;else if(1<J){for(var ie=Array(J),Ge=0;Ge<J;Ge++)ie[Ge]=arguments[Ge+2];D.children=ie}return he(u.type,U,D)},q.createContext=function(u){return u={$$typeof:ce,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:K,_context:u},u},q.createElement=function(u,R,M){var D,U={},J=null;if(R!=null)for(D in R.key!==void 0&&(J=""+R.key),R)ue.call(R,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(U[D]=R[D]);var ie=arguments.length-2;if(ie===1)U.children=M;else if(1<ie){for(var Ge=Array(ie),Re=0;Re<ie;Re++)Ge[Re]=arguments[Re+2];U.children=Ge}if(u&&u.defaultProps)for(D in ie=u.defaultProps,ie)U[D]===void 0&&(U[D]=ie[D]);return he(u,J,U)},q.createRef=function(){return{current:null}},q.forwardRef=function(u){return{$$typeof:Ae,render:u}},q.isValidElement=ha,q.lazy=function(u){return{$$typeof:W,_payload:{_status:-1,_result:u},_init:k}},q.memo=function(u,R){return{$$typeof:S,type:u,compare:R===void 0?null:R}},q.startTransition=function(u){var R=N.T,M={};N.T=M;try{var D=u(),U=N.S;U!==null&&U(M,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(I,oe)}catch(J){oe(J)}finally{R!==null&&M.types!==null&&(R.types=M.types),N.T=R}},q.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},q.use=function(u){return N.H.use(u)},q.useActionState=function(u,R,M){return N.H.useActionState(u,R,M)},q.useCallback=function(u,R){return N.H.useCallback(u,R)},q.useContext=function(u){return N.H.useContext(u)},q.useDebugValue=function(){},q.useDeferredValue=function(u,R){return N.H.useDeferredValue(u,R)},q.useEffect=function(u,R){return N.H.useEffect(u,R)},q.useEffectEvent=function(u){return N.H.useEffectEvent(u)},q.useId=function(){return N.H.useId()},q.useImperativeHandle=function(u,R,M){return N.H.useImperativeHandle(u,R,M)},q.useInsertionEffect=function(u,R){return N.H.useInsertionEffect(u,R)},q.useLayoutEffect=function(u,R){return N.H.useLayoutEffect(u,R)},q.useMemo=function(u,R){return N.H.useMemo(u,R)},q.useOptimistic=function(u,R){return N.H.useOptimistic(u,R)},q.useReducer=function(u,R,M){return N.H.useReducer(u,R,M)},q.useRef=function(u){return N.H.useRef(u)},q.useState=function(u){return N.H.useState(u)},q.useSyncExternalStore=function(u,R,M){return N.H.useSyncExternalStore(u,R,M)},q.useTransition=function(){return N.H.useTransition()},q.version="19.2.3",q}var bf;function mr(){return bf||(bf=1,rr.exports=ip()),rr.exports}var Ve=mr(),cr={exports:{}},wn={},ur={exports:{}},dr={};var Af;function tp(){return Af||(Af=1,(function(T){function G(v,C){var k=v.length;v.push(C);e:for(;0<k;){var oe=k-1>>>1,de=v[oe];if(0<L(de,C))v[oe]=C,v[k]=de,k=oe;else break e}}function j(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var C=v[0],k=v.pop();if(k!==C){v[0]=k;e:for(var oe=0,de=v.length,u=de>>>1;oe<u;){var R=2*(oe+1)-1,M=v[R],D=R+1,U=v[D];if(0>L(M,k))D<de&&0>L(U,M)?(v[oe]=U,v[D]=k,oe=D):(v[oe]=M,v[R]=k,oe=R);else if(D<de&&0>L(U,k))v[oe]=U,v[D]=k,oe=D;else break e}}return C}function L(v,C){var k=v.sortIndex-C.sortIndex;return k!==0?k:v.id-C.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;T.unstable_now=function(){return K.now()}}else{var ce=Date,Ae=ce.now();T.unstable_now=function(){return ce.now()-Ae}}var x=[],S=[],W=1,O=null,me=3,_e=!1,ze=!1,Ie=!1,ia=!1,F=typeof setTimeout=="function"?setTimeout:null,xa=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function Ye(v){for(var C=j(S);C!==null;){if(C.callback===null)h(S);else if(C.startTime<=v)h(S),C.sortIndex=C.expirationTime,G(x,C);else break;C=j(S)}}function Pe(v){if(Ie=!1,Ye(v),!ze)if(j(x)!==null)ze=!0,I||(I=!0,Be());else{var C=j(S);C!==null&&Qe(Pe,C.startTime-v)}}var I=!1,N=-1,ue=5,he=-1;function ta(){return ia?!0:!(T.unstable_now()-he<ue)}function ha(){if(ia=!1,I){var v=T.unstable_now();he=v;var C=!0;try{e:{ze=!1,Ie&&(Ie=!1,xa(N),N=-1),_e=!0;var k=me;try{a:{for(Ye(v),O=j(x);O!==null&&!(O.expirationTime>v&&ta());){var oe=O.callback;if(typeof oe=="function"){O.callback=null,me=O.priorityLevel;var de=oe(O.expirationTime<=v);if(v=T.unstable_now(),typeof de=="function"){O.callback=de,Ye(v),C=!0;break a}O===j(x)&&h(x),Ye(v)}else h(x);O=j(x)}if(O!==null)C=!0;else{var u=j(S);u!==null&&Qe(Pe,u.startTime-v),C=!1}}break e}finally{O=null,me=k,_e=!1}C=void 0}}finally{C?Be():I=!1}}}var Be;if(typeof De=="function")Be=function(){De(ha)};else if(typeof MessageChannel<"u"){var Fa=new MessageChannel,Ca=Fa.port2;Fa.port1.onmessage=ha,Be=function(){Ca.postMessage(null)}}else Be=function(){F(ha,0)};function Qe(v,C){N=F(function(){v(T.unstable_now())},C)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(v){v.callback=null},T.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<v?Math.floor(1e3/v):5},T.unstable_getCurrentPriorityLevel=function(){return me},T.unstable_next=function(v){switch(me){case 1:case 2:case 3:var C=3;break;default:C=me}var k=me;me=C;try{return v()}finally{me=k}},T.unstable_requestPaint=function(){ia=!0},T.unstable_runWithPriority=function(v,C){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var k=me;me=v;try{return C()}finally{me=k}},T.unstable_scheduleCallback=function(v,C,k){var oe=T.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?oe+k:oe):k=oe,v){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=k+de,v={id:W++,callback:C,priorityLevel:v,startTime:k,expirationTime:de,sortIndex:-1},k>oe?(v.sortIndex=k,G(S,v),j(x)===null&&v===j(S)&&(Ie?(xa(N),N=-1):Ie=!0,Qe(Pe,k-oe))):(v.sortIndex=de,G(x,v),ze||_e||(ze=!0,I||(I=!0,Be()))),v},T.unstable_shouldYield=ta,T.unstable_wrapCallback=function(v){var C=me;return function(){var k=me;me=C;try{return v.apply(this,arguments)}finally{me=k}}}})(dr)),dr}var Rf;function np(){return Rf||(Rf=1,ur.exports=tp()),ur.exports}var fr={exports:{}},Ue={};var Sf;function op(){if(Sf)return Ue;Sf=1;var T=mr();function G(x){var S="https://react.dev/errors/"+x;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)S+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+x+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var h={d:{f:j,r:function(){throw Error(G(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},L=Symbol.for("react.portal");function K(x,S,W){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:O==null?null:""+O,children:x,containerInfo:S,implementation:W}}var ce=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ae(x,S){if(x==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ue.createPortal=function(x,S){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(G(299));return K(x,S,null,W)},Ue.flushSync=function(x){var S=ce.T,W=h.p;try{if(ce.T=null,h.p=2,x)return x()}finally{ce.T=S,h.p=W,h.d.f()}},Ue.preconnect=function(x,S){typeof x=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,h.d.C(x,S))},Ue.prefetchDNS=function(x){typeof x=="string"&&h.d.D(x)},Ue.preinit=function(x,S){if(typeof x=="string"&&S&&typeof S.as=="string"){var W=S.as,O=Ae(W,S.crossOrigin),me=typeof S.integrity=="string"?S.integrity:void 0,_e=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;W==="style"?h.d.S(x,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:O,integrity:me,fetchPriority:_e}):W==="script"&&h.d.X(x,{crossOrigin:O,integrity:me,fetchPriority:_e,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Ue.preinitModule=function(x,S){if(typeof x=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var W=Ae(S.as,S.crossOrigin);h.d.M(x,{crossOrigin:W,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&h.d.M(x)},Ue.preload=function(x,S){if(typeof x=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var W=S.as,O=Ae(W,S.crossOrigin);h.d.L(x,W,{crossOrigin:O,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Ue.preloadModule=function(x,S){if(typeof x=="string")if(S){var W=Ae(S.as,S.crossOrigin);h.d.m(x,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:W,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else h.d.m(x)},Ue.requestFormReset=function(x){h.d.r(x)},Ue.unstable_batchedUpdates=function(x,S){return x(S)},Ue.useFormState=function(x,S,W){return ce.H.useFormState(x,S,W)},Ue.useFormStatus=function(){return ce.H.useHostTransitionStatus()},Ue.version="19.2.3",Ue}var wf;function sp(){if(wf)return fr.exports;wf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(G){console.error(G)}}return T(),fr.exports=op(),fr.exports}var Tf;function lp(){if(Tf)return wn;Tf=1;var T=np(),G=mr(),j=sp();function h(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function ce(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Ae(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function x(e){if(K(e)!==e)throw Error(h(188))}function S(e){var a=e.alternate;if(!a){if(a=K(e),a===null)throw Error(h(188));return a!==e?null:e}for(var i=e,t=a;;){var n=i.return;if(n===null)break;var o=n.alternate;if(o===null){if(t=n.return,t!==null){i=t;continue}break}if(n.child===o.child){for(o=n.child;o;){if(o===i)return x(n),e;if(o===t)return x(n),a;o=o.sibling}throw Error(h(188))}if(i.return!==t.return)i=n,t=o;else{for(var s=!1,l=n.child;l;){if(l===i){s=!0,i=n,t=o;break}if(l===t){s=!0,t=n,i=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===i){s=!0,i=o,t=n;break}if(l===t){s=!0,t=o,i=n;break}l=l.sibling}if(!s)throw Error(h(189))}}if(i.alternate!==t)throw Error(h(190))}if(i.tag!==3)throw Error(h(188));return i.stateNode.current===i?e:a}function W(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=W(e),a!==null)return a;e=e.sibling}return null}var O=Object.assign,me=Symbol.for("react.element"),_e=Symbol.for("react.transitional.element"),ze=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),xa=Symbol.for("react.consumer"),De=Symbol.for("react.context"),Ye=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ta=Symbol.for("react.memo_cache_sentinel"),ha=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var Fa=Symbol.for("react.client.reference");function Ca(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case F:return"Profiler";case ia:return"StrictMode";case Pe:return"Suspense";case I:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ze:return"Portal";case De:return e.displayName||"Context";case xa:return(e._context.displayName||"Context")+".Consumer";case Ye:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return a=e.displayName||null,a!==null?a:Ca(e.type)||"Memo";case ue:a=e._payload,e=e._init;try{return Ca(e(a))}catch{}}return null}var Qe=Array.isArray,v=G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},oe=[],de=-1;function u(e){return{current:e}}function R(e){0>de||(e.current=oe[de],oe[de]=null,de--)}function M(e,a){de++,oe[de]=e.current,e.current=a}var D=u(null),U=u(null),J=u(null),ie=u(null);function Ge(e,a){switch(M(J,a),M(U,e),M(D,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=qd(a),e=Id(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R(D),M(D,e)}function Re(){R(D),R(U),R(J)}function Dt(e){e.memoizedState!==null&&M(ie,e);var a=D.current,i=Id(a,e.type);a!==i&&(M(U,e),M(D,i))}function Tn(e){U.current===e&&(R(D),R(U)),ie.current===e&&(R(ie),vn._currentValue=k)}var Ko,hr;function Ti(e){if(Ko===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Ko=a&&a[1]||"",hr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ko+e+hr}var Vo=!1;function Jo(e,a){if(!e||Vo)return"";Vo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var p=y}Reflect.construct(e,[],A)}else{try{A.call()}catch(y){p=y}e.call(A.prototype)}}else{try{throw Error()}catch(y){p=y}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&p&&typeof y.stack=="string")return[y.stack,p.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=t.DetermineComponentFrameRoot(),s=o[0],l=o[1];if(s&&l){var r=s.split(`
`),m=l.split(`
`);for(n=t=0;t<r.length&&!r[t].includes("DetermineComponentFrameRoot");)t++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(t===r.length||n===m.length)for(t=r.length-1,n=m.length-1;1<=t&&0<=n&&r[t]!==m[n];)n--;for(;1<=t&&0<=n;t--,n--)if(r[t]!==m[n]){if(t!==1||n!==1)do if(t--,n--,0>n||r[t]!==m[n]){var g=`
`+r[t].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=t&&0<=n);break}}}finally{Vo=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Ti(i):""}function Hf(e,a){switch(e.tag){case 26:case 27:case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return e.child!==a&&a!==null?Ti("Suspense Fallback"):Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 15:return Jo(e.type,!1);case 11:return Jo(e.type.render,!1);case 1:return Jo(e.type,!0);case 31:return Ti("Activity");default:return""}}function pr(e){try{var a="",i=null;do a+=Hf(e,i),i=e,e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Yo=Object.prototype.hasOwnProperty,Po=T.unstable_scheduleCallback,Qo=T.unstable_cancelCallback,Nf=T.unstable_shouldYield,Bf=T.unstable_requestPaint,na=T.unstable_now,Of=T.unstable_getCurrentPriorityLevel,yr=T.unstable_ImmediatePriority,gr=T.unstable_UserBlockingPriority,Cn=T.unstable_NormalPriority,kf=T.unstable_LowPriority,vr=T.unstable_IdlePriority,jf=T.log,Lf=T.unstable_setDisableYieldValue,xt=null,oa=null;function $a(e){if(typeof jf=="function"&&Lf(e),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(xt,e)}catch{}}var sa=Math.clz32?Math.clz32:Uf,qf=Math.log,If=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(qf(e)/If|0)|0}var Mn=256,En=262144,Dn=4194304;function Ci(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xn(e,a,i){var t=e.pendingLanes;if(t===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var l=t&134217727;return l!==0?(t=l&~o,t!==0?n=Ci(t):(s&=l,s!==0?n=Ci(s):i||(i=l&~e,i!==0&&(n=Ci(i))))):(l=t&~o,l!==0?n=Ci(l):s!==0?n=Ci(s):i||(i=t&~e,i!==0&&(n=Ci(i)))),n===0?0:a!==0&&a!==n&&(a&o)===0&&(o=n&-n,i=a&-a,o>=i||o===32&&(i&4194048)!==0)?a:n}function zt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function _f(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(){var e=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),e}function Xo(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function Ht(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gf(e,a,i,t,n,o){var s=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var l=e.entanglements,r=e.expirationTimes,m=e.hiddenUpdates;for(i=s&~i;0<i;){var g=31-sa(i),A=1<<g;l[g]=0,r[g]=-1;var p=m[g];if(p!==null)for(m[g]=null,g=0;g<p.length;g++){var y=p[g];y!==null&&(y.lane&=-536870913)}i&=~A}t!==0&&Ar(e,t,0),o!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~a))}function Ar(e,a,i){e.pendingLanes|=a,e.suspendedLanes&=~a;var t=31-sa(a);e.entangledLanes|=a,e.entanglements[t]=e.entanglements[t]|1073741824|i&261930}function Rr(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var t=31-sa(i),n=1<<t;n&a|e[t]&a&&(e[t]|=a),i&=~n}}function Sr(e,a){var i=a&-a;return i=(i&42)!==0?1:Zo(i),(i&(e.suspendedLanes|a))!==0?0:i}function Zo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wr(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:cf(e.type))}function Tr(e,a){var i=C.p;try{return C.p=e,a()}finally{C.p=i}}var ei=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ei,Xe="__reactProps$"+ei,Ki="__reactContainer$"+ei,Fo="__reactEvents$"+ei,Kf="__reactListeners$"+ei,Vf="__reactHandles$"+ei,Cr="__reactResources$"+ei,Nt="__reactMarker$"+ei;function $o(e){delete e[Oe],delete e[Xe],delete e[Fo],delete e[Kf],delete e[Vf]}function Vi(e){var a=e[Oe];if(a)return a;for(var i=e.parentNode;i;){if(a=i[Ki]||i[Oe]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=Yd(e);e!==null;){if(i=e[Oe])return i;e=Yd(e)}return a}e=i,i=e.parentNode}return null}function Ji(e){if(e=e[Oe]||e[Ki]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Bt(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(h(33))}function Yi(e){var a=e[Cr];return a||(a=e[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function He(e){e[Nt]=!0}var Mr=new Set,Er={};function Mi(e,a){Pi(e,a),Pi(e+"Capture",a)}function Pi(e,a){for(Er[e]=a,e=0;e<a.length;e++)Mr.add(a[e])}var Jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},xr={};function Yf(e){return Yo.call(xr,e)?!0:Yo.call(Dr,e)?!1:Jf.test(e)?xr[e]=!0:(Dr[e]=!0,!1)}function zn(e,a,i){if(Yf(a))if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+i)}}function Hn(e,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+i)}}function Oa(e,a,i,t){if(t===null)e.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(a,i,""+t)}}function pa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Pf(e,a,i){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,o=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function es(e){if(!e._valueTracker){var a=zr(e)?"checked":"value";e._valueTracker=Pf(e,a,""+e[a])}}function Hr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),t="";return e&&(t=zr(e)?e.checked?"true":"false":e.value),e=t,e!==i?(a.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qf=/[\n"\\]/g;function ya(e){return e.replace(Qf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function as(e,a,i,t,n,o,s,l){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),a!=null?s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+pa(a)):e.value!==""+pa(a)&&(e.value=""+pa(a)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),a!=null?is(e,s,pa(a)):i!=null?is(e,s,pa(i)):t!=null&&e.removeAttribute("value"),n==null&&o!=null&&(e.defaultChecked=!!o),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+pa(l):e.removeAttribute("name")}function Nr(e,a,i,t,n,o,s,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||i!=null){if(!(o!=="submit"&&o!=="reset"||a!=null)){es(e);return}i=i!=null?""+pa(i):"",a=a!=null?""+pa(a):i,l||a===e.value||(e.value=a),e.defaultValue=a}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=l?e.checked:!!t,e.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),es(e)}function is(e,a,i){a==="number"&&Nn(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Qi(e,a,i,t){if(e=e.options,a){a={};for(var n=0;n<i.length;n++)a["$"+i[n]]=!0;for(i=0;i<e.length;i++)n=a.hasOwnProperty("$"+e[i].value),e[i].selected!==n&&(e[i].selected=n),n&&t&&(e[i].defaultSelected=!0)}else{for(i=""+pa(i),a=null,n=0;n<e.length;n++){if(e[n].value===i){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Br(e,a,i){if(a!=null&&(a=""+pa(a),a!==e.value&&(e.value=a),i==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=i!=null?""+pa(i):""}function Or(e,a,i,t){if(a==null){if(t!=null){if(i!=null)throw Error(h(92));if(Qe(t)){if(1<t.length)throw Error(h(93));t=t[0]}i=t}i==null&&(i=""),a=i}i=pa(a),e.defaultValue=i,t=e.textContent,t===i&&t!==""&&t!==null&&(e.value=t),es(e)}function Xi(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var Xf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kr(e,a,i){var t=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?t?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":t?e.setProperty(a,i):typeof i!="number"||i===0||Xf.has(a)?a==="float"?e.cssFloat=i:e[a]=(""+i).trim():e[a]=i+"px"}function jr(e,a,i){if(a!=null&&typeof a!="object")throw Error(h(62));if(e=e.style,i!=null){for(var t in i)!i.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var n in a)t=a[n],a.hasOwnProperty(n)&&i[n]!==t&&kr(e,n,t)}else for(var o in a)a.hasOwnProperty(o)&&kr(e,o,a[o])}function ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(e){return Wf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ka(){}var ns=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Wi=null;function Lr(e){var a=Ji(e);if(a&&(e=a.stateNode)){var i=e[Xe]||null;e:switch(e=a.stateNode,a.type){case"input":if(as(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ya(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var t=i[a];if(t!==e&&t.form===e.form){var n=t[Xe]||null;if(!n)throw Error(h(90));as(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<i.length;a++)t=i[a],t.form===e.form&&Hr(t)}break e;case"textarea":Br(e,i.value,i.defaultValue);break e;case"select":a=i.value,a!=null&&Qi(e,!!i.multiple,a,!1)}}}var ss=!1;function qr(e,a,i){if(ss)return e(a,i);ss=!0;try{var t=e(a);return t}finally{if(ss=!1,(Zi!==null||Wi!==null)&&(Ro(),Zi&&(a=Zi,e=Wi,Wi=Zi=null,Lr(a),e)))for(a=0;a<e.length;a++)Lr(e[a])}}function Ot(e,a){var i=e.stateNode;if(i===null)return null;var t=i[Xe]||null;if(t===null)return null;i=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(h(231,a,typeof i));return i}var ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=!1;if(ja)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){ls=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{ls=!1}var ai=null,rs=null,On=null;function Ir(){if(On)return On;var e,a=rs,i=a.length,t,n="value"in ai?ai.value:ai.textContent,o=n.length;for(e=0;e<i&&a[e]===n[e];e++);var s=i-e;for(t=1;t<=s&&a[i-t]===n[o-t];t++);return On=n.slice(e,1<t?1-t:void 0)}function kn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function Ur(){return!1}function Ze(e){function a(i,t,n,o,s){this._reactName=i,this._targetInst=n,this.type=t,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(i=e[l],this[l]=i?i(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jn:Ur,this.isPropagationStopped=Ur,this}return O(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),a}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Ze(Ei),jt=O({},Ei,{view:0,detail:0}),Ff=Ze(jt),cs,us,Lt,qn=O({},jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lt&&(Lt&&e.type==="mousemove"?(cs=e.screenX-Lt.screenX,us=e.screenY-Lt.screenY):us=cs=0,Lt=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:us}}),_r=Ze(qn),$f=O({},qn,{dataTransfer:0}),em=Ze($f),am=O({},jt,{relatedTarget:0}),ds=Ze(am),im=O({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),tm=Ze(im),nm=O({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),om=Ze(nm),sm=O({},Ei,{data:0}),Gr=Ze(sm),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=cm[e])?!!a[e]:!1}function fs(){return um}var dm=O({},jt,{key:function(e){if(e.key){var a=lm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fm=Ze(dm),mm=O({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kr=Ze(mm),hm=O({},jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),pm=Ze(hm),ym=O({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Ze(ym),vm=O({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ze(vm),Am=O({},Ei,{newState:0,oldState:0}),Rm=Ze(Am),Sm=[9,13,27,32],ms=ja&&"CompositionEvent"in window,qt=null;ja&&"documentMode"in document&&(qt=document.documentMode);var wm=ja&&"TextEvent"in window&&!qt,Vr=ja&&(!ms||qt&&8<qt&&11>=qt),Jr=" ",Yr=!1;function Pr(e,a){switch(e){case"keyup":return Sm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fi=!1;function Tm(e,a){switch(e){case"compositionend":return Qr(a);case"keypress":return a.which!==32?null:(Yr=!0,Jr);case"textInput":return e=a.data,e===Jr&&Yr?null:e;default:return null}}function Cm(e,a){if(Fi)return e==="compositionend"||!ms&&Pr(e,a)?(e=Ir(),On=rs=ai=null,Fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Vr&&a.locale!=="ko"?null:a.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Mm[e.type]:a==="textarea"}function Zr(e,a,i,t){Zi?Wi?Wi.push(t):Wi=[t]:Zi=t,a=Do(a,"onChange"),0<a.length&&(i=new Ln("onChange","change",null,i,t),e.push({event:i,listeners:a}))}var It=null,Ut=null;function Em(e){Nd(e,0)}function In(e){var a=Bt(e);if(Hr(a))return e}function Wr(e,a){if(e==="change")return a}var Fr=!1;if(ja){var hs;if(ja){var ps="oninput"in document;if(!ps){var $r=document.createElement("div");$r.setAttribute("oninput","return;"),ps=typeof $r.oninput=="function"}hs=ps}else hs=!1;Fr=hs&&(!document.documentMode||9<document.documentMode)}function ec(){It&&(It.detachEvent("onpropertychange",ac),Ut=It=null)}function ac(e){if(e.propertyName==="value"&&In(Ut)){var a=[];Zr(a,Ut,e,os(e)),qr(Em,a)}}function Dm(e,a,i){e==="focusin"?(ec(),It=a,Ut=i,It.attachEvent("onpropertychange",ac)):e==="focusout"&&ec()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return In(Ut)}function zm(e,a){if(e==="click")return In(a)}function Hm(e,a){if(e==="input"||e==="change")return In(a)}function Nm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var la=typeof Object.is=="function"?Object.is:Nm;function _t(e,a){if(la(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),t=Object.keys(a);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var n=i[t];if(!Yo.call(a,n)||!la(e[n],a[n]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,a){var i=ic(e);e=0;for(var t;i;){if(i.nodeType===3){if(t=e+i.textContent.length,e<=a&&t>=a)return{node:i,offset:a-e};e=t}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ic(i)}}function nc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?nc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function oc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Nn(e.document);a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Nn(e.document)}return a}function ys(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Bm=ja&&"documentMode"in document&&11>=document.documentMode,$i=null,gs=null,Gt=null,vs=!1;function sc(e,a,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;vs||$i==null||$i!==Nn(t)||(t=$i,"selectionStart"in t&&ys(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Gt&&_t(Gt,t)||(Gt=t,t=Do(gs,"onSelect"),0<t.length&&(a=new Ln("onSelect","select",null,a,i),e.push({event:a,listeners:t}),a.target=$i)))}function Di(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var et={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionrun:Di("Transition","TransitionRun"),transitionstart:Di("Transition","TransitionStart"),transitioncancel:Di("Transition","TransitionCancel"),transitionend:Di("Transition","TransitionEnd")},bs={},lc={};ja&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete et.animationend.animation,delete et.animationiteration.animation,delete et.animationstart.animation),"TransitionEvent"in window||delete et.transitionend.transition);function xi(e){if(bs[e])return bs[e];if(!et[e])return e;var a=et[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in lc)return bs[e]=a[i];return e}var rc=xi("animationend"),cc=xi("animationiteration"),uc=xi("animationstart"),Om=xi("transitionrun"),km=xi("transitionstart"),jm=xi("transitioncancel"),dc=xi("transitionend"),fc=new Map,As="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");As.push("scrollEnd");function Ma(e,a){fc.set(e,a),Mi(a,[e])}var Un=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ga=[],at=0,Rs=0;function _n(){for(var e=at,a=Rs=at=0;a<e;){var i=ga[a];ga[a++]=null;var t=ga[a];ga[a++]=null;var n=ga[a];ga[a++]=null;var o=ga[a];if(ga[a++]=null,t!==null&&n!==null){var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}o!==0&&mc(i,n,o)}}function Gn(e,a,i,t){ga[at++]=e,ga[at++]=a,ga[at++]=i,ga[at++]=t,Rs|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function Ss(e,a,i,t){return Gn(e,a,i,t),Kn(e)}function zi(e,a){return Gn(e,null,null,a),Kn(e)}function mc(e,a,i){e.lanes|=i;var t=e.alternate;t!==null&&(t.lanes|=i);for(var n=!1,o=e.return;o!==null;)o.childLanes|=i,t=o.alternate,t!==null&&(t.childLanes|=i),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(n=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,n&&a!==null&&(n=31-sa(i),e=o.hiddenUpdates,t=e[n],t===null?e[n]=[a]:t.push(a),a.lane=i|536870912),o):null}function Kn(e){if(50<dn)throw dn=0,Hl=null,Error(h(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var it={};function Lm(e,a,i,t){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,a,i,t){return new Lm(e,a,i,t)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,a){var i=e.alternate;return i===null?(i=ra(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function hc(e,a){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,a=i.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Vn(e,a,i,t,n,o){var s=0;if(t=e,typeof e=="function")ws(e)&&(s=1);else if(typeof e=="string")s=Gh(e,i,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=ra(31,i,a,n),e.elementType=he,e.lanes=o,e;case Ie:return Hi(i.children,n,o,a);case ia:s=8,n|=24;break;case F:return e=ra(12,i,a,n|2),e.elementType=F,e.lanes=o,e;case Pe:return e=ra(13,i,a,n),e.elementType=Pe,e.lanes=o,e;case I:return e=ra(19,i,a,n),e.elementType=I,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:s=10;break e;case xa:s=9;break e;case Ye:s=11;break e;case N:s=14;break e;case ue:s=16,t=null;break e}s=29,i=Error(h(130,e===null?"null":typeof e,"")),t=null}return a=ra(s,i,a,n),a.elementType=e,a.type=t,a.lanes=o,a}function Hi(e,a,i,t){return e=ra(7,e,t,a),e.lanes=i,e}function Ts(e,a,i){return e=ra(6,e,null,a),e.lanes=i,e}function pc(e){var a=ra(18,null,null,0);return a.stateNode=e,a}function Cs(e,a,i){return a=ra(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var yc=new WeakMap;function va(e,a){if(typeof e=="object"&&e!==null){var i=yc.get(e);return i!==void 0?i:(a={value:e,source:a,stack:pr(a)},yc.set(e,a),a)}return{value:e,source:a,stack:pr(a)}}var tt=[],nt=0,Jn=null,Kt=0,ba=[],Aa=0,ii=null,za=1,Ha="";function qa(e,a){tt[nt++]=Kt,tt[nt++]=Jn,Jn=e,Kt=a}function gc(e,a,i){ba[Aa++]=za,ba[Aa++]=Ha,ba[Aa++]=ii,ii=e;var t=za;e=Ha;var n=32-sa(t)-1;t&=~(1<<n),i+=1;var o=32-sa(a)+n;if(30<o){var s=n-n%5;o=(t&(1<<s)-1).toString(32),t>>=s,n-=s,za=1<<32-sa(a)+n|i<<n|t,Ha=o+e}else za=1<<o|i<<n|t,Ha=e}function Ms(e){e.return!==null&&(qa(e,1),gc(e,1,0))}function Es(e){for(;e===Jn;)Jn=tt[--nt],tt[nt]=null,Kt=tt[--nt],tt[nt]=null;for(;e===ii;)ii=ba[--Aa],ba[Aa]=null,Ha=ba[--Aa],ba[Aa]=null,za=ba[--Aa],ba[Aa]=null}function vc(e,a){ba[Aa++]=za,ba[Aa++]=Ha,ba[Aa++]=ii,za=a.id,Ha=a.overflow,ii=e}var ke=null,pe=null,Z=!1,ti=null,Ra=!1,Ds=Error(h(519));function ni(e){var a=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vt(va(a,e)),Ds}function bc(e){var a=e.stateNode,i=e.type,t=e.memoizedProps;switch(a[Oe]=e,a[Xe]=t,i){case"dialog":P("cancel",a),P("close",a);break;case"iframe":case"object":case"embed":P("load",a);break;case"video":case"audio":for(i=0;i<mn.length;i++)P(mn[i],a);break;case"source":P("error",a);break;case"img":case"image":case"link":P("error",a),P("load",a);break;case"details":P("toggle",a);break;case"input":P("invalid",a),Nr(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":P("invalid",a);break;case"textarea":P("invalid",a),Or(a,t.value,t.defaultValue,t.children)}i=t.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||t.suppressHydrationWarning===!0||jd(a.textContent,i)?(t.popover!=null&&(P("beforetoggle",a),P("toggle",a)),t.onScroll!=null&&P("scroll",a),t.onScrollEnd!=null&&P("scrollend",a),t.onClick!=null&&(a.onclick=ka),a=!0):a=!1,a||ni(e,!0)}function Ac(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:Ra=!1;return;case 27:case 3:Ra=!0;return;default:ke=ke.return}}function ot(e){if(e!==ke)return!1;if(!Z)return Ac(e),Z=!0,!1;var a=e.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Yl(e.type,e.memoizedProps)),i=!i),i&&pe&&ni(e),Ac(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));pe=Jd(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));pe=Jd(e)}else a===27?(a=pe,vi(e.type)?(e=Wl,Wl=null,pe=e):pe=a):pe=ke?wa(e.stateNode.nextSibling):null;return!0}function Ni(){pe=ke=null,Z=!1}function xs(){var e=ti;return e!==null&&(ea===null?ea=e:ea.push.apply(ea,e),ti=null),e}function Vt(e){ti===null?ti=[e]:ti.push(e)}var zs=u(null),Bi=null,Ia=null;function oi(e,a,i){M(zs,a._currentValue),a._currentValue=i}function Ua(e){e._currentValue=zs.current,R(zs)}function Hs(e,a,i){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===i)break;e=e.return}}function Ns(e,a,i,t){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var o=n.dependencies;if(o!==null){var s=n.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=n;for(var r=0;r<a.length;r++)if(l.context===a[r]){o.lanes|=i,l=o.alternate,l!==null&&(l.lanes|=i),Hs(o.return,i,e),t||(s=null);break e}o=l.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(h(341));s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),Hs(s,i,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function st(e,a,i,t){e=null;for(var n=a,o=!1;n!==null;){if(!o){if((n.flags&524288)!==0)o=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var l=n.type;la(n.pendingProps.value,s.value)||(e!==null?e.push(l):e=[l])}}else if(n===ie.current){if(s=n.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Ns(a,e,i,t),a.flags|=262144}function Yn(e){for(e=e.firstContext;e!==null;){if(!la(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){Bi=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function je(e){return Rc(Bi,e)}function Pn(e,a){return Bi===null&&Oi(e),Rc(e,a)}function Rc(e,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},Ia===null){if(e===null)throw Error(h(308));Ia=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ia=Ia.next=a;return i}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(i,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(i){return i()})}},Im=T.unstable_scheduleCallback,Um=T.unstable_NormalPriority,Te={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bs(){return{controller:new qm,data:new Map,refCount:0}}function Jt(e){e.refCount--,e.refCount===0&&Im(Um,function(){e.controller.abort()})}var Yt=null,Os=0,lt=0,rt=null;function _m(e,a){if(Yt===null){var i=Yt=[];Os=0,lt=Ll(),rt={status:"pending",value:void 0,then:function(t){i.push(t)}}}return Os++,a.then(Sc,Sc),a}function Sc(){if(--Os===0&&Yt!==null){rt!==null&&(rt.status="fulfilled");var e=Yt;Yt=null,lt=0,rt=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Gm(e,a){var i=[],t={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return e.then(function(){t.status="fulfilled",t.value=a;for(var n=0;n<i.length;n++)(0,i[n])(a)},function(n){for(t.status="rejected",t.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),t}var wc=v.S;v.S=function(e,a){sd=na(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&_m(e,a),wc!==null&&wc(e,a)};var ki=u(null);function ks(){var e=ki.current;return e!==null?e:fe.pooledCache}function Qn(e,a){a===null?M(ki,ki.current):M(ki,a.pool)}function Tc(){var e=ks();return e===null?null:{parent:Te._currentValue,pool:e}}var ct=Error(h(460)),js=Error(h(474)),Xn=Error(h(542)),Zn={then:function(){}};function Cc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mc(e,a,i){switch(i=e[i],i===void 0?e.push(a):i!==a&&(a.then(ka,ka),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Dc(e),e;default:if(typeof a.status=="string")a.then(ka,ka);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=a,e.status="pending",e.then(function(t){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=t}},function(t){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Dc(e),e}throw Li=a,ct}}function ji(e){try{var a=e._init;return a(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Li=i,ct):i}}var Li=null;function Ec(){if(Li===null)throw Error(h(459));var e=Li;return Li=null,e}function Dc(e){if(e===ct||e===Xn)throw Error(h(483))}var ut=null,Pt=0;function Wn(e){var a=Pt;return Pt+=1,ut===null&&(ut=[]),Mc(ut,e,a)}function Qt(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Fn(e,a){throw a.$$typeof===me?Error(h(525)):(e=Object.prototype.toString.call(a),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function xc(e){function a(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function i(d,c){if(!e)return null;for(;c!==null;)a(d,c),c=c.sibling;return null}function t(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function n(d,c){return d=La(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=67108866,c):f):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function l(d,c,f,b){return c===null||c.tag!==6?(c=Ts(f,d.mode,b),c.return=d,c):(c=n(c,f),c.return=d,c)}function r(d,c,f,b){var H=f.type;return H===Ie?g(d,c,f.props.children,b,f.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ue&&ji(H)===c.type)?(c=n(c,f.props),Qt(c,f),c.return=d,c):(c=Vn(f.type,f.key,f.props,null,d.mode,b),Qt(c,f),c.return=d,c)}function m(d,c,f,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Cs(f,d.mode,b),c.return=d,c):(c=n(c,f.children||[]),c.return=d,c)}function g(d,c,f,b,H){return c===null||c.tag!==7?(c=Hi(f,d.mode,b,H),c.return=d,c):(c=n(c,f),c.return=d,c)}function A(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ts(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _e:return f=Vn(c.type,c.key,c.props,null,d.mode,f),Qt(f,c),f.return=d,f;case ze:return c=Cs(c,d.mode,f),c.return=d,c;case ue:return c=ji(c),A(d,c,f)}if(Qe(c)||Be(c))return c=Hi(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return A(d,Wn(c),f);if(c.$$typeof===De)return A(d,Pn(d,c),f);Fn(d,c)}return null}function p(d,c,f,b){var H=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return H!==null?null:l(d,c,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _e:return f.key===H?r(d,c,f,b):null;case ze:return f.key===H?m(d,c,f,b):null;case ue:return f=ji(f),p(d,c,f,b)}if(Qe(f)||Be(f))return H!==null?null:g(d,c,f,b,null);if(typeof f.then=="function")return p(d,c,Wn(f),b);if(f.$$typeof===De)return p(d,c,Pn(d,f),b);Fn(d,f)}return null}function y(d,c,f,b,H){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(f)||null,l(c,d,""+b,H);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _e:return d=d.get(b.key===null?f:b.key)||null,r(c,d,b,H);case ze:return d=d.get(b.key===null?f:b.key)||null,m(c,d,b,H);case ue:return b=ji(b),y(d,c,f,b,H)}if(Qe(b)||Be(b))return d=d.get(f)||null,g(c,d,b,H,null);if(typeof b.then=="function")return y(d,c,f,Wn(b),H);if(b.$$typeof===De)return y(d,c,f,Pn(c,b),H);Fn(c,b)}return null}function E(d,c,f,b){for(var H=null,$=null,z=c,V=c=0,X=null;z!==null&&V<f.length;V++){z.index>V?(X=z,z=null):X=z.sibling;var ee=p(d,z,f[V],b);if(ee===null){z===null&&(z=X);break}e&&z&&ee.alternate===null&&a(d,z),c=o(ee,c,V),$===null?H=ee:$.sibling=ee,$=ee,z=X}if(V===f.length)return i(d,z),Z&&qa(d,V),H;if(z===null){for(;V<f.length;V++)z=A(d,f[V],b),z!==null&&(c=o(z,c,V),$===null?H=z:$.sibling=z,$=z);return Z&&qa(d,V),H}for(z=t(z);V<f.length;V++)X=y(z,d,V,f[V],b),X!==null&&(e&&X.alternate!==null&&z.delete(X.key===null?V:X.key),c=o(X,c,V),$===null?H=X:$.sibling=X,$=X);return e&&z.forEach(function(wi){return a(d,wi)}),Z&&qa(d,V),H}function B(d,c,f,b){if(f==null)throw Error(h(151));for(var H=null,$=null,z=c,V=c=0,X=null,ee=f.next();z!==null&&!ee.done;V++,ee=f.next()){z.index>V?(X=z,z=null):X=z.sibling;var wi=p(d,z,ee.value,b);if(wi===null){z===null&&(z=X);break}e&&z&&wi.alternate===null&&a(d,z),c=o(wi,c,V),$===null?H=wi:$.sibling=wi,$=wi,z=X}if(ee.done)return i(d,z),Z&&qa(d,V),H;if(z===null){for(;!ee.done;V++,ee=f.next())ee=A(d,ee.value,b),ee!==null&&(c=o(ee,c,V),$===null?H=ee:$.sibling=ee,$=ee);return Z&&qa(d,V),H}for(z=t(z);!ee.done;V++,ee=f.next())ee=y(z,d,V,ee.value,b),ee!==null&&(e&&ee.alternate!==null&&z.delete(ee.key===null?V:ee.key),c=o(ee,c,V),$===null?H=ee:$.sibling=ee,$=ee);return e&&z.forEach(function($h){return a(d,$h)}),Z&&qa(d,V),H}function re(d,c,f,b){if(typeof f=="object"&&f!==null&&f.type===Ie&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _e:e:{for(var H=f.key;c!==null;){if(c.key===H){if(H=f.type,H===Ie){if(c.tag===7){i(d,c.sibling),b=n(c,f.props.children),b.return=d,d=b;break e}}else if(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ue&&ji(H)===c.type){i(d,c.sibling),b=n(c,f.props),Qt(b,f),b.return=d,d=b;break e}i(d,c);break}else a(d,c);c=c.sibling}f.type===Ie?(b=Hi(f.props.children,d.mode,b,f.key),b.return=d,d=b):(b=Vn(f.type,f.key,f.props,null,d.mode,b),Qt(b,f),b.return=d,d=b)}return s(d);case ze:e:{for(H=f.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){i(d,c.sibling),b=n(c,f.children||[]),b.return=d,d=b;break e}else{i(d,c);break}else a(d,c);c=c.sibling}b=Cs(f,d.mode,b),b.return=d,d=b}return s(d);case ue:return f=ji(f),re(d,c,f,b)}if(Qe(f))return E(d,c,f,b);if(Be(f)){if(H=Be(f),typeof H!="function")throw Error(h(150));return f=H.call(f),B(d,c,f,b)}if(typeof f.then=="function")return re(d,c,Wn(f),b);if(f.$$typeof===De)return re(d,c,Pn(d,f),b);Fn(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(i(d,c.sibling),b=n(c,f),b.return=d,d=b):(i(d,c),b=Ts(f,d.mode,b),b.return=d,d=b),s(d)):i(d,c)}return function(d,c,f,b){try{Pt=0;var H=re(d,c,f,b);return ut=null,H}catch(z){if(z===ct||z===Xn)throw z;var $=ra(29,z,null,d.mode);return $.lanes=b,$.return=d,$}}}var qi=xc(!0),zc=xc(!1),si=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function li(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ri(e,a,i){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ae&2)!==0){var n=t.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a,a=Kn(e),mc(e,null,i),a}return Gn(e,t,a,i),Kn(e)}function Xt(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var t=a.lanes;t&=e.pendingLanes,i|=t,a.lanes=i,Rr(e,i)}}function Is(e,a){var i=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var n=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};o===null?n=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?n=o=a:o=o.next=a}else n=o=a;i={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:o,shared:t.shared,callbacks:t.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}var Us=!1;function Zt(){if(Us){var e=rt;if(e!==null)throw e}}function Wt(e,a,i,t){Us=!1;var n=e.updateQueue;si=!1;var o=n.firstBaseUpdate,s=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var r=l,m=r.next;r.next=null,s===null?o=m:s.next=m,s=r;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==s&&(l===null?g.firstBaseUpdate=m:l.next=m,g.lastBaseUpdate=r))}if(o!==null){var A=n.baseState;s=0,g=m=r=null,l=o;do{var p=l.lane&-536870913,y=p!==l.lane;if(y?(Q&p)===p:(t&p)===p){p!==0&&p===lt&&(Us=!0),g!==null&&(g=g.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var E=e,B=l;p=a;var re=i;switch(B.tag){case 1:if(E=B.payload,typeof E=="function"){A=E.call(re,A,p);break e}A=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=B.payload,p=typeof E=="function"?E.call(re,A,p):E,p==null)break e;A=O({},A,p);break e;case 2:si=!0}}p=l.callback,p!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[p]:y.push(p))}else y={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(m=g=y,r=A):g=g.next=y,s|=p;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;y=l,l=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);g===null&&(r=A),n.baseState=r,n.firstBaseUpdate=m,n.lastBaseUpdate=g,o===null&&(n.shared.lanes=0),mi|=s,e.lanes=s,e.memoizedState=A}}function Hc(e,a){if(typeof e!="function")throw Error(h(191,e));e.call(a)}function Nc(e,a){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Hc(i[e],a)}var dt=u(null),$n=u(0);function Bc(e,a){e=Xa,M($n,e),M(dt,a),Xa=e|a.baseLanes}function _s(){M($n,Xa),M(dt,dt.current)}function Gs(){Xa=$n.current,R(dt),R($n)}var ca=u(null),Sa=null;function ci(e){var a=e.alternate;M(Se,Se.current&1),M(ca,e),Sa===null&&(a===null||dt.current!==null||a.memoizedState!==null)&&(Sa=e)}function Ks(e){M(Se,Se.current),M(ca,e),Sa===null&&(Sa=e)}function Oc(e){e.tag===22?(M(Se,Se.current),M(ca,e),Sa===null&&(Sa=e)):ui()}function ui(){M(Se,Se.current),M(ca,ca.current)}function ua(e){R(ca),Sa===e&&(Sa=null),R(Se)}var Se=u(0);function eo(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Xl(i)||Zl(i)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var _a=0,_=null,se=null,Ce=null,ao=!1,ft=!1,Ii=!1,io=0,Ft=0,mt=null,Km=0;function ve(){throw Error(h(321))}function Vs(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!la(e[i],a[i]))return!1;return!0}function Js(e,a,i,t,n,o){return _a=o,_=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,v.H=e===null||e.memoizedState===null?gu:sl,Ii=!1,o=i(t,n),Ii=!1,ft&&(o=jc(a,i,t,n)),kc(e),o}function kc(e){v.H=an;var a=se!==null&&se.next!==null;if(_a=0,Ce=se=_=null,ao=!1,Ft=0,mt=null,a)throw Error(h(300));e===null||Me||(e=e.dependencies,e!==null&&Yn(e)&&(Me=!0))}function jc(e,a,i,t){_=e;var n=0;do{if(ft&&(mt=null),Ft=0,ft=!1,25<=n)throw Error(h(301));if(n+=1,Ce=se=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}v.H=vu,o=a(i,t)}while(ft);return o}function Vm(){var e=v.H,a=e.useState()[0];return a=typeof a.then=="function"?$t(a):a,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(_.flags|=1024),a}function Ys(){var e=io!==0;return io=0,e}function Ps(e,a,i){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i}function Qs(e){if(ao){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ao=!1}_a=0,Ce=se=_=null,ft=!1,Ft=io=0,mt=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?_.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function we(){if(se===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var a=Ce===null?_.memoizedState:Ce.next;if(a!==null)Ce=a,se=e;else{if(e===null)throw _.alternate===null?Error(h(467)):Error(h(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Ce===null?_.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function to(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $t(e){var a=Ft;return Ft+=1,mt===null&&(mt=[]),e=Mc(mt,e,a),a=_,(Ce===null?a.memoizedState:Ce.next)===null&&(a=a.alternate,v.H=a===null||a.memoizedState===null?gu:sl),e}function no(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $t(e);if(e.$$typeof===De)return je(e)}throw Error(h(438,String(e)))}function Xs(e){var a=null,i=_.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var t=_.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=to(),_.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(e),t=0;t<e;t++)i[t]=ta;return a.index++,i}function Ga(e,a){return typeof a=="function"?a(e):a}function oo(e){var a=we();return Zs(a,se,e)}function Zs(e,a,i){var t=e.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=i;var n=e.baseQueue,o=t.pending;if(o!==null){if(n!==null){var s=n.next;n.next=o.next,o.next=s}a.baseQueue=n=o,t.pending=null}if(o=e.baseState,n===null)e.memoizedState=o;else{a=n.next;var l=s=null,r=null,m=a,g=!1;do{var A=m.lane&-536870913;if(A!==m.lane?(Q&A)===A:(_a&A)===A){var p=m.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),A===lt&&(g=!0);else if((_a&p)===p){m=m.next,p===lt&&(g=!0);continue}else A={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(l=r=A,s=o):r=r.next=A,_.lanes|=p,mi|=p;A=m.action,Ii&&i(o,A),o=m.hasEagerState?m.eagerState:i(o,A)}else p={lane:A,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(l=r=p,s=o):r=r.next=p,_.lanes|=A,mi|=A;m=m.next}while(m!==null&&m!==a);if(r===null?s=o:r.next=l,!la(o,e.memoizedState)&&(Me=!0,g&&(i=rt,i!==null)))throw i;e.memoizedState=o,e.baseState=s,e.baseQueue=r,t.lastRenderedState=o}return n===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function Ws(e){var a=we(),i=a.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=e;var t=i.dispatch,n=i.pending,o=a.memoizedState;if(n!==null){i.pending=null;var s=n=n.next;do o=e(o,s.action),s=s.next;while(s!==n);la(o,a.memoizedState)||(Me=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),i.lastRenderedState=o}return[o,t]}function Lc(e,a,i){var t=_,n=we(),o=Z;if(o){if(i===void 0)throw Error(h(407));i=i()}else i=a();var s=!la((se||n).memoizedState,i);if(s&&(n.memoizedState=i,Me=!0),n=n.queue,el(Uc.bind(null,t,n,e),[e]),n.getSnapshot!==a||s||Ce!==null&&Ce.memoizedState.tag&1){if(t.flags|=2048,ht(9,{destroy:void 0},Ic.bind(null,t,n,i,a),null),fe===null)throw Error(h(349));o||(_a&127)!==0||qc(t,a,i)}return i}function qc(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=_.updateQueue,a===null?(a=to(),_.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function Ic(e,a,i,t){a.value=i,a.getSnapshot=t,_c(a)&&Gc(e)}function Uc(e,a,i){return i(function(){_c(a)&&Gc(e)})}function _c(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!la(e,i)}catch{return!0}}function Gc(e){var a=zi(e,2);a!==null&&aa(a,e,2)}function Fs(e){var a=Ke();if(typeof e=="function"){var i=e;if(e=i(),Ii){$a(!0);try{i()}finally{$a(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:e},a}function Kc(e,a,i,t){return e.baseState=i,Zs(e,se,typeof t=="function"?t:Ga)}function Jm(e,a,i,t,n){if(ro(e))throw Error(h(485));if(e=a.action,e!==null){var o={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};v.T!==null?i(!0):o.isTransition=!1,t(o),i=a.pending,i===null?(o.next=a.pending=o,Vc(a,o)):(o.next=i.next,a.pending=i.next=o)}}function Vc(e,a){var i=a.action,t=a.payload,n=e.state;if(a.isTransition){var o=v.T,s={};v.T=s;try{var l=i(n,t),r=v.S;r!==null&&r(s,l),Jc(e,a,l)}catch(m){$s(e,a,m)}finally{o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}else try{o=i(n,t),Jc(e,a,o)}catch(m){$s(e,a,m)}}function Jc(e,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(t){Yc(e,a,t)},function(t){return $s(e,a,t)}):Yc(e,a,i)}function Yc(e,a,i){a.status="fulfilled",a.value=i,Pc(a),e.state=i,a=e.pending,a!==null&&(i=a.next,i===a?e.pending=null:(i=i.next,a.next=i,Vc(e,i)))}function $s(e,a,i){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=i,Pc(a),a=a.next;while(a!==t)}e.action=null}function Pc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Qc(e,a){return a}function Xc(e,a){if(Z){var i=fe.formState;if(i!==null){e:{var t=_;if(Z){if(pe){a:{for(var n=pe,o=Ra;n.nodeType!==8;){if(!o){n=null;break a}if(n=wa(n.nextSibling),n===null){n=null;break a}}o=n.data,n=o==="F!"||o==="F"?n:null}if(n){pe=wa(n.nextSibling),t=n.data==="F!";break e}}ni(t)}t=!1}t&&(a=i[0])}}return i=Ke(),i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:a},i.queue=t,i=hu.bind(null,_,t),t.dispatch=i,t=Fs(!1),o=ol.bind(null,_,!1,t.queue),t=Ke(),n={state:a,dispatch:null,action:e,pending:null},t.queue=n,i=Jm.bind(null,_,n,o,i),n.dispatch=i,t.memoizedState=e,[a,i,!1]}function Zc(e){var a=we();return Wc(a,se,e)}function Wc(e,a,i){if(a=Zs(e,a,Qc)[0],e=oo(Ga)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=$t(a)}catch(s){throw s===ct?Xn:s}else t=a;a=we();var n=a.queue,o=n.dispatch;return i!==a.memoizedState&&(_.flags|=2048,ht(9,{destroy:void 0},Ym.bind(null,n,i),null)),[t,o,e]}function Ym(e,a){e.action=a}function Fc(e){var a=we(),i=se;if(i!==null)return Wc(a,i,e);we(),a=a.memoizedState,i=we();var t=i.queue.dispatch;return i.memoizedState=e,[a,t,!1]}function ht(e,a,i,t){return e={tag:e,create:i,deps:t,inst:a,next:null},a=_.updateQueue,a===null&&(a=to(),_.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=e.next=e:(t=i.next,i.next=e,e.next=t,a.lastEffect=e),e}function $c(){return we().memoizedState}function so(e,a,i,t){var n=Ke();_.flags|=e,n.memoizedState=ht(1|a,{destroy:void 0},i,t===void 0?null:t)}function lo(e,a,i,t){var n=we();t=t===void 0?null:t;var o=n.memoizedState.inst;se!==null&&t!==null&&Vs(t,se.memoizedState.deps)?n.memoizedState=ht(a,o,i,t):(_.flags|=e,n.memoizedState=ht(1|a,o,i,t))}function eu(e,a){so(8390656,8,e,a)}function el(e,a){lo(2048,8,e,a)}function Pm(e){_.flags|=4;var a=_.updateQueue;if(a===null)a=to(),_.updateQueue=a,a.events=[e];else{var i=a.events;i===null?a.events=[e]:i.push(e)}}function au(e){var a=we().memoizedState;return Pm({ref:a,nextImpl:e}),function(){if((ae&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}function iu(e,a){return lo(4,2,e,a)}function tu(e,a){return lo(4,4,e,a)}function nu(e,a){if(typeof a=="function"){e=e();var i=a(e);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ou(e,a,i){i=i!=null?i.concat([e]):null,lo(4,4,nu.bind(null,a,e),i)}function al(){}function su(e,a){var i=we();a=a===void 0?null:a;var t=i.memoizedState;return a!==null&&Vs(a,t[1])?t[0]:(i.memoizedState=[e,a],e)}function lu(e,a){var i=we();a=a===void 0?null:a;var t=i.memoizedState;if(a!==null&&Vs(a,t[1]))return t[0];if(t=e(),Ii){$a(!0);try{e()}finally{$a(!1)}}return i.memoizedState=[t,a],t}function il(e,a,i){return i===void 0||(_a&1073741824)!==0&&(Q&261930)===0?e.memoizedState=a:(e.memoizedState=i,e=rd(),_.lanes|=e,mi|=e,i)}function ru(e,a,i,t){return la(i,a)?i:dt.current!==null?(e=il(e,i,t),la(e,a)||(Me=!0),e):(_a&42)===0||(_a&1073741824)!==0&&(Q&261930)===0?(Me=!0,e.memoizedState=i):(e=rd(),_.lanes|=e,mi|=e,a)}function cu(e,a,i,t,n){var o=C.p;C.p=o!==0&&8>o?o:8;var s=v.T,l={};v.T=l,ol(e,!1,a,i);try{var r=n(),m=v.S;if(m!==null&&m(l,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var g=Gm(r,t);en(e,a,g,ma(e))}else en(e,a,t,ma(e))}catch(A){en(e,a,{then:function(){},status:"rejected",reason:A},ma())}finally{C.p=o,s!==null&&l.types!==null&&(s.types=l.types),v.T=s}}function Qm(){}function tl(e,a,i,t){if(e.tag!==5)throw Error(h(476));var n=uu(e).queue;cu(e,n,a,k,i===null?Qm:function(){return du(e),i(t)})}function uu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:k},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:i},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function du(e){var a=uu(e);a.next===null&&(a=e.alternate.memoizedState),en(e,a.next.queue,{},ma())}function nl(){return je(vn)}function fu(){return we().memoizedState}function mu(){return we().memoizedState}function Xm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var i=ma();e=li(i);var t=ri(a,e,i);t!==null&&(aa(t,a,i),Xt(t,a,i)),a={cache:Bs()},e.payload=a;return}a=a.return}}function Zm(e,a,i){var t=ma();i={lane:t,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ro(e)?pu(a,i):(i=Ss(e,a,i,t),i!==null&&(aa(i,e,t),yu(i,a,t)))}function hu(e,a,i){var t=ma();en(e,a,i,t)}function en(e,a,i,t){var n={lane:t,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ro(e))pu(a,n);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var s=a.lastRenderedState,l=o(s,i);if(n.hasEagerState=!0,n.eagerState=l,la(l,s))return Gn(e,a,n,0),fe===null&&_n(),!1}catch{}if(i=Ss(e,a,n,t),i!==null)return aa(i,e,t),yu(i,a,t),!0}return!1}function ol(e,a,i,t){if(t={lane:2,revertLane:Ll(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ro(e)){if(a)throw Error(h(479))}else a=Ss(e,i,t,2),a!==null&&aa(a,e,2)}function ro(e){var a=e.alternate;return e===_||a!==null&&a===_}function pu(e,a){ft=ao=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function yu(e,a,i){if((i&4194048)!==0){var t=a.lanes;t&=e.pendingLanes,i|=t,a.lanes=i,Rr(e,i)}}var an={readContext:je,use:no,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};an.useEffectEvent=ve;var gu={readContext:je,use:no,useCallback:function(e,a){return Ke().memoizedState=[e,a===void 0?null:a],e},useContext:je,useEffect:eu,useImperativeHandle:function(e,a,i){i=i!=null?i.concat([e]):null,so(4194308,4,nu.bind(null,a,e),i)},useLayoutEffect:function(e,a){return so(4194308,4,e,a)},useInsertionEffect:function(e,a){so(4,2,e,a)},useMemo:function(e,a){var i=Ke();a=a===void 0?null:a;var t=e();if(Ii){$a(!0);try{e()}finally{$a(!1)}}return i.memoizedState=[t,a],t},useReducer:function(e,a,i){var t=Ke();if(i!==void 0){var n=i(a);if(Ii){$a(!0);try{i(a)}finally{$a(!1)}}}else n=a;return t.memoizedState=t.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Zm.bind(null,_,e),[t.memoizedState,e]},useRef:function(e){var a=Ke();return e={current:e},a.memoizedState=e},useState:function(e){e=Fs(e);var a=e.queue,i=hu.bind(null,_,a);return a.dispatch=i,[e.memoizedState,i]},useDebugValue:al,useDeferredValue:function(e,a){var i=Ke();return il(i,e,a)},useTransition:function(){var e=Fs(!1);return e=cu.bind(null,_,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,i){var t=_,n=Ke();if(Z){if(i===void 0)throw Error(h(407));i=i()}else{if(i=a(),fe===null)throw Error(h(349));(Q&127)!==0||qc(t,a,i)}n.memoizedState=i;var o={value:i,getSnapshot:a};return n.queue=o,eu(Uc.bind(null,t,o,e),[e]),t.flags|=2048,ht(9,{destroy:void 0},Ic.bind(null,t,o,i,a),null),i},useId:function(){var e=Ke(),a=fe.identifierPrefix;if(Z){var i=Ha,t=za;i=(t&~(1<<32-sa(t)-1)).toString(32)+i,a="_"+a+"R_"+i,i=io++,0<i&&(a+="H"+i.toString(32)),a+="_"}else i=Km++,a="_"+a+"r_"+i.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:nl,useFormState:Xc,useActionState:Xc,useOptimistic:function(e){var a=Ke();a.memoizedState=a.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=ol.bind(null,_,!0,i),i.dispatch=a,[e,a]},useMemoCache:Xs,useCacheRefresh:function(){return Ke().memoizedState=Xm.bind(null,_)},useEffectEvent:function(e){var a=Ke(),i={impl:e};return a.memoizedState=i,function(){if((ae&2)!==0)throw Error(h(440));return i.impl.apply(void 0,arguments)}}},sl={readContext:je,use:no,useCallback:su,useContext:je,useEffect:el,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:tu,useMemo:lu,useReducer:oo,useRef:$c,useState:function(){return oo(Ga)},useDebugValue:al,useDeferredValue:function(e,a){var i=we();return ru(i,se.memoizedState,e,a)},useTransition:function(){var e=oo(Ga)[0],a=we().memoizedState;return[typeof e=="boolean"?e:$t(e),a]},useSyncExternalStore:Lc,useId:fu,useHostTransitionStatus:nl,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,a){var i=we();return Kc(i,se,e,a)},useMemoCache:Xs,useCacheRefresh:mu};sl.useEffectEvent=au;var vu={readContext:je,use:no,useCallback:su,useContext:je,useEffect:el,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:tu,useMemo:lu,useReducer:Ws,useRef:$c,useState:function(){return Ws(Ga)},useDebugValue:al,useDeferredValue:function(e,a){var i=we();return se===null?il(i,e,a):ru(i,se.memoizedState,e,a)},useTransition:function(){var e=Ws(Ga)[0],a=we().memoizedState;return[typeof e=="boolean"?e:$t(e),a]},useSyncExternalStore:Lc,useId:fu,useHostTransitionStatus:nl,useFormState:Fc,useActionState:Fc,useOptimistic:function(e,a){var i=we();return se!==null?Kc(i,se,e,a):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Xs,useCacheRefresh:mu};vu.useEffectEvent=au;function ll(e,a,i,t){a=e.memoizedState,i=i(t,a),i=i==null?a:O({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var rl={enqueueSetState:function(e,a,i){e=e._reactInternals;var t=ma(),n=li(t);n.payload=a,i!=null&&(n.callback=i),a=ri(e,n,t),a!==null&&(aa(a,e,t),Xt(a,e,t))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var t=ma(),n=li(t);n.tag=1,n.payload=a,i!=null&&(n.callback=i),a=ri(e,n,t),a!==null&&(aa(a,e,t),Xt(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=ma(),t=li(i);t.tag=2,a!=null&&(t.callback=a),a=ri(e,t,i),a!==null&&(aa(a,e,i),Xt(a,e,i))}};function bu(e,a,i,t,n,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,s):a.prototype&&a.prototype.isPureReactComponent?!_t(i,t)||!_t(n,o):!0}function Au(e,a,i,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,t),a.state!==e&&rl.enqueueReplaceState(a,a.state,null)}function Ui(e,a){var i=a;if("ref"in a){i={};for(var t in a)t!=="ref"&&(i[t]=a[t])}if(e=e.defaultProps){i===a&&(i=O({},i));for(var n in e)i[n]===void 0&&(i[n]=e[n])}return i}function Ru(e){Un(e)}function Su(e){console.error(e)}function wu(e){Un(e)}function co(e,a){try{var i=e.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Tu(e,a,i){try{var t=e.onCaughtError;t(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cl(e,a,i){return i=li(i),i.tag=3,i.payload={element:null},i.callback=function(){co(e,a)},i}function Cu(e){return e=li(e),e.tag=3,e}function Mu(e,a,i,t){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;e.payload=function(){return n(o)},e.callback=function(){Tu(a,i,t)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Tu(a,i,t),typeof n!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})})}function Wm(e,a,i,t,n){if(i.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=i.alternate,a!==null&&st(a,i,n,!0),i=ca.current,i!==null){switch(i.tag){case 31:case 13:return Sa===null?So():i.alternate===null&&be===0&&(be=3),i.flags&=-257,i.flags|=65536,i.lanes=n,t===Zn?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([t]):a.add(t),Ol(e,t,n)),!1;case 22:return i.flags|=65536,t===Zn?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([t]):i.add(t)),Ol(e,t,n)),!1}throw Error(h(435,i.tag))}return Ol(e,t,n),So(),!1}if(Z)return a=ca.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,t!==Ds&&(e=Error(h(422),{cause:t}),Vt(va(e,i)))):(t!==Ds&&(a=Error(h(423),{cause:t}),Vt(va(a,i))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,t=va(t,i),n=cl(e.stateNode,t,n),Is(e,n),be!==4&&(be=2)),!1;var o=Error(h(520),{cause:t});if(o=va(o,i),un===null?un=[o]:un.push(o),be!==4&&(be=2),a===null)return!0;t=va(t,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,e=n&-n,i.lanes|=e,e=cl(i.stateNode,t,e),Is(i,e),!1;case 1:if(a=i.type,o=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(hi===null||!hi.has(o))))return i.flags|=65536,n&=-n,i.lanes|=n,n=Cu(n),Mu(n,e,i,t),Is(i,n),!1}i=i.return}while(i!==null);return!1}var ul=Error(h(461)),Me=!1;function Le(e,a,i,t){a.child=e===null?zc(a,null,i,t):qi(a,e.child,i,t)}function Eu(e,a,i,t,n){i=i.render;var o=a.ref;if("ref"in t){var s={};for(var l in t)l!=="ref"&&(s[l]=t[l])}else s=t;return Oi(a),t=Js(e,a,i,s,o,n),l=Ys(),e!==null&&!Me?(Ps(e,a,n),Ka(e,a,n)):(Z&&l&&Ms(a),a.flags|=1,Le(e,a,t,n),a.child)}function Du(e,a,i,t,n){if(e===null){var o=i.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=o,xu(e,a,o,t,n)):(e=Vn(i.type,null,t,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!vl(e,n)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:_t,i(s,t)&&e.ref===a.ref)return Ka(e,a,n)}return a.flags|=1,e=La(o,t),e.ref=a.ref,e.return=a,a.child=e}function xu(e,a,i,t,n){if(e!==null){var o=e.memoizedProps;if(_t(o,t)&&e.ref===a.ref)if(Me=!1,a.pendingProps=t=o,vl(e,n))(e.flags&131072)!==0&&(Me=!0);else return a.lanes=e.lanes,Ka(e,a,n)}return dl(e,a,i,t,n)}function zu(e,a,i,t){var n=t.children,o=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(o=o!==null?o.baseLanes|i:i,e!==null){for(t=a.child=e.child,n=0;t!==null;)n=n|t.lanes|t.childLanes,t=t.sibling;t=n&~o}else t=0,a.child=null;return Hu(e,a,o,i,t)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qn(a,o!==null?o.cachePool:null),o!==null?Bc(a,o):_s(),Oc(a);else return t=a.lanes=536870912,Hu(e,a,o!==null?o.baseLanes|i:i,i,t)}else o!==null?(Qn(a,o.cachePool),Bc(a,o),ui(),a.memoizedState=null):(e!==null&&Qn(a,null),_s(),ui());return Le(e,a,n,i),a.child}function tn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Hu(e,a,i,t,n){var o=ks();return o=o===null?null:{parent:Te._currentValue,pool:o},a.memoizedState={baseLanes:i,cachePool:o},e!==null&&Qn(a,null),_s(),Oc(a),e!==null&&st(e,a,t,!0),a.childLanes=n,null}function uo(e,a){return a=mo({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Nu(e,a,i){return qi(a,e.child,null,i),e=uo(a,a.pendingProps),e.flags|=2,ua(a),a.memoizedState=null,e}function Fm(e,a,i){var t=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Z){if(t.mode==="hidden")return e=uo(a,t),a.lanes=536870912,tn(null,e);if(Ks(a),(e=pe)?(e=Vd(e,Ra),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ii!==null?{id:za,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},i=pc(e),i.return=a,a.child=i,ke=a,pe=null)):e=null,e===null)throw ni(a);return a.lanes=536870912,null}return uo(a,t)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ks(a),n)if(a.flags&256)a.flags&=-257,a=Nu(e,a,i);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(h(558));else if(Me||st(e,a,i,!1),n=(i&e.childLanes)!==0,Me||n){if(t=fe,t!==null&&(s=Sr(t,i),s!==0&&s!==o.retryLane))throw o.retryLane=s,zi(e,s),aa(t,e,s),ul;So(),a=Nu(e,a,i)}else e=o.treeContext,pe=wa(s.nextSibling),ke=a,Z=!0,ti=null,Ra=!1,e!==null&&vc(a,e),a=uo(a,t),a.flags|=4096;return a}return e=La(e.child,{mode:t.mode,children:t.children}),e.ref=a.ref,a.child=e,e.return=a,e}function fo(e,a){var i=a.ref;if(i===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(h(284));(e===null||e.ref!==i)&&(a.flags|=4194816)}}function dl(e,a,i,t,n){return Oi(a),i=Js(e,a,i,t,void 0,n),t=Ys(),e!==null&&!Me?(Ps(e,a,n),Ka(e,a,n)):(Z&&t&&Ms(a),a.flags|=1,Le(e,a,i,n),a.child)}function Bu(e,a,i,t,n,o){return Oi(a),a.updateQueue=null,i=jc(a,t,i,n),kc(e),t=Ys(),e!==null&&!Me?(Ps(e,a,o),Ka(e,a,o)):(Z&&t&&Ms(a),a.flags|=1,Le(e,a,i,o),a.child)}function Ou(e,a,i,t,n){if(Oi(a),a.stateNode===null){var o=it,s=i.contextType;typeof s=="object"&&s!==null&&(o=je(s)),o=new i(t,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=rl,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=t,o.state=a.memoizedState,o.refs={},Ls(a),s=i.contextType,o.context=typeof s=="object"&&s!==null?je(s):it,o.state=a.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(ll(a,i,s,t),o.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&rl.enqueueReplaceState(o,o.state,null),Wt(a,t,o,n),Zt(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(e===null){o=a.stateNode;var l=a.memoizedProps,r=Ui(i,l);o.props=r;var m=o.context,g=i.contextType;s=it,typeof g=="object"&&g!==null&&(s=je(g));var A=i.getDerivedStateFromProps;g=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||m!==s)&&Au(a,o,t,s),si=!1;var p=a.memoizedState;o.state=p,Wt(a,t,o,n),Zt(),m=a.memoizedState,l||p!==m||si?(typeof A=="function"&&(ll(a,i,A,t),m=a.memoizedState),(r=si||bu(a,i,r,t,p,m,s))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=m),o.props=t,o.state=m,o.context=s,t=r):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{o=a.stateNode,qs(e,a),s=a.memoizedProps,g=Ui(i,s),o.props=g,A=a.pendingProps,p=o.context,m=i.contextType,r=it,typeof m=="object"&&m!==null&&(r=je(m)),l=i.getDerivedStateFromProps,(m=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==A||p!==r)&&Au(a,o,t,r),si=!1,p=a.memoizedState,o.state=p,Wt(a,t,o,n),Zt();var y=a.memoizedState;s!==A||p!==y||si||e!==null&&e.dependencies!==null&&Yn(e.dependencies)?(typeof l=="function"&&(ll(a,i,l,t),y=a.memoizedState),(g=si||bu(a,i,g,t,p,y,r)||e!==null&&e.dependencies!==null&&Yn(e.dependencies))?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(t,y,r),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(t,y,r)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=y),o.props=t,o.state=y,o.context=r,t=g):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),t=!1)}return o=t,fo(e,a),t=(a.flags&128)!==0,o||t?(o=a.stateNode,i=t&&typeof i.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&t?(a.child=qi(a,e.child,null,n),a.child=qi(a,null,i,n)):Le(e,a,i,n),a.memoizedState=o.state,e=a.child):e=Ka(e,a,n),e}function ku(e,a,i,t){return Ni(),a.flags|=256,Le(e,a,i,t),a.child}var fl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ml(e){return{baseLanes:e,cachePool:Tc()}}function hl(e,a,i){return e=e!==null?e.childLanes&~i:0,a&&(e|=fa),e}function ju(e,a,i){var t=a.pendingProps,n=!1,o=(a.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),s&&(n=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,e===null){if(Z){if(n?ci(a):ui(),(e=pe)?(e=Vd(e,Ra),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ii!==null?{id:za,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},i=pc(e),i.return=a,a.child=i,ke=a,pe=null)):e=null,e===null)throw ni(a);return Zl(e)?a.lanes=32:a.lanes=536870912,null}var l=t.children;return t=t.fallback,n?(ui(),n=a.mode,l=mo({mode:"hidden",children:l},n),t=Hi(t,n,i,null),l.return=a,t.return=a,l.sibling=t,a.child=l,t=a.child,t.memoizedState=ml(i),t.childLanes=hl(e,s,i),a.memoizedState=fl,tn(null,t)):(ci(a),pl(a,l))}var r=e.memoizedState;if(r!==null&&(l=r.dehydrated,l!==null)){if(o)a.flags&256?(ci(a),a.flags&=-257,a=yl(e,a,i)):a.memoizedState!==null?(ui(),a.child=e.child,a.flags|=128,a=null):(ui(),l=t.fallback,n=a.mode,t=mo({mode:"visible",children:t.children},n),l=Hi(l,n,i,null),l.flags|=2,t.return=a,l.return=a,t.sibling=l,a.child=t,qi(a,e.child,null,i),t=a.child,t.memoizedState=ml(i),t.childLanes=hl(e,s,i),a.memoizedState=fl,a=tn(null,t));else if(ci(a),Zl(l)){if(s=l.nextSibling&&l.nextSibling.dataset,s)var m=s.dgst;s=m,t=Error(h(419)),t.stack="",t.digest=s,Vt({value:t,source:null,stack:null}),a=yl(e,a,i)}else if(Me||st(e,a,i,!1),s=(i&e.childLanes)!==0,Me||s){if(s=fe,s!==null&&(t=Sr(s,i),t!==0&&t!==r.retryLane))throw r.retryLane=t,zi(e,t),aa(s,e,t),ul;Xl(l)||So(),a=yl(e,a,i)}else Xl(l)?(a.flags|=192,a.child=e.child,a=null):(e=r.treeContext,pe=wa(l.nextSibling),ke=a,Z=!0,ti=null,Ra=!1,e!==null&&vc(a,e),a=pl(a,t.children),a.flags|=4096);return a}return n?(ui(),l=t.fallback,n=a.mode,r=e.child,m=r.sibling,t=La(r,{mode:"hidden",children:t.children}),t.subtreeFlags=r.subtreeFlags&65011712,m!==null?l=La(m,l):(l=Hi(l,n,i,null),l.flags|=2),l.return=a,t.return=a,t.sibling=l,a.child=t,tn(null,t),t=a.child,l=e.child.memoizedState,l===null?l=ml(i):(n=l.cachePool,n!==null?(r=Te._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Tc(),l={baseLanes:l.baseLanes|i,cachePool:n}),t.memoizedState=l,t.childLanes=hl(e,s,i),a.memoizedState=fl,tn(e.child,t)):(ci(a),i=e.child,e=i.sibling,i=La(i,{mode:"visible",children:t.children}),i.return=a,i.sibling=null,e!==null&&(s=a.deletions,s===null?(a.deletions=[e],a.flags|=16):s.push(e)),a.child=i,a.memoizedState=null,i)}function pl(e,a){return a=mo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function mo(e,a){return e=ra(22,e,null,a),e.lanes=0,e}function yl(e,a,i){return qi(a,e.child,null,i),e=pl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Lu(e,a,i){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),Hs(e.return,a,i)}function gl(e,a,i,t,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:n,treeForkCount:o}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=i,s.tailMode=n,s.treeForkCount=o)}function qu(e,a,i){var t=a.pendingProps,n=t.revealOrder,o=t.tail;t=t.children;var s=Se.current,l=(s&2)!==0;if(l?(s=s&1|2,a.flags|=128):s&=1,M(Se,s),Le(e,a,t,i),t=Z?Kt:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,i,a);else if(e.tag===19)Lu(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(i=a.child,n=null;i!==null;)e=i.alternate,e!==null&&eo(e)===null&&(n=i),i=i.sibling;i=n,i===null?(n=a.child,a.child=null):(n=i.sibling,i.sibling=null),gl(a,!1,n,i,o,t);break;case"backwards":case"unstable_legacy-backwards":for(i=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&eo(e)===null){a.child=n;break}e=n.sibling,n.sibling=i,i=n,n=e}gl(a,!0,i,null,o,t);break;case"together":gl(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function Ka(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),mi|=a.lanes,(i&a.childLanes)===0)if(e!==null){if(st(e,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(h(153));if(a.child!==null){for(e=a.child,i=La(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=La(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function vl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Yn(e)))}function $m(e,a,i){switch(a.tag){case 3:Ge(a,a.stateNode.containerInfo),oi(a,Te,e.memoizedState.cache),Ni();break;case 27:case 5:Dt(a);break;case 4:Ge(a,a.stateNode.containerInfo);break;case 10:oi(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ks(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(ci(a),a.flags|=128,null):(i&a.child.childLanes)!==0?ju(e,a,i):(ci(a),e=Ka(e,a,i),e!==null?e.sibling:null);ci(a);break;case 19:var n=(e.flags&128)!==0;if(t=(i&a.childLanes)!==0,t||(st(e,a,i,!1),t=(i&a.childLanes)!==0),n){if(t)return qu(e,a,i);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Se,Se.current),t)break;return null;case 22:return a.lanes=0,zu(e,a,i,a.pendingProps);case 24:oi(a,Te,e.memoizedState.cache)}return Ka(e,a,i)}function Iu(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps)Me=!0;else{if(!vl(e,i)&&(a.flags&128)===0)return Me=!1,$m(e,a,i);Me=(e.flags&131072)!==0}else Me=!1,Z&&(a.flags&1048576)!==0&&gc(a,Kt,a.index);switch(a.lanes=0,a.tag){case 16:e:{var t=a.pendingProps;if(e=ji(a.elementType),a.type=e,typeof e=="function")ws(e)?(t=Ui(e,t),a.tag=1,a=Ou(null,a,e,t,i)):(a.tag=0,a=dl(null,a,e,t,i));else{if(e!=null){var n=e.$$typeof;if(n===Ye){a.tag=11,a=Eu(null,a,e,t,i);break e}else if(n===N){a.tag=14,a=Du(null,a,e,t,i);break e}}throw a=Ca(e)||e,Error(h(306,a,""))}}return a;case 0:return dl(e,a,a.type,a.pendingProps,i);case 1:return t=a.type,n=Ui(t,a.pendingProps),Ou(e,a,t,n,i);case 3:e:{if(Ge(a,a.stateNode.containerInfo),e===null)throw Error(h(387));t=a.pendingProps;var o=a.memoizedState;n=o.element,qs(e,a),Wt(a,t,null,i);var s=a.memoizedState;if(t=s.cache,oi(a,Te,t),t!==o.cache&&Ns(a,[Te],i,!0),Zt(),t=s.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=ku(e,a,t,i);break e}else if(t!==n){n=va(Error(h(424)),a),Vt(n),a=ku(e,a,t,i);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pe=wa(e.firstChild),ke=a,Z=!0,ti=null,Ra=!0,i=zc(a,null,t,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ni(),t===n){a=Ka(e,a,i);break e}Le(e,a,t,i)}a=a.child}return a;case 26:return fo(e,a),e===null?(i=Zd(a.type,null,a.pendingProps,null))?a.memoizedState=i:Z||(i=a.type,e=a.pendingProps,t=xo(J.current).createElement(i),t[Oe]=a,t[Xe]=e,qe(t,i,e),He(t),a.stateNode=t):a.memoizedState=Zd(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Dt(a),e===null&&Z&&(t=a.stateNode=Pd(a.type,a.pendingProps,J.current),ke=a,Ra=!0,n=pe,vi(a.type)?(Wl=n,pe=wa(t.firstChild)):pe=n),Le(e,a,a.pendingProps.children,i),fo(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Z&&((n=t=pe)&&(t=xh(t,a.type,a.pendingProps,Ra),t!==null?(a.stateNode=t,ke=a,pe=wa(t.firstChild),Ra=!1,n=!0):n=!1),n||ni(a)),Dt(a),n=a.type,o=a.pendingProps,s=e!==null?e.memoizedProps:null,t=o.children,Yl(n,o)?t=null:s!==null&&Yl(n,s)&&(a.flags|=32),a.memoizedState!==null&&(n=Js(e,a,Vm,null,null,i),vn._currentValue=n),fo(e,a),Le(e,a,t,i),a.child;case 6:return e===null&&Z&&((e=i=pe)&&(i=zh(i,a.pendingProps,Ra),i!==null?(a.stateNode=i,ke=a,pe=null,e=!0):e=!1),e||ni(a)),null;case 13:return ju(e,a,i);case 4:return Ge(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=qi(a,null,t,i):Le(e,a,t,i),a.child;case 11:return Eu(e,a,a.type,a.pendingProps,i);case 7:return Le(e,a,a.pendingProps,i),a.child;case 8:return Le(e,a,a.pendingProps.children,i),a.child;case 12:return Le(e,a,a.pendingProps.children,i),a.child;case 10:return t=a.pendingProps,oi(a,a.type,t.value),Le(e,a,t.children,i),a.child;case 9:return n=a.type._context,t=a.pendingProps.children,Oi(a),n=je(n),t=t(n),a.flags|=1,Le(e,a,t,i),a.child;case 14:return Du(e,a,a.type,a.pendingProps,i);case 15:return xu(e,a,a.type,a.pendingProps,i);case 19:return qu(e,a,i);case 31:return Fm(e,a,i);case 22:return zu(e,a,i,a.pendingProps);case 24:return Oi(a),t=je(Te),e===null?(n=ks(),n===null&&(n=fe,o=Bs(),n.pooledCache=o,o.refCount++,o!==null&&(n.pooledCacheLanes|=i),n=o),a.memoizedState={parent:t,cache:n},Ls(a),oi(a,Te,n)):((e.lanes&i)!==0&&(qs(e,a),Wt(a,null,null,i),Zt()),n=e.memoizedState,o=a.memoizedState,n.parent!==t?(n={parent:t,cache:t},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),oi(a,Te,t)):(t=o.cache,oi(a,Te,t),t!==n.cache&&Ns(a,[Te],i,!0))),Le(e,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(h(156,a.tag))}function Va(e){e.flags|=4}function bl(e,a,i,t,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(fd())e.flags|=8192;else throw Li=Zn,js}else e.flags&=-16777217}function Uu(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!af(a))if(fd())e.flags|=8192;else throw Li=Zn,js}function ho(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?br():536870912,e.lanes|=a,vt|=a)}function nn(e,a){if(!Z)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,t=0;if(a)for(var n=e.child;n!==null;)i|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)i|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=i,a}function eh(e,a,i){var t=a.pendingProps;switch(Es(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(a),null;case 1:return ye(a),null;case 3:return i=a.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ua(Te),Re(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ot(a)?Va(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xs())),ye(a),null;case 26:var n=a.type,o=a.memoizedState;return e===null?(Va(a),o!==null?(ye(a),Uu(a,o)):(ye(a),bl(a,n,null,t,i))):o?o!==e.memoizedState?(Va(a),ye(a),Uu(a,o)):(ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==t&&Va(a),ye(a),bl(a,n,e,t,i)),null;case 27:if(Tn(a),i=J.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Va(a);else{if(!t){if(a.stateNode===null)throw Error(h(166));return ye(a),null}e=D.current,ot(a)?bc(a):(e=Pd(n,t,i),a.stateNode=e,Va(a))}return ye(a),null;case 5:if(Tn(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Va(a);else{if(!t){if(a.stateNode===null)throw Error(h(166));return ye(a),null}if(o=D.current,ot(a))bc(a);else{var s=xo(J.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?o.multiple=!0:t.size&&(o.size=t.size);break;default:o=typeof t.is=="string"?s.createElement(n,{is:t.is}):s.createElement(n)}}o[Oe]=a,o[Xe]=t;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=o;e:switch(qe(o,n,t),n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Va(a)}}return ye(a),bl(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,i),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==t&&Va(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(h(166));if(e=J.current,ot(a)){if(e=a.stateNode,i=a.memoizedProps,t=null,n=ke,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}e[Oe]=a,e=!!(e.nodeValue===i||t!==null&&t.suppressHydrationWarning===!0||jd(e.nodeValue,i)),e||ni(a,!0)}else e=xo(e).createTextNode(t),e[Oe]=a,a.stateNode=e}return ye(a),null;case 31:if(i=a.memoizedState,e===null||e.memoizedState!==null){if(t=ot(a),i!==null){if(e===null){if(!t)throw Error(h(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Oe]=a}else Ni(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ye(a),e=!1}else i=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return a.flags&256?(ua(a),a):(ua(a),null);if((a.flags&128)!==0)throw Error(h(558))}return ye(a),null;case 13:if(t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ot(a),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Oe]=a}else Ni(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ye(a),n=!1}else n=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ua(a),a):(ua(a),null)}return ua(a),(a.flags&128)!==0?(a.lanes=i,a):(i=t!==null,e=e!==null&&e.memoizedState!==null,i&&(t=a.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048)),i!==e&&i&&(a.child.flags|=8192),ho(a,a.updateQueue),ye(a),null);case 4:return Re(),e===null&&_l(a.stateNode.containerInfo),ye(a),null;case 10:return Ua(a.type),ye(a),null;case 19:if(R(Se),t=a.memoizedState,t===null)return ye(a),null;if(n=(a.flags&128)!==0,o=t.rendering,o===null)if(n)nn(t,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=eo(e),o!==null){for(a.flags|=128,nn(t,!1),e=o.updateQueue,a.updateQueue=e,ho(a,e),a.subtreeFlags=0,e=i,i=a.child;i!==null;)hc(i,e),i=i.sibling;return M(Se,Se.current&1|2),Z&&qa(a,t.treeForkCount),a.child}e=e.sibling}t.tail!==null&&na()>bo&&(a.flags|=128,n=!0,nn(t,!1),a.lanes=4194304)}else{if(!n)if(e=eo(o),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,ho(a,e),nn(t,!0),t.tail===null&&t.tailMode==="hidden"&&!o.alternate&&!Z)return ye(a),null}else 2*na()-t.renderingStartTime>bo&&i!==536870912&&(a.flags|=128,n=!0,nn(t,!1),a.lanes=4194304);t.isBackwards?(o.sibling=a.child,a.child=o):(e=t.last,e!==null?e.sibling=o:a.child=o,t.last=o)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=na(),e.sibling=null,i=Se.current,M(Se,n?i&1|2:i&1),Z&&qa(a,t.treeForkCount),e):(ye(a),null);case 22:case 23:return ua(a),Gs(),t=a.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(i&536870912)!==0&&(a.flags&128)===0&&(ye(a),a.subtreeFlags&6&&(a.flags|=8192)):ye(a),i=a.updateQueue,i!==null&&ho(a,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==i&&(a.flags|=2048),e!==null&&R(ki),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Ua(Te),ye(a),null;case 25:return null;case 30:return null}throw Error(h(156,a.tag))}function ah(e,a){switch(Es(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ua(Te),Re(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Tn(a),null;case 31:if(a.memoizedState!==null){if(ua(a),a.alternate===null)throw Error(h(340));Ni()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ua(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(h(340));Ni()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return R(Se),null;case 4:return Re(),null;case 10:return Ua(a.type),null;case 22:case 23:return ua(a),Gs(),e!==null&&R(ki),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ua(Te),null;case 25:return null;default:return null}}function _u(e,a){switch(Es(a),a.tag){case 3:Ua(Te),Re();break;case 26:case 27:case 5:Tn(a);break;case 4:Re();break;case 31:a.memoizedState!==null&&ua(a);break;case 13:ua(a);break;case 19:R(Se);break;case 10:Ua(a.type);break;case 22:case 23:ua(a),Gs(),e!==null&&R(ki);break;case 24:Ua(Te)}}function on(e,a){try{var i=a.updateQueue,t=i!==null?i.lastEffect:null;if(t!==null){var n=t.next;i=n;do{if((i.tag&e)===e){t=void 0;var o=i.create,s=i.inst;t=o(),s.destroy=t}i=i.next}while(i!==n)}}catch(l){ne(a,a.return,l)}}function di(e,a,i){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){var s=t.inst,l=s.destroy;if(l!==void 0){s.destroy=void 0,n=a;var r=i,m=l;try{m()}catch(g){ne(n,r,g)}}}t=t.next}while(t!==o)}}catch(g){ne(a,a.return,g)}}function Gu(e){var a=e.updateQueue;if(a!==null){var i=e.stateNode;try{Nc(a,i)}catch(t){ne(e,e.return,t)}}}function Ku(e,a,i){i.props=Ui(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(t){ne(e,a,t)}}function sn(e,a){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof i=="function"?e.refCleanup=i(t):i.current=t}}catch(n){ne(e,a,n)}}function Na(e,a){var i=e.ref,t=e.refCleanup;if(i!==null)if(typeof t=="function")try{t()}catch(n){ne(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){ne(e,a,n)}else i.current=null}function Vu(e){var a=e.type,i=e.memoizedProps,t=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break e;case"img":i.src?t.src=i.src:i.srcSet&&(t.srcset=i.srcSet)}}catch(n){ne(e,e.return,n)}}function Al(e,a,i){try{var t=e.stateNode;wh(t,e.type,i,a),t[Xe]=a}catch(n){ne(e,e.return,n)}}function Ju(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vi(e.type)||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,a,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(e),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=ka));else if(t!==4&&(t===27&&vi(e.type)&&(i=e.stateNode,a=null),e=e.child,e!==null))for(Sl(e,a,i),e=e.sibling;e!==null;)Sl(e,a,i),e=e.sibling}function po(e,a,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(t!==4&&(t===27&&vi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(po(e,a,i),e=e.sibling;e!==null;)po(e,a,i),e=e.sibling}function Yu(e){var a=e.stateNode,i=e.memoizedProps;try{for(var t=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);qe(a,t,i),a[Oe]=e,a[Xe]=i}catch(o){ne(e,e.return,o)}}var Ja=!1,Ee=!1,wl=!1,Pu=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ih(e,a){if(e=e.containerInfo,Vl=jo,e=oc(e),ys(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var n=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,l=-1,r=-1,m=0,g=0,A=e,p=null;a:for(;;){for(var y;A!==i||n!==0&&A.nodeType!==3||(l=s+n),A!==o||t!==0&&A.nodeType!==3||(r=s+t),A.nodeType===3&&(s+=A.nodeValue.length),(y=A.firstChild)!==null;)p=A,A=y;for(;;){if(A===e)break a;if(p===i&&++m===n&&(l=s),p===o&&++g===t&&(r=s),(y=A.nextSibling)!==null)break;A=p,p=A.parentNode}A=y}i=l===-1||r===-1?null:{start:l,end:r}}else i=null}i=i||{start:0,end:0}}else i=null;for(Jl={focusedElem:e,selectionRange:i},jo=!1,Ne=a;Ne!==null;)if(a=Ne,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ne=e;else for(;Ne!==null;){switch(a=Ne,o=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)n=e[i],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,i=a,n=o.memoizedProps,o=o.memoizedState,t=i.stateNode;try{var E=Ui(i.type,n);e=t.getSnapshotBeforeUpdate(E,o),t.__reactInternalSnapshotBeforeUpdate=e}catch(B){ne(i,i.return,B)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,i=e.nodeType,i===9)Ql(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ql(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=a.sibling,e!==null){e.return=a.return,Ne=e;break}Ne=a.return}}function Qu(e,a,i){var t=i.flags;switch(i.tag){case 0:case 11:case 15:Pa(e,i),t&4&&on(5,i);break;case 1:if(Pa(e,i),t&4)if(e=i.stateNode,a===null)try{e.componentDidMount()}catch(s){ne(i,i.return,s)}else{var n=Ui(i.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ne(i,i.return,s)}}t&64&&Gu(i),t&512&&sn(i,i.return);break;case 3:if(Pa(e,i),t&64&&(e=i.updateQueue,e!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{Nc(e,a)}catch(s){ne(i,i.return,s)}}break;case 27:a===null&&t&4&&Yu(i);case 26:case 5:Pa(e,i),a===null&&t&4&&Vu(i),t&512&&sn(i,i.return);break;case 12:Pa(e,i);break;case 31:Pa(e,i),t&4&&Wu(e,i);break;case 13:Pa(e,i),t&4&&Fu(e,i),t&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=dh.bind(null,i),Hh(e,i))));break;case 22:if(t=i.memoizedState!==null||Ja,!t){a=a!==null&&a.memoizedState!==null||Ee,n=Ja;var o=Ee;Ja=t,(Ee=a)&&!o?Qa(e,i,(i.subtreeFlags&8772)!==0):Pa(e,i),Ja=n,Ee=o}break;case 30:break;default:Pa(e,i)}}function Xu(e){var a=e.alternate;a!==null&&(e.alternate=null,Xu(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&$o(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,We=!1;function Ya(e,a,i){for(i=i.child;i!==null;)Zu(e,a,i),i=i.sibling}function Zu(e,a,i){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(xt,i)}catch{}switch(i.tag){case 26:Ee||Na(i,a),Ya(e,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ee||Na(i,a);var t=ge,n=We;vi(i.type)&&(ge=i.stateNode,We=!1),Ya(e,a,i),pn(i.stateNode),ge=t,We=n;break;case 5:Ee||Na(i,a);case 6:if(t=ge,n=We,ge=null,Ya(e,a,i),ge=t,We=n,ge!==null)if(We)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(i.stateNode)}catch(o){ne(i,a,o)}else try{ge.removeChild(i.stateNode)}catch(o){ne(i,a,o)}break;case 18:ge!==null&&(We?(e=ge,Gd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Mt(e)):Gd(ge,i.stateNode));break;case 4:t=ge,n=We,ge=i.stateNode.containerInfo,We=!0,Ya(e,a,i),ge=t,We=n;break;case 0:case 11:case 14:case 15:di(2,i,a),Ee||di(4,i,a),Ya(e,a,i);break;case 1:Ee||(Na(i,a),t=i.stateNode,typeof t.componentWillUnmount=="function"&&Ku(i,a,t)),Ya(e,a,i);break;case 21:Ya(e,a,i);break;case 22:Ee=(t=Ee)||i.memoizedState!==null,Ya(e,a,i),Ee=t;break;default:Ya(e,a,i)}}function Wu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mt(e)}catch(i){ne(a,a.return,i)}}}function Fu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mt(e)}catch(i){ne(a,a.return,i)}}function th(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Pu),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Pu),a;default:throw Error(h(435,e.tag))}}function yo(e,a){var i=th(e);a.forEach(function(t){if(!i.has(t)){i.add(t);var n=fh.bind(null,e,t);t.then(n,n)}})}function Fe(e,a){var i=a.deletions;if(i!==null)for(var t=0;t<i.length;t++){var n=i[t],o=e,s=a,l=s;e:for(;l!==null;){switch(l.tag){case 27:if(vi(l.type)){ge=l.stateNode,We=!1;break e}break;case 5:ge=l.stateNode,We=!1;break e;case 3:case 4:ge=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(ge===null)throw Error(h(160));Zu(o,s,n),ge=null,We=!1,o=n.alternate,o!==null&&(o.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)$u(a,e),a=a.sibling}var Ea=null;function $u(e,a){var i=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(a,e),$e(e),t&4&&(di(3,e,e.return),on(3,e),di(5,e,e.return));break;case 1:Fe(a,e),$e(e),t&512&&(Ee||i===null||Na(i,i.return)),t&64&&Ja&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:var n=Ea;if(Fe(a,e),$e(e),t&512&&(Ee||i===null||Na(i,i.return)),t&4){var o=i!==null?i.memoizedState:null;if(t=e.memoizedState,i===null)if(t===null)if(e.stateNode===null){e:{t=e.type,i=e.memoizedProps,n=n.ownerDocument||n;a:switch(t){case"title":o=n.getElementsByTagName("title")[0],(!o||o[Nt]||o[Oe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(t),n.head.insertBefore(o,n.querySelector("head > title"))),qe(o,t,i),o[Oe]=e,He(o),t=o;break e;case"link":var s=$d("link","href",n).get(t+(i.href||""));if(s){for(var l=0;l<s.length;l++)if(o=s[l],o.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&o.getAttribute("rel")===(i.rel==null?null:i.rel)&&o.getAttribute("title")===(i.title==null?null:i.title)&&o.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(l,1);break a}}o=n.createElement(t),qe(o,t,i),n.head.appendChild(o);break;case"meta":if(s=$d("meta","content",n).get(t+(i.content||""))){for(l=0;l<s.length;l++)if(o=s[l],o.getAttribute("content")===(i.content==null?null:""+i.content)&&o.getAttribute("name")===(i.name==null?null:i.name)&&o.getAttribute("property")===(i.property==null?null:i.property)&&o.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&o.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(l,1);break a}}o=n.createElement(t),qe(o,t,i),n.head.appendChild(o);break;default:throw Error(h(468,t))}o[Oe]=e,He(o),t=o}e.stateNode=t}else ef(n,e.type,e.stateNode);else e.stateNode=Fd(n,t,e.memoizedProps);else o!==t?(o===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):o.count--,t===null?ef(n,e.type,e.stateNode):Fd(n,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Al(e,e.memoizedProps,i.memoizedProps)}break;case 27:Fe(a,e),$e(e),t&512&&(Ee||i===null||Na(i,i.return)),i!==null&&t&4&&Al(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Fe(a,e),$e(e),t&512&&(Ee||i===null||Na(i,i.return)),e.flags&32){n=e.stateNode;try{Xi(n,"")}catch(E){ne(e,e.return,E)}}t&4&&e.stateNode!=null&&(n=e.memoizedProps,Al(e,n,i!==null?i.memoizedProps:n)),t&1024&&(wl=!0);break;case 6:if(Fe(a,e),$e(e),t&4){if(e.stateNode===null)throw Error(h(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t}catch(E){ne(e,e.return,E)}}break;case 3:if(No=null,n=Ea,Ea=zo(a.containerInfo),Fe(a,e),Ea=n,$e(e),t&4&&i!==null&&i.memoizedState.isDehydrated)try{Mt(a.containerInfo)}catch(E){ne(e,e.return,E)}wl&&(wl=!1,ed(e));break;case 4:t=Ea,Ea=zo(e.stateNode.containerInfo),Fe(a,e),$e(e),Ea=t;break;case 12:Fe(a,e),$e(e);break;case 31:Fe(a,e),$e(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yo(e,t)));break;case 13:Fe(a,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(vo=na()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yo(e,t)));break;case 22:n=e.memoizedState!==null;var r=i!==null&&i.memoizedState!==null,m=Ja,g=Ee;if(Ja=m||n,Ee=g||r,Fe(a,e),Ee=g,Ja=m,$e(e),t&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(i===null||r||Ja||Ee||_i(e)),i=null,a=e;;){if(a.tag===5||a.tag===26){if(i===null){r=i=a;try{if(o=r.stateNode,n)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{l=r.stateNode;var A=r.memoizedProps.style,p=A!=null&&A.hasOwnProperty("display")?A.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(E){ne(r,r.return,E)}}}else if(a.tag===6){if(i===null){r=a;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(E){ne(r,r.return,E)}}}else if(a.tag===18){if(i===null){r=a;try{var y=r.stateNode;n?Kd(y,!0):Kd(r.stateNode,!1)}catch(E){ne(r,r.return,E)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,yo(e,i))));break;case 19:Fe(a,e),$e(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yo(e,t)));break;case 30:break;case 21:break;default:Fe(a,e),$e(e)}}function $e(e){var a=e.flags;if(a&2){try{for(var i,t=e.return;t!==null;){if(Ju(t)){i=t;break}t=t.return}if(i==null)throw Error(h(160));switch(i.tag){case 27:var n=i.stateNode,o=Rl(e);po(e,o,n);break;case 5:var s=i.stateNode;i.flags&32&&(Xi(s,""),i.flags&=-33);var l=Rl(e);po(e,l,s);break;case 3:case 4:var r=i.stateNode.containerInfo,m=Rl(e);Sl(e,m,r);break;default:throw Error(h(161))}}catch(g){ne(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;ed(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Pa(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Qu(e,a.alternate,a),a=a.sibling}function _i(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:di(4,a,a.return),_i(a);break;case 1:Na(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&Ku(a,a.return,i),_i(a);break;case 27:pn(a.stateNode);case 26:case 5:Na(a,a.return),_i(a);break;case 22:a.memoizedState===null&&_i(a);break;case 30:_i(a);break;default:_i(a)}e=e.sibling}}function Qa(e,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,n=e,o=a,s=o.flags;switch(o.tag){case 0:case 11:case 15:Qa(n,o,i),on(4,o);break;case 1:if(Qa(n,o,i),t=o,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ne(t,t.return,m)}if(t=o,n=t.updateQueue,n!==null){var l=t.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Hc(r[n],l)}catch(m){ne(t,t.return,m)}}i&&s&64&&Gu(o),sn(o,o.return);break;case 27:Yu(o);case 26:case 5:Qa(n,o,i),i&&t===null&&s&4&&Vu(o),sn(o,o.return);break;case 12:Qa(n,o,i);break;case 31:Qa(n,o,i),i&&s&4&&Wu(n,o);break;case 13:Qa(n,o,i),i&&s&4&&Fu(n,o);break;case 22:o.memoizedState===null&&Qa(n,o,i),sn(o,o.return);break;case 30:break;default:Qa(n,o,i)}a=a.sibling}}function Tl(e,a){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Jt(i))}function Cl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Jt(e))}function Da(e,a,i,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ad(e,a,i,t),a=a.sibling}function ad(e,a,i,t){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a,i,t),n&2048&&on(9,a);break;case 1:Da(e,a,i,t);break;case 3:Da(e,a,i,t),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Jt(e)));break;case 12:if(n&2048){Da(e,a,i,t),e=a.stateNode;try{var o=a.memoizedProps,s=o.id,l=o.onPostCommit;typeof l=="function"&&l(s,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ne(a,a.return,r)}}else Da(e,a,i,t);break;case 31:Da(e,a,i,t);break;case 13:Da(e,a,i,t);break;case 23:break;case 22:o=a.stateNode,s=a.alternate,a.memoizedState!==null?o._visibility&2?Da(e,a,i,t):ln(e,a):o._visibility&2?Da(e,a,i,t):(o._visibility|=2,pt(e,a,i,t,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Tl(s,a);break;case 24:Da(e,a,i,t),n&2048&&Cl(a.alternate,a);break;default:Da(e,a,i,t)}}function pt(e,a,i,t,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var o=e,s=a,l=i,r=t,m=s.flags;switch(s.tag){case 0:case 11:case 15:pt(o,s,l,r,n),on(8,s);break;case 23:break;case 22:var g=s.stateNode;s.memoizedState!==null?g._visibility&2?pt(o,s,l,r,n):ln(o,s):(g._visibility|=2,pt(o,s,l,r,n)),n&&m&2048&&Tl(s.alternate,s);break;case 24:pt(o,s,l,r,n),n&&m&2048&&Cl(s.alternate,s);break;default:pt(o,s,l,r,n)}a=a.sibling}}function ln(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=e,t=a,n=t.flags;switch(t.tag){case 22:ln(i,t),n&2048&&Tl(t.alternate,t);break;case 24:ln(i,t),n&2048&&Cl(t.alternate,t);break;default:ln(i,t)}a=a.sibling}}var rn=8192;function yt(e,a,i){if(e.subtreeFlags&rn)for(e=e.child;e!==null;)id(e,a,i),e=e.sibling}function id(e,a,i){switch(e.tag){case 26:yt(e,a,i),e.flags&rn&&e.memoizedState!==null&&Kh(i,Ea,e.memoizedState,e.memoizedProps);break;case 5:yt(e,a,i);break;case 3:case 4:var t=Ea;Ea=zo(e.stateNode.containerInfo),yt(e,a,i),Ea=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=rn,rn=16777216,yt(e,a,i),rn=t):yt(e,a,i));break;default:yt(e,a,i)}}function td(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function cn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var t=a[i];Ne=t,od(t,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(e),e=e.sibling}function nd(e){switch(e.tag){case 0:case 11:case 15:cn(e),e.flags&2048&&di(9,e,e.return);break;case 3:cn(e);break;case 12:cn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,go(e)):cn(e);break;default:cn(e)}}function go(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var t=a[i];Ne=t,od(t,e)}td(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:di(8,a,a.return),go(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,go(a));break;default:go(a)}e=e.sibling}}function od(e,a){for(;Ne!==null;){var i=Ne;switch(i.tag){case 0:case 11:case 15:di(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var t=i.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Jt(i.memoizedState.cache)}if(t=i.child,t!==null)t.return=i,Ne=t;else e:for(i=e;Ne!==null;){t=Ne;var n=t.sibling,o=t.return;if(Xu(t),t===i){Ne=null;break e}if(n!==null){n.return=o,Ne=n;break e}Ne=o}}}var nh={getCacheForType:function(e){var a=je(Te),i=a.data.get(e);return i===void 0&&(i=e(),a.data.set(e,i)),i},cacheSignal:function(){return je(Te).controller.signal}},oh=typeof WeakMap=="function"?WeakMap:Map,ae=0,fe=null,Y=null,Q=0,te=0,da=null,fi=!1,gt=!1,Ml=!1,Xa=0,be=0,mi=0,Gi=0,El=0,fa=0,vt=0,un=null,ea=null,Dl=!1,vo=0,sd=0,bo=1/0,Ao=null,hi=null,xe=0,pi=null,bt=null,Za=0,xl=0,zl=null,ld=null,dn=0,Hl=null;function ma(){return(ae&2)!==0&&Q!==0?Q&-Q:v.T!==null?Ll():wr()}function rd(){if(fa===0)if((Q&536870912)===0||Z){var e=En;En<<=1,(En&3932160)===0&&(En=262144),fa=e}else fa=536870912;return e=ca.current,e!==null&&(e.flags|=32),fa}function aa(e,a,i){(e===fe&&(te===2||te===9)||e.cancelPendingCommit!==null)&&(At(e,0),yi(e,Q,fa,!1)),Ht(e,i),((ae&2)===0||e!==fe)&&(e===fe&&((ae&2)===0&&(Gi|=i),be===4&&yi(e,Q,fa,!1)),Ba(e))}function cd(e,a,i){if((ae&6)!==0)throw Error(h(327));var t=!i&&(a&127)===0&&(a&e.expiredLanes)===0||zt(e,a),n=t?rh(e,a):Bl(e,a,!0),o=t;do{if(n===0){gt&&!t&&yi(e,a,0,!1);break}else{if(i=e.current.alternate,o&&!sh(i)){n=Bl(e,a,!1),o=!1;continue}if(n===2){if(o=a,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;e:{var l=e;n=un;var r=l.current.memoizedState.isDehydrated;if(r&&(At(l,s).flags|=256),s=Bl(l,s,!1),s!==2){if(Ml&&!r){l.errorRecoveryDisabledLanes|=o,Gi|=o,n=4;break e}o=ea,ea=n,o!==null&&(ea===null?ea=o:ea.push.apply(ea,o))}n=s}if(o=!1,n!==2)continue}}if(n===1){At(e,0),yi(e,a,0,!0);break}e:{switch(t=e,o=n,o){case 0:case 1:throw Error(h(345));case 4:if((a&4194048)!==a)break;case 6:yi(t,a,fa,!fi);break e;case 2:ea=null;break;case 3:case 5:break;default:throw Error(h(329))}if((a&62914560)===a&&(n=vo+300-na(),10<n)){if(yi(t,a,fa,!fi),xn(t,0,!0)!==0)break e;Za=a,t.timeoutHandle=Ud(ud.bind(null,t,i,ea,Ao,Dl,a,fa,Gi,vt,fi,o,"Throttled",-0,0),n);break e}ud(t,i,ea,Ao,Dl,a,fa,Gi,vt,fi,o,null,-0,0)}}break}while(!0);Ba(e)}function ud(e,a,i,t,n,o,s,l,r,m,g,A,p,y){if(e.timeoutHandle=-1,A=a.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ka},id(a,o,A);var E=(o&62914560)===o?vo-na():(o&4194048)===o?sd-na():0;if(E=Vh(A,E),E!==null){Za=o,e.cancelPendingCommit=E(vd.bind(null,e,a,o,i,t,n,s,l,r,g,A,null,p,y)),yi(e,o,s,!m);return}}vd(e,a,o,i,t,n,s,l,r)}function sh(e){for(var a=e;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var t=0;t<i.length;t++){var n=i[t],o=n.getSnapshot;n=n.value;try{if(!la(o(),n))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function yi(e,a,i,t){a&=~El,a&=~Gi,e.suspendedLanes|=a,e.pingedLanes&=~a,t&&(e.warmLanes|=a),t=e.expirationTimes;for(var n=a;0<n;){var o=31-sa(n),s=1<<o;t[o]=-1,n&=~s}i!==0&&Ar(e,i,a)}function Ro(){return(ae&6)===0?(fn(0),!1):!0}function Nl(){if(Y!==null){if(te===0)var e=Y.return;else e=Y,Ia=Bi=null,Qs(e),ut=null,Pt=0,e=Y;for(;e!==null;)_u(e.alternate,e),e=e.return;Y=null}}function At(e,a){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Mh(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Za=0,Nl(),fe=e,Y=i=La(e.current,null),Q=a,te=0,da=null,fi=!1,gt=zt(e,a),Ml=!1,vt=fa=El=Gi=mi=be=0,ea=un=null,Dl=!1,(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-sa(t),o=1<<n;a|=e[n],t&=~o}return Xa=a,_n(),i}function dd(e,a){_=null,v.H=an,a===ct||a===Xn?(a=Ec(),te=3):a===js?(a=Ec(),te=4):te=a===ul?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,Y===null&&(be=1,co(e,va(a,e.current)))}function fd(){var e=ca.current;return e===null?!0:(Q&4194048)===Q?Sa===null:(Q&62914560)===Q||(Q&536870912)!==0?e===Sa:!1}function md(){var e=v.H;return v.H=an,e===null?an:e}function hd(){var e=v.A;return v.A=nh,e}function So(){be=4,fi||(Q&4194048)!==Q&&ca.current!==null||(gt=!0),(mi&134217727)===0&&(Gi&134217727)===0||fe===null||yi(fe,Q,fa,!1)}function Bl(e,a,i){var t=ae;ae|=2;var n=md(),o=hd();(fe!==e||Q!==a)&&(Ao=null,At(e,a)),a=!1;var s=be;e:do try{if(te!==0&&Y!==null){var l=Y,r=da;switch(te){case 8:Nl(),s=6;break e;case 3:case 2:case 9:case 6:ca.current===null&&(a=!0);var m=te;if(te=0,da=null,Rt(e,l,r,m),i&&gt){s=0;break e}break;default:m=te,te=0,da=null,Rt(e,l,r,m)}}lh(),s=be;break}catch(g){dd(e,g)}while(!0);return a&&e.shellSuspendCounter++,Ia=Bi=null,ae=t,v.H=n,v.A=o,Y===null&&(fe=null,Q=0,_n()),s}function lh(){for(;Y!==null;)pd(Y)}function rh(e,a){var i=ae;ae|=2;var t=md(),n=hd();fe!==e||Q!==a?(Ao=null,bo=na()+500,At(e,a)):gt=zt(e,a);e:do try{if(te!==0&&Y!==null){a=Y;var o=da;a:switch(te){case 1:te=0,da=null,Rt(e,a,o,1);break;case 2:case 9:if(Cc(o)){te=0,da=null,yd(a);break}a=function(){te!==2&&te!==9||fe!==e||(te=7),Ba(e)},o.then(a,a);break e;case 3:te=7;break e;case 4:te=5;break e;case 7:Cc(o)?(te=0,da=null,yd(a)):(te=0,da=null,Rt(e,a,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var l=Y;if(s?af(s):l.stateNode.complete){te=0,da=null;var r=l.sibling;if(r!==null)Y=r;else{var m=l.return;m!==null?(Y=m,wo(m)):Y=null}break a}}te=0,da=null,Rt(e,a,o,5);break;case 6:te=0,da=null,Rt(e,a,o,6);break;case 8:Nl(),be=6;break e;default:throw Error(h(462))}}ch();break}catch(g){dd(e,g)}while(!0);return Ia=Bi=null,v.H=t,v.A=n,ae=i,Y!==null?0:(fe=null,Q=0,_n(),be)}function ch(){for(;Y!==null&&!Nf();)pd(Y)}function pd(e){var a=Iu(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,a===null?wo(e):Y=a}function yd(e){var a=e,i=a.alternate;switch(a.tag){case 15:case 0:a=Bu(i,a,a.pendingProps,a.type,void 0,Q);break;case 11:a=Bu(i,a,a.pendingProps,a.type.render,a.ref,Q);break;case 5:Qs(a);default:_u(i,a),a=Y=hc(a,Xa),a=Iu(i,a,Xa)}e.memoizedProps=e.pendingProps,a===null?wo(e):Y=a}function Rt(e,a,i,t){Ia=Bi=null,Qs(a),ut=null,Pt=0;var n=a.return;try{if(Wm(e,n,a,i,Q)){be=1,co(e,va(i,e.current)),Y=null;return}}catch(o){if(n!==null)throw Y=n,o;be=1,co(e,va(i,e.current)),Y=null;return}a.flags&32768?(Z||t===1?e=!0:gt||(Q&536870912)!==0?e=!1:(fi=e=!0,(t===2||t===9||t===3||t===6)&&(t=ca.current,t!==null&&t.tag===13&&(t.flags|=16384))),gd(a,e)):wo(a)}function wo(e){var a=e;do{if((a.flags&32768)!==0){gd(a,fi);return}e=a.return;var i=eh(a.alternate,a,Xa);if(i!==null){Y=i;return}if(a=a.sibling,a!==null){Y=a;return}Y=a=e}while(a!==null);be===0&&(be=5)}function gd(e,a){do{var i=ah(e.alternate,e);if(i!==null){i.flags&=32767,Y=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(e=e.sibling,e!==null)){Y=e;return}Y=e=i}while(e!==null);be=6,Y=null}function vd(e,a,i,t,n,o,s,l,r){e.cancelPendingCommit=null;do To();while(xe!==0);if((ae&6)!==0)throw Error(h(327));if(a!==null){if(a===e.current)throw Error(h(177));if(o=a.lanes|a.childLanes,o|=Rs,Gf(e,i,o,s,l,r),e===fe&&(Y=fe=null,Q=0),bt=a,pi=e,Za=i,xl=o,zl=n,ld=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(Cn,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=v.T,v.T=null,n=C.p,C.p=2,s=ae,ae|=4;try{ih(e,a,i)}finally{ae=s,C.p=n,v.T=t}}xe=1,bd(),Ad(),Rd()}}function bd(){if(xe===1){xe=0;var e=pi,a=bt,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=v.T,v.T=null;var t=C.p;C.p=2;var n=ae;ae|=4;try{$u(a,e);var o=Jl,s=oc(e.containerInfo),l=o.focusedElem,r=o.selectionRange;if(s!==l&&l&&l.ownerDocument&&nc(l.ownerDocument.documentElement,l)){if(r!==null&&ys(l)){var m=r.start,g=r.end;if(g===void 0&&(g=m),"selectionStart"in l)l.selectionStart=m,l.selectionEnd=Math.min(g,l.value.length);else{var A=l.ownerDocument||document,p=A&&A.defaultView||window;if(p.getSelection){var y=p.getSelection(),E=l.textContent.length,B=Math.min(r.start,E),re=r.end===void 0?B:Math.min(r.end,E);!y.extend&&B>re&&(s=re,re=B,B=s);var d=tc(l,B),c=tc(l,re);if(d&&c&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var f=A.createRange();f.setStart(d.node,d.offset),y.removeAllRanges(),B>re?(y.addRange(f),y.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),y.addRange(f))}}}}for(A=[],y=l;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<A.length;l++){var b=A[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}jo=!!Vl,Jl=Vl=null}finally{ae=n,C.p=t,v.T=i}}e.current=a,xe=2}}function Ad(){if(xe===2){xe=0;var e=pi,a=bt,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=v.T,v.T=null;var t=C.p;C.p=2;var n=ae;ae|=4;try{Qu(e,a.alternate,a)}finally{ae=n,C.p=t,v.T=i}}xe=3}}function Rd(){if(xe===4||xe===3){xe=0,Bf();var e=pi,a=bt,i=Za,t=ld;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?xe=5:(xe=0,bt=pi=null,Sd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(hi=null),Wo(i),a=a.stateNode,oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(xt,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=v.T,n=C.p,C.p=2,v.T=null;try{for(var o=e.onRecoverableError,s=0;s<t.length;s++){var l=t[s];o(l.value,{componentStack:l.stack})}}finally{v.T=a,C.p=n}}(Za&3)!==0&&To(),Ba(e),n=e.pendingLanes,(i&261930)!==0&&(n&42)!==0?e===Hl?dn++:(dn=0,Hl=e):dn=0,fn(0)}}function Sd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Jt(a)))}function To(){return bd(),Ad(),Rd(),wd()}function wd(){if(xe!==5)return!1;var e=pi,a=xl;xl=0;var i=Wo(Za),t=v.T,n=C.p;try{C.p=32>i?32:i,v.T=null,i=zl,zl=null;var o=pi,s=Za;if(xe=0,bt=pi=null,Za=0,(ae&6)!==0)throw Error(h(331));var l=ae;if(ae|=4,nd(o.current),ad(o,o.current,s,i),ae=l,fn(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(xt,o)}catch{}return!0}finally{C.p=n,v.T=t,Sd(e,a)}}function Td(e,a,i){a=va(i,a),a=cl(e.stateNode,a,2),e=ri(e,a,2),e!==null&&(Ht(e,2),Ba(e))}function ne(e,a,i){if(e.tag===3)Td(e,e,i);else for(;a!==null;){if(a.tag===3){Td(a,e,i);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(hi===null||!hi.has(t))){e=va(i,e),i=Cu(2),t=ri(a,i,2),t!==null&&(Mu(i,t,a,e),Ht(t,2),Ba(t));break}}a=a.return}}function Ol(e,a,i){var t=e.pingCache;if(t===null){t=e.pingCache=new oh;var n=new Set;t.set(a,n)}else n=t.get(a),n===void 0&&(n=new Set,t.set(a,n));n.has(i)||(Ml=!0,n.add(i),e=uh.bind(null,e,a,i),a.then(e,e))}function uh(e,a,i){var t=e.pingCache;t!==null&&t.delete(a),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,fe===e&&(Q&i)===i&&(be===4||be===3&&(Q&62914560)===Q&&300>na()-vo?(ae&2)===0&&At(e,0):El|=i,vt===Q&&(vt=0)),Ba(e)}function Cd(e,a){a===0&&(a=br()),e=zi(e,a),e!==null&&(Ht(e,a),Ba(e))}function dh(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),Cd(e,i)}function fh(e,a){var i=0;switch(e.tag){case 31:case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(i=n.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(h(314))}t!==null&&t.delete(a),Cd(e,i)}function mh(e,a){return Po(e,a)}var Co=null,St=null,kl=!1,Mo=!1,jl=!1,gi=0;function Ba(e){e!==St&&e.next===null&&(St===null?Co=St=e:St=St.next=e),Mo=!0,kl||(kl=!0,ph())}function fn(e,a){if(!jl&&Mo){jl=!0;do for(var i=!1,t=Co;t!==null;){if(e!==0){var n=t.pendingLanes;if(n===0)var o=0;else{var s=t.suspendedLanes,l=t.pingedLanes;o=(1<<31-sa(42|e)+1)-1,o&=n&~(s&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(i=!0,xd(t,o))}else o=Q,o=xn(t,t===fe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(o&3)===0||zt(t,o)||(i=!0,xd(t,o));t=t.next}while(i);jl=!1}}function hh(){Md()}function Md(){Mo=kl=!1;var e=0;gi!==0&&Ch()&&(e=gi);for(var a=na(),i=null,t=Co;t!==null;){var n=t.next,o=Ed(t,a);o===0?(t.next=null,i===null?Co=n:i.next=n,n===null&&(St=i)):(i=t,(e!==0||(o&3)!==0)&&(Mo=!0)),t=n}xe!==0&&xe!==5||fn(e),gi!==0&&(gi=0)}function Ed(e,a){for(var i=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-sa(o),l=1<<s,r=n[s];r===-1?((l&i)===0||(l&t)!==0)&&(n[s]=_f(l,a)):r<=a&&(e.expiredLanes|=l),o&=~l}if(a=fe,i=Q,i=xn(e,e===a?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,i===0||e===a&&(te===2||te===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&Qo(t),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||zt(e,i)){if(a=i&-i,a===e.callbackPriority)return a;switch(t!==null&&Qo(t),Wo(i)){case 2:case 8:i=gr;break;case 32:i=Cn;break;case 268435456:i=vr;break;default:i=Cn}return t=Dd.bind(null,e),i=Po(i,t),e.callbackPriority=a,e.callbackNode=i,a}return t!==null&&t!==null&&Qo(t),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,a){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(To()&&e.callbackNode!==i)return null;var t=Q;return t=xn(e,e===fe?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(cd(e,t,a),Ed(e,na()),e.callbackNode!=null&&e.callbackNode===i?Dd.bind(null,e):null)}function xd(e,a){if(To())return null;cd(e,a,!0)}function ph(){Eh(function(){(ae&6)!==0?Po(yr,hh):Md()})}function Ll(){if(gi===0){var e=lt;e===0&&(e=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),gi=e}return gi}function zd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bn(""+e)}function Hd(e,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,e.id&&i.setAttribute("form",e.id),a.parentNode.insertBefore(i,a),e=new FormData(e),i.parentNode.removeChild(i),e}function yh(e,a,i,t,n){if(a==="submit"&&i&&i.stateNode===n){var o=zd((n[Xe]||null).action),s=t.submitter;s&&(a=(a=s[Xe]||null)?zd(a.formAction):s.getAttribute("formAction"),a!==null&&(o=a,s=null));var l=new Ln("action","action",null,t,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(gi!==0){var r=s?Hd(n,s):new FormData(n);tl(i,{pending:!0,data:r,method:n.method,action:o},null,r)}}else typeof o=="function"&&(l.preventDefault(),r=s?Hd(n,s):new FormData(n),tl(i,{pending:!0,data:r,method:n.method,action:o},o,r))},currentTarget:n}]})}}for(var ql=0;ql<As.length;ql++){var Il=As[ql],gh=Il.toLowerCase(),vh=Il[0].toUpperCase()+Il.slice(1);Ma(gh,"on"+vh)}Ma(rc,"onAnimationEnd"),Ma(cc,"onAnimationIteration"),Ma(uc,"onAnimationStart"),Ma("dblclick","onDoubleClick"),Ma("focusin","onFocus"),Ma("focusout","onBlur"),Ma(Om,"onTransitionRun"),Ma(km,"onTransitionStart"),Ma(jm,"onTransitionCancel"),Ma(dc,"onTransitionEnd"),Pi("onMouseEnter",["mouseout","mouseover"]),Pi("onMouseLeave",["mouseout","mouseover"]),Pi("onPointerEnter",["pointerout","pointerover"]),Pi("onPointerLeave",["pointerout","pointerover"]),Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Nd(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var t=e[i],n=t.event;t=t.listeners;e:{var o=void 0;if(a)for(var s=t.length-1;0<=s;s--){var l=t[s],r=l.instance,m=l.currentTarget;if(l=l.listener,r!==o&&n.isPropagationStopped())break e;o=l,n.currentTarget=m;try{o(n)}catch(g){Un(g)}n.currentTarget=null,o=r}else for(s=0;s<t.length;s++){if(l=t[s],r=l.instance,m=l.currentTarget,l=l.listener,r!==o&&n.isPropagationStopped())break e;o=l,n.currentTarget=m;try{o(n)}catch(g){Un(g)}n.currentTarget=null,o=r}}}}function P(e,a){var i=a[Fo];i===void 0&&(i=a[Fo]=new Set);var t=e+"__bubble";i.has(t)||(Bd(a,e,2,!1),i.add(t))}function Ul(e,a,i){var t=0;a&&(t|=4),Bd(i,e,t,a)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function _l(e){if(!e[Eo]){e[Eo]=!0,Mr.forEach(function(i){i!=="selectionchange"&&(bh.has(i)||Ul(i,!1,e),Ul(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Eo]||(a[Eo]=!0,Ul("selectionchange",!1,a))}}function Bd(e,a,i,t){switch(cf(a)){case 2:var n=Ph;break;case 8:n=Qh;break;default:n=ir}i=n.bind(null,a,i,e),n=void 0,!ls||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(a,i,{capture:!0,passive:n}):e.addEventListener(a,i,!0):n!==void 0?e.addEventListener(a,i,{passive:n}):e.addEventListener(a,i,!1)}function Gl(e,a,i,t,n){var o=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var l=t.stateNode.containerInfo;if(l===n)break;if(s===4)for(s=t.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;l!==null;){if(s=Vi(l),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){t=o=s;continue e}l=l.parentNode}}t=t.return}qr(function(){var m=o,g=os(i),A=[];e:{var p=fc.get(e);if(p!==void 0){var y=Ln,E=e;switch(e){case"keypress":if(kn(i)===0)break e;case"keydown":case"keyup":y=fm;break;case"focusin":E="focus",y=ds;break;case"focusout":E="blur",y=ds;break;case"beforeblur":case"afterblur":y=ds;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pm;break;case rc:case cc:case uc:y=tm;break;case dc:y=gm;break;case"scroll":case"scrollend":y=Ff;break;case"wheel":y=bm;break;case"copy":case"cut":case"paste":y=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kr;break;case"toggle":case"beforetoggle":y=Rm}var B=(a&4)!==0,re=!B&&(e==="scroll"||e==="scrollend"),d=B?p!==null?p+"Capture":null:p;B=[];for(var c=m,f;c!==null;){var b=c;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||d===null||(b=Ot(c,d),b!=null&&B.push(hn(c,b,f))),re)break;c=c.return}0<B.length&&(p=new y(p,E,null,i,g),A.push({event:p,listeners:B}))}}if((a&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&i!==ns&&(E=i.relatedTarget||i.fromElement)&&(Vi(E)||E[Ki]))break e;if((y||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,y?(E=i.relatedTarget||i.toElement,y=m,E=E?Vi(E):null,E!==null&&(re=K(E),B=E.tag,E!==re||B!==5&&B!==27&&B!==6)&&(E=null)):(y=null,E=m),y!==E)){if(B=_r,b="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(B=Kr,b="onPointerLeave",d="onPointerEnter",c="pointer"),re=y==null?p:Bt(y),f=E==null?p:Bt(E),p=new B(b,c+"leave",y,i,g),p.target=re,p.relatedTarget=f,b=null,Vi(g)===m&&(B=new B(d,c+"enter",E,i,g),B.target=f,B.relatedTarget=re,b=B),re=b,y&&E)a:{for(B=Ah,d=y,c=E,f=0,b=d;b;b=B(b))f++;b=0;for(var H=c;H;H=B(H))b++;for(;0<f-b;)d=B(d),f--;for(;0<b-f;)c=B(c),b--;for(;f--;){if(d===c||c!==null&&d===c.alternate){B=d;break a}d=B(d),c=B(c)}B=null}else B=null;y!==null&&Od(A,p,y,B,!1),E!==null&&re!==null&&Od(A,re,E,B,!0)}}e:{if(p=m?Bt(m):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var $=Wr;else if(Xr(p))if(Fr)$=Hm;else{$=xm;var z=Dm}else y=p.nodeName,!y||y.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&ts(m.elementType)&&($=Wr):$=zm;if($&&($=$(e,m))){Zr(A,$,i,g);break e}z&&z(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&is(p,"number",p.value)}switch(z=m?Bt(m):window,e){case"focusin":(Xr(z)||z.contentEditable==="true")&&($i=z,gs=m,Gt=null);break;case"focusout":Gt=gs=$i=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,sc(A,i,g);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":sc(A,i,g)}var V;if(ms)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fi?Pr(e,i)&&(X="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(X="onCompositionStart");X&&(Vr&&i.locale!=="ko"&&(Fi||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fi&&(V=Ir()):(ai=g,rs="value"in ai?ai.value:ai.textContent,Fi=!0)),z=Do(m,X),0<z.length&&(X=new Gr(X,e,null,i,g),A.push({event:X,listeners:z}),V?X.data=V:(V=Qr(i),V!==null&&(X.data=V)))),(V=wm?Tm(e,i):Cm(e,i))&&(X=Do(m,"onBeforeInput"),0<X.length&&(z=new Gr("onBeforeInput","beforeinput",null,i,g),A.push({event:z,listeners:X}),z.data=V)),yh(A,e,m,i,g)}Nd(A,a)})}function hn(e,a,i){return{instance:e,listener:a,currentTarget:i}}function Do(e,a){for(var i=a+"Capture",t=[];e!==null;){var n=e,o=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||o===null||(n=Ot(e,i),n!=null&&t.unshift(hn(e,n,o)),n=Ot(e,a),n!=null&&t.push(hn(e,n,o))),e.tag===3)return t;e=e.return}return[]}function Ah(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,a,i,t,n){for(var o=a._reactName,s=[];i!==null&&i!==t;){var l=i,r=l.alternate,m=l.stateNode;if(l=l.tag,r!==null&&r===t)break;l!==5&&l!==26&&l!==27||m===null||(r=m,n?(m=Ot(i,o),m!=null&&s.unshift(hn(i,m,r))):n||(m=Ot(i,o),m!=null&&s.push(hn(i,m,r)))),i=i.return}s.length!==0&&e.push({event:a,listeners:s})}var Rh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(Rh,`
`).replace(Sh,"")}function jd(e,a){return a=kd(a),kd(e)===a}function le(e,a,i,t,n,o){switch(i){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||Xi(e,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&Xi(e,""+t);break;case"className":Hn(e,"class",t);break;case"tabIndex":Hn(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Hn(e,i,t);break;case"style":jr(e,t,o);break;case"data":if(a!=="object"){Hn(e,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||i!=="href")){e.removeAttribute(i);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(i);break}t=Bn(""+t),e.setAttribute(i,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(i==="formAction"?(a!=="input"&&le(e,a,"name",n.name,n,null),le(e,a,"formEncType",n.formEncType,n,null),le(e,a,"formMethod",n.formMethod,n,null),le(e,a,"formTarget",n.formTarget,n,null)):(le(e,a,"encType",n.encType,n,null),le(e,a,"method",n.method,n,null),le(e,a,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(i);break}t=Bn(""+t),e.setAttribute(i,t);break;case"onClick":t!=null&&(e.onclick=ka);break;case"onScroll":t!=null&&P("scroll",e);break;case"onScrollEnd":t!=null&&P("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(h(61));if(i=t.__html,i!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=i}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}i=Bn(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(i,""+t):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":t===!0?e.setAttribute(i,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(i,t):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(i,t):e.removeAttribute(i);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(i):e.setAttribute(i,t);break;case"popover":P("beforetoggle",e),P("toggle",e),zn(e,"popover",t);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":zn(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Zf.get(i)||i,zn(e,i,t))}}function Kl(e,a,i,t,n,o){switch(i){case"style":jr(e,t,o);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(h(61));if(i=t.__html,i!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=i}}break;case"children":typeof t=="string"?Xi(e,t):(typeof t=="number"||typeof t=="bigint")&&Xi(e,""+t);break;case"onScroll":t!=null&&P("scroll",e);break;case"onScrollEnd":t!=null&&P("scrollend",e);break;case"onClick":t!=null&&(e.onclick=ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),a=i.slice(2,n?i.length-7:void 0),o=e[Xe]||null,o=o!=null?o[i]:null,typeof o=="function"&&e.removeEventListener(a,o,n),typeof t=="function")){typeof o!="function"&&o!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(a,t,n);break e}i in e?e[i]=t:t===!0?e.setAttribute(i,""):zn(e,i,t)}}}function qe(e,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",e),P("load",e);var t=!1,n=!1,o;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];if(s!=null)switch(o){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:le(e,a,o,s,i,null)}}n&&le(e,a,"srcSet",i.srcSet,i,null),t&&le(e,a,"src",i.src,i,null);return;case"input":P("invalid",e);var l=o=s=n=null,r=null,m=null;for(t in i)if(i.hasOwnProperty(t)){var g=i[t];if(g!=null)switch(t){case"name":n=g;break;case"type":s=g;break;case"checked":r=g;break;case"defaultChecked":m=g;break;case"value":o=g;break;case"defaultValue":l=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,a));break;default:le(e,a,t,g,i,null)}}Nr(e,o,l,r,m,s,n,!1);return;case"select":P("invalid",e),t=s=o=null;for(n in i)if(i.hasOwnProperty(n)&&(l=i[n],l!=null))switch(n){case"value":o=l;break;case"defaultValue":s=l;break;case"multiple":t=l;default:le(e,a,n,l,i,null)}a=o,i=s,e.multiple=!!t,a!=null?Qi(e,!!t,a,!1):i!=null&&Qi(e,!!t,i,!0);return;case"textarea":P("invalid",e),o=n=t=null;for(s in i)if(i.hasOwnProperty(s)&&(l=i[s],l!=null))switch(s){case"value":t=l;break;case"defaultValue":n=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:le(e,a,s,l,i,null)}Or(e,t,n,o);return;case"option":for(r in i)i.hasOwnProperty(r)&&(t=i[r],t!=null)&&(r==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":le(e,a,r,t,i,null));return;case"dialog":P("beforetoggle",e),P("toggle",e),P("cancel",e),P("close",e);break;case"iframe":case"object":P("load",e);break;case"video":case"audio":for(t=0;t<mn.length;t++)P(mn[t],e);break;case"image":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"embed":case"source":case"link":P("error",e),P("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in i)if(i.hasOwnProperty(m)&&(t=i[m],t!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:le(e,a,m,t,i,null)}return;default:if(ts(a)){for(g in i)i.hasOwnProperty(g)&&(t=i[g],t!==void 0&&Kl(e,a,g,t,i,void 0));return}}for(l in i)i.hasOwnProperty(l)&&(t=i[l],t!=null&&le(e,a,l,t,i,null))}function wh(e,a,i,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,o=null,s=null,l=null,r=null,m=null,g=null;for(y in i){var A=i[y];if(i.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=A;default:t.hasOwnProperty(y)||le(e,a,y,null,t,A)}}for(var p in t){var y=t[p];if(A=i[p],t.hasOwnProperty(p)&&(y!=null||A!=null))switch(p){case"type":o=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":g=y;break;case"value":s=y;break;case"defaultValue":l=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,a));break;default:y!==A&&le(e,a,p,y,t,A)}}as(e,s,l,r,m,g,o,n);return;case"select":y=s=l=p=null;for(o in i)if(r=i[o],i.hasOwnProperty(o)&&r!=null)switch(o){case"value":break;case"multiple":y=r;default:t.hasOwnProperty(o)||le(e,a,o,null,t,r)}for(n in t)if(o=t[n],r=i[n],t.hasOwnProperty(n)&&(o!=null||r!=null))switch(n){case"value":p=o;break;case"defaultValue":l=o;break;case"multiple":s=o;default:o!==r&&le(e,a,n,o,t,r)}a=l,i=s,t=y,p!=null?Qi(e,!!i,p,!1):!!t!=!!i&&(a!=null?Qi(e,!!i,a,!0):Qi(e,!!i,i?[]:"",!1));return;case"textarea":y=p=null;for(l in i)if(n=i[l],i.hasOwnProperty(l)&&n!=null&&!t.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:le(e,a,l,null,t,n)}for(s in t)if(n=t[s],o=i[s],t.hasOwnProperty(s)&&(n!=null||o!=null))switch(s){case"value":p=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==o&&le(e,a,s,n,t,o)}Br(e,p,y);return;case"option":for(var E in i)p=i[E],i.hasOwnProperty(E)&&p!=null&&!t.hasOwnProperty(E)&&(E==="selected"?e.selected=!1:le(e,a,E,null,t,p));for(r in t)p=t[r],y=i[r],t.hasOwnProperty(r)&&p!==y&&(p!=null||y!=null)&&(r==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":le(e,a,r,p,t,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in i)p=i[B],i.hasOwnProperty(B)&&p!=null&&!t.hasOwnProperty(B)&&le(e,a,B,null,t,p);for(m in t)if(p=t[m],y=i[m],t.hasOwnProperty(m)&&p!==y&&(p!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,a));break;default:le(e,a,m,p,t,y)}return;default:if(ts(a)){for(var re in i)p=i[re],i.hasOwnProperty(re)&&p!==void 0&&!t.hasOwnProperty(re)&&Kl(e,a,re,void 0,t,p);for(g in t)p=t[g],y=i[g],!t.hasOwnProperty(g)||p===y||p===void 0&&y===void 0||Kl(e,a,g,p,t,y);return}}for(var d in i)p=i[d],i.hasOwnProperty(d)&&p!=null&&!t.hasOwnProperty(d)&&le(e,a,d,null,t,p);for(A in t)p=t[A],y=i[A],!t.hasOwnProperty(A)||p===y||p==null&&y==null||le(e,a,A,p,t,y)}function Ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Th(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,i=performance.getEntriesByType("resource"),t=0;t<i.length;t++){var n=i[t],o=n.transferSize,s=n.initiatorType,l=n.duration;if(o&&l&&Ld(s)){for(s=0,l=n.responseEnd,t+=1;t<i.length;t++){var r=i[t],m=r.startTime;if(m>l)break;var g=r.transferSize,A=r.initiatorType;g&&Ld(A)&&(r=r.responseEnd,s+=g*(r<l?1:(l-m)/(r-m)))}if(--t,a+=8*(o+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vl=null,Jl=null;function xo(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Id(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Yl(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Pl=null;function Ch(){var e=window.event;return e&&e.type==="popstate"?e===Pl?!1:(Pl=e,!0):(Pl=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Dh)}:Ud;function Dh(e){setTimeout(function(){throw e})}function vi(e){return e==="head"}function Gd(e,a){var i=a,t=0;do{var n=i.nextSibling;if(e.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"||i==="/&"){if(t===0){e.removeChild(n),Mt(a);return}t--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")t++;else if(i==="html")pn(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,pn(i);for(var o=i.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Nt]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&o.rel.toLowerCase()==="stylesheet"||i.removeChild(o),o=s}}else i==="body"&&pn(e.ownerDocument.body);i=n}while(i);Mt(a)}function Kd(e,a){var i=e;e=0;do{var t=i.nextSibling;if(i.nodeType===1?a?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(a?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=t}while(i)}function Ql(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ql(i),$o(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function xh(e,a,i,t){for(;e.nodeType===1;){var n=i;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Nt])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=wa(e.nextSibling),e===null)break}return null}function zh(e,a,i){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=wa(e.nextSibling),e===null))return null;return e}function Vd(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wa(e.nextSibling),e===null))return null;return e}function Xl(e){return e.data==="$?"||e.data==="$~"}function Zl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hh(e,a){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||i.readyState!=="loading")a();else{var t=function(){a(),i.removeEventListener("DOMContentLoaded",t)};i.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function wa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Wl=null;function Jd(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(a===0)return wa(e.nextSibling);a--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||a++}e=e.nextSibling}return null}function Yd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(a===0)return e;a--}else i!=="/$"&&i!=="/&"||a++}e=e.previousSibling}return null}function Pd(e,a,i){switch(a=xo(i),e){case"html":if(e=a.documentElement,!e)throw Error(h(452));return e;case"head":if(e=a.head,!e)throw Error(h(453));return e;case"body":if(e=a.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function pn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);$o(e)}var Ta=new Map,Qd=new Set;function zo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wa=C.d;C.d={f:Nh,r:Bh,D:Oh,C:kh,L:jh,m:Lh,X:Ih,S:qh,M:Uh};function Nh(){var e=Wa.f(),a=Ro();return e||a}function Bh(e){var a=Ji(e);a!==null&&a.tag===5&&a.type==="form"?du(a):Wa.r(e)}var wt=typeof document>"u"?null:document;function Xd(e,a,i){var t=wt;if(t&&typeof a=="string"&&a){var n=ya(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),Qd.has(n)||(Qd.add(n),e={rel:e,crossOrigin:i,href:a},t.querySelector(n)===null&&(a=t.createElement("link"),qe(a,"link",e),He(a),t.head.appendChild(a)))}}function Oh(e){Wa.D(e),Xd("dns-prefetch",e,null)}function kh(e,a){Wa.C(e,a),Xd("preconnect",e,a)}function jh(e,a,i){Wa.L(e,a,i);var t=wt;if(t&&e&&a){var n='link[rel="preload"][as="'+ya(a)+'"]';a==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+ya(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+ya(i.imageSizes)+'"]')):n+='[href="'+ya(e)+'"]';var o=n;switch(a){case"style":o=Tt(e);break;case"script":o=Ct(e)}Ta.has(o)||(e=O({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:e,as:a},i),Ta.set(o,e),t.querySelector(n)!==null||a==="style"&&t.querySelector(yn(o))||a==="script"&&t.querySelector(gn(o))||(a=t.createElement("link"),qe(a,"link",e),He(a),t.head.appendChild(a)))}}function Lh(e,a){Wa.m(e,a);var i=wt;if(i&&e){var t=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+ya(t)+'"][href="'+ya(e)+'"]',o=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ct(e)}if(!Ta.has(o)&&(e=O({rel:"modulepreload",href:e},a),Ta.set(o,e),i.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(gn(o)))return}t=i.createElement("link"),qe(t,"link",e),He(t),i.head.appendChild(t)}}}function qh(e,a,i){Wa.S(e,a,i);var t=wt;if(t&&e){var n=Yi(t).hoistableStyles,o=Tt(e);a=a||"default";var s=n.get(o);if(!s){var l={loading:0,preload:null};if(s=t.querySelector(yn(o)))l.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":a},i),(i=Ta.get(o))&&Fl(e,i);var r=s=t.createElement("link");He(r),qe(r,"link",e),r._p=new Promise(function(m,g){r.onload=m,r.onerror=g}),r.addEventListener("load",function(){l.loading|=1}),r.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ho(s,a,t)}s={type:"stylesheet",instance:s,count:1,state:l},n.set(o,s)}}}function Ih(e,a){Wa.X(e,a);var i=wt;if(i&&e){var t=Yi(i).hoistableScripts,n=Ct(e),o=t.get(n);o||(o=i.querySelector(gn(n)),o||(e=O({src:e,async:!0},a),(a=Ta.get(n))&&$l(e,a),o=i.createElement("script"),He(o),qe(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},t.set(n,o))}}function Uh(e,a){Wa.M(e,a);var i=wt;if(i&&e){var t=Yi(i).hoistableScripts,n=Ct(e),o=t.get(n);o||(o=i.querySelector(gn(n)),o||(e=O({src:e,async:!0,type:"module"},a),(a=Ta.get(n))&&$l(e,a),o=i.createElement("script"),He(o),qe(o,"link",e),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},t.set(n,o))}}function Zd(e,a,i,t){var n=(n=J.current)?zo(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=Tt(i.href),i=Yi(n).hoistableStyles,t=i.get(a),t||(t={type:"style",instance:null,count:0,state:null},i.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Tt(i.href);var o=Yi(n).hoistableStyles,s=o.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=n.querySelector(yn(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Ta.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ta.set(e,i),o||_h(n,e,i,s.state))),a&&t===null)throw Error(h(528,""));return s}if(a&&t!==null)throw Error(h(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ct(i),i=Yi(n).hoistableScripts,t=i.get(a),t||(t={type:"script",instance:null,count:0,state:null},i.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Tt(e){return'href="'+ya(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function Wd(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function _h(e,a,i,t){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=e.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),qe(a,"link",i),He(a),e.head.appendChild(a))}function Ct(e){return'[src="'+ya(e)+'"]'}function gn(e){return"script[async]"+e}function Fd(e,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var t=e.querySelector('style[data-href~="'+ya(i.href)+'"]');if(t)return a.instance=t,He(t),t;var n=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),He(t),qe(t,"style",n),Ho(t,i.precedence,e),a.instance=t;case"stylesheet":n=Tt(i.href);var o=e.querySelector(yn(n));if(o)return a.state.loading|=4,a.instance=o,He(o),o;t=Wd(i),(n=Ta.get(n))&&Fl(t,n),o=(e.ownerDocument||e).createElement("link"),He(o);var s=o;return s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),qe(o,"link",t),a.state.loading|=4,Ho(o,i.precedence,e),a.instance=o;case"script":return o=Ct(i.src),(n=e.querySelector(gn(o)))?(a.instance=n,He(n),n):(t=i,(n=Ta.get(o))&&(t=O({},i),$l(t,n)),e=e.ownerDocument||e,n=e.createElement("script"),He(n),qe(n,"link",t),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(h(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Ho(t,i.precedence,e));return a.instance}function Ho(e,a,i){for(var t=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,o=n,s=0;s<t.length;s++){var l=t[s];if(l.dataset.precedence===a)o=l;else if(o!==n)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(e,a.firstChild))}function Fl(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function $l(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var No=null;function $d(e,a,i){if(No===null){var t=new Map,n=No=new Map;n.set(i,t)}else n=No,t=n.get(i),t||(t=new Map,n.set(i,t));if(t.has(e))return t;for(t.set(e,null),i=i.getElementsByTagName(e),n=0;n<i.length;n++){var o=i[n];if(!(o[Nt]||o[Oe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(a)||"";s=e+s;var l=t.get(s);l?l.push(o):t.set(s,[o])}}return t}function ef(e,a,i){e=e.ownerDocument||e,e.head.insertBefore(i,a==="title"?e.querySelector("head > title"):null)}function Gh(e,a,i){if(i===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function af(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kh(e,a,i,t){if(i.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=Tt(t.href),o=a.querySelector(yn(n));if(o){a=o._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Bo.bind(e),a.then(e,e)),i.state.loading|=4,i.instance=o,He(o);return}o=a.ownerDocument||a,t=Wd(t),(n=Ta.get(n))&&Fl(t,n),o=o.createElement("link"),He(o);var s=o;s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),qe(o,"link",t),i.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Bo.bind(e),a.addEventListener("load",i),a.addEventListener("error",i))}}var er=0;function Vh(e,a){return e.stylesheets&&e.count===0&&ko(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var t=setTimeout(function(){if(e.stylesheets&&ko(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+a);0<e.imgBytes&&er===0&&(er=62500*Th());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ko(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>er?50:800)+a);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null}function Bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ko(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oo=null;function ko(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oo=new Map,a.forEach(Jh,e),Oo=null,Bo.call(e))}function Jh(e,a){if(!(a.state.loading&4)){var i=Oo.get(e);if(i)var t=i.get(null);else{i=new Map,Oo.set(e,i);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<n.length;o++){var s=n[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),t=s)}t&&i.set(null,t)}n=a.instance,s=n.getAttribute("data-precedence"),o=i.get(s)||t,o===t&&i.set(null,n),i.set(s,n),this.count++,t=Bo.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),o?o.parentNode.insertBefore(n,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var vn={$$typeof:De,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Yh(e,a,i,t,n,o,s,l,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function tf(e,a,i,t,n,o,s,l,r,m,g,A){return e=new Yh(e,a,i,s,r,m,g,A,l),a=1,o===!0&&(a|=24),o=ra(3,null,null,a),e.current=o,o.stateNode=e,a=Bs(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:t,isDehydrated:i,cache:a},Ls(o),e}function nf(e){return e?(e=it,e):it}function of(e,a,i,t,n,o){n=nf(n),t.context===null?t.context=n:t.pendingContext=n,t=li(a),t.payload={element:i},o=o===void 0?null:o,o!==null&&(t.callback=o),i=ri(e,t,a),i!==null&&(aa(i,e,a),Xt(i,e,a))}function sf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function ar(e,a){sf(e,a),(e=e.alternate)&&sf(e,a)}function lf(e){if(e.tag===13||e.tag===31){var a=zi(e,67108864);a!==null&&aa(a,e,67108864),ar(e,67108864)}}function rf(e){if(e.tag===13||e.tag===31){var a=ma();a=Zo(a);var i=zi(e,a);i!==null&&aa(i,e,a),ar(e,a)}}var jo=!0;function Ph(e,a,i,t){var n=v.T;v.T=null;var o=C.p;try{C.p=2,ir(e,a,i,t)}finally{C.p=o,v.T=n}}function Qh(e,a,i,t){var n=v.T;v.T=null;var o=C.p;try{C.p=8,ir(e,a,i,t)}finally{C.p=o,v.T=n}}function ir(e,a,i,t){if(jo){var n=tr(t);if(n===null)Gl(e,a,t,Lo,i),uf(e,t);else if(Zh(n,e,a,i,t))t.stopPropagation();else if(uf(e,t),a&4&&-1<Xh.indexOf(e)){for(;n!==null;){var o=Ji(n);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Ci(o.pendingLanes);if(s!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var r=1<<31-sa(s);l.entanglements[1]|=r,s&=~r}Ba(o),(ae&6)===0&&(bo=na()+500,fn(0))}}break;case 31:case 13:l=zi(o,2),l!==null&&aa(l,o,2),Ro(),ar(o,2)}if(o=tr(t),o===null&&Gl(e,a,t,Lo,i),o===n)break;n=o}n!==null&&t.stopPropagation()}else Gl(e,a,t,null,i)}}function tr(e){return e=os(e),nr(e)}var Lo=null;function nr(e){if(Lo=null,e=Vi(e),e!==null){var a=K(e);if(a===null)e=null;else{var i=a.tag;if(i===13){if(e=ce(a),e!==null)return e;e=null}else if(i===31){if(e=Ae(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Lo=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Of()){case yr:return 2;case gr:return 8;case Cn:case kf:return 32;case vr:return 268435456;default:return 32}default:return 32}}var or=!1,bi=null,Ai=null,Ri=null,bn=new Map,An=new Map,Si=[],Xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uf(e,a){switch(e){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":bn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(a.pointerId)}}function Rn(e,a,i,t,n,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:i,eventSystemFlags:t,nativeEvent:o,targetContainers:[n]},a!==null&&(a=Ji(a),a!==null&&lf(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function Zh(e,a,i,t,n){switch(a){case"focusin":return bi=Rn(bi,e,a,i,t,n),!0;case"dragenter":return Ai=Rn(Ai,e,a,i,t,n),!0;case"mouseover":return Ri=Rn(Ri,e,a,i,t,n),!0;case"pointerover":var o=n.pointerId;return bn.set(o,Rn(bn.get(o)||null,e,a,i,t,n)),!0;case"gotpointercapture":return o=n.pointerId,An.set(o,Rn(An.get(o)||null,e,a,i,t,n)),!0}return!1}function df(e){var a=Vi(e.target);if(a!==null){var i=K(a);if(i!==null){if(a=i.tag,a===13){if(a=ce(i),a!==null){e.blockedOn=a,Tr(e.priority,function(){rf(i)});return}}else if(a===31){if(a=Ae(i),a!==null){e.blockedOn=a,Tr(e.priority,function(){rf(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=tr(e.nativeEvent);if(i===null){i=e.nativeEvent;var t=new i.constructor(i.type,i);ns=t,i.target.dispatchEvent(t),ns=null}else return a=Ji(i),a!==null&&lf(a),e.blockedOn=i,!1;a.shift()}return!0}function ff(e,a,i){qo(e)&&i.delete(a)}function Wh(){or=!1,bi!==null&&qo(bi)&&(bi=null),Ai!==null&&qo(Ai)&&(Ai=null),Ri!==null&&qo(Ri)&&(Ri=null),bn.forEach(ff),An.forEach(ff)}function Io(e,a){e.blockedOn===a&&(e.blockedOn=null,or||(or=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Wh)))}var Uo=null;function mf(e){Uo!==e&&(Uo=e,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){Uo===e&&(Uo=null);for(var a=0;a<e.length;a+=3){var i=e[a],t=e[a+1],n=e[a+2];if(typeof t!="function"){if(nr(t||i)===null)continue;break}var o=Ji(i);o!==null&&(e.splice(a,3),a-=3,tl(o,{pending:!0,data:n,method:i.method,action:t},t,n))}}))}function Mt(e){function a(r){return Io(r,e)}bi!==null&&Io(bi,e),Ai!==null&&Io(Ai,e),Ri!==null&&Io(Ri,e),bn.forEach(a),An.forEach(a);for(var i=0;i<Si.length;i++){var t=Si[i];t.blockedOn===e&&(t.blockedOn=null)}for(;0<Si.length&&(i=Si[0],i.blockedOn===null);)df(i),i.blockedOn===null&&Si.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(t=0;t<i.length;t+=3){var n=i[t],o=i[t+1],s=n[Xe]||null;if(typeof o=="function")s||mf(i);else if(s){var l=null;if(o&&o.hasAttribute("formAction")){if(n=o,s=o[Xe]||null)l=s.formAction;else if(nr(n)!==null)continue}else l=s.action;typeof l=="function"?i[t+1]=l:(i.splice(t,3),t-=3),mf(i)}}}function hf(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),t||setTimeout(i,20)}function i(){if(!t&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(i,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function sr(e){this._internalRoot=e}_o.prototype.render=sr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(h(409));var i=a.current,t=ma();of(i,t,e,a,null,null)},_o.prototype.unmount=sr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;of(e.current,2,null,e,null,null),Ro(),a[Ki]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var a=wr();e={blockedOn:null,target:e,priority:a};for(var i=0;i<Si.length&&a!==0&&a<Si[i].priority;i++);Si.splice(i,0,e),i===0&&df(e)}};var pf=G.version;if(pf!=="19.2.3")throw Error(h(527,pf,"19.2.3"));C.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=S(a),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Fh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{xt=Go.inject(Fh),oa=Go}catch{}}return wn.createRoot=function(e,a){if(!L(e))throw Error(h(299));var i=!1,t="",n=Ru,o=Su,s=wu;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=tf(e,1,!1,null,null,i,t,null,n,o,s,hf),e[Ki]=a.current,_l(e),new sr(a)},wn.hydrateRoot=function(e,a,i){if(!L(e))throw Error(h(299));var t=!1,n="",o=Ru,s=Su,l=wu,r=null;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(o=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(l=i.onRecoverableError),i.formState!==void 0&&(r=i.formState)),a=tf(e,1,!0,a,i??null,t,n,r,o,s,l,hf),a.context=nf(null),i=a.current,t=ma(),t=Zo(t),n=li(t),n.callback=null,ri(i,n,t),i=t,a.current.lanes=i,Ht(a,i),Ba(a),e[Ki]=a.current,_l(e),new _o(a)},wn.version="19.2.3",wn}var Cf;function rp(){if(Cf)return cr.exports;Cf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(G){console.error(G)}}return T(),cr.exports=lp(),cr.exports}var cp=rp();const up=T=>T.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dp=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g,(G,j,h)=>h?h.toUpperCase():j.toLowerCase()),Mf=T=>{const G=dp(T);return G.charAt(0).toUpperCase()+G.slice(1)},zf=(...T)=>T.filter((G,j,h)=>!!G&&G.trim()!==""&&h.indexOf(G)===j).join(" ").trim(),fp=T=>{for(const G in T)if(G.startsWith("aria-")||G==="role"||G==="title")return!0};var mp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const hp=Ve.forwardRef(({color:T="currentColor",size:G=24,strokeWidth:j=2,absoluteStrokeWidth:h,className:L="",children:K,iconNode:ce,...Ae},x)=>Ve.createElement("svg",{ref:x,...mp,width:G,height:G,stroke:T,strokeWidth:h?Number(j)*24/Number(G):j,className:zf("lucide",L),...!K&&!fp(Ae)&&{"aria-hidden":"true"},...Ae},[...ce.map(([S,W])=>Ve.createElement(S,W)),...Array.isArray(K)?K:[K]]));const Je=(T,G)=>{const j=Ve.forwardRef(({className:h,...L},K)=>Ve.createElement(hp,{ref:K,iconNode:G,className:zf(`lucide-${up(Mf(T))}`,`lucide-${T}`,h),...L}));return j.displayName=Mf(T),j};const pp=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Et=Je("activity",pp);const yp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],gp=Je("arrow-right",yp);const vp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ef=Je("book-open",vp);const bp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ap=Je("chevron-right",bp);const Rp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Sp=Je("circle-alert",Rp);const wp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Df=Je("circle-check-big",wp);const Tp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Cp=Je("file-text",Tp);const Mp=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ep=Je("heart",Mp);const Dp=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],xp=Je("lightbulb",Dp);const zp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Hp=Je("menu",zp);const Np=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Bp=Je("search",Np);const Op=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],xf=Je("stethoscope",Op);const kp=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],jp=Je("thermometer",kp);const Lp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],qp=Je("triangle-alert",Lp);const Ip=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Up=Je("x",Ip),_p=`# NSTEMI vs STEMI: Recognition and Initial Steps

## Clinical Setup
A 64-year-old man with diabetes presents with crushing chest pain radiating to his left arm, hypotension (100/64 mm Hg) and diaphoresis. His ECG shows ST-segment elevations in leads II, III and aVF with troponin pending. What initial steps should be taken and how do we distinguish STEMI from NSTEMI?

## Teaching Objectives
- Distinguish STEMI from NSTEMI based on ECG criteria and biomarker patterns
- Initiate evidence-based first steps for suspected acute coronary syndrome

## Teaching Points
1. A STEMI is defined by new ST-segment elevations at the J point in at least two contiguous leads (≥ 1 mm in most leads or ≥ 2 mm in V2-V3 for men ≥40 yr and ≥ 1.5 mm in V2-V3 for women) or new left bundle branch block with ischemic symptoms; NSTEMI shows ischemic symptoms and positive troponin without diagnostic ST elevation. [Ref 1]
2. Initial management for all suspected ACS includes prompt chewing of aspirin (162–325 mg), sublingual nitroglycerin for persistent chest pain (avoid if hypotensive or suspect right ventricular infarction), supplemental oxygen only if SpO₂ <90 %, and morphine for refractory pain. [Ref 1]
3. For STEMI, immediate reperfusion is critical; perform emergent percutaneous coronary intervention (PCI) within 90 min of first medical contact or administer fibrinolysis within 30 min if PCI unavailable. NSTEMI patients are risk-stratified for early invasive versus conservative management based on ECG changes, troponin elevation and clinical risk scores. [Ref 2]
4. Administer anticoagulation (unfractionated heparin or enoxaparin) and add a P2Y₁₂ inhibitor (ticagrelor or clopidogrel) as early as possible; avoid prasugrel in patients with prior stroke or TIA. [Ref 3]
5. Obtain serial ECGs and troponins to detect evolving ischemia; transfer immediately to a PCI-capable center if STEMI criteria are met or high-risk NSTEMI features are present. [Ref 2]

## Key Numbers
- ST-segment elevation ≥ 1 mm in two contiguous leads (or ≥ 2 mm in V2-V3 for men ≥ 40 yr, ≥ 1.5 mm in V2-V3 for women) defines STEMI. [Ref 1]
- For STEMI, door-to-balloon time target is ≤ 90 minutes; door-to-needle time for fibrinolysis is ≤ 30 minutes. [Ref 2]
- Troponin elevation above the 99th percentile upper reference limit with rising or falling pattern confirms myocardial injury and distinguishes NSTEMI from unstable angina. [Ref 3]

## Common Pitfall
Delays in reperfusion occur when STEMI is misdiagnosed as NSTEMI or when ST-elevations are subtle. Re-examine the ECG for reciprocal changes and repeat within 10 minutes if symptoms persist; any diagnostic uncertainty should err toward activating the cath lab. [Ref 2]

## Boards + Bedside Tie-In
On exams, STEMI patients require emergent reperfusion therapy whereas NSTEMI patients need risk-stratified invasive management. At the bedside, using a structured approach (rapid ECG interpretation, immediate antiplatelet therapy and anticoagulation, and timely cath lab activation) can improve survival.

## References
1. Collet J-P, Thiele H, Barbato E, et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. *Eur Heart J.* 2021;42(14):1289-1367. doi:10.1093/eurheartj/ehaa575 PMID: 32860058.
2. Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. *Eur Heart J.* 2018;39(2):119-177. doi:10.1093/eurheartj/ehx393 PMID: 28886621.
3. Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC Guideline for the Management of Patients With Non–ST-Elevation Acute Coronary Syndromes. *J Am Coll Cardiol.* 2014;64(24):e139-e228. doi:10.1016/j.jacc.2014.09.017 PMID: 25260718.

---

# Chest Pain Risk Stratification Tools

## Clinical Setup
A 55-year-old woman arrives in the emergency department with intermittent chest discomfort for the past 4 hours. Her vitals are stable, ECG shows non-specific ST-T changes and the initial troponin is normal. How should we stratify her risk for major adverse cardiac events and decide on disposition?

## Teaching Objectives
- Utilize validated risk scores to triage patients with suspected ACS
- Interpret score results to guide testing and disposition decisions

## Teaching Points
1. The TIMI (Thrombolysis in Myocardial Infarction) risk score uses seven variables (age ≥65 yr, ≥3 CAD risk factors, known CAD with ≥50 % stenosis, aspirin use in the past 7 days, severe angina, ST deviation ≥0.5 mm, and elevated cardiac markers) to estimate 14-day risk of death/MI; scores ≥5 indicate high risk requiring early invasive strategy. [Ref 1]
2. The HEART score incorporates History, ECG, Age, Risk factors and initial Troponin; each component scores 0–2 points. HEART scores 0–3 indicate low risk (<2 % MACE), 4–6 moderate risk (~12 %) and ≥7 high risk (>50 %); low-risk patients may be discharged with outpatient follow-up. [Ref 2]
3. The GRACE score (Global Registry of Acute Coronary Events) predicts in-hospital mortality using age, heart rate, systolic BP, creatinine, Killip class, cardiac arrest at admission, ST deviation and biomarkers; high scores (>140) warrant intensive therapy and early angiography (not needed for routine ED use but helpful in inpatient risk stratification). [Ref 1]
4. Risk scores should be calculated before giving anti-ischemic therapy to avoid skewed troponin values; combine score results with clinical judgement, ongoing chest pain and dynamic ECG changes to decide on observation versus admission. [Ref 2]
5. Patients deemed low risk by HEART or TIMI scores and with two negative troponins (3 hours apart) can be safely discharged with close follow-up; moderate/high-risk patients need admission, telemetry and cardiology evaluation. [Ref 2]

## Key Numbers
- TIMI score ≥5 predicts ~20 % risk of death/MI at 14 days; scores 0–1 confer <5 % risk. [Ref 1]
- HEART score 0–3 corresponds to ~1.7 % risk of MACE, 4–6 to ~12 % and ≥7 to ~50 %. [Ref 2]
- GRACE score >140 suggests in-hospital mortality ≥8 %; <109 implies mortality <1 %. [Ref 1]

## Teaching Pearl
Risk scores complement but do not replace clinician judgement. A reassuring score may still miss atypical presentations (e.g., young women, diabetics) and cannot account for dynamic changes; repeat assessment is crucial. [Ref 2]

## Boards + Bedside Tie-In
Exams often present chest pain cases requiring selection of risk tools and interpretation. At the bedside, using the HEART or TIMI score helps standardize decision making, reduces unnecessary admissions, and ensures high-risk patients receive timely interventions.

## References
1. Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non–ST elevation MI. *JAMA.* 2000;284(7):835-842. doi:10.1001/jama.284.7.835 PMID: 10938172.
2. Backus BE, Six AJ, Kelder JC, et al. The HEART score for the assessment of patients with chest pain in the emergency department: a multinational validation study. *Crit Pathw Cardiol.* 2013;12(3):121-126. doi:10.1097/HPC.0b013e31828b327e PMID: 23892941.

---

# Antiplatelet and Anticoagulation in ACS

## Clinical Setup
A 68-year-old man with chest pressure and dynamic inferior ST-segment depressions is diagnosed with NSTEMI. After giving aspirin and nitrates, you consider additional antiplatelet and anticoagulant therapy. What agents should be selected and when?

## Teaching Objectives
- Select appropriate antiplatelet regimens for acute coronary syndrome
- Choose and monitor anticoagulants based on patient risk and invasive strategy

## Teaching Points
1. All patients with ACS should receive non-enteric-coated aspirin 162–325 mg as soon as possible, followed by daily aspirin 81 mg indefinitely. [Ref 1]
2. A P2Y₁₂ inhibitor (ticagrelor preferred, or clopidogrel/prasugrel) should be added to aspirin for dual therapy; ticagrelor 180 mg loading then 90 mg twice daily reduces ischemic events compared with clopidogrel. Prasugrel is given only if PCI is planned and is contraindicated in prior stroke/TIA. [Ref 2]
3. In NSTE-ACS, anticoagulation options include unfractionated heparin, low-molecular-weight heparin (enoxaparin 1 mg/kg twice daily) or the factor Xa inhibitor fondaparinux; choose unfractionated heparin if early invasive strategy is planned due to short half-life and reversibility. [Ref 1]
4. For STEMI treated with fibrinolysis, adjunct anticoagulation with heparin or enoxaparin for 48 hours (or until PCI) is recommended; avoid routine full-dose anticoagulation beyond hospital discharge. [Ref 3]
5. Duration of dual antiplatelet therapy after PCI is generally 12 months; shorter courses (3–6 months) may be considered in high-bleeding-risk patients while extended therapy beyond 12 months reduces ischemic events but increases bleeding. [Ref 2]

## Key Numbers
- Ticagrelor reduces cardiovascular death and MI compared with clopidogrel; number needed to treat ~53 but increases non-CABG bleeding. [Ref 2]
- For NSTE-ACS undergoing PCI, an initial bolus of unfractionated heparin 60 U/kg (max 4,000 U) followed by infusion 12 U/kg/hr achieves therapeutic anticoagulation. [Ref 1]
- Enoxaparin is dosed 1 mg/kg subcutaneously every 12 hr (or 1 mg/kg daily if CrCl <30 mL/min) for medical management. [Ref 1]

## Common Pitfall
Stopping dual antiplatelet therapy prematurely (<1 month after stent placement) markedly increases risk of stent thrombosis. Always clarify stent type, bleeding risk and upcoming procedures; coordinate with cardiology before discontinuation. [Ref 2]

## Boards + Bedside Tie-In
Exams frequently test knowledge of loading doses, contraindications and duration of antiplatelet therapy. Clinically, early administration of appropriate antiplatelet and anticoagulant agents reduces infarct size and mortality; understanding drug selection and timing helps avoid complications like bleeding or stent thrombosis.

## References
1. Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC Guideline for the Management of Patients With Non–ST-Elevation Acute Coronary Syndromes. *J Am Coll Cardiol.* 2014;64(24):e139-e228. doi:10.1016/j.jacc.2014.09.017 PMID: 25260718.
2. Levine GN, Bates ER, Bittl JA, et al. 2016 ACC/AHA guideline focused update on duration of dual antiplatelet therapy in patients with coronary artery disease. *Circulation.* 2016;134(10):e123-e155. doi:10.1161/CIR.0000000000000404 PMID: 27026020.
3. Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. *Eur Heart J.* 2018;39(2):119-177. doi:10.1093/eurheartj/ehx393 PMID: 28886621.

---

# Post-MI Medication Optimization

## Clinical Setup
A 70-year-old woman is recovering after PCI for an anterior STEMI. Her blood pressure is 118/70 mm Hg and ejection fraction is 35 %. Beyond dual antiplatelet therapy, what medications improve survival and prevent remodeling after myocardial infarction?

## Teaching Objectives
- Initiate guideline-directed medications for secondary prevention after MI
- Explain how neurohormonal blockade and lipid lowering prevent adverse remodeling

## Teaching Points
1. Beta-blockers (metoprolol succinate, carvedilol or bisoprolol) reduce mortality and reinfarction; initiate within 24 hours if no contraindications (heart rate >60 bpm, systolic BP >90 mm Hg, no acute HF) and titrate to target doses. [Ref 1]
2. Start ACE inhibitors or ARBs within 24 hours for anterior MI, LV dysfunction (EF ≤40 %) or diabetes; transition to angiotensin receptor–neprilysin inhibitor (sacubitril/valsartan) after stabilization to further reduce cardiovascular death and HF hospitalization. [Ref 1]
3. High-intensity statin therapy (atorvastatin 40–80 mg or rosuvastatin 20–40 mg daily) should be initiated regardless of baseline LDL to lower recurrence and slow atherosclerosis. [Ref 1]
4. In patients with EF ≤40 % and symptoms of heart failure or diabetes, add a mineralocorticoid receptor antagonist (spironolactone or eplerenone) after ACEI/ARB and beta-blocker; monitor potassium and renal function. [Ref 1]
5. Continue dual antiplatelet therapy (aspirin + P2Y₁₂ inhibitor) for at least 12 months; consider indefinite low-dose aspirin and secondary P2Y₁₂ inhibitor depending on stent type and bleeding risk. [Ref 2]

## Key Numbers
- Target heart rate for beta-blocker therapy is 50–60 bpm at rest; titrate as tolerated. [Ref 1]
- Initiating ACE inhibitor within 24 hours after MI reduces mortality by ~7 % at 30 days and up to 20 % by 1 year. [Ref 1]
- High-intensity statins reduce major vascular events by ~22 % per 1 mmol/L LDL reduction. [Ref 1]

## Teaching Pearl
After an MI, medications are titrated to maximally tolerated doses rather than a one-size-fits-all. Schedule frequent follow-up to up-titrate beta-blockers and ACEI/ARNI and ensure adherence. Check renal function and electrolytes regularly. [Ref 1]

## Boards + Bedside Tie-In
Exams test which drugs improve survival post-MI and when to initiate them. At the bedside, early initiation of beta-blockers, ACEI/ARNI, statins and aldosterone antagonists prevents remodeling, reduces recurrent ischemia and improves long-term outcomes.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. Levine GN, Bates ER, Bittl JA, et al. 2016 ACC/AHA guideline focused update on duration of dual antiplatelet therapy in patients with coronary artery disease. *Circulation.* 2016;134(10):e123-e155. doi:10.1161/CIR.0000000000000404 PMID: 27026020.

---

# Stable Angina: Medical Management Principles

## Clinical Setup
A 60-year-old man with known chronic coronary disease reports exertional chest tightness relieved by rest. His vital signs and ECG are normal. How should his angina be managed medically, and what evidence supports an optimal medical therapy–first strategy?

## Teaching Objectives
- Implement foundational therapies for chronic stable angina
- Evaluate when to consider revascularization versus optimal medical therapy

## Teaching Points
1. Antianginal therapy begins with beta-blockers as first-line agents to reduce heart rate and myocardial oxygen demand; if symptoms persist, add a long-acting nitrate or calcium channel blocker. Ranolazine can be used for refractory angina without affecting heart rate or blood pressure. [Ref 1]
2. All patients should receive daily low-dose aspirin (or clopidogrel if aspirin-intolerant) and high-intensity statin therapy; aggressive risk factor modification (blood pressure control, smoking cessation, weight loss) reduces future events. [Ref 2]
3. ACE inhibitors or ARBs improve outcomes in patients with hypertension, diabetes or left ventricular dysfunction; add SGLT2 inhibitors in diabetic patients for cardiovascular benefit. [Ref 2]
4. The COURAGE trial demonstrated that optimal medical therapy (OMT) was non-inferior to PCI for stable CAD in preventing death/MI, though PCI improved angina relief; OMT included aspirin, statins, beta-blockers, ACEI/ARB and lifestyle measures. [Ref 3]
5. The ISCHEMIA trial compared an initial invasive strategy versus OMT in moderate-to-severe ischemia; no difference in all-cause mortality or MI was found, supporting an OMT-first approach unless refractory angina or high-risk anatomy (left main disease, LVEF <35 %). [Ref 4]

## Key Numbers
- Beta-blockers decrease angina episodes by ~25–30 % and should be titrated to resting heart rate 55–60 bpm. [Ref 1]
- In COURAGE, PCI plus OMT showed no reduction in death/MI compared with OMT alone over 4.6 years (19.0 % vs 18.5 %). [Ref 3]
- In ISCHEMIA, cumulative incidence of cardiovascular death/MI at 5 years was similar between invasive and conservative strategies (~13 %). [Ref 4]

## Teaching Pearl
Optimal medical therapy is dynamic; adjust medications and lifestyle interventions based on symptoms and tolerance. Reserve revascularization for patients with persistent angina despite maximally tolerated therapy or high-risk features on noninvasive testing. [Ref 4]

## Boards + Bedside Tie-In
Exams may ask about trial results and sequencing of therapy for stable angina. Clinically, focusing on medical therapy reduces morbidity and often obviates the need for invasive procedures; patient education on lifestyle modification is crucial.

## References
1. Fihn SD, Gardin JM, Abrams J, et al. 2012 ACCF/AHA/ACP/AATS/PCNA/SCAI/STS guideline for the diagnosis and management of patients with stable ischemic heart disease. *J Am Coll Cardiol.* 2012;60(24):e44-e164. doi:10.1016/j.jacc.2012.07.013 PMID: 23182125.
2. Lawton JS, Tamis-Holland JE, Alviar CL, et al. 2023 ACC/AHA/ACCP/ASPC/NLA/PCNA guideline for the diagnosis and management of chronic coronary disease. *Circulation.* 2023;148(3):e111-e308. doi:10.1161/CIR.0000000000001168 PMID: 37471501.
3. Boden WE, O’Rourke RA, Teo KK, et al. Optimal medical therapy with or without PCI for stable coronary disease. *N Engl J Med.* 2007;356(15):1503-1516. doi:10.1056/NEJMoa070829 PMID: 17387127.
4. Maron DJ, Hochman JS, Reynolds HR, et al. Initial invasive or conservative strategy for stable coronary disease. *N Engl J Med.* 2020;382(15):1395-1407. doi:10.1056/NEJMoa1915922 PMID: 32227755.

---

# Atrial Fibrillation: Rate vs Rhythm Control

## Clinical Setup
A 76-year-old man with hypertension and heart failure with preserved ejection fraction presents with new-onset atrial fibrillation (AF) and palpitations for 8 hours. His blood pressure is 128/78 mm Hg and he is mildly dyspneic. Should his management emphasize rate control or rhythm control?

## Teaching Objectives
- Compare indications, benefits and risks of rate versus rhythm control strategies
- Apply trial data to individualize AF management

## Teaching Points
1. Rate control aims to control ventricular response and relieve symptoms; beta-blockers or nondihydropyridine calcium channel blockers (diltiazem, verapamil) are first-line agents. Digoxin is reserved for sedentary patients or when hypotension limits other agents. [Ref 1]
2. Rhythm control (antiarrhythmic drugs or electrical cardioversion) is considered for persistent symptoms despite adequate rate control, first episode of AF in young patients, tachy-cardiomyopathy, or when AF precipitates heart failure. [Ref 1]
3. The AFFIRM trial showed no survival advantage of rhythm control over rate control; rhythm control was associated with more hospitalizations and adverse drug effects, so rate control with adequate anticoagulation remains the default strategy. [Ref 2]
4. In patients with symptomatic AF <48 hr onset, early cardioversion is reasonable; anticoagulation is still required based on CHA2DS2-VASc score to prevent thromboembolism. [Ref 1]
5. Emerging data suggest that early rhythm control within the first year of AF diagnosis may reduce cardiovascular events and stroke, but this approach requires careful patient selection and specialist consultation. [Ref 1]

## Key Numbers
- In AFFIRM, all-cause mortality at 5 years was similar (23.8 % rhythm vs 21.3 % rate). [Ref 2]
- Target resting heart rate in AF is generally <80 bpm; lenient control (<110 bpm) may be acceptable in asymptomatic patients. [Ref 1]
- Antiarrhythmic drugs carry pro-arrhythmic risk; amiodarone increases mortality in non-ischemic HF at high doses (avoid unless other agents fail). [Ref 1]

## Teaching Pearl
Rate control is often easier and safer than rhythm control; ensure adequate anticoagulation and address reversible factors (e.g., thyroid disease, sleep apnea). Engage patients in shared decision making when considering rhythm control. [Ref 2]

## Boards + Bedside Tie-In
Test questions may ask which patients benefit from rhythm control. In practice, older patients with minimal symptoms generally do well with rate control, whereas younger, symptomatic patients or those with tachy-cardiomyopathy may benefit from early rhythm control.

## References
1. January CT, Wann LS, Calkins H, et al. 2019 AHA/ACC/HRS Focused update on atrial fibrillation: management of patients with atrial fibrillation. *J Am Coll Cardiol.* 2019;74(1):104-132. doi:10.1016/j.jacc.2019.01.011 PMID: 30703431.
2. Wyse DG, Waldo AL, DiMarco JP, et al. A comparison of rate control and rhythm control in patients with atrial fibrillation. *N Engl J Med.* 2002;347(23):1825-1833. doi:10.1056/NEJMoa021328 PMID: 12466506.

---

# Anticoagulation Decisions in Atrial Fibrillation

## Clinical Setup
A 72-year-old woman with paroxysmal AF and hypertension asks whether she needs anticoagulation. Her CHA2DS2-VASc score is 3 (age ≥65, female sex and hypertension). How should stroke and bleeding risks guide anticoagulation decisions?

## Teaching Objectives
- Apply CHA2DS2-VASc and HAS-BLED scores to guide anticoagulation
- Select appropriate anticoagulant agents for non-valvular AF

## Teaching Points
1. The CHA2DS2-VASc score assigns points for congestive heart failure (1), hypertension (1), age ≥75 (2), diabetes (1), stroke/TIA (2), vascular disease (1), age 65–74 (1) and female sex (1). Anticoagulation is recommended for scores ≥2 in men or ≥3 in women. [Ref 1]
2. The HAS-BLED score estimates bleeding risk (hypertension, abnormal liver/kidney function, stroke history, bleeding history, labile INR, age >65 yr, drugs/alcohol). A score ≥3 indicates high bleeding risk; optimize modifiable factors but do not withhold anticoagulation solely based on high score. [Ref 1]
3. Direct oral anticoagulants (DOACs) such as apixaban, rivaroxaban, dabigatran and edoxaban are preferred over warfarin for non-valvular AF due to lower rates of intracranial hemorrhage and similar or improved efficacy. Warfarin remains appropriate for patients with mechanical heart valves, moderate-to-severe mitral stenosis or severe renal impairment. [Ref 1]
4. In patients with CHA2DS2-VASc score of 1 (men) or 2 (women), anticoagulation may be considered after discussing risks and benefits; aspirin alone is insufficient. The CHA₂DS₂-VASc score reclassifies many patients with a CHADS₂ score of 1 as truly low risk (<1 % annual stroke), identifying those unlikely to benefit from anticoagulation. [Ref 1, 2]
5. Reassess stroke and bleeding risks annually and educate patients on adherence, dietary interactions (for warfarin) and monitoring needs; DOAC dosing must be adjusted for renal function and age. [Ref 1]

## Key Numbers
- CHA2DS2-VASc score ≥2 in men or ≥3 in women confers annual stroke risk >2 % and warrants anticoagulation. [Ref 1]
- Apixaban 5 mg twice daily reduces stroke/systemic embolism by ~21 % compared with warfarin and lowers major bleeding by ~31 %. [Ref 1]
- HAS-BLED score ≥3 predicts major bleeding risk of ~4 % per year; modifiable factors include uncontrolled hypertension, labile INR and concomitant antiplatelets/alcohol. [Ref 1]

## Teaching Pearl
Use both stroke and bleeding scores to guide shared decision-making. A high bleeding risk rarely outweighs the benefits of anticoagulation; instead, address reversible bleeding risks (e.g., uncontrolled blood pressure, NSAID use). [Ref 1]

## Boards + Bedside Tie-In
Test questions often present patients with specific CHA2DS2-VASc and HAS-BLED scores and ask about initiation of anticoagulation. Clinically, DOACs have simplified management, but careful patient selection and dose adjustment remain essential.

## References
1. January CT, Wann LS, Calkins H, et al. 2019 AHA/ACC/HRS Focused update on atrial fibrillation: management of patients with atrial fibrillation. *J Am Coll Cardiol.* 2019;74(1):104-132. doi:10.1016/j.jacc.2019.01.011 PMID: 30703431.
2. Lip GYH, Nieuwlaat R, Pisters R, et al. The CHA₂DS₂-VASc score identifies those patients with atrial fibrillation and a CHADS₂ score of 1 who are unlikely to benefit from oral anticoagulant therapy. *Eur Heart J.* 2013;34(3):170-176. doi:10.1093/eurheartj/ehs314 PMID: 23018151.

---

# Approach to Inpatient Bradycardia

## Clinical Setup
A 78-year-old man admitted for pneumonia develops symptomatic bradycardia with heart rate 32 bpm, blood pressure 88/50 mm Hg and dizziness. The ECG shows sinus bradycardia without heart block. What is the immediate approach to managing bradycardia in the hospital?

## Teaching Objectives
- Recognize and treat clinically significant bradycardia using ACLS algorithms
- Identify reversible causes and determine when pacing is required

## Teaching Points
1. Assess airway, breathing and circulation; provide supplemental oxygen and establish IV access. If the patient is unstable (hypotension, altered mental status, shock, ischemic chest discomfort), administer atropine 0.5 mg IV bolus, repeating every 3–5 minutes to a total of 3 mg. [Ref 1]
2. If atropine is ineffective, initiate transcutaneous pacing or infusions of dopamine (2–10 mcg/kg/min) or epinephrine (2–10 mcg/min) while preparing for transvenous pacing. [Ref 1]
3. Evaluate for and treat reversible causes (the “Hs and Ts”): hypoxia, hypothermia, hyperkalemia, hypothyroidism, hypoglycemia, toxins (beta-blockers, calcium channel blockers, digoxin), ischemia/infarction and increased intracranial pressure. [Ref 1]
4. Chronic or persistent bradyarrhythmias may require pacemaker implantation, particularly for symptomatic sinus node dysfunction or high-grade AV block; avoid atropine in suspected infranodal block as it may exacerbate conduction delay and adjust atropine dosing to lean body weight to avoid paradoxical bradycardia in obese patients. [Ref 1, 2]
5. Discontinue AV nodal blocking agents (beta-blockers, calcium channel blockers, digoxin) and review other medications (opioids, sedatives) that may depress sinus node function; correct electrolyte abnormalities (potassium, calcium, magnesium). [Ref 1]

## Key Numbers
- Atropine dose: 0.5 mg IV every 3–5 minutes, maximum total dose 3 mg. [Ref 1]
- Transcutaneous pacing energy: start at 60–80 mA and adjust until capture; pacing rate 60–70 bpm. [Ref 1]
- Dopamine or epinephrine infusions: 2–10 mcg/kg/min (dopamine) or 2–10 mcg/min (epinephrine) to support heart rate and blood pressure. [Ref 1]

## Common Pitfall
Treating asymptomatic sinus bradycardia or first-degree AV block may lead to unnecessary pacing and medication adjustments. Intervene only when bradycardia causes hemodynamic compromise or has high risk of progression. [Ref 1]

## Boards + Bedside Tie-In
Exam questions often present the ACLS bradycardia algorithm. In practice, rapid recognition of instability and adherence to stepwise treatment, including atropine, pacing, and identification of reversible causes can be lifesaving.

## References
1. Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. *J Am Coll Cardiol.* 2019;74(7):932-987. doi:10.1016/j.jacc.2018.10.043 PMID: 30412710.
2. Carron M, Veronese S. Atropine sulfate for treatment of bradycardia in a patient with morbid obesity: what may happen when you least expect it. *BMJ Case Rep.* 2015;2015:bcr2014207596. doi:10.1136/bcr-2014-207596 PMID: 25634857.

---

# QTc Prolongation: Causes and Management

## Clinical Setup
A 62-year-old woman treated with ciprofloxacin and ondansetron for a urinary tract infection develops palpitations and lightheadedness. Her ECG shows a QTc of 520 ms. How should we evaluate and manage this prolonged QT interval?

## Teaching Objectives
- Identify common causes of QT prolongation and estimate torsades risk
- Implement appropriate management to prevent and treat torsades de pointes

## Teaching Points
1. QT prolongation can result from medications (antiarrhythmics like sotalol, amiodarone; antibiotics like macrolides, fluoroquinolones; psychotropics), electrolyte disturbances (hypokalemia, hypomagnesemia, hypocalcemia), structural heart disease and congenital long-QT syndromes. [Ref 1]
2. The Tisdale risk score predicts QTc prolongation in hospitalized patients using factors such as age ≥68 yr, female sex, loop diuretic use, serum potassium ≤3.5 mEq/L, admission QTc ≥450 ms, sepsis, and use of ≥2 QT-prolonging drugs; scores ≥11 indicate high risk. [Ref 1]
3. Management involves discontinuing offending drugs, correcting electrolytes (potassium >4.5 mEq/L, magnesium >2 mg/dL), avoiding bradycardia and monitoring continuous telemetry. [Ref 1]
4. If torsades de pointes occurs, treat with intravenous magnesium sulfate 2 g over 1–2 minutes (repeat as needed), temporary pacing or isoproterenol infusion to increase heart rate, and cardioversion if unstable. [Ref 2]
5. Congenital long-QT syndromes may require beta-blocker therapy and implantable cardioverter-defibrillator (ICD) for secondary prevention; avoid QT-prolonging drugs lifelong. [Ref 2]

## Key Numbers
- QTc >500 ms is associated with a five-fold increased risk of torsades de pointes and warrants immediate evaluation. [Ref 1]
- Tisdale score ≥11 predicts a ~12 % incidence of QT prolongation; scores <7 have <3 % risk. [Ref 1]
- Magnesium sulfate dose for torsades: 2 g IV over 1–2 minutes; may repeat twice if torsades persists. [Ref 2]

## Teaching Pearl
QTc varies with heart rate and requires correction; use Bazett’s formula cautiously at extremes of heart rate. Always review medication lists for hidden QT-prolonging agents, especially in elderly or critically ill patients. [Ref 1]

## Boards + Bedside Tie-In
On exams, identify medications that prolong the QT interval and know acute management of torsades. Clinically, proactive risk assessment using the Tisdale score and aggressive correction of electrolytes can prevent lethal arrhythmias.

## References
1. Tisdale JE, Jaynes HA, Kingery JR, et al. Development and validation of a risk score to predict QT interval prolongation in hospitalized patients. *Circ Cardiovasc Qual Outcomes.* 2013;6(4):479-487. doi:10.1161/CIRCOUTCOMES.113.000152 PMID: 23716032.
2. Lachman N, Syed FF, Bansal O, et al. Polymorphic ventricular tachycardia: terminology, mechanism, diagnosis, and emergency therapy. *Circulation.* 2021;143(18):1878-1897. doi:10.1161/CIRCULATIONAHA.121.055783 PMID: 34491774.

---

# Heart Block: Recognition and Initial Approach

## Clinical Setup
A 68-year-old woman presents with dizziness and syncope. Her ECG shows P waves unrelated to QRS complexes with ventricular rate 30 bpm. How do we recognize and manage different types of atrioventricular (AV) block?

## Teaching Objectives
- Distinguish first-, second- and third-degree AV blocks on ECG
- Initiate appropriate management based on block type and symptoms

## Teaching Points
1. First-degree AV block is characterized by a prolonged PR interval (>200 ms) with 1:1 AV conduction and usually requires no treatment unless associated with bradycardia or drug toxicity. [Ref 1]
2. Second-degree type I (Mobitz I/Wenckebach) shows progressive PR prolongation followed by a dropped QRS; it often occurs at the AV node and is usually benign; monitor for symptoms and discontinue AV nodal blockers. [Ref 1]
3. Second-degree type II (Mobitz II) exhibits constant PR intervals with intermittent non-conducted P waves and carries a high risk of progression to complete block; correctly identifying Mobitz II is crucial as misinterpreted forms exist and it always requires pacing. [Ref 1, 2]
4. Third-degree (complete) AV block shows complete atrioventricular dissociation; atrial and ventricular rates are independent. Urgent pacing (temporary transvenous followed by permanent pacemaker) is indicated, especially if symptomatic or associated with MI. [Ref 1]
5. Evaluate for reversible causes including ischemia (especially inferior MI), medications (beta-blockers, calcium channel blockers, digoxin), electrolyte disturbances and infiltrative diseases. Treat underlying causes while arranging pacing. [Ref 1]

## Key Numbers
- PR interval >200 ms defines first-degree AV block; >300 ms may cause fatigue or presyncope. [Ref 1]
- In complete heart block, escape ventricular rhythm is usually 20–40 bpm; survival requires temporary pacing and eventual permanent pacemaker. [Ref 1]
- Mobitz II block is often infranodal (His-Purkinje) and progresses to complete block in up to 50 % of cases. [Ref 1]

## Teaching Pearl
Do not rely solely on atropine for high-grade or complete AV block because infranodal block may not respond; early involvement of electrophysiology and placement of a temporary pacemaker bridge to permanent pacing is essential. [Ref 1]

## Boards + Bedside Tie-In
Exams test identification of AV blocks from ECGs and appropriate acute management. Clinically, timely recognition and intervention prevent syncope, sudden death and complications such as torsades secondary to profound bradycardia.

## References
1. Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. *J Am Coll Cardiol.* 2019;74(7):932-987. doi:10.1016/j.jacc.2018.10.043 PMID: 30412710.
2. Barold SS, Herweg B. Mobitz type II second-degree atrioventricular block: a commonly overdiagnosed and misinterpreted arrhythmia. *Front Cardiovasc Med.* 2024;11:1450705. doi:10.3389/fcvm.2024.1450705 PMID: 39267806.

---

# Acute Decompensated Heart Failure Management

## Clinical Setup
A 72-year-old man with known HFrEF (EF 30 %) presents with acute dyspnea, orthopnea and bilateral crackles. He is hypertensive and has jugular venous distention. How should his acute decompensated heart failure (ADHF) be managed in the first few hours?

## Teaching Objectives
- Assess and stabilize patients with ADHF using the warm/cold and wet/dry profiles
- Implement evidence-based strategies for preload and afterload reduction and determine when inotropes or mechanical support are needed

## Teaching Points
1. Evaluate hemodynamic profile: most ADHF patients are “warm and wet” (adequate perfusion, volume overload). Provide supplemental oxygen and non-invasive ventilation if hypoxemic; monitor blood pressure, urine output and consider invasive monitoring for unclear profiles. [Ref 1]
2. Intravenous loop diuretics (furosemide 20–40 mg IV bolus for naïve patients or equivalent of home dose) are first-line to relieve congestion; double the dose if inadequate diuresis and monitor electrolytes and renal function. [Ref 2]
3. Vasodilators (nitroglycerin, nitroprusside) rapidly reduce preload and afterload in hypertensive ADHF; avoid if systolic BP <90 mm Hg or right ventricular infarction. For normotensive patients with persistent dyspnea, nitrates improve symptoms. [Ref 1]
4. Hypotensive “cold and wet” patients may need inotropes (dobutamine or milrinone) and vasopressors (norepinephrine) along with cautious diuresis; treat precipitating factors (ischemia, arrhythmia, infection) and evaluate for mechanical circulatory support. [Ref 1]
5. Avoid routine use of opioids, calcium channel blockers or non-invasive positive pressure ventilation in cardiogenic shock; manage comorbidities (e.g., atrial fibrillation, hypertensive emergency) concurrently. [Ref 1]

## Key Numbers
- Goal urine output: ≥0.5 mL/kg/hr; diuresis of 1–2 L/day indicates effective decongestion. [Ref 2]
- Furosemide IV dose should be 1–2.5 times the patient’s total daily oral dose; doubling the dose increases natriuresis without raising toxicity. [Ref 2]
- Nitrates reduce pulmonary capillary wedge pressure by ~15 % within minutes and improve dyspnea; start nitroglycerin infusion at 10–20 mcg/min and titrate. [Ref 1]

## Common Pitfall
Continuing high-dose intravenous diuretics without reassessing diuretic response can worsen renal function and electrolyte imbalance. Monitor urine sodium and adjust therapy; consider adding a thiazide-type diuretic or ultrafiltration if refractory to loop diuretics. [Ref 2]

## Boards + Bedside Tie-In
Exam questions often focus on initial management of decompensated HF and recognition of hemodynamic profiles. Clinically, a systematic approach (oxygenation, diuretics, vasodilators and addressing precipitating causes) reduces mortality and rehospitalization.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. Felker GM, Lee KL, Bull DA, et al. Diuretic strategies in patients with acute decompensated heart failure. *N Engl J Med.* 2011;364(9):797-805. doi:10.1056/NEJMoa1005419 PMID: 21366472.

---

# HFrEF: Guideline-Directed Medical Therapy

## Clinical Setup
A 58-year-old man with ischemic cardiomyopathy (EF 30 %) is seen in the clinic for management of chronic heart failure with reduced ejection fraction (HFrEF). He is currently taking lisinopril, metoprolol succinate and furosemide. What additional therapies should be implemented to optimize his care?

## Teaching Objectives
- Identify classes of drugs that improve survival and quality of life in HFrEF
- Sequence initiation and up-titration of guideline-directed medical therapy (GDMT)

## Teaching Points
1. Initiate an angiotensin receptor–neprilysin inhibitor (sacubitril/valsartan) in place of ACEI/ARB for symptomatic HFrEF to reduce cardiovascular death and HF hospitalization; the PARADIGM-HF trial demonstrated that sacubitril/valsartan reduced cardiovascular death or HF hospitalization by about 20 % compared with enalapril. [Ref 1, 2]
2. Continue evidence-based beta-blockers (carvedilol, metoprolol succinate, bisoprolol) and titrate to maximum tolerated doses; avoid initiation during acute decompensation. [Ref 1]
3. Add a mineralocorticoid receptor antagonist (spironolactone or eplerenone) for patients with EF ≤35 % and persistent symptoms despite ACEI/ARB/ARNI and beta-blocker; monitor renal function and potassium. [Ref 1]
4. Sodium–glucose cotransporter 2 (SGLT2) inhibitors (dapagliflozin or empagliflozin) reduce cardiovascular death and HF hospitalization independent of diabetes status; initiate in all eligible HFrEF patients. [Ref 1]
5. Hydralazine plus isosorbide dinitrate improves survival in African American patients with HFrEF despite ACEI and beta-blocker therapy or in those intolerant to ACEI/ARB/ARNI. Consider implantable cardioverter-defibrillator (ICD) for primary prevention if EF ≤35 % after ≥3 months of GDMT. [Ref 1]

## Key Numbers
- Sacubitril/valsartan reduces all-cause mortality by ~16 % compared with enalapril in the PARADIGM-HF trial; target dose 97/103 mg twice daily. [Ref 1]
- SGLT2 inhibitors lower the risk of cardiovascular death or HF hospitalization by ~25 % regardless of diabetes status. [Ref 1]
- Spironolactone reduces mortality by ~30 % in severe HF but increases hyperkalemia risk; monitor potassium and creatinine within 1 week of initiation and regularly thereafter. [Ref 1]

## Teaching Pearl
Initiate GDMT sequentially but expeditiously, starting with beta-blockers and ACEI/ARB/ARNI, then adding mineralocorticoid receptor antagonists and SGLT2 inhibitors. Frequent follow-up is key to titrate doses and monitor side effects. [Ref 1]

## Boards + Bedside Tie-In
Test questions may require knowing which medications improve survival in HFrEF and their sequencing. In clinical practice, comprehensive GDMT dramatically reduces mortality, hospitalizations and symptoms, making aggressive implementation essential.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. McMurray JJ, Packer M, Desai AS, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure. *N Engl J Med.* 2014;371(11):993-1004. doi:10.1056/NEJMoa1409077 PMID: 25176015.

---

# Diuretic Resistance: Assessment and Strategies

## Clinical Setup
A 75-year-old woman with chronic HFrEF is admitted with volume overload. After receiving high-dose IV furosemide, her urine output is minimal and she remains edematous. How should diuretic resistance be assessed and managed?

## Teaching Objectives
- Identify causes of diuretic resistance in heart failure
- Employ strategies to overcome resistance, including combination therapy and non-pharmacologic interventions

## Teaching Points
1. Diuretic resistance is multifactorial; consider inadequate dosing, poor gastrointestinal absorption (edema of gut), renal hypoperfusion, nephron remodeling and excessive sodium intake. Check medication adherence and restrict dietary sodium (<2 g/day) and fluid intake (1.5–2 L/day). [Ref 1]
2. Assess diuretic response by measuring urine output and spot urine sodium after a loop diuretic dose; urine sodium <50 mEq/L suggests diuretic resistance and may prompt dose escalation or combination therapy. [Ref 1]
3. Strategies include increasing loop diuretic dose (or switching to continuous infusion), combining with a thiazide-type diuretic (metolazone 2.5–10 mg orally or chlorothiazide 500 mg IV) to block distal sodium reabsorption, or adding acetazolamide for metabolic alkalosis. [Ref 1]
4. The DOSE trial demonstrated no difference in outcomes between bolus and continuous infusion, but higher doses achieved greater diuresis and symptom relief; adjust based on renal function and blood pressure. [Ref 2]
5. Consider ultrafiltration or peritoneal dialysis in refractory cases with severe volume overload despite maximal pharmacologic therapy; coordinate with nephrology and monitor for intravascular volume depletion. [Ref 1]

## Key Numbers
- Urine sodium <50 mEq/L after loop diuretic indicates poor natriuresis and suggests diuretic resistance. [Ref 1]
- Metolazone enhances sodium excretion; diuresis increases by ~1 L/day when combined with loop diuretics but risk of hyponatremia and hypokalemia necessitates close monitoring. [Ref 1]
- In the DOSE trial, high-dose furosemide (2.5 × home dose) resulted in greater weight loss (3.3 kg vs 2.0 kg) at 72 hours without increased adverse events. [Ref 2]

## Teaching Pearl
Early recognition of diuretic resistance allows timely escalation of therapy; check urine sodium and diuretic delivery, and consider sequential nephron blockade. Always monitor electrolytes and renal function when using combination diuretics. [Ref 1]

## Boards + Bedside Tie-In
Exams may ask about combination diuretic therapy and interpretations of urine sodium. Clinically, overcoming diuretic resistance improves congestion relief, quality of life and reduces hospital length of stay.

## References
1. Horiuchi Y, Wettersten N. Treatment strategies for diuretic resistance in patients with heart failure. *J Cardiol.* 2025;85(1):1-7. doi:10.1016/j.jjcc.2024.06.005 PMID: 38914279.
2. Felker GM, Lee KL, Bull DA, et al. Diuretic strategies in patients with acute decompensated heart failure. *N Engl J Med.* 2011;364(9):797-805. doi:10.1056/NEJMoa1005419 PMID: 21366472.

---

# Valvular Heart Disease: Recognizing High-Risk Features

## Clinical Setup
A 72-year-old man with known aortic stenosis reports worsening exertional dyspnea. His echocardiogram shows a peak aortic jet velocity of 4.5 m/s, mean gradient 50 mm Hg and valve area 0.8 cm². What high-risk features across valvular diseases necessitate urgent referral for valve intervention?

## Teaching Objectives
- Recognize high-risk features in aortic and mitral valve disease that prompt intervention
- Apply guideline thresholds to decide when to refer for surgery or transcatheter therapy

## Teaching Points
1. Severe aortic stenosis is defined by aortic valve area <1.0 cm², mean gradient ≥40 mm Hg or peak velocity ≥4.0 m/s; symptoms (angina, syncope, dyspnea) or left ventricular ejection fraction (LVEF) <50 % are high-risk features requiring valve replacement (surgical or transcatheter). [Ref 1, 2]
2. In chronic severe aortic regurgitation, intervention is indicated when LVEF ≤55 % or left ventricular end-systolic diameter ≥50 mm (or indexed >25 mm/m²) even if asymptomatic; symptoms with preserved EF also prompt surgery. [Ref 1]
3. Severe mitral regurgitation warrants repair or replacement if there are symptoms, LVEF 30–60 %, left ventricular end-systolic diameter ≥40 mm or pulmonary hypertension (>50 mm Hg at rest). Asymptomatic patients with new-onset atrial fibrillation or pulmonary hypertension are also candidates. [Ref 1]
4. Severe mitral stenosis (valve area ≤1.5 cm²) becomes high risk when symptoms occur, when pulmonary artery systolic pressure exceeds 50 mm Hg, or when there is new atrial fibrillation; percutaneous mitral balloon valvotomy or surgery is recommended. [Ref 1]
5. Always consider frailty, comorbidities and patient preferences; refer to a multidisciplinary Heart Valve Team for individualized decision making. [Ref 1]

## Key Numbers
- Aortic stenosis: valve area <1 cm² and mean gradient ≥40 mm Hg define severe stenosis; symptom onset portends ~50 % mortality at 2 years without intervention. [Ref 1]
- Severe aortic regurgitation: LVEF ≤55 % or LV end-systolic diameter ≥50 mm are surgical thresholds. [Ref 1]
- Mitral regurgitation: LVEF <60 % or left ventricular end-systolic diameter ≥40 mm indicate need for surgery even if asymptomatic. [Ref 1]

## Teaching Pearl
High-risk features may be present despite minimal symptoms. Regular surveillance echocardiography detects early changes in ventricular size and function; timely referral for intervention improves outcomes. [Ref 1]

## Boards + Bedside Tie-In
Exams often test numeric thresholds for severe valvular disease and indications for surgery. In practice, recognizing these thresholds and referring early to a valve team can prevent irreversible myocardial damage and improve survival.

## References
1. Otto CM, Nishimura RA, Bonow RO, et al. 2020 ACC/AHA guideline for the management of patients with valvular heart disease: executive summary. *Circulation.* 2021;143(5):e35-e71. doi:10.1161/CIR.0000000000000932 PMID: 33332149.
2. Mack MJ, Leon MB, Thourani VH, et al. Transcatheter aortic-valve replacement with a balloon-expandable valve in low-risk patients. *N Engl J Med.* 2019;380(18):1695-1705. doi:10.1056/NEJMoa1814052 PMID: 30883058.

---

# Hypertensive Emergency vs Urgency

## Clinical Setup
A 58-year-old woman presents to the emergency department with blood pressure 210/130 mm Hg but denies headache, visual changes or chest pain. Her exam is unremarkable and labs show normal creatinine. How do we differentiate hypertensive urgency from emergency, and what is the appropriate management?

## Teaching Objectives
- Distinguish hypertensive emergency from urgency based on presence of target-organ damage
- Implement safe blood pressure reduction strategies in each scenario

## Teaching Points
1. Hypertensive emergency is defined as severe blood pressure elevation (usually systolic ≥180 mm Hg or diastolic ≥120 mm Hg) with acute hypertension-mediated organ damage such as encephalopathy, intracerebral hemorrhage, acute ischemic stroke, acute coronary syndrome, acute heart failure, or acute kidney injury. Hypertensive urgency involves similar blood pressure levels but without target-organ damage. [Ref 1]
2. In hypertensive emergency, reduce mean arterial pressure by no more than 25 % within the first hour using intravenous agents (nicardipine, clevidipine, labetalol) and monitor closely; excessive rapid lowering risks cerebral or myocardial ischemia. [Ref 1]
3. Hypertensive urgencies do not require immediate IV therapy; blood pressure can be lowered gradually over 24–48 hours with oral medications (e.g., ACEI, calcium channel blockers) and close outpatient follow-up. [Ref 1]
4. Evaluate for secondary causes (pheochromocytoma, substance withdrawal, preeclampsia) and screen for end-organ injury with neurologic exam, funduscopic exam, urinalysis, creatinine, troponin and chest X-ray. [Ref 2]
5. Avoid sublingual nifedipine or immediate-release oral agents due to risk of precipitous blood pressure drops and ischemia; treatment should be tailored to the specific organ injury (e.g., aortic dissection requires rapid BP reduction to systolic 100–120 mm Hg with beta-blocker plus vasodilator). [Ref 1]

## Key Numbers
- Definition of severe hypertension: systolic ≥180 mm Hg or diastolic ≥120 mm Hg. [Ref 1]
- Initial BP reduction in hypertensive emergency: lower mean arterial pressure by up to 25 % in the first hour, then to 160/100 mm Hg over the next 2–6 hours. [Ref 1]
- In hypertensive urgency, BP should be lowered gradually to <160/100 mm Hg over 24–48 hours with oral agents. [Ref 1]

## Teaching Pearl
The term “hypertensive urgency” is being replaced by “severely elevated blood pressure without acute target-organ damage.” Many patients with severe asymptomatic hypertension can be managed safely as outpatients; focus on medication adherence, follow-up and addressing chronic hypertension. [Ref 1]

## Boards + Bedside Tie-In
Exams may ask you to recognize hypertensive emergencies and choose the appropriate IV agent. In clinical practice, rapidly identifying target-organ damage and tailoring therapy prevents morbidity and mortality.

## References
1. Bress AP, Anderson TS, Flack JM, et al. The management of elevated blood pressure in the acute care setting: a scientific statement from the American Heart Association. *Hypertension.* 2024;81(8):e94-e106. doi:10.1161/HYP.0000000000000238 PMID: 38804130.
2. Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA guideline for the prevention, detection, evaluation, and management of high blood pressure in adults. *Hypertension.* 2018;71(6):e13-e115. doi:10.1161/HYP.0000000000000065 PMID: 29133356.

`,Gp=`# COPD Exacerbation: Severity and Treatment

## Clinical Setup
A 68-year-old woman with chronic obstructive pulmonary disease (COPD) comes to the emergency department complaining of increasing dyspnea and productive cough. Her oxygen saturation on room air is 86% and she has audible wheezing. How do you classify the severity of this exacerbation and what interventions should be initiated?

## Teaching Objectives
- Classify COPD exacerbations and recognize when hospitalization is indicated
- Apply a stepwise management approach including bronchodilators, oxygen, steroids and antibiotics

## Teaching Points
1. Exacerbations are classified by treatment intensity: *mild* if relieved with short-acting bronchodilators alone, *moderate* if requiring systemic steroids and/or antibiotics, and *severe* if associated with respiratory failure or hospitalization [Ref 1].
2. Initial therapy includes inhaled short-acting beta2-agonists and anticholinergics given via metered-dose inhaler or nebulizer; these improve expiratory airflow and symptoms [Ref 1].
3. Administer controlled oxygen via nasal cannula or Venturi mask to maintain oxygen saturation 88-92%; avoid high-concentration oxygen which increases mortality in COPD due to worsening hypercapnia [Ref 2].
4. Give systemic glucocorticoids (e.g., prednisone 40 mg daily for 5 days) to shorten recovery time and reduce risk of relapse; a 5-day course is noninferior to a 14-day course [Ref 3].
5. Start antibiotics when there is increased sputum purulence, volume, or dyspnea, or in patients requiring mechanical ventilation; choose an agent active against *Haemophilus influenzae*, *Streptococcus pneumoniae* and *Moraxella catarrhalis* [Ref 1].

## Key Numbers
- Oxygen therapy target saturation: 88-92% to avoid carbon dioxide retention [Ref 2]
- Prednisone 40 mg orally daily for 5 days is noninferior to a 14-day course for preventing relapse [Ref 3]
- High-concentration oxygen (>6 L/min via non-rebreather) increases mortality in COPD exacerbations (number needed to harm approximately 14) [Ref 2]

## Common Pitfall
Using high-concentration oxygen or failing to titrate oxygen causes worsening hypercapnia and increased mortality in COPD exacerbations. Always titrate oxygen to the 88-92% target and reassess arterial blood gases to prevent CO2 narcosis [Ref 2].

## Boards + Bedside Tie-In
Exam questions often test recognition of COPD exacerbation severity and appropriate use of steroids and antibiotics. Clinically, being able to classify an exacerbation and deliver a standardized bundle (bronchodilators, controlled oxygen, short-course steroids and antibiotics) improves outcomes and reduces hospitalization.

## References
1. Carlin BW. Exacerbations of COPD. Respir Care. 2023;68(7):961-972. doi:10.4187/respcare.10782 PMID: 37353338
2. Pilcher J, Beasley R. Acute use of oxygen therapy. Aust Prescr. 2015;38(3):98-100. doi:10.18773/austprescr.2015.033 PMID: 26648631
3. Leuppi JD, Schuetz P, Bingisser R, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of chronic obstructive pulmonary disease: The REDUCE randomized clinical trial. JAMA. 2013;309(21):2223-2231. doi:10.1001/jama.2013.5023 PMID: 23695200

---

# Asthma Exacerbation: Inpatient Management

## Clinical Setup
A 30-year-old man with a history of asthma presents with wheezing and shortness of breath after exposure to a friend's cat. In the emergency department he requires repeated albuterol nebulizations and supplemental oxygen to maintain an oxygen saturation of 94%. What medications and monitoring are indicated in the first 24 hours?

## Teaching Objectives
- Manage moderate to severe asthma exacerbations using inhaled bronchodilators, systemic steroids and adjunctive therapies
- Recognize appropriate oxygen saturation targets and avoid unnecessary investigations or medications

## Teaching Points
1. Begin with repeated short-acting beta2-agonist (e.g., albuterol) therapy and add inhaled anticholinergics (ipratropium) for moderate to severe attacks; early frequent dosing improves lung function and reduces hospital admissions [Ref 1].
2. Start systemic corticosteroids promptly (e.g., oral prednisolone 40-50 mg daily for 5-7 days for adults or 1-2 mg/kg up to 40 mg for children) to reduce inflammation and prevent relapse; tapering is unnecessary for courses under 2 weeks [Ref 1].
3. Provide controlled oxygen to maintain saturations 93-95% in adults (94-98% in children); avoid both hypoxia and hyperoxia and continuously monitor saturation [Ref 1].
4. Consider intravenous magnesium sulfate (2 g over 20 minutes) for severe exacerbations unresponsive to initial bronchodilators and steroids; it relaxes airway smooth muscle and can avert intubation [Ref 1].
5. Do not routinely order chest radiographs, arterial blood gases, antibiotics or sedatives unless complications (e.g., pneumothorax, infection) are suspected; unnecessary tests can delay care and increase costs [Ref 1].

## Key Numbers
- Prednisolone dose: 40-50 mg daily for 5-7 days in adults; 1-2 mg/kg (max 40 mg) for 3-5 days in children [Ref 1]
- Oxygen saturation target: 93-95% (adults) or 94-98% (children) [Ref 1]
- Intravenous magnesium sulfate 2 g over 20 minutes for severe exacerbations [Ref 1]

## Teaching Pearl
Early administration of systemic corticosteroids (ideally within the first hour of presentation) shortens the duration of the exacerbation and reduces the need for hospitalization. Delay beyond two hours is associated with longer hospital stays and higher relapse rates [Ref 1].

## Boards + Bedside Tie-In
Exams often query the sequencing of therapies in severe asthma. At the bedside, a mental checklist (SABA, ipratropium, steroids, oxygen titration, consider magnesium) ensures essential therapies are delivered promptly while avoiding unnecessary tests.

## References
1. Global Initiative for Asthma (GINA). Global strategy for asthma management and prevention. 2023 Report. Available from: https://ginasthma.org
2. Alangari A, Alhazzani W, Al-Mahdi M. Management of asthma exacerbation in the emergency departments. Int J Pediatr Adolesc Med. 2019;6(3):109-114. doi:10.1016/j.ijpam.2019.07.001 PMID: 31388549

---

# Oxygen Delivery Systems and Targets

## Clinical Setup
A 55-year-old man with pneumonia is hypoxic, with oxygen saturation of 88% on room air. You need to choose an appropriate oxygen delivery device and target saturation range. How do you match devices to patient needs and set appropriate goals?

## Teaching Objectives
- Compare common oxygen delivery devices and select an appropriate device based on flow requirements
- Specify target oxygen saturation ranges for different patient populations

## Teaching Points
1. Low-flow nasal cannula delivers 1-6 L/min with a fraction of inspired oxygen (FiO2) of approximately 24-44%; it is comfortable and suitable for patients needing modest oxygen supplementation [Ref 1].
2. Simple face masks require 6-10 L/min to avoid rebreathing CO2 and provide FiO2 around 28-50%; non-rebreather masks deliver 10-15 L/min with FiO2 up to 60-80% for short-term use in severe hypoxemia [Ref 1].
3. High-flow nasal oxygen systems deliver up to 60 L/min and 100% FiO2 with heated, humidified gas; they improve mucociliary clearance and can provide low levels of positive end-expiratory pressure [Ref 1].
4. For most acutely ill patients without chronic hypercapnia, target oxygen saturation is 94-98%; in patients at risk of hypercapnic respiratory failure (e.g., COPD, severe obesity-hypoventilation) target 88-92% to avoid worsening hypercapnia [Ref 2].
5. Oxygen is a drug that should be prescribed with a target saturation range; reassess saturations and arterial blood gases after initiating therapy and adjust device or flow accordingly [Ref 2].

## Key Numbers
- Nasal cannula: 1-6 L/min, FiO2 24-44% [Ref 1]
- Simple mask: 6-10 L/min, FiO2 28-50%; non-rebreather: 10-15 L/min, FiO2 60-80% [Ref 1]
- High-flow nasal oxygen: up to 60 L/min, FiO2 21-100% [Ref 1]

## Common Pitfall
Failing to set a target saturation range leads to both hypoxemia and hyperoxia. Hyperoxia can cause vasoconstriction and increased oxidative stress, while uncontrolled high-flow oxygen in COPD precipitates CO2 retention. Always write an order with the device, flow rate and target SpO2 range [Ref 2].

## Boards + Bedside Tie-In
Exams frequently test the differences among oxygen delivery devices and appropriate SpO2 targets in COPD versus other conditions. Clinically, understanding flow capabilities and FiO2 helps you select the right device and titrate therapy safely for your patient.

## References
1. O'Driscoll BR, Howard LS, Earis J, Mak V. British Thoracic Society guideline for oxygen use in adults in healthcare and emergency settings. BMJ Open Respir Res. 2017;4(1):e000170. doi:10.1136/bmjresp-2016-000170 PMID: 28883921
2. Siemieniuk RAC, Chu DK, Kim LH, et al. Oxygen therapy for acutely ill medical patients: a clinical practice guideline. BMJ. 2018;363:k4169. doi:10.1136/bmj.k4169 PMID: 30355567

---

# Noninvasive Respiratory Support: Device Selection

## Clinical Setup
An 80-year-old man with a history of chronic heart failure develops acute pulmonary edema with respiratory distress and oxygen saturation of 82% despite 15 L/min via non-rebreather mask. He is hemodynamically stable but tachypneic. How do you choose among high-flow nasal oxygen, continuous positive airway pressure (CPAP) and bilevel positive airway pressure (BiPAP)?

## Teaching Objectives
- Differentiate indications for CPAP, BiPAP and high-flow nasal therapy in acute respiratory failure
- Recognize the evidence-based benefits and limitations of noninvasive ventilation

## Teaching Points
1. High-flow nasal therapy (HFNT) delivers warmed, humidified oxygen at 30-60 L/min and is first-line for de novo acute hypoxemic respiratory failure (e.g., pneumonia, COVID-19) because it improves oxygenation and patient comfort; it may also reduce intubation rates compared with conventional oxygen [Ref 1].
2. CPAP provides continuous positive airway pressure via facemask and is indicated for cardiogenic pulmonary edema or obstructive sleep apnea exacerbations; it recruits alveoli and reduces preload and afterload, improving oxygenation [Ref 1].
3. BiPAP (bilevel positive airway pressure) delivers separate inspiratory and expiratory pressures and is preferred for hypercapnic respiratory failure with respiratory acidosis, such as COPD exacerbations, to decrease work of breathing and CO2 levels [Ref 1].
4. A meta-analysis of noninvasive ventilation demonstrated that noninvasive positive pressure ventilation significantly reduces the need for intubation and ICU mortality compared with conventional therapy; however, benefits for hospital mortality or length of stay were not statistically significant [Ref 2].
5. Contraindications to noninvasive ventilation include hemodynamic instability, inability to protect the airway, severe encephalopathy and facial trauma; early identification of failure and timely intubation are critical [Ref 1].

## Key Numbers
- HFNT flow range: 30-60 L/min, FiO2 up to 100% [Ref 1]
- Pooled risk ratio for intubation with noninvasive ventilation: 0.43 (95% CI 0.32-0.57) compared with conventional therapy [Ref 2]
- Pooled risk ratio for mortality reduction: 0.55 (95% CI 0.40-0.78) compared with conventional therapy [Ref 2]

## Teaching Pearl
Selecting the appropriate device is driven by the underlying pathophysiology: HFNT for hypoxemic respiratory failure, CPAP for cardiogenic edema or hypoxic COVID-19, and BiPAP for hypercapnic states. Starting the wrong modality delays effective therapy and increases risk of intubation [Ref 1].

## Boards + Bedside Tie-In
Knowledge of noninvasive ventilation indications and contraindications is increasingly tested on board exams. At the bedside, early application of the appropriate modality, coupled with close monitoring for improvement, can avert invasive ventilation and reduce ICU mortality.

## References
1. Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426. doi:10.1183/13993003.02426-2016 PMID: 28860265
2. Masip J, Roque M, Sánchez B, et al. Noninvasive ventilation in acute cardiogenic pulmonary edema: systematic review and meta-analysis. JAMA. 2005;294(24):3124-3130. doi:10.1001/jama.294.24.3124 PMID: 16380593

---

# Pleural Effusion: Diagnostic Approach

## Clinical Setup
A 62-year-old woman with a history of congestive heart failure presents with dyspnea. Chest radiograph shows a moderate left-sided pleural effusion. How do you determine whether the effusion is transudative or exudative, and what diagnostic studies should be ordered?

## Teaching Objectives
- Apply Light's criteria to classify pleural fluid and guide management
- Identify essential diagnostic tests and recognize when additional tests (e.g., NT-proBNP) are needed

## Teaching Points
1. Perform thoracentesis unless heart failure is strongly suspected and the effusion resolves with diuresis; send pleural fluid for protein, lactate dehydrogenase (LDH), pH, glucose, cell count with differential and Gram stain/culture [Ref 1, 2].
2. Use Light's criteria to classify exudates: pleural fluid protein/serum protein ratio >0.5, pleural fluid LDH/serum LDH ratio >0.6, or pleural LDH >2/3 the upper limit of normal; meeting any criterion identifies an exudate [Ref 1].
3. Transudates are typically due to heart failure, cirrhosis or nephrotic syndrome; exudates result from infection, malignancy or inflammatory conditions and often require further evaluation such as cytology or pleural biopsy [Ref 1].
4. Light's criteria may misclassify some heart failure effusions as exudates after diuresis; measurement of serum-pleural fluid albumin or protein gradients or NT-proBNP can improve diagnostic accuracy in suspected cardiac cases [Ref 2].
5. A pleural fluid pH <7.2 or glucose <60 mg/dL suggests complicated parapneumonic effusion or empyema and mandates prompt chest tube drainage in addition to antibiotics [Ref 2].

## Key Numbers
- Pleural fluid protein/serum protein ratio >0.5 or LDH ratio >0.6 defines an exudate [Ref 1]
- Pleural pH <7.2 indicates the need for drainage of parapneumonic effusion [Ref 2]
- NT-proBNP >1,500 pg/mL in pleural fluid helps confirm heart failure-related effusions [Ref 2]

## Common Pitfall
Relying solely on chest radiographs or failing to analyze pleural fluid can lead to misclassification. Likewise, performing thoracentesis after diuresis may falsely elevate protein concentrations and label a transudate as an exudate. When heart failure is strongly suspected, consider checking serum-pleural albumin gradient or NT-proBNP before tapping [Ref 2].

## Boards + Bedside Tie-In
Board questions often ask about Light's criteria and the next step when an exudate is identified. Clinically, timely thoracentesis with appropriate fluid studies guides therapy and avoids missed diagnoses such as malignancy or empyema.

## References
1. Light RW, MacGregor MI, Luchsinger PC, Ball WC Jr. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972;77(4):507-513. doi:10.7326/0003-4819-77-4-507 PMID: 4642731
2. Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax. 2023;78(11):1143-1156. doi:10.1136/thorax-2023-220304 PMID: 37553157

---

# AKI: Distinguishing Prerenal from Intrinsic

## Clinical Setup
A 77-year-old man presents with oliguria and rising serum creatinine after several days of vomiting and diarrhea. Laboratory studies show blood urea nitrogen (BUN) 60 mg/dL and creatinine 2.0 mg/dL. How can you differentiate prerenal azotemia from intrinsic acute kidney injury (AKI), and what initial management is indicated?

## Teaching Objectives
- Interpret laboratory indices such as fractional excretion of sodium (FENa) and urea (FEUrea) to distinguish prerenal from intrinsic AKI
- Initiate appropriate fluid resuscitation and avoid nephrotoxic agents while the cause is being identified

## Teaching Points
1. Prerenal AKI results from decreased renal perfusion (e.g., volume depletion, heart failure); intrinsic AKI results from tubular, glomerular or vascular injury. A FENa <1% suggests prerenal azotemia, while FENa >2% suggests intrinsic tubular injury [Ref 1].
2. FENa may be unreliable in patients on diuretics; in such cases calculate the fractional excretion of urea (FEUrea): values <35% suggest prerenal AKI, whereas values >50% suggest intrinsic AKI [Ref 1].
3. A BUN/creatinine ratio >20:1 supports prerenal AKI, whereas intrinsic renal injury often has a lower ratio due to impaired tubular reabsorption of urea [Ref 1].
4. Urinalysis aids differentiation: bland sediment and hyaline casts are common in prerenal states; muddy brown granular casts and tubular epithelial cells suggest acute tubular necrosis [Ref 1, 2].
5. Initial management includes discontinuing nephrotoxic medications, ensuring adequate hemodynamic support and administering isotonic crystalloid to restore perfusion; avoid excessive fluids if there is concern for cardiogenic shock [Ref 2].

## Key Numbers
- Fractional excretion of sodium (FENa) <1% indicates prerenal AKI; >2% suggests intrinsic AKI [Ref 1]
- Fractional excretion of urea (FEUrea) <35% suggests prerenal AKI; >50% suggests intrinsic AKI [Ref 1]
- BUN/Cr ratio >20:1 supports prerenal azotemia [Ref 1]

## Teaching Pearl
FENa calculations are inaccurate if diuretics were recently administered. In such cases, FEUrea provides a more reliable index for distinguishing prerenal azotemia from intrinsic AKI [Ref 1].

## Boards + Bedside Tie-In
Exam questions often require interpretation of FENa, FEUrea and urinalysis to localize the site of AKI. Clinically, differentiating prerenal from intrinsic AKI guides management: volume repletion reverses prerenal azotemia, whereas intrinsic injury may require nephrology consultation and avoidance of further insults.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Kellum JA, Lameire N; KDIGO AKI Guideline Work Group. Diagnosis, evaluation, and management of acute kidney injury: a KDIGO summary (Part 1). Crit Care. 2013;17(1):204. doi:10.1186/cc11454 PMID: 23394211

---

# Contrast-Induced Nephropathy: Prevention

## Clinical Setup
A 70-year-old woman with chronic kidney disease stage 3 is scheduled for coronary angiography. Her creatinine is 1.6 mg/dL and she takes lisinopril and metformin. What strategies can minimize her risk of contrast-induced acute kidney injury (CI-AKI)?

## Teaching Objectives
- Implement evidence-based prophylactic measures to prevent CI-AKI
- Identify medications that should be withheld or initiated around the time of contrast exposure

## Teaching Points
1. Use isotonic saline (0.9% sodium chloride) at 1-1.5 mL/kg/h for 3-12 hours before and 6-24 hours after contrast exposure; periprocedural hydration is the most effective prophylaxis [Ref 1].
2. Avoid nephrotoxic agents (non-steroidal anti-inflammatory drugs, aminoglycosides), and hold renin-angiotensin system inhibitors and diuretics on the day of the procedure when feasible; ensure adequate hydration before resuming [Ref 1].
3. High-dose statin therapy (e.g., atorvastatin 80 mg) should be initiated or intensified because statins have pleiotropic renal protective effects with low risk [Ref 1].
4. Goal-directed hydration using left ventricular end-diastolic pressure or urine flow measurements (POSEIDON strategy) can reduce CI-AKI compared with fixed-rate fluids (incidence 6.7% vs 16.3%) [Ref 2].
5. Sodium bicarbonate solutions and N-acetylcysteine have not shown benefit over isotonic saline in large trials and are not recommended as sole preventive therapies; their routine use is discouraged [Ref 1].

## Key Numbers
- Isotonic saline rate: 1-1.5 mL/kg/h for 3-12 hours pre-procedure and 6-24 hours post-procedure [Ref 1]
- Goal-directed hydration (POSEIDON trial): CI-AKI 6.7% vs 16.3% with standard hydration [Ref 2]
- High-dose statin therapy reduces risk of CI-AKI and is cost-effective [Ref 1]

## Common Pitfall
Using sodium bicarbonate infusion or N-acetylcysteine alone without adequate hydration does not prevent CI-AKI. Reliance on these interventions may provide false reassurance and delay effective prophylaxis [Ref 1].

## Boards + Bedside Tie-In
Board exams may test the relative efficacy of hydration strategies and the lack of benefit from bicarbonate or N-acetylcysteine. Clinically, careful pre-procedural assessment and isotonic fluid administration are the mainstays of prevention, especially in high-risk patients with chronic kidney disease.

## References
1. Sůva M, Kala P, Polansky P, et al. Contrast-induced acute kidney injury and its contemporary prevention. Front Cardiovasc Med. 2022;9:1073072. doi:10.3389/fcvm.2022.1073072 PMID: 36561776
2. Brar SS, Aharonian V, Mansukhani P, et al. Haemodynamic-guided fluid administration for the prevention of contrast-induced acute kidney injury: the POSEIDON randomised controlled trial. Lancet. 2014;383(9931):1814-1823. doi:10.1016/S0140-6736(14)60689-9 PMID: 24856027

---

# CKD Complications: What to Monitor

## Clinical Setup
A 64-year-old man with chronic kidney disease (CKD) stage 3b and diabetes comes for routine follow-up. His estimated glomerular filtration rate (eGFR) is 40 mL/min/1.73 m2. What laboratory tests and clinical parameters should be monitored to detect complications and slow CKD progression?

## Teaching Objectives
- Identify key laboratory and clinical parameters to monitor in patients with CKD stages 3-5
- Recognize interventions that reduce cardiovascular and renal risk in CKD

## Teaching Points
1. Check serum creatinine and eGFR at least twice yearly to monitor disease progression; assess urinary albumin-to-creatinine ratio annually to detect albuminuria and adjust therapy accordingly [Ref 1, 2].
2. Monitor hemoglobin annually for anemia beginning at CKD stage 3; evaluate for iron deficiency and consider erythropoiesis-stimulating agents when hemoglobin is less than 10 g/dL and iron stores are adequate [Ref 2].
3. Assess calcium, phosphate, parathyroid hormone (PTH) and 25-hydroxyvitamin D levels in CKD stages 3a-5 to detect mineral bone disorder; treat with dietary phosphate restriction, vitamin D analogues and calcimimetics as indicated [Ref 2].
4. Optimize blood pressure control to less than 140/90 mmHg or less than 120 mmHg if tolerated using renin-angiotensin system inhibitors and sodium-glucose cotransporter 2 (SGLT2) inhibitors; both slow progression of diabetic and non-diabetic CKD [Ref 2].
5. Avoid nephrotoxic agents and contrast media; use caution with medications cleared by the kidney (e.g., metformin) and adjust doses based on eGFR [Ref 1].

## Key Numbers
- Annual hemoglobin measurement starting at CKD stage 3 [Ref 2]
- Target blood pressure: less than 140/90 mmHg; consider less than 120 mmHg if tolerated [Ref 2]
- SGLT2 inhibitors reduce risk of kidney disease progression and cardiovascular events in CKD [Ref 2]

## Teaching Pearl
Bone-mineral disorder often begins early in CKD; monitoring PTH, calcium, phosphate and vitamin D allows timely initiation of phosphate binders or calcimimetics, reducing fracture risk and vascular calcification [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize recognition of CKD complications such as anemia, bone-mineral disorder and cardiovascular risk. In practice, regular monitoring and optimization of blood pressure, glycemic control and medication dosing are key to slowing progression and improving patient outcomes.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 clinical practice guideline for the evaluation and management of chronic kidney disease. Kidney Int. 2024;105(4S):S117-S314. doi:10.1016/j.kint.2023.10.018 PMID: 38490803

---

# Indications for Urgent Dialysis

## Clinical Setup
A 58-year-old man admitted with sepsis develops oliguric AKI with creatinine rising from 1.0 to 4.5 mg/dL over two days. He is now confused with potassium 6.8 mEq/L, peaked T waves on ECG, and arterial pH 7.05. When should renal replacement therapy be initiated?

## Teaching Objectives
- Recognize absolute and relative indications for urgent renal replacement therapy in acute kidney injury
- Apply the AEIOU mnemonic to remember emergent indications for dialysis

## Teaching Points
1. Acidosis: Refractory metabolic acidosis (pH <7.1 despite bicarbonate therapy) warrants dialysis to remove acid and restore acid-base balance [Ref 1].
2. Electrolyte abnormalities: Severe hyperkalemia (K >6 mEq/L or with electrocardiographic changes) or other life-threatening electrolyte disturbances require immediate dialysis [Ref 1].
3. Ingestion: Dialyzable toxin ingestions (e.g., lithium, ethylene glycol, methanol, salicylates) are indications for urgent dialysis [Ref 1].
4. Overload: Pulmonary edema or refractory fluid overload despite diuretics necessitates dialysis to remove excess volume [Ref 1].
5. Uremia: Clinical manifestations such as encephalopathy, seizures, pericarditis or significant bleeding due to platelet dysfunction are indications for urgent dialysis; a blood urea nitrogen >100 mg/dL, even without symptoms, is often used as a threshold [Ref 1].

## Key Numbers
- Hyperkalemia threshold: >6 mEq/L with ECG changes requires dialysis [Ref 1]
- Severe acidosis: pH <7.1 despite bicarbonate therapy indicates dialysis [Ref 1]
- BUN >100 mg/dL may warrant dialysis even in absence of symptoms [Ref 1]

## Teaching Pearl
The AEIOU mnemonic summarizes emergent indications for dialysis: Acidosis, Electrolytes, Ingestion, Overload, Uremia. Recognizing these conditions and initiating timely renal replacement therapy can be life-saving [Ref 1].

## Boards + Bedside Tie-In
Exams frequently use case scenarios with hyperkalemia or uremic encephalopathy to test dialysis indications. In real life, early consultation with nephrology and prompt initiation of dialysis based on AEIOU criteria prevent catastrophic complications.

## References
1. Gaudry S, Hajage D, Schortgen F, et al. Initiation strategies for renal-replacement therapy in the intensive care unit. N Engl J Med. 2016;375(2):122-133. doi:10.1056/NEJMoa1603017 PMID: 27181456
2. Kellum JA, Lameire N; KDIGO AKI Guideline Work Group. Diagnosis, evaluation, and management of acute kidney injury: a KDIGO summary (Part 1). Crit Care. 2013;17(1):204. doi:10.1186/cc11454 PMID: 23394211

---

# Medication-Induced Nephrotoxicity: Prevention

## Clinical Setup
A 72-year-old woman with hypertension and osteoarthritis is prescribed ibuprofen and started on an ACE inhibitor and a diuretic for hypertension. One week later she develops fatigue and reduced urine output; her creatinine rises from 1.2 to 2.5 mg/dL. How can medication-induced nephrotoxicity be prevented and recognized early?

## Teaching Objectives
- Identify risk factors and high-risk drug combinations that predispose patients to nephrotoxicity
- Implement strategies to prevent nephrotoxicity and monitor renal function during drug therapy

## Teaching Points
1. Advanced age (>60 years), baseline renal insufficiency, volume depletion, diabetes mellitus, congestive heart failure and sepsis increase susceptibility to drug-induced nephrotoxicity; minimize nephrotoxin exposure in these populations [Ref 1, 2].
2. The "triple whammy" of non-steroidal anti-inflammatory drugs (NSAIDs), ACE inhibitors or angiotensin receptor blockers (ARBs), and diuretics can cause synergistic declines in glomerular filtration; avoid this combination when possible or monitor closely [Ref 1].
3. Obtain baseline serum creatinine and estimate glomerular filtration rate before starting potentially nephrotoxic drugs (e.g., aminoglycosides, amphotericin B, calcineurin inhibitors); adjust doses based on renal function and monitor serum levels when appropriate [Ref 2].
4. Ensure adequate hydration and correct modifiable risk factors (hypotension, hypovolemia); avoid concomitant use of multiple nephrotoxic agents and limit duration of therapy; regularly monitor creatinine, BUN and urine output during treatment [Ref 1].
5. Early recognition of rising creatinine or decreasing urine output should prompt dose adjustment or discontinuation of the offending drug to prevent progression to severe AKI; most drug-induced nephrotoxicity is reversible if caught early [Ref 2].

## Key Numbers
- Advanced age (>60 years) and pre-existing renal disease significantly increase risk of nephrotoxicity [Ref 1]
- "Triple whammy" (NSAID + ACE/ARB + diuretic) is the most common drug combination causing AKI [Ref 1]
- Monitoring renal function every 48-72 hours after initiating high-risk drugs helps detect toxicity early [Ref 2]

## Common Pitfall
Prescribing NSAIDs in patients on ACE inhibitors and diuretics without counseling on hydration or monitoring renal function leads to rapid decline in glomerular filtration rate. Always review medication lists and educate patients to avoid over-the-counter NSAIDs [Ref 1].

## Boards + Bedside Tie-In
Examinations often ask about drug combinations that precipitate AKI. In practice, vigilant review of the medication list, avoidance of nephrotoxin combinations and regular monitoring of renal function protect patients from iatrogenic kidney injury.

## References
1. Naughton CA. Drug-induced nephrotoxicity. Am Fam Physician. 2008;78(6):743-750. PMID: 18819242
2. Perazella MA. Drug-induced acute kidney injury: diverse mechanisms of tubular injury. Curr Opin Crit Care. 2019;25(6):550-557. doi:10.1097/MCC.0000000000000653 PMID: 31483318

---

# IV Fluid Selection: Saline vs Balanced Solutions

## Clinical Setup
A 65-year-old man admitted for sepsis has received 3 L of normal saline for resuscitation and now develops metabolic acidosis with a serum chloride of 115 mEq/L and worsening creatinine. You consider switching to a balanced crystalloid solution. What evidence guides the choice between saline and balanced fluids?

## Teaching Objectives
- Compare the effects of normal saline and balanced crystalloid solutions on renal outcomes
- Apply evidence from clinical trials to fluid resuscitation in critically ill and non-critically ill patients

## Teaching Points
1. Normal saline contains 154 mEq/L of chloride; large volumes can cause hyperchloremic metabolic acidosis and renal vasoconstriction leading to decreased glomerular filtration rate [Ref 1].
2. Balanced crystalloid solutions (e.g., lactated Ringer's, Plasma-Lyte) have electrolyte compositions closer to plasma and lower chloride content; they may reduce risk of acute kidney injury and electrolyte disturbances [Ref 1].
3. In the SALT-ED trial of noncritically ill adults receiving intravenous fluids in the emergency department, balanced crystalloids reduced the incidence of major adverse kidney events within 30 days compared with saline (4.7% vs 5.6%; adjusted odds ratio 0.82) without affecting hospital-free days [Ref 2].
4. The SMART trial in critically ill patients found a similar absolute risk reduction of 1.1% for major adverse kidney events with balanced fluids compared with saline and no significant difference in mortality, suggesting a modest renal benefit [Ref 3].
5. Current guidelines suggest using balanced crystalloids for fluid resuscitation in most adults, especially those at risk for kidney injury or requiring large volumes; normal saline remains appropriate for patients with traumatic brain injury or hyponatremia because of its higher sodium content [Ref 1].

## Key Numbers
- Major adverse kidney events within 30 days: 4.7% with balanced crystalloids vs 5.6% with saline (adjusted OR 0.82) [Ref 2]
- Absolute risk reduction for AKI in critically ill patients: approximately 1.1% with balanced crystalloids [Ref 3]
- Normal saline chloride concentration: 154 mEq/L; Plasma-Lyte chloride: 98 mEq/L [Ref 1]

## Teaching Pearl
Although the absolute risk reduction for kidney injury with balanced fluids is small, the potential benefit and low cost make them the default choice for most resuscitations. However, normal saline remains appropriate in circumstances such as traumatic brain injury, severe hyponatremia or metabolic alkalosis [Ref 1].

## Boards + Bedside Tie-In
Board questions may focus on trial results comparing saline and balanced solutions. At the bedside, awareness of the modest renal benefits and specific contraindications guides choice of crystalloid therapy in critically ill and emergency patients.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Self WH, Semler MW, Wanderer JP, et al. Balanced crystalloids versus saline in noncritically ill adults. N Engl J Med. 2018;378(9):819-828. doi:10.1056/NEJMoa1711586 PMID: 29485926
3. Semler MW, Self WH, Wanderer JP, et al; SMART Investigators. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018;378(9):829-839. doi:10.1056/NEJMoa1711584 PMID: 29485925

---

# Assessing Volume Status at the Bedside

## Clinical Setup
A 75-year-old woman with chronic heart failure is admitted for weakness and poor oral intake. She appears frail, with dry mucous membranes and mild pedal edema. You need to decide whether she is volume depleted or overloaded before administering fluids or diuretics.

## Teaching Objectives
- Integrate physical examination, laboratory tests and point-of-care ultrasound (POCUS) to assess volume status
- Recognize limitations of individual findings and use a multimodal approach for accuracy

## Teaching Points
1. Traditional physical exam findings include skin turgor, axillary sweat, mucous membrane dryness, orthostatic vital signs, jugular venous distension (JVD), pulmonary crackles and peripheral edema; no single sign is sensitive or specific for volume status [Ref 1].
2. Jugular venous pressure (JVP) is measured with the patient semi-recumbent at 30-45 degrees; add 5 cm to the vertical height of venous pulsation above the sternal angle. JVP >8 cm H2O suggests elevated central venous pressure (specificity 93-96%), while JVP <5 cm suggests low venous pressure (sensitivity 90%) [Ref 2].
3. Peripheral edema has low sensitivity for volume overload and may be present in hypoalbuminemia or venous insufficiency; bilateral crackles on lung exam have only approximately 51% sensitivity for pulmonary edema [Ref 2].
4. Laboratory tests such as serum B-type natriuretic peptide (BNP) and N-terminal pro-BNP aid in diagnosing volume overload (higher levels correlate with elevated filling pressures), but values are less reliable in renal failure or obesity; trending values can guide therapy [Ref 2].
5. Point-of-care ultrasound assessing the inferior vena cava diameter and collapsibility, lung B-lines and cardiac function provides dynamic information and is increasingly used to complement physical examination for volume assessment [Ref 1].

## Key Numbers
- JVP >8 cm H2O indicates elevated central venous pressure with specificity approximately 93-96% [Ref 2]
- JVP <5 cm H2O suggests low central venous pressure with sensitivity approximately 90% [Ref 2]
- Lung crackles for pulmonary edema have sensitivity approximately 51% [Ref 2]

## Teaching Pearl
No single clinical sign reliably determines volume status. Combining physical exam findings, laboratory markers and point-of-care ultrasound yields the most accurate assessment and prevents mismanagement of fluids or diuretics [Ref 1].

## Boards + Bedside Tie-In
Board questions may ask about the significance of JVP measurements or limitations of edema in assessing volume status. In clinical practice, integrating bedside ultrasound into the assessment improves accuracy and guides safe fluid or diuretic therapy.

## References
1. Miller A, Mandeville J. Predicting and measuring fluid responsiveness with echocardiography. Echo Res Pract. 2016;3(2):G1-G12. doi:10.1530/ERP-16-0008 PMID: 27249550
2. McGee S, Abernethy WB, Simel DL. Is this patient hypovolemic? JAMA. 1999;281(11):1022-1029. doi:10.1001/jama.281.11.1022 PMID: 10086438

---

# Hypernatremia: Workup and Management

## Clinical Setup
A 70-year-old nursing home resident with dementia is brought to the hospital for confusion and lethargy. Her serum sodium is 162 mEq/L. She has dry mucous membranes and decreased urine output. What is the appropriate approach to evaluating and managing her hypernatremia?

## Teaching Objectives
- Identify the underlying cause of hypernatremia and differentiate water deficit from sodium overload
- Initiate safe correction of hypernatremia while avoiding cerebral edema

## Teaching Points
1. Hypernatremia almost always reflects free water deficit; classify as hypovolemic, euvolemic or hypervolemic based on volume status. Hypovolemic hypernatremia results from unreplaced fluid losses (e.g., diarrhea, diuretics); euvolemic from diabetes insipidus; hypervolemic from sodium overload (e.g., hypertonic saline, sodium bicarbonate) [Ref 1, 2].
2. Calculate the free water deficit: Water deficit (L) approximately equals (current Na/140 minus 1) times body weight (kg) times 0.6 (men) or 0.5 (women). Replace half of the deficit in the first 24 hours and the rest over the next 24-48 hours [Ref 2].
3. Do not lower serum sodium by more than 10-12 mEq/L per 24 hours or 0.5 mEq/L per hour; rapid correction risks cerebral edema and seizures due to cerebral osmolyte accumulation [Ref 2].
4. Initial therapy for hypovolemic hypernatremia is isotonic fluid (0.9% saline) to restore hemodynamic stability; once euvolemic, switch to hypotonic solutions (e.g., 5% dextrose, half-normal saline) or enteral free water to replace the calculated deficit [Ref 1].
5. Monitor serum sodium every 2-4 hours and adjust infusion rates accordingly; treat underlying causes such as infection, diuretics or diabetes insipidus (with desmopressin) [Ref 2].

## Key Numbers
- Maximum sodium correction rate: 10-12 mEq/L or less per 24 hours (0.5 mEq/L or less per hour) [Ref 2]
- Replace half of calculated water deficit in first 24 hours and remainder over next 24-48 hours [Ref 2]
- Monitor serum sodium every 2-4 hours during correction [Ref 1]

## Common Pitfall
Rapid correction of chronic hypernatremia leads to cerebral edema and seizures. Conversely, failing to provide isotonic fluid before free water replacement in hypovolemic hypernatremia can worsen hemodynamic instability and kidney injury. Always restore intravascular volume first and correct sodium slowly [Ref 1, 2].

## Boards + Bedside Tie-In
Exams often present calculations of free water deficit and ask for appropriate fluid selection. Clinically, careful monitoring and gradual correction prevent neurologic complications while addressing the underlying cause of hypernatremia.

## References
1. Sterns RH. Disorders of plasma sodium: causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65. doi:10.1056/NEJMra1404489 PMID: 25551526
2. Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med. 2000;342(20):1493-1499. doi:10.1056/NEJM200005183422006 PMID: 10816188

---

# Hypercalcemia: Workup and Management

## Clinical Setup
A 58-year-old woman presents with fatigue, constipation and polyuria. Laboratory studies reveal total serum calcium 13.8 mg/dL and ionized calcium 1.7 mmol/L. Her parathyroid hormone (PTH) level is suppressed. How do you determine the cause of her hypercalcemia and initiate appropriate therapy?

## Teaching Objectives
- Differentiate PTH-mediated from non-PTH-mediated hypercalcemia using targeted laboratory tests
- Implement acute and chronic management strategies for severe hypercalcemia

## Teaching Points
1. Confirm hypercalcemia with ionized calcium and adjust total calcium for albumin. Measure intact PTH; elevated or inappropriately normal PTH suggests primary hyperparathyroidism or tertiary hyperparathyroidism (renal failure), whereas suppressed PTH indicates non-PTH-mediated hypercalcemia [Ref 1].
2. In non-PTH-mediated hypercalcemia, measure PTH-related peptide (PTHrP), 25-hydroxyvitamin D, 1,25-dihydroxyvitamin D and assess for malignancy, granulomatous diseases, thyrotoxicosis or medications (thiazides, lithium) [Ref 1].
3. Initial treatment includes aggressive isotonic saline hydration (usually 200-300 mL/h adjusted to achieve positive urine output) to correct volume depletion and enhance renal calcium excretion; once euvolemic, loop diuretics can promote calciuresis [Ref 2].
4. Administer intravenous bisphosphonates (e.g., zoledronic acid 4 mg or pamidronate 60-90 mg) for malignancy-associated hypercalcemia; onset occurs within 48 hours and effect lasts weeks; consider denosumab if refractory or with renal impairment [Ref 2, 3].
5. Calcitonin (4 IU/kg subcutaneously or intramuscularly every 12 hours) provides rapid, short-term reduction in serum calcium; glucocorticoids (prednisone 20-40 mg daily) are effective for vitamin D-mediated hypercalcemia (sarcoidosis) [Ref 2].

## Key Numbers
- Saline hydration rate: initiate at 200-300 mL/h to achieve positive fluid balance; adjust for heart failure [Ref 2]
- Calcitonin dose: 4 IU/kg every 12 hours; tachyphylaxis develops after 48 hours [Ref 2]
- Zoledronic acid dose: 4 mg IV over 15 minutes; pamidronate: 60-90 mg IV over 2 hours [Ref 2]

## Teaching Pearl
Always assess PTH level to distinguish PTH-mediated hypercalcemia from malignancy-associated or granulomatous causes. Adequate hydration is the cornerstone of acute management; loop diuretics should only be used after euvolemia is achieved to avoid worsening dehydration [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize distinguishing primary hyperparathyroidism from malignancy-related hypercalcemia and the appropriate use of bisphosphonates, calcitonin and hydration. Clinically, timely diagnosis and treatment prevent complications such as arrhythmias, nephrolithiasis and altered mental status.

## References
1. Bilezikian JP, Khan AA, Silverberg SJ, et al. Evaluation and management of primary hyperparathyroidism: summary statement and guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314. doi:10.1002/jbmr.4677 PMID: 36245251
2. Carroll MF, Schade DS. A practical approach to hypercalcemia. Am Fam Physician. 2003;67(9):1959-1966. PMID: 12751658
3. Seisa MO, Nayfeh T, Hasan B, et al. A systematic review supporting the Endocrine Society Clinical Practice Guideline on the treatment of hypercalcemia of malignancy in adults. J Clin Endocrinol Metab. 2023;108(3):585-591. doi:10.1210/clinem/dgac631 PMID: 36545700

---

# Metabolic Acidosis: The Anion Gap Approach

## Clinical Setup
A 45-year-old man with type 1 diabetes is found unconscious with rapid breathing. His serum sodium is 140 mEq/L, chloride 102 mEq/L and bicarbonate 10 mEq/L. How do you evaluate his metabolic acidosis using the anion gap and delta gap, and what additional tests are needed?

## Teaching Objectives
- Calculate the anion gap and interpret high- versus normal-gap metabolic acidosis
- Use the delta gap to identify mixed acid-base disorders and guide further workup

## Teaching Points
1. The anion gap (AG) is calculated as AG = Na minus (Cl + HCO3); normal range is 8-12 mEq/L. A high AG indicates accumulation of unmeasured acids (lactic acid, ketoacids, toxins), whereas a normal AG (hyperchloremic) acidosis results from bicarbonate loss (diarrhea, renal tubular acidosis) [Ref 1].
2. Causes of high AG metabolic acidosis can be remembered with the mnemonic "GOLD MARK": glycols (ethylene glycol, propylene glycol), oxoproline (acetaminophen metabolite), L-lactic acidosis, D-lactic acidosis, methanol, aspirin (salicylates), renal failure/rhabdomyolysis, ketoacidosis (diabetic, alcoholic, starvation) and toluene [Ref 1].
3. The delta gap assesses for mixed disorders: delta AG = (measured AG minus normal AG). Calculate the delta ratio = delta AG / (24 minus HCO3); a ratio 1-2 suggests pure high-AG acidosis, <1 indicates concomitant normal-AG acidosis, and >2 suggests concomitant metabolic alkalosis [Ref 1].
4. In normal-AG metabolic acidosis, check the urine anion gap (UAG = urine Na + urine K minus urine Cl). A negative UAG (less than minus 20) suggests gastrointestinal bicarbonate loss (diarrhea), whereas a positive UAG (>0) implies renal tubular acidosis due to impaired ammonium excretion [Ref 1].
5. Management focuses on identifying and treating the underlying cause (e.g., insulin and fluids for diabetic ketoacidosis, dialysis for toxin ingestion); bicarbonate therapy is reserved for severe metabolic acidosis with pH <7.1 in the absence of reversible causes [Ref 2].

## Key Numbers
- Normal anion gap: 8-12 mEq/L (using sodium only) [Ref 1]
- Delta ratio: 1-2 indicates pure high-AG acidosis; <1 suggests mixed high- and normal-gap acidosis; >2 suggests concurrent metabolic alkalosis [Ref 1]
- Urine anion gap: negative (less than minus 20) indicates gastrointestinal bicarbonate loss; positive (>0) suggests renal tubular acidosis [Ref 1]

## Teaching Pearl
Always calculate the delta ratio when confronted with high anion gap acidosis; it quickly reveals hidden mixed disorders. In normal anion gap acidosis, the urine anion gap differentiates renal from gastrointestinal causes [Ref 1].

## Boards + Bedside Tie-In
Board questions frequently require calculation of the anion gap and delta ratio to identify coexisting metabolic alkalosis or normal-gap acidosis. Clinically, a systematic approach to metabolic acidosis helps uncover occult ingestions or renal tubular disorders and guides targeted therapy.

## References
1. Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol. 2010;6(5):274-285. doi:10.1038/nrneph.2010.33 PMID: 20308999
2. Berend K, de Vries AP, Gans RO. Physiological approach to assessment of acid-base disturbances. N Engl J Med. 2014;371(15):1434-1445. doi:10.1056/NEJMra1003327 PMID: 25295502
`,Kp=`# Inpatient Insulin Management Principles

## Clinical Setup
A 68-year-old man with type 2 diabetes is admitted for community-acquired pneumonia. On the second hospital day, his fasting blood glucose ranges from 200-240 mg/dL despite receiving a sliding-scale insulin regimen. What evidence-based strategy should be used to manage his inpatient glycemic control?

## Teaching Objectives
- Identify appropriate glycemic targets and treatment thresholds for non-critical hospitalized patients.
- Apply basal-bolus insulin regimens instead of sliding-scale therapy to improve outcomes.

## Teaching Points
1. Glycemic targets in non-critical inpatients are generally 100-180 mg/dL; treating mild elevations below 100 mg/dL may increase hypoglycemia without benefit. [Ref 3] Therapy is usually initiated if blood glucose exceeds 180 mg/dL on two occasions or exceeds 200 mg/dL once. [Ref 2]
2. Randomized trials comparing basal-bolus regimens with sliding-scale insulin found better glycemic control and fewer complications: mean daily glucose ~145 mg/dL versus 172 mg/dL and reduced composite complications (odds ratio 3.39) in the basal-bolus group. [Ref 1] Basal-bolus therapy uses a long-acting basal component plus scheduled prandial insulin with supplemental correction.
3. Sliding-scale insulin alone provides only reactive correction; it results in greater glycemic variability and is associated with increased infections and complications. [Ref 1] A basal-bolus regimen anticipates insulin needs and maintains steady background insulin.
4. Guidelines, including the ADA Standards of Care, endorse basal-bolus therapy and discourage sole reliance on sliding scales. [Ref 3]

## Key Numbers
- Target range for most non-critical inpatients: 100-180 mg/dL (5.6-10.0 mmol/L). [Ref 3]
- Basal-bolus trial: mean glucose 145 mg/dL vs 172 mg/dL with sliding scale; composite complications reduced (OR 3.39). [Ref 1]
- Initiate insulin therapy when blood glucose exceeds 180 mg/dL on two readings or exceeds 200 mg/dL once. [Ref 3]

## Common Pitfall
Relying solely on sliding-scale insulin can lead to reactive dosing, wide glucose swings and increased infectious complications. Transitioning to a scheduled basal-bolus regimen with correction doses improves glycemic control and reduces complications. [Ref 1]

## Boards + Bedside Tie-In
Board questions often compare sliding-scale to basal-bolus regimens. At the bedside, using a basal-bolus approach ensures steady basal insulin with scheduled prandial coverage; adjust doses daily based on nutritional intake and renal function. Patients with poor oral intake may require basal plus correction only.

## References
1. Umpierrez GE, Smiley D, Zisman A, et al. Randomized study of basal-bolus insulin therapy in the inpatient management of patients with type 2 diabetes. *Diabetes Care*. 2007;30(9):2181-2186. doi:10.2337/dc07-0295 PMID: 17513708.
2. Teles F, Miranda EP, Marchi S, et al. Screening and management of hospital hyperglycemia in non-critical patients: a position statement from the Brazilian Diabetes Society. *Diabetol Metab Syndr*. 2025;17:54. doi:10.1186/s13098-025-01585-z.
3. American Diabetes Association Professional Practice Committee. Diabetes care in the hospital: Standards of Care in Diabetes 2024. *Diabetes Care*. 2024;47(Suppl 1):S295-S306. doi:10.2337/dc24-S016 PMID: 38078585.

---

# DKA vs HHS: Key Differences in Management

## Clinical Setup
A 54-year-old woman with poorly controlled type 2 diabetes presents with polyuria and altered mentation. Her laboratory values show serum glucose 760 mg/dL, bicarbonate 10 mEq/L, pH 7.15 and moderate ketonuria. How do diabetic ketoacidosis (DKA) and hyperosmolar hyperglycemic state (HHS) differ in pathophysiology and management?

## Teaching Objectives
- Distinguish diagnostic criteria for DKA versus HHS.
- Outline major differences in fluid resuscitation, insulin initiation and monitoring for DKA versus HHS.

## Teaching Points
1. Diagnosis: DKA is characterized by blood glucose ≥250 mg/dL with metabolic acidosis (pH ≤7.3, bicarbonate ≤15 mEq/L) and moderate ketonuria or ketonemia. [Ref 1] HHS presents with glucose >600 mg/dL, minimal ketones, pH >7.3 and bicarbonate >15 mEq/L. Serum osmolality is usually >320 mOsm/kg in HHS. [Ref 2]
2. Fluid resuscitation: DKA often requires rapid isotonic saline boluses (15-20 mL/kg) followed by 0.45 % saline and early insulin therapy. [Ref 1] HHS patients have profound fluid deficits (100-220 mL/kg) and benefit from cautious, gradual resuscitation with 0.9 % saline; a fixed-rate insulin infusion should start only once osmolality stops rising. Rapid correction of hyperosmolarity increases risk of cerebral edema. [Ref 2]
3. Insulin therapy: DKA management uses regular insulin 0.1 U/kg IV bolus followed by 0.1 U/kg/h infusion (or continuous 0.14 U/kg/h without bolus). Insulin should be withheld if serum potassium is <3.5 mEq/L until potassium replacement. [Ref 1] In HHS, insulin infusion (0.05-0.1 U/kg/h) begins after initial fluids, and dextrose is added when glucose <250-300 mg/dL. [Ref 2]
4. Monitoring and resolution: DKA is considered resolved when glucose <200 mg/dL plus two of the following: bicarbonate ≥15 mEq/L, pH >7.3 and anion gap ≤12. [Ref 1, 3] HHS resolution includes osmolality <300 mOsm/kg, urine output ≥0.5 mL/kg/h, improved mental status and blood glucose <250-300 mg/dL. [Ref 2]

## Key Numbers
- DKA diagnostic threshold: blood glucose ≥250 mg/dL with pH ≤7.3 and bicarbonate ≤15 mEq/L. [Ref 1]
- HHS diagnostic threshold: blood glucose >600 mg/dL with pH >7.3 and bicarbonate >15 mEq/L; fluid deficit 100-220 mL/kg requiring gradual replacement. [Ref 2]
- Insulin regimen in DKA: 0.1 U/kg IV bolus then 0.1 U/kg/h infusion, or 0.14 U/kg/h continuous; add dextrose when glucose 200-250 mg/dL and reduce insulin to 0.05 U/kg/h. [Ref 1]

## Common Pitfall
Treating HHS like DKA by initiating insulin without adequate fluid resuscitation can worsen circulatory collapse. [Ref 2] Conversely, correcting osmolality too quickly in HHS may precipitate cerebral edema. [Ref 2]

## Boards + Bedside Tie-In
Exams test recognition of DKA versus HHS and proper sequencing of therapy. At the bedside, confirm diagnosis with venous blood gas and basic metabolic panel, replace fluids aggressively for DKA but cautiously for HHS, and monitor electrolytes and mental status closely. Always correct potassium and measure serum osmolality to guide therapy.

## References
1. Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. *Diabetes Care*. 2009;32(7):1335-1343. doi:10.2337/dc09-9032 PMID: 19564476.
2. Joint British Diabetes Societies for Inpatient Care. Management of hyperosmolar hyperglycaemic state (HHS) in adults: an updated guideline from JBDS. *Diabet Med*. 2023;40(3):e15005. doi:10.1111/dme.15005 PMID: 36370077.
3. Lizzo JM, Beyer A, Umpierrez GE. Adult diabetic ketoacidosis. In: *StatPearls* [Internet]. Treasure Island, FL: StatPearls Publishing; 2025.
4. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.

---

# Hypoglycemia Workup in Non-Diabetics

## Clinical Setup
A 42-year-old otherwise healthy woman presents with episodic confusion, tremors and diaphoresis that improve after drinking juice. During one episode, her venous glucose is 48 mg/dL. She denies diabetes or medication use. How should her hypoglycemia be evaluated?

## Teaching Objectives
- Recognize Whipple’s triad and define hypoglycemia thresholds prompting evaluation.
- Outline the diagnostic workup for recurrent hypoglycemia in non-diabetic patients.

## Teaching Points
1. Definition and triad: Hypoglycemia in adults is defined as plasma glucose <55 mg/dL. Evaluation is triggered when Whipple’s triad is present: symptoms of hypoglycemia, a low plasma glucose, and resolution of symptoms with glucose administration. [Ref 1]
2. Initial workup: Obtain critical sample labs during a spontaneous or provoked episode: serum glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate, cortisol, liver function tests, renal function, and sulfonylurea screen. Elevated insulin and C-peptide with a negative sulfonylurea screen suggest endogenous hyperinsulinemia (e.g., insulinoma). [Ref 1]
3. Provocative testing: If episodes are intermittent, a supervised 72-hour fast is the gold standard for diagnosing endogenous hyperinsulinism; [Ref 1] periodic blood draws during the fast assess insulin, C-peptide and proinsulin. Alternative tests include mixed-meal tolerance for postprandial hypoglycemia.
4. Imaging and further evaluation: Once biochemical evidence of endogenous hyperinsulinism is obtained, imaging (endoscopic ultrasound, MRI, CT) localizes pancreatic tumors. [Ref 1] Consider cortisol, growth hormone or IGF-II-secreting tumors in non-insulin-mediated hypoglycemia.

## Key Numbers
- Hypoglycemia threshold: venous glucose <55 mg/dL triggers evaluation. [Ref 1]
- 72-hour fast: confirm insulinoma by demonstrating inappropriately elevated insulin and C-peptide during hypoglycemia. [Ref 1]
- Elevated insulin and C-peptide with a negative sulfonylurea screen indicates endogenous hyperinsulinism. [Ref 1]

## Teaching Pearl
Medications are a common cause of hypoglycemia. Always review the patient’s medication list and screen serum/urine for sulfonylureas and insulin analogs before embarking on extensive tumor workup.

## Boards + Bedside Tie-In
Boards may present Whipple’s triad and ask which lab to order. At the bedside, ensure symptoms and glucose are documented simultaneously. Draw a critical sample before giving glucose; failure to obtain labs during an episode is a common diagnostic delay.

## References
1. Cryer PE, Axelrod L, Grossman AB, et al. Evaluation and management of adult hypoglycemic disorders: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2009;94(3):709-728. doi:10.1210/jc.2008-1410 PMID: 19088155.

---

# Inpatient Insulin Transitions: IV to Subcutaneous

## Clinical Setup
A 60-year-old man with type 1 diabetes is admitted for DKA and treated with an insulin infusion. His anion gap has closed and glucose is 160 mg/dL. How should he be transitioned safely from intravenous to subcutaneous insulin?

## Teaching Objectives
- Describe principles of transitioning from IV insulin infusion to subcutaneous insulin.
- Calculate subcutaneous dosing and overlap time to prevent recurrence of DKA or hyperglycemia.

## Teaching Points
1. Overlap: Guidelines recommend continuing intravenous insulin for 2-4 hours after administering the first subcutaneous dose [Ref 1, 4] to maintain adequate insulin levels and prevent relapse. Never stop the infusion immediately after the subcutaneous injection. [Ref 1]
2. Dose calculation: Estimate the patient’s total daily insulin requirement based on insulin infusion rates over the preceding 6-8 hours. Give approximately 80 % of this total as subcutaneous insulin for the first 24 hours; divide half as basal (e.g., glargine) and half as prandial insulin with meals. [Ref 2]
3. Type of insulin: Use long-acting basal analogs such as glargine or detemir for basal coverage. [Ref 3] Rapid-acting analogs (lispro, aspart) or regular insulin should cover meals and correction doses.
4. Monitoring: Check capillary glucose every 2-4 hours after transition and adjust prandial doses daily. If the patient is not eating, basal plus correctional insulin may suffice. [Ref 3]

## Key Numbers
- Overlap of IV and subcutaneous insulin: at least 2 hours (preferably 2-4 hours). [Ref 1]
- Initial subcutaneous dose: 80 % of total daily insulin requirement based on infusion; half as basal and half divided before meals. [Ref 2]
- Reduce infusion rate when blood glucose falls to 200-250 mg/dL and add dextrose while continuing insulin until transition. [Ref 3]

## Common Pitfall
Stopping IV insulin when the anion gap closes without providing basal insulin leads to recurrence of ketosis and hyperglycemia. Ensure appropriate overlap and dosing to prevent rebound DKA. [Ref 1]

## Boards + Bedside Tie-In
On exams, expect questions calculating subcutaneous doses from IV insulin requirements. At the bedside, review the infusion chart to estimate total daily insulin usage. Confirm the patient’s nutritional status and choose basal/bolus or basal plus correction regimen accordingly.

## References
1. Jun S, Hong J, McCoy J, et al. Improving intravenous and subcutaneous insulin overlap during treatment of diabetic ketoacidosis. *BMJ Open Qual*. 2024;13(1):e002226. doi:10.1136/bmjoq-2023-002226.
2. Vigersky RA. IV to subcutaneous insulin: tips for transition. *MDedge Endocrinology*; 2018.
3. Lizzo JM, Beyer A, Umpierrez GE. Adult diabetic ketoacidosis. In: *StatPearls* [Internet]. Treasure Island, FL: StatPearls Publishing; 2025.
4. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.

---

# Steroid-Induced Hyperglycemia Management

## Clinical Setup
A 55-year-old woman with rheumatoid arthritis is started on prednisone 40 mg daily for a flare. Two days later her capillary glucose readings are 220-260 mg/dL despite no history of diabetes. What strategies can prevent and manage steroid-induced hyperglycemia in hospitalized patients?

## Teaching Objectives
- Recognize when to initiate insulin for glucocorticoid-induced hyperglycemia.
- Implement titration strategies for basal and prandial insulin during and after steroid therapy.

## Teaching Points
1. Recognition: Glucocorticoids increase hepatic gluconeogenesis and cause peripheral insulin resistance. [Ref 1] Hyperglycemia typically occurs 4-8 hours after steroid administration and often peaks in the afternoon or evening. [Ref 1] Monitoring should begin at initiation of therapy.
2. Initiation and dosing: Initiate insulin if a single capillary glucose exceeds 15 mmol/L (≈270 mg/dL) or two readings exceed 12 mmol/L (≈216 mg/dL). Use basal (isophane or glargine) insulin 0.4 U/kg with steroid administration and add rapid-acting insulin 0.1 U/kg at meals. For patients with pre-existing diabetes, increase total daily insulin dose by 10-30 % when steroids begin. [Ref 2]
3. Titration: Adjust insulin doses every 24-48 hours: increase total daily dose by 10-30 % if hyperglycemia persists or decrease by 10-30 % if hypoglycemia occurs. [Ref 2] When steroid doses are tapered, reduce insulin by 25-50 % to prevent hypoglycemia. [Ref 2]
4. Alternative agents: For mild hyperglycemia or outpatient management, consider adjusting oral diabetes medications. Nonetheless, insulin remains the safest and most flexible strategy in hospitalized patients. [Ref 3]

## Key Numbers
- Initiate insulin when one glucose exceeds 15 mmol/L (≈270 mg/dL) or two exceed 12 mmol/L (≈216 mg/dL). [Ref 1]
- Starting basal insulin: 0.4 U/kg at steroid administration plus 0.1 U/kg rapid-acting insulin with meals. [Ref 2]
- Titrate insulin by 10-30 % every 24-48 hours; reduce by 25-50 % when tapering steroids. [Ref 2]

## Teaching Pearl
Glucocorticoid-induced hyperglycemia often resolves quickly once steroids are discontinued. Plan ahead: reduce insulin dose as the steroid is tapered to avoid late-onset hypoglycemia.

## Boards + Bedside Tie-In
Exam questions may ask which insulin regimen to start for a patient on high-dose steroids. Clinically, monitor pre-meal and bedtime glucose, anticipate afternoon spikes, and involve endocrinology for complex cases.

## References
1. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.
2. Scholes G, Ng E, Bach LA, Sztal-Mazer S. Mixed insulin can improve control of prednisolone-induced hyperglycaemia. *Intern Med J*. 2023;53(12):2264-2269. doi:10.1111/imj.16050 PMID: 36880383.
3. Queensland Clinical Guidelines. Adult inpatient management of steroid-induced hyperglycaemia. Queensland Health; 2022.

---

# Thyroid Storm: Recognition and Initial Management

## Clinical Setup
A 30-year-old woman with known Graves disease presents with fever, agitation, tachycardia (heart rate 150 bpm) and vomiting after discontinuing antithyroid medications. Laboratory testing shows suppressed TSH and markedly elevated free T4. How do you recognize and treat thyroid storm?

## Teaching Objectives
- Identify clinical features distinguishing thyroid storm from uncomplicated thyrotoxicosis.
- Describe a multi-modal management strategy for thyroid storm.

## Teaching Points
1. Recognition: Thyroid storm is a life-threatening exacerbation of thyrotoxicosis characterized by hyperthermia, tachyarrhythmias, CNS agitation or delirium, vomiting and multi-organ dysfunction. [Ref 1] Common precipitants include infection, surgery, trauma and medication non-adherence. [Ref 2]
2. Antithyroid drugs: Begin propylthiouracil (PTU) 600-1 000 mg loading dose followed by 200-250 mg every 4 hours (total 1 200-1 500 mg/day), or methimazole 40 mg loading followed by 25 mg every 4 hours (total 120 mg/day). PTU additionally inhibits peripheral conversion of T4 to T3 [Ref 1].
3. Iodine therapy: Give iodine (Lugol’s solution 8-10 drops every 6-8 hours or saturated potassium iodide 5 drops every 6 hours) at least one hour after antithyroid drugs to block hormone release. [Ref 2]
4. Beta-adrenergic blockade: Administer propranolol 20-120 mg orally every 6 hours or 1-2 mg IV (repeat every 10-15 minutes as needed) to control tachycardia; alternatively, esmolol 500 μg/kg bolus followed by 50-200 μg/kg/min continuous infusion. [Ref 1, 2]
5. Glucocorticoids and supportive care: Give hydrocortisone 100 mg IV followed by 100 mg every 8 hours or dexamethasone 2 mg IV every 6 hours to reduce peripheral T4→T3 conversion and treat relative adrenal insufficiency. [Ref 2] Provide aggressive cooling, IV fluids, and treat precipitating causes. [Ref 1]

## Key Numbers
- PTU: 600-1 000 mg loading then 200-250 mg every 4 hours (1 200-1 500 mg/day). [Ref 2]
- Methimazole: 40 mg loading then 25 mg every 4 hours (total 120 mg/day). [Ref 2]
- Hydrocortisone: 100 mg IV then 100 mg every 8 hours or dexamethasone 2 mg IV every 6 hours. [Ref 2]

## Common Pitfall
Administering iodine before antithyroid drugs can increase hormone synthesis through the Jod-Basedow phenomenon. Always give PTU or methimazole first and wait at least one hour before iodine.

## Boards + Bedside Tie-In
Boards may ask about the sequence of therapies: beta-blocker, antithyroid drug, iodine, glucocorticoids and supportive care. Clinically, early recognition and rapid initiation of these therapies are critical; monitor for arrhythmias and treat underlying precipitants.

## References
1. Idrose AM. Acute and emergency care for thyrotoxicosis and thyroid storm. *Acute Med Surg*. 2015;2(3):147-157. doi:10.1002/ams2.104 PMID: 29123713.
2. Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. *Thyroid*. 2016;26(10):1343-1421. doi:10.1089/thy.2016.0220 PMID: 27521067.

---

# Myxedema Coma: Recognition and Initial Management

## Clinical Setup
An 82-year-old woman with long-standing hypothyroidism presents with confusion, hypothermia (core temperature 34 °C), bradycardia and hypotension after a winter storm caused her to miss medications. She is obtunded with dry, coarse skin. How should myxedema coma be recognized and managed?

## Teaching Objectives
- Recognize clinical features of myxedema coma and necessary diagnostic studies.
- Initiate appropriate thyroid hormone and adrenal support while providing supportive care.

## Teaching Points
1. Recognition: Myxedema coma is severe decompensated hypothyroidism presenting with altered mental status, hypothermia, bradycardia, hypotension, hypoventilation and hyponatremia. [Ref 1] It often occurs in elderly patients with long-standing hypothyroidism precipitated by infection, cold exposure or medication non-adherence. [Ref 1]
2. Initial evaluation: Obtain serum TSH, free T4, free T3 and random cortisol before treatment. [Ref 2] Hypoglycemia and hyponatremia should be corrected immediately; respiratory failure is common. [Ref 1]
3. Hormone replacement: Give IV levothyroxine loading dose 200-400 μg followed by maintenance 1.6 μg/kg/day (reduce to 75 % of the calculated oral dose because IV administration bypasses absorption). Consider liothyronine 5-20 μg IV loading then 2.5-10 μg every 8 hours if there is no response within 24 hours. [Ref 2]
4. Adrenal support: Administer hydrocortisone 100 mg IV immediately followed by 200-400 mg per day until adrenal insufficiency is excluded. [Ref 2]
5. Supportive care: Passive rewarming, mechanical ventilation if needed, and treatment of precipitating factors (infection, myocardial infarction) are critical. [Ref 1] Avoid rapid active rewarming which may precipitate vasodilation and shock. [Ref 1]

## Key Numbers
- Levothyroxine loading: 200-400 μg IV; maintenance 1.6 μg/kg/day at 75 % of calculated oral dose. [Ref 2]
- Hydrocortisone: 100 mg IV bolus then 200-400 mg/day until adrenal insufficiency is excluded. [Ref 2]
- Mortality of myxedema coma: 20-60 %, underscoring the need for prompt treatment. [Ref 1]

## Common Pitfall
Failure to provide empiric hydrocortisone may result in unrecognized adrenal insufficiency and hemodynamic collapse. Always administer stress-dose corticosteroids before thyroid hormone in suspected myxedema coma.

## Boards + Bedside Tie-In
Boards may test the order of therapy. At the bedside, treat empirically without waiting for laboratory results, monitor for arrhythmias and respiratory failure, and lower thyroid hormone doses in elderly or cardiac patients to reduce risk of myocardial ischemia.

## References
1. Zhang Y, Chu L, Han H. Myxedema coma: challenges and future directions, a systematic survey and review. *Thyroid Res*. 2025;18(1):48. doi:10.1186/s13044-025-00268-1 PMID: 41053871.
2. Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. *Thyroid*. 2014;24(12):1670-1751. doi:10.1089/thy.2014.0028 PMID: 25266247.

---

# Adrenal Insufficiency: Recognition and Stress Dosing

## Clinical Setup
A 35-year-old woman with known Addison disease develops vomiting and abdominal pain after a gastrointestinal illness. She is hypotensive with systolic blood pressure 85 mmHg, hyponatremic and hyperkalemic. What constitutes an adrenal crisis, and how should stress dosing be managed?

## Teaching Objectives
- Recognize clinical features of adrenal crisis and precipitating factors.
- Implement acute treatment and stress-dose corticosteroid regimens.

## Teaching Points
1. Recognition: Adrenal crisis presents with hypotension refractory to fluids, hypovolemia, abdominal pain, vomiting, fever, hyponatremia and hyperkalemia. [Ref 1] Precipitating factors include infection, trauma, surgery or abrupt withdrawal of corticosteroid therapy. [Ref 2]
2. Acute treatment: Immediately administer hydrocortisone 100 mg IV or IM bolus followed by 200 mg over 24 hours via continuous infusion or 50 mg IV/IM every 6 hours. Rapidly infuse 1 L of isotonic saline within the first hour and provide 4-6 L over 24 hours to restore volume and correct hypotension. [Ref 2]
3. Stress dosing: For mild stress (febrile illness), patients should double their usual oral glucocorticoid dose. For major stress (surgery, trauma), they should receive 100 mg hydrocortisone IM/IV followed by continuous 200 mg/day infusion and resume oral dosing when stable. [Ref 2]
4. Tapering: After 24-72 hours, taper hydrocortisone to maintenance dosing and introduce mineralocorticoid (fludrocortisone) once the hydrocortisone dose falls below 50 mg/day. [Ref 2]

## Key Numbers
- Hydrocortisone bolus: 100 mg IV/IM; maintenance: 200 mg/24 h (continuous or 50 mg every 6 hours). [Ref 2]
- Fluid resuscitation: 1 L isotonic saline in first hour; 4-6 L over 24 hours. [Ref 1]
- For minor illness, double usual oral glucocorticoid dose; for major stress, 100 mg hydrocortisone plus 200 mg/day infusion. [Ref 1, 2]

## Common Pitfall
Delaying steroid administration while awaiting confirmatory tests can be fatal. In suspected adrenal crisis, treat empirically with hydrocortisone and fluids immediately.

## Boards + Bedside Tie-In
Board questions emphasize acute management and stress dosing. Clinically, instruct patients with chronic adrenal insufficiency to carry emergency hydrocortisone and educate them on sick-day rules.

## References
1. Dineen R, Thompson CJ, Sherlock M. Adrenal crisis: prevention and management in adult patients. *Ther Adv Endocrinol Metab*. 2019;10:2042018819848218. doi:10.1177/2042018819848218 PMID: 31223468.
2. Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2016;101(2):364-389. doi:10.1210/jc.2015-1710 PMID: 26760044.

---

# Approach to the Incidental Thyroid Nodule

## Clinical Setup
A 45-year-old woman undergoes carotid Doppler ultrasound for transient ischemic attack and is incidentally found to have a 1.6-cm solid, hypoechoic thyroid nodule. Her thyroid function tests are normal. What is the recommended approach for evaluating such nodules?

## Teaching Objectives
- Outline the initial evaluation of incidental thyroid nodules, including laboratory and imaging steps.
- Apply size- and risk-based criteria for fine-needle aspiration (FNA).

## Teaching Points
1. Initial assessment: Measure serum TSH in all patients. [Ref 2] If TSH is low, obtain a radionuclide scan to assess for autonomous function. [Ref 2] Perform high-resolution ultrasound to evaluate nodule size, composition, echogenicity, shape and cervical lymph nodes. [Ref 1]
2. Ultrasound risk stratification: High-risk features (hypoechoic, irregular margins, microcalcifications, taller-than-wide shape) warrant a lower FNA threshold. [Ref 2] Low-risk features include spongiform or purely cystic nodules. [Ref 1]
3. FNA criteria: FNA is recommended for nodules ≥1 cm with intermediate/high suspicion, ≥1.5 cm with low suspicion and ≥2 cm with very low suspicion. [Ref 2] FNA is not generally indicated for purely cystic or sub-centimeter nodules unless there are high-risk history or suspicious lymph nodes. [Ref 2]
4. Follow-up: Nodules that do not meet FNA criteria should undergo periodic ultrasound surveillance (e.g., at 6-12 months initially). [Ref 2] Consider molecular testing or referral to endocrinology for indeterminate cytology. [Ref 1]

## Key Numbers
- FNA size thresholds: ≥1 cm (intermediate/high suspicion); ≥1.5 cm (low suspicion); ≥2 cm (very low suspicion). [Ref 2]
- Suppressed TSH warrants radionuclide scan; normal or elevated TSH indicates ultrasound and FNA triage. [Ref 2]
- High-risk ultrasound features: hypoechoic, irregular margins, microcalcifications, taller-than-wide shape. [Ref 2]

## Teaching Pearl
Risk stratification using ultrasound patterns helps avoid unnecessary biopsies. Purely cystic nodules and spongiform lesions have very low malignancy risk and can often be managed conservatively.

## Boards + Bedside Tie-In
Board questions may provide ultrasound descriptions and ask whether FNA is indicated. In practice, obtain high-quality ultrasound and apply size and risk criteria to determine FNA versus observation.

## References
1. Tamhane S, Gharib H. Thyroid nodule update on diagnosis and management. *Clin Diabetes Endocrinol*. 2016;2:17. doi:10.1186/s40842-016-0035-7 PMID: 28702251.
2. Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association management guidelines for adult patients with thyroid nodules and differentiated thyroid cancer. Thyroid. 2016;26(1):1-133. doi:10.1089/thy.2015.0020 PMID: 26462967.

---

# Pheochromocytoma: Recognition and Workup

## Clinical Setup
A 48-year-old man experiences episodic pounding headaches, profuse sweating and palpitations. Blood pressure measurements reveal paroxysmal hypertension up to 220/120 mmHg. His father underwent surgery for a catecholamine-secreting tumor. What is the appropriate diagnostic approach and preoperative management?

## Teaching Objectives
- Identify clinical features suggestive of pheochromocytoma or paraganglioma.
- Outline the biochemical evaluation, genetic considerations and preoperative preparation.

## Teaching Points
1. Clinical features: Persistent or paroxysmal hypertension occurs in 80-90 % of patients; the classic triad of headache, sweating and palpitations is present in approximately 25 %. [Ref 1] Symptoms may be episodic and triggered by stress, medications or position changes. Family history and syndromic features (MEN2, VHL) increase suspicion. [Ref 3]
2. Biochemical evaluation: Initial screening tests include plasma free metanephrines or 24-hour urinary fractionated metanephrines. [Ref 3] Repeat testing if high clinical suspicion persists despite negative results. Approximately 40 % of patients harbour germline mutations, so genetic counselling is recommended. [Ref 3]
3. Imaging: After biochemical confirmation, perform cross-sectional imaging (CT or MRI of abdomen/pelvis) or functional imaging (MIBG or PET) to localize tumors. [Ref 3]
4. Preoperative preparation: Start alpha-adrenergic blockade at least 14 days before surgery (phenoxybenzamine 10 mg once or twice daily, titrated to 20-100 mg/day; alternatively, doxazosin 1-2 mg daily titrated upward). [Ref 2] Encourage high-sodium diet and liberal fluid intake to counteract vasodilation. Only after adequate alpha blockade should beta-blockers be added to control tachycardia. [Ref 3] Target seated BP <130/80 mmHg with standing systolic BP >90 mmHg and heart rate 60-70 bpm seated and 70-80 bpm standing. [Ref 3]

## Key Numbers
- Hypertension present in 80-90 % of patients; classic triad in ~25 %. [Ref 1]
- Germline mutations occur in ≈40 % of cases. [Ref 3]
- Phenoxybenzamine starting dose 10 mg once or twice daily, titrated to 20-100 mg/day; initiate at least 14 days pre-operatively. [Ref 2, 3]

## Common Pitfall
Starting beta-blockers before achieving adequate alpha blockade can precipitate hypertensive crisis by unopposed alpha-adrenergic stimulation. Always initiate alpha blockade first and monitor volume status.

## Boards + Bedside Tie-In
Exams often emphasize biochemical testing (plasma free metanephrines) and preoperative alpha blockade. Clinically, counsel patients about medication adherence and fluid intake, and coordinate with genetics for familial syndromes.

## References
1. Aygün N, Uludağ M. Pheochromocytoma and paraganglioma: from clinical findings to diagnosis. *Sisli Etfal Hastan Tip Bul*. 2020;54(3):271-280. doi:10.14744/SEMB.2020.14826.
2. Ramachandran R, Rewari V. Current perioperative management of pheochromocytomas. *Indian J Urol*. 2017;33(1):19-25. doi:10.4103/0970-1591.194781.
3. Lenders JWM, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2014;99(6):1915-1942. doi:10.1210/jc.2014-1498 PMID: 24893135.

---

# Cellulitis vs Abscess: Management Differences

## Clinical Setup
A 37-year-old man presents with a 4-cm fluctuant, tender lesion on his thigh surrounded by erythema and induration. He is afebrile and otherwise healthy. What distinguishes management of cellulitis from that of a cutaneous abscess?

## Teaching Objectives
- Differentiate cellulitis and abscess clinically and determine when systemic antibiotics are indicated.
- Understand indications for incision and drainage and adjunctive antibiotic therapy.

## Teaching Points
1. Definitions: Cellulitis is a diffuse spreading infection of the skin and subcutaneous tissues, usually caused by β-hemolytic streptococci or *Staphylococcus aureus*. [Ref 1] Abscesses are collections of pus within dermis or deeper tissues that create a fluctuant mass. [Ref 1]
2. Management of cellulitis: Systemic antibiotics targeting streptococci (e.g., penicillin, cephalexin) and *S. aureus* (e.g., clindamycin, doxycycline, trimethoprim-sulfamethoxazole) are the mainstay. [Ref 1] Incision is not required unless purulence develops. [Ref 1]
3. Management of abscess: Incision and drainage with thorough evacuation and breaking up of loculations is the primary therapy. [Ref 1] Systemic antibiotics are usually unnecessary for small, uncomplicated abscesses in immunocompetent hosts; they may be considered if there are multiple lesions, extensive surrounding cellulitis, signs of systemic infection (temperature >38.5 °C or pulse >100 bpm), immunosuppression or inadequate drainage. [Ref 1, 2]
4. Follow-up: After drainage, instruct patients to keep the wound open with packing or wicks as needed and return if signs of recurrence develop. [Ref 2] Systemic antibiotics should be limited to 24-48 hours when indicated. [Ref 1]

## Key Numbers
- Systemic antibiotics are rarely required for uncomplicated cutaneous abscesses; consider them if temperature >38.5 °C or pulse >100 bpm or if multiple lesions or immunosuppression. [Ref 1]
- Incision and drainage is the definitive treatment for most abscesses. [Ref 1]
- Contamination from incision and drainage is uncommon; bacteremia is rare. [Ref 2]

## Common Pitfall
Using antibiotics alone for an abscess without performing incision and drainage leads to treatment failure. Adequate drainage is essential.

## Boards + Bedside Tie-In
Boards often describe a fluctuant lesion and ask for next step. At the bedside, differentiate cellulitis from abscess by palpating for fluctuance. Reserve antibiotics for cellulitis or complicated abscesses.

## References
1. Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. *Clin Infect Dis*. 2014;59(2):e10-e52. doi:10.1093/cid/ciu444 PMID: 24973422.
2. Tang W, Wan Y, Sindhura S. Guidelines vs actual management of skin and soft tissue infections in the emergency department. *J Emerg Med*. 2020;58(6):938-945. doi:10.1016/j.jemermed.2020.02.017.

---

# Osteomyelitis: Diagnosis and Treatment Principles

## Clinical Setup
A 70-year-old man with diabetes presents with worsening low back pain and fever. He has a history of *Staphylococcus aureus* bacteremia two weeks earlier. MRI of the spine shows vertebral body marrow signal consistent with infection. How should vertebral osteomyelitis be diagnosed and treated?

## Teaching Objectives
- Describe diagnostic steps for suspected native vertebral osteomyelitis.
- Outline duration and mode of antimicrobial therapy.

## Teaching Points
1. Diagnosis: Native vertebral osteomyelitis often results from hematogenous seeding. [Ref 1] Plain radiographs are insensitive; MRI is the imaging modality of choice for early detection and to assess epidural extension. [Ref 1] Obtain blood cultures and, whenever feasible, percutaneous biopsy for microbiologic diagnosis before initiating antibiotics. [Ref 1]
2. Empiric antibiotics: Empiric antimicrobial therapy should generally be withheld until microbiologic diagnosis, except in patients with sepsis or neurologic compromise. [Ref 1] If empiric therapy is necessary, cover *S. aureus* (including MRSA), gram-negative bacilli and streptococci. [Ref 1]
3. Treatment duration: Most patients are cured with a 6-week course of pathogen-directed antimicrobial therapy. [Ref 1] Randomized studies suggest that 6 weeks is non-inferior to 12 weeks, though longer courses may be needed for complicated infections or inadequate source control. [Ref 2]
4. Route of therapy: Intravenous therapy is used initially; early switch to oral therapy with highly bioavailable agents (e.g., fluoroquinolones plus rifampin) may be safe and effective. [Ref 2] Monitor inflammatory markers and clinical response to guide duration. [Ref 1]
5. Surgical indications: Consider surgical intervention for neurologic compromise, spinal instability, large abscesses or failure of medical therapy. [Ref 1]

## Key Numbers
- MRI sensitivity and specificity for vertebral osteomyelitis exceed 90 %, making it the imaging test of choice. [Ref 1]
- Recommended antimicrobial therapy duration: 6 weeks; non-inferior to 12 weeks in randomized studies. [Ref 1, 2]
- Withhold empiric antibiotics until cultures obtained unless sepsis or neurologic deficits are present. [Ref 1]

## Common Pitfall
Starting broad-spectrum antibiotics before obtaining blood cultures or biopsy may sterilize cultures and hinder diagnosis. Obtain samples first whenever possible.

## Boards + Bedside Tie-In
Exams may test when to withhold antibiotics and appropriate treatment duration. Clinically, coordinate with radiology and interventional radiology for biopsy, monitor CRP/ESR trends and arrange for outpatient parenteral or oral therapy.

## References
1. Berbari EF, Kanj SS, Kowalski TJ, et al. 2015 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and treatment of native vertebral osteomyelitis in adults. *Clin Infect Dis*. 2015;61(6):e26-e46. doi:10.1093/cid/civ482 PMID: 26229122.
2. Spellberg B, Lipsky BA. Systemic antibiotic therapy for chronic osteomyelitis in adults. *Clin Infect Dis*. 2012;54(3):393-407. doi:10.1093/cid/cir842 PMID: 22157324.

---

# Infective Endocarditis: Diagnosis and Initial Management

## Clinical Setup
A 64-year-old man with a prosthetic aortic valve presents with fever and a new murmur. You suspect infective endocarditis. How should you proceed with diagnostic evaluation and empiric therapy?

## Teaching Objectives
- Outline appropriate blood culture collection and early diagnostic steps for suspected infective endocarditis.
- Summarize principles of initial antimicrobial therapy for native and prosthetic valve endocarditis.

## Teaching Points
1. Blood cultures: Obtain at least three sets of blood cultures, 10 mL each, from separate venipuncture sites at 30-minute intervals before starting antibiotics. [Ref 1, 2] Each set should include one aerobic and one anaerobic bottle. Repeat cultures 48-72 hours after starting therapy to monitor sterilization. [Ref 2]
2. Diagnostic imaging: Perform transthoracic echocardiography (TTE) initially; transesophageal echocardiography (TEE) is more sensitive, particularly in prosthetic valves. [Ref 1] Modified Duke criteria aid diagnosis. [Ref 1, 2]
3. Empiric therapy: Early empiric therapy should target staphylococci, streptococci and enterococci. [Ref 2] For native valve endocarditis without prosthetic material, combination therapy with IV oxacillin (or vancomycin if MRSA or penicillin allergy) plus ceftriaxone or gentamicin may be used; avoid routine aminoglycosides for staphylococcal infections due to nephrotoxicity. [Ref 2] For prosthetic valve endocarditis, add rifampin after 3-5 days of effective therapy. [Ref 1]
4. Duration: Prolonged therapy is required; native valve endocarditis typically requires 4-6 weeks of bactericidal antibiotics from the first negative culture, and prosthetic valve endocarditis generally requires at least 6 weeks. [Ref 1, 2]
5. Additional considerations: Consult cardiology and infectious disease specialists early. Valve surgery may be necessary for heart failure, uncontrolled infection or prevention of embolism. [Ref 1]

## Key Numbers
- Draw at least three sets of blood cultures 30 minutes apart before antibiotics. [Ref 1, 2]
- Repeat cultures after 48-72 hours to ensure clearance. [Ref 2]
- Duration of therapy: 4-6 weeks for native valves; ≥6 weeks for prosthetic valves. [Ref 1, 2]

## Common Pitfall
Starting antibiotics before obtaining adequate blood cultures compromises diagnosis and may lead to culture-negative endocarditis. Always obtain cultures first.

## Boards + Bedside Tie-In
Exams emphasize the number and timing of blood cultures and appropriate empiric therapy. At the bedside, quickly obtain cultures, involve infectious disease consultants and tailor therapy once organism and susceptibilities are known.

## References
1. Habib G, Lancellotti P, Antunes MJ, et al. 2015 ESC guidelines for the management of infective endocarditis. *Eur Heart J*. 2015;36(44):3075-3128. doi:10.1093/eurheartj/ehv319 PMID: 26320109.
2. Baddour LM, Wilson WR, Bayer AS, et al. Infective endocarditis in adults: diagnosis, antimicrobial therapy and management of complications: a scientific statement for healthcare professionals from the American Heart Association. *Circulation*. 2015;132(15):1435-1486. doi:10.1161/CIR.0000000000000296 PMID: 26373316.

---

# Healthcare-Associated Pneumonia Considerations

## Clinical Setup
A 72-year-old man develops fever and purulent sputum on hospital day 5 after admission for hip fracture. He was receiving intravenous cefazolin for surgical prophylaxis. Chest radiograph shows a new infiltrate. How should healthcare-associated pneumonia (HAP) and ventilator-associated pneumonia (VAP) be approached?

## Teaching Objectives
- Define HAP and VAP and identify risk factors for multidrug-resistant (MDR) pathogens.
- Select empiric antibiotic regimens based on risk stratification and local resistance patterns.

## Teaching Points
1. Definitions: HAP is pneumonia occurring ≥48 hours after hospital admission, and VAP occurs ≥48 hours after endotracheal intubation. [Ref 1] The old category of health-care-associated pneumonia (HCAP) has been abandoned; management should focus on risk factors for MDR organisms and local antibiograms. [Ref 1]
2. Risk factors for MDR pathogens: Prior IV antibiotic use within 90 days, septic shock at onset, acute respiratory distress syndrome preceding VAP, hospitalization >5 days before pneumonia onset, and acute renal replacement therapy. [Ref 1] These factors increase the likelihood of MRSA and resistant gram-negative organisms. [Ref 1]
3. Empiric therapy (no MDR risk): For patients without MDR risk factors, choose a single anti-pseudomonal agent that also covers other gram-negative bacteria and *Staphylococcus aureus*, such as piperacillin-tazobactam, cefepime, levofloxacin, imipenem or meropenem. [Ref 1] MRSA coverage (vancomycin or linezolid) should be added only if local MRSA prevalence exceeds 10-20 % or risk factors are present. [Ref 1]
4. Empiric therapy (MDR risk): If MDR risk factors are present or local resistance to first agents exceeds 10 %, use dual anti-pseudomonal therapy from different classes (e.g., β-lactam plus fluoroquinolone or aminoglycoside) and add MRSA coverage. [Ref 1]
5. Duration and de-escalation: Treat for 7 days in most cases and de-escalate based on culture results and clinical response. [Ref 1] Shorter courses reduce adverse effects and resistance. [Ref 2]

## Key Numbers
- HAP/VAP develops ≥48 hours after hospitalization or intubation. [Ref 1]
- MDR risk factors include prior IV antibiotics within 90 days, septic shock, ARDS, hospitalization >5 days before pneumonia and renal replacement therapy. [Ref 1]
- Recommended treatment duration: 7 days. [Ref 1]

## Common Pitfall
Unnecessary broad-spectrum coverage in patients without MDR risk factors promotes antibiotic resistance. Tailor therapy to risk factors and local antibiogram.

## Boards + Bedside Tie-In
Board questions test identification of risk factors and appropriate empiric regimens. At the bedside, use local resistance data, collect sputum cultures before antibiotics and reassess therapy daily to de-escalate when possible.

## References
1. Kalil AC, Metersky ML, Klompas M, et al. Management of adults with hospital-acquired and ventilator-associated pneumonia: 2016 clinical practice guidelines by the Infectious Diseases Society of America and the American Thoracic Society. Clin Infect Dis. 2016;63(5):e61-e111. doi:10.1093/cid/ciw353 PMID: 27418577.
2. Mills GD, Bertuzzi S, Trammell GL. Practical considerations in the management of healthcare-associated pneumonia. *P & T*. 2017;42(10):648-654.

---

# Approach to Positive Blood Cultures

## Clinical Setup
A 58-year-old man is admitted for cellulitis. Blood cultures drawn on admission grow coagulase-negative staphylococci in one of four bottles after 72 hours. How should positive blood cultures be interpreted and managed?

## Teaching Objectives
- Distinguish contaminated blood cultures from true bloodstream infections.
- Identify organisms that always warrant treatment and necessary evaluation.

## Teaching Points
1. Contamination versus infection: Contamination rates in blood cultures should be <3 %. [Ref 3] Growth of skin commensals (e.g., coagulase-negative staphylococci, *Bacillus* species, *Cutibacterium acnes*) in a single bottle collected after 48-72 hours often represents contamination. [Ref 1] True infection is more likely when the same organism grows in multiple bottles, with shorter time to positivity and concordant clinical signs. [Ref 1]
2. Organisms always significant: Positive cultures for *Staphylococcus aureus*, group A streptococci, *Streptococcus pneumoniae*, *Pseudomonas aeruginosa*, Enterobacteriaceae, *Bacteroides* species, *Haemophilus influenzae* and *Candida* species should be considered true bloodstream infections and treated accordingly. [Ref 1] For *S. aureus* bacteremia or candidemia, obtain echocardiography (preferably transesophageal) and ophthalmologic exam for candidemia due to risk of endocarditis and endophthalmitis. [Ref 2]
3. Evaluation strategy: Consider number of positive bottles, organism type, time to positivity, patient’s clinical status and presence of intravascular devices. Repeat blood cultures to confirm clearance; contamination typically does not persist. [Ref 1]
4. Management: If contamination is likely, communicate with the laboratory to review collection technique and avoid unnecessary antibiotics. [Ref 3] If true infection is suspected, start appropriate empiric therapy and evaluate for source control. [Ref 2]

## Key Numbers
- Target contamination rate for blood cultures: <3 %. [Ref 3]
- Repeat positive cultures after 72 hours suggest true infection; single bottle growth of skin commensals often indicates contamination. [Ref 1]
- Organisms such as *Staphylococcus aureus*, group A streptococci and *Candida* should always prompt evaluation and treatment. [Ref 1, 2]

## Teaching Pearl
When in doubt, assess the clinical context: fever, leukocytosis, hemodynamic instability and presence of indwelling catheters increase the likelihood of true bacteremia. Do not ignore positive cultures for *S. aureus* or *Candida* regardless of the number of bottles.

## Boards + Bedside Tie-In
Boards may provide culture results and ask if antibiotics are needed. At the bedside, interpret cultures with clinical judgement; avoid overtreatment of contaminants but never under-treat true infections.

## References
1. Chela HK, Vasudevan A, Rojas-Moreno C, Naqvi SH. Approach to positive blood cultures in the hospitalized patient: a review. Mo Med. 2019;116(4):313-317. PMID: 31527981.
2. Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the Infectious Diseases Society of America. *Clin Infect Dis*. 2009;49(1):1-45. doi:10.1086/599376 PMID: 19489710.
3. Snyder SR, Favoreto AM, Matthew L. Continuous quality improvement: reducing blood culture contamination rates using evidence-based practice. *Clin Lab Sci*. 2012;25(4):200-204.`,Vp=`
# Upper GI Bleeding: Risk Stratification and Initial Management
## Clinical Setup
A 65-year-old man with cirrhosis and chronic NSAID use presents with melena, tachycardia and hypotension. His hemoglobin is 6.8 g/dL after receiving fluids. What is the initial approach to management and how do you risk-stratify him?
## Teaching Objectives
- Recognize high-risk features and employ risk scores to stratify patients with upper GI bleeding.
- Apply a stepwise management plan including resuscitation, transfusion thresholds and timing of endoscopy.
## Teaching Points
1. Use the Glasgow-Blatchford Score to risk-stratify; scores 0-1 identify patients safe for early discharge, whereas higher scores prompt admission and urgent endoscopy [Ref 1].
2. Initial management involves airway protection, IV access, hemodynamic resuscitation and packed red blood cell transfusion when hemoglobin <7 g/dL, or <9 g/dL in those with cardiovascular disease or active ischemia [Ref 1][Ref 2].
3. Administer intravenous proton pump inhibitor and consider erythromycin infusion before endoscopy; perform upper endoscopy within 24 hours to diagnose and treat the source of bleeding [Ref 1].
4. A restrictive transfusion strategy (threshold <7 g/dL) improves survival and reduces rebleeding compared with liberal transfusion (threshold <9 g/dL) [Ref 2].
5. Review antiplatelet and anticoagulant therapies and reverse coagulopathy when appropriate; consult interventional radiology or surgery if endoscopic therapy fails [Ref 1].
## Key Numbers
- Glasgow-Blatchford Score 0-1: identifies low-risk patients who may be managed as outpatients [Ref 1].
- Hemoglobin <7 g/dL: transfusion threshold in most patients; target <9 g/dL for those with active ischemia or significant comorbidity [Ref 1][Ref 2].
- Restrictive transfusion trial: 95 % survival vs 91 % at six weeks for restrictive vs liberal strategies [Ref 2].
## Common Pitfall
Over-transfusion and aggressive fluid administration can increase portal pressure and risk of rebleeding; transfuse judiciously and stabilize hemodynamics before endoscopy [Ref 2].
## Boards + Bedside Tie-In
Examinations often ask for appropriate transfusion thresholds and timing of endoscopy; at the bedside, using risk scores and following a resuscitation-endoscopy-hemostasis framework improves outcomes and prevents unnecessary admissions.
## References
1. Laine L, Barkun AN, Saltzman JR, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917.
2. Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013;368(1):11-21.

---
# Lower GI Bleeding: Localization and Initial Management
## Clinical Setup
A 72-year-old woman taking a direct oral anticoagulant presents with maroon stools and mild hypotension. Her hemoglobin is 8.2 g/dL after initial fluids. After stabilization, what steps are needed to localize and manage her bleeding?
## Teaching Objectives
- Stabilize patients with lower GI bleeding and apply risk stratification tools to identify safe outpatient candidates.
- Implement diagnostic and therapeutic strategies including colonoscopy, imaging and reversal of anticoagulation.
## Teaching Points
1. Resuscitate with IV fluids, obtain type and cross and transfuse packed red blood cells when hemoglobin <7 g/dL or symptomatic anemia; reverse anticoagulants if clinically indicated [Ref 1].
2. Use the Oakland score to identify low-risk patients; scores ≤8 or ≤10 accurately predict those safe for discharge or outpatient colonoscopy [Ref 2].
3. Perform colonoscopy within 24-48 hours after adequate preparation; urgent colonoscopy offers no mortality benefit but may improve diagnostic yield [Ref 1][Ref 3].
4. If colonoscopy is nondiagnostic or the patient remains unstable, pursue CT angiography or radionuclide scanning; interventional radiology or surgery is reserved for ongoing bleeding despite endoscopic therapy [Ref 1].
5. Administer specific reversal agents for anticoagulants (vitamin K, prothrombin complex concentrate, or DOAC antidotes) when necessary to control bleeding [Ref 1].
## Key Numbers
- Oakland score ≤8: 98.4 % sensitivity for identifying patients suitable for discharge; ≤10: 96 % sensitivity for outpatient management [Ref 2].
- Hemoglobin <7 g/dL: transfusion threshold; consider threshold <8 g/dL in patients with cardiovascular disease [Ref 1].
- Early colonoscopy within 24 hours does not reduce mortality but facilitates diagnosis and therapy [Ref 1].
## Teaching Pearl
Administer a high-volume polyethylene glycol solution during resuscitation to achieve clear effluent; adequate bowel preparation improves visualization and therapeutic success during colonoscopy [Ref 1].
## Boards + Bedside Tie-In
Boards frequently test risk scores and timing of colonoscopy. Clinically, using the Oakland score and focusing on resuscitation and proper imaging prevents unnecessary admissions and optimizes resource utilization.
## References
1. Strate LL, Gralnek IM. ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2016;111(4):459-474.
2. Oakland K, Jairath V. Advances in transfusion medicine: gastrointestinal bleeding. Transfus Med. 2018;28(2):132-139.
3. Oakland K, Jairath V, Uberoi R, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019;68(5):776-789.

---
# Acute Pancreatitis: Severity and Management
## Clinical Setup
A 45-year-old man with gallstones presents with sudden severe epigastric pain radiating to the back and intractable vomiting. Serum lipase is 800 U/L. How should you assess the severity of his acute pancreatitis and manage him in the first 24 hours?
## Teaching Objectives
- Apply severity scoring systems to predict outcomes in acute pancreatitis.
- Implement evidence-based early management including fluid resuscitation, nutrition and etiology-specific therapy.
## Teaching Points
1. Diagnose acute pancreatitis when two of three criteria are met: characteristic abdominal pain, serum lipase or amylase ≥3 times the upper limit of normal and imaging findings; classify as mild, moderately severe or severe based on organ failure and complications [Ref 1].
2. The BISAP score (blood urea nitrogen >25 mg/dL, impaired mental status, SIRS, age >60 years, pleural effusion) predicts mortality; a score ≥3 has 56 % sensitivity and 91 % specificity for severe disease [Ref 2].
3. Early management includes aggressive isotonic fluid resuscitation (20 mL/kg bolus followed by 3 mL/kg/h), pain control with opioids and early enteral nutrition; lactated Ringer's solution may reduce systemic inflammation compared with normal saline [Ref 1].
4. Identify and treat the underlying cause: perform early endoscopic retrograde cholangiopancreatography for gallstone pancreatitis with cholangitis or persistent obstruction, and schedule cholecystectomy during the same admission [Ref 1].
5. Avoid prophylactic antibiotics and total parenteral nutrition unless infection or necrosis is documented; monitor for organ failure and consult surgery or critical care early in severe cases [Ref 1].
## Key Numbers
- BISAP score ≥3: indicates increased mortality and severe pancreatitis with 56 % sensitivity and 91 % specificity [Ref 2].
- Fluid resuscitation: 20 mL/kg bolus then 3 mL/kg/h for the first 24-48 hours; adjust based on urine output and hematocrit [Ref 1].
- Enteral feeding should begin within 24 hours when possible and is superior to parenteral nutrition [Ref 1].
## Common Pitfall
Routinely administering prophylactic antibiotics or delaying enteral feeding increases complications; initiate early nutrition and reserve antibiotics for proven infection or necrosis [Ref 1].
## Boards + Bedside Tie-In
Boards test the components of severity scores and early management steps. Clinically, stratifying severity and starting aggressive fluid resuscitation and early feeding reduce complications and mortality.
## References
1. Tenner S, Vege SS, Sheth SG, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024;119(3):419-437.
2. Gao W, Yang HX, Ma CE. The Value of BISAP Score for Predicting Mortality and Severity in Acute Pancreatitis: A Systematic Review and Meta-Analysis. PLoS One. 2015;10(6):e0130412.

---
# Small Bowel Obstruction: Conservative vs Surgical Management
## Clinical Setup
A 68-year-old man with a history of appendectomy presents with colicky abdominal pain, vomiting and abdominal distension. Abdominal radiographs show dilated small-bowel loops with air-fluid levels and no free air. How should his small-bowel obstruction be managed and when is surgery indicated?
## Teaching Objectives
- Differentiate patients who require conservative management from those needing surgery for small-bowel obstruction.
- Recognize clinical and imaging predictors of complicated obstruction.
## Teaching Points
1. Initial management for uncomplicated obstructions consists of intravenous fluid resuscitation, nasogastric decompression and bowel rest; administer broad-spectrum antibiotics in the presence of fever or leukocytosis [Ref 1].
2. Nonoperative management is successful for most partial obstructions; failure to resolve within 3-5 days or evidence of ischemia or perforation warrants surgical intervention [Ref 1].
3. Continuing conservative management beyond 48 hours does not decrease the need for surgery and is associated with increased morbidity [Ref 2].
4. Computed tomography predictors of need for surgery include free intraperitoneal fluid, mesenteric edema, absence of the small-bowel feces sign and a history of vomiting; together these findings have a sensitivity of 96 % and positive predictive value of 90 % for operative management [Ref 3].
5. Absolute indications for immediate surgery include peritonitis, strangulation, closed-loop obstruction and perforation; the classic dictum notes that the sun should not rise and set on a complete SBO [Ref 3].
## Key Numbers
- Conservative management success rate: approximately 65-80 %; failure to resolve after 48 hours increases morbidity [Ref 2].
- CT predictor combination yields 96 % sensitivity and 90 % positive predictive value for operative intervention [Ref 3].
- Timeframe for nonoperative trial: 3-5 days before considering surgery [Ref 1].
## Teaching Pearl
Water-soluble contrast studies may predict resolution and have therapeutic benefit; administering oral contrast via nasogastric tube can reduce time to resolution and guide surgical decision-making [Ref 1].
## Boards + Bedside Tie-In
Boards test recognition of imaging findings predicting strangulation or ischemia; clinically, timely surgical consultation and avoiding prolonged conservative management reduce complications and mortality.
## References
1. Millman CL, et al. Intestinal obstruction: evaluation and management. Am Fam Physician. 2018;98(6):362-370.
2. Chang PK, et al. Outcomes of prolonged nonoperative management of small-bowel obstruction.
3. Zielinski MD, Eftimoski M, et al. CT predictors of operative management for small-bowel obstruction. Ann Surg. 2010;252(4):??

---
# Acute Diarrhea: Infectious vs Non-Infectious
## Clinical Setup
A 30-year-old traveler returns from a developing country with abrupt onset of watery diarrhea, abdominal cramps and low-grade fever. He denies blood in the stools. How should his acute diarrhea be evaluated and when are antibiotics indicated?
## Teaching Objectives
- Distinguish between infectious and non-infectious causes of acute diarrhea and recognize indications for diagnostic testing.
- Implement evidence-based supportive care and judicious use of antibiotics and antidiarrheal agents.
## Teaching Points
1. Most cases of acute diarrhea are self-limited and require rehydration with oral rehydration solution containing salt and glucose; avoid high-sugar beverages and unnecessary dietary restrictions [Ref 2].
2. Stool cultures, ova and parasite testing and bacterial toxin assays are reserved for patients with severe illness (temperature ≥38.5 °C, bloody diarrhea, volume depletion), immunocompromised hosts or persistent symptoms; routine testing is unnecessary [Ref 1].
3. Empiric antibiotics are generally not recommended for immunocompetent adults with bloody diarrhea except in specific scenarios such as infants <3 months, suspected Shigella, severe disease or sepsis; avoid empiric therapy for enterohemorrhagic E. coli due to risk of hemolytic uremic syndrome [Ref 1].
4. For travel-associated diarrhea, classify severity: mild illness is tolerable and does not interfere with activities; moderate illness interferes with activities; severe illness causes incapacitation or includes dysentery. Mild cases require hydration ± loperamide; moderate cases may be treated with single-dose azithromycin; severe cases warrant antibiotics and close monitoring [Ref 2].
5. Antidiarrheal agents such as loperamide reduce stool frequency but should be avoided in bloody or febrile diarrhea; bismuth subsalicylate is an alternative when fever or blood is present [Ref 2][Ref 3].
## Key Numbers
- Oral rehydration therapy aims for 50-100 mL/kg over four hours in moderate dehydration, adjusting for ongoing losses [Ref 2].
- Azithromycin 1 g orally once is effective for moderate to severe traveler's diarrhea; fluoroquinolones are alternatives depending on region and resistance patterns [Ref 1].
- Definition of severe traveler's diarrhea: incapacitating or dysenteric disease that significantly interferes with planned activities [Ref 2].
## Common Pitfall
Empiric use of antibiotics or antidiarrheals in early illness may prolong shedding or precipitate complications; supportive care and risk-based testing are usually sufficient [Ref 1].
## Boards + Bedside Tie-In
Exam questions often test indications for stool cultures and empiric antibiotics. Clinically, focusing on rehydration, classifying travelers' diarrhea and exercising caution with antibiotics prevent unnecessary treatment and complications.
## References
1. Shane AL, Mody RK, Crump JA, et al. 2017 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and management of infectious diarrhea. Clin Infect Dis. 2017;65(12):e45-e80.
2. Chua DY, Ong G, Tan CK, et al. Acute gastroenteritis in adults: a global update. Singapore Med J. 2025;66(3):??
3. Freedman DO, Wichmann O. Antidiarrheal agents for travel-related diarrhea.

---
# Cirrhosis: Major Complications Overview
## Clinical Setup
A 58-year-old man with chronic hepatitis C and alcohol use develops ascites, recurrent hepatic encephalopathy and esophageal varices. He asks about his prognosis and management of complications. How should his decompensated cirrhosis be managed?
## Teaching Objectives
- Identify the major complications of cirrhosis and provide evidence-based management strategies.
- Counsel patients on prognosis and indications for transplant referral.
## Teaching Points
1. Major complications include portal hypertensive bleeding (variceal hemorrhage), ascites, spontaneous bacterial peritonitis (SBP), hepatic encephalopathy (HE) and hepatorenal syndrome (HRS); their occurrence marks decompensation and warrants referral to a transplant center when the MELD score ≥15 or any complication occurs [Ref 1].
2. Prevent first variceal bleeding with nonselective beta-blockers (propranolol, nadolol, carvedilol) or endoscopic band ligation; screen for varices at diagnosis and every 1-2 years, repeating more often if varices are present [Ref 1].
3. Manage ascites with sodium restriction (<2 g/day), abstinence from alcohol and diuretics starting with spironolactone 100-200 mg daily; add furosemide (40 mg) maintaining a 100:40 ratio; large-volume paracentesis with albumin replacement (6-8 g/L removed) is indicated for tense or refractory ascites [Ref 1][Ref 2].
4. HE is treated with lactulose titrated to 2-3 soft stools/day and add-on rifaximin; lactulose reduces mortality (8.5 % vs 14 %) and recurrent HE (25.5 % vs 46.8 %) while combination therapy improves remission [Ref 3].
5. HRS type 1 (acute kidney injury) has a median survival <2 weeks; vasoconstrictor therapy with terlipressin plus albumin improves reversal (39 % vs 18 %) and serves as a bridge to liver transplantation [Ref 3].
## Key Numbers
- Median survival after onset: 0.92 years for HE and 1.1 years for ascites [Ref 3].
- Annual incidence among ascites patients: SBP 11 %, HRS 8 % [Ref 3].
- Combination diuretics resolve ascites in 76 % vs sequential initiation in 56 %; hyperkalemia occurs in 4 % vs 18 % [Ref 3].
- Beta-blockers reduce risk of decompensation or death (16 % vs 27 %) [Ref 3].
## Teaching Pearl
Vaccinate against hepatitis A and B, avoid hepatotoxic drugs and perform surveillance for hepatocellular carcinoma (ultrasound with alpha-fetoprotein every 6 months); early transplant referral improves survival [Ref 1].
## Boards + Bedside Tie-In
Boards emphasize recognition of decompensated cirrhosis and prophylactic therapies. Clinically, anticipating complications, monitoring for variceal bleeding and ascites and referring for transplant evaluation are critical to improving outcomes.
## References
1. Smith A, Baumgartner K, Bositis C. Cirrhosis: Diagnosis and Management. Am Fam Physician. 2019;100(12):759-770.
2. Khan S, Linganna M. Diagnosis and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. Cleve Clin J Med. 2023;90(4):209-213.
3. Tapper EB, Parikh ND. Diagnosis and management of cirrhosis and its complications. JAMA. 2023;329(15):1499-1511.

---
# Hepatic Encephalopathy: Grading and Treatment
## Clinical Setup
A 62-year-old woman with cirrhosis presents with confusion and asterixis. She is oriented to person but not to time and place, with mild disorientation. How should you grade her hepatic encephalopathy and what is the optimal treatment?
## Teaching Objectives
- Apply the West Haven grading system to classify hepatic encephalopathy (HE).
- Implement pharmacologic and supportive management for HE and identify precipitants.
## Teaching Points
1. The West Haven criteria classify HE into four grades: grade I (trivial lack of attention, euphoria, sleep disturbance), grade II (disorientation, asterixis), grade III (marked confusion, somnolence) and grade IV (coma); minimal HE is grade 0 and along with grade I constitutes covert HE, whereas grades II-IV are overt HE [Ref 2].
2. Identify precipitating factors (such as infection, gastrointestinal bleeding, electrolyte disturbances, sedatives or dehydration) and treat them; exclude other causes of altered mental status [Ref 1].
3. First-line therapy is non-absorbable disaccharides (lactulose or lactitol); administer 25 mL orally every 1-2 hours until two soft bowel movements, then 15-45 mL three to four times daily to maintain 2-3 stools/day; avoid excessive dosing to prevent dehydration and hypokalemia [Ref 3].
4. Add rifaximin 550 mg orally twice daily to lactulose for secondary prophylaxis; combination therapy reduces recurrence and hospitalization compared with lactulose alone [Ref 3][Ref 4].
5. Patients with grade III or IV HE require airway protection and close monitoring; avoid sedatives, maintain protein intake (1.2-1.5 g/kg/day) and consider zinc or L-ornithine L-aspartate supplementation, though data are limited [Ref 1].
## Key Numbers
- West Haven grading: grade I (trivial lack of attention), grade II (disorientation/asterixis), grade III (somnolence/confusion), grade IV (coma) [Ref 2].
- Lactulose dosing: 25 mL every 1-2 hours until two bowel movements, then 15-45 mL three times daily; rectal dosing 300 mL in 1 L water every 6-8 hours for comatose patients [Ref 3].
- Rifaximin plus lactulose reduces recurrence of HE and hospitalizations compared with lactulose alone (91 % vs 74 % remission in a randomized trial) [Ref 4].
## Teaching Pearl
Protein restriction is unnecessary; maintain adequate protein intake (1.2-1.5 g/kg/day) to prevent muscle wasting, which helps clear ammonia via glutamine synthesis [Ref 1].
## Boards + Bedside Tie-In
Boards test recognition of covert versus overt HE and appropriate therapeutic steps. Clinically, promptly identifying precipitants, titrating lactulose correctly and adding rifaximin for secondary prophylaxis reduces recurrence and improves quality of life.
## References
1. Vilstrup H, Amodio P, Bajaj J, et al. Hepatic encephalopathy in chronic liver disease: 2014 practice guideline by the AASLD and EASL. Hepatology. 2014;60(2):715-735.
2. Ferenci P, Lockwood A, Mullen K, et al. Hepatic encephalopathy: definition, clinical grading and diagnostic principles. Drugs. 2019;79(1):5-17.
3. Diagnosis and management of hepatic encephalopathy. Hepatitis C Online. University of Washington; 2024.
4. Bass NM, Mullen KD, Sanyal A, et al. Rifaximin treatment in hepatic encephalopathy. N Engl J Med. 2010;362(12):1071-1081.

---
# Ascites Management and SBP Prophylaxis
## Clinical Setup
A 55-year-old man with cirrhosis presents with progressive abdominal distension and early satiety. Paracentesis reveals a low-protein ascitic fluid with a serum-ascites albumin gradient >1.1 g/dL. How should you manage his ascites and which patients require spontaneous bacterial peritonitis (SBP) prophylaxis?
## Teaching Objectives
- Implement a stepwise approach to ascites management and recognize indications for SBP prophylaxis.
- Optimize diuretic therapy and albumin replacement to prevent complications.
## Teaching Points
1. Perform diagnostic paracentesis on all patients with new or worsening ascites to determine etiology and rule out SBP; ascites signifies decompensated cirrhosis and mandates transplant evaluation [Ref 2].
2. First-line therapy includes sodium restriction (≤2 g/day), abstinence from alcohol and diuretics starting with spironolactone 100 mg plus furosemide 40 mg daily; titrate every 3-5 days up to a maximum of 400/160 mg maintaining a 100:40 ratio to prevent hyperkalemia [Ref 2][Ref 3].
3. Large-volume paracentesis (>5 L) requires albumin infusion 6-8 g per litre removed; albumin 1.5 g/kg on day 1 and 1 g/kg on day 3 is recommended when treating SBP with renal dysfunction [Ref 3].
4. SBP prophylaxis is indicated after an episode of SBP (secondary prophylaxis reduces recurrence from 68 % to 20 %) and in patients with ascitic protein <1.5 g/dL plus renal impairment (creatinine ≥1.2 mg/dL, BUN ≥25 mg/dL or sodium ≤130 mEq/L) or advanced liver disease (Child-Pugh ≥9 and bilirubin ≥3 mg/dL); daily norfloxacin 400 mg or trimethoprim-sulfamethoxazole 800/160 mg is recommended [Ref 1].
5. For gastrointestinal hemorrhage, a 7-day course of ceftriaxone 1 g/day or equivalent oral antibiotics reduces infection and mortality (43 % vs 15 %) [Ref 1]; fluid restriction (1-1.5 L/day) is reserved for severe hyponatremia (<125 mEq/L) [Ref 3].
## Key Numbers
- Maximum diuretic doses: spironolactone 400 mg/day and furosemide 160 mg/day with a 100:40 ratio [Ref 2][Ref 3].
- Albumin dosing: 6-8 g per litre removed during large-volume paracentesis; 1.5 g/kg day 1 and 1 g/kg day 3 for SBP with renal dysfunction [Ref 3].
- SBP prophylaxis reduces recurrence from 68 % to 20 %; GI hemorrhage prophylaxis reduces mortality from 43 % to 15 % [Ref 1].
## Common Pitfall
Delaying diagnostic paracentesis or unnecessary proton pump inhibitor use increases SBP risk; perform paracentesis promptly and discontinue PPIs unless clearly indicated [Ref 2].
## Boards + Bedside Tie-In
Boards emphasize sodium restriction, diuretic dosing ratios and indications for albumin and SBP prophylaxis. In practice, adherence to these protocols prevents hepatorenal syndrome and improves survival.
## References
1. Recognition and management of spontaneous bacterial peritonitis. Hepatitis C Online. University of Washington; 2024.
2. Khan S, Linganna M. Diagnosis and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. Cleve Clin J Med. 2023;90(4):209-213.
3. European Association for the Study of the Liver. Guidelines on the management of ascites in cirrhosis. Gut. 2020;69(9):1687-1718.

---
# Acute Liver Failure: Recognition and Transplant Referral
## Clinical Setup
A 35-year-old woman presents two weeks after ingesting high doses of acetaminophen with jaundice, INR 2.3 and confusion. She has no history of liver disease. How do you recognize acute liver failure and when should you consider transplant referral?
## Teaching Objectives
- Define acute liver failure and implement early management strategies, including specific therapies.
- Recognize prognostic criteria and indications for urgent liver transplant referral.
## Teaching Points
1. Acute liver failure (ALF) is characterized by rapid hepatic injury with coagulopathy (INR ≥1.5) and any degree of hepatic encephalopathy in a patient without pre-existing liver disease, usually within <26 weeks of symptom onset [Ref 2][Ref 3].
2. Common etiologies include acetaminophen toxicity, viral hepatitis, autoimmune hepatitis, ischemia, Wilson disease and drug reactions; prompt identification of cause is essential for targeted therapy (e.g., N-acetylcysteine for acetaminophen) [Ref 1].
3. Initial management focuses on airway protection, hemodynamic stabilization, correction of hypoglycemia and prevention of cerebral edema; maintain serum sodium 140-150 mEq/L and treat intracranial hypertension with mannitol or hypertonic saline [Ref 2].
4. N-acetylcysteine is first-line therapy for acetaminophen-induced ALF and may improve outcomes in non-acetaminophen ALF; consider plasma exchange or molecular adsorbent recirculating systems in refractory cases [Ref 2].
5. Early transplant referral is critical; the King's College criteria (arterial pH <7.3 after resuscitation or INR >6.5, creatinine >3.4 mg/dL and grade III-IV encephalopathy) and high MELD scores indicate poor prognosis and need for transplantation [Ref 1].
## Key Numbers
- ALF definition: INR ≥1.5 plus hepatic encephalopathy within <26 weeks in absence of pre-existing liver disease [Ref 2].
- Serum ammonia >150-200 µmol/L is associated with cerebral edema and intracranial hypertension [Ref 2].
- King's College criteria: arterial pH <7.3 or (INR >6.5, creatinine >3.4 mg/dL and grade III-IV encephalopathy) predict mortality and need for transplant [Ref 1].
## Teaching Pearl
Early initiation of continuous renal replacement therapy in patients with grade ≥2 encephalopathy lowers ammonia levels and improves transplant-free survival; bridging therapies should not delay transfer to a transplant center [Ref 2].
## Boards + Bedside Tie-In
Boards test the definition of ALF and the criteria for transplant referral. Clinically, rapid recognition, prompt administration of specific antidotes and early communication with a transplant center are paramount.
## References
1. Polson J, Lee WM. AASLD position paper: the management of acute liver failure. Hepatology. 2005;41(5):1179-1197.
2. Acute Liver Failure 2024. SurgicalCriticalCare.net.
3. Bernal W, Wendon J. Acute liver failure. N Engl J Med. 2013;369(26):2525-2534.

---
# Alcohol Withdrawal: Inpatient Management
## Clinical Setup
A 45-year-old man with alcohol use disorder is hospitalized for cellulitis. Twelve hours after his last drink he develops tremors, agitation, diaphoresis and tachycardia. How should alcohol withdrawal syndrome (AWS) be managed in the hospital?
## Teaching Objectives
- Recognize risk factors and severity of alcohol withdrawal syndrome and implement monitoring tools.
- Apply evidence-based pharmacologic regimens and supportive care for AWS.
## Teaching Points
1. AWS develops in 1-5 % of hospitalized patients with chronic alcohol use, and 3-11 % progress to delirium tremens or seizures; risk factors include high daily intake, previous severe withdrawal and concomitant liver disease [Ref 1].
2. Use symptom-triggered therapy guided by standardized scales such as the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) or Brief Alcohol Withdrawal Scale (BAWS); scores direct benzodiazepine dosing and monitoring frequency [Ref 1][Ref 2][Ref 3].
3. Front-loading with long-acting benzodiazepines (diazepam 10-20 mg or chlordiazepoxide 50-100 mg every 1-2 hours) or intermediate-acting benzodiazepines (lorazepam 2-4 mg every 1-2 hours) rapidly controls severe withdrawal; lorazepam or oxazepam is preferred in liver disease due to minimal hepatic metabolism [Ref 1].
4. Fixed-dose regimens may use diazepam 20 mg every 2 hours until CIWA-Ar <10, with a ceiling of 60 mg/day or 125 mg/day for chlordiazepoxide; prophylactic lorazepam 2 mg IV prevents withdrawal seizures in high-risk patients [Ref 3].
5. Adjunctive measures include thiamine 100 mg IV or IM before glucose administration to prevent Wernicke encephalopathy, electrolyte repletion, and beta-blockers or alpha-2 agonists for autonomic symptoms; severe or refractory withdrawal may require phenobarbital or dexmedetomidine and ICU monitoring [Ref 1].
## Key Numbers
- BAWS score 3-5: treat with lorazepam 2 mg every 4 hours; score 6-8: lorazepam 4 mg every 2 hours until the score drops below target [Ref 1].
- Loading dose regimen: diazepam 20 mg every 2 hours until CIWA-Ar <10, with maximum 60 mg/day; lorazepam 4 mg may be substituted [Ref 3].
- Delirium tremens mortality can reach 15 % untreated; early benzodiazepine therapy reduces mortality to <5 % [Ref 1].
## Common Pitfall
Undertreating early withdrawal symptoms leads to seizures or delirium tremens; conversely, over-sedation with long-acting benzodiazepines in patients with liver disease can cause respiratory depression; choose agents and dosing based on liver function and severity [Ref 1][Ref 3].
## Boards + Bedside Tie-In
Boards test the use of withdrawal scales and appropriate benzodiazepine selection. Clinically, symptom-triggered regimens with thiamine supplementation prevent complications, while adjusting doses for hepatic impairment optimizes safety.
## References
1. Ratner JA, Blaney H, Rastegar DA. Management of alcohol withdrawal syndrome in patients with alcohol-associated liver disease. Hepatol Commun. 2024;8(2).
2. Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the CIWA-Ar scale. Br J Addict. 1989;84(11):1353-1357.
3. Myrick H, Malcolm R, Randall PK, et al. A double-blind trial of gabapentin versus lorazepam in the treatment of alcohol withdrawal. Alcohol Clin Exp Res. 2009;33(9):1582-1588.

---
# Approach to Inpatient Anemia
## Clinical Setup
A 68-year-old woman hospitalized for pneumonia is noted to have hemoglobin 7.5 g/dL. She denies overt bleeding but reports fatigue and dyspnea on exertion. How do you evaluate her anemia and decide on transfusion?
## Teaching Objectives
- Develop an algorithmic approach to evaluating inpatient anemia.
- Apply restrictive transfusion thresholds and manage underlying causes of anemia.
## Teaching Points
1. Anemia is defined as hemoglobin <13 g/dL in men and <12 g/dL in women; categorize by mean corpuscular volume (MCV): microcytic (<80 fL), normocytic (80-100 fL) and macrocytic (>100 fL) to guide evaluation [Ref 2][Ref 3].
2. Evaluate for acute blood loss, nutritional deficiency, chronic disease, hemolysis or bone marrow suppression; initial tests include CBC with indices, reticulocyte count, iron studies, vitamin B₁₂ and folate levels, creatinine, LDH, haptoglobin and peripheral smear [Ref 1].
3. Restrictive transfusion strategy: transfuse one unit of packed red blood cells when hemoglobin <7 g/dL in hemodynamically stable adults without active bleeding; use thresholds of 7.5 g/dL for cardiac surgery and 8 g/dL for orthopedic surgery or preexisting cardiovascular disease, and reassess after each unit [Ref 1].
4. Determine underlying cause: iron-deficiency anemia (microcytic) requires iron supplementation and evaluation for chronic blood loss; anemia of chronic disease is managed by treating the underlying condition; macrocytic anemia warrants investigation for vitamin B₁₂ or folate deficiency and review of medications [Ref 1].
5. Avoid transfusion-related complications by adhering to restrictive thresholds; unnecessary transfusions increase risk of volume overload, immunomodulation and infection; match ABO/Rh and transfuse slowly in the elderly or those with heart failure [Ref 1].
## Key Numbers
- Transfusion thresholds: <7 g/dL for general hospitalized patients; <7.5 g/dL for cardiac surgery; <8 g/dL for orthopedic surgery or patients with preexisting cardiovascular disease [Ref 1].
- MCV classification: microcytic <80 fL, normocytic 80-100 fL, macrocytic >100 fL [Ref 2].
- Anemia definitions: hemoglobin <13 g/dL in men and <12 g/dL in women [Ref 2].
## Teaching Pearl
Evaluate symptomatic anemia even when hemoglobin is above threshold; treat the underlying cause and always check medication history for bone marrow suppressants (e.g., chemotherapy, antimicrobials) [Ref 1].
## Boards + Bedside Tie-In
Boards test transfusion thresholds and evaluation algorithms. At bedside, using MCV to categorize anemia guides targeted testing, and adherence to restrictive transfusion strategies improves outcomes.
## References
1. Carson JL, Guyatt G, Heddle NM, et al. Red blood cell transfusion: a clinical practice guideline from the AABB. JAMA. 2023;330(3):277-288.
2. Rigaud L, Chiron C, Tavernier V, et al. Laboratory tests for investigating anemia: from an expert system to artificial intelligence. Pract Lab Med. 2024;34:??
3. World Health Organization. Haemoglobin concentrations for the diagnosis of anaemia and assessment of severity. World Health Organization; 2011.

---
# Thrombocytopenia: HIT vs Other Causes
## Clinical Setup
A 60-year-old man receiving unfractionated heparin for deep-vein thrombosis prophylaxis develops a platelet count drop from 250 000/µL to 90 000/µL on day 6 of therapy. He has no bleeding or thrombosis. How do you evaluate thrombocytopenia and differentiate heparin-induced thrombocytopenia (HIT) from other causes?
## Teaching Objectives
- Use the 4T score to assess pretest probability of HIT and initiate appropriate management.
- Differentiate HIT from immune thrombocytopenia and other causes of low platelets.
## Teaching Points
1. Evaluate timing of platelet fall, degree of thrombocytopenia, presence of thrombosis and other potential causes such as sepsis, medications, disseminated intravascular coagulation or pseudothrombocytopenia; confirm low counts with repeat CBC or peripheral smear [Ref 3].
2. The 4T score (thrombocytopenia, timing, thrombosis and other causes) assigns 0-2 points for each element; scores 0-3 indicate low probability, 4-5 intermediate and 6-8 high probability of HIT [Ref 1].
3. In low-probability cases (score ≤3), continue heparin and monitor; intermediate or high probability requires immediate discontinuation of all heparin (including flushes) and initiation of a non-heparin anticoagulant such as argatroban, bivalirudin, fondaparinux or a direct oral anticoagulant [Ref 2].
4. Perform enzyme-linked immunoassay for HIT antibodies; confirm positive results with a functional assay (serotonin release assay) when available; avoid warfarin in acute HIT and reverse vitamin K anticoagulation with 5-10 mg vitamin K; initiate warfarin only when platelet count recovers >150 000/µL [Ref 2].
5. Immune thrombocytopenia (ITP) is a diagnosis of exclusion; evaluate for secondary causes (HIV, HCV, systemic lupus erythematosus) and treat with corticosteroids (prednisone 1 mg/kg/day) or high-dose IVIG; platelet transfusion is reserved for life-threatening bleeding; fatal intracranial hemorrhage occurs in ~1 % of adults [Ref 3].
## Key Numbers
- 4T score categories: low 0-3, intermediate 4-5, high 6-8 [Ref 1].
- HIT occurs in up to 5 % of patients on unfractionated heparin and <1 % on low-molecular-weight heparin [Ref 2].
- Fatal intracranial hemorrhage in ITP occurs in ~1 % of adults and 0.4 % of children [Ref 3].
## Teaching Pearl
Always consider pseudothrombocytopenia due to platelet clumping in EDTA tubes; verify platelet count with a peripheral smear or citrate tube before initiating an extensive workup [Ref 3].
## Boards + Bedside Tie-In
Boards test the 4T score and management of HIT versus ITP. Clinically, early recognition and discontinuation of heparin with initiation of non-heparin anticoagulants prevents thrombosis and mortality.
## References
1. Cuker A, et al. American Society of Hematology 2018 guidelines for the management of heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.
2. Ng JY, DSouza M, Hutani F, Choi P. Management of Heparin-Induced Thrombocytopenia: A Contemporary Review. J Clin Med. 2024;13(16):4686.
3. Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.

---
# Anticoagulation Reversal Strategies
## Clinical Setup
A 70-year-old woman on warfarin for atrial fibrillation presents with an intracranial hemorrhage and INR 4.5. How should her anticoagulation be reversed, and what reversal agents are available for direct oral anticoagulants (DOACs)?
## Teaching Objectives
- Summarize reversal strategies for vitamin K antagonists and direct oral anticoagulants.
- Highlight dosing and indications of specific antidotes and supportive measures.
## Teaching Points
1. In warfarin-associated major bleeding, discontinue warfarin and administer four-factor prothrombin complex concentrate (PCC) 50 IU/kg (maximum 5 000 IU) plus vitamin K 5-10 mg IV; PCC normalizes the INR rapidly and is preferred over fresh frozen plasma due to quicker reversal and lower volume [Ref 2].
2. Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment that reverses dabigatran; administer 5 g IV (two 2.5 g boluses); it provides immediate and sustained reversal and is indicated for life-threatening bleeding or urgent surgery [Ref 3].
3. Andexanet alfa (Andexxa) is a recombinant modified factor Xa decoy protein that reverses factor Xa inhibitors (rivaroxaban, apixaban, edoxaban); dosing depends on the specific agent and time since last dose (e.g., 400 mg bolus followed by 4 mg/min infusion for low-dose reversal; 800 mg bolus followed by 8 mg/min infusion for high-dose reversal); due to cost and thrombosis risk, use is reserved for life-threatening bleeding [Ref 4].
4. Protamine sulfate antagonizes unfractionated heparin at a dose of 1 mg per 100 units of heparin and partially reverses low-molecular-weight heparin (1 mg per mg enoxaparin if given within 8 hours); maximum dose 50 mg; reversal of fondaparinux is not available [Ref 1].
5. In minor bleeding or when specific reversal agents are unavailable, consider activated prothrombin complex concentrates, activated charcoal (if ingestion within 2 hours), hemodialysis for dabigatran, and supportive measures; always restart anticoagulation when appropriate to balance thrombotic and bleeding risks [Ref 2].
## Key Numbers
- Vitamin K 5-10 mg IV plus four-factor PCC 50 IU/kg rapidly corrects warfarin-associated coagulopathy; fresh frozen plasma requires 15 mL/kg and has slower onset [Ref 2].
- Idarucizumab 5 g IV provides immediate dabigatran reversal with median time to hemostasis 11.4 hours [Ref 3].
- Andexanet alfa high-dose regimen (800 mg bolus + 960 mg infusion) vs low-dose (400 mg + 480 mg infusion) depending on last dose and time since DOAC ingestion [Ref 4].
## Teaching Pearl
Vitamin K alone reverses warfarin within 24 hours; for major bleeding or urgent surgery, combine with PCC. Avoid subcutaneous vitamin K due to erratic absorption and delayed effect [Ref 2].
## Boards + Bedside Tie-In
Boards test specific antidotes for DOACs and reversal protocols for warfarin. Clinically, having standardized protocols and understanding agent-specific reversal facilitates rapid management of life-threatening bleeding while minimizing thrombotic complications.
## References
1. Levy JH, Ageno W, Chan NC, et al. When and how to use protamine and other reversal agents. J Thromb Thrombolysis. 2016;41(3):379-398.
2. Keeling D, Baglin T, Tait C, et al. Guidelines on oral anticoagulation with warfarin - fourth edition. Br J Haematol. 2011;154(3):311-324.
3. Pollack CV Jr, Reilly PA, Eikelboom JW, et al. Idarucizumab for dabigatran reversal. N Engl J Med. 2015;373(6):511-520.
4. Connolly SJ, Crowther M, Eikelboom JW, et al. Andexanet alfa for acute major bleeding associated with factor Xa inhibitors. N Engl J Med. 2016;375(12):1131-1141.

---
# Tumor Lysis Syndrome: Prevention and Treatment
## Clinical Setup
A 22-year-old man with newly diagnosed high-grade lymphoma is scheduled to start chemotherapy. His white blood cell count is 120 000/µL and lactate dehydrogenase is markedly elevated. What is tumor lysis syndrome (TLS), and how can it be prevented and treated?
## Teaching Objectives
- Identify patients at risk for TLS and apply preventive strategies.
- Manage electrolyte derangements and implement specific therapies when TLS occurs.
## Teaching Points
1. TLS results from rapid lysis of malignant cells, releasing potassium, phosphate and nucleic acids that lead to hyperuricemia, hyperkalemia, hyperphosphatemia, hypocalcemia and acute kidney injury; it may occur spontaneously or after chemotherapy; high risk includes bulky tumors (e.g., Burkitt lymphoma), white blood cell count >100 000/µL, elevated LDH and pre-existing renal dysfunction [Ref 1].
2. Prevention begins with aggressive intravenous hydration (2-3 L/m²/day) to maintain urine output ≥100 mL/m²/hour; correct electrolyte abnormalities and avoid nephrotoxic drugs; monitor electrolytes, uric acid and renal function every 4-6 hours during high-risk periods [Ref 1].
3. Allopurinol 100-300 mg/day or 10 mg/kg/day orally inhibits xanthine oxidase and prevents new uric acid formation; rasburicase 0.2 mg/kg IV degrades existing uric acid to allantoin and is preferred for high-risk patients or when uric acid >8 mg/dL or creatinine is elevated; avoid rasburicase in glucose-6-phosphate dehydrogenase deficiency [Ref 2].
4. Treat hyperkalemia with intravenous calcium gluconate, insulin with glucose, β-agonists and loop diuretics; manage hyperphosphatemia with phosphate binders and dialysis; treat symptomatic hypocalcemia cautiously to prevent calcium-phosphate precipitation [Ref 3].
5. Risk stratification guides prophylaxis: low risk (standard hydration ± allopurinol), intermediate risk (vigorous hydration + allopurinol) and high risk (hydration + rasburicase); ongoing monitoring adjusts therapy accordingly [Ref 2].
## Key Numbers
- Cairo-Bishop laboratory TLS criteria include uric acid ≥8 mg/dL, potassium ≥6 mEq/L, phosphate ≥4.5 mg/dL and calcium ≤7 mg/dL or a 25 % change from baseline within three days of therapy [Ref 1].
- TLS occurs in 3-5 % of patients with hematologic malignancies; mortality approaches 20 % if untreated [Ref 1].
- Rasburicase 0.2 mg/kg IV reduces uric acid within four hours and prevents need for dialysis; allopurinol prevents new uric acid formation but does not lower existing uric acid [Ref 2].
## Teaching Pearl
Urine alkalinization is no longer recommended for TLS prevention because it promotes calcium-phosphate precipitation; focus instead on hydration and uric acid control [Ref 2].
## Boards + Bedside Tie-In
Boards require knowledge of Cairo-Bishop criteria and prophylactic measures. Clinically, early identification of high-risk patients and aggressive prophylaxis with hydration and uric acid-lowering therapy prevent acute kidney injury and life-threatening electrolyte disorders.
## References
1. Howard SC, Jones DP, Pui CH. The tumor lysis syndrome. N Engl J Med. 2011;364(19):1844-1854.
2. Jones GL, Will A, Jackson GH, et al. Guidelines for the management of tumour lysis syndrome in adults and children with haematological malignancies on behalf of the British Committee for Standards in Haematology. Br J Haematol. 2015;169(5):661-671.
3. Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol. 2004;127(1):3-11.

---
# Neutropenic Fever: Initial Management
## Clinical Setup
A 55-year-old woman undergoing chemotherapy for breast cancer develops a temperature of 38.4 °C and an absolute neutrophil count (ANC) of 400 cells/µL. She is hemodynamically stable. What is the initial management of neutropenic fever?
## Teaching Objectives
- Recognize the diagnostic criteria for neutropenic fever and perform immediate evaluation.
- Initiate empiric broad-spectrum antibiotics promptly and stratify patients for inpatient versus outpatient care.
## Teaching Points
1. Neutropenic fever is defined as a single oral temperature ≥38.3 °C or a sustained temperature ≥38.0 °C for at least one hour in a patient with neutropenia (ANC <500 cells/µL or expected to decline <500 within 48 hours); it is an oncologic emergency requiring prompt treatment [Ref 1].
2. Conduct a rapid assessment: obtain two sets of blood cultures (from peripheral and central lines), urine and other cultures as indicated, and perform a focused physical examination and chest imaging if respiratory symptoms are present; do not delay antibiotics for culture collection [Ref 1].
3. Administer empiric broad-spectrum IV antibiotics within 60 minutes; options include cefepime 2 g every 8 hours, piperacillin-tazobactam 4.5 g every 6 hours or meropenem 1 g every 8 hours; add vancomycin only for suspected catheter-related infection, skin infection, pneumonia or hemodynamic instability [Ref 1].
4. Use the Multinational Association for Supportive Care in Cancer (MASCC) score or Clinical Index of Stable Febrile Neutropenia (CISNE) to stratify risk; low-risk patients (MASCC score ≥21) with stable vital signs and no comorbidities may receive oral antibiotics (ciprofloxacin plus amoxicillin-clavulanate) and outpatient management; high-risk patients require inpatient IV therapy and daily monitoring [Ref 2] [Ref 3].
5. Continue empiric antibiotics until neutrophil recovery or documented resolution of infection; if fever persists for >4-7 days and neutropenia is prolonged, initiate empiric antifungal therapy; administer granulocyte colony-stimulating factor only in selected high-risk cases [Ref 1].
## Key Numbers
- Fever definition: ≥38.3 °C once or ≥38.0 °C sustained for one hour; neutropenia defined as ANC <500 cells/µL or expected to fall below 500 within 48 hours [Ref 1].
- Antibiotics should be administered within 60 minutes of fever detection; delays increase mortality [Ref 1].
- MASCC score ≥21 identifies low-risk patients with <5 % risk of complications and eligibility for outpatient management [Ref 2].
## Teaching Pearl
Avoid digital rectal examinations and urinary catheters in neutropenic patients due to risk of mucosal injury and bacteremia; promptly remove indwelling catheters if infection is suspected [Ref 1].
## Boards + Bedside Tie-In
Boards emphasize the criteria for febrile neutropenia and early empiric antibiotic therapy. Clinically, timely initiation of broad-spectrum antibiotics and appropriate risk stratification are critical for survival.
## References
1. Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011;52(4):e56-e93.
2. Klastersky J, de Naurois J, Rolston K, et al. Management of febrile neutropaenia: 2016 guidelines from the European Society for Medical Oncology (ESMO). Ann Oncol. 2016;27(suppl 5):v111-v118.
3. Taplitz RA, Kennedy EB, Bow EJ, et al. Outpatient management of fever and neutropenia in adults treated for malignancy: ASCO and IDSA guideline update. J Clin Oncol. 2018;36(14):1443-1453.
`,Jp=`# Managing Severe Hyperkalemia

## Clinical Setup
A 68-year-old man with chronic kidney disease stage IV on lisinopril and spironolactone presents to the emergency department with a serum potassium of 7.2 mEq/L. He is asymptomatic but his electrocardiogram demonstrates peaked T-waves without QRS prolongation. What is the appropriate management strategy?

## Teaching Objectives
- Recognize when hyperkalemia requires emergent therapy
- Implement the three-step approach to stabilize, shift, and remove potassium

## Teaching Points
1. Severe hyperkalemia (K⁺ >6.0 mEq/L or any ECG change) requires immediate treatment. Management occurs in three steps: stabilize the cardiac membrane with intravenous calcium, shift potassium intracellularly, and remove total body potassium through excretion or dialysis [Ref 1].
2. To stabilize the membrane, administer calcium gluconate 1-2 g IV over 2-3 minutes. Effects begin in 1-3 minutes and last 30-60 minutes; repeat doses may be needed if ECG abnormalities persist. Calcium lowers arrhythmia risk but does not reduce serum potassium [Ref 1].
3. Insulin and dextrose shift potassium into cells. Give 10 units of regular insulin IV with 25 g of dextrose; expect a 0.5-1.2 mEq/L decrease in 15-30 minutes. Monitor glucose closely to avoid hypoglycemia [Ref 1]. Nebulized albuterol 10-20 mg offers an additive 0.5-1.0 mEq/L reduction but may cause tachycardia [Ref 1].
4. Definitive removal requires enhancing renal excretion or extracorporeal removal. Loop diuretics increase urinary potassium loss if kidney function allows. Newer potassium binders (patiromer, sodium zirconium cyclosilicate) are safer than older resin agents but act slowly; dialysis is required for end-stage kidney disease or refractory hyperkalemia [Ref 1, Ref 2].
5. In crush syndrome or rhabdomyolysis, aggressive isotonic fluid resuscitation (goal urine output 200-300 mL/h) helps prevent acute kidney injury and attenuates hyperkalemia. Frequent serum potassium monitoring every 4 hours guides ongoing therapy [Ref 2].

## Key Numbers
- Potassium >6.0 mEq/L or any ECG change: threshold for emergent therapy; K⁺ >6.5 mEq/L with ECG changes constitutes a medical emergency warranting immediate calcium administration [Ref 1].
- Regular insulin 10 units IV plus 25 g dextrose reduces serum potassium by roughly 0.5-1.2 mEq/L within 15-30 minutes; hypoglycemia occurs in up to 75 % of patients if dextrose is omitted [Ref 1].
- Urine output target 200-300 mL/h in crush-related hyperkalemia: achieved by high-volume isotonic fluids to mitigate myoglobin-induced renal tubular injury [Ref 2].

## Common Pitfall
Relying on sodium polystyrene sulfonate (Kayexalate) for acute hyperkalemia is problematic. It has an unpredictable onset of action (hours to days) and risk of intestinal necrosis; it should not be used for emergent management. Newer binders have improved safety profiles but are still too slow for acute emergencies [Ref 1].

## Boards + Bedside Tie-In
Examination questions often test recognition of ECG changes and which therapies stabilize membranes versus lower serum potassium. At the bedside, apply the same sequence: administer calcium to buy time, then layer insulin/dextrose and beta-agonists, and arrange for definitive removal via diuretics or dialysis while monitoring for hypoglycemia and rebound hyperkalemia.

## References
1. Lindner G, Burdmann EA, Clase CM, et al. Acute hyperkalemia in the emergency department: a summary from a Kidney Disease: Improving Global Outcomes conference. Eur J Emerg Med. 2020;27(5):329-337. doi:10.1097/MEJ.0000000000000691 PMID: 32852924
2. Abu-Zidan FM, Jawas A, Saleh M, et al. Surgical and critical care management of earthquake musculoskeletal injuries and crush syndrome. Turk J Emerg Med. 2024;24(1):44-55. doi:10.1016/j.tjem.2023.08.002 PMID: 38766416

# Sepsis: Recognition and the First Three Hours

## Clinical Setup
A 75-year-old man with diabetes and chronic obstructive pulmonary disease presents with fever, confusion, tachypnea, hypotension (blood pressure 86/50 mm Hg) and lactate of 4.2 mmol/L. Blood cultures are pending. What interventions should be prioritized during the first three hours?

## Teaching Objectives
- Identify sepsis and initiate early goal-directed resuscitation
- Balance fluid resuscitation with avoidance of fluid overload

## Teaching Points
1. Sepsis is defined as life-threatening organ dysfunction caused by a dysregulated host response to infection. Initial evaluation includes measurement of blood pressure, mental status and lactate. Hypotension or elevated lactate signals sepsis-induced hypoperfusion and necessitates prompt intervention [Ref 1].
2. Early broad-spectrum antibiotics improve survival. Administer empiric therapy as soon as possible after obtaining cultures; do not delay antibiotics beyond the time needed for culture collection [Ref 1].
3. Fluid resuscitation is the cornerstone of early management. Current guidelines recommend 30 mL/kg of isotonic crystalloid for hypotension or lactate ≥4 mmol/L. However, observational data indicate that cumulative positive fluid balance is associated with increased mortality; therefore, reassess volume status frequently and individualize further fluid administration [Ref 1, Ref 2].
4. After the initial bolus, assess hemodynamic response. Target a mean arterial pressure (MAP) of at least 65 mm Hg. If hypotension persists despite adequate fluids, initiate vasopressors (norepinephrine is first-line) and consider invasive hemodynamic monitoring. Avoid excess fluids in patients with cardiogenic or renal limitations [Ref 1, Ref 2].
5. Concurrent tasks include obtaining blood cultures before antibiotics when feasible, identifying the source of infection (e.g., imaging, bedside examination) and controlling it (e.g., drainage or removal of infected devices). Early source control is as important as resuscitation.

## Key Numbers
- 30 mL/kg isotonic crystalloid: recommended initial bolus for sepsis-induced hypoperfusion; for an 80 kg patient this equates to 2.4 liters [Ref 1].
- MAP ≥65 mm Hg: target after fluid resuscitation; persistent MAP <65 despite fluids necessitates vasopressors [Ref 1].
- Positive fluid balance: observational studies show that each liter of positive balance beyond the initial resuscitation is associated with increased mortality; judicious fluid management improves outcomes [Ref 2].

## Common Pitfall
Over-resuscitation with fluids without reassessment can lead to pulmonary edema, abdominal compartment syndrome or heart failure exacerbation. After the initial bolus, use dynamic indices (pulse pressure variation, passive leg raise) and bedside ultrasound to guide further fluids, and start vasopressors when appropriate [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize elements of the sepsis bundle (fluid resuscitation, antibiotics, lactate measurement) and MAP targets. Clinically, the challenge is balancing aggressive resuscitation with fluid overload risk. Maintaining a structured checklist-cultures, antibiotics, fluids, vasopressors-helps ensure timely interventions.

## References
1. Jozwiak M, Hamzaoui O, Georger J, et al. Fluid resuscitation during early sepsis: a need for individualization. Minerva Anestesiol. 2018;84(8):987-992. doi:10.23736/S0375-9393.18.12422-9 PMID: 29444562
2. Tigabu BM, Davari M, Gohari B, et al. Fluid volume, fluid balance and patient outcome in severe sepsis and septic shock. J Crit Care. 2018;48:153-159. doi:10.1016/j.jcrc.2018.08.018 PMID: 30199843

# Shock: Classification and Initial Approach

## Clinical Setup
A 63-year-old man presents with chest pain, diaphoresis and blood pressure 70/40 mm Hg. He is tachycardic and cool to the touch. The team must determine the type of shock and initiate appropriate therapy. How should he be evaluated and managed?

## Teaching Objectives
- Differentiate the major classes of shock and their pathophysiology
- Apply an algorithmic initial approach tailored to the underlying type

## Teaching Points
1. Shock is defined as inadequate tissue perfusion resulting in cellular dysfunction. It can be categorized into four major types: hypovolemic (volume loss), cardiogenic (pump failure), distributive (systemic vasodilation, e.g., sepsis or anaphylaxis) and obstructive (extracardiac impedance to flow, such as pulmonary embolism or cardiac tamponade). Classification guides targeted therapy [Ref 2].
2. Hypovolemic shock results from hemorrhage or fluid losses (vomiting, diarrhea, burns). Management focuses on rapid control of bleeding and replacement of intravascular volume with crystalloid and blood products; vasopressors are generally not first-line until volume is restored [Ref 2].
3. Cardiogenic shock arises from pump failure due to acute myocardial infarction, severe heart failure or arrhythmias. Hemodynamics show low cardiac output and high filling pressures. Initial management includes cautious fluid administration, vasopressors (norepinephrine) and inotropes (dobutamine) while arranging for definitive treatment such as reperfusion or mechanical circulatory support [Ref 1].
4. Distributive shock, typified by sepsis or anaphylaxis, features profound vasodilation and high cardiac output. Treatment involves aggressive fluid resuscitation, vasopressors to counteract vasodilation and addressing the underlying cause (antibiotics or epinephrine for anaphylaxis). Early recognition improves outcomes [Ref 2].
5. Obstructive shock is caused by mechanical obstruction to cardiac filling or output. Examples include tension pneumothorax, cardiac tamponade and massive pulmonary embolism. Therapy aims at relieving the obstruction-needle decompression for pneumothorax, pericardiocentesis for tamponade or thrombolytics/embolectomy for pulmonary embolism [Ref 2].

## Key Numbers
- Shock is generally defined by sustained systolic blood pressure <90 mm Hg or mean arterial pressure <65 mm Hg with signs of hypoperfusion (altered mental status, oliguria, cold extremities) [Ref 3].
- Cardiogenic shock has a mortality rate exceeding 40 % despite treatment; early revascularization in myocardial infarction reduces mortality and is a mainstay of management [Ref 1].
- Distributive shock often presents with warm extremities and widened pulse pressure early; persistently low systemic vascular resistance despite fluids may require vasopressor doses escalating beyond 0.1 μg/kg/min of norepinephrine [Ref 1].

## Teaching Pearl
Use bedside ultrasound to rapidly differentiate types of shock. A "venous tank" view evaluates volume status (inferior vena cava diameter and collapsibility), while cardiac views detect pericardial effusion, right ventricular dilation suggestive of pulmonary embolism or global systolic dysfunction. Incorporating point-of-care ultrasound expedites diagnosis and targeted therapy [Ref 1, Ref 2].

## Boards + Bedside Tie-In
On exams, classification of shock with associated hemodynamic profiles is frequently tested. At the bedside, rapid recognition prevents reflexive fluid administration in cardiogenic or obstructive shock where excess volume may worsen outcomes. A structured approach-identify type, address immediate life-threats and initiate definitive therapy-bridges theoretical knowledge and clinical practice.

## References
1. Sarma D, Jentzer JC. Cardiogenic Shock: Pathogenesis, Classification, and Management. Crit Care Clin. 2024;40(1):37-56. doi:10.1016/j.ccc.2023.05.001 PMID: 37973356
2. Kislitsina ON, Rich JD, Gulati R, et al. Shock - Classification and Pathophysiological Principles of Therapeutics. Curr Cardiol Rev. 2019;15(2):102-113. doi:10.2174/1573403X15666181212125024 PMID: 30543176
3. Patel S, Holden K, Chang M, et al. Shock. Crit Care Nurs Q. 2022;45(3):225-232. doi:10.1097/CNQ.0000000000000407 PMID: 35617089

# Acute Altered Mental Status: Structured Approach

## Clinical Setup
A 55-year-old man is found unresponsive by his family. He has a history of alcoholism and poorly controlled diabetes. On arrival, his airway is intact, respirations are 10 breaths per minute, blood pressure is 100/60 mm Hg, heart rate 90 beats per minute and oxygen saturation 89 %. What is the systematic approach to his altered mental status?

## Teaching Objectives
- Employ a structured evaluation algorithm for acute altered mental status
- Recognize high-yield reversible causes and implement timely interventions

## Teaching Points
1. Begin with the ABCs: assess airway, breathing and circulation. Provide supplemental oxygen, secure the airway if the patient cannot protect it and establish intravenous access. Quickly check capillary blood glucose and administer 50 mL of 50 % dextrose if hypoglycemia is present [Ref 2]. Naloxone should be given if opioid overdose is suspected.
2. Perform a focused neurologic examination including Glasgow Coma Scale, pupillary response and lateralizing signs. Obtain vital signs and laboratory studies (electrolytes, renal and hepatic function, arterial blood gas). Consider broad categories using the mnemonic "AEIOU TIPS": Alcohol, Endocrine/Electrolytes, Infection, Opiates/Oxygen, Uremia, Trauma, Insulin (hypo/ hyperglycemia), Psychosis/Poisoning, Stroke/Structural seizures [Ref 2].
3. Hyperosmolar hyperglycemic state (HHS) should be suspected when plasma glucose exceeds 600 mg/dL with serum osmolality >320 mOsm/kg and minimal ketosis. Management includes aggressive isotonic fluid resuscitation, insulin therapy and correction of electrolytes. Cerebral edema can be minimized by gradual glucose correction [Ref 3].
4. Delirium is common in hospitalized patients (15-50 %) and associated with increased mortality. Risk factors include advanced age, polypharmacy and sensory impairment. Management focuses on identifying and reversing precipitants (infection, medications, metabolic disturbances) and employing nonpharmacologic strategies (reorientation, sleep hygiene) [Ref 1].
5. In alcohol-use disorder or malnutrition, consider Wernicke encephalopathy, characterized by the triad of encephalopathy, oculomotor dysfunction and gait ataxia. Administer thiamine 200 mg IV three times daily before glucose to prevent precipitating Korsakoff syndrome [Ref 4].

## Key Numbers
- Delirium prevalence: affects 15-50 % of hospitalized older adults and increases mortality and length of stay [Ref 1].
- HHS diagnostic criteria: blood glucose >600 mg/dL, serum osmolality >320 mOsm/kg and absent or mild ketonemia; mortality ranges from 10-20 % [Ref 3].
- Wernicke encephalopathy treatment: administer thiamine 200 mg IV three times daily; improvement often begins within hours and should continue for at least three days [Ref 4].

## Teaching Pearl
Always give thiamine before administering glucose in patients at risk for thiamine deficiency. Glucose without thiamine can precipitate Wernicke encephalopathy or Korsakoff syndrome. Maintain a high index of suspicion in malnourished, alcoholic or bariatric patients [Ref 4].

## Boards + Bedside Tie-In
Board examinations frequently present undifferentiated coma scenarios requiring immediate bedside actions-check glucose, give naloxone, secure airway-followed by recognition of specific conditions such as HHS or Wernicke. At the bedside, following a structured algorithm prevents omission of reversible causes and ensures timely interventions.

## References
1. Mattison MLP. Delirium. Ann Intern Med. 2020;173(7):ITC49-ITC64. doi:10.7326/AITC202010060 PMID: 33017552
2. Erkkinen MG, Berkowitz AL. A Clinical Approach to Diagnosing Encephalopathy. Am J Med. 2019;132(10):1142-1147. doi:10.1016/j.amjmed.2019.07.001 PMID: 31330129
3. Lovegrove SS, Dubbs SB. Hyperosmolar Hyperglycemic State. Emerg Med Clin North Am. 2023;41(4):687-696. doi:10.1016/j.emc.2023.07.001 PMID: 37758417
4. Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol. 2010;17(12):1408-1418. doi:10.1111/j.1468-1331.2010.03153.x PMID: 20642790

# The Crashing Patient: First Five Minutes

## Clinical Setup
You are called to evaluate a 65-year-old inpatient who suddenly becomes unresponsive and bradycardic. The telemetry alarm shows an asystole pattern. What should occur in the first five minutes to stabilize this patient?

## Teaching Objectives
- Execute a structured approach to the crashing patient emphasizing airway, breathing and circulation
- Identify reversible causes and prioritize interventions without delay

## Teaching Points
1. Activate emergency response and assess responsiveness. If the patient is pulseless, begin high-quality chest compressions at a rate of 100-120 per minute and depth of 5-6 cm on the lower half of the sternum. Ensure full chest recoil and minimize interruptions [Ref 1].
2. Airway and breathing: provide 100 % oxygen via bag-valve-mask and attach monitors (ECG, pulse oximetry, noninvasive blood pressure). Intubation should not delay chest compressions; once an advanced airway is placed, deliver 10 breaths per minute without pausing compressions [Ref 1].
3. Defibrillation: check the rhythm quickly. For shockable rhythms (ventricular fibrillation or pulseless ventricular tachycardia), deliver a biphasic shock at 200 J and resume compressions immediately. For asystole or pulseless electrical activity, continue compressions and administer epinephrine 1 mg IV every 3-5 minutes while searching for reversible causes [Ref 1].
4. Systematically evaluate reversible causes using the "Hs and Ts": hypovolemia, hypoxia, hydrogen ion (acidosis), hypo/hyperkalemia, hypothermia, tension pneumothorax, tamponade, toxins, thrombosis (cardiac or pulmonary) and trauma. Treat each cause as rapidly as possible-e.g., needle decompression for tension pneumothorax, pericardiocentesis for tamponade, fluids for hypovolemia [Ref 2].
5. Assign roles among team members (compressor, airway manager, medication administrator, recorder) and communicate clearly. Rapidly secure intravenous or intraosseous access for drug delivery while preparing for advanced airway management [Ref 2].

## Key Numbers
- Chest compression rate: 100-120 per minute; depth: 5-6 cm in adults; ratio of compressions to breaths without advanced airway: 30:2 [Ref 1].
- Epinephrine dosing: 1 mg IV every 3-5 minutes during pulseless arrest; early administration improves return of spontaneous circulation [Ref 1].
- Reversible causes: remember five Hs (Hypovolemia, Hypoxia, Hydrogen ion [acidosis], Hypo-/hyperkalemia, Hypothermia) and five Ts (Tension pneumothorax, Tamponade, Toxins, Thrombosis, Trauma) as a rapid checklist [Ref 2].

## Common Pitfall
Delaying chest compressions for airway management or rhythm analysis reduces survival. Prioritize uninterrupted compressions; intubate only after initial cycles and ensure continuous compressions during intubation attempts. Avoid prolonged pulse checks-limit to 10 seconds [Ref 1].

## Boards + Bedside Tie-In
Boards test adherence to resuscitation algorithms, including compression rate and reversible causes. At the bedside, a structured team approach with clearly assigned roles, immediate CPR and early defibrillation is critical for survival. Familiarity with the Hs and Ts ensures reversible causes are not overlooked while the code continues.

## References
1. American Heart Association. Highlights of the 2020 American Heart Association Guidelines for CPR and ECC. 2020.
2. EMCrit/Internet Book of Critical Care. Approach to the Crashing Patient. 2024.

# Approach to Inpatient Hyponatremia

## Clinical Setup
A 68-year-old man admitted for pneumonia is found to have a sodium of 124 mEq/L, down from 138 mEq/L on admission three days ago. He is alert and euvolemic on examination. How should his hyponatremia be evaluated and managed?

## Teaching Objectives
- Apply a stepwise algorithm using volume status, serum osmolality and urine studies
- Avoid complications by adhering to safe correction thresholds

## Teaching Points
1. Confirm true hypotonic hyponatremia by measuring serum osmolality; values <280 mOsm/kg indicate hypotonic hyponatremia. Next, assess volume status clinically (hypovolemic, euvolemic or hypervolemic) and obtain urine osmolality and urine sodium to narrow the differential [Ref 1].
2. Hypovolemic hyponatremia (e.g., diuretic use, vomiting) is characterized by clinical volume depletion, high urine osmolality and urine sodium <20 mEq/L; treatment is isotonic saline to restore volume and suppress antidiuretic hormone. Euvolemic hyponatremia often results from the syndrome of inappropriate antidiuresis (SIADH), with urine osmolality >100 mOsm/kg and urine sodium >30 mEq/L; treat with fluid restriction and address underlying triggers [Ref 1].
3. Hypervolemic hyponatremia occurs in cirrhosis, heart failure or nephrotic syndrome. It presents with edema and ascites; management includes fluid and sodium restriction, loop diuretics and treatment of the underlying condition. Vasopressin receptor antagonists (e.g., tolvaptan) can increase serum sodium but require careful monitoring [Ref 2].
4. Avoid rapid correction to prevent osmotic demyelination syndrome. For chronic hyponatremia, limit serum sodium increase to 8-10 mEq/L in 24 hours; high-risk patients (malnutrition, alcoholism, liver disease) should be corrected more slowly (4-6 mEq/L per 24 hours) [Ref 1, Ref 2].
5. Severely symptomatic patients (e.g., seizures, coma) require hypertonic saline (3 % sodium chloride) delivered as 100 mL boluses over 10 minutes, repeated up to two times while monitoring sodium closely. Once symptoms resolve, slow correction according to the limits above [Ref 1].

## Key Numbers
- Serum osmolality <280 mOsm/kg: defines hypotonic hyponatremia; urine osmolality >100 mOsm/kg suggests impaired water excretion such as SIADH [Ref 1].
- Correction rate: maximum 8-10 mEq/L per 24 hours for chronic hyponatremia; limit to 4-6 mEq/L per 24 hours in high-risk patients to avoid osmotic demyelination [Ref 1, Ref 2].
- Hypertonic saline bolus: 100 mL of 3 % NaCl over 10 minutes for severe symptoms, repeated up to two doses with goal of 4-6 mEq/L rise in sodium [Ref 1].

## Common Pitfall
Obtaining urine studies after starting IV fluids obscures the diagnosis. Always collect urine osmolality and sodium before administering significant volumes of fluid, and document any fluids already given to interpret results correctly [Ref 1].

## Boards + Bedside Tie-In
Board questions frequently present hyponatremia with serum and urine values, asking for diagnosis or next step. At the bedside, the same algorithm applies but volume assessment may be challenging; when uncertain, a trial of isotonic saline can help distinguish hypovolemic hyponatremia (sodium rises) from SIADH (sodium falls or remains low) [Ref 1].

## References
1. Kugler JP, Hustead T. Hyponatremia and hypernatremia in the elderly. Am Fam Physician. 2000;61(12):3623-3630. PMID: 10892634
2. Orman ES, Fortune BE, Vilar G, et al. AGA Clinical Practice Update on the Management of Ascites, Volume Overload, and Hyponatremia in Cirrhosis. Gastroenterology. 2025;168(6):990-1002. PMID: 41114681

# DVT and PE: Risk Stratification Essentials

## Clinical Setup
A 55-year-old woman presents with acute shortness of breath and pleuritic chest pain. She has unilateral leg swelling and a history of recent knee surgery. Her blood pressure is stable and oxygen saturation is 94 %. How should venous thromboembolism (VTE) risk be stratified and managed?

## Teaching Objectives
- Apply clinical prediction rules to assess pre-test probability of deep vein thrombosis (DVT) and pulmonary embolism (PE)
- Determine inpatient versus outpatient management using severity indices

## Teaching Points
1. For suspected DVT, use the Wells score: assign points for active cancer, paralysis or immobilization, recent bed rest, localized tenderness, swelling of the entire leg, calf diameter difference >3 cm, pitting edema, and previously documented DVT. A score ≥2 indicates moderate to high probability and warrants duplex ultrasonography; a score ≤1 with a negative D-dimer effectively excludes DVT [Ref 3].
2. For suspected PE, the Wells criteria or the revised Geneva score stratify risk. Wells factors include signs of DVT, heart rate >100 bpm, recent surgery or immobilization, prior PE/DVT, hemoptysis, and malignancy. A score >4 suggests high probability and mandates CT pulmonary angiography; ≤4 combined with a negative D-dimer rules out PE [Ref 1]. The Pulmonary Embolism Rule-out Criteria (PERC) can identify very low-risk patients who require no further testing [Ref 2].
3. After diagnosis, use the Simplified Pulmonary Embolism Severity Index (sPESI) or Hestia criteria to determine suitability for outpatient management. sPESI assigns one point each for age >80 years, history of cancer, chronic cardiopulmonary disease, heart rate ≥110 bpm, systolic blood pressure <100 mm Hg and oxygen saturation <90 %. A score of 0 predicts <1 % 30-day mortality and supports outpatient anticoagulation; any point ≥1 indicates the need for inpatient monitoring [Ref 6].
4. The presence of right ventricular dysfunction on echocardiography, elevated cardiac biomarkers (troponin, BNP) or concomitant DVT portends higher risk of early mortality and may warrant thrombolysis or catheter-directed therapy in select patients. Close monitoring in a monitored setting is advised [Ref 6].
5. For hospitalized or surgical patients, prophylactic measures prevent VTE. Low-molecular-weight heparin 40 mg subcutaneously once daily or unfractionated heparin 5 000 units three times daily reduces incidence by roughly 60 % in medical inpatients. When anticoagulation is contraindicated, use mechanical prophylaxis (intermittent pneumatic compression devices). Early ambulation is essential [Ref 7].

## Key Numbers
- Wells score for DVT: ≥2 points indicates moderate to high probability; ≤1 point with negative D-dimer excludes DVT in most patients [Ref 3].
- Simplified PESI score: 0 points predicts <1 % 30-day mortality; ≥1 point is associated with 8-10 % mortality and prompts inpatient care [Ref 6].
- Prophylactic enoxaparin 40 mg daily reduces VTE by ~60 % in high-risk inpatients; mechanical methods are less effective when used alone [Ref 7].

## Common Pitfall
Ordering imaging in very low-risk patients without applying the Wells, Geneva or PERC rules leads to unnecessary radiation exposure and false positives. Conversely, failing to recognize high-risk features (e.g., hypotension, right ventricular strain) delays life-saving therapy. Always stratify risk before testing and treat promptly when probability is high [Ref 1, Ref 6].

## Boards + Bedside Tie-In
Exam questions often require choosing the next test based on a clinical prediction rule. In practice, applying the Wells and sPESI scores streamlines evaluation, minimizes unnecessary imaging and identifies patients appropriate for outpatient treatment. Always reassess risk factors such as cancer, immobilization and prior VTE when determining duration of anticoagulation.

## References
1. Giordano NJ, Jansson PS, Young MN, et al. Epidemiology, Pathophysiology, Stratification, and Natural History of Pulmonary Embolism. Tech Vasc Interv Radiol. 2017;20(3):135-140. PMID: 29029707
2. Wenger N, Sebastian T, Murugan R, et al. Pulmonary embolism and deep vein thrombosis: Similar but different. Thromb Res. 2021;198:154-165. PMID: 34454241
3. Lopez JA, Kearon C, Lee AY. Deep venous thrombosis. Hematology Am Soc Hematol Educ Program. 2004;2004:439-456. PMID: 15561697
4. Becattini C, Cohen AT, Agnelli G, et al. Risk Stratification of Patients With Acute Symptomatic Pulmonary Embolism Based on Presence or Absence of Lower Extremity DVT. Chest. 2016;150(2):358-365. PMID: 26204122
5. Kraft CT, Janis JE. Deep Venous Thrombosis Prophylaxis. Clin Plast Surg. 2020;47(3):325-333. PMID: 32448477
6. Szymanski K, Weber C, Szamosi A, et al. A review of venous thromboembolism for the hospitalist. Postgrad Med. 2025;137(4):558-566. PMID: 39804968
7. Pribish AM, Secemsky EA, Schmaier AA. Venous Thromboembolism for the Practicing Cardiologist. Cardiol Clin. 2021;39(2):207-224. PMID: 34686267

# Community-Acquired Pneumonia: Severity and Antibiotics

## Clinical Setup
A 45-year-old man presents with fever, productive cough, pleuritic chest pain and confusion. His respiratory rate is 32 breaths per minute, blood pressure 88/55 mm Hg and oxygen saturation 89 % on room air. What tools and therapies guide management of his community-acquired pneumonia (CAP)?

## Teaching Objectives
- Utilize severity scoring systems to determine the need for hospitalization and intensive care
- Select empiric antibiotics based on severity and risk factors

## Teaching Points
1. Assess severity using validated tools. CURB-65 awards one point each for confusion, urea >7 mmol/L (20 mg/dL), respiratory rate ≥30, blood pressure <90/60 mm Hg and age ≥65. Scores 0-1 suggest outpatient management; score 2 warrants hospital admission; ≥3 or evidence of septic shock or respiratory failure indicates ICU care [Ref 3].
2. The Pneumonia Severity Index (PSI) incorporates demographics, comorbidities, physical exam findings and laboratory values to stratify into risk classes I-V. Classes I-II (<70 points) are usually managed as outpatients, class III (71-90) may be observed briefly and classes IV-V (>90) require hospitalization [Ref 1].
3. Empiric therapy depends on comorbidities and disease severity. Outpatients without comorbidities: amoxicillin 1 g three times daily or doxycycline 100 mg twice daily for 5-7 days. Outpatients with comorbidities: amoxicillin-clavulanate 875/125 mg twice daily plus azithromycin or doxycycline, or a respiratory fluoroquinolone alone. Inpatients (non-ICU): intravenous ceftriaxone or ampicillin-sulbactam plus azithromycin, or a respiratory fluoroquinolone. ICU patients: ceftriaxone plus either azithromycin or a fluoroquinolone; add vancomycin or linezolid for MRSA risk and piperacillin-tazobactam for Pseudomonas risk [Ref 1, Ref 3, Ref 5].
4. Administer antibiotics promptly-ideally within 4 hours of presentation. Once clinical stability is achieved (afebrile, heart rate <100, respiratory rate <24, oxygen saturation >90 % on room air, normal mental status), transition to oral therapy and plan a total course of 5-7 days for uncomplicated CAP [Ref 1].
5. Identify patients requiring ICU by major criteria (mechanical ventilation or septic shock requiring vasopressors) or minor criteria (respiratory rate ≥30, PaO₂/FiO₂ ≤250, multilobar infiltrates, confusion, uremia, leukopenia, thrombocytopenia, hypothermia, hypotension requiring fluids). Meeting one major or three minor criteria indicates ICU admission [Ref 3].

## Key Numbers
- CURB-65: 0-1 point (outpatient), 2 points (inpatient), ≥3 points or shock (ICU). Urea threshold is >7 mmol/L (20 mg/dL) [Ref 3].
- PSI: Classes I-II (<70 points) have <1 % mortality; classes IV-V (>90 points) have mortality 8-30 % and require hospital care [Ref 1].
- Standard treatment duration: 5-7 days for uncomplicated CAP once patient is afebrile for 48 hours and clinically stable [Ref 1].

## Common Pitfall
Delaying empiric antibiotics while awaiting imaging or microbiology results increases mortality. Initiate broad-spectrum therapy based on clinical suspicion and refine therapy once culture data and susceptibilities are available [Ref 1].

## Boards + Bedside Tie-In
Board scenarios frequently ask for the next step when presented with CAP severity scores; memorize CURB-65 cutoffs and major/minor criteria. Clinically, early scoring assists decisions on admission and ICU triage, while knowledge of guideline-recommended empiric regimens ensures appropriate therapy tailored to comorbidities and local resistance patterns.

## References
1. Lanks CW, Musani AI, Hsia DW. Community-acquired Pneumonia and Hospital-acquired Pneumonia. Med Clin North Am. 2019;103(3):487-501. PMID: 30955516
2. Rider AC, Frazee BW. Community-Acquired Pneumonia. Emerg Med Clin North Am. 2018;36(4):665-683. PMID: 30296998
3. Martin-Loeches I, Garduno A, Waterer G, et al. Choosing antibiotic therapy for severe community-acquired pneumonia. Curr Opin Infect Dis. 2022;35(2):147-156. PMID: 35190510
4. Nair GB, Niederman MS. Updates on community acquired pneumonia management in the ICU. Pharmacol Ther. 2021;217:107663. PMID: 32805298
5. Cassiere HA, Niederman MS. Community-acquired pneumonia. Dis Mon. 1998;44(3):95-136. PMID: 9858958

# Approach to Fever in the Hospitalized Patient

## Clinical Setup
A 60-year-old man on post-operative day 3 after colectomy develops a fever of 38.5 °C. He has mild tachycardia but is hemodynamically stable. What systematic approach helps identify the cause and guide management?

## Teaching Objectives
- Distinguish infectious from non-infectious causes of hospital-acquired fever
- Use a timing-based framework to guide evaluation and management

## Teaching Points
1. Fever in hospitalized patients may be infectious (pneumonia, urinary tract infection, surgical site infection, line-associated bloodstream infection) or non-infectious (drug fever, deep vein thrombosis, pulmonary embolism, transfusion reaction). Begin with a focused history and physical examination, review vital signs and examine operative sites, catheters and drains [Ref 1].
2. Post-operative fever is often categorized by timing: days 1-2 (wind-atelectasis or pneumonia), days 3-4 (water-urinary tract infection), days 5-7 (wound-surgical site infection), days 7-10 (walking-deep vein thrombosis/pulmonary embolism) and any time (wonder drugs-drug fever or transfusion reactions). This mnemonic guides targeted evaluation and prophylactic measures such as incentive spirometry, early ambulation and catheter care [Ref 1].
3. Evaluate common sources: obtain chest imaging and sputum cultures for pulmonary symptoms, urinalysis and culture for urinary symptoms, and ultrasound of veins for suspected DVT. Inspect central lines for erythema or purulence; if infection is suspected, remove or exchange the catheter and obtain paired blood cultures from catheter and peripheral sites [Ref 1].
4. Drug fever should be considered when no source is identified despite thorough workup. Features include persistent fever, relative bradycardia, eosinophilia and rash. Common culprits are beta-lactam antibiotics, sulfonamides, anticonvulsants and heparin. Fever typically resolves within 72 hours of discontinuing the offending agent [Ref 2].
5. Urticaria and fever may indicate an urticarial vasculitis or serum sickness-like reaction. Evaluate for associated arthralgias, lymphadenopathy and complement consumption. Management includes stopping the offending drug and administering antihistamines or corticosteroids when needed [Ref 3].

## Key Numbers
- Surgical site infections occur in 2-5 % of clean-contaminated surgeries, usually manifesting between post-operative days 5 and 7 [Ref 1].
- Drug fever accounts for up to 10 % of febrile episodes in hospitalized patients and typically resolves within three days after discontinuation of the offending medication [Ref 2].
- Central line-associated bloodstream infections occur at approximately 1-2 episodes per 1 000 catheter days; prompt removal or exchange of the catheter reduces morbidity [Ref 1].

## Common Pitfall
Empirically starting broad-spectrum antibiotics before evaluating for non-infectious causes leads to unnecessary drug exposure and antimicrobial resistance. Always perform a focused assessment, obtain relevant cultures and imaging, and consider non-infectious etiologies before initiating antimicrobial therapy [Ref 1].

## Boards + Bedside Tie-In
Exams often test the 5 Ws framework and appropriate diagnostic steps. At the bedside, systematically reviewing lines, wounds and medications and using timing to prioritize evaluations helps identify the source quickly and avoids unnecessary treatments. Recognize drug fever and transfusion reactions to prevent misclassification as sepsis.

## References
1. Dionigi R, Dionigi G, Rovere P, et al. Postoperative fever. Surg Infect (Larchmt). 2006;7(s2):S27-S30. PMID: 16895496
2. Someko H, Kataoka Y, Obara T. Drug fever: a narrative review. Ann Clin Epidemiol. 2023;5(4):95-106. PMID: 38504950
3. Micheletti R, Rosenbach M. An approach to the hospitalized patient with urticaria and fever. Dermatol Ther. 2011;24(4):459-471. PMID: 21410608

# C. difficile Infection: Diagnosis and Treatment

## Clinical Setup
A 64-year-old woman develops profuse watery diarrhea and abdominal cramping on day 7 of a clindamycin course for a dental infection. She has a leukocyte count of 17 000/µL and creatinine of 1.6 mg/dL (baseline 0.9). How should Clostridioides difficile infection (CDI) be diagnosed and treated?

## Teaching Objectives
- Identify risk factors and implement appropriate diagnostic testing for CDI
- Apply severity-based treatment strategies and recurrence management

## Teaching Points
1. Risk factors for CDI include recent antibiotic use (particularly clindamycin, fluoroquinolones and broad-spectrum beta-lactams), hospitalization, advanced age, proton pump inhibitor therapy and immunosuppression. Symptoms typically include ≥3 unformed stools in 24 hours and abdominal pain [Ref 3].
2. Use a multistep testing algorithm. Only test unformed stool. Start with glutamate dehydrogenase (GDH) antigen and toxin enzyme immunoassay; if results are discordant, perform nucleic acid amplification (PCR) for toxigenic C. difficile. Avoid testing for cure and do not test asymptomatic patients [Ref 4].
3. Classify disease severity. Non-severe: WBC <15 000/µL and creatinine <1.5 mg/dL; severe: WBC ≥15 000/µL or creatinine ≥1.5 mg/dL; fulminant: hypotension, shock, ileus or megacolon. Initial treatment for non-severe or severe CDI is oral vancomycin 125 mg four times daily for 10 days or fidaxomicin 200 mg twice daily for 10 days. Fulminant CDI requires vancomycin 500 mg orally every six hours plus intravenous metronidazole 500 mg every eight hours, with early surgical consultation [Ref 1, Ref 4].
4. For a first recurrence, use fidaxomicin if not used initially or a pulsed-tapered vancomycin regimen (125 mg four times daily for 10 days, then 125 mg twice daily for a week, once daily for a week and every 2-3 days for 2-8 weeks). For second or subsequent recurrences, consider fecal microbiota transplantation after an appropriate antibiotic course [Ref 1, Ref 3].
5. Infection control is critical: wash hands with soap and water (alcohol sanitizers do not kill spores), implement contact isolation and clean the environment with sporicidal agents. Discontinue unnecessary antibiotics and proton pump inhibitors to reduce recurrence risk [Ref 2].

## Key Numbers
- Fulminant CDI mortality: can exceed 30 %; early high-dose oral vancomycin plus intravenous metronidazole and surgical evaluation reduce mortality [Ref 1].
- Recurrence rate: 20-25 % after initial treatment; risk increases with each subsequent episode [Ref 1].
- Fidaxomicin versus vancomycin: fidaxomicin reduces recurrence (≈15 %) compared with vancomycin (≈25 %) but may be limited by cost [Ref 3].

## Common Pitfall
Testing formed stools or patients without diarrhea leads to overdiagnosis and unnecessary treatment. Always confirm the presence of unexplained diarrhea and test only unformed stool. Avoid treating asymptomatic colonization [Ref 4].

## Boards + Bedside Tie-In
Exam questions focus on risk factors, testing algorithms and selection of therapy based on severity and recurrence. Clinically, rapid identification and appropriate therapy prevent progression to fulminant disease. Strict infection control measures and judicious antibiotic use reduce transmission and recurrence.

## References
1. Kelly CR, Fischer M, Allegretti JR, et al. ACG Clinical Guidelines: Prevention, Diagnosis, and Treatment of Clostridioides difficile Infections. Am J Gastroenterol. 2021;116(6):1124-1147. PMID: 34003176
2. McDonald LC, Gerding DN, Johnson S, et al. Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by IDSA and SHEA. Clin Infect Dis. 2018;66(7):987-994. PMID: 29462280
3. Cymbal M, Chatterjee A, Hamill L, et al. Management of Clostridioides difficile Infection: Diagnosis, Treatment, and Future Perspectives. Am J Med. 2024;137(4):350-361. PMID: 38508330
4. Czepiel J, Drozdz M, Pituch H, et al. Clostridium difficile infection: review. Eur J Clin Microbiol Infect Dis. 2019;38(7):1211-1221. PMID: 30945014

# UTI vs Asymptomatic Bacteriuria

## Clinical Setup
A 70-year-old woman residing in a nursing home is noted to have foul-smelling urine during routine care. She has no dysuria, frequency, fever or flank pain. A screening urinalysis shows pyuria and the urine culture grows >100 000 CFU/mL of Escherichia coli. Should this be treated?

## Teaching Objectives
- Distinguish true urinary tract infection (UTI) from asymptomatic bacteriuria
- Apply evidence-based indications for treatment of bacteriuria

## Teaching Points
1. Symptomatic UTI requires both bacteriuria and symptoms such as dysuria, frequency, urgency, suprapubic pain, hematuria, flank pain or fever. Asymptomatic bacteriuria is defined as ≥10⁵ CFU/mL of a uropathogen in a urine specimen (two consecutive specimens in women, one in men) without urinary symptoms [Ref 3].
2. Treatment of asymptomatic bacteriuria is recommended only in specific situations: pregnancy (because of risk of pyelonephritis and preterm birth), prior to urologic procedures that involve mucosal bleeding and in renal transplant recipients within the first month post-transplant. Treatment typically involves a 4-7-day course of a narrow-spectrum antibiotic based on culture sensitivity [Ref 2, Ref 6].
3. Do not treat asymptomatic bacteriuria in catheterized patients, the elderly in long-term care, patients with diabetes or spinal cord injury. Evidence shows no reduction in complications or mortality with treatment, but harms include Clostridioides difficile infection and antimicrobial resistance [Ref 3].
4. Diagnostic evaluation of suspected UTI includes obtaining a midstream clean-catch urine culture and urinalysis. Pyuria is common in older adults and catheterized patients and is not diagnostic of infection. In symptomatic catheter-associated UTI, a threshold of ≥10³ CFU/mL is considered significant; for non-catheterized symptomatic cystitis, ≥10⁵ CFU/mL is used [Ref 6].
5. When symptoms are present, choose empiric antibiotics based on local resistance patterns. For uncomplicated cystitis, first-line agents include nitrofurantoin 100 mg twice daily for 5 days, trimethoprim-sulfamethoxazole 160/800 mg twice daily for 3 days (if local resistance <20 %) or single-dose fosfomycin 3 g. Pyelonephritis or complicated UTIs require longer courses (7-14 days) with agents such as fluoroquinolones or third-generation cephalosporins [Ref 6].

## Key Numbers
- Asymptomatic bacteriuria prevalence: up to 50 % in women in long-term care facilities; treatment does not improve outcomes [Ref 3].
- Diagnostic thresholds: ≥10⁵ CFU/mL in a clean-catch specimen defines significant bacteriuria; ≥10³ CFU/mL is used for symptomatic catheter-associated UTI [Ref 6].
- Duration of therapy: 3-5 days for uncomplicated cystitis; 7-14 days for pyelonephritis or complicated infections [Ref 6].

## Common Pitfall
Treating positive urine cultures in asymptomatic patients leads to unnecessary antibiotic use, adverse drug events and increased resistance. Always correlate culture results with clinical symptoms before initiating therapy [Ref 3].

## Boards + Bedside Tie-In
Exams often ask when to treat asymptomatic bacteriuria-remember that only pregnant women, patients undergoing invasive urologic procedures and early post-renal transplant recipients require therapy. At the bedside, avoid ordering urine cultures for non-specific changes in urine odor or color and focus on symptomatic assessment to guide management.

## References
1. Geerlings SE. Clinical Presentations and Epidemiology of Urinary Tract Infections. Microbiol Spectr. 2016;4(5). PMID: 27780014
2. Ansaldi Y, Martinez de Tejada Weber B. Urinary tract infections in pregnancy. Clin Microbiol Infect. 2023;29(10):1205-1211. PMID: 36031053
3. Gupta K, Grigoryan L, Trautner B. Urinary Tract Infection. Ann Intern Med. 2017;167(7):ITC49-ITC64. PMID: 28973215
4. Czajkowski K, Bros-Konopielko M, Teliga-Czajkowska J. Urinary tract infection in women. Prz Menopauzalny. 2021;20(4):194-198. PMID: 33935619
5. Foxman B. Urinary tract infection syndromes. Infect Dis Clin North Am. 2014;28(1):1-13. PMID: 24484571
6. Al Lawati H, Blair BM, Larnard J. Urinary Tract Infections: Core Curriculum 2024. Am J Kidney Dis. 2024;83(4):535-548. PMID: 37906240

# Multimodal Pain Management in the Inpatient Setting

## Clinical Setup
A 60-year-old man is two days post-total knee arthroplasty and complains of severe pain rated 8/10 despite intermittent morphine doses. He is drowsy and hesitant to participate in physical therapy. How can his pain be managed more effectively?

## Teaching Objectives
- Implement multimodal analgesia to improve pain control and reduce opioid requirements
- Balance efficacy with safety by considering patient comorbidities and monitoring adverse effects

## Teaching Points
1. Multimodal analgesia uses combinations of analgesics with different mechanisms-acetaminophen, non-steroidal anti-inflammatory drugs (NSAIDs), gabapentinoids, local anesthetics, NMDA receptor antagonists and opioids-to achieve synergistic pain relief and decrease opioid consumption [Ref 1]. Scheduled non-opioid analgesics form the foundation of therapy.
2. Administer acetaminophen 1,000 mg every 6 hours (maximum 4 g/day; reduce to 2-3 g/day in hepatic impairment) to provide baseline analgesia. Add NSAIDs or COX-2 inhibitors if renal function and bleeding risk allow; limit duration to 3-5 days and avoid in creatinine clearance <30 mL/min [Ref 3].
3. Regional techniques provide targeted analgesia with opioid-sparing effects. Peripheral nerve blocks (e.g., femoral or adductor canal block for knee surgery) and neuraxial analgesia (epidural or spinal) reduce pain scores and facilitate early mobilization. Continuous catheter techniques allow titratable dosing but require monitoring for hypotension and motor weakness [Ref 6].
4. Adjunct medications such as gabapentin or pregabalin decrease central sensitization and lower opioid requirements but may cause dizziness or sedation. Ketamine infusions at subanesthetic doses (0.1-0.5 mg/kg/h) provide analgesia and are useful in opioid-tolerant patients; consensus guidelines recommend continuous monitoring for psychomimetic effects and hemodynamic changes [Ref 4].
5. Incorporate nonpharmacologic interventions-ice, heat, transcutaneous electrical nerve stimulation, physical therapy, psychological support and relaxation techniques-to enhance pain control and improve functional outcomes. Tailor the regimen to the patient's comorbidities, renal and hepatic function and risk of delirium [Ref 2, Ref 5].

## Key Numbers
- Acetaminophen: maximum 4,000 mg/day; reduce to 2,000-3,000 mg/day in liver disease [Ref 3].
- Ketamine infusion: analgesic dosing 0.1-0.5 mg/kg/h reduces opioid requirements without significant respiratory depression [Ref 4].
- NSAIDs: contraindicated in creatinine clearance <30 mL/min and in patients at high risk of gastrointestinal bleeding; when used, limit to 3-5 days [Ref 3].

## Common Pitfall
Relying solely on opioids leads to oversedation, respiratory depression and delirium. Incorporating scheduled non-opioid analgesics and regional techniques reduces opioid requirements and improves functional recovery [Ref 3, Ref 6].

## Boards + Bedside Tie-In
Exams may test knowledge of multimodal pain regimens and safe dosing. At the bedside, opioid-sparing strategies enable early mobilization and rehabilitation after surgery. Regularly reassess pain control and adjust the regimen based on efficacy and adverse effects.

## References
1. Joshi GP. Enhanced recovery pathways for ambulatory surgery. Curr Opin Anaesthesiol. 2020;33(6):727-734. PMID: 33002957
2. Wally MK, Hsu JR, Seymour RB. Musculoskeletal Pain Management and Patient Mental Health and Well-being. J Orthop Trauma. 2022;36(suppl 1):S13-S19. PMID: 36121327
3. Czernicki M, Kunnumpurath S, Tomasz H, et al. Perioperative Pain Management in the Critically Ill Patient. Curr Pain Headache Rep. 2019;23(4):28. PMID: 30977001
4. Schwenk ES, Viscusi ER, Bhatia A, et al. Consensus Guidelines on the Use of Intravenous Ketamine Infusions for Acute Pain Management. Reg Anesth Pain Med. 2018;43(5):456-466. PMID: 29870457
5. Al-Saidi I, Russell A, Dizdarevic A. The Acute Perioperative Pain Service: Impact, Organization, and Future Directions. Curr Pain Headache Rep. 2023;27(6):563-570. PMID: 37354296
6. Baratta JL, Deiling B, Domino KB, et al. Total joint replacement in ambulatory surgery. Best Pract Res Clin Anaesthesiol. 2023;37(2):197-212. PMID: 37929822

# Goals of Care Conversations: Framework

## Clinical Setup
A 68-year-old man with metastatic lung cancer is admitted for pneumonia. He is uncertain about his prognosis and has not completed an advance directive. How should the resident initiate a goals-of-care conversation?

## Teaching Objectives
- Use structured communication frameworks to explore patient values and preferences
- Align medical recommendations with patient goals and document the conversation

## Teaching Points
1. Begin by assessing the patient's understanding of his illness and asking permission to discuss future care. Use open-ended questions to explore his values, fears and what matters most to him. Clarify who should be involved in decision making (family, surrogate) [Ref 1].
2. Apply structured communication tools such as "Ask-Tell-Ask" or the Serious Illness Conversation Guide. Ask about the patient's goals and understanding, tell information about prognosis in clear language and then ask for his reaction and questions. Use silence and reflective statements to allow processing [Ref 1, Ref 3].
3. Respond empathetically to emotions using the NURSE mnemonic-Name the emotion, Understand its source, Respect the patient's experience, Support the patient and Explore further. Acknowledge feelings explicitly and avoid medical jargon [Ref 3].
4. Align recommendations with the patient's values. Discuss options including disease-directed treatments, palliative care, hospice and life-sustaining interventions (resuscitation, mechanical ventilation). Emphasize that decisions can be revisited and that the goal is to support his priorities and quality of life [Ref 1, Ref 5].
5. Document the conversation in the medical record, including the patient's goals, code status and surrogate decision maker. Communicate the plan to the interprofessional team to ensure continuity. Revisit the conversation periodically as the disease evolves [Ref 5].

## Key Numbers
- Structured communication interventions improve documentation of goals-of-care conversations by 15-20 % and reduce unwanted aggressive treatments by approximately one-third [Ref 2].
- Up to 70 % of seriously ill patients wish to discuss prognosis, but fewer than half report having had such a conversation; using a guide increases the likelihood of these discussions and concordance with preferences [Ref 2].
- Use of the Serious Illness Conversation Guide has been associated with increased hospice utilization and a 33 % reduction in aggressive end-of-life care [Ref 4].

## Teaching Pearl
Asking, "What are you hoping for?" and "What are you worried about?" can open space for patients to share their priorities and fears. These questions anchor the conversation in the patient's values before discussing specific interventions [Ref 3].

## Boards + Bedside Tie-In
Board questions often test frameworks like SPIKES, Ask-Tell-Ask and NURSE. At the bedside, practicing structured conversations and empathic responses improves patient satisfaction, ensures care aligns with goals and reduces clinician burnout.

## References
1. Bernacki RE, Block SD. Communication about serious illness care goals: a review and synthesis of best practices. JAMA Intern Med. 2014;174(12):1994-2003. PMID: 25330167
2. Ryan RE, Connolly M, Jeong W, et al. Interventions for interpersonal communication about end of life care between health practitioners and affected people. Cochrane Database Syst Rev. 2022;4:CD013665. PMID: 35802350
3. Chen W, Chung JOK, Wang Y, et al. End-of-life communication strategies for healthcare professionals: A scoping review. Palliat Med. 2023;37(10):1357-1370. PMID: 36349371
4. Coulter A, Entwistle VA, Stewart M, et al. Personalised care planning for adults with chronic or long-term health conditions. Cochrane Database Syst Rev. 2015;3:CD010523. PMID: 25733495
5. Comer A, Fettig L, Torke AM. Identifying Goals of Care. Med Clin North Am. 2020;104(3):435-445. PMID: 32773044
6. VitalTalk. Serious Illness Conversation Guide. 2023.

# Perioperative Medicine Essentials

## Clinical Setup
A 60-year-old man with hypertension and type 2 diabetes is scheduled for an elective colectomy. He can climb two flights of stairs without symptoms. What preoperative assessment and perioperative strategies should be employed?

## Teaching Objectives
- Conduct comprehensive preoperative risk assessment using validated tools
- Implement evidence-based perioperative management including fluid therapy and enhanced recovery

## Teaching Points
1. Evaluate surgical risk based on the procedure, patient comorbidities and functional status. Use the Revised Cardiac Risk Index (RCRI): one point each for high-risk surgery, history of ischemic heart disease, heart failure, cerebrovascular disease, insulin-dependent diabetes and creatinine >2 mg/dL. Scores 0-1 indicate <1 % risk of major cardiac events; ≥2 points warrant further assessment and optimization (e.g., stress testing, beta-blocker adjustment) [Ref 5].
2. Assess functional capacity. Patients able to achieve >4 metabolic equivalents (e.g., climbing stairs) generally do not need further cardiac testing. Continue beta-blockers and statins, hold ACE inhibitors and angiotensin receptor blockers on the day of surgery to reduce intraoperative hypotension, and achieve tight glycemic control with target HbA1c <7.5 % [Ref 5, Ref 2].
3. Optimize perioperative fluid management. Balanced crystalloids are preferred over normal saline; goal-directed fluid therapy guided by dynamic measures (stroke volume variation, pulse pressure variation) reduces post-operative complications. Avoid both hypovolemia and fluid overload; monitor urine output and hemodynamics closely [Ref 4].
4. Implement enhanced recovery after surgery (ERAS) protocols: permit clear liquids up to 2 hours and light meals up to 6 hours before anesthesia, administer preoperative carbohydrate drinks, use multimodal analgesia, minimize opioid use, encourage early mobilization and initiate early enteral nutrition. These interventions shorten hospital stay and decrease complications [Ref 1, Ref 3].
5. Address nutrition and metabolic support. Evaluate nutritional status and provide protein supplementation for malnourished patients; in bariatric surgery, follow guidelines for perioperative nutrition, including vitamin supplementation. Prehabilitation (exercise, inspiratory muscle training, smoking cessation) improves postoperative outcomes [Ref 2, Ref 3].

## Key Numbers
- RCRI: 0-1 points corresponds to <1 % risk of cardiac complications; ≥2 points elevates risk and merits additional evaluation [Ref 5].
- Fasting guidelines: clear liquids permitted up to 2 hours and solid foods up to 6 hours before anesthesia; prolonged fasting increases insulin resistance [Ref 3].
- Balanced crystalloid use: replacing saline with balanced solutions reduces postoperative acute kidney injury and mortality by approximately 1-2 % [Ref 4].

## Teaching Pearl
Prehabilitation-including aerobic exercise, inspiratory muscle training and nutrition optimization-improves functional capacity and reduces postoperative complications. Encourage patients to engage in prehabilitation for several weeks before elective surgery [Ref 3].

## Boards + Bedside Tie-In
Board questions often test RCRI components and fasting guidelines. At the bedside, applying goal-directed fluid therapy and ERAS protocols improves outcomes and patient satisfaction. Optimizing comorbidities and nutritional status preoperatively ensures safer surgeries.

## References
1. Joshi GP. Enhanced recovery pathways for ambulatory surgery. Curr Opin Anaesthesiol. 2020;33(6):727-734. PMID: 33002957
2. Mechanick JI, Apovian C, Brethauer S, et al. Clinical Practice Guidelines for the Perioperative Nutrition, Metabolic, and Nonsurgical Support of Patients Undergoing Bariatric Procedures - 2019 Update. Endocr Pract. 2019;25(12):1346-1359. PMID: 31682518
3. Afonso AM, Tokita HK, Mavarez VP, et al. Enhanced Recovery Programs in Outpatient Surgery. Anesthesiol Clin. 2019;37(4):647-660. PMID: 31047126
4. Ostermann M, Auzinger G, Sharples P, et al. Perioperative fluid management: evidence-based consensus recommendations. Br J Anaesth. 2024;132(6):956-968. PMID: 39341776
5. Lamperti M, Romero CS, Cristina V, et al. Preoperative assessment of adults undergoing elective noncardiac surgery: Updated guidelines. Eur J Anaesthesiol. 2025;42(1):1-13. PMID: 39492705
6. ACC/AHA. 2014 ACC/AHA Guideline on Perioperative Cardiovascular Evaluation and Management. 2014.
7. American College of Surgeons. ACS NSQIP Surgical Risk Calculator. 2024.

# Safe Discharge Planning Principles

## Clinical Setup
A 70-year-old woman with heart failure and diabetes is recovering from pneumonia and is ready for discharge. She lives alone and her daughter works full-time. What steps are necessary to ensure a safe transition home?

## Teaching Objectives
- Identify key components of comprehensive discharge planning
- Incorporate social determinants and medication reconciliation into discharge practices

## Teaching Points
1. Initiate discharge planning at admission by assessing medical stability, cognitive function, mobility, home environment and caregiver support. Engage an interprofessional team-case managers, social workers, physical and occupational therapists-to identify needs and arrange home services, durable medical equipment and transportation [Ref 1, Ref 4].
2. Perform meticulous medication reconciliation using validated tools (e.g., MARQUIS) to compare pre-admission medications with in-hospital prescriptions. Address duplications, omissions and potential interactions. Provide patients with an updated medication list and clear verbal and written instructions [Ref 2].
3. Evaluate social determinants of health such as financial constraints, health literacy, food security and access to care. Connect patients to community resources, home health, Meals on Wheels or transportation services, and involve family or caregivers in education sessions [Ref 1].
4. Schedule follow-up appointments before discharge and ensure they are within appropriate timeframes (e.g., within 7 days for heart failure). Use teach-back to confirm understanding of discharge instructions including symptom monitoring, wound care and emergency contacts [Ref 3].
5. Implement structured discharge programs such as the AHRQ Project RED or transitional care protocols. These programs standardize education, medication reconciliation and follow-up communication and have been shown to reduce 30-day readmissions and improve patient satisfaction [Ref 4, Ref 5].

## Key Numbers
- Approximately 20 % of Medicare beneficiaries are readmitted within 30 days; comprehensive discharge programs can reduce readmissions by about 20 % [Ref 4].
- Medication discrepancies are found in up to 60 % of discharge medication lists; systematic reconciliation significantly lowers adverse drug events [Ref 2].
- Early follow-up for heart failure (within 7 days) decreases 30-day readmissions by approximately 2-3 % [Ref 3].

## Teaching Pearl
Involving caregivers in discharge planning and using the teach-back method ensures comprehension, enhances adherence and reduces readmissions. Provide written instructions in plain language and encourage questions [Ref 1].

## Boards + Bedside Tie-In
Board questions highlight medication reconciliation and the impact of social determinants on readmissions. At the bedside, beginning discharge planning early and coordinating with an interprofessional team help ensure safe transitions. Clear documentation of the plan and communication with outpatient providers support continuity of care.

## References
1. Hudson T. The Role of Social Determinates of Health in Discharge Practices. Nurs Clin North Am. 2021;56(3):319-329. PMID: 34366157
2. Xiao S, Tourangeau A, Reay T, et al. Discharge planning in mental healthcare settings: A review and concept analysis. Int J Ment Health Nurs. 2019;28(5):1059-1072. PMID: 31039293
3. Rajesh A, Kovacik R, Luther S, et al. A comprehensive review of inpatient heart failure management for the hospitalist. Postgrad Med. 2025;137(4):454-467. PMID: 40332986
4. Aguilera C, Wong G, Wadhwa R, et al. Patient outcomes after implementation of transitional care protocols in elective neurosurgery. Neurosurg Rev. 2024;47(3):455-465. PMID: 39060496
5. Rameli PM, Rajendran N. Outcomes of complex discharge planning in older adults with complex needs. J Int Med Res. 2022;50(8):3000605211121140. PMID: 35903858
6. Anderson N, Narvey M. Discharge planning of the preterm infant. Paediatr Child Health. 2022;27(4):222-228. PMID: 35599674
7. Kotronias RA, Teitelbaum M, Fan SC, et al. Early Versus Standard Discharge After Transcatheter Aortic Valve Replacement. JACC Cardiovasc Interv. 2018;11(12):1124-1134. PMID: 30190065
8. Agency for Healthcare Research and Quality. Project RED (Re-Engineered Discharge) Toolkit. 2023.
9. Society of Hospital Medicine. MARQUIS Toolkit for Medication Reconciliation. 2021.`;function Yp(){const[T,G]=Ve.useState("Week 1"),[j,h]=Ve.useState(0),[L,K]=Ve.useState(""),[ce,Ae]=Ve.useState(!1),x=I=>I?I.split(/^# /m).filter(Boolean).map(ue=>{const he=ue.split(`
`),ta=he[0].trim(),ha=he.slice(1).join(`
`),Be={};return ha.split(/^## /m).filter(Boolean).forEach(Ca=>{const Qe=Ca.split(`
`),v=Qe[0].trim(),C=Qe.slice(1).join(`
`).trim();Be[v]=C}),{title:ta,...Be}}):[],S=Ve.useMemo(()=>x(_p),[]),W=Ve.useMemo(()=>x(Gp),[]),O=Ve.useMemo(()=>x(Kp),[]),me=Ve.useMemo(()=>x(Vp),[]),_e=Ve.useMemo(()=>x(Jp),[]),ze={"Week 1":{title:"Cardiology",data:S,icon:w.jsx(Ep,{className:"w-4 h-4"})},"Week 2":{title:"Pulmonology & Renal",data:W,icon:w.jsx(Et,{className:"w-4 h-4"})},"Week 3":{title:"Endocrinology & ID",data:O,icon:w.jsx(jp,{className:"w-4 h-4"})},"Week 4":{title:"GI & Hematology",data:me,icon:w.jsx(xf,{className:"w-4 h-4"})},"Week 5":{title:"General Hospital Med",data:_e,icon:w.jsx(Cp,{className:"w-4 h-4"})}},ia=(ze[T]?.data||[]).filter(I=>I.title.toLowerCase().includes(L.toLowerCase())),F=ia[j],xa=I=>w.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg shadow-sm",children:[w.jsxs("div",{className:"flex items-center mb-2 text-blue-700 font-bold uppercase text-xs tracking-wider",children:[w.jsx(xf,{className:"w-4 h-4 mr-2"}),"Clinical Setup"]}),w.jsx("p",{className:"text-gray-800 leading-relaxed text-sm md:text-base",children:I})]}),De=(I,N="bullet")=>{if(!I)return null;const ue=I.split(/\n(?:- |\d+\. )/).filter(he=>he.trim().length>0);return w.jsx("ul",{className:"space-y-3 mb-6",children:ue.map((he,ta)=>w.jsxs("li",{className:"flex items-start text-gray-700 text-sm md:text-base",children:[w.jsx("span",{className:`flex-shrink-0 mt-1 mr-3 ${N==="check"?"text-green-500":"text-indigo-500"}`,children:N==="check"?w.jsx(Df,{className:"w-5 h-5"}):w.jsxs("span",{className:"font-bold",children:[ta+1,"."]})}),w.jsx("span",{dangerouslySetInnerHTML:{__html:he.replace(/\[Ref \d+\]/g,"")}})]},ta))})},Ye=I=>{if(!I)return null;const N=I.split(/\n- /).filter(ue=>ue.trim().length>0);return w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:N.map((ue,he)=>w.jsx("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow",children:w.jsxs("div",{className:"flex items-start",children:[w.jsx(Et,{className:"w-5 h-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0"}),w.jsx("p",{className:"text-slate-700 text-sm font-medium",children:ue.replace(/\[Ref \d+\]/g,"")})]})},he))})},Pe=(I,N,ue)=>{if(!N)return null;const he={pitfall:"bg-amber-50 border-amber-400 text-amber-900",pearl:"bg-emerald-50 border-emerald-400 text-emerald-900",boards:"bg-indigo-50 border-indigo-400 text-indigo-900"},ta={pitfall:w.jsx(qp,{className:"w-5 h-5 mr-2"}),pearl:w.jsx(xp,{className:"w-5 h-5 mr-2"}),boards:w.jsx(Ef,{className:"w-5 h-5 mr-2"})};return w.jsxs("div",{className:`border-l-4 p-4 rounded-r-lg mb-6 ${he[ue]||he.boards}`,children:[w.jsxs("div",{className:"flex items-center font-bold mb-2 text-sm uppercase tracking-wide opacity-90",children:[ta[ue],I]}),w.jsx("p",{className:"text-sm md:text-base opacity-90",children:N})]})};return w.jsxs("div",{className:"flex h-screen bg-slate-100 font-sans overflow-hidden",children:[w.jsxs("div",{className:"lg:hidden fixed top-0 w-full bg-slate-900 text-white z-50 px-4 py-3 flex justify-between items-center shadow-md",children:[w.jsxs("div",{className:"font-bold text-lg flex items-center",children:[w.jsx(Et,{className:"w-5 h-5 mr-2 text-blue-400"}),"MedEd Navigator"]}),w.jsx("button",{onClick:()=>Ae(!ce),children:ce?w.jsx(Up,{}):w.jsx(Hp,{})})]}),w.jsxs("div",{className:`fixed lg:static inset-y-0 left-0 w-72 bg-slate-900 text-slate-300 transform ${ce?"translate-x-0":"-translate-x-full"} lg:translate-x-0 transition-transform duration-200 ease-in-out z-40 overflow-y-auto flex flex-col border-r border-slate-800`,children:[w.jsxs("div",{className:"p-6 hidden lg:block",children:[w.jsxs("h1",{className:"text-xl font-bold text-white flex items-center",children:[w.jsx(Et,{className:"w-6 h-6 mr-2 text-blue-400"}),"MedEd Navigator"]}),w.jsx("p",{className:"text-xs text-slate-500 mt-1 uppercase tracking-wider",children:"MicroScript Library"})]}),w.jsx("div",{className:"px-4 mb-6 mt-16 lg:mt-0",children:w.jsxs("div",{className:"relative",children:[w.jsx(Bp,{className:"absolute left-3 top-2.5 w-4 h-4 text-slate-500"}),w.jsx("input",{type:"text",placeholder:"Search topics...",className:"w-full bg-slate-800 text-sm text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700",value:L,onChange:I=>K(I.target.value)})]})}),w.jsx("div",{className:"flex-1 px-2 space-y-1 pb-8",children:Object.entries(ze).map(([I,N])=>w.jsxs("div",{className:"mb-2",children:[w.jsxs("button",{onClick:()=>{G(I),h(0),K("")},className:`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${T===I?"bg-blue-600 text-white":"hover:bg-slate-800 text-slate-400"}`,children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx("span",{className:"opacity-70 mr-3",children:N.icon}),w.jsxs("div",{className:"text-left",children:[w.jsx("div",{className:"leading-none",children:I}),w.jsx("div",{className:"text-xs opacity-60 font-normal mt-0.5",children:N.title})]})]}),T===I&&w.jsx(Ap,{className:"w-4 h-4"})]}),T===I&&w.jsx("div",{className:"ml-4 mt-1 border-l-2 border-slate-700 pl-2 space-y-1",children:N.data.length>0?N.data.map((ue,he)=>w.jsx("button",{onClick:()=>{h(he),window.innerWidth<1024&&Ae(!1)},className:`w-full text-left px-3 py-2 text-xs rounded-md transition-all ${j===he?"bg-slate-800 text-blue-400 font-medium":"text-slate-500 hover:text-slate-300"}`,children:ue.title},he)):w.jsx("div",{className:"px-3 py-2 text-xs text-slate-600 italic",children:"Content not loaded for demo"})})]},I))}),w.jsx("div",{className:"p-4 border-t border-slate-800 text-xs text-slate-500 text-center",children:"v1.0 • Canvas MicroScripts"})]}),w.jsx("div",{className:"flex-1 flex flex-col h-full overflow-hidden w-full",children:F?w.jsxs("main",{className:"flex-1 overflow-y-auto pt-16 lg:pt-0 pb-10",children:[w.jsx("div",{className:"bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-10 shadow-sm",children:w.jsxs("div",{className:"max-w-4xl mx-auto",children:[w.jsxs("div",{className:"flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest mb-2",children:[ze[T].title," • ",T]}),w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-900 leading-tight",children:F.title})]})}),w.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-8",children:[F["Clinical Setup"]&&xa(F["Clinical Setup"]),F["Teaching Objectives"]&&w.jsxs("div",{className:"mb-8",children:[w.jsxs("h3",{className:"text-lg font-bold text-slate-900 mb-3 flex items-center",children:[w.jsx(Df,{className:"w-5 h-5 mr-2 text-slate-400"}),"Objectives"]}),De(F["Teaching Objectives"],"check")]}),F["Teaching Points"]&&w.jsxs("div",{className:"mb-8",children:[w.jsxs("h3",{className:"text-lg font-bold text-slate-900 mb-3 flex items-center",children:[w.jsx(Ef,{className:"w-5 h-5 mr-2 text-slate-400"}),"Key Teaching Points"]}),De(F["Teaching Points"],"number")]}),F["Key Numbers"]&&w.jsxs("div",{className:"mb-8",children:[w.jsxs("h3",{className:"text-lg font-bold text-slate-900 mb-3 flex items-center",children:[w.jsx(Et,{className:"w-5 h-5 mr-2 text-slate-400"}),"Key Numbers"]}),Ye(F["Key Numbers"])]}),w.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[F["Common Pitfall"]&&Pe("Common Pitfall",F["Common Pitfall"],"pitfall"),F["Teaching Pearl"]&&Pe("Teaching Pearl",F["Teaching Pearl"],"pearl"),F["Boards + Bedside Tie-In"]&&Pe("Boards + Bedside",F["Boards + Bedside Tie-In"],"boards")]}),F.References&&w.jsxs("div",{className:"mt-8 pt-8 border-t border-slate-200",children:[w.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-3",children:"References"}),w.jsx("div",{className:"text-xs text-slate-500 space-y-1",children:F.References.split(`
`).filter(I=>I.trim()).map((I,N)=>w.jsx("p",{children:I},N))})]})]}),w.jsxs("div",{className:"max-w-4xl mx-auto px-6 pb-12 flex justify-between",children:[w.jsx("button",{onClick:()=>h(Math.max(0,j-1)),disabled:j===0,className:"text-sm font-medium text-slate-500 hover:text-blue-600 disabled:opacity-30 flex items-center",children:"Previous Topic"}),w.jsxs("button",{onClick:()=>h(Math.min(ia.length-1,j+1)),disabled:j===ia.length-1,className:"text-sm font-medium text-blue-600 hover:text-blue-800 disabled:opacity-30 flex items-center",children:["Next Topic ",w.jsx(gp,{className:"w-4 h-4 ml-1"})]})]})]}):w.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50",children:[w.jsx("div",{className:"bg-white p-6 rounded-full shadow-sm mb-4",children:w.jsx(Et,{className:"w-12 h-12 text-blue-500"})}),w.jsx("h2",{className:"text-xl font-bold text-slate-800 mb-2",children:"Select a Topic"}),w.jsxs("p",{className:"text-slate-500 max-w-sm",children:["Choose a topic from the sidebar to view the clinical microscript.",(T==="Week 2"||T==="Week 3"||T==="Week 4")&&w.jsxs("span",{className:"block mt-4 text-amber-600 bg-amber-50 p-2 rounded text-sm border border-amber-200",children:[w.jsx(Sp,{className:"w-4 h-4 inline mr-1 -mt-0.5"}),"Note: Content for this week has not been loaded into the demo to preserve file size."]})]})]})})]})}cp.createRoot(document.getElementById("root")).render(w.jsx(Ve.StrictMode,{children:w.jsx(Yp,{})}));
