this["wp"] = this["wp"] || {}; this["wp"]["editor"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/editor/build-module/index.js");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

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

/***/ "./node_modules/computed-style/dist/computedStyle.commonjs.js":
/*!********************************************************************!*\
  !*** ./node_modules/computed-style/dist/computedStyle.commonjs.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ "./node_modules/line-height/lib/line-height.js":
/*!*****************************************************!*\
  !*** ./node_modules/line-height/lib/line-height.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(/*! computed-style */ "./node_modules/computed-style/dist/computedStyle.commonjs.js");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/TextareaAutosize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
var _getLineHeight = __webpack_require__(/*! line-height */ "./node_modules/line-height/lib/line-height.js");
var getLineHeight = _getLineHeight;
var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosize = /** @class */ (function (_super) {
    __extends(TextareaAutosize, _super);
    function TextareaAutosize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.dispatchEvent = function (EVENT_TYPE) {
            var event = document.createEvent('Event');
            event.initEvent(EVENT_TYPE, true, false);
            _this.textarea.dispatchEvent(event);
        };
        _this.updateLineHeight = function () {
            _this.setState({
                lineHeight: getLineHeight(_this.textarea)
            });
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        _this.saveDOMNodeRef = function (ref) {
            var innerRef = _this.props.innerRef;
            if (innerRef) {
                innerRef(ref);
            }
            _this.textarea = ref;
        };
        _this.getLocals = function () {
            var _a = _this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef"]), lineHeight = _a.state.lineHeight, saveDOMNodeRef = _a.saveDOMNodeRef;
            var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
            return __assign({}, props, { saveDOMNodeRef: saveDOMNodeRef, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, onChange: _this.onChange });
        };
        return _this;
    }
    TextareaAutosize.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, onResize = _a.onResize, maxRows = _a.maxRows;
        if (typeof maxRows === 'number') {
            this.updateLineHeight();
        }
        /*
          the defer is needed to:
            - force "autosize" to activate the scrollbar when this.props.maxRows is passed
            - support StyledComponents (see #71)
        */
        setTimeout(function () { return autosize(_this.textarea); });
        if (onResize) {
            this.textarea.addEventListener(RESIZED, onResize);
        }
    };
    TextareaAutosize.prototype.componentWillUnmount = function () {
        var onResize = this.props.onResize;
        if (onResize) {
            this.textarea.removeEventListener(RESIZED, onResize);
        }
        this.dispatchEvent(DESTROY);
    };
    TextareaAutosize.prototype.render = function () {
        var _a = this.getLocals(), children = _a.children, saveDOMNodeRef = _a.saveDOMNodeRef, locals = __rest(_a, ["children", "saveDOMNodeRef"]);
        return (React.createElement("textarea", __assign({}, locals, { ref: saveDOMNodeRef }), children));
    };
    TextareaAutosize.prototype.componentDidUpdate = function () {
        if (this.props.value !== this.currentValue) {
            this.dispatchEvent(UPDATE);
        }
    };
    TextareaAutosize.defaultProps = {
        rows: 1
    };
    TextareaAutosize.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.func
    };
    return TextareaAutosize;
}(React.Component));
exports["default"] = TextareaAutosize;


/***/ }),

/***/ "./node_modules/react-autosize-textarea/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js");
exports["default"] = TextareaAutosize_1["default"];


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
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

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/redux-optimist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-optimist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/index.js */ "./node_modules/redux-optimist/lib/index.js");


/***/ }),

/***/ "./node_modules/redux-optimist/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/redux-optimist/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BEGIN = 'BEGIN';
var COMMIT = 'COMMIT';
var REVERT = 'REVERT';
// Array({transactionID: string or null, beforeState: {object}, action: {object}}
var INITIAL_OPTIMIST = [];

module.exports = optimist;
module.exports.BEGIN = BEGIN;
module.exports.COMMIT = COMMIT;
module.exports.REVERT = REVERT;
function optimist(fn) {
  function beginReducer(state, action) {
    var _separateState = separateState(state);

    var optimist = _separateState.optimist;
    var innerState = _separateState.innerState;

    optimist = optimist.concat([{ beforeState: innerState, action: action }]);
    innerState = fn(innerState, action);
    validateState(innerState, action);
    return _extends({ optimist: optimist }, innerState);
  }
  function commitReducer(state, action) {
    var _separateState2 = separateState(state);

    var optimist = _separateState2.optimist;
    var innerState = _separateState2.innerState;

    var newOptimist = [],
        started = false,
        committed = false;
    optimist.forEach(function (entry) {
      if (started) {
        if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
          committed = true;
          newOptimist.push({ action: entry.action });
        } else {
          newOptimist.push(entry);
        }
      } else if (entry.beforeState && !matchesTransaction(entry.action, action.optimist.id)) {
        started = true;
        newOptimist.push(entry);
      } else if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
        committed = true;
      }
    });
    if (!committed) {
      console.error('Cannot commit transaction with id "' + action.optimist.id + '" because it does not exist');
    }
    optimist = newOptimist;
    return baseReducer(optimist, innerState, action);
  }
  function revertReducer(state, action) {
    var _separateState3 = separateState(state);

    var optimist = _separateState3.optimist;
    var innerState = _separateState3.innerState;

    var newOptimist = [],
        started = false,
        gotInitialState = false,
        currentState = innerState;
    optimist.forEach(function (entry) {
      if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
        currentState = entry.beforeState;
        gotInitialState = true;
      }
      if (!matchesTransaction(entry.action, action.optimist.id)) {
        if (entry.beforeState) {
          started = true;
        }
        if (started) {
          if (gotInitialState && entry.beforeState) {
            newOptimist.push({
              beforeState: currentState,
              action: entry.action
            });
          } else {
            newOptimist.push(entry);
          }
        }
        if (gotInitialState) {
          currentState = fn(currentState, entry.action);
          validateState(innerState, action);
        }
      }
    });
    if (!gotInitialState) {
      console.error('Cannot revert transaction with id "' + action.optimist.id + '" because it does not exist');
    }
    optimist = newOptimist;
    return baseReducer(optimist, currentState, action);
  }
  function baseReducer(optimist, innerState, action) {
    if (optimist.length) {
      optimist = optimist.concat([{ action: action }]);
    }
    innerState = fn(innerState, action);
    validateState(innerState, action);
    return _extends({ optimist: optimist }, innerState);
  }
  return function (state, action) {
    if (action.optimist) {
      switch (action.optimist.type) {
        case BEGIN:
          return beginReducer(state, action);
        case COMMIT:
          return commitReducer(state, action);
        case REVERT:
          return revertReducer(state, action);
      }
    }

    var _separateState4 = separateState(state);

    var optimist = _separateState4.optimist;
    var innerState = _separateState4.innerState;

    if (state && !optimist.length) {
      var nextState = fn(innerState, action);
      if (nextState === innerState) {
        return state;
      }
      validateState(nextState, action);
      return _extends({ optimist: optimist }, nextState);
    }
    return baseReducer(optimist, innerState, action);
  };
}

function matchesTransaction(action, id) {
  return action.optimist && action.optimist.id === id;
}

function validateState(newState, action) {
  if (!newState || typeof newState !== 'object' || Array.isArray(newState)) {
    throw new TypeError('Error while handling "' + action.type + '": Optimist requires that state is always a plain object.');
  }
}

function separateState(state) {
  if (!state) {
    return { optimist: INITIAL_OPTIMIST, innerState: state };
  } else {
    var _state$optimist = state.optimist;

    var _optimist = _state$optimist === undefined ? INITIAL_OPTIMIST : _state$optimist;

    var innerState = _objectWithoutProperties(state, ['optimist']);

    return { optimist: _optimist, innerState: innerState };
  }
}

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

/***/ "./packages/editor/build-module/components/autocompleters/block.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/autocompleters/block.js ***!
  \*************************************************************************/
/*! exports provided: createBlockCompleter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockCompleter", function() { return createBlockCompleter; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Returns the client ID of the parent where a newly inserted block would be
 * placed.
 *
 * @return {string} Client ID of the parent where a newly inserted block would
 *                  be placed.
 */

function defaultGetBlockInsertionParentClientId() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlockInsertionPoint().rootClientId;
}
/**
 * Returns the inserter items for the specified parent block.
 *
 * @param {string} rootClientId Client ID of the block for which to retrieve
 *                              inserter items.
 *
 * @return {Array<Editor.InserterItem>} The inserter items for the specified
 *                                      parent.
 */


function defaultGetInserterItems(rootClientId) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getInserterItems(rootClientId);
}
/**
 * Returns the name of the currently selected block.
 *
 * @return {string?} The name of the currently selected block or `null` if no
 *                   block is selected.
 */


function defaultGetSelectedBlockName() {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockName = _select.getBlockName;

  var selectedBlockClientId = getSelectedBlockClientId();
  return selectedBlockClientId ? getBlockName(selectedBlockClientId) : null;
}
/**
 * Triggers a fetch of reusable blocks, once.
 *
 * TODO: Reusable blocks fetching should be reimplemented as a core-data entity
 * resolver, not relying on `core/editor` (see #7119). The implementation here
 * is imperfect in that the options result will not await the completion of the
 * fetch request and thus will not include any reusable blocks. This has always
 * been true, but relied upon the fact the user would be delayed in typing an
 * autocompleter search query. Once implemented using resolvers, the status of
 * this request could be subscribed to as part of a promised return value using
 * the result of `hasFinishedResolution`. There is currently reliable way to
 * determine that a reusable blocks fetch request has completed.
 *
 * @return {Promise} Promise resolving once reusable blocks fetched.
 */


var fetchReusableBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["once"])(function () {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/editor').__experimentalFetchReusableBlocks();
});
/**
 * Creates a blocks repeater for replacing the current block with a selected block type.
 *
 * @return {Completer} A blocks completer.
 */

function createBlockCompleter() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$getBlockInsertio = _ref.getBlockInsertionParentClientId,
      getBlockInsertionParentClientId = _ref$getBlockInsertio === void 0 ? defaultGetBlockInsertionParentClientId : _ref$getBlockInsertio,
      _ref$getInserterItems = _ref.getInserterItems,
      getInserterItems = _ref$getInserterItems === void 0 ? defaultGetInserterItems : _ref$getInserterItems,
      _ref$getSelectedBlock = _ref.getSelectedBlockName,
      getSelectedBlockName = _ref$getSelectedBlock === void 0 ? defaultGetSelectedBlockName : _ref$getSelectedBlock;

  return {
    name: 'blocks',
    className: 'editor-autocompleters__block',
    triggerPrefix: '/',
    options: function options() {
      fetchReusableBlocks();
      var selectedBlockName = getSelectedBlockName();
      return getInserterItems(getBlockInsertionParentClientId()).filter( // Avoid offering to replace the current block with a block of the same type.
      function (inserterItem) {
        return selectedBlockName !== inserterItem.name;
      });
    },
    getOptionKeywords: function getOptionKeywords(inserterItem) {
      var title = inserterItem.title,
          _inserterItem$keyword = inserterItem.keywords,
          keywords = _inserterItem$keyword === void 0 ? [] : _inserterItem$keyword,
          category = inserterItem.category;
      return [category].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(keywords), [title]);
    },
    getOptionLabel: function getOptionLabel(inserterItem) {
      var icon = inserterItem.icon,
          title = inserterItem.title;
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["BlockIcon"], {
        key: "icon",
        icon: icon,
        showColors: true
      }), title];
    },
    allowContext: function allowContext(before, after) {
      return !(/\S/.test(before) || /\S/.test(after));
    },
    getOptionCompletion: function getOptionCompletion(inserterItem) {
      var name = inserterItem.name,
          initialAttributes = inserterItem.initialAttributes;
      return {
        action: 'replace',
        value: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])(name, initialAttributes)
      };
    },
    isOptionDisabled: function isOptionDisabled(inserterItem) {
      return inserterItem.isDisabled;
    }
  };
}
/**
 * Creates a blocks repeater for replacing the current block with a selected block type.
 *
 * @return {Completer} A blocks completer.
 */

/* harmony default export */ __webpack_exports__["default"] = (createBlockCompleter());


/***/ }),

/***/ "./packages/editor/build-module/components/autocompleters/index.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/autocompleters/index.js ***!
  \*************************************************************************/
/*! exports provided: blockAutocompleter, userAutocompleter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./packages/editor/build-module/components/autocompleters/block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockAutocompleter", function() { return _block__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./packages/editor/build-module/components/autocompleters/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/editor/build-module/components/autocompleters/user.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/autocompleters/user.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * A user mentions completer.
 *
 * @type {Completer}
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',
  options: function options(search) {
    var payload = '';

    if (search) {
      payload = '?search=' + encodeURIComponent(search);
    }

    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wp/v2/users' + payload
    });
  },
  isDebounced: true,
  getOptionKeywords: function getOptionKeywords(user) {
    return [user.slug, user.name];
  },
  getOptionLabel: function getOptionLabel(user) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      key: "avatar",
      className: "editor-autocompleters__user-avatar",
      alt: "",
      src: user.avatar_urls[24]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      key: "name",
      className: "editor-autocompleters__user-name"
    }, user.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      key: "slug",
      className: "editor-autocompleters__user-slug"
    }, user.slug)];
  },
  getOptionCompletion: function getOptionCompletion(user) {
    return "@".concat(user.slug);
  }
});


/***/ }),

/***/ "./packages/editor/build-module/components/autosave-monitor/index.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/autosave-monitor/index.js ***!
  \***************************************************************************/
/*! exports provided: AutosaveMonitor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return AutosaveMonitor; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);






/**
 * WordPress dependencies
 */



var AutosaveMonitor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AutosaveMonitor, _Component);

  function AutosaveMonitor() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutosaveMonitor);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AutosaveMonitor).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutosaveMonitor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isDirty = _this$props.isDirty,
          editsReference = _this$props.editsReference,
          isAutosaveable = _this$props.isAutosaveable,
          isAutosaving = _this$props.isAutosaving; // The edits reference is held for comparison to avoid scheduling an
      // autosave if an edit has not been made since the last autosave
      // completion. This is assigned when the autosave completes, and reset
      // when an edit occurs.
      //
      // See: https://github.com/WordPress/gutenberg/issues/12318

      if (editsReference !== prevProps.editsReference) {
        this.didAutosaveForEditsReference = false;
      }

      if (!isAutosaving && prevProps.isAutosaving) {
        this.didAutosaveForEditsReference = true;
      }

      if (prevProps.isDirty !== isDirty || prevProps.isAutosaveable !== isAutosaveable || prevProps.editsReference !== editsReference) {
        this.toggleTimer(isDirty && isAutosaveable && !this.didAutosaveForEditsReference);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleTimer(false);
    }
  }, {
    key: "toggleTimer",
    value: function toggleTimer(isPendingSave) {
      var _this = this;

      var _this$props2 = this.props,
          interval = _this$props2.interval,
          _this$props2$shouldTh = _this$props2.shouldThrottle,
          shouldThrottle = _this$props2$shouldTh === void 0 ? false : _this$props2$shouldTh; // By default, AutosaveMonitor will wait for a pause in editing before
      // autosaving. In other words, its action is "debounced".
      //
      // The `shouldThrottle` props allows overriding this behaviour, thus
      // making the autosave action "throttled".

      if (!shouldThrottle && this.pendingSave) {
        clearTimeout(this.pendingSave);
        delete this.pendingSave;
      }

      if (isPendingSave && !(shouldThrottle && this.pendingSave)) {
        this.pendingSave = setTimeout(function () {
          _this.props.autosave();

          delete _this.pendingSave;
        }, interval * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AutosaveMonitor;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getReferenceByDistinctEdits = _select.getReferenceByDistinctEdits;

  var _select2 = select('core/editor'),
      isEditedPostDirty = _select2.isEditedPostDirty,
      isEditedPostAutosaveable = _select2.isEditedPostAutosaveable,
      isAutosavingPost = _select2.isAutosavingPost,
      getEditorSettings = _select2.getEditorSettings;

  var _ownProps$interval = ownProps.interval,
      interval = _ownProps$interval === void 0 ? getEditorSettings().autosaveInterval : _ownProps$interval;
  return {
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    editsReference: getReferenceByDistinctEdits(),
    isAutosaving: isAutosavingPost(),
    interval: interval
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withDispatch"])(function (dispatch, ownProps) {
  return {
    autosave: function autosave() {
      var _ownProps$autosave = ownProps.autosave,
          autosave = _ownProps$autosave === void 0 ? dispatch('core/editor').autosave : _ownProps$autosave;
      autosave();
    }
  };
})])(AutosaveMonitor));


/***/ }),

/***/ "./packages/editor/build-module/components/convert-to-group-buttons/convert-button.js":
/*!********************************************************************************************!*\
  !*** ./packages/editor/build-module/components/convert-to-group-buttons/convert-button.js ***!
  \********************************************************************************************/
/*! exports provided: ConvertToGroupButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToGroupButton", function() { return ConvertToGroupButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ "./packages/editor/build-module/components/convert-to-group-buttons/icons.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function ConvertToGroupButton(_ref) {
  var onConvertToGroup = _ref.onConvertToGroup,
      onConvertFromGroup = _ref.onConvertFromGroup,
      _ref$isGroupable = _ref.isGroupable,
      isGroupable = _ref$isGroupable === void 0 ? false : _ref$isGroupable,
      _ref$isUngroupable = _ref.isUngroupable,
      isUngroupable = _ref$isUngroupable === void 0 ? false : _ref$isUngroupable;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, isGroupable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["Group"],
    onClick: onConvertToGroup
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Group', 'verb')), isUngroupable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["Ungroup"],
    onClick: onConvertFromGroup
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Ungroup', 'Ungrouping blocks from within a Group block back into individual blocks within the Editor ')));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/blocks'),
      getGroupingBlockName = _select2.getGroupingBlockName;

  var groupingBlockName = getGroupingBlockName();
  var rootClientId = clientIds && clientIds.length > 0 ? getBlockRootClientId(clientIds[0]) : undefined;
  var groupingBlockAvailable = canInsertBlockType(groupingBlockName, rootClientId);
  var blocksSelection = getBlocksByClientId(clientIds);
  var isSingleGroupingBlock = blocksSelection.length === 1 && blocksSelection[0] && blocksSelection[0].name === groupingBlockName; // Do we have
  // 1. Grouping block available to be inserted?
  // 2. One or more blocks selected
  // (we allow single Blocks to become groups unless
  // they are a soltiary group block themselves)

  var isGroupable = groupingBlockAvailable && blocksSelection.length && !isSingleGroupingBlock; // Do we have a single Group Block selected and does that group have inner blocks?

  var isUngroupable = isSingleGroupingBlock && !!blocksSelection[0].innerBlocks.length;
  return {
    isGroupable: isGroupable,
    isUngroupable: isUngroupable,
    blocksSelection: blocksSelection,
    groupingBlockName: groupingBlockName
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref3$onToggle,
      _ref3$blocksSelection = _ref3.blocksSelection,
      blocksSelection = _ref3$blocksSelection === void 0 ? [] : _ref3$blocksSelection,
      groupingBlockName = _ref3.groupingBlockName;

  var _dispatch = dispatch('core/block-editor'),
      replaceBlocks = _dispatch.replaceBlocks;

  return {
    onConvertToGroup: function onConvertToGroup() {
      if (!blocksSelection.length) {
        return;
      } // Activate the `transform` on the Grouping Block which does the conversion


      var newBlocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["switchToBlockType"])(blocksSelection, groupingBlockName);

      if (newBlocks) {
        replaceBlocks(clientIds, newBlocks);
      }

      onToggle();
    },
    onConvertFromGroup: function onConvertFromGroup() {
      if (!blocksSelection.length) {
        return;
      }

      var innerBlocks = blocksSelection[0].innerBlocks;

      if (!innerBlocks.length) {
        return;
      }

      replaceBlocks(clientIds, innerBlocks);
      onToggle();
    }
  };
})])(ConvertToGroupButton));


/***/ }),

/***/ "./packages/editor/build-module/components/convert-to-group-buttons/icons.js":
/*!***********************************************************************************!*\
  !*** ./packages/editor/build-module/components/convert-to-group-buttons/icons.js ***!
  \***********************************************************************************/
/*! exports provided: Group, Ungroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ungroup", function() { return Ungroup; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var GroupSVG = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 5a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8zm3 6H7v2h4v-2zM9 9V7h4v2H9z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1 3a2 2 0 0 0 1 1.732v10.536A2 2 0 1 0 4.732 18h10.536A2 2 0 1 0 18 15.268V4.732A2 2 0 1 0 15.268 2H4.732A2 2 0 0 0 1 3zm14.268 1H4.732A2.01 2.01 0 0 1 4 4.732v10.536c.304.175.557.428.732.732h10.536a2.01 2.01 0 0 1 .732-.732V4.732A2.01 2.01 0 0 1 15.268 4z"
}));
var Group = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  icon: GroupSVG
});
var UngroupSVG = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M9 2H15C16.1 2 17 2.9 17 4V7C17 8.1 16.1 9 15 9H9C7.9 9 7 8.1 7 7V4C7 2.9 7.9 2 9 2ZM9 7H15V4H9V7Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5 11H11C12.1 11 13 11.9 13 13V16C13 17.1 12.1 18 11 18H5C3.9 18 3 17.1 3 16V13C3 11.9 3.9 11 5 11ZM5 16H11V13H5V16Z"
}));
var Ungroup = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  icon: UngroupSVG
});


/***/ }),

/***/ "./packages/editor/build-module/components/convert-to-group-buttons/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/editor/build-module/components/convert-to-group-buttons/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _convert_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert-button */ "./packages/editor/build-module/components/convert-to-group-buttons/convert-button.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ConvertToGroupButtons(_ref) {
  var clientIds = _ref.clientIds;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["__experimentalBlockSettingsMenuPluginsExtension"], null, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_convert_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clientIds: clientIds,
      onToggle: onClose
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ConvertToGroupButtons));


/***/ }),

/***/ "./packages/editor/build-module/components/deprecated.js":
/*!***************************************************************!*\
  !*** ./packages/editor/build-module/components/deprecated.js ***!
  \***************************************************************/
/*! exports provided: ServerSideRender, RichText, Autocomplete, AlignmentToolbar, BlockAlignmentToolbar, BlockControls, BlockEdit, BlockEditorKeyboardShortcuts, BlockFormatControls, BlockIcon, BlockInspector, BlockList, BlockMover, BlockNavigationDropdown, BlockSelectionClearer, BlockSettingsMenu, BlockTitle, BlockToolbar, ColorPalette, ContrastChecker, CopyHandler, DefaultBlockAppender, FontSizePicker, Inserter, InnerBlocks, InspectorAdvancedControls, InspectorControls, PanelColorSettings, PlainText, RichTextShortcut, RichTextToolbarButton, __unstableRichTextInputEvent, MediaPlaceholder, MediaUpload, MediaUploadCheck, MultiBlocksSwitcher, MultiSelectScrollIntoView, NavigableToolbar, ObserveTyping, PreserveScrollInReorder, SkipToSelectedBlock, URLInput, URLInputButton, URLPopover, Warning, WritingFlow, createCustomColorsHOC, getColorClassName, getColorObjectByAttributeValues, getColorObjectByColorValue, getFontSize, getFontSizeClass, withColorContext, withColors, withFontSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return AlignmentToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return BlockAlignmentToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return BlockControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return BlockEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return BlockEditorKeyboardShortcuts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return BlockFormatControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return BlockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return BlockInspector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockList", function() { return BlockList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMover", function() { return BlockMover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return BlockNavigationDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return BlockSelectionClearer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return BlockSettingsMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return BlockTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return BlockToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return ColorPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return ContrastChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return CopyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return DefaultBlockAppender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return FontSizePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inserter", function() { return Inserter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return InnerBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return InspectorAdvancedControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return InspectorControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return PanelColorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainText", function() { return PlainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return RichTextShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return RichTextToolbarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return __unstableRichTextInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return MediaPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return MediaUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return MediaUploadCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiBlocksSwitcher", function() { return MultiBlocksSwitcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return MultiSelectScrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return NavigableToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return ObserveTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return PreserveScrollInReorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return SkipToSelectedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLInput", function() { return URLInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return URLInputButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLPopover", function() { return URLPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return WritingFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return createCustomColorsHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return getColorClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return getColorObjectByAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return getColorObjectByColorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontSize", function() { return getFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return getFontSizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withColorContext", function() { return withColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withColors", function() { return withColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return withFontSizes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default.a; });


// Block Creation Components

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped) {
  var staticsToHoist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var Component = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapped, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(function (staticName) {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return function () {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return func.apply(void 0, arguments);
  };
}

var RichText = deprecateComponent('RichText', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].isEmpty);

var Autocomplete = deprecateComponent('Autocomplete', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["Autocomplete"]);
var AlignmentToolbar = deprecateComponent('AlignmentToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"]);
var BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockAlignmentToolbar"]);
var BlockControls = deprecateComponent('BlockControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], ['Slot']);
var BlockEdit = deprecateComponent('BlockEdit', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockEdit"]);
var BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockEditorKeyboardShortcuts"]);
var BlockFormatControls = deprecateComponent('BlockFormatControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockFormatControls"], ['Slot']);
var BlockIcon = deprecateComponent('BlockIcon', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockIcon"]);
var BlockInspector = deprecateComponent('BlockInspector', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockInspector"]);
var BlockList = deprecateComponent('BlockList', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockList"]);
var BlockMover = deprecateComponent('BlockMover', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockMover"]);
var BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockNavigationDropdown"]);
var BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockSelectionClearer"]);
var BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockSettingsMenu"]);
var BlockTitle = deprecateComponent('BlockTitle', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockTitle"]);
var BlockToolbar = deprecateComponent('BlockToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockToolbar"]);
var ColorPalette = deprecateComponent('ColorPalette', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"]);
var ContrastChecker = deprecateComponent('ContrastChecker', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ContrastChecker"]);
var CopyHandler = deprecateComponent('CopyHandler', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["CopyHandler"]);
var DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["DefaultBlockAppender"]);
var FontSizePicker = deprecateComponent('FontSizePicker', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["FontSizePicker"]);
var Inserter = deprecateComponent('Inserter', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["Inserter"]);
var InnerBlocks = deprecateComponent('InnerBlocks', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
var InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorAdvancedControls"], ['Slot']);
var InspectorControls = deprecateComponent('InspectorControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], ['Slot']);
var PanelColorSettings = deprecateComponent('PanelColorSettings', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"]);
var PlainText = deprecateComponent('PlainText', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"]);
var RichTextShortcut = deprecateComponent('RichTextShortcut', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextShortcut"]);
var RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"]);
var __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__unstableRichTextInputEvent"]);
var MediaPlaceholder = deprecateComponent('MediaPlaceholder', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaPlaceholder"]);
var MediaUpload = deprecateComponent('MediaUpload', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"]);
var MediaUploadCheck = deprecateComponent('MediaUploadCheck', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"]);
var MultiBlocksSwitcher = deprecateComponent('MultiBlocksSwitcher', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MultiBlocksSwitcher"]);
var MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MultiSelectScrollIntoView"]);
var NavigableToolbar = deprecateComponent('NavigableToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["NavigableToolbar"]);
var ObserveTyping = deprecateComponent('ObserveTyping', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ObserveTyping"]);
var PreserveScrollInReorder = deprecateComponent('PreserveScrollInReorder', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PreserveScrollInReorder"]);
var SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["SkipToSelectedBlock"]);
var URLInput = deprecateComponent('URLInput', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInput"]);
var URLInputButton = deprecateComponent('URLInputButton', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"]);
var URLPopover = deprecateComponent('URLPopover', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLPopover"]);
var Warning = deprecateComponent('Warning', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["Warning"]);
var WritingFlow = deprecateComponent('WritingFlow', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["WritingFlow"]);
var createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["createCustomColorsHOC"]);
var getColorClassName = deprecateFunction('getColorClassName', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"]);
var getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorObjectByAttributeValues"]);
var getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorObjectByColorValue"]);
var getFontSize = deprecateFunction('getFontSize', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getFontSize"]);
var getFontSizeClass = deprecateFunction('getFontSizeClass', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getFontSizeClass"]);
var withColorContext = deprecateFunction('withColorContext', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColorContext"]);
var withColors = deprecateFunction('withColors', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"]);
var withFontSizes = deprecateFunction('withFontSizes', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withFontSizes"]);


/***/ }),

/***/ "./packages/editor/build-module/components/document-outline/check.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/document-outline/check.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function DocumentOutlineCheck(_ref) {
  var blocks = _ref.blocks,
      children = _ref.children;
  var headings = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(blocks, function (block) {
    return block.name === 'core/heading';
  });

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  return {
    blocks: select('core/block-editor').getBlocks()
  };
})(DocumentOutlineCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/document-outline/index.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/document-outline/index.js ***!
  \***************************************************************************/
/*! exports provided: DocumentOutline, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return DocumentOutline; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item */ "./packages/editor/build-module/components/document-outline/item.js");




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
 * Module constants
 */

var emptyHeadingContent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("em", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(Empty heading)'));
var incorrectLevelContent = [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", {
  key: "incorrect-break"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("em", {
  key: "incorrect-message"
}, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(Incorrect heading level)'))];
var singleH1Headings = [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", {
  key: "incorrect-break-h1"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("em", {
  key: "incorrect-message-h1"
}, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(Your theme may already use a H1 for the post title)'))];
var multipleH1Headings = [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", {
  key: "incorrect-break-multiple-h1"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("em", {
  key: "incorrect-message-multiple-h1"
}, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * path    - An array of blocks that are ancestors of the heading starting from a top-level node.
 *           Can be an empty array if the heading is a top-level node (is not nested inside another block).
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 * @param {?Array} path   An array of blocks that are ancestors of the blocks passed as blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

var computeOutlineHeadings = function computeOutlineHeadings() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(blocks, function () {
    var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (block.name === 'core/heading') {
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, block, {
        path: path,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      });
    }

    return computeOutlineHeadings(block.innerBlocks, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(path), [block]));
  });
};

var isEmptyHeading = function isEmptyHeading(heading) {
  return !heading.attributes.content || heading.attributes.content.length === 0;
};

var DocumentOutline = function DocumentOutline(_ref) {
  var _ref$blocks = _ref.blocks,
      blocks = _ref$blocks === void 0 ? [] : _ref$blocks,
      title = _ref.title,
      onSelect = _ref.onSelect,
      isTitleSupported = _ref.isTitleSupported,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  var headings = computeOutlineHeadings(blocks);

  if (headings.length < 1) {
    return null;
  }

  var prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  var titleNode = document.querySelector('.editor-post-title__input');
  var hasTitle = isTitleSupported && title && titleNode;
  var countByLevel = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"])(headings, 'level');
  var hasMultipleH1 = countByLevel[1] > 1;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "document-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", null, hasTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
    level: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title'),
    isValid: true,
    onSelect: onSelect,
    href: "#".concat(titleNode.id),
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map(function (item, index) {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    var isIncorrectLevel = item.level > prevHeadingLevel + 1;
    var isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      level: "H".concat(item.level),
      isValid: isValid,
      path: item.path,
      isDisabled: hasOutlineItemsDisabled,
      href: "#block-".concat(item.clientId),
      onSelect: onSelect
    }, item.isEmpty ? emptyHeadingContent : Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_7__["getTextContent"])(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_7__["create"])({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getBlocks = _select.getBlocks;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(postType, ['supports', 'title'], false)
  };
}))(DocumentOutline));


/***/ }),

/***/ "./packages/editor/build-module/components/document-outline/item.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/document-outline/item.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var TableOfContentsItem = function TableOfContentsItem(_ref) {
  var children = _ref.children,
      isValid = _ref.isValid,
      level = _ref.level,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? [] : _ref$path,
      href = _ref.href,
      onSelect = _ref.onSelect;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('document-outline__item', "is-".concat(level.toLowerCase()), {
      'is-invalid': !isValid
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "document-outline__emdash",
    "aria-hidden": "true"
  }), // path is an array of nodes that are ancestors of the heading starting in the top level node.
  // This mapping renders each ancestor to make it easier for the user to know where the headings are nested.
  path.map(function (_ref2, index) {
    var clientId = _ref2.clientId;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
      key: index,
      className: "document-outline__level"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], {
      clientId: clientId
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
    className: "document-outline__level"
  }, level), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "document-outline__item-content"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableOfContentsItem);


/***/ }),

/***/ "./packages/editor/build-module/components/editor-history/redo.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/editor-history/redo.js ***!
  \************************************************************************/
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
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function EditorHistoryRedo(_ref) {
  var hasRedo = _ref.hasRedo,
      redo = _ref.redo;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    icon: "redo",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Redo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__["displayShortcut"].primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    hasRedo: select('core/editor').hasEditorRedo()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    redo: dispatch('core/editor').redo
  };
})])(EditorHistoryRedo));


/***/ }),

/***/ "./packages/editor/build-module/components/editor-history/undo.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/editor-history/undo.js ***!
  \************************************************************************/
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
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function EditorHistoryUndo(_ref) {
  var hasUndo = _ref.hasUndo,
      undo = _ref.undo;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    icon: "undo",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Undo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    hasUndo: select('core/editor').hasEditorUndo()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    undo: dispatch('core/editor').undo
  };
})])(EditorHistoryUndo));


/***/ }),

/***/ "./packages/editor/build-module/components/editor-notices/index.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/editor-notices/index.js ***!
  \*************************************************************************/
/*! exports provided: EditorNotices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return EditorNotices; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _template_validation_notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../template-validation-notice */ "./packages/editor/build-module/components/template-validation-notice/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function EditorNotices(_ref) {
  var notices = _ref.notices,
      onRemove = _ref.onRemove;
  var dismissibleNotices = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(notices, {
    isDismissible: true,
    type: 'default'
  });
  var nonDismissibleNotices = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(notices, {
    isDismissible: false,
    type: 'default'
  });
  var snackbarNotices = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(notices, {
    type: 'snackbar'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["NoticeList"], {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["NoticeList"], {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_template_validation_notice__WEBPACK_IMPORTED_MODULE_5__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SnackbarList"], {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: onRemove
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    notices: select('core/notices').getNotices()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onRemove: dispatch('core/notices').removeNotice
  };
})])(EditorNotices));


/***/ }),

/***/ "./packages/editor/build-module/components/error-boundary/index.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/error-boundary/index.js ***!
  \*************************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);








/**
 * WordPress dependencies
 */






var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ErrorBoundary, _Component);

  function ErrorBoundary() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary).apply(this, arguments));
    _this.reboot = _this.reboot.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.getContent = _this.getContent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "reboot",
    value: function reboot() {
      this.props.onError();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      try {
        // While `select` in a component is generally discouraged, it is
        // used here because it (a) reduces the chance of data loss in the
        // case of additional errors by performing a direct retrieval and
        // (b) avoids the performance cost associated with unnecessary
        // content serialization throughout the lifetime of a non-erroring
        // application.
        return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/editor').getEditedPostContent();
      } catch (error) {}
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (!error) {
        return this.props.children;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["Warning"], {
        className: "editor-error-boundary",
        actions: [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "recovery",
          onClick: this.reboot,
          isLarge: true
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Attempt Recovery')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ClipboardButton"], {
          key: "copy-post",
          text: this.getContent,
          isLarge: true
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Copy Post Text')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ClipboardButton"], {
          key: "copy-error",
          text: error.stack,
          isLarge: true
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Copy Error'))]
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('The editor has encountered an unexpected error.'));
    }
  }]);

  return ErrorBoundary;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);


/***/ }),

/***/ "./packages/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js":
/*!********************************************************************************************!*\
  !*** ./packages/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js ***!
  \********************************************************************************************/
/*! exports provided: SaveShortcut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveShortcut", function() { return SaveShortcut; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */




function SaveShortcut(_ref) {
  var onSave = _ref.onSave;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["KeyboardShortcuts"], {
    bindGlobal: true,
    shortcuts: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__["rawShortcut"].primary('s'), function (event) {
      event.preventDefault();
      onSave();
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostDirty = _select.isEditedPostDirty;

  return {
    isDirty: isEditedPostDirty()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch, ownProps, _ref3) {
  var select = _ref3.select;

  var _dispatch = dispatch('core/editor'),
      savePost = _dispatch.savePost;

  return {
    onSave: function onSave() {
      // TODO: This should be handled in the `savePost` effect in
      // considering `isSaveable`. See note on `isEditedPostSaveable`
      // selector about dirtiness and meta-boxes.
      //
      // See: `isEditedPostSaveable`
      var _select2 = select('core/editor'),
          isEditedPostDirty = _select2.isEditedPostDirty;

      if (!isEditedPostDirty()) {
        return;
      }

      savePost();
    }
  };
})])(SaveShortcut));


/***/ }),

/***/ "./packages/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js":
/*!****************************************************************************************************!*\
  !*** ./packages/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextEditorGlobalKeyboardShortcuts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _save_shortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-shortcut */ "./packages/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js");


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_save_shortcut__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}


/***/ }),

/***/ "./packages/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js":
/*!******************************************************************************************************!*\
  !*** ./packages/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js ***!
  \******************************************************************************************************/
/*! exports provided: default, EditorGlobalKeyboardShortcuts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorGlobalKeyboardShortcuts", function() { return EditorGlobalKeyboardShortcuts; });
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
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _save_shortcut__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./save-shortcut */ "./packages/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js");









/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var VisualEditorGlobalKeyboardShortcuts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(VisualEditorGlobalKeyboardShortcuts, _Component);

  function VisualEditorGlobalKeyboardShortcuts() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VisualEditorGlobalKeyboardShortcuts);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(VisualEditorGlobalKeyboardShortcuts).apply(this, arguments));
    _this.undoOrRedo = _this.undoOrRedo.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VisualEditorGlobalKeyboardShortcuts, [{
    key: "undoOrRedo",
    value: function undoOrRedo(event) {
      var _this$props = this.props,
          onRedo = _this$props.onRedo,
          onUndo = _this$props.onUndo;

      if (event.shiftKey) {
        onRedo();
      } else {
        onUndo();
      }

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["BlockEditorKeyboardShortcuts"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["KeyboardShortcuts"], {
        shortcuts: (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_10__["rawShortcut"].primary('z'), this.undoOrRedo), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_10__["rawShortcut"].primaryShift('z'), this.undoOrRedo), _ref)
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_save_shortcut__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }
  }]);

  return VisualEditorGlobalKeyboardShortcuts;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var EnhancedVisualEditorGlobalKeyboardShortcuts = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      redo = _dispatch.redo,
      undo = _dispatch.undo;

  return {
    onRedo: redo,
    onUndo: undo
  };
})(VisualEditorGlobalKeyboardShortcuts);
/* harmony default export */ __webpack_exports__["default"] = (EnhancedVisualEditorGlobalKeyboardShortcuts);
function EditorGlobalKeyboardShortcuts() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_11___default()('EditorGlobalKeyboardShortcuts', {
    alternative: 'VisualEditorGlobalKeyboardShortcuts',
    plugin: 'Gutenberg'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(EnhancedVisualEditorGlobalKeyboardShortcuts, null);
}


/***/ }),

/***/ "./packages/editor/build-module/components/index.js":
/*!**********************************************************!*\
  !*** ./packages/editor/build-module/components/index.js ***!
  \**********************************************************/
/*! exports provided: AutosaveMonitor, DocumentOutline, DocumentOutlineCheck, VisualEditorGlobalKeyboardShortcuts, EditorGlobalKeyboardShortcuts, TextEditorGlobalKeyboardShortcuts, EditorHistoryRedo, EditorHistoryUndo, EditorNotices, ErrorBoundary, LocalAutosaveMonitor, PageAttributesCheck, PageAttributesOrder, PageAttributesParent, PageTemplate, PostAuthor, PostAuthorCheck, PostComments, PostExcerpt, PostExcerptCheck, PostFeaturedImage, PostFeaturedImageCheck, PostFormat, PostFormatCheck, PostLastRevision, PostLastRevisionCheck, PostLockedModal, PostPendingStatus, PostPendingStatusCheck, PostPingbacks, PostPreviewButton, PostPublishButton, PostPublishButtonLabel, PostPublishPanel, PostSavedState, PostSchedule, PostScheduleCheck, PostScheduleLabel, PostSticky, PostStickyCheck, PostSwitchToDraftButton, PostTaxonomies, PostTaxonomiesCheck, PostTextEditor, PostTitle, PostTrash, PostTrashCheck, PostTypeSupportCheck, PostVisibility, PostVisibilityLabel, PostVisibilityCheck, TableOfContents, UnsavedChangesWarning, WordCount, EditorProvider, blockAutocompleter, userAutocompleter, ServerSideRender, RichText, Autocomplete, AlignmentToolbar, BlockAlignmentToolbar, BlockControls, BlockEdit, BlockEditorKeyboardShortcuts, BlockFormatControls, BlockIcon, BlockInspector, BlockList, BlockMover, BlockNavigationDropdown, BlockSelectionClearer, BlockSettingsMenu, BlockTitle, BlockToolbar, ColorPalette, ContrastChecker, CopyHandler, DefaultBlockAppender, FontSizePicker, Inserter, InnerBlocks, InspectorAdvancedControls, InspectorControls, PanelColorSettings, PlainText, RichTextShortcut, RichTextToolbarButton, __unstableRichTextInputEvent, MediaPlaceholder, MediaUpload, MediaUploadCheck, MultiBlocksSwitcher, MultiSelectScrollIntoView, NavigableToolbar, ObserveTyping, PreserveScrollInReorder, SkipToSelectedBlock, URLInput, URLInputButton, URLPopover, Warning, WritingFlow, createCustomColorsHOC, getColorClassName, getColorObjectByAttributeValues, getColorObjectByColorValue, getFontSize, getFontSizeClass, withColorContext, withColors, withFontSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocompleters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocompleters */ "./packages/editor/build-module/components/autocompleters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockAutocompleter", function() { return _autocompleters__WEBPACK_IMPORTED_MODULE_0__["blockAutocompleter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return _autocompleters__WEBPACK_IMPORTED_MODULE_0__["userAutocompleter"]; });

/* harmony import */ var _autosave_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autosave-monitor */ "./packages/editor/build-module/components/autosave-monitor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return _autosave_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _document_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-outline */ "./packages/editor/build-module/components/document-outline/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return _document_outline__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _document_outline_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-outline/check */ "./packages/editor/build-module/components/document-outline/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentOutlineCheck", function() { return _document_outline_check__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _global_keyboard_shortcuts_visual_editor_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-keyboard-shortcuts/visual-editor-shortcuts */ "./packages/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualEditorGlobalKeyboardShortcuts", function() { return _global_keyboard_shortcuts_visual_editor_shortcuts__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorGlobalKeyboardShortcuts", function() { return _global_keyboard_shortcuts_visual_editor_shortcuts__WEBPACK_IMPORTED_MODULE_4__["EditorGlobalKeyboardShortcuts"]; });

/* harmony import */ var _global_keyboard_shortcuts_text_editor_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-keyboard-shortcuts/text-editor-shortcuts */ "./packages/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEditorGlobalKeyboardShortcuts", function() { return _global_keyboard_shortcuts_text_editor_shortcuts__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _editor_history_redo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-history/redo */ "./packages/editor/build-module/components/editor-history/redo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorHistoryRedo", function() { return _editor_history_redo__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _editor_history_undo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-history/undo */ "./packages/editor/build-module/components/editor-history/undo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorHistoryUndo", function() { return _editor_history_undo__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _editor_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-notices */ "./packages/editor/build-module/components/editor-notices/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return _editor_notices__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-boundary */ "./packages/editor/build-module/components/error-boundary/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _error_boundary__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _local_autosave_monitor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./local-autosave-monitor */ "./packages/editor/build-module/components/local-autosave-monitor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalAutosaveMonitor", function() { return _local_autosave_monitor__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _page_attributes_check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-attributes/check */ "./packages/editor/build-module/components/page-attributes/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return _page_attributes_check__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _page_attributes_order__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-attributes/order */ "./packages/editor/build-module/components/page-attributes/order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return _page_attributes_order__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _page_attributes_parent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-attributes/parent */ "./packages/editor/build-module/components/page-attributes/parent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return _page_attributes_parent__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _page_attributes_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-attributes/template */ "./packages/editor/build-module/components/page-attributes/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return _page_attributes_template__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _post_author__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post-author */ "./packages/editor/build-module/components/post-author/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return _post_author__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _post_author_check__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post-author/check */ "./packages/editor/build-module/components/post-author/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return _post_author_check__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _post_comments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post-comments */ "./packages/editor/build-module/components/post-comments/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostComments", function() { return _post_comments__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _post_excerpt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-excerpt */ "./packages/editor/build-module/components/post-excerpt/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExcerpt", function() { return _post_excerpt__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _post_excerpt_check__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post-excerpt/check */ "./packages/editor/build-module/components/post-excerpt/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExcerptCheck", function() { return _post_excerpt_check__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _post_featured_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post-featured-image */ "./packages/editor/build-module/components/post-featured-image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFeaturedImage", function() { return _post_featured_image__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _post_featured_image_check__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post-featured-image/check */ "./packages/editor/build-module/components/post-featured-image/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return _post_featured_image_check__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post-format */ "./packages/editor/build-module/components/post-format/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFormat", function() { return _post_format__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _post_format_check__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post-format/check */ "./packages/editor/build-module/components/post-format/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFormatCheck", function() { return _post_format_check__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _post_last_revision__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post-last-revision */ "./packages/editor/build-module/components/post-last-revision/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLastRevision", function() { return _post_last_revision__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _post_last_revision_check__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./post-last-revision/check */ "./packages/editor/build-module/components/post-last-revision/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return _post_last_revision_check__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _post_locked_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./post-locked-modal */ "./packages/editor/build-module/components/post-locked-modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLockedModal", function() { return _post_locked_modal__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _post_pending_status__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post-pending-status */ "./packages/editor/build-module/components/post-pending-status/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return _post_pending_status__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _post_pending_status_check__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./post-pending-status/check */ "./packages/editor/build-module/components/post-pending-status/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return _post_pending_status_check__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _post_pingbacks__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./post-pingbacks */ "./packages/editor/build-module/components/post-pingbacks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPingbacks", function() { return _post_pingbacks__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _post_preview_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./post-preview-button */ "./packages/editor/build-module/components/post-preview-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return _post_preview_button__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _post_publish_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./post-publish-button */ "./packages/editor/build-module/components/post-publish-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return _post_publish_button__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _post_publish_button_label__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./post-publish-button/label */ "./packages/editor/build-module/components/post-publish-button/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishButtonLabel", function() { return _post_publish_button_label__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _post_publish_panel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./post-publish-panel */ "./packages/editor/build-module/components/post-publish-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return _post_publish_panel__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _post_saved_state__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./post-saved-state */ "./packages/editor/build-module/components/post-saved-state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return _post_saved_state__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./post-schedule */ "./packages/editor/build-module/components/post-schedule/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return _post_schedule__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _post_schedule_check__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./post-schedule/check */ "./packages/editor/build-module/components/post-schedule/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return _post_schedule_check__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./post-schedule/label */ "./packages/editor/build-module/components/post-schedule/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return _post_schedule_label__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _post_sticky__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./post-sticky */ "./packages/editor/build-module/components/post-sticky/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSticky", function() { return _post_sticky__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _post_sticky_check__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./post-sticky/check */ "./packages/editor/build-module/components/post-sticky/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return _post_sticky_check__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./post-switch-to-draft-button */ "./packages/editor/build-module/components/post-switch-to-draft-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSwitchToDraftButton", function() { return _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _post_taxonomies__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./post-taxonomies */ "./packages/editor/build-module/components/post-taxonomies/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return _post_taxonomies__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _post_taxonomies_check__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./post-taxonomies/check */ "./packages/editor/build-module/components/post-taxonomies/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return _post_taxonomies_check__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _post_text_editor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./post-text-editor */ "./packages/editor/build-module/components/post-text-editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return _post_text_editor__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _post_title__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./post-title */ "./packages/editor/build-module/components/post-title/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTitle", function() { return _post_title__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _post_trash__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./post-trash */ "./packages/editor/build-module/components/post-trash/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTrash", function() { return _post_trash__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _post_trash_check__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./post-trash/check */ "./packages/editor/build-module/components/post-trash/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTrashCheck", function() { return _post_trash_check__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return _post_type_support_check__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./post-visibility */ "./packages/editor/build-module/components/post-visibility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return _post_visibility__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _post_visibility_label__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./post-visibility/label */ "./packages/editor/build-module/components/post-visibility/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibilityLabel", function() { return _post_visibility_label__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _post_visibility_check__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./post-visibility/check */ "./packages/editor/build-module/components/post-visibility/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return _post_visibility_check__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _table_of_contents__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./table-of-contents */ "./packages/editor/build-module/components/table-of-contents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return _table_of_contents__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./unsaved-changes-warning */ "./packages/editor/build-module/components/unsaved-changes-warning/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesWarning", function() { return _unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _word_count__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./word-count */ "./packages/editor/build-module/components/word-count/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCount", function() { return _word_count__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./provider */ "./packages/editor/build-module/components/provider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return _provider__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./deprecated */ "./packages/editor/build-module/components/deprecated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["ServerSideRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["Autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["AlignmentToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockAlignmentToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockEditorKeyboardShortcuts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockFormatControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockInspector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockList", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockMover", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockMover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockNavigationDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockSelectionClearer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockSettingsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["BlockToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["ColorPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["ContrastChecker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["CopyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["DefaultBlockAppender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["FontSizePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inserter", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["Inserter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["InnerBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["InspectorAdvancedControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["InspectorControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["PanelColorSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainText", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["PlainText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["RichTextShortcut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["RichTextToolbarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["__unstableRichTextInputEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["MediaPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["MediaUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["MediaUploadCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiBlocksSwitcher", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["MultiBlocksSwitcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["MultiSelectScrollIntoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["NavigableToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["ObserveTyping"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["PreserveScrollInReorder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["SkipToSelectedBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLInput", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["URLInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["URLInputButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLPopover", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["URLPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["Warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["WritingFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["createCustomColorsHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["getColorClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["getColorObjectByAttributeValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["getColorObjectByColorValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontSize", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["getFontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["getFontSizeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withColorContext", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["withColorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withColors", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["withColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_55__["withFontSizes"]; });

// Block Creation Components
 // Post Related Components





















































 // State Related Components





/***/ }),

/***/ "./packages/editor/build-module/components/inserter-menu-downloadable-blocks-panel/index.js":
/*!**************************************************************************************************!*\
  !*** ./packages/editor/build-module/components/inserter-menu-downloadable-blocks-panel/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-directory */ "@wordpress/block-directory");
/* harmony import */ var _wordpress_block_directory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_directory__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function InserterMenuDownloadableBlocksPanel() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      debouncedFilterValue = _useState2[0],
      setFilterValue = _useState2[1];

  var debouncedSetFilterValue = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(setFilterValue, 400);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__experimentalInserterMenuExtension"], null, function (_ref) {
    var onSelect = _ref.onSelect,
        onHover = _ref.onHover,
        filterValue = _ref.filterValue,
        hasItems = _ref.hasItems;

    if (!hasItems) {
      return null;
    }

    if (debouncedFilterValue !== filterValue) {
      debouncedSetFilterValue(filterValue);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_directory__WEBPACK_IMPORTED_MODULE_4__["DownloadableBlocksPanel"], {
      onSelect: onSelect,
      onHover: onHover,
      filterValue: debouncedFilterValue,
      isWaiting: filterValue !== debouncedFilterValue
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (InserterMenuDownloadableBlocksPanel);


/***/ }),

/***/ "./packages/editor/build-module/components/local-autosave-monitor/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/editor/build-module/components/local-autosave-monitor/index.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autosave_monitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autosave-monitor */ "./packages/editor/build-module/components/autosave-monitor/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


var requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

var hasSessionStorageSupport = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["once"])(function () {
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    return true;
  } catch (error) {
    return false;
  }
});
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string} postId  Post ID.
 * @return {string}        sessionStorage key
 */

function postKey(postId) {
  return "wp-autosave-block-editor-post-".concat(postId);
}
/**
 * Custom hook which returns a callback function to be invoked when a local
 * autosave should occur.
 *
 * @return {Function} Callback function.
 */


function useAutosaveCallback() {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      getEditedPostAttribute: select('core/editor').getEditedPostAttribute
    };
  }),
      postId = _useSelect.postId,
      getEditedPostAttribute = _useSelect.getEditedPostAttribute;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var saveToSessionStorage = function saveToSessionStorage() {
      window.sessionStorage.setItem(postKey(postId), JSON.stringify({
        post_title: getEditedPostAttribute('title'),
        content: getEditedPostAttribute('content'),
        excerpt: getEditedPostAttribute('excerpt')
      }));
    };

    requestIdleCallback(saveToSessionStorage);
  }, [postId]);
}
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */


function useAutosaveNotice() {
  var _useSelect2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      getEditedPostAttribute: select('core/editor').getEditedPostAttribute
    };
  }),
      postId = _useSelect2.postId,
      getEditedPostAttribute = _useSelect2.getEditedPostAttribute;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core/notices'),
      createWarningNotice = _useDispatch.createWarningNotice,
      removeNotice = _useDispatch.removeNotice;

  var _useDispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core/editor'),
      editPost = _useDispatch2.editPost,
      resetEditorBlocks = _useDispatch2.resetEditorBlocks;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var autosave = window.sessionStorage.getItem(postKey(postId));

    if (!autosave) {
      return;
    }

    try {
      autosave = JSON.parse(autosave);
    } catch (error) {
      // Not usable if it can't be parsed.
      return;
    }

    var _autosave = autosave,
        title = _autosave.post_title,
        content = _autosave.content,
        excerpt = _autosave.excerpt;
    var edits = {
      title: title,
      content: content,
      excerpt: excerpt
    }; // Only display a notice if there is a difference between what has been
    // saved and that which is stored in sessionStorage.

    var hasDifference = Object.keys(edits).some(function (key) {
      return edits[key] !== getEditedPostAttribute(key);
    });

    if (!hasDifference) {
      // If there is no difference, it can be safely ejected from storage.
      window.sessionStorage.removeItem(postKey(postId));
      return;
    }

    var noticeId = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])('wpEditorAutosaveRestore');
    createWarningNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('The backup of this post in your browser is different from the version below.'), {
      id: noticeId,
      actions: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Restore the backup'),
        onClick: function onClick() {
          editPost(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(edits, ['content']));
          resetEditorBlocks(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["parse"])(edits.content));
          removeNotice(noticeId);
        }
      }]
    });
  }, [postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  var _useSelect3 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      isDirty: select('core/editor').isEditedPostDirty()
    };
  }),
      postId = _useSelect3.postId,
      isDirty = _useSelect3.isDirty;

  var lastIsDirty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isDirty);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (lastIsDirty.current && !isDirty) {
      window.sessionStorage.removeItem(postKey(postId));
    }

    lastIsDirty.current = isDirty;
  }, [isDirty]);
}

function LocalAutosaveMonitor() {
  var autosave = useAutosaveCallback();
  useAutosaveNotice();
  useAutosavePurge();

  var _useSelect4 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return {
      localAutosaveInterval: select('core/editor').getEditorSettings().__experimentalLocalAutosaveInterval
    };
  }),
      localAutosaveInterval = _useSelect4.localAutosaveInterval;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_autosave_monitor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    interval: localAutosaveInterval,
    autosave: autosave,
    shouldThrottle: true
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["ifCondition"])(hasSessionStorageSupport)(LocalAutosaveMonitor));


/***/ }),

/***/ "./packages/editor/build-module/components/page-attributes/check.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/page-attributes/check.js ***!
  \**************************************************************************/
/*! exports provided: PageAttributesCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return PageAttributesCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function PageAttributesCheck(_ref) {
  var availableTemplates = _ref.availableTemplates,
      postType = _ref.postType,
      children = _ref.children;
  var supportsPageAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(availableTemplates)) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    availableTemplates: availableTemplates
  };
})(PageAttributesCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/page-attributes/order.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/page-attributes/order.js ***!
  \**************************************************************************/
/*! exports provided: PageAttributesOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return PageAttributesOrder; });
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
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var PageAttributesOrder = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withState"])({
  orderInput: null
})(function (_ref) {
  var onUpdateOrder = _ref.onUpdateOrder,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 0 : _ref$order,
      orderInput = _ref.orderInput,
      setState = _ref.setState;

  var setUpdatedOrder = function setUpdatedOrder(value) {
    setState({
      orderInput: value
    });
    var newOrder = Number(value);

    if (Number.isInteger(newOrder) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  var value = orderInput === null ? order : orderInput;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    className: "editor-page-attributes__order",
    type: "number",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: function onBlur() {
      setState({
        orderInput: null
      });
    }
  });
});

function PageAttributesOrderWithChecks(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supportKeys: "page-attributes"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PageAttributesOrder, props));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    onUpdateOrder: function onUpdateOrder(order) {
      dispatch('core/editor').editPost({
        menu_order: order
      });
    }
  };
})])(PageAttributesOrderWithChecks));


/***/ }),

/***/ "./packages/editor/build-module/components/page-attributes/parent.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/page-attributes/parent.js ***!
  \***************************************************************************/
/*! exports provided: PageAttributesParent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return PageAttributesParent; });
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/terms */ "./packages/editor/build-module/utils/terms.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PageAttributesParent(_ref) {
  var parent = _ref.parent,
      postType = _ref.postType,
      items = _ref.items,
      onUpdateParent = _ref.onUpdateParent;
  var isHierarchical = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['hierarchical'], false);
  var parentPageLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels', 'parent_item_colon']);
  var pageItems = items || [];

  if (!isHierarchical || !parentPageLabel || !pageItems.length) {
    return null;
  }

  var pagesTree = Object(_utils_terms__WEBPACK_IMPORTED_MODULE_6__["buildTermsTree"])(pageItems.map(function (item) {
    return {
      id: item.id,
      parent: item.parent,
      name: item.title.raw ? item.title.raw : "#".concat(item.id, " (").concat(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('no title'), ")")
    };
  }));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TreeSelect"], {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    noOptionLabel: "(".concat(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('no parent'), ")"),
    tree: pagesTree,
    selectedId: parent,
    onChange: onUpdateParent
  });
}
var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType,
      getEntityRecords = _select.getEntityRecords;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var postTypeSlug = getEditedPostAttribute('type');
  var postType = getPostType(postTypeSlug);
  var postId = getCurrentPostId();
  var isHierarchical = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['hierarchical'], false);
  var query = {
    per_page: -1,
    exclude: postId,
    parent_exclude: postId,
    orderby: 'menu_order',
    order: 'asc'
  };
  return {
    parent: getEditedPostAttribute('parent'),
    items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
    postType: postType
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateParent: function onUpdateParent(parent) {
      editPost({
        parent: parent || 0
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([applyWithSelect, applyWithDispatch])(PageAttributesParent));


/***/ }),

/***/ "./packages/editor/build-module/components/page-attributes/template.js":
/*!*****************************************************************************!*\
  !*** ./packages/editor/build-module/components/page-attributes/template.js ***!
  \*****************************************************************************/
/*! exports provided: PageTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return PageTemplate; });
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function PageTemplate(_ref) {
  var availableTemplates = _ref.availableTemplates,
      selectedTemplate = _ref.selectedTemplate,
      onUpdate = _ref.onUpdate;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(availableTemplates)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Template:'),
    value: selectedTemplate,
    onChange: onUpdate,
    className: "editor-page-attributes__template",
    options: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(availableTemplates, function (templateName, templateSlug) {
      return {
        value: templateSlug,
        label: templateName
      };
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    selectedTemplate: getEditedPostAttribute('template'),
    availableTemplates: availableTemplates
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    onUpdate: function onUpdate(templateSlug) {
      dispatch('core/editor').editPost({
        template: templateSlug || ''
      });
    }
  };
}))(PageTemplate));


/***/ }),

/***/ "./packages/editor/build-module/components/post-author/check.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-author/check.js ***!
  \**********************************************************************/
/*! exports provided: PostAuthorCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return PostAuthorCheck; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostAuthorCheck(_ref) {
  var hasAssignAuthorAction = _ref.hasAssignAuthorAction,
      authors = _ref.authors,
      children = _ref.children;

  if (!hasAssignAuthorAction || authors.length < 2) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_4__["default"], {
    supportKeys: "author"
  }, children);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withInstanceId"]])(PostAuthorCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-author/index.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-author/index.js ***!
  \**********************************************************************/
/*! exports provided: PostAuthor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return PostAuthor; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-author/check.js");








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var PostAuthor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostAuthor, _Component);

  function PostAuthor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostAuthor);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostAuthor).apply(this, arguments));
    _this.setAuthorId = _this.setAuthorId.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostAuthor, [{
    key: "setAuthorId",
    value: function setAuthorId(event) {
      var onUpdateAuthor = this.props.onUpdateAuthor;
      var value = event.target.value;
      onUpdateAuthor(Number(value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          postAuthor = _this$props.postAuthor,
          instanceId = _this$props.instanceId,
          authors = _this$props.authors;
      var selectId = 'post-author-selector-' + instanceId; // Disable reason: A select with an onchange throws a warning

      /* eslint-disable jsx-a11y/no-onchange */

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_11__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        htmlFor: selectId
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Author')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("select", {
        id: selectId,
        value: postAuthor,
        onChange: this.setAuthorId,
        className: "editor-post-author__select"
      }, authors.map(function (author) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("option", {
          key: author.id,
          value: author.id
        }, Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_10__["decodeEntities"])(author.name));
      })));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return PostAuthor;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  return {
    postAuthor: select('core/editor').getEditedPostAttribute('author'),
    authors: select('core').getAuthors()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  return {
    onUpdateAuthor: function onUpdateAuthor(author) {
      dispatch('core/editor').editPost({
        author: author
      });
    }
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["withInstanceId"]])(PostAuthor));


/***/ }),

/***/ "./packages/editor/build-module/components/post-comments/index.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-comments/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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



/**
 * WordPress dependencies
 */





function PostComments(_ref) {
  var _ref$commentStatus = _ref.commentStatus,
      commentStatus = _ref$commentStatus === void 0 ? 'open' : _ref$commentStatus,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["commentStatus"]);

  var onToggleComments = function onToggleComments() {
    return props.editPost({
      comment_status: commentStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Allow Comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostComments));


/***/ }),

/***/ "./packages/editor/build-module/components/post-excerpt/check.js":
/*!***********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-excerpt/check.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");



/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "excerpt"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PostExcerptCheck);


/***/ }),

/***/ "./packages/editor/build-module/components/post-excerpt/index.js":
/*!***********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-excerpt/index.js ***!
  \***********************************************************************/
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


/**
 * WordPress dependencies
 */





function PostExcerpt(_ref) {
  var excerpt = _ref.excerpt,
      onUpdateExcerpt = _ref.onUpdateExcerpt;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-excerpt"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: function onChange(value) {
      return onUpdateExcerpt(value);
    },
    value: excerpt
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"], {
    href: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('https://codex.wordpress.org/Excerpt')
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Learn more about manual excerpts')));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    excerpt: select('core/editor').getEditedPostAttribute('excerpt')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onUpdateExcerpt: function onUpdateExcerpt(excerpt) {
      dispatch('core/editor').editPost({
        excerpt: excerpt
      });
    }
  };
})])(PostExcerpt));


/***/ }),

/***/ "./packages/editor/build-module/components/post-featured-image/check.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-featured-image/check.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _theme_support_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-support-check */ "./packages/editor/build-module/components/theme-support-check/index.js");



/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_theme_support_check__WEBPACK_IMPORTED_MODULE_3__["default"], {
    supportKeys: "post-thumbnails"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "thumbnail"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PostFeaturedImageCheck);


/***/ }),

/***/ "./packages/editor/build-module/components/post-featured-image/index.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-featured-image/index.js ***!
  \******************************************************************************/
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-featured-image/check.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

var DEFAULT_FEATURE_IMAGE_LABEL = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Featured Image');

var DEFAULT_SET_FEATURE_IMAGE_LABEL = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Set Featured Image');

var DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image');

function PostFeaturedImage(_ref) {
  var currentPostId = _ref.currentPostId,
      featuredImageId = _ref.featuredImageId,
      onUpdateImage = _ref.onUpdateImage,
      onRemoveImage = _ref.onRemoveImage,
      media = _ref.media,
      postType = _ref.postType;
  var postLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels'], {});
  var instructions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('To edit the featured image, you need permission to upload media.'));
  var mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    var mediaSize = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["has"])(media, ['media_details', 'sizes', mediaSize])) {
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      mediaWidth = media.media_details.width;
      mediaHeight = media.media_details.height;
      mediaSourceUrl = media.source_url;
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_8__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-featured-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], {
    fallback: instructions
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: !featuredImageId ? 'editor-post-featured-image__media-modal' : 'editor-post-featured-image__media-modal',
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !featuredImageId ? null : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit or update the image')
      }, !!featuredImageId && media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ResponsiveWrapper"], {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!featuredImageId && !media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL));
    },
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace Image'));
    }
  })), !!featuredImageId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select('core'),
      getMedia = _select.getMedia,
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId: featuredImageId
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateImage: function onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(applyWithSelect, applyWithDispatch, Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withFilters"])('editor.PostFeaturedImage'))(PostFeaturedImage));


/***/ }),

/***/ "./packages/editor/build-module/components/post-format/check.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-format/check.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostFormatCheck(_ref) {
  var disablePostFormats = _ref.disablePostFormats,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["disablePostFormats"]);

  return !disablePostFormats && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "post-formats"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-format/index.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-format/index.js ***!
  \**********************************************************************/
/*! exports provided: POST_FORMATS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_FORMATS", function() { return POST_FORMATS; });
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
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-format/check.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var POST_FORMATS = [{
  id: 'aside',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Aside')
}, {
  id: 'gallery',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gallery')
}, {
  id: 'link',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Link')
}, {
  id: 'image',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image')
}, {
  id: 'quote',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote')
}, {
  id: 'standard',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Standard')
}, {
  id: 'status',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Status')
}, {
  id: 'video',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Video')
}, {
  id: 'audio',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Audio')
}, {
  id: 'chat',
  caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Chat')
}];

function PostFormat(_ref) {
  var onUpdatePostFormat = _ref.onUpdatePostFormat,
      _ref$postFormat = _ref.postFormat,
      postFormat = _ref$postFormat === void 0 ? 'standard' : _ref$postFormat,
      supportedFormats = _ref.supportedFormats,
      suggestedFormat = _ref.suggestedFormat,
      instanceId = _ref.instanceId;
  var postFormatSelectorId = 'post-format-selector-' + instanceId;
  var formats = POST_FORMATS.filter(function (format) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(supportedFormats, format.id);
  });
  var suggestion = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(formats, function (format) {
    return format.id === suggestedFormat;
  }); // Disable reason: We need to change the value immiediately to show/hide the suggestion if needed

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_6__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-format"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-format__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: postFormatSelectorId
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Post Format')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: postFormat,
    onChange: function onChange(format) {
      return onUpdatePostFormat(format);
    },
    id: postFormatSelectorId,
    options: formats.map(function (format) {
      return {
        label: format.caption,
        value: format.id
      };
    })
  })), suggestion && suggestion.id !== postFormat && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-format__suggestion"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Suggestion:'), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestion.id);
    }
  }, suggestion.caption))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var postFormat = getEditedPostAttribute('format');
  var themeSupports = select('core').getThemeSupports(); // Ensure current format is always in the set.
  // The current format may not be a format supported by the theme.

  var supportedFormats = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["union"])([postFormat], Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(themeSupports, ['formats'], []));
  return {
    postFormat: postFormat,
    supportedFormats: supportedFormats,
    suggestedFormat: getSuggestedPostFormat()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withInstanceId"]])(PostFormat));


/***/ }),

/***/ "./packages/editor/build-module/components/post-last-revision/check.js":
/*!*****************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-last-revision/check.js ***!
  \*****************************************************************************/
/*! exports provided: PostLastRevisionCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return PostLastRevisionCheck; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function PostLastRevisionCheck(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount,
      children = _ref.children;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_2__["default"], {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-last-revision/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-last-revision/index.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-last-revision/check.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/url */ "./packages/editor/build-module/utils/url.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function LastRevision(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    href: Object(_utils_url__WEBPACK_IMPORTED_MODULE_5__["getWPAdminURL"])('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: "backup"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));


/***/ }),

/***/ "./packages/editor/build-module/components/post-locked-modal/index.js":
/*!****************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-locked-modal/index.js ***!
  \****************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/url */ "./packages/editor/build-module/utils/url.js");
/* harmony import */ var _post_preview_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../post-preview-button */ "./packages/editor/build-module/components/post-preview-button/index.js");








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




var PostLockedModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostLockedModal, _Component);

  function PostLockedModal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostLockedModal);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostLockedModal).apply(this, arguments));
    _this.sendPostLock = _this.sendPostLock.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.receivePostLock = _this.receivePostLock.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.releasePostLock = _this.releasePostLock.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostLockedModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hookName = this.getHookName(); // Details on these events on the Heartbeat API docs
      // https://developer.wordpress.org/plugins/javascript/heartbeat-api/

      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["addAction"])('heartbeat.send', hookName, this.sendPostLock);
      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["addAction"])('heartbeat.tick', hookName, this.receivePostLock);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var hookName = this.getHookName();
      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["removeAction"])('heartbeat.send', hookName);
      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["removeAction"])('heartbeat.tick', hookName);
    }
    /**
     * Returns a `@wordpress/hooks` hook name specific to the instance of the
     * component.
     *
     * @return {string} Hook name prefix.
     */

  }, {
    key: "getHookName",
    value: function getHookName() {
      var instanceId = this.props.instanceId;
      return 'core/editor/post-locked-modal-' + instanceId;
    }
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */

  }, {
    key: "sendPostLock",
    value: function sendPostLock(data) {
      var _this$props = this.props,
          isLocked = _this$props.isLocked,
          activePostLock = _this$props.activePostLock,
          postId = _this$props.postId;

      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */

  }, {
    key: "receivePostLock",
    value: function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      var _this$props2 = this.props,
          autosave = _this$props2.autosave,
          updatePostLock = _this$props2.updatePostLock;
      var received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            avatar: received.lock_error.avatar_src
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */

  }, {
    key: "releasePostLock",
    value: function releasePostLock() {
      var _this$props3 = this.props,
          isLocked = _this$props3.isLocked,
          activePostLock = _this$props3.activePostLock,
          postLockUtils = _this$props3.postLockUtils,
          postId = _this$props3.postId;

      if (isLocked || !activePostLock) {
        return;
      }

      var data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        var xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          user = _this$props4.user,
          postId = _this$props4.postId,
          isLocked = _this$props4.isLocked,
          isTakeover = _this$props4.isTakeover,
          postLockUtils = _this$props4.postLockUtils,
          postType = _this$props4.postType;

      if (!isLocked) {
        return null;
      }

      var userDisplayName = user.name;
      var userAvatar = user.avatar;
      var unlockUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_11__["addQueryArgs"])('post.php', {
        'get-post-lock': '1',
        lockKey: true,
        post: postId,
        action: 'edit',
        _wpnonce: postLockUtils.nonce
      });
      var allPostsUrl = Object(_utils_url__WEBPACK_IMPORTED_MODULE_14__["getWPAdminURL"])('edit.php', {
        post_type: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(postType, ['slug'])
      });

      var allPostsLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Exit the Editor');

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        title: isTakeover ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Someone else has taken over this post.') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('This post is already being edited.'),
        focusOnMount: true,
        shouldCloseOnClickOutside: false,
        shouldCloseOnEsc: false,
        isDismissable: false,
        className: "editor-post-locked-modal"
      }, !!userAvatar && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
        src: userAvatar,
        alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Avatar'),
        className: "editor-post-locked-modal__avatar"
      }), !!isTakeover && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, userDisplayName ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(
      /* translators: %s: user's display name */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('%s now has editing control of this post. Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Another user now has editing control of this post. Don’t worry, your changes up to this moment have been saved.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "editor-post-locked-modal__buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        isPrimary: true,
        isLarge: true,
        href: allPostsUrl
      }, allPostsLabel))), !isTakeover && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, userDisplayName ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(
      /* translators: %s: user's display name */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('%s is currently working on this post, which means you cannot make changes, unless you take over.'), userDisplayName) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Another user is currently working on this post, which means you cannot make changes, unless you take over.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "editor-post-locked-modal__buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        isDefault: true,
        isLarge: true,
        href: allPostsUrl
      }, allPostsLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_post_preview_button__WEBPACK_IMPORTED_MODULE_15__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        isPrimary: true,
        isLarge: true,
        href: unlockUrl
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Take Over')))));
    }
  }]);

  return PostLockedModal;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isPostLocked = _select.isPostLocked,
      isPostLockTakeover = _select.isPostLockTakeover,
      getPostLockUser = _select.getPostLockUser,
      getCurrentPostId = _select.getCurrentPostId,
      getActivePostLock = _select.getActivePostLock,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    isLocked: isPostLocked(),
    isTakeover: isPostLockTakeover(),
    user: getPostLockUser(),
    postId: getCurrentPostId(),
    postLockUtils: getEditorSettings().postLockUtils,
    activePostLock: getActivePostLock(),
    postType: getPostType(getEditedPostAttribute('type'))
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      autosave = _dispatch.autosave,
      updatePostLock = _dispatch.updatePostLock;

  return {
    autosave: autosave,
    updatePostLock: updatePostLock
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["withInstanceId"], Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["withGlobalEvents"])({
  beforeunload: 'releasePostLock'
}))(PostLockedModal));


/***/ }),

/***/ "./packages/editor/build-module/components/post-pending-status/check.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-pending-status/check.js ***!
  \******************************************************************************/
/*! exports provided: PostPendingStatusCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return PostPendingStatusCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostPendingStatusCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isPublished = _ref.isPublished,
      children = _ref.children;

  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPost = _select.getCurrentPost;

  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-pending-status/index.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-pending-status/index.js ***!
  \******************************************************************************/
/*! exports provided: PostPendingStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return PostPendingStatus; });
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
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-pending-status/check.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPendingStatus(_ref) {
  var status = _ref.status,
      onUpdateStatus = _ref.onUpdateStatus;

  var togglePendingStatus = function togglePendingStatus() {
    var updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pending Review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    status: select('core/editor').getEditedPostAttribute('status')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onUpdateStatus: function onUpdateStatus(status) {
      dispatch('core/editor').editPost({
        status: status
      });
    }
  };
}))(PostPendingStatus));


/***/ }),

/***/ "./packages/editor/build-module/components/post-permalink/editor.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-permalink/editor.js ***!
  \**************************************************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/url */ "./packages/editor/build-module/utils/url.js");








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var PostPermalinkEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPermalinkEditor, _Component);

  function PostPermalinkEditor(_ref) {
    var _this;

    var permalinkParts = _ref.permalinkParts,
        slug = _ref.slug;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPermalinkEditor);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPermalinkEditor).apply(this, arguments));
    _this.state = {
      editedPostName: slug || permalinkParts.postName
    };
    _this.onSavePermalink = _this.onSavePermalink.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPermalinkEditor, [{
    key: "onSavePermalink",
    value: function onSavePermalink(event) {
      var postName = Object(_utils_url__WEBPACK_IMPORTED_MODULE_11__["cleanForSlug"])(this.state.editedPostName);
      event.preventDefault();
      this.props.onSave();

      if (postName === this.props.postName) {
        return;
      }

      this.props.editPost({
        slug: postName
      });
      this.setState({
        editedPostName: postName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$permalink = this.props.permalinkParts,
          prefix = _this$props$permalink.prefix,
          suffix = _this$props$permalink.suffix;
      var editedPostName = this.state.editedPostName;
      /* eslint-disable jsx-a11y/no-autofocus */
      // Autofocus is allowed here, as this mini-UI is only loaded when the user clicks to open it.

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "editor-post-permalink-editor",
        onSubmit: this.onSavePermalink
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "editor-post-permalink__editor-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "editor-post-permalink-editor__prefix"
      }, prefix), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        className: "editor-post-permalink-editor__edit",
        "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Edit post permalink'),
        value: editedPostName,
        onChange: function onChange(event) {
          return _this2.setState({
            editedPostName: event.target.value
          });
        },
        type: "text",
        autoFocus: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "editor-post-permalink-editor__suffix"
      }, suffix), "\u200E"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "editor-post-permalink-editor__save",
        isLarge: true,
        onClick: this.onSavePermalink
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Save')));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);

  return PostPermalinkEditor;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getPermalinkParts = _select.getPermalinkParts;

  return {
    permalinkParts: getPermalinkParts()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    editPost: editPost
  };
})])(PostPermalinkEditor));


/***/ }),

/***/ "./packages/editor/build-module/components/post-permalink/index.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-permalink/index.js ***!
  \*************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor.js */ "./packages/editor/build-module/components/post-permalink/editor.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/url */ "./packages/editor/build-module/utils/url.js");








/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




var PostPermalink =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPermalink, _Component);

  function PostPermalink() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPermalink);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPermalink).apply(this, arguments));
    _this.addVisibilityCheck = _this.addVisibilityCheck.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isCopied: false,
      isEditingPermalink: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPermalink, [{
    key: "addVisibilityCheck",
    value: function addVisibilityCheck() {
      window.addEventListener('visibilitychange', this.onVisibilityChange);
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      var _this$props = this.props,
          isEditable = _this$props.isEditable,
          refreshPost = _this$props.refreshPost; // If the user just returned after having clicked the "Change Permalinks" button,
      // fetch a new copy of the post from the server, just in case they enabled permalinks.

      if (!isEditable && 'visible' === document.visibilityState) {
        refreshPost();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // If we've just stopped editing the permalink, focus on the new permalink.
      if (prevState.isEditingPermalink && !this.state.isEditingPermalink) {
        this.linkElement.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('visibilitychange', this.addVisibilityCheck);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          isEditable = _this$props2.isEditable,
          isNew = _this$props2.isNew,
          isPublished = _this$props2.isPublished,
          isViewable = _this$props2.isViewable,
          permalinkParts = _this$props2.permalinkParts,
          postLink = _this$props2.postLink,
          postSlug = _this$props2.postSlug,
          postID = _this$props2.postID,
          postTitle = _this$props2.postTitle;

      if (isNew || !isViewable || !permalinkParts || !postLink) {
        return null;
      }

      var _this$state = this.state,
          isCopied = _this$state.isCopied,
          isEditingPermalink = _this$state.isEditingPermalink;
      var ariaLabel = isCopied ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Permalink copied') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Copy the permalink');
      var prefix = permalinkParts.prefix,
          suffix = permalinkParts.suffix;
      var slug = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["safeDecodeURIComponent"])(postSlug) || Object(_utils_url__WEBPACK_IMPORTED_MODULE_15__["cleanForSlug"])(postTitle) || postID;
      var samplePermalink = isEditable ? prefix + slug + suffix : prefix;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "editor-post-permalink"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ClipboardButton"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('editor-post-permalink__copy', {
          'is-copied': isCopied
        }),
        text: samplePermalink,
        label: ariaLabel,
        onCopy: function onCopy() {
          return _this2.setState({
            isCopied: true
          });
        },
        "aria-disabled": isCopied,
        icon: "admin-links"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "editor-post-permalink__label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Permalink:')), !isEditingPermalink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ExternalLink"], {
        className: "editor-post-permalink__link",
        href: !isPublished ? postLink : samplePermalink,
        target: "_blank",
        ref: function ref(linkElement) {
          return _this2.linkElement = linkElement;
        }
      }, Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["safeDecodeURI"])(samplePermalink), "\u200E"), isEditingPermalink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_editor_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        slug: slug,
        onSave: function onSave() {
          return _this2.setState({
            isEditingPermalink: false
          });
        }
      }), isEditable && !isEditingPermalink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "editor-post-permalink__edit",
        isLarge: true,
        onClick: function onClick() {
          return _this2.setState({
            isEditingPermalink: true
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Edit')));
    }
  }]);

  return PostPermalink;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      isPermalinkEditable = _select.isPermalinkEditable,
      getCurrentPost = _select.getCurrentPost,
      getPermalinkParts = _select.getPermalinkParts,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isCurrentPostPublished = _select.isCurrentPostPublished;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getCurrentPost = getCurrentPost(),
      id = _getCurrentPost.id,
      link = _getCurrentPost.link;

  var postTypeName = getEditedPostAttribute('type');
  var postType = getPostType(postTypeName);
  return {
    isNew: isEditedPostNew(),
    postLink: link,
    permalinkParts: getPermalinkParts(),
    postSlug: getEditedPostAttribute('slug'),
    isEditable: isPermalinkEditable(),
    isPublished: isCurrentPostPublished(),
    postTitle: getEditedPostAttribute('title'),
    postID: id,
    isViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(postType, ['viewable'], false)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      refreshPost = _dispatch.refreshPost;

  return {
    refreshPost: refreshPost
  };
})])(PostPermalink));


/***/ }),

/***/ "./packages/editor/build-module/components/post-pingbacks/index.js":
/*!*************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-pingbacks/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */





function PostPingbacks(_ref) {
  var _ref$pingStatus = _ref.pingStatus,
      pingStatus = _ref$pingStatus === void 0 ? 'open' : _ref$pingStatus,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["pingStatus"]);

  var onTogglePingback = function onTogglePingback() {
    return props.editPost({
      ping_status: pingStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Allow Pingbacks & Trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    pingStatus: select('core/editor').getEditedPostAttribute('ping_status')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostPingbacks));


/***/ }),

/***/ "./packages/editor/build-module/components/post-preview-button/index.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-preview-button/index.js ***!
  \******************************************************************************/
/*! exports provided: PostPreviewButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return PostPreviewButton; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









function writeInterstitialMessage(targetDocument) {
  var markup = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Path"], {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Path"], {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Generating preview…'))));
  markup += "\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t\t@-webkit-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-moz-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-o-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg {\n\t\t\t\twidth: 192px;\n\t\t\t\theight: 192px;\n\t\t\t\tstroke: #555d66;\n\t\t\t\tstroke-width: 0.75;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg .outer,\n\t\t\t.editor-post-preview-button__interstitial-message svg .inner {\n\t\t\t\tstroke-dasharray: 280;\n\t\t\t\tstroke-dashoffset: 280;\n\t\t\t\t-webkit-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-moz-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-o-animation: paint 1.5s ease infinite alternate;\n\t\t\t\tanimation: paint 1.5s ease infinite alternate;\n\t\t\t}\n\t\t\tp {\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n\t\t\t}\n\t\t</style>\n\t";
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__["applyFilters"])('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Generating preview…');
  targetDocument.close();
}

var PostPreviewButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPreviewButton, _Component);

  function PostPreviewButton() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPreviewButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPreviewButton).apply(this, arguments));
    _this.openPreviewWindow = _this.openPreviewWindow.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPreviewButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var previewLink = this.props.previewLink; // This relies on the window being responsible to unset itself when
      // navigation occurs or a new preview window is opened, to avoid
      // unintentional forceful redirects.

      if (previewLink && !prevProps.previewLink) {
        this.setPreviewWindowLink(previewLink);
      }
    }
    /**
     * Sets the preview window's location to the given URL, if a preview window
     * exists and is not closed.
     *
     * @param {string} url URL to assign as preview window location.
     */

  }, {
    key: "setPreviewWindowLink",
    value: function setPreviewWindowLink(url) {
      var previewWindow = this.previewWindow;

      if (previewWindow && !previewWindow.closed) {
        previewWindow.location = url;
      }
    }
  }, {
    key: "getWindowTarget",
    value: function getWindowTarget() {
      var postId = this.props.postId;
      return "wp-preview-".concat(postId);
    }
  }, {
    key: "openPreviewWindow",
    value: function openPreviewWindow(event) {
      // Our Preview button has its 'href' and 'target' set correctly for a11y
      // purposes. Unfortunately, though, we can't rely on the default 'click'
      // handler since sometimes it incorrectly opens a new tab instead of reusing
      // the existing one.
      // https://github.com/WordPress/gutenberg/pull/8330
      event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

      if (!this.previewWindow || this.previewWindow.closed) {
        this.previewWindow = window.open('', this.getWindowTarget());
      } // Focus the Preview tab. This might not do anything, depending on the browser's
      // and user's preferences.
      // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


      this.previewWindow.focus(); // If we don't need to autosave the post before previewing, then we simply
      // load the Preview URL in the Preview tab.

      if (!this.props.isAutosaveable) {
        this.setPreviewWindowLink(event.target.href);
        return;
      } // Request an autosave. This happens asynchronously and causes the component
      // to update when finished.


      if (this.props.isDraft) {
        this.props.savePost({
          isPreview: true
        });
      } else {
        this.props.autosave({
          isPreview: true
        });
      } // Display a 'Generating preview' message in the Preview tab while we wait for the
      // autosave to finish.


      writeInterstitialMessage(this.previewWindow.document);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          previewLink = _this$props.previewLink,
          currentPostLink = _this$props.currentPostLink,
          isSaveable = _this$props.isSaveable; // Link to the `?preview=true` URL if we have it, since this lets us see
      // changes that were autosaved since the post was last published. Otherwise,
      // just link to the post's URL.

      var href = previewLink || currentPostLink;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isLarge: true,
        className: "editor-post-preview",
        href: href,
        target: this.getWindowTarget(),
        disabled: !isSaveable,
        onClick: this.openPreviewWindow
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["_x"])('Preview', 'imperative verb'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "screen-reader-text"
      },
      /* translators: accessibility text */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('(opens in a new tab)')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_nux__WEBPACK_IMPORTED_MODULE_11__["DotTip"], {
        tipId: "core/editor.preview"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Click “Preview” to load a preview of this page, so you can make sure you’re happy with your blocks.')));
    }
  }]);

  return PostPreviewButton;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select, _ref) {
  var forcePreviewLink = _ref.forcePreviewLink,
      forceIsAutosaveable = _ref.forceIsAutosaveable;

  var _select = select('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostAttribute = _select.getCurrentPostAttribute,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostAutosaveable = _select.isEditedPostAutosaveable,
      getEditedPostPreviewLink = _select.getEditedPostPreviewLink;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var previewLink = getEditedPostPreviewLink();
  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  return {
    autosave: dispatch('core/editor').autosave,
    savePost: dispatch('core/editor').savePost
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["ifCondition"])(function (_ref2) {
  var isViewable = _ref2.isViewable;
  return isViewable;
})])(PostPreviewButton));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-button/index.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-button/index.js ***!
  \******************************************************************************/
/*! exports provided: PostPublishButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return PostPublishButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./label */ "./packages/editor/build-module/components/post-publish-button/label.js");








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var PostPublishButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPublishButton, _Component);

  function PostPublishButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostPublishButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PostPublishButton).call(this, props));
    _this.buttonNode = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createRef"])();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PostPublishButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.buttonNode.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forceIsDirty = _this$props.forceIsDirty,
          forceIsSaving = _this$props.forceIsSaving,
          hasPublishAction = _this$props.hasPublishAction,
          isBeingScheduled = _this$props.isBeingScheduled,
          isOpen = _this$props.isOpen,
          isPostSavingLocked = _this$props.isPostSavingLocked,
          isPublishable = _this$props.isPublishable,
          isPublished = _this$props.isPublished,
          isSaveable = _this$props.isSaveable,
          isSaving = _this$props.isSaving,
          isToggle = _this$props.isToggle,
          onSave = _this$props.onSave,
          onStatusChange = _this$props.onStatusChange,
          _this$props$onSubmit = _this$props.onSubmit,
          onSubmit = _this$props$onSubmit === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_7__["noop"] : _this$props$onSubmit,
          onToggle = _this$props.onToggle,
          visibility = _this$props.visibility;
      var isButtonDisabled = isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty;
      var isToggleDisabled = isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty;
      var publishStatus;

      if (!hasPublishAction) {
        publishStatus = 'pending';
      } else if (isBeingScheduled) {
        publishStatus = 'future';
      } else if (visibility === 'private') {
        publishStatus = 'private';
      } else {
        publishStatus = 'publish';
      }

      var onClickButton = function onClickButton() {
        if (isButtonDisabled) {
          return;
        }

        onSubmit();
        onStatusChange(publishStatus);
        onSave();
      };

      var onClickToggle = function onClickToggle() {
        if (isToggleDisabled) {
          return;
        }

        onToggle();
      };

      var buttonProps = {
        'aria-disabled': isButtonDisabled,
        className: 'editor-post-publish-button',
        isBusy: isSaving && isPublished,
        isPrimary: true,
        onClick: onClickButton
      };
      var toggleProps = {
        'aria-disabled': isToggleDisabled,
        'aria-expanded': isOpen,
        className: 'editor-post-publish-panel__toggle',
        isBusy: isSaving && isPublished,
        isPrimary: true,
        onClick: onClickToggle
      };
      var toggleChildren = isBeingScheduled ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Schedule…') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Publish…');
      var buttonChildren = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_label__WEBPACK_IMPORTED_MODULE_13__["default"], {
        forceIsSaving: forceIsSaving
      });
      var componentProps = isToggle ? toggleProps : buttonProps;
      var componentChildren = isToggle ? toggleChildren : buttonChildren;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this.buttonNode
      }, componentProps), componentChildren), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_nux__WEBPACK_IMPORTED_MODULE_12__["DotTip"], {
        tipId: "core/editor.publish"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Finished writing? That’s great, let’s get this published right now. Just click “Publish” and you’re good to go.')));
    }
  }]);

  return PostPublishButton;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      getEditedPostVisibility = _select.getEditedPostVisibility,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostPublishable = _select.isEditedPostPublishable,
      isPostSavingLocked = _select.isPostSavingLocked,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    isSaving: isSavingPost(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onStatusChange: function onStatusChange(status) {
      return editPost({
        status: status
      }, {
        undoIgnore: true
      });
    },
    onSave: savePost
  };
})])(PostPublishButton));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-button/label.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-button/label.js ***!
  \******************************************************************************/
/*! exports provided: PublishButtonLabel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishButtonLabel", function() { return PublishButtonLabel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function PublishButtonLabel(_ref) {
  var isPublished = _ref.isPublished,
      isBeingScheduled = _ref.isBeingScheduled,
      isSaving = _ref.isSaving,
      isPublishing = _ref.isPublishing,
      hasPublishAction = _ref.hasPublishAction,
      isAutosaving = _ref.isAutosaving;

  if (isPublishing) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scheduling…');
  }

  if (!hasPublishAction) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit for Review');
  } else if (isPublished) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Update');
  } else if (isBeingScheduled) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Schedule');
  }

  return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Publish');
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, _ref2) {
  var forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      isSavingPost = _select.isSavingPost,
      isPublishingPost = _select.isPublishingPost,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      isAutosavingPost = _select.isAutosavingPost;

  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-panel/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-panel/index.js ***!
  \*****************************************************************************/
/*! exports provided: PostPublishPanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return PostPublishPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _post_publish_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../post-publish-button */ "./packages/editor/build-module/components/post-publish-button/index.js");
/* harmony import */ var _prepublish__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prepublish */ "./packages/editor/build-module/components/post-publish-panel/prepublish.js");
/* harmony import */ var _postpublish__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./postpublish */ "./packages/editor/build-module/components/post-publish-panel/postpublish.js");










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




var PostPublishPanel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PostPublishPanel, _Component);

  function PostPublishPanel() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PostPublishPanel);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPublishPanel).apply(this, arguments));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPublishPanel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Automatically collapse the publish sidebar when a post
      // is published and the user makes an edit.
      if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
        this.props.onClose();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          hasPublishAction = _this$props.hasPublishAction,
          isPostTypeViewable = _this$props.isPostTypeViewable;

      if (!hasPublishAction || !isPostTypeViewable) {
        onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          forceIsDirty = _this$props2.forceIsDirty,
          forceIsSaving = _this$props2.forceIsSaving,
          isBeingScheduled = _this$props2.isBeingScheduled,
          isPublished = _this$props2.isPublished,
          isPublishSidebarEnabled = _this$props2.isPublishSidebarEnabled,
          isScheduled = _this$props2.isScheduled,
          isSaving = _this$props2.isSaving,
          onClose = _this$props2.onClose,
          onTogglePublishSidebar = _this$props2.onTogglePublishSidebar,
          PostPublishExtension = _this$props2.PostPublishExtension,
          PrePublishExtension = _this$props2.PrePublishExtension,
          additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["forceIsDirty", "forceIsSaving", "isBeingScheduled", "isPublished", "isPublishSidebarEnabled", "isScheduled", "isSaving", "onClose", "onTogglePublishSidebar", "PostPublishExtension", "PrePublishExtension"]);

      var propsForPanel = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["omit"])(additionalProps, ['hasPublishAction', 'isDirty', 'isPostTypeViewable']);
      var isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
      var isPrePublish = !isPublishedOrScheduled && !isSaving;
      var isPostPublish = isPublishedOrScheduled && !isSaving;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "editor-post-publish-panel"
      }, propsForPanel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "editor-post-publish-panel__header"
      }, isPostPublish ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "editor-post-publish-panel__header-published"
      }, isScheduled ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Scheduled') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Published')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "editor-post-publish-panel__header-publish-button"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_post_publish_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        focusOnMount: true,
        onSubmit: this.onSubmit,
        forceIsDirty: forceIsDirty,
        forceIsSaving: forceIsSaving
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("span", {
        className: "editor-post-publish-panel__spacer"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
        "aria-expanded": true,
        onClick: onClose,
        icon: "no-alt",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Close panel')
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "editor-post-publish-panel__content"
      }, isPrePublish && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_prepublish__WEBPACK_IMPORTED_MODULE_15__["default"], null, PrePublishExtension && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PrePublishExtension, null)), isPostPublish && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_postpublish__WEBPACK_IMPORTED_MODULE_16__["default"], {
        focusOnMount: true
      }, PostPublishExtension && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PostPublishExtension, null)), isSaving && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "editor-post-publish-panel__footer"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Always show pre-publish checks.'),
        checked: isPublishSidebarEnabled,
        onChange: onTogglePublishSidebar
      })));
    }
  }]);

  return PostPublishPanel;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withSelect"])(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPost = _select2.getCurrentPost,
      getEditedPostAttribute = _select2.getEditedPostAttribute,
      isCurrentPostPublished = _select2.isCurrentPostPublished,
      isCurrentPostScheduled = _select2.isCurrentPostScheduled,
      isEditedPostBeingScheduled = _select2.isEditedPostBeingScheduled,
      isEditedPostDirty = _select2.isEditedPostDirty,
      isSavingPost = _select2.isSavingPost;

  var _select3 = select('core/editor'),
      isPublishSidebarEnabled = _select3.isPublishSidebarEnabled;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withDispatch"])(function (dispatch, _ref) {
  var isPublishSidebarEnabled = _ref.isPublishSidebarEnabled;

  var _dispatch = dispatch('core/editor'),
      disablePublishSidebar = _dispatch.disablePublishSidebar,
      enablePublishSidebar = _dispatch.enablePublishSidebar;

  return {
    onTogglePublishSidebar: function onTogglePublishSidebar() {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_11__["withFocusReturn"], _wordpress_components__WEBPACK_IMPORTED_MODULE_11__["withConstrainedTabbing"]])(PostPublishPanel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js":
/*!***********************************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js ***!
  \***********************************************************************************************/
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-format */ "./packages/editor/build-module/components/post-format/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var PostFormatSuggestion = function PostFormatSuggestion(_ref) {
  var suggestedPostFormat = _ref.suggestedPostFormat,
      suggestionText = _ref.suggestionText,
      onUpdatePostFormat = _ref.onUpdatePostFormat;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestedPostFormat);
    }
  }, suggestionText);
};

var PostFormatPanel = function PostFormatPanel(_ref2) {
  var suggestion = _ref2.suggestion,
      onUpdatePostFormat = _ref2.onUpdatePostFormat;
  var panelBodyTitle = [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Suggestion:'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use a post format'))];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Apply the "%1$s" format.'), suggestion.caption)
  })));
};

var getSuggestion = function getSuggestion(supportedFormats, suggestedPostFormat) {
  var formats = _post_format__WEBPACK_IMPORTED_MODULE_6__["POST_FORMATS"].filter(function (format) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(supportedFormats, format.id);
  });
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(formats, function (format) {
    return format.id === suggestedPostFormat;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var supportedFormats = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(select('core').getThemeSupports(), ['formats'], []);
  return {
    currentPostFormat: getEditedPostAttribute('format'),
    suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["ifCondition"])(function (_ref3) {
  var suggestion = _ref3.suggestion,
      currentPostFormat = _ref3.currentPostFormat;
  return suggestion && suggestion.id !== currentPostFormat;
}))(PostFormatPanel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-panel/maybe-tags-panel.js":
/*!****************************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-panel/maybe-tags-panel.js ***!
  \****************************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-taxonomies/flat-term-selector */ "./packages/editor/build-module/components/post-taxonomies/flat-term-selector.js");







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var TagsPanel = function TagsPanel() {
  var panelBodyTitle = [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Suggestion:'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Add tags'))];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
    slug: 'post_tag'
  }));
};

var MaybeTagsPanel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MaybeTagsPanel, _Component);

  function MaybeTagsPanel(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MaybeTagsPanel);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MaybeTagsPanel).call(this, props));
    _this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
    return _this;
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MaybeTagsPanel, [{
    key: "render",
    value: function render() {
      if (!this.state.hadTagsWhenOpeningThePanel) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TagsPanel, null);
      }

      return null;
    }
  }]);

  return MaybeTagsPanel;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  var tagsTaxonomy = select('core').getTaxonomy('post_tag');
  var tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && Object(lodash__WEBPACK_IMPORTED_MODULE_6__["some"])(tagsTaxonomy.types, function (type) {
      return type === postType;
    }),
    hasTags: tags && tags.length
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["ifCondition"])(function (_ref) {
  var areTagsFetched = _ref.areTagsFetched,
      isPostTypeSupported = _ref.isPostTypeSupported;
  return isPostTypeSupported && areTagsFetched;
}))(MaybeTagsPanel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-panel/postpublish.js":
/*!***********************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-panel/postpublish.js ***!
  \***********************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-schedule/label */ "./packages/editor/build-module/components/post-schedule/label.js");








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var PostPublishPanelPostpublish =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostPublishPanelPostpublish, _Component);

  function PostPublishPanelPostpublish() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostPublishPanelPostpublish);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostPublishPanelPostpublish).apply(this, arguments));
    _this.state = {
      showCopyConfirmation: false
    };
    _this.onCopy = _this.onCopy.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSelectInput = _this.onSelectInput.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.postLink = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createRef"])();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostPublishPanelPostpublish, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.postLink.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissCopyConfirmation);
    }
  }, {
    key: "onCopy",
    value: function onCopy() {
      var _this2 = this;

      this.setState({
        showCopyConfirmation: true
      });
      clearTimeout(this.dismissCopyConfirmation);
      this.dismissCopyConfirmation = setTimeout(function () {
        _this2.setState({
          showCopyConfirmation: false
        });
      }, 4000);
    }
  }, {
    key: "onSelectInput",
    value: function onSelectInput(event) {
      event.target.select();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isScheduled = _this$props.isScheduled,
          post = _this$props.post,
          postType = _this$props.postType;
      var postLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(postType, ['labels', 'singular_name']);
      var viewPostLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(postType, ['labels', 'view_item']);
      var postPublishNonLinkHeader = isScheduled ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('is now scheduled. It will go live on'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_post_schedule_label__WEBPACK_IMPORTED_MODULE_12__["default"], null), ".") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('is now live.');
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "post-publish-panel__postpublish"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        className: "post-publish-panel__postpublish-header"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        ref: this.postLink,
        href: post.link
      }, post.title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('(no title)')), " ", postPublishNonLinkHeader), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: "post-publish-panel__postpublish-subheader"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('What’s next?'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        className: "post-publish-panel__postpublish-post-address",
        readOnly: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["sprintf"])(
        /* translators: %s: post type singular name */
        Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('%s address'), postLabel),
        value: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_11__["safeDecodeURIComponent"])(post.link),
        onFocus: this.onSelectInput
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "post-publish-panel__postpublish-buttons"
      }, !isScheduled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isDefault: true,
        href: post.link
      }, viewPostLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ClipboardButton"], {
        isDefault: true,
        text: post.link,
        onCopy: this.onCopy
      }, this.state.showCopyConfirmation ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Copied!') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Copy Link')))), children);
    }
  }]);

  return PostPublishPanelPostpublish;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getCurrentPost = _select.getCurrentPost,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(PostPublishPanelPostpublish));


/***/ }),

/***/ "./packages/editor/build-module/components/post-publish-panel/prepublish.js":
/*!**********************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-publish-panel/prepublish.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-visibility */ "./packages/editor/build-module/components/post-visibility/index.js");
/* harmony import */ var _post_visibility_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-visibility/label */ "./packages/editor/build-module/components/post-visibility/label.js");
/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-schedule */ "./packages/editor/build-module/components/post-schedule/index.js");
/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-schedule/label */ "./packages/editor/build-module/components/post-schedule/label.js");
/* harmony import */ var _maybe_tags_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maybe-tags-panel */ "./packages/editor/build-module/components/post-publish-panel/maybe-tags-panel.js");
/* harmony import */ var _maybe_post_format_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maybe-post-format-panel */ "./packages/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








function PostPublishPanelPrepublish(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      children = _ref.children;
  var prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you ready to submit for review?');
    prePublishBodyText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you ready to schedule?');
    prePublishBodyText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you ready to publish?');
    prePublishBodyText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double-check your settings before publishing.');
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-publish-panel__prepublish"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, prePublishTitle)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, prePublishBodyText), hasPublishAction && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    initialOpen: false,
    title: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Visibility:'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_visibility_label__WEBPACK_IMPORTED_MODULE_6__["default"], null))]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_visibility__WEBPACK_IMPORTED_MODULE_5__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    initialOpen: false,
    title: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Publish:'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_schedule_label__WEBPACK_IMPORTED_MODULE_8__["default"], null))]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post_schedule__WEBPACK_IMPORTED_MODULE_7__["default"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_maybe_post_format_panel__WEBPACK_IMPORTED_MODULE_10__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_maybe_tags_panel__WEBPACK_IMPORTED_MODULE_9__["default"], null), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled;

  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: isEditedPostBeingScheduled()
  };
})(PostPublishPanelPrepublish));


/***/ }),

/***/ "./packages/editor/build-module/components/post-saved-state/index.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-saved-state/index.js ***!
  \***************************************************************************/
/*! exports provided: PostSavedState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return PostSavedState; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../post-switch-to-draft-button */ "./packages/editor/build-module/components/post-switch-to-draft-button/index.js");







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
 * Component showing whether the post is saved or not and displaying save links.
 *
 * @param   {Object}    Props Component Props.
 */

var PostSavedState =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostSavedState, _Component);

  function PostSavedState() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostSavedState);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostSavedState).apply(this, arguments));
    _this.state = {
      forceSavedMessage: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostSavedState, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.isSaving && !this.props.isSaving) {
        this.setState({
          forceSavedMessage: true
        });
        this.props.setTimeout(function () {
          _this2.setState({
            forceSavedMessage: false
          });
        }, 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          post = _this$props.post,
          isNew = _this$props.isNew,
          isScheduled = _this$props.isScheduled,
          isPublished = _this$props.isPublished,
          isDirty = _this$props.isDirty,
          isSaving = _this$props.isSaving,
          isSaveable = _this$props.isSaveable,
          onSave = _this$props.onSave,
          isAutosaving = _this$props.isAutosaving,
          isPending = _this$props.isPending,
          isLargeViewport = _this$props.isLargeViewport;
      var forceSavedMessage = this.state.forceSavedMessage;

      if (isSaving) {
        // TODO: Classes generation should be common across all return
        // paths of this function, including proper naming convention for
        // the "Save Draft" button.
        var classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()('editor-post-saved-state', 'is-saving', {
          'is-autosaving': isAutosaving
        });
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Animate"], {
          type: "loading"
        }, function (_ref) {
          var animateClassName = _ref.className;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes, animateClassName)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
            icon: "cloud"
          }), isAutosaving ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Autosaving') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Saving'));
        });
      }

      if (isPublished || isScheduled) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      }

      if (!isSaveable) {
        return null;
      }

      if (forceSavedMessage || !isNew && !isDirty) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          className: "editor-post-saved-state is-saved"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "saved"
        }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Saved'));
      } // Once the post has been submitted for review this button
      // is not needed for the contributor role.


      var hasPublishAction = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(post, ['_links', 'wp:action-publish'], false);

      if (!hasPublishAction && isPending) {
        return null;
      }

      var label = isPending ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Save as Pending') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Save Draft');

      if (!isLargeViewport) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
          className: "editor-post-save-draft",
          label: label,
          onClick: function onClick() {
            return onSave();
          },
          shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["displayShortcut"].primary('s'),
          icon: "cloud-upload"
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "editor-post-save-draft",
        onClick: function onClick() {
          return onSave();
        },
        shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["displayShortcut"].primary('s'),
        isTertiary: true
      }, label);
    }
  }]);

  return PostSavedState;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select, _ref2) {
  var forceIsDirty = _ref2.forceIsDirty,
      forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isCurrentPostScheduled = _select.isCurrentPostScheduled,
      isEditedPostDirty = _select.isEditedPostDirty,
      isSavingPost = _select.isSavingPost,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      getCurrentPost = _select.getCurrentPost,
      isAutosavingPost = _select.isAutosavingPost,
      getEditedPostAttribute = _select.getEditedPostAttribute;

  return {
    post: getCurrentPost(),
    isNew: isEditedPostNew(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled(),
    isDirty: forceIsDirty || isEditedPostDirty(),
    isSaving: forceIsSaving || isSavingPost(),
    isSaveable: isEditedPostSaveable(),
    isAutosaving: isAutosavingPost(),
    isPending: 'pending' === getEditedPostAttribute('status')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  return {
    onSave: dispatch('core/editor').savePost
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["withSafeTimeout"], Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_13__["withViewportMatch"])({
  isLargeViewport: 'medium'
})])(PostSavedState));


/***/ }),

/***/ "./packages/editor/build-module/components/post-schedule/check.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-schedule/check.js ***!
  \************************************************************************/
/*! exports provided: PostScheduleCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return PostScheduleCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostScheduleCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      children = _ref.children;

  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-schedule/index.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-schedule/index.js ***!
  \************************************************************************/
/*! exports provided: PostSchedule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return PostSchedule; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




function PostSchedule(_ref) {
  var date = _ref.date,
      onUpdateDate = _ref.onUpdateDate;

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["__experimentalGetSettings"])(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["DateTimePicker"], {
    key: "date-time-picker",
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  return {
    onUpdateDate: function onUpdateDate(date) {
      dispatch('core/editor').editPost({
        date: date
      });
    }
  };
})])(PostSchedule));


/***/ }),

/***/ "./packages/editor/build-module/components/post-schedule/label.js":
/*!************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-schedule/label.js ***!
  \************************************************************************/
/*! exports provided: PostScheduleLabel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return PostScheduleLabel; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



function PostScheduleLabel(_ref) {
  var date = _ref.date,
      isFloating = _ref.isFloating;

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["__experimentalGetSettings"])();

  return date && !isFloating ? Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["dateI18n"])("".concat(settings.formats.date, " ").concat(settings.formats.time), date) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Immediately');
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-sticky/check.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-sticky/check.js ***!
  \**********************************************************************/
/*! exports provided: PostStickyCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return PostStickyCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostStickyCheck(_ref) {
  var hasStickyAction = _ref.hasStickyAction,
      postType = _ref.postType,
      children = _ref.children;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasStickyAction: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(post, ['_links', 'wp:action-sticky'], false),
    postType: select('core/editor').getCurrentPostType()
  };
})])(PostStickyCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-sticky/index.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-sticky/index.js ***!
  \**********************************************************************/
/*! exports provided: PostSticky, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSticky", function() { return PostSticky; });
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
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check */ "./packages/editor/build-module/components/post-sticky/check.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostSticky(_ref) {
  var onUpdateSticky = _ref.onUpdateSticky,
      _ref$postSticky = _ref.postSticky,
      postSticky = _ref$postSticky === void 0 ? false : _ref$postSticky;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_check__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stick to the top of the blog'),
    checked: postSticky,
    onChange: function onChange() {
      return onUpdateSticky(!postSticky);
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    postSticky: select('core/editor').getEditedPostAttribute('sticky')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onUpdateSticky: function onUpdateSticky(postSticky) {
      dispatch('core/editor').editPost({
        sticky: postSticky
      });
    }
  };
})])(PostSticky));


/***/ }),

/***/ "./packages/editor/build-module/components/post-switch-to-draft-button/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-switch-to-draft-button/index.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function PostSwitchToDraftButton(_ref) {
  var isSaving = _ref.isSaving,
      isPublished = _ref.isPublished,
      isScheduled = _ref.isScheduled,
      onClick = _ref.onClick,
      isMobileViewport = _ref.isMobileViewport;

  if (!isPublished && !isScheduled) {
    return null;
  }

  var onSwitch = function onSwitch() {
    var alertMessage;

    if (isPublished) {
      alertMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you sure you want to unpublish this post?');
    } else if (isScheduled) {
      alertMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you sure you want to unschedule this post?');
    } // eslint-disable-next-line no-alert


    if (window.confirm(alertMessage)) {
      onClick();
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "editor-post-switch-to-draft",
    onClick: onSwitch,
    disabled: isSaving,
    isTertiary: true
  }, isMobileViewport ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Draft') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Switch to Draft'));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onClick: function onClick() {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__["withViewportMatch"])({
  isMobileViewport: '< small'
})])(PostSwitchToDraftButton));


/***/ }),

/***/ "./packages/editor/build-module/components/post-taxonomies/check.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-taxonomies/check.js ***!
  \**************************************************************************/
/*! exports provided: PostTaxonomiesCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return PostTaxonomiesCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostTaxonomiesCheck(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      children = _ref.children;
  var hasTaxonomies = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["some"])(taxonomies, function (taxonomy) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(taxonomy.types, postType);
  });

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-taxonomies/flat-term-selector.js":
/*!***************************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-taxonomies/flat-term-selector.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_15__);










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Module constants
 */

var DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name'
};
var MAX_TERMS_SUGGESTIONS = 20;

var isSameTermName = function isSameTermName(termA, termB) {
  return termA.toLowerCase() === termB.toLowerCase();
};
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */


var unescapeTerm = function unescapeTerm(term) {
  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, term, {
    name: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["unescape"])(term.name)
  });
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */


var unescapeTerms = function unescapeTerms(terms) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(terms, unescapeTerm);
};

var FlatTermSelector =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FlatTermSelector, _Component);

  function FlatTermSelector() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FlatTermSelector);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(FlatTermSelector).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.searchTerms = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["throttle"])(_this.searchTerms.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), 500);
    _this.findOrCreateTerm = _this.findOrCreateTerm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      loading: !Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(_this.props.terms),
      availableTerms: [],
      selectedTerms: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FlatTermSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.props.terms)) {
        this.initRequest = this.fetchTerms({
          include: this.props.terms.join(','),
          per_page: -1
        });
        this.initRequest.then(function () {
          _this2.setState({
            loading: false
          });
        }, function (xhr) {
          if (xhr.statusText === 'abort') {
            return;
          }

          _this2.setState({
            loading: false
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["invoke"])(this.initRequest, ['abort']);
      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["invoke"])(this.searchRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.terms !== this.props.terms) {
        this.updateSelectedTerms(this.props.terms);
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var taxonomy = this.props.taxonomy;

      var query = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, DEFAULT_QUERY, params);

      var request = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14___default()({
        path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_15__["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), query)
      });
      request.then(unescapeTerms).then(function (terms) {
        _this3.setState(function (state) {
          return {
            availableTerms: state.availableTerms.concat(terms.filter(function (term) {
              return !Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(state.availableTerms, function (availableTerm) {
                return availableTerm.id === term.id;
              });
            }))
          };
        });

        _this3.updateSelectedTerms(_this3.props.terms);
      });
      return request;
    }
  }, {
    key: "updateSelectedTerms",
    value: function updateSelectedTerms() {
      var _this4 = this;

      var terms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var selectedTerms = terms.reduce(function (result, termId) {
        var termObject = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(_this4.state.availableTerms, function (term) {
          return term.id === termId;
        });

        if (termObject) {
          result.push(termObject.name);
        }

        return result;
      }, []);
      this.setState({
        selectedTerms: selectedTerms
      });
    }
  }, {
    key: "findOrCreateTerm",
    value: function findOrCreateTerm(termName) {
      var _this5 = this;

      var taxonomy = this.props.taxonomy;
      var termNameEscaped = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["escape"])(termName); // Tries to create a term or fetch it if it already exists.

      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14___default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: termNameEscaped
        }
      }).catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // If the terms exist, fetch it instead of creating a new one.
          _this5.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_14___default()({
            path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_15__["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, DEFAULT_QUERY, {
              search: termNameEscaped
            }))
          }).then(unescapeTerms);
          return _this5.addRequest.then(function (searchResult) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(searchResult, function (result) {
              return isSameTermName(result.name, termName);
            });
          });
        }

        return Promise.reject(error);
      }).then(unescapeTerm);
    }
  }, {
    key: "onChange",
    value: function onChange(termNames) {
      var _this6 = this;

      var uniqueTerms = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["uniqBy"])(termNames, function (term) {
        return term.toLowerCase();
      });
      this.setState({
        selectedTerms: uniqueTerms
      });
      var newTermNames = uniqueTerms.filter(function (termName) {
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(_this6.state.availableTerms, function (term) {
          return isSameTermName(term.name, termName);
        });
      });

      var termNamesToIds = function termNamesToIds(names, availableTerms) {
        return names.map(function (termName) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(availableTerms, function (term) {
            return isSameTermName(term.name, termName);
          }).id;
        });
      };

      if (newTermNames.length === 0) {
        return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, this.state.availableTerms), this.props.taxonomy.rest_base);
      }

      Promise.all(newTermNames.map(this.findOrCreateTerm)).then(function (newTerms) {
        var newAvailableTerms = _this6.state.availableTerms.concat(newTerms);

        _this6.setState({
          availableTerms: newAvailableTerms
        });

        return _this6.props.onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms), _this6.props.taxonomy.rest_base);
      });
    }
  }, {
    key: "searchTerms",
    value: function searchTerms() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["invoke"])(this.searchRequest, ['abort']);
      this.searchRequest = this.fetchTerms({
        search: search
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slug = _this$props.slug,
          taxonomy = _this$props.taxonomy,
          hasAssignAction = _this$props.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state = this.state,
          loading = _this$state.loading,
          availableTerms = _this$state.availableTerms,
          selectedTerms = _this$state.selectedTerms;
      var termNames = availableTerms.map(function (term) {
        return term.name;
      });
      var newTermLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Add New Tag') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Add New Term'));
      var singularName = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Tag') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Term'));
      var termAddedLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["_x"])('%s added', 'term'), singularName);
      var termRemovedLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["_x"])('%s removed', 'term'), singularName);
      var removeTermLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["_x"])('Remove %s', 'term'), singularName);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["FormTokenField"], {
        value: selectedTerms,
        suggestions: termNames,
        onChange: this.onChange,
        onInputChange: this.searchTerms,
        maxSuggestions: MAX_TERMS_SUGGESTIONS,
        disabled: loading,
        label: newTermLabel,
        messages: {
          added: termAddedLabel,
          removed: termRemovedLabel,
          remove: removeTermLabel
        }
      });
    }
  }]);

  return FlatTermSelector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restBase, terms));
    }
  };
}), Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["withFilters"])('editor.PostTaxonomyType'))(FlatTermSelector));


/***/ }),

/***/ "./packages/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js":
/*!***********************************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/terms */ "./packages/editor/build-module/utils/terms.js");











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
 * Module Constants
 */

var DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent'
};
var MIN_TERMS_COUNT_FOR_FILTER = 8;

var HierarchicalTermSelector =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(HierarchicalTermSelector, _Component);

  function HierarchicalTermSelector() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, HierarchicalTermSelector);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(HierarchicalTermSelector).apply(this, arguments));
    _this.findTerm = _this.findTerm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onChangeFormName = _this.onChangeFormName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onChangeFormParent = _this.onChangeFormParent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onAddTerm = _this.onAddTerm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onToggleForm = _this.onToggleForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.setFilterValue = _this.setFilterValue.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.sortBySelected = _this.sortBySelected.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.state = {
      loading: true,
      availableTermsTree: [],
      availableTerms: [],
      adding: false,
      formName: '',
      formParent: '',
      showForm: false,
      filterValue: '',
      filteredTermsTree: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HierarchicalTermSelector, [{
    key: "onChange",
    value: function onChange(event) {
      var _this$props = this.props,
          onUpdateTerms = _this$props.onUpdateTerms,
          _this$props$terms = _this$props.terms,
          terms = _this$props$terms === void 0 ? [] : _this$props$terms,
          taxonomy = _this$props.taxonomy;
      var termId = parseInt(event.target.value, 10);
      var hasTerm = terms.indexOf(termId) !== -1;
      var newTerms = hasTerm ? Object(lodash__WEBPACK_IMPORTED_MODULE_10__["without"])(terms, termId) : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(terms), [termId]);
      onUpdateTerms(newTerms, taxonomy.rest_base);
    }
  }, {
    key: "onChangeFormName",
    value: function onChangeFormName(event) {
      var newValue = event.target.value.trim() === '' ? '' : event.target.value;
      this.setState({
        formName: newValue
      });
    }
  }, {
    key: "onChangeFormParent",
    value: function onChangeFormParent(newParent) {
      this.setState({
        formParent: newParent
      });
    }
  }, {
    key: "onToggleForm",
    value: function onToggleForm() {
      this.setState(function (state) {
        return {
          showForm: !state.showForm
        };
      });
    }
  }, {
    key: "findTerm",
    value: function findTerm(terms, parent, name) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(terms, function (term) {
        return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
      });
    }
  }, {
    key: "onAddTerm",
    value: function onAddTerm(event) {
      var _this2 = this;

      event.preventDefault();
      var _this$props2 = this.props,
          onUpdateTerms = _this$props2.onUpdateTerms,
          taxonomy = _this$props2.taxonomy,
          terms = _this$props2.terms,
          slug = _this$props2.slug;
      var _this$state = this.state,
          formName = _this$state.formName,
          formParent = _this$state.formParent,
          adding = _this$state.adding,
          availableTerms = _this$state.availableTerms;

      if (formName === '' || adding) {
        return;
      } // check if the term we are adding already exists


      var existingTerm = this.findTerm(availableTerms, formParent, formName);

      if (existingTerm) {
        // if the term we are adding exists but is not selected select it
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_10__["some"])(terms, function (term) {
          return term === existingTerm.id;
        })) {
          onUpdateTerms([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(terms), [existingTerm.id]), taxonomy.rest_base);
        }

        this.setState({
          formName: '',
          formParent: ''
        });
        return;
      }

      this.setState({
        adding: true
      });
      this.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: formName,
          parent: formParent ? formParent : undefined
        }
      }); // Tries to create a term or fetch it if it already exists

      var findOrCreatePromise = this.addRequest.catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // search the new category created since last fetch
          _this2.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default()({
            path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_16__["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, DEFAULT_QUERY, {
              parent: formParent || 0,
              search: formName
            }))
          });
          return _this2.addRequest.then(function (searchResult) {
            return _this2.findTerm(searchResult, formParent, formName);
          });
        }

        return Promise.reject(error);
      });
      findOrCreatePromise.then(function (term) {
        var hasTerm = !!Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(_this2.state.availableTerms, function (availableTerm) {
          return availableTerm.id === term.id;
        });
        var newAvailableTerms = hasTerm ? _this2.state.availableTerms : [term].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2.state.availableTerms));
        var termAddedMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["_x"])('%s added', 'term'), Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(_this2.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Category') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Term')));

        _this2.props.speak(termAddedMessage, 'assertive');

        _this2.addRequest = null;

        _this2.setState({
          adding: false,
          formName: '',
          formParent: '',
          availableTerms: newAvailableTerms,
          availableTermsTree: _this2.sortBySelected(Object(_utils_terms__WEBPACK_IMPORTED_MODULE_17__["buildTermsTree"])(newAvailableTerms))
        });

        onUpdateTerms([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(terms), [term.id]), taxonomy.rest_base);
      }, function (xhr) {
        if (xhr.statusText === 'abort') {
          return;
        }

        _this2.addRequest = null;

        _this2.setState({
          adding: false
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTerms();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(lodash__WEBPACK_IMPORTED_MODULE_10__["invoke"])(this.fetchRequest, ['abort']);
      Object(lodash__WEBPACK_IMPORTED_MODULE_10__["invoke"])(this.addRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.taxonomy !== prevProps.taxonomy) {
        this.fetchTerms();
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var taxonomy = this.props.taxonomy;

      if (!taxonomy) {
        return;
      }

      this.fetchRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default()({
        path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_16__["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), DEFAULT_QUERY)
      });
      this.fetchRequest.then(function (terms) {
        // resolve
        var availableTermsTree = _this3.sortBySelected(Object(_utils_terms__WEBPACK_IMPORTED_MODULE_17__["buildTermsTree"])(terms));

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false,
          availableTermsTree: availableTermsTree,
          availableTerms: terms
        });
      }, function (xhr) {
        // reject
        if (xhr.statusText === 'abort') {
          return;
        }

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false
        });
      });
    }
  }, {
    key: "sortBySelected",
    value: function sortBySelected(termsTree) {
      var terms = this.props.terms;

      var treeHasSelection = function treeHasSelection(termTree) {
        if (terms.indexOf(termTree.id) !== -1) {
          return true;
        }

        if (undefined === termTree.children) {
          return false;
        }

        var anyChildIsSelected = termTree.children.map(treeHasSelection).filter(function (child) {
          return child;
        }).length > 0;

        if (anyChildIsSelected) {
          return true;
        }

        return false;
      };

      var termOrChildIsSelected = function termOrChildIsSelected(termA, termB) {
        var termASelected = treeHasSelection(termA);
        var termBSelected = treeHasSelection(termB);

        if (termASelected === termBSelected) {
          return 0;
        }

        if (termASelected && !termBSelected) {
          return -1;
        }

        if (!termASelected && termBSelected) {
          return 1;
        }

        return 0;
      };

      termsTree.sort(termOrChildIsSelected);
      return termsTree;
    }
  }, {
    key: "setFilterValue",
    value: function setFilterValue(event) {
      var availableTermsTree = this.state.availableTermsTree;
      var filterValue = event.target.value;
      var filteredTermsTree = availableTermsTree.map(this.getFilterMatcher(filterValue)).filter(function (term) {
        return term;
      });

      var getResultCount = function getResultCount(terms) {
        var count = 0;

        for (var i = 0; i < terms.length; i++) {
          count++;

          if (undefined !== terms[i].children) {
            count += getResultCount(terms[i].children);
          }
        }

        return count;
      };

      this.setState({
        filterValue: filterValue,
        filteredTermsTree: filteredTermsTree
      });
      var resultCount = getResultCount(filteredTermsTree);
      var resultsFoundMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
      this.props.debouncedSpeak(resultsFoundMessage, 'assertive');
    }
  }, {
    key: "getFilterMatcher",
    value: function getFilterMatcher(filterValue) {
      var matchTermsForFilter = function matchTermsForFilter(originalTerm) {
        if ('' === filterValue) {
          return originalTerm;
        } // Shallow clone, because we'll be filtering the term's children and
        // don't want to modify the original term.


        var term = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, originalTerm); // Map and filter the children, recursive so we deal with grandchildren
        // and any deeper levels.


        if (term.children.length > 0) {
          term.children = term.children.map(matchTermsForFilter).filter(function (child) {
            return child;
          });
        } // If the term's name contains the filterValue, or it has children
        // (i.e. some child matched at some point in the tree) then return it.


        if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
          return term;
        } // Otherwise, return false. After mapping, the list of terms will need
        // to have false values filtered out.


        return false;
      };

      return matchTermsForFilter;
    }
  }, {
    key: "renderTerms",
    value: function renderTerms(renderedTerms) {
      var _this4 = this;

      var _this$props$terms2 = this.props.terms,
          terms = _this$props$terms2 === void 0 ? [] : _this$props$terms2;
      return renderedTerms.map(function (term) {
        var id = "editor-post-taxonomies-hierarchical-term-".concat(term.id);
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("div", {
          key: term.id,
          className: "editor-post-taxonomies__hierarchical-terms-choice"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("input", {
          id: id,
          className: "editor-post-taxonomies__hierarchical-terms-input",
          type: "checkbox",
          checked: terms.indexOf(term.id) !== -1,
          value: term.id,
          onChange: _this4.onChange
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("label", {
          htmlFor: id
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_10__["unescape"])(term.name)), !!term.children.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("div", {
          className: "editor-post-taxonomies__hierarchical-terms-subchoices"
        }, _this4.renderTerms(term.children)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          slug = _this$props3.slug,
          taxonomy = _this$props3.taxonomy,
          instanceId = _this$props3.instanceId,
          hasCreateAction = _this$props3.hasCreateAction,
          hasAssignAction = _this$props3.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state2 = this.state,
          availableTermsTree = _this$state2.availableTermsTree,
          availableTerms = _this$state2.availableTerms,
          filteredTermsTree = _this$state2.filteredTermsTree,
          formName = _this$state2.formName,
          formParent = _this$state2.formParent,
          loading = _this$state2.loading,
          showForm = _this$state2.showForm,
          filterValue = _this$state2.filterValue;

      var labelWithFallback = function labelWithFallback(labelProperty, fallbackIsCategory, fallbackIsNotCategory) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);
      };

      var newTermButtonLabel = labelWithFallback('add_new_item', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add new category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add new term'));
      var newTermLabel = labelWithFallback('new_item_name', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add new category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add new term'));
      var parentSelectLabel = labelWithFallback('parent_item', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Parent Category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Parent Term'));
      var noParentOption = "\u2014 ".concat(parentSelectLabel, " \u2014");
      var newTermSubmitLabel = newTermButtonLabel;
      var inputId = "editor-post-taxonomies__hierarchical-terms-input-".concat(instanceId);
      var filterInputId = "editor-post-taxonomies__hierarchical-terms-filter-".concat(instanceId);
      var filterLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(this.props.taxonomy, ['labels', 'search_items'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Search Terms'));
      var groupLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(this.props.taxonomy, ['name'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Terms'));
      var showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
      return [showFilter && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("label", {
        key: "filter-label",
        htmlFor: filterInputId
      }, filterLabel), showFilter && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("input", {
        type: "search",
        id: filterInputId,
        value: filterValue,
        onChange: this.setFilterValue,
        className: "editor-post-taxonomies__hierarchical-terms-filter",
        key: "term-filter-input"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("div", {
        className: "editor-post-taxonomies__hierarchical-terms-list",
        key: "term-list",
        tabIndex: "0",
        role: "group",
        "aria-label": groupLabel
      }, this.renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        key: "term-add-button",
        onClick: this.onToggleForm,
        className: "editor-post-taxonomies__hierarchical-terms-add",
        "aria-expanded": showForm,
        isLink: true
      }, newTermButtonLabel), showForm && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("form", {
        onSubmit: this.onAddTerm,
        key: "hierarchical-terms-form"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("label", {
        htmlFor: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-label"
      }, newTermLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("input", {
        type: "text",
        id: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-input",
        value: formName,
        onChange: this.onChangeFormName,
        required: true
      }), !!availableTerms.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["TreeSelect"], {
        label: parentSelectLabel,
        noOptionLabel: noParentOption,
        onChange: this.onChangeFormParent,
        selectedId: formParent,
        tree: availableTermsTree
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        isDefault: true,
        type: "submit",
        className: "editor-post-taxonomies__hierarchical-terms-submit"
      }, newTermSubmitLabel))];
    }
  }]);

  return HierarchicalTermSelector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restBase, terms));
    }
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_12__["withSpokenMessages"], _wordpress_compose__WEBPACK_IMPORTED_MODULE_14__["withInstanceId"], Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["withFilters"])('editor.PostTaxonomyType')])(HierarchicalTermSelector));


/***/ }),

/***/ "./packages/editor/build-module/components/post-taxonomies/index.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-taxonomies/index.js ***!
  \**************************************************************************/
/*! exports provided: PostTaxonomies, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return PostTaxonomies; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hierarchical-term-selector */ "./packages/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js");
/* harmony import */ var _flat_term_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flat-term-selector */ "./packages/editor/build-module/components/post-taxonomies/flat-term-selector.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostTaxonomies(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      _ref$taxonomyWrapper = _ref.taxonomyWrapper,
      taxonomyWrapper = _ref$taxonomyWrapper === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["identity"] : _ref$taxonomyWrapper;
  var availableTaxonomies = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(taxonomies, function (taxonomy) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(taxonomy.types, postType);
  });
  var visibleTaxonomies = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(availableTaxonomies, function (taxonomy) {
    return taxonomy.visibility.show_ui;
  });
  return visibleTaxonomies.map(function (taxonomy) {
    var TaxonomyComponent = taxonomy.hierarchical ? _hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_4__["default"] : _flat_term_selector__WEBPACK_IMPORTED_MODULE_5__["default"];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: "taxonomy-".concat(taxonomy.slug)
    }, taxonomyWrapper(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));


/***/ }),

/***/ "./packages/editor/build-module/components/post-text-editor/index.js":
/*!***************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-text-editor/index.js ***!
  \***************************************************************************/
/*! exports provided: PostTextEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return PostTextEditor; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






var PostTextEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostTextEditor, _Component);

  function PostTextEditor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostTextEditor);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostTextEditor).apply(this, arguments));
    _this.edit = _this.edit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.stopEditing = _this.stopEditing.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostTextEditor, [{
    key: "edit",

    /**
     * Handles a textarea change event to notify the onChange prop callback and
     * reflect the new value in the component's own state. This marks the start
     * of the user's edits, if not already changed, preventing future props
     * changes to value from replacing the rendered value. This is expected to
     * be followed by a reset to dirty state via `stopEditing`.
     *
     * @see stopEditing
     *
     * @param {Event} event Change event.
     */
    value: function edit(event) {
      var value = event.target.value;
      this.props.onChange(value);
      this.setState({
        value: value,
        isDirty: true
      });
    }
    /**
     * Function called when the user has completed their edits, responsible for
     * ensuring that changes, if made, are surfaced to the onPersist prop
     * callback and resetting dirty state.
     */

  }, {
    key: "stopEditing",
    value: function stopEditing() {
      if (this.state.isDirty) {
        this.props.onPersist(this.state.value);
        this.setState({
          isDirty: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var instanceId = this.props.instanceId;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        htmlFor: "post-content-".concat(instanceId),
        className: "screen-reader-text"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Type text or HTML')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7___default.a, {
        autoComplete: "off",
        dir: "auto",
        value: value,
        onChange: this.edit,
        onBlur: this.stopEditing,
        className: "editor-post-text-editor",
        id: "post-content-".concat(instanceId),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Start writing with text or HTML')
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.isDirty) {
        return null;
      }

      return {
        value: props.value,
        isDirty: false
      };
    }
  }]);

  return PostTextEditor;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostContent = _select.getEditedPostContent;

  return {
    value: getEditedPostContent()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      resetEditorBlocks = _dispatch.resetEditorBlocks;

  return {
    onChange: function onChange(content) {
      editPost({
        content: content
      });
    },
    onPersist: function onPersist(content) {
      var blocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["parse"])(content);
      resetEditorBlocks(blocks);
    }
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["withInstanceId"]])(PostTextEditor));


/***/ }),

/***/ "./packages/editor/build-module/components/post-title/index.js":
/*!*********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-title/index.js ***!
  \*********************************************************************/
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
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _post_permalink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../post-permalink */ "./packages/editor/build-module/components/post-permalink/index.js");
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../post-type-support-check */ "./packages/editor/build-module/components/post-type-support-check/index.js");








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
 * Constants
 */

var REGEXP_NEWLINES = /[\r\n]+/g;

var PostTitle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostTitle, _Component);

  function PostTitle() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostTitle);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostTitle).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSelect = _this.onSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onUnselect = _this.onUnselect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.redirectHistory = _this.redirectHistory.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isSelected: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostTitle, [{
    key: "handleFocusOutside",
    value: function handleFocusOutside() {
      this.onUnselect();
    }
  }, {
    key: "onSelect",
    value: function onSelect() {
      this.setState({
        isSelected: true
      });
      this.props.clearSelectedBlock();
    }
  }, {
    key: "onUnselect",
    value: function onUnselect() {
      this.setState({
        isSelected: false
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var newTitle = event.target.value.replace(REGEXP_NEWLINES, ' ');
      this.props.onUpdate(newTitle);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_12__["ENTER"]) {
        event.preventDefault();
        this.props.onEnterPress();
      }
    }
    /**
     * Emulates behavior of an undo or redo on its corresponding key press
     * combination. This is a workaround to React's treatment of undo in a
     * controlled textarea where characters are updated one at a time.
     * Instead, leverage the store's undo handling of title changes.
     *
     * @see https://github.com/facebook/react/issues/8514
     *
     * @param {KeyboardEvent} event Key event.
     */

  }, {
    key: "redirectHistory",
    value: function redirectHistory(event) {
      if (event.shiftKey) {
        this.props.onRedo();
      } else {
        this.props.onUndo();
      }

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hasFixedToolbar = _this$props.hasFixedToolbar,
          isCleanNewPost = _this$props.isCleanNewPost,
          isFocusMode = _this$props.isFocusMode,
          isPostTypeViewable = _this$props.isPostTypeViewable,
          instanceId = _this$props.instanceId,
          placeholder = _this$props.placeholder,
          title = _this$props.title;
      var isSelected = this.state.isSelected; // The wp-block className is important for editor styles.

      var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()('wp-block editor-post-title__block', {
        'is-selected': isSelected,
        'is-focus-mode': isFocusMode,
        'has-fixed-toolbar': hasFixedToolbar
      });
      var decodedPlaceholder = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_11__["decodeEntities"])(placeholder);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_post_type_support_check__WEBPACK_IMPORTED_MODULE_17__["default"], {
        supportKeys: "title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "editor-post-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["KeyboardShortcuts"], {
        shortcuts: {
          'mod+z': this.redirectHistory,
          'mod+shift+z': this.redirectHistory
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        htmlFor: "post-title-".concat(instanceId),
        className: "screen-reader-text"
      }, decodedPlaceholder || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Add title')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "post-title-".concat(instanceId),
        className: "editor-post-title__input",
        value: title,
        onChange: this.onChange,
        placeholder: decodedPlaceholder || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Add title'),
        onFocus: this.onSelect,
        onKeyDown: this.onKeyDown,
        onKeyPress: this.onUnselect
        /*
        	Only autofocus the title when the post is entirely empty.
        	This should only happen for a new post, which means we
        	focus the title on new post so the author can start typing
        	right away, without needing to click anything.
        */

        /* eslint-disable jsx-a11y/no-autofocus */
        ,
        autoFocus: document.body === document.activeElement && isCleanNewPost
        /* eslint-enable jsx-a11y/no-autofocus */

      })), isSelected && isPostTypeViewable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_post_permalink__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
    }
  }]);

  return PostTitle;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isCleanNewPost = _select.isCleanNewPost;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));

  var _getSettings = getSettings(),
      titlePlaceholder = _getSettings.titlePlaceholder,
      focusMode = _getSettings.focusMode,
      hasFixedToolbar = _getSettings.hasFixedToolbar;

  return {
    isCleanNewPost: isCleanNewPost(),
    title: getEditedPostAttribute('title'),
    isPostTypeViewable: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(postType, ['viewable'], false),
    placeholder: titlePlaceholder,
    isFocusMode: focusMode,
    hasFixedToolbar: hasFixedToolbar
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      insertDefaultBlock = _dispatch.insertDefaultBlock,
      clearSelectedBlock = _dispatch.clearSelectedBlock;

  var _dispatch2 = dispatch('core/editor'),
      editPost = _dispatch2.editPost,
      undo = _dispatch2.undo,
      redo = _dispatch2.redo;

  return {
    onEnterPress: function onEnterPress() {
      insertDefaultBlock(undefined, undefined, 0);
    },
    onUpdate: function onUpdate(title) {
      editPost({
        title: title
      });
    },
    onUndo: undo,
    onRedo: redo,
    clearSelectedBlock: clearSelectedBlock
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__["compose"])(applyWithSelect, applyWithDispatch, _wordpress_compose__WEBPACK_IMPORTED_MODULE_15__["withInstanceId"], _wordpress_components__WEBPACK_IMPORTED_MODULE_14__["withFocusOutside"])(PostTitle));


/***/ }),

/***/ "./packages/editor/build-module/components/post-trash/check.js":
/*!*********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-trash/check.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


function PostTrashCheck(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      children = _ref.children;

  if (isNew || !postId) {
    return null;
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId()
  };
})(PostTrashCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-trash/index.js":
/*!*********************************************************************!*\
  !*** ./packages/editor/build-module/components/post-trash/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */





function PostTrash(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      postType = _ref.postType,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["isNew", "postId", "postType"]);

  if (isNew || !postId) {
    return null;
  }

  var onClick = function onClick() {
    return props.trashPost(postId, postType);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "editor-post-trash button-link-delete",
    onClick: onClick,
    isDefault: true,
    isLarge: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Move to Trash'));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId(),
    postType: getCurrentPostType()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  return {
    trashPost: dispatch('core/editor').trashPost
  };
})])(PostTrash));


/***/ }),

/***/ "./packages/editor/build-module/components/post-type-support-check/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-type-support-check/index.js ***!
  \**********************************************************************************/
/*! exports provided: PostTypeSupportCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return PostTypeSupportCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}            props
 * @param {string}            [props.postType]  Current post type.
 * @param {WPElement}         props.children    Children to be rendered if post
 *                                              type supports.
 * @param {(string|string[])} props.supportKeys String or string array of keys
 *                                              to test.
 *
 * @return {WPElement} Rendered element.
 */

function PostTypeSupportCheck(_ref) {
  var postType = _ref.postType,
      children = _ref.children,
      supportKeys = _ref.supportKeys;
  var isSupported = true;

  if (postType) {
    isSupported = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["some"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["castArray"])(supportKeys), function (key) {
      return !!postType.supports[key];
    });
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-visibility/check.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-visibility/check.js ***!
  \**************************************************************************/
/*! exports provided: PostVisibilityCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return PostVisibilityCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostVisibilityCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      render = _ref.render;
  var canEdit = hasPublishAction;
  return render({
    canEdit: canEdit
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/post-visibility/index.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-visibility/index.js ***!
  \**************************************************************************/
/*! exports provided: PostVisibility, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return PostVisibility; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./packages/editor/build-module/components/post-visibility/utils.js");








/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var PostVisibility =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostVisibility, _Component);

  function PostVisibility(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostVisibility);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostVisibility).apply(this, arguments));
    _this.setPublic = _this.setPublic.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setPrivate = _this.setPrivate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setPasswordProtected = _this.setPasswordProtected.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updatePassword = _this.updatePassword.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      hasPassword: !!props.password
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostVisibility, [{
    key: "setPublic",
    value: function setPublic() {
      var _this$props = this.props,
          visibility = _this$props.visibility,
          onUpdateVisibility = _this$props.onUpdateVisibility,
          status = _this$props.status;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status);
      this.setState({
        hasPassword: false
      });
    }
  }, {
    key: "setPrivate",
    value: function setPrivate() {
      if (!window.confirm(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Would you like to privately publish this post now?'))) {
        // eslint-disable-line no-alert
        return;
      }

      var _this$props2 = this.props,
          onUpdateVisibility = _this$props2.onUpdateVisibility,
          onSave = _this$props2.onSave;
      onUpdateVisibility('private');
      this.setState({
        hasPassword: false
      });
      onSave();
    }
  }, {
    key: "setPasswordProtected",
    value: function setPasswordProtected() {
      var _this$props3 = this.props,
          visibility = _this$props3.visibility,
          onUpdateVisibility = _this$props3.onUpdateVisibility,
          status = _this$props3.status,
          password = _this$props3.password;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
      this.setState({
        hasPassword: true
      });
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(event) {
      var _this$props4 = this.props,
          status = _this$props4.status,
          onUpdateVisibility = _this$props4.onUpdateVisibility;
      onUpdateVisibility(status, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          visibility = _this$props5.visibility,
          password = _this$props5.password,
          instanceId = _this$props5.instanceId;
      var visibilityHandlers = {
        public: {
          onSelect: this.setPublic,
          checked: visibility === 'public' && !this.state.hasPassword
        },
        private: {
          onSelect: this.setPrivate,
          checked: visibility === 'private'
        },
        password: {
          onSelect: this.setPasswordProtected,
          checked: this.state.hasPassword
        }
      };
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("fieldset", {
        key: "visibility-selector",
        className: "editor-post-visibility__dialog-fieldset"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("legend", {
        className: "editor-post-visibility__dialog-legend"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Post Visibility')), _utils__WEBPACK_IMPORTED_MODULE_10__["visibilityOptions"].map(function (_ref) {
        var value = _ref.value,
            label = _ref.label,
            info = _ref.info;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          key: value,
          className: "editor-post-visibility__choice"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "radio",
          name: "editor-post-visibility__setting-".concat(instanceId),
          value: value,
          onChange: visibilityHandlers[value].onSelect,
          checked: visibilityHandlers[value].checked,
          id: "editor-post-".concat(value, "-").concat(instanceId),
          "aria-describedby": "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-radio"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
          htmlFor: "editor-post-".concat(value, "-").concat(instanceId),
          className: "editor-post-visibility__dialog-label"
        }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
          id: "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-info"
        }, info));
      })), this.state.hasPassword && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "editor-post-visibility__dialog-password",
        key: "password-selector"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        htmlFor: "editor-post-visibility__dialog-password-input-".concat(instanceId),
        className: "screen-reader-text"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Create password')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        className: "editor-post-visibility__dialog-password-input",
        id: "editor-post-visibility__dialog-password-input-".concat(instanceId),
        type: "text",
        onChange: this.updatePassword,
        value: password,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Use a secure password')
      }))];
    }
  }]);

  return PostVisibility;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditedPostVisibility = _select.getEditedPostVisibility;

  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      savePost = _dispatch.savePost,
      editPost = _dispatch.editPost;

  return {
    onSave: savePost,
    onUpdateVisibility: function onUpdateVisibility(status) {
      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      editPost({
        status: status,
        password: password
      });
    }
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["withInstanceId"]])(PostVisibility));


/***/ }),

/***/ "./packages/editor/build-module/components/post-visibility/label.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-visibility/label.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/editor/build-module/components/post-visibility/utils.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostVisibilityLabel(_ref) {
  var visibility = _ref.visibility;

  var getVisibilityLabel = function getVisibilityLabel() {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(_utils__WEBPACK_IMPORTED_MODULE_2__["visibilityOptions"], {
      value: visibility
    }).label;
  };

  return getVisibilityLabel(visibility);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  return {
    visibility: select('core/editor').getEditedPostVisibility()
  };
})(PostVisibilityLabel));


/***/ }),

/***/ "./packages/editor/build-module/components/post-visibility/utils.js":
/*!**************************************************************************!*\
  !*** ./packages/editor/build-module/components/post-visibility/utils.js ***!
  \**************************************************************************/
/*! exports provided: visibilityOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibilityOptions", function() { return visibilityOptions; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var visibilityOptions = [{
  value: 'public',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Public'),
  info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Visible to everyone.')
}, {
  value: 'private',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Private'),
  info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Password Protected'),
  info: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Protected with a password you choose. Only those with the password can view this post.')
}];


/***/ }),

/***/ "./packages/editor/build-module/components/provider/index.js":
/*!*******************************************************************!*\
  !*** ./packages/editor/build-module/components/provider/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _with_registry_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./with-registry-provider */ "./packages/editor/build-module/components/provider/with-registry-provider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils */ "./packages/editor/build-module/utils/index.js");
/* harmony import */ var _reusable_blocks_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../reusable-blocks-buttons */ "./packages/editor/build-module/components/reusable-blocks-buttons/index.js");
/* harmony import */ var _convert_to_group_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../convert-to-group-buttons */ "./packages/editor/build-module/components/convert-to-group-buttons/index.js");
/* harmony import */ var _inserter_menu_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../inserter-menu-downloadable-blocks-panel */ "./packages/editor/build-module/components/inserter-menu-downloadable-blocks-panel/index.js");










/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */







var fetchLinkSuggestions =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(search) {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_15___default()({
              path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_16__["addQueryArgs"])('/wp/v2/search', {
                search: search,
                per_page: 20,
                type: 'post'
              })
            });

          case 2:
            posts = _context.sent;
            return _context.abrupt("return", Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(posts, function (post) {
              return {
                id: post.id,
                url: post.url,
                title: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_17__["decodeEntities"])(post.title) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('(no title)')
              };
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchLinkSuggestions(_x) {
    return _ref.apply(this, arguments);
  };
}();

var UNINSTALL_ERROR_NOTICE_ID = 'block-uninstall-error';

var EditorProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EditorProvider, _Component);

  function EditorProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditorProvider);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EditorProvider).apply(this, arguments));
    _this.getBlockEditorSettings = memize__WEBPACK_IMPORTED_MODULE_10___default()(_this.getBlockEditorSettings, {
      maxSize: 1
    }); // Assume that we don't need to initialize in the case of an error recovery.

    if (props.recovery) {
      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
    }

    props.updatePostLock(props.settings.postLock);
    props.setupEditor(props.post, props.initialEdits, props.settings.template);

    if (props.settings.autosave) {
      props.createWarningNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('View the autosave'),
          url: props.settings.autosave.editLink
        }]
      });
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EditorProvider, [{
    key: "getBlockEditorSettings",
    value: function getBlockEditorSettings(settings, reusableBlocks, hasUploadPermissions, canUserUseUnfilteredHTML) {
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(lodash__WEBPACK_IMPORTED_MODULE_9__["pick"])(settings, ['alignWide', 'allowedBlockTypes', '__experimentalPreferredStyleVariations', 'availableLegacyWidgets', 'bodyPlaceholder', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'focusMode', 'fontSizes', 'hasFixedToolbar', 'hasPermissionsToManageWidgets', 'imageSizes', 'isRTL', 'maxWidth', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'onUpdateDefaultBlockStyles', '__experimentalEnableLegacyWidgetBlock', '__experimentalEnableMenuBlock', '__experimentalBlockDirectory', 'showInserterHelpPanel']), {
        __experimentalReusableBlocks: reusableBlocks,
        __experimentalMediaUpload: hasUploadPermissions ? _utils__WEBPACK_IMPORTED_MODULE_20__["mediaUpload"] : undefined,
        __experimentalFetchLinkSuggestions: fetchLinkSuggestions,
        __experimentalCanUserUseUnfilteredHTML: canUserUseUnfilteredHTML
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.updateEditorSettings(this.props.settings);

      if (!this.props.settings.styles) {
        return;
      }

      var updatedStyles = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["transformStyles"])(this.props.settings.styles, '.editor-styles-wrapper');
      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(updatedStyles, function (updatedCSS) {
        if (updatedCSS) {
          var node = document.createElement('style');
          node.innerHTML = updatedCSS;
          document.body.appendChild(node);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.settings !== prevProps.settings) {
        this.props.updateEditorSettings(this.props.settings);
      } // When a block is installed from the inserter and is unused,
      // it is removed when saving the post.
      // Todo: move this to the edit-post package into a separate component.


      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isEqual"])(this.props.downloadableBlocksToUninstall, prevProps.downloadableBlocksToUninstall)) {
        this.props.downloadableBlocksToUninstall.forEach(function (blockType) {
          _this2.props.uninstallBlock(blockType, lodash__WEBPACK_IMPORTED_MODULE_9__["noop"], function () {
            _this2.props.createWarningNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Block previews can\'t uninstall.'), {
              id: UNINSTALL_ERROR_NOTICE_ID
            });
          });

          Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__["unregisterBlockType"])(blockType.name);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.tearDownEditor();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canUserUseUnfilteredHTML = _this$props.canUserUseUnfilteredHTML,
          children = _this$props.children,
          blocks = _this$props.blocks,
          resetEditorBlocks = _this$props.resetEditorBlocks,
          isReady = _this$props.isReady,
          settings = _this$props.settings,
          reusableBlocks = _this$props.reusableBlocks,
          resetEditorBlocksWithoutUndoLevel = _this$props.resetEditorBlocksWithoutUndoLevel,
          hasUploadPermissions = _this$props.hasUploadPermissions;

      if (!isReady) {
        return null;
      }

      var editorSettings = this.getBlockEditorSettings(settings, reusableBlocks, hasUploadPermissions, canUserUseUnfilteredHTML);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockEditorProvider"], {
        value: blocks,
        onInput: resetEditorBlocksWithoutUndoLevel,
        onChange: resetEditorBlocks,
        settings: editorSettings,
        useSubRegistry: false
      }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_reusable_blocks_buttons__WEBPACK_IMPORTED_MODULE_21__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_convert_to_group_buttons__WEBPACK_IMPORTED_MODULE_22__["default"], null), editorSettings.__experimentalBlockDirectory && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_inserter_menu_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_23__["default"], null));
    }
  }]);

  return EditorProvider;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])([_with_registry_provider__WEBPACK_IMPORTED_MODULE_19__["default"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withSelect"])(function (select) {
  var _select = select('core/editor'),
      canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML,
      isEditorReady = _select.__unstableIsEditorReady,
      getEditorBlocks = _select.getEditorBlocks,
      __experimentalGetReusableBlocks = _select.__experimentalGetReusableBlocks;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/block-directory'),
      getInstalledBlockTypes = _select3.getInstalledBlockTypes;

  var _select4 = select('core/block-editor'),
      getBlocks = _select4.getBlocks;

  var downloadableBlocksToUninstall = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["differenceBy"])(getInstalledBlockTypes(), getBlocks(), 'name');
  return {
    canUserUseUnfilteredHTML: canUserUseUnfilteredHTML(),
    isReady: isEditorReady(),
    blocks: getEditorBlocks(),
    reusableBlocks: __experimentalGetReusableBlocks(),
    hasUploadPermissions: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["defaultTo"])(canUser('create', 'media'), true),
    downloadableBlocksToUninstall: downloadableBlocksToUninstall
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      setupEditor = _dispatch.setupEditor,
      updatePostLock = _dispatch.updatePostLock,
      resetEditorBlocks = _dispatch.resetEditorBlocks,
      updateEditorSettings = _dispatch.updateEditorSettings,
      __experimentalTearDownEditor = _dispatch.__experimentalTearDownEditor;

  var _dispatch2 = dispatch('core/notices'),
      createWarningNotice = _dispatch2.createWarningNotice;

  var _dispatch3 = dispatch('core/block-directory'),
      uninstallBlock = _dispatch3.uninstallBlock;

  return {
    setupEditor: setupEditor,
    updatePostLock: updatePostLock,
    createWarningNotice: createWarningNotice,
    resetEditorBlocks: resetEditorBlocks,
    updateEditorSettings: updateEditorSettings,
    resetEditorBlocksWithoutUndoLevel: function resetEditorBlocksWithoutUndoLevel(blocks) {
      resetEditorBlocks(blocks, {
        __unstableShouldCreateUndoLevel: false
      });
    },
    tearDownEditor: __experimentalTearDownEditor,
    uninstallBlock: uninstallBlock
  };
})])(EditorProvider));


/***/ }),

/***/ "./packages/editor/build-module/components/provider/with-registry-provider.js":
/*!************************************************************************************!*\
  !*** ./packages/editor/build-module/components/provider/with-registry-provider.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./packages/editor/build-module/store/index.js");
/* harmony import */ var _store_middlewares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/middlewares */ "./packages/editor/build-module/store/middlewares.js");




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var withRegistryProvider = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(function (WrappedComponent) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withRegistry"])(function (props) {
    var _props$useSubRegistry = props.useSubRegistry,
        useSubRegistry = _props$useSubRegistry === void 0 ? true : _props$useSubRegistry,
        registry = props.registry,
        additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["useSubRegistry", "registry"]);

    if (!useSubRegistry) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WrappedComponent, additionalProps);
    }

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        subRegistry = _useState2[0],
        setSubRegistry = _useState2[1];

    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      var newRegistry = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["createRegistry"])({
        'core/block-editor': _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["storeConfig"]
      }, registry);
      var store = newRegistry.registerStore('core/editor', _store__WEBPACK_IMPORTED_MODULE_6__["storeConfig"]); // This should be removed after the refactoring of the effects to controls.

      Object(_store_middlewares__WEBPACK_IMPORTED_MODULE_7__["default"])(store);
      setSubRegistry(newRegistry);
    }, [registry]);

    if (!subRegistry) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["RegistryProvider"], {
      value: subRegistry
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WrappedComponent, additionalProps));
  });
}, 'withRegistryProvider');
/* harmony default export */ __webpack_exports__["default"] = (withRegistryProvider);


/***/ }),

/***/ "./packages/editor/build-module/components/reusable-blocks-buttons/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/editor/build-module/components/reusable-blocks-buttons/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reusable_block_convert_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable-block-convert-button */ "./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-convert-button.js");
/* harmony import */ var _reusable_block_delete_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reusable-block-delete-button */ "./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-delete-button.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ReusableBlocksButtons(_ref) {
  var clientIds = _ref.clientIds;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["__experimentalBlockSettingsMenuPluginsExtension"], null, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_reusable_block_convert_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clientIds: clientIds,
      onToggle: onClose
    }), clientIds.length === 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_reusable_block_delete_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clientId: clientIds[0],
      onToggle: onClose
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ReusableBlocksButtons));


/***/ }),

/***/ "./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-convert-button.js":
/*!**********************************************************************************************************!*\
  !*** ./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-convert-button.js ***!
  \**********************************************************************************************************/
/*! exports provided: ReusableBlockConvertButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableBlockConvertButton", function() { return ReusableBlockConvertButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ReusableBlockConvertButton(_ref) {
  var isVisible = _ref.isVisible,
      isReusable = _ref.isReusable,
      onConvertToStatic = _ref.onConvertToStatic,
      onConvertToReusable = _ref.onConvertToReusable;

  if (!isVisible) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !isReusable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToReusable
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add to Reusable Blocks')), isReusable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToStatic
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Convert to Regular Block')));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/editor'),
      getReusableBlock = _select2.__experimentalGetReusableBlock;

  var _select3 = select('core'),
      canUser = _select3.canUser;

  var blocks = getBlocksByClientId(clientIds);
  var isReusable = blocks.length === 1 && blocks[0] && Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["isReusableBlock"])(blocks[0]) && !!getReusableBlock(blocks[0].attributes.ref); // Show 'Convert to Regular Block' when selected block is a reusable block

  var isVisible = isReusable || // Hide 'Add to Reusable Blocks' when reusable blocks are disabled
  canInsertBlockType('core/block') && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["every"])(blocks, function (block) {
    return (// Guard against the case where a regular block has *just* been converted
      !!block && // Hide 'Add to Reusable Blocks' on invalid blocks
      block.isValid && // Hide 'Add to Reusable Blocks' when block doesn't support being made reusable
      Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["hasBlockSupport"])(block.name, 'reusable', true)
    );
  }) && // Hide 'Add to Reusable Blocks' when current doesn't have permission to do that
  !!canUser('create', 'blocks');
  return {
    isReusable: isReusable,
    isVisible: isVisible
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref3$onToggle;

  var _dispatch = dispatch('core/editor'),
      convertBlockToReusable = _dispatch.__experimentalConvertBlockToReusable,
      convertBlockToStatic = _dispatch.__experimentalConvertBlockToStatic;

  return {
    onConvertToStatic: function onConvertToStatic() {
      if (clientIds.length !== 1) {
        return;
      }

      convertBlockToStatic(clientIds[0]);
      onToggle();
    },
    onConvertToReusable: function onConvertToReusable() {
      convertBlockToReusable(clientIds);
      onToggle();
    }
  };
})])(ReusableBlockConvertButton));


/***/ }),

/***/ "./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-delete-button.js":
/*!*********************************************************************************************************!*\
  !*** ./packages/editor/build-module/components/reusable-blocks-buttons/reusable-block-delete-button.js ***!
  \*********************************************************************************************************/
/*! exports provided: ReusableBlockDeleteButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableBlockDeleteButton", function() { return ReusableBlockDeleteButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ReusableBlockDeleteButton(_ref) {
  var isVisible = _ref.isVisible,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete;

  if (!isVisible) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "no",
    disabled: isDisabled,
    onClick: function onClick() {
      return onDelete();
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Remove from Reusable Blocks'));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/editor'),
      getReusableBlock = _select3.__experimentalGetReusableBlock;

  var block = getBlock(clientId);
  var reusableBlock = block && Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["isReusableBlock"])(block) ? getReusableBlock(block.attributes.ref) : null;
  return {
    isVisible: !!reusableBlock && !!canUser('delete', 'blocks', reusableBlock.id),
    isDisabled: reusableBlock && reusableBlock.isTemporary
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch, _ref3, _ref4) {
  var clientId = _ref3.clientId,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref3$onToggle;
  var select = _ref4.select;

  var _dispatch = dispatch('core/editor'),
      deleteReusableBlock = _dispatch.__experimentalDeleteReusableBlock;

  var _select4 = select('core/block-editor'),
      getBlock = _select4.getBlock;

  return {
    onDelete: function onDelete() {
      // TODO: Make this a <Confirm /> component or similar
      // eslint-disable-next-line no-alert
      var hasConfirmed = window.confirm(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Are you sure you want to delete this Reusable Block?\n\n' + 'It will be permanently removed from all posts and pages that use it.'));

      if (hasConfirmed) {
        var block = getBlock(clientId);
        deleteReusableBlock(block.attributes.ref);
        onToggle();
      }
    }
  };
})])(ReusableBlockDeleteButton));


/***/ }),

/***/ "./packages/editor/build-module/components/table-of-contents/index.js":
/*!****************************************************************************!*\
  !*** ./packages/editor/build-module/components/table-of-contents/index.js ***!
  \****************************************************************************/
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
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel */ "./packages/editor/build-module/components/table-of-contents/panel.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function TableOfContents(_ref) {
  var hasBlocks = _ref.hasBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    position: "bottom",
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
        onClick: hasBlocks ? onToggle : undefined,
        icon: "info-outline",
        "aria-expanded": isOpen,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content structure'),
        labelPosition: "bottom",
        "aria-disabled": !hasBlocks
      });
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    hasBlocks: !!select('core/block-editor').getBlockCount()
  };
})(TableOfContents));


/***/ }),

/***/ "./packages/editor/build-module/components/table-of-contents/panel.js":
/*!****************************************************************************!*\
  !*** ./packages/editor/build-module/components/table-of-contents/panel.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _word_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../word-count */ "./packages/editor/build-module/components/word-count/index.js");
/* harmony import */ var _document_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-outline */ "./packages/editor/build-module/components/document-outline/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function TableOfContentsPanel(_ref) {
  var headingCount = _ref.headingCount,
      paragraphCount = _ref.paragraphCount,
      numberOfBlocks = _ref.numberOfBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled,
      onRequestClose = _ref.onRequestClose;
  return (
    /*
    * Disable reason: The `list` ARIA role is redundant but
    * Safari+VoiceOver won't announce the list otherwise.
    */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Document Statistics'),
      tabIndex: "0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Words'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_word_count__WEBPACK_IMPORTED_MODULE_3__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Headings'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "table-of-contents__number"
    }, headingCount)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Paragraphs'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blocks'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "table-of-contents__title"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Document Outline')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_document_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getGlobalBlockCount = _select.getGlobalBlockCount;

  return {
    headingCount: getGlobalBlockCount('core/heading'),
    paragraphCount: getGlobalBlockCount('core/paragraph'),
    numberOfBlocks: getGlobalBlockCount()
  };
})(TableOfContentsPanel));


/***/ }),

/***/ "./packages/editor/build-module/components/template-validation-notice/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/editor/build-module/components/template-validation-notice/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */





function TemplateValidationNotice(_ref) {
  var isValid = _ref.isValid,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["isValid"]);

  if (isValid) {
    return null;
  }

  var confirmSynchronization = function confirmSynchronization() {
    // eslint-disable-next-line no-alert
    if (window.confirm(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Notice"], {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The content of your post doesn’t match the template assigned to your post type.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isDefault: true,
    onClick: props.resetTemplateValidity
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Keep it as is')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: confirmSynchronization,
    isPrimary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reset the template'))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select) {
  return {
    isValid: select('core/block-editor').isValidTemplate()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      setTemplateValidity = _dispatch.setTemplateValidity,
      synchronizeTemplate = _dispatch.synchronizeTemplate;

  return {
    resetTemplateValidity: function resetTemplateValidity() {
      return setTemplateValidity(true);
    },
    synchronizeTemplate: synchronizeTemplate
  };
})])(TemplateValidationNotice));


/***/ }),

/***/ "./packages/editor/build-module/components/theme-support-check/index.js":
/*!******************************************************************************!*\
  !*** ./packages/editor/build-module/components/theme-support-check/index.js ***!
  \******************************************************************************/
/*! exports provided: ThemeSupportCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSupportCheck", function() { return ThemeSupportCheck; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function ThemeSupportCheck(_ref) {
  var themeSupports = _ref.themeSupports,
      children = _ref.children,
      postType = _ref.postType,
      supportKeys = _ref.supportKeys;
  var isSupported = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["some"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["castArray"])(supportKeys), function (key) {
    var supported = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(supported)) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select('core'),
      getThemeSupports = _select.getThemeSupports;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));


/***/ }),

/***/ "./packages/editor/build-module/components/unsaved-changes-warning/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/editor/build-module/components/unsaved-changes-warning/index.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);







/**
 * WordPress dependencies
 */




var UnsavedChangesWarning =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UnsavedChangesWarning, _Component);

  function UnsavedChangesWarning() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnsavedChangesWarning);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UnsavedChangesWarning).apply(this, arguments));
    _this.warnIfUnsavedChanges = _this.warnIfUnsavedChanges.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UnsavedChangesWarning, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('beforeunload', this.warnIfUnsavedChanges);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('beforeunload', this.warnIfUnsavedChanges);
    }
    /**
     * Warns the user if there are unsaved changes before leaving the editor.
     *
     * @param {Event} event `beforeunload` event.
     *
     * @return {?string} Warning prompt message, if unsaved changes exist.
     */

  }, {
    key: "warnIfUnsavedChanges",
    value: function warnIfUnsavedChanges(event) {
      var isDirty = this.props.isDirty;

      if (isDirty) {
        event.returnValue = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('You have unsaved changes. If you proceed, they will be lost.');
        return event.returnValue;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return UnsavedChangesWarning;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select) {
  return {
    isDirty: select('core/editor').isEditedPostDirty()
  };
})(UnsavedChangesWarning));


/***/ }),

/***/ "./packages/editor/build-module/components/word-count/index.js":
/*!*********************************************************************!*\
  !*** ./packages/editor/build-module/components/word-count/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




function WordCount(_ref) {
  var content = _ref.content;

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  var wordCountType = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('words', 'Word count type. Do not translate!');

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "word-count"
  }, Object(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__["count"])(content, wordCountType));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  return {
    content: select('core/editor').getEditedPostAttribute('content')
  };
})(WordCount));


/***/ }),

/***/ "./packages/editor/build-module/hooks/default-autocompleters.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/hooks/default-autocompleters.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./packages/editor/build-module/components/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var defaultAutocompleters = [_components__WEBPACK_IMPORTED_MODULE_3__["userAutocompleter"]];

function setDefaultCompleters(completers, blockName) {
  if (!completers) {
    // Provide copies so filters may directly modify them.
    completers = defaultAutocompleters.map(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"]); // Add blocks autocompleter for Paragraph block

    if (blockName === Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["getDefaultBlockName"])()) {
      completers.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"])(_components__WEBPACK_IMPORTED_MODULE_3__["blockAutocompleter"]));
    }
  }

  return completers;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);


/***/ }),

/***/ "./packages/editor/build-module/hooks/index.js":
/*!*****************************************************!*\
  !*** ./packages/editor/build-module/hooks/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_autocompleters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-autocompleters */ "./packages/editor/build-module/hooks/default-autocompleters.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./packages/editor/build-module/index.js":
/*!***********************************************!*\
  !*** ./packages/editor/build-module/index.js ***!
  \***********************************************/
/*! exports provided: storeConfig, transformStyles, AutosaveMonitor, DocumentOutline, DocumentOutlineCheck, VisualEditorGlobalKeyboardShortcuts, EditorGlobalKeyboardShortcuts, TextEditorGlobalKeyboardShortcuts, EditorHistoryRedo, EditorHistoryUndo, EditorNotices, ErrorBoundary, LocalAutosaveMonitor, PageAttributesCheck, PageAttributesOrder, PageAttributesParent, PageTemplate, PostAuthor, PostAuthorCheck, PostComments, PostExcerpt, PostExcerptCheck, PostFeaturedImage, PostFeaturedImageCheck, PostFormat, PostFormatCheck, PostLastRevision, PostLastRevisionCheck, PostLockedModal, PostPendingStatus, PostPendingStatusCheck, PostPingbacks, PostPreviewButton, PostPublishButton, PostPublishButtonLabel, PostPublishPanel, PostSavedState, PostSchedule, PostScheduleCheck, PostScheduleLabel, PostSticky, PostStickyCheck, PostSwitchToDraftButton, PostTaxonomies, PostTaxonomiesCheck, PostTextEditor, PostTitle, PostTrash, PostTrashCheck, PostTypeSupportCheck, PostVisibility, PostVisibilityLabel, PostVisibilityCheck, TableOfContents, UnsavedChangesWarning, WordCount, EditorProvider, mediaUpload, cleanForSlug, blockAutocompleter, userAutocompleter, ServerSideRender, RichText, Autocomplete, AlignmentToolbar, BlockAlignmentToolbar, BlockControls, BlockEdit, BlockEditorKeyboardShortcuts, BlockFormatControls, BlockIcon, BlockInspector, BlockList, BlockMover, BlockNavigationDropdown, BlockSelectionClearer, BlockSettingsMenu, BlockTitle, BlockToolbar, ColorPalette, ContrastChecker, CopyHandler, DefaultBlockAppender, FontSizePicker, Inserter, InnerBlocks, InspectorAdvancedControls, InspectorControls, PanelColorSettings, PlainText, RichTextShortcut, RichTextToolbarButton, __unstableRichTextInputEvent, MediaPlaceholder, MediaUpload, MediaUploadCheck, MultiBlocksSwitcher, MultiSelectScrollIntoView, NavigableToolbar, ObserveTyping, PreserveScrollInReorder, SkipToSelectedBlock, URLInput, URLInputButton, URLPopover, Warning, WritingFlow, createCustomColorsHOC, getColorClassName, getColorObjectByAttributeValues, getColorObjectByColorValue, getFontSize, getFontSizeClass, withColorContext, withColors, withFontSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/nux */ "@wordpress/nux");
/* harmony import */ var _wordpress_nux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_nux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./packages/editor/build-module/store/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./packages/editor/build-module/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./packages/editor/build-module/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["AutosaveMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["DocumentOutline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentOutlineCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["DocumentOutlineCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualEditorGlobalKeyboardShortcuts", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["VisualEditorGlobalKeyboardShortcuts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorGlobalKeyboardShortcuts", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["EditorGlobalKeyboardShortcuts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEditorGlobalKeyboardShortcuts", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["TextEditorGlobalKeyboardShortcuts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorHistoryRedo", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["EditorHistoryRedo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorHistoryUndo", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["EditorHistoryUndo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["EditorNotices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["ErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalAutosaveMonitor", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["LocalAutosaveMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PageAttributesCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PageAttributesOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PageAttributesParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PageTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostAuthorCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostComments", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostComments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExcerpt", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostExcerpt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExcerptCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostExcerptCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFeaturedImage", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostFeaturedImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostFeaturedImageCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFormat", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFormatCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostFormatCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLastRevision", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostLastRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostLastRevisionCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostLockedModal", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostLockedModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPendingStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPendingStatusCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPingbacks", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPingbacks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPreviewButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPublishButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishButtonLabel", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPublishButtonLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostPublishPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostSavedState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostScheduleCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostScheduleLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSticky", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostSticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostStickyCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSwitchToDraftButton", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostSwitchToDraftButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTaxonomies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTaxonomiesCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTextEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTitle", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTrash", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTrash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTrashCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTrashCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostTypeSupportCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibilityLabel", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostVisibilityLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PostVisibilityCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["TableOfContents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesWarning", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["UnsavedChangesWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordCount", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["WordCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["EditorProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockAutocompleter", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["blockAutocompleter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["userAutocompleter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["Autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["AlignmentToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockAlignmentToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockEditorKeyboardShortcuts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockFormatControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockInspector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockList", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockMover", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockMover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockNavigationDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockSelectionClearer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockSettingsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["BlockToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["ContrastChecker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["CopyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["DefaultBlockAppender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["FontSizePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inserter", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["Inserter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["InnerBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["InspectorAdvancedControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PanelColorSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainText", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PlainText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["RichTextShortcut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["RichTextToolbarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["__unstableRichTextInputEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["MediaPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["MediaUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["MediaUploadCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiBlocksSwitcher", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["MultiBlocksSwitcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["MultiSelectScrollIntoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["NavigableToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["ObserveTyping"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["PreserveScrollInReorder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["SkipToSelectedBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLInput", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["URLInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["URLInputButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLPopover", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["URLPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["Warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["WritingFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["createCustomColorsHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["getColorClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["getColorObjectByAttributeValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["getColorObjectByColorValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontSize", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["getFontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["getFontSizeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withColorContext", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["withColorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withColors", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["withColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["withFontSizes"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./packages/editor/build-module/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return _utils__WEBPACK_IMPORTED_MODULE_10__["mediaUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return _utils__WEBPACK_IMPORTED_MODULE_10__["cleanForSlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeConfig", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["storeConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformStyles", function() { return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["transformStyles"]; });

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






/*
 * Backward compatibility
 */




/***/ }),

/***/ "./packages/editor/build-module/store/actions.js":
/*!*******************************************************!*\
  !*** ./packages/editor/build-module/store/actions.js ***!
  \*******************************************************/
/*! exports provided: setupEditor, __experimentalTearDownEditor, __experimentalSubscribeSources, resetPost, resetAutosave, __experimentalRequestPostUpdateStart, __experimentalRequestPostUpdateFinish, updatePost, setupEditorState, editPost, __experimentalOptimisticUpdatePost, savePost, refreshPost, trashPost, autosave, redo, undo, createUndoLevel, updatePostLock, __experimentalFetchReusableBlocks, __experimentalReceiveReusableBlocks, __experimentalSaveReusableBlock, __experimentalDeleteReusableBlock, __experimentalUpdateReusableBlock, __experimentalConvertBlockToStatic, __experimentalConvertBlockToReusable, enablePublishSidebar, disablePublishSidebar, lockPostSaving, unlockPostSaving, resetEditorBlocks, updateEditorSettings, resetBlocks, receiveBlocks, updateBlock, updateBlockAttributes, selectBlock, startMultiSelect, stopMultiSelect, multiSelect, clearSelectedBlock, toggleSelection, replaceBlocks, replaceBlock, moveBlocksDown, moveBlocksUp, moveBlockToPosition, insertBlock, insertBlocks, showInsertionPoint, hideInsertionPoint, setTemplateValidity, synchronizeTemplate, mergeBlocks, removeBlocks, removeBlock, toggleBlockMode, startTyping, stopTyping, enterFormattedText, exitFormattedText, insertDefaultBlock, updateBlockListSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEditor", function() { return setupEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalTearDownEditor", function() { return __experimentalTearDownEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalSubscribeSources", function() { return __experimentalSubscribeSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPost", function() { return resetPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAutosave", function() { return resetAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalRequestPostUpdateStart", function() { return __experimentalRequestPostUpdateStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalRequestPostUpdateFinish", function() { return __experimentalRequestPostUpdateFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEditorState", function() { return setupEditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalOptimisticUpdatePost", function() { return __experimentalOptimisticUpdatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePost", function() { return savePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshPost", function() { return refreshPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trashPost", function() { return trashPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosave", function() { return autosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redo", function() { return redo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUndoLevel", function() { return createUndoLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostLock", function() { return updatePostLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalFetchReusableBlocks", function() { return __experimentalFetchReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalReceiveReusableBlocks", function() { return __experimentalReceiveReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalSaveReusableBlock", function() { return __experimentalSaveReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalDeleteReusableBlock", function() { return __experimentalDeleteReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalUpdateReusableBlock", function() { return __experimentalUpdateReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalConvertBlockToStatic", function() { return __experimentalConvertBlockToStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalConvertBlockToReusable", function() { return __experimentalConvertBlockToReusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePublishSidebar", function() { return enablePublishSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disablePublishSidebar", function() { return disablePublishSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockPostSaving", function() { return lockPostSaving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlockPostSaving", function() { return unlockPostSaving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetEditorBlocks", function() { return resetEditorBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEditorSettings", function() { return updateEditorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBlocks", function() { return resetBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveBlocks", function() { return receiveBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlock", function() { return updateBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlockAttributes", function() { return updateBlockAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlock", function() { return selectBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMultiSelect", function() { return startMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopMultiSelect", function() { return stopMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiSelect", function() { return multiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSelectedBlock", function() { return clearSelectedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSelection", function() { return toggleSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBlocks", function() { return replaceBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBlock", function() { return replaceBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlocksDown", function() { return moveBlocksDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlocksUp", function() { return moveBlocksUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlockToPosition", function() { return moveBlockToPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBlock", function() { return insertBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBlocks", function() { return insertBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInsertionPoint", function() { return showInsertionPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideInsertionPoint", function() { return hideInsertionPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemplateValidity", function() { return setTemplateValidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "synchronizeTemplate", function() { return synchronizeTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeBlocks", function() { return mergeBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlocks", function() { return removeBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlock", function() { return removeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBlockMode", function() { return toggleBlockMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTyping", function() { return startTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTyping", function() { return stopTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterFormattedText", function() { return enterFormattedText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitFormattedText", function() { return exitFormattedText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertDefaultBlock", function() { return insertDefaultBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlockListSettings", function() { return updateBlockListSettings; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./packages/editor/build-module/store/constants.js");
/* harmony import */ var _utils_notice_builder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/notice-builder */ "./packages/editor/build-module/store/utils/notice-builder.js");
/* harmony import */ var _utils_serialize_blocks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/serialize-blocks */ "./packages/editor/build-module/store/utils/serialize-blocks.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls */ "./packages/editor/build-module/store/controls.js");
/* harmony import */ var _block_sources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-sources */ "./packages/editor/build-module/store/block-sources/index.js");






var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getBlocksWithSourcedAttributes),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetLastBlockSourceDependencies),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(setupEditor),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(__experimentalSubscribeSources),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetAutosave),
    _marked6 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editPost),
    _marked7 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(savePost),
    _marked8 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(refreshPost),
    _marked9 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(trashPost),
    _marked10 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(autosave),
    _marked11 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(redo),
    _marked12 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(undo),
    _marked13 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetEditorBlocks);

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
 * Map of Registry instance to WeakMap of dependencies by custom source.
 *
 * @type WeakMap<WPDataRegistry,WeakMap<WPBlockAttributeSource,Object>>
 */

var lastBlockSourceDependenciesByRegistry = new WeakMap();
/**
 * Given a blocks array, returns a blocks array with sourced attribute values
 * applied. The reference will remain consistent with the original argument if
 * no attribute values must be overridden. If sourced values are applied, the
 * return value will be a modified copy of the original array.
 *
 * @param {WPBlock[]} blocks Original blocks array.
 *
 * @return {WPBlock[]} Blocks array with sourced values applied.
 */

function getBlocksWithSourcedAttributes(blocks) {
  var registry, blockSourceDependencies, workingBlocks, i, block, blockType, _i, _Object$entries, _Object$entries$_i, attributeName, schema, dependencies, sourcedAttributeValue, appliedInnerBlocks;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getBlocksWithSourcedAttributes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_13__["getRegistry"])();

        case 2:
          registry = _context.sent;

          if (lastBlockSourceDependenciesByRegistry.has(registry)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", blocks);

        case 5:
          blockSourceDependencies = lastBlockSourceDependenciesByRegistry.get(registry);
          workingBlocks = blocks;
          i = 0;

        case 8:
          if (!(i < blocks.length)) {
            _context.next = 37;
            break;
          }

          block = blocks[i];
          _context.next = 12;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core/blocks', 'getBlockType', block.name);

        case 12:
          blockType = _context.sent;
          _i = 0, _Object$entries = Object.entries(blockType.attributes);

        case 14:
          if (!(_i < _Object$entries.length)) {
            _context.next = 30;
            break;
          }

          _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$entries[_i], 2), attributeName = _Object$entries$_i[0], schema = _Object$entries$_i[1];

          if (!(!_block_sources__WEBPACK_IMPORTED_MODULE_14__[schema.source] || !_block_sources__WEBPACK_IMPORTED_MODULE_14__[schema.source].apply)) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("continue", 27);

        case 18:
          if (blockSourceDependencies.has(_block_sources__WEBPACK_IMPORTED_MODULE_14__[schema.source])) {
            _context.next = 20;
            break;
          }

          return _context.abrupt("continue", 27);

        case 20:
          dependencies = blockSourceDependencies.get(_block_sources__WEBPACK_IMPORTED_MODULE_14__[schema.source]);
          sourcedAttributeValue = _block_sources__WEBPACK_IMPORTED_MODULE_14__[schema.source].apply(schema, dependencies); // It's only necessary to apply the value if it differs from the
          // block's locally-assigned value, to avoid needlessly resetting
          // the block editor.

          if (!(sourcedAttributeValue === block.attributes[attributeName])) {
            _context.next = 24;
            break;
          }

          return _context.abrupt("continue", 27);

        case 24:
          // Create a shallow clone to mutate, leaving the original intact.
          if (workingBlocks === blocks) {
            workingBlocks = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(workingBlocks);
          }

          block = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, block, {
            attributes: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, block.attributes, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributeName, sourcedAttributeValue))
          });
          workingBlocks.splice(i, 1, block);

        case 27:
          _i++;
          _context.next = 14;
          break;

        case 30:
          if (!block.innerBlocks.length) {
            _context.next = 34;
            break;
          }

          return _context.delegateYield(getBlocksWithSourcedAttributes(block.innerBlocks), "t0", 32);

        case 32:
          appliedInnerBlocks = _context.t0;

          if (appliedInnerBlocks !== block.innerBlocks) {
            if (workingBlocks === blocks) {
              workingBlocks = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(workingBlocks);
            }

            block = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, block, {
              innerBlocks: appliedInnerBlocks
            });
            workingBlocks.splice(i, 1, block);
          }

        case 34:
          i++;
          _context.next = 8;
          break;

        case 37:
          return _context.abrupt("return", workingBlocks);

        case 38:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Refreshes the last block source dependencies, optionally for a given subset
 * of sources (defaults to the full set of sources).
 *
 * @param {?Array} sourcesToUpdate Optional subset of sources to reset.
 *
 * @yield {Object} Yielded actions or control descriptors.
 */


function resetLastBlockSourceDependencies() {
  var sourcesToUpdate,
      registry,
      lastBlockSourceDependencies,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      source,
      dependencies,
      _args2 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetLastBlockSourceDependencies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          sourcesToUpdate = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : Object.values(_block_sources__WEBPACK_IMPORTED_MODULE_14__);

          if (sourcesToUpdate.length) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          _context2.next = 5;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_13__["getRegistry"])();

        case 5:
          registry = _context2.sent;

          if (!lastBlockSourceDependenciesByRegistry.has(registry)) {
            lastBlockSourceDependenciesByRegistry.set(registry, new WeakMap());
          }

          lastBlockSourceDependencies = lastBlockSourceDependenciesByRegistry.get(registry);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 11;
          _iterator = sourcesToUpdate[Symbol.iterator]();

        case 13:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 21;
            break;
          }

          source = _step.value;
          return _context2.delegateYield(source.getDependencies(), "t0", 16);

        case 16:
          dependencies = _context2.t0;
          lastBlockSourceDependencies.set(source, dependencies);

        case 18:
          _iteratorNormalCompletion = true;
          _context2.next = 13;
          break;

        case 21:
          _context2.next = 27;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t1 = _context2["catch"](11);
          _didIteratorError = true;
          _iteratorError = _context2.t1;

        case 27:
          _context2.prev = 27;
          _context2.prev = 28;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 30:
          _context2.prev = 30;

          if (!_didIteratorError) {
            _context2.next = 33;
            break;
          }

          throw _iteratorError;

        case 33:
          return _context2.finish(30);

        case 34:
          return _context2.finish(27);

        case 35:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[11, 23, 27, 35], [28,, 30, 34]]);
}
/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post      Post object.
 * @param {Object} edits     Initial edited attributes object.
 * @param {Array?} template  Block Template.
 */


function setupEditor(post, edits, template) {
  var content, blocks, isNewPost;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setupEditor$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // In order to ensure maximum of a single parse during setup, edits are
          // included as part of editor setup action. Assume edited content as
          // canonical if provided, falling back to post.
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["has"])(edits, ['content'])) {
            content = edits.content;
          } else {
            content = post.content.raw;
          }

          blocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__["parse"])(content); // Apply a template for new posts only, if exists.

          isNewPost = post.status === 'auto-draft';

          if (isNewPost && template) {
            blocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__["synchronizeBlocksWithTemplate"])(blocks, template);
          }

          _context3.next = 6;
          return resetPost(post);

        case 6:
          return _context3.delegateYield(resetLastBlockSourceDependencies(), "t0", 7);

        case 7:
          _context3.next = 9;
          return {
            type: 'SETUP_EDITOR',
            post: post,
            edits: edits,
            template: template
          };

        case 9:
          _context3.next = 11;
          return resetEditorBlocks(blocks, {
            __unstableShouldCreateUndoLevel: false
          });

        case 11:
          _context3.next = 13;
          return setupEditorState(post);

        case 13:
          if (!(edits && Object.keys(edits).some(function (key) {
            return edits[key] !== (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["has"])(post, [key, 'raw']) ? post[key].raw : post[key]);
          }))) {
            _context3.next = 16;
            break;
          }

          _context3.next = 16;
          return editPost(edits);

        case 16:
          return _context3.delegateYield(__experimentalSubscribeSources(), "t1", 17);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function __experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action generator which loops to await the next state change,
 * calling to reset blocks when a block source dependencies change.
 *
 * @yield {Object} Action object.
 */

function __experimentalSubscribeSources() {
  var isStillReady, registry, reset, _i2, _Object$values, source, dependencies, lastBlockSourceDependencies, lastDependencies;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function __experimentalSubscribeSources$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {}

          _context4.next = 3;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_13__["awaitNextStateChange"])();

        case 3:
          _context4.next = 5;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], '__unstableIsEditorReady');

        case 5:
          isStillReady = _context4.sent;

          if (isStillReady) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("break", 36);

        case 8:
          _context4.next = 10;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_13__["getRegistry"])();

        case 10:
          registry = _context4.sent;
          reset = false;
          _i2 = 0, _Object$values = Object.values(_block_sources__WEBPACK_IMPORTED_MODULE_14__);

        case 13:
          if (!(_i2 < _Object$values.length)) {
            _context4.next = 26;
            break;
          }

          source = _Object$values[_i2];

          if (source.getDependencies) {
            _context4.next = 17;
            break;
          }

          return _context4.abrupt("continue", 23);

        case 17:
          return _context4.delegateYield(source.getDependencies(), "t0", 18);

        case 18:
          dependencies = _context4.t0;

          if (!lastBlockSourceDependenciesByRegistry.has(registry)) {
            lastBlockSourceDependenciesByRegistry.set(registry, new WeakMap());
          }

          lastBlockSourceDependencies = lastBlockSourceDependenciesByRegistry.get(registry);
          lastDependencies = lastBlockSourceDependencies.get(source);

          if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default()(dependencies, lastDependencies)) {
            lastBlockSourceDependencies.set(source, dependencies); // Allow the loop to continue in order to assign latest
            // dependencies values, but mark for reset.

            reset = true;
          }

        case 23:
          _i2++;
          _context4.next = 13;
          break;

        case 26:
          if (!reset) {
            _context4.next = 34;
            break;
          }

          _context4.t1 = resetEditorBlocks;
          _context4.next = 30;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getEditorBlocks');

        case 30:
          _context4.t2 = _context4.sent;
          _context4.t3 = {
            __unstableShouldCreateUndoLevel: false
          };
          _context4.next = 34;
          return (0, _context4.t1)(_context4.t2, _context4.t3);

        case 34:
          _context4.next = 0;
          break;

        case 36:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function resetPost(post) {
  return {
    type: 'RESET_POST',
    post: post
  };
}
/**
 * Returns an action object used in signalling that the latest autosave of the
 * post has been received, by initialization or autosave.
 *
 * @deprecated since 5.6. Callers should use the `receiveAutosaves( postId, autosave )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} newAutosave Autosave post object.
 *
 * @return {Object} Action object.
 */

function resetAutosave(newAutosave) {
  var postId;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetAutosave$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()('resetAutosave action (`core/editor` store)', {
            alternative: 'receiveAutosaves action (`core` store)',
            plugin: 'Gutenberg'
          });
          _context5.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPostId');

        case 3:
          postId = _context5.sent;
          _context5.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core', 'receiveAutosaves', postId, newAutosave);

        case 6:
          return _context5.abrupt("return", {
            type: '__INERT__'
          });

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Action for dispatching that a post update request has started.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateStart() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_START',
    options: options
  };
}
/**
 * Action for dispatching that a post update request has finished.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateFinish() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_FINISH',
    options: options
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @param {Object} edits Updated post fields.
 *
 * @return {Object} Action object.
 */

function updatePost(edits) {
  return {
    type: 'UPDATE_POST',
    edits: edits
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post   Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post: post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 *
 * @yield {Object} Action object or control.
 */

function editPost(edits, options) {
  var _ref, id, type;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPost');

        case 2:
          _ref = _context6.sent;
          id = _ref.id;
          type = _ref.type;
          _context6.next = 7;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core', 'editEntityRecord', 'postType', type, id, edits, options);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Returns action object produced by the updatePost creator augmented by
 * an optimist option that signals optimistically applying updates.
 *
 * @param {Object} edits  Updated post fields.
 *
 * @return {Object} Action object.
 */

function __experimentalOptimisticUpdatePost(edits) {
  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, updatePost(edits), {
    optimist: {
      id: _constants__WEBPACK_IMPORTED_MODULE_10__["POST_UPDATE_TRANSACTION_ID"]
    }
  });
}
/**
 * Action generator for saving the current post in the editor.
 *
 * @param {Object} options
 */

function savePost() {
  var options,
      edits,
      previousRecord,
      error,
      args,
      updatedRecord,
      _args7,
      _args8 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function savePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
          _context7.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'isEditedPostSaveable');

        case 3:
          if (_context7.sent) {
            _context7.next = 5;
            break;
          }

          return _context7.abrupt("return");

        case 5:
          _context7.next = 7;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getEditedPostContent');

        case 7:
          _context7.t0 = _context7.sent;
          edits = {
            content: _context7.t0
          };

          if (options.isAutosave) {
            _context7.next = 12;
            break;
          }

          _context7.next = 12;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'editPost', edits, {
            undoIgnore: true
          });

        case 12:
          _context7.next = 14;
          return __experimentalRequestPostUpdateStart(options);

        case 14:
          _context7.next = 16;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPost');

        case 16:
          previousRecord = _context7.sent;
          _context7.t1 = _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"];
          _context7.t2 = {
            id: previousRecord.id
          };
          _context7.next = 21;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core', 'getEntityRecordNonTransientEdits', 'postType', previousRecord.type, previousRecord.id);

        case 21:
          _context7.t3 = _context7.sent;
          _context7.t4 = edits;
          edits = (0, _context7.t1)(_context7.t2, _context7.t3, _context7.t4);
          _context7.next = 26;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core', 'saveEntityRecord', 'postType', previousRecord.type, edits, options);

        case 26:
          _context7.next = 28;
          return __experimentalRequestPostUpdateFinish(options);

        case 28:
          _context7.next = 30;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core', 'getLastEntitySaveError', 'postType', previousRecord.type, previousRecord.id);

        case 30:
          error = _context7.sent;

          if (!error) {
            _context7.next = 38;
            break;
          }

          args = Object(_utils_notice_builder__WEBPACK_IMPORTED_MODULE_11__["getNotificationArgumentsForSaveFail"])({
            post: previousRecord,
            edits: edits,
            error: error
          });

          if (!args.length) {
            _context7.next = 36;
            break;
          }

          _context7.next = 36;
          return _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"].apply(void 0, ['core/notices', 'createErrorNotice'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(args)));

        case 36:
          _context7.next = 53;
          break;

        case 38:
          _context7.next = 40;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPost');

        case 40:
          updatedRecord = _context7.sent;
          _context7.t5 = _utils_notice_builder__WEBPACK_IMPORTED_MODULE_11__["getNotificationArgumentsForSaveSuccess"];
          _context7.t6 = previousRecord;
          _context7.t7 = updatedRecord;
          _context7.next = 46;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core', 'getPostType', updatedRecord.type);

        case 46:
          _context7.t8 = _context7.sent;
          _context7.t9 = options;
          _context7.t10 = {
            previousPost: _context7.t6,
            post: _context7.t7,
            postType: _context7.t8,
            options: _context7.t9
          };
          _args7 = (0, _context7.t5)(_context7.t10);

          if (!_args7.length) {
            _context7.next = 53;
            break;
          }

          _context7.next = 53;
          return _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"].apply(void 0, ['core/notices', 'createSuccessNotice'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_args7)));

        case 53:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Action generator for handling refreshing the current post.
 */

function refreshPost() {
  var post, postTypeSlug, postType, newPost;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function refreshPost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPost');

        case 2:
          post = _context8.sent;
          _context8.next = 5;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPostType');

        case 5:
          postTypeSlug = _context8.sent;
          _context8.next = 8;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core', 'getPostType', postTypeSlug);

        case 8:
          postType = _context8.sent;
          _context8.next = 11;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["apiFetch"])({
            // Timestamp arg allows caller to bypass browser caching, which is
            // expected for this specific function.
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id) + "?context=edit&_timestamp=".concat(Date.now())
          });

        case 11:
          newPost = _context8.sent;
          _context8.next = 14;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'resetPost', newPost);

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
/**
 * Action generator for trashing the current post in the editor.
 */

function trashPost() {
  var postTypeSlug, postType, post;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function trashPost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPostType');

        case 2:
          postTypeSlug = _context9.sent;
          _context9.next = 5;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core', 'getPostType', postTypeSlug);

        case 5:
          postType = _context9.sent;
          _context9.next = 8;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core/notices', 'removeNotice', _constants__WEBPACK_IMPORTED_MODULE_10__["TRASH_POST_NOTICE_ID"]);

        case 8:
          _context9.prev = 8;
          _context9.next = 11;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'getCurrentPost');

        case 11:
          post = _context9.sent;
          _context9.next = 14;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["apiFetch"])({
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id),
            method: 'DELETE'
          });

        case 14:
          _context9.next = 16;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'savePost');

        case 16:
          _context9.next = 22;
          break;

        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](8);
          _context9.next = 22;
          return _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"].apply(void 0, ['core/notices', 'createErrorNotice'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_utils_notice_builder__WEBPACK_IMPORTED_MODULE_11__["getNotificationArgumentsForTrashFail"])({
            error: _context9.t0
          }))));

        case 22:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[8, 18]]);
}
/**
 * Action generator used in signalling that the post should autosave.
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

function autosave(options) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function autosave$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_10__["STORE_KEY"], 'savePost', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
            isAutosave: true
          }, options));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
/**
 * Returns an action object used in signalling that undo history should
 * restore last popped state.
 *
 * @yield {Object} Action object.
 */

function redo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function redo$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core', 'redo');

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}
/**
 * Returns an action object used in signalling that undo history should pop.
 *
 * @yield {Object} Action object.
 */

function undo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function undo$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core', 'undo');

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}
/**
 * Returns an action object used in signalling that undo history record should
 * be created.
 *
 * @return {Object} Action object.
 */

function createUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Returns an action object used to lock the editor.
 *
 * @param {Object}  lock Details about the post lock status, user, and nonce.
 *
 * @return {Object} Action object.
 */

function updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock: lock
  };
}
/**
 * Returns an action object used to fetch a single reusable block or all
 * reusable blocks from the REST API into the store.
 *
 * @param {?string} id If given, only a single reusable block with this ID will
 *                     be fetched.
 *
 * @return {Object} Action object.
 */

function __experimentalFetchReusableBlocks(id) {
  return {
    type: 'FETCH_REUSABLE_BLOCKS',
    id: id
  };
}
/**
 * Returns an action object used in signalling that reusable blocks have been
 * received. `results` is an array of objects containing:
 *  - `reusableBlock` - Details about how the reusable block is persisted.
 *  - `parsedBlock` - The original block.
 *
 * @param {Object[]} results Reusable blocks received.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveReusableBlocks(results) {
  return {
    type: 'RECEIVE_REUSABLE_BLOCKS',
    results: results
  };
}
/**
 * Returns an action object used to save a reusable block that's in the store to
 * the REST API.
 *
 * @param {Object} id The ID of the reusable block to save.
 *
 * @return {Object} Action object.
 */

function __experimentalSaveReusableBlock(id) {
  return {
    type: 'SAVE_REUSABLE_BLOCK',
    id: id
  };
}
/**
 * Returns an action object used to delete a reusable block via the REST API.
 *
 * @param {number} id The ID of the reusable block to delete.
 *
 * @return {Object} Action object.
 */

function __experimentalDeleteReusableBlock(id) {
  return {
    type: 'DELETE_REUSABLE_BLOCK',
    id: id
  };
}
/**
 * Returns an action object used in signalling that a reusable block is
 * to be updated.
 *
 * @param {number} id      The ID of the reusable block to update.
 * @param {Object} changes The changes to apply.
 *
 * @return {Object} Action object.
 */

function __experimentalUpdateReusableBlock(id, changes) {
  return {
    type: 'UPDATE_REUSABLE_BLOCK',
    id: id,
    changes: changes
  };
}
/**
 * Returns an action object used to convert a reusable block into a static
 * block.
 *
 * @param {string} clientId The client ID of the block to attach.
 *
 * @return {Object} Action object.
 */

function __experimentalConvertBlockToStatic(clientId) {
  return {
    type: 'CONVERT_BLOCK_TO_STATIC',
    clientId: clientId
  };
}
/**
 * Returns an action object used to convert a static block into a reusable
 * block.
 *
 * @param {string} clientIds The client IDs of the block to detach.
 *
 * @return {Object} Action object.
 */

function __experimentalConvertBlockToReusable(clientIds) {
  return {
    type: 'CONVERT_BLOCK_TO_REUSABLE',
    clientIds: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["castArray"])(clientIds)
  };
}
/**
 * Returns an action object used in signalling that the user has enabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function enablePublishSidebar() {
  return {
    type: 'ENABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user has disabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function disablePublishSidebar() {
  return {
    type: 'DISABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to signal that post saving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post saving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 *
 * @yield {Object} Action object
 */

function resetEditorBlocks(blocks) {
  var options,
      lastBlockAttributesChange,
      updatedSources,
      updatedBlockTypes,
      _i3,
      _Object$entries2,
      _Object$entries2$_i,
      clientId,
      attributes,
      blockName,
      blockType,
      _i4,
      _Object$entries3,
      _Object$entries3$_i,
      _attributeName,
      newAttributeValue,
      _schema,
      source,
      edits,
      _args14 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetEditorBlocks$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          options = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
          _context13.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor', '__experimentalGetLastBlockAttributeChanges');

        case 3:
          lastBlockAttributesChange = _context13.sent;

          if (!lastBlockAttributesChange) {
            _context13.next = 36;
            break;
          }

          updatedSources = new Set();
          updatedBlockTypes = new Set();
          _i3 = 0, _Object$entries2 = Object.entries(lastBlockAttributesChange);

        case 8:
          if (!(_i3 < _Object$entries2.length)) {
            _context13.next = 35;
            break;
          }

          _Object$entries2$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$entries2[_i3], 2), clientId = _Object$entries2$_i[0], attributes = _Object$entries2$_i[1];
          _context13.next = 12;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor', 'getBlockName', clientId);

        case 12:
          blockName = _context13.sent;

          if (!updatedBlockTypes.has(blockName)) {
            _context13.next = 15;
            break;
          }

          return _context13.abrupt("continue", 32);

        case 15:
          updatedBlockTypes.add(blockName);
          _context13.next = 18;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core/blocks', 'getBlockType', blockName);

        case 18:
          blockType = _context13.sent;
          _i4 = 0, _Object$entries3 = Object.entries(attributes);

        case 20:
          if (!(_i4 < _Object$entries3.length)) {
            _context13.next = 32;
            break;
          }

          _Object$entries3$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$entries3[_i4], 2), _attributeName = _Object$entries3$_i[0], newAttributeValue = _Object$entries3$_i[1];

          if (blockType.attributes.hasOwnProperty(_attributeName)) {
            _context13.next = 24;
            break;
          }

          return _context13.abrupt("continue", 29);

        case 24:
          _schema = blockType.attributes[_attributeName];
          source = _block_sources__WEBPACK_IMPORTED_MODULE_14__[_schema.source];

          if (!(source && source.update)) {
            _context13.next = 29;
            break;
          }

          return _context13.delegateYield(source.update(_schema, newAttributeValue), "t0", 28);

        case 28:
          updatedSources.add(source);

        case 29:
          _i4++;
          _context13.next = 20;
          break;

        case 32:
          _i3++;
          _context13.next = 8;
          break;

        case 35:
          return _context13.delegateYield(resetLastBlockSourceDependencies(Array.from(updatedSources)), "t1", 36);

        case 36:
          return _context13.delegateYield(getBlocksWithSourcedAttributes(blocks), "t2", 37);

        case 37:
          _context13.t3 = _context13.t2;
          edits = {
            blocks: _context13.t3
          };

          if (options.__unstableShouldCreateUndoLevel !== false) {
            // We create a new function here on every persistent edit
            // to make sure the edit makes the post dirty and creates
            // a new undo level.
            edits.content = function (_ref2) {
              var _ref2$blocks = _ref2.blocks,
                  blocksForSerialization = _ref2$blocks === void 0 ? [] : _ref2$blocks;
              return Object(_utils_serialize_blocks__WEBPACK_IMPORTED_MODULE_12__["default"])(blocksForSerialization);
            };
          }

          return _context13.delegateYield(editPost(edits), "t4", 41);

        case 41:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings: settings
  };
}
/**
 * Backward compatibility
 */

var getBlockEditorAction = function getBlockEditorAction(name) {
  return (
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _len,
          args,
          _key,
          _args15 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()('`wp.data.dispatch( \'core/editor\' ).' + name + '`', {
                alternative: '`wp.data.dispatch( \'core/block-editor\' ).' + name + '`'
              });

              for (_len = _args15.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args15[_key];
              }

              _context14.next = 4;
              return _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"].apply(void 0, ['core/block-editor', name].concat(args));

            case 4:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee);
    })
  );
};
/**
 * @see resetBlocks in core/block-editor store.
 */


var resetBlocks = getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

var receiveBlocks = getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

var updateBlock = getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

var updateBlockAttributes = getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

var selectBlock = getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

var startMultiSelect = getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

var stopMultiSelect = getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

var multiSelect = getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

var clearSelectedBlock = getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

var toggleSelection = getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

var replaceBlocks = getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

var replaceBlock = getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

var moveBlocksDown = getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

var moveBlocksUp = getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

var moveBlockToPosition = getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

var insertBlock = getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

var insertBlocks = getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

var showInsertionPoint = getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

var hideInsertionPoint = getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

var setTemplateValidity = getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

var synchronizeTemplate = getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

var mergeBlocks = getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

var removeBlocks = getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

var removeBlock = getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

var toggleBlockMode = getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

var startTyping = getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

var stopTyping = getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

var enterFormattedText = getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

var exitFormattedText = getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

var insertDefaultBlock = getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

var updateBlockListSettings = getBlockEditorAction('updateBlockListSettings');


/***/ }),

/***/ "./packages/editor/build-module/store/block-sources/index.js":
/*!*******************************************************************!*\
  !*** ./packages/editor/build-module/store/block-sources/index.js ***!
  \*******************************************************************/
/*! exports provided: meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta */ "./packages/editor/build-module/store/block-sources/meta.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _meta__WEBPACK_IMPORTED_MODULE_0__; });
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./packages/editor/build-module/store/block-sources/meta.js":
/*!******************************************************************!*\
  !*** ./packages/editor/build-module/store/block-sources/meta.js ***!
  \******************************************************************/
/*! exports provided: getDependencies, apply, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencies", function() { return getDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./packages/editor/build-module/store/actions.js");



var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(getDependencies),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(update);

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Store control invoked upon a state change, responsible for returning an
 * object of dependencies. When a change in dependencies occurs (by shallow
 * equality of the returned object), blocks are reset to apply the new sourced
 * value.
 *
 * @yield {Object} Optional yielded controls.
 *
 * @return {Object} Dependencies as object.
 */

function getDependencies() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getDependencies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["select"])('core/editor', 'getEditedPostAttribute', 'meta');

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            meta: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Given an attribute schema and dependencies data, returns a source value.
 *
 * @param {Object} schema            Block type attribute schema.
 * @param {Object} dependencies      Source dependencies.
 * @param {Object} dependencies.meta Post meta.
 *
 * @return {Object} Block attribute value.
 */

function apply(schema, _ref) {
  var meta = _ref.meta;
  return meta[schema.meta];
}
/**
 * Store control invoked upon a block attributes update, responsible for
 * reflecting an update in a meta value.
 *
 * @param {Object} schema Block type attribute schema.
 * @param {*}      value  Updated block attribute value.
 *
 * @yield {Object} Yielded action objects or store controls.
 */

function update(schema, value) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["editPost"])({
            meta: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, schema.meta, value)
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}


/***/ }),

/***/ "./packages/editor/build-module/store/constants.js":
/*!*********************************************************!*\
  !*** ./packages/editor/build-module/store/constants.js ***!
  \*********************************************************/
/*! exports provided: EDIT_MERGE_PROPERTIES, STORE_KEY, POST_UPDATE_TRANSACTION_ID, SAVE_POST_NOTICE_ID, TRASH_POST_NOTICE_ID, PERMALINK_POSTNAME_REGEX, ONE_MINUTE_IN_MS, AUTOSAVE_PROPERTIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MERGE_PROPERTIES", function() { return EDIT_MERGE_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_UPDATE_TRANSACTION_ID", function() { return POST_UPDATE_TRANSACTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_POST_NOTICE_ID", function() { return SAVE_POST_NOTICE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRASH_POST_NOTICE_ID", function() { return TRASH_POST_NOTICE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMALINK_POSTNAME_REGEX", function() { return PERMALINK_POSTNAME_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_MINUTE_IN_MS", function() { return ONE_MINUTE_IN_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOSAVE_PROPERTIES", function() { return AUTOSAVE_PROPERTIES; });
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
var EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

var STORE_KEY = 'core/editor';
var POST_UPDATE_TRANSACTION_ID = 'post-update';
var SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
var TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
var PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
var ONE_MINUTE_IN_MS = 60 * 1000;
var AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];


/***/ }),

/***/ "./packages/editor/build-module/store/controls.js":
/*!********************************************************!*\
  !*** ./packages/editor/build-module/store/controls.js ***!
  \********************************************************/
/*! exports provided: awaitNextStateChange, getRegistry, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitNextStateChange", function() { return awaitNextStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistry", function() { return getRegistry; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Returns a control descriptor signalling to subscribe to the registry and
 * resolve the control promise only when the next state change occurs.
 *
 * @return {Object} Control descriptor.
 */

function awaitNextStateChange() {
  return {
    type: 'AWAIT_NEXT_STATE_CHANGE'
  };
}
/**
 * Returns a control descriptor signalling to resolve with the current data
 * registry.
 *
 * @return {Object} Control descriptor.
 */

function getRegistry() {
  return {
    type: 'GET_REGISTRY'
  };
}
var controls = {
  AWAIT_NEXT_STATE_CHANGE: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createRegistryControl"])(function (registry) {
    return function () {
      return new Promise(function (resolve) {
        var unsubscribe = registry.subscribe(function () {
          unsubscribe();
          resolve();
        });
      });
    };
  }),
  GET_REGISTRY: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createRegistryControl"])(function (registry) {
    return function () {
      return registry;
    };
  })
};
/* harmony default export */ __webpack_exports__["default"] = (controls);


/***/ }),

/***/ "./packages/editor/build-module/store/defaults.js":
/*!********************************************************!*\
  !*** ./packages/editor/build-module/store/defaults.js ***!
  \********************************************************/
/*! exports provided: PREFERENCES_DEFAULTS, EDITOR_SETTINGS_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFERENCES_DEFAULTS", function() { return PREFERENCES_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_SETTINGS_DEFAULTS", function() { return EDITOR_SETTINGS_DEFAULTS; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var PREFERENCES_DEFAULTS = {
  insertUsage: {},
  // Should be kept for backward compatibility, see: https://github.com/WordPress/gutenberg/issues/14580.
  isPublishSidebarEnabled: true
};
/**
 * The default post editor settings
 *
 *  allowedBlockTypes  boolean|Array Allowed block types
 *  richEditingEnabled boolean       Whether rich editing is enabled or not
 *  codeEditingEnabled boolean       Whether code editing is enabled or not
 *  enableCustomFields boolean       Whether the WordPress custom fields are enabled or not
 *  autosaveInterval   number        Autosave Interval
 *  availableTemplates array?        The available post templates
 *  disablePostFormats boolean       Whether or not the post formats are disabled
 *  allowedMimeTypes   array?        List of allowed mime types and file extensions
 *  maxUploadFileSize  number        Maximum upload file size
 */

var EDITOR_SETTINGS_DEFAULTS = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_DEFAULTS"], {
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: false
});


/***/ }),

/***/ "./packages/editor/build-module/store/effects.js":
/*!*******************************************************!*\
  !*** ./packages/editor/build-module/store/effects.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effects/reusable-blocks */ "./packages/editor/build-module/store/effects/reusable-blocks.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_REUSABLE_BLOCKS: function FETCH_REUSABLE_BLOCKS(action, store) {
    Object(_effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__["fetchReusableBlocks"])(action, store);
  },
  SAVE_REUSABLE_BLOCK: function SAVE_REUSABLE_BLOCK(action, store) {
    Object(_effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__["saveReusableBlocks"])(action, store);
  },
  DELETE_REUSABLE_BLOCK: function DELETE_REUSABLE_BLOCK(action, store) {
    Object(_effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__["deleteReusableBlocks"])(action, store);
  },
  CONVERT_BLOCK_TO_STATIC: _effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__["convertBlockToStatic"],
  CONVERT_BLOCK_TO_REUSABLE: _effects_reusable_blocks__WEBPACK_IMPORTED_MODULE_0__["convertBlockToReusable"]
});


/***/ }),

/***/ "./packages/editor/build-module/store/effects/reusable-blocks.js":
/*!***********************************************************************!*\
  !*** ./packages/editor/build-module/store/effects/reusable-blocks.js ***!
  \***********************************************************************/
/*! exports provided: fetchReusableBlocks, saveReusableBlocks, deleteReusableBlocks, convertBlockToStatic, convertBlockToReusable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchReusableBlocks", function() { return fetchReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveReusableBlocks", function() { return saveReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReusableBlocks", function() { return deleteReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBlockToStatic", function() { return convertBlockToStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBlockToReusable", function() { return convertBlockToReusable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_optimist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-optimist */ "./node_modules/redux-optimist/index.js");
/* harmony import */ var redux_optimist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_optimist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./packages/editor/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../selectors */ "./packages/editor/build-module/store/selectors.js");




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



 // TODO: Ideally this would be the only dispatch in scope. This requires either
// refactoring editor actions to yielded controls, or replacing direct dispatch
// on the editor store with action creators (e.g. `REMOVE_REUSABLE_BLOCK`).


/**
 * Internal dependencies
 */



/**
 * Module Constants
 */

var REUSABLE_BLOCK_NOTICE_ID = 'REUSABLE_BLOCK_NOTICE_ID';
/**
 * Fetch Reusable Blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var fetchReusableBlocks =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action, store) {
    var id, dispatch, postType, posts, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = action.id;
            dispatch = store.dispatch; // TODO: these are potentially undefined, this fix is in place
            // until there is a filter to not use reusable blocks if undefined

            _context.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: '/wp/v2/types/wp_block'
            });

          case 4:
            postType = _context.sent;

            if (postType) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            _context.prev = 7;

            if (!id) {
              _context.next = 15;
              break;
            }

            _context.next = 11;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: "/wp/v2/".concat(postType.rest_base, "/").concat(id)
            });

          case 11:
            _context.t0 = _context.sent;
            posts = [_context.t0];
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: "/wp/v2/".concat(postType.rest_base, "?per_page=-1")
            });

          case 17:
            posts = _context.sent;

          case 18:
            results = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["compact"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(posts, function (post) {
              if (post.status !== 'publish' || post.content.protected) {
                return null;
              }

              return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, post, {
                content: post.content.raw,
                title: post.title.raw
              });
            }));

            if (results.length) {
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["__experimentalReceiveReusableBlocks"])(results));
            }

            dispatch({
              type: 'FETCH_REUSABLE_BLOCKS_SUCCESS',
              id: id
            });
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](7);
            dispatch({
              type: 'FETCH_REUSABLE_BLOCKS_FAILURE',
              id: id,
              error: _context.t1
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 23]]);
  }));

  return function fetchReusableBlocks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Save Reusable Blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var saveReusableBlocks =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(action, store) {
    var postType, id, dispatch, state, _getReusableBlock, title, content, isTemporary, data, path, method, updatedReusableBlock, message;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: '/wp/v2/types/wp_block'
            });

          case 2:
            postType = _context2.sent;

            if (postType) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return");

          case 5:
            id = action.id;
            dispatch = store.dispatch;
            state = store.getState();
            _getReusableBlock = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["__experimentalGetReusableBlock"])(state, id), title = _getReusableBlock.title, content = _getReusableBlock.content, isTemporary = _getReusableBlock.isTemporary;
            data = isTemporary ? {
              title: title,
              content: content,
              status: 'publish'
            } : {
              id: id,
              title: title,
              content: content,
              status: 'publish'
            };
            path = isTemporary ? "/wp/v2/".concat(postType.rest_base) : "/wp/v2/".concat(postType.rest_base, "/").concat(id);
            method = isTemporary ? 'POST' : 'PUT';
            _context2.prev = 12;
            _context2.next = 15;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: path,
              data: data,
              method: method
            });

          case 15:
            updatedReusableBlock = _context2.sent;
            dispatch({
              type: 'SAVE_REUSABLE_BLOCK_SUCCESS',
              updatedId: updatedReusableBlock.id,
              id: id
            });
            message = isTemporary ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Block created.') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Block updated.');
            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/notices').createSuccessNotice(message, {
              id: REUSABLE_BLOCK_NOTICE_ID,
              type: 'snackbar'
            });

            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/block-editor').__unstableSaveReusableBlock(id, updatedReusableBlock.id);

            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](12);
            dispatch({
              type: 'SAVE_REUSABLE_BLOCK_FAILURE',
              id: id
            });
            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/notices').createErrorNotice(_context2.t0.message, {
              id: REUSABLE_BLOCK_NOTICE_ID
            });

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 22]]);
  }));

  return function saveReusableBlocks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Delete Reusable Blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var deleteReusableBlocks =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(action, store) {
    var postType, id, getState, dispatch, reusableBlock, allBlocks, associatedBlocks, associatedBlockClientIds, transactionId, message;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: '/wp/v2/types/wp_block'
            });

          case 2:
            postType = _context3.sent;

            if (postType) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            id = action.id;
            getState = store.getState, dispatch = store.dispatch; // Don't allow a reusable block with a temporary ID to be deleted

            reusableBlock = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["__experimentalGetReusableBlock"])(getState(), id);

            if (!(!reusableBlock || reusableBlock.isTemporary)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return");

          case 10:
            // Remove any other blocks that reference this reusable block
            allBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlocks();
            associatedBlocks = allBlocks.filter(function (block) {
              return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["isReusableBlock"])(block) && block.attributes.ref === id;
            });
            associatedBlockClientIds = associatedBlocks.map(function (block) {
              return block.clientId;
            });
            transactionId = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])();
            dispatch({
              type: 'REMOVE_REUSABLE_BLOCK',
              id: id,
              optimist: {
                type: redux_optimist__WEBPACK_IMPORTED_MODULE_4__["BEGIN"],
                id: transactionId
              }
            }); // Remove the parsed block.

            if (associatedBlockClientIds.length) {
              Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/block-editor').removeBlocks(associatedBlockClientIds);
            }

            _context3.prev = 16;
            _context3.next = 19;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
              path: "/wp/v2/".concat(postType.rest_base, "/").concat(id),
              method: 'DELETE'
            });

          case 19:
            dispatch({
              type: 'DELETE_REUSABLE_BLOCK_SUCCESS',
              id: id,
              optimist: {
                type: redux_optimist__WEBPACK_IMPORTED_MODULE_4__["COMMIT"],
                id: transactionId
              }
            });
            message = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Block deleted.');
            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/notices').createSuccessNotice(message, {
              id: REUSABLE_BLOCK_NOTICE_ID,
              type: 'snackbar'
            });
            _context3.next = 28;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](16);
            dispatch({
              type: 'DELETE_REUSABLE_BLOCK_FAILURE',
              id: id,
              optimist: {
                type: redux_optimist__WEBPACK_IMPORTED_MODULE_4__["REVERT"],
                id: transactionId
              }
            });
            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/notices').createErrorNotice(_context3.t0.message, {
              id: REUSABLE_BLOCK_NOTICE_ID
            });

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[16, 24]]);
  }));

  return function deleteReusableBlocks(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Convert a reusable block to a static block effect handler
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var convertBlockToStatic = function convertBlockToStatic(action, store) {
  var state = store.getState();
  var oldBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlock(action.clientId);
  var reusableBlock = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["__experimentalGetReusableBlock"])(state, oldBlock.attributes.ref);
  var newBlocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["parse"])(reusableBlock.content);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/block-editor').replaceBlocks(oldBlock.clientId, newBlocks);
};
/**
 * Convert a static block to a reusable block effect handler
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var convertBlockToReusable = function convertBlockToReusable(action, store) {
  var dispatch = store.dispatch;
  var reusableBlock = {
    id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])('reusable'),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Untitled Reusable Block'),
    content: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["serialize"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlocksByClientId(action.clientIds))
  };
  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["__experimentalReceiveReusableBlocks"])([reusableBlock]));
  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["__experimentalSaveReusableBlock"])(reusableBlock.id));
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/block-editor').replaceBlocks(action.clientIds, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])('core/block', {
    ref: reusableBlock.id
  }));
};


/***/ }),

/***/ "./packages/editor/build-module/store/index.js":
/*!*****************************************************!*\
  !*** ./packages/editor/build-module/store/index.js ***!
  \*****************************************************/
/*! exports provided: storeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeConfig", function() { return storeConfig; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./packages/editor/build-module/store/reducer.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares */ "./packages/editor/build-module/store/middlewares.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./packages/editor/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./packages/editor/build-module/store/actions.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls */ "./packages/editor/build-module/store/controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./packages/editor/build-module/store/constants.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_5__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_6__,
  controls: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["controls"], _controls__WEBPACK_IMPORTED_MODULE_7__["default"])
};
var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_8__["STORE_KEY"], Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, storeConfig, {
  persist: ['preferences']
}));
Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["default"])(store);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./packages/editor/build-module/store/middlewares.js":
/*!***********************************************************!*\
  !*** ./packages/editor/build-module/store/middlewares.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var refx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! refx */ "./node_modules/refx/refx.js");
/* harmony import */ var refx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(refx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./packages/editor/build-module/store/effects.js");
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
  var enhancedDispatch = function enhancedDispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var middlewareAPI = {
    getState: store.getState,
    dispatch: function dispatch() {
      return enhancedDispatch.apply(void 0, arguments);
    }
  };
  enhancedDispatch = refx__WEBPACK_IMPORTED_MODULE_0___default()(_effects__WEBPACK_IMPORTED_MODULE_1__["default"])(middlewareAPI)(store.dispatch);
  store.dispatch = enhancedDispatch;
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (applyMiddlewares);


/***/ }),

/***/ "./packages/editor/build-module/store/reducer.js":
/*!*******************************************************!*\
  !*** ./packages/editor/build-module/store/reducer.js ***!
  \*******************************************************/
/*! exports provided: getPostRawValue, hasSameKeys, isUpdatingSamePostProperty, shouldOverwriteState, postId, postType, template, preferences, saving, postLock, postSavingLock, postAutosavingLock, reusableBlocks, isReady, editorSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostRawValue", function() { return getPostRawValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSameKeys", function() { return hasSameKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpdatingSamePostProperty", function() { return isUpdatingSamePostProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldOverwriteState", function() { return shouldOverwriteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postId", function() { return postId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postType", function() { return postType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preferences", function() { return preferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saving", function() { return saving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLock", function() { return postLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSavingLock", function() { return postSavingLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAutosavingLock", function() { return postAutosavingLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reusableBlocks", function() { return reusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return isReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorSettings", function() { return editorSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var redux_optimist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-optimist */ "./node_modules/redux-optimist/index.js");
/* harmony import */ var redux_optimist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_optimist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaults */ "./packages/editor/build-module/store/defaults.js");




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
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["keys"])(a), Object(lodash__WEBPACK_IMPORTED_MODULE_4__["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function postId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
    case 'UPDATE_POST':
      return action.post.id;
  }

  return state;
}
function postType() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
    case 'UPDATE_POST':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function template() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isValid: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isValid: action.isValid
      });
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                 Current state.
 * @param {Object}  action                Dispatched action.
 *
 * @return {string} Updated state.
 */

function preferences() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults__WEBPACK_IMPORTED_MODULE_6__["PREFERENCES_DEFAULTS"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ENABLE_PUBLISH_SIDEBAR':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isPublishSidebarEnabled: true
      });

    case 'DISABLE_PUBLISH_SIDEBAR':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isPublishSidebarEnabled: false
      });
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function saving() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean} isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLocked: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostSavingLockState} state  Current state.
 * @param {Object}              action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.lockName, true));

    case 'UNLOCK_POST_SAVING':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostAutosavingLockState} state  Current state.
 * @param {Object}                  action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.lockName, true));

    case 'UNLOCK_POST_AUTOSAVING':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, action.lockName);
  }

  return state;
}
var reusableBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])({
  data: function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RECEIVE_REUSABLE_BLOCKS':
        {
          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["keyBy"])(action.results, 'id'));
        }

      case 'UPDATE_REUSABLE_BLOCK':
        {
          var id = action.id,
              changes = action.changes;
          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state[id], changes)));
        }

      case 'SAVE_REUSABLE_BLOCK_SUCCESS':
        {
          var _id = action.id,
              updatedId = action.updatedId; // If a temporary reusable block is saved, we swap the temporary id with the final one

          if (_id === updatedId) {
            return state;
          }

          var value = state[_id];
          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, _id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedId, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, value, {
            id: updatedId
          })));
        }

      case 'REMOVE_REUSABLE_BLOCK':
        {
          var _id2 = action.id;
          return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, _id2);
        }
    }

    return state;
  },
  isFetching: function isFetching() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'FETCH_REUSABLE_BLOCKS':
        {
          var id = action.id;

          if (!id) {
            return state;
          }

          return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, true));
        }

      case 'FETCH_REUSABLE_BLOCKS_SUCCESS':
      case 'FETCH_REUSABLE_BLOCKS_FAILURE':
        {
          var _id3 = action.id;
          return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, _id3);
        }
    }

    return state;
  },
  isSaving: function isSaving() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SAVE_REUSABLE_BLOCK':
        return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.id, true));

      case 'SAVE_REUSABLE_BLOCK_SUCCESS':
      case 'SAVE_REUSABLE_BLOCK_FAILURE':
        {
          var id = action.id;
          return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(state, id);
        }
    }

    return state;
  }
});
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object} action
 *
 * @return {boolean} Updated state.
 */

function isReady() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function editorSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults__WEBPACK_IMPORTED_MODULE_6__["EDITOR_SETTINGS_DEFAULTS"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, action.settings);
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = (redux_optimist__WEBPACK_IMPORTED_MODULE_3___default()(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])({
  postId: postId,
  postType: postType,
  preferences: preferences,
  saving: saving,
  postLock: postLock,
  reusableBlocks: reusableBlocks,
  template: template,
  postSavingLock: postSavingLock,
  isReady: isReady,
  editorSettings: editorSettings,
  postAutosavingLock: postAutosavingLock
})));


/***/ }),

/***/ "./packages/editor/build-module/store/selectors.js":
/*!*********************************************************!*\
  !*** ./packages/editor/build-module/store/selectors.js ***!
  \*********************************************************/
/*! exports provided: hasEditorUndo, hasEditorRedo, isEditedPostNew, hasChangedContent, isEditedPostDirty, isCleanNewPost, getCurrentPost, getCurrentPostType, getCurrentPostId, getCurrentPostRevisionsCount, getCurrentPostLastRevisionId, getPostEdits, getReferenceByDistinctEdits, getCurrentPostAttribute, getEditedPostAttribute, getAutosaveAttribute, getEditedPostVisibility, isCurrentPostPending, isCurrentPostPublished, isCurrentPostScheduled, isEditedPostPublishable, isEditedPostSaveable, isEditedPostEmpty, isEditedPostAutosaveable, getAutosave, hasAutosave, isEditedPostBeingScheduled, isEditedPostDateFloating, isSavingPost, didPostSaveRequestSucceed, didPostSaveRequestFail, isAutosavingPost, isPreviewingPost, getEditedPostPreviewLink, getSuggestedPostFormat, getBlocksForSerialization, getEditedPostContent, __experimentalGetReusableBlock, __experimentalIsSavingReusableBlock, __experimentalIsFetchingReusableBlock, __experimentalGetReusableBlocks, getStateBeforeOptimisticTransaction, isPublishingPost, isPermalinkEditable, getPermalink, getPermalinkParts, inSomeHistory, isPostLocked, isPostSavingLocked, isPostAutosavingLocked, isPostLockTakeover, getPostLockUser, getActivePostLock, canUserUseUnfilteredHTML, isPublishSidebarEnabled, getEditorBlocks, __unstableIsEditorReady, getEditorSettings, getBlockName, isBlockValid, getBlockAttributes, getBlock, getBlocks, __unstableGetBlockWithoutInnerBlocks, getClientIdsOfDescendants, getClientIdsWithDescendants, getGlobalBlockCount, getBlocksByClientId, getBlockCount, getBlockSelectionStart, getBlockSelectionEnd, getSelectedBlockCount, hasSelectedBlock, getSelectedBlockClientId, getSelectedBlock, getBlockRootClientId, getBlockHierarchyRootClientId, getAdjacentBlockClientId, getPreviousBlockClientId, getNextBlockClientId, getSelectedBlocksInitialCaretPosition, getMultiSelectedBlockClientIds, getMultiSelectedBlocks, getFirstMultiSelectedBlockClientId, getLastMultiSelectedBlockClientId, isFirstMultiSelectedBlock, isBlockMultiSelected, isAncestorMultiSelected, getMultiSelectedBlocksStartClientId, getMultiSelectedBlocksEndClientId, getBlockOrder, getBlockIndex, isBlockSelected, hasSelectedInnerBlock, isBlockWithinSelection, hasMultiSelection, isMultiSelecting, isSelectionEnabled, getBlockMode, isTyping, isCaretWithinFormattedText, getBlockInsertionPoint, isBlockInsertionPointVisible, isValidTemplate, getTemplate, getTemplateLock, canInsertBlockType, getInserterItems, hasInserterItems, getBlockListSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEditorUndo", function() { return hasEditorUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEditorRedo", function() { return hasEditorRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostNew", function() { return isEditedPostNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChangedContent", function() { return hasChangedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostDirty", function() { return isEditedPostDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCleanNewPost", function() { return isCleanNewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPost", function() { return getCurrentPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPostType", function() { return getCurrentPostType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPostId", function() { return getCurrentPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPostRevisionsCount", function() { return getCurrentPostRevisionsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPostLastRevisionId", function() { return getCurrentPostLastRevisionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostEdits", function() { return getPostEdits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPostAttribute", function() { return getCurrentPostAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedPostAttribute", function() { return getEditedPostAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosaveAttribute", function() { return getAutosaveAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedPostVisibility", function() { return getEditedPostVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentPostPending", function() { return isCurrentPostPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentPostPublished", function() { return isCurrentPostPublished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentPostScheduled", function() { return isCurrentPostScheduled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostPublishable", function() { return isEditedPostPublishable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostSaveable", function() { return isEditedPostSaveable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostEmpty", function() { return isEditedPostEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostAutosaveable", function() { return isEditedPostAutosaveable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return getAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAutosave", function() { return hasAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostBeingScheduled", function() { return isEditedPostBeingScheduled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditedPostDateFloating", function() { return isEditedPostDateFloating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavingPost", function() { return isSavingPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didPostSaveRequestSucceed", function() { return didPostSaveRequestSucceed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didPostSaveRequestFail", function() { return didPostSaveRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAutosavingPost", function() { return isAutosavingPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreviewingPost", function() { return isPreviewingPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedPostPreviewLink", function() { return getEditedPostPreviewLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestedPostFormat", function() { return getSuggestedPostFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocksForSerialization", function() { return getBlocksForSerialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedPostContent", function() { return getEditedPostContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalGetReusableBlock", function() { return __experimentalGetReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalIsSavingReusableBlock", function() { return __experimentalIsSavingReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalIsFetchingReusableBlock", function() { return __experimentalIsFetchingReusableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalGetReusableBlocks", function() { return __experimentalGetReusableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateBeforeOptimisticTransaction", function() { return getStateBeforeOptimisticTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublishingPost", function() { return isPublishingPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPermalinkEditable", function() { return isPermalinkEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermalink", function() { return getPermalink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermalinkParts", function() { return getPermalinkParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inSomeHistory", function() { return inSomeHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPostLocked", function() { return isPostLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPostSavingLocked", function() { return isPostSavingLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPostAutosavingLocked", function() { return isPostAutosavingLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPostLockTakeover", function() { return isPostLockTakeover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostLockUser", function() { return getPostLockUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivePostLock", function() { return getActivePostLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUserUseUnfilteredHTML", function() { return canUserUseUnfilteredHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublishSidebarEnabled", function() { return isPublishSidebarEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorBlocks", function() { return getEditorBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableIsEditorReady", function() { return __unstableIsEditorReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorSettings", function() { return getEditorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockName", function() { return getBlockName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockValid", function() { return isBlockValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockAttributes", function() { return getBlockAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlock", function() { return getBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocks", function() { return getBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableGetBlockWithoutInnerBlocks", function() { return __unstableGetBlockWithoutInnerBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientIdsOfDescendants", function() { return getClientIdsOfDescendants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalBlockCount", function() { return getGlobalBlockCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocksByClientId", function() { return getBlocksByClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockCount", function() { return getBlockCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBlockCount", function() { return getSelectedBlockCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSelectedBlock", function() { return hasSelectedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBlockClientId", function() { return getSelectedBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBlock", function() { return getSelectedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockRootClientId", function() { return getBlockRootClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextBlockClientId", function() { return getNextBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockOrder", function() { return getBlockOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockIndex", function() { return getBlockIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockSelected", function() { return isBlockSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasMultiSelection", function() { return hasMultiSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiSelecting", function() { return isMultiSelecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionEnabled", function() { return isSelectionEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockMode", function() { return getBlockMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTyping", function() { return isTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCaretWithinFormattedText", function() { return isCaretWithinFormattedText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTemplate", function() { return isValidTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateLock", function() { return getTemplateLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canInsertBlockType", function() { return canInsertBlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInserterItems", function() { return getInserterItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasInserterItems", function() { return hasInserterItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockListSettings", function() { return getBlockListSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaults */ "./packages/editor/build-module/store/defaults.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./packages/editor/build-module/store/constants.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducer */ "./packages/editor/build-module/store/reducer.js");
/* harmony import */ var _utils_serialize_blocks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/serialize-blocks */ "./packages/editor/build-module/store/utils/serialize-blocks.js");



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
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

var hasEditorUndo = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasUndo();
  };
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

var hasEditorRedo = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasRedo();
  };
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function isEditedPostNew(state) {
  return getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  var edits = getPostEdits(state);
  return 'blocks' in edits || // `edits` is intended to contain only values which are different from
  // the saved post, so the mere presence of a property is an indicator
  // that the value is different than what is known to be saved. While
  // content in Visual mode is represented by the blocks state, in Text
  // mode it is tracked by `edits.content`.
  'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

var isEditedPostDirty = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    // Edits should contain only fields which differ from the saved post (reset
    // at initial load and save complete). Thus, a non-empty edits state can be
    // inferred to contain unsaved values.
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);

    if (select('core').hasEditsForEntityRecord('postType', postType, postId)) {
      return true;
    }

    return false;
  };
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function isCleanNewPost(state) {
  return !isEditedPostDirty(state) && isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

var getCurrentPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = getCurrentPostId(state);
    var postType = getCurrentPostType(state);
    var post = select('core').getRawEntityRecord('postType', postType, postId);

    if (post) {
      return post;
    } // This exists for compatibility with the previous selector behavior
    // which would guarantee an object return based on the editor reducer's
    // default empty object state.


    return EMPTY_OBJECT;
  };
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(getCurrentPost(state), ['_links', 'version-history', 0, 'count'], 0);
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(getCurrentPost(state), ['_links', 'predecessor-version', 0, 'id'], null);
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

var getPostEdits = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    return select('core').getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
  };
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @deprecated since Gutenberg 6.5.0.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

var getReferenceByDistinctEdits = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function ()
  /* state */
  {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('`wp.data.select( \'core/editor\' ).getReferenceByDistinctEdits`', {
      alternative: '`wp.data.select( \'core\' ).getReferenceByDistinctEdits`'
    });
    return select('core').getReferenceByDistinctEdits();
  };
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return getCurrentPostType(state);

    case 'id':
      return getCurrentPostId(state);

    default:
      var post = getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return Object(_reducer__WEBPACK_IMPORTED_MODULE_11__["getPostRawValue"])(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

var getNestedEditedPostProperty = function getNestedEditedPostProperty(state, attributeName) {
  var edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  }

  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getCurrentPostAttribute(state, attributeName), edits[attributeName]);
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function getEditedPostAttribute(state, attributeName) {
  // Special cases
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  var edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (_constants__WEBPACK_IMPORTED_MODULE_10__["EDIT_MERGE_PROPERTIES"].has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

var getAutosaveAttribute = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state, attributeName) {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(_constants__WEBPACK_IMPORTED_MODULE_10__["AUTOSAVE_PROPERTIES"], attributeName) && attributeName !== 'preview_link') {
      return;
    }

    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    var currentUserId = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);

    if (autosave) {
      return Object(_reducer__WEBPACK_IMPORTED_MODULE_11__["getPostRawValue"])(autosave[attributeName]);
    }
  };
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function getEditedPostVisibility(state) {
  var status = getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  var password = getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function isCurrentPostPublished(state, currentPost) {
  var post = currentPost || getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["isInTheFuture"])(new Date(Number(Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["getDate"])(post.date)) - _constants__WEBPACK_IMPORTED_MODULE_10__["ONE_MINUTE_IN_MS"]));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function isCurrentPostScheduled(state) {
  return getCurrentPost(state).status === 'future' && !isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function isEditedPostPublishable(state) {
  var post = getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`)

  return isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function isEditedPostSaveable(state) {
  if (isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184


  return !!getEditedPostAttribute(state, 'title') || !!getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state);
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  var blocks = getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    var blockName = blocks[0].name;

    if (blockName !== Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getDefaultBlockName"])() && blockName !== Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getFreeformContentHandlerName"])()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

var isEditedPostAutosaveable = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
    if (!isEditedPostSaveable(state)) {
      return false;
    } // A post is not autosavable when there is a post autosave lock.


    if (isPostAutosavingLocked(state)) {
      return false;
    }

    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    var hasFetchedAutosave = select('core').hasFetchedAutosaves(postType, postId);
    var currentUserId = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(select('core').getCurrentUser(), ['id']); // Disable reason - this line causes the side-effect of fetching the autosave
    // via a resolver, moving below the return would result in the autosave never
    // being fetched.
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return

    var autosave = select('core').getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
    // unable to determine if the post is autosaveable, so return false.

    if (!hasFetchedAutosave) {
      return false;
    } // If we don't already have an autosave, the post is autosaveable.


    if (!autosave) {
      return true;
    } // To avoid an expensive content serialization, use the content dirtiness
    // flag in place of content field comparison against the known autosave.
    // This is not strictly accurate, and relies on a tolerance toward autosave
    // request failures for unnecessary saves.


    if (hasChangedContent(state)) {
      return true;
    } // If the title or excerpt has changed, the post is autosaveable.


    return ['title', 'excerpt'].some(function (field) {
      return Object(_reducer__WEBPACK_IMPORTED_MODULE_11__["getPostRawValue"])(autosave[field]) !== getEditedPostAttribute(state, field);
    });
  };
});
/**
 * Returns the current autosave, or null if one is not set (i.e. if the post
 * has yet to be autosaved, or has been saved or published since the last
 * autosave).
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} state Editor state.
 *
 * @return {?Object} Current autosave, if exists.
 */

var getAutosave = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('`wp.data.select( \'core/editor\' ).getAutosave()`', {
      alternative: '`wp.data.select( \'core\' ).getAutosave( postType, postId, userId )`',
      plugin: 'Gutenberg'
    });
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    var currentUserId = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["pick"])(autosave, _constants__WEBPACK_IMPORTED_MODULE_10__["AUTOSAVE_PROPERTIES"]), _reducer__WEBPACK_IMPORTED_MODULE_11__["getPostRawValue"]);
  };
});
/**
 * Returns the true if there is an existing autosave, otherwise false.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 *             from the '@wordpress/core-data' package and check for a truthy value.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there is an existing autosave.
 */

var hasAutosave = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('`wp.data.select( \'core/editor\' ).hasAutosave()`', {
      alternative: '`!! wp.data.select( \'core\' ).getAutosave( postType, postId, userId )`',
      plugin: 'Gutenberg'
    });
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    var currentUserId = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(select('core').getCurrentUser(), ['id']);
    return !!select('core').getAutosave(postType, postId, currentUserId);
  };
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function isEditedPostBeingScheduled(state) {
  var date = getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency)

  var checkedDate = new Date(Number(Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["getDate"])(date)) - _constants__WEBPACK_IMPORTED_MODULE_10__["ONE_MINUTE_IN_MS"]);
  return Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["isInTheFuture"])(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  var date = getEditedPostAttribute(state, 'date');
  var modified = getEditedPostAttribute(state, 'modified');
  var status = getEditedPostAttribute(state, 'status');

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

var isSavingPost = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    return select('core').isSavingEntityRecord('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

var didPostSaveRequestSucceed = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    return !select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

var didPostSaveRequestFail = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = getCurrentPostType(state);
    var postId = getCurrentPostId(state);
    return !!select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function isAutosavingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return !!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.saving, ['options', 'isAutosave']);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return !!state.saving.options.isPreview;
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Preview Link.
 */

function getEditedPostPreviewLink(state) {
  if (state.saving.pending || isSavingPost(state)) {
    return;
  }

  var previewLink = getAutosaveAttribute(state, 'preview_link');

  if (!previewLink) {
    previewLink = getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__["addQueryArgs"])(previewLink, {
        preview: true
      });
    }
  }

  var featuredImageId = getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__["addQueryArgs"])(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function getSuggestedPostFormat(state) {
  var blocks = getEditorBlocks(state);
  var name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name;
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2) {
    if (blocks[1].name === 'core/paragraph') {
      name = blocks[0].name;
    }
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
    case 'core-embed/youtube':
    case 'core-embed/vimeo':
      return 'video';

    case 'core/audio':
    case 'core-embed/spotify':
    case 'core-embed/soundcloud':
      return 'audio';
  }

  return null;
}
/**
 * Returns a set of blocks which are to be used in consideration of the post's
 * generated save content.
 *
 * @deprecated since Gutenberg 6.2.0.
 *
 * @param {Object} state Editor state.
 *
 * @return {WPBlock[]} Filtered set of blocks for save.
 */

function getBlocksForSerialization(state) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('`core/editor` getBlocksForSerialization selector', {
    plugin: 'Gutenberg',
    alternative: 'getEditorBlocks',
    hint: 'Blocks serialization pre-processing occurs at save time'
  });
  var blocks = state.editor.present.blocks.value; // WARNING: Any changes to the logic of this function should be verified
  // against the implementation of isEditedPostEmpty, which bypasses this
  // function for performance' sake, in an assumption of this current logic
  // being irrelevant to the optimized condition of emptiness.
  // A single unmodified default block is assumed to be equivalent to an
  // empty post.

  var isSingleUnmodifiedDefaultBlock = blocks.length === 1 && Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["isUnmodifiedDefaultBlock"])(blocks[0]);

  if (isSingleUnmodifiedDefaultBlock) {
    return [];
  }

  return blocks;
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

var getEditedPostContent = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = getCurrentPostId(state);
    var postType = getCurrentPostType(state);
    var record = select('core').getEditedEntityRecord('postType', postType, postId);

    if (record) {
      if (typeof record.content === 'function') {
        return record.content(record);
      } else if (record.blocks) {
        return Object(_utils_serialize_blocks__WEBPACK_IMPORTED_MODULE_12__["default"])(record.blocks);
      } else if (record.content) {
        return record.content;
      }
    }

    return '';
  };
});
/**
 * Returns the reusable block with the given ID.
 *
 * @param {Object}        state Global application state.
 * @param {number|string} ref   The reusable block's ID.
 *
 * @return {Object} The reusable block, or null if none exists.
 */

var __experimentalGetReusableBlock = Object(rememo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state, ref) {
  var block = state.reusableBlocks.data[ref];

  if (!block) {
    return null;
  }

  var isTemporary = isNaN(parseInt(ref));
  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, block, {
    id: isTemporary ? ref : +ref,
    isTemporary: isTemporary
  });
}, function (state, ref) {
  return [state.reusableBlocks.data[ref]];
});
/**
 * Returns whether or not the reusable block with the given ID is being saved.
 *
 * @param {Object} state Global application state.
 * @param {string} ref   The reusable block's ID.
 *
 * @return {boolean} Whether or not the reusable block is being saved.
 */

function __experimentalIsSavingReusableBlock(state, ref) {
  return state.reusableBlocks.isSaving[ref] || false;
}
/**
 * Returns true if the reusable block with the given ID is being fetched, or
 * false otherwise.
 *
 * @param {Object} state Global application state.
 * @param {string} ref   The reusable block's ID.
 *
 * @return {boolean} Whether the reusable block is being fetched.
 */

function __experimentalIsFetchingReusableBlock(state, ref) {
  return !!state.reusableBlocks.isFetching[ref];
}
/**
 * Returns an array of all reusable blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} An array of all reusable blocks.
 */

var __experimentalGetReusableBlocks = Object(rememo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(state.reusableBlocks.data, function (value, ref) {
    return __experimentalGetReusableBlock(state, ref);
  });
}, function (state) {
  return [state.reusableBlocks.data];
});
/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @param {Object} state         Current global application state.
 * @param {Object} transactionId Optimist transaction ID.
 *
 * @return {Object} Global application state prior to transaction.
 */

function getStateBeforeOptimisticTransaction(state, transactionId) {
  var transaction = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(state.optimist, function (entry) {
    return entry.beforeState && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(entry.action, ['optimist', 'id']) === transactionId;
  });
  return transaction ? transaction.beforeState : null;
}
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function isPublishingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  } // Saving is optimistic, so assume that current post would be marked as
  // published if publishing


  if (!isCurrentPostPublished(state)) {
    return false;
  } // Use post update transaction ID to retrieve the state prior to the
  // optimistic transaction


  var stateBeforeRequest = getStateBeforeOptimisticTransaction(state, _constants__WEBPACK_IMPORTED_MODULE_10__["POST_UPDATE_TRANSACTION_ID"]); // Consider as publishing when current post prior to request was not
  // considered published

  return !!stateBeforeRequest && !isCurrentPostPublished(null, stateBeforeRequest.currentPost);
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function isPermalinkEditable(state) {
  var permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');
  return _constants__WEBPACK_IMPORTED_MODULE_10__["PERMALINK_POSTNAME_REGEX"].test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  var permalinkParts = getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  var prefix = permalinkParts.prefix,
      postName = permalinkParts.postName,
      suffix = permalinkParts.suffix;

  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function getPermalinkParts(state) {
  var permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  var postName = getEditedPostAttribute(state, 'slug') || getEditedPostAttribute(state, 'generated_slug');

  var _permalinkTemplate$sp = permalinkTemplate.split(_constants__WEBPACK_IMPORTED_MODULE_10__["PERMALINK_POSTNAME_REGEX"]),
      _permalinkTemplate$sp2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_permalinkTemplate$sp, 2),
      prefix = _permalinkTemplate$sp2[0],
      suffix = _permalinkTemplate$sp2[1];

  return {
    prefix: prefix,
    postName: postName,
    suffix: suffix
  };
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @param {Object}   state     Editor state.
 * @param {Function} predicate Function given state, returning true if match.
 *
 * @return {boolean} Whether predicate matches for some history.
 */

function inSomeHistory(state, predicate) {
  var optimist = state.optimist; // In recursion, optimist state won't exist. Assume exhausted options.

  if (!optimist) {
    return false;
  }

  return optimist.some(function (_ref) {
    var beforeState = _ref.beforeState;
    return beforeState && predicate(beforeState);
  });
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function canUserUseUnfilteredHTML(state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["has"])(getCurrentPost(state), ['_links', 'wp:action-unfiltered-html']);
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

function isPublishSidebarEnabled(state) {
  if (state.preferences.hasOwnProperty('isPublishSidebarEnabled')) {
    return state.preferences.isPublishSidebarEnabled;
  }

  return _defaults__WEBPACK_IMPORTED_MODULE_9__["PREFERENCES_DEFAULTS"].isPublishSidebarEnabled;
}
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function getEditorBlocks(state) {
  return getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function __unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

function getBlockEditorSelector(name) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["createRegistrySelector"])(function (select) {
    return function (state) {
      var _select;

      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('`wp.data.select( \'core/editor\' ).' + name + '`', {
        alternative: '`wp.data.select( \'core/block-editor\' ).' + name + '`'
      });

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_select = select('core/block-editor'))[name].apply(_select, args);
    };
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


var getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

var isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

var getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

var getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

var getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see __unstableGetBlockWithoutInnerBlocks in core/block-editor store.
 */

var __unstableGetBlockWithoutInnerBlocks = getBlockEditorSelector('__unstableGetBlockWithoutInnerBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

var getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

var getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

var getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

var getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

var getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

var getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

var getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

var getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

var hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

var getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

var getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

var getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

var getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

var getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

var getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

var getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

var getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

var getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

var getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

var getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

var getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

var isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

var isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

var isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

var getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

var getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

var getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

var getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

var isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

var hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

var isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

var hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

var isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

var isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

var getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

var isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

var isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

var getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

var isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

var isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

var getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

var getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

var canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

var getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

var hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

var getBlockListSettings = getBlockEditorSelector('getBlockListSettings');


/***/ }),

/***/ "./packages/editor/build-module/store/utils/notice-builder.js":
/*!********************************************************************!*\
  !*** ./packages/editor/build-module/store/utils/notice-builder.js ***!
  \********************************************************************/
/*! exports provided: getNotificationArgumentsForSaveSuccess, getNotificationArgumentsForSaveFail, getNotificationArgumentsForTrashFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationArgumentsForSaveSuccess", function() { return getNotificationArgumentsForSaveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationArgumentsForSaveFail", function() { return getNotificationArgumentsForSaveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationArgumentsForTrashFail", function() { return getNotificationArgumentsForTrashFail; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/editor/build-module/store/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  var previousPost = data.previousPost,
      post = data.post,
      postType = data.postType; // Autosaves are neither shown a notice nor redirected.

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(data.options, ['isAutosave'])) {
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(publishStatus, previousPost.status);
  var willPublish = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(publishStatus, post.status);
  var noticeMessage;
  var shouldShowLink = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(postType, ['viewable'], false);

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = null;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice
    noticeMessage = postType.labels.item_updated;
  }

  if (noticeMessage) {
    var actions = [];

    if (shouldShowLink) {
      actions.push({
        label: postType.labels.view_item,
        url: post.link
      });
    }

    return [noticeMessage, {
      id: _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_POST_NOTICE_ID"],
      type: 'snackbar',
      actions: actions
    }];
  }

  return [];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  var post = data.post,
      edits = data.edits,
      error = data.error;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message

  var messages = {
    publish: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Publishing failed.'),
    private: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Publishing failed.'),
    future: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scheduling failed.')
  };
  var noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%1$s Error message: %2$s'), noticeMessage, error.message);
  }

  return [noticeMessage, {
    id: _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_POST_NOTICE_ID"]
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Trashing failed'), {
    id: _constants__WEBPACK_IMPORTED_MODULE_1__["TRASH_POST_NOTICE_ID"]
  }];
}


/***/ }),

/***/ "./packages/editor/build-module/store/utils/serialize-blocks.js":
/*!**********************************************************************!*\
  !*** ./packages/editor/build-module/store/utils/serialize-blocks.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/autop */ "@wordpress/autop");
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Serializes blocks following backwards compatibility conventions.
 *
 * @param {Array} blocksForSerialization The blocks to serialize.
 *
 * @return {string} The blocks serialization.
 */

var serializeBlocks = memize__WEBPACK_IMPORTED_MODULE_0___default()(function (blocksForSerialization) {
  // A single unmodified default block is assumed to
  // be equivalent to an empty post.
  if (blocksForSerialization.length === 1 && Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["isUnmodifiedDefaultBlock"])(blocksForSerialization[0])) {
    blocksForSerialization = [];
  }

  var content = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["serialize"])(blocksForSerialization); // For compatibility, treat a post consisting of a
  // single freeform block as legacy content and apply
  // pre-block-editor removep'd content formatting.

  if (blocksForSerialization.length === 1 && blocksForSerialization[0].name === Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["getFreeformContentHandlerName"])()) {
    content = Object(_wordpress_autop__WEBPACK_IMPORTED_MODULE_2__["removep"])(content);
  }

  return content;
}, {
  maxSize: 1
});
/* harmony default export */ __webpack_exports__["default"] = (serializeBlocks);


/***/ }),

/***/ "./packages/editor/build-module/utils/index.js":
/*!*****************************************************!*\
  !*** ./packages/editor/build-module/utils/index.js ***!
  \*****************************************************/
/*! exports provided: mediaUpload, cleanForSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-upload */ "./packages/editor/build-module/utils/media-upload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return _media_upload__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./packages/editor/build-module/utils/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return _url_js__WEBPACK_IMPORTED_MODULE_1__["cleanForSlug"]; });

/**
 * Internal dependencies
 */





/***/ }),

/***/ "./packages/editor/build-module/utils/media-upload/index.js":
/*!******************************************************************!*\
  !*** ./packages/editor/build-module/utils/media-upload/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param   {Object}   $0                   Parameters object passed to the function.
 * @param   {?Object}  $0.additionalData    Additional data to include in the request.
 * @param   {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param   {Array}    $0.filesList         List of files.
 * @param   {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param   {Function} $0.onError           Function called when an error happens.
 * @param   {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$additionalData = _ref.additionalData,
      additionalData = _ref$additionalData === void 0 ? {} : _ref$additionalData,
      allowedTypes = _ref.allowedTypes,
      filesList = _ref.filesList,
      maxUploadFileSize = _ref.maxUploadFileSize,
      _ref$onError = _ref.onError,
      _onError = _ref$onError === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref$onError,
      onFileChange = _ref.onFileChange;

  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getEditorSettings = _select.getEditorSettings;

  var wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  Object(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__["uploadMedia"])({
    allowedTypes: allowedTypes,
    filesList: filesList,
    onFileChange: onFileChange,
    additionalData: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      post: getCurrentPostId()
    }, additionalData),
    maxUploadFileSize: maxUploadFileSize,
    onError: function onError(_ref2) {
      var message = _ref2.message;
      return _onError(message);
    },
    wpAllowedMimeTypes: wpAllowedMimeTypes
  });
});


/***/ }),

/***/ "./packages/editor/build-module/utils/terms.js":
/*!*****************************************************!*\
  !*** ./packages/editor/build-module/utils/terms.js ***!
  \*****************************************************/
/*! exports provided: buildTermsTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTermsTree", function() { return buildTermsTree; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms  Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  var flatTermsWithParentAndChildren = flatTerms.map(function (term) {
    return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: [],
      parent: null
    }, term);
  });
  var termsByParent = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  var fillWithChildren = function fillWithChildren(terms) {
    return terms.map(function (term) {
      var children = termsByParent[term.id];
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, term, {
        children: children && children.length ? fillWithChildren(children) : []
      });
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
}


/***/ }),

/***/ "./packages/editor/build-module/utils/url.js":
/*!***************************************************!*\
  !*** ./packages/editor/build-module/utils/url.js ***!
  \***************************************************/
/*! exports provided: getWPAdminURL, cleanForSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWPAdminURL", function() { return getWPAdminURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return cleanForSlug; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Returns the URL of a WPAdmin Page.
 *
 * TODO: This should be moved to a module less specific to the editor.
 *
 * @param {string} page  Page to navigate to.
 * @param {Object} query Query Args.
 *
 * @return {string} WPAdmin URL.
 */

function getWPAdminURL(page, query) {
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])(page, query);
}
/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts whitespace, periods, forward slashes and underscores to hyphens.
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin
 * letters. Removes combining diacritical marks. Converts remaining string
 * to lowercase. It does not touch octets, HTML entities, or other encoded
 * characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  if (!string) {
    return '';
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["toLower"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["deburr"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["trim"])(string.replace(/[\s\./_]+/g, '-'), '-')));
}


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/autop":
/*!****************************************!*\
  !*** external {"this":["wp","autop"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["autop"]; }());

/***/ }),

/***/ "@wordpress/block-directory":
/*!*************************************************!*\
  !*** external {"this":["wp","blockDirectory"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockDirectory"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

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

/***/ "@wordpress/data-controls":
/*!***********************************************!*\
  !*** external {"this":["wp","dataControls"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/deprecated":
/*!*********************************************!*\
  !*** external {"this":["wp","deprecated"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

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

/***/ "@wordpress/html-entities":
/*!***********************************************!*\
  !*** external {"this":["wp","htmlEntities"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

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

/***/ "@wordpress/rich-text":
/*!*******************************************!*\
  !*** external {"this":["wp","richText"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

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

/***/ "@wordpress/wordcount":
/*!********************************************!*\
  !*** external {"this":["wp","wordcount"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["wordcount"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map