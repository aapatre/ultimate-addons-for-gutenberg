(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{269:function(t,e,n){"use strict";var a=n(32),i=n.n(a),o=n(270),l=n.n(o),s=n(3);if(void 0===r)var r=[];const c=t=>{const[e,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{c()},[]),Object(s.useEffect)(()=>{const{onStatus:n,config:a}=t;void 0!==e.status&&n(e.status),a!==e.config&&c()},[t]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},c=()=>{var e;r.includes(t.config.google.families[0])||(l.a.load({...t.config,loading:a,active:i,inactive:o}),e=t.config.google.families[0],r.includes(e)||r.push(e))},{children:u}=t;return u||null};c.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},c.defaultProps={onStatus:()=>{}},e.a=c},270:function(t,e,n){var a;!function(){function i(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,a){if(e=t.c.createElement(e),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return a&&e.appendChild(t.c.createTextNode(a)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,n){e=e||[],n=n||[];for(var a=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(e[i]===a[l]){o=!0;break}o||a.push(e[i])}for(e=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||e.push(a[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(t,e){for(var n=t.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==e)return!0;return!1}function d(t,e,n){function a(){s&&i&&o&&(s(l),s=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,o=!0,l=null,s=n||null;c?(e.onload=function(){i=!0,a()},e.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),f(t,"head",e)}function g(t,e,n,a){var i=t.c.getElementsByTagName("head")[0];if(i){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,_(t)}}function w(t,e){t.c=e,_(t)}function _(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function k(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var a=t[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?e.push("'"+a+"'"):e.push(a)}return e.join(",")}function C(t){return t.a+t.f}function O(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function x(t){var e=4,n="n",a=null;return t&&((a=t.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=t.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),n+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function T(t){if(t.g){var e=b(t.f,t.a.c("wf","active")),n=[],a=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),p(t.f,n,a)}S(t,"inactive")}function S(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,C(n)):t.h[e]())}function H(){this.c={}}function M(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){f(t.c,"body",t.a)}function D(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+k(t.c)+";font-style:"+O(t)+";font-weight:"+t.f+"00;"}function V(t,e,n,a,i,o){this.g=t,this.j=e,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function N(t,e,n,a,i,o,l){this.v=t,this.B=e,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),t=D(t=new j(this.a.c+",serif",C(this.a))),this.g.a.style.cssText=t,t=D(t=new j(this.a.c+",sans-serif",C(this.a))),this.h.a.style.cssText=t,t=D(t=new j("serif",C(this.a))),this.j.a.style.cssText=t,t=D(t=new j("sans-serif",C(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}y.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},V.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),a=new Promise((function(a,i){!function o(){s()-n>=e.f?i():t.fonts.load(function(t){return O(t)+" "+t.f+"00 300px "+k(t.c)}(e.a),e.h).then((function(t){1<=t.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(t,n){i=setTimeout(n,e.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var I={D:"serif",C:"sans-serif"},P=null;function B(){if(null===P){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);P=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return P}function W(t,e,n){for(var a in I)if(I.hasOwnProperty(a)&&e===t.f[I[a]]&&n===t.f[I[a]])return!0;return!1}function L(t,e){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function R(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function t(e){var n,a=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(n=a===e.f.serif&&i===e.f["sans-serif"])||(n=B()&&W(e,a,i)),n?s()-e.A>=e.w?B()&&W(e,a,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?L(e,e.v):L(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):L(e,e.v)}(this)};var Z=null;function F(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function $(t){this.j=t,this.a=new H,this.h=0,this.f=this.g=!0}function q(t,e,n,a,i){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,s=a||{};if(0===n.length&&o)T(e.a);else{e.f+=n.length,o&&(e.j=o);var r,c=[];for(r=0;r<n.length;r++){var u=n[r],f=s[u.c],h=e.a,b=u;if(h.g&&p(h.f,[h.a.c("wf",b.c,C(b).toString(),"loading")]),S(h,"fontloading",b),h=null,null===Z)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Z=b?42<parseInt(b[1],10):!d}else Z=!1;h=Z?new V(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new N(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(r=0;r<c.length;r++)c[r].start()}}),0)}function G(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function X(t,e){this.c=t||z,this.a=[],this.f=[],this.g=e||""}R.prototype.g=function(t){var e=this.a;e.g&&p(e.f,[e.a.c("wf",t.c,C(t).toString(),"active")],[e.a.c("wf",t.c,C(t).toString(),"loading"),e.a.c("wf",t.c,C(t).toString(),"inactive")]),S(e,"fontactive",t),this.m=!0,F(this)},R.prototype.h=function(t){var e=this.a;if(e.g){var n=b(e.f,e.a.c("wf",t.c,C(t).toString(),"active")),a=[],i=[e.a.c("wf",t.c,C(t).toString(),"loading")];n||a.push(e.a.c("wf",t.c,C(t).toString(),"inactive")),p(e.f,a,i)}S(e,"fontinactive",t),F(this)},$.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var a=[],i=n.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),S(t,"loading")}(e),a=function(t,e,n){var a,i=[];for(a in e)if(e.hasOwnProperty(a)){var o=t.c[a];o&&i.push(o(e[a],n))}return i}(t.a,n,t.c);var o=new R(t.c,e,i);for(t.h=a.length,e=0,n=a.length;e<n;e++)a[e].load((function(e,n,a){q(t,o,e,n,a)}))}(this,new E(this.c,t),t)},G.prototype.load=function(t){var e=this,n=e.a.projectId,a=e.a.version;if(n){var i=e.c.o;g(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?t([]):(i["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(a=o[s].fontStyle+o[s].fontWeight,l.push(new j(r,a))):l.push(new j(r))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},J.prototype.load=function(t){var e,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(e=0,n=a.length;e<n;e++)d(this.c,a[e],v(l));var s=[];for(e=0,n=i.length;e<n;e++)if((a=i[e].split(":"))[1])for(var r=a[1].split(","),c=0;c<r.length;c+=1)s.push(new j(a[0],r[c]));else s.push(new j(a[0]));w(l,(function(){t(s,o)}))};var z="https://fonts.googleapis.com/css";function K(t){this.f=t,this.a=[],this.c={}}var U={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,a=new X(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var n=e.length,a=0;a<n;a++){var i=e[a].split(":");3==i.length&&t.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),t.a.push(i.join(o))}}(a,i);var o=new K(i);!function(t){for(var e=t.f.length,n=0;n<e;n++){var a=t.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],s=a[1])for(var s,r=(s=s.split(",")).length,c=0;c<r;c++){var u;if((u=s[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Y[u],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=U[a[0]])&&(t.c[i]=a))}for(t.c[i]||(a=U[i])&&(t.c[i]=a),a=0;a<o.length;a+=1)t.a.push(new j(i,o[a]))}}(o),d(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],a=0;a<e;a++)n.push(t.a[a].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(a),v(e)),w(e,(function(){t(o.a,o.c,nt)}))},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var a=[],i=0;i<e.length;i+=2)for(var o=e[i],l=e[i+1],s=0;s<l.length;s++)a.push(new j(o,l[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(a)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,n=this.c.o,a=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,x("font-weight:"+l.weight+";font-style:"+l.style)))}t(a.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new $(window);ot.a.c.custom=function(t,e){return new J(e,t)},ot.a.c.fontdeck=function(t,e){return new it(e,t)},ot.a.c.monotype=function(t,e){return new G(e,t)},ot.a.c.typekit=function(t,e){return new at(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(a=function(){return lt}.call(e,n,e,t))||(t.exports=a)}()},304:function(t,e,n){"use strict";var a=n(1),i=n.n(a),o=n(2),l=n(9),s=n(10),r=n(3);e.a=t=>{const[e,n]=Object(r.useState)(!1),{label:a,data:c,setAttributes:u,options:f}=t,h=Object(s.useSelect)(t=>t("core/edit-post").__experimentalGetPreviewDeviceType(),[]),{__experimentalSetPreviewDeviceType:p}=Object(s.useDispatch)("core/edit-post"),b={desktop:i.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:i.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:i.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},d=[{name:"Desktop",title:b.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:b.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:b.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],g={};return g.Desktop=i.a.createElement(l.SelectControl,{value:c.desktop.value,onChange:t=>u({[c.desktop.label]:t}),options:f.desktop}),g.Tablet=i.a.createElement(l.SelectControl,{value:c.tablet.value,onChange:t=>u({[c.tablet.label]:t}),options:f.tablet||f.desktop}),g.Mobile=i.a.createElement(l.SelectControl,{value:c.mobile.value,onChange:t=>u({[c.mobile.label]:t}),options:f.mobile||f.desktop}),i.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},i.a.createElement("div",{className:"uagb-size-type-field-tabs"},i.a.createElement("div",{className:"uagb-control__header"},i.a.createElement("div",{className:"uag-responsive-label-wrap"},a&&i.a.createElement("span",{className:"uag-control-label"},a),!e&&i.a.createElement(l.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:()=>{n(!e)}},b[h.toLowerCase()]),e&&i.a.createElement(l.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(o.__)("Device","ultimate-addons-for-gutenberg")},d.map(({name:t,key:a,title:o,itemClass:s})=>i.a.createElement(l.Button,{key:a,className:`components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${s}${t===h?" active-tab":""}`,"aria-pressed":h===t,onClick:()=>(p(t),void n(!e))},o))))),g[h]?g[h]:g.Desktop),t.help&&i.a.createElement("p",{className:"uag-control-help-notice"},t.help))}},582:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=(n(11),n(30),n(269),n(65)),l=n(22),s=(n(16),n(66)),r=n(304),c=(n(23),n(2)),u=n(5),f=(n(9),n(15));function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const p=t=>{t=t.parentProps;const{attributes:e,setAttributes:n}=t,{widthDesktop:a,widthTablet:p,widthMobile:b,widthType:d,minHeightDesktop:g,minHeightTablet:m,minHeightMobile:v,minHeightType:w,directionDesktop:_,directionTablet:y,directionMobile:j,alignItemsDesktop:k,alignItemsTablet:C,alignItemsMobile:O,justifyContentDesktop:x,justifyContentTablet:E,justifyContentMobile:T,wrapDesktop:S,wrapTablet:H,wrapMobile:M}=e;return i.a.createElement("div",null,i.a.createElement(u.InspectorControls,null,i.a.createElement(o.a,null,i.a.createElement(l.b,l.a.general,(()=>{const t={desktop:[{value:"row",label:Object(c.__)("Row","ultimate-addons-for-gutenberg")},{value:"column",label:Object(c.__)("Column","ultimate-addons-for-gutenberg")},{value:"row-reverse",label:Object(c.__)("Row Reverse","ultimate-addons-for-gutenberg")},{value:"column-reverse",label:Object(c.__)("Column Reverse","ultimate-addons-for-gutenberg")}]},e={desktop:[{value:"flex-start",label:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"flex-end",label:Object(c.__)("Right","ultimate-addons-for-gutenberg")},{value:"stretch",label:Object(c.__)("Stretch","ultimate-addons-for-gutenberg")}]},o={desktop:[{value:"flex-start",label:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"flex-end",label:Object(c.__)("Right","ultimate-addons-for-gutenberg")},{value:"space-between",label:Object(c.__)("Space Between","ultimate-addons-for-gutenberg")},{value:"space-around",label:Object(c.__)("Space Around","ultimate-addons-for-gutenberg")},{value:"space-evenly",label:Object(c.__)("Space Evenly","ultimate-addons-for-gutenberg")}]},l={desktop:[{value:"wrap",label:Object(c.__)("Wrap","ultimate-addons-for-gutenberg")},{value:"no-wrap",label:Object(c.__)("No Wrap","ultimate-addons-for-gutenberg")},{value:"wrap-reverse",label:Object(c.__)("Wrap Reverse","ultimate-addons-for-gutenberg")}]};return i.a.createElement(f.a,{title:Object(c.__)("Container","ultimate-addons-for-gutenberg")},i.a.createElement(s.a,{label:Object(c.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:a,label:"widthDesktop"},tablet:{value:p,label:"widthTablet"},mobile:{value:b,label:"widthMobile"}},min:0,max:1600,unit:{value:d,label:"widthType"},units:[{name:Object(c.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(c.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:n}),i.a.createElement(s.a,{label:Object(c.__)("Min Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:g,label:"minHeightDesktop"},tablet:{value:m,label:"minHeightTablet"},mobile:{value:v,label:"minHeightMobile"}},min:0,max:1440,unit:{value:w,label:"minHeightType"},units:[{name:Object(c.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("VH","ultimate-addons-for-gutenberg"),unitValue:"vh"}],setAttributes:n}),i.a.createElement(r.a,{label:Object(c.__)("Direction","ultimate-addons-for-gutenberg"),data:{desktop:{value:_,label:"directionDesktop"},tablet:{value:y,label:"directionTablet"},mobile:{value:j,label:"directionMobile"}},options:t,setAttributes:n}),i.a.createElement(r.a,{label:Object(c.__)("Align Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:k,label:"alignItemsDesktop"},tablet:{value:C,label:"alignItemsTablet"},mobile:{value:O,label:"alignItemsMobile"}},options:e,setAttributes:n}),i.a.createElement(r.a,{label:Object(c.__)("Justify Content","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"justifyContentDesktop"},tablet:{value:E,label:"justifyContentTablet"},mobile:{value:T,label:"justifyContentMobile"}},options:o,setAttributes:n}),i.a.createElement(r.a,{label:Object(c.__)("Wrap","ultimate-addons-for-gutenberg"),data:{desktop:{value:S,label:"wrapDesktop"},tablet:{value:H,label:"wrapTablet"},mobile:{value:M,label:"wrapMobile"}},options:l,setAttributes:n}))})()),i.a.createElement(l.b,l.a.style),i.a.createElement(l.b,h({},l.a.advance,{parentProps:t})))))};e.default=i.a.memo(p)}}]);