(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{549:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(1),o=a.n(l),r=a(71),i=a(2),u=a(5),s=a(3),b=function(e){var t=e=e.parentProps,a=t.attributes,b=t.setAttributes,c=t.deviceType,g=a.align,m=a.gap,d=a.stack,_=a.social_layout,f=a.borderRadius,p=a.size,h=a.sizeType,O=a.sizeMobile,j=a.sizeTablet,k=a.bgSize,E=[{key:"px",name:Object(i.__)("px","ultimate-addons-for-gutenberg")},{key:"em",name:Object(i.__)("em","ultimate-addons-for-gutenberg")}],z=o.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},E.map((function(e){var t=e.name,a=e.key;return o.a.createElement(s.Button,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:h===a,"aria-pressed":h===a,onClick:function(){return b({sizeType:a})}},t)})));return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(u.BlockControls,null,o.a.createElement(u.BlockAlignmentToolbar,{value:g,onChange:function(e){b({align:e})},controls:["left","center","right"]})),o.a.createElement(u.InspectorControls,null,o.a.createElement(s.PanelBody,{title:Object(i.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.SelectControl,{label:Object(i.__)("Layout","ultimate-addons-for-gutenberg"),value:_,options:[{value:"horizontal",label:Object(i.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(i.__)("Vertical","ultimate-addons-for-gutenberg")}],onChange:function(e){return b({social_layout:e})}}),"horizontal"==_&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.SelectControl,{label:Object(i.__)("Stack on","ultimate-addons-for-gutenberg"),value:d,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(i.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(e){return b({stack:e})},help:Object(i.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(r.a,null),"Desktop"===c&&o.a.createElement(o.a.Fragment,null,z,o.a.createElement(s.RangeControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),value:p,onChange:function(e){return b({size:e})},min:0,max:500,allowReset:!0,initialPosition:40})),"Tablet"===c&&o.a.createElement(o.a.Fragment,null,z,o.a.createElement(s.RangeControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return b({sizeTablet:e})},min:0,max:500,allowReset:!0,initialPosition:40})),"Mobile"===c&&o.a.createElement(o.a.Fragment,null,z,o.a.createElement(s.RangeControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return b({sizeMobile:e})},min:0,max:500,allowReset:!0,initialPosition:40})),o.a.createElement(s.RangeControl,{label:Object(i.__)("Background Size","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return b({bgSize:e})},help:Object(i.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg"),min:0,max:500}),o.a.createElement(s.RangeControl,{label:Object(i.__)("Border Radius","ultimate-addons-for-gutenberg"),value:f,onChange:function(e){return b({borderRadius:e})},help:Object(i.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg"),min:0,max:500}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(s.RangeControl,{label:Object(i.__)("Gap between Items","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return b({gap:e})},help:Object(i.__)("Note: The gap between the items will seem larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.","ultimate-addons-for-gutenberg"),min:0,max:100}))))};t.default=o.a.memo(b)}}]);