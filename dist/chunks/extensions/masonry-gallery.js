(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[24],{321:function(e,t,a){"use strict";var l=a(18),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,".wp-block-gallery.uag-masonry ul.blocks-gallery-grid {\n  column-count: 4;\n  column-gap: 1em;\n  display: block; }\n  .wp-block-gallery.uag-masonry ul.blocks-gallery-grid li.blocks-gallery-item {\n    margin: 0;\n    display: block;\n    grid-template-rows: 1fr auto;\n    margin-bottom: 1em;\n    break-inside: avoid;\n    width: unset; }\n",""]),t.a=n},570:function(e,t,a){"use strict";a.r(t);var l=a(35);const{enableMasonryGallery:n}=uagb_blocks_info;"enabled"!==n&&!0!==n||Object(l.addFilter)("blocks.registerBlockType","uagb/masonry-gallery",(function(e){return["core/gallery"].includes(e.name)&&e.attributes&&(e.attributes=Object.assign(e.attributes,{masonry:{type:"boolean",default:!1},masonryGutter:{type:"number"},block_id:{type:"string"}})),e}));var r=a(2),o=a(5),s=a(7),c=a(14),i=a(0),u=a(9);const{enableMasonryGallery:b}=uagb_blocks_info,g=Object(c.createHigherOrderComponent)(e=>t=>{const{attributes:a,setAttributes:l,isSelected:n}=t,c=t.name,b=()=>{const e=a.columns?a.columns:3,l={".wp-block-gallery ul.blocks-gallery-grid":{"column-gap":Object(i.a)(a.masonryGutter,"px"),"column-count":e},".wp-block-gallery ul.blocks-gallery-grid li.blocks-gallery-item":{"margin-bottom":Object(i.a)(a.masonryGutter,"px")}},n=Object(u.a)(l,"#block-"+t.clientId);if(a.masonry){const e=document.getElementById("uag-gallery-masonry-style-"+t.clientId.substr(0,8));if(null!=e)e.innerHTML=n;else{const e=document.createElement("style");e.setAttribute("id","uag-gallery-masonry-style-"+t.clientId.substr(0,8)),e.innerHTML=n,document.head.appendChild(e)}}};return b(),React.createElement(React.Fragment,null,React.createElement(e,t),n&&["core/gallery"].includes(c)&&a.ids&&0!==a.ids.length&&React.createElement(o.InspectorControls,null,React.createElement(s.PanelBody,{title:Object(r.__)("Masonry Gallery","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(s.ToggleControl,{label:Object(r.__)("Enable Masonry Layout"),checked:a.masonry,onChange:e=>(e=>{if(e)l({className:"uag-masonry"});else{let e=a.className;e=e.replace("uag-masonry",""),l({className:e})}l({masonry:!a.masonry}),l({block_id:t.clientId.substr(0,8)})})(e)}),a.masonry&&React.createElement(s.RangeControl,{label:Object(r.__)("Gap","ultimate-addons-for-gutenberg"),value:a.masonryGutter,onChange:e=>(e=>{void 0!==e&&(l({masonryGutter:e}),b())})(e),min:0,max:100,allowReset:!0}))))},"MasonryGallery");"enabled"!==b&&!0!==b||(Object(l.addFilter)("editor.BlockEdit","uagb/masonry-gallery",g,999),Object(l.addFilter)("blocks.getSaveContent.extraProps","uagb/apply-extra-class",(function(e,t,a){return"core/gallery"===t.name&&a.masonry&&(e.className=e.className+" uagb-block-"+a.block_id),e})));var m,y=a(17),d=a.n(y),p=a(321),k=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return k++||(m=d()(p.a,_)),f},f.unuse=function(){k>0&&!--k&&(m(),m=null)}}}]);