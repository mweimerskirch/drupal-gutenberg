this["wp"] = this["wp"] || {}; this["wp"]["data"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/data/build-module/index.js");
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

/***/ "./node_modules/equivalent-key-map/equivalent-key-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/equivalent-key-map/equivalent-key-map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
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

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/turbo-combine-reducers/index.js":
/*!******************************************************!*\
  !*** ./node_modules/turbo-combine-reducers/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function combineReducers( reducers ) {
	var keys = Object.keys( reducers ),
		getNextState;

	getNextState = ( function() {
		var fn, i, key;

		fn = 'return {';
		for ( i = 0; i < keys.length; i++ ) {
			// Rely on Quoted escaping of JSON.stringify with guarantee that
			// each member of Object.keys is a string.
			//
			// "If Type(value) is String, then return the result of calling the
			// abstract operation Quote with argument value. [...] The abstract
			// operation Quote(value) wraps a String value in double quotes and
			// escapes characters within it."
			//
			// https://www.ecma-international.org/ecma-262/5.1/#sec-15.12.3
			key = JSON.stringify( keys[ i ] );

			fn += key + ':r[' + key + '](s[' + key + '],a),';
		}
		fn += '}';

		return new Function( 'r,s,a', fn );
	} )();

	return function combinedReducer( state, action ) {
		var nextState, i, key;

		// Assumed changed if initial state.
		if ( state === undefined ) {
			return getNextState( reducers, {}, action );
		}

		nextState = getNextState( reducers, state, action );

		// Determine whether state has changed.
		i = keys.length;
		while ( i-- ) {
			key = keys[ i ];
			if ( state[ key ] !== nextState[ key ] ) {
				// Return immediately if a changed value is encountered.
				return nextState;
			}
		}

		return state;
	};
}

module.exports = combineReducers;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./packages/data/build-module/components/async-mode-provider/context.js":
/*!******************************************************************************!*\
  !*** ./packages/data/build-module/components/async-mode-provider/context.js ***!
  \******************************************************************************/
/*! exports provided: Context, AsyncModeConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncModeConsumer", function() { return AsyncModeConsumer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var Context = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
var Consumer = Context.Consumer,
    Provider = Context.Provider;
var AsyncModeConsumer = Consumer;
/* harmony default export */ __webpack_exports__["default"] = (Provider);


/***/ }),

/***/ "./packages/data/build-module/components/async-mode-provider/index.js":
/*!****************************************************************************!*\
  !*** ./packages/data/build-module/components/async-mode-provider/index.js ***!
  \****************************************************************************/
/*! exports provided: useAsyncMode, AsyncModeProvider, AsyncModeConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_async_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-async-mode */ "./packages/data/build-module/components/async-mode-provider/use-async-mode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncMode", function() { return _use_async_mode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./packages/data/build-module/components/async-mode-provider/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncModeProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncModeConsumer", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["AsyncModeConsumer"]; });





/***/ }),

/***/ "./packages/data/build-module/components/async-mode-provider/use-async-mode.js":
/*!*************************************************************************************!*\
  !*** ./packages/data/build-module/components/async-mode-provider/use-async-mode.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsyncMode; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./packages/data/build-module/components/async-mode-provider/context.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function useAsyncMode() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
}


/***/ }),

/***/ "./packages/data/build-module/components/registry-provider/context.js":
/*!****************************************************************************!*\
  !*** ./packages/data/build-module/components/registry-provider/context.js ***!
  \****************************************************************************/
/*! exports provided: Context, RegistryConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryConsumer", function() { return RegistryConsumer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../default-registry */ "./packages/data/build-module/default-registry.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var Context = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(_default_registry__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Consumer = Context.Consumer,
    Provider = Context.Provider;
/**
 * A custom react Context consumer exposing the provided `registry` to
 * children components. Used along with the RegistryProvider.
 *
 * You can read more about the react context api here:
 * https://reactjs.org/docs/context.html#contextprovider
 *
 * @example
 * ```js
 * const {
 *   RegistryProvider,
 *   RegistryConsumer,
 *   createRegistry
 * } = wp.data;
 *
 * const registry = createRegistry( {} );
 *
 * const App = ( { props } ) => {
 *   return <RegistryProvider value={ registry }>
 *     <div>Hello There</div>
 *     <RegistryConsumer>
 *       { ( registry ) => (
 *         <ComponentUsingRegistry
 *         		{ ...props }
 *         	  registry={ registry }
 *       ) }
 *     </RegistryConsumer>
 *   </RegistryProvider>
 * }
 * ```
 */

var RegistryConsumer = Consumer;
/**
 * A custom Context provider for exposing the provided `registry` to children
 * components via a consumer.
 *
 * See <a name="#RegistryConsumer">RegistryConsumer</a> documentation for
 * example.
 */

/* harmony default export */ __webpack_exports__["default"] = (Provider);


/***/ }),

/***/ "./packages/data/build-module/components/registry-provider/index.js":
/*!**************************************************************************!*\
  !*** ./packages/data/build-module/components/registry-provider/index.js ***!
  \**************************************************************************/
/*! exports provided: RegistryProvider, RegistryConsumer, useRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./packages/data/build-module/components/registry-provider/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryConsumer", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["RegistryConsumer"]; });

/* harmony import */ var _use_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-registry */ "./packages/data/build-module/components/registry-provider/use-registry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRegistry", function() { return _use_registry__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/data/build-module/components/registry-provider/use-registry.js":
/*!*********************************************************************************!*\
  !*** ./packages/data/build-module/components/registry-provider/use-registry.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRegistry; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./packages/data/build-module/components/registry-provider/context.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * A custom react hook exposing the registry context for use.
 *
 * This exposes the `registry` value provided via the
 * <a href="#RegistryProvider">Registry Provider</a> to a component implementing
 * this hook.
 *
 * It acts similarly to the `useContext` react hook.
 *
 * Note: Generally speaking, `useRegistry` is a low level hook that in most cases
 * won't be needed for implementation. Most interactions with the wp.data api
 * can be performed via the `useSelect` hook,  or the `withSelect` and
 * `withDispatch` higher order components.
 *
 * @example
 * ```js
 * const {
 *   RegistryProvider,
 *   createRegistry,
 *   useRegistry,
 * } = wp.data
 *
 * const registry = createRegistry( {} );
 *
 * const SomeChildUsingRegistry = ( props ) => {
 *   const registry = useRegistry( registry );
 *   // ...logic implementing the registry in other react hooks.
 * };
 *
 *
 * const ParentProvidingRegistry = ( props ) => {
 *   return <RegistryProvider value={ registry }>
 *     <SomeChildUsingRegistry { ...props } />
 *   </RegistryProvider>
 * };
 * ```
 *
 * @return {Function}  A custom react hook exposing the registry context value.
 */

function useRegistry() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
}


/***/ }),

/***/ "./packages/data/build-module/components/use-dispatch/index.js":
/*!*********************************************************************!*\
  !*** ./packages/data/build-module/components/use-dispatch/index.js ***!
  \*********************************************************************/
/*! exports provided: useDispatch, useDispatchWithMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-dispatch */ "./packages/data/build-module/components/use-dispatch/use-dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _use_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_dispatch_with_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dispatch-with-map */ "./packages/data/build-module/components/use-dispatch/use-dispatch-with-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatchWithMap", function() { return _use_dispatch_with_map__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/data/build-module/components/use-dispatch/use-dispatch-with-map.js":
/*!*************************************************************************************!*\
  !*** ./packages/data/build-module/components/use-dispatch/use-dispatch-with-map.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registry-provider/use-registry */ "./packages/data/build-module/components/registry-provider/use-registry.js");


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
 * Favor useLayoutEffect to ensure the store subscription callback always has
 * the dispatchMap from the latest render. If a store update happens between
 * render and the effect, this could cause missed/stale updates or
 * inconsistent state.
 *
 * Fallback to useEffect for server rendered components because currently React
 * throws a warning when using useLayoutEffect in that environment.
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? _wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : _wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
/**
 * Custom react hook for returning aggregate dispatch actions using the provided
 * dispatchMap.
 *
 * Currently this is an internal api only and is implemented by `withDispatch`
 *
 * @param {Function} dispatchMap  Receives the `registry.dispatch` function as
 *                                the first argument and the `registry` object
 *                                as the second argument.  Should return an
 *                                object mapping props to functions.
 * @param {Array}    deps         An array of dependencies for the hook.
 * @return {Object}  An object mapping props to functions created by the passed
 *                   in dispatchMap.
 */

var useDispatchWithMap = function useDispatchWithMap(dispatchMap, deps) {
  var registry = Object(_registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var currentDispatchMap = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(dispatchMap);
  useIsomorphicLayoutEffect(function () {
    currentDispatchMap.current = dispatchMap;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var currentDispatchProps = currentDispatchMap.current(registry.dispatch, registry);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(currentDispatchProps, function (dispatcher, propName) {
      if (typeof dispatcher !== 'function') {
        // eslint-disable-next-line no-console
        console.warn("Property ".concat(propName, " returned from dispatchMap in useDispatchWithMap must be a function."));
      }

      return function () {
        var _currentDispatchMap$c;

        return (_currentDispatchMap$c = currentDispatchMap.current(registry.dispatch, registry))[propName].apply(_currentDispatchMap$c, arguments);
      };
    });
  }, [registry].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(deps)));
};

/* harmony default export */ __webpack_exports__["default"] = (useDispatchWithMap);


/***/ }),

/***/ "./packages/data/build-module/components/use-dispatch/use-dispatch.js":
/*!****************************************************************************!*\
  !*** ./packages/data/build-module/components/use-dispatch/use-dispatch.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry-provider/use-registry */ "./packages/data/build-module/components/registry-provider/use-registry.js");
/**
 * Internal dependencies
 */

/**
 * A custom react hook returning the current registry dispatch actions creators.
 *
 * Note: The component using this hook must be within the context of a
 * RegistryProvider.
 *
 * @param {string} [storeName]  Optionally provide the name of the store from
 *                             which to retrieve action creators. If not
 *                             provided, the registry.dispatch function is
 *                             returned instead.
 *
 * @example
 * This illustrates a pattern where you may need to retrieve dynamic data from
 * the server via the `useSelect` hook to use in combination with the dispatch
 * action.
 *
 * ```jsx
 * const { useDispatch, useSelect } = wp.data;
 * const { useCallback } = wp.element;
 *
 * function Button( { onClick, children } ) {
 *   return <button type="button" onClick={ onClick }>{ children }</button>
 * }
 *
 * const SaleButton = ( { children } ) => {
 *   const { stockNumber } = useSelect(
 *     ( select ) => select( 'my-shop' ).getStockNumber()
 *   );
 *   const { startSale } = useDispatch( 'my-shop' );
 *   const onClick = useCallback( () => {
 *     const discountPercent = stockNumber > 50 ? 10: 20;
 *     startSale( discountPercent );
 *   }, [ stockNumber ] );
 *   return <Button onClick={ onClick }>{ children }</Button>
 * }
 *
 * // Rendered somewhere in the application:
 * //
 * // <SaleButton>Start Sale!</SaleButton>
 * ```
 * @return {Function}  A custom react hook.
 */

var useDispatch = function useDispatch(storeName) {
  var _useRegistry = Object(_registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      dispatch = _useRegistry.dispatch;

  return storeName === void 0 ? dispatch : dispatch(storeName);
};

/* harmony default export */ __webpack_exports__["default"] = (useDispatch);


/***/ }),

/***/ "./packages/data/build-module/components/use-select/index.js":
/*!*******************************************************************!*\
  !*** ./packages/data/build-module/components/use-select/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/priority-queue */ "@wordpress/priority-queue");
/* harmony import */ var _wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registry-provider/use-registry */ "./packages/data/build-module/components/registry-provider/use-registry.js");
/* harmony import */ var _async_mode_provider_use_async_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../async-mode-provider/use-async-mode */ "./packages/data/build-module/components/async-mode-provider/use-async-mode.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Favor useLayoutEffect to ensure the store subscription callback always has
 * the selector from the latest render. If a store update happens between render
 * and the effect, this could cause missed/stale updates or inconsistent state.
 *
 * Fallback to useEffect for server rendered components because currently React
 * throws a warning when using useLayoutEffect in that environment.
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? _wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : _wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var renderQueue = Object(_wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__["createQueue"])();
/**
 * Custom react hook for retrieving props from registered selectors.
 *
 * In general, this custom React hook follows the
 * [rules of hooks](https://reactjs.org/docs/hooks-rules.html).
 *
 * @param {Function} _mapSelect  Function called on every state change. The
 *                               returned value is exposed to the component
 *                               implementing this hook. The function receives
 *                               the `registry.select` method on the first
 *                               argument and the `registry` on the second
 *                               argument.
 * @param {Array}    deps        If provided, this memoizes the mapSelect so the
 *                               same `mapSelect` is invoked on every state
 *                               change unless the dependencies change.
 *
 * @example
 * ```js
 * const { useSelect } = wp.data;
 *
 * function HammerPriceDisplay( { currency } ) {
 *   const price = useSelect( ( select ) => {
 *     return select( 'my-shop' ).getPrice( 'hammer', currency )
 *   }, [ currency ] );
 *   return new Intl.NumberFormat( 'en-US', {
 *     style: 'currency',
 *     currency,
 *   } ).format( price );
 * }
 *
 * // Rendered in the application:
 * // <HammerPriceDisplay currency="USD" />
 * ```
 *
 * In the above example, when `HammerPriceDisplay` is rendered into an
 * application, the price will be retrieved from the store state using the
 * `mapSelect` callback on `useSelect`. If the currency prop changes then
 * any price in the state for that currency is retrieved. If the currency prop
 * doesn't change and other props are passed in that do change, the price will
 * not change because the dependency is just the currency.
 *
 * @return {Function}  A custom react hook.
 */

function useSelect(_mapSelect, deps) {
  var mapSelect = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(_mapSelect, deps);
  var registry = Object(_registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var isAsync = Object(_async_mode_provider_use_async_mode__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var queueContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      queue: true
    };
  }, [registry]);

  var _useReducer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      _useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      forceRender = _useReducer2[1];

  var latestMapSelect = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var latestIsAsync = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(isAsync);
  var latestMapOutput = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var latestMapOutputError = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var isMounted = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var mapOutput;

  try {
    if (latestMapSelect.current !== mapSelect || latestMapOutputError.current) {
      mapOutput = mapSelect(registry.select, registry);
    } else {
      mapOutput = latestMapOutput.current;
    }
  } catch (error) {
    var errorMessage = "An error occurred while running 'mapSelect': ".concat(error.message);

    if (latestMapOutputError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n";
      errorMessage += "".concat(latestMapOutputError.current.stack, "\n\n");
      errorMessage += 'Original stack trace:';
      throw new Error(errorMessage);
    }
  }

  useIsomorphicLayoutEffect(function () {
    latestMapSelect.current = mapSelect;

    if (latestIsAsync.current !== isAsync) {
      latestIsAsync.current = isAsync;
      renderQueue.flush(queueContext);
    }

    latestMapOutput.current = mapOutput;
    latestMapOutputError.current = undefined;
    isMounted.current = true;
  });
  useIsomorphicLayoutEffect(function () {
    var onStoreChange = function onStoreChange() {
      if (isMounted.current) {
        try {
          var newMapOutput = latestMapSelect.current(registry.select, registry);

          if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_3___default()(latestMapOutput.current, newMapOutput)) {
            return;
          }

          latestMapOutput.current = newMapOutput;
        } catch (error) {
          latestMapOutputError.current = error;
        }

        forceRender({});
      }
    }; // catch any possible state changes during mount before the subscription
    // could be set.


    if (latestIsAsync.current) {
      renderQueue.add(queueContext, onStoreChange);
    } else {
      onStoreChange();
    }

    var unsubscribe = registry.subscribe(function () {
      if (latestIsAsync.current) {
        renderQueue.add(queueContext, onStoreChange);
      } else {
        onStoreChange();
      }
    });
    return function () {
      isMounted.current = false;
      unsubscribe();
      renderQueue.flush(queueContext);
    };
  }, [registry]);
  return mapOutput;
}


/***/ }),

/***/ "./packages/data/build-module/components/with-dispatch/index.js":
/*!**********************************************************************!*\
  !*** ./packages/data/build-module/components/with-dispatch/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_dispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../use-dispatch */ "./packages/data/build-module/components/use-dispatch/index.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Higher-order component used to add dispatch props using registered action
 * creators.
 *
 * @param {Function} mapDispatchToProps A function of returning an object of
 *                                      prop names where value is a
 *                                      dispatch-bound action creator, or a
 *                                      function to be called with the
 *                                      component's props and returning an
 *                                      action creator.
 *
 * @example
 * ```jsx
 * function Button( { onClick, children } ) {
 *     return <button type="button" onClick={ onClick }>{ children }</button>;
 * }
 *
 * const { withDispatch } = wp.data;
 *
 * const SaleButton = withDispatch( ( dispatch, ownProps ) => {
 *     const { startSale } = dispatch( 'my-shop' );
 *     const { discountPercent } = ownProps;
 *
 *     return {
 *         onClick() {
 *             startSale( discountPercent );
 *         },
 *     };
 * } )( Button );
 *
 * // Rendered in the application:
 * //
 * // <SaleButton discountPercent="20">Start Sale!</SaleButton>
 * ```
 *
 * @example
 * In the majority of cases, it will be sufficient to use only two first params
 * passed to `mapDispatchToProps` as illustrated in the previous example.
 * However, there might be some very advanced use cases where using the
 * `registry` object might be used as a tool to optimize the performance of
 * your component. Using `select` function from the registry might be useful
 * when you need to fetch some dynamic data from the store at the time when the
 * event is fired, but at the same time, you never use it to render your
 * component. In such scenario, you can avoid using the `withSelect` higher
 * order component to compute such prop, which might lead to unnecessary
 * re-renders of your component caused by its frequent value change.
 * Keep in mind, that `mapDispatchToProps` must return an object with functions
 * only.
 *
 * ```jsx
 * function Button( { onClick, children } ) {
 *     return <button type="button" onClick={ onClick }>{ children }</button>;
 * }
 *
 * const { withDispatch } = wp.data;
 *
 * const SaleButton = withDispatch( ( dispatch, ownProps, { select } ) => {
 *    // Stock number changes frequently.
 *    const { getStockNumber } = select( 'my-shop' );
 *    const { startSale } = dispatch( 'my-shop' );
 *    return {
 *        onClick() {
 *            const discountPercent = getStockNumber() > 50 ? 10 : 20;
 *            startSale( discountPercent );
 *        },
 *    };
 * } )( Button );
 *
 * // Rendered in the application:
 * //
 * //  <SaleButton>Start Sale!</SaleButton>
 * ```
 *
 * _Note:_ It is important that the `mapDispatchToProps` function always
 * returns an object with the same keys. For example, it should not contain
 * conditions under which a different value would be returned.
 *
 * @return {Component} Enhanced component with merged dispatcher props.
 */

var withDispatch = function withDispatch(mapDispatchToProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (WrappedComponent) {
    return function (ownProps) {
      var mapDispatch = function mapDispatch(dispatch, registry) {
        return mapDispatchToProps(dispatch, ownProps, registry);
      };

      var dispatchProps = Object(_use_dispatch__WEBPACK_IMPORTED_MODULE_3__["useDispatchWithMap"])(mapDispatch, []);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, dispatchProps));
    };
  }, 'withDispatch');
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch);


/***/ }),

/***/ "./packages/data/build-module/components/with-registry/index.js":
/*!**********************************************************************!*\
  !*** ./packages/data/build-module/components/with-registry/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _registry_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registry-provider */ "./packages/data/build-module/components/registry-provider/index.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Higher-order component which renders the original component with the current
 * registry context passed as its `registry` prop.
 *
 * @param {WPComponent} OriginalComponent Original component.
 *
 * @return {WPComponent} Enhanced component.
 */

var withRegistry = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_registry_provider__WEBPACK_IMPORTED_MODULE_3__["RegistryConsumer"], null, function (registry) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        registry: registry
      }));
    });
  };
}, 'withRegistry');
/* harmony default export */ __webpack_exports__["default"] = (withRegistry);


/***/ }),

/***/ "./packages/data/build-module/components/with-select/index.js":
/*!********************************************************************!*\
  !*** ./packages/data/build-module/components/with-select/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../use-select */ "./packages/data/build-module/components/use-select/index.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Higher-order component used to inject state-derived props using registered
 * selectors.
 *
 * @param {Function} mapSelectToProps Function called on every state change,
 *                                   expected to return object of props to
 *                                   merge with the component's own props.
 *
 * @example
 * ```js
 * function PriceDisplay( { price, currency } ) {
 * 	return new Intl.NumberFormat( 'en-US', {
 * 		style: 'currency',
 * 		currency,
 * 	} ).format( price );
 * }
 *
 * const { withSelect } = wp.data;
 *
 * const HammerPriceDisplay = withSelect( ( select, ownProps ) => {
 * 	const { getPrice } = select( 'my-shop' );
 * 	const { currency } = ownProps;
 *
 * 	return {
 * 		price: getPrice( 'hammer', currency ),
 * 	};
 * } )( PriceDisplay );
 *
 * // Rendered in the application:
 * //
 * //  <HammerPriceDisplay currency="USD" />
 * ```
 * In the above example, when `HammerPriceDisplay` is rendered into an
 * application, it will pass the price into the underlying `PriceDisplay`
 * component and update automatically if the price of a hammer ever changes in
 * the store.
 *
 * @return {Component} Enhanced component with merged state data props.
 */

var withSelect = function withSelect(mapSelectToProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (WrappedComponent) {
    return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["pure"])(function (ownProps) {
      var mapSelect = function mapSelect(select, registry) {
        return mapSelectToProps(select, ownProps, registry);
      };

      var mergeProps = Object(_use_select__WEBPACK_IMPORTED_MODULE_3__["default"])(mapSelect);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, mergeProps));
    });
  }, 'withSelect');
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect);


/***/ }),

/***/ "./packages/data/build-module/default-registry.js":
/*!********************************************************!*\
  !*** ./packages/data/build-module/default-registry.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ "./packages/data/build-module/registry.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_registry__WEBPACK_IMPORTED_MODULE_0__["createRegistry"])());


/***/ }),

/***/ "./packages/data/build-module/factory.js":
/*!***********************************************!*\
  !*** ./packages/data/build-module/factory.js ***!
  \***********************************************/
/*! exports provided: createRegistrySelector, createRegistryControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrySelector", function() { return createRegistrySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistryControl", function() { return createRegistryControl; });
/* harmony import */ var _default_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-registry */ "./packages/data/build-module/default-registry.js");
/**
 * Internal dependencies
 */

/**
 * @typedef {import('./registry').WPDataRegistry} WPDataRegistry
 */

/**
 * Mark a selector as a registry selector.
 *
 * @param {Function} registrySelector Function receiving a registry object and returning a state selector.
 *
 * @return {Function} marked registry selector.
 */

function createRegistrySelector(registrySelector) {
  var selector = function selector() {
    return registrySelector(selector.registry.select).apply(void 0, arguments);
  };
  /**
   * Flag indicating to selector registration mapping that the selector should
   * be mapped as a registry selector.
   *
   * @type {boolean}
   */


  selector.isRegistrySelector = true;
  /**
   * Registry on which to call `select`, stubbed for non-standard usage to
   * use the default registry.
   *
   * @type {WPDataRegistry}
   */

  selector.registry = _default_registry__WEBPACK_IMPORTED_MODULE_0__["default"];
  return selector;
}
/**
 * Mark a control as a registry control.
 *
 * @param {Function} registryControl Function receiving a registry object and returning a control.
 *
 * @return {Function} marked registry control.
 */

function createRegistryControl(registryControl) {
  registryControl.isRegistryControl = true;
  return registryControl;
}


/***/ }),

/***/ "./packages/data/build-module/index.js":
/*!*********************************************!*\
  !*** ./packages/data/build-module/index.js ***!
  \*********************************************/
/*! exports provided: withSelect, withDispatch, withRegistry, RegistryProvider, RegistryConsumer, useRegistry, useSelect, useDispatch, __experimentalAsyncModeProvider, createRegistry, createRegistrySelector, createRegistryControl, plugins, combineReducers, select, dispatch, subscribe, registerGenericStore, registerStore, use */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerGenericStore", function() { return registerGenericStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStore", function() { return registerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! turbo-combine-reducers */ "./node_modules/turbo-combine-reducers/index.js");
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _default_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-registry */ "./packages/data/build-module/default-registry.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./packages/data/build-module/plugins/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _components_with_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/with-select */ "./packages/data/build-module/components/with-select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSelect", function() { return _components_with_select__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_with_dispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/with-dispatch */ "./packages/data/build-module/components/with-dispatch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDispatch", function() { return _components_with_dispatch__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_with_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/with-registry */ "./packages/data/build-module/components/with-registry/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRegistry", function() { return _components_with_registry__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_registry_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registry-provider */ "./packages/data/build-module/components/registry-provider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryProvider", function() { return _components_registry_provider__WEBPACK_IMPORTED_MODULE_6__["RegistryProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryConsumer", function() { return _components_registry_provider__WEBPACK_IMPORTED_MODULE_6__["RegistryConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRegistry", function() { return _components_registry_provider__WEBPACK_IMPORTED_MODULE_6__["useRegistry"]; });

/* harmony import */ var _components_use_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/use-select */ "./packages/data/build-module/components/use-select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelect", function() { return _components_use_select__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_use_dispatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/use-dispatch */ "./packages/data/build-module/components/use-dispatch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _components_use_dispatch__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]; });

/* harmony import */ var _components_async_mode_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/async-mode-provider */ "./packages/data/build-module/components/async-mode-provider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__experimentalAsyncModeProvider", function() { return _components_async_mode_provider__WEBPACK_IMPORTED_MODULE_9__["AsyncModeProvider"]; });

/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registry */ "./packages/data/build-module/registry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRegistry", function() { return _registry__WEBPACK_IMPORTED_MODULE_10__["createRegistry"]; });

/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./factory */ "./packages/data/build-module/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRegistrySelector", function() { return _factory__WEBPACK_IMPORTED_MODULE_11__["createRegistrySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRegistryControl", function() { return _factory__WEBPACK_IMPORTED_MODULE_11__["createRegistryControl"]; });

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */












/**
 * Object of available plugins to use with a registry.
 *
 * @see [use](#use)
 *
 * @type {Object}
 */


/**
 * The combineReducers helper function turns an object whose values are different
 * reducing functions into a single reducing function you can pass to registerReducer.
 *
 * @param {Object} reducers An object whose values correspond to different reducing
 *                          functions that need to be combined into one.
 *
 * @example
 * ```js
 * const { combineReducers, registerStore } = wp.data;
 *
 * const prices = ( state = {}, action ) => {
 * 	return action.type === 'SET_PRICE' ?
 * 		{
 * 			...state,
 * 			[ action.item ]: action.price,
 * 		} :
 * 		state;
 * };
 *
 * const discountPercent = ( state = 0, action ) => {
 * 	return action.type === 'START_SALE' ?
 * 		action.discountPercent :
 * 		state;
 * };
 *
 * registerStore( 'my-shop', {
 * 	reducer: combineReducers( {
 * 		prices,
 * 		discountPercent,
 * 	} ),
 * } );
 * ```
 *
 * @return {Function}       A reducer that invokes every reducer inside the reducers
 *                          object, and constructs a state object with the same shape.
 */


/**
 * Given the name of a registered store, returns an object of the store's selectors.
 * The selector functions are been pre-bound to pass the current state automatically.
 * As a consumer, you need only pass arguments of the selector, if applicable.
 *
 * @param {string} name Store name
 *
 * @example
 * ```js
 * const { select } = wp.data;
 *
 * select( 'my-shop' ).getPrice( 'hammer' );
 * ```
 *
 * @return {Object} Object containing the store's selectors.
 */

var select = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].select;
/**
 * Given the name of a registered store, returns an object of the store's action creators.
 * Calling an action creator will cause it to be dispatched, updating the state value accordingly.
 *
 * Note: Action creators returned by the dispatch will return a promise when
 * they are called.
 *
 * @param {string} name Store name
 *
 * @example
 * ```js
 * const { dispatch } = wp.data;
 *
 * dispatch( 'my-shop' ).setPrice( 'hammer', 9.75 );
 * ```
 * @return {Object} Object containing the action creators.
 */

var dispatch = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch;
/**
 * Given a listener function, the function will be called any time the state value
 * of one of the registered stores has changed. This function returns a `unsubscribe`
 * function used to stop the subscription.
 *
 * @param {Function} listener Callback function.
 *
 * @example
 * ```js
 * const { subscribe } = wp.data;
 *
 * const unsubscribe = subscribe( () => {
 * 	// You could use this opportunity to test whether the derived result of a
 * 	// selector has subsequently changed as the result of a state update.
 * } );
 *
 * // Later, if necessary...
 * unsubscribe();
 * ```
 */

var subscribe = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe;
/**
 * Registers a generic store.
 *
 * @param {string} key    Store registry key.
 * @param {Object} config Configuration (getSelectors, getActions, subscribe).
 */

var registerGenericStore = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].registerGenericStore;
/**
 * Registers a standard `@wordpress/data` store.
 *
 * @param {string} reducerKey Reducer key.
 * @param {Object} options    Store description (reducer, actions, selectors, resolvers).
 *
 * @return {Object} Registered store object.
 */

var registerStore = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].registerStore;
/**
 * Extends a registry to inherit functionality provided by a given plugin. A
 * plugin is an object with properties aligning to that of a registry, merged
 * to extend the default registry behavior.
 *
 * @param {Object} plugin Plugin object.
 */

var use = _default_registry__WEBPACK_IMPORTED_MODULE_1__["default"].use;


/***/ }),

/***/ "./packages/data/build-module/namespace-store/index.js":
/*!*************************************************************!*\
  !*** ./packages/data/build-module/namespace-store/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNamespace; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! turbo-combine-reducers */ "./node_modules/turbo-combine-reducers/index.js");
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/redux-routine */ "@wordpress/redux-routine");
/* harmony import */ var _wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _promise_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../promise-middleware */ "./packages/data/build-module/promise-middleware.js");
/* harmony import */ var _resolvers_cache_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resolvers-cache-middleware */ "./packages/data/build-module/resolvers-cache-middleware.js");
/* harmony import */ var _metadata_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metadata/reducer */ "./packages/data/build-module/namespace-store/metadata/reducer.js");
/* harmony import */ var _metadata_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metadata/selectors */ "./packages/data/build-module/namespace-store/metadata/selectors.js");
/* harmony import */ var _metadata_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metadata/actions */ "./packages/data/build-module/namespace-store/metadata/actions.js");




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
 * @typedef {import('../registry').WPDataRegistry} WPDataRegistry
 */

/**
 * Creates a namespace object with a store derived from the reducer given.
 *
 * @param {string}         key      Unique namespace identifier.
 * @param {Object}         options  Registered store options, with properties
 *                                  describing reducer, actions, selectors, and
 *                                  resolvers.
 * @param {WPDataRegistry} registry Registry reference.
 *
 * @return {Object} Store Object.
 */

function createNamespace(key, options, registry) {
  var reducer = options.reducer;
  var store = createReduxStore(key, options, registry);
  var resolvers;
  var actions = mapActions(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _metadata_actions__WEBPACK_IMPORTED_MODULE_11__, options.actions), store);
  var selectors = mapSelectors(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(_metadata_selectors__WEBPACK_IMPORTED_MODULE_10__, function (selector) {
    return function (state) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return selector.apply(void 0, [state.metadata].concat(args));
    };
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(options.selectors, function (selector) {
    if (selector.isRegistrySelector) {
      selector.registry = registry;
    }

    return function (state) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return selector.apply(void 0, [state.root].concat(args));
    };
  })), store);

  if (options.resolvers) {
    var result = mapResolvers(options.resolvers, selectors, store);
    resolvers = result.resolvers;
    selectors = result.selectors;
  }

  var getSelectors = function getSelectors() {
    return selectors;
  };

  var getActions = function getActions() {
    return actions;
  }; // We have some modules monkey-patching the store object
  // It's wrong to do so but until we refactor all of our effects to controls
  // We need to keep the same "store" instance here.


  store.__unstableOriginalGetState = store.getState;

  store.getState = function () {
    return store.__unstableOriginalGetState().root;
  }; // Customize subscribe behavior to call listeners only on effective change,
  // not on every dispatch.


  var subscribe = store && function (listener) {
    var lastState = store.__unstableOriginalGetState();

    store.subscribe(function () {
      var state = store.__unstableOriginalGetState();

      var hasChanged = state !== lastState;
      lastState = state;

      if (hasChanged) {
        listener();
      }
    });
  }; // This can be simplified to just { subscribe, getSelectors, getActions }
  // Once we remove the use function.


  return {
    reducer: reducer,
    store: store,
    actions: actions,
    selectors: selectors,
    resolvers: resolvers,
    getSelectors: getSelectors,
    getActions: getActions,
    subscribe: subscribe
  };
}
/**
 * Creates a redux store for a namespace.
 *
 * @param {string}         key      Unique namespace identifier.
 * @param {Object}         options  Registered store options, with properties
 *                                  describing reducer, actions, selectors, and
 *                                  resolvers.
 * @param {WPDataRegistry} registry Registry reference.
 *
 * @return {Object} Newly created redux store.
 */

function createReduxStore(key, options, registry) {
  var middlewares = [Object(_resolvers_cache_middleware__WEBPACK_IMPORTED_MODULE_8__["default"])(registry, key), _promise_middleware__WEBPACK_IMPORTED_MODULE_7__["default"]];

  if (options.controls) {
    var normalizedControls = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(options.controls, function (control) {
      return control.isRegistryControl ? control(registry) : control;
    });
    middlewares.push(_wordpress_redux_routine__WEBPACK_IMPORTED_MODULE_6___default()(normalizedControls));
  }

  var enhancers = [redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares)];

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({
      name: key,
      instanceId: key
    }));
  }

  var reducer = options.reducer,
      initialState = options.initialState;
  var enhancedReducer = turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_5___default()({
    metadata: _metadata_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
    root: reducer
  });
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(enhancedReducer, {
    root: initialState
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["flowRight"])(enhancers));
}
/**
 * Maps selectors to a store.
 *
 * @param {Object} selectors Selectors to register. Keys will be used as the
 *                           public facing API. Selectors will get passed the
 *                           state as first argument.
 * @param {Object} store     The store to which the selectors should be mapped.
 *
 * @return {Object} Selectors mapped to the provided store.
 */


function mapSelectors(selectors, store) {
  var createStateSelector = function createStateSelector(registrySelector) {
    var selector = function runSelector() {
      // This function is an optimized implementation of:
      //
      //   selector( store.getState(), ...arguments )
      //
      // Where the above would incur an `Array#concat` in its application,
      // the logic here instead efficiently constructs an arguments array via
      // direct assignment.
      var argsLength = arguments.length;
      var args = new Array(argsLength + 1);
      args[0] = store.__unstableOriginalGetState();

      for (var i = 0; i < argsLength; i++) {
        args[i + 1] = arguments[i];
      }

      return registrySelector.apply(void 0, args);
    };

    selector.hasResolver = false;
    return selector;
  };

  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(selectors, createStateSelector);
}
/**
 * Maps actions to dispatch from a given store.
 *
 * @param {Object} actions    Actions to register.
 * @param {Object} store      The redux store to which the actions should be mapped.
 * @return {Object}           Actions mapped to the redux store provided.
 */


function mapActions(actions, store) {
  var createBoundAction = function createBoundAction(action) {
    return function () {
      return Promise.resolve(store.dispatch(action.apply(void 0, arguments)));
    };
  };

  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(actions, createBoundAction);
}
/**
 * Returns resolvers with matched selectors for a given namespace.
 * Resolvers are side effects invoked once per argument set of a given selector call,
 * used in ensuring that the data needs for the selector are satisfied.
 *
 * @param {Object} resolvers   Resolvers to register.
 * @param {Object} selectors   The current selectors to be modified.
 * @param {Object} store       The redux store to which the resolvers should be mapped.
 * @return {Object}            An object containing updated selectors and resolvers.
 */


function mapResolvers(resolvers, selectors, store) {
  var mappedResolvers = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(resolvers, function (resolver) {
    var _resolver$fulfill = resolver.fulfill,
        resolverFulfill = _resolver$fulfill === void 0 ? resolver : _resolver$fulfill;
    return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, resolver, {
      fulfill: resolverFulfill
    });
  });

  var mapSelector = function mapSelector(selector, selectorName) {
    var resolver = resolvers[selectorName];

    if (!resolver) {
      selector.hasResolver = false;
      return selector;
    }

    var selectorResolver = function selectorResolver() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      function fulfillSelector() {
        return _fulfillSelector.apply(this, arguments);
      }

      function _fulfillSelector() {
        _fulfillSelector = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var state, _store$__unstableOrig, metadata;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  state = store.getState();

                  if (!(typeof resolver.isFulfilled === 'function' && resolver.isFulfilled.apply(resolver, [state].concat(args)))) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  _store$__unstableOrig = store.__unstableOriginalGetState(), metadata = _store$__unstableOrig.metadata;

                  if (!_metadata_selectors__WEBPACK_IMPORTED_MODULE_10__["hasStartedResolution"](metadata, selectorName, args)) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt("return");

                case 6:
                  store.dispatch(_metadata_actions__WEBPACK_IMPORTED_MODULE_11__["startResolution"](selectorName, args));
                  _context.next = 9;
                  return fulfillResolver.apply(void 0, [store, mappedResolvers, selectorName].concat(args));

                case 9:
                  store.dispatch(_metadata_actions__WEBPACK_IMPORTED_MODULE_11__["finishResolution"](selectorName, args));

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _fulfillSelector.apply(this, arguments);
      }

      fulfillSelector.apply(void 0, args);
      return selector.apply(void 0, args);
    };

    selectorResolver.hasResolver = true;
    return selectorResolver;
  };

  return {
    resolvers: mappedResolvers,
    selectors: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(selectors, mapSelector)
  };
}
/**
 * Calls a resolver given arguments
 *
 * @param {Object} store        Store reference, for fulfilling via resolvers
 * @param {Object} resolvers    Store Resolvers
 * @param {string} selectorName Selector name to fulfill.
 * @param {Array} args          Selector Arguments.
 */


function fulfillResolver(_x, _x2, _x3) {
  return _fulfillResolver.apply(this, arguments);
}

function _fulfillResolver() {
  _fulfillResolver = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(store, resolvers, selectorName) {
    var resolver,
        _len4,
        args,
        _key4,
        action,
        _args2 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            resolver = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resolvers, [selectorName]);

            if (resolver) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            for (_len4 = _args2.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
              args[_key4 - 3] = _args2[_key4];
            }

            action = resolver.fulfill.apply(resolver, args);

            if (!action) {
              _context2.next = 8;
              break;
            }

            _context2.next = 8;
            return store.dispatch(action);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fulfillResolver.apply(this, arguments);
}


/***/ }),

/***/ "./packages/data/build-module/namespace-store/metadata/actions.js":
/*!************************************************************************!*\
  !*** ./packages/data/build-module/namespace-store/metadata/actions.js ***!
  \************************************************************************/
/*! exports provided: startResolution, finishResolution, invalidateResolution, invalidateResolutionForStore, invalidateResolutionForStoreSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startResolution", function() { return startResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishResolution", function() { return finishResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateResolution", function() { return invalidateResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateResolutionForStore", function() { return invalidateResolutionForStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateResolutionForStoreSelector", function() { return invalidateResolutionForStoreSelector; });
/**
 * Returns an action object used in signalling that selector resolution has
 * started.
 *
 * @param {string} selectorName Name of selector for which resolver triggered.
 * @param {...*}   args         Arguments to associate for uniqueness.
 *
 * @return {Object} Action object.
 */
function startResolution(selectorName, args) {
  return {
    type: 'START_RESOLUTION',
    selectorName: selectorName,
    args: args
  };
}
/**
 * Returns an action object used in signalling that selector resolution has
 * completed.
 *
 * @param {string} selectorName Name of selector for which resolver triggered.
 * @param {...*}   args         Arguments to associate for uniqueness.
 *
 * @return {Object} Action object.
 */

function finishResolution(selectorName, args) {
  return {
    type: 'FINISH_RESOLUTION',
    selectorName: selectorName,
    args: args
  };
}
/**
 * Returns an action object used in signalling that we should invalidate the resolution cache.
 *
 * @param {string} selectorName Name of selector for which resolver should be invalidated.
 * @param {Array}  args         Arguments to associate for uniqueness.
 *
 * @return {Object} Action object.
 */

function invalidateResolution(selectorName, args) {
  return {
    type: 'INVALIDATE_RESOLUTION',
    selectorName: selectorName,
    args: args
  };
}
/**
 * Returns an action object used in signalling that the resolution
 * should be invalidated.
 *
 * @return {Object} Action object.
 */

function invalidateResolutionForStore() {
  return {
    type: 'INVALIDATE_RESOLUTION_FOR_STORE'
  };
}
/**
 * Returns an action object used in signalling that the resolution cache for a
 * given selectorName should be invalidated.
 *
 * @param {string} selectorName Name of selector for which all resolvers should
 *                              be invalidated.
 *
 * @return  {Object} Action object.
 */

function invalidateResolutionForStoreSelector(selectorName) {
  return {
    type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR',
    selectorName: selectorName
  };
}


/***/ }),

/***/ "./packages/data/build-module/namespace-store/metadata/reducer.js":
/*!************************************************************************!*\
  !*** ./packages/data/build-module/namespace-store/metadata/reducer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! equivalent-key-map */ "./node_modules/equivalent-key-map/equivalent-key-map.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/data/build-module/namespace-store/metadata/utils.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Reducer function returning next state for selector resolution of
 * subkeys, object form:
 *
 *  selectorName -> EquivalentKeyMap<Array,boolean>
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

var subKeysIsResolved = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flowRight"])([Object(_utils__WEBPACK_IMPORTED_MODULE_2__["onSubKey"])('selectorName')])(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default.a();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'START_RESOLUTION':
    case 'FINISH_RESOLUTION':
      {
        var isStarting = action.type === 'START_RESOLUTION';
        var nextState = new equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default.a(state);
        nextState.set(action.args, isStarting);
        return nextState;
      }

    case 'INVALIDATE_RESOLUTION':
      {
        var _nextState = new equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default.a(state);

        _nextState.delete(action.args);

        return _nextState;
      }
  }

  return state;
});
/**
 * Reducer function returning next state for selector resolution, object form:
 *
 *   selectorName -> EquivalentKeyMap<Array, boolean>
 *
 * @param {Object} state   Current state.
 * @param {Object} action  Dispatched action.
 *
 * @return {Object} Next state.
 */

var isResolved = function isResolved() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INVALIDATE_RESOLUTION_FOR_STORE':
      return {};

    case 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(state, [action.selectorName]) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(state, [action.selectorName]) : state;

    case 'START_RESOLUTION':
    case 'FINISH_RESOLUTION':
    case 'INVALIDATE_RESOLUTION':
      return subKeysIsResolved(state, action);
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (isResolved);


/***/ }),

/***/ "./packages/data/build-module/namespace-store/metadata/selectors.js":
/*!**************************************************************************!*\
  !*** ./packages/data/build-module/namespace-store/metadata/selectors.js ***!
  \**************************************************************************/
/*! exports provided: getIsResolving, hasStartedResolution, hasFinishedResolution, isResolving, getCachedResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsResolving", function() { return getIsResolving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasStartedResolution", function() { return hasStartedResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFinishedResolution", function() { return hasFinishedResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResolving", function() { return isResolving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCachedResolvers", function() { return getCachedResolvers; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns the raw `isResolving` value for a given selector name,
 * and arguments set. May be undefined if the selector has never been resolved
 * or not resolved for the given set of arguments, otherwise true or false for
 * resolution started and completed respectively.
 *
 * @param {Object} state        Data state.
 * @param {string} selectorName Selector name.
 * @param {Array}  args         Arguments passed to selector.
 *
 * @return {?boolean} isResolving value.
 */

function getIsResolving(state, selectorName, args) {
  var map = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(state, [selectorName]);

  if (!map) {
    return;
  }

  return map.get(args);
}
/**
 * Returns true if resolution has already been triggered for a given
 * selector name, and arguments set.
 *
 * @param {Object} state        Data state.
 * @param {string} selectorName Selector name.
 * @param {?Array} args         Arguments passed to selector (default `[]`).
 *
 * @return {boolean} Whether resolution has been triggered.
 */

function hasStartedResolution(state, selectorName) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return getIsResolving(state, selectorName, args) !== undefined;
}
/**
 * Returns true if resolution has completed for a given selector
 * name, and arguments set.
 *
 * @param {Object} state        Data state.
 * @param {string} selectorName Selector name.
 * @param {?Array} args         Arguments passed to selector.
 *
 * @return {boolean} Whether resolution has completed.
 */

function hasFinishedResolution(state, selectorName) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return getIsResolving(state, selectorName, args) === false;
}
/**
 * Returns true if resolution has been triggered but has not yet completed for
 * a given selector name, and arguments set.
 *
 * @param {Object} state        Data state.
 * @param {string} selectorName Selector name.
 * @param {?Array} args         Arguments passed to selector.
 *
 * @return {boolean} Whether resolution is in progress.
 */

function isResolving(state, selectorName) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return getIsResolving(state, selectorName, args) === true;
}
/**
 * Returns the list of the cached resolvers.
 *
 * @param {Object} state      Data state.
 *
 * @return {Object} Resolvers mapped by args and selectorName.
 */

function getCachedResolvers(state) {
  return state;
}


/***/ }),

/***/ "./packages/data/build-module/namespace-store/metadata/utils.js":
/*!**********************************************************************!*\
  !*** ./packages/data/build-module/namespace-store/metadata/utils.js ***!
  \**********************************************************************/
/*! exports provided: onSubKey */
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


/***/ }),

/***/ "./packages/data/build-module/plugins/controls/index.js":
/*!**************************************************************!*\
  !*** ./packages/data/build-module/plugins/controls/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (function (registry) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('wp.data.plugins.controls', {
    hint: 'The controls plugins is now baked-in.'
  });
  return registry;
});


/***/ }),

/***/ "./packages/data/build-module/plugins/index.js":
/*!*****************************************************!*\
  !*** ./packages/data/build-module/plugins/index.js ***!
  \*****************************************************/
/*! exports provided: controls, persistence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./packages/data/build-module/plugins/controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return _controls__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _persistence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistence */ "./packages/data/build-module/plugins/persistence/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistence", function() { return _persistence__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/data/build-module/plugins/persistence/index.js":
/*!*****************************************************************!*\
  !*** ./packages/data/build-module/plugins/persistence/index.js ***!
  \*****************************************************************/
/*! exports provided: withLazySameState, createPersistenceInterface, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLazySameState", function() { return withLazySameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPersistenceInterface", function() { return createPersistenceInterface; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage/default */ "./packages/data/build-module/plugins/persistence/storage/default.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ */ "./packages/data/build-module/index.js");



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * @typedef {Object} WPDataPersistencePluginOptions Persistence plugin options.
 *
 * @property {Storage} storage    Persistent storage implementation. This must
 *                                at least implement `getItem` and `setItem` of
 *                                the Web Storage API.
 * @property {string}  storageKey Key on which to set in persistent storage.
 *
 */

/**
 * Default plugin storage.
 *
 * @type {Storage}
 */

var DEFAULT_STORAGE = _storage_default__WEBPACK_IMPORTED_MODULE_3__["default"];
/**
 * Default plugin storage key.
 *
 * @type {string}
 */

var DEFAULT_STORAGE_KEY = 'WP_DATA';
/**
 * Higher-order reducer which invokes the original reducer only if state is
 * inequal from that of the action's `nextState` property, otherwise returning
 * the original state reference.
 *
 * @param {Function} reducer Original reducer.
 *
 * @return {Function} Enhanced reducer.
 */

var withLazySameState = function withLazySameState(reducer) {
  return function (state, action) {
    if (action.nextState === state) {
      return state;
    }

    return reducer(state, action);
  };
};
/**
 * Creates a persistence interface, exposing getter and setter methods (`get`
 * and `set` respectively).
 *
 * @param {WPDataPersistencePluginOptions} options Plugin options.
 *
 * @return {Object} Persistence interface.
 */

function createPersistenceInterface(options) {
  var _options$storage = options.storage,
      storage = _options$storage === void 0 ? DEFAULT_STORAGE : _options$storage,
      _options$storageKey = options.storageKey,
      storageKey = _options$storageKey === void 0 ? DEFAULT_STORAGE_KEY : _options$storageKey;
  var data;
  /**
   * Returns the persisted data as an object, defaulting to an empty object.
   *
   * @return {Object} Persisted data.
   */

  function getData() {
    if (data === undefined) {
      // If unset, getItem is expected to return null. Fall back to
      // empty object.
      var persisted = storage.getItem(storageKey);

      if (persisted === null) {
        data = {};
      } else {
        try {
          data = JSON.parse(persisted);
        } catch (error) {
          // Similarly, should any error be thrown during parse of
          // the string (malformed JSON), fall back to empty object.
          data = {};
        }
      }
    }

    return data;
  }
  /**
   * Merges an updated reducer state into the persisted data.
   *
   * @param {string} key   Key to update.
   * @param {*}      value Updated value.
   */


  function setData(key, value) {
    data = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    storage.setItem(storageKey, JSON.stringify(data));
  }

  return {
    get: getData,
    set: setData
  };
}
/**
 * Data plugin to persist store state into a single storage key.
 *
 * @param {WPDataRegistry}                  registry      Data registry.
 * @param {?WPDataPersistencePluginOptions} pluginOptions Plugin options.
 *
 * @return {WPDataPlugin} Data plugin.
 */

var persistencePlugin = function persistencePlugin(registry, pluginOptions) {
  var persistence = createPersistenceInterface(pluginOptions);
  /**
   * Creates an enhanced store dispatch function, triggering the state of the
   * given reducer key to be persisted when changed.
   *
   * @param {Function}       getState   Function which returns current state.
   * @param {string}         reducerKey Reducer key.
   * @param {?Array<string>} keys       Optional subset of keys to save.
   *
   * @return {Function} Enhanced dispatch function.
   */

  function createPersistOnChange(getState, reducerKey, keys) {
    var getPersistedState;

    if (Array.isArray(keys)) {
      // Given keys, the persisted state should by produced as an object
      // of the subset of keys. This implementation uses combineReducers
      // to leverage its behavior of returning the same object when none
      // of the property values changes. This allows a strict reference
      // equality to bypass a persistence set on an unchanging state.
      var reducers = keys.reduce(function (result, key) {
        return Object.assign(result, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, function (state, action) {
          return action.nextState[key];
        }));
      }, {});
      getPersistedState = withLazySameState(Object(___WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(reducers));
    } else {
      getPersistedState = function getPersistedState(state, action) {
        return action.nextState;
      };
    }

    var lastState = getPersistedState(undefined, {
      nextState: getState()
    });
    return function () {
      var state = getPersistedState(lastState, {
        nextState: getState()
      });

      if (state !== lastState) {
        persistence.set(reducerKey, state);
        lastState = state;
      }
    };
  }

  return {
    registerStore: function registerStore(reducerKey, options) {
      if (!options.persist) {
        return registry.registerStore(reducerKey, options);
      } // Load from persistence to use as initial state.


      var persistedState = persistence.get()[reducerKey];

      if (persistedState !== undefined) {
        var initialState = options.reducer(undefined, {
          type: '@@WP/PERSISTENCE_RESTORE'
        });

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(initialState) && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(persistedState)) {
          // If state is an object, ensure that:
          // - Other keys are left intact when persisting only a
          //   subset of keys.
          // - New keys in what would otherwise be used as initial
          //   state are deeply merged as base for persisted value.
          initialState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])({}, initialState, persistedState);
        } else {
          // If there is a mismatch in object-likeness of default
          // initial or persisted state, defer to persisted value.
          initialState = persistedState;
        }

        options = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
          initialState: initialState
        });
      }

      var store = registry.registerStore(reducerKey, options);
      store.subscribe(createPersistOnChange(store.getState, reducerKey, options.persist));
      return store;
    }
  };
};
/**
 * Deprecated: Remove this function once WordPress 5.3 is released.
 */


persistencePlugin.__unstableMigrate = function (pluginOptions) {
  var persistence = createPersistenceInterface(pluginOptions); // Preferences migration to introduce the block editor module

  var insertUsage = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(persistence.get(), ['core/editor', 'preferences', 'insertUsage']);

  if (insertUsage) {
    persistence.set('core/block-editor', {
      preferences: {
        insertUsage: insertUsage
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (persistencePlugin);


/***/ }),

/***/ "./packages/data/build-module/plugins/persistence/storage/default.js":
/*!***************************************************************************!*\
  !*** ./packages/data/build-module/plugins/persistence/storage/default.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./packages/data/build-module/plugins/persistence/storage/object.js");
/**
 * Internal dependencies
 */

var storage;

try {
  // Private Browsing in Safari 10 and earlier will throw an error when
  // attempting to set into localStorage. The test here is intentional in
  // causing a thrown error as condition for using fallback object storage.
  storage = window.localStorage;
  storage.setItem('__wpDataTestLocalStorage', '');
  storage.removeItem('__wpDataTestLocalStorage');
} catch (error) {
  storage = _object__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (storage);


/***/ }),

/***/ "./packages/data/build-module/plugins/persistence/storage/object.js":
/*!**************************************************************************!*\
  !*** ./packages/data/build-module/plugins/persistence/storage/object.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var objectStorage;
var storage = {
  getItem: function getItem(key) {
    if (!objectStorage || !objectStorage[key]) {
      return null;
    }

    return objectStorage[key];
  },
  setItem: function setItem(key, value) {
    if (!objectStorage) {
      storage.clear();
    }

    objectStorage[key] = String(value);
  },
  clear: function clear() {
    objectStorage = Object.create(null);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (storage);


/***/ }),

/***/ "./packages/data/build-module/promise-middleware.js":
/*!**********************************************************!*\
  !*** ./packages/data/build-module/promise-middleware.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Simplest possible promise redux middleware.
 *
 * @return {Function} middleware.
 */

var promiseMiddleware = function promiseMiddleware() {
  return function (next) {
    return function (action) {
      if (is_promise__WEBPACK_IMPORTED_MODULE_0___default()(action)) {
        return action.then(function (resolvedAction) {
          if (resolvedAction) {
            return next(resolvedAction);
          }
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (promiseMiddleware);


/***/ }),

/***/ "./packages/data/build-module/registry.js":
/*!************************************************!*\
  !*** ./packages/data/build-module/registry.js ***!
  \************************************************/
/*! exports provided: createRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistry", function() { return createRegistry; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _namespace_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namespace-store */ "./packages/data/build-module/namespace-store/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./packages/data/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * @typedef {Object} WPDataRegistry An isolated orchestrator of store registrations.
 *
 * @property {Function} registerGenericStore Given a namespace key and settings
 *                                           object, registers a new generic
 *                                           store.
 * @property {Function} registerStore        Given a namespace key and settings
 *                                           object, registers a new namespace
 *                                           store.
 * @property {Function} subscribe            Given a function callback, invokes
 *                                           the callback on any change to state
 *                                           within any registered store.
 * @property {Function} select               Given a namespace key, returns an
 *                                           object of the  store's registered
 *                                           selectors.
 * @property {Function} dispatch             Given a namespace key, returns an
 *                                           object of the store's registered
 *                                           action dispatchers.
 */

/**
 * @typedef {Object} WPDataPlugin An object of registry function overrides.
 */

/**
 * Creates a new store registry, given an optional object of initial store
 * configurations.
 *
 * @param {Object}  storeConfigs Initial store configurations.
 * @param {Object?} parent       Parent registry.
 *
 * @return {WPDataRegistry} Data registry.
 */

function createRegistry() {
  var storeConfigs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var stores = {};
  var listeners = [];
  /**
   * Global listener called for each store's update.
   */

  function globalListener() {
    listeners.forEach(function (listener) {
      return listener();
    });
  }
  /**
   * Subscribe to changes to any data.
   *
   * @param {Function}   listener Listener function.
   *
   * @return {Function}           Unsubscribe function.
   */


  var subscribe = function subscribe(listener) {
    listeners.push(listener);
    return function () {
      listeners = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["without"])(listeners, listener);
    };
  };
  /**
   * Calls a selector given the current state and extra arguments.
   *
   * @param {string} reducerKey Part of the state shape to register the
   *                            selectors for.
   *
   * @return {*} The selector's returned value.
   */


  function select(reducerKey) {
    var store = stores[reducerKey];

    if (store) {
      return store.getSelectors();
    }

    return parent && parent.select(reducerKey);
  }
  /**
   * Returns the available actions for a part of the state.
   *
   * @param {string} reducerKey Part of the state shape to dispatch the
   *                            action for.
   *
   * @return {*} The action's returned value.
   */


  function dispatch(reducerKey) {
    var store = stores[reducerKey];

    if (store) {
      return store.getActions();
    }

    return parent && parent.dispatch(reducerKey);
  } //
  // Deprecated
  // TODO: Remove this after `use()` is removed.
  //


  function withPlugins(attributes) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(attributes, function (attribute, key) {
      if (typeof attribute !== 'function') {
        return attribute;
      }

      return function () {
        return registry[key].apply(null, arguments);
      };
    });
  }
  /**
   * Registers a generic store.
   *
   * @param {string} key    Store registry key.
   * @param {Object} config Configuration (getSelectors, getActions, subscribe).
   */


  function registerGenericStore(key, config) {
    if (typeof config.getSelectors !== 'function') {
      throw new TypeError('config.getSelectors must be a function');
    }

    if (typeof config.getActions !== 'function') {
      throw new TypeError('config.getActions must be a function');
    }

    if (typeof config.subscribe !== 'function') {
      throw new TypeError('config.subscribe must be a function');
    }

    stores[key] = config;
    config.subscribe(globalListener);
  }

  var registry = {
    registerGenericStore: registerGenericStore,
    stores: stores,
    namespaces: stores,
    // TODO: Deprecate/remove this.
    subscribe: subscribe,
    select: select,
    dispatch: dispatch,
    use: use
  };
  /**
   * Registers a standard `@wordpress/data` store.
   *
   * @param {string} reducerKey Reducer key.
   * @param {Object} options    Store description (reducer, actions, selectors, resolvers).
   *
   * @return {Object} Registered store object.
   */

  registry.registerStore = function (reducerKey, options) {
    if (!options.reducer) {
      throw new TypeError('Must specify store reducer');
    }

    var namespace = Object(_namespace_store__WEBPACK_IMPORTED_MODULE_3__["default"])(reducerKey, options, registry);
    registerGenericStore(reducerKey, namespace);
    return namespace.store;
  }; //
  // TODO:
  // This function will be deprecated as soon as it is no longer internally referenced.
  //


  function use(plugin, options) {
    registry = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, registry, plugin(registry, options));
    return registry;
  }

  registerGenericStore('core/data', Object(_store__WEBPACK_IMPORTED_MODULE_4__["default"])(registry));
  Object.entries(storeConfigs).forEach(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        name = _ref2[0],
        config = _ref2[1];

    return registry.registerStore(name, config);
  });

  if (parent) {
    parent.subscribe(globalListener);
  }

  return withPlugins(registry);
}


/***/ }),

/***/ "./packages/data/build-module/resolvers-cache-middleware.js":
/*!******************************************************************!*\
  !*** ./packages/data/build-module/resolvers-cache-middleware.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

/**
 * Creates a middleware handling resolvers cache invalidation.
 *
 * @param {WPDataRegistry} registry   The registry reference for which to create
 *                                    the middleware.
 * @param {string}         reducerKey The namespace for which to create the
 *                                    middleware.
 *
 * @return {Function} Middleware function.
 */

var createResolversCacheMiddleware = function createResolversCacheMiddleware(registry, reducerKey) {
  return function () {
    return function (next) {
      return function (action) {
        var resolvers = registry.select('core/data').getCachedResolvers(reducerKey);
        Object.entries(resolvers).forEach(function (_ref) {
          var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
              selectorName = _ref2[0],
              resolversByArgs = _ref2[1];

          var resolver = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(registry.stores, [reducerKey, 'resolvers', selectorName]);

          if (!resolver || !resolver.shouldInvalidate) {
            return;
          }

          resolversByArgs.forEach(function (value, args) {
            // resolversByArgs is the map Map([ args ] => boolean) storing the cache resolution status for a given selector.
            // If the value is false it means this resolver has finished its resolution which means we need to invalidate it,
            // if it's true it means it's inflight and the invalidation is not necessary.
            if (value !== false || !resolver.shouldInvalidate.apply(resolver, [action].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args)))) {
              return;
            } // Trigger cache invalidation


            registry.dispatch('core/data').invalidateResolution(reducerKey, selectorName, args);
          });
        });
        return next(action);
      };
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createResolversCacheMiddleware);


/***/ }),

/***/ "./packages/data/build-module/store/index.js":
/*!***************************************************!*\
  !*** ./packages/data/build-module/store/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");



function createCoreDataStore(registry) {
  var getCoreDataSelector = function getCoreDataSelector(selectorName) {
    return function (reducerKey) {
      var _registry$select;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_registry$select = registry.select(reducerKey))[selectorName].apply(_registry$select, args);
    };
  };

  var getCoreDataAction = function getCoreDataAction(actionName) {
    return function (reducerKey) {
      var _registry$dispatch;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_registry$dispatch = registry.dispatch(reducerKey))[actionName].apply(_registry$dispatch, args);
    };
  };

  return {
    getSelectors: function getSelectors() {
      return ['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'].reduce(function (memo, selectorName) {
        return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, memo, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectorName, getCoreDataSelector(selectorName)));
      }, {});
    },
    getActions: function getActions() {
      return ['startResolution', 'finishResolution', 'invalidateResolution', 'invalidateResolutionForStore', 'invalidateResolutionForStoreSelector'].reduce(function (memo, actionName) {
        return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, memo, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actionName, getCoreDataAction(actionName)));
      }, {});
    },
    subscribe: function subscribe() {
      // There's no reasons to trigger any listener when we subscribe to this store
      // because there's no state stored in this store that need to retrigger selectors
      // if a change happens, the corresponding store where the tracking stated live
      // would have already triggered a "subscribe" call.
      return function () {};
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createCoreDataStore);


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

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

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "@wordpress/priority-queue":
/*!************************************************!*\
  !*** external {"this":["wp","priorityQueue"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["priorityQueue"]; }());

/***/ }),

/***/ "@wordpress/redux-routine":
/*!***********************************************!*\
  !*** external {"this":["wp","reduxRoutine"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["reduxRoutine"]; }());

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