this["wp"] = this["wp"] || {}; this["wp"]["editPost"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/edit-post/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ "./node_modules/refx/refx.js":
/*!***********************************!*\
  !*** ./node_modules/refx/refx.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

( function( factory ) {
	if ( true ) {
		module.exports = factory();
	} else {}
} )( function() {
	'use strict';

	function flattenIntoMap( map, effects ) {
		var i;
		if ( Array.isArray( effects ) ) {
			for ( i = 0; i < effects.length; i++ ) {
				flattenIntoMap( map, effects[ i ] );
			}
		} else {
			for ( i in effects ) {
				map[ i ] = ( map[ i ] || [] ).concat( effects[ i ] );
			}
		}
	}

	return function( effects ) {
		var map = {};

		flattenIntoMap( map, effects );

		return function( store ) {
			return function( next ) {
				return function( action ) {
					var handlers = map[ action.type ],
						result = next( action ),
						i, handlerAction;

					if ( handlers ) {
						for ( i = 0; i < handlers.length; i++ ) {
							handlerAction = handlers[ i ]( action, store );
							if ( handlerAction ) {
								store.dispatch( handlerAction );
							}
						}
					}

					return result;
				};
			};
		};
	};
} );


/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["default"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ "./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-group.js":
/*!************************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-group.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["createSlotFill"])('PluginBlockSettingsMenuGroup'),
    PluginBlockSettingsMenuGroup = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var PluginBlockSettingsMenuGroupSlot = function PluginBlockSettingsMenuGroupSlot(_ref) {
  var fillProps = _ref.fillProps,
      selectedBlocks = _ref.selectedBlocks;
  selectedBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(selectedBlocks, function (block) {
    return block.name;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Slot, {
    fillProps: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fillProps, {
      selectedBlocks: selectedBlocks
    })
  }, function (fills) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(fills) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "editor-block-settings-menu__separator block-editor-block-settings-menu__separator"
    }), fills);
  });
};

PluginBlockSettingsMenuGroup.Slot = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.fillProps.clientIds;
  return {
    selectedBlocks: select('core/block-editor').getBlocksByClientId(clientIds)
  };
})(PluginBlockSettingsMenuGroupSlot);
/* harmony default export */ __webpack_exports__["default"] = (PluginBlockSettingsMenuGroup);


/***/ }),

/***/ "./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js":
/*!***********************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugin_block_settings_menu_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin-block-settings-menu-group */ "./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-group.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var isEverySelectedBlockAllowed = function isEverySelectedBlockAllowed(selected, allowed) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["difference"])(selected, allowed).length === 0;
};
/**
 * Plugins may want to add an item to the menu either for every block
 * or only for the specific ones provided in the `allowedBlocks` component property.
 *
 * If there are multiple blocks selected the item will be rendered if every block
 * is of one allowed type (not necessarily the same).
 *
 * @param {string[]} selectedBlocks Array containing the names of the blocks selected
 * @param {string[]} allowedBlocks Array containing the names of the blocks allowed
 * @return {boolean} Whether the item will be rendered or not.
 */


var shouldRenderItem = function shouldRenderItem(selectedBlocks, allowedBlocks) {
  return !Array.isArray(allowedBlocks) || isEverySelectedBlockAllowed(selectedBlocks, allowedBlocks);
};
/**
 * Renders a new item in the block settings menu.
 *
 * @param {Object} props Component props.
 * @param {Array} [props.allowedBlocks] An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the whitelist.
 * @param {string|Element} [props.icon] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string} props.label The menu item text.
 * @param {Function} props.onClick Callback function to be executed when the user click the menu item.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
 *
 * function doOnClick(){
 * 	// To be called when the user clicks the menu item.
 * }
 *
 * function MyPluginBlockSettingsMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginBlockSettingsMenuItem,
 * 		{
 * 			allowedBlocks: [ 'core/paragraph' ],
 * 			icon: 'dashicon-name',
 * 			label: __( 'Menu item text' ),
 * 			onClick: doOnClick,
 * 		}
 * 	);
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from wp.i18n;
 * import { PluginBlockSettingsMenuItem } from wp.editPost;
 *
 * const doOnClick = ( ) => {
 *     // To be called when the user clicks the menu item.
 * };
 *
 * const MyPluginBlockSettingsMenuItem = () => (
 *     <PluginBlockSettingsMenuItem
 * 		allowedBlocks=[ 'core/paragraph' ]
 * 		icon='dashicon-name'
 * 		label=__( 'Menu item text' )
 * 		onClick={ doOnClick } />
 * );
 * ```
 *
 * @return {WPElement} The WPElement to be rendered.
 */


var PluginBlockSettingsMenuItem = function PluginBlockSettingsMenuItem(_ref) {
  var allowedBlocks = _ref.allowedBlocks,
      icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      small = _ref.small,
      role = _ref.role;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_plugin_block_settings_menu_group__WEBPACK_IMPORTED_MODULE_4__["default"], null, function (_ref2) {
    var selectedBlocks = _ref2.selectedBlocks,
        onClose = _ref2.onClose;

    if (!shouldRenderItem(selectedBlocks, allowedBlocks)) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
      onClick: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(onClick, onClose),
      icon: icon || 'admin-plugins',
      label: small ? label : undefined,
      role: role
    }, !small && label);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PluginBlockSettingsMenuItem);


/***/ }),

/***/ "./packages/edit-post/build-module/components/browser-url/index.js":
/*!*************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/browser-url/index.js ***!
  \*************************************************************************/
/*! exports provided: getPostEditURL, getPostTrashedURL, BrowserURL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostEditURL", function() { return getPostEditURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostTrashedURL", function() { return getPostTrashedURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserURL", function() { return BrowserURL; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);






/**
 * WordPress dependencies
 */



/**
 * Returns the Post's Edit URL.
 *
 * @param {number} postId Post ID.
 *
 * @return {string} Post edit URL.
 */

function getPostEditURL(postId) {
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])('post.php', {
    post: postId,
    action: 'edit'
  });
}
/**
 * Returns the Post's Trashed URL.
 *
 * @param {number} postId    Post ID.
 * @param {string} postType Post Type.
 *
 * @return {string} Post trashed URL.
 */

function getPostTrashedURL(postId, postType) {
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])('edit.php', {
    trashed: 1,
    post_type: postType,
    ids: postId
  });
}
var BrowserURL =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BrowserURL, _Component);

  function BrowserURL() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BrowserURL);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BrowserURL).apply(this, arguments));
    _this.state = {
      historyId: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserURL, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          postId = _this$props.postId,
          postStatus = _this$props.postStatus,
          postType = _this$props.postType;
      var historyId = this.state.historyId;

      if (postStatus === 'trash') {
        this.setTrashURL(postId, postType);
        return;
      }

      if ((postId !== prevProps.postId || postId !== historyId) && postStatus !== 'auto-draft') {
        this.setBrowserURL(postId);
      }
    }
    /**
     * Navigates the browser to the post trashed URL to show a notice about the trashed post.
     *
     * @param {number} postId    Post ID.
     * @param {string} postType  Post Type.
     */

  }, {
    key: "setTrashURL",
    value: function setTrashURL(postId, postType) {
      window.location.href = getPostTrashedURL(postId, postType);
    }
    /**
     * Replaces the browser URL with a post editor link for the given post ID.
     *
     * Note it is important that, since this function may be called when the
     * editor first loads, the result generated `getPostEditURL` matches that
     * produced by the server. Otherwise, the URL will change unexpectedly.
     *
     * @param {number} postId Post ID for which to generate post editor URL.
     */

  }, {
    key: "setBrowserURL",
    value: function setBrowserURL(postId) {
      window.history.replaceState({
        id: postId
      }, 'Post ' + postId, getPostEditURL(postId));
      this.setState(function () {
        return {
          historyId: postId
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BrowserURL;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _getCurrentPost = getCurrentPost(),
      id = _getCurrentPost.id,
      status = _getCurrentPost.status,
      type = _getCurrentPost.type;

  return {
    postId: id,
    postStatus: status,
    postType: type
  };
})(BrowserURL));


/***/ }),

/***/ "./packages/edit-post/build-module/components/edit-post-settings/index.js":
/*!********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/edit-post-settings/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var EditPostSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (EditPostSettings);


/***/ }),

/***/ "./packages/edit-post/build-module/components/editor-initialization/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/editor-initialization/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listener_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listener-hooks */ "./packages/edit-post/build-module/components/editor-initialization/listener-hooks.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Data component used for initializing the editor and re-initializes
 * when postId changes or on unmount.
 *
 * @param {number} postId  The id of the post.
 * @return {null} This is a data component so does not render any ui.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var postId = _ref.postId;
  Object(_listener_hooks__WEBPACK_IMPORTED_MODULE_2__["useAdjustSidebarListener"])(postId);
  Object(_listener_hooks__WEBPACK_IMPORTED_MODULE_2__["useBlockSelectionListener"])(postId);
  Object(_listener_hooks__WEBPACK_IMPORTED_MODULE_2__["useUpdatePostLinkListener"])(postId);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])('core/nux'),
      triggerGuide = _useDispatch.triggerGuide;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    triggerGuide(['core/editor.inserter', 'core/editor.settings', 'core/editor.preview', 'core/editor.publish']);
  }, [triggerGuide]);
  return null;
});


/***/ }),

/***/ "./packages/edit-post/build-module/components/editor-initialization/listener-hooks.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/editor-initialization/listener-hooks.js ***!
  \********************************************************************************************/
/*! exports provided: useBlockSelectionListener, useAdjustSidebarListener, useUpdatePostLinkListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBlockSelectionListener", function() { return useBlockSelectionListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAdjustSidebarListener", function() { return useAdjustSidebarListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePostLinkListener", function() { return useUpdatePostLinkListener; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/constants */ "./packages/edit-post/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * This listener hook monitors for block selection and triggers the appropriate
 * sidebar state.
 *
 * @param {number} postId  The current post id.
 */

var useBlockSelectionListener = function useBlockSelectionListener(postId) {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return {
      hasBlockSelection: !!select('core/block-editor').getBlockSelectionStart(),
      isEditorSidebarOpened: select(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_KEY"]).isEditorSidebarOpened()
    };
  }, [postId]),
      hasBlockSelection = _useSelect.hasBlockSelection,
      isEditorSidebarOpened = _useSelect.isEditorSidebarOpened;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_KEY"]),
      openGeneralSidebar = _useDispatch.openGeneralSidebar;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isEditorSidebarOpened) {
      return;
    }

    if (hasBlockSelection) {
      openGeneralSidebar('edit-post/block');
    } else {
      openGeneralSidebar('edit-post/document');
    }
  }, [hasBlockSelection, isEditorSidebarOpened]);
};
/**
 * This listener hook is used to monitor viewport size and adjust the sidebar
 * accordingly.
 *
 * @param {number} postId  The current post id.
 */

var useAdjustSidebarListener = function useAdjustSidebarListener(postId) {
  var _useSelect2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return {
      isSmall: select('core/viewport').isViewportMatch('< medium'),
      sidebarToReOpenOnExpand: select(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_KEY"]).getActiveGeneralSidebarName()
    };
  }, [postId]),
      isSmall = _useSelect2.isSmall,
      sidebarToReOpenOnExpand = _useSelect2.sidebarToReOpenOnExpand;

  var _useDispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_KEY"]),
      openGeneralSidebar = _useDispatch2.openGeneralSidebar,
      closeGeneralSidebar = _useDispatch2.closeGeneralSidebar;

  var previousOpenedSidebar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isSmall && sidebarToReOpenOnExpand) {
      previousOpenedSidebar.current = sidebarToReOpenOnExpand;
      closeGeneralSidebar();
    } else if (!isSmall && previousOpenedSidebar.current) {
      openGeneralSidebar(previousOpenedSidebar.current);
      previousOpenedSidebar.current = '';
    }
  }, [isSmall, sidebarToReOpenOnExpand]);
};
/**
 * This listener hook monitors any change in permalink and updates the view
 * post link in the admin bar.
 *
 * @param {number} postId
 */

var useUpdatePostLinkListener = function useUpdatePostLinkListener(postId) {
  var _useSelect3 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return {
      newPermalink: select('core/editor').getCurrentPost().link
    };
  }, [postId]),
      newPermalink = _useSelect3.newPermalink;

  var nodeToUpdate = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    nodeToUpdate.current = document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_AS_PREVIEW_LINK_SELECTOR"]) || document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_AS_LINK_SELECTOR"]);
  }, [postId]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!newPermalink || !nodeToUpdate.current) {
      return;
    }

    nodeToUpdate.current.setAttribute('href', newPermalink);
  }, [newPermalink]);
};


/***/ }),

/***/ "./packages/edit-post/build-module/components/fullscreen-mode/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/fullscreen-mode/index.js ***!
  \*****************************************************************************/
/*! exports provided: FullscreenMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenMode", function() { return FullscreenMode; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);






/**
 * WordPress dependencies
 */


var FullscreenMode =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FullscreenMode, _Component);

  function FullscreenMode() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullscreenMode);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FullscreenMode).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullscreenMode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isSticky = false;
      this.sync(); // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
      // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
      // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
      // a consequence of the FullscreenMode setup

      if (document.body.classList.contains('sticky-menu')) {
        this.isSticky = true;
        document.body.classList.remove('sticky-menu');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isSticky) {
        document.body.classList.add('sticky-menu');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isActive !== prevProps.isActive) {
        this.sync();
      }
    }
  }, {
    key: "sync",
    value: function sync() {
      var isActive = this.props.isActive;

      if (isActive) {
        document.body.classList.add('is-fullscreen-mode');
      } else {
        document.body.classList.remove('is-fullscreen-mode');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FullscreenMode;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  return {
    isActive: select('core/edit-post').isFeatureActive('fullscreenMode')
  };
})(FullscreenMode));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/feature-toggle/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/feature-toggle/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function FeatureToggle(_ref) {
  var onToggle = _ref.onToggle,
      isActive = _ref.isActive,
      label = _ref.label,
      info = _ref.info,
      messageActivated = _ref.messageActivated,
      messageDeactivated = _ref.messageDeactivated,
      speak = _ref.speak;

  var speakMessage = function speakMessage() {
    if (isActive) {
      speak(messageDeactivated || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Feature deactivated'));
    } else {
      speak(messageActivated || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Feature activated'));
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    icon: isActive && 'yes',
    isSelected: isActive,
    onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flow"])(onToggle, speakMessage),
    role: "menuitemcheckbox",
    info: info
  }, label);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, _ref2) {
  var feature = _ref2.feature;
  return {
    isActive: select('core/edit-post').isFeatureActive(feature)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch, ownProps) {
  return {
    onToggle: function onToggle() {
      dispatch('core/edit-post').toggleFeature(ownProps.feature);
    }
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withSpokenMessages"]])(FeatureToggle));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/fullscreen-mode-close/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/fullscreen-mode-close/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function FullscreenModeClose(_ref) {
  var isActive = _ref.isActive,
      postType = _ref.postType;

  if (!isActive || !postType) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: "edit-post-fullscreen-mode-close__toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    icon: "arrow-left-alt2",
    href: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__["addQueryArgs"])('edit.php', {
      post_type: postType.slug
    }),
    label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels', 'view_items'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Back'))
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostType = _select.getCurrentPostType;

  var _select2 = select('core/edit-post'),
      isFeatureActive = _select2.isFeatureActive;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  return {
    isActive: isFeatureActive('fullscreenMode'),
    postType: getPostType(getCurrentPostType())
  };
})(FullscreenModeClose));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/header-toolbar/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/header-toolbar/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);


/**
 * WordPress dependencies
 */








function HeaderToolbar(_ref) {
  var hasFixedToolbar = _ref.hasFixedToolbar,
      isLargeViewport = _ref.isLargeViewport,
      showInserter = _ref.showInserter,
      isTextModeEnabled = _ref.isTextModeEnabled;
  var toolbarAriaLabel = hasFixedToolbar ?
  /* translators: accessibility text for the editor toolbar when Top Toolbar is on */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Document and block tools') :
  /* translators: accessibility text for the editor toolbar when Top Toolbar is off */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Document tools');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["NavigableToolbar"], {
    className: "edit-post-header-toolbar",
    "aria-label": toolbarAriaLabel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["Inserter"], {
    disabled: !showInserter,
    position: "bottom right"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_nux__WEBPACK_IMPORTED_MODULE_4__["DotTip"], {
    tipId: "core/editor.inserter"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Welcome to the wonderful world of blocks! Click the “+” (“Add block”) button to add a new block. There are blocks available for all kinds of content: you can insert text, headings, images, lists, and lots more!'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["EditorHistoryUndo"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["EditorHistoryRedo"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["TableOfContents"], {
    hasOutlineItemsDisabled: isTextModeEnabled
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockNavigationDropdown"], {
    isDisabled: isTextModeEnabled
  }), hasFixedToolbar && isLargeViewport && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-header-toolbar__block-toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockToolbar"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    hasFixedToolbar: select('core/edit-post').isFeatureActive('fixedToolbar'),
    // This setting (richEditingEnabled) should not live in the block editor's setting.
    showInserter: select('core/edit-post').getEditorMode() === 'visual' && select('core/editor').getEditorSettings().richEditingEnabled,
    isTextModeEnabled: select('core/edit-post').getEditorMode() === 'text'
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__["withViewportMatch"])({
  isLargeViewport: 'medium'
})])(HeaderToolbar));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/index.js":
/*!********************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fullscreen-mode-close */ "./packages/edit-post/build-module/components/header/fullscreen-mode-close/index.js");
/* harmony import */ var _header_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header-toolbar */ "./packages/edit-post/build-module/components/header/header-toolbar/index.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-menu */ "./packages/edit-post/build-module/components/header/more-menu/index.js");
/* harmony import */ var _pinned_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pinned-plugins */ "./packages/edit-post/build-module/components/header/pinned-plugins/index.js");
/* harmony import */ var _post_publish_button_or_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-publish-button-or-toggle */ "./packages/edit-post/build-module/components/header/post-publish-button-or-toggle.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../keyboard-shortcuts */ "./packages/edit-post/build-module/keyboard-shortcuts.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








function Header(_ref) {
  var closeGeneralSidebar = _ref.closeGeneralSidebar,
      hasActiveMetaboxes = _ref.hasActiveMetaboxes,
      isEditorSidebarOpened = _ref.isEditorSidebarOpened,
      isPublishSidebarOpened = _ref.isPublishSidebarOpened,
      isSaving = _ref.isSaving,
      openGeneralSidebar = _ref.openGeneralSidebar;
  var toggleGeneralSidebar = isEditorSidebarOpened ? closeGeneralSidebar : openGeneralSidebar;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    role: "region"
    /* translators: accessibility text for the top bar landmark region. */
    ,
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Editor top bar'),
    className: "edit-post-header",
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-header__toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_7__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_header_toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-header__settings"
  }, !isPublishSidebarOpened && // This button isn't completely hidden by the publish sidebar.
  // We can't hide the whole toolbar when the publish sidebar is open because
  // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
  // We track that DOM node to return focus to the PostPublishButtonOrToggle
  // when the publish sidebar has been closed.
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostSavedState"], {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostPreviewButton"], {
    forceIsAutosaveable: hasActiveMetaboxes,
    forcePreviewLink: isSaving ? null : undefined
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_publish_button_or_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    icon: "admin-generic",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings'),
    onClick: toggleGeneralSidebar,
    isToggled: isEditorSidebarOpened,
    "aria-expanded": isEditorSidebarOpened,
    shortcut: _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_12__["default"].toggleSidebar
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_nux__WEBPACK_IMPORTED_MODULE_6__["DotTip"], {
    tipId: "core/editor.settings"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('You’ll find more settings for your page and blocks in the sidebar. Click the cog icon to toggle the sidebar open and closed.'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_pinned_plugins__WEBPACK_IMPORTED_MODULE_10__["default"].Slot, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_more_menu__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    hasActiveMetaboxes: select('core/edit-post').hasMetaBoxes(),
    isEditorSidebarOpened: select('core/edit-post').isEditorSidebarOpened(),
    isPublishSidebarOpened: select('core/edit-post').isPublishSidebarOpened(),
    isSaving: select('core/edit-post').isSavingMetaBoxes()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch, ownProps, _ref2) {
  var select = _ref2.select;

  var _select = select('core/block-editor'),
      getBlockSelectionStart = _select.getBlockSelectionStart;

  var _dispatch = dispatch('core/edit-post'),
      _openGeneralSidebar = _dispatch.openGeneralSidebar,
      closeGeneralSidebar = _dispatch.closeGeneralSidebar;

  return {
    openGeneralSidebar: function openGeneralSidebar() {
      return _openGeneralSidebar(getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document');
    },
    closeGeneralSidebar: closeGeneralSidebar
  };
}))(Header));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/mode-switcher/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/mode-switcher/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../keyboard-shortcuts */ "./packages/edit-post/build-module/keyboard-shortcuts.js");



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Set of available mode options.
 *
 * @type {Array}
 */

var MODES = [{
  value: 'visual',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Visual Editor')
}, {
  value: 'text',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Code Editor')
}];

function ModeSwitcher(_ref) {
  var onSwitch = _ref.onSwitch,
      mode = _ref.mode;
  var choices = MODES.map(function (choice) {
    if (choice.value !== mode) {
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, choice, {
        shortcut: _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["default"].toggleEditorMode.display
      });
    }

    return choice;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Editor')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItemsChoice"], {
    choices: choices,
    value: mode,
    onSelect: onSwitch
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  return {
    isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled,
    isCodeEditingEnabled: select('core/editor').getEditorSettings().codeEditingEnabled,
    mode: select('core/edit-post').getEditorMode()
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["ifCondition"])(function (_ref2) {
  var isRichEditingEnabled = _ref2.isRichEditingEnabled,
      isCodeEditingEnabled = _ref2.isCodeEditingEnabled;
  return isRichEditingEnabled && isCodeEditingEnabled;
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    onSwitch: function onSwitch(mode) {
      dispatch('core/edit-post').switchEditorMode(mode);
    }
  };
})])(ModeSwitcher));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/more-menu/index.js":
/*!******************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/more-menu/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mode_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mode-switcher */ "./packages/edit-post/build-module/components/header/mode-switcher/index.js");
/* harmony import */ var _plugins_more_menu_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins-more-menu-group */ "./packages/edit-post/build-module/components/header/plugins-more-menu-group/index.js");
/* harmony import */ var _tools_more_menu_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools-more-menu-group */ "./packages/edit-post/build-module/components/header/tools-more-menu-group/index.js");
/* harmony import */ var _options_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options-menu-item */ "./packages/edit-post/build-module/components/header/options-menu-item/index.js");
/* harmony import */ var _writing_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../writing-menu */ "./packages/edit-post/build-module/components/header/writing-menu/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






var POPOVER_PROPS = {
  className: 'edit-post-more-menu__content',
  position: 'bottom left'
};
var TOGGLE_PROPS = {
  labelPosition: 'bottom'
};

var MoreMenu = function MoreMenu() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: "edit-post-more-menu",
    icon: "ellipsis",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('More tools & options'),
    popoverProps: POPOVER_PROPS,
    toggleProps: TOGGLE_PROPS
  }, function (_ref) {
    var onClose = _ref.onClose;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_writing_menu__WEBPACK_IMPORTED_MODULE_7__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_mode_switcher__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_plugins_more_menu_group__WEBPACK_IMPORTED_MODULE_4__["default"].Slot, {
      fillProps: {
        onClose: onClose
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_5__["default"].Slot, {
      fillProps: {
        onClose: onClose
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MoreMenu);


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/options-menu-item/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/options-menu-item/index.js ***!
  \**************************************************************************************/
/*! exports provided: OptionsMenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsMenuItem", function() { return OptionsMenuItem; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function OptionsMenuItem(_ref) {
  var openModal = _ref.openModal;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/options');
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Options'));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      openModal = _dispatch.openModal;

  return {
    openModal: openModal
  };
})(OptionsMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/pinned-plugins/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/pinned-plugins/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["createSlotFill"])('PinnedPlugins'),
    PinnedPlugins = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

PinnedPlugins.Slot = function (props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, props, function (fills) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(fills) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "edit-post-pinned-plugins"
    }, fills);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PinnedPlugins);


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/plugin-more-menu-item/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/plugin-more-menu-item/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plugins_more_menu_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugins-more-menu-group */ "./packages/edit-post/build-module/components/header/plugins-more-menu-group/index.js");




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var PluginMoreMenuItem = function PluginMoreMenuItem(_ref) {
  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_3__["noop"] : _ref$onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["onClick"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_plugins_more_menu_group__WEBPACK_IMPORTED_MODULE_7__["default"], null, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onClick: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(onClick, fillProps.onClose)
    }));
  });
};
/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @param {Object} props Component properties.
 * @param {string} [props.href] When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 * @param {Function} [props.onClick=noop] The callback function to be executed when the user clicks the menu item.
 * @param {...*} [props.other] Any additional props are passed through to the underlying [MenuItem](/packages/components/src/menu-item/README.md) component.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * function MyButtonMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginMoreMenuItem,
 * 		{
 * 			icon: 'smiley',
 * 			onClick: onButtonClick
 * 		},
 * 		__( 'My button title' )
 * 	)
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PluginMoreMenuItem } = wp.editPost;
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon="smiley"
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 *
 * @return {WPElement} The element to be rendered.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon
  };
}))(PluginMoreMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js":
/*!**************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin-more-menu-item */ "./packages/edit-post/build-module/components/header/plugin-more-menu-item/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var PluginSidebarMoreMenuItem = function PluginSidebarMoreMenuItem(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: isSelected ? 'yes' : icon,
    isSelected: isSelected,
    role: "menuitemcheckbox",
    onClick: onClick
  }, children);
};
/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label.
 *
 * @param {Object} props Component props.
 * @param {string} props.target A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 *
 * function MySidebarMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginSidebarMoreMenuItem,
 * 		{
 * 			target: 'my-sidebar',
 * 			icon: 'smiley',
 * 		},
 * 		__( 'My sidebar title' )
 * 	)
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PluginSidebarMoreMenuItem } = wp.editPost;
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon="smiley"
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 *
 * @return {WPElement} The element to be rendered.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon,
    sidebarName: "".concat(context.name, "/").concat(ownProps.target)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, _ref2) {
  var sidebarName = _ref2.sidebarName;

  var _select = select('core/edit-post'),
      getActiveGeneralSidebarName = _select.getActiveGeneralSidebarName;

  return {
    isSelected: getActiveGeneralSidebarName() === sidebarName
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch, _ref3) {
  var isSelected = _ref3.isSelected,
      sidebarName = _ref3.sidebarName;

  var _dispatch = dispatch('core/edit-post'),
      closeGeneralSidebar = _dispatch.closeGeneralSidebar,
      openGeneralSidebar = _dispatch.openGeneralSidebar;

  var onClick = isSelected ? closeGeneralSidebar : function () {
    return openGeneralSidebar(sidebarName);
  };
  return {
    onClick: onClick
  };
}))(PluginSidebarMoreMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/plugins-more-menu-group/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/plugins-more-menu-group/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["createSlotFill"])('PluginsMoreMenuGroup'),
    PluginsMoreMenuGroup = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

PluginsMoreMenuGroup.Slot = function (_ref) {
  var fillProps = _ref.fillProps;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, {
    fillProps: fillProps
  }, function (fills) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(fills) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuGroup"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Plugins')
    }, fills);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PluginsMoreMenuGroup);


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/post-publish-button-or-toggle.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/post-publish-button-or-toggle.js ***!
  \********************************************************************************************/
/*! exports provided: PostPublishButtonOrToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPublishButtonOrToggle", function() { return PostPublishButtonOrToggle; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function PostPublishButtonOrToggle(_ref) {
  var forceIsDirty = _ref.forceIsDirty,
      forceIsSaving = _ref.forceIsSaving,
      hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      isLessThanMediumViewport = _ref.isLessThanMediumViewport,
      isPending = _ref.isPending,
      isPublished = _ref.isPublished,
      isPublishSidebarEnabled = _ref.isPublishSidebarEnabled,
      isPublishSidebarOpened = _ref.isPublishSidebarOpened,
      isScheduled = _ref.isScheduled,
      togglePublishSidebar = _ref.togglePublishSidebar;
  var IS_TOGGLE = 'toggle';
  var IS_BUTTON = 'button';
  var component;
  /**
   * Conditions to show a BUTTON (publish directly) or a TOGGLE (open publish sidebar):
   *
   * 1) We want to show a BUTTON when the post status is at the _final stage_
   * for a particular role (see https://wordpress.org/support/article/post-status/):
   *
   * - is published
   * - is scheduled to be published
   * - is pending and can't be published (but only for viewports >= medium).
   * 	 Originally, we considered showing a button for pending posts that couldn't be published
   * 	 (for example, for an author with the contributor role). Some languages can have
   * 	 long translations for "Submit for review", so given the lack of UI real estate available
   * 	 we decided to take into account the viewport in that case.
   *  	 See: https://github.com/WordPress/gutenberg/issues/10475
   *
   * 2) Then, in small viewports, we'll show a TOGGLE.
   *
   * 3) Finally, we'll use the publish sidebar status to decide:
   *
   * - if it is enabled, we show a TOGGLE
   * - if it is disabled, we show a BUTTON
   */

  if (isPublished || isScheduled && isBeingScheduled || isPending && !hasPublishAction && !isLessThanMediumViewport) {
    component = IS_BUTTON;
  } else if (isLessThanMediumViewport) {
    component = IS_TOGGLE;
  } else if (isPublishSidebarEnabled) {
    component = IS_TOGGLE;
  } else {
    component = IS_BUTTON;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["PostPublishButton"], {
    forceIsDirty: forceIsDirty,
    forceIsSaving: forceIsSaving,
    isOpen: isPublishSidebarOpened,
    isToggle: component === IS_TOGGLE,
    onToggle: togglePublishSidebar
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(select('core/editor').getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: select('core/editor').isEditedPostBeingScheduled(),
    isPending: select('core/editor').isCurrentPostPending(),
    isPublished: select('core/editor').isCurrentPostPublished(),
    isPublishSidebarEnabled: select('core/editor').isPublishSidebarEnabled(),
    isPublishSidebarOpened: select('core/edit-post').isPublishSidebarOpened(),
    isScheduled: select('core/editor').isCurrentPostScheduled()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      togglePublishSidebar = _dispatch.togglePublishSidebar;

  return {
    togglePublishSidebar: togglePublishSidebar
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__["withViewportMatch"])({
  isLessThanMediumViewport: '< medium'
}))(PostPublishButtonOrToggle));


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/tools-more-menu-group/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/tools-more-menu-group/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["createSlotFill"])('ToolsMoreMenuGroup'),
    ToolsMoreMenuGroup = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

ToolsMoreMenuGroup.Slot = function (_ref) {
  var fillProps = _ref.fillProps;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, {
    fillProps: fillProps
  }, function (fills) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(fills) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuGroup"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tools')
    }, fills);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ToolsMoreMenuGroup);


/***/ }),

/***/ "./packages/edit-post/build-module/components/header/writing-menu/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/header/writing-menu/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _feature_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature-toggle */ "./packages/edit-post/build-module/components/header/feature-toggle/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function WritingMenu() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["MenuGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('View', 'noun')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_feature_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    feature: "fixedToolbar",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Toolbar'),
    info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Access all block and document tools in a single place'),
    messageActivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top toolbar activated'),
    messageDeactivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top toolbar deactivated')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_feature_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    feature: "focusMode",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spotlight Mode'),
    info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Focus on one block at a time'),
    messageActivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spotlight mode activated'),
    messageDeactivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spotlight mode deactivated')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_feature_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    feature: "fullscreenMode",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fullscreen Mode'),
    info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Work without distraction'),
    messageActivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fullscreen mode activated'),
    messageDeactivated: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fullscreen mode deactivated')
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_3__["ifViewportMatches"])('medium')(WritingMenu));


/***/ }),

/***/ "./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!*******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


var primary = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].primary,
    primaryShift = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].primaryShift,
    primaryAlt = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].primaryAlt,
    secondary = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].secondary,
    access = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].access,
    ctrl = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].ctrl,
    alt = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].alt,
    ctrlShift = _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcutList"].ctrlShift;
var mainShortcut = {
  className: 'edit-post-keyboard-shortcut-help__main-shortcuts',
  shortcuts: [{
    keyCombination: access('h'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display these keyboard shortcuts.')
  }]
};
var globalShortcuts = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Global shortcuts'),
  shortcuts: [{
    keyCombination: primary('s'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Save your changes.')
  }, {
    keyCombination: primary('z'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Undo your last changes.')
  }, {
    keyCombination: primaryShift('z'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Redo your last undo.')
  }, {
    keyCombination: primaryShift(','),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show or hide the settings sidebar.'),
    ariaLabel: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["shortcutAriaLabel"].primaryShift(',')
  }, {
    keyCombination: access('o'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open the block navigation menu.')
  }, {
    keyCombination: ctrl('`'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigate to the next part of the editor.'),
    ariaLabel: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["shortcutAriaLabel"].ctrl('`')
  }, {
    keyCombination: ctrlShift('`'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigate to the previous part of the editor.'),
    ariaLabel: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["shortcutAriaLabel"].ctrlShift('`')
  }, {
    keyCombination: access('n'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigate to the next part of the editor (alternative).')
  }, {
    keyCombination: access('p'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigate to the previous part of the editor (alternative).')
  }, {
    keyCombination: alt('F10'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Navigate to the nearest toolbar.')
  }, {
    keyCombination: secondary('m'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Switch between Visual Editor and Code Editor.')
  }]
};
var selectionShortcuts = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selection shortcuts'),
  shortcuts: [{
    keyCombination: primary('a'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select all text when typing. Press again to select all blocks.')
  }, {
    keyCombination: 'Esc',
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Clear selection.'),

    /* translators: The 'escape' key on a keyboard. */
    ariaLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Escape')
  }]
};
var blockShortcuts = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block shortcuts'),
  shortcuts: [{
    keyCombination: primaryShift('d'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Duplicate the selected block(s).')
  }, {
    keyCombination: access('z'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove the selected block(s).')
  }, {
    keyCombination: primaryAlt('t'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Insert a new block before the selected block(s).')
  }, {
    keyCombination: primaryAlt('y'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Insert a new block after the selected block(s).')
  }, {
    keyCombination: '/',
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Change the block type after adding a new paragraph.'),

    /* translators: The forward-slash character. e.g. '/'. */
    ariaLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Forward-slash')
  }]
};
var textFormattingShortcuts = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text formatting'),
  shortcuts: [{
    keyCombination: primary('b'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Make the selected text bold.')
  }, {
    keyCombination: primary('i'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Make the selected text italic.')
  }, {
    keyCombination: primary('k'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Convert the selected text into a link.')
  }, {
    keyCombination: primaryShift('k'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove a link.')
  }, {
    keyCombination: primary('u'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Underline the selected text.')
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ([mainShortcut, globalShortcuts, selectionShortcuts, blockShortcuts, textFormattingShortcuts]);


/***/ }),

/***/ "./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \******************************************************************************************/
/*! exports provided: KeyboardShortcutHelpModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardShortcutHelpModal", function() { return KeyboardShortcutHelpModal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js");




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var MODAL_NAME = 'edit-post/keyboard-shortcut-help';

var mapKeyCombination = function mapKeyCombination(keyCombination) {
  return keyCombination.map(function (character, index) {
    if (character === '+') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        key: index
      }, character);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("kbd", {
      key: index,
      className: "edit-post-keyboard-shortcut-help__shortcut-key"
    }, character);
  });
};

var ShortcutList = function ShortcutList(_ref) {
  var shortcuts = _ref.shortcuts;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
      className: "edit-post-keyboard-shortcut-help__shortcut-list",
      role: "list"
    }, shortcuts.map(function (_ref2, index) {
      var keyCombination = _ref2.keyCombination,
          description = _ref2.description,
          ariaLabel = _ref2.ariaLabel;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
        className: "edit-post-keyboard-shortcut-help__shortcut",
        key: index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "edit-post-keyboard-shortcut-help__shortcut-description"
      }, description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "edit-post-keyboard-shortcut-help__shortcut-term"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("kbd", {
        className: "edit-post-keyboard-shortcut-help__shortcut-key-combination",
        "aria-label": ariaLabel
      }, mapKeyCombination(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(keyCombination)))));
    }))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
};

var ShortcutSection = function ShortcutSection(_ref3) {
  var title = _ref3.title,
      shortcuts = _ref3.shortcuts,
      className = _ref3.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('edit-post-keyboard-shortcut-help__section', className)
  }, !!title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
    className: "edit-post-keyboard-shortcut-help__section-title"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ShortcutList, {
    shortcuts: shortcuts
  }));
};

function KeyboardShortcutHelpModal(_ref4) {
  var isModalActive = _ref4.isModalActive,
      toggleModal = _ref4.toggleModal;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["KeyboardShortcuts"], {
    bindGlobal: true,
    shortcuts: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__["rawShortcut"].access('h'), toggleModal)
  }), isModalActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    className: "edit-post-keyboard-shortcut-help",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Keyboard Shortcuts'),
    closeLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Close'),
    onRequestClose: toggleModal
  }, _config__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (config, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ShortcutSection, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, config));
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select) {
  return {
    isModalActive: select('core/edit-post').isModalActive(MODAL_NAME)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch, _ref6) {
  var isModalActive = _ref6.isModalActive;

  var _dispatch = dispatch('core/edit-post'),
      openModal = _dispatch.openModal,
      closeModal = _dispatch.closeModal;

  return {
    toggleModal: function toggleModal() {
      return isModalActive ? closeModal() : openModal(MODAL_NAME);
    }
  };
})])(KeyboardShortcutHelpModal));


/***/ }),

/***/ "./packages/edit-post/build-module/components/keyboard-shortcuts/index.js":
/*!********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/keyboard-shortcuts/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../keyboard-shortcuts */ "./packages/edit-post/build-module/keyboard-shortcuts.js");









/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var EditorModeKeyboardShortcuts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EditorModeKeyboardShortcuts, _Component);

  function EditorModeKeyboardShortcuts() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditorModeKeyboardShortcuts);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EditorModeKeyboardShortcuts).apply(this, arguments));
    _this.toggleMode = _this.toggleMode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.toggleSidebar = _this.toggleSidebar.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EditorModeKeyboardShortcuts, [{
    key: "toggleMode",
    value: function toggleMode() {
      var _this$props = this.props,
          mode = _this$props.mode,
          switchMode = _this$props.switchMode,
          isModeSwitchEnabled = _this$props.isModeSwitchEnabled;

      if (!isModeSwitchEnabled) {
        return;
      }

      switchMode(mode === 'visual' ? 'text' : 'visual');
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(event) {
      // This shortcut has no known clashes, but use preventDefault to prevent any
      // obscure shortcuts from triggering.
      event.preventDefault();
      var _this$props2 = this.props,
          isEditorSidebarOpen = _this$props2.isEditorSidebarOpen,
          closeSidebar = _this$props2.closeSidebar,
          openSidebar = _this$props2.openSidebar;

      if (isEditorSidebarOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["KeyboardShortcuts"], {
        bindGlobal: true,
        shortcuts: (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__["default"].toggleEditorMode.raw, this.toggleMode), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__["default"].toggleSidebar.raw, this.toggleSidebar), _ref)
      });
    }
  }]);

  return EditorModeKeyboardShortcuts;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select$getEditorSett = select('core/editor').getEditorSettings(),
      richEditingEnabled = _select$getEditorSett.richEditingEnabled,
      codeEditingEnabled = _select$getEditorSett.codeEditingEnabled;

  return {
    isModeSwitchEnabled: richEditingEnabled && codeEditingEnabled,
    mode: select('core/edit-post').getEditorMode(),
    isEditorSidebarOpen: select('core/edit-post').isEditorSidebarOpened()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch, ownProps, _ref2) {
  var select = _ref2.select;
  return {
    switchMode: function switchMode(mode) {
      dispatch('core/edit-post').switchEditorMode(mode);
    },
    openSidebar: function openSidebar() {
      var _select = select('core/block-editor'),
          getBlockSelectionStart = _select.getBlockSelectionStart;

      var sidebarToOpen = getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document';
      dispatch('core/edit-post').openGeneralSidebar(sidebarToOpen);
    },
    closeSidebar: dispatch('core/edit-post').closeGeneralSidebar
  };
})])(EditorModeKeyboardShortcuts));


/***/ }),

/***/ "./packages/edit-post/build-module/components/layout/index.js":
/*!********************************************************************!*\
  !*** ./packages/edit-post/build-module/components/layout/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _browser_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../browser-url */ "./packages/edit-post/build-module/components/browser-url/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header */ "./packages/edit-post/build-module/components/header/index.js");
/* harmony import */ var _text_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../text-editor */ "./packages/edit-post/build-module/components/text-editor/index.js");
/* harmony import */ var _visual_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../visual-editor */ "./packages/edit-post/build-module/components/visual-editor/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./packages/edit-post/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../keyboard-shortcut-help-modal */ "./packages/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var _manage_blocks_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../manage-blocks-modal */ "./packages/edit-post/build-module/components/manage-blocks-modal/index.js");
/* harmony import */ var _options_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../options-modal */ "./packages/edit-post/build-module/components/options-modal/index.js");
/* harmony import */ var _meta_boxes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../meta-boxes */ "./packages/edit-post/build-module/components/meta-boxes/index.js");
/* harmony import */ var _sidebar_settings_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sidebar/settings-sidebar */ "./packages/edit-post/build-module/components/sidebar/settings-sidebar/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sidebar */ "./packages/edit-post/build-module/components/sidebar/index.js");
/* harmony import */ var _sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../sidebar/plugin-post-publish-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js");
/* harmony import */ var _sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../sidebar/plugin-pre-publish-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js");
/* harmony import */ var _fullscreen_mode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../fullscreen-mode */ "./packages/edit-post/build-module/components/fullscreen-mode/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */
















function Layout(_ref) {
  var mode = _ref.mode,
      editorSidebarOpened = _ref.editorSidebarOpened,
      pluginSidebarOpened = _ref.pluginSidebarOpened,
      publishSidebarOpened = _ref.publishSidebarOpened,
      hasFixedToolbar = _ref.hasFixedToolbar,
      closePublishSidebar = _ref.closePublishSidebar,
      togglePublishSidebar = _ref.togglePublishSidebar,
      hasActiveMetaboxes = _ref.hasActiveMetaboxes,
      isSaving = _ref.isSaving,
      isMobileViewport = _ref.isMobileViewport,
      isRichEditingEnabled = _ref.isRichEditingEnabled;
  var sidebarIsOpened = editorSidebarOpened || pluginSidebarOpened || publishSidebarOpened;
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('edit-post-layout', {
    'is-sidebar-opened': sidebarIsOpened,
    'has-fixed-toolbar': hasFixedToolbar,
    'has-metaboxes': hasActiveMetaboxes
  });
  var publishLandmarkProps = {
    role: 'region',

    /* translators: accessibility text for the publish landmark region. */
    'aria-label': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editor publish'),
    tabIndex: -1
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FocusReturnProvider"], {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullscreen_mode__WEBPACK_IMPORTED_MODULE_24__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_browser_url__WEBPACK_IMPORTED_MODULE_11__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesWarning"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["AutosaveMonitor"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["LocalAutosaveMonitor"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_header__WEBPACK_IMPORTED_MODULE_12__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-layout__content",
    role: "region"
    /* translators: accessibility text for the content landmark region. */
    ,
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editor content'),
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["EditorNotices"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["PreserveScrollInReorder"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_16__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_manage_blocks_modal__WEBPACK_IMPORTED_MODULE_17__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_options_modal__WEBPACK_IMPORTED_MODULE_18__["default"], null), (mode === 'text' || !isRichEditingEnabled) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_text_editor__WEBPACK_IMPORTED_MODULE_13__["default"], null), isRichEditingEnabled && mode === 'visual' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_visual_editor__WEBPACK_IMPORTED_MODULE_14__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-layout__metaboxes"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_meta_boxes__WEBPACK_IMPORTED_MODULE_19__["default"], {
    location: "normal"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-layout__metaboxes"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_meta_boxes__WEBPACK_IMPORTED_MODULE_19__["default"], {
    location: "advanced"
  }))), publishSidebarOpened ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PostPublishPanel"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, publishLandmarkProps, {
    onClose: closePublishSidebar,
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving,
    PrePublishExtension: _sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_23__["default"].Slot,
    PostPublishExtension: _sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_22__["default"].Slot
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "edit-post-toggle-publish-panel"
  }, publishLandmarkProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isDefault: true,
    type: "button",
    className: "edit-post-toggle-publish-panel__button",
    onClick: togglePublishSidebar,
    "aria-expanded": false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open publish panel'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_sidebar_settings_sidebar__WEBPACK_IMPORTED_MODULE_20__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_sidebar__WEBPACK_IMPORTED_MODULE_21__["default"].Slot, null), isMobileViewport && sidebarIsOpened && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ScrollLock"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"].Slot, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__["PluginArea"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  return {
    mode: select('core/edit-post').getEditorMode(),
    editorSidebarOpened: select('core/edit-post').isEditorSidebarOpened(),
    pluginSidebarOpened: select('core/edit-post').isPluginSidebarOpened(),
    publishSidebarOpened: select('core/edit-post').isPublishSidebarOpened(),
    hasFixedToolbar: select('core/edit-post').isFeatureActive('fixedToolbar'),
    hasActiveMetaboxes: select('core/edit-post').hasMetaBoxes(),
    isSaving: select('core/edit-post').isSavingMetaBoxes(),
    isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      closePublishSidebar = _dispatch.closePublishSidebar,
      togglePublishSidebar = _dispatch.togglePublishSidebar;

  return {
    closePublishSidebar: closePublishSidebar,
    togglePublishSidebar: togglePublishSidebar
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_3__["navigateRegions"], Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_9__["withViewportMatch"])({
  isMobileViewport: '< small'
}))(Layout));


/***/ }),

/***/ "./packages/edit-post/build-module/components/manage-blocks-modal/category.js":
/*!************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/manage-blocks-modal/category.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checklist */ "./packages/edit-post/build-module/components/manage-blocks-modal/checklist.js");
/* harmony import */ var _edit_post_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-post-settings */ "./packages/edit-post/build-module/components/edit-post-settings/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function BlockManagerCategory(_ref) {
  var instanceId = _ref.instanceId,
      category = _ref.category,
      blockTypes = _ref.blockTypes,
      hiddenBlockTypes = _ref.hiddenBlockTypes,
      toggleVisible = _ref.toggleVisible,
      toggleAllVisible = _ref.toggleAllVisible;
  var settings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_edit_post_settings__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var allowedBlockTypes = settings.allowedBlockTypes;
  var filteredBlockTypes = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (allowedBlockTypes === true) {
      return blockTypes;
    }

    return blockTypes.filter(function (_ref2) {
      var name = _ref2.name;
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(allowedBlockTypes || [], name);
    });
  }, [allowedBlockTypes, blockTypes]);

  if (!filteredBlockTypes.length) {
    return null;
  }

  var checkedBlockNames = lodash__WEBPACK_IMPORTED_MODULE_2__["without"].apply(void 0, [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(filteredBlockTypes, 'name')].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(hiddenBlockTypes)));
  var titleId = 'edit-post-manage-blocks-modal__category-title-' + instanceId;
  var isAllChecked = checkedBlockNames.length === filteredBlockTypes.length;
  var ariaChecked;

  if (isAllChecked) {
    ariaChecked = 'true';
  } else if (checkedBlockNames.length > 0) {
    ariaChecked = 'mixed';
  } else {
    ariaChecked = 'false';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    role: "group",
    "aria-labelledby": titleId,
    className: "edit-post-manage-blocks-modal__category"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
    checked: isAllChecked,
    onChange: toggleAllVisible,
    className: "edit-post-manage-blocks-modal__category-title",
    "aria-checked": ariaChecked,
    label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      id: titleId
    }, category.title)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_checklist__WEBPACK_IMPORTED_MODULE_6__["default"], {
    blockTypes: filteredBlockTypes,
    value: checkedBlockNames,
    onItemChange: toggleVisible
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withInstanceId"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/edit-post'),
      getPreference = _select.getPreference;

  return {
    hiddenBlockTypes: getPreference('hiddenBlockTypes')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/edit-post'),
      showBlockTypes = _dispatch.showBlockTypes,
      hideBlockTypes = _dispatch.hideBlockTypes;

  return {
    toggleVisible: function toggleVisible(blockName, nextIsChecked) {
      if (nextIsChecked) {
        showBlockTypes(blockName);
      } else {
        hideBlockTypes(blockName);
      }
    },
    toggleAllVisible: function toggleAllVisible(nextIsChecked) {
      var blockNames = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(ownProps.blockTypes, 'name');

      if (nextIsChecked) {
        showBlockTypes(blockNames);
      } else {
        hideBlockTypes(blockNames);
      }
    }
  };
})])(BlockManagerCategory));


/***/ }),

/***/ "./packages/edit-post/build-module/components/manage-blocks-modal/checklist.js":
/*!*************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/manage-blocks-modal/checklist.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function BlockTypesChecklist(_ref) {
  var blockTypes = _ref.blockTypes,
      value = _ref.value,
      onItemChange = _ref.onItemChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "edit-post-manage-blocks-modal__checklist"
  }, blockTypes.map(function (blockType) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: blockType.name,
      className: "edit-post-manage-blocks-modal__checklist-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
      label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, blockType.title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockIcon"], {
        icon: blockType.icon
      })),
      checked: value.includes(blockType.name),
      onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["partial"])(onItemChange, blockType.name)
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockTypesChecklist);


/***/ }),

/***/ "./packages/edit-post/build-module/components/manage-blocks-modal/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/manage-blocks-modal/index.js ***!
  \*********************************************************************************/
/*! exports provided: ManageBlocksModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBlocksModal", function() { return ManageBlocksModal; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager */ "./packages/edit-post/build-module/components/manage-blocks-modal/manager.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Unique identifier for Manage Blocks modal.
 *
 * @type {string}
 */

var MODAL_NAME = 'edit-post/manage-blocks';
function ManageBlocksModal(_ref) {
  var isActive = _ref.isActive,
      closeModal = _ref.closeModal;

  if (!isActive) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    className: "edit-post-manage-blocks-modal",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block Manager'),
    closeLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Close'),
    onRequestClose: closeModal
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_manager__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/edit-post'),
      isModalActive = _select.isModalActive;

  return {
    isActive: isModalActive(MODAL_NAME)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      closeModal = _dispatch.closeModal;

  return {
    closeModal: closeModal
  };
})])(ManageBlocksModal));


/***/ }),

/***/ "./packages/edit-post/build-module/components/manage-blocks-modal/manager.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/manage-blocks-modal/manager.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category */ "./packages/edit-post/build-module/components/manage-blocks-modal/category.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function BlockManager(_ref) {
  var search = _ref.search,
      setState = _ref.setState,
      blockTypes = _ref.blockTypes,
      categories = _ref.categories,
      hasBlockSupport = _ref.hasBlockSupport,
      isMatchingSearchTerm = _ref.isMatchingSearchTerm,
      numberOfHiddenBlocks = _ref.numberOfHiddenBlocks;
  // Filtering occurs here (as opposed to `withSelect`) to avoid wasted
  // wasted renders by consequence of `Array#filter` producing a new
  // value reference on each call.
  blockTypes = blockTypes.filter(function (blockType) {
    return hasBlockSupport(blockType, 'inserter', true) && (!search || isMatchingSearchTerm(blockType, search)) && !blockType.parent;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    type: "search",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Search for a block'),
    value: search,
    onChange: function onChange(nextSearch) {
      return setState({
        search: nextSearch
      });
    },
    className: "edit-post-manage-blocks-modal__search"
  }), !!numberOfHiddenBlocks && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__disabled-blocks-count"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["_n"])('%1$d block is disabled.', '%1$d blocks are disabled.', numberOfHiddenBlocks), numberOfHiddenBlocks)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    tabIndex: "0",
    role: "region",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Available block types'),
    className: "edit-post-manage-blocks-modal__results"
  }, blockTypes.length === 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "edit-post-manage-blocks-modal__no-results"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('No blocks found.')), categories.map(function (category) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_category__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: category.slug,
      category: category,
      blockTypes: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(blockTypes, {
        category: category.slug
      })
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])({
  search: ''
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/blocks'),
      getBlockTypes = _select.getBlockTypes,
      getCategories = _select.getCategories,
      hasBlockSupport = _select.hasBlockSupport,
      isMatchingSearchTerm = _select.isMatchingSearchTerm;

  var _select2 = select('core/edit-post'),
      getPreference = _select2.getPreference;

  var hiddenBlockTypes = getPreference('hiddenBlockTypes');
  var numberOfHiddenBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(hiddenBlockTypes) && hiddenBlockTypes.length;
  return {
    blockTypes: getBlockTypes(),
    categories: getCategories(),
    hasBlockSupport: hasBlockSupport,
    isMatchingSearchTerm: isMatchingSearchTerm,
    numberOfHiddenBlocks: numberOfHiddenBlocks
  };
})])(BlockManager));


/***/ }),

/***/ "./packages/edit-post/build-module/components/meta-boxes/index.js":
/*!************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/meta-boxes/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-boxes-area */ "./packages/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js");
/* harmony import */ var _meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-box-visibility */ "./packages/edit-post/build-module/components/meta-boxes/meta-box-visibility.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function MetaBoxes(_ref) {
  var location = _ref.location,
      isVisible = _ref.isVisible,
      metaBoxes = _ref.metaBoxes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(metaBoxes, function (_ref2) {
    var id = _ref2.id;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      id: id
    });
  }), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, _ref3) {
  var location = _ref3.location;

  var _select = select('core/edit-post'),
      isMetaBoxLocationVisible = _select.isMetaBoxLocationVisible,
      getMetaBoxesPerLocation = _select.getMetaBoxesPerLocation;

  return {
    metaBoxes: getMetaBoxesPerLocation(location),
    isVisible: isMetaBoxLocationVisible(location)
  };
})(MetaBoxes));


/***/ }),

/***/ "./packages/edit-post/build-module/components/meta-boxes/meta-box-visibility.js":
/*!**************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/meta-boxes/meta-box-visibility.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);






/**
 * WordPress dependencies
 */



var MetaBoxVisibility =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MetaBoxVisibility, _Component);

  function MetaBoxVisibility() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MetaBoxVisibility);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MetaBoxVisibility).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MetaBoxVisibility, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDOM();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isVisible !== prevProps.isVisible) {
        this.updateDOM();
      }
    }
  }, {
    key: "updateDOM",
    value: function updateDOM() {
      var _this$props = this.props,
          id = _this$props.id,
          isVisible = _this$props.isVisible;
      var element = document.getElementById(id);

      if (!element) {
        return;
      }

      if (isVisible) {
        element.classList.remove('is-hidden');
      } else {
        element.classList.add('is-hidden');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MetaBoxVisibility;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, _ref) {
  var id = _ref.id;
  return {
    isVisible: select('core/edit-post').isEditorPanelEnabled("meta-box-".concat(id))
  };
})(MetaBoxVisibility));


/***/ }),

/***/ "./packages/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js":
/*!****************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





var MetaBoxesArea =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MetaBoxesArea, _Component);

  /**
   * @inheritdoc
   */
  function MetaBoxesArea() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MetaBoxesArea);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MetaBoxesArea).apply(this, arguments));
    _this.bindContainerNode = _this.bindContainerNode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }
  /**
   * @inheritdoc
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MetaBoxesArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.form = document.querySelector('.metabox-location-' + this.props.location);

      if (this.form) {
        this.container.appendChild(this.form);
      }
    }
    /**
     * Get the meta box location form from the original location.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.form) {
        document.querySelector('#metaboxes').appendChild(this.form);
      }
    }
    /**
     * Binds the metabox area container node.
     *
     * @param {Element} node DOM Node.
     */

  }, {
    key: "bindContainerNode",
    value: function bindContainerNode(node) {
      this.container = node;
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          isSaving = _this$props.isSaving;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()('edit-post-meta-boxes-area', "is-".concat(location), {
        'is-loading': isSaving
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classes
      }, isSaving && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "edit-post-meta-boxes-area__container",
        ref: this.bindContainerNode
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "edit-post-meta-boxes-area__clear"
      }));
    }
  }]);

  return MetaBoxesArea;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  return {
    isSaving: select('core/edit-post').isSavingMetaBoxes()
  };
})(MetaBoxesArea));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/index.js":
/*!***************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/index.js ***!
  \***************************************************************************/
/*! exports provided: OptionsModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModal", function() { return OptionsModal; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section */ "./packages/edit-post/build-module/components/options-modal/section.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options */ "./packages/edit-post/build-module/components/options-modal/options/index.js");
/* harmony import */ var _meta_boxes_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meta-boxes-section */ "./packages/edit-post/build-module/components/options-modal/meta-boxes-section.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




var MODAL_NAME = 'edit-post/options';
function OptionsModal(_ref) {
  var isModalActive = _ref.isModalActive,
      isViewable = _ref.isViewable,
      closeModal = _ref.closeModal;

  if (!isModalActive) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    className: "edit-post-options-modal",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Options'),
    closeLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Close'),
    onRequestClose: closeModal
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('General')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePublishSidebarOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pre-publish Checks')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnableTipsOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tips')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnableFeature"], {
    feature: "showInserterHelpPanel",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inserter Help Panel')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Document Panels')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePluginDocumentSettingPanelOption"].Slot, null), isViewable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Permalink'),
    panelName: "post-link"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PostTaxonomies"], {
    taxonomyWrapper: function taxonomyWrapper(content, taxonomy) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
        label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(taxonomy, ['labels', 'menu_name']),
        panelName: "taxonomy-panel-".concat(taxonomy.slug)
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PostFeaturedImageCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Featured Image'),
    panelName: "featured-image"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PostExcerptCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Excerpt'),
    panelName: "post-excerpt"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PostTypeSupportCheck"], {
    supportKeys: ['comments', 'trackbacks']
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Discussion'),
    panelName: "discussion-panel"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["PageAttributesCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_8__["EnablePanelOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Page Attributes'),
    panelName: "page-attributes"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_boxes_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Advanced Panels')
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    isModalActive: select('core/edit-post').isModalActive(MODAL_NAME),
    isViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['viewable'], false)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch('core/edit-post').closeModal();
    }
  };
}))(OptionsModal));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/meta-boxes-section.js":
/*!****************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/meta-boxes-section.js ***!
  \****************************************************************************************/
/*! exports provided: MetaBoxesSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaBoxesSection", function() { return MetaBoxesSection; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section */ "./packages/edit-post/build-module/components/options-modal/section.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./packages/edit-post/build-module/components/options-modal/options/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function MetaBoxesSection(_ref) {
  var areCustomFieldsRegistered = _ref.areCustomFieldsRegistered,
      metaBoxes = _ref.metaBoxes,
      sectionProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["areCustomFieldsRegistered", "metaBoxes"]);

  // The 'Custom Fields' meta box is a special case that we handle separately.
  var thirdPartyMetaBoxes = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(metaBoxes, function (_ref2) {
    var id = _ref2.id;
    return id !== 'postcustom';
  });

  if (!areCustomFieldsRegistered && thirdPartyMetaBoxes.length === 0) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_section__WEBPACK_IMPORTED_MODULE_5__["default"], sectionProps, areCustomFieldsRegistered && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_6__["EnableCustomFieldsOption"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Custom Fields')
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(thirdPartyMetaBoxes, function (_ref3) {
    var id = _ref3.id,
        title = _ref3.title;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_6__["EnablePanelOption"], {
      key: id,
      label: title,
      panelName: "meta-box-".concat(id)
    });
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core/edit-post'),
      getAllMetaBoxes = _select2.getAllMetaBoxes;

  return {
    // This setting should not live in the block editor's store.
    areCustomFieldsRegistered: getEditorSettings().enableCustomFields !== undefined,
    metaBoxes: getAllMetaBoxes()
  };
})(MetaBoxesSection));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/base.js":
/*!**********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/base.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function BaseOption(_ref) {
  var label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-options-modal__option"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"], {
    label: label,
    checked: isChecked,
    onChange: onChange
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (BaseOption);


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/deferred.js":
/*!**************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/deferred.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ "./packages/edit-post/build-module/components/options-modal/options/base.js");







/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var DeferredOption =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DeferredOption, _Component);

  function DeferredOption(_ref) {
    var _this;

    var isChecked = _ref.isChecked;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeferredOption);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DeferredOption).apply(this, arguments));
    _this.state = {
      isChecked: isChecked
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DeferredOption, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isChecked !== this.props.isChecked) {
        this.props.onChange(this.state.isChecked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_base__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: this.props.label,
        isChecked: this.state.isChecked,
        onChange: function onChange(isChecked) {
          return _this2.setState({
            isChecked: isChecked
          });
        }
      });
    }
  }]);

  return DeferredOption;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeferredOption);


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-custom-fields.js":
/*!**************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-custom-fields.js ***!
  \**************************************************************************************************/
/*! exports provided: CustomFieldsConfirmation, EnableCustomFieldsOption, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsConfirmation", function() { return CustomFieldsConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableCustomFieldsOption", function() { return EnableCustomFieldsOption; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base */ "./packages/edit-post/build-module/components/options-modal/options/base.js");



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function CustomFieldsConfirmation(_ref) {
  var willEnable = _ref.willEnable;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isReloading = _useState2[0],
      setIsReloading = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "edit-post-options-modal__custom-fields-confirmation-message"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('A page reload is required for this change. Make sure your content is saved before reloading.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "edit-post-options-modal__custom-fields-confirmation-button",
    isDefault: true,
    isBusy: isReloading,
    disabled: isReloading,
    onClick: function onClick() {
      setIsReloading(true);
      document.getElementById('toggle-custom-fields-form').submit();
    }
  }, willEnable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable & Reload') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Disable & Reload')));
}
function EnableCustomFieldsOption(_ref2) {
  var label = _ref2.label,
      areCustomFieldsEnabled = _ref2.areCustomFieldsEnabled;

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(areCustomFieldsEnabled),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isChecked = _useState4[0],
      setIsChecked = _useState4[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_base__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    isChecked: isChecked,
    onChange: setIsChecked
  }, isChecked !== areCustomFieldsEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CustomFieldsConfirmation, {
    willEnable: isChecked
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    areCustomFieldsEnabled: !!select('core/editor').getEditorSettings().enableCustomFields
  };
})(EnableCustomFieldsOption));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-feature.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-feature.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./packages/edit-post/build-module/components/options-modal/options/base.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, _ref) {
  var feature = _ref.feature;
  return {
    isChecked: select('core/edit-post').isFeatureActive(feature)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch, _ref2) {
  var feature = _ref2.feature;

  var _dispatch = dispatch('core/edit-post'),
      toggleFeature = _dispatch.toggleFeature;

  return {
    onChange: function onChange() {
      toggleFeature(feature);
    }
  };
}))(_base__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-panel.js":
/*!******************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-panel.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./packages/edit-post/build-module/components/options-modal/options/base.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, _ref) {
  var panelName = _ref.panelName;

  var _select = select('core/edit-post'),
      isEditorPanelEnabled = _select.isEditorPanelEnabled,
      isEditorPanelRemoved = _select.isEditorPanelRemoved;

  return {
    isRemoved: isEditorPanelRemoved(panelName),
    isChecked: isEditorPanelEnabled(panelName)
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["ifCondition"])(function (_ref2) {
  var isRemoved = _ref2.isRemoved;
  return !isRemoved;
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch, _ref3) {
  var panelName = _ref3.panelName;
  return {
    onChange: function onChange() {
      return dispatch('core/edit-post').toggleEditorPanelEnabled(panelName);
    }
  };
}))(_base__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-plugin-document-setting-panel.js":
/*!******************************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-plugin-document-setting-panel.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./packages/edit-post/build-module/components/options-modal/options/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('EnablePluginDocumentSettingPanelOption'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var EnablePluginDocumentSettingPanelOption = function EnablePluginDocumentSettingPanelOption(_ref) {
  var label = _ref.label,
      panelName = _ref.panelName;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["EnablePanelOption"], {
    label: label,
    panelName: panelName
  }));
};

EnablePluginDocumentSettingPanelOption.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (EnablePluginDocumentSettingPanelOption);


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-publish-sidebar.js":
/*!****************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-publish-sidebar.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./packages/edit-post/build-module/components/options-modal/options/base.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  return {
    isChecked: select('core/editor').isPublishSidebarEnabled()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      enablePublishSidebar = _dispatch.enablePublishSidebar,
      disablePublishSidebar = _dispatch.disablePublishSidebar;

  return {
    onChange: function onChange(isEnabled) {
      return isEnabled ? enablePublishSidebar() : disablePublishSidebar();
    }
  };
}), // In < medium viewports we override this option and always show the publish sidebar.
// See the edit-post's header component for the specific logic.
Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__["ifViewportMatches"])('medium'))(_base__WEBPACK_IMPORTED_MODULE_3__["default"]));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/enable-tips.js":
/*!*****************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/enable-tips.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deferred__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deferred */ "./packages/edit-post/build-module/components/options-modal/options/deferred.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  return {
    isChecked: select('core/nux').areTipsEnabled()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/nux'),
      enableTips = _dispatch.enableTips,
      disableTips = _dispatch.disableTips;

  return {
    onChange: function onChange(isEnabled) {
      return isEnabled ? enableTips() : disableTips();
    }
  };
}))( // Using DeferredOption here means enableTips() is called when the Options
// modal is dismissed. This stops the NUX guide from appearing above the
// Options modal, which looks totally weird.
_deferred__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/options/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/options/index.js ***!
  \***********************************************************************************/
/*! exports provided: EnableCustomFieldsOption, EnablePanelOption, EnablePluginDocumentSettingPanelOption, EnablePublishSidebarOption, EnableTipsOption, EnableFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enable_custom_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enable-custom-fields */ "./packages/edit-post/build-module/components/options-modal/options/enable-custom-fields.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnableCustomFieldsOption", function() { return _enable_custom_fields__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _enable_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enable-panel */ "./packages/edit-post/build-module/components/options-modal/options/enable-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnablePanelOption", function() { return _enable_panel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _enable_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enable-plugin-document-setting-panel */ "./packages/edit-post/build-module/components/options-modal/options/enable-plugin-document-setting-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnablePluginDocumentSettingPanelOption", function() { return _enable_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _enable_publish_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enable-publish-sidebar */ "./packages/edit-post/build-module/components/options-modal/options/enable-publish-sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnablePublishSidebarOption", function() { return _enable_publish_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _enable_tips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enable-tips */ "./packages/edit-post/build-module/components/options-modal/options/enable-tips.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnableTipsOption", function() { return _enable_tips__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _enable_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enable-feature */ "./packages/edit-post/build-module/components/options-modal/options/enable-feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnableFeature", function() { return _enable_feature__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./packages/edit-post/build-module/components/options-modal/section.js":
/*!*****************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/options-modal/section.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Section = function Section(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    className: "edit-post-options-modal__section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "edit-post-options-modal__section-title"
  }, title), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/discussion-panel/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/discussion-panel/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */





/**
 * Module Constants
 */

var PANEL_NAME = 'discussion-panel';

function DiscussionPanel(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostTypeSupportCheck"], {
    supportKeys: ['comments', 'trackbacks']
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Discussion'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostTypeSupportCheck"], {
    supportKeys: "comments"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostComments"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostTypeSupportCheck"], {
    supportKeys: "trackbacks"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostPingbacks"], null)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  return {
    isEnabled: select('core/edit-post').isEditorPanelEnabled(PANEL_NAME),
    isOpened: select('core/edit-post').isEditorPanelOpened(PANEL_NAME)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch('core/edit-post').toggleEditorPanelOpened(PANEL_NAME);
    }
  };
})])(DiscussionPanel));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/featured-image/index.js":
/*!************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/featured-image/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Module Constants
 */

var PANEL_NAME = 'featured-image';

function FeaturedImage(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      postType = _ref.postType,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["PostFeaturedImageCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels', 'featured_image'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Featured Image')),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["PostFeaturedImage"], null)));
}

var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _select3 = select('core/edit-post'),
      isEditorPanelEnabled = _select3.isEditorPanelEnabled,
      isEditorPanelOpened = _select3.isEditorPanelOpened;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    isEnabled: isEditorPanelEnabled(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME)
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  return {
    onTogglePanel: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["partial"])(toggleEditorPanelOpened, PANEL_NAME)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(applyWithSelect, applyWithDispatch)(FeaturedImage));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/index.js":
/*!*********************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["createSlotFill"])('Sidebar'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;
/**
 * Renders a sidebar with its content.
 *
 * @return {Object} The rendered sidebar.
 */


function Sidebar(_ref) {
  var children = _ref.children,
      label = _ref.label,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-sidebar', className),
    role: "region",
    "aria-label": label,
    tabIndex: "-1"
  }, children);
}

Sidebar = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["withFocusReturn"])({
  onFocusReturn: function onFocusReturn() {
    var button = document.querySelector('.edit-post-header__settings [aria-label="Settings"]');

    if (button) {
      button.focus();
      return false;
    }
  }
})(Sidebar);

function AnimatedSidebarFill(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Animate"], {
    type: "slide-in",
    options: {
      origin: 'left'
    }
  }, function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Sidebar, props);
  }));
}

var WrappedSidebar = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, _ref2) {
  var name = _ref2.name;
  return {
    isActive: select('core/edit-post').getActiveGeneralSidebarName() === name
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["ifCondition"])(function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive;
}))(AnimatedSidebarFill);
WrappedSidebar.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (WrappedSidebar);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/last-revision/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/last-revision/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



function LastRevision() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostLastRevisionCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: "edit-post-last-revision__panel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostLastRevision"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (LastRevision);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/page-attributes/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/page-attributes/index.js ***!
  \*************************************************************************************/
/*! exports provided: PageAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAttributes", function() { return PageAttributes; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Module Constants
 */

var PANEL_NAME = 'page-attributes';
function PageAttributes(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      postType = _ref.postType;

  if (!isEnabled || !postType) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["PageAttributesCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels', 'attributes'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Page Attributes')),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["PageTemplate"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["PageAttributesParent"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["PageAttributesOrder"], null))));
}
var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core/edit-post'),
      isEditorPanelEnabled = _select2.isEditorPanelEnabled,
      isEditorPanelOpened = _select2.isEditorPanelOpened;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  return {
    isEnabled: isEditorPanelEnabled(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME),
    postType: getPostType(getEditedPostAttribute('type'))
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  return {
    onTogglePanel: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["partial"])(toggleEditorPanelOpened, PANEL_NAME)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(applyWithSelect, applyWithDispatch)(PageAttributes));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js":
/*!***************************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js ***!
  \***************************************************************************************************/
/*! exports provided: Fill, Slot, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _options_modal_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../options-modal/options */ "./packages/edit-post/build-module/components/options-modal/options/index.js");


/**
 * Defines as extensibility slot for the Settings sidebar
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('PluginDocumentSettingPanel'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;



var PluginDocumentSettingFill = function PluginDocumentSettingFill(_ref) {
  var isEnabled = _ref.isEnabled,
      panelName = _ref.panelName,
      opened = _ref.opened,
      onToggle = _ref.onToggle,
      className = _ref.className,
      title = _ref.title,
      icon = _ref.icon,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options_modal_options__WEBPACK_IMPORTED_MODULE_5__["EnablePluginDocumentSettingPanelOption"], {
    label: title,
    panelName: panelName
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, isEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: className,
    title: title,
    icon: icon,
    opened: opened,
    onToggle: onToggle
  }, children)));
};
/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @param {Object} props Component properties.
 * @param {string} [props.name] The machine-friendly name for the panel.
 * @param {string} [props.className] An optional class name added to the row.
 * @param {string} [props.title] The title of the panel
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var __ = wp.i18n.__;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
 *
 * function MyDocumentSettingPlugin() {
 * 	return el(
 * 		PluginDocumentSettingPanel,
 * 		{
 * 			className: 'my-document-setting-plugin',
 * 			title: 'My Panel',
 * 		},
 * 		__( 'My Document Setting Panel' )
 * 	);
 * }
 *
 * registerPlugin( 'my-document-setting-plugin', {
 * 		render: MyDocumentSettingPlugin
 * } );
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { registerPlugin } = wp.plugins;
 * const { PluginDocumentSettingPanel } = wp.editPost;
 *
 * const MyDocumentSettingTest = () => (
 * 		<PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel">
 *			<p>My Document Setting Panel</p>
 *		</PluginDocumentSettingPanel>
 *	);
 *
 *  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 *
 * @return {WPElement} The WPElement to be rendered.
 */


var PluginDocumentSettingPanel = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon,
    panelName: "".concat(context.name, "/").concat(ownProps.name)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, _ref2) {
  var panelName = _ref2.panelName;
  return {
    opened: select('core/edit-post').isEditorPanelOpened(panelName),
    isEnabled: select('core/edit-post').isEditorPanelEnabled(panelName)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch, _ref3) {
  var panelName = _ref3.panelName;
  return {
    onToggle: function onToggle() {
      return dispatch('core/edit-post').toggleEditorPanelOpened(panelName);
    }
  };
}))(PluginDocumentSettingFill);
PluginDocumentSettingPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginDocumentSettingPanel);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js":
/*!***********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["createSlotFill"])('PluginPostPublishPanel'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var PluginPostPublishPanelFill = function PluginPostPublishPanelFill(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      _ref$initialOpen = _ref.initialOpen,
      initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
      icon = _ref.icon;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    className: className,
    initialOpen: initialOpen || !title,
    title: title,
    icon: icon
  }, children));
};
/**
 * Renders provided content to the post-publish panel in the publish flow
 * (side panel that opens after a user publishes the post).
 *
 * @param {Object} props Component properties.
 * @param {string} [props.className] An optional class name added to the panel.
 * @param {string} [props.title] Title displayed at the top of the panel.
 * @param {boolean} [props.initialOpen=false] Whether to have the panel initially opened. When no title is provided it is always opened.
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;
 *
 * function MyPluginPostPublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPostPublishPanel,
 * 		{
 * 			className: 'my-plugin-post-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PluginPostPublishPanel } = wp.editPost;
 *
 * const MyPluginPostPublishPanel = () => (
 * 	<PluginPostPublishPanel
 * 		className="my-plugin-post-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 *         { __( 'My panel content' ) }
 * 	</PluginPostPublishPanel>
 * );
 * ```
 *
 * @return {WPElement} The WPElement to be rendered.
 */


var PluginPostPublishPanel = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon
  };
}))(PluginPostPublishPanelFill);
PluginPostPublishPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPostPublishPanel);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js ***!
  \*********************************************************************************************/
/*! exports provided: Fill, Slot, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Defines as extensibility slot for the Status & Visibility panel.
 */

/**
 * WordPress dependencies
 */


var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('PluginPostStatusInfo'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;
/**
 * Renders a row in the Status & Visibility panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @param {Object} props Component properties.
 * @param {string} [props.className] An optional class name added to the row.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
 *
 * function MyPluginPostStatusInfo() {
 * 	return wp.element.createElement(
 * 		PluginPostStatusInfo,
 * 		{
 * 			className: 'my-plugin-post-status-info',
 * 		},
 * 		__( 'My post status info' )
 * 	)
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PluginPostStatusInfo } = wp.editPost;
 *
 * const MyPluginPostStatusInfo = () => (
 * 	<PluginPostStatusInfo
 * 		className="my-plugin-post-status-info"
 * 	>
 * 		{ __( 'My post status info' ) }
 * 	</PluginPostStatusInfo>
 * );
 * ```
 *
 * @return {WPElement} The WPElement to be rendered.
 */




var PluginPostStatusInfo = function PluginPostStatusInfo(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], {
    className: className
  }, children));
};

PluginPostStatusInfo.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPostStatusInfo);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js":
/*!**********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('PluginPrePublishPanel'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var PluginPrePublishPanelFill = function PluginPrePublishPanelFill(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      _ref$initialOpen = _ref.initialOpen,
      initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
      icon = _ref.icon;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: className,
    initialOpen: initialOpen || !title,
    title: title,
    icon: icon
  }, children));
};
/**
 * Renders provided content to the pre-publish side panel in the publish flow
 * (side panel that opens when a user first pushes "Publish" from the main editor).
 *
 * @param {Object} props Component props.
 * @param {string} [props.className] An optional class name added to the panel.
 * @param {string} [props.title] Title displayed at the top of the panel.
 * @param {boolean} [props.initialOpen=false] Whether to have the panel initially opened. When no title is provided it is always opened.
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.

 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;
 *
 * function MyPluginPrePublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPrePublishPanel,
 * 		{
 * 			className: 'my-plugin-pre-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PluginPrePublishPanel } = wp.editPost;
 *
 * const MyPluginPrePublishPanel = () => (
 * 	<PluginPrePublishPanel
 * 		className="my-plugin-pre-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 * 	    { __( 'My panel content' ) }
 * 	</PluginPrePublishPanel>
 * );
 * ```
 *
 * @return {WPElement} The WPElement to be rendered.
 */


var PluginPrePublishPanel = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon
  };
}))(PluginPrePublishPanelFill);
PluginPrePublishPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPrePublishPanel);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/plugin-sidebar/index.js":
/*!************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/plugin-sidebar/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_pinned_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../header/pinned-plugins */ "./packages/edit-post/build-module/components/header/pinned-plugins/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./packages/edit-post/build-module/components/sidebar/index.js");
/* harmony import */ var _sidebar_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar-header */ "./packages/edit-post/build-module/components/sidebar/sidebar-header/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function PluginSidebar(props) {
  var children = props.children,
      className = props.className,
      icon = props.icon,
      isActive = props.isActive,
      _props$isPinnable = props.isPinnable,
      isPinnable = _props$isPinnable === void 0 ? true : _props$isPinnable,
      isPinned = props.isPinned,
      sidebarName = props.sidebarName,
      title = props.title,
      togglePin = props.togglePin,
      toggleSidebar = props.toggleSidebar;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, isPinnable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_header_pinned_plugins__WEBPACK_IMPORTED_MODULE_6__["default"], null, isPinned && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    icon: icon,
    label: title,
    onClick: toggleSidebar,
    isToggled: isActive,
    "aria-expanded": isActive
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: sidebarName,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Editor plugins')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_sidebar_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Close plugin')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, title), isPinnable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    icon: isPinned ? 'star-filled' : 'star-empty',
    label: isPinned ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Unpin from toolbar') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pin to toolbar'),
    onClick: togglePin,
    isToggled: isPinned,
    "aria-expanded": isPinned
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], {
    className: className
  }, children)));
}
/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem
 *
 * @param {Object} props Element props.
 * @param {string} props.name A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
 * @param {string} [props.className] An optional class name added to the sidebar body.
 * @param {string} props.title Title displayed at the top of the sidebar.
 * @param {boolean} [props.isPinnable=true] Whether to allow to pin sidebar to toolbar.
 * @param {string|Element} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var el = wp.element.createElement;
 * var PanelBody = wp.components.PanelBody;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 *
 * function MyPluginSidebar() {
 * 	return el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'my-sidebar',
 * 				title: 'My sidebar title',
 * 				icon: 'smiley',
 * 			},
 * 			el(
 * 				PanelBody,
 * 				{},
 * 				__( 'My sidebar content' )
 * 			)
 * 	);
 * }
 * ```
 *
 * @example <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * const { __ } = wp.i18n;
 * const { PanelBody } = wp.components;
 * const { PluginSidebar } = wp.editPost;
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon="smiley"
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 *
 * @return {WPElement} Plugin sidebar component.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon,
    sidebarName: "".concat(context.name, "/").concat(ownProps.name)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, _ref) {
  var sidebarName = _ref.sidebarName;

  var _select = select('core/edit-post'),
      getActiveGeneralSidebarName = _select.getActiveGeneralSidebarName,
      isPluginItemPinned = _select.isPluginItemPinned;

  return {
    isActive: getActiveGeneralSidebarName() === sidebarName,
    isPinned: isPluginItemPinned(sidebarName)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch, _ref2) {
  var isActive = _ref2.isActive,
      sidebarName = _ref2.sidebarName;

  var _dispatch = dispatch('core/edit-post'),
      closeGeneralSidebar = _dispatch.closeGeneralSidebar,
      openGeneralSidebar = _dispatch.openGeneralSidebar,
      togglePinnedPluginItem = _dispatch.togglePinnedPluginItem;

  return {
    togglePin: function togglePin() {
      togglePinnedPluginItem(sidebarName);
    },
    toggleSidebar: function toggleSidebar() {
      if (isActive) {
        closeGeneralSidebar();
      } else {
        openGeneralSidebar(sidebarName);
      }
    }
  };
}))(PluginSidebar));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-author/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-author/index.js ***!
  \*********************************************************************************/
/*! exports provided: PostAuthor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return PostAuthor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostAuthor() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostAuthorCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostAuthor"], null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostAuthor);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-excerpt/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-excerpt/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */





/**
 * Module Constants
 */

var PANEL_NAME = 'post-excerpt';

function PostExcerpt(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostExcerptCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Excerpt'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostExcerpt"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  return {
    isEnabled: select('core/edit-post').isEditorPanelEnabled(PANEL_NAME),
    isOpened: select('core/edit-post').isEditorPanelOpened(PANEL_NAME)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch('core/edit-post').toggleEditorPanelOpened(PANEL_NAME);
    }
  };
})])(PostExcerpt));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-format/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-format/index.js ***!
  \*********************************************************************************/
/*! exports provided: PostFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormat", function() { return PostFormat; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostFormat() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostFormatCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostFormat"], null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostFormat);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-link/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-link/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Module Constants
 */

var PANEL_NAME = 'post-link';

function PostLink(_ref) {
  var isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      isEditable = _ref.isEditable,
      postLink = _ref.postLink,
      permalinkParts = _ref.permalinkParts,
      editPermalink = _ref.editPermalink,
      forceEmptyField = _ref.forceEmptyField,
      setState = _ref.setState,
      postTitle = _ref.postTitle,
      postSlug = _ref.postSlug,
      postID = _ref.postID,
      postTypeLabel = _ref.postTypeLabel;
  var prefix = permalinkParts.prefix,
      suffix = permalinkParts.suffix;
  var prefixElement, postNameElement, suffixElement;
  var currentSlug = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["safeDecodeURIComponent"])(postSlug) || Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["cleanForSlug"])(postTitle) || postID;

  if (isEditable) {
    prefixElement = prefix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "edit-post-post-link__link-prefix"
    }, prefix);
    postNameElement = currentSlug && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "edit-post-post-link__link-post-name"
    }, currentSlug);
    suffixElement = suffix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "edit-post-post-link__link-suffix"
    }, suffix);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Permalink'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, isEditable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL Slug'),
    value: forceEmptyField ? '' : currentSlug,
    onChange: function onChange(newValue) {
      editPermalink(newValue); // When we delete the field the permalink gets
      // reverted to the original value.
      // The forceEmptyField logic allows the user to have
      // the field temporarily empty while typing.

      if (!newValue) {
        if (!forceEmptyField) {
          setState({
            forceEmptyField: true
          });
        }

        return;
      }

      if (forceEmptyField) {
        setState({
          forceEmptyField: false
        });
      }
    },
    onBlur: function onBlur(event) {
      editPermalink(Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["cleanForSlug"])(event.target.value));

      if (forceEmptyField) {
        setState({
          forceEmptyField: false
        });
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The last part of the URL. '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], {
    href: "https://wordpress.org/support/article/writing-posts/#post-field-descriptions"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Read about permalinks')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "edit-post-post-link__preview-label"
  }, postTypeLabel || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('View Post')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-post-link__preview-link-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], {
    className: "edit-post-post-link__link",
    href: postLink,
    target: "_blank"
  }, isEditable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefixElement, postNameElement, suffixElement) : postLink)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      isPermalinkEditable = _select.isPermalinkEditable,
      getCurrentPost = _select.getCurrentPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getPermalinkParts = _select.getPermalinkParts,
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core/edit-post'),
      isEditorPanelEnabled = _select2.isEditorPanelEnabled,
      isEditorPanelOpened = _select2.isEditorPanelOpened;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var _getCurrentPost = getCurrentPost(),
      link = _getCurrentPost.link,
      id = _getCurrentPost.id;

  var postTypeName = getEditedPostAttribute('type');
  var postType = getPostType(postTypeName);
  return {
    isNew: isEditedPostNew(),
    postLink: link,
    isEditable: isPermalinkEditable(),
    isPublished: isCurrentPostPublished(),
    isOpened: isEditorPanelOpened(PANEL_NAME),
    permalinkParts: getPermalinkParts(),
    isEnabled: isEditorPanelEnabled(PANEL_NAME),
    isViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['viewable'], false),
    postTitle: getEditedPostAttribute('title'),
    postSlug: getEditedPostAttribute('slug'),
    postID: id,
    postTypeLabel: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels', 'view_item'])
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["ifCondition"])(function (_ref2) {
  var isEnabled = _ref2.isEnabled,
      isNew = _ref2.isNew,
      postLink = _ref2.postLink,
      isViewable = _ref2.isViewable,
      permalinkParts = _ref2.permalinkParts;
  return isEnabled && !isNew && postLink && isViewable && permalinkParts;
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  var _dispatch2 = dispatch('core/editor'),
      editPost = _dispatch2.editPost;

  return {
    onTogglePanel: function onTogglePanel() {
      return toggleEditorPanelOpened(PANEL_NAME);
    },
    editPermalink: function editPermalink(newSlug) {
      editPost({
        slug: newSlug
      });
    }
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withState"])({
  forceEmptyField: false
})])(PostLink));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-pending-status/index.js":
/*!*****************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-pending-status/index.js ***!
  \*****************************************************************************************/
/*! exports provided: PostPendingStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return PostPendingStatus; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostPendingStatus() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostPendingStatusCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostPendingStatus"], null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostPendingStatus);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-schedule/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-schedule/index.js ***!
  \***********************************************************************************/
/*! exports provided: PostSchedule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return PostSchedule; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function PostSchedule() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostScheduleCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {
    className: "edit-post-post-schedule"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Publish')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    position: "bottom left",
    contentClassName: "edit-post-post-schedule__dialog",
    renderToggle: function renderToggle(_ref) {
      var onToggle = _ref.onToggle,
          isOpen = _ref.isOpen;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        className: "edit-post-post-schedule__toggle",
        onClick: onToggle,
        "aria-expanded": isOpen,
        isLink: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostScheduleLabel"], null)));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostSchedule"], null);
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (PostSchedule);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-status/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-status/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-visibility */ "./packages/edit-post/build-module/components/sidebar/post-visibility/index.js");
/* harmony import */ var _post_trash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-trash */ "./packages/edit-post/build-module/components/sidebar/post-trash/index.js");
/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-schedule */ "./packages/edit-post/build-module/components/sidebar/post-schedule/index.js");
/* harmony import */ var _post_sticky__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-sticky */ "./packages/edit-post/build-module/components/sidebar/post-sticky/index.js");
/* harmony import */ var _post_author__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-author */ "./packages/edit-post/build-module/components/sidebar/post-author/index.js");
/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-format */ "./packages/edit-post/build-module/components/sidebar/post-format/index.js");
/* harmony import */ var _post_pending_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-pending-status */ "./packages/edit-post/build-module/components/sidebar/post-pending-status/index.js");
/* harmony import */ var _plugin_post_status_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plugin-post-status-info */ "./packages/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */









/**
 * Module Constants
 */

var PANEL_NAME = 'post-status';

function PostStatus(_ref) {
  var isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    className: "edit-post-post-status",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Status & Visibility'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_12__["default"].Slot, null, function (fills) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_visibility__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_schedule__WEBPACK_IMPORTED_MODULE_7__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_format__WEBPACK_IMPORTED_MODULE_10__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_sticky__WEBPACK_IMPORTED_MODULE_8__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_pending_status__WEBPACK_IMPORTED_MODULE_11__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_author__WEBPACK_IMPORTED_MODULE_9__["default"], null), fills, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_trash__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  // We use isEditorPanelRemoved to hide the panel if it was programatically removed. We do
  // not use isEditorPanelEnabled since this panel should not be disabled through the UI.
  var _select = select('core/edit-post'),
      isEditorPanelRemoved = _select.isEditorPanelRemoved,
      isEditorPanelOpened = _select.isEditorPanelOpened;

  return {
    isRemoved: isEditorPanelRemoved(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME)
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["ifCondition"])(function (_ref2) {
  var isRemoved = _ref2.isRemoved;
  return !isRemoved;
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch('core/edit-post').toggleEditorPanelOpened(PANEL_NAME);
    }
  };
})])(PostStatus));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-sticky/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-sticky/index.js ***!
  \*********************************************************************************/
/*! exports provided: PostSticky, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSticky", function() { return PostSticky; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostSticky() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostStickyCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostSticky"], null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostSticky);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-taxonomies/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-taxonomies/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _taxonomy_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxonomy-panel */ "./packages/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostTaxonomies() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PostTaxonomiesCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PostTaxonomies"], {
    taxonomyWrapper: function taxonomyWrapper(content, taxonomy) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_taxonomy_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        taxonomy: taxonomy
      }, content);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PostTaxonomies);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js":
/*!**********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function TaxonomyPanel(_ref) {
  var isEnabled = _ref.isEnabled,
      taxonomy = _ref.taxonomy,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      children = _ref.children;

  if (!isEnabled) {
    return null;
  }

  var taxonomyMenuName = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(taxonomy, ['labels', 'menu_name']);

  if (!taxonomyMenuName) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: taxonomyMenuName,
    opened: isOpened,
    onToggle: onTogglePanel
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, ownProps) {
  var slug = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(ownProps.taxonomy, ['slug']);
  var panelName = slug ? "taxonomy-panel-".concat(slug) : '';
  return {
    panelName: panelName,
    isEnabled: slug ? select('core/edit-post').isEditorPanelEnabled(panelName) : false,
    isOpened: slug ? select('core/edit-post').isEditorPanelOpened(panelName) : false
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch, ownProps) {
  return {
    onTogglePanel: function onTogglePanel() {
      dispatch('core/edit-post').toggleEditorPanelOpened(ownProps.panelName);
    }
  };
}))(TaxonomyPanel));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-trash/index.js":
/*!********************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-trash/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostTrash; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostTrash() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostTrashCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PostTrash"], null)));
}


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/post-visibility/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/post-visibility/index.js ***!
  \*************************************************************************************/
/*! exports provided: PostVisibility, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return PostVisibility; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function PostVisibility() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostVisibilityCheck"], {
    render: function render(_ref) {
      var canEdit = _ref.canEdit;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {
        className: "edit-post-post-visibility"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Visibility')), !canEdit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostVisibilityLabel"], null)), canEdit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        position: "bottom left",
        contentClassName: "edit-post-post-visibility__dialog",
        renderToggle: function renderToggle(_ref2) {
          var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "button",
            "aria-expanded": isOpen,
            className: "edit-post-post-visibility__toggle",
            onClick: onToggle,
            isLink: true
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostVisibilityLabel"], null));
        },
        renderContent: function renderContent() {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PostVisibility"], null);
        }
      }));
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (PostVisibility);


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/settings-header/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/settings-header/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sidebar_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar-header */ "./packages/edit-post/build-module/components/sidebar/sidebar-header/index.js");



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var SettingsHeader = function SettingsHeader(_ref) {
  var openDocumentSettings = _ref.openDocumentSettings,
      openBlockSettings = _ref.openBlockSettings,
      sidebarName = _ref.sidebarName;

  var blockLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block');

  var _ref2 = sidebarName === 'edit-post/document' ? // translators: ARIA label for the Document sidebar tab, selected.
  [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Document (selected)'), 'is-active'] : // translators: ARIA label for the Document sidebar tab, not selected.
  [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Document'), ''],
      _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
      documentAriaLabel = _ref3[0],
      documentActiveClass = _ref3[1];

  var _ref4 = sidebarName === 'edit-post/block' ? // translators: ARIA label for the Settings Sidebar tab, selected.
  [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block (selected)'), 'is-active'] : // translators: ARIA label for the Settings Sidebar tab, not selected.
  [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block'), ''],
      _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
      blockAriaLabel = _ref5[0],
      blockActiveClass = _ref5[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_sidebar_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "edit-post-sidebar__panel-tabs",
    closeLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Close settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: openDocumentSettings,
    className: "edit-post-sidebar__panel-tab ".concat(documentActiveClass),
    "aria-label": documentAriaLabel,
    "data-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Document')
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Document'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: openBlockSettings,
    className: "edit-post-sidebar__panel-tab ".concat(blockActiveClass),
    "aria-label": blockAriaLabel,
    "data-label": blockLabel
  }, blockLabel))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      openGeneralSidebar = _dispatch.openGeneralSidebar;

  var _dispatch2 = dispatch('core/block-editor'),
      clearSelectedBlock = _dispatch2.clearSelectedBlock;

  return {
    openDocumentSettings: function openDocumentSettings() {
      openGeneralSidebar('edit-post/document');
      clearSelectedBlock();
    },
    openBlockSettings: function openBlockSettings() {
      openGeneralSidebar('edit-post/block');
    }
  };
})(SettingsHeader));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/settings-sidebar/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/settings-sidebar/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ "./packages/edit-post/build-module/components/sidebar/index.js");
/* harmony import */ var _settings_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings-header */ "./packages/edit-post/build-module/components/sidebar/settings-header/index.js");
/* harmony import */ var _post_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-status */ "./packages/edit-post/build-module/components/sidebar/post-status/index.js");
/* harmony import */ var _last_revision__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../last-revision */ "./packages/edit-post/build-module/components/sidebar/last-revision/index.js");
/* harmony import */ var _post_taxonomies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-taxonomies */ "./packages/edit-post/build-module/components/sidebar/post-taxonomies/index.js");
/* harmony import */ var _featured_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../featured-image */ "./packages/edit-post/build-module/components/sidebar/featured-image/index.js");
/* harmony import */ var _post_excerpt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-excerpt */ "./packages/edit-post/build-module/components/sidebar/post-excerpt/index.js");
/* harmony import */ var _post_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post-link */ "./packages/edit-post/build-module/components/sidebar/post-link/index.js");
/* harmony import */ var _discussion_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../discussion-panel */ "./packages/edit-post/build-module/components/sidebar/discussion-panel/index.js");
/* harmony import */ var _page_attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../page-attributes */ "./packages/edit-post/build-module/components/sidebar/page-attributes/index.js");
/* harmony import */ var _meta_boxes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../meta-boxes */ "./packages/edit-post/build-module/components/meta-boxes/index.js");
/* harmony import */ var _plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../plugin-document-setting-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */














var SettingsSidebar = function SettingsSidebar(_ref) {
  var sidebarName = _ref.sidebarName;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: sidebarName,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Editor settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_settings_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sidebarName: sidebarName
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, sidebarName === 'edit-post/document' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_status__WEBPACK_IMPORTED_MODULE_8__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_17__["default"].Slot, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_last_revision__WEBPACK_IMPORTED_MODULE_9__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_link__WEBPACK_IMPORTED_MODULE_13__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_taxonomies__WEBPACK_IMPORTED_MODULE_10__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_featured_image__WEBPACK_IMPORTED_MODULE_11__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_excerpt__WEBPACK_IMPORTED_MODULE_12__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_discussion_panel__WEBPACK_IMPORTED_MODULE_14__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_page_attributes__WEBPACK_IMPORTED_MODULE_15__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_boxes__WEBPACK_IMPORTED_MODULE_16__["default"], {
    location: "side"
  })), sidebarName === 'edit-post/block' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: "edit-post-settings-sidebar__panel-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockInspector"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/edit-post'),
      getActiveGeneralSidebarName = _select.getActiveGeneralSidebarName,
      isEditorSidebarOpened = _select.isEditorSidebarOpened;

  return {
    isEditorSidebarOpened: isEditorSidebarOpened(),
    sidebarName: getActiveGeneralSidebarName()
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["ifCondition"])(function (_ref2) {
  var isEditorSidebarOpened = _ref2.isEditorSidebarOpened;
  return isEditorSidebarOpened;
}))(SettingsSidebar));


/***/ }),

/***/ "./packages/edit-post/build-module/components/sidebar/sidebar-header/index.js":
/*!************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/sidebar/sidebar-header/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../keyboard-shortcuts */ "./packages/edit-post/build-module/keyboard-shortcuts.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var SidebarHeader = function SidebarHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      closeLabel = _ref.closeLabel,
      closeSidebar = _ref.closeSidebar,
      title = _ref.title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-panel__header edit-post-sidebar-header__small"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "edit-post-sidebar-header__title"
  }, title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('(no title)')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    onClick: closeSidebar,
    icon: "no-alt",
    label: closeLabel
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-panel__header edit-post-sidebar-header', className)
  }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    onClick: closeSidebar,
    icon: "no-alt",
    label: closeLabel,
    shortcut: _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["default"].toggleSidebar
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  return {
    title: select('core/editor').getEditedPostAttribute('title')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    closeSidebar: dispatch('core/edit-post').closeGeneralSidebar
  };
}))(SidebarHeader));


/***/ }),

/***/ "./packages/edit-post/build-module/components/text-editor/index.js":
/*!*************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/text-editor/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */







function TextEditor(_ref) {
  var onExit = _ref.onExit,
      isRichEditingEnabled = _ref.isRichEditingEnabled;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-text-editor"
  }, isRichEditingEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-text-editor__toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editing Code')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: onExit,
    icon: "no-alt",
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__["displayShortcut"].secondary('m')
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exit Code Editor')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["TextEditorGlobalKeyboardShortcuts"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-text-editor__body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PostTitle"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PostTextEditor"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onExit: function onExit() {
      dispatch('core/edit-post').switchEditorMode('visual');
    }
  };
}))(TextEditor));


/***/ }),

/***/ "./packages/edit-post/build-module/components/visual-editor/block-inspector-button.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/visual-editor/block-inspector-button.js ***!
  \********************************************************************************************/
/*! exports provided: BlockInspectorButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInspectorButton", function() { return BlockInspectorButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../keyboard-shortcuts */ "./packages/edit-post/build-module/keyboard-shortcuts.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function BlockInspectorButton(_ref) {
  var areAdvancedSettingsOpened = _ref.areAdvancedSettingsOpened,
      closeSidebar = _ref.closeSidebar,
      openEditorSidebar = _ref.openEditorSidebar,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref$onClick,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      speak = _ref.speak;

  var speakMessage = function speakMessage() {
    if (areAdvancedSettingsOpened) {
      speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block settings closed'));
    } else {
      speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Additional settings are now available in the Editor block settings sidebar'));
    }
  };

  var label = areAdvancedSettingsOpened ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hide Block Settings') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Block Settings');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flow"])(areAdvancedSettingsOpened ? closeSidebar : openEditorSidebar, speakMessage, onClick),
    icon: "admin-generic",
    shortcut: _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["default"].toggleSidebar
  }, !small && label);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    areAdvancedSettingsOpened: select('core/edit-post').getActiveGeneralSidebarName() === 'edit-post/block'
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    openEditorSidebar: function openEditorSidebar() {
      return dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
    },
    closeSidebar: dispatch('core/edit-post').closeGeneralSidebar
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_3__["withSpokenMessages"])(BlockInspectorButton));


/***/ }),

/***/ "./packages/edit-post/build-module/components/visual-editor/index.js":
/*!***************************************************************************!*\
  !*** ./packages/edit-post/build-module/components/visual-editor/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_inspector_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-inspector-button */ "./packages/edit-post/build-module/components/visual-editor/block-inspector-button.js");
/* harmony import */ var _block_settings_menu_plugin_block_settings_menu_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-settings-menu/plugin-block-settings-menu-group */ "./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-group.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function VisualEditor() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockSelectionClearer"], {
    className: "edit-post-visual-editor editor-styles-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["VisualEditorGlobalKeyboardShortcuts"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MultiSelectScrollIntoView"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["Typewriter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["WritingFlow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ObserveTyping"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["CopyHandler"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PostTitle"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockList"], null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalBlockSettingsMenuFirstItem"], null, function (_ref) {
    var onClose = _ref.onClose;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_inspector_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: onClose
    });
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalBlockSettingsMenuPluginsExtension"], null, function (_ref2) {
    var clientIds = _ref2.clientIds,
        onClose = _ref2.onClose;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_settings_menu_plugin_block_settings_menu_group__WEBPACK_IMPORTED_MODULE_4__["default"].Slot, {
      fillProps: {
        clientIds: clientIds,
        onClose: onClose
      }
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VisualEditor);


/***/ }),

/***/ "./packages/edit-post/build-module/editor.js":
/*!***************************************************!*\
  !*** ./packages/edit-post/build-module/editor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _prevent_event_discovery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prevent-event-discovery */ "./packages/edit-post/build-module/prevent-event-discovery.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout */ "./packages/edit-post/build-module/components/layout/index.js");
/* harmony import */ var _components_editor_initialization__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/editor-initialization */ "./packages/edit-post/build-module/components/editor-initialization/index.js");
/* harmony import */ var _components_edit_post_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-post-settings */ "./packages/edit-post/build-module/components/edit-post-settings/index.js");











/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






var Editor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Editor, _Component);

  function Editor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Editor);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Editor).apply(this, arguments));
    _this.getEditorSettings = memize__WEBPACK_IMPORTED_MODULE_10___default()(_this.getEditorSettings, {
      maxSize: 1
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Editor, [{
    key: "getEditorSettings",
    value: function getEditorSettings(settings, hasFixedToolbar, showInserterHelpPanel, focusMode, hiddenBlockTypes, blockTypes, preferredStyleVariations, __experimentalLocalAutosaveInterval, updatePreferredStyleVariations) {
      settings = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, settings, {
        __experimentalPreferredStyleVariations: {
          value: preferredStyleVariations,
          onChange: updatePreferredStyleVariations
        },
        hasFixedToolbar: hasFixedToolbar,
        focusMode: focusMode,
        showInserterHelpPanel: showInserterHelpPanel,
        __experimentalLocalAutosaveInterval: __experimentalLocalAutosaveInterval
      }); // Omit hidden block types if exists and non-empty.

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_11__["size"])(hiddenBlockTypes) > 0) {
        // Defer to passed setting for `allowedBlockTypes` if provided as
        // anything other than `true` (where `true` is equivalent to allow
        // all block types).
        var defaultAllowedBlockTypes = true === settings.allowedBlockTypes ? Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(blockTypes, 'name') : settings.allowedBlockTypes || [];
        settings.allowedBlockTypes = lodash__WEBPACK_IMPORTED_MODULE_11__["without"].apply(void 0, [defaultAllowedBlockTypes].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(hiddenBlockTypes)));
      }

      return settings;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          hasFixedToolbar = _this$props.hasFixedToolbar,
          focusMode = _this$props.focusMode,
          post = _this$props.post,
          postId = _this$props.postId,
          initialEdits = _this$props.initialEdits,
          onError = _this$props.onError,
          hiddenBlockTypes = _this$props.hiddenBlockTypes,
          blockTypes = _this$props.blockTypes,
          preferredStyleVariations = _this$props.preferredStyleVariations,
          __experimentalLocalAutosaveInterval = _this$props.__experimentalLocalAutosaveInterval,
          showInserterHelpPanel = _this$props.showInserterHelpPanel,
          updatePreferredStyleVariations = _this$props.updatePreferredStyleVariations,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["settings", "hasFixedToolbar", "focusMode", "post", "postId", "initialEdits", "onError", "hiddenBlockTypes", "blockTypes", "preferredStyleVariations", "__experimentalLocalAutosaveInterval", "showInserterHelpPanel", "updatePreferredStyleVariations"]);

      if (!post) {
        return null;
      }

      var editorSettings = this.getEditorSettings(settings, hasFixedToolbar, showInserterHelpPanel, focusMode, hiddenBlockTypes, blockTypes, preferredStyleVariations, __experimentalLocalAutosaveInterval, updatePreferredStyleVariations);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["StrictMode"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_components_edit_post_settings__WEBPACK_IMPORTED_MODULE_19__["default"].Provider, {
        value: settings
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SlotFillProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["DropZoneProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_13__["EditorProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        settings: editorSettings,
        post: post,
        initialEdits: initialEdits,
        useSubRegistry: false
      }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_13__["ErrorBoundary"], {
        onError: onError
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_components_editor_initialization__WEBPACK_IMPORTED_MODULE_18__["default"], {
        postId: postId
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_components_layout__WEBPACK_IMPORTED_MODULE_17__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["KeyboardShortcuts"], {
        shortcuts: _prevent_event_discovery__WEBPACK_IMPORTED_MODULE_16__["default"]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_13__["PostLockedModal"], null))))));
    }
  }]);

  return Editor;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withSelect"])(function (select, _ref) {
  var postId = _ref.postId,
      postType = _ref.postType;

  var _select = select('core/edit-post'),
      isFeatureActive = _select.isFeatureActive,
      getPreference = _select.getPreference;

  var _select2 = select('core'),
      getEntityRecord = _select2.getEntityRecord;

  var _select3 = select('core/blocks'),
      getBlockTypes = _select3.getBlockTypes;

  return {
    showInserterHelpPanel: isFeatureActive('showInserterHelpPanel'),
    hasFixedToolbar: isFeatureActive('fixedToolbar'),
    focusMode: isFeatureActive('focusMode'),
    post: getEntityRecord('postType', postType, postId),
    preferredStyleVariations: getPreference('preferredStyleVariations'),
    hiddenBlockTypes: getPreference('hiddenBlockTypes'),
    blockTypes: getBlockTypes(),
    __experimentalLocalAutosaveInterval: getPreference('localAutosaveInterval')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      updatePreferredStyleVariations = _dispatch.updatePreferredStyleVariations;

  return {
    updatePreferredStyleVariations: updatePreferredStyleVariations
  };
})])(Editor));


/***/ }),

/***/ "./packages/edit-post/build-module/hooks/components/index.js":
/*!*******************************************************************!*\
  !*** ./packages/edit-post/build-module/hooks/components/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



var replaceMediaUpload = function replaceMediaUpload() {
  return _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"];
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.MediaUpload', 'core/edit-post/replace-media-upload', replaceMediaUpload);


/***/ }),

/***/ "./packages/edit-post/build-module/hooks/index.js":
/*!********************************************************!*\
  !*** ./packages/edit-post/build-module/hooks/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./packages/edit-post/build-module/hooks/components/index.js");
/* harmony import */ var _validate_multiple_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-multiple-use */ "./packages/edit-post/build-module/hooks/validate-multiple-use/index.js");
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./packages/edit-post/build-module/hooks/validate-multiple-use/index.js":
/*!******************************************************************************!*\
  !*** ./packages/edit-post/build-module/hooks/validate-multiple-use/index.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








var enhance = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])(
/**
 * For blocks whose block type doesn't support `multiple`, provides the
 * wrapped component with `originalBlockClientId` -- a reference to the
 * first block of the same type in the content -- if and only if that
 * "original" block is not the current one. Thus, an inexisting
 * `originalBlockClientId` prop signals that the block is valid.
 *
 * @param {Component} WrappedBlockEdit A filtered BlockEdit instance.
 *
 * @return {Component} Enhanced component with merged state data props.
 */
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, block) {
  var multiple = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["hasBlockSupport"])(block.name, 'multiple', true); // For block types with `multiple` support, there is no "original
  // block" to be found in the content, as the block itself is valid.

  if (multiple) {
    return {};
  } // Otherwise, only pass `originalBlockClientId` if it refers to a different
  // block from the current one.


  var blocks = select('core/block-editor').getBlocks();
  var firstOfSameType = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(blocks, function (_ref) {
    var name = _ref.name;
    return block.name === name;
  });
  var isInvalid = firstOfSameType && firstOfSameType.clientId !== block.clientId;
  return {
    originalBlockClientId: isInvalid && firstOfSameType.clientId
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch, _ref2) {
  var originalBlockClientId = _ref2.originalBlockClientId;
  return {
    selectFirst: function selectFirst() {
      return dispatch('core/block-editor').selectBlock(originalBlockClientId);
    }
  };
}));
var withMultipleValidation = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["createHigherOrderComponent"])(function (BlockEdit) {
  return enhance(function (_ref3) {
    var originalBlockClientId = _ref3.originalBlockClientId,
        selectFirst = _ref3.selectFirst,
        props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["originalBlockClientId", "selectFirst"]);

    if (!originalBlockClientId) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockEdit, props);
    }

    var blockType = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockType"])(props.name);
    var outboundType = getOutboundType(props.name);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: "invalid-preview",
      style: {
        minHeight: '60px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockEdit, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "block-edit"
    }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["Warning"], {
      key: "multiple-use-warning",
      actions: [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        key: "find-original",
        isLarge: true,
        onClick: selectFirst
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Find original')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        key: "remove",
        isLarge: true,
        onClick: function onClick() {
          return props.onReplace([]);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Remove')), outboundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        key: "transform",
        isLarge: true,
        onClick: function onClick() {
          return props.onReplace(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])(outboundType.name, props.attributes));
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Transform into:'), ' ', outboundType.title)]
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, blockType.title, ": "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('This block can only be used once.'))];
  });
}, 'withMultipleValidation');
/**
 * Given a base block name, returns the default block type to which to offer
 * transforms.
 *
 * @param {string} blockName Base block name.
 *
 * @return {?Object} The chosen default block type.
 */

function getOutboundType(blockName) {
  // Grab the first outbound transform
  var transform = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["findTransform"])(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockTransforms"])('to', blockName), function (_ref4) {
    var type = _ref4.type,
        blocks = _ref4.blocks;
    return type === 'block' && blocks.length === 1;
  } // What about when .length > 1?
  );

  if (!transform) {
    return null;
  }

  return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockType"])(transform.blocks[0]);
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__["addFilter"])('editor.BlockEdit', 'core/edit-post/validate-multiple-use/with-multiple-validation', withMultipleValidation);


/***/ }),

/***/ "./packages/edit-post/build-module/index.js":
/*!**************************************************!*\
  !*** ./packages/edit-post/build-module/index.js ***!
  \**************************************************/
/*! exports provided: reinitializeEditor, initializeEditor, PluginBlockSettingsMenuItem, PluginDocumentSettingPanel, PluginMoreMenuItem, PluginPostPublishPanel, PluginPostStatusInfo, PluginPrePublishPanel, PluginSidebar, PluginSidebarMoreMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinitializeEditor", function() { return reinitializeEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeEditor", function() { return initializeEditor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./packages/edit-post/build-module/hooks/index.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins */ "./packages/edit-post/build-module/plugins/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./packages/edit-post/build-module/store/index.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor */ "./packages/edit-post/build-module/editor.js");
/* harmony import */ var _components_block_settings_menu_plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/block-settings-menu/plugin-block-settings-menu-item */ "./packages/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginBlockSettingsMenuItem", function() { return _components_block_settings_menu_plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_sidebar_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/plugin-document-setting-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginDocumentSettingPanel", function() { return _components_sidebar_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/plugin-more-menu-item */ "./packages/edit-post/build-module/components/header/plugin-more-menu-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginMoreMenuItem", function() { return _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidebar/plugin-post-publish-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginPostPublishPanel", function() { return _components_sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_sidebar_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidebar/plugin-post-status-info */ "./packages/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginPostStatusInfo", function() { return _components_sidebar_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidebar/plugin-pre-publish-panel */ "./packages/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginPrePublishPanel", function() { return _components_sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sidebar/plugin-sidebar */ "./packages/edit-post/build-module/components/sidebar/plugin-sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginSidebar", function() { return _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/plugin-sidebar-more-menu-item */ "./packages/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginSidebarMoreMenuItem", function() { return _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_19__["default"]; });



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





/**
 * Reinitializes the editor after the user chooses to reboot the editor after
 * an unhandled error occurs, replacing previously mounted editor element using
 * an initial state from prior to the crash.
 *
 * @param {Object}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {Element} target       DOM node in which editor is rendered.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */

function reinitializeEditor(postType, postId, target, settings, initialEdits) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"])(target);
  var reboot = reinitializeEditor.bind(null, postType, postId, target, settings, initialEdits);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_editor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    settings: settings,
    onError: reboot,
    postId: postId,
    postType: postType,
    initialEdits: initialEdits,
    recovery: true
  }), target);
}
/**
 * Initializes and returns an instance of Editor.
 *
 * The return value of this function is not necessary if we change where we
 * call initializeEditor(). This is due to metaBox timing.
 *
 * @param {string}  id           Unique identifier for editor instance.
 * @param {Object}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */

function initializeEditor(id, postType, postId, settings, initialEdits) {
  var target = document.getElementById(id);
  var reboot = reinitializeEditor.bind(null, postType, postId, target, settings, initialEdits);
  Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__["registerCoreBlocks"])();

  if (true) {
    Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__["__experimentalRegisterExperimentalCoreBlocks"])(settings);
  } // Show a console log warning if the browser is not in Standards rendering mode.


  var documentMode = document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';

  if (documentMode !== 'Standards') {
    // eslint-disable-next-line no-console
    console.warn("Your browser is using Quirks Mode. \nThis can cause rendering issues such as blocks overlaying meta boxes in the editor. Quirks Mode can be triggered by PHP errors or HTML code appearing before the opening <!DOCTYPE html>. Try checking the raw page source or your site's PHP error log and resolving errors there, removing any HTML before the doctype, or disabling plugins.");
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_editor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    settings: settings,
    onError: reboot,
    postId: postId,
    postType: postType,
    initialEdits: initialEdits
  }), target);
}










/***/ }),

/***/ "./packages/edit-post/build-module/keyboard-shortcuts.js":
/*!***************************************************************!*\
  !*** ./packages/edit-post/build-module/keyboard-shortcuts.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  toggleEditorMode: {
    raw: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["rawShortcut"].secondary('m'),
    display: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcut"].secondary('m')
  },
  toggleSidebar: {
    raw: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["rawShortcut"].primaryShift(','),
    display: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["displayShortcut"].primaryShift(','),
    ariaLabel: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__["shortcutAriaLabel"].primaryShift(',')
  }
});


/***/ }),

/***/ "./packages/edit-post/build-module/plugins/copy-content-menu-item/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/edit-post/build-module/plugins/copy-content-menu-item/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */





function CopyContentMenuItem(_ref) {
  var createNotice = _ref.createNotice,
      editedPostContent = _ref.editedPostContent,
      hasCopied = _ref.hasCopied,
      setState = _ref.setState;
  return editedPostContent.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ClipboardButton"], {
    text: editedPostContent,
    role: "menuitem",
    className: "components-menu-item__button",
    onCopy: function onCopy() {
      setState({
        hasCopied: true
      });
      createNotice('info', 'All content copied.', {
        isDismissible: true,
        type: 'snackbar'
      });
    },
    onFinishCopy: function onFinishCopy() {
      return setState({
        hasCopied: false
      });
    }
  }, hasCopied ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Copied!') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Copy All Content'));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    editedPostContent: select('core/editor').getEditedPostAttribute('content')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
  hasCopied: false
}))(CopyContentMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/plugins/index.js":
/*!**********************************************************!*\
  !*** ./packages/edit-post/build-module/plugins/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _copy_content_menu_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy-content-menu-item */ "./packages/edit-post/build-module/plugins/copy-content-menu-item/index.js");
/* harmony import */ var _manage_blocks_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-blocks-menu-item */ "./packages/edit-post/build-module/plugins/manage-blocks-menu-item/index.js");
/* harmony import */ var _keyboard_shortcuts_help_menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keyboard-shortcuts-help-menu-item */ "./packages/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js");
/* harmony import */ var _components_header_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header/tools-more-menu-group */ "./packages/edit-post/build-module/components/header/tools-more-menu-group/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["registerPlugin"])('edit-post', {
  render: function render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_header_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_8__["default"], null, function (_ref) {
      var onClose = _ref.onClose;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_manage_blocks_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSelect: onClose
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
        role: "menuitem",
        href: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])('edit.php', {
          post_type: 'wp_block'
        })
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Manage All Reusable Blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_keyboard_shortcuts_help_menu_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSelect: onClose
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_copy_content_menu_item__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }));
  }
});


/***/ }),

/***/ "./packages/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js ***!
  \********************************************************************************************/
/*! exports provided: KeyboardShortcutsHelpMenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardShortcutsHelpMenuItem", function() { return KeyboardShortcutsHelpMenuItem; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




function KeyboardShortcutsHelpMenuItem(_ref) {
  var openModal = _ref.openModal;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/keyboard-shortcut-help');
    },
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__["displayShortcut"].access('h')
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Keyboard Shortcuts'));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      openModal = _dispatch.openModal;

  return {
    openModal: openModal
  };
})(KeyboardShortcutsHelpMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/plugins/manage-blocks-menu-item/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/edit-post/build-module/plugins/manage-blocks-menu-item/index.js ***!
  \**********************************************************************************/
/*! exports provided: ManageBlocksMenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBlocksMenuItem", function() { return ManageBlocksMenuItem; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function ManageBlocksMenuItem(_ref) {
  var openModal = _ref.openModal;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/manage-blocks');
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Block Manager'));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-post'),
      openModal = _dispatch.openModal;

  return {
    openModal: openModal
  };
})(ManageBlocksMenuItem));


/***/ }),

/***/ "./packages/edit-post/build-module/prevent-event-discovery.js":
/*!********************************************************************!*\
  !*** ./packages/edit-post/build-module/prevent-event-discovery.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  't a l e s o f g u t e n b e r g': function tALESOFGUTENBERG(event) {
    if (!document.activeElement.classList.contains('edit-post-visual-editor') && document.activeElement !== document.body) {
      return;
    }

    event.preventDefault();
    window.wp.data.dispatch('core/block-editor').insertBlock(window.wp.blocks.createBlock('core/paragraph', {
      content: '🐡🐢🦀🐤🦋🐘🐧🐹🦁🦄🦍🐼🐿🎃🐴🐝🐆🦕🦔🌱🍇π🍌🐉💧🥨🌌🍂🍠🥦🥚🥝🎟🥥🥒🛵🥖🍒🍯🎾🎲🐺🐚🐮⌛️'
    }));
  }
});


/***/ }),

/***/ "./packages/edit-post/build-module/store/actions.js":
/*!**********************************************************!*\
  !*** ./packages/edit-post/build-module/store/actions.js ***!
  \**********************************************************/
/*! exports provided: openGeneralSidebar, closeGeneralSidebar, openModal, closeModal, openPublishSidebar, closePublishSidebar, togglePublishSidebar, toggleEditorPanelEnabled, toggleEditorPanelOpened, removeEditorPanel, toggleFeature, switchEditorMode, togglePinnedPluginItem, hideBlockTypes, updatePreferredStyleVariations, __experimentalUpdateLocalAutosaveInterval, showBlockTypes, setAvailableMetaBoxesPerLocation, requestMetaBoxUpdates, metaBoxUpdatesSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGeneralSidebar", function() { return openGeneralSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeGeneralSidebar", function() { return closeGeneralSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPublishSidebar", function() { return openPublishSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePublishSidebar", function() { return closePublishSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePublishSidebar", function() { return togglePublishSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditorPanelEnabled", function() { return toggleEditorPanelEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditorPanelOpened", function() { return toggleEditorPanelOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEditorPanel", function() { return removeEditorPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFeature", function() { return toggleFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchEditorMode", function() { return switchEditorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePinnedPluginItem", function() { return togglePinnedPluginItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBlockTypes", function() { return hideBlockTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePreferredStyleVariations", function() { return updatePreferredStyleVariations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalUpdateLocalAutosaveInterval", function() { return __experimentalUpdateLocalAutosaveInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBlockTypes", function() { return showBlockTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAvailableMetaBoxesPerLocation", function() { return setAvailableMetaBoxesPerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestMetaBoxUpdates", function() { return requestMetaBoxUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaBoxUpdatesSuccess", function() { return metaBoxUpdatesSuccess; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {string} name Sidebar name to be opened.
 *
 * @return {Object} Action object.
 */

function openGeneralSidebar(name) {
  return {
    type: 'OPEN_GENERAL_SIDEBAR',
    name: name
  };
}
/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action object.
 */

function closeGeneralSidebar() {
  return {
    type: 'CLOSE_GENERAL_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */

function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name: name
  };
}
/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */

function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */

function openPublishSidebar() {
  return {
    type: 'OPEN_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */

function closePublishSidebar() {
  return {
    type: 'CLOSE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 *
 * @return {Object} Action object
 */

function togglePublishSidebar() {
  return {
    type: 'TOGGLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */

function toggleEditorPanelEnabled(panelName) {
  return {
    type: 'TOGGLE_PANEL_ENABLED',
    panelName: panelName
  };
}
/**
 * Returns an action object used to open or close a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 *
 * @return {Object} Action object.
 */

function toggleEditorPanelOpened(panelName) {
  return {
    type: 'TOGGLE_PANEL_OPENED',
    panelName: panelName
  };
}
/**
 * Returns an action object used to remove a panel from the editor.
 *
 * @param {string} panelName A string that identifies the panel to remove.
 *
 * @return {Object} Action object.
 */

function removeEditorPanel(panelName) {
  return {
    type: 'REMOVE_PANEL',
    panelName: panelName
  };
}
/**
 * Returns an action object used to toggle a feature flag.
 *
 * @param {string} feature Feature name.
 *
 * @return {Object} Action object.
 */

function toggleFeature(feature) {
  return {
    type: 'TOGGLE_FEATURE',
    feature: feature
  };
}
function switchEditorMode(mode) {
  return {
    type: 'SWITCH_MODE',
    mode: mode
  };
}
/**
 * Returns an action object used to toggle a plugin name flag.
 *
 * @param {string} pluginName Plugin name.
 *
 * @return {Object} Action object.
 */

function togglePinnedPluginItem(pluginName) {
  return {
    type: 'TOGGLE_PINNED_PLUGIN_ITEM',
    pluginName: pluginName
  };
}
/**
 * Returns an action object used in signalling that block types by the given
 * name(s) should be hidden.
 *
 * @param {string[]} blockNames Names of block types to hide.
 *
 * @return {Object} Action object.
 */

function hideBlockTypes(blockNames) {
  return {
    type: 'HIDE_BLOCK_TYPES',
    blockNames: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["castArray"])(blockNames)
  };
}
/**
 * Returns an action object used in signaling that a style should be auto-applied when a block is created.
 *
 * @param {string}  blockName  Name of the block.
 * @param {?string} blockStyle Name of the style that should be auto applied. If undefined, the "auto apply" setting of the block is removed.
 *
 * @return {Object} Action object.
 */

function updatePreferredStyleVariations(blockName, blockStyle) {
  return {
    type: 'UPDATE_PREFERRED_STYLE_VARIATIONS',
    blockName: blockName,
    blockStyle: blockStyle
  };
}
function __experimentalUpdateLocalAutosaveInterval(interval) {
  return {
    type: 'UPDATE_LOCAL_AUTOSAVE_INTERVAL',
    interval: interval
  };
}
/**
 * Returns an action object used in signalling that block types by the given
 * name(s) should be shown.
 *
 * @param {string[]} blockNames Names of block types to show.
 *
 * @return {Object} Action object.
 */

function showBlockTypes(blockNames) {
  return {
    type: 'SHOW_BLOCK_TYPES',
    blockNames: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["castArray"])(blockNames)
  };
}
/**
 * Returns an action object used in signaling
 * what Meta boxes are available in which location.
 *
 * @param {Object} metaBoxesPerLocation Meta boxes per location.
 *
 * @return {Object} Action object.
 */

function setAvailableMetaBoxesPerLocation(metaBoxesPerLocation) {
  return {
    type: 'SET_META_BOXES_PER_LOCATIONS',
    metaBoxesPerLocation: metaBoxesPerLocation
  };
}
/**
 * Returns an action object used to request meta box update.
 *
 * @return {Object} Action object.
 */

function requestMetaBoxUpdates() {
  return {
    type: 'REQUEST_META_BOX_UPDATES'
  };
}
/**
 * Returns an action object used signal a successful meta box update.
 *
 * @return {Object} Action object.
 */

function metaBoxUpdatesSuccess() {
  return {
    type: 'META_BOX_UPDATES_SUCCESS'
  };
}


/***/ }),

/***/ "./packages/edit-post/build-module/store/constants.js":
/*!************************************************************!*\
  !*** ./packages/edit-post/build-module/store/constants.js ***!
  \************************************************************/
/*! exports provided: STORE_KEY, VIEW_AS_LINK_SELECTOR, VIEW_AS_PREVIEW_LINK_SELECTOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_AS_LINK_SELECTOR", function() { return VIEW_AS_LINK_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_AS_PREVIEW_LINK_SELECTOR", function() { return VIEW_AS_PREVIEW_LINK_SELECTOR; });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
var STORE_KEY = 'core/edit-post';
/**
 * CSS selector string for the admin bar view post link anchor tag.
 *
 * @type {string}
 */

var VIEW_AS_LINK_SELECTOR = '#wp-admin-bar-view a';
/**
 * CSS selector string for the admin bar preview post link anchor tag.
 *
 * @type {string}
 */

var VIEW_AS_PREVIEW_LINK_SELECTOR = '#wp-admin-bar-preview a';


/***/ }),

/***/ "./packages/edit-post/build-module/store/controls.js":
/*!***********************************************************!*\
  !*** ./packages/edit-post/build-module/store/controls.js ***!
  \***********************************************************/
/*! exports provided: select, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * Calls a selector using the current state.
 *
 * @param {string} storeName    Store name.
 * @param {string} selectorName Selector name.
 * @param  {Array} args         Selector arguments.
 *
 * @return {Object} control descriptor.
 */

function select(storeName, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    storeName: storeName,
    selectorName: selectorName,
    args: args
  };
}
var controls = {
  SELECT: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["createRegistryControl"])(function (registry) {
    return function (_ref) {
      var _registry$select;

      var storeName = _ref.storeName,
          selectorName = _ref.selectorName,
          args = _ref.args;
      return (_registry$select = registry.select(storeName))[selectorName].apply(_registry$select, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args));
    };
  })
};
/* harmony default export */ __webpack_exports__["default"] = (controls);


/***/ }),

/***/ "./packages/edit-post/build-module/store/defaults.js":
/*!***********************************************************!*\
  !*** ./packages/edit-post/build-module/store/defaults.js ***!
  \***********************************************************/
/*! exports provided: PREFERENCES_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFERENCES_DEFAULTS", function() { return PREFERENCES_DEFAULTS; });
var PREFERENCES_DEFAULTS = {
  editorMode: 'visual',
  isGeneralSidebarDismissed: false,
  panels: {
    'post-status': {
      opened: true
    }
  },
  features: {
    fixedToolbar: false,
    showInserterHelpPanel: true
  },
  pinnedPluginItems: {},
  hiddenBlockTypes: [],
  preferredStyleVariations: {},
  localAutosaveInterval: 15
};


/***/ }),

/***/ "./packages/edit-post/build-module/store/effects.js":
/*!**********************************************************!*\
  !*** ./packages/edit-post/build-module/store/effects.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./packages/edit-post/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectors */ "./packages/edit-post/build-module/store/selectors.js");
/* harmony import */ var _utils_meta_boxes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/meta-boxes */ "./packages/edit-post/build-module/utils/meta-boxes.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




var effects = {
  SET_META_BOXES_PER_LOCATIONS: function SET_META_BOXES_PER_LOCATIONS(action, store) {
    // Allow toggling metaboxes panels
    // We need to wait for all scripts to load
    // If the meta box loads the post script, it will already trigger this.
    // After merge in Core, make sure to drop the timeout and update the postboxes script
    // to avoid the double binding.
    setTimeout(function () {
      var postType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').getCurrentPostType();

      if (window.postboxes.page !== postType) {
        window.postboxes.add_postbox_toggles(postType);
      }
    });
    var wasSavingPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').isSavingPost();
    var wasAutosavingPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').isAutosavingPost(); // Meta boxes are initialized once at page load. It is not necessary to
    // account for updates on each state change.
    //
    // See: https://github.com/WordPress/WordPress/blob/5.1.1/wp-admin/includes/post.php#L2307-L2309

    var hasActiveMetaBoxes = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/edit-post').hasMetaBoxes(); // Save metaboxes when performing a full save on the post.

    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["subscribe"])(function () {
      var isSavingPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').isSavingPost();
      var isAutosavingPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').isAutosavingPost(); // Save metaboxes on save completion, except for autosaves that are not a post preview.

      var shouldTriggerMetaboxesSave = hasActiveMetaBoxes && wasSavingPost && !isSavingPost && !wasAutosavingPost; // Save current state for next inspection.

      wasSavingPost = isSavingPost;
      wasAutosavingPost = isAutosavingPost;

      if (shouldTriggerMetaboxesSave) {
        store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["requestMetaBoxUpdates"])());
      }
    });
  },
  REQUEST_META_BOX_UPDATES: function REQUEST_META_BOX_UPDATES(action, store) {
    // Saves the wp_editor fields
    if (window.tinyMCE) {
      window.tinyMCE.triggerSave();
    }

    var state = store.getState(); // Additional data needed for backward compatibility.
    // If we do not provide this data, the post will be overridden with the default values.

    var post = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').getCurrentPost(state);
    var additionalData = [post.comment_status ? ['comment_status', post.comment_status] : false, post.ping_status ? ['ping_status', post.ping_status] : false, post.sticky ? ['sticky', post.sticky] : false, post.author ? ['post_author', post.author] : false].filter(Boolean); // We gather all the metaboxes locations data and the base form data

    var baseFormData = new window.FormData(document.querySelector('.metabox-base-form'));
    var formDataToMerge = [baseFormData].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getActiveMetaBoxLocations"])(state).map(function (location) {
      return new window.FormData(Object(_utils_meta_boxes__WEBPACK_IMPORTED_MODULE_9__["getMetaBoxContainer"])(location));
    }))); // Merge all form data objects into a single one.

    var formData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"])(formDataToMerge, function (memo, currentFormData) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = currentFormData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          memo.append(key, value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return memo;
    }, new window.FormData());
    additionalData.forEach(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return formData.append(key, value);
    }); // Save the metaboxes

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      url: window._wpMetaBoxUrl,
      method: 'POST',
      body: formData,
      parse: false
    }).then(function () {
      return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["metaBoxUpdatesSuccess"])());
    });
  },
  SWITCH_MODE: function SWITCH_MODE(action) {
    // Unselect blocks when we switch to the code editor.
    if (action.mode !== 'visual') {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/block-editor').clearSelectedBlock();
    }

    var message = action.mode === 'visual' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Visual editor selected') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Code editor selected');
    Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__["speak"])(message, 'assertive');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (effects);


/***/ }),

/***/ "./packages/edit-post/build-module/store/index.js":
/*!********************************************************!*\
  !*** ./packages/edit-post/build-module/store/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./packages/edit-post/build-module/store/reducer.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./packages/edit-post/build-module/store/middlewares.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/edit-post/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./packages/edit-post/build-module/store/selectors.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./packages/edit-post/build-module/store/controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./packages/edit-post/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */







var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_6__["STORE_KEY"], {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"],
  persist: ['preferences']
});
Object(_middlewares__WEBPACK_IMPORTED_MODULE_2__["default"])(store);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./packages/edit-post/build-module/store/middlewares.js":
/*!**************************************************************!*\
  !*** ./packages/edit-post/build-module/store/middlewares.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var refx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! refx */ "./node_modules/refx/refx.js");
/* harmony import */ var refx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(refx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ "./packages/edit-post/build-module/store/effects.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Applies the custom middlewares used specifically in the editor module.
 *
 * @param {Object} store Store Object.
 *
 * @return {Object} Update Store Object.
 */

function applyMiddlewares(store) {
  var middlewares = [refx__WEBPACK_IMPORTED_MODULE_2___default()(_effects__WEBPACK_IMPORTED_MODULE_3__["default"])];

  var enhancedDispatch = function enhancedDispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var chain = [];
  var middlewareAPI = {
    getState: store.getState,
    dispatch: function dispatch() {
      return enhancedDispatch.apply(void 0, arguments);
    }
  };
  chain = middlewares.map(function (middleware) {
    return middleware(middlewareAPI);
  });
  enhancedDispatch = lodash__WEBPACK_IMPORTED_MODULE_1__["flowRight"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(chain))(store.dispatch);
  store.dispatch = enhancedDispatch;
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (applyMiddlewares);


/***/ }),

/***/ "./packages/edit-post/build-module/store/reducer.js":
/*!**********************************************************!*\
  !*** ./packages/edit-post/build-module/store/reducer.js ***!
  \**********************************************************/
/*! exports provided: DEFAULT_ACTIVE_GENERAL_SIDEBAR, preferences, removedPanels, activeGeneralSidebar, activeModal, publishSidebarActive, isSavingMetaBoxes, metaBoxLocations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ACTIVE_GENERAL_SIDEBAR", function() { return DEFAULT_ACTIVE_GENERAL_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preferences", function() { return preferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removedPanels", function() { return removedPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeGeneralSidebar", function() { return activeGeneralSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeModal", function() { return activeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishSidebarActive", function() { return publishSidebarActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavingMetaBoxes", function() { return isSavingMetaBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaBoxLocations", function() { return metaBoxLocations; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaults */ "./packages/edit-post/build-module/store/defaults.js");




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * The default active general sidebar: The "Document" tab.
 *
 * @type {string}
 */

var DEFAULT_ACTIVE_GENERAL_SIDEBAR = 'edit-post/document';
/**
 * Higher-order reducer creator which provides the given initial state for the
 * original reducer.
 *
 * @param {*} initialState Initial state to provide to reducer.
 *
 * @return {Function} Higher-order reducer.
 */

var createWithInitialState = function createWithInitialState(initialState) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return reducer(state, action);
    };
  };
};
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                           Current state.
 * @param {string}  state.mode                      Current editor mode, either
 *                                                  "visual" or "text".
 * @param {boolean} state.isGeneralSidebarDismissed Whether general sidebar is
 *                                                  dismissed. False by default
 *                                                  or when closing general
 *                                                  sidebar, true when opening
 *                                                  sidebar.
 * @param {boolean} state.isSidebarOpened           Whether the sidebar is
 *                                                  opened or closed.
 * @param {Object}  state.panels                    The state of the different
 *                                                  sidebar panels.
 * @param {Object}  action                          Dispatched action.
 *
 * @return {Object} Updated state.
 */


var preferences = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flow"])([_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"], createWithInitialState(_defaults__WEBPACK_IMPORTED_MODULE_5__["PREFERENCES_DEFAULTS"])])({
  isGeneralSidebarDismissed: function isGeneralSidebarDismissed(state, action) {
    switch (action.type) {
      case 'OPEN_GENERAL_SIDEBAR':
      case 'CLOSE_GENERAL_SIDEBAR':
        return action.type === 'CLOSE_GENERAL_SIDEBAR';
    }

    return state;
  },
  panels: function panels(state, action) {
    switch (action.type) {
      case 'TOGGLE_PANEL_ENABLED':
        {
          var panelName = action.panelName;
          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, panelName, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state[panelName], {
            enabled: !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(state, [panelName, 'enabled'], true)
          })));
        }

      case 'TOGGLE_PANEL_OPENED':
        {
          var _panelName = action.panelName;
          var isOpen = state[_panelName] === true || Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(state, [_panelName, 'opened'], false);
          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _panelName, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state[_panelName], {
            opened: !isOpen
          })));
        }
    }

    return state;
  },
  features: function features(state, action) {
    if (action.type === 'TOGGLE_FEATURE') {
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.feature, !state[action.feature]));
    }

    return state;
  },
  editorMode: function editorMode(state, action) {
    if (action.type === 'SWITCH_MODE') {
      return action.mode;
    }

    return state;
  },
  pinnedPluginItems: function pinnedPluginItems(state, action) {
    if (action.type === 'TOGGLE_PINNED_PLUGIN_ITEM') {
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.pluginName, !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(state, [action.pluginName], true)));
    }

    return state;
  },
  hiddenBlockTypes: function hiddenBlockTypes(state, action) {
    switch (action.type) {
      case 'SHOW_BLOCK_TYPES':
        return lodash__WEBPACK_IMPORTED_MODULE_3__["without"].apply(void 0, [state].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.blockNames)));

      case 'HIDE_BLOCK_TYPES':
        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["union"])(state, action.blockNames);
    }

    return state;
  },
  preferredStyleVariations: function preferredStyleVariations(state, action) {
    switch (action.type) {
      case 'UPDATE_PREFERRED_STYLE_VARIATIONS':
        {
          if (!action.blockName) {
            return state;
          }

          if (!action.blockStyle) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omit"])(state, [action.blockName]);
          }

          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.blockName, action.blockStyle));
        }
    }

    return state;
  },
  localAutosaveInterval: function localAutosaveInterval(state, action) {
    switch (action.type) {
      case 'UPDATE_LOCAL_AUTOSAVE_INTERVAL':
        return action.interval;
    }

    return state;
  }
});
/**
 * Reducer storing the list of all programmatically removed panels.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */

function removedPanels() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REMOVE_PANEL':
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["includes"])(state, action.panelName)) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [action.panelName]);
      }

  }

  return state;
}
/**
 * Reducer returning the next active general sidebar state. The active general
 * sidebar is a unique name to identify either an editor or plugin sidebar.
 *
 * @param {?string} state  Current state.
 * @param {Object}  action Action object.
 *
 * @return {?string} Updated state.
 */

function activeGeneralSidebar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ACTIVE_GENERAL_SIDEBAR;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_GENERAL_SIDEBAR':
      return action.name;
  }

  return state;
}
/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */

function activeModal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;

    case 'CLOSE_MODAL':
      return null;
  }

  return state;
}
function publishSidebarActive() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_PUBLISH_SIDEBAR':
      return true;

    case 'CLOSE_PUBLISH_SIDEBAR':
      return false;

    case 'TOGGLE_PUBLISH_SIDEBAR':
      return !state;
  }

  return state;
}
/**
 * Reducer keeping track of the meta boxes isSaving state.
 * A "true" value means the meta boxes saving request is in-flight.
 *
 *
 * @param {boolean}  state   Previous state.
 * @param {Object}   action  Action Object.
 *
 * @return {Object} Updated state.
 */

function isSavingMetaBoxes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_META_BOX_UPDATES':
      return true;

    case 'META_BOX_UPDATES_SUCCESS':
      return false;

    default:
      return state;
  }
}
/**
 * Reducer keeping track of the meta boxes per location.
 *
 * @param {boolean}  state   Previous state.
 * @param {Object}   action  Action Object.
 *
 * @return {Object} Updated state.
 */

function metaBoxLocations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_META_BOXES_PER_LOCATIONS':
      return action.metaBoxesPerLocation;
  }

  return state;
}
var metaBoxes = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  isSaving: isSavingMetaBoxes,
  locations: metaBoxLocations
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  activeGeneralSidebar: activeGeneralSidebar,
  activeModal: activeModal,
  metaBoxes: metaBoxes,
  preferences: preferences,
  publishSidebarActive: publishSidebarActive,
  removedPanels: removedPanels
}));


/***/ }),

/***/ "./packages/edit-post/build-module/store/selectors.js":
/*!************************************************************!*\
  !*** ./packages/edit-post/build-module/store/selectors.js ***!
  \************************************************************/
/*! exports provided: getEditorMode, isEditorSidebarOpened, isPluginSidebarOpened, getActiveGeneralSidebarName, getPreferences, getPreference, isPublishSidebarOpened, isEditorPanelRemoved, isEditorPanelEnabled, isEditorPanelOpened, isModalActive, isFeatureActive, isPluginItemPinned, getActiveMetaBoxLocations, isMetaBoxLocationVisible, isMetaBoxLocationActive, getMetaBoxesPerLocation, getAllMetaBoxes, hasMetaBoxes, isSavingMetaBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorMode", function() { return getEditorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditorSidebarOpened", function() { return isEditorSidebarOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPluginSidebarOpened", function() { return isPluginSidebarOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveGeneralSidebarName", function() { return getActiveGeneralSidebarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreferences", function() { return getPreferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreference", function() { return getPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublishSidebarOpened", function() { return isPublishSidebarOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditorPanelRemoved", function() { return isEditorPanelRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditorPanelEnabled", function() { return isEditorPanelEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditorPanelOpened", function() { return isEditorPanelOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModalActive", function() { return isModalActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureActive", function() { return isFeatureActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPluginItemPinned", function() { return isPluginItemPinned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveMetaBoxLocations", function() { return getActiveMetaBoxLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMetaBoxLocationVisible", function() { return isMetaBoxLocationVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMetaBoxLocationActive", function() { return isMetaBoxLocationActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaBoxesPerLocation", function() { return getMetaBoxesPerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMetaBoxes", function() { return getAllMetaBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasMetaBoxes", function() { return hasMetaBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavingMetaBoxes", function() { return isSavingMetaBoxes; });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */

function getEditorMode(state) {
  return getPreference(state, 'editorMode', 'visual');
}
/**
 * Returns true if the editor sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the editor sidebar is opened.
 */

function isEditorSidebarOpened(state) {
  var activeGeneralSidebar = getActiveGeneralSidebarName(state);
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(['edit-post/document', 'edit-post/block'], activeGeneralSidebar);
}
/**
 * Returns true if the plugin sidebar is opened.
 *
 * @param {Object} state Global application state
 * @return {boolean}     Whether the plugin sidebar is opened.
 */

function isPluginSidebarOpened(state) {
  var activeGeneralSidebar = getActiveGeneralSidebarName(state);
  return !!activeGeneralSidebar && !isEditorSidebarOpened(state);
}
/**
 * Returns the current active general sidebar name, or null if there is no
 * general sidebar active. The active general sidebar is a unique name to
 * identify either an editor or plugin sidebar.
 *
 * Examples:
 *
 *  - `edit-post/document`
 *  - `my-plugin/insert-image-sidebar`
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Active general sidebar name.
 */

function getActiveGeneralSidebarName(state) {
  // Dismissal takes precedent.
  var isDismissed = getPreference(state, 'isGeneralSidebarDismissed', false);

  if (isDismissed) {
    return null;
  }

  return state.activeGeneralSidebar;
}
/**
 * Returns the preferences (these preferences are persisted locally).
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Preferences Object.
 */

function getPreferences(state) {
  return state.preferences;
}
/**
 *
 * @param {Object} state         Global application state.
 * @param {string} preferenceKey Preference Key.
 * @param {Mixed}  defaultValue  Default Value.
 *
 * @return {Mixed} Preference Value.
 */

function getPreference(state, preferenceKey, defaultValue) {
  var preferences = getPreferences(state);
  var value = preferences[preferenceKey];
  return value === undefined ? defaultValue : value;
}
/**
 * Returns true if the publish sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the publish sidebar is open.
 */

function isPublishSidebarOpened(state) {
  return state.publishSidebarActive;
}
/**
 * Returns true if the given panel was programmatically removed, or false otherwise.
 * All panels are not removed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is removed.
 */

function isEditorPanelRemoved(state, panelName) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(state.removedPanels, panelName);
}
/**
 * Returns true if the given panel is enabled, or false otherwise. Panels are
 * enabled by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is enabled.
 */

function isEditorPanelEnabled(state, panelName) {
  var panels = getPreference(state, 'panels');
  return !isEditorPanelRemoved(state, panelName) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(panels, [panelName, 'enabled'], true);
}
/**
 * Returns true if the given panel is open, or false otherwise. Panels are
 * closed by default.
 *
 * @param  {Object}  state     Global application state.
 * @param  {string}  panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is open.
 */

function isEditorPanelOpened(state, panelName) {
  var panels = getPreference(state, 'panels');
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(panels, [panelName]) === true || Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(panels, [panelName, 'opened']) === true;
}
/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param  {Object}  state 	   Global application state.
 * @param  {string}  modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */

function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}
/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state   Global application state.
 * @param {string} feature Feature slug.
 *
 * @return {boolean} Is active.
 */

function isFeatureActive(state, feature) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(state.preferences.features, [feature], false);
}
/**
 * Returns true if the plugin item is pinned to the header.
 * When the value is not set it defaults to true.
 *
 * @param  {Object}  state      Global application state.
 * @param  {string}  pluginName Plugin item name.
 *
 * @return {boolean} Whether the plugin item is pinned.
 */

function isPluginItemPinned(state, pluginName) {
  var pinnedPluginItems = getPreference(state, 'pinnedPluginItems', {});
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(pinnedPluginItems, [pluginName], true);
}
/**
 * Returns an array of active meta box locations.
 *
 * @param {Object} state Post editor state.
 *
 * @return {string[]} Active meta box locations.
 */

var getActiveMetaBoxLocations = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  return Object.keys(state.metaBoxes.locations).filter(function (location) {
    return isMetaBoxLocationActive(state, location);
  });
}, function (state) {
  return [state.metaBoxes.locations];
});
/**
 * Returns true if a metabox location is active and visible
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active and visible.
 */

function isMetaBoxLocationVisible(state, location) {
  return isMetaBoxLocationActive(state, location) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(getMetaBoxesPerLocation(state, location), function (_ref) {
    var id = _ref.id;
    return isEditorPanelEnabled(state, "meta-box-".concat(id));
  });
}
/**
 * Returns true if there is an active meta box in the given location, or false
 * otherwise.
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active.
 */

function isMetaBoxLocationActive(state, location) {
  var metaBoxes = getMetaBoxesPerLocation(state, location);
  return !!metaBoxes && metaBoxes.length !== 0;
}
/**
 * Returns the list of all the available meta boxes for a given location.
 *
 * @param {Object} state    Global application state.
 * @param {string} location Meta box location to test.
 *
 * @return {?Array} List of meta boxes.
 */

function getMetaBoxesPerLocation(state, location) {
  return state.metaBoxes.locations[location];
}
/**
 * Returns the list of all the available meta boxes.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} List of meta boxes.
 */

var getAllMetaBoxes = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(state.metaBoxes.locations));
}, function (state) {
  return [state.metaBoxes.locations];
});
/**
 * Returns true if the post is using Meta Boxes
 *
 * @param  {Object} state Global application state
 *
 * @return {boolean} Whether there are metaboxes or not.
 */

function hasMetaBoxes(state) {
  return getActiveMetaBoxLocations(state).length > 0;
}
/**
 * Returns true if the Meta Boxes are being saved.
 *
 * @param   {Object}  state Global application state.
 *
 * @return {boolean} Whether the metaboxes are being saved.
 */

function isSavingMetaBoxes(state) {
  return state.metaBoxes.isSaving;
}


/***/ }),

/***/ "./packages/edit-post/build-module/utils/meta-boxes.js":
/*!*************************************************************!*\
  !*** ./packages/edit-post/build-module/utils/meta-boxes.js ***!
  \*************************************************************/
/*! exports provided: getMetaBoxContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaBoxContainer", function() { return getMetaBoxContainer; });
/**
 * Function returning the current Meta Boxes DOM Node in the editor
 * whether the meta box area is opened or not.
 * If the MetaBox Area is visible returns it, and returns the original container instead.
 *
 * @param   {string} location Meta Box location.
 * @return {string}          HTML content.
 */
var getMetaBoxContainer = function getMetaBoxContainer(location) {
  var area = document.querySelector(".edit-post-meta-boxes-area.is-".concat(location, " .metabox-location-").concat(location));

  if (area) {
    return area;
  }

  return document.querySelector('#metaboxes .metabox-location-' + location);
};


/***/ }),

/***/ "@wordpress/a11y":
/*!***************************************!*\
  !*** external {"this":["wp","a11y"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/block-library":
/*!***********************************************!*\
  !*** external {"this":["wp","blockLibrary"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockLibrary"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!*******************************************!*\
  !*** external {"this":["wp","coreData"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/media-utils":
/*!*********************************************!*\
  !*** external {"this":["wp","mediaUtils"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "@wordpress/notices":
/*!******************************************!*\
  !*** external {"this":["wp","notices"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());

/***/ }),

/***/ "@wordpress/nux":
/*!**************************************!*\
  !*** external {"this":["wp","nux"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["nux"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "@wordpress/viewport":
/*!*******************************************!*\
  !*** external {"this":["wp","viewport"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

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