(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{131:function(e,t,n){"use strict";var a=n(10),o=n(27),i=n.n(o),l=n(132),r=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===p)var p=[];var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(l,e);var t,n,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){p.includes(e)||p.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){p.includes(t.props.config.google.families[0])||(r.a.load(u(u({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(t.prototype,n),l}(a.Component);b.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},b.defaultProps={onStatus:function(){}},t.a=b},132:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function m(e,t,n){function a(){r&&o&&i&&(r(l),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,l=null,r=n||null;c?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function p(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=u(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function b(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function C(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function E(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),g(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,E(n)):e.h[t]())}function N(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function x(e){f(e.c,"body",e.a)}function H(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+C(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function L(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function z(e,t,n,a,o,i,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=H(e=new j(this.a.c+",serif",E(this.a))),this.g.a.style.cssText=e,e=H(e=new j(this.a.c+",sans-serif",E(this.a))),this.h.a.style.cssText=e,e=H(e=new j("serif",E(this.a))),this.j.a.style.cssText=e,e=H(e=new j("sans-serif",E(this.a))),this.m.a.style.cssText=e,x(this.g),x(this.h),x(this.j),x(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=t.f?o():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+C(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},R=null;function D(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function M(e,t,n){for(var a in A)if(A.hasOwnProperty(a)&&t===e.f[A[a]]&&n===e.f[A[a]])return!0;return!1}function I(e,t){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function W(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=D()&&M(t,a,o)),n?r()-t.A>=t.w?D()&&M(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var B=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function V(e){this.j=e,this.a=new N,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&i)F(t.a);else{t.f+=n.length,i&&(t.j=i);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],f=r[u.c],h=t.a,d=u;if(h.g&&g(h.f,[h.a.c("wf",d.c,E(d).toString(),"loading")]),k(h,"fontloading",d),h=null,null===B)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);B=d?42<parseInt(d[1],10):!m}else B=!1;h=B?new L(l(t.g,t),l(t.h,t),t.c,u,t.s,f):new z(l(t.g,t),l(t.h,t),t.c,u,t.s,e,f),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,E(e).toString(),"active")],[t.a.c("wf",e.c,E(e).toString(),"loading"),t.a.c("wf",e.c,E(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var n=d(t.f,t.a.c("wf",e.c,E(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,E(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,E(e).toString(),"inactive")),g(t.f,a,o)}k(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new W(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,i,t,n,a)}))}(this,new T(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var s=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new j(s,a))):l.push(new j(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new b;for(t=0,n=a.length;t<n;t++)m(this.c,a[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)r.push(new j(a[0],s[c]));else r.push(new j(a[0]));y(l,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new b,n=this.c,a=new U(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new j(o,i[a]))}}(i),m(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],l=t[o+1],r=0;r<l.length;r++)a.push(new j(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new j(l.name,S("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new V(window);ie.a.c.custom=function(e,t){return new J(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new $(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},497:function(e,t,n){"use strict";n.r(t);var a=n(133),o=n.n(a),i=n(1),l=n.n(i),r=n(6),s=n(12),c=n(64),u=n(19),f=n(131),h=n(2),g=n(4),d=n(11),m=n(5),p=Object.keys(c),b=function(e){var t,n,a=e=e.parentProps,i=a.attributes,c=a.setAttributes,b=i.icon,v=i.noticeDismiss,y=i.cookies,_=i.close_cookie_days,w=i.textColor,j=i.titleColor,C=i.noticeColor,E=i.contentBgColor,O=i.noticeDismissColor,S=i.noticeAlignment,T=i.titleFontFamily,F=i.titleFontWeight,k=i.titleFontSubset,N=i.titleFontSizeType,P=i.titleLineHeightType,x=i.titleFontSize,H=i.titleFontSizeTablet,L=i.titleFontSizeMobile,z=i.titleLineHeight,A=i.titleLineHeightTablet,R=i.titleLineHeightMobile,D=i.descFontFamily,M=i.descFontWeight,I=i.descFontSubset,W=i.descFontSize,B=i.descFontSizeType,G=i.descFontSizeTablet,V=i.descFontSizeMobile,q=i.descLineHeight,$=i.descLineHeightType,J=i.descLineHeightTablet,U=i.descLineHeightMobile,K=i.titleLoadGoogleFonts,X=i.descLoadGoogleFonts,Q=i.contentVrPadding,Y=i.contentHrPadding,Z=i.titleVrPadding,ee=i.titleHrPadding,te=i.headingTag,ne=i.layout,ae=i.highlightWidth;if(!0===K){var oe={google:{families:[T+(F?":"+F:"")]}};t=l.a.createElement(f.a,{config:oe})}if(!0===X){var ie={google:{families:[D+(M?":"+M:"")]}};n=l.a.createElement(f.a,{config:ie})}var le=[{value:"",label:Object(h.__)("Allow Always","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(h.__)("Allow to Dismiss","ultimate-addons-for-gutenberg")}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.BlockControls,{key:"controls"},l.a.createElement(g.AlignmentToolbar,{value:S,onChange:function(e){return c({noticeAlignment:e})}})),l.a.createElement(g.InspectorControls,null,l.a.createElement(m.PanelBody,{title:Object(h.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(m.SelectControl,{label:Object(h.__)("Layout","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return c({layout:e})},options:[{value:"modern",label:Object(h.__)("Modern","ultimate-addons-for-gutenberg")},{value:"simple",label:Object(h.__)("Default","ultimate-addons-for-gutenberg")}]}),"simple"===ne&&l.a.createElement(m.RangeControl,{label:Object(h.__)("Highlight width","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return c({highlightWidth:e})},min:0,max:50,allowReset:!0}),l.a.createElement("h2",null,Object(h.__)("Primary Heading","ultimate-addons-for-gutenberg")),l.a.createElement(m.SelectControl,{label:Object(h.__)("Tag"),value:te,onChange:function(e){return c({headingTag:e})},options:[{value:"h1",label:Object(h.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(h.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(h.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(h.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(h.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(h.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(h.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(h.__)("p","ultimate-addons-for-gutenberg")}]}),l.a.createElement(m.SelectControl,{label:Object(h.__)("Notice Display","ultimate-addons-for-gutenberg"),options:le,value:v,onChange:function(e){return c({noticeDismiss:e})}}),v&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"components-base-control__label"},Object(h.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(o.a,{icons:p,renderFunc:s.a,theme:"default",value:b,onChange:function(e){return c({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")})),v&&l.a.createElement("hr",{className:"uagb-editor__separator"}),v&&l.a.createElement(m.ToggleControl,{label:Object(h.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:y,onChange:function(e){var t=(0,Object(d.select)("core/editor").getCurrentPostId)().toString(),n=(new Date).getTime();c({c_id:t+"-"+n}),c({cookies:e})}}),y&&l.a.createElement(m.RangeControl,{label:Object(h.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return c({close_cookie_days:e})},min:0,max:50,allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(h.__)("Colors","ultimate-addons-for-gutenberg")),l.a.createElement("p",{className:"uagb-setting-label"},Object(h.__)("Title Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),l.a.createElement(g.ColorPalette,{value:j,onChange:function(e){return c({titleColor:e})},allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("p",{className:"uagb-setting-label"},Object(h.__)("Highlight Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),l.a.createElement(g.ColorPalette,{value:C,onChange:function(e){return c({noticeColor:e})},allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("p",{className:"uagb-setting-label"},Object(h.__)("Content Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),l.a.createElement(g.ColorPalette,{value:w,onChange:function(e){return c({textColor:e})},allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("p",{className:"uagb-setting-label"},Object(h.__)("Content Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),l.a.createElement(g.ColorPalette,{value:E,onChange:function(e){return c({contentBgColor:e})},allowReset:!0}),v&&l.a.createElement("hr",{className:"uagb-editor__separator"}),v&&l.a.createElement("p",{className:"uagb-setting-label"},Object(h.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),v&&l.a.createElement(g.ColorPalette,{value:O,onChange:function(e){return c({noticeDismissColor:e})},allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(h.__)("Typography","ultimate-addons-for-gutenberg")),l.a.createElement(u.default,{label:Object(h.__)("Title","ultimate-addons-for-gutenberg"),attributes:i,setAttributes:c,loadGoogleFonts:{value:K,label:"titleLoadGoogleFonts"},fontFamily:{value:T,label:"titleFontFamily"},fontWeight:{value:F,label:"titleFontWeight"},fontSubset:{value:k,label:"titleFontSubset"},fontSizeType:{value:N,label:"titleFontSizeType"},fontSize:{value:x,label:"titleFontSize"},fontSizeMobile:{value:L,label:"titleFontSizeMobile"},fontSizeTablet:{value:H,label:"titleFontSizeTablet"},lineHeightType:{value:P,label:"titleLineHeightType"},lineHeight:{value:z,label:"titleLineHeight"},lineHeightMobile:{value:R,label:"titleLineHeightMobile"},lineHeightTablet:{value:A,label:"titleLineHeightTablet"}}),l.a.createElement(u.default,{label:Object(h.__)("Content","ultimate-addons-for-gutenberg"),attributes:i,setAttributes:c,loadGoogleFonts:{value:X,label:"descLoadGoogleFonts"},fontFamily:{value:D,label:"descFontFamily"},fontWeight:{value:M,label:"descFontWeight"},fontSubset:{value:I,label:"descFontSubset"},fontSizeType:{value:B,label:"descFontSizeType"},fontSize:{value:W,label:"descFontSize"},fontSizeMobile:{value:V,label:"descFontSizeMobile"},fontSizeTablet:{value:G,label:"descFontSizeTablet"},lineHeightType:{value:$,label:"descLineHeightType"},lineHeight:{value:q,label:"descLineHeight"},lineHeightMobile:{value:U,label:"descLineHeightMobile"},lineHeightTablet:{value:J,label:"descLineHeightTablet"}}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(h.__)("Title Padding (px)","ultimate-addons-for-gutenberg")),l.a.createElement(m.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return c({titleVrPadding:e})},min:0,max:50,allowReset:!0}),l.a.createElement(m.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:ee,onChange:function(e){return c({titleHrPadding:e})},min:0,max:50,allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(h.__)("Content Padding (px)","ultimate-addons-for-gutenberg")),l.a.createElement(m.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:Q,onChange:function(e){return c({contentVrPadding:e})},min:0,max:50,allowReset:!0}),l.a.createElement(m.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return c({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),t,n)};t.default=l.a.memo(b)}}]);