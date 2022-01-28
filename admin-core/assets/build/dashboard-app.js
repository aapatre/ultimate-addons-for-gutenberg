/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": function() { return /* binding */ _arrayLikeToArray; },
/* harmony export */   "createForOfIteratorHelperLoose": function() { return /* binding */ _createForOfIteratorHelperLoose; },
/* harmony export */   "extends": function() { return /* binding */ _extends; },
/* harmony export */   "objectWithoutPropertiesLoose": function() { return /* binding */ _objectWithoutPropertiesLoose; },
/* harmony export */   "unsupportedIterableToArray": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": function() { return /* binding */ Description; },
/* harmony export */   "useDescriptions": function() { return /* binding */ useDescriptions; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");






var DescriptionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDescriptionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DescriptionContext);

  if (context === null) {
    var err = new Error('You used a <Description /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }

  return context;
}

function useDescriptions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      descriptionIds = _useState[0],
      setDescriptionIds = _useState[1];

  return [// The actual id's as string or undefined
  descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function DescriptionProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setDescriptionIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setDescriptionIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setDescriptionIds])];
} // ---

var DEFAULT_DESCRIPTION_TAG = 'p';
function Description(props) {
  var context = useDescriptionContext();
  var id = "headlessui-description-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__.useId)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    return context.register(id);
  }, [id, context.register]);
  var passThroughProps = props;

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__["extends"])({}, context.props, {
    id: id
  });

  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__["extends"])({}, passThroughProps, propsWeControl),
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || 'Description'
  });
}


//# sourceMappingURL=description.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": function() { return /* binding */ Disclosure; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");











var _reducers;
var DisclosureStates;

(function (DisclosureStates) {
  DisclosureStates[DisclosureStates["Open"] = 0] = "Open";
  DisclosureStates[DisclosureStates["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["ToggleDisclosure"] = 0] = "ToggleDisclosure";
  ActionTypes[ActionTypes["CloseDisclosure"] = 1] = "CloseDisclosure";
  ActionTypes[ActionTypes["SetButtonId"] = 2] = "SetButtonId";
  ActionTypes[ActionTypes["SetPanelId"] = 3] = "SetPanelId";
  ActionTypes[ActionTypes["LinkPanel"] = 4] = "LinkPanel";
  ActionTypes[ActionTypes["UnlinkPanel"] = 5] = "UnlinkPanel";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.ToggleDisclosure] = function (state) {
  var _match;

  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    disclosureState: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(state.disclosureState, (_match = {}, _match[DisclosureStates.Open] = DisclosureStates.Closed, _match[DisclosureStates.Closed] = DisclosureStates.Open, _match))
  });
}, _reducers[ActionTypes.CloseDisclosure] = function (state) {
  if (state.disclosureState === DisclosureStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    disclosureState: DisclosureStates.Closed
  });
}, _reducers[ActionTypes.LinkPanel] = function (state) {
  if (state.linkedPanel === true) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    linkedPanel: true
  });
}, _reducers[ActionTypes.UnlinkPanel] = function (state) {
  if (state.linkedPanel === false) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    linkedPanel: false
  });
}, _reducers[ActionTypes.SetButtonId] = function (state, action) {
  if (state.buttonId === action.buttonId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    buttonId: action.buttonId
  });
}, _reducers[ActionTypes.SetPanelId] = function (state, action) {
  if (state.panelId === action.panelId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    panelId: action.panelId
  });
}, _reducers);
var DisclosureContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosureContext.displayName = 'DisclosureContext';

function useDisclosureContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosureContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }

  return context;
}

var DisclosureAPIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosureAPIContext.displayName = 'DisclosureAPIContext';

function useDisclosureAPIContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosureAPIContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }

  return context;
}

var DisclosurePanelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosurePanelContext.displayName = 'DisclosurePanelContext';

function useDisclosurePanelContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosurePanelContext);
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_DISCLOSURE_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Disclosure(props) {
  var _match2;

  var _props$defaultOpen = props.defaultOpen,
      defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["defaultOpen"]);

  var buttonId = "headlessui-disclosure-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var panelId = "headlessui-disclosure-panel-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    disclosureState: defaultOpen ? DisclosureStates.Open : DisclosureStates.Closed,
    linkedPanel: false,
    buttonId: buttonId,
    panelId: panelId
  });
  var disclosureState = reducerBag[0].disclosureState,
      dispatch = reducerBag[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetButtonId,
      buttonId: buttonId
    });
  }, [buttonId, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetPanelId,
      panelId: panelId
    });
  }, [panelId, dispatch]);
  var close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (focusableElement) {
    dispatch({
      type: ActionTypes.CloseDisclosure
    });

    var restoreElement = function () {
      if (!focusableElement) return document.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement) return focusableElement;
      if (focusableElement.current instanceof HTMLElement) return focusableElement.current;
      return document.getElementById(buttonId);
    }();

    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, buttonId]);
  var api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      close: close
    };
  }, [close]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: disclosureState === DisclosureStates.Open,
      close: close
    };
  }, [disclosureState, close]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosureAPIContext.Provider, {
    value: api
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(disclosureState, (_match2 = {}, _match2[DisclosureStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open, _match2[DisclosureStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Closed, _match2))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    slot: slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: 'Disclosure'
  }))));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function Button(props, ref) {
  var _useDisclosureContext = useDisclosureContext([Disclosure.name, Button.name].join('.')),
      state = _useDisclosureContext[0],
      dispatch = _useDisclosureContext[1];

  var internalButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(internalButtonRef, ref);
  var panelContext = useDisclosurePanelContext();
  var isWithinPanel = panelContext === null ? false : panelContext === state.panelId;
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _document$getElementB;

    if (isWithinPanel) {
      if (state.disclosureState === DisclosureStates.Closed) return;

      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          (_document$getElementB = document.getElementById(state.buttonId)) == null ? void 0 : _document$getElementB.focus();
          break;
      }
    } else {
      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          break;
      }
    }
  }, [dispatch, isWithinPanel, state.disclosureState]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_8__.isDisabledReactIssue7711)(event.currentTarget)) return;
    if (props.disabled) return;

    if (isWithinPanel) {
      var _document$getElementB2;

      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
      (_document$getElementB2 = document.getElementById(state.buttonId)) == null ? void 0 : _document$getElementB2.focus();
    } else {
      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
    }
  }, [dispatch, props.disabled, state.buttonId, isWithinPanel]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.disclosureState === DisclosureStates.Open
    };
  }, [state]);
  var type = (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(props, internalButtonRef);
  var passthroughProps = props;
  var propsWeControl = isWithinPanel ? {
    ref: buttonRef,
    type: type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state.buttonId,
    type: type,
    'aria-expanded': props.disabled ? undefined : state.disclosureState === DisclosureStates.Open,
    'aria-controls': state.linkedPanel ? state.panelId : undefined,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Disclosure.Button'
  });
}); // ---

var DEFAULT_PANEL_TAG = 'div';
var PanelRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.Features.Static;
var Panel = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function Panel(props, ref) {
  var _useDisclosureContext2 = useDisclosureContext([Disclosure.name, Panel.name].join('.')),
      state = _useDisclosureContext2[0],
      dispatch = _useDisclosureContext2[1];

  var _useDisclosureAPICont = useDisclosureAPIContext([Disclosure.name, Panel.name].join('.')),
      close = _useDisclosureAPICont.close;

  var panelRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(ref, function () {
    if (state.linkedPanel) return;
    dispatch({
      type: ActionTypes.LinkPanel
    });
  });
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open;
    }

    return state.disclosureState === DisclosureStates.Open;
  }(); // Unlink on "unmount" myself


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return dispatch({
        type: ActionTypes.UnlinkPanel
      });
    };
  }, [dispatch]); // Unlink on "unmount" children

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _props$unmount;

    if (state.disclosureState === DisclosureStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
      dispatch({
        type: ActionTypes.UnlinkPanel
      });
    }
  }, [state.disclosureState, props.unmount, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.disclosureState === DisclosureStates.Open,
      close: close
    };
  }, [state, close]);
  var propsWeControl = {
    ref: panelRef,
    id: state.panelId
  };
  var passthroughProps = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosurePanelContext.Provider, {
    value: state.panelId
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible: visible,
    name: 'Disclosure.Panel'
  }));
}); // ---

Disclosure.Button = Button;
Disclosure.Panel = Panel;


//# sourceMappingURL=disclosure.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": function() { return /* binding */ Keys; }
/* harmony export */ });
// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));


//# sourceMappingURL=keyboard.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": function() { return /* binding */ Label; },
/* harmony export */   "useLabels": function() { return /* binding */ useLabels; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");






var LabelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useLabelContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LabelContext);

  if (context === null) {
    var err = new Error('You used a <Label /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext);
    throw err;
  }

  return context;
}

function useLabels() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      labelIds = _useState[0],
      setLabelIds = _useState[1];

  return [// The actual id's as string or undefined.
  labelIds.length > 0 ? labelIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function LabelProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setLabelIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setLabelIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setLabelIds])];
} // ---

var DEFAULT_LABEL_TAG = 'label';
function Label(props) {
  var _props$passive = props.passive,
      passive = _props$passive === void 0 ? false : _props$passive,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["passive"]);

  var context = useLabelContext();
  var id = "headlessui-label-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_2__.useId)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(function () {
    return context.register(id);
  }, [id, context.register]);

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, context.props, {
    id: id
  });

  var allProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passThroughProps, propsWeControl); // @ts-expect-error props are dynamic via context, some components will
  //                  provide an onClick then we can delete it.


  if (passive) delete allProps['onClick'];
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: allProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG,
    name: context.name || 'Label'
  });
}


//# sourceMappingURL=label.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-disposables.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js");
/* harmony import */ var _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.esm.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js");
/* harmony import */ var _hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-tree-walker.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js");


















var _reducers;
var MenuStates;

(function (MenuStates) {
  MenuStates[MenuStates["Open"] = 0] = "Open";
  MenuStates[MenuStates["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["OpenMenu"] = 0] = "OpenMenu";
  ActionTypes[ActionTypes["CloseMenu"] = 1] = "CloseMenu";
  ActionTypes[ActionTypes["GoToItem"] = 2] = "GoToItem";
  ActionTypes[ActionTypes["Search"] = 3] = "Search";
  ActionTypes[ActionTypes["ClearSearch"] = 4] = "ClearSearch";
  ActionTypes[ActionTypes["RegisterItem"] = 5] = "RegisterItem";
  ActionTypes[ActionTypes["UnregisterItem"] = 6] = "UnregisterItem";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.CloseMenu] = function (state) {
  if (state.menuState === MenuStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    activeItemIndex: null,
    menuState: MenuStates.Closed
  });
}, _reducers[ActionTypes.OpenMenu] = function (state) {
  if (state.menuState === MenuStates.Open) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    menuState: MenuStates.Open
  });
}, _reducers[ActionTypes.GoToItem] = function (state, action) {
  var activeItemIndex = (0,_utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(action, {
    resolveItems: function resolveItems() {
      return state.items;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state.activeItemIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state.searchQuery === '' && state.activeItemIndex === activeItemIndex) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: '',
    activeItemIndex: activeItemIndex
  });
}, _reducers[ActionTypes.Search] = function (state, action) {
  var searchQuery = state.searchQuery + action.value.toLowerCase();
  var match = state.items.findIndex(function (item) {
    var _item$dataRef$current;

    return ((_item$dataRef$current = item.dataRef.current.textValue) == null ? void 0 : _item$dataRef$current.startsWith(searchQuery)) && !item.dataRef.current.disabled;
  });
  if (match === -1 || match === state.activeItemIndex) return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: searchQuery
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: searchQuery,
    activeItemIndex: match
  });
}, _reducers[ActionTypes.ClearSearch] = function (state) {
  if (state.searchQuery === '') return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    searchQuery: ''
  });
}, _reducers[ActionTypes.RegisterItem] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    items: [].concat(state.items, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterItem] = function (state, action) {
  var nextItems = state.items.slice();
  var currentActiveItem = state.activeItemIndex !== null ? nextItems[state.activeItemIndex] : null;
  var idx = nextItems.findIndex(function (a) {
    return a.id === action.id;
  });
  if (idx !== -1) nextItems.splice(idx, 1);
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, state, {
    items: nextItems,
    activeItemIndex: function () {
      if (idx === state.activeItemIndex) return null;
      if (currentActiveItem === null) return null; // If we removed the item before the actual active index, then it would be out of sync. To
      // fix this, we will find the correct (new) index position.

      return nextItems.indexOf(currentActiveItem);
    }()
  });
}, _reducers);
var MenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
MenuContext.displayName = 'MenuContext';

function useMenuContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Menu.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_MENU_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Menu(props) {
  var _match;

  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    menuState: MenuStates.Closed,
    buttonRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    itemsRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    items: [],
    searchQuery: '',
    activeItemIndex: null
  });
  var _reducerBag$ = reducerBag[0],
      menuState = _reducerBag$.menuState,
      itemsRef = _reducerBag$.itemsRef,
      buttonRef = _reducerBag$.buttonRef,
      dispatch = reducerBag[1]; // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('mousedown', function (event) {
    var _buttonRef$current, _itemsRef$current;

    var target = event.target;
    if (menuState !== MenuStates.Open) return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target)) return;
    if ((_itemsRef$current = itemsRef.current) == null ? void 0 : _itemsRef$current.contains(target)) return;
    dispatch({
      type: ActionTypes.CloseMenu
    });

    if (!(0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.isFocusableElement)(target, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusableMode.Loose)) {
      var _buttonRef$current2;

      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: menuState === MenuStates.Open
    };
  }, [menuState]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(menuState, (_match = {}, _match[MenuStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open, _match[MenuStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Closed, _match))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: props,
    slot: slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: 'Menu'
  })));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Button(props, ref) {
  var _state$itemsRef$curre;

  var _useMenuContext = useMenuContext([Menu.name, Button.name].join('.')),
      state = _useMenuContext[0],
      dispatch = _useMenuContext[1];

  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.buttonRef, ref);
  var id = "headlessui-menu-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var d = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
          });
        });
        break;
    }
  }, [dispatch, d]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    if (props.disabled) return;

    if (state.menuState === MenuStates.Open) {
      dispatch({
        type: ActionTypes.CloseMenu
      });
      d.nextFrame(function () {
        var _state$buttonRef$curr;

        return (_state$buttonRef$curr = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: ActionTypes.OpenMenu
      });
    }
  }, [dispatch, d, state, props.disabled]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id,
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(props, state.buttonRef),
    'aria-haspopup': true,
    'aria-controls': (_state$itemsRef$curre = state.itemsRef.current) == null ? void 0 : _state$itemsRef$curre.id,
    'aria-expanded': props.disabled ? undefined : state.menuState === MenuStates.Open,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Menu.Button'
  });
}); // ---

var DEFAULT_ITEMS_TAG = 'div';
var ItemsRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.Static;
var Items = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Items(props, ref) {
  var _state$items$state$ac, _state$buttonRef$curr4;

  var _useMenuContext2 = useMenuContext([Menu.name, Items.name].join('.')),
      state = _useMenuContext2[0],
      dispatch = _useMenuContext2[1];

  var itemsRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.itemsRef, ref);
  var id = "headlessui-menu-items-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var searchDisposables = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open;
    }

    return state.menuState === MenuStates.Open;
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var container = state.itemsRef.current;
    if (!container) return;
    if (state.menuState !== MenuStates.Open) return;
    if (container === document.activeElement) return;
    container.focus({
      preventScroll: true
    });
  }, [state.menuState, state.itemsRef]);
  (0,_hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__.useTreeWalker)({
    container: state.itemsRef.current,
    enabled: state.menuState === MenuStates.Open,
    accept: function accept(node) {
      if (node.getAttribute('role') === 'menuitem') return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk: function walk(node) {
      node.setAttribute('role', 'none');
    }
  });
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    searchDisposables.dispose();

    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
      // @ts-expect-error Fallthrough is expected here
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        if (state.searchQuery !== '') {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }

      // When in type ahead mode, fallthrough

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });

        if (state.activeItemIndex !== null) {
          var _document$getElementB;

          var _id = state.items[state.activeItemIndex].id;
          (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
        }

        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr2;

          return (_state$buttonRef$curr2 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });
        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr3;

          return (_state$buttonRef$curr3 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;

      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function () {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }

        break;
    }
  }, [dispatch, searchDisposables, state]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var propsWeControl = {
    'aria-activedescendant': state.activeItemIndex === null ? undefined : (_state$items$state$ac = state.items[state.activeItemIndex]) == null ? void 0 : _state$items$state$ac.id,
    'aria-labelledby': (_state$buttonRef$curr4 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.id,
    id: id,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: 'menu',
    tabIndex: 0,
    ref: itemsRef
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible: visible,
    name: 'Menu.Items'
  });
}); // ---

var DEFAULT_ITEM_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Item(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      onClick = props.onClick,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["disabled", "onClick"]);

  var _useMenuContext3 = useMenuContext([Menu.name, Item.name].join('.')),
      state = _useMenuContext3[0],
      dispatch = _useMenuContext3[1];

  var id = "headlessui-menu-item-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var active = state.activeItemIndex !== null ? state.items[state.activeItemIndex].id === id : false;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    if (state.menuState !== MenuStates.Open) return;
    if (!active) return;
    var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)();
    d.nextFrame(function () {
      var _document$getElementB2;

      return (_document$getElementB2 = document.getElementById(id)) == null ? void 0 : _document$getElementB2.scrollIntoView == null ? void 0 : _document$getElementB2.scrollIntoView({
        block: 'nearest'
      });
    });
    return d.dispose;
  }, [id, active, state.menuState]);
  var bag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled: disabled
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    var _document$getElementB3, _document$getElementB4;

    bag.current.textValue = (_document$getElementB3 = document.getElementById(id)) == null ? void 0 : (_document$getElementB4 = _document$getElementB3.textContent) == null ? void 0 : _document$getElementB4.toLowerCase();
  }, [bag, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterItem,
      id: id,
      dataRef: bag
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterItem,
        id: id
      });
    };
  }, [bag, id]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabled) return event.preventDefault();
    dispatch({
      type: ActionTypes.CloseMenu
    });
    (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
      var _state$buttonRef$curr5;

      return (_state$buttonRef$curr5 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.focus({
        preventScroll: true
      });
    });
    if (onClick) return onClick(event);
  }, [dispatch, state.buttonRef, disabled, onClick]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, id, dispatch]);
  var handleMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, active, id, dispatch]);
  var handleLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (!active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      active: active,
      disabled: disabled
    };
  }, [active, disabled]);
  var propsWeControl = {
    id: id,
    role: 'menuitem',
    tabIndex: disabled === true ? undefined : -1,
    'aria-disabled': disabled === true ? true : undefined,
    disabled: undefined,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: 'Menu.Item'
  });
} // ---


Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;


//# sourceMappingURL=menu.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/switch/switch.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/switch/switch.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switch": function() { return /* binding */ Switch; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../description/description.esm.js */ "./node_modules/@headlessui/react/dist/components/description/description.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label/label.esm.js */ "./node_modules/@headlessui/react/dist/components/label/label.esm.js");











var GroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
GroupContext.displayName = 'GroupContext'; // ---

var DEFAULT_GROUP_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Group(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      switchElement = _useState[0],
      setSwitchElement = _useState[1];

  var _useLabels = (0,_label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__.useLabels)(),
      labelledby = _useLabels[0],
      LabelProvider = _useLabels[1];

  var _useDescriptions = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__.useDescriptions)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      "switch": switchElement,
      setSwitch: setSwitchElement,
      labelledby: labelledby,
      describedby: describedby
    };
  }, [switchElement, setSwitchElement, labelledby, describedby]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick: function onClick() {
        if (!switchElement) return;
        switchElement.click();
        switchElement.focus({
          preventScroll: true
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupContext.Provider, {
    value: context
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: props,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Switch.Group'
  }))));
} // ---


var DEFAULT_SWITCH_TAG = 'button';
function Switch(props) {
  var checked = props.checked,
      onChange = props.onChange,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["checked", "onChange"]);

  var id = "headlessui-switch-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();
  var groupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GroupContext);
  var internalSwitchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var switchRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(internalSwitchRef, groupContext === null ? null : groupContext.setSwitch);
  var toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return onChange(!checked);
  }, [onChange, checked]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_7__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    toggle();
  }, [toggle]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (event.key !== _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Tab) event.preventDefault();
    if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space) toggle();
  }, [toggle]); // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.

  var handleKeyPress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    return event.preventDefault();
  }, []);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      checked: checked
    };
  }, [checked]);
  var propsWeControl = {
    id: id,
    ref: switchRef,
    role: 'switch',
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(props, internalSwitchRef),
    tabIndex: 0,
    'aria-checked': checked,
    'aria-labelledby': groupContext == null ? void 0 : groupContext.labelledby,
    'aria-describedby': groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__["extends"])({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_SWITCH_TAG,
    name: 'Switch'
  });
} // ---

Switch.Group = Group;
Switch.Label = _label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__.Label;
Switch.Description = _description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__.Description;


//# sourceMappingURL=switch.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": function() { return /* binding */ Transition; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-is-initial-render.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js");
/* harmony import */ var _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/transition.esm.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js");












function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return classes.split(' ').filter(function (className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}

var TransitionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
TransitionContext.displayName = 'TransitionContext';
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function useTransitionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NestingContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
NestingContext.displayName = 'NestingContext';

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.current.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var doneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(done);
  var transitionableChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var mounted = (0,_hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    doneRef.current = done;
  }, [done]);
  var unregister = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;
    }

    var idx = transitionableChildren.current.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(strategy, (_match = {}, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount] = function () {
      transitionableChildren.current.splice(idx, 1);
    }, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden] = function () {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId) {
    var child = transitionableChildren.current.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      children: transitionableChildren,
      register: register,
      unregister: unregister
    };
  }, [register, unregister, transitionableChildren]);
}

function noop() {}

var eventNames = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];

function ensureEventHooksExist(events) {
  var result = {};

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createForOfIteratorHelperLoose)(eventNames), _step; !(_step = _iterator()).done;) {
    var _events$name;

    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }

  return result;
}

function useEvents(events) {
  var eventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ensureEventHooksExist(events));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
} // ---


var DEFAULT_TRANSITION_CHILD_TAG = 'div';
var TransitionChildRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy;

function TransitionChild(props) {
  var _match3;

  var beforeEnter = props.beforeEnter,
      afterEnter = props.afterEnter,
      beforeLeave = props.beforeLeave,
      afterLeave = props.afterLeave,
      enter = props.enter,
      enterFrom = props.enterFrom,
      enterTo = props.enterTo,
      entered = props.entered,
      leave = props.leave,
      leaveFrom = props.leaveFrom,
      leaveTo = props.leaveTo,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TreeStates.Visible),
      state = _useState[0],
      setState = _useState[1];

  var strategy = rest.unmount ? _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount : _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;

  var _useTransitionContext = useTransitionContext(),
      show = _useTransitionContext.show,
      appear = _useTransitionContext.appear,
      initial = _useTransitionContext.initial;

  var _useParentNesting = useParentNesting(),
      register = _useParentNesting.register,
      unregister = _useParentNesting.unregister;

  var id = (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();
  var isTransitioning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var nesting = useNesting(function () {
    // When all children have been unmounted we can only hide ourselves if and only if we are not
    // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id);
      events.current.afterLeave();
    }
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    if (!id) return;
    return register(id);
  }, [register, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    var _match2;

    // If we are in another mode than the Hidden mode then ignore
    if (strategy !== _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden) return;
    if (!id) return; // Make sure that we are visible

    if (show && state !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }

    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
      return unregister(id);
    }, _match2[TreeStates.Visible] = function () {
      return register(id);
    }, _match2));
  }, [state, id, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter: beforeEnter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    afterLeave: afterLeave
  });
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ready && state === TreeStates.Visible && container.current === null) {
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
    }
  }, [container, state, ready]); // Skipping initial transition

  var skip = initial && !appear;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    var node = container.current;
    if (!node) return;
    if (skip) return;
    isTransitioning.current = true;
    if (show) events.current.beforeEnter();
    if (!show) events.current.beforeLeave();
    return show ? (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.transition)(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason === _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.Reason.Finished) events.current.afterEnter();
    }) : (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.transition)(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason !== _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
      // ourselves.

      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id);
        events.current.afterLeave();
      }
    });
  }, [events, id, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NestingContext.Provider, {
    value: nesting
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match3 = {}, _match3[TreeStates.Visible] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Open, _match3[TreeStates.Hidden] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Closed, _match3))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__["extends"])({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition.Child'
  })));
}

function Transition(props) {
  // @ts-expect-error
  var show = props.show,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? false : _props$appear,
      unmount = props.unmount,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["show", "appear", "unmount"]);

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.useOpenClosed)();

  if (show === undefined && usesOpenClosedState !== null) {
    var _match4;

    show = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(usesOpenClosedState, (_match4 = {}, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Open] = true, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Closed] = false, _match4));
  }

  if (![true, false].includes(show)) {
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  }

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show ? TreeStates.Visible : TreeStates.Hidden),
      state = _useState2[0],
      setState = _useState2[1];

  var nestingBag = useNesting(function () {
    setState(TreeStates.Hidden);
  });
  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_10__.useIsInitialRender)();
  var transitionBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      show: show,
      appear: appear || !initial,
      initial: initial
    };
  }, [show, appear, initial]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount: unmount
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NestingContext.Provider, {
    value: nestingBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionContext.Provider, {
    value: transitionBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__["extends"])({}, sharedProps, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      children: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition'
  })));
}

Transition.Child = function Child(props) {
  var hasTransitionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.useOpenClosed)() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transition, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionChild, Object.assign({}, props));
};

Transition.Root = Transition;


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": function() { return /* binding */ Reason; },
/* harmony export */   "transition": function() { return /* binding */ transition; }
/* harmony export */ });
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.esm.js */ "./node_modules/@headlessui/react/dist/utils/once.esm.js");



function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falsy we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();

  var _done = done !== undefined ? (0,_utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__.once)(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisposables": function() { return /* binding */ useDisposables; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");



function useDisposables() {
  // Using useState instead of useRef so that we can use the initializer function.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__.disposables),
      d = _useState[0];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return d.dispose();
    };
  }, [d]);
  return d;
}


//# sourceMappingURL=use-disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");




// didn't take care of the Suspense case. To fix this we used the approach the @reach-ui/auto-id
// uses.
//
// Credits: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  var ready = (0,_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ready ? generateId : null),
      id = _useState[0],
      setId = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    if (id === null) setId(generateId());
  }, [id]);
  return id != null ? '' + id : undefined;
}


//# sourceMappingURL=use-id.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsInitialRender": function() { return /* binding */ useIsInitialRender; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useIsInitialRender() {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}


//# sourceMappingURL=use-is-initial-render.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": function() { return /* binding */ useIsMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useIsMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}


//# sourceMappingURL=use-is-mounted.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": function() { return /* binding */ useIsoMorphicEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useIsoMorphicEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-iso-morphic-effect.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": function() { return /* binding */ useResolveButtonType; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function resolveType(props) {
  var _props$as;

  if (props.type) return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : 'button';
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button';
  return undefined;
}

function useResolveButtonType(props, ref) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return resolveType(props);
  }),
      type = _useState[0],
      setType = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    setType(resolveType(props));
  }, [props.type, props.as]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (type) return;
    if (!ref.current) return;

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button');
    }
  }, [type, ref]);
  return type;
}


//# sourceMappingURL=use-resolve-button-type.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": function() { return /* binding */ useServerHandoffComplete; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.serverHandoffComplete),
      serverHandoffComplete = _useState[0],
      setServerHandoffComplete = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (serverHandoffComplete === true) return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}


//# sourceMappingURL=use-server-handoff-complete.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncRefs": function() { return /* binding */ useSyncRefs; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    cache.current = refs;
  }, [refs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(cache.current), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);else ref.current = value;
    }
  }, [cache]);
}


//# sourceMappingURL=use-sync-refs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": function() { return /* binding */ useTreeWalker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function useTreeWalker(_ref) {
  var container = _ref.container,
      accept = _ref.accept,
      walk = _ref.walk,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var acceptRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(accept);
  var walkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(walk);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (!container) return;
    if (!enabled) return;
    var accept = acceptRef.current;
    var walk = walkRef.current;
    var acceptNode = Object.assign(function (node) {
      return accept(node);
    }, {
      acceptNode: accept
    });
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);

    while (walker.nextNode()) {
      walk(walker.currentNode);
    }
  }, [container, enabled, acceptRef, walkRef]);
}


//# sourceMappingURL=use-tree-walker.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": function() { return /* binding */ useWindowEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowEvent(type, listener, options) {
  var listenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(listener);
  listenerRef.current = listener;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handler(event) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return function () {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}


//# sourceMappingURL=use-window-event.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": function() { return /* binding */ OpenClosedProvider; },
/* harmony export */   "State": function() { return /* binding */ State; },
/* harmony export */   "useOpenClosed": function() { return /* binding */ useOpenClosed; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
Context.displayName = 'OpenClosedContext';
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function useOpenClosed() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: value
  }, children);
}


//# sourceMappingURL=open-closed.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": function() { return /* binding */ isDisabledReactIssue7711; }
/* harmony export */ });
// See: https://github.com/facebook/react/issues/7711
// See: https://github.com/facebook/react/pull/20612
// See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled (2.)
function isDisabledReactIssue7711(element) {
  var _ref, _parent;

  var parent = element.parentElement;
  var legend = null;

  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement) legend = parent;
    parent = parent.parentElement;
  }

  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute('disabled')) === '') != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend)) return false;
  return isParentDisabled;
}

function isFirstLegend(element) {
  if (!element) return false;
  var previous = element.previousElementSibling;

  while (previous !== null) {
    if (previous instanceof HTMLLegendElement) return false;
    previous = previous.previousElementSibling;
  }

  return true;
}


//# sourceMappingURL=bugs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ Focus; },
/* harmony export */   "calculateActiveIndex": function() { return /* binding */ calculateActiveIndex; }
/* harmony export */ });
function assertNever(x) {
  throw new Error('Unexpected object: ' + x);
}

var Focus;

(function (Focus) {
  /** Focus the first non-disabled item. */
  Focus[Focus["First"] = 0] = "First";
  /** Focus the previous non-disabled item. */

  Focus[Focus["Previous"] = 1] = "Previous";
  /** Focus the next non-disabled item. */

  Focus[Focus["Next"] = 2] = "Next";
  /** Focus the last non-disabled item. */

  Focus[Focus["Last"] = 3] = "Last";
  /** Focus a specific item based on the `id` of the item. */

  Focus[Focus["Specific"] = 4] = "Specific";
  /** Focus no items at all. */

  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));

function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0) return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;

  var nextActiveIndex = function () {
    switch (action.focus) {
      case Focus.First:
        return items.findIndex(function (item) {
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Previous:
        {
          var idx = items.slice().reverse().findIndex(function (item, idx, all) {
            if (activeIndex !== -1 && all.length - idx - 1 >= activeIndex) return false;
            return !resolvers.resolveDisabled(item);
          });
          if (idx === -1) return idx;
          return items.length - 1 - idx;
        }

      case Focus.Next:
        return items.findIndex(function (item, idx) {
          if (idx <= activeIndex) return false;
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Last:
        {
          var _idx = items.slice().reverse().findIndex(function (item) {
            return !resolvers.resolveDisabled(item);
          });

          if (_idx === -1) return _idx;
          return items.length - 1 - _idx;
        }

      case Focus.Specific:
        return items.findIndex(function (item) {
          return resolvers.resolveId(item) === action.id;
        });

      case Focus.Nothing:
        return null;

      default:
        assertNever(action);
    }
  }();

  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}


//# sourceMappingURL=calculate-active-index.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": function() { return /* binding */ disposables; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");


function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createForOfIteratorHelperLoose)(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}


//# sourceMappingURL=disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ Focus; },
/* harmony export */   "FocusResult": function() { return /* binding */ FocusResult; },
/* harmony export */   "FocusableMode": function() { return /* binding */ FocusableMode; },
/* harmony export */   "focusElement": function() { return /* binding */ focusElement; },
/* harmony export */   "focusIn": function() { return /* binding */ focusIn; },
/* harmony export */   "getFocusableElements": function() { return /* binding */ getFocusableElements; },
/* harmony export */   "isFocusableElement": function() { return /* binding */ isFocusableElement; }
/* harmony export */ });
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");


//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  /** Something went wrong while trying to focus. */
  FocusResult[FocusResult["Error"] = 0] = "Error";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */

  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  /** Focus was successful. */

  FocusResult[FocusResult["Success"] = 2] = "Success";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */

  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_0__.match)(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container.slice().sort(function (a, b) {
    var position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  }) : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}


//# sourceMappingURL=focus-management.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": function() { return /* binding */ match; }
/* harmony export */ });
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}


//# sourceMappingURL=match.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": function() { return /* binding */ once; }
/* harmony export */ });
function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}


//# sourceMappingURL=once.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": function() { return /* binding */ Features; },
/* harmony export */   "RenderStrategy": function() { return /* binding */ RenderStrategy; },
/* harmony export */   "forwardRefWithAs": function() { return /* binding */ forwardRefWithAs; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");




var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var props = _ref.props,
      slot = _ref.slot,
      defaultTag = _ref.defaultTag,
      features = _ref.features,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      name = _ref.name;
  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;

  if (featureFlags & Features.Static) {
    var _props$static = props["static"],
        isStatic = _props$static === void 0 ? false : _props$static,
        rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["static"]); // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else


    if (isStatic) return _render(rest, slot, defaultTag, name);
  }

  if (featureFlags & Features.RenderStrategy) {
    var _match;

    var _props$unmount = props.unmount,
        unmount = _props$unmount === void 0 ? true : _props$unmount,
        _rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["unmount"]);

    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__["extends"])({}, _rest, {
        hidden: true,
        style: {
          display: 'none'
        }
      }), slot, defaultTag, name);
    }, _match));
  } // No features enabled, just render


  return _render(props, slot, defaultTag, name);
}

function _render(props, slot, tag, name) {
  var _ref2;

  if (slot === void 0) {
    slot = {};
  }

  var _omit = omit(props, ['unmount', 'static']),
      _omit$as = _omit.as,
      Component = _omit$as === void 0 ? tag : _omit$as,
      children = _omit.children,
      _omit$refName = _omit.refName,
      refName = _omit$refName === void 0 ? 'ref' : _omit$refName,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(_omit, ["as", "children", "refName"]); // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`


  var refRelatedProps = props.ref !== undefined ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === 'function' ? children(slot) : children; // Allow for className to be a function with the slot as the contents

  if (passThroughProps.className && typeof passThroughProps.className === 'function') {
    passThroughProps.className = passThroughProps.className(slot);
  }

  if (Component === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', '', "The current component <" + name + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(resolvedChildren, Object.assign({}, // Filter out undefined values so that they don't override the existing values
      mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
    }
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */


function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);

  var _loop = function _loop() {
    var func = _step.value;

    if (passThroughProps[func] !== undefined && existingProps[func] !== undefined) {
      var _Object$assign;

      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function (event) {
        // Props we control
        if (!event.defaultPrevented) passThroughProps[func](event); // Existing props on the component

        if (!event.defaultPrevented) existingProps[func](event);
      }, _Object$assign));
    }
  };

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(functionsToMerge), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */


function forwardRefWithAs(component) {
  var _component$displayNam;

  return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}

function compact(object) {
  var clone = Object.assign({}, object);

  for (var key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }

  return clone;
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(keysToOmit), _step2; !(_step2 = _iterator2()).done;) {
    var key = _step2.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}


//# sourceMappingURL=render.esm.js.map


/***/ }),

/***/ "./assets/src/common/block-icons.js":
/*!******************************************!*\
  !*** ./assets/src/common/block-icons.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Block Icons
 */

const UAGB_Block_Icons = {
  section: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 32,
    viewBox: '0 0 36 32',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M5.625 6.75C5.32663 6.75 5.04048 6.63147 4.8295 6.4205C4.61853 6.20952 4.5 5.92337 4.5 5.625C4.5 5.32663 4.61853 5.04048 4.8295 4.8295C5.04048 4.61853 5.32663 4.5 5.625 4.5H30.375C30.6734 4.5 30.9595 4.61853 31.1705 4.8295C31.3815 5.04048 31.5 5.32663 31.5 5.625C31.5 5.92337 31.3815 6.20952 31.1705 6.4205C30.9595 6.63147 30.6734 6.75 30.375 6.75H5.625ZM10.125 2.25C9.82663 2.25 9.54048 2.13147 9.3295 1.9205C9.11853 1.70952 9 1.42337 9 1.125C9 0.826631 9.11853 0.540483 9.3295 0.329505C9.54048 0.118526 9.82663 0 10.125 0H25.875C26.1734 0 26.4595 0.118526 26.6705 0.329505C26.8815 0.540483 27 0.826631 27 1.125C27 1.42337 26.8815 1.70952 26.6705 1.9205C26.4595 2.13147 26.1734 2.25 25.875 2.25H10.125ZM0 28.125C0 29.0201 0.355579 29.8786 0.988515 30.5115C1.62145 31.1444 2.47989 31.5 3.375 31.5H32.625C33.5201 31.5 34.3786 31.1444 35.0115 30.5115C35.6444 29.8786 36 29.0201 36 28.125V12.375C36 11.4799 35.6444 10.6214 35.0115 9.98851C34.3786 9.35558 33.5201 9 32.625 9H3.375C2.47989 9 1.62145 9.35558 0.988515 9.98851C0.355579 10.6214 0 11.4799 0 12.375L0 28.125ZM3.375 29.25C3.07663 29.25 2.79048 29.1315 2.5795 28.9205C2.36853 28.7095 2.25 28.4234 2.25 28.125V12.375C2.25 12.0766 2.36853 11.7905 2.5795 11.5795C2.79048 11.3685 3.07663 11.25 3.375 11.25H32.625C32.9234 11.25 33.2095 11.3685 33.4205 11.5795C33.6315 11.7905 33.75 12.0766 33.75 12.375V28.125C33.75 28.4234 33.6315 28.7095 33.4205 28.9205C33.2095 29.1315 32.9234 29.25 32.625 29.25H3.375Z'
  })),
  buttons: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 32,
    height: 36,
    viewBox: '0 0 32 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M4.75 0H27.25C28.4435 0 29.5881 0.474106 30.432 1.31802C31.2759 2.16193 31.75 3.30653 31.75 4.5V11.25C31.75 12.4435 31.2759 13.5881 30.432 14.432C29.5881 15.2759 28.4435 15.75 27.25 15.75H4.75C3.55653 15.75 2.41193 15.2759 1.56802 14.432C0.724106 13.5881 0.25 12.4435 0.25 11.25V4.5C0.25 3.30653 0.724106 2.16193 1.56802 1.31802C2.41193 0.474106 3.55653 0 4.75 0V0ZM4.75 2.25C4.15326 2.25 3.58097 2.48705 3.15901 2.90901C2.73705 3.33097 2.5 3.90326 2.5 4.5V11.25C2.5 11.8467 2.73705 12.419 3.15901 12.841C3.58097 13.2629 4.15326 13.5 4.75 13.5H27.25C27.8467 13.5 28.419 13.2629 28.841 12.841C29.2629 12.419 29.5 11.8467 29.5 11.25V4.5C29.5 3.90326 29.2629 3.33097 28.841 2.90901C28.419 2.48705 27.8467 2.25 27.25 2.25H4.75ZM4.75 20.25H27.25C28.4435 20.25 29.5881 20.7241 30.432 21.568C31.2759 22.4119 31.75 23.5565 31.75 24.75V31.5C31.75 32.6935 31.2759 33.8381 30.432 34.682C29.5881 35.5259 28.4435 36 27.25 36H4.75C3.55653 36 2.41193 35.5259 1.56802 34.682C0.724106 33.8381 0.25 32.6935 0.25 31.5V24.75C0.25 23.5565 0.724106 22.4119 1.56802 21.568C2.41193 20.7241 3.55653 20.25 4.75 20.25ZM4.75 22.5C4.15326 22.5 3.58097 22.7371 3.15901 23.159C2.73705 23.581 2.5 24.1533 2.5 24.75V31.5C2.5 32.0967 2.73705 32.669 3.15901 33.091C3.58097 33.5129 4.15326 33.75 4.75 33.75H27.25C27.8467 33.75 28.419 33.5129 28.841 33.091C29.2629 32.669 29.5 32.0967 29.5 31.5V24.75C29.5 24.1533 29.2629 23.581 28.841 23.159C28.419 22.7371 27.8467 22.5 27.25 22.5H4.75Z'
  })),
  buttons_child: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.533 6.474h-9.067c-1.944 0-3.526 1.582-3.526 3.526s1.582 3.526 3.526 3.526h9.067c1.944 0 3.526-1.582 3.526-3.526s-1.582-3.526-3.526-3.526zM5.467 12.519c-1.389 0-2.519-1.13-2.519-2.519s1.129-2.519 2.519-2.519h6.607c-0.656 0.641-1.066 1.532-1.066 2.519s0.41 1.878 1.066 2.519h-6.607zM14.533 12.519c-1.389 0-2.519-1.13-2.519-2.519s1.129-2.519 2.519-2.519 2.519 1.13 2.519 2.519c0 1.389-1.13 2.519-2.519 2.519z'
  })),
  'advanced-heading': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 37,
    height: 32,
    viewBox: '0 0 37 32',
    stroke: '#4A01E0',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M33.117 11.3889V11.7766L33.4925 11.8732C34.3517 12.0941 35.1132 12.5946 35.6568 13.2957C36.2005 13.9968 36.4956 14.8589 36.4956 15.7461C36.4956 16.6334 36.2005 17.4954 35.6568 18.1965C35.1132 18.8977 34.3517 19.3981 33.4925 19.619L33.117 19.7156V20.1033V28.1181C33.117 28.8803 32.8141 29.6114 32.2751 30.1504C31.7361 30.6894 31.0051 30.9922 30.2428 30.9922H7.74833C6.98606 30.9922 6.255 30.6894 5.71599 30.1504C5.17698 29.6114 4.87417 28.8803 4.87417 28.1181V20.1033V19.7156L4.49867 19.619C3.63939 19.3981 2.87797 18.8977 2.3343 18.1965C1.79062 17.4954 1.49556 16.6334 1.49556 15.7461C1.49556 14.8589 1.79062 13.9968 2.3343 13.2957C2.87797 12.5946 3.63939 12.0941 4.49867 11.8732L4.87417 11.7766V11.3889V3.37417C4.87417 2.61189 5.17698 1.88084 5.71599 1.34182C6.255 0.802813 6.98606 0.5 7.74833 0.5H30.2428C31.0051 0.5 31.7361 0.802813 32.2751 1.34182C32.8141 1.88084 33.117 2.61189 33.117 3.37417V11.3889ZM6.12361 11.3889V11.7766L6.4991 11.8732C7.35839 12.0941 8.1198 12.5946 8.66348 13.2957C9.20716 13.9968 9.50222 14.8589 9.50222 15.7461C9.50222 16.6334 9.20716 17.4954 8.66348 18.1965C8.1198 18.8977 7.35839 19.3981 6.4991 19.619L6.12361 19.7156V20.1033V28.1181C6.12361 28.549 6.29479 28.9622 6.59948 29.2669C6.90418 29.5716 7.31743 29.7428 7.74833 29.7428H30.2428C30.6737 29.7428 31.0869 29.5716 31.3916 29.2669C31.6963 28.9622 31.8675 28.549 31.8675 28.1181V20.1033V19.7156L31.492 19.619C30.6327 19.3981 29.8713 18.8977 29.3276 18.1965C28.784 17.4954 28.4889 16.6334 28.4889 15.7461C28.4889 14.8589 28.784 13.9968 29.3276 13.2957C29.8713 12.5946 30.6327 12.0941 31.492 11.8732L31.8675 11.7766V11.3889V3.37417C31.8675 2.94327 31.6963 2.53001 31.3916 2.22532L31.0381 2.57887L31.3916 2.22531C31.0869 1.92062 30.6737 1.74945 30.2428 1.74945H7.74833C7.31743 1.74945 6.90418 1.92062 6.59948 2.22532C6.29479 2.53001 6.12361 2.94326 6.12361 3.37417V11.3889ZM5.49889 12.9967C4.76969 12.9967 4.07036 13.2863 3.55474 13.802C3.03912 14.3176 2.74944 15.0169 2.74944 15.7461C2.74944 16.4753 3.03912 17.1746 3.55474 17.6903C4.07036 18.2059 4.76969 18.4956 5.49889 18.4956C6.22809 18.4956 6.92742 18.2059 7.44304 17.6903C7.95866 17.1746 8.24833 16.4753 8.24833 15.7461C8.24833 15.0169 7.95866 14.3176 7.44304 13.802C6.92742 13.2863 6.22809 12.9967 5.49889 12.9967ZM32.4922 12.9967C31.763 12.9967 31.0637 13.2863 30.5481 13.802C30.0325 14.3176 29.7428 15.0169 29.7428 15.7461C29.7428 16.4753 30.0325 17.1746 30.5481 17.6903C31.0637 18.2059 31.763 18.4956 32.4922 18.4956C33.2214 18.4956 33.9208 18.2059 34.4364 17.6903C34.952 17.1746 35.2417 16.4753 35.2417 15.7461C35.2417 15.0169 34.952 14.3176 34.4364 13.802C33.9208 13.2863 33.2214 12.9967 32.4922 12.9967Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M26.3467 10.3885C26.0996 9.35823 25.7147 8.6064 24.9752 8.12125C24.534 7.83178 24.0027 7.66201 23.3803 7.55499C22.7588 7.44813 22.0156 7.39904 21.1333 7.37075L21.1316 7.37071L20.3486 7.34821L19.8343 7.33343V7.848V22.1198C19.8343 22.7205 19.8845 23.3383 20.4291 23.7456C20.6752 23.9296 20.9844 24.0405 21.3355 24.1191C21.5709 24.1719 21.8435 24.2139 22.1564 24.25H15.8407C16.1524 24.2138 16.4241 24.1716 16.6587 24.1186C17.0086 24.0397 17.3168 23.9284 17.5621 23.7439C18.1042 23.3363 18.1545 22.7196 18.1545 22.1198V7.848V7.33171L17.6385 7.34826L16.8671 7.373C16.867 7.373 16.867 7.373 16.8669 7.373C15.9841 7.40072 15.2406 7.44937 14.6191 7.55589C13.9965 7.66258 13.4652 7.83212 13.024 8.12151C12.2847 8.60644 11.9002 9.35827 11.6534 10.3882L11.7572 7.25H26.2428L26.3467 10.3885Z'
  })),
  'google-map': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M6.975 25.1992C7.07979 25.0594 7.21567 24.946 7.37189 24.8679C7.5281 24.7898 7.70035 24.7492 7.875 24.7492H13.5C13.7984 24.7492 14.0845 24.8677 14.2955 25.0787C14.5065 25.2896 14.625 25.5758 14.625 25.8742C14.625 26.1725 14.5065 26.4587 14.2955 26.6697C14.0845 26.8806 13.7984 26.9992 13.5 26.9992H8.4375L3.375 33.7492H32.625L27.5625 26.9992H22.5C22.2016 26.9992 21.9155 26.8806 21.7045 26.6697C21.4935 26.4587 21.375 26.1725 21.375 25.8742C21.375 25.5758 21.4935 25.2896 21.7045 25.0787C21.9155 24.8677 22.2016 24.7492 22.5 24.7492H28.125C28.2997 24.7492 28.4719 24.7898 28.6281 24.8679C28.7843 24.946 28.9202 25.0594 29.025 25.1992L35.775 34.1992C35.9004 34.3663 35.9767 34.5651 35.9955 34.7731C36.0142 34.9812 35.9747 35.1904 35.8812 35.3773C35.7878 35.5642 35.6442 35.7213 35.4664 35.8311C35.2887 35.941 35.0839 35.9992 34.875 35.9992H1.125C0.916075 35.9992 0.711276 35.941 0.533553 35.8311C0.35583 35.7213 0.212204 35.5642 0.11877 35.3773C0.0253354 35.1904 -0.0142164 34.9812 0.0045463 34.7731C0.023309 34.5651 0.099645 34.3663 0.225001 34.1992L6.975 25.1992Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18 2.24917C17.1136 2.24917 16.2358 2.42376 15.4169 2.76298C14.5979 3.1022 13.8538 3.5994 13.227 4.2262C12.6002 4.85299 12.103 5.59711 11.7638 6.41605C11.4246 7.235 11.25 8.11274 11.25 8.99917C11.25 9.88559 11.4246 10.7633 11.7638 11.5823C12.103 12.4012 12.6002 13.1453 13.227 13.7721C13.8538 14.3989 14.5979 14.8961 15.4169 15.2354C16.2358 15.5746 17.1136 15.7492 18 15.7492C19.7902 15.7492 21.5071 15.038 22.773 13.7721C24.0388 12.5063 24.75 10.7894 24.75 8.99917C24.75 7.20895 24.0388 5.49207 22.773 4.2262C21.5071 2.96032 19.7902 2.24917 18 2.24917ZM9 8.99917C9.00016 7.26717 9.50008 5.57202 10.4398 4.1171C11.3794 2.66218 12.719 1.5093 14.2976 0.796806C15.8763 0.0843094 17.627 -0.157541 19.3397 0.100274C21.0524 0.358088 22.6543 1.10462 23.9533 2.25028C25.2522 3.39595 26.193 4.89208 26.6627 6.55916C27.1324 8.22624 27.1111 9.99345 26.6014 11.6487C26.0917 13.304 25.1151 14.7771 23.789 15.8911C22.4628 17.0052 20.8434 17.7129 19.125 17.9294V30.3742C19.125 30.6725 19.0065 30.9587 18.7955 31.1697C18.5845 31.3806 18.2984 31.4992 18 31.4992C17.7016 31.4992 17.4155 31.3806 17.2045 31.1697C16.9935 30.9587 16.875 30.6725 16.875 30.3742V17.9317C14.6992 17.6575 12.6983 16.5984 11.2482 14.9532C9.79817 13.308 8.9987 11.1899 9 8.99692V8.99917Z'
  })),
  'info-box': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M31.5 2.25C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V31.5C33.75 32.0967 33.5129 32.669 33.091 33.091C32.669 33.5129 32.0967 33.75 31.5 33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H31.5ZM4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5V4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M13.5 25.875C13.5 25.5766 13.6185 25.2905 13.8295 25.0795C14.0405 24.8685 14.3266 24.75 14.625 24.75H21.375C21.6734 24.75 21.9595 24.8685 22.1705 25.0795C22.3815 25.2905 22.5 25.5766 22.5 25.875C22.5 26.1734 22.3815 26.4595 22.1705 26.6705C21.9595 26.8815 21.6734 27 21.375 27H14.625C14.3266 27 14.0405 26.8815 13.8295 26.6705C13.6185 26.4595 13.5 26.1734 13.5 25.875ZM9 19.125C9 18.8266 9.11853 18.5405 9.3295 18.3295C9.54048 18.1185 9.82663 18 10.125 18H25.875C26.1734 18 26.4595 18.1185 26.6705 18.3295C26.8815 18.5405 27 18.8266 27 19.125C27 19.4234 26.8815 19.7095 26.6705 19.9205C26.4595 20.1315 26.1734 20.25 25.875 20.25H10.125C9.82663 20.25 9.54048 20.1315 9.3295 19.9205C9.11853 19.7095 9 19.4234 9 19.125ZM4.5 12.375C4.5 12.0766 4.61853 11.7905 4.82951 11.5795C5.04048 11.3685 5.32663 11.25 5.625 11.25H30.375C30.6734 11.25 30.9595 11.3685 31.1705 11.5795C31.3815 11.7905 31.5 12.0766 31.5 12.375C31.5 12.6734 31.3815 12.9595 31.1705 13.1705C30.9595 13.3815 30.6734 13.5 30.375 13.5H5.625C5.32663 13.5 5.04048 13.3815 4.82951 13.1705C4.61853 12.9595 4.5 12.6734 4.5 12.375Z'
  })),
  'post-carousel': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M31.5 2.25C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V31.5C33.75 32.0967 33.5129 32.669 33.091 33.091C32.669 33.5129 32.0967 33.75 31.5 33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H31.5ZM4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5V4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.4215 10.4535C15.5263 10.558 15.6094 10.6821 15.6661 10.8188C15.7228 10.9555 15.752 11.102 15.752 11.25C15.752 11.398 15.7228 11.5445 15.6661 11.6812C15.6094 11.8178 15.5263 11.942 15.4215 12.0465L9.46575 18L15.4215 23.9535C15.6327 24.1647 15.7514 24.4513 15.7514 24.75C15.7514 25.0487 15.6327 25.3353 15.4215 25.5465C15.2103 25.7577 14.9237 25.8764 14.625 25.8764C14.3263 25.8764 14.0397 25.7577 13.8285 25.5465L7.0785 18.7965C6.97373 18.692 6.89061 18.5678 6.83389 18.4312C6.77718 18.2945 6.74799 18.148 6.74799 18C6.74799 17.852 6.77718 17.7055 6.83389 17.5688C6.89061 17.4321 6.97373 17.308 7.0785 17.2035L13.8285 10.4535C13.933 10.3487 14.0571 10.2656 14.1938 10.2089C14.3305 10.1522 14.477 10.123 14.625 10.123C14.773 10.123 14.9195 10.1522 15.0562 10.2089C15.1928 10.2656 15.317 10.3487 15.4215 10.4535ZM20.5785 10.4535C20.4737 10.558 20.3906 10.6821 20.3339 10.8188C20.2772 10.9555 20.248 11.102 20.248 11.25C20.248 11.398 20.2772 11.5445 20.3339 11.6812C20.3906 11.8178 20.4737 11.942 20.5785 12.0465L26.5342 18L20.5785 23.9535C20.3673 24.1647 20.2486 24.4513 20.2486 24.75C20.2486 25.0487 20.3673 25.3353 20.5785 25.5465C20.7897 25.7577 21.0763 25.8764 21.375 25.8764C21.6737 25.8764 21.9603 25.7577 22.1715 25.5465L28.9215 18.7965C29.0263 18.692 29.1094 18.5678 29.1661 18.4312C29.2228 18.2945 29.252 18.148 29.252 18C29.252 17.852 29.2228 17.7055 29.1661 17.5688C29.1094 17.4321 29.0263 17.308 28.9215 17.2035L22.1715 10.4535C22.067 10.3487 21.9428 10.2656 21.8062 10.2089C21.6695 10.1522 21.523 10.123 21.375 10.123C21.227 10.123 21.0805 10.1522 20.9438 10.2089C20.8071 10.2656 20.683 10.3487 20.5785 10.4535Z'
  })),
  'post-masonry': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 32,
    viewBox: '0 0 36 32',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H33.75C34.3467 0 34.919 0.237053 35.341 0.65901C35.7629 1.08097 36 1.65326 36 2.25V29.25C36 29.8467 35.7629 30.419 35.341 30.841C34.919 31.2629 34.3467 31.5 33.75 31.5H2.25C1.65326 31.5 1.08097 31.2629 0.65901 30.841C0.237053 30.419 0 29.8467 0 29.25V2.25ZM19.125 2.25V20.25H33.75V2.25H19.125ZM19.125 22.5V29.25H33.75V22.5H19.125ZM16.875 2.25H2.25V9H16.875V2.25ZM2.25 29.25H16.875V11.25H2.25V29.25Z'
  })),
  'post-grid': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 32,
    height: 32,
    viewBox: '0 0 32 32',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L29 0C29.7956 0 30.5587 0.31607 31.1213 0.87868C31.6839 1.44129 32 2.20435 32 3V29C32 29.7956 31.6839 30.5587 31.1213 31.1213C30.5587 31.6839 29.7956 32 29 32H3C2.20435 32 1.44129 31.6839 0.87868 31.1213C0.31607 30.5587 0 29.7956 0 29L0 3ZM3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10H10V2H3ZM10 12H2V20H10V12ZM12 20H20V12H12V20ZM10 22H2V29C2 29.2652 2.10536 29.5196 2.29289 29.7071C2.48043 29.8946 2.73478 30 3 30H10V22ZM12 22V30H20V22H12ZM22 22V30H29C29.2652 30 29.5196 29.8946 29.7071 29.7071C29.8946 29.5196 30 29.2652 30 29V22H22ZM22 20H30V12H22V20ZM22 10H30V3C30 2.73478 29.8946 2.48043 29.7071 2.29289C29.5196 2.10536 29.2652 2 29 2H22V10ZM20 10V2H12V10H20Z'
  })),
  'post-title': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM1.381 7.588h4.825v4.825h-4.825v-4.825zM7.588 7.588h4.825v4.825h-4.825v-4.825zM12.413 1.381v4.825h-4.825v-4.825h4.825zM6.206 1.381v4.825h-4.825v-4.825h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-4.826h4.825v4.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z'
  })),
  testimonial: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 35,
    viewBox: '0 0 36 35',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M31.5 2.25C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V22.5C33.75 23.0967 33.5129 23.669 33.091 24.091C32.669 24.5129 32.0967 24.75 31.5 24.75H25.875C25.1764 24.75 24.4874 24.9127 23.8625 25.2251C23.2377 25.5375 22.6942 25.9911 22.275 26.55L18 32.2493L13.725 26.55C13.3058 25.9911 12.7623 25.5375 12.1375 25.2251C11.5126 24.9127 10.8236 24.75 10.125 24.75H4.5C3.90326 24.75 3.33097 24.5129 2.90901 24.091C2.48705 23.669 2.25 23.0967 2.25 22.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H31.5ZM4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 22.5C0 23.6935 0.474106 24.8381 1.31802 25.682C2.16193 26.5259 3.30653 27 4.5 27H10.125C10.4743 27 10.8188 27.0813 11.1312 27.2375C11.4437 27.3938 11.7154 27.6206 11.925 27.9L16.2 33.5993C16.4096 33.8787 16.6813 34.1055 16.9938 34.2617C17.3062 34.4179 17.6507 34.4993 18 34.4993C18.3493 34.4993 18.6938 34.4179 19.0062 34.2617C19.3187 34.1055 19.5904 33.8787 19.8 33.5993L24.075 27.9C24.2846 27.6206 24.5563 27.3938 24.8688 27.2375C25.1812 27.0813 25.5257 27 25.875 27H31.5C32.6935 27 33.8381 26.5259 34.682 25.682C35.5259 24.8381 36 23.6935 36 22.5V4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.8985 10.71C15.4602 10.0275 14.8122 9.50561 14.052 9.22288C13.2917 8.94016 12.4602 8.91183 11.6824 9.14217C10.9047 9.3725 10.2227 9.84905 9.73896 10.5002C9.25524 11.1513 8.99593 11.9419 9 12.753C9.0004 13.4247 9.18118 14.084 9.52344 14.6619C9.86571 15.2399 10.3569 15.7153 10.9457 16.0386C11.5345 16.3619 12.1993 16.5211 12.8707 16.4996C13.542 16.4781 14.1953 16.2767 14.7623 15.9165C14.4675 16.7917 13.9185 17.7255 13.014 18.6615C12.8409 18.8405 12.7461 19.081 12.7503 19.3299C12.7545 19.5789 12.8575 19.8159 13.0365 19.989C13.2155 20.1621 13.456 20.2569 13.7049 20.2527C13.9539 20.2485 14.1909 20.1455 14.364 19.9665C17.7075 16.5015 17.2733 12.735 15.8985 10.7145V10.71ZM24.8985 10.71C24.4602 10.0275 23.8122 9.50561 23.052 9.22288C22.2917 8.94016 21.4602 8.91183 20.6824 9.14217C19.9047 9.3725 19.2227 9.84905 18.739 10.5002C18.2552 11.1513 17.9959 11.9419 18 12.753C18.0004 13.4247 18.1812 14.084 18.5234 14.6619C18.8657 15.2399 19.3569 15.7153 19.9457 16.0386C20.5345 16.3619 21.1993 16.5211 21.8707 16.4996C22.542 16.4781 23.1953 16.2767 23.7623 15.9165C23.4675 16.7917 22.9185 17.7255 22.014 18.6615C21.841 18.8405 21.7461 19.081 21.7503 19.3299C21.7545 19.5789 21.8575 19.8159 22.0365 19.989C22.2155 20.1621 22.456 20.2569 22.7049 20.2527C22.9539 20.2485 23.1909 20.1455 23.364 19.9665C26.7075 16.5015 26.2733 12.735 24.8985 10.7145V10.71Z'
  })),
  cf7_styler: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 2.969v14.063h20v-14.063h-20zM18.828 15.859h-17.656v-11.719h17.656v11.719z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.758 13.516h5.898v1.172h-5.898v-1.172z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.758 11.172h5.898v1.172h-5.898v-1.172z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.758 8.828h5.898v1.172h-5.898v-1.172z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.758 6.484h3.555v1.172h-3.555v-1.172z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M16.484 6.484h1.172v1.172h-1.172v-1.172z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M8.386 10.468c0.629-0.538 1.028-1.336 1.028-2.226 0-1.615-1.314-2.93-2.93-2.93s-2.93 1.314-2.93 2.93c0 0.89 0.4 1.688 1.028 2.226-1.307 0.687-2.2 2.057-2.2 3.633v0.586h8.203v-0.586c0-1.576-0.893-2.947-2.2-3.633zM6.484 6.484c0.969 0 1.758 0.789 1.758 1.758s-0.789 1.758-1.758 1.758-1.758-0.789-1.758-1.758 0.789-1.758 1.758-1.758zM3.614 13.516c0.272-1.336 1.456-2.344 2.871-2.344s2.599 1.008 2.871 2.344h-5.742z'
  })),
  gf_styler: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 100 100'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M20.509,26.661H38.2c1.783,0,3.229-1.447,3.229-3.226c0-1.784-1.447-3.227-3.229-3.227H20.509 c-1.783,0-3.229,1.443-3.229,3.227C17.28,25.214,18.726,26.661,20.509,26.661L20.509,26.661z M20.509,26.661'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M20.509,38.465h41.285c1.78,0,3.229-1.442,3.229-3.223c0-1.783-1.449-3.227-3.229-3.227H20.509 c-1.783,0-3.229,1.444-3.229,3.227C17.28,37.022,18.726,38.465,20.509,38.465L20.509,38.465z M20.509,38.465'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M38.2,49.727H20.509c-1.783,0-3.229,1.443-3.229,3.227c0,1.78,1.446,3.224,3.229,3.224H38.2 c1.783,0,3.229-1.443,3.229-3.224C41.429,51.17,39.982,49.727,38.2,49.727L38.2,49.727z M38.2,49.727'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M92.334,14.48c-1.304-0.447-2.744-0.014-3.593,1.071l-6.021,7.754V5.723c0-1.778-1.446-3.223-3.23-3.223H8.71 c-1.783,0-3.226,1.445-3.226,3.223v88.552c0,1.78,1.443,3.226,3.226,3.226h70.78c1.784,0,3.23-1.445,3.23-3.226V51.129 l11.088-13.875c0.456-0.57,0.707-1.279,0.707-2.012V17.531C94.516,16.153,93.637,14.928,92.334,14.48L92.334,14.48z M76.267,91.045 h-64.33V8.951h64.33v22.653L47.452,68.679c-1.096,1.409-0.835,3.432,0.568,4.527c0.59,0.457,1.286,0.677,1.975,0.677 c0.962,0,1.915-0.424,2.547-1.241l3.619-4.657h11.534c0.979,0,1.906-0.446,2.518-1.214l6.054-7.572V91.045z M88.062,34.11 L66.144,61.53H61.18l26.882-34.591V34.11z M88.062,34.11'
  })),
  'content-timeline': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M9.375 0h1.25v20h-1.25v-20z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M1.875 3.125h5v2.5h-5v-2.5zM0.625 6.875h7.5v-5h-7.5v5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M1.875 14.592h5v2.5h-5v-2.5zM0.625 18.342h7.5v-5h-7.5v5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18.125 11.25h-5v-2.5h5v2.5zM11.875 7.5v5h7.5v-5h-7.5z'
  })),
  'call-to-action': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M19.304 16.848l-2.352-2.352 1.192-1.192c0.154-0.154 0.224-0.373 0.187-0.588s-0.177-0.398-0.374-0.491l-9.486-4.494c-0.256-0.122-0.561-0.068-0.761 0.132s-0.253 0.505-0.132 0.761l4.494 9.485c0.093 0.197 0.277 0.336 0.492 0.373s0.434-0.033 0.588-0.187l1.192-1.192 2.353 2.352c0.131 0.131 0.303 0.196 0.474 0.196s0.343-0.065 0.474-0.196l1.659-1.659c0.262-0.262 0.262-0.686 0-0.948v0zM17.17 18.033l-2.353-2.352c-0.131-0.131-0.303-0.196-0.474-0.196s-0.343 0.065-0.474 0.196l-0.993 0.993-3.283-6.929 6.929 3.282-0.993 0.994c-0.262 0.262-0.262 0.686 0 0.948l2.352 2.352-0.711 0.711z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M7.645 10.992h-5.804v-9.303h9.303v6.647c0 0.37 0.3 0.671 0.671 0.671s0.671-0.3 0.671-0.671v-7.317c0-0.37-0.3-0.671-0.671-0.671h-10.644c-0.37 0-0.671 0.3-0.671 0.671v10.644c0 0.371 0.3 0.671 0.671 0.671h6.474c0.37 0 0.671-0.3 0.671-0.671s-0.3-0.671-0.671-0.671v0z'
  })),
  'post-timeline': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M7.048 8.364c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h9.134c0.019 0.001 0.037 0.001 0.056 0 0.286-0.015 0.505-0.26 0.489-0.545v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.016-0.286-0.26-0.505-0.545-0.489h-9.134c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453zM8.138 3.456h8.044v4.363h-8.044v-4.363z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M19.999 17.089v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.015-0.286-0.26-0.505-0.545-0.489h-11.861c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h11.861c0.019 0.001 0.037 0.001 0.056 0 0.286-0.016 0.505-0.26 0.489-0.546zM18.909 16.544h-10.77v-4.363h10.77v4.363z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M4.754 4.795c-0.286-1.279-1.554-2.083-2.833-1.797-1.083 0.242-1.853 1.203-1.854 2.312-0.028 1.102 0.725 2.071 1.8 2.318v4.417c-1.28 0.279-2.091 1.543-1.812 2.823 0.198 0.906 0.906 1.614 1.812 1.812h1.091c1.080-0.245 1.841-1.211 1.827-2.318 0.014-1.107-0.747-2.073-1.827-2.318v-4.417c1.279-0.286 2.083-1.555 1.797-2.833zM3.722 14.362c0 0.708-0.573 1.282-1.281 1.282-0 0-0.001 0-0.002 0-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.282c0.708-0.001 1.282 0.573 1.282 1.281zM2.44 6.592c-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.281c0.712-0 1.294 0.569 1.309 1.281-0.015 0.712-0.597 1.282-1.309 1.281z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M9.229 5.365h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.091 5.91h-5.862c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.546 0.545 0.546h5.863c0.301 0 0.545-0.244 0.545-0.546s-0.245-0.545-0.546-0.545z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M9.229 14.090h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M9.229 15.726h5.863c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-5.863c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z'
  })),
  'icon-list': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 32,
    height: 23,
    viewBox: '0 0 32 23',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M9 20.25C9 19.9516 9.11853 19.6655 9.3295 19.4545C9.54048 19.2435 9.82663 19.125 10.125 19.125H30.375C30.6734 19.125 30.9595 19.2435 31.1705 19.4545C31.3815 19.6655 31.5 19.9516 31.5 20.25C31.5 20.5484 31.3815 20.8345 31.1705 21.0455C30.9595 21.2565 30.6734 21.375 30.375 21.375H10.125C9.82663 21.375 9.54048 21.2565 9.3295 21.0455C9.11853 20.8345 9 20.5484 9 20.25ZM9 11.25C9 10.9516 9.11853 10.6655 9.3295 10.4545C9.54048 10.2435 9.82663 10.125 10.125 10.125H30.375C30.6734 10.125 30.9595 10.2435 31.1705 10.4545C31.3815 10.6655 31.5 10.9516 31.5 11.25C31.5 11.5484 31.3815 11.8345 31.1705 12.0455C30.9595 12.2565 30.6734 12.375 30.375 12.375H10.125C9.82663 12.375 9.54048 12.2565 9.3295 12.0455C9.11853 11.8345 9 11.5484 9 11.25ZM9 2.25C9 1.95163 9.11853 1.66548 9.3295 1.45451C9.54048 1.24353 9.82663 1.125 10.125 1.125H30.375C30.6734 1.125 30.9595 1.24353 31.1705 1.45451C31.3815 1.66548 31.5 1.95163 31.5 2.25C31.5 2.54837 31.3815 2.83452 31.1705 3.0455C30.9595 3.25647 30.6734 3.375 30.375 3.375H10.125C9.82663 3.375 9.54048 3.25647 9.3295 3.0455C9.11853 2.83452 9 2.54837 9 2.25ZM2.25 4.5C2.84674 4.5 3.41903 4.26295 3.84099 3.84099C4.26295 3.41903 4.5 2.84674 4.5 2.25C4.5 1.65326 4.26295 1.08097 3.84099 0.65901C3.41903 0.237053 2.84674 0 2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25C0 2.84674 0.237053 3.41903 0.65901 3.84099C1.08097 4.26295 1.65326 4.5 2.25 4.5ZM2.25 13.5C2.84674 13.5 3.41903 13.2629 3.84099 12.841C4.26295 12.419 4.5 11.8467 4.5 11.25C4.5 10.6533 4.26295 10.081 3.84099 9.65901C3.41903 9.23705 2.84674 9 2.25 9C1.65326 9 1.08097 9.23705 0.65901 9.65901C0.237053 10.081 0 10.6533 0 11.25C0 11.8467 0.237053 12.419 0.65901 12.841C1.08097 13.2629 1.65326 13.5 2.25 13.5ZM2.25 22.5C2.84674 22.5 3.41903 22.2629 3.84099 21.841C4.26295 21.419 4.5 20.8467 4.5 20.25C4.5 19.6533 4.26295 19.081 3.84099 18.659C3.41903 18.2371 2.84674 18 2.25 18C1.65326 18 1.08097 18.2371 0.65901 18.659C0.237053 19.081 0 19.6533 0 20.25C0 20.8467 0.237053 21.419 0.65901 21.841C1.08097 22.2629 1.65326 22.5 2.25 22.5Z'
  })),
  icon_list_child: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18.069 4.961c0 0.444-0.36 0.805-0.805 0.805h-10.792c-0.446 0-0.807-0.361-0.807-0.805s0.36-0.806 0.807-0.806h10.792c0.445 0.001 0.805 0.362 0.805 0.806z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18.069 10.017c0 0.445-0.36 0.805-0.805 0.805h-10.792c-0.446 0-0.807-0.359-0.807-0.805s0.36-0.806 0.807-0.806h10.792c0.445 0 0.805 0.36 0.805 0.806z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18.069 15.071c0 0.444-0.36 0.805-0.805 0.805h-10.792c-0.446 0-0.807-0.36-0.807-0.805s0.36-0.805 0.807-0.805h10.792c0.445 0.001 0.805 0.361 0.805 0.805z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M4.093 15.009c0 0.597-0.484 1.081-1.081 1.081s-1.081-0.484-1.081-1.081c0-0.597 0.484-1.081 1.081-1.081s1.081 0.484 1.081 1.081z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M4.093 10.017c0 0.597-0.484 1.081-1.081 1.081s-1.081-0.484-1.081-1.081c0-0.597 0.484-1.081 1.081-1.081s1.081 0.484 1.081 1.081z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M4.093 5.024c0 0.597-0.484 1.081-1.081 1.081s-1.081-0.484-1.081-1.081c0-0.597 0.484-1.081 1.081-1.081s1.081 0.484 1.081 1.081z'
  })),
  team: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 27,
    viewBox: '0 0 36 27'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M33.75 27C33.75 27 36 27 36 24.75C36 22.5 33.75 15.75 24.75 15.75C15.75 15.75 13.5 22.5 13.5 24.75C13.5 27 15.75 27 15.75 27H33.75ZM15.7995 24.75C15.7829 24.7477 15.7664 24.7447 15.75 24.741C15.7522 24.147 16.1257 22.4235 17.46 20.871C18.702 19.4153 20.8845 18 24.75 18C28.6133 18 30.7957 19.4175 32.04 20.871C33.3742 22.4235 33.7455 24.1493 33.75 24.741L33.732 24.7455C33.7215 24.7473 33.711 24.7488 33.7005 24.75H15.7995ZM24.75 11.25C25.9435 11.25 27.0881 10.7759 27.932 9.93198C28.7759 9.08807 29.25 7.94347 29.25 6.75C29.25 5.55653 28.7759 4.41193 27.932 3.56802C27.0881 2.72411 25.9435 2.25 24.75 2.25C23.5565 2.25 22.4119 2.72411 21.568 3.56802C20.7241 4.41193 20.25 5.55653 20.25 6.75C20.25 7.94347 20.7241 9.08807 21.568 9.93198C22.4119 10.7759 23.5565 11.25 24.75 11.25ZM31.5 6.75C31.5 7.63642 31.3254 8.51417 30.9862 9.33311C30.647 10.1521 30.1498 10.8962 29.523 11.523C28.8962 12.1498 28.1521 12.647 27.3331 12.9862C26.5142 13.3254 25.6364 13.5 24.75 13.5C23.8636 13.5 22.9858 13.3254 22.1669 12.9862C21.3479 12.647 20.6038 12.1498 19.977 11.523C19.3502 10.8962 18.853 10.1521 18.5138 9.33311C18.1746 8.51417 18 7.63642 18 6.75C18 4.95979 18.7112 3.2429 19.977 1.97703C21.2429 0.711159 22.9598 0 24.75 0C26.5402 0 28.2571 0.711159 29.523 1.97703C30.7888 3.2429 31.5 4.95979 31.5 6.75ZM15.606 16.38C14.706 16.0966 13.7782 15.9103 12.8385 15.8243C12.3105 15.774 11.7804 15.7493 11.25 15.75C2.25 15.75 0 22.5 0 24.75C0 26.2507 0.74925 27 2.25 27H11.736C11.4024 26.2976 11.2361 25.5275 11.25 24.75C11.25 22.4775 12.0983 20.1555 13.7025 18.216C14.2493 17.5545 14.886 16.9357 15.606 16.38ZM11.07 18C9.73835 20.0009 9.01899 22.3466 9 24.75H2.25C2.25 24.165 2.619 22.4325 3.96 20.871C5.18625 19.44 7.317 18.045 11.07 18.0023V18ZM3.375 7.875C3.375 6.08479 4.08616 4.3679 5.35203 3.10203C6.6179 1.83616 8.33479 1.125 10.125 1.125C11.9152 1.125 13.6321 1.83616 14.898 3.10203C16.1638 4.3679 16.875 6.08479 16.875 7.875C16.875 9.66521 16.1638 11.3821 14.898 12.648C13.6321 13.9138 11.9152 14.625 10.125 14.625C8.33479 14.625 6.6179 13.9138 5.35203 12.648C4.08616 11.3821 3.375 9.66521 3.375 7.875ZM10.125 3.375C8.93153 3.375 7.78693 3.84911 6.94302 4.69302C6.09911 5.53693 5.625 6.68153 5.625 7.875C5.625 9.06847 6.09911 10.2131 6.94302 11.057C7.78693 11.9009 8.93153 12.375 10.125 12.375C11.3185 12.375 12.4631 11.9009 13.307 11.057C14.1509 10.2131 14.625 9.06847 14.625 7.875C14.625 6.68153 14.1509 5.53693 13.307 4.69302C12.4631 3.84911 11.3185 3.375 10.125 3.375Z'
  })),
  tabs: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 34,
    viewBox: '0 0 36 34'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 3.375C0 2.47989 0.355579 1.62145 0.988515 0.988515C1.62145 0.355579 2.47989 0 3.375 0L21.375 0C22.2701 0 23.1286 0.355579 23.7615 0.988515C24.3944 1.62145 24.75 2.47989 24.75 3.375V7.875C24.75 8.77011 24.3944 9.62855 23.7615 10.2615C23.1286 10.8944 22.2701 11.25 21.375 11.25H3.375C2.47989 11.25 1.62145 10.8944 0.988515 10.2615C0.355579 9.62855 0 8.77011 0 7.875L0 3.375ZM3.375 2.25C3.07663 2.25 2.79048 2.36853 2.5795 2.5795C2.36853 2.79048 2.25 3.07663 2.25 3.375V7.875C2.25 8.17337 2.36853 8.45952 2.5795 8.67049C2.79048 8.88147 3.07663 9 3.375 9H21.375C21.6734 9 21.9595 8.88147 22.1705 8.67049C22.3815 8.45952 22.5 8.17337 22.5 7.875V3.375C22.5 3.07663 22.3815 2.79048 22.1705 2.5795C21.9595 2.36853 21.6734 2.25 21.375 2.25H3.375Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M17.6017 6.35175L16.7108 5.46075C16.6319 5.38208 16.5781 5.28176 16.5564 5.17252C16.5346 5.06327 16.5457 4.95001 16.5884 4.8471C16.631 4.7442 16.7033 4.65627 16.796 4.59448C16.8887 4.53268 16.9976 4.4998 17.109 4.5H18.891C19.0024 4.4998 19.1113 4.53268 19.204 4.59448C19.2967 4.65627 19.369 4.7442 19.4116 4.8471C19.4543 4.95001 19.4654 5.06327 19.4436 5.17252C19.4219 5.28176 19.3681 5.38208 19.2892 5.46075L18.3983 6.35175C18.346 6.40413 18.2839 6.4457 18.2156 6.47405C18.1472 6.50241 18.074 6.51701 18 6.51701C17.926 6.51701 17.8528 6.50241 17.7844 6.47405C17.7161 6.4457 17.654 6.40413 17.6017 6.35175V6.35175ZM0 18C0 16.8065 0.474106 15.6619 1.31802 14.818C2.16193 13.9741 3.30653 13.5 4.5 13.5H31.5C32.6935 13.5 33.8381 13.9741 34.682 14.818C35.5259 15.6619 36 16.8065 36 18V29.25C36 30.4435 35.5259 31.5881 34.682 32.432C33.8381 33.2759 32.6935 33.75 31.5 33.75H4.5C3.30653 33.75 2.16193 33.2759 1.31802 32.432C0.474106 31.5881 0 30.4435 0 29.25V18ZM2.25 24.75V29.25C2.25 29.8467 2.48705 30.419 2.90901 30.841C3.33097 31.2629 3.90326 31.5 4.5 31.5H31.5C32.0967 31.5 32.669 31.2629 33.091 30.841C33.5129 30.419 33.75 29.8467 33.75 29.25V24.75H2.25ZM33.75 22.5V18C33.75 17.4033 33.5129 16.831 33.091 16.409C32.669 15.9871 32.0967 15.75 31.5 15.75H4.5C3.90326 15.75 3.33097 15.9871 2.90901 16.409C2.48705 16.831 2.25 17.4033 2.25 18V22.5H33.75ZM4.5 19.125C4.5 18.8266 4.61853 18.5405 4.82951 18.3295C5.04048 18.1185 5.32663 18 5.625 18H25.875C26.1734 18 26.4595 18.1185 26.6705 18.3295C26.8815 18.5405 27 18.8266 27 19.125C27 19.4234 26.8815 19.7095 26.6705 19.9205C26.4595 20.1315 26.1734 20.25 25.875 20.25H5.625C5.32663 20.25 5.04048 20.1315 4.82951 19.9205C4.61853 19.7095 4.5 19.4234 4.5 19.125ZM4.5 28.125C4.5 27.8266 4.61853 27.5405 4.82951 27.3295C5.04048 27.1185 5.32663 27 5.625 27H19.125C19.4234 27 19.7095 27.1185 19.9205 27.3295C20.1315 27.5405 20.25 27.8266 20.25 28.125C20.25 28.4234 20.1315 28.7095 19.9205 28.9205C19.7095 29.1315 19.4234 29.25 19.125 29.25H5.625C5.32663 29.25 5.04048 29.1315 4.82951 28.9205C4.61853 28.7095 4.5 28.4234 4.5 28.125Z'
  })),
  'social-share': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 37,
    viewBox: '0 0 36 37'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M30.3756 2.25071C29.4805 2.25071 28.622 2.60629 27.9891 3.23922C27.3562 3.87216 27.0006 4.7306 27.0006 5.62571C27.0006 6.52081 27.3562 7.37926 27.9891 8.01219C28.622 8.64513 29.4805 9.0007 30.3756 9.0007C31.2707 9.0007 32.1292 8.64513 32.7621 8.01219C33.395 7.37926 33.7506 6.52081 33.7506 5.62571C33.7506 4.7306 33.395 3.87216 32.7621 3.23922C32.1292 2.60629 31.2707 2.25071 30.3756 2.25071ZM24.7506 5.62571C24.7504 4.30593 25.2143 3.02812 26.0612 2.01583C26.908 1.00355 28.0838 0.321249 29.3828 0.088315C30.6819 -0.144619 32.0215 0.0866416 33.1672 0.741637C34.313 1.39663 35.192 2.43365 35.6504 3.67126C36.1088 4.90887 36.1174 6.26826 35.6748 7.51159C35.2321 8.75493 34.3664 9.80303 33.2291 10.4725C32.0917 11.142 30.7551 11.3903 29.4532 11.1739C28.1513 10.9575 26.967 10.2902 26.1073 9.2887L10.9918 16.3087C11.3393 17.4099 11.3393 18.5915 10.9918 19.6927L26.1073 26.7127C27.016 25.6559 28.2846 24.9741 29.6673 24.7994C31.05 24.6247 32.4483 24.9695 33.5913 25.767C34.7342 26.5645 35.5404 27.7579 35.8536 29.116C36.1668 30.474 35.9647 31.9 35.2864 33.1175C34.6082 34.335 33.5021 35.2574 32.1825 35.7059C30.863 36.1543 29.4239 36.097 28.1442 35.5449C26.8646 34.9928 25.8354 33.9853 25.2562 32.7177C24.677 31.45 24.5891 30.0125 25.0093 28.6837L9.89385 21.6637C9.14558 22.5357 8.14819 23.1577 7.03585 23.4459C5.92351 23.7341 4.74959 23.6747 3.67201 23.2758C2.59442 22.8768 1.66487 22.1574 1.00839 21.2143C0.351909 20.2713 0 19.1498 0 18.0007C0 16.8516 0.351909 15.7301 1.00839 14.7871C1.66487 13.844 2.59442 13.1246 3.67201 12.7256C4.74959 12.3267 5.92351 12.2673 7.03585 12.5555C8.14819 12.8437 9.14558 13.4657 9.89385 14.3377L25.0093 7.31771C24.8373 6.77021 24.75 6.1996 24.7506 5.62571ZM5.6256 14.6257C4.73049 14.6257 3.87205 14.9813 3.23911 15.6142C2.60618 16.2472 2.2506 17.1056 2.2506 18.0007C2.2506 18.8958 2.60618 19.7543 3.23911 20.3872C3.87205 21.0201 4.73049 21.3757 5.6256 21.3757C6.5207 21.3757 7.37915 21.0201 8.01208 20.3872C8.64502 19.7543 9.0006 18.8958 9.0006 18.0007C9.0006 17.1056 8.64502 16.2472 8.01208 15.6142C7.37915 14.9813 6.5207 14.6257 5.6256 14.6257ZM30.3756 27.0007C29.4805 27.0007 28.622 27.3563 27.9891 27.9892C27.3562 28.6221 27.0006 29.4806 27.0006 30.3757C27.0006 31.2708 27.3562 32.1292 27.9891 32.7622C28.622 33.3951 29.4805 33.7507 30.3756 33.7507C31.2707 33.7507 32.1292 33.3951 32.7621 32.7622C33.395 32.1292 33.7506 31.2708 33.7506 30.3757C33.7506 29.4806 33.395 28.6221 32.7621 27.9892C32.1292 27.3563 31.2707 27.0007 30.3756 27.0007Z'
  })),
  social_share_child: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M13.717 11.663c-0.79 0-1.498 0.36-1.968 0.926l-3.055-1.734c0.096-0.268 0.148-0.554 0.148-0.854s-0.052-0.586-0.148-0.854l3.055-1.735c0.47 0.565 1.178 0.927 1.968 0.927 1.41 0 2.557-1.147 2.557-2.559 0-1.41-1.146-2.558-2.557-2.558s-2.558 1.147-2.558 2.558c0 0.3 0.053 0.588 0.147 0.854l-3.055 1.736c-0.468-0.566-1.177-0.927-1.967-0.927-1.411 0-2.558 1.147-2.558 2.558s1.147 2.558 2.558 2.558c0.79 0 1.499-0.359 1.967-0.926l3.055 1.734c-0.095 0.268-0.147 0.556-0.147 0.855 0 1.409 1.147 2.557 2.558 2.557s2.557-1.147 2.557-2.557c-0.001-1.411-1.147-2.559-2.557-2.559zM13.717 4.116c0.917 0 1.663 0.746 1.663 1.663s-0.746 1.663-1.663 1.663c-0.916 0-1.662-0.745-1.662-1.663 0-0.917 0.746-1.663 1.662-1.663zM6.285 11.663c-0.917 0-1.663-0.746-1.663-1.663 0-0.916 0.746-1.662 1.663-1.662s1.663 0.746 1.663 1.662c-0.001 0.917-0.747 1.663-1.663 1.663zM13.717 15.884c-0.916 0-1.662-0.746-1.662-1.662 0-0.918 0.746-1.664 1.662-1.664s1.663 0.746 1.663 1.664c0 0.916-0.746 1.662-1.663 1.662z'
  })),
  'restaurant-menu': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M12.375 21.3997C12.546 23.5462 14.2425 25.218 17.2845 25.416V27H18.6345V25.4048C21.7845 25.1842 23.625 23.5013 23.625 21.0578C23.625 18.837 22.2165 17.6917 19.6988 17.0977L18.6345 16.8457V12.5325C19.9845 12.6855 20.844 13.4235 21.051 14.445H23.418C23.247 12.3773 21.474 10.7595 18.6345 10.584V9H17.2845V10.6177C14.5958 10.881 12.762 12.4988 12.762 14.787C12.762 16.812 14.1255 18.099 16.3912 18.6278L17.2845 18.8482V23.4248C15.9008 23.2155 14.985 22.4572 14.778 21.3997H12.375ZM17.2733 16.5262C15.9458 16.218 15.2258 15.5902 15.2258 14.6452C15.2258 13.5877 16.002 12.7958 17.2845 12.564V16.524H17.2733V16.5262ZM18.8303 19.2105C20.4435 19.584 21.1882 20.1892 21.1882 21.258C21.1882 22.4775 20.2612 23.3145 18.6345 23.4675V19.1655L18.8303 19.2105Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18 33.75C13.8228 33.75 9.81677 32.0906 6.86307 29.1369C3.90937 26.1832 2.25 22.1772 2.25 18C2.25 13.8228 3.90937 9.81677 6.86307 6.86307C9.81677 3.90937 13.8228 2.25 18 2.25C22.1772 2.25 26.1832 3.90937 29.1369 6.86307C32.0906 9.81677 33.75 13.8228 33.75 18C33.75 22.1772 32.0906 26.1832 29.1369 29.1369C26.1832 32.0906 22.1772 33.75 18 33.75ZM18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M18 30.375C14.7179 30.375 11.5703 29.0712 9.24955 26.7504C6.92879 24.4297 5.625 21.2821 5.625 18C5.625 14.7179 6.92879 11.5703 9.24955 9.24955C11.5703 6.92879 14.7179 5.625 18 5.625C21.2821 5.625 24.4297 6.92879 26.7504 9.24955C29.0712 11.5703 30.375 14.7179 30.375 18C30.375 21.2821 29.0712 24.4297 26.7504 26.7504C24.4297 29.0712 21.2821 30.375 18 30.375ZM18 31.5C19.7728 31.5 21.5283 31.1508 23.1662 30.4724C24.8041 29.7939 26.2924 28.7995 27.5459 27.5459C28.7995 26.2924 29.7939 24.8041 30.4724 23.1662C31.1508 21.5283 31.5 19.7728 31.5 18C31.5 16.2272 31.1508 14.4717 30.4724 12.8338C29.7939 11.1959 28.7995 9.70765 27.5459 8.45406C26.2924 7.20047 24.8041 6.20606 23.1662 5.52763C21.5283 4.84919 19.7728 4.5 18 4.5C14.4196 4.5 10.9858 5.92232 8.45406 8.45406C5.92232 10.9858 4.5 14.4196 4.5 18C4.5 21.5804 5.92232 25.0142 8.45406 27.5459C10.9858 30.0777 14.4196 31.5 18 31.5Z'
  })),
  blockquote: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 34,
    viewBox: '0 0 36 34',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M6.0255 24.5115C6.25904 24.7459 6.438 25.029 6.54962 25.3405C6.66124 25.652 6.70277 25.9843 6.67125 26.3137C6.51312 27.8383 6.21332 29.3448 5.77575 30.8137C8.9145 30.087 10.8315 29.2455 11.7023 28.8045C12.1961 28.5544 12.7649 28.4951 13.2997 28.638C14.833 29.0468 16.4132 29.2525 18 29.25C26.991 29.25 33.75 22.9342 33.75 15.75C33.75 8.568 26.991 2.25 18 2.25C9.009 2.25 2.25 8.568 2.25 15.75C2.25 19.053 3.63825 22.1175 6.0255 24.5115ZM4.91625 33.2977C4.38315 33.4034 3.84833 33.5002 3.312 33.588C2.862 33.66 2.52 33.192 2.69775 32.7735C2.89753 32.3023 3.08065 31.8243 3.24675 31.3403L3.2535 31.3177C3.8115 29.6978 4.266 27.8348 4.4325 26.1C1.67175 23.3325 0 19.71 0 15.75C0 7.0515 8.0595 0 18 0C27.9405 0 36 7.0515 36 15.75C36 24.4485 27.9405 31.5 18 31.5C16.2172 31.5024 14.4418 31.2709 12.7192 30.8115C11.5492 31.4032 9.0315 32.481 4.91625 33.2977Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.8985 12.96C15.4602 12.2775 14.8122 11.7556 14.0519 11.4729C13.2917 11.1902 12.4602 11.1618 11.6824 11.3922C10.9046 11.6225 10.2227 12.099 9.73894 12.7502C9.25523 13.4013 8.99592 14.1919 8.99999 15.003C9.00039 15.6747 9.18117 16.334 9.52343 16.9119C9.8657 17.4899 10.3569 17.9653 10.9457 18.2886C11.5345 18.6118 12.1993 18.7711 12.8707 18.7496C13.542 18.7281 14.1953 18.5267 14.7622 18.1665C14.4675 19.0417 13.9185 19.9755 13.014 20.9115C12.8409 21.0905 12.7461 21.331 12.7503 21.5799C12.7524 21.7032 12.7787 21.8248 12.8278 21.9379C12.8769 22.051 12.9478 22.1533 13.0365 22.239C13.1251 22.3247 13.2298 22.3921 13.3445 22.4373C13.4592 22.4826 13.5816 22.5048 13.7049 22.5027C13.9539 22.4985 14.1909 22.3955 14.364 22.2165C17.7075 18.7515 17.2732 14.985 15.8985 12.9645V12.96ZM24.8985 12.96C24.4602 12.2775 23.8122 11.7556 23.0519 11.4729C22.2917 11.1902 21.4602 11.1618 20.6824 11.3922C19.9046 11.6225 19.2227 12.099 18.7389 12.7502C18.2552 13.4013 17.9959 14.1919 18 15.003C18.0004 15.6747 18.1812 16.334 18.5234 16.9119C18.8657 17.4899 19.3569 17.9653 19.9457 18.2886C20.5345 18.6118 21.1993 18.7711 21.8707 18.7496C22.542 18.7281 23.1953 18.5267 23.7622 18.1665C23.4675 19.0417 22.9185 19.9755 22.014 20.9115C21.9283 21.0001 21.8609 21.1048 21.8157 21.2195C21.7704 21.3342 21.7482 21.4566 21.7503 21.5799C21.7524 21.7032 21.7787 21.8248 21.8278 21.9379C21.877 22.051 21.9478 22.1533 22.0365 22.239C22.1251 22.3247 22.2298 22.3921 22.3445 22.4373C22.4592 22.4826 22.5816 22.5048 22.7049 22.5027C22.8282 22.5006 22.9498 22.4742 23.0629 22.4251C23.176 22.376 23.2783 22.3051 23.364 22.2165C26.7075 18.7515 26.2732 14.985 24.8985 12.9645V12.96Z'
  })),
  quote_1: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M15.581 10.226h-15.162c-0.233 0-0.419 0.37-0.419 0.826 0 0.458 0.186 0.828 0.419 0.828h15.161c0.233 0 0.419-0.37 0.419-0.828 0.001-0.455-0.186-0.826-0.418-0.826v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M15.581 14.285h-15.162c-0.233 0-0.419 0.373-0.419 0.827 0 0.458 0.186 0.826 0.419 0.826h15.161c0.233 0 0.419-0.369 0.419-0.826 0.001-0.454-0.186-0.827-0.418-0.827v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M15.581 18.346h-15.162c-0.233 0-0.419 0.37-0.419 0.826 0 0.459 0.186 0.828 0.419 0.828h15.161c0.233 0 0.419-0.369 0.419-0.828 0.001-0.455-0.186-0.826-0.418-0.826v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M9.126 0.595c-0.46 0.465-0.974 1.35-0.835 3.042 0.081 1.319 0.666 3.29 3.048 5.216 0.112 0.090 0.241 0.136 0.38 0.136 0.183 0 0.362-0.086 0.487-0.251 0.214-0.283 0.164-0.683-0.113-0.902-1.935-1.566-2.458-3.105-2.551-4.154 0.274 0.156 0.582 0.258 0.913 0.258 1.045 0 1.89-0.886 1.89-1.972 0-1.088-0.846-1.966-1.89-1.966-0.233 0-0.451 0.062-0.657 0.143l0.004-0.011-0.218 0.101-0.018 0.011-0.007 0.006-0.299 0.214-0.134 0.131z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M4.517 0.595c-0.465 0.465-0.974 1.35-0.841 3.042 0.085 1.319 0.671 3.29 3.049 5.216 0.116 0.090 0.245 0.136 0.383 0.136 0.178 0 0.366-0.086 0.487-0.251 0.214-0.283 0.165-0.683-0.108-0.902-1.939-1.566-2.467-3.105-2.56-4.154 0.278 0.156 0.584 0.258 0.92 0.258 1.046 0 1.885-0.886 1.885-1.972 0-1.088-0.845-1.966-1.885-1.966-0.236 0-0.447 0.062-0.657 0.143l0.010-0.011-0.218 0.101-0.022 0.011-0.009 0.006-0.305 0.214-0.129 0.13z'
  })),
  quote_2: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M4.599 6.686c-0.39 0.397-0.822 1.149-0.705 2.586 0.068 1.123 0.561 2.799 2.561 4.434 0.096 0.080 0.205 0.115 0.321 0.115 0.153 0 0.306-0.071 0.409-0.214 0.181-0.239 0.135-0.58-0.095-0.766-1.626-1.332-2.066-2.639-2.144-3.531 0.231 0.132 0.488 0.218 0.769 0.218 0.874 0 1.587-0.753 1.587-1.677s-0.711-1.672-1.587-1.672c-0.196 0-0.38 0.054-0.552 0.121l0.003-0.010-0.184 0.085-0.016 0.010-0.006 0.006-0.252 0.181-0.109 0.114z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M0.725 6.686c-0.389 0.397-0.821 1.149-0.706 2.586 0.068 1.123 0.562 2.799 2.56 4.434 0.094 0.077 0.204 0.114 0.322 0.114 0.151 0 0.31-0.073 0.409-0.213 0.177-0.239 0.136-0.582-0.090-0.767-1.63-1.332-2.072-2.639-2.149-3.531 0.23 0.132 0.486 0.218 0.772 0.218 0.879 0 1.583-0.753 1.583-1.677s-0.71-1.672-1.583-1.672c-0.199 0-0.378 0.054-0.554 0.121l0.008-0.010-0.184 0.085-0.018 0.010-0.009 0.006-0.253 0.182-0.108 0.114z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M19.25 6.929h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M19.25 10.75h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M19.25 14.571h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z'
  })),
  quote_inline_icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z'
  })),
  quote_tweet_icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 512 512'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
  })),
  at_the_rate: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 30,
    height: 30
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M5.605 17.2c0-2.131 0.499-4.074 1.499-5.829 1-1.754 2.395-3.136 4.19-4.15 1.794-1.013 3.81-1.52 6.046-1.52 2.712 0 4.901 0.773 6.562 2.323 1.662 1.549 2.493 3.589 2.493 6.118 0 2.051-0.542 3.786-1.626 5.202-1.088 1.418-2.304 2.125-3.656 2.125-0.781 0-1.355-0.232-1.717-0.696-0.365-0.462-0.533-1.037-0.506-1.726-1.006 1.614-2.378 2.422-4.11 2.422-1.39 0-2.507-0.539-3.347-1.619-0.842-1.077-1.142-2.442-0.904-4.088 0.237-1.65 0.946-2.982 2.125-4.002 1.179-1.021 2.509-1.53 3.992-1.53s2.638 0.518 3.467 1.558c0.829 1.040 1.122 2.322 0.883 3.843l-0.494 3.2c-0.094 0.739 0.165 1.11 0.77 1.11 0.77 0 1.502-0.56 2.205-1.678 0.701-1.12 1.054-2.493 1.054-4.122 0-2.106-0.656-3.787-1.966-5.046-1.312-1.258-3.133-1.886-5.462-1.886-2.794 0-5.098 0.96-6.91 2.88-1.814 1.92-2.722 4.29-2.722 7.109 0 2.382 0.738 4.227 2.214 5.533 1.477 1.302 3.459 1.989 5.947 2.056l-0.376 1.509c-2.862-0.069-5.184-0.899-6.971-2.494-1.787-1.594-2.68-3.794-2.68-6.602zM19.15 15.85c0.17-1.15-0.014-2.118-0.558-2.899-0.542-0.781-1.28-1.173-2.214-1.173-0.933 0-1.79 0.392-2.571 1.173s-1.259 1.749-1.43 2.899c-0.171 1.152 0.013 2.122 0.557 2.91 0.542 0.787 1.282 1.181 2.214 1.181s1.79-0.394 2.573-1.181c0.781-0.789 1.256-1.758 1.43-2.91z'
  })),
  columns: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 3.375C0 2.47989 0.355579 1.62145 0.988515 0.988515C1.62145 0.355579 2.47989 0 3.375 0L32.625 0C33.5201 0 34.3786 0.355579 35.0115 0.988515C35.6444 1.62145 36 2.47989 36 3.375V32.625C36 33.5201 35.6444 34.3786 35.0115 35.0115C34.3786 35.6444 33.5201 36 32.625 36H3.375C2.47989 36 1.62145 35.6444 0.988515 35.0115C0.355579 34.3786 0 33.5201 0 32.625L0 3.375ZM3.375 2.25C3.07663 2.25 2.79048 2.36853 2.5795 2.5795C2.36853 2.79048 2.25 3.07663 2.25 3.375V32.625C2.25 32.9234 2.36853 33.2095 2.5795 33.4205C2.79048 33.6315 3.07663 33.75 3.375 33.75H11.25V2.25H3.375ZM22.5 33.75V2.25H13.5V33.75H22.5ZM24.75 33.75H32.625C32.9234 33.75 33.2095 33.6315 33.4205 33.4205C33.6315 33.2095 33.75 32.9234 33.75 32.625V3.375C33.75 3.07663 33.6315 2.79048 33.4205 2.5795C33.2095 2.36853 32.9234 2.25 32.625 2.25H24.75V33.75Z'
  })),
  column: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M17.355 0.347h-14.71c-1.143 0-2.069 0.926-2.069 2.069v15.169c0 1.143 0.926 2.069 2.069 2.069h14.709c1.143 0 2.069-0.926 2.069-2.069v-15.169c0-1.142-0.926-2.069-2.068-2.069zM18.504 17.585c0 0.635-0.515 1.149-1.149 1.149h-14.71c-0.635 0-1.149-0.515-1.149-1.149v-15.169c0-0.635 0.514-1.149 1.149-1.149h14.71c0.635 0 1.149 0.515 1.149 1.149v15.169z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M16.665 2.767h-5.516c-0.254 0-0.46 0.206-0.46 0.459v13.546c0 0.254 0.206 0.46 0.46 0.46h5.516c0.254 0 0.46-0.206 0.46-0.46v-13.546c0-0.253-0.206-0.459-0.46-0.459zM16.206 16.313h-4.597v-12.626h4.597v12.626z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M8.851 2.767h-5.516c-0.254 0-0.46 0.206-0.46 0.459v13.546c0 0.254 0.206 0.46 0.46 0.46h5.516c0.254 0 0.46-0.206 0.46-0.46v-13.546c0-0.253-0.206-0.459-0.46-0.459zM8.391 16.313h-4.597v-12.626h4.597v12.626z'
  })),
  top_align: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M1.5 0.438v2.125h17v-2.125h-17zM5.75 8.938h3.188v10.625h2.125v-10.625h3.187l-4.25-4.25-4.25 4.25z'
  })),
  middle_align: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M18.5 11.063v-2.125h-17v2.125h17z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M12.707 3.519l-2.707-2.707-2.707 2.707h2.030v4.368h1.354v-4.368h2.030z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M7.293 16.48l2.707 2.707 2.707-2.707h-2.030v-4.368h-1.354v4.368h-2.030z'
  })),
  bottom_align: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M18.5 20v-2.125h-17v2.125h17zM14.25 11.5h-3.187v-10.625h-2.125v10.625h-3.188l4.25 4.25 4.25-4.25z'
  })),
  carousel_left: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 256 512'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'
  })),
  carousel_right: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 256 512'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'
  })),
  top_margin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z'
  })),
  bottom_margin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z'
  })),
  left_margin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z'
  })),
  right_margin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z'
  })),
  vertical_spacing: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.656-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M17 0.983h-14c-1.103 0-2 0.896-2 2v0.797h18v-0.797c0-1.103-0.896-2-2-2z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M3 19.031h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.104 0.896 2 2 2z'
  })),
  horizontal_spacing: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#999',
    d: 'M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M19.016 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.103 0 2-0.896 2-2z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#575E67',
    d: 'M0.968 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z'
  })),
  logo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M10 0.858c5.039 0 9.139 4.102 9.139 9.142s-4.1 9.142-9.139 9.142c-5.040 0-9.139-4.101-9.139-9.142s4.1-9.142 9.139-9.142zM10 0c-5.524 0-10 4.478-10 10s4.476 10 10 10c5.523 0 10-4.478 10-10s-4.477-10-10-10v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M6.405 12.326c0.252 0 0.465-0.053 0.639-0.157s0.314-0.244 0.422-0.418 0.185-0.373 0.229-0.598c0.045-0.226 0.067-0.454 0.067-0.688v-3.264h1.475v3.264c0 0.444-0.056 0.857-0.167 1.241s-0.282 0.719-0.513 1.007c-0.23 0.288-0.524 0.515-0.881 0.679s-0.78 0.248-1.271 0.248c-0.509 0-0.944-0.087-1.304-0.261s-0.652-0.406-0.876-0.697c-0.225-0.291-0.39-0.628-0.495-1.012s-0.158-0.785-0.158-1.205v-3.264h1.475v3.264c0 0.246 0.024 0.479 0.072 0.702s0.126 0.419 0.234 0.593 0.247 0.312 0.418 0.413c0.171 0.102 0.382 0.153 0.634 0.153z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.768 12.956c-0.486 0.449-1.047 0.674-1.682 0.674-0.42 0-0.815-0.079-1.188-0.238-0.371-0.158-0.696-0.382-0.975-0.67-0.279-0.287-0.5-0.634-0.661-1.038s-0.243-0.85-0.243-1.336c0-0.437 0.082-0.851 0.243-1.24s0.385-0.729 0.67-1.017c0.284-0.287 0.622-0.515 1.011-0.683 0.391-0.168 0.81-0.252 1.26-0.252 0.593 0 1.111 0.125 1.555 0.373s0.777 0.589 0.998 1.021l-1.097 0.827c-0.144-0.288-0.353-0.512-0.624-0.67-0.273-0.158-0.568-0.238-0.887-0.238-0.246 0-0.469 0.049-0.67 0.148s-0.373 0.236-0.517 0.414c-0.144 0.177-0.255 0.382-0.333 0.615s-0.117 0.485-0.117 0.755c0 0.276 0.042 0.531 0.127 0.765 0.083 0.233 0.2 0.437 0.35 0.607s0.328 0.304 0.535 0.399c0.207 0.097 0.436 0.145 0.688 0.145 0.576 0 1.095-0.267 1.557-0.801v-0.197h-1.241v-1.069h2.464v3.335h-1.223v-0.629z'
  })),
  'marketing-button': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 32,
    viewBox: '0 0 36 32',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M29.25 3.375C29.25 2.47989 29.6056 1.62145 30.2385 0.988515C30.8714 0.355579 31.7299 0 32.625 0C33.5201 0 34.3786 0.355579 35.0115 0.988515C35.6444 1.62145 36 2.47989 36 3.375V28.125C36 29.0201 35.6444 29.8786 35.0115 30.5115C34.3786 31.1444 33.5201 31.5 32.625 31.5C31.7299 31.5 30.8714 31.1444 30.2385 30.5115C29.6056 29.8786 29.25 29.0201 29.25 28.125V27.6435C24.3855 24.8512 19.1475 23.4967 13.698 22.9568L14.6093 29.0588C14.6704 29.3838 14.6592 29.7184 14.5763 30.0387C14.4935 30.3589 14.341 30.6569 14.1298 30.9115C13.9186 31.1661 13.6539 31.371 13.3545 31.5116C13.055 31.6522 12.7283 31.7251 12.3975 31.725H11.1645C10.7271 31.725 10.2993 31.5975 9.93325 31.3581C9.56722 31.1187 9.27888 30.7779 9.1035 30.3773L4.941 22.5247C4.7895 22.5223 4.638 22.52 4.4865 22.518C3.29482 22.5062 2.15577 22.0254 1.31604 21.1797C0.476304 20.3341 0.00349165 19.1917 0 18L0 13.5C0.00401576 12.3082 0.476032 11.1656 1.31437 10.3184C2.1527 9.47124 3.29026 8.98726 4.482 8.97075C6.34506 8.94549 8.20756 8.88923 10.0687 8.802C16.9155 8.4555 23.9018 6.89175 29.25 3.85425V3.375ZM31.5 3.375V28.125C31.5 28.4234 31.6185 28.7095 31.8295 28.9205C32.0405 29.1315 32.3266 29.25 32.625 29.25C32.9234 29.25 33.2095 29.1315 33.4205 28.9205C33.6315 28.7095 33.75 28.4234 33.75 28.125V3.375C33.75 3.07663 33.6315 2.79048 33.4205 2.5795C33.2095 2.36853 32.9234 2.25 32.625 2.25C32.3266 2.25 32.0405 2.36853 31.8295 2.5795C31.6185 2.79048 31.5 3.07663 31.5 3.375ZM29.25 6.4125C23.976 9.12375 17.5297 10.557 11.25 10.9867V20.511C11.655 20.5335 12.0578 20.5605 12.4583 20.592C18.2362 21.0173 23.9175 22.266 29.25 25.0763V6.4125ZM9 20.3962V11.1038C7.50645 11.1584 6.01237 11.1974 4.518 11.2207C3.91674 11.2278 3.34226 11.4706 2.91813 11.8968C2.49399 12.323 2.25409 12.8987 2.25 13.5V18C2.25 19.2375 3.258 20.2545 4.5135 20.2703C6.00959 20.2876 7.50529 20.3296 9 20.3962ZM7.52175 22.59L11.142 29.4232L11.1645 29.4772H12.3975L12.393 29.4457L11.3962 22.7723C10.1056 22.6944 8.81398 22.6329 7.52175 22.5877V22.59Z'
  })),
  'table-of-contents': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M28.125 6.75C28.4234 6.75 28.7095 6.86853 28.9205 7.07951C29.1315 7.29048 29.25 7.57663 29.25 7.875C29.25 8.17337 29.1315 8.45952 28.9205 8.67049C28.7095 8.88147 28.4234 9 28.125 9H16.875C16.5766 9 16.2905 8.88147 16.0795 8.67049C15.8685 8.45952 15.75 8.17337 15.75 7.875C15.75 7.57663 15.8685 7.29048 16.0795 7.07951C16.2905 6.86853 16.5766 6.75 16.875 6.75H28.125ZM28.125 13.5C28.4234 13.5 28.7095 13.6185 28.9205 13.8295C29.1315 14.0405 29.25 14.3266 29.25 14.625C29.25 14.9234 29.1315 15.2095 28.9205 15.4205C28.7095 15.6315 28.4234 15.75 28.125 15.75H16.875C16.5766 15.75 16.2905 15.6315 16.0795 15.4205C15.8685 15.2095 15.75 14.9234 15.75 14.625C15.75 14.3266 15.8685 14.0405 16.0795 13.8295C16.2905 13.6185 16.5766 13.5 16.875 13.5H28.125ZM29.25 21.375C29.25 21.0766 29.1315 20.7905 28.9205 20.5795C28.7095 20.3685 28.4234 20.25 28.125 20.25H16.875C16.5766 20.25 16.2905 20.3685 16.0795 20.5795C15.8685 20.7905 15.75 21.0766 15.75 21.375C15.75 21.6734 15.8685 21.9595 16.0795 22.1705C16.2905 22.3815 16.5766 22.5 16.875 22.5H28.125C28.4234 22.5 28.7095 22.3815 28.9205 22.1705C29.1315 21.9595 29.25 21.6734 29.25 21.375ZM28.125 27C28.4234 27 28.7095 27.1185 28.9205 27.3295C29.1315 27.5405 29.25 27.8266 29.25 28.125C29.25 28.4234 29.1315 28.7095 28.9205 28.9205C28.7095 29.1315 28.4234 29.25 28.125 29.25H16.875C16.5766 29.25 16.2905 29.1315 16.0795 28.9205C15.8685 28.7095 15.75 28.4234 15.75 28.125C15.75 27.8266 15.8685 27.5405 16.0795 27.3295C16.2905 27.1185 16.5766 27 16.875 27H28.125Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M36 4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5V4.5ZM9 2.25V33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H9ZM11.25 2.25H31.5C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V31.5C33.75 32.0967 33.5129 32.669 33.091 33.091C32.669 33.5129 32.0967 33.75 31.5 33.75H11.25V2.25Z'
  })),
  faq: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M31.5 2.25C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V31.5C33.75 32.0967 33.5129 32.669 33.091 33.091C32.669 33.5129 32.0967 33.75 31.5 33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H31.5ZM4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5V4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.8238 13.0185C11.8207 13.0912 11.8325 13.1637 11.8585 13.2316C11.8845 13.2995 11.9241 13.3614 11.9749 13.4135C12.0256 13.4655 12.0865 13.5067 12.1538 13.5343C12.2211 13.5619 12.2933 13.5755 12.366 13.5743H14.2223C14.5328 13.5743 14.7803 13.32 14.8208 13.0118C15.0233 11.5357 16.0358 10.4603 17.8403 10.4603C19.3838 10.4603 20.7968 11.232 20.7968 13.0882C20.7968 14.517 19.9553 15.174 18.6255 16.173C17.1113 17.2733 15.912 18.558 15.9975 20.6438L16.0043 21.132C16.0066 21.2796 16.0669 21.4204 16.1722 21.5239C16.2774 21.6275 16.4191 21.6855 16.5668 21.6855H18.3915C18.5407 21.6855 18.6838 21.6262 18.7892 21.5207C18.8947 21.4153 18.954 21.2722 18.954 21.123V20.8868C18.954 19.2712 19.5683 18.801 21.2265 17.5433C22.5968 16.5015 24.0255 15.345 24.0255 12.9173C24.0255 9.5175 21.1545 7.875 18.0113 7.875C15.1605 7.875 12.0375 9.2025 11.8238 13.0185ZM15.327 25.9852C15.327 27.1845 16.2833 28.071 17.5995 28.071C18.9698 28.071 19.9125 27.1845 19.9125 25.9852C19.9125 24.7432 18.9675 23.8703 17.5973 23.8703C16.2833 23.8703 15.327 24.7432 15.327 25.9852Z'
  })),
  forms: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 32,
    height: 36,
    viewBox: '0 0 32 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M22.1715 16.0785C22.2763 16.183 22.3594 16.3071 22.4161 16.4438C22.4728 16.5805 22.502 16.727 22.502 16.875C22.502 17.023 22.4728 17.1695 22.4161 17.3062C22.3594 17.4428 22.2763 17.567 22.1715 17.6715L15.4215 24.4215C15.317 24.5263 15.1929 24.6094 15.0562 24.6661C14.9195 24.7228 14.773 24.752 14.625 24.752C14.477 24.752 14.3305 24.7228 14.1938 24.6661C14.0571 24.6094 13.933 24.5263 13.8285 24.4215L10.4535 21.0465C10.3489 20.9419 10.2659 20.8177 10.2093 20.6811C10.1527 20.5444 10.1236 20.3979 10.1236 20.25C10.1236 20.1021 10.1527 19.9556 10.2093 19.8189C10.2659 19.6823 10.3489 19.5581 10.4535 19.4535C10.6647 19.2423 10.9513 19.1236 11.25 19.1236C11.3979 19.1236 11.5444 19.1527 11.6811 19.2093C11.8177 19.2659 11.9419 19.3489 12.0465 19.4535L14.625 22.0342L20.5785 16.0785C20.683 15.9737 20.8071 15.8906 20.9438 15.8339C21.0805 15.7772 21.227 15.748 21.375 15.748C21.523 15.748 21.6695 15.7772 21.8062 15.8339C21.9429 15.8906 22.067 15.9737 22.1715 16.0785Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M6.75 3.375H4.5C3.30653 3.375 2.16193 3.84911 1.31802 4.69302C0.474106 5.53693 0 6.68153 0 7.875V31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H27C28.1935 36 29.3381 35.5259 30.182 34.682C31.0259 33.8381 31.5 32.6935 31.5 31.5V7.875C31.5 6.68153 31.0259 5.53693 30.182 4.69302C29.3381 3.84911 28.1935 3.375 27 3.375H24.75V5.625H27C27.5967 5.625 28.169 5.86205 28.591 6.28401C29.0129 6.70597 29.25 7.27826 29.25 7.875V31.5C29.25 32.0967 29.0129 32.669 28.591 33.091C28.169 33.5129 27.5967 33.75 27 33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V7.875C2.25 7.27826 2.48705 6.70597 2.90901 6.28401C3.33097 5.86205 3.90326 5.625 4.5 5.625H6.75V3.375Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M19.125 2.25C19.4234 2.25 19.7095 2.36853 19.9205 2.5795C20.1315 2.79048 20.25 3.07663 20.25 3.375V5.625C20.25 5.92337 20.1315 6.20952 19.9205 6.4205C19.7095 6.63147 19.4234 6.75 19.125 6.75H12.375C12.0766 6.75 11.7905 6.63147 11.5795 6.4205C11.3685 6.20952 11.25 5.92337 11.25 5.625V3.375C11.25 3.07663 11.3685 2.79048 11.5795 2.5795C11.7905 2.36853 12.0766 2.25 12.375 2.25H19.125ZM12.375 0C11.4799 0 10.6214 0.355579 9.98851 0.988515C9.35558 1.62145 9 2.47989 9 3.375V5.625C9 6.52011 9.35558 7.37855 9.98851 8.01149C10.6214 8.64442 11.4799 9 12.375 9H19.125C20.0201 9 20.8786 8.64442 21.5115 8.01149C22.1444 7.37855 22.5 6.52011 22.5 5.625V3.375C22.5 2.47989 22.1444 1.62145 21.5115 0.988515C20.8786 0.355579 20.0201 0 19.125 0L12.375 0Z'
  })),
  'how-to': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 34,
    height: 36,
    viewBox: '0 0 34 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.3438 3.18152V4.50002H3.09375C2.49701 4.50002 1.92472 4.73707 1.50276 5.15903C1.0808 5.58099 0.84375 6.15328 0.84375 6.75002V11.25C0.84375 11.8468 1.0808 12.4191 1.50276 12.841C1.92472 13.263 2.49701 13.5 3.09375 13.5H14.3438V15.75H4.21875C3.86945 15.75 3.52494 15.8313 3.21252 15.9876C2.90009 16.1438 2.62833 16.3706 2.41875 16.65L0.225 19.575C0.0789502 19.7698 0 20.0066 0 20.25C0 20.4934 0.0789502 20.7303 0.225 20.925L2.41875 23.85C2.62833 24.1295 2.90009 24.3563 3.21252 24.5125C3.52494 24.6687 3.86945 24.75 4.21875 24.75H14.3438V36H18.8438V24.75H30.0938C30.6905 24.75 31.2628 24.513 31.6847 24.091C32.1067 23.6691 32.3438 23.0968 32.3438 22.5V18C32.3438 17.4033 32.1067 16.831 31.6847 16.409C31.2628 15.9871 30.6905 15.75 30.0938 15.75H18.8438V13.5H28.9688C29.3181 13.5 29.6626 13.4187 29.975 13.2625C30.2874 13.1063 30.5592 12.8795 30.7688 12.6L32.9625 9.67502C33.1085 9.48029 33.1875 9.24343 33.1875 9.00002C33.1875 8.7566 33.1085 8.51975 32.9625 8.32502L30.7688 5.40002C30.5592 5.12058 30.2874 4.89377 29.975 4.73756C29.6626 4.58134 29.3181 4.50002 28.9688 4.50002H18.8438V3.18152C18.8438 2.58478 18.6067 2.01249 18.1847 1.59053C17.7628 1.16857 17.1905 0.931519 16.5938 0.931519C15.997 0.931519 15.4247 1.16857 15.0028 1.59053C14.5808 2.01249 14.3438 2.58478 14.3438 3.18152ZM28.9688 6.75002L30.6562 9.00002L28.9688 11.25H3.09375V6.75002H28.9688ZM30.0938 18V22.5H4.21875L2.53125 20.25L4.21875 18H30.0938Z'
  })),
  'inline-notice': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M31.5 2.25C32.0967 2.25 32.669 2.48705 33.091 2.90901C33.5129 3.33097 33.75 3.90326 33.75 4.5V31.5C33.75 32.0967 33.5129 32.669 33.091 33.091C32.669 33.5129 32.0967 33.75 31.5 33.75H4.5C3.90326 33.75 3.33097 33.5129 2.90901 33.091C2.48705 32.669 2.25 32.0967 2.25 31.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H31.5ZM4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5V4.5C36 3.30653 35.5259 2.16193 34.682 1.31802C33.8381 0.474106 32.6935 0 31.5 0L4.5 0Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.7545 24.75C15.7545 24.4545 15.8127 24.1619 15.9258 23.889C16.0388 23.616 16.2046 23.3679 16.4135 23.159C16.6224 22.9501 16.8705 22.7843 17.1434 22.6713C17.4164 22.5582 17.709 22.5 18.0045 22.5C18.3 22.5 18.5925 22.5582 18.8655 22.6713C19.1385 22.7843 19.3865 22.9501 19.5955 23.159C19.8044 23.3679 19.9701 23.616 20.0832 23.889C20.1963 24.1619 20.2545 24.4545 20.2545 24.75C20.2545 25.3467 20.0174 25.919 19.5955 26.341C19.1735 26.7629 18.6012 27 18.0045 27C17.4077 27 16.8355 26.7629 16.4135 26.341C15.9915 25.919 15.7545 25.3467 15.7545 24.75ZM15.975 11.2387C15.945 10.9549 15.9751 10.6679 16.0632 10.3964C16.1513 10.1249 16.2955 9.87497 16.4865 9.66281C16.6774 9.45065 16.9108 9.281 17.1716 9.16487C17.4323 9.04875 17.7146 8.98874 18 8.98874C18.2854 8.98874 18.5677 9.04875 18.8284 9.16487C19.0892 9.281 19.3226 9.45065 19.5135 9.66281C19.7045 9.87497 19.8487 10.1249 19.9368 10.3964C20.0249 10.6679 20.0549 10.9549 20.025 11.2387L19.2375 19.1295C19.211 19.4395 19.0692 19.7282 18.84 19.9387C18.6109 20.1491 18.3111 20.2659 18 20.2659C17.6889 20.2659 17.3891 20.1491 17.1599 19.9387C16.9308 19.7282 16.7889 19.4395 16.7625 19.1295L15.975 11.2387Z'
  })),
  'wp-search': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M26.4205 23.269C28.5991 20.2961 29.5749 16.6103 29.1526 12.9489C28.7303 9.28755 26.9412 5.92062 24.1431 3.52174C21.345 1.12286 17.7443 -0.131055 14.0614 0.0108538C10.3785 0.152763 6.88493 1.68003 4.27971 4.28711C1.6745 6.89419 0.149728 10.3888 0.0104543 14.0718C-0.12882 17.7548 1.12767 21.3546 3.52856 24.151C5.92944 26.9474 9.29765 28.7342 12.9593 29.1538C16.621 29.5735 20.3061 28.595 23.2774 26.4143H23.2751C23.3426 26.5043 23.4146 26.5898 23.4956 26.6731L32.1578 35.3353C32.5797 35.7574 33.152 35.9947 33.7488 35.9949C34.3457 35.9951 34.9181 35.7583 35.3403 35.3364C35.7625 34.9145 35.9998 34.3422 36 33.7454C36.0002 33.1485 35.7633 32.576 35.3414 32.1539L26.6793 23.4917C26.5988 23.4103 26.5123 23.3351 26.4205 23.2667V23.269ZM27.001 14.6203C27.001 16.2453 26.6809 17.8545 26.0591 19.3558C25.4372 20.8572 24.5257 22.2213 23.3766 23.3704C22.2275 24.5195 20.8633 25.431 19.362 26.0529C17.8607 26.6747 16.2515 26.9948 14.6265 26.9948C13.0014 26.9948 11.3923 26.6747 9.89094 26.0529C8.38959 25.431 7.02543 24.5195 5.87635 23.3704C4.72727 22.2213 3.81577 20.8572 3.19389 19.3558C2.57201 17.8545 2.25194 16.2453 2.25194 14.6203C2.25194 11.3384 3.55568 8.19084 5.87635 5.87017C8.19703 3.54949 11.3445 2.24575 14.6265 2.24575C17.9084 2.24575 21.0559 3.54949 23.3766 5.87017C25.6973 8.19084 27.001 11.3384 27.001 14.6203Z'
  })),
  'taxonomy-list': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 27,
    viewBox: '0 0 36 27'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M13.5 3.375C13.5 2.47989 13.8556 1.62145 14.4885 0.988515C15.1214 0.355579 15.9799 0 16.875 0H19.125C20.0201 0 20.8786 0.355579 21.5115 0.988515C22.1444 1.62145 22.5 2.47989 22.5 3.375V5.625C22.5 6.52011 22.1444 7.37855 21.5115 8.01149C20.8786 8.64442 20.0201 9 19.125 9V11.25H31.5C31.7984 11.25 32.0845 11.3685 32.2955 11.5795C32.5065 11.7905 32.625 12.0766 32.625 12.375V14.625C32.625 14.9234 32.5065 15.2095 32.2955 15.4205C32.0845 15.6315 31.7984 15.75 31.5 15.75C31.2016 15.75 30.9155 15.6315 30.7045 15.4205C30.4935 15.2095 30.375 14.9234 30.375 14.625V13.5H19.125V14.625C19.125 14.9234 19.0065 15.2095 18.7955 15.4205C18.5845 15.6315 18.2984 15.75 18 15.75C17.7016 15.75 17.4155 15.6315 17.2045 15.4205C16.9935 15.2095 16.875 14.9234 16.875 14.625V13.5H5.625V14.625C5.625 14.9234 5.50647 15.2095 5.2955 15.4205C5.08452 15.6315 4.79837 15.75 4.5 15.75C4.20163 15.75 3.91548 15.6315 3.7045 15.4205C3.49353 15.2095 3.375 14.9234 3.375 14.625V12.375C3.375 12.0766 3.49353 11.7905 3.7045 11.5795C3.91548 11.3685 4.20163 11.25 4.5 11.25H16.875V9C15.9799 9 15.1214 8.64442 14.4885 8.01149C13.8556 7.37855 13.5 6.52011 13.5 5.625V3.375ZM19.125 6.75C19.4234 6.75 19.7095 6.63147 19.9205 6.4205C20.1315 6.20952 20.25 5.92337 20.25 5.625V3.375C20.25 3.07663 20.1315 2.79048 19.9205 2.5795C19.7095 2.36853 19.4234 2.25 19.125 2.25H16.875C16.5766 2.25 16.2905 2.36853 16.0795 2.5795C15.8685 2.79048 15.75 3.07663 15.75 3.375V5.625C15.75 5.92337 15.8685 6.20952 16.0795 6.4205C16.2905 6.63147 16.5766 6.75 16.875 6.75H19.125ZM0 21.375C0 20.4799 0.355579 19.6214 0.988515 18.9885C1.62145 18.3556 2.47989 18 3.375 18H5.625C6.52011 18 7.37855 18.3556 8.01149 18.9885C8.64442 19.6214 9 20.4799 9 21.375V23.625C9 24.5201 8.64442 25.3786 8.01149 26.0115C7.37855 26.6444 6.52011 27 5.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3786 0 24.5201 0 23.625L0 21.375ZM3.375 20.25C3.07663 20.25 2.79048 20.3685 2.5795 20.5795C2.36853 20.7905 2.25 21.0766 2.25 21.375V23.625C2.25 23.9234 2.36853 24.2095 2.5795 24.4205C2.79048 24.6315 3.07663 24.75 3.375 24.75H5.625C5.92337 24.75 6.20952 24.6315 6.4205 24.4205C6.63147 24.2095 6.75 23.9234 6.75 23.625V21.375C6.75 21.0766 6.63147 20.7905 6.4205 20.5795C6.20952 20.3685 5.92337 20.25 5.625 20.25H3.375ZM13.5 21.375C13.5 20.4799 13.8556 19.6214 14.4885 18.9885C15.1214 18.3556 15.9799 18 16.875 18H19.125C20.0201 18 20.8786 18.3556 21.5115 18.9885C22.1444 19.6214 22.5 20.4799 22.5 21.375V23.625C22.5 24.5201 22.1444 25.3786 21.5115 26.0115C20.8786 26.6444 20.0201 27 19.125 27H16.875C15.9799 27 15.1214 26.6444 14.4885 26.0115C13.8556 25.3786 13.5 24.5201 13.5 23.625V21.375ZM16.875 20.25C16.5766 20.25 16.2905 20.3685 16.0795 20.5795C15.8685 20.7905 15.75 21.0766 15.75 21.375V23.625C15.75 23.9234 15.8685 24.2095 16.0795 24.4205C16.2905 24.6315 16.5766 24.75 16.875 24.75H19.125C19.4234 24.75 19.7095 24.6315 19.9205 24.4205C20.1315 24.2095 20.25 23.9234 20.25 23.625V21.375C20.25 21.0766 20.1315 20.7905 19.9205 20.5795C19.7095 20.3685 19.4234 20.25 19.125 20.25H16.875ZM27 21.375C27 20.4799 27.3556 19.6214 27.9885 18.9885C28.6214 18.3556 29.4799 18 30.375 18H32.625C33.5201 18 34.3786 18.3556 35.0115 18.9885C35.6444 19.6214 36 20.4799 36 21.375V23.625C36 24.5201 35.6444 25.3786 35.0115 26.0115C34.3786 26.6444 33.5201 27 32.625 27H30.375C29.4799 27 28.6214 26.6444 27.9885 26.0115C27.3556 25.3786 27 24.5201 27 23.625V21.375ZM30.375 20.25C30.0766 20.25 29.7905 20.3685 29.5795 20.5795C29.3685 20.7905 29.25 21.0766 29.25 21.375V23.625C29.25 23.9234 29.3685 24.2095 29.5795 24.4205C29.7905 24.6315 30.0766 24.75 30.375 24.75H32.625C32.9234 24.75 33.2095 24.6315 33.4205 24.4205C33.6315 24.2095 33.75 23.9234 33.75 23.625V21.375C33.75 21.0766 33.6315 20.7905 33.4205 20.5795C33.2095 20.3685 32.9234 20.25 32.625 20.25H30.375Z'
  })),
  review: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 27,
    height: 36,
    viewBox: '0 0 27 36'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M13.14 9.225C13.1729 9.15753 13.2241 9.10066 13.2877 9.06088C13.3514 9.02109 13.4249 9 13.5 9C13.5751 9 13.6486 9.02109 13.7123 9.06088C13.7759 9.10066 13.8271 9.15753 13.86 9.225L15.2865 12.1163C15.315 12.1747 15.3574 12.2254 15.41 12.2638C15.4625 12.3022 15.5236 12.3273 15.588 12.3367L18.783 12.8003C19.1092 12.8475 19.242 13.2503 19.0035 13.482L16.695 15.7343C16.6484 15.7797 16.6136 15.8359 16.5936 15.8978C16.5736 15.9597 16.569 16.0256 16.5802 16.0898L17.1247 19.2713C17.137 19.3447 17.1285 19.4201 17.1002 19.489C17.0719 19.5579 17.025 19.6176 16.9647 19.6613C16.9044 19.705 16.8331 19.731 16.7588 19.7365C16.6846 19.7419 16.6103 19.7265 16.5442 19.692L13.6867 18.189C13.6295 18.159 13.5658 18.1434 13.5011 18.1434C13.4365 18.1434 13.3728 18.159 13.3155 18.189L10.458 19.692C10.3921 19.7259 10.318 19.7408 10.2441 19.735C10.1702 19.7293 10.0993 19.7032 10.0394 19.6596C9.97944 19.616 9.93278 19.5566 9.90459 19.488C9.87641 19.4195 9.86781 19.3444 9.87974 19.2713L10.4242 16.0898C10.4357 16.0258 10.4315 15.96 10.4119 15.8981C10.3923 15.8362 10.3579 15.7799 10.3117 15.7343L7.99424 13.482C7.94116 13.4299 7.90364 13.364 7.88589 13.2918C7.86814 13.2195 7.87087 13.1438 7.89376 13.073C7.91666 13.0022 7.95881 12.9392 8.01551 12.891C8.0722 12.8428 8.14119 12.8114 8.21474 12.8003L11.4097 12.3367C11.4741 12.3273 11.5352 12.3022 11.5878 12.2638C11.6403 12.2254 11.6827 12.1747 11.7112 12.1163L13.14 9.225Z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M0 4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0L22.5 0C23.6935 0 24.8381 0.474106 25.682 1.31802C26.5259 2.16193 27 3.30653 27 4.5V34.875C26.9999 35.0785 26.9446 35.2782 26.84 35.4527C26.7354 35.6273 26.5854 35.7702 26.406 35.8662C26.2266 35.9623 26.0245 36.0079 25.8212 35.9981C25.618 35.9884 25.4212 35.9237 25.2517 35.811L13.5 29.4772L1.74825 35.811C1.57884 35.9237 1.38202 35.9884 1.17876 35.9981C0.975493 36.0079 0.773399 35.9623 0.593999 35.8662C0.414598 35.7702 0.264609 35.6273 0.160007 35.4527C0.0554041 35.2782 0.000105121 35.0785 0 34.875V4.5ZM4.5 2.25C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V32.7735L12.8768 27.189C13.0614 27.0661 13.2782 27.0006 13.5 27.0006C13.7218 27.0006 13.9386 27.0661 14.1233 27.189L24.75 32.7735V4.5C24.75 3.90326 24.5129 3.33097 24.091 2.90901C23.669 2.48705 23.0967 2.25 22.5 2.25H4.5Z'
  })),
  lottie: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 32,
    height: 32,
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M5.625 2.5C6.52011 2.5 7.37855 2.85558 8.01149 3.48852C8.64442 4.12145 9 4.9799 9 5.875V9.25H5.625C5.18179 9.25 4.74292 9.16271 4.33345 8.9931C3.92397 8.82349 3.55192 8.57489 3.23852 8.26149C2.92512 7.94809 2.67652 7.57603 2.50691 7.16656C2.3373 6.75709 2.25 6.31821 2.25 5.875C2.25 5.43179 2.3373 4.99292 2.50691 4.58345C2.67652 4.17397 2.92512 3.80192 3.23852 3.48852C3.55192 3.17512 3.92397 2.92652 4.33345 2.75691C4.74292 2.5873 5.18179 2.5 5.625 2.5ZM11.25 9.25V5.875C11.25 4.76248 10.9201 3.67495 10.302 2.74992C9.68394 1.82489 8.80543 1.10392 7.7776 0.67818C6.74976 0.252437 5.61876 0.141043 4.52762 0.358085C3.43648 0.575127 2.4342 1.11086 1.64753 1.89753C0.860857 2.6842 0.325127 3.68648 0.108085 4.77762C-0.108957 5.86876 0.00243722 6.99976 0.42818 8.0276C0.853923 9.05543 1.57489 9.93394 2.49992 10.552C3.42495 11.1701 4.51248 11.5 5.625 11.5H9V20.5H5.625C4.51248 20.5 3.42495 20.8299 2.49992 21.448C1.57489 22.0661 0.853923 22.9446 0.42818 23.9724C0.00243722 25.0002 -0.108957 26.1312 0.108085 27.2224C0.325127 28.3135 0.860857 29.3158 1.64753 30.1025C2.4342 30.8892 3.43648 31.4249 4.52762 31.6419C5.61876 31.859 6.74976 31.7476 7.7776 31.3218C8.80543 30.8961 9.68394 30.1751 10.302 29.2501C10.9201 28.3251 11.25 27.2375 11.25 26.125V22.75H20.25V26.125C20.25 27.2375 20.5799 28.3251 21.198 29.2501C21.8161 30.1751 22.6946 30.8961 23.7224 31.3218C24.7502 31.7476 25.8812 31.859 26.9724 31.6419C28.0635 31.4249 29.0658 30.8892 29.8525 30.1025C30.6392 29.3158 31.1749 28.3135 31.3919 27.2224C31.609 26.1312 31.4976 25.0002 31.0718 23.9724C30.6461 22.9446 29.9251 22.0661 29.0001 21.448C28.0751 20.8299 26.9875 20.5 25.875 20.5H22.5V11.5H25.875C26.9875 11.5 28.0751 11.1701 29.0001 10.552C29.9251 9.93394 30.6461 9.05543 31.0718 8.0276C31.4976 6.99976 31.609 5.86876 31.3919 4.77762C31.1749 3.68648 30.6392 2.6842 29.8525 1.89753C29.0658 1.11086 28.0635 0.575127 26.9724 0.358085C25.8812 0.141043 24.7502 0.252437 23.7224 0.67818C22.6946 1.10392 21.8161 1.82489 21.198 2.74992C20.5799 3.67495 20.25 4.76248 20.25 5.875V9.25H11.25ZM20.25 11.5V20.5H11.25V11.5H20.25ZM22.5 9.25V5.875C22.5 5.20749 22.6979 4.55497 23.0688 3.99995C23.4396 3.44494 23.9667 3.01236 24.5834 2.75691C25.2001 2.50146 25.8787 2.43463 26.5334 2.56485C27.1881 2.69508 27.7895 3.01652 28.2615 3.48852C28.7335 3.96052 29.0549 4.56189 29.1852 5.21657C29.3154 5.87126 29.2485 6.54986 28.9931 7.16656C28.7377 7.78326 28.3051 8.31036 27.7501 8.68121C27.195 9.05206 26.5425 9.25 25.875 9.25H22.5ZM22.5 22.75H25.875C26.5425 22.75 27.195 22.9479 27.7501 23.3188C28.3051 23.6896 28.7377 24.2167 28.9931 24.8334C29.2485 25.4501 29.3154 26.1287 29.1852 26.7834C29.0549 27.4381 28.7335 28.0395 28.2615 28.5115C27.7895 28.9835 27.1881 29.3049 26.5334 29.4352C25.8787 29.5654 25.2001 29.4985 24.5834 29.2431C23.9667 28.9877 23.4396 28.5551 23.0688 28.0001C22.6979 27.445 22.5 26.7925 22.5 26.125V22.75ZM9 22.75V26.125C9 26.7925 8.80206 27.445 8.43121 28.0001C8.06036 28.5551 7.53326 28.9877 6.91656 29.2431C6.29986 29.4985 5.62126 29.5654 4.96657 29.4352C4.31189 29.3049 3.71052 28.9835 3.23852 28.5115C2.76652 28.0395 2.44508 27.4381 2.31485 26.7834C2.18463 26.1287 2.25146 25.4501 2.50691 24.8334C2.76236 24.2167 3.19494 23.6896 3.74995 23.3188C4.30497 22.9479 4.95749 22.75 5.625 22.75H9Z'
  })),
  accept: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M424,127H41.5C-0.6,127-35,161.4-35,203.5v459c0,42.1,34.4,76.5,76.5,76.5h210.4v-38.3H41.5c-21,0-38.3-17.2-38.3-38.3v-459c0-21,17.2-38.3,38.3-38.3H424c21,0,38.3,17.2,38.3,38.3v224.7l38.3-38.3V203.5C500.5,161.4,466.1,127,424,127z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M385.8,280h-306v-38.3h306V280z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M385.8,356.5h-306v-38.3h306V356.5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M224,431.8H79.8v-38.3H224V431.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M464.9,525.8c-7.4-7.4-19.4-7.4-26.7,0l-80.2,80.2l-40.1-40.1c-7.4-7.4-19.4-7.4-26.7,0c-7.4,7.4-7.4,19.4,0,26.7l53.5,53.5c7.4,7.4,19.4,7.4,26.7,0l93.6-93.6C472.4,545.2,472.4,533.2,464.9,525.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M783.3,41.9H207.2C143.8,41.9,92,93.8,92,157.1v691.3c0,63.4,51.8,115.2,115.2,115.2h316.9v-57.7H207.2c-31.6,0-57.7-25.9-57.7-57.7V157.1c0-31.6,25.9-57.7,57.7-57.7h576.1c31.6,0,57.7,25.9,57.7,57.7v338.4l57.7-57.7V157.2C898.4,93.8,846.6,41.9,783.3,41.9z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M725.7,272.4H264.8v-57.7h460.9V272.4z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M725.7,387.7H264.8V330h460.9V387.7z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M482,501H264.8v-57.7H482V501z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M707.5,941.1c-124.1,0-225.2-101-225.2-225.2s101-225,225.2-225s225.2,101,225.2,225.2S831.6,941.1,707.5,941.1z M707.5,531.5c-101.7,0-184.6,82.8-184.6,184.6s82.8,184.6,184.6,184.6S892.1,817.9,892.1,716S809.2,531.5,707.5,531.5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M844.9,642.6c-11.1-11.1-29.2-11.1-40.2,0L683.8,763.4l-60.3-60.3c-11.1-11.1-29.2-11.1-40.2,0c-11.1,11.1-11.1,29.2,0,40.2l80.6,80.6c11.1,11.1,29.2,11.1,40.2,0l140.9-141C856.1,671.8,856.1,653.7,844.9,642.6z'
  })),
  checkbox: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M833.3,44H166.5C97.4,44,41.5,100,41.5,169.1V836c0,69.2,56,125.1,125.1,125.1h666.9c69.2,0,125.1-56,125.1-125.1V169.1C958.4,100,902.5,44,833.3,44z M875.1,835.8c0,23-18.7,41.7-41.7,41.7H166.5c-23,0-41.7-18.7-41.7-41.7V169.1c0-23,18.7-41.7,41.7-41.7h666.9c23,0,41.7,18.7,41.7,41.7v666.8H875.1z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M691.5,369.9c-16.3-16.3-42.6-16.3-58.9,0L455.8,546.7l-88.4-88.4c-16.3-16.3-42.6-16.3-58.9,0c-16.3,16.3-16.3,42.6,0,58.9l117.9,117.9c16.3,16.3,42.6,16.3,58.9,0l206.3-206.3C707.9,412.5,707.9,386,691.5,369.9z'
  })),
  datepicker: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M882.2,127.7H758V70.4c0-15.8-12.9-28.7-28.7-28.7s-28.7,12.9-28.7,28.7v57.3H528.4V70.4c0-15.8-12.9-28.7-28.7-28.7c-15.8,0-28.7,12.9-28.7,28.7v57.3H298.8V70.4c0-15.8-12.9-28.7-28.7-28.7s-28.7,12.9-28.7,28.7v57.3H117.6c-42.2,0-76.5,34.3-76.5,76.5v678.7c0,42.2,34.3,76.5,76.5,76.5h764.7c42.2,0,76.5-34.3,76.5-76.5V204.2C958.8,161.9,924.6,127.7,882.2,127.7z M901.5,882.6c0,10.6-8.6,19.1-19.1,19.1H117.6c-10.6,0-19.1-8.6-19.1-19.1V204c0-10.6,8.6-19.1,19.1-19.1h124.3v57.3c0,15.8,12.9,28.7,28.7,28.7s28.7-12.9,28.7-28.7V185h172.2v57.3c0,15.8,12.9,28.7,28.7,28.7c15.8,0,28.7-12.9,28.7-28.7V185h172.2v57.3c0,15.8,12.9,28.7,28.7,28.7s28.7-12.9,28.7-28.7V185h124.3c10.6,0,19.1,8.6,19.1,19.1v678.7L901.5,882.6L901.5,882.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M882.4,963.8H117.6c-44.7,0-81-36.3-81-81V204.2c0-44.7,36.3-81,81-81h119.2V70.4c0-18.3,14.9-33.2,33.2-33.2s33.2,14.9,33.2,33.2v52.8h163.1V70.4c0-18.3,14.9-33.2,33.2-33.2c18.3,0,33.2,14.9,33.2,33.2v52.8H696V70.4c0-18.3,14.9-33.2,33.2-33.2c18.3,0,33.2,14.9,33.2,33.2v52.8h119.7c44.7,0,81.1,36.3,81.1,81v678.7C963.3,927.5,927,963.8,882.4,963.8z M117.6,132.2c-39.7,0-72,32.3-72,72v678.7c0,39.7,32.3,72,72,72h764.7c39.7,0,72-32.3,72-72V204.2c0-39.7-32.3-72-72.1-72H753.5V70.4c0-13.4-10.8-24.2-24.2-24.2S705.1,57,705.1,70.4v61.8H523.9V70.4c0-13.4-10.8-24.2-24.2-24.2S475.5,57,475.5,70.4v61.8H294.3V70.4c0-13.4-10.8-24.2-24.2-24.2S245.9,57,245.9,70.4v61.8L117.6,132.2L117.6,132.2z M882.5,906.2H117.6c-13,0-23.6-10.6-23.6-23.6V204c0-13,10.6-23.6,23.6-23.6h128.8v61.8c0,13.4,10.8,24.2,24.2,24.2s24.2-10.8,24.2-24.2v-61.8H476v61.8c0,13.4,10.8,24.2,24.2,24.2c13.4,0,24.2-10.8,24.2-24.2v-61.8h181.2v61.8c0,13.4,10.8,24.2,24.2,24.2s24.2-10.8,24.2-24.2v-61.8h128.8c13,0,23.6,10.6,23.6,23.6v683.2h-0.8C903.5,898,893.9,906.2,882.5,906.2z M117.6,189.5c-8,0-14.5,6.6-14.5,14.5v678.6c0,8,6.6,14.5,14.5,14.5h764.8c8,0,14.5-6.6,14.5-14.5h0.3V204c0-8-6.6-14.5-14.5-14.5H763v52.8c0,18.3-14.9,33.2-33.2,33.2s-33.2-14.9-33.2-33.2v-52.8H533.4v52.8c0,18.3-14.9,33.2-33.2,33.2S467,260.6,467,242.3v-52.8H303.8v52.8c0,18.3-14.9,33.2-33.2,33.2s-33.2-14.9-33.2-33.2v-52.8L117.6,189.5L117.6,189.5z'
  })),
  email: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M30.534 25.334h-29.149v-20.192h29.158v20.189h-0.010zM3.626 23.088h24.669v-15.699h-24.669v15.699z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M15.962 17.76l-14.128-10.595 1.35-1.802 12.778 9.594 12.781-9.594 1.35 1.802z'
  })),
  hidden: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M7.29 21.67l1.488-1.498c-1.818-1.421-3.446-3.072-4.854-4.909 1.45-1.907 6.384-7.782 12.074-7.782 1.504 0.016 2.986 0.374 4.336 1.040l1.542-1.552c-1.798-1.002-3.818-1.542-5.878-1.574-7.843 0-13.971 8.893-14.227 9.28l-0.349 0.589 0.397 0.582c1.542 2.189 3.382 4.15 5.472 5.824z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M30.227 14.682c-1.482-2.070-3.235-3.933-5.206-5.539l-1.488 1.488c1.69 1.363 3.213 2.918 4.544 4.634-1.45 1.907-6.39 7.782-12.077 7.782-1.366-0.022-2.717-0.333-3.958-0.906l-1.574 1.574c1.706 0.899 3.6 1.382 5.533 1.418 7.843 0 13.971-8.893 14.227-9.28l0.355-0.582-0.355-0.589z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M5.571 22.72l17.891-17.891c0.41-0.41 1.069-0.41 1.472 0v0c0.41 0.41 0.41 1.069 0 1.472l-17.888 17.891c-0.41 0.41-1.069 0.41-1.472 0v0c-0.413-0.403-0.413-1.069-0.003-1.472z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M19.264 11.232l-7.296 7.293c1.728 2.298 4.989 2.768 7.293 1.040s2.768-4.989 1.040-7.293c-0.298-0.39-0.646-0.746-1.037-1.040v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M12.406 19.027l8.285-6.138c-1.366-2.531-4.525-3.475-7.059-2.102s-3.475 4.525-2.102 7.059c0.234 0.429 0.531 0.826 0.877 1.181v0z'
  })),
  name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M962.4,154.4v512.4H897V154.4H962.4z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M962.4,209.2H38.6v-65.4h923.8V209.2z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M962.4,716.3H38.6v-65.4h923.8V716.3z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M103.8,154.5v512.3H38.6V154.5H103.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M287.1,292.3v277.1h-65.4V292.3H287.1z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M369.9,307H135.9v-65.4h233.9V307z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M369.9,617.8H135.9v-65.4h233.9V617.8z'
  })),
  phone: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M713.3,960.4c-35.6-0.2-71.1-4.8-105.8-13.3C488,918.3,365.1,845.2,261.3,741.3s-177-227-205.8-346.2c-30.3-125.6-8.8-232.9,60.8-302.4l19.8-19.8c37.5-37.5,98.3-37.5,135.9,0L386.1,187c37.5,37.5,37.5,98.3,0,135.9l-67.5,67.5c32.4,56.8,76.2,113.6,128.2,165.4c52,51.8,108.8,95.9,165.4,128.2l67.5-67.5c37.5-37.5,98.3-37.5,135.9,0l0,0l114.1,114.1c37.5,37.5,37.5,98.3,0,135.9l-19.8,19.6C861,935.1,793.1,960.4,713.3,960.4z M204.3,112.8c-7.4,0-14.5,2.9-19.6,8.2l-19.8,19.8c-52,52-67.3,136.6-42.9,238c25.9,107.3,92.6,219,187.7,314s206.8,161.8,314,187.7c101.4,24.4,185.8,9.3,238-42.9l19.8-19.8c10.9-10.9,10.9-28.4,0-39.1L767.4,664.7c-10.9-10.9-28.4-10.9-39.1,0L643,750.1c-10.5,10.5-26.7,13-39.8,6.3c-70.1-36.2-140.6-89-204.3-152.4S282.6,469.8,246.4,399.8c-6.9-13.1-4.4-29.3,6.1-39.8l85.4-85.4c10.9-10.9,10.9-28.4,0-39.1L223.9,121C218.6,115.9,211.5,112.8,204.3,112.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M749.9,549.6c-18.9,0-34.1-15.2-34.1-34.1l0,0c-0.2-124.8-101.4-226-226.2-226.2c-18.9,0-34.1-15.2-34.1-34.1s15.2-34.1,34.1-34.1l0,0c162.4,0,294.4,132.1,294.4,294.4C784,534.4,768.7,549.6,749.9,549.6L749.9,549.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M894.3,549.6c-18.9,0-34.1-15.2-34.1-34.1l0,0c0-204.3-166.4-370.4-370.4-370.4c-18.9,0-34.1-15.2-34.1-34.1s15.2-34.1,34.1-34.1l0,0c242,0,438.9,196.8,438.9,438.9C928.4,534.4,913.2,549.6,894.3,549.6L894.3,549.6z'
  })),
  radio: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M7.446 4.931c-1.651 0-2.95 1.299-2.95 2.95s1.299 2.95 2.95 2.95 2.95-1.299 2.95-2.95-1.299-2.95-2.95-2.95v0zM7.446 1.981c-3.245 0-5.901 2.656-5.901 5.901s2.656 5.901 5.901 5.901 5.901-2.656 5.901-5.901-2.656-5.901-5.901-5.901v0zM7.446 12.605c-2.595 0-4.723-2.122-4.723-4.723s2.125-4.72 4.723-4.72 4.723 2.122 4.723 4.723-2.128 4.72-4.723 4.72v0z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M12.832 21.418c0 2.974-2.411 5.386-5.386 5.386s-5.386-2.411-5.386-5.386c0-2.974 2.411-5.386 5.386-5.386s5.386 2.411 5.386 5.386z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M7.446 27.462c-3.334 0-6.045-2.71-6.045-6.045s2.71-6.045 6.045-6.045 6.045 2.71 6.045 6.045-2.71 6.045-6.045 6.045zM7.446 16.694c-2.605 0-4.723 2.118-4.723 4.723s2.118 4.723 4.723 4.723 4.723-2.118 4.723-4.723-2.118-4.723-4.723-4.723z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.694 5.37h15.933v1.229h-15.933v-1.229z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.694 9.053h9.664v1.229h-9.664v-1.229z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.694 19.347h15.933v1.229h-15.933v-1.229z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.694 22.8h9.664v1.229h-9.664v-1.229z'
  })),
  select: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M775.8,509.4c-13.1,0-25.5,3.1-36.5,8.6c-11.4-32-41.9-55-77.8-55c-22.2,0-42.3,8.7-57.1,23.1c-14.9-14.2-34.9-23.1-57.1-23.1c-11.2,0-21.8,2.3-31.6,6.3V323.4c0-45.4-37-82.5-82.5-82.5s-82.5,37-82.5,82.5v174v19.2v42.6c-37.2,1.9-92.3,14.2-92.3,91.9c0,58.2,69.5,185.2,140.5,201.3C445,916.2,520,957.7,604.4,957.7c142.4,0,253.9-106.9,253.9-243.6c0-14-11.4-25.5-25.5-25.5c-14,0-25.5,11.4-25.5,25.5c0,108-89.1,192.7-203,192.7c-70.4,0-132.5-36-168.8-90.7c-0.3-0.7-0.9-1.4-1.2-2.1c-20.6-31.8-32.9-69.5-32.9-110.3v-187v-19.2v-174c0-17.5,14.2-31.6,31.6-31.6s31.6,14.2,31.6,31.6v221.9v84.7v4c0,14,11.4,25.5,25.5,25.5c14,0,25.5-11.4,25.5-25.5v-4v-84.7c0-17.5,14.2-31.6,31.6-31.6s31.6,14.2,31.6,31.5v0.2v88.8c0,1.4,0.2,2.3,0.3,3c1.6,12.6,12.1,22.4,25.2,22.4c13.1,0,23.9-10,25.2-22.9c0.2-0.5,0.2-1,0.2-1.7c0-0.3,0-0.5,0-0.9v-88.8v-0.2c0.2-17.3,14.2-31.5,31.6-31.5s31.8,14.2,31.8,31.6v45.8c0,0.2,0,0.5,0,0.7v42.5c0,1.4,0.2,2.6,0.3,3.5c1.7,12.4,12.2,21.8,25.2,21.8c13.1,0,23.6-9.8,25.2-22.5c0.2-0.7,0.2-1.4,0.2-2.1c0-0.2,0-0.5,0-0.7v-42.8c0.2-17.3,14.3-31.3,31.6-31.3c17.5,0,31.8,14.2,31.8,31.6V613c0,14,11.4,25.5,25.5,25.5c14,0,25.5-11.4,25.5-25.5v-21.1C858.4,546.4,821.4,509.4,775.8,509.4z M309.3,651.4c0-25.7,4.2-38.1,41.4-40.9v93.7c0,18,1.9,35.6,5.4,52.6C331.1,723.1,309.3,679.2,309.3,651.4z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M528.7,385.5c-9.6,10.1-9.3,26.2,1,36c4.9,4.7,11.2,7,17.5,7c6.8,0,13.5-2.6,18.5-7.9c28.7-30.2,45.8-69.9,48.4-111.5c3-47.5-12.8-93.1-44.2-128.8s-75-56.8-122.5-59.8c-97.9-5.9-182.4,68.8-188.5,166.7c-3,47.5,12.9,93.1,44.4,128.8c9.3,10.5,25.3,11.5,35.8,2.3s11.5-25.3,2.3-35.8c-22.5-25.5-33.7-58.2-31.6-92.1c4.2-69.9,64.7-123.4,134.5-119.2c33.9,2.1,65,17.3,87.4,42.6c22.5,25.5,33.7,58,31.6,92.1C561.6,335.7,549.2,364,528.7,385.5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M625.9,426.9c12.4,6.6,27.8,1.9,34.4-10.7c16.8-31.8,26.6-66.4,28.8-102.7C697.7,174.2,591.3,54,452,45.4c-67.4-4.2-132.5,18.3-183.1,63.1s-80.7,106.6-84.9,174c-5.6,90.7,38.3,177.7,114.3,227.5c4.4,2.8,9.1,4.2,14,4.2c8.2,0,16.4-4,21.3-11.5c7.7-11.7,4.4-27.6-7.3-35.1c-60.8-39.7-95.8-109.4-91.4-181.7c3.3-53.8,27.4-103.3,67.8-139.1S395,93.1,448.9,96.5c111.3,6.8,196.2,102.9,189.4,214.1c-1.7,29.2-9.6,56.8-23.1,82.1C608.7,404.9,613.5,420.4,625.9,426.9z'
  })),
  textarea: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 32 32'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.136 21.28h-1.216v-18.24h1.216v-1.824h-4.864v1.824h1.216v18.24h-1.216v1.824h4.864z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M11.763 4.864v2.432h16.397v20.672h-24.32v-20.672h1.786v-2.432h-4.218v25.536h29.184v-25.536z'
  })),
  toggle: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M661,830.7H343.8c-168.5,0-305.6-137.1-305.6-305.6c0-168.5,137.1-305.6,305.6-305.6H661c168.5,0,305.6,137.1,305.6,305.6C966.6,693.6,829.5,830.7,661,830.7z M343.8,275.5c-137.6,0-249.6,112-249.6,249.6c0,137.6,112,249.6,249.6,249.6H661c137.6,0,249.6-112,249.6-249.6c0-137.6-112-249.6-249.6-249.6H343.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M660.8,672c-81,0-146.9-65.9-146.9-146.9c0-81,65.9-146.9,146.9-146.9s146.9,65.9,146.9,146.9C807.7,606.1,741.8,672,660.8,672z M660.8,434.2c-50.1,0-90.9,40.8-90.9,90.9s40.8,90.9,90.9,90.9s90.9-40.8,90.9-90.9S711,434.2,660.8,434.2z'
  })),
  url: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 1000 1000'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M681.2,311.5c-15-15-37.7-15-52.8,0L312.3,627.7c-15,15-15,37.7,0,52.8c15,15,37.7,15,52.8,0l316.2-316.2C696.2,349.2,696.2,326.6,681.2,311.5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M338.6,699.5c-11.8,0-23.1-4.8-31.9-13.6c-8.7-8.7-13.6-20.1-13.6-31.9s4.8-23.1,13.6-31.9L622.9,306c8.7-8.7,20.1-13.6,31.9-13.6c11.8,0,23.1,4.8,31.9,13.6s13.6,20.1,13.6,31.9c0,11.8-4.8,23.1-13.6,31.9L370.5,685.9C361.8,694.7,350.5,699.5,338.6,699.5z M654.8,308c-7.7,0-15.1,3.2-20.9,9L317.8,633.2c-12.1,12.1-12.1,29.7,0,41.8c5.8,5.8,13.2,9,20.9,9c7.7,0,15.1-3.2,20.9-9l316.2-316.2c12.1-12.1,12.1-29.7,0-41.8C669.9,311.2,662.5,308,654.8,308z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M365,891l131.7-131.7c52.8-52.8,67.8-131.7,41.4-199.5l-63.9,63.9c0,30.1-7.6,60.2-33.8,86.6L308.8,842c-45.1,45.1-116.6,45.1-158.1,0c-45.1-45.1-45.1-116.6,0-158.1l131.7-131.7c22.7-22.7,56.5-33.8,86.6-33.8l63.9-63.9c-67.8-26.4-146.7-15-199.5,41.4L101.6,627.7c-71.5,71.5-71.5,191.9,0,263.4C173.2,966.3,293.5,966.3,365,891z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M233.3,955.2c-52.5,0-101.2-20.9-137.3-58.8c-74.3-74.4-74.3-200,0.1-274.3l131.6-131.6c34.6-37,82.1-57.3,133.9-57.3c25.1,0,50.1,4.7,74,14.1l11.1,4.3l-74.6,74.6H369c-30.6,0-61.6,12.1-81.1,31.5L156,689.6c-19.6,18-30.7,42.8-31.3,69.7c-0.6,28.3,10.9,56.4,31.6,77.1l0.2,0.2c18.5,20.2,44.1,31.3,71.9,31.3c28,0,54.6-11.2,74.9-31.6L435,704.8c21.5-21.7,31.5-47.4,31.5-81.1v-3.2l74.6-74.6l4.3,11.1c28,72,11.1,153.6-43.2,207.8L370.6,896.5C334.5,934.4,285.8,955.2,233.3,955.2z M361.6,448.8c-47.4,0-91,18.6-122.6,52.5l-0.2,0.2L107.1,633.2c-68.4,68.4-68.4,184,0,252.4l0.1,0.1c33.1,34.8,77.9,54,126.1,54s93-19.2,126.1-54l0.1-0.1l131.7-131.7c47-47,63.6-116.5,43.7-179.8L482,627c-0.7,36-12.5,65-36,88.8L314.3,847.5c-23.3,23.3-53.8,36.1-85.9,36.1c-32.2,0-61.7-12.9-83.3-36.2c-23.6-23.6-36.7-55.8-36-88.3c0.7-31.2,13.5-59.9,36.2-80.8l131.6-131.6c21.9-21.9,54.9-35.2,88.8-36l52.9-52.9C400,451.8,380.9,448.8,361.6,448.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M549.5,285.1l131.7-131.7c45.1-45.1,116.6-45.1,158.1,0c41.4,45.1,45.1,116.6,0,158.1L707.6,443.2C684.9,465.9,651.1,477,621,477l-63.9,63.9c67.8,26.4,146.7,11.3,199.5-41.4l131.7-131.7c71.5-71.5,71.5-191.9,0-263.4s-191.9-71.5-263.4,0l-128,128c-52.8,52.8-67.8,131.7-41.4,199.5l63.9-63.9C515.5,337.9,526.8,307.8,549.5,285.1z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M625.1,561.4c-24.4,0-48.2-4.5-70.8-13.3l-11.1-4.3l74.6-74.6h3.2c30.6,0,61.6-12.1,81.1-31.5L834,305.8c19.8-18.1,30.4-43.6,29.9-71.8c-0.4-27.3-11.5-54.7-30.4-75.3c-18.5-20.2-44.1-31.3-71.9-31.3c-28,0-54.6,11.2-74.9,31.6L555,290.6c-21.3,21.3-31.4,49.1-27.9,76.4l0.5,3.8l-75,75l-4.3-11.1c-28-72-11.1-153.6,43.2-207.8l128-128C655.5,62.8,704.2,43,756.6,43s101.1,19.9,137.2,55.9c74.4,74.4,74.4,200,0,274.4L762.1,505C725.7,541.3,677.1,561.4,625.1,561.4zM571.3,537.6c17.3,5.4,35.4,8.2,53.7,8.2c47.8,0,92.6-18.4,126.1-51.9l131.7-131.7c68.4-68.4,68.4-184,0-252.4c-33.1-33.1-77.9-51.4-126.2-51.4c-48.3,0-93.1,18.2-126.2,51.4l-128,128c-47,47-63.6,116.5-43.7,179.8l52.5-52.5c-2.8-30.8,9-61.8,32.7-85.5l131.7-131.7c23.3-23.3,53.8-36.1,85.9-36.1c32.2,0,61.8,12.9,83.4,36.4c21.4,23.3,34,54.5,34.5,85.6c0.5,32.6-11.8,62.2-34.9,83.4L713.1,448.7c-21.9,21.9-54.9,35.2-88.8,36L571.3,537.6z'
  })),
  form1: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 58 58'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M41.5,2.1H7.8C4,2.1,1,5.2,1,8.9v40.5c0,3.7,3,6.8,6.8,6.8h18.6v-3.4H7.8c-1.9,0-3.4-1.5-3.4-3.4V8.9c0-1.9,1.5-3.4,3.4-3.4h33.8c1.9,0,3.4,1.5,3.4,3.4v19.8l3.4-3.4V8.9C48.3,5.2,45.2,2.1,41.5,2.1z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M38.1,15.6h-27v-3.4h27V15.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M38.1,23h-27v-3.4h27V23z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M35.2,29.6H13.5v-2.7h21.7V29.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M35.2,35.4H13.5v-2.7h21.7V35.4z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M35.2,27.8v6.3h-2.7v-6.3H35.2z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M16.2,27.9v6.3h-2.7v-6.3H16.2z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M43.4,31.9c-0.7,0.4-1.2,1-1.4,1.8c-0.9-0.3-1.9-0.1-2.7,0.3c-0.7,0.4-1.2,1-1.4,1.8c-0.9-0.3-1.9-0.1-2.7,0.3c-0.4,0.4-0.8,0.7-1.1,1.3L31,34c-1.1-1.3-3-1.5-4.4-0.7c-0.8,0.6-1.4,1.4-1.5,2.4c-0.1,1,0.1,2,0.8,2.8l4,4.5c-0.7,0.3-1.2,0.6-1.8,1.2c-0.4,0.5-0.9,1.2-1,1.9c0,0.3,0.1,0.6,0.3,0.9l5.8,6.5c4.3,4.8,11.6,5.5,16.5,1.6c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.3-0.2,0.3-0.3c5-4.7,5.2-12.9,0.4-18.3l-3-3.4C46.7,31.4,44.8,31.1,43.4,31.9z M49.1,37.5c4,4.5,3.8,11.2-0.3,15.2c-0.3,0.2-0.4,0.4-0.7,0.6c-3.8,3.1-9.9,2.4-13.3-1.4l-5.3-6c0-0.2,0.1-0.2,0.2-0.3c0.3-0.3,0.7-0.5,1.3-0.6c0.5,0,0.9,0.2,1.2,0.6l4.1,4.6c0.4,0.5,1.1,0.5,1.6,0.1s0.5-1.1,0.1-1.6l-4.1-4.6l-1.1-1.3l-5.2-5.9c-0.2-0.3-0.4-0.6-0.3-1c0-0.3,0.3-0.5,0.5-0.8c0.4-0.2,1.1-0.1,1.5,0.3l5.2,5.8l1.5,1.7c0.4,0.5,1.1,0.5,1.6,0.1c0.5-0.4,0.5-1.1,0.1-1.6l-1.5-1.7c-0.2-0.3-0.4-0.6-0.3-1c0-0.3,0.2-0.6,0.5-0.8c0.5-0.3,1.1-0.1,1.5,0.3l0.7,0.8l0.7,0.8c0.4,0.5,1.1,0.5,1.6,0.1c0.5-0.4,0.5-1.1,0.1-1.6l-0.7-0.8c-0.2-0.3-0.4-0.6-0.3-1c0-0.3,0.2-0.6,0.5-0.8c0.5-0.3,1.1-0.1,1.5,0.3l0.7,0.8l0.7,0.8c0.4,0.5,1.1,0.5,1.6,0.1c0.5-0.4,0.5-1.1,0.1-1.6l-0.7-0.8c-0.2-0.3-0.4-0.6-0.3-1c0-0.3,0.2-0.6,0.5-0.8l0,0c0.5-0.3,1.1-0.1,1.5,0.3L49.1,37.5L49.1,37.5z'
  })),
  form2: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 58 58'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M44.4,5.6H10.9c-4.1,0-7.4,3.3-7.4,7.4v33.5c0,4.1,3.3,7.4,7.4,7.4h15.4l3.7-1.9l-3.7-1.9H10.9c-2.1,0-3.7-1.7-3.7-3.7V13.1c0-2.1,1.7-3.7,3.7-3.7h33.5c2.1,0,3.7,1.7,3.7,3.7v30l0.1-0.1c0.4-2.3,1.7-4.4,3.6-5.7V13.1C51.9,9,48.5,5.6,44.4,5.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.7,19.6h26.1v-3.7H14.7V19.6z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M14.7,27h26.1v-3.7H14.7V27z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M14.7,34.5h26.1v-3.7H14.7V34.5z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M56.2,45l0-3.7c0-1-0.4-2-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1l-22.6,0.2c-1,0-4.6,0.5-5.3,1.1l-7.1,4.6l7.2,4.4c0,0,4.2,1,5.3,1l22.6-0.2C54.5,48.7,56.2,47,56.2,45z M29.9,47.1c-0.3,0-1.2-0.2-2.2-0.4l-0.1-6.8c0.8-0.1,1.7-0.2,2.2-0.2l17-0.2l0.1,7.4L29.9,47.1z'
  })),
  form3: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 20,
    height: 20,
    role: 'img',
    viewBox: '0 0 58 58'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M41.5,46.1h-27v-3.4h27V46.1z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M20.7,26.3l10.1,10.1l21.2-21.2L41.8,5.1L20.7,26.3z M44.2,12.8c0.7,0.7,0.7,1.8,0,2.5L32,27.6c-0.3,0.4-0.8,0.5-1.3,0.5c-0.5,0-0.9-0.2-1.3-0.5c-0.7-0.7-0.7-1.8,0-2.5l12.3-12.3C42.4,12.1,43.5,12.1,44.2,12.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M56,5.8l-4.8-4.8c-1.4-1.4-3.9-1.4-5.3,0l-1.6,1.6l10.1,10.1l1.5-1.5C57.4,9.7,57.4,7.3,56,5.8z'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    d: 'M46.9,56.3H4.6c-1,0-1.8-0.8-1.8-1.8V9.7c0-1,0.8-1.8,1.8-1.8H33c1,0,1.8,0.8,1.8,1.8c0,1-0.8,1.8-1.8,1.8H6.5v41.1h40.4c1.4,0,2.6-1.2,2.6-2.6V26.9c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8V50C53.2,53.5,50.4,56.3,46.9,56.3z'
  })),
  'star-rating': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
    width: 36,
    height: 34,
    viewBox: '0 0 36 34'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
    fill: '#4A01E0',
    d: 'M6.44547 32.2901C6.26997 33.2891 7.25547 34.0698 8.12397 33.6243L18.0015 28.5483L27.8767 33.6243C28.7452 34.0698 29.7307 33.2891 29.5552 32.2923L27.6877 21.6498L35.6122 14.0988C36.3547 13.3923 35.9722 12.1008 34.9777 11.9613L23.9572 10.3953L19.0432 0.659573C18.9496 0.462223 18.8019 0.295485 18.6173 0.178731C18.4327 0.0619773 18.2188 0 18.0003 0C17.7819 0 17.568 0.0619773 17.3834 0.178731C17.1988 0.295485 17.0511 0.462223 16.9575 0.659573L12.0435 10.3976L1.02297 11.9636C0.0307202 12.1031 -0.35403 13.3946 0.38622 14.1011L8.31297 21.6521L6.44547 32.2946V32.2901ZM17.4817 26.0643L9.18822 30.3258L10.7497 21.4226C10.7863 21.2176 10.772 21.0068 10.708 20.8087C10.6441 20.6106 10.5325 20.4312 10.383 20.2863L3.84447 14.0538L12.9615 12.7578C13.1503 12.7293 13.3293 12.6555 13.4833 12.5426C13.6373 12.4298 13.7617 12.2813 13.8457 12.1098L17.997 3.87932L22.1527 12.1098C22.2368 12.2813 22.3611 12.4298 22.5151 12.5426C22.6691 12.6555 22.8482 12.7293 23.037 12.7578L32.154 14.0516L25.6155 20.2841C25.4656 20.4292 25.3538 20.6089 25.2898 20.8075C25.2259 21.006 25.2118 21.2173 25.2487 21.4226L26.8102 30.3258L18.5167 26.0643C18.3563 25.9816 18.1785 25.9385 17.9981 25.9385C17.8177 25.9385 17.6398 25.9816 17.4795 26.0643H17.4817Z'
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (UAGB_Block_Icons);

/***/ }),

/***/ "./assets/src/dashboard-app/MainNav.js":
/*!*********************************************!*\
  !*** ./assets/src/dashboard-app/MainNav.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainNav; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);







function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function MainNav() {
  const menus = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome', 'ultimate-addons-for-gutenberg'),
    slug: uag_react.home_slug,
    path: ''
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Blocks', 'ultimate-addons-for-gutenberg'),
    slug: uag_react.home_slug,
    path: 'blocks'
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'ultimate-addons-for-gutenberg'),
    slug: uag_react.home_slug,
    path: 'settings'
  }];
  const query = new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)()?.search);
  const activePage = query.get('page') ? query.get('page') : uag_react.home_slug;
  const activePath = query.get('path') ? query.get('path') : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure, {
    as: "nav",
    className: "bg-white shadow"
  }, _ref => {
    let {
      open
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "max-w-full mx-auto px-2 sm:px-6 lg:px-8"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative flex justify-between h-16"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
      className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "sr-only"
    }, "Open main menu"), open ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
      className: "block h-6 w-6",
      "aria-hidden": "true"
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {
      className: "block h-6 w-6",
      "aria-hidden": "true"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0 flex items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "hidden lg:block h-8 w-auto",
      src: uag_react.logo_url,
      alt: "Workflow"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hidden sm:ml-8 sm:flex sm:space-x-8"
    }, menus.map((menu, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      index: key,
      key: `?page=${menu.slug}&path=${menu.path}`,
      to: {
        pathname: 'options-general.php',
        search: `?page=${menu.slug}${'' !== menu.path ? '&path=' + menu.path : ''}`
      },
      className: `${activePage === menu.slug && activePath === menu.path ? ' border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`
    }, menu.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "sr-only"
    }, "View notifications"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.BellIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {
      as: "div",
      className: "ml-3 relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Button, {
      className: "bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "sr-only"
    }, "Open user menu"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "h-8 w-8 rounded-full",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: ""
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Items, {
      className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, null, _ref2 => {
      let {
        active
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')
      }, "Your Profile");
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, null, _ref3 => {
      let {
        active
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')
      }, "Settings");
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, null, _ref4 => {
      let {
        active
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')
      }, "Sign out");
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Panel, {
      className: "sm:hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pt-2 pb-4 space-y-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
      as: "a",
      href: "#",
      className: "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    }, "Dashboard"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
      as: "a",
      href: "#",
      className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    }, "Team"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
      as: "a",
      href: "#",
      className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    }, "Projects"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
      as: "a",
      href: "#",
      className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
    }, "Calendar"))));
  });
}

/***/ }),

/***/ "./assets/src/dashboard-app/SettingsRoute.js":
/*!***************************************************!*\
  !*** ./assets/src/dashboard-app/SettingsRoute.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _pages_welcome_Welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/welcome/Welcome */ "./assets/src/dashboard-app/pages/welcome/Welcome.js");
/* harmony import */ var _DashboardApp_pages_blocks_Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @DashboardApp/pages/blocks/Blocks */ "./assets/src/dashboard-app/pages/blocks/Blocks.js");






function SettingsRoute() {
  const query = new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)().search);
  const page = query.get('page');
  const path = query.get('path');
  const currentEvent = query.get('event');
  let routePage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Default route fallback");

  if (uag_react.home_slug === page) {
    if ('getting-started' === currentEvent) {
      routePage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_welcome_Welcome__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    } else {
      switch (path) {
        case 'blocks':
          routePage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DashboardApp_pages_blocks_Blocks__WEBPACK_IMPORTED_MODULE_3__["default"], null);
          break;

        case 'settings':
          routePage = 'Settings';
          break;

        default:
          routePage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_welcome_Welcome__WEBPACK_IMPORTED_MODULE_2__["default"], null);
          break;
      }
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, routePage);
}

/* harmony default export */ __webpack_exports__["default"] = (SettingsRoute);

/***/ }),

/***/ "./assets/src/dashboard-app/SettingsWrap.js":
/*!**************************************************!*\
  !*** ./assets/src/dashboard-app/SettingsWrap.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNav */ "./assets/src/dashboard-app/MainNav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _SettingsRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsRoute */ "./assets/src/dashboard-app/SettingsRoute.js");





const SettingsWrap = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MainNav__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsRoute__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsWrap);

/***/ }),

/***/ "./assets/src/dashboard-app/pages/blocks/BlockCard.js":
/*!************************************************************!*\
  !*** ./assets/src/dashboard-app/pages/blocks/BlockCard.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Common/block-icons */ "./assets/src/common/block-icons.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/switch/switch.esm.js");




const BlockCard = props => {
  const {
    doc,
    link,
    slug,
    title
  } = props.blockInfo;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: slug,
    className: "relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0"
  }, _Common_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"][slug]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 min-w-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-sm font-medium text-gray-900 mb-0"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "text-sm text-gray-500 truncate",
    href: `https://ultimategutenberg.com/blocks/${link}`,
    target: "_blank",
    rel: "noreferrer"
  }, "Live Demo")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
    checked: false // onChange={setEnabled}
    ,
    className: `${ false ? 0 : 'bg-teal-700'}
                relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Use setting"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "false",
    className: `${ false ? 0 : 'translate-x-0'}
                    pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockCard);

/***/ }),

/***/ "./assets/src/dashboard-app/pages/blocks/BlockCardsGroup.js":
/*!******************************************************************!*\
  !*** ./assets/src/dashboard-app/pages/blocks/BlockCardsGroup.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DashboardApp_pages_blocks_BlockCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @DashboardApp/pages/blocks/BlockCard */ "./assets/src/dashboard-app/pages/blocks/BlockCard.js");


const blocksInfo = uag_react.blocks_info;

const BlockCardsGroup = props => {
  const renderBlockCards = blocksInfo.map((block, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DashboardApp_pages_blocks_BlockCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      blockInfo: block
    });
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-2 gap-4 sm:grid-cols-3 p-6"
  }, renderBlockCards);
};

/* harmony default export */ __webpack_exports__["default"] = (BlockCardsGroup);

/***/ }),

/***/ "./assets/src/dashboard-app/pages/blocks/Blocks.js":
/*!*********************************************************!*\
  !*** ./assets/src/dashboard-app/pages/blocks/Blocks.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DashboardApp_pages_blocks_FilterTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @DashboardApp/pages/blocks/FilterTabs */ "./assets/src/dashboard-app/pages/blocks/FilterTabs.js");
/* harmony import */ var _DashboardApp_pages_blocks_BlockCardsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @DashboardApp/pages/blocks/BlockCardsGroup */ "./assets/src/dashboard-app/pages/blocks/BlockCardsGroup.js");




const Blocks = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DashboardApp_pages_blocks_FilterTabs__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DashboardApp_pages_blocks_BlockCardsGroup__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Blocks);

/***/ }),

/***/ "./assets/src/dashboard-app/pages/blocks/FilterTabs.js":
/*!*************************************************************!*\
  !*** ./assets/src/dashboard-app/pages/blocks/FilterTabs.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

const FilterTabs = props => {
  const [selectedTab, setselectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
  let tabs = [{
    name: 'All',
    slug: 'all'
  }, {
    name: 'Creative',
    slug: 'creative'
  }, {
    name: 'Content',
    slug: 'content'
  }, {
    name: 'Post',
    slug: 'post'
  }, {
    name: 'Social',
    slug: 'social'
  }, {
    name: 'Form',
    slug: 'form'
  }, {
    name: 'SEO',
    slug: 'seo'
  }, {
    name: 'Extensions',
    slug: 'extensions'
  }];

  const tabClickHandler = e => {
    e.preventDefault();
    let slug = e.target.getAttribute('data-slug');
    setselectedTab(slug);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-4 sm:px-6 lg:px-8 py-6 bg-white m-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sm:hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "tabs",
    className: "sr-only"
  }, "Select a tab"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "tabs",
    name: "tabs",
    className: "block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: tab.name
  }, tab.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hidden justify-between sm:flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex space-x-4",
    "aria-label": "Tabs"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: tab.name,
    className: classNames(tab.slug === selectedTab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md cursor-pointer'),
    onClick: tabClickHandler,
    "data-slug": tab.slug
  }, tab.name))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "z-0 flex shadow-sm rounded-md justify-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-wpcolor text-[#fff] text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
  }, "Activate all"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
  }, "Deactivate all"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterTabs);

/***/ }),

/***/ "./assets/src/dashboard-app/pages/welcome/Welcome.js":
/*!***********************************************************!*\
  !*** ./assets/src/dashboard-app/pages/welcome/Welcome.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const Welcome = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    className: "py-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "sr-only"
  }, "Page title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-4 lg:col-span-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    "aria-labelledby": "section-1-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "sr-only",
    id: "section-1-title"
  }, "Section title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rounded-lg bg-white overflow-hidden shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Powerful Blocks & Beautiful Templates for any kind of website.', 'ultimate-addons-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    width: "100%",
    height: "380px",
    src: "https://www.youtube.com/embed/N-MLUplUoZc?showinfo=0&controls=0",
    title: "YouTube video player",
    frameBorder: "0",
    allowFullScreen: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "relative z-0 inline-flex shadow-sm rounded-md py-6 justify-center w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-wpcolor text-[#fff] text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
  }, "Create New Page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
  }, "Read Full Guide")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    "aria-labelledby": "section-2-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "sr-only",
    id: "section-2-title"
  }, "Section title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rounded-lg bg-white overflow-hidden shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-6"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createLocation": function() { return /* binding */ createLocation; },
/* harmony export */   "locationsAreEqual": function() { return /* binding */ locationsAreEqual; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ (function(module) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./assets/src/common/all-config.scss":
/*!*******************************************!*\
  !*** ./assets/src/common/all-config.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter; },
/* harmony export */   "Prompt": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Prompt; },
/* harmony export */   "Redirect": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Redirect; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router; },
/* harmony export */   "StaticRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter; },
/* harmony export */   "Switch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Switch; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath; },
/* harmony export */   "useHistory": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHistory; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams; },
/* harmony export */   "useRouteMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteMatch; },
/* harmony export */   "withRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.withRouter; },
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; }
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_6__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Prompt": function() { return /* binding */ Prompt; },
/* harmony export */   "Redirect": function() { return /* binding */ Redirect; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "StaticRouter": function() { return /* binding */ StaticRouter; },
/* harmony export */   "Switch": function() { return /* binding */ Switch; },
/* harmony export */   "__HistoryContext": function() { return /* binding */ historyContext; },
/* harmony export */   "__RouterContext": function() { return /* binding */ context; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "useHistory": function() { return /* binding */ useHistory; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useRouteMatch": function() { return /* binding */ useRouteMatch; },
/* harmony export */   "withRouter": function() { return /* binding */ withRouter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__["default"])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__["default"])();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_6__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default().Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Component);
}

var useContext = (react__WEBPACK_IMPORTED_MODULE_1___default().useContext);
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function AcademicCapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 14l9-5-9-5-9 5 9 5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AcademicCapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function AdjustmentsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AdjustmentsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/AnnotationIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AnnotationIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function AnnotationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnnotationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArchiveIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArchiveIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArchiveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArchiveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 17l-4 4m0 0l-4-4m4 4V3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7l4-4m0 0l4 4m-4-4v18"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 13l-5 5m0 0l-5-5m5 5V6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 17l-5-5m0 0l5-5m-5 5h12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7l5 5m0 0l-5 5m5-5H6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 11l5-5m0 0l5 5m-5-5v12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 10l7-7m0 0l7 7m-7-7v18"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowsExpandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function AtSymbolIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AtSymbolIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BackspaceIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BackspaceIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BackspaceIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BackspaceIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BadgeCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgeCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BanIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BanIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BanIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BanIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BeakerIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BeakerIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BeakerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BeakerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BellIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BellIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BellIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BellIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BookOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookOpenIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BookOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BookmarkAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BookmarkIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookmarkIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BookmarkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function BriefcaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BriefcaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CakeIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CakeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CakeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CalculatorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalculatorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CalendarIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CalendarIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CalendarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalendarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CameraIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CameraIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CashIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CashIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChartPieIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartPieIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChartPieIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartPieIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartSquareBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChatAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChatAltIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatAltIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChatAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChatIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChatIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CheckCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 11l7-7 7 7M5 19l7-7 7 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15l7-7 7 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChipIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChipIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCopyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ClipboardIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ClipboardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ClipboardListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ClockIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClockIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ClockIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClockIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CloudDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CloudIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CloudIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CloudUploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudUploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CodeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CodeIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CogIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CogIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CogIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CogIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CollectionIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CollectionIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CollectionIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ColorSwatchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ColorSwatchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CreditCardIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CreditCardIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CreditCardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreditCardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CubeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CubeIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CubeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CubeTransparentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeTransparentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyBangladeshiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyDollarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyEuroIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyPoundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyRupeeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CurrencyYenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyYenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CursorClickIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CursorClickIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function CursorClickIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CursorClickIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DatabaseIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DatabaseIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DatabaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DatabaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DesktopComputerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DesktopComputerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DeviceMobileIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceMobileIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DeviceTabletIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceTabletIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentReportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentReportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentSearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentSearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DocumentTextIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentTextIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsCircleHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DotsVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DownloadIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DownloadIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DuplicateIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DuplicateIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function DuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function EmojiHappyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiHappyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function EmojiSadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiSadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ExclamationIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExclamationIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ExternalLinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExternalLinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/EyeIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EyeIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function EyeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function EyeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FastForwardIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FastForwardIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FastForwardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FastForwardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FilmIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FilmIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FilmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FilterIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FilterIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FilterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FingerPrintIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FingerPrintIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FireIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FireIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FireIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FireIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FlagIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FlagIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FlagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FlagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderAddIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FolderAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FolderDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FolderIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FolderOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function FolderRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/GiftIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GiftIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function GiftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GiftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function GlobeAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/GlobeIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GlobeIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function GlobeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/HandIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HandIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function HandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/HashtagIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HashtagIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function HashtagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HashtagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HeartIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function HeartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HeartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/HomeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HomeIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function HomeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/IdentificationIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/IdentificationIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function IdentificationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IdentificationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/InboxIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InboxIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function InboxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/InboxInIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InboxInIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function InboxInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function InformationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InformationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/KeyIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/KeyIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function KeyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LibraryIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LibraryIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LibraryIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LibraryIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LightBulbIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LightBulbIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LightBulbIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightBulbIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LightningBoltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 10V3L4 14h7v7l9-11h-7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightningBoltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LinkIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LinkIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LocationMarkerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LocationMarkerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LockClosedIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LockClosedIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LockClosedIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockClosedIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LockOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LockOpenIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LockOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LoginIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LoginIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LoginIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LogoutIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LogoutIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LogoutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LogoutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MailIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MailIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MailIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MailOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MailOpenIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MailOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MapIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MapIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuAlt1Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h8m-8 6h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt1Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuAlt3Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16m-7 6h7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt3Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuAlt4Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 8h16M4 16h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt4Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MicrophoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MicrophoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MinusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MinusIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MinusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MinusSmIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusSmIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MinusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18 12H6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MoonIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MoonIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MoonIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MoonIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MusicNoteIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MusicNoteIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/NewspaperIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/NewspaperIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function NewspaperIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NewspaperIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OfficeBuildingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperAirplaneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PaperClipIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PaperClipIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PaperClipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperClipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PauseIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PauseIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PauseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PauseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PencilIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PhoneIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PhoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIncomingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneMissedCallIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneOutgoingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PhotographIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhotographIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PhotographIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotographIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PlayIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlayIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PlayIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlayIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PlusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PlusIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PlusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v16m8-8H4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PlusSmIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusSmIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PlusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartLineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PrinterIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PrinterIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PrinterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PrinterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PuzzleIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PuzzleIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function PuzzleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PuzzleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/QrcodeIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/QrcodeIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function QrcodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QrcodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QuestionMarkCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptRefundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptTaxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/RefreshIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RefreshIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function RefreshIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RefreshIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ReplyIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReplyIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ReplyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReplyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/RewindIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RewindIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function RewindIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RewindIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/RssIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RssIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function RssIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RssIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SaveAsIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SaveAsIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SaveAsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveAsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SaveIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SaveIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SaveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ScaleIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ScaleIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ScaleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScaleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ScissorsIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ScissorsIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ScissorsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScissorsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SearchCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SearchIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SelectorIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SelectorIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SelectorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ServerIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ServerIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ServerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ServerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ShareIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShareIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ShareIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShareIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ShieldCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ShoppingBagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingBagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ShoppingCartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SortAscendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortAscendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SortDescendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortDescendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SparklesIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SparklesIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SparklesIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SparklesIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SpeakerphoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/StarIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StarIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function StarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function StatusOfflineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOfflineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function StatusOnlineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOnlineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/StopIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StopIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function StopIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StopIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SunIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SunIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SunIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SunIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SupportIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SupportIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SupportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TableIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TableIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TagIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TagIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TemplateIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TemplateIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TemplateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TerminalIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TerminalIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TerminalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TerminalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ThumbDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ThumbUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TicketIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TicketIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TicketIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TicketIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TranslateIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TranslateIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TranslateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TranslateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrashIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TrashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TrendingDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TrendingUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TruckIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TruckIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function TruckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TruckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UploadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UploadIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserAddIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserAddIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UserAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UserCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserGroupIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserGroupIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UserGroupIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserGroupIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UserIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UserRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UsersIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function UsersIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UsersIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/VariableIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VariableIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function VariableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VariableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function VideoCameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VideoCameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ViewBoardsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewBoardsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ViewGridAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ViewGridIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ViewListIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewListIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ViewListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 10h16M4 14h16M4 18h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function VolumeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function VolumeUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/WifiIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/WifiIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function WifiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WifiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/XCircleIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XCircleIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function XCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/XIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function XIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ZoomInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ZoomOutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomOutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicCapIcon": function() { return /* reexport safe */ _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "AdjustmentsIcon": function() { return /* reexport safe */ _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "AnnotationIcon": function() { return /* reexport safe */ _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "ArchiveIcon": function() { return /* reexport safe */ _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "ArrowCircleDownIcon": function() { return /* reexport safe */ _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "ArrowCircleLeftIcon": function() { return /* reexport safe */ _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "ArrowCircleRightIcon": function() { return /* reexport safe */ _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "ArrowCircleUpIcon": function() { return /* reexport safe */ _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "ArrowDownIcon": function() { return /* reexport safe */ _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "ArrowLeftIcon": function() { return /* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "ArrowNarrowDownIcon": function() { return /* reexport safe */ _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "ArrowNarrowLeftIcon": function() { return /* reexport safe */ _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "ArrowNarrowRightIcon": function() { return /* reexport safe */ _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "ArrowNarrowUpIcon": function() { return /* reexport safe */ _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "ArrowRightIcon": function() { return /* reexport safe */ _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "ArrowSmDownIcon": function() { return /* reexport safe */ _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "ArrowSmLeftIcon": function() { return /* reexport safe */ _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "ArrowSmRightIcon": function() { return /* reexport safe */ _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "ArrowSmUpIcon": function() { return /* reexport safe */ _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "ArrowUpIcon": function() { return /* reexport safe */ _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "ArrowsExpandIcon": function() { return /* reexport safe */ _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "AtSymbolIcon": function() { return /* reexport safe */ _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "BackspaceIcon": function() { return /* reexport safe */ _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "BadgeCheckIcon": function() { return /* reexport safe */ _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "BanIcon": function() { return /* reexport safe */ _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "BeakerIcon": function() { return /* reexport safe */ _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   "BellIcon": function() { return /* reexport safe */ _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   "BookOpenIcon": function() { return /* reexport safe */ _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__["default"]; },
/* harmony export */   "BookmarkAltIcon": function() { return /* reexport safe */ _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__["default"]; },
/* harmony export */   "BookmarkIcon": function() { return /* reexport safe */ _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__["default"]; },
/* harmony export */   "BriefcaseIcon": function() { return /* reexport safe */ _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__["default"]; },
/* harmony export */   "CakeIcon": function() { return /* reexport safe */ _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__["default"]; },
/* harmony export */   "CalculatorIcon": function() { return /* reexport safe */ _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__["default"]; },
/* harmony export */   "CalendarIcon": function() { return /* reexport safe */ _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__["default"]; },
/* harmony export */   "CameraIcon": function() { return /* reexport safe */ _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__["default"]; },
/* harmony export */   "CashIcon": function() { return /* reexport safe */ _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__["default"]; },
/* harmony export */   "ChartBarIcon": function() { return /* reexport safe */ _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__["default"]; },
/* harmony export */   "ChartPieIcon": function() { return /* reexport safe */ _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__["default"]; },
/* harmony export */   "ChartSquareBarIcon": function() { return /* reexport safe */ _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__["default"]; },
/* harmony export */   "ChatAlt2Icon": function() { return /* reexport safe */ _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__["default"]; },
/* harmony export */   "ChatAltIcon": function() { return /* reexport safe */ _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__["default"]; },
/* harmony export */   "ChatIcon": function() { return /* reexport safe */ _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__["default"]; },
/* harmony export */   "CheckCircleIcon": function() { return /* reexport safe */ _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__["default"]; },
/* harmony export */   "CheckIcon": function() { return /* reexport safe */ _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__["default"]; },
/* harmony export */   "ChevronDoubleDownIcon": function() { return /* reexport safe */ _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__["default"]; },
/* harmony export */   "ChevronDoubleLeftIcon": function() { return /* reexport safe */ _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__["default"]; },
/* harmony export */   "ChevronDoubleRightIcon": function() { return /* reexport safe */ _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__["default"]; },
/* harmony export */   "ChevronDoubleUpIcon": function() { return /* reexport safe */ _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__["default"]; },
/* harmony export */   "ChevronDownIcon": function() { return /* reexport safe */ _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__["default"]; },
/* harmony export */   "ChevronLeftIcon": function() { return /* reexport safe */ _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__["default"]; },
/* harmony export */   "ChevronRightIcon": function() { return /* reexport safe */ _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__["default"]; },
/* harmony export */   "ChevronUpIcon": function() { return /* reexport safe */ _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__["default"]; },
/* harmony export */   "ChipIcon": function() { return /* reexport safe */ _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__["default"]; },
/* harmony export */   "ClipboardCheckIcon": function() { return /* reexport safe */ _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__["default"]; },
/* harmony export */   "ClipboardCopyIcon": function() { return /* reexport safe */ _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__["default"]; },
/* harmony export */   "ClipboardListIcon": function() { return /* reexport safe */ _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__["default"]; },
/* harmony export */   "ClipboardIcon": function() { return /* reexport safe */ _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__["default"]; },
/* harmony export */   "ClockIcon": function() { return /* reexport safe */ _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__["default"]; },
/* harmony export */   "CloudDownloadIcon": function() { return /* reexport safe */ _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__["default"]; },
/* harmony export */   "CloudUploadIcon": function() { return /* reexport safe */ _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__["default"]; },
/* harmony export */   "CloudIcon": function() { return /* reexport safe */ _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__["default"]; },
/* harmony export */   "CodeIcon": function() { return /* reexport safe */ _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__["default"]; },
/* harmony export */   "CogIcon": function() { return /* reexport safe */ _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__["default"]; },
/* harmony export */   "CollectionIcon": function() { return /* reexport safe */ _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__["default"]; },
/* harmony export */   "ColorSwatchIcon": function() { return /* reexport safe */ _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__["default"]; },
/* harmony export */   "CreditCardIcon": function() { return /* reexport safe */ _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__["default"]; },
/* harmony export */   "CubeTransparentIcon": function() { return /* reexport safe */ _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__["default"]; },
/* harmony export */   "CubeIcon": function() { return /* reexport safe */ _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__["default"]; },
/* harmony export */   "CurrencyBangladeshiIcon": function() { return /* reexport safe */ _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__["default"]; },
/* harmony export */   "CurrencyDollarIcon": function() { return /* reexport safe */ _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__["default"]; },
/* harmony export */   "CurrencyEuroIcon": function() { return /* reexport safe */ _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__["default"]; },
/* harmony export */   "CurrencyPoundIcon": function() { return /* reexport safe */ _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__["default"]; },
/* harmony export */   "CurrencyRupeeIcon": function() { return /* reexport safe */ _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__["default"]; },
/* harmony export */   "CurrencyYenIcon": function() { return /* reexport safe */ _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__["default"]; },
/* harmony export */   "CursorClickIcon": function() { return /* reexport safe */ _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__["default"]; },
/* harmony export */   "DatabaseIcon": function() { return /* reexport safe */ _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__["default"]; },
/* harmony export */   "DesktopComputerIcon": function() { return /* reexport safe */ _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__["default"]; },
/* harmony export */   "DeviceMobileIcon": function() { return /* reexport safe */ _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__["default"]; },
/* harmony export */   "DeviceTabletIcon": function() { return /* reexport safe */ _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__["default"]; },
/* harmony export */   "DocumentAddIcon": function() { return /* reexport safe */ _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__["default"]; },
/* harmony export */   "DocumentDownloadIcon": function() { return /* reexport safe */ _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__["default"]; },
/* harmony export */   "DocumentDuplicateIcon": function() { return /* reexport safe */ _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__["default"]; },
/* harmony export */   "DocumentRemoveIcon": function() { return /* reexport safe */ _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__["default"]; },
/* harmony export */   "DocumentReportIcon": function() { return /* reexport safe */ _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__["default"]; },
/* harmony export */   "DocumentSearchIcon": function() { return /* reexport safe */ _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__["default"]; },
/* harmony export */   "DocumentTextIcon": function() { return /* reexport safe */ _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__["default"]; },
/* harmony export */   "DocumentIcon": function() { return /* reexport safe */ _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__["default"]; },
/* harmony export */   "DotsCircleHorizontalIcon": function() { return /* reexport safe */ _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__["default"]; },
/* harmony export */   "DotsHorizontalIcon": function() { return /* reexport safe */ _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__["default"]; },
/* harmony export */   "DotsVerticalIcon": function() { return /* reexport safe */ _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__["default"]; },
/* harmony export */   "DownloadIcon": function() { return /* reexport safe */ _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__["default"]; },
/* harmony export */   "DuplicateIcon": function() { return /* reexport safe */ _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__["default"]; },
/* harmony export */   "EmojiHappyIcon": function() { return /* reexport safe */ _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__["default"]; },
/* harmony export */   "EmojiSadIcon": function() { return /* reexport safe */ _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__["default"]; },
/* harmony export */   "ExclamationCircleIcon": function() { return /* reexport safe */ _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__["default"]; },
/* harmony export */   "ExclamationIcon": function() { return /* reexport safe */ _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__["default"]; },
/* harmony export */   "ExternalLinkIcon": function() { return /* reexport safe */ _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__["default"]; },
/* harmony export */   "EyeOffIcon": function() { return /* reexport safe */ _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__["default"]; },
/* harmony export */   "EyeIcon": function() { return /* reexport safe */ _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__["default"]; },
/* harmony export */   "FastForwardIcon": function() { return /* reexport safe */ _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__["default"]; },
/* harmony export */   "FilmIcon": function() { return /* reexport safe */ _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__["default"]; },
/* harmony export */   "FilterIcon": function() { return /* reexport safe */ _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__["default"]; },
/* harmony export */   "FingerPrintIcon": function() { return /* reexport safe */ _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__["default"]; },
/* harmony export */   "FireIcon": function() { return /* reexport safe */ _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__["default"]; },
/* harmony export */   "FlagIcon": function() { return /* reexport safe */ _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__["default"]; },
/* harmony export */   "FolderAddIcon": function() { return /* reexport safe */ _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__["default"]; },
/* harmony export */   "FolderDownloadIcon": function() { return /* reexport safe */ _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__["default"]; },
/* harmony export */   "FolderOpenIcon": function() { return /* reexport safe */ _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__["default"]; },
/* harmony export */   "FolderRemoveIcon": function() { return /* reexport safe */ _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__["default"]; },
/* harmony export */   "FolderIcon": function() { return /* reexport safe */ _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__["default"]; },
/* harmony export */   "GiftIcon": function() { return /* reexport safe */ _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__["default"]; },
/* harmony export */   "GlobeAltIcon": function() { return /* reexport safe */ _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__["default"]; },
/* harmony export */   "GlobeIcon": function() { return /* reexport safe */ _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__["default"]; },
/* harmony export */   "HandIcon": function() { return /* reexport safe */ _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__["default"]; },
/* harmony export */   "HashtagIcon": function() { return /* reexport safe */ _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__["default"]; },
/* harmony export */   "HeartIcon": function() { return /* reexport safe */ _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__["default"]; },
/* harmony export */   "HomeIcon": function() { return /* reexport safe */ _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__["default"]; },
/* harmony export */   "IdentificationIcon": function() { return /* reexport safe */ _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__["default"]; },
/* harmony export */   "InboxInIcon": function() { return /* reexport safe */ _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__["default"]; },
/* harmony export */   "InboxIcon": function() { return /* reexport safe */ _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__["default"]; },
/* harmony export */   "InformationCircleIcon": function() { return /* reexport safe */ _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__["default"]; },
/* harmony export */   "KeyIcon": function() { return /* reexport safe */ _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__["default"]; },
/* harmony export */   "LibraryIcon": function() { return /* reexport safe */ _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__["default"]; },
/* harmony export */   "LightBulbIcon": function() { return /* reexport safe */ _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__["default"]; },
/* harmony export */   "LightningBoltIcon": function() { return /* reexport safe */ _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__["default"]; },
/* harmony export */   "LinkIcon": function() { return /* reexport safe */ _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__["default"]; },
/* harmony export */   "LocationMarkerIcon": function() { return /* reexport safe */ _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__["default"]; },
/* harmony export */   "LockClosedIcon": function() { return /* reexport safe */ _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__["default"]; },
/* harmony export */   "LockOpenIcon": function() { return /* reexport safe */ _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__["default"]; },
/* harmony export */   "LoginIcon": function() { return /* reexport safe */ _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__["default"]; },
/* harmony export */   "LogoutIcon": function() { return /* reexport safe */ _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__["default"]; },
/* harmony export */   "MailOpenIcon": function() { return /* reexport safe */ _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__["default"]; },
/* harmony export */   "MailIcon": function() { return /* reexport safe */ _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__["default"]; },
/* harmony export */   "MapIcon": function() { return /* reexport safe */ _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__["default"]; },
/* harmony export */   "MenuAlt1Icon": function() { return /* reexport safe */ _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__["default"]; },
/* harmony export */   "MenuAlt2Icon": function() { return /* reexport safe */ _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__["default"]; },
/* harmony export */   "MenuAlt3Icon": function() { return /* reexport safe */ _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__["default"]; },
/* harmony export */   "MenuAlt4Icon": function() { return /* reexport safe */ _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__["default"]; },
/* harmony export */   "MenuIcon": function() { return /* reexport safe */ _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__["default"]; },
/* harmony export */   "MicrophoneIcon": function() { return /* reexport safe */ _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__["default"]; },
/* harmony export */   "MinusCircleIcon": function() { return /* reexport safe */ _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__["default"]; },
/* harmony export */   "MinusSmIcon": function() { return /* reexport safe */ _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__["default"]; },
/* harmony export */   "MinusIcon": function() { return /* reexport safe */ _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__["default"]; },
/* harmony export */   "MoonIcon": function() { return /* reexport safe */ _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__["default"]; },
/* harmony export */   "MusicNoteIcon": function() { return /* reexport safe */ _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__["default"]; },
/* harmony export */   "NewspaperIcon": function() { return /* reexport safe */ _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__["default"]; },
/* harmony export */   "OfficeBuildingIcon": function() { return /* reexport safe */ _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__["default"]; },
/* harmony export */   "PaperAirplaneIcon": function() { return /* reexport safe */ _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__["default"]; },
/* harmony export */   "PaperClipIcon": function() { return /* reexport safe */ _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__["default"]; },
/* harmony export */   "PauseIcon": function() { return /* reexport safe */ _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__["default"]; },
/* harmony export */   "PencilAltIcon": function() { return /* reexport safe */ _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__["default"]; },
/* harmony export */   "PencilIcon": function() { return /* reexport safe */ _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__["default"]; },
/* harmony export */   "PhoneIncomingIcon": function() { return /* reexport safe */ _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__["default"]; },
/* harmony export */   "PhoneMissedCallIcon": function() { return /* reexport safe */ _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__["default"]; },
/* harmony export */   "PhoneOutgoingIcon": function() { return /* reexport safe */ _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__["default"]; },
/* harmony export */   "PhoneIcon": function() { return /* reexport safe */ _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__["default"]; },
/* harmony export */   "PhotographIcon": function() { return /* reexport safe */ _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__["default"]; },
/* harmony export */   "PlayIcon": function() { return /* reexport safe */ _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__["default"]; },
/* harmony export */   "PlusCircleIcon": function() { return /* reexport safe */ _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__["default"]; },
/* harmony export */   "PlusSmIcon": function() { return /* reexport safe */ _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__["default"]; },
/* harmony export */   "PlusIcon": function() { return /* reexport safe */ _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__["default"]; },
/* harmony export */   "PresentationChartBarIcon": function() { return /* reexport safe */ _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__["default"]; },
/* harmony export */   "PresentationChartLineIcon": function() { return /* reexport safe */ _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__["default"]; },
/* harmony export */   "PrinterIcon": function() { return /* reexport safe */ _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__["default"]; },
/* harmony export */   "PuzzleIcon": function() { return /* reexport safe */ _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__["default"]; },
/* harmony export */   "QrcodeIcon": function() { return /* reexport safe */ _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__["default"]; },
/* harmony export */   "QuestionMarkCircleIcon": function() { return /* reexport safe */ _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__["default"]; },
/* harmony export */   "ReceiptRefundIcon": function() { return /* reexport safe */ _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__["default"]; },
/* harmony export */   "ReceiptTaxIcon": function() { return /* reexport safe */ _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__["default"]; },
/* harmony export */   "RefreshIcon": function() { return /* reexport safe */ _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__["default"]; },
/* harmony export */   "ReplyIcon": function() { return /* reexport safe */ _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__["default"]; },
/* harmony export */   "RewindIcon": function() { return /* reexport safe */ _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__["default"]; },
/* harmony export */   "RssIcon": function() { return /* reexport safe */ _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__["default"]; },
/* harmony export */   "SaveAsIcon": function() { return /* reexport safe */ _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__["default"]; },
/* harmony export */   "SaveIcon": function() { return /* reexport safe */ _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__["default"]; },
/* harmony export */   "ScaleIcon": function() { return /* reexport safe */ _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__["default"]; },
/* harmony export */   "ScissorsIcon": function() { return /* reexport safe */ _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__["default"]; },
/* harmony export */   "SearchCircleIcon": function() { return /* reexport safe */ _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__["default"]; },
/* harmony export */   "SearchIcon": function() { return /* reexport safe */ _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__["default"]; },
/* harmony export */   "SelectorIcon": function() { return /* reexport safe */ _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__["default"]; },
/* harmony export */   "ServerIcon": function() { return /* reexport safe */ _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__["default"]; },
/* harmony export */   "ShareIcon": function() { return /* reexport safe */ _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__["default"]; },
/* harmony export */   "ShieldCheckIcon": function() { return /* reexport safe */ _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__["default"]; },
/* harmony export */   "ShieldExclamationIcon": function() { return /* reexport safe */ _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__["default"]; },
/* harmony export */   "ShoppingBagIcon": function() { return /* reexport safe */ _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__["default"]; },
/* harmony export */   "ShoppingCartIcon": function() { return /* reexport safe */ _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__["default"]; },
/* harmony export */   "SortAscendingIcon": function() { return /* reexport safe */ _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__["default"]; },
/* harmony export */   "SortDescendingIcon": function() { return /* reexport safe */ _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__["default"]; },
/* harmony export */   "SparklesIcon": function() { return /* reexport safe */ _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__["default"]; },
/* harmony export */   "SpeakerphoneIcon": function() { return /* reexport safe */ _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__["default"]; },
/* harmony export */   "StarIcon": function() { return /* reexport safe */ _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__["default"]; },
/* harmony export */   "StatusOfflineIcon": function() { return /* reexport safe */ _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__["default"]; },
/* harmony export */   "StatusOnlineIcon": function() { return /* reexport safe */ _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__["default"]; },
/* harmony export */   "StopIcon": function() { return /* reexport safe */ _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__["default"]; },
/* harmony export */   "SunIcon": function() { return /* reexport safe */ _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__["default"]; },
/* harmony export */   "SupportIcon": function() { return /* reexport safe */ _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__["default"]; },
/* harmony export */   "SwitchHorizontalIcon": function() { return /* reexport safe */ _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__["default"]; },
/* harmony export */   "SwitchVerticalIcon": function() { return /* reexport safe */ _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__["default"]; },
/* harmony export */   "TableIcon": function() { return /* reexport safe */ _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__["default"]; },
/* harmony export */   "TagIcon": function() { return /* reexport safe */ _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__["default"]; },
/* harmony export */   "TemplateIcon": function() { return /* reexport safe */ _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__["default"]; },
/* harmony export */   "TerminalIcon": function() { return /* reexport safe */ _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__["default"]; },
/* harmony export */   "ThumbDownIcon": function() { return /* reexport safe */ _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__["default"]; },
/* harmony export */   "ThumbUpIcon": function() { return /* reexport safe */ _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__["default"]; },
/* harmony export */   "TicketIcon": function() { return /* reexport safe */ _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__["default"]; },
/* harmony export */   "TranslateIcon": function() { return /* reexport safe */ _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__["default"]; },
/* harmony export */   "TrashIcon": function() { return /* reexport safe */ _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__["default"]; },
/* harmony export */   "TrendingDownIcon": function() { return /* reexport safe */ _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__["default"]; },
/* harmony export */   "TrendingUpIcon": function() { return /* reexport safe */ _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__["default"]; },
/* harmony export */   "TruckIcon": function() { return /* reexport safe */ _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__["default"]; },
/* harmony export */   "UploadIcon": function() { return /* reexport safe */ _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__["default"]; },
/* harmony export */   "UserAddIcon": function() { return /* reexport safe */ _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__["default"]; },
/* harmony export */   "UserCircleIcon": function() { return /* reexport safe */ _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__["default"]; },
/* harmony export */   "UserGroupIcon": function() { return /* reexport safe */ _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__["default"]; },
/* harmony export */   "UserRemoveIcon": function() { return /* reexport safe */ _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__["default"]; },
/* harmony export */   "UserIcon": function() { return /* reexport safe */ _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__["default"]; },
/* harmony export */   "UsersIcon": function() { return /* reexport safe */ _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__["default"]; },
/* harmony export */   "VariableIcon": function() { return /* reexport safe */ _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__["default"]; },
/* harmony export */   "VideoCameraIcon": function() { return /* reexport safe */ _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__["default"]; },
/* harmony export */   "ViewBoardsIcon": function() { return /* reexport safe */ _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__["default"]; },
/* harmony export */   "ViewGridAddIcon": function() { return /* reexport safe */ _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__["default"]; },
/* harmony export */   "ViewGridIcon": function() { return /* reexport safe */ _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__["default"]; },
/* harmony export */   "ViewListIcon": function() { return /* reexport safe */ _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__["default"]; },
/* harmony export */   "VolumeOffIcon": function() { return /* reexport safe */ _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__["default"]; },
/* harmony export */   "VolumeUpIcon": function() { return /* reexport safe */ _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__["default"]; },
/* harmony export */   "WifiIcon": function() { return /* reexport safe */ _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__["default"]; },
/* harmony export */   "XCircleIcon": function() { return /* reexport safe */ _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__["default"]; },
/* harmony export */   "XIcon": function() { return /* reexport safe */ _XIcon_js__WEBPACK_IMPORTED_MODULE_227__["default"]; },
/* harmony export */   "ZoomInIcon": function() { return /* reexport safe */ _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__["default"]; },
/* harmony export */   "ZoomOutIcon": function() { return /* reexport safe */ _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__["default"]; }
/* harmony export */ });
/* harmony import */ var _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcademicCapIcon.js */ "./node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js");
/* harmony import */ var _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjustmentsIcon.js */ "./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js");
/* harmony import */ var _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationIcon.js */ "./node_modules/@heroicons/react/outline/esm/AnnotationIcon.js");
/* harmony import */ var _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArchiveIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArchiveIcon.js");
/* harmony import */ var _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowCircleDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js");
/* harmony import */ var _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowCircleLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js");
/* harmony import */ var _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowCircleRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js");
/* harmony import */ var _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArrowCircleUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js");
/* harmony import */ var _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArrowDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js");
/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ArrowLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ArrowNarrowDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js");
/* harmony import */ var _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArrowNarrowLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArrowNarrowRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js");
/* harmony import */ var _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArrowNarrowUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js");
/* harmony import */ var _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArrowRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js");
/* harmony import */ var _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArrowSmDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js");
/* harmony import */ var _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArrowSmLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js");
/* harmony import */ var _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArrowSmRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js");
/* harmony import */ var _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArrowSmUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js");
/* harmony import */ var _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArrowUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js");
/* harmony import */ var _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArrowsExpandIcon.js */ "./node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js");
/* harmony import */ var _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AtSymbolIcon.js */ "./node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js");
/* harmony import */ var _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BackspaceIcon.js */ "./node_modules/@heroicons/react/outline/esm/BackspaceIcon.js");
/* harmony import */ var _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BadgeCheckIcon.js */ "./node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js");
/* harmony import */ var _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./BanIcon.js */ "./node_modules/@heroicons/react/outline/esm/BanIcon.js");
/* harmony import */ var _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BeakerIcon.js */ "./node_modules/@heroicons/react/outline/esm/BeakerIcon.js");
/* harmony import */ var _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./BellIcon.js */ "./node_modules/@heroicons/react/outline/esm/BellIcon.js");
/* harmony import */ var _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BookOpenIcon.js */ "./node_modules/@heroicons/react/outline/esm/BookOpenIcon.js");
/* harmony import */ var _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BookmarkAltIcon.js */ "./node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js");
/* harmony import */ var _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./BookmarkIcon.js */ "./node_modules/@heroicons/react/outline/esm/BookmarkIcon.js");
/* harmony import */ var _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./BriefcaseIcon.js */ "./node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js");
/* harmony import */ var _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CakeIcon.js */ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js");
/* harmony import */ var _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CalculatorIcon.js */ "./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js");
/* harmony import */ var _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CalendarIcon.js */ "./node_modules/@heroicons/react/outline/esm/CalendarIcon.js");
/* harmony import */ var _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CameraIcon.js */ "./node_modules/@heroicons/react/outline/esm/CameraIcon.js");
/* harmony import */ var _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./CashIcon.js */ "./node_modules/@heroicons/react/outline/esm/CashIcon.js");
/* harmony import */ var _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ChartBarIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js");
/* harmony import */ var _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ChartPieIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChartPieIcon.js");
/* harmony import */ var _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ChartSquareBarIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js");
/* harmony import */ var _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ChatAlt2Icon.js */ "./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js");
/* harmony import */ var _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ChatAltIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChatAltIcon.js");
/* harmony import */ var _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ChatIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChatIcon.js");
/* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CheckCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js");
/* harmony import */ var _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CheckIcon.js */ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js");
/* harmony import */ var _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ChevronDoubleDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js");
/* harmony import */ var _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ChevronDoubleLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js");
/* harmony import */ var _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ChevronDoubleRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js");
/* harmony import */ var _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ChevronDoubleUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js");
/* harmony import */ var _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ChevronDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ChevronLeftIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js");
/* harmony import */ var _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ChevronRightIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js");
/* harmony import */ var _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ChevronUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js");
/* harmony import */ var _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ChipIcon.js */ "./node_modules/@heroicons/react/outline/esm/ChipIcon.js");
/* harmony import */ var _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ClipboardCheckIcon.js */ "./node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js");
/* harmony import */ var _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ClipboardCopyIcon.js */ "./node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js");
/* harmony import */ var _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ClipboardListIcon.js */ "./node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js");
/* harmony import */ var _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ClipboardIcon.js */ "./node_modules/@heroicons/react/outline/esm/ClipboardIcon.js");
/* harmony import */ var _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ClockIcon.js */ "./node_modules/@heroicons/react/outline/esm/ClockIcon.js");
/* harmony import */ var _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./CloudDownloadIcon.js */ "./node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js");
/* harmony import */ var _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./CloudUploadIcon.js */ "./node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js");
/* harmony import */ var _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./CloudIcon.js */ "./node_modules/@heroicons/react/outline/esm/CloudIcon.js");
/* harmony import */ var _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./CodeIcon.js */ "./node_modules/@heroicons/react/outline/esm/CodeIcon.js");
/* harmony import */ var _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./CogIcon.js */ "./node_modules/@heroicons/react/outline/esm/CogIcon.js");
/* harmony import */ var _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./CollectionIcon.js */ "./node_modules/@heroicons/react/outline/esm/CollectionIcon.js");
/* harmony import */ var _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./ColorSwatchIcon.js */ "./node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js");
/* harmony import */ var _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./CreditCardIcon.js */ "./node_modules/@heroicons/react/outline/esm/CreditCardIcon.js");
/* harmony import */ var _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./CubeTransparentIcon.js */ "./node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js");
/* harmony import */ var _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./CubeIcon.js */ "./node_modules/@heroicons/react/outline/esm/CubeIcon.js");
/* harmony import */ var _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./CurrencyBangladeshiIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js");
/* harmony import */ var _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./CurrencyDollarIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js");
/* harmony import */ var _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./CurrencyEuroIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js");
/* harmony import */ var _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./CurrencyPoundIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js");
/* harmony import */ var _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./CurrencyRupeeIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js");
/* harmony import */ var _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./CurrencyYenIcon.js */ "./node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js");
/* harmony import */ var _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./CursorClickIcon.js */ "./node_modules/@heroicons/react/outline/esm/CursorClickIcon.js");
/* harmony import */ var _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./DatabaseIcon.js */ "./node_modules/@heroicons/react/outline/esm/DatabaseIcon.js");
/* harmony import */ var _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./DesktopComputerIcon.js */ "./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js");
/* harmony import */ var _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./DeviceMobileIcon.js */ "./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js");
/* harmony import */ var _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DeviceTabletIcon.js */ "./node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js");
/* harmony import */ var _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DocumentAddIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js");
/* harmony import */ var _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DocumentDownloadIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js");
/* harmony import */ var _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DocumentDuplicateIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js");
/* harmony import */ var _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DocumentRemoveIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js");
/* harmony import */ var _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./DocumentReportIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js");
/* harmony import */ var _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./DocumentSearchIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js");
/* harmony import */ var _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./DocumentTextIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js");
/* harmony import */ var _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./DocumentIcon.js */ "./node_modules/@heroicons/react/outline/esm/DocumentIcon.js");
/* harmony import */ var _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./DotsCircleHorizontalIcon.js */ "./node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js");
/* harmony import */ var _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./DotsHorizontalIcon.js */ "./node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js");
/* harmony import */ var _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./DotsVerticalIcon.js */ "./node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js");
/* harmony import */ var _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./DownloadIcon.js */ "./node_modules/@heroicons/react/outline/esm/DownloadIcon.js");
/* harmony import */ var _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./DuplicateIcon.js */ "./node_modules/@heroicons/react/outline/esm/DuplicateIcon.js");
/* harmony import */ var _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./EmojiHappyIcon.js */ "./node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js");
/* harmony import */ var _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./EmojiSadIcon.js */ "./node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js");
/* harmony import */ var _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./ExclamationCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js");
/* harmony import */ var _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./ExclamationIcon.js */ "./node_modules/@heroicons/react/outline/esm/ExclamationIcon.js");
/* harmony import */ var _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./ExternalLinkIcon.js */ "./node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js");
/* harmony import */ var _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./EyeOffIcon.js */ "./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js");
/* harmony import */ var _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./EyeIcon.js */ "./node_modules/@heroicons/react/outline/esm/EyeIcon.js");
/* harmony import */ var _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./FastForwardIcon.js */ "./node_modules/@heroicons/react/outline/esm/FastForwardIcon.js");
/* harmony import */ var _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./FilmIcon.js */ "./node_modules/@heroicons/react/outline/esm/FilmIcon.js");
/* harmony import */ var _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./FilterIcon.js */ "./node_modules/@heroicons/react/outline/esm/FilterIcon.js");
/* harmony import */ var _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./FingerPrintIcon.js */ "./node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js");
/* harmony import */ var _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./FireIcon.js */ "./node_modules/@heroicons/react/outline/esm/FireIcon.js");
/* harmony import */ var _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./FlagIcon.js */ "./node_modules/@heroicons/react/outline/esm/FlagIcon.js");
/* harmony import */ var _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./FolderAddIcon.js */ "./node_modules/@heroicons/react/outline/esm/FolderAddIcon.js");
/* harmony import */ var _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./FolderDownloadIcon.js */ "./node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js");
/* harmony import */ var _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./FolderOpenIcon.js */ "./node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js");
/* harmony import */ var _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./FolderRemoveIcon.js */ "./node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js");
/* harmony import */ var _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./FolderIcon.js */ "./node_modules/@heroicons/react/outline/esm/FolderIcon.js");
/* harmony import */ var _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./GiftIcon.js */ "./node_modules/@heroicons/react/outline/esm/GiftIcon.js");
/* harmony import */ var _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./GlobeAltIcon.js */ "./node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js");
/* harmony import */ var _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./GlobeIcon.js */ "./node_modules/@heroicons/react/outline/esm/GlobeIcon.js");
/* harmony import */ var _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./HandIcon.js */ "./node_modules/@heroicons/react/outline/esm/HandIcon.js");
/* harmony import */ var _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./HashtagIcon.js */ "./node_modules/@heroicons/react/outline/esm/HashtagIcon.js");
/* harmony import */ var _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./HeartIcon.js */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./HomeIcon.js */ "./node_modules/@heroicons/react/outline/esm/HomeIcon.js");
/* harmony import */ var _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./IdentificationIcon.js */ "./node_modules/@heroicons/react/outline/esm/IdentificationIcon.js");
/* harmony import */ var _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./InboxInIcon.js */ "./node_modules/@heroicons/react/outline/esm/InboxInIcon.js");
/* harmony import */ var _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./InboxIcon.js */ "./node_modules/@heroicons/react/outline/esm/InboxIcon.js");
/* harmony import */ var _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./InformationCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js");
/* harmony import */ var _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./KeyIcon.js */ "./node_modules/@heroicons/react/outline/esm/KeyIcon.js");
/* harmony import */ var _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./LibraryIcon.js */ "./node_modules/@heroicons/react/outline/esm/LibraryIcon.js");
/* harmony import */ var _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./LightBulbIcon.js */ "./node_modules/@heroicons/react/outline/esm/LightBulbIcon.js");
/* harmony import */ var _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./LightningBoltIcon.js */ "./node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js");
/* harmony import */ var _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./LinkIcon.js */ "./node_modules/@heroicons/react/outline/esm/LinkIcon.js");
/* harmony import */ var _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./LocationMarkerIcon.js */ "./node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js");
/* harmony import */ var _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./LockClosedIcon.js */ "./node_modules/@heroicons/react/outline/esm/LockClosedIcon.js");
/* harmony import */ var _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./LockOpenIcon.js */ "./node_modules/@heroicons/react/outline/esm/LockOpenIcon.js");
/* harmony import */ var _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./LoginIcon.js */ "./node_modules/@heroicons/react/outline/esm/LoginIcon.js");
/* harmony import */ var _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./LogoutIcon.js */ "./node_modules/@heroicons/react/outline/esm/LogoutIcon.js");
/* harmony import */ var _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./MailOpenIcon.js */ "./node_modules/@heroicons/react/outline/esm/MailOpenIcon.js");
/* harmony import */ var _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./MailIcon.js */ "./node_modules/@heroicons/react/outline/esm/MailIcon.js");
/* harmony import */ var _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./MapIcon.js */ "./node_modules/@heroicons/react/outline/esm/MapIcon.js");
/* harmony import */ var _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./MenuAlt1Icon.js */ "./node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js");
/* harmony import */ var _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./MenuAlt2Icon.js */ "./node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js");
/* harmony import */ var _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./MenuAlt3Icon.js */ "./node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js");
/* harmony import */ var _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./MenuAlt4Icon.js */ "./node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js");
/* harmony import */ var _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./MenuIcon.js */ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js");
/* harmony import */ var _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./MicrophoneIcon.js */ "./node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js");
/* harmony import */ var _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./MinusCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js");
/* harmony import */ var _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./MinusSmIcon.js */ "./node_modules/@heroicons/react/outline/esm/MinusSmIcon.js");
/* harmony import */ var _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./MinusIcon.js */ "./node_modules/@heroicons/react/outline/esm/MinusIcon.js");
/* harmony import */ var _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./MoonIcon.js */ "./node_modules/@heroicons/react/outline/esm/MoonIcon.js");
/* harmony import */ var _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./MusicNoteIcon.js */ "./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js");
/* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./NewspaperIcon.js */ "./node_modules/@heroicons/react/outline/esm/NewspaperIcon.js");
/* harmony import */ var _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./OfficeBuildingIcon.js */ "./node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js");
/* harmony import */ var _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./PaperAirplaneIcon.js */ "./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./PaperClipIcon.js */ "./node_modules/@heroicons/react/outline/esm/PaperClipIcon.js");
/* harmony import */ var _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./PauseIcon.js */ "./node_modules/@heroicons/react/outline/esm/PauseIcon.js");
/* harmony import */ var _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./PencilAltIcon.js */ "./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js");
/* harmony import */ var _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./PencilIcon.js */ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js");
/* harmony import */ var _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./PhoneIncomingIcon.js */ "./node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js");
/* harmony import */ var _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./PhoneMissedCallIcon.js */ "./node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js");
/* harmony import */ var _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./PhoneOutgoingIcon.js */ "./node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js");
/* harmony import */ var _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./PhoneIcon.js */ "./node_modules/@heroicons/react/outline/esm/PhoneIcon.js");
/* harmony import */ var _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./PhotographIcon.js */ "./node_modules/@heroicons/react/outline/esm/PhotographIcon.js");
/* harmony import */ var _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./PlayIcon.js */ "./node_modules/@heroicons/react/outline/esm/PlayIcon.js");
/* harmony import */ var _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./PlusCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js");
/* harmony import */ var _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./PlusSmIcon.js */ "./node_modules/@heroicons/react/outline/esm/PlusSmIcon.js");
/* harmony import */ var _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./PlusIcon.js */ "./node_modules/@heroicons/react/outline/esm/PlusIcon.js");
/* harmony import */ var _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./PresentationChartBarIcon.js */ "./node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js");
/* harmony import */ var _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./PresentationChartLineIcon.js */ "./node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js");
/* harmony import */ var _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./PrinterIcon.js */ "./node_modules/@heroicons/react/outline/esm/PrinterIcon.js");
/* harmony import */ var _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./PuzzleIcon.js */ "./node_modules/@heroicons/react/outline/esm/PuzzleIcon.js");
/* harmony import */ var _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./QrcodeIcon.js */ "./node_modules/@heroicons/react/outline/esm/QrcodeIcon.js");
/* harmony import */ var _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./QuestionMarkCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js");
/* harmony import */ var _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./ReceiptRefundIcon.js */ "./node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js");
/* harmony import */ var _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./ReceiptTaxIcon.js */ "./node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js");
/* harmony import */ var _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./RefreshIcon.js */ "./node_modules/@heroicons/react/outline/esm/RefreshIcon.js");
/* harmony import */ var _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./ReplyIcon.js */ "./node_modules/@heroicons/react/outline/esm/ReplyIcon.js");
/* harmony import */ var _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./RewindIcon.js */ "./node_modules/@heroicons/react/outline/esm/RewindIcon.js");
/* harmony import */ var _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./RssIcon.js */ "./node_modules/@heroicons/react/outline/esm/RssIcon.js");
/* harmony import */ var _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./SaveAsIcon.js */ "./node_modules/@heroicons/react/outline/esm/SaveAsIcon.js");
/* harmony import */ var _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./SaveIcon.js */ "./node_modules/@heroicons/react/outline/esm/SaveIcon.js");
/* harmony import */ var _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./ScaleIcon.js */ "./node_modules/@heroicons/react/outline/esm/ScaleIcon.js");
/* harmony import */ var _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./ScissorsIcon.js */ "./node_modules/@heroicons/react/outline/esm/ScissorsIcon.js");
/* harmony import */ var _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./SearchCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js");
/* harmony import */ var _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./SearchIcon.js */ "./node_modules/@heroicons/react/outline/esm/SearchIcon.js");
/* harmony import */ var _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./SelectorIcon.js */ "./node_modules/@heroicons/react/outline/esm/SelectorIcon.js");
/* harmony import */ var _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./ServerIcon.js */ "./node_modules/@heroicons/react/outline/esm/ServerIcon.js");
/* harmony import */ var _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./ShareIcon.js */ "./node_modules/@heroicons/react/outline/esm/ShareIcon.js");
/* harmony import */ var _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./ShieldCheckIcon.js */ "./node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js");
/* harmony import */ var _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./ShieldExclamationIcon.js */ "./node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js");
/* harmony import */ var _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./ShoppingBagIcon.js */ "./node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js");
/* harmony import */ var _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./ShoppingCartIcon.js */ "./node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js");
/* harmony import */ var _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./SortAscendingIcon.js */ "./node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js");
/* harmony import */ var _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./SortDescendingIcon.js */ "./node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js");
/* harmony import */ var _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./SparklesIcon.js */ "./node_modules/@heroicons/react/outline/esm/SparklesIcon.js");
/* harmony import */ var _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./SpeakerphoneIcon.js */ "./node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js");
/* harmony import */ var _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./StarIcon.js */ "./node_modules/@heroicons/react/outline/esm/StarIcon.js");
/* harmony import */ var _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./StatusOfflineIcon.js */ "./node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js");
/* harmony import */ var _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./StatusOnlineIcon.js */ "./node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js");
/* harmony import */ var _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./StopIcon.js */ "./node_modules/@heroicons/react/outline/esm/StopIcon.js");
/* harmony import */ var _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./SunIcon.js */ "./node_modules/@heroicons/react/outline/esm/SunIcon.js");
/* harmony import */ var _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./SupportIcon.js */ "./node_modules/@heroicons/react/outline/esm/SupportIcon.js");
/* harmony import */ var _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./SwitchHorizontalIcon.js */ "./node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js");
/* harmony import */ var _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./SwitchVerticalIcon.js */ "./node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js");
/* harmony import */ var _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./TableIcon.js */ "./node_modules/@heroicons/react/outline/esm/TableIcon.js");
/* harmony import */ var _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./TagIcon.js */ "./node_modules/@heroicons/react/outline/esm/TagIcon.js");
/* harmony import */ var _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./TemplateIcon.js */ "./node_modules/@heroicons/react/outline/esm/TemplateIcon.js");
/* harmony import */ var _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./TerminalIcon.js */ "./node_modules/@heroicons/react/outline/esm/TerminalIcon.js");
/* harmony import */ var _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./ThumbDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js");
/* harmony import */ var _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./ThumbUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js");
/* harmony import */ var _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./TicketIcon.js */ "./node_modules/@heroicons/react/outline/esm/TicketIcon.js");
/* harmony import */ var _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./TranslateIcon.js */ "./node_modules/@heroicons/react/outline/esm/TranslateIcon.js");
/* harmony import */ var _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./TrashIcon.js */ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js");
/* harmony import */ var _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./TrendingDownIcon.js */ "./node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js");
/* harmony import */ var _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./TrendingUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js");
/* harmony import */ var _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./TruckIcon.js */ "./node_modules/@heroicons/react/outline/esm/TruckIcon.js");
/* harmony import */ var _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./UploadIcon.js */ "./node_modules/@heroicons/react/outline/esm/UploadIcon.js");
/* harmony import */ var _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./UserAddIcon.js */ "./node_modules/@heroicons/react/outline/esm/UserAddIcon.js");
/* harmony import */ var _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./UserCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js");
/* harmony import */ var _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./UserGroupIcon.js */ "./node_modules/@heroicons/react/outline/esm/UserGroupIcon.js");
/* harmony import */ var _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./UserRemoveIcon.js */ "./node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js");
/* harmony import */ var _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./UserIcon.js */ "./node_modules/@heroicons/react/outline/esm/UserIcon.js");
/* harmony import */ var _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./UsersIcon.js */ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js");
/* harmony import */ var _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./VariableIcon.js */ "./node_modules/@heroicons/react/outline/esm/VariableIcon.js");
/* harmony import */ var _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./VideoCameraIcon.js */ "./node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js");
/* harmony import */ var _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./ViewBoardsIcon.js */ "./node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js");
/* harmony import */ var _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./ViewGridAddIcon.js */ "./node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js");
/* harmony import */ var _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./ViewGridIcon.js */ "./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js");
/* harmony import */ var _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./ViewListIcon.js */ "./node_modules/@heroicons/react/outline/esm/ViewListIcon.js");
/* harmony import */ var _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./VolumeOffIcon.js */ "./node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js");
/* harmony import */ var _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./VolumeUpIcon.js */ "./node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js");
/* harmony import */ var _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./WifiIcon.js */ "./node_modules/@heroicons/react/outline/esm/WifiIcon.js");
/* harmony import */ var _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./XCircleIcon.js */ "./node_modules/@heroicons/react/outline/esm/XCircleIcon.js");
/* harmony import */ var _XIcon_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./XIcon.js */ "./node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./ZoomInIcon.js */ "./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js");
/* harmony import */ var _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./ZoomOutIcon.js */ "./node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js");







































































































































































































































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./assets/src/DashboardApp.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_all_config_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/all-config.scss */ "./assets/src/common/all-config.scss");
/* harmony import */ var _DashboardApp_SettingsWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @DashboardApp/SettingsWrap */ "./assets/src/dashboard-app/SettingsWrap.js");



/* Main Compnent */



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DashboardApp_SettingsWrap__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('uag-dashboard-app'));
}();
/******/ })()
;
//# sourceMappingURL=dashboard-app.js.map