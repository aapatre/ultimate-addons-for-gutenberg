(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[70],{347:function(t,e,o){"use strict";o.d(e,"b",(function(){return f})),o.d(e,"a",(function(){return w})),o.d(e,"e",(function(){return _})),o.d(e,"c",(function(){return O})),o.d(e,"d",(function(){return E}));var a=o(131),n=o(134),r=o(132),i=o(129),l=o(133),c=o(13);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}var m=Object(c.createContext)({parentName:"",parentClassName:"",isLoading:!1}),f=function(t){var e=t.parentName,o=void 0===e?"":e,a=t.parentClassName,n=void 0===a?"":a,r=t.children,i={parentName:o,parentClassName:n};return React.createElement(m.Provider,{value:i},r)},w=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],_=function t(e,o,a,n,r){if(a){var i=O(e);return a.map((function(a){var l,s,u=(s=2,function(t){if(Array.isArray(t))return t}(l=a)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a,n,r=[],_n=!0,i=!1;try{for(o=o.call(t);!(_n=(a=o.next()).done)&&(r.push(a.value),!e||r.length!==e);_n=!0);}catch(t){i=!0,n=t}finally{try{_n||null==o.return||o.return()}finally{if(i)throw n}}return r}}(l,s)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(t,e):void 0}}(l,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=u[0],p=u[1],m=void 0===p?{}:p;m.children&&m.children.length>0&&t(e,o,m.children,n,r);var f=i[b];return f?React.createElement(c.Suspense,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(f,d({},m,{post:o,attributes:n,categoriesList:r}))):null}))}},y={};function v(t){t.context||(t.context="any"),k(t,"context","string"),k(t,"blockName","string"),h(t,"component");var e=t.context,o=t.blockName,a=t.component;y[e]||(y[e]={}),y[e][o]=a}var h=function(t,e){if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},k=function(t,e,o){var a=p(t[e]);if(a!==o)throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. It was a ").concat(a,", but must be a ").concat(o,"."))};v({blockName:"uagb/post-title",component:a.a}),v({blockName:"uagb/post-image",component:r.a}),v({blockName:"uagb/post-meta",component:n.a}),v({blockName:"uagb/post-excerpt",component:i.a}),v({blockName:"uagb/post-button",component:l.a});var O=function(t){return u(u({},"object"===p(y[e=t])&&Object.keys(y[e]).length>0?y[e]:{}),y.any);var e},E=function t(e){return e&&0!==e.length?e.map((function(e){return[e.name,u(u({},e.attributes),{},{post:void 0,children:e.innerBlocks.length>0?t(e.innerBlocks):[]})]})):[]}},358:function(t,e,o){"use strict";var a,n=o(17),r=o.n(n),i=o(359),l=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=i.a.locals||{},s.use=function(){return l++||(a=r()(i.a,c)),s},s.unuse=function(){l>0&&!--l&&(a(),a=null)},e.a=s},359:function(t,e,o){"use strict";var a=o(18),n=o.n(a)()((function(t){return t[1]}));n.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=n},636:function(t,e,o){"use strict";o.r(e);var a=o(347),n=o(1),r=o.n(n),i=o(4),l=o.n(i),c=o(6),s=o(11);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}var b=Object(n.lazy)((function(){return o.e(0).then(o.t.bind(null,595,7))}));function p(t){var e=t.attributes,o=t.className,i=t.latestPosts,p=t.block_id,d=t.deviceType,g=e.columns,m=e.tcolumns,f=e.mcolumns,w=e.imgPosition,_=e.postsToShow,y=e.autoplay,v=e.pauseOnHover,h=e.transitionSpeed,k=e.infiniteLoop,O=e.arrowSize,E=e.arrowBorderSize,j=e.arrowBorderRadius,N=e.arrowColor,S=e.arrowDots,C=e.equalHeight,P=e.layoutConfig,x=i.length>_?i.slice(0,_):i;function I(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",role:"button",style:{borderColor:N,borderRadius:j,borderWidth:E}},c.a.carousel_right)}function A(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",role:"button",style:{borderColor:N,borderRadius:j,borderWidth:E}},c.a.carousel_left)}var T=C?"uagb-post__carousel_equal-height":"",B={slidesToShow:g,slidesToScroll:1,autoplaySpeed:2e3,autoplay:y,infinite:k,pauseOnHover:v,speed:h,arrows:"arrows"==S||"arrows_dots"==S,dots:"dots"==S||"arrows_dots"==S,rtl:!1,afterChange:function(){C&&uagb_carousel_height(p)},nextArrow:r.a.createElement(I,{arrowSize:O}),prevArrow:r.a.createElement(A,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:m,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:f,slidesToScroll:1}}]},L=x.map((function(e,o){return r.a.createElement("article",{key:o},r.a.createElement("div",{className:"uagb-post__inner-wrap"},Object(a.e)("uagb/post-carousel",e,P,t.attributes,t.categoriesList)))}));return g>=x.length?r.a.createElement("div",{className:l()(o,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-".concat(w),"".concat(T),"uagb-editor-preview-mode-".concat(d.toLowerCase()),"uagb-block-".concat(p)),"data-blog-id":p},r.a.createElement("div",{className:l()("is-carousel","uagb-post__columns-".concat(g),"uagb-post__columns-tablet-".concat(m),"uagb-post__columns-mobile-".concat(f),"uagb-post__items")},r.a.createElement(a.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},L))):r.a.createElement("div",{className:l()(o,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-".concat(w),"".concat(T),"uagb-block-".concat(p)),"data-blog-id":p,style:"dots"==S?{padding:"0 0 35px 0"}:{}},r.a.createElement(n.Suspense,{fallback:Object(s.a)()},r.a.createElement(b,u({className:l()("is-carousel","uagb-post__columns-".concat(g),"uagb-post__items")},B),L)))}var d=r.a.memo(p),g=o(2),m=o(7),f=o(3),w=o(5),_=o(358);function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}var v=function(t){Object(n.useLayoutEffect)((function(){return _.a.use(),function(){_.a.unuse()}}),[]);var e,o=t,i=o.state,l=o.setState,c=o.togglePreview,s=t=t.parentProps,u=s.attributes,b=s.categoriesList,p=s.latestPosts,v=s.deviceType,h=r.a.createElement(f.Disabled,null,r.a.createElement(d,{attributes:u,className:t.className,latestPosts:p,block_id:t.clientId.substr(0,8),categoriesList:b,deviceType:v}));return r.a.createElement(r.a.Fragment,null,i.isEditing?(e={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(a.c)("uagb/post-grid"))},0!==t.attributes.layoutConfig.length&&(e.renderAppender=!1),r.a.createElement(f.Placeholder,{label:"Post Carousel Layout"},r.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},r.a.createElement(f.Tip,null,Object(g.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),r.a.createElement(a.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},r.a.createElement("article",null,r.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},r.a.createElement("div",{className:"uagb-post__text"},r.a.createElement(w.InnerBlocks,e))))),r.a.createElement("div",{className:"uagb-block-all-post__actions"},r.a.createElement(f.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var e=t,o=e.block;(0,e.setAttributes)({layoutConfig:Object(a.d)(o)}),l({innerBlocks:o}),c()}},Object(g.__)("Done")),r.a.createElement(f.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var e=t.replaceInnerBlocks,o=i.innerBlocks;e(t.clientId,o),c()}},Object(g.__)("Cancel")),r.a.createElement(f.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var e=t,o=e.block,n=e.replaceInnerBlocks,r=[];a.a.map((function(t){var e,o,a=(o=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a,n,r=[],_n=!0,i=!1;try{for(o=o.call(t);!(_n=(a=o.next()).done)&&(r.push(a.value),!e||r.length!==e);_n=!0);}catch(t){i=!0,n=t}finally{try{_n||null==o.return||o.return()}finally{if(i)throw n}}return r}}(e,o)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?y(t,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],i=a[1];return r.push(Object(m.createBlock)(n,i)),!0})),n(t.clientId,r),l({innerBlocks:o})}},Object(g.__)("Reset Layout")))))):h)};e.default=r.a.memo(v)}}]);