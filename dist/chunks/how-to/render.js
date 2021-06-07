(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{257:function(e,t,a){"use strict";var o=a(18),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #FFF8E5;\n  border-left: 5px solid #FFB901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n',""]),t.a=n},543:function(e,t,a){"use strict";a.r(t);var o,n=a(3),r=a.n(n),c=(a(67),a(2)),i=a(9),l=a(4),s=a(1),u=a(17),m=a.n(u),g=a(257),d=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=g.a.locals||{},b.use=function(){return d++||(o=m()(g.a,p)),b},b.unuse=function(){d>0&&!--d&&(o(),o=null)};var h=b;function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){_(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var R=["uagb/info-box"];t.default=React.memo((function(e){Object(s.useLayoutEffect)((function(){return h.use(),function(){h.unuse()}}),[]);var t=e=e.parentProps,a=t.className,o=t.attributes,n=t.setAttributes,u=t.insertBlocksAfter,m=t.mergeBlocks,g=t.onReplace,d=t.deviceType,p=t.attributes,b=p.currencyType,w=p.showEstcost,v=p.showTotaltime,N=p.showMaterials,y=p.showTools,E=p.toolsTitle,O=p.materialTitle,x=p.stepsTitle,T=p.tools,j=p.materials,S=p.timeNeeded,k=p.estCost,M=p.mainimage,P=p.headingTitle,C=p.headingDesc,F=p.headingTag,q=p.time,D=p.cost,I=p.timeInMins,B=p.timeInHours,A=p.timeInDays,H=p.timeInMonths,z=p.timeInYears,Y=function(e,t){for(var a=(void 0).props,o=a.attributes,n=a.insertBlocksAfter,r=a.setAttributes,c=a.onReplace,l=arguments.length,s=new Array(l>2?l-2:0),u=2;u<l;u++)s[u-2]=arguments[u];t&&s.push(Object(i.createBlock)("core/paragraph",{content:t})),s.length&&n&&n(s);var m=o.content;e?m!==e&&r({content:e}):c([])},G="",J="",L="";if(void 0!==o.mainimage&&null!==o.mainimage&&""!==o.mainimage&&(G=o.mainimage.url,J=o.mainimage.title),""!==G){var U=o.mainimage.sizes,K=o.imgSize;L=void 0!==U&&void 0!==U[K]?U[K].url:G}var Q="";M&&M.url&&(Q=React.createElement("img",{className:"uagb-howto__source-image",src:L,title:J}));var V=I||q,W=z>1?Object(c.__)("Years","ultimate-addons-for-gutenberg"):Object(c.__)("Year","ultimate-addons-for-gutenberg"),X=H>1?Object(c.__)(" Months ","ultimate-addons-for-gutenberg"):Object(c.__)(" Month ","ultimate-addons-for-gutenberg"),Z=A>1?Object(c.__)(" Days ","ultimate-addons-for-gutenberg"):Object(c.__)(" Day ","ultimate-addons-for-gutenberg"),$=B>1?Object(c.__)("Hours ","ultimate-addons-for-gutenberg"):Object(c.__)(" Hour ","ultimate-addons-for-gutenberg"),ee=V>1?Object(c.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(c.__)(" Minute ","ultimate-addons-for-gutenberg");return React.createElement("div",{className:r()(a,"uagb-editor-preview-mode-".concat(d.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)),"uagb-how-to-main-wrap")},React.createElement(l.RichText,{tagName:F,placeholder:Object(c.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:P,className:"uagb-howto-heading-text",multiline:!1,onChange:function(e){n({headingTitle:e})},onMerge:m,onSplit:u?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];u([].concat(o,[Object(i.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return g([])}}),React.createElement(l.RichText,{tagName:"p",placeholder:Object(c.__)("So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:C,className:"uagb-howto-desc-text",onChange:function(e){return n({headingDesc:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),React.createElement("div",{className:"uagb-howto__source-wrap"},Q),React.createElement("span",{className:"uagb-howto__time-wrap"},v&&React.createElement(l.RichText,{tagName:"h4",placeholder:Object(c.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:S,className:"uagb-howto-timeNeeded-text",onChange:function(e){return n({timeNeeded:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),v&&React.createElement(React.Fragment,null,z&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",z),React.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",W)),H&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-howto-timeNeeded-value"},H),React.createElement("p",{className:"uagb-howto-timeINmin-text"},X)),A&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-howto-timeNeeded-value"},A),React.createElement("p",{className:"uagb-howto-timeINmin-text"},Z)),B&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-howto-timeNeeded-value"},B),React.createElement("p",{className:"uagb-howto-timeINmin-text"},$)),V&&React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-howto-timeNeeded-value"},V),React.createElement("p",{className:"uagb-howto-timeINmin-text"},ee)))),React.createElement("span",{className:"uagb-howto__cost-wrap"},w&&React.createElement(l.RichText,{tagName:"h4",placeholder:Object(c.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:k,className:"uagb-howto-estcost-text",onChange:function(e){return n({estCost:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),w&&React.createElement(l.RichText,{tagName:"p",placeholder:Object(c.__)("30","ultimate-addons-for-gutenberg"),value:D,className:"uagb-howto-estcost-value",onChange:function(e){return n({cost:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),w&&React.createElement(l.RichText,{tagName:"p",placeholder:Object(c.__)("USD","ultimate-addons-for-gutenberg"),value:b,className:"uagb-howto-estcost-type",onChange:function(e){return n({currencyType:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}})),React.createElement("div",{className:"uagb-how-to-tools__wrap"},y&&React.createElement(l.RichText,{tagName:"h4",placeholder:Object(c.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:E,className:"uagb-howto-req-tools-text",onChange:function(e){return n({toolsTitle:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),y&&React.createElement("div",{className:"uagb-how-to-tools"},T.map((function(t,a){var o;return React.createElement("div",{className:r()("uagb-how-to-tools-".concat(a),"uagb-how-to-tools-child__wrapper"),key:a},React.createElement("div",{className:"uagb-tools"},React.createElement(l.RichText,(_(o={tagName:"div",placeholder:Object(c.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:t.add_required_tools,onChange:function(t){!function(t,a){var o=e,n=o.attributes;(0,o.setAttributes)({tools:n.tools.map((function(e,o){return a===o&&(e=f(f({},e),t)),e}))})}({add_required_tools:t},a)},className:"uagb-tools__label"},"placeholder",Object(c.__)("Description","ultimate-addons-for-gutenberg")),_(o,"multiline",!1),_(o,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),o))))}))),N&&React.createElement(l.RichText,{tagName:"h4",placeholder:Object(c.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:O,className:"uagb-howto-req-materials-text",onChange:function(e){return n({materialTitle:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),N&&React.createElement(React.Fragment,null,j.map((function(t,a){var o;return React.createElement("div",{className:r()("uagb-how-to-materials-".concat(a),"uagb-how-to-materials-child__wrapper"),key:a},React.createElement("div",{className:"uagb-materials"},React.createElement(l.RichText,(_(o={tagName:"div",placeholder:Object(c.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:t.add_required_materials,onChange:function(t){!function(t,a){var o=e,n=o.attributes;(0,o.setAttributes)({materials:n.materials.map((function(e,o){return a===o&&(e=f(f({},e),t)),e}))})}({add_required_materials:t},a)},className:"uagb-materials__label"},"placeholder",Object(c.__)("Description","ultimate-addons-for-gutenberg")),_(o,"multiline",!1),_(o,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),o))))})))),React.createElement("div",{className:"uagb-how-to-steps__wrap"},React.createElement(l.RichText,{tagName:"h4",placeholder:Object(c.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-steps-text",onChange:function(e){return n({stepsTitle:e})},onMerge:m,onSplit:Y,onRemove:function(){return g([])}}),React.createElement(l.InnerBlocks,{template:[["uagb/info-box",{infoBoxTitle:"Step 1",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}],["uagb/info-box",{infoBoxTitle:"Step 2",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}],["uagb/info-box",{infoBoxTitle:"Step 3",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}]],allowedBlocks:R})))}))}}]);