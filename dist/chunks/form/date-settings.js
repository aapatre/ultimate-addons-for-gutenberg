(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[32],{515:function(e,a,n){"use strict";n.r(a);var t,l=n(1),r=n.n(l),o=n(2),u=wp.components,c=u.PanelBody,i=u.SelectControl,m=u.ToggleControl,s=wp.blockEditor.InspectorControls,d=[{label:"YYYY",value:""}],b=[{label:"MM",value:""}],g=[{label:"DD",value:""}];for(t=1930;t<=2030;t++)d.push({label:"".concat(t),value:"".concat(t)});for(t=1;t<=12;t++){var p=t<10?"0".concat(t):"".concat(t);b.push({label:p,value:p})}for(t=1;t<=31;t++){var f=t<10?"0".concat(t):"".concat(t);g.push({label:f,value:f})}var _=function(e){var a=e=e.parentProps,n=a.attributes,t=a.setAttributes,l=n.dateRequired,u=n.additonalVal,p=n.minYear,f=n.minMonth,_=n.minDay,h=n.maxYear,v=n.maxMonth,E=n.maxDay,D="",w="";p&&f&&_&&(D=p+"-"+f+"-"+_),h&&v&&E&&(w=h+"-"+v+"-"+E);var M="";return Date.parse(D)>Date.parse(w)&&(M=r.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(o.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,r.a.createElement(c,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},r.a.createElement(m,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:l,onChange:function(){return t({dateRequired:!l})}}),r.a.createElement(m,{label:Object(o.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:u,onChange:function(){return t({additonalVal:!u})},help:Object(o.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,Object(o.__)("From","ultimate-addons-for-gutenberg")," :"),r.a.createElement(i,{className:"minDate",label:"Year",value:p,options:d,onChange:function(e){return t({newMinYear:e})}}),r.a.createElement("b",null," - "),r.a.createElement(i,{className:"minDate",label:"Month",value:f,options:b,onChange:function(e){return t({newMinMonth:e})}}),r.a.createElement("b",null," - "),r.a.createElement(i,{className:"minDate",label:"Date",value:_,options:g,onChange:function(e){return t({newMinDay:e})}}),r.a.createElement("p",null,"To :"),r.a.createElement(i,{className:"maxDate",label:"Year",value:h,options:d,onChange:function(e){return t({newMaxYear:e})}}),r.a.createElement("b",null," - "),r.a.createElement(i,{className:"maxDate",label:"Month",value:v,options:b,onChange:function(e){return t({newMaxMonth:e})}}),r.a.createElement("b",null," - "),r.a.createElement(i,{className:"maxDate",label:"Date",value:E,options:g,onChange:function(e){return t({newMaxDay:e})}}),M))))};a.default=r.a.memo(_)}}]);