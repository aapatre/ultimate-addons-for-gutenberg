(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[22],{131:function(e,t,n){"use strict";var a=n(10),o=n(27),i=n.n(o),l=n(132),r=n.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(a);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(c(c({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&d(t.prototype,n),l}(a.Component);p.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},132:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function g(e,t,n){function a(){r&&o&&i&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,l=null,r=n||null;s?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=c(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function j(e){this.a=e||"-"}function O(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function C(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function F(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new j("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}H(e,"inactive")}function H(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,C(n)):e.h[t]())}function k(){this.c={}}function z(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){f(e.c,"body",e.a)}function B(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function x(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function I(e,t,n,a,o,i,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),e=B(e=new O(this.a.c+",serif",C(this.a))),this.g.a.style.cssText=e,e=B(e=new O(this.a.c+",sans-serif",C(this.a))),this.h.a.style.cssText=e,e=B(e=new O("serif",C(this.a))),this.j.a.style.cssText=e,e=B(e=new O("sans-serif",C(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}j.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},x.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var L={D:"serif",C:"sans-serif"},A=null;function R(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function Y(e,t,n){for(var a in L)if(L.hasOwnProperty(a)&&t===e.f[L[a]]&&n===e.f[L[a]])return!0;return!1}function M(e,t){setTimeout(l((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function N(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=R()&&Y(t,a,o)),n?r()-t.A>=t.w?R()&&Y(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var D=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),H(e,"active")):E(e.a))}function G(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&i)E(t.a);else{t.f+=n.length,i&&(t.j=i);var u,s=[];for(u=0;u<n.length;u++){var c=n[u],f=r[c.c],d=t.a,h=c;if(d.g&&b(d.f,[d.a.c("wf",h.c,C(h).toString(),"loading")]),H(d,"fontloading",h),d=null,null===D)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=h?42<parseInt(h[1],10):!g}else D=!1;d=D?new x(l(t.g,t),l(t.h,t),t.c,c,t.s,f):new I(l(t.g,t),l(t.h,t),t.c,c,t.s,e,f),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e||V,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,C(e).toString(),"active")],[t.a.c("wf",e.c,C(e).toString(),"loading"),t.a.c("wf",e.c,C(e).toString(),"inactive")]),H(t,"fontactive",e),this.m=!0,W(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,C(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,C(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,C(e).toString(),"inactive")),b(t.f,a,o)}H(t,"fontinactive",e),W(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),H(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new N(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,i,t,n,a)}))}(this,new T(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var u=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new O(u,a))):l.push(new O(u))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)g(this.c,a[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var u=a[1].split(","),s=0;s<u.length;s+=1)r.push(new O(a[0],u[s]));else r.push(new O(a[0]));_(l,(function(){e(r,i)}))};var V="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new U(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new K(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(f=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Z[c],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&l.push(c)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=X[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=X[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new O(o,i[a]))}}(i),g(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],l=t[o+1],r=0;r<l.length;r++)a.push(new O(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new O(l.name,F("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new G(window);ie.a.c.custom=function(e,t){return new J(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new $(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},482:function(e,t,n){"use strict";n.r(t);var a=n(64),o=n(133),i=n.n(o),l=n(12),r=n(1),u=n.n(r),s=n(8),c=n(19),f=n(131),d=n(2),b=n(15),h=n(4),g=n(5),m=n(11),p=Object.keys(a),v=function(e){var t,n,a,o,v,_=e=e.parentProps,y=_.setAttributes,j=_.attributes,O=j.headSpace,w=j.headingColor,C=j.subHeadingColor,S=j.backgroundColor,F=j.separatorColor,T=j.separatorFillColor,E=j.separatorBg,H=j.separatorBorder,k=j.borderFocus,z=j.headingTag,P=j.headFontSizeType,B=j.headFontSize,x=j.headFontSizeTablet,I=j.headFontSizeMobile,L=j.headFontFamily,A=j.headFontWeight,R=j.headFontSubset,Y=j.headLineHeightType,M=j.headLineHeight,N=j.headLineHeightTablet,D=j.headLineHeightMobile,W=j.headLoadGoogleFonts,G=j.timelinAlignment,q=j.arrowlinAlignment,$=j.subHeadFontSizeType,J=j.subHeadFontSize,U=j.subHeadFontSizeTablet,V=j.subHeadFontSizeMobile,K=j.subHeadFontFamily,X=j.subHeadFontWeight,Q=j.subHeadFontSubset,Z=j.subHeadLineHeightType,ee=j.subHeadLineHeight,te=j.subHeadLineHeightTablet,ne=j.subHeadLineHeightMobile,ae=j.subHeadLoadGoogleFonts,oe=j.verticalSpace,ie=j.horizontalSpace,le=j.separatorwidth,re=j.borderwidth,ue=j.connectorBgsize,se=j.dateBottomspace,ce=j.align,fe=j.icon,de=j.iconColor,be=j.dateColor,he=j.dateFontsizeType,ge=j.dateFontsize,me=j.dateFontsizeTablet,pe=j.dateFontsizeMobile,ve=j.dateFontFamily,_e=j.dateFontWeight,ye=j.dateFontSubset,je=j.dateLineHeightType,Oe=j.dateLineHeight,we=j.dateLineHeightTablet,Ce=j.dateLineHeightMobile,Se=j.dateLoadGoogleFonts,Fe=j.iconSize,Te=j.borderRadius,Ee=j.bgPadding,He=j.iconFocus,ke=j.iconBgFocus,ze=j.displayPostDate,Pe=j.stack,Be=j.dateFormat,xe=new Date;if(1==W){var Ie={google:{families:[L+(A?":"+A:"")]}};t=u.a.createElement(f.a,{config:Ie})}if(1==ae){var Le={google:{families:[K+(X?":"+X:"")]}};n=u.a.createElement(f.a,{config:Le})}if(1==Se){var Ae={google:{families:[ve+(_e?":"+_e:"")]}};a=u.a.createElement(f.a,{config:Ae})}return u.a.createElement(r.Suspense,{fallback:Object(s.a)()},u.a.createElement(h.BlockControls,null,u.a.createElement(h.BlockAlignmentToolbar,{value:ce,onChange:function(e){y({align:e})},controls:["center","left","right"]})),u.a.createElement(h.InspectorControls,null,u.a.createElement(g.PanelBody,{title:Object(d.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement("h2",null,Object(d.__)("Layout","ultimate-addons-for-gutenberg")),u.a.createElement(g.SelectControl,{label:Object(d.__)("Orientation","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return y({timelinAlignment:e})},options:[{value:"left",label:Object(d.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(d.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(d.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.SelectControl,{label:Object(d.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return y({arrowlinAlignment:e})},options:[{value:"top",label:Object(d.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(d.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(d.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.SelectControl,{label:Object(d.__)("Stack on","ultimate-addons-for-gutenberg"),value:Pe,options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(d.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(d.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(d.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg"),onChange:function(e){return y({stack:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(d.__)("Date")),u.a.createElement(g.ToggleControl,{label:Object(d.__)("Display Date","ultimate-addons-for-gutenberg"),checked:ze,onChange:function(){var t=e.attributes.displayPostDate,n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.displayPostDate=t})),n({displayPostDate:!t})}}),ze&&u.a.createElement(g.SelectControl,{label:Object(d.__)("Date Format","ultimate-addons-for-gutenberg"),value:Be,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.dateFormat=t})),n({dateFormat:t})},options:[{value:"M j, Y",label:Object(b.dateI18n)("M j, Y",xe)},{value:"F j, Y",label:Object(b.dateI18n)("F j, Y",xe)},{value:"m/d/Y",label:Object(b.dateI18n)("m/d/Y",xe)},{value:"m-d-Y",label:Object(b.dateI18n)("m-d-Y",xe)},{value:"m.d.Y",label:Object(b.dateI18n)("m.d.Y",xe)},{value:"d M Y",label:Object(b.dateI18n)("d M Y",xe)},{value:"d F Y",label:Object(b.dateI18n)("d F Y",xe)},{value:"d-m-Y",label:Object(b.dateI18n)("d-m-Y",xe)},{value:"d.m.Y",label:Object(b.dateI18n)("d.m.Y",xe)},{value:"d/m/Y",label:Object(b.dateI18n)("d/m/Y",xe)},{value:"Y-m-d",label:Object(b.dateI18n)("Y-m-d",xe)},{value:"Y.m.d",label:Object(b.dateI18n)("Y.m.d",xe)},{value:"Y/m/d",label:Object(b.dateI18n)("Y/m/d",xe)},{value:"M, Y",label:Object(b.dateI18n)("M, Y",xe)},{value:"M Y",label:Object(b.dateI18n)("M Y",xe)},{value:"F, Y",label:Object(b.dateI18n)("F, Y",xe)},{value:"F Y",label:Object(b.dateI18n)("F Y",xe)},{value:"custom",label:Object(d.__)("Normal Text","ultimate-addons-for-gutenberg")}]}),ze&&"center"!==G&&u.a.createElement(g.RangeControl,{label:Object(d.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return y({dateBottomspace:e})},min:0,max:50,allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(d.__)("Heading","ultimate-addons-for-gutenberg")),u.a.createElement(c.default,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:W,label:"headLoadGoogleFonts"},fontFamily:{value:L,label:"headFontFamily"},fontWeight:{value:A,label:"headFontWeight"},fontSubset:{value:R,label:"headFontSubset"},fontSizeType:{value:P,label:"headFontSizeType"},fontSize:{value:B,label:"headFontSize"},fontSizeMobile:{value:I,label:"headFontSizeMobile"},fontSizeTablet:{value:x,label:"headFontSizeTablet"},lineHeightType:{value:Y,label:"headLineHeightType"},lineHeight:{value:M,label:"headLineHeight"},lineHeightMobile:{value:D,label:"headLineHeightMobile"},lineHeightTablet:{value:N,label:"headLineHeightTablet"}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(d.__)("Content","ultimate-addons-for-gutenberg")),u.a.createElement(c.default,{label:Object(d.__)("Content Tag","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:ae,label:"subHeadLoadGoogleFonts"},fontFamily:{value:K,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Q,label:"subHeadFontSubset"},fontSizeType:{value:$,label:"subHeadFontSizeType"},fontSize:{value:J,label:"subHeadFontSize"},fontSizeMobile:{value:V,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:U,label:"subHeadFontSizeTablet"},lineHeightType:{value:Z,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ne,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:te,label:"subHeadLineHeightTablet"}}),ze&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(d.__)("Date Typography","ultimate-addons-for-gutenberg")),u.a.createElement(c.default,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:Se,label:"dateLoadGoogleFonts"},fontFamily:{value:ve,label:"dateFontFamily"},fontWeight:{value:_e,label:"dateFontWeight"},fontSubset:{value:ye,label:"dateFontSubset"},fontSizeType:{value:he,label:"dateFontsizeType"},fontSize:{value:ge,label:"dateFontsize"},fontSizeMobile:{value:pe,label:"dateFontsizeMobile"},fontSizeTablet:{value:me,label:"dateFontsizeTablet"},lineHeightType:{value:je,label:"dateLineHeightType"},lineHeight:{value:Oe,label:"dateLineHeight"},lineHeightMobile:{value:Ce,label:"dateLineHeightMobile"},lineHeightTablet:{value:we,label:"dateLineHeightTablet"}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(d.__)("Date Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:be}}))),u.a.createElement(h.ColorPalette,{value:be,onChange:function(e){return y({dateColor:e})},allowReset:!0}))),u.a.createElement(g.PanelBody,{title:Object(d.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(g.RangeControl,{label:Object(d.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return y({horizontalSpace:e})},min:1,max:50,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return y({verticalSpace:e})},min:1,max:100,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return y({headSpace:e})},min:0,max:50,allowReset:!0})),u.a.createElement(g.PanelBody,{title:Object(d.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(i.a,{icons:p,value:fe,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.icon=t})),n({icon:t})},isMulti:!1,renderFunc:l.a,noSelectedPlaceholder:Object(d.__)("Select Icon","ultimate-addons-for-gutenberg")}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Icon Size","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.iconSize=t})),n({iconSize:t})},min:0,max:30,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:ue,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.connectorBgsize=t})),n({connectorBgsize:t})},min:25,max:90,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Border Width","ultimate-addons-for-gutenberg"),value:re,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.borderwidth=t})),n({borderwidth:t})},min:1,max:10,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Connector Width","ultimate-addons-for-gutenberg"),value:le,onChange:function(t){var n=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,n){e.attributes.separatorwidth=t})),n({separatorwidth:t})},min:1,max:10,allowReset:!0})),(o=u.a.createElement(h.PanelColorSettings,{title:Object(d.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:F,onChange:function(e){return y({separatorColor:e})},label:Object(d.__)("Line Color","ultimate-addons-for-gutenberg")},{value:de,onChange:function(e){return y({iconColor:e})},label:Object(d.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:E,onChange:function(e){return y({separatorBg:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")},{value:H,onChange:function(e){return y({separatorBorder:e})},label:Object(d.__)("Border Color","ultimate-addons-for-gutenberg")}]}),v=u.a.createElement(h.PanelColorSettings,{title:Object(d.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:T,onChange:function(e){return y({separatorFillColor:e})},label:Object(d.__)("Line Color","ultimate-addons-for-gutenberg")},{value:He,onChange:function(e){return y({iconFocus:e})},label:Object(d.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:ke,onChange:function(e){return y({iconBgFocus:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")},{value:k,onChange:function(e){return y({borderFocus:e})},label:Object(d.__)("Border Color","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.PanelBody,{title:Object(d.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(g.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(d.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(d.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?v:o,u.a.createElement("div",null,t)})))),u.a.createElement(g.PanelBody,{title:Object(d.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(g.SelectControl,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return y({headingTag:e})},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(d.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(d.__)("SPAN","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return y({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0}),u.a.createElement(g.RangeControl,{label:Object(d.__)("Padding","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return y({bgPadding:e})},min:1,initialPosition:10,max:50,allowReset:!0})),u.a.createElement(h.PanelColorSettings,{title:Object(d.__)("Colors","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:w,onChange:function(e){return y({headingColor:e})},label:Object(d.__)("Heading Color","ultimate-addons-for-gutenberg")},{value:C,onChange:function(e){return y({subHeadingColor:e})},label:Object(d.__)("Content Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return y({backgroundColor:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")}]})),t,n,a)};t.default=u.a.memo(v)}}]);