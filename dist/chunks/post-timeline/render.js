(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[78],{408:function(e,t,a){"use strict";var n=a(18),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n#wpwrap .edit-post-visual-editor .uagb-timeline__widget a {\n  color: inherit;\n  text-decoration: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading a,\n.gutenberg-editor-page #wpwrap .edit-post-visual-editor a {\n  margin: 0;\n  color: inherit;\n  font-size: inherit; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading {\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor a {\n  pointer-events: none; }\n",""]),t.a=r},596:function(e,t,a){"use strict";a.r(t);var n,r=a(4),i=a.n(r),l=a(69),s=a(40),o=a(37),c=a(38),u=a(345),m=a(2),d=a(1),_=a.n(d),b=function(e){var t=e.attributes.headingTag,a=e.post,n="_self";return e.attributes.linkTarget&&(n="_blank"),_.a.createElement("div",{className:"uagb-timeline__heading-text"},_.a.createElement(t,{className:"uagb-timeline__heading"},_.a.createElement("a",{href:a.link,target:n,rel:"noopener noreferrer"},Object(u.decodeEntities)(a.title.rendered.trim())||Object(m.__)("(Untitled)"))))},g=_.a.memo(b),p=function(e){var t=e.post,a=e.attributes;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){var n=t.uagb_featured_image_src[a.imageSize],r="_self";return a.linkTarget&&(r="_blank"),_.a.createElement("div",{className:"uagb-timeline__image"},_.a.createElement("a",{href:t.link,target:r,rel:"noopener noreferrer",style:{textAlign:a.align}},_.a.createElement("img",{src:n[0],alt:Object(u.decodeEntities)(t.title.rendered.trim())||Object(m.__)("(Untitled)")})))}return null},f=_.a.memo(p),v=function(e){var t=e.post,a=e.attributes;if(a.displayPostExcerpt&&void 0!==t.uagb_excerpt){if(a.displayPostExcerpt&&t.uagb_excerpt)var n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");var r="";return a.displayPostLink&&(r=a.contentSpace+"px"),_.a.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:r}})}return null},E=_.a.memo(v),y=function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?_.a.createElement("div",{className:"uagb-timeline__link_parent"},_.a.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText)):null},h=_.a.memo(y),w=function(e){var t=e.post,a=e.attributes,n="_self";return a.linkTarget&&(n="_blank"),_.a.createElement(_.a.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&_.a.createElement("div",{className:"uagb-timeline__author"},_.a.createElement("span",{className:"dashicons-admin-users dashicons"}),_.a.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))},k=_.a.memo(w),N=a(25),j=function(e){var t=e.post,a=e.attributes,n=e.dateClass;return _.a.createElement(_.a.Fragment,null,a.displayPostDate&&t.date_gmt&&_.a.createElement("time",{dateTime:Object(N.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},Object(N.dateI18n)(a.dateFormat,t.date_gmt)))},O=_.a.memo(j),S=a(14),A=function(e){var t=e.attributes;return _.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},_.a.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon"},Object(S.a)(t.icon)))},T=_.a.memo(A),x=a(3),P=a(17),I=a.n(P),L=a(408),C=0,z={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},M={};M.locals=L.a.locals||{},M.use=function(){return C++||(n=I()(L.a,z)),M},M.unuse=function(){C>0&&!--C&&(n(),n=null)};var B=M;function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var U=function(e){Object(d.useLayoutEffect)((function(){return B.use(),function(){B.unuse()}}),[]);var t,a=e=e.parentProps,n=a.attributes,r=a.className,u=a.deviceType,b=a.latestPosts,p=n.displayPostLink,v=n.timelinAlignment,y=n.postsToShow,w=n.contentPadding,N="";return p&&(N="uagb_timeline__cta-enable"),_.a.createElement("div",{className:i.a.apply(void 0,[r,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-".concat(u.toLowerCase()),"uagb-block-".concat(e.clientId),N].concat((t=Object(s.a)(e.attributes),function(e){if(Array.isArray(e))return F(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return F(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?F(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},_.a.createElement("div",{className:"uagb-timeline__main"},function(){var t=document.getElementById("uagb-timeline-style-"+e.clientId);if(null!=t&&void 0!==t&&(t.innerHTML=Object(l.a)(e)),!Array.isArray(b)||!b.length)return _.a.createElement(x.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(b)?Object(m.__)("No posts found."):_.a.createElement(x.Spinner,null));var a=b.length>y?b.slice(0,y):b,r=Object(o.a)(e.attributes,0),i=Object(c.a)(e.attributes,0),s=!1;return _.a.createElement("div",{className:"uagb-timeline__days"},a.map((function(t,a){return"center"==v&&(s=!0,r=Object(o.a)(e.attributes,a),i=Object(c.a)(e.attributes,a)),_.a.createElement("article",{className:"uagb-timeline__field uagb-timeline__field-wrap",key:a},_.a.createElement("div",{className:r},_.a.createElement(T,{attributes:n}),_.a.createElement("div",{className:i},_.a.createElement("div",{className:"uagb-timeline__events-inner-new"},_.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},_.a.createElement(O,{post:t,attributes:n,dateClass:"uagb-timeline__inner-date-new"})),_.a.createElement(f,{post:t,attributes:n}),_.a.createElement("div",{className:"uagb-content",style:{padding:w+"px"}},_.a.createElement(g,{post:t,attributes:n}),_.a.createElement(k,{post:t,attributes:n}),_.a.createElement(E,{post:t,attributes:n}),_.a.createElement(h,{post:t,attributes:n}),_.a.createElement("div",{className:"uagb-timeline__arrow"})))),s&&_.a.createElement("div",{className:"uagb-timeline__date-new"},_.a.createElement(O,{post:t,attributes:n,dateClass:"uagb-timeline__date-new"}))))})))}(),_.a.createElement("div",{className:"uagb-timeline__line"},_.a.createElement("div",{className:"uagb-timeline__line__inner"}))))};t.default=_.a.memo(U)}}]);