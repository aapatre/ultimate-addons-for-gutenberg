(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[95],{422:function(t,e,a){"use strict";var n=a(18),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,".uag-star-rating__wrapper .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),e.a=r},609:function(t,e,a){"use strict";a.r(e);var n,r=a(4),s=a.n(r),i=a(2),u=a(5),l=a(17),o=a.n(l),c=a(422),g=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return g++||(n=o()(c.a,_)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var p=d,m=a(1),b=a.n(m);const f=t=>{Object(m.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),t=t.parentProps;const{className:e,setAttributes:a,deviceType:n,attributes:{rating:r,range:l,layout:o,title:c}}=t,g=parseInt(l),_=[];for(let t=1;t<=g;t++)_.push(b.a.createElement("span",{key:t,className:"uag-star"},"★"));return b.a.createElement("div",{className:s()(e,"uagb-editor-preview-mode-"+n.toLowerCase(),"uag-star-rating__layout-"+o,"uag-star-rating__wrapper","uagb-block-"+t.clientId.substr(0,8))},b.a.createElement(u.RichText,{tagName:"p",placeholder:Object(i.__)("Write a title","ultimate-addons-for-gutenberg"),value:c,className:"uag-star-rating__title",onChange:t=>a({title:t})}),b.a.createElement("div",{className:"uag-star-rating",title:`${r}/${l}`},_))};e.default=b.a.memo(f)}}]);