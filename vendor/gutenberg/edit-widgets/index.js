this["wp"] = this["wp"] || {}; this["wp"]["editWidgets"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/edit-widgets/build-module/index.js");
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

/***/ "./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/index.js":
/*!****************************************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/index.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var _widget_areas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widget-areas */ "./packages/edit-widgets/build-module/components/widget-areas/index.js");
/* harmony import */ var _sync_customizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sync-customizer */ "./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/sync-customizer.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function CustomizerEditWidgetsInitializer(_ref) {
  var settings = _ref.settings;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SlotFillProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-widgets-customizer-edit-widgets-initializer__content",
    role: "region",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Widgets screen content'),
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_widget_areas__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockEditorSettings: settings
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"].Slot, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["navigateRegions"])(CustomizerEditWidgetsInitializer));


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/sync-customizer.js":
/*!**************************************************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/sync-customizer.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/*
Widget area edits made in the Customizer are synced to Customizer
changesets as an object, encoded as a JSON string, where the keys
are widget area IDs and the values are serialized block content.
This file takes care of that syncing using the 2-way data binding
supported by `WP_Customize_Control`s. The process is as follows:

- On load, the client checks if the current changeset has
widget areas that it can parse and use to hydrate the store.
It will load all widget areas for the current theme, but if
the changeset has content for a given area, it will replace
its actual published content with the changeset's.

- On edit, the client updates the 2-way bound input with a new object that maps
widget area IDs and the values are serialized block content, encoded
as a JSON string.

- On publish, a PHP action will parse the JSON string in the
changeset and update all the widget areas in it, to store the
new content.
*/
// Get widget areas from the store in an `id => blocks` mapping.

var getWidgetAreasObject = function getWidgetAreasObject() {
  var _window$wp$data$selec = window.wp.data.select('core/edit-widgets'),
      getWidgetAreas = _window$wp$data$selec.getWidgetAreas,
      getBlocksFromWidgetArea = _window$wp$data$selec.getBlocksFromWidgetArea;

  return getWidgetAreas().reduce(function (widgetAreasObject, _ref) {
    var id = _ref.id;
    widgetAreasObject[id] = getBlocksFromWidgetArea(id);
    return widgetAreasObject;
  }, {});
}; // Serialize the provided blocks and render them in the widget area with the provided ID.


var previewBlocksInWidgetArea = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(function (id, blocks) {
  var customizePreviewIframe = document.querySelector('#customize-preview > iframe');

  if (!customizePreviewIframe || !customizePreviewIframe.contentDocument) {
    return;
  }

  var widgetArea = customizePreviewIframe.contentDocument.querySelector("[data-customize-partial-placement-context*='\"sidebar_id\":\"".concat(id, "\"']"));

  if (widgetArea) {
    widgetArea.innerHTML = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["serialize"])(blocks);
    widgetArea.parentElement.innerHTML = widgetArea.outerHTML;
  }
}, 1000); // Update the hidden input that has 2-way data binding with Customizer settings.

var updateSettingInputValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(function (nextWidgetAreas) {
  var settingInput = document.getElementById('_customize-input-gutenberg_widget_blocks');

  if (settingInput) {
    settingInput.value = JSON.stringify(Object.keys(nextWidgetAreas).reduce(function (value, id) {
      value[id] = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["serialize"])(nextWidgetAreas[id]);
      return value;
    }, {}));
    settingInput.dispatchEvent(new window.Event('change'));
  }
}, 1000); // Check that all the necessary globals are present.

if (window.wp && window.wp.customize && window.wp.data) {
  var ran = false; // Wait for the Customizer to finish bootstrapping.

  window.wp.customize.bind('ready', function () {
    return window.wp.customize.previewer.bind('ready', function () {
      // The Customizer will call this on every preview refresh,
      // but we only want to run it once to avoid running another
      // store setup that would set changeset edits and save
      // widget blocks unintentionally.
      if (ran) {
        return;
      }

      ran = true; // Try to parse a previous changeset from the hidden input.

      var widgetAreas;

      try {
        widgetAreas = JSON.parse(document.getElementById('_customize-input-gutenberg_widget_blocks').value);
        widgetAreas = Object.keys(widgetAreas).reduce(function (value, id) {
          value[id] = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["parse"])(widgetAreas[id]);
          return value;
        }, {});
      } catch (err) {
        widgetAreas = {};
      } // Wait for setup to finish before overwriting sidebars with changeset data,
      // if any, and subscribe to registry changes after that so that we can preview
      // changes and update the hidden input's value when any of the widget areas change.


      var _window$wp$data$dispa = window.wp.data.dispatch('core/edit-widgets'),
          setupWidgetAreas = _window$wp$data$dispa.setupWidgetAreas,
          updateBlocksInWidgetArea = _window$wp$data$dispa.updateBlocksInWidgetArea;

      setupWidgetAreas().then(function () {
        Object.keys(widgetAreas).forEach(function (id) {
          return updateBlocksInWidgetArea(id, widgetAreas[id]);
        });
        widgetAreas = getWidgetAreasObject();
        window.wp.data.subscribe(function () {
          var nextWidgetAreas = getWidgetAreasObject();
          var didUpdate = false;

          for (var _i = 0, _Object$keys = Object.keys(nextWidgetAreas); _i < _Object$keys.length; _i++) {
            var id = _Object$keys[_i];

            if (widgetAreas[id] !== nextWidgetAreas[id]) {
              previewBlocksInWidgetArea(id, nextWidgetAreas[id]);
              didUpdate = true;
            }
          }

          if (didUpdate) {
            updateSettingInputValue(nextWidgetAreas);
          }

          widgetAreas = nextWidgetAreas;
        });
      });
    });
  });
}


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/edit-widgets-initializer/index.js":
/*!*****************************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/edit-widgets-initializer/index.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./packages/edit-widgets/build-module/components/layout/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function EditWidgetsInitializer(_ref) {
  var setupWidgetAreas = _ref.setupWidgetAreas,
      settings = _ref.settings;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setupWidgetAreas();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockEditorSettings: settings
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/edit-widgets'),
      setupWidgetAreas = _dispatch.setupWidgetAreas;

  return {
    setupWidgetAreas: setupWidgetAreas
  };
})])(EditWidgetsInitializer));


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/header/index.js":
/*!***********************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/header/index.js ***!
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
/* harmony import */ var _inserter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inserter */ "./packages/edit-widgets/build-module/components/inserter/index.js");
/* harmony import */ var _save_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../save-button */ "./packages/edit-widgets/build-module/components/save-button/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function Header() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-widgets-header",
    role: "region",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Widgets screen top bar'),
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["NavigableMenu"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inserter__WEBPACK_IMPORTED_MODULE_3__["default"].Slot, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "edit-widgets-header__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block Areas'), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(experimental)')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-widgets-header__actions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_save_button__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/inserter/index.js":
/*!*************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/inserter/index.js ***!
  \*************************************************************************/
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


var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('EditWidgetsInserter'),
    BlockInserterFill = _createSlotFill.Fill,
    BlockInserterSlot = _createSlotFill.Slot;

var Inserter = BlockInserterFill;

Inserter.Slot = function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockInserterSlot, {
    bubblesVirtually: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Inserter);


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/layout/index.js":
/*!***********************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/layout/index.js ***!
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "./packages/edit-widgets/build-module/components/header/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar */ "./packages/edit-widgets/build-module/components/sidebar/index.js");
/* harmony import */ var _widget_areas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget-areas */ "./packages/edit-widgets/build-module/components/widget-areas/index.js");
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notices */ "./packages/edit-widgets/build-module/components/notices/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function Layout(_ref) {
  var blockEditorSettings = _ref.blockEditorSettings;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SlotFillProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_notices__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-widgets-layout__content",
    role: "region",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Widgets screen content'),
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_widget_areas__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blockEditorSettings: blockEditorSettings
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Popover"].Slot, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["navigateRegions"])(Layout));


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/notices/index.js":
/*!************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/notices/index.js ***!
  \************************************************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function Notices() {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return {
      notices: select('core/notices').getNotices()
    };
  }),
      notices = _useSelect.notices;

  var snackbarNotices = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(notices, {
    type: 'snackbar'
  });

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core/notices'),
      removeNotice = _useDispatch.removeNotice;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SnackbarList"], {
    notices: snackbarNotices,
    className: "edit-widgets-notices__snackbar",
    onRemove: removeNotice
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Notices);


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/save-button/index.js":
/*!****************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/save-button/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);





/**
 * WordPress dependencies
 */





function SaveButton() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isSaving = _useState2[0],
      setIsSaving = _useState2[1];

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])('core/edit-widgets'),
      saveWidgetAreas = _useDispatch.saveWidgetAreas;

  var onClick = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsSaving(true);
            _context.next = 3;
            return saveWidgetAreas();

          case 3:
            setIsSaving(false);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isPrimary: true,
    isLarge: true,
    isBusy: isSaving,
    "aria-disabled": isSaving,
    onClick: isSaving ? undefined : onClick
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Update'));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveButton);


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/sidebar/index.js":
/*!************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/sidebar/index.js ***!
  \************************************************************************/
/*! exports provided: BlockSidebarFill, BlockSidebarSlot, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSidebarFill", function() { return BlockSidebarFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSidebarSlot", function() { return BlockSidebarSlot; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('EditWidgetsBlockSidebar'),
    BlockSidebarFill = _createSlotFill.Fill,
    BlockSidebarSlot = _createSlotFill.Slot;



function Sidebar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-widgets-sidebar",
    role: "region",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Widgets advanced settings'),
    tabIndex: "-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], {
    header: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block Areas')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockSidebarSlot, {
    bubblesVirtually: true
  })));
}

Sidebar.Inspector = BlockSidebarFill;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/widget-area/index.js":
/*!****************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/widget-area/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar */ "./packages/edit-widgets/build-module/components/sidebar/index.js");
/* harmony import */ var _selection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection-observer */ "./packages/edit-widgets/build-module/components/widget-area/selection-observer.js");
/* harmony import */ var _inserter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../inserter */ "./packages/edit-widgets/build-module/components/inserter/index.js");




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function getBlockEditorSettings(blockEditorSettings, hasUploadPermissions) {
  if (!hasUploadPermissions) {
    return blockEditorSettings;
  }

  var mediaUploadBlockEditor = function mediaUploadBlockEditor(_ref) {
    var _onError = _ref.onError,
        argumentsObject = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["onError"]);

    Object(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__["uploadMedia"])(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
      onError: function onError(_ref2) {
        var message = _ref2.message;
        return _onError(message);
      }
    }, argumentsObject));
  };

  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockEditorSettings, {
    __experimentalMediaUpload: mediaUploadBlockEditor
  });
}

function WidgetArea(_ref3) {
  var blockEditorSettings = _ref3.blockEditorSettings,
      blocks = _ref3.blocks,
      hasUploadPermissions = _ref3.hasUploadPermissions,
      initialOpen = _ref3.initialOpen,
      isSelectedArea = _ref3.isSelectedArea,
      onBlockSelected = _ref3.onBlockSelected,
      updateBlocks = _ref3.updateBlocks,
      widgetAreaName = _ref3.widgetAreaName;
  var settings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getBlockEditorSettings(blockEditorSettings, hasUploadPermissions);
  }, [blockEditorSettings, hasUploadPermissions]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
    className: "edit-widgets-widget-area"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: widgetAreaName,
    initialOpen: initialOpen
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockEditorProvider"], {
    value: blocks,
    onInput: updateBlocks,
    onChange: updateBlocks,
    settings: settings
  }, isSelectedArea && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_inserter__WEBPACK_IMPORTED_MODULE_11__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["Inserter"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockEditorKeyboardShortcuts"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_selection_observer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isSelectedArea: isSelectedArea,
    onBlockSelected: onBlockSelected
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_sidebar__WEBPACK_IMPORTED_MODULE_9__["default"].Inspector, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockInspector"], {
    showNoBlockSelectedMessage: false
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "editor-styles-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["WritingFlow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ObserveTyping"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockList"], {
    className: "edit-widgets-main-block-list",
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ButtonBlockerAppender"]
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, _ref4) {
  var id = _ref4.id;

  var _select = select('core/edit-widgets'),
      getBlocksFromWidgetArea = _select.getBlocksFromWidgetArea,
      getWidgetArea = _select.getWidgetArea;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var blocks = getBlocksFromWidgetArea(id);
  var widgetAreaName = (getWidgetArea(id) || {}).name;
  return {
    blocks: blocks,
    widgetAreaName: widgetAreaName,
    hasUploadPermissions: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["defaultTo"])(canUser('create', 'media'), true)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch, _ref5) {
  var id = _ref5.id;
  return {
    updateBlocks: function updateBlocks(blocks) {
      var _dispatch = dispatch('core/edit-widgets'),
          updateBlocksInWidgetArea = _dispatch.updateBlocksInWidgetArea;

      updateBlocksInWidgetArea(id, blocks);
    }
  };
})])(WidgetArea));


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/widget-area/selection-observer.js":
/*!*****************************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/widget-area/selection-observer.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);






/**
 * WordPress dependencies
 */



/**
 * Component which calls onBlockSelected prop when a block becomes selected. It
 * can be used to ensuring that only one block appears as selected
 * when multiple editors exist in a page.
 *
 * @type {WPComponent}
 */

var SelectionObserver =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SelectionObserver, _Component);

  function SelectionObserver() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SelectionObserver);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SelectionObserver).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectionObserver, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          hasSelectedBlock = _this$props.hasSelectedBlock,
          onBlockSelected = _this$props.onBlockSelected,
          isSelectedArea = _this$props.isSelectedArea,
          clearSelectedBlock = _this$props.clearSelectedBlock;

      if (hasSelectedBlock && !prevProps.hasSelectedBlock) {
        onBlockSelected();
      }

      if (!isSelectedArea && prevProps.isSelectedArea) {
        clearSelectedBlock();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return SelectionObserver;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      hasSelectedBlock = _select.hasSelectedBlock;

  return {
    hasSelectedBlock: hasSelectedBlock()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      clearSelectedBlock = _dispatch.clearSelectedBlock;

  return {
    clearSelectedBlock: clearSelectedBlock
  };
})])(SelectionObserver));


/***/ }),

/***/ "./packages/edit-widgets/build-module/components/widget-areas/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/edit-widgets/build-module/components/widget-areas/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widget_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget-area */ "./packages/edit-widgets/build-module/components/widget-area/index.js");



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function WidgetAreas(_ref) {
  var areas = _ref.areas,
      blockEditorSettings = _ref.blockEditorSettings;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedArea = _useState2[0],
      setSelectedArea = _useState2[1];

  var onBlockSelectedInArea = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return areas.map(function (value, index) {
      return function () {
        setSelectedArea(index);
      };
    });
  }, [areas, setSelectedArea]);
  return areas.map(function (_ref2, index) {
    var id = _ref2.id;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_widget_area__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isSelectedArea: index === selectedArea,
      onBlockSelected: onBlockSelectedInArea[index],
      blockEditorSettings: blockEditorSettings,
      key: id,
      id: id,
      initialOpen: index === 0
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  var _select = select('core/edit-widgets'),
      getWidgetAreas = _select.getWidgetAreas;

  var areas = getWidgetAreas();
  return {
    areas: areas
  };
})])(WidgetAreas));


/***/ }),

/***/ "./packages/edit-widgets/build-module/hooks/components/index.js":
/*!**********************************************************************!*\
  !*** ./packages/edit-widgets/build-module/hooks/components/index.js ***!
  \**********************************************************************/
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

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.MediaUpload', 'core/edit-widgets/replace-media-upload', replaceMediaUpload);


/***/ }),

/***/ "./packages/edit-widgets/build-module/hooks/index.js":
/*!***********************************************************!*\
  !*** ./packages/edit-widgets/build-module/hooks/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./packages/edit-widgets/build-module/hooks/components/index.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./packages/edit-widgets/build-module/index.js":
/*!*****************************************************!*\
  !*** ./packages/edit-widgets/build-module/index.js ***!
  \*****************************************************/
/*! exports provided: initialize, customizerInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizerInitialize", function() { return customizerInitialize; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./packages/edit-widgets/build-module/hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./packages/edit-widgets/build-module/store/index.js");
/* harmony import */ var _components_edit_widgets_initializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-widgets-initializer */ "./packages/edit-widgets/build-module/components/edit-widgets-initializer/index.js");
/* harmony import */ var _components_customizer_edit_widgets_initializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customizer-edit-widgets-initializer */ "./packages/edit-widgets/build-module/components/customizer-edit-widgets-initializer/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





/**
 * Initializes the block editor in the widgets screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Block editor settings.
 */

function initialize(id, settings) {
  Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__["registerCoreBlocks"])();

  if (true) {
    Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__["__experimentalRegisterExperimentalCoreBlocks"])(settings);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_edit_widgets_initializer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    settings: settings
  }), document.getElementById(id));
}
/**
 * Initializes the block editor in the widgets Customizer section.
 *
 * @param {string} id       ID of the root element to render the section in.
 * @param {Object} settings Block editor settings.
 */

function customizerInitialize(id, settings) {
  Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__["registerCoreBlocks"])();

  if (true) {
    Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__["__experimentalRegisterExperimentalCoreBlocks"])(settings);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_customizer_edit_widgets_initializer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    settings: settings
  }), document.getElementById(id));
}


/***/ }),

/***/ "./packages/edit-widgets/build-module/store/actions.js":
/*!*************************************************************!*\
  !*** ./packages/edit-widgets/build-module/store/actions.js ***!
  \*************************************************************/
/*! exports provided: setupWidgetAreas, updateBlocksInWidgetArea, saveWidgetAreas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupWidgetAreas", function() { return setupWidgetAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlocksInWidgetArea", function() { return updateBlocksInWidgetArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWidgetAreas", function() { return saveWidgetAreas; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);




var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(setupWidgetAreas),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(saveWidgetAreas);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var WIDGET_AREAS_SAVE_NOTICE_ID = 'WIDGET_AREAS_SAVE_NOTICE_ID';
/**
 * Yields an action object that setups the widget areas.
 *
 * @yield {Object} Action object.
 */

function setupWidgetAreas() {
  var widgetAreas;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setupWidgetAreas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core', 'getEntityRecords', 'root', 'widgetArea');

        case 2:
          widgetAreas = _context.sent;
          _context.next = 5;
          return {
            type: 'SETUP_WIDGET_AREAS',
            widgetAreas: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(widgetAreas, function (_ref) {
              var content = _ref.content,
                  widgetAreaProperties = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

              return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, widgetAreaProperties, {
                blocks: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["parse"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(content, ['raw'], ''))
              });
            })
          };

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object used to update the blocks in a specific widget area.
 *
 * @param {string}   widgetAreaId Id of the widget area.
 * @param {Object[]} blocks       Array of blocks that should be part of the widget area.
 *
 * @return {Object} Action object.
 */

function updateBlocksInWidgetArea(widgetAreaId) {
  var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: 'UPDATE_BLOCKS_IN_WIDGET_AREA',
    widgetAreaId: widgetAreaId,
    blocks: blocks
  };
}
/**
 * Action that performs the logic to save widget areas.
 *
 * @yield {Object} Action object.
 */

function saveWidgetAreas() {
  var widgetAreas, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref3, id, blocks;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function saveWidgetAreas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core/edit-widgets', 'getWidgetAreas');

        case 2:
          widgetAreas = _context2.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 6;
          _iterator = widgetAreas[Symbol.iterator]();

        case 8:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 19;
            break;
          }

          _ref3 = _step.value;
          id = _ref3.id;
          _context2.next = 13;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core/edit-widgets', 'getBlocksFromWidgetArea', id);

        case 13:
          blocks = _context2.sent;
          _context2.next = 16;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core', 'saveWidgetArea', {
            id: id,
            content: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["serialize"])(blocks)
          });

        case 16:
          _iteratorNormalCompletion = true;
          _context2.next = 8;
          break;

        case 19:
          _context2.next = 25;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 25:
          _context2.prev = 25;
          _context2.prev = 26;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 28:
          _context2.prev = 28;

          if (!_didIteratorError) {
            _context2.next = 31;
            break;
          }

          throw _iteratorError;

        case 31:
          return _context2.finish(28);

        case 32:
          return _context2.finish(25);

        case 33:
          _context2.next = 35;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/notices', 'createSuccessNotice', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Block areas saved succesfully.'), {
            id: WIDGET_AREAS_SAVE_NOTICE_ID,
            type: 'snackbar'
          });

        case 35:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[6, 21, 25, 33], [26,, 28, 32]]);
}


/***/ }),

/***/ "./packages/edit-widgets/build-module/store/index.js":
/*!***********************************************************!*\
  !*** ./packages/edit-widgets/build-module/store/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./packages/edit-widgets/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/edit-widgets/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./packages/edit-widgets/build-module/store/selectors.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])('core/edit-widgets', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["controls"]
});
store.dispatch({
  type: 'INIT'
});
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./packages/edit-widgets/build-module/store/reducer.js":
/*!*************************************************************!*\
  !*** ./packages/edit-widgets/build-module/store/reducer.js ***!
  \*************************************************************/
/*! exports provided: widgetAreas, widgetAreaBlocks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetAreas", function() { return widgetAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetAreaBlocks", function() { return widgetAreaBlocks; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer storing some properties of each widget area.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */

function widgetAreas() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SETUP_WIDGET_AREAS':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keyBy"])(action.widgetAreas, 'id'), function (value) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["pick"])(value, ['name', 'id', 'description']);
      });
  }

  return state;
}
/**
 * Reducer storing the blocks part of each widget area.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */

function widgetAreaBlocks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SETUP_WIDGET_AREAS':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keyBy"])(action.widgetAreas, 'id'), function (value) {
        return value.blocks;
      });

    case 'UPDATE_BLOCKS_IN_WIDGET_AREA':
      {
        var blocks = state[action.widgetAreaId] || []; // check if change is required

        if (blocks === action.blocks) {
          return state;
        }

        return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.widgetAreaId, action.blocks));
      }
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  widgetAreas: widgetAreas,
  widgetAreaBlocks: widgetAreaBlocks
}));


/***/ }),

/***/ "./packages/edit-widgets/build-module/store/selectors.js":
/*!***************************************************************!*\
  !*** ./packages/edit-widgets/build-module/store/selectors.js ***!
  \***************************************************************/
/*! exports provided: getWidgetAreas, getWidgetArea, getBlocksFromWidgetArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidgetAreas", function() { return getWidgetAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidgetArea", function() { return getWidgetArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocksFromWidgetArea", function() { return getBlocksFromWidgetArea; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/**
 * External dependencies
 */


/**
 * Returns an array of widget areas.
 *
 * @param {Object} state Widget editor state.
 * @return {Object[]} Array of widget areas.
 */

var getWidgetAreas = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["toArray"])(state.widgetAreas);
}, function (state) {
  return [state.widgetAreas];
});
/**
 * Returns a widget area object.
 *
 * @param {Object} state        Widget editor state.
 * @param {string} widgetAreaId Id of the widget area.
 * @return {Object} Array of widget areas.
 */

function getWidgetArea(state, widgetAreaId) {
  return state.widgetAreas[widgetAreaId];
}
/**
 * Returns an array of blocks part of a widget area.
 *
 * @param {Object} state        Widget editor state.
 * @param {string} widgetAreaId Id of the widget area.
 * @return {Object[]} Array of blocks.
 */

function getBlocksFromWidgetArea(state, widgetAreaId) {
  return state.widgetAreaBlocks[widgetAreaId];
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