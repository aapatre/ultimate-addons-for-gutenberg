(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{136:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return v})),n.d(e,"e",(function(){return w})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return N}));var r=n(68),o=n(71),a=n(69),i=n(66),l=n(70);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=wp.element,d=g.createContext,f=(g.useContext,g.Suspense),y=d({parentName:"",parentClassName:"",isLoading:!1}),h=function(t){var e=t.parentName,n=void 0===e?"":e,r=t.parentClassName,o=void 0===r?"":r,a=t.children,i={parentName:n,parentClassName:o};return React.createElement(y.Provider,{value:i},a)},v=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],w=function t(e,n,r,o,a){if(r){var i=E(e);return r.map((function(r,l){var c,u,s=(u=2,function(t){if(Array.isArray(t))return t}(c=r)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(t);!(_n=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);_n=!0);}catch(t){i=!0,o=t}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(c,u)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(c,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=s[0],g=s[1],d=void 0===g?{}:g;d.children&&d.children.length>0&&t(e,n,d.children,o,a);var y=i[b];return y?React.createElement(f,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(y,p({},d,{post:n,attributes:o,categoriesList:a}))):null}))}},_={};function k(t){t.context||(t.context="any"),j(t,"context","string"),j(t,"blockName","string"),O(t,"component");var e=t.context,n=t.blockName,r=t.component;_[e]||(_[e]={}),_[e][n]=r}var O=function(t,e){if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},j=function(t,e,n){var r=b(t[e]);if(r!==n)throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. It was a ").concat(r,", but must be a ").concat(n,"."))};k({blockName:"uagb/post-title",component:r.a}),k({blockName:"uagb/post-image",component:a.a}),k({blockName:"uagb/post-meta",component:o.a}),k({blockName:"uagb/post-excerpt",component:i.a}),k({blockName:"uagb/post-button",component:l.a});var E=function(t){return u(u({},"object"===b(_[e=t])&&Object.keys(_[e]).length>0?_[e]:{}),_.any);var e},N=function t(e){return e&&0!==e.length?e.map((function(e){return[e.name,u(u({},e.attributes),{},{post:void 0,children:e.innerBlocks.length>0?t(e.innerBlocks):[]})]})):[]}},154:function(t,e,n){"use strict";var r,o=n(17),a=n.n(o),i=n(155),l=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},u={};u.locals=i.a.locals||{},u.use=function(){return l++||(r=a()(i.a,c)),u},u.unuse=function(){l>0&&!--l&&(r(),r=null)},e.a=u},155:function(t,e,n){"use strict";var r=n(18),o=n.n(r)()((function(t){return t[1]}));o.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=o},465:function(t,e,n){"use strict";n.r(e);var r=n(136),o=n(9),a=n(4),i=n(5),l=n(2),c=n(1),u=n.n(c),s=n(8),b=n(154);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=Object(c.lazy)((function(){return Promise.all([n.e(108),n.e(76)]).then(n.bind(null,327))})),g=function(t){Object(c.useLayoutEffect)((function(){return b.a.use(),function(){b.a.unuse()}}),[]);var e,n=t,g=n.state,d=n.setState,f=n.togglePreview,y=t=t.parentProps,h=y.categoriesList,v=y.latestPosts,w=y.attributes,_=y.deviceType,k=u.a.createElement(i.Disabled,null,u.a.createElement(c.Suspense,{fallback:Object(s.a)()},u.a.createElement(m,{attributes:w,className:t.className,latestPosts:v,block_id:t.clientId.substr(0,8),categoriesList:h,deviceType:_})));return u.a.createElement(u.a.Fragment,null,g.isEditing?(e={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(r.c)("uagb/post-masonry"))},0!==t.attributes.layoutConfig.length&&(e.renderAppender=!1),u.a.createElement(i.Placeholder,{label:"Post Masonry Layout"},u.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},u.a.createElement(i.Tip,null,Object(l.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),u.a.createElement(r.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},u.a.createElement("article",null,u.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},u.a.createElement("div",{className:"uagb-post__text"},u.a.createElement(a.InnerBlocks,e))))),u.a.createElement("div",{className:"uagb-block-all-post__actions"},u.a.createElement(i.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var e=t,n=e.block;(0,e.setAttributes)({layoutConfig:Object(r.d)(n)}),d({innerBlocks:n}),f()}},Object(l.__)("Done")),u.a.createElement(i.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var e=t.replaceInnerBlocks,n=g.innerBlocks;e(t.clientId,n),f()}},Object(l.__)("Cancel")),u.a.createElement(i.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var e=t,n=e.block,a=e.replaceInnerBlocks,i=[];r.a.map((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(t);!(_n=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);_n=!0);}catch(t){i=!0,o=t}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],l=r[1];return i.push(Object(o.createBlock)(a,l)),!0})),a(t.clientId,i),d({innerBlocks:n})}},Object(l.__)("Reset Layout")))))):k)};e.default=u.a.memo(g)}}]);