this["wp"] = this["wp"] || {}; this["wp"]["formatLibrary"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/format-library/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./packages/format-library/build-module/bold/index.js":
/*!************************************************************!*\
  !*** ./packages/format-library/build-module/bold/index.js ***!
  \************************************************************/
/*! exports provided: bold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bold", function() { return bold; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var name = 'core/bold';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bold');

var bold = {
  name: name,
  title: title,
  tagName: 'strong',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextShortcut"], {
      type: "primary",
      character: "b",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
      name: "bold",
      icon: "editor-bold",
      title: title,
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__unstableRichTextInputEvent"], {
      inputType: "formatBold",
      onInput: onToggle
    }));
  }
};


/***/ }),

/***/ "./packages/format-library/build-module/code/index.js":
/*!************************************************************!*\
  !*** ./packages/format-library/build-module/code/index.js ***!
  \************************************************************/
/*! exports provided: code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var name = 'core/code';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inline Code');

var code = {
  name: name,
  title: title,
  tagName: 'code',
  className: null,
  __unstableInputRule: function __unstableInputRule(value) {
    var BACKTICK = '`';
    var _value = value,
        start = _value.start,
        text = _value.text;
    var characterBefore = text.slice(start - 1, start); // Quick check the text for the necessary character.

    if (characterBefore !== BACKTICK) {
      return value;
    }

    var textBefore = text.slice(0, start - 1);
    var indexBefore = textBefore.lastIndexOf(BACKTICK);

    if (indexBefore === -1) {
      return value;
    }

    var startIndex = indexBefore;
    var endIndex = start - 2;

    if (startIndex === endIndex) {
      return value;
    }

    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["remove"])(value, startIndex, startIndex + 1);
    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["remove"])(value, endIndex, endIndex + 1);
    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["applyFormat"])(value, {
      type: name
    }, startIndex, endIndex);
    return value;
  },
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange,
        isActive = _ref.isActive;

    var onToggle = function onToggle() {
      return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
      icon: "editor-code",
      title: title,
      onClick: onToggle,
      isActive: isActive
    });
  }
};


/***/ }),

/***/ "./packages/format-library/build-module/default-formats.js":
/*!*****************************************************************!*\
  !*** ./packages/format-library/build-module/default-formats.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ "./packages/format-library/build-module/bold/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code */ "./packages/format-library/build-module/code/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./packages/format-library/build-module/image/index.js");
/* harmony import */ var _italic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./italic */ "./packages/format-library/build-module/italic/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ "./packages/format-library/build-module/link/index.js");
/* harmony import */ var _strikethrough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strikethrough */ "./packages/format-library/build-module/strikethrough/index.js");
/* harmony import */ var _underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./underline */ "./packages/format-library/build-module/underline/index.js");
/**
 * Internal dependencies
 */







/* harmony default export */ __webpack_exports__["default"] = ([_bold__WEBPACK_IMPORTED_MODULE_0__["bold"], _code__WEBPACK_IMPORTED_MODULE_1__["code"], _image__WEBPACK_IMPORTED_MODULE_2__["image"], _italic__WEBPACK_IMPORTED_MODULE_3__["italic"], _link__WEBPACK_IMPORTED_MODULE_4__["link"], _strikethrough__WEBPACK_IMPORTED_MODULE_5__["strikethrough"], _underline__WEBPACK_IMPORTED_MODULE_6__["underline"]]);


/***/ }),

/***/ "./packages/format-library/build-module/image/index.js":
/*!*************************************************************!*\
  !*** ./packages/format-library/build-module/image/index.js ***!
  \*************************************************************/
/*! exports provided: image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_15__);











/**
 * WordPress dependencies
 */







var ALLOWED_MEDIA_TYPES = ['image'];
var name = 'core/image';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Inline image');

var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};

var PopoverAtImage = function PopoverAtImage(_ref) {
  var dependencies = _ref.dependencies,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["dependencies"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Popover"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
    position: "bottom center",
    focusOnMount: false,
    anchorRect: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["useMemo"])(function () {
      return Object(_wordpress_dom__WEBPACK_IMPORTED_MODULE_15__["computeCaretRect"])();
    }, dependencies)
  }, props));
};

var image = {
  name: name,
  title: title,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('photo'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('media')],
  object: true,
  tagName: 'img',
  className: null,
  attributes: {
    className: 'class',
    style: 'style',
    url: 'src',
    alt: 'alt'
  },
  edit:
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ImageEdit, _Component);

    function ImageEdit() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ImageEdit);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ImageEdit).apply(this, arguments));
      _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
      _this.onKeyDown = _this.onKeyDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
      _this.openModal = _this.openModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
      _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
      _this.state = {
        modal: false
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ImageEdit, [{
      key: "onChange",
      value: function onChange(width) {
        this.setState({
          width: width
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["LEFT"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["DOWN"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["RIGHT"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["UP"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["BACKSPACE"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]].indexOf(event.keyCode) > -1) {
          // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
          event.stopPropagation();
        }
      }
    }, {
      key: "openModal",
      value: function openModal() {
        this.setState({
          modal: true
        });
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.setState({
          modal: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange,
            isObjectActive = _this$props.isObjectActive,
            activeObjectAttributes = _this$props.activeObjectAttributes;
        var style = activeObjectAttributes.style;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__["RichTextToolbarButton"], {
          icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SVG"], {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Path"], {
            d: "M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"
          })),
          title: title,
          onClick: this.openModal,
          isActive: isObjectActive
        }), this.state.modal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__["MediaUpload"], {
          allowedTypes: ALLOWED_MEDIA_TYPES,
          onSelect: function onSelect(_ref2) {
            var id = _ref2.id,
                url = _ref2.url,
                alt = _ref2.alt,
                width = _ref2.width;

            _this2.closeModal();

            onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_12__["insertObject"])(value, {
              type: name,
              attributes: {
                className: "wp-image-".concat(id),
                style: "width: ".concat(Math.min(width, 150), "px;"),
                url: url,
                alt: alt
              }
            }));
          },
          onClose: this.closeModal,
          render: function render(_ref3) {
            var open = _ref3.open;
            open();
            return null;
          }
        }), isObjectActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(PopoverAtImage // Reposition Popover when the selection changes or
        // when the width changes.
        , {
          dependencies: [style, value.start]
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("form", {
          className: "editor-format-toolbar__image-container-content block-editor-format-toolbar__image-container-content",
          onKeyPress: stopKeyPropagation,
          onKeyDown: this.onKeyDown,
          onSubmit: function onSubmit(event) {
            var newReplacements = value.replacements.slice();
            newReplacements[value.start] = {
              type: name,
              attributes: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, activeObjectAttributes, {
                style: "width: ".concat(_this2.state.width, "px;")
              })
            };
            onChange(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
              replacements: newReplacements
            }));
            event.preventDefault();
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
          className: "editor-format-toolbar__image-container-value block-editor-format-toolbar__image-container-value",
          type: "number",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Width'),
          value: this.state.width,
          min: 1,
          onChange: this.onChange
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
          icon: "editor-break",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Apply'),
          type: "submit"
        }))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var style = props.activeObjectAttributes.style;

        if (style === state.previousStyle) {
          return null;
        }

        if (!style) {
          return {
            width: undefined,
            previousStyle: style
          };
        }

        return {
          width: style.replace(/\D/g, ''),
          previousStyle: style
        };
      }
    }]);

    return ImageEdit;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"])
};


/***/ }),

/***/ "./packages/format-library/build-module/index.js":
/*!*******************************************************!*\
  !*** ./packages/format-library/build-module/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _default_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-formats */ "./packages/format-library/build-module/default-formats.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


_default_formats__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(function (_ref) {
  var name = _ref.name,
      settings = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["name"]);

  return Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__["registerFormatType"])(name, settings);
});


/***/ }),

/***/ "./packages/format-library/build-module/italic/index.js":
/*!**************************************************************!*\
  !*** ./packages/format-library/build-module/italic/index.js ***!
  \**************************************************************/
/*! exports provided: italic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italic", function() { return italic; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var name = 'core/italic';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Italic');

var italic = {
  name: name,
  title: title,
  tagName: 'em',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextShortcut"], {
      type: "primary",
      character: "i",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
      name: "italic",
      icon: "editor-italic",
      title: title,
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "i"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__unstableRichTextInputEvent"], {
      inputType: "formatItalic",
      onInput: onToggle
    }));
  }
};


/***/ }),

/***/ "./packages/format-library/build-module/link/index.js":
/*!************************************************************!*\
  !*** ./packages/format-library/build-module/link/index.js ***!
  \************************************************************/
/*! exports provided: link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
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
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inline */ "./packages/format-library/build-module/link/inline.js");








/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var name = 'core/link';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Link');

var link = {
  name: name,
  title: title,
  tagName: 'a',
  className: null,
  attributes: {
    url: 'href',
    target: 'target'
  },
  __unstablePasteRule: function __unstablePasteRule(value, _ref) {
    var html = _ref.html,
        plainText = _ref.plainText;

    if (Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["isCollapsed"])(value)) {
      return value;
    }

    var pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

    if (!Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_10__["isURL"])(pastedText)) {
      return value;
    } // Allows us to ask for this information when we get a report.


    window.console.log('Created link:\n\n', pastedText);
    return Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["applyFormat"])(value, {
      type: name,
      attributes: {
        url: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_12__["decodeEntities"])(pastedText)
      }
    });
  },
  edit: Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["withSpokenMessages"])(
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LinkEdit, _Component);

    function LinkEdit() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LinkEdit);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LinkEdit).apply(this, arguments));
      _this.addLink = _this.addLink.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      _this.stopAddingLink = _this.stopAddingLink.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      _this.onRemoveFormat = _this.onRemoveFormat.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      _this.state = {
        addingLink: false
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LinkEdit, [{
      key: "addLink",
      value: function addLink() {
        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange;
        var text = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["getTextContent"])(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["slice"])(value));

        if (text && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_10__["isURL"])(text)) {
          onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["applyFormat"])(value, {
            type: name,
            attributes: {
              url: text
            }
          }));
        } else if (text && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_10__["isEmail"])(text)) {
          onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["applyFormat"])(value, {
            type: name,
            attributes: {
              url: "mailto:".concat(text)
            }
          }));
        } else {
          this.setState({
            addingLink: true
          });
        }
      }
    }, {
      key: "stopAddingLink",
      value: function stopAddingLink() {
        this.setState({
          addingLink: false
        });
      }
    }, {
      key: "onRemoveFormat",
      value: function onRemoveFormat() {
        var _this$props2 = this.props,
            value = _this$props2.value,
            onChange = _this$props2.onChange,
            speak = _this$props2.speak;
        onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_9__["removeFormat"])(value, name));
        speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Link removed.'), 'assertive');
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            isActive = _this$props3.isActive,
            activeAttributes = _this$props3.activeAttributes,
            value = _this$props3.value,
            onChange = _this$props3.onChange;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["RichTextShortcut"], {
          type: "primary",
          character: "k",
          onUse: this.addLink
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["RichTextShortcut"], {
          type: "primaryShift",
          character: "k",
          onUse: this.onRemoveFormat
        }), isActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["RichTextToolbarButton"], {
          name: "link",
          icon: "editor-unlink",
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Unlink'),
          onClick: this.onRemoveFormat,
          isActive: isActive,
          shortcutType: "primaryShift",
          shortcutCharacter: "k"
        }), !isActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["RichTextToolbarButton"], {
          name: "link",
          icon: "admin-links",
          title: title,
          onClick: this.addLink,
          isActive: isActive,
          shortcutType: "primary",
          shortcutCharacter: "k"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inline__WEBPACK_IMPORTED_MODULE_13__["default"], {
          addingLink: this.state.addingLink,
          stopAddingLink: this.stopAddingLink,
          isActive: isActive,
          activeAttributes: activeAttributes,
          value: value,
          onChange: onChange
        }));
      }
    }]);

    return LinkEdit;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]))
};


/***/ }),

/***/ "./packages/format-library/build-module/link/inline.js":
/*!*************************************************************!*\
  !*** ./packages/format-library/build-module/link/inline.js ***!
  \*************************************************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils */ "./packages/format-library/build-module/link/utils.js");










/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};

function isShowingInput(props, state) {
  return props.addingLink || state.editLink;
}

var URLPopoverAtLink = function URLPopoverAtLink(_ref) {
  var isActive = _ref.isActive,
      addingLink = _ref.addingLink,
      value = _ref.value,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["isActive", "addingLink", "value"]);

  var anchorRect = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["useMemo"])(function () {
    var selection = window.getSelection();
    var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (!range) {
      return;
    }

    if (addingLink) {
      return Object(_wordpress_dom__WEBPACK_IMPORTED_MODULE_12__["getRectangleFromRange"])(range);
    }

    var element = range.startContainer; // If the caret is right before the element, select the next element.

    element = element.nextElementSibling || element;

    while (element.nodeType !== window.Node.ELEMENT_NODE) {
      element = element.parentNode;
    }

    var closest = element.closest('a');

    if (closest) {
      return closest.getBoundingClientRect();
    }
  }, [isActive, addingLink, value.start, value.end]);

  if (!anchorRect) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["URLPopover"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    anchorRect: anchorRect
  }, props));
};

var InlineLinkUI =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InlineLinkUI, _Component);

  function InlineLinkUI() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InlineLinkUI);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InlineLinkUI).apply(this, arguments));
    _this.editLink = _this.editLink.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.submitLink = _this.submitLink.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeInputValue = _this.onChangeInputValue.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setLinkTarget = _this.setLinkTarget.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onFocusOutside = _this.onFocusOutside.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.resetState = _this.resetState.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.autocompleteRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createRef"])();
    _this.state = {
      opensInNewWindow: false,
      inputValue: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InlineLinkUI, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["BACKSPACE"], _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]].indexOf(event.keyCode) > -1) {
        // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
        event.stopPropagation();
      }
    }
  }, {
    key: "onChangeInputValue",
    value: function onChangeInputValue(inputValue) {
      this.setState({
        inputValue: inputValue
      });
    }
  }, {
    key: "setLinkTarget",
    value: function setLinkTarget(opensInNewWindow) {
      var _this$props = this.props,
          _this$props$activeAtt = _this$props.activeAttributes.url,
          url = _this$props$activeAtt === void 0 ? '' : _this$props$activeAtt,
          value = _this$props.value,
          onChange = _this$props.onChange;
      this.setState({
        opensInNewWindow: opensInNewWindow
      }); // Apply now if URL is not being edited.

      if (!isShowingInput(this.props, this.state)) {
        var selectedText = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["getTextContent"])(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["slice"])(value));
        onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["applyFormat"])(value, Object(_utils__WEBPACK_IMPORTED_MODULE_16__["createLinkFormat"])({
          url: url,
          opensInNewWindow: opensInNewWindow,
          text: selectedText
        })));
      }
    }
  }, {
    key: "editLink",
    value: function editLink(event) {
      this.setState({
        editLink: true
      });
      event.preventDefault();
    }
  }, {
    key: "submitLink",
    value: function submitLink(event) {
      var _this$props2 = this.props,
          isActive = _this$props2.isActive,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          speak = _this$props2.speak;
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          opensInNewWindow = _this$state.opensInNewWindow;
      var url = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["prependHTTP"])(inputValue);
      var selectedText = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["getTextContent"])(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["slice"])(value));
      var format = Object(_utils__WEBPACK_IMPORTED_MODULE_16__["createLinkFormat"])({
        url: url,
        opensInNewWindow: opensInNewWindow,
        text: selectedText
      });
      event.preventDefault();

      if (Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["isCollapsed"])(value) && !isActive) {
        var toInsert = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["applyFormat"])(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["create"])({
          text: url
        }), format, 0, url.length);
        onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["insert"])(value, toInsert));
      } else {
        onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_14__["applyFormat"])(value, format));
      }

      this.resetState();

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_16__["isValidHref"])(url)) {
        speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Warning: the link has been inserted but may have errors. Please test it.'), 'assertive');
      } else if (isActive) {
        speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Link edited.'), 'assertive');
      } else {
        speak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Link inserted.'), 'assertive');
      }
    }
  }, {
    key: "onFocusOutside",
    value: function onFocusOutside() {
      // The autocomplete suggestions list renders in a separate popover (in a portal),
      // so onFocusOutside fails to detect that a click on a suggestion occurred in the
      // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
      // return to avoid the popover being closed.
      var autocompleteElement = this.autocompleteRef.current;

      if (autocompleteElement && autocompleteElement.contains(document.activeElement)) {
        return;
      }

      this.resetState();
    }
  }, {
    key: "resetState",
    value: function resetState() {
      this.props.stopAddingLink();
      this.setState({
        editLink: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          isActive = _this$props3.isActive,
          url = _this$props3.activeAttributes.url,
          addingLink = _this$props3.addingLink,
          value = _this$props3.value;

      if (!isActive && !addingLink) {
        return null;
      }

      var _this$state2 = this.state,
          inputValue = _this$state2.inputValue,
          opensInNewWindow = _this$state2.opensInNewWindow;
      var showInput = isShowingInput(this.props, this.state);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(URLPopoverAtLink, {
        value: value,
        isActive: isActive,
        addingLink: addingLink,
        onFocusOutside: this.onFocusOutside,
        onClose: this.resetState,
        focusOnMount: showInput ? 'firstElement' : false,
        renderSettings: function renderSettings() {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Open in New Tab'),
            checked: opensInNewWindow,
            onChange: _this2.setLinkTarget
          });
        }
      }, showInput ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["URLPopover"].LinkEditor, {
        className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
        value: inputValue,
        onChangeInputValue: this.onChangeInputValue,
        onKeyDown: this.onKeyDown,
        onKeyPress: stopKeyPropagation,
        onSubmit: this.submitLink,
        autocompleteRef: this.autocompleteRef
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["URLPopover"].LinkViewer, {
        className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
        onKeyPress: stopKeyPropagation,
        url: url,
        onEditLinkClick: this.editLink,
        linkClassName: Object(_utils__WEBPACK_IMPORTED_MODULE_16__["isValidHref"])(Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["prependHTTP"])(url)) ? undefined : 'has-invalid-link'
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var _props$activeAttribut = props.activeAttributes,
          url = _props$activeAttribut.url,
          target = _props$activeAttribut.target;
      var opensInNewWindow = target === '_blank';

      if (!isShowingInput(props, state)) {
        if (url !== state.inputValue) {
          return {
            inputValue: url
          };
        }

        if (opensInNewWindow !== state.opensInNewWindow) {
          return {
            opensInNewWindow: opensInNewWindow
          };
        }
      }

      return null;
    }
  }]);

  return InlineLinkUI;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["withSpokenMessages"])(InlineLinkUI));


/***/ }),

/***/ "./packages/format-library/build-module/link/utils.js":
/*!************************************************************!*\
  !*** ./packages/format-library/build-module/link/utils.js ***!
  \************************************************************/
/*! exports provided: isValidHref, createLinkFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHref", function() { return isValidHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkFormat", function() { return createLinkFormat; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Check for issues with the provided href.
 *
 * @param {string} href The href.
 *
 * @return {boolean} Is the href invalid?
 */

function isValidHref(href) {
  if (!href) {
    return false;
  }

  var trimmedHref = href.trim();

  if (!trimmedHref) {
    return false;
  } // Does the href start with something that looks like a URL protocol?


  if (/^\S+:/.test(trimmedHref)) {
    var protocol = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["getProtocol"])(trimmedHref);

    if (!Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidProtocol"])(protocol)) {
      return false;
    } // Add some extra checks for http(s) URIs, since these are the most common use-case.
    // This ensures URIs with an http protocol have exactly two forward slashes following the protocol.


    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(protocol, 'http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    var authority = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["getAuthority"])(trimmedHref);

    if (!Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidAuthority"])(authority)) {
      return false;
    }

    var path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["getPath"])(trimmedHref);

    if (path && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidPath"])(path)) {
      return false;
    }

    var queryString = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["getQueryString"])(trimmedHref);

    if (queryString && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidQueryString"])(queryString)) {
      return false;
    }

    var fragment = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["getFragment"])(trimmedHref);

    if (fragment && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidFragment"])(fragment)) {
      return false;
    }
  } // Validate anchor links.


  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(trimmedHref, '#') && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["isValidFragment"])(trimmedHref)) {
    return false;
  }

  return true;
}
/**
 * Generates the format object that will be applied to the link text.
 *
 * @param {Object}  options
 * @param {string}  options.url              The href of the link.
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
 * @param {Object}  options.text             The text that is being hyperlinked.
 *
 * @return {Object} The final format object.
 */

function createLinkFormat(_ref) {
  var url = _ref.url,
      opensInNewWindow = _ref.opensInNewWindow,
      text = _ref.text;
  var format = {
    type: 'core/link',
    attributes: {
      url: url
    }
  };

  if (opensInNewWindow) {
    // translators: accessibility label for external links, where the argument is the link text
    var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%s (opens in a new tab)'), text);
    format.attributes.target = '_blank';
    format.attributes.rel = 'noreferrer noopener';
    format.attributes['aria-label'] = label;
  }

  return format;
}


/***/ }),

/***/ "./packages/format-library/build-module/strikethrough/index.js":
/*!*********************************************************************!*\
  !*** ./packages/format-library/build-module/strikethrough/index.js ***!
  \*********************************************************************/
/*! exports provided: strikethrough */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strikethrough", function() { return strikethrough; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var name = 'core/strikethrough';

var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Strikethrough');

var strikethrough = {
  name: name,
  title: title,
  tagName: 's',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
      icon: "editor-strikethrough",
      title: title,
      onClick: onToggle,
      isActive: isActive
    });
  }
};


/***/ }),

/***/ "./packages/format-library/build-module/underline/index.js":
/*!*****************************************************************!*\
  !*** ./packages/format-library/build-module/underline/index.js ***!
  \*****************************************************************/
/*! exports provided: underline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underline", function() { return underline; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



var name = 'core/underline';
var underline = {
  name: name,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Underline'),
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
        type: name,
        attributes: {
          style: 'text-decoration: underline;'
        }
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextShortcut"], {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__unstableRichTextInputEvent"], {
      inputType: "formatUnderline",
      onInput: onToggle
    }));
  }
};


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/dom":
/*!**************************************!*\
  !*** external {"this":["wp","dom"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dom"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

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

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/rich-text":
/*!*******************************************!*\
  !*** external {"this":["wp","richText"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

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