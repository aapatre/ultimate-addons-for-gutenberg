(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/blockquote/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n", "",{"version":3,"sources":["webpack://./src/components/image/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,SAAS;IACT,UAAU,EAAE;EACd;IACE,iBAAiB,EAAE;;AAEvB;;;;;EAKE,gBAAgB,EAAE","sourcesContent":[".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/blockquote/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/blockquote/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props;
  const {
    skinStyle,
    align,
    authorColor,
    descColor,
    descFontSize,
    descFontSizeType,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descFontStyle,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    descLoadGoogleFonts,
    authorFontSize,
    authorFontSizeType,
    authorFontSizeTablet,
    authorFontSizeMobile,
    authorFontFamily,
    authorFontWeight,
    authorFontStyle,
    authorLineHeightType,
    authorLineHeight,
    authorLineHeightTablet,
    authorLineHeightMobile,
    authorLoadGoogleFonts,
    descSpace,
    authorSpace,
    stack,
    borderColor,
    borderStyle,
    borderWidth,
    borderGap,
    verticalPadding,
    quoteColor,
    quoteBgColor,
    quoteSize,
    quoteSizeType,
    quoteSizeTablet,
    quoteSizeMobile,
    quotePadding,
    quotePaddingType,
    quotePaddingTablet,
    quotePaddingMobile,
    quoteBorderRadius,
    quoteStyle,
    enableTweet,
    tweetLinkColor,
    tweetBtnColor,
    tweetBtnHoverColor,
    tweetBtnBgColor,
    tweetBtnBgHoverColor,
    tweetBtnFontSize,
    tweetBtnFontSizeType,
    tweetBtnFontSizeTablet,
    tweetBtnFontSizeMobile,
    tweetBtnFontFamily,
    tweetBtnFontWeight,
    tweetBtnFontStyle,
    tweetBtnLineHeightType,
    tweetBtnLineHeight,
    tweetBtnLineHeightTablet,
    tweetBtnLineHeightMobile,
    tweetBtnLoadGoogleFonts,
    tweetIconSpacing,
    tweetIconSpacingUnit,
    iconView,
    iconSkin,
    iconLabel,
    iconShareVia,
    iconTargetUrl,
    customUrl,
    authorImage,
    authorImageWidth,
    authorImageWidthUnit,
    authorImageSize,
    authorImgBorderRadius,
    authorImgPosition,
    quoteTopMargin,
    quoteBottomMargin,
    quoteLeftMargin,
    quoteRightMargin,
    quoteHoverColor,
    quoteBgHoverColor,
    borderHoverColor,
    authorImgBorderRadiusUnit,
    borderWidthUnit,
    quoteBorderRadiusUnit,
    quoteUnit,
    quotemobileUnit,
    quotetabletUnit,
    borderGapUnit,
    descSpaceUnit,
    authorSpaceUnit,
    verticalPaddingUnit,
    paddingBtnTop,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnRight,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    btnspacingLink,
    spacingLink,
    descTransform,
    authorTransform,
    tweetBtnTransform,
    descDecoration,
    authorDecoration,
    tweetBtnDecoration,
    quoteTopMarginTablet,
    quoteBottomMarginTablet,
    quoteLeftMarginTablet,
    quoteRightMarginTablet,
    quoteTopMarginMobile,
    quoteBottomMarginMobile,
    quoteLeftMarginMobile,
    quoteRightMarginMobile,
    author
  } = attributes;
  let loadDescGoogleFonts;
  let loadAuthorGoogleFonts;
  let loadTweetGoogleFonts;

  if (descLoadGoogleFonts === true) {
    const descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: descconfig
    });
  }

  if (authorLoadGoogleFonts === true) {
    const authorconfig = {
      google: {
        families: [authorFontFamily + (authorFontWeight ? ':' + authorFontWeight : '')]
      }
    };
    loadAuthorGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: authorconfig
    });
  }

  if (tweetBtnLoadGoogleFonts === true) {
    const tweetBtnconfig = {
      google: {
        families: [tweetBtnFontFamily + (tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '')]
      }
    };
    loadTweetGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: tweetBtnconfig
    });
  }
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      authorImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        authorImage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      return;
    }

    setAttributes({
      authorImage: media
    });
  };

  const imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Medium', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Large', 'ultimate-addons-for-gutenberg')
  }]; // Image controls.

  const imageControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image', 'ultimate-addons-for-gutenberg'),
    onSelectImage: onSelectImage,
    backgroundImage: authorImage,
    onRemoveImage: onRemoveImage
  }), authorImage && authorImage.url !== 'null' && authorImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Position', 'ultimate-addons-for-gutenberg'),
    data: {
      value: authorImgPosition,
      label: 'authorImgPosition'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      label: 'Left'
    }, {
      value: 'top',
      label: 'Top'
    }, {
      value: 'right',
      label: 'Right'
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Size', 'ultimate-addons-for-gutenberg'),
    options: imageSizeOptions,
    value: authorImageSize,
    onChange: value => setAttributes({
      authorImageSize: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Width', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: authorImageWidth,
    onChange: value => setAttributes({
      authorImageWidth: value
    }),
    min: 0,
    max: 500,
    unit: {
      value: authorImageWidthUnit,
      label: 'authorImageWidthUnit'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Rounded Corners', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: authorImgBorderRadius,
    onChange: value => setAttributes({
      authorImgBorderRadius: value
    }),
    min: 0,
    max: 50,
    unit: {
      value: authorImgBorderRadiusUnit,
      label: 'authorImgBorderRadiusUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }]
  })));
  const quoteSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: quoteSize,
        label: 'quoteSize'
      },
      tablet: {
        value: quoteSizeTablet,
        label: 'quoteSizeTablet'
      },
      mobile: {
        value: quoteSizeMobile,
        label: 'quoteSizeMobile'
      }
    },
    min: 0,
    max: 50,
    unit: {
      value: quoteSizeType,
      label: 'quoteSizeType'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: quotePadding,
        label: 'quotePadding'
      },
      tablet: {
        value: quotePaddingTablet,
        label: 'quotePaddingTablet'
      },
      mobile: {
        value: quotePaddingMobile,
        label: 'quotePaddingMobile'
      }
    },
    min: 0,
    max: 200,
    unit: {
      value: quotePaddingType,
      label: 'quotePaddingType'
    },
    setAttributes: setAttributes
  }), quoteBgColor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Border Radius', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: quoteBorderRadius,
    onChange: value => setAttributes({
      quoteBorderRadius: value
    }),
    min: 0,
    max: 100,
    unit: {
      value: quoteBorderRadiusUnit,
      label: 'quoteBorderRadiusUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }]
  }));
  const skinSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'ultimate-addons-for-gutenberg'),
    data: {
      value: skinStyle,
      label: 'skinStyle'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'border',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Modern', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'quotation',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quotation', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), 'quotation' === skinStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quotation Type', 'ultimate-addons-for-gutenberg'),
    data: {
      value: quoteStyle,
      label: 'quoteStyle'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'style_1',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'style_2',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inline', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: align,
      label: 'align'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  })), imageControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
    data: {
      value: stack,
      label: 'stack'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'tablet',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mobile',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Note: Choose on what breakpoint the elements will stack."));
  const contentStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Content', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: descLoadGoogleFonts,
      label: 'descLoadGoogleFonts'
    },
    fontFamily: {
      value: descFontFamily,
      label: 'descFontFamily'
    },
    fontWeight: {
      value: descFontWeight,
      label: 'descFontWeight'
    },
    fontStyle: {
      value: descFontStyle,
      label: 'descFontStyle'
    },
    fontSizeType: {
      value: descFontSizeType,
      label: 'descFontSizeType'
    },
    fontSize: {
      value: descFontSize,
      label: 'descFontSize'
    },
    fontSizeMobile: {
      value: descFontSizeMobile,
      label: 'descFontSizeMobile'
    },
    fontSizeTablet: {
      value: descFontSizeTablet,
      label: 'descFontSizeTablet'
    },
    lineHeightType: {
      value: descLineHeightType,
      label: 'descLineHeightType'
    },
    lineHeight: {
      value: descLineHeight,
      label: 'descLineHeight'
    },
    lineHeightMobile: {
      value: descLineHeightMobile,
      label: 'descLineHeightMobile'
    },
    lineHeightTablet: {
      value: descLineHeightTablet,
      label: 'descLineHeightTablet'
    },
    transform: {
      value: descTransform,
      label: 'descTransform'
    },
    decoration: {
      value: descDecoration,
      label: 'descDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Color', 'ultimate-addons-for-gutenberg'),
    colorValue: descColor ? descColor : '',
    onColorChange: value => setAttributes({
      descColor: value
    })
  }), author !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: authorLoadGoogleFonts,
      label: 'authorLoadGoogleFonts'
    },
    fontFamily: {
      value: authorFontFamily,
      label: 'authorFontFamily'
    },
    fontWeight: {
      value: authorFontWeight,
      label: 'authorFontWeight'
    },
    fontStyle: {
      value: authorFontStyle,
      label: 'authorFontStyle'
    },
    fontSizeType: {
      value: authorFontSizeType,
      label: 'authorFontSizeType'
    },
    fontSize: {
      value: authorFontSize,
      label: 'authorFontSize'
    },
    fontSizeMobile: {
      value: authorFontSizeMobile,
      label: 'authorFontSizeMobile'
    },
    fontSizeTablet: {
      value: authorFontSizeTablet,
      label: 'authorFontSizeTablet'
    },
    lineHeightType: {
      value: authorLineHeightType,
      label: 'authorLineHeightType'
    },
    lineHeight: {
      value: authorLineHeight,
      label: 'authorLineHeight'
    },
    lineHeightMobile: {
      value: authorLineHeightMobile,
      label: 'authorLineHeightMobile'
    },
    lineHeightTablet: {
      value: authorLineHeightTablet,
      label: 'authorLineHeightTablet'
    },
    transform: {
      value: authorTransform,
      label: 'authorTransform'
    },
    decoration: {
      value: authorDecoration,
      label: 'authorDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Color', 'ultimate-addons-for-gutenberg'),
    colorValue: authorColor ? authorColor : '',
    onColorChange: value => setAttributes({
      authorColor: value
    })
  })));
  const twitterSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Icon', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enable Icon', 'ultimate-addons-for-gutenberg'),
    checked: enableTweet,
    onChange: () => setAttributes({
      enableTweet: !enableTweet
    })
  }), enableTweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Username', 'ultimate-addons-for-gutenberg'),
    value: iconShareVia,
    onChange: value => setAttributes({
      iconShareVia: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon View', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconView,
      label: 'iconView'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'icon_text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Both', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'icon',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Style', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconSkin,
      label: 'iconSkin'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'classic',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Classic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bubble',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bubble', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'link',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Target URL', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconTargetUrl,
      label: 'iconTargetUrl'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'current',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Current Page', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'custom',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Custom URL', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), iconTargetUrl === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('URL', 'ultimate-addons-for-gutenberg'),
    value: customUrl,
    onChange: value => setAttributes({
      customUrl: value
    })
  })), enableTweet && iconView !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Label', 'ultimate-addons-for-gutenberg'),
    value: iconLabel,
    onChange: value => setAttributes({
      iconLabel: value
    })
  })));
  const spacingSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Margin', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: quoteTopMargin,
      label: 'quoteTopMargin'
    },
    valueRight: {
      value: quoteRightMargin,
      label: 'quoteRightMargin'
    },
    valueBottom: {
      value: quoteBottomMargin,
      label: 'quoteBottomMargin'
    },
    valueLeft: {
      value: quoteLeftMargin,
      label: 'quoteLeftMargin'
    },
    valueTopTablet: {
      value: quoteTopMarginTablet,
      label: 'quoteTopMarginTablet'
    },
    valueRightTablet: {
      value: quoteRightMarginTablet,
      label: 'quoteRightMarginTablet'
    },
    valueBottomTablet: {
      value: quoteBottomMarginTablet,
      label: 'quoteBottomMarginTablet'
    },
    valueLeftTablet: {
      value: quoteLeftMarginTablet,
      label: 'quoteLeftMarginTablet'
    },
    valueTopMobile: {
      value: quoteTopMarginMobile,
      label: 'quoteTopMarginMobile'
    },
    valueRightMobile: {
      value: quoteRightMarginMobile,
      label: 'quoteRightMarginMobile'
    },
    valueBottomMobile: {
      value: quoteBottomMarginMobile,
      label: 'quoteBottomMarginMobile'
    },
    valueLeftMobile: {
      value: quoteLeftMarginMobile,
      label: 'quoteLeftMarginMobile'
    },
    unit: {
      value: quoteUnit,
      label: 'quoteUnit'
    },
    mUnit: {
      value: quotemobileUnit,
      label: 'quotemobileUnit'
    },
    tUnit: {
      value: quotetabletUnit,
      label: 'quotetabletUnit'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: spacingLink,
      label: 'spacingLink'
    }
  })), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Gap Between Border and Quote', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: borderGap,
    onChange: value => setAttributes({
      borderGap: value
    }),
    min: 0,
    max: 200,
    unit: {
      value: borderGapUnit,
      label: 'borderGapUnit'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: descSpace,
    onChange: value => setAttributes({
      descSpace: value
    }),
    min: 0,
    max: 200,
    initialPosition: 0,
    unit: {
      value: descSpaceUnit,
      label: 'descSpaceUnit'
    }
  }), align === 'center' && skinStyle !== 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: authorSpace,
    onChange: value => setAttributes({
      authorSpace: value
    }),
    min: 0,
    max: 200,
    unit: {
      value: authorSpaceUnit,
      label: 'authorSpaceUnit'
    }
  }), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: 'Vertical Padding',
    className: 'uagb-margin-control',
    value: verticalPadding,
    setAttributes: setAttributes,
    onChange: value => setAttributes({
      verticalPadding: value
    }),
    min: 0,
    max: 500,
    unit: {
      value: verticalPaddingUnit,
      label: 'verticalPaddingUnit'
    }
  })));

  const generalStyle = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteColor ? quoteColor : '',
      onColorChange: value => setAttributes({
        quoteColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteBgColor ? quoteBgColor : '',
      onColorChange: value => setAttributes({
        quoteBgColor: value
      })
    }));
    const tabOutputHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteHoverColor ? quoteHoverColor : '',
      onColorChange: value => setAttributes({
        quoteHoverColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteBgHoverColor ? quoteBgHoverColor : '',
      onColorChange: value => setAttributes({
        quoteBgHoverColor: value
      })
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, skinStyle === 'border' && borderStyleSetting(), skinStyle === 'quotation' && quoteSettings, skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      hover: tabOutputHover,
      disableBottomSeparator: true
    }));
  };

  const borderStyleSetting = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: borderColor ? borderColor : '',
      onColorChange: value => setAttributes({
        borderColor: value
      })
    });
    const tabOutputHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: borderHoverColor ? borderHoverColor : '',
      onColorChange: value => setAttributes({
        borderHoverColor: value
      })
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: value => setAttributes({
        borderStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderWidth,
      onChange: value => setAttributes({
        borderWidth: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: borderWidthUnit,
        label: 'borderWidthUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      hover: tabOutputHover,
      disableBottomSeparator: true
    })));
  };

  const iconStyleSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, iconView !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: tweetBtnLoadGoogleFonts,
        label: 'tweetBtnLoadGoogleFonts'
      },
      fontFamily: {
        value: tweetBtnFontFamily,
        label: 'tweetBtnFontFamily'
      },
      fontWeight: {
        value: tweetBtnFontWeight,
        label: 'tweetBtnFontWeight'
      },
      fontStyle: {
        value: tweetBtnFontStyle,
        label: 'tweetBtnFontStyle'
      },
      fontSizeType: {
        value: tweetBtnFontSizeType,
        label: 'tweetBtnFontSizeType'
      },
      fontSize: {
        value: tweetBtnFontSize,
        label: 'tweetBtnFontSize'
      },
      fontSizeMobile: {
        value: tweetBtnFontSizeMobile,
        label: 'tweetBtnFontSizeMobile'
      },
      fontSizeTablet: {
        value: tweetBtnFontSizeTablet,
        label: 'tweetBtnFontSizeTablet'
      },
      lineHeightType: {
        value: tweetBtnLineHeightType,
        label: 'tweetBtnLineHeightType'
      },
      lineHeight: {
        value: tweetBtnLineHeight,
        label: 'tweetBtnLineHeight'
      },
      lineHeightMobile: {
        value: tweetBtnLineHeightMobile,
        label: 'tweetBtnLineHeightMobile'
      },
      lineHeightTablet: {
        value: tweetBtnLineHeightTablet,
        label: 'tweetBtnLineHeightTablet'
      },
      transform: {
        value: tweetBtnTransform,
        label: 'tweetBtnTransform'
      },
      decoration: {
        value: tweetBtnDecoration,
        label: 'tweetBtnDecoration'
      }
    }), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingBtnTop,
        label: 'paddingBtnTop'
      },
      valueRight: {
        value: paddingBtnRight,
        label: 'paddingBtnRight'
      },
      valueBottom: {
        value: paddingBtnBottom,
        label: 'paddingBtnBottom'
      },
      valueLeft: {
        value: paddingBtnLeft,
        label: 'paddingBtnLeft'
      },
      valueTopTablet: {
        value: paddingBtnTopTablet,
        label: 'paddingBtnTopTablet'
      },
      valueRightTablet: {
        value: paddingBtnRightTablet,
        label: 'paddingBtnRightTablet'
      },
      valueBottomTablet: {
        value: paddingBtnBottomTablet,
        label: 'paddingBtnBottomTablet'
      },
      valueLeftTablet: {
        value: paddingBtnLeftTablet,
        label: 'paddingBtnLeftTablet'
      },
      valueTopMobile: {
        value: paddingBtnTopMobile,
        label: 'paddingBtnTopMobile'
      },
      valueRightMobile: {
        value: paddingBtnRightMobile,
        label: 'paddingBtnRightMobile'
      },
      valueBottomMobile: {
        value: paddingBtnBottomMobile,
        label: 'paddingBtnBottomMobile'
      },
      valueLeftMobile: {
        value: paddingBtnLeftMobile,
        label: 'paddingBtnLeftMobile'
      },
      unit: {
        value: paddingBtnUnit,
        label: 'paddingBtnUnit'
      },
      mUnit: {
        value: mobilePaddingBtnUnit,
        label: 'mobilePaddingBtnUnit'
      },
      tUnit: {
        value: tabletPaddingBtnUnit,
        label: 'tabletPaddingBtnUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: btnspacingLink,
        label: 'btnspacingLink'
      }
    })), iconView === 'icon_text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon & Text Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: tweetIconSpacing,
      onChange: value => setAttributes({
        tweetIconSpacing: value
      }),
      min: 0,
      max: 20,
      unit: {
        value: tweetIconSpacingUnit,
        label: 'tweetIconSpacingUnit'
      },
      initialPosition: 5
    }), iconSkin === 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetLinkColor ? tweetLinkColor : '',
        onColorChange: value => setAttributes({
          tweetLinkColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnHoverColor ? tweetBtnHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnColor ? tweetBtnColor : '',
        onColorChange: value => setAttributes({
          tweetBtnColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnBgColor ? tweetBtnBgColor : '',
        onColorChange: value => setAttributes({
          tweetBtnBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnHoverColor ? tweetBtnHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnHoverColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnBgHoverColor ? tweetBtnBgHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnBgHoverColor: value
        })
      })),
      disableBottomSeparator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], {
    key: "controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].general, skinSettings, twitterSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].style, generalStyle(), enableTweet && iconStyleSetting(), contentStyling, spacingSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].advance, {
    parentProps: props
  })))), loadDescGoogleFonts, loadAuthorGoogleFonts, loadTweetGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/blocks/price-card/presets.js":
/*!******************************************!*\
  !*** ./src/blocks/price-card/presets.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/price-card/attributes.js");



const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'seperatorStyle',
    value: 'none'
  }, {
    label: 'separatorWidth',
    value: ''
  }, {
    label: 'separatorHeight',
    value: ''
  }, {
    label: 'separatorColor',
    value: ''
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="27" width="42" height="2" rx="1" /><rect x="7" y="35" width="58" height="1" rx="0.5" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><path d="M7 43.5C7 43.2239 7.22386 43 7.5 43H50.5C50.7761 43 51 43.2239 51 43.5C51 43.7761 50.7761 44 50.5 44H7.5C7.22386 44 7 43.7761 7 43.5Z" /></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'separatorWidth',
    value: 80
  }, {
    label: 'separatorHeight',
    value: 2
  }, {
    label: 'separatorColor',
    value: '#0170B9'
  }, {
    label: 'separatorWidthType',
    value: 'px'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.5029C24 32.2252 24.2252 32 24.5029 32H24.7544C25.0321 32 25.2573 32.2252 25.2573 32.5029C25.2573 32.7807 25.0321 33.0058 24.7544 33.0058H24.5029C24.2252 33.0058 24 32.7807 24 32.5029ZM26.2631 32.5029C26.2631 32.2252 26.4883 32 26.766 32H27.2689C27.5467 32 27.7718 32.2252 27.7718 32.5029C27.7718 32.7807 27.5467 33.0058 27.2689 33.0058H26.766C26.4883 33.0058 26.2631 32.7807 26.2631 32.5029ZM28.7777 32.5029C28.7777 32.2252 29.0028 32 29.2806 32H29.7835C30.0613 32 30.2864 32.2252 30.2864 32.5029C30.2864 32.7807 30.0613 33.0058 29.7835 33.0058H29.2806C29.0028 33.0058 28.7777 32.7807 28.7777 32.5029ZM31.2922 32.5029C31.2922 32.2252 31.5174 32 31.7952 32H32.2981C32.5758 32 32.801 32.2252 32.801 32.5029C32.801 32.7807 32.5758 33.0058 32.2981 33.0058H31.7952C31.5174 33.0058 31.2922 32.7807 31.2922 32.5029ZM33.8068 32.5029C33.8068 32.2252 34.032 32 34.3097 32H34.8126C35.0904 32 35.3155 32.2252 35.3155 32.5029C35.3155 32.7807 35.0904 33.0058 34.8126 33.0058H34.3097C34.032 33.0058 33.8068 32.7807 33.8068 32.5029ZM36.3214 32.5029C36.3214 32.2252 36.5465 32 36.8243 32H37.3272C37.605 32 37.8301 32.2252 37.8301 32.5029C37.8301 32.7807 37.605 33.0058 37.3272 33.0058H36.8243C36.5465 33.0058 36.3214 32.7807 36.3214 32.5029ZM38.8359 32.5029C38.8359 32.2252 39.0611 32 39.3389 32H39.8418C40.1195 32 40.3447 32.2252 40.3447 32.5029C40.3447 32.7807 40.1195 33.0058 39.8418 33.0058H39.3389C39.0611 33.0058 38.8359 32.7807 38.8359 32.5029ZM41.3505 32.5029C41.3505 32.2252 41.5757 32 41.8534 32H42.3563C42.6341 32 42.8592 32.2252 42.8592 32.5029C42.8592 32.7807 42.6341 33.0058 42.3563 33.0058H41.8534C41.5757 33.0058 41.3505 32.7807 41.3505 32.5029ZM43.8651 32.5029C43.8651 32.2252 44.0902 32 44.368 32H44.8709C45.1487 32 45.3738 32.2252 45.3738 32.5029C45.3738 32.7807 45.1487 33.0058 44.8709 33.0058H44.368C44.0902 33.0058 43.8651 32.7807 43.8651 32.5029ZM46.3796 32.5029C46.3796 32.2252 46.6048 32 46.8826 32H47.134C47.4118 32 47.6369 32.2252 47.6369 32.5029C47.6369 32.7807 47.4118 33.0058 47.134 33.0058H46.8826C46.6048 33.0058 46.3796 32.7807 46.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="14" y="47" width="44" height="1" rx="0.5" /></svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'separatorWidth',
    value: 80
  }, {
    label: 'separatorHeight',
    value: 2
  }, {
    label: 'separatorWidthType',
    value: 'px'
  }, {
    label: 'separatorColor',
    value: '#0170B9'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 32.5029C7 32.2252 7.22516 32 7.50291 32H7.75437C8.03212 32 8.25728 32.2252 8.25728 32.5029C8.25728 32.7807 8.03212 33.0058 7.75437 33.0058H7.50291C7.22516 33.0058 7 32.7807 7 32.5029ZM9.26311 32.5029C9.26311 32.2252 9.48827 32 9.76602 32H10.2689C10.5467 32 10.7718 32.2252 10.7718 32.5029C10.7718 32.7807 10.5467 33.0058 10.2689 33.0058H9.76602C9.48827 33.0058 9.26311 32.7807 9.26311 32.5029ZM11.7777 32.5029C11.7777 32.2252 12.0028 32 12.2806 32H12.7835C13.0613 32 13.2864 32.2252 13.2864 32.5029C13.2864 32.7807 13.0613 33.0058 12.7835 33.0058H12.2806C12.0028 33.0058 11.7777 32.7807 11.7777 32.5029ZM14.2922 32.5029C14.2922 32.2252 14.5174 32 14.7952 32H15.2981C15.5758 32 15.801 32.2252 15.801 32.5029C15.801 32.7807 15.5758 33.0058 15.2981 33.0058H14.7952C14.5174 33.0058 14.2922 32.7807 14.2922 32.5029ZM16.8068 32.5029C16.8068 32.2252 17.032 32 17.3097 32H17.8126C18.0904 32 18.3155 32.2252 18.3155 32.5029C18.3155 32.7807 18.0904 33.0058 17.8126 33.0058H17.3097C17.032 33.0058 16.8068 32.7807 16.8068 32.5029ZM19.3214 32.5029C19.3214 32.2252 19.5465 32 19.8243 32H20.3272C20.605 32 20.8301 32.2252 20.8301 32.5029C20.8301 32.7807 20.605 33.0058 20.3272 33.0058H19.8243C19.5465 33.0058 19.3214 32.7807 19.3214 32.5029ZM21.8359 32.5029C21.8359 32.2252 22.0611 32 22.3389 32H22.8418C23.1195 32 23.3447 32.2252 23.3447 32.5029C23.3447 32.7807 23.1195 33.0058 22.8418 33.0058H22.3389C22.0611 33.0058 21.8359 32.7807 21.8359 32.5029ZM24.3505 32.5029C24.3505 32.2252 24.5757 32 24.8534 32H25.3563C25.6341 32 25.8592 32.2252 25.8592 32.5029C25.8592 32.7807 25.6341 33.0058 25.3563 33.0058H24.8534C24.5757 33.0058 24.3505 32.7807 24.3505 32.5029ZM26.8651 32.5029C26.8651 32.2252 27.0902 32 27.368 32H27.8709C28.1487 32 28.3738 32.2252 28.3738 32.5029C28.3738 32.7807 28.1487 33.0058 27.8709 33.0058H27.368C27.0902 33.0058 26.8651 32.7807 26.8651 32.5029ZM29.3796 32.5029C29.3796 32.2252 29.6048 32 29.8826 32H30.134C30.4118 32 30.6369 32.2252 30.6369 32.5029C30.6369 32.7807 30.4118 33.0058 30.134 33.0058H29.8826C29.6048 33.0058 29.3796 32.7807 29.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="7" y="47" width="44" height="1" rx="0.5" /></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_creative_heading_presets`, presets));

/***/ }),

/***/ "./src/blocks/price-card/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/price-card/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presets */ "./src/blocks/price-card/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    seperatorStyle,
    priceCardHeadingTag,
    headingAlign,
    image,
    headFontFamily,
    headFontWeight,
    headFontStyle,
    headFontSizeType,
    headFontSize,
    headFontSizeMobile,
    headFontSizeTablet,
    headLineHeightType,
    headLineHeight,
    headTransform,
    headDecoration,
    headLineHeightMobile,
    headLineHeightTablet,
    headLoadGoogleFonts,
    subHeadLoadGoogleFonts,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeMobile,
    subHeadFontSizeTablet,
    subHeadLineHeight,
    subHeadLineHeightType,
    subHeadLineHeightMobile,
    subHeadLineHeightTablet
  } = attributes;

  const generalPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: priceCardHeadingTag,
        label: 'priceCardHeadingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Separator Style', 'ultimate-addons-for-gutenberg'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  const blockControlSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    }));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_10__["default"],
      presetInputType: "radioImage"
    }));
  };

  const onSelectImage = media => {
    let imageUrl = null;

    if (!media || !media.url) {
      imageUrl = null;
    } else {
      imageUrl = media;
    }

    if (!media.type || 'image' !== media.type) {
      imageUrl = null;
    }

    setAttributes({
      image: imageUrl
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      image: null
    });
  };

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onSelectImage: onSelectImage,
      backgroundImage: image,
      onRemoveImage: onRemoveImage
    }));
  }; // work on style part
  // font loading


  let loadHeadingGoogleFonts;
  let loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_14__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_14__["default"], {
      config: sconfig
    });
  }

  const headingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
      },
      transform: {
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, blockControlSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].general, imageSettings(), generalPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].style, headingPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadHeadingGoogleFonts, loadSubHeadingGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/image/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/image/editor.lazy.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/image/editor.lazy.scss");






const UAGImage = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  const {
    onSelectImage,
    backgroundImage,
    onRemoveImage,
    showVideoInput,
    label
  } = props;

  let labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg');

  let selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  let replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');

  let removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image', 'ultimate-addons-for-gutenberg');

  let allowedTypes = ['image'];

  if (showVideoInput) {
    labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg');
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Video', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Video', 'ultimate-addons-for-gutenberg');
    removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Video', 'ultimate-addons-for-gutenberg');
    allowedTypes = ['video'];
  }

  labelText = label ? label : labelText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "editor-bg-image-control",
    id: `uagb-option-selector-${label}`,
    label: labelText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-bg-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: selectImageLabel,
    onSelect: onSelectImage,
    allowedTypes: allowedTypes,
    value: backgroundImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSecondary: true,
        onClick: open
      }, !(backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url) ? selectImageLabel : replaceImageLabel);
    }
  }), (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, removeImageLabel), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help)));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGImage);

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
var _PropTypes$object, _PropTypes$func;

if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: (_PropTypes$object = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object) === null || _PropTypes$object === void 0 ? void 0 : _PropTypes$object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func) === null || _PropTypes$func === void 0 ? void 0 : _PropTypes$func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map