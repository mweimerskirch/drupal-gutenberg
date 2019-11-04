this["wp"] = this["wp"] || {}; this["wp"]["notices"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/notices/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./packages/notices/build-module/index.js":
/*!************************************************!*\
  !*** ./packages/notices/build-module/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./packages/notices/build-module/store/index.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./packages/notices/build-module/store/actions.js":
/*!********************************************************!*\
  !*** ./packages/notices/build-module/store/actions.js ***!
  \********************************************************/
/*! exports provided: createNotice, createSuccessNotice, createInfoNotice, createErrorNotice, createWarningNotice, removeNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotice", function() { return createNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSuccessNotice", function() { return createSuccessNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInfoNotice", function() { return createInfoNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorNotice", function() { return createErrorNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWarningNotice", function() { return createWarningNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNotice", function() { return removeNotice; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./packages/notices/build-module/store/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createNotice);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Yields action objects used in signalling that a notice is to be created.
 *
 * @param {string}                [status='info']              Notice status.
 * @param {string}                content                      Notice message.
 * @param {Object}                [options]                    Notice options.
 * @param {string}                [options.context='global']   Context under which to
 *                                                             group notice.
 * @param {string}                [options.id]                 Identifier for notice.
 *                                                             Automatically assigned
 *                                                             if not specified.
 * @param {boolean}               [options.isDismissible=true] Whether the notice can
 *                                                             be dismissed by user.
 * @param {string}                [options.type='default']     Type of notice, one of
 *                                                             `default`, or `snackbar`.
 * @param {boolean}               [options.speak=true]         Whether the notice
 *                                                             content should be
 *                                                             announced to screen
 *                                                             readers.
 * @param {Array<WPNoticeAction>} [options.actions]            User actions to be
 *                                                             presented with notice.
 */

function createNotice() {
  var status,
      content,
      options,
      _options$speak,
      speak,
      _options$isDismissibl,
      isDismissible,
      _options$context,
      context,
      _options$id,
      id,
      _options$actions,
      actions,
      _options$type,
      type,
      __unstableHTML,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createNotice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          status = _args.length > 0 && _args[0] !== undefined ? _args[0] : _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STATUS"];
          content = _args.length > 1 ? _args[1] : undefined;
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _options$speak = options.speak, speak = _options$speak === void 0 ? true : _options$speak, _options$isDismissibl = options.isDismissible, isDismissible = _options$isDismissibl === void 0 ? true : _options$isDismissibl, _options$context = options.context, context = _options$context === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTEXT"] : _options$context, _options$id = options.id, id = _options$id === void 0 ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])(context) : _options$id, _options$actions = options.actions, actions = _options$actions === void 0 ? [] : _options$actions, _options$type = options.type, type = _options$type === void 0 ? 'default' : _options$type, __unstableHTML = options.__unstableHTML; // The supported value shape of content is currently limited to plain text
          // strings. To avoid setting expectation that e.g. a WPElement could be
          // supported, cast to a string.

          content = String(content);

          if (!speak) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return {
            type: 'SPEAK',
            message: content,
            ariaLive: type === 'snackbar' ? 'polite' : 'assertive'
          };

        case 8:
          _context.next = 10;
          return {
            type: 'CREATE_NOTICE',
            context: context,
            notice: {
              id: id,
              status: status,
              content: content,
              __unstableHTML: __unstableHTML,
              isDismissible: isDismissible,
              actions: actions,
              type: type
            }
          };

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object used in signalling that a success notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createSuccessNotice(content, options) {
  return createNotice('success', content, options);
}
/**
 * Returns an action object used in signalling that an info notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createInfoNotice(content, options) {
  return createNotice('info', content, options);
}
/**
 * Returns an action object used in signalling that an error notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createErrorNotice(content, options) {
  return createNotice('error', content, options);
}
/**
 * Returns an action object used in signalling that a warning notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createWarningNotice(content, options) {
  return createNotice('warning', content, options);
}
/**
 * Returns an action object used in signalling that a notice is to be removed.
 *
 * @param {string} id                 Notice unique identifier.
 * @param {string} [context='global'] Optional context (grouping) in which the notice is
 *                                    intended to appear. Defaults to default context.
 *
 * @return {Object} Action object.
 */

function removeNotice(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTEXT"];
  return {
    type: 'REMOVE_NOTICE',
    id: id,
    context: context
  };
}


/***/ }),

/***/ "./packages/notices/build-module/store/constants.js":
/*!**********************************************************!*\
  !*** ./packages/notices/build-module/store/constants.js ***!
  \**********************************************************/
/*! exports provided: DEFAULT_CONTEXT, DEFAULT_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTEXT", function() { return DEFAULT_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATUS", function() { return DEFAULT_STATUS; });
/**
 * Default context to use for notice grouping when not otherwise specified. Its
 * specific value doesn't hold much meaning, but it must be reasonably unique
 * and, more importantly, referenced consistently in the store implementation.
 *
 * @type {string}
 */
var DEFAULT_CONTEXT = 'global';
/**
 * Default notice status.
 *
 * @type {string}
 */

var DEFAULT_STATUS = 'info';


/***/ }),

/***/ "./packages/notices/build-module/store/controls.js":
/*!*********************************************************!*\
  !*** ./packages/notices/build-module/store/controls.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  SPEAK: function SPEAK(action) {
    Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__["speak"])(action.message, action.ariaLive || 'assertive');
  }
});


/***/ }),

/***/ "./packages/notices/build-module/store/index.js":
/*!******************************************************!*\
  !*** ./packages/notices/build-module/store/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./packages/notices/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./packages/notices/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./packages/notices/build-module/store/selectors.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/notices/build-module/store/controls.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])('core/notices', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_4__["default"]
}));


/***/ }),

/***/ "./packages/notices/build-module/store/reducer.js":
/*!********************************************************!*\
  !*** ./packages/notices/build-module/store/reducer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_on_sub_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/on-sub-key */ "./packages/notices/build-module/store/utils/on-sub-key.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Reducer returning the next notices state. The notices state is an object
 * where each key is a context, its value an array of notice objects.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var notices = Object(_utils_on_sub_key__WEBPACK_IMPORTED_MODULE_2__["default"])('context')(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CREATE_NOTICE':
      // Avoid duplicates on ID.
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reject"])(state, {
        id: action.notice.id
      })), [action.notice]);

    case 'REMOVE_NOTICE':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reject"])(state, {
        id: action.id
      });
  }

  return state;
});
/* harmony default export */ __webpack_exports__["default"] = (notices);


/***/ }),

/***/ "./packages/notices/build-module/store/selectors.js":
/*!**********************************************************!*\
  !*** ./packages/notices/build-module/store/selectors.js ***!
  \**********************************************************/
/*! exports provided: getNotices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotices", function() { return getNotices; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/notices/build-module/store/constants.js");
/**
 * Internal dependencies
 */

/**
 * The default empty set of notices to return when there are no notices
 * assigned for a given notices context. This can occur if the getNotices
 * selector is called without a notice ever having been created for the
 * context. A shared value is used to ensure referential equality between
 * sequential selector calls, since otherwise `[] !== []`.
 *
 * @type {Array}
 */

var DEFAULT_NOTICES = [];
/**
 * @typedef {Object} WPNotice Notice object.
 *
 * @property {string}  id               Unique identifier of notice.
 * @property {string}  status           Status of notice, one of `success`,
 *                                      `info`, `error`, or `warning`. Defaults
 *                                      to `info`.
 * @property {string}  content          Notice message.
 * @property {string}  __unstableHTML   Notice message as raw HTML. Intended to
 *                                      serve primarily for compatibility of
 *                                      server-rendered notices, and SHOULD NOT
 *                                      be used for notices. It is subject to
 *                                      removal without notice.
 * @property {boolean} isDismissible    Whether the notice can be dismissed by
 *                                      user. Defaults to `true`.
 * @property {string}  type             Type of notice, one of `default`,
 *                                      or `snackbar`. Defaults to `default`.
 * @property {boolean} speak            Whether the notice content should be
 *                                      announced to screen readers. Defaults to
 *                                      `true`.
 * @property {WPNoticeAction[]} actions User actions to present with notice.
 *
 */

/**
 * @typedef {Object} WPNoticeAction Object describing a user action option associated with a notice.
 *
 * @property {string}    label    Message to use as action label.
 * @property {?string}   url      Optional URL of resource if action incurs
 *                                browser navigation.
 * @property {?Function} onClick  Optional function to invoke when action is
 *                                triggered by user.
 *
 */

/**
 * Returns all notices as an array, optionally for a given context. Defaults to
 * the global context.
 *
 * @param {Object}  state   Notices state.
 * @param {?string} context Optional grouping context.
 *
 * @return {WPNotice[]} Array of notices.
 */

function getNotices(state) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CONTEXT"];
  return state[context] || DEFAULT_NOTICES;
}


/***/ }),

/***/ "./packages/notices/build-module/store/utils/on-sub-key.js":
/*!*****************************************************************!*\
  !*** ./packages/notices/build-module/store/utils/on-sub-key.js ***!
  \*****************************************************************/
/*! exports provided: onSubKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubKey", function() { return onSubKey; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");



/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
var onSubKey = function onSubKey(actionProperty) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      // Retrieve subkey from action. Do not track if undefined; useful for cases
      // where reducer is scoped by action shape.
      var key = action[actionProperty];

      if (key === undefined) {
        return state;
      } // Avoid updating state if unchanged. Note that this also accounts for a
      // reducer which returns undefined on a key which is not yet tracked.


      var nextKeyState = reducer(state[key], action);

      if (nextKeyState === state[key]) {
        return state;
      }

      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, nextKeyState));
    };
  };
};
/* harmony default export */ __webpack_exports__["default"] = (onSubKey);


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/a11y":
/*!***************************************!*\
  !*** external {"this":["wp","a11y"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map