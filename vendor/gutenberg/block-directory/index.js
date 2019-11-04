this["wp"] = this["wp"] || {}; this["wp"]["blockDirectory"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-directory/build-module/index.js");
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

/***/ "./packages/block-directory/build-module/components/block-ratings/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/block-ratings/index.js ***!
  \*********************************************************************************/
/*! exports provided: BlockRatings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockRatings", function() { return BlockRatings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stars */ "./packages/block-directory/build-module/components/block-ratings/stars.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var BlockRatings = function BlockRatings(_ref) {
  var rating = _ref.rating,
      ratingCount = _ref.ratingCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-block-ratings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_stars__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rating: rating
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "block-directory-block-ratings__rating-count",
    "aria-label": // translators: %d: number of ratings (number).
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
  }, "(", ratingCount, ")"));
};
/* harmony default export */ __webpack_exports__["default"] = (BlockRatings);


/***/ }),

/***/ "./packages/block-directory/build-module/components/block-ratings/stars.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/block-ratings/stars.js ***!
  \*********************************************************************************/
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


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function Stars(_ref) {
  var rating = _ref.rating;
  var stars = Math.round(rating / 0.5) * 0.5;
  var fullStarCount = Math.floor(rating);
  var halfStarCount = Math.ceil(rating - fullStarCount);
  var emptyStarCount = 5 - (fullStarCount + halfStarCount);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%s out of 5 stars', stars), stars)
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["times"])(fullStarCount, function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      key: "full_stars_".concat(i),
      icon: "star-filled",
      size: 16
    });
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["times"])(halfStarCount, function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      key: "half_stars_".concat(i),
      icon: "star-half",
      size: 16
    });
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["times"])(emptyStarCount, function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      key: "empty_stars_".concat(i),
      icon: "star-empty",
      size: 16
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Stars);


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-block-author-info/index.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-block-author-info/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */



function DownloadableBlockAuthorInfo(_ref) {
  var author = _ref.author,
      authorBlockCount = _ref.authorBlockCount,
      authorBlockRating = _ref.authorBlockRating;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Authored by %s'), author)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('This author has %d block, with an average rating of %d.', 'This author has %d blocks, with an average rating of %d.', authorBlockCount, authorBlockRating), authorBlockCount, authorBlockRating)));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockAuthorInfo);


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-block-header/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-block-header/index.js ***!
  \*********************************************************************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-ratings */ "./packages/block-directory/build-module/components/block-ratings/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function DownloadableBlockHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      rating = _ref.rating,
      ratingCount = _ref.ratingCount,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, icon.match(/\.(jpeg|jpg|gif|png)$/) !== null ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: icon,
    alt: "block icon"
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockIcon"], {
    icon: icon,
    showColors: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    role: "heading",
    className: "block-directory-downloadable-block-header__title"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_ratings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rating: rating,
    ratingCount: ratingCount
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isDefault: true,
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add')));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockHeader);


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-block-info/index.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-block-info/index.js ***!
  \*******************************************************************************************/
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


/**
 * WordPress dependencies
 */




function DownloadableBlockInfo(_ref) {
  var description = _ref.description,
      activeInstalls = _ref.activeInstalls,
      humanizedUpdated = _ref.humanizedUpdated;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "block-directory-downloadable-block-info__content"
  }, description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-downloadable-block-info__row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "chart-line"
  }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_n"])('%d active installation', '%d active installations', activeInstalls), activeInstalls)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "update"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Updated %s'), humanizedUpdated)
  }, humanizedUpdated))));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockInfo);


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-block-list-item/index.js":
/*!************************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-block-list-item/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _downloadable_block_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../downloadable-block-header */ "./packages/block-directory/build-module/components/downloadable-block-header/index.js");
/* harmony import */ var _downloadable_block_author_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../downloadable-block-author-info */ "./packages/block-directory/build-module/components/downloadable-block-author-info/index.js");
/* harmony import */ var _downloadable_block_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../downloadable-block-info */ "./packages/block-directory/build-module/components/downloadable-block-info/index.js");


/**
 * Internal dependencies
 */




function DownloadableBlockListItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  var icon = item.icon,
      title = item.title,
      description = item.description,
      rating = item.rating,
      activeInstalls = item.activeInstalls,
      ratingCount = item.ratingCount,
      author = item.author,
      humanizedUpdated = item.humanizedUpdated,
      authorBlockCount = item.authorBlockCount,
      authorBlockRating = item.authorBlockRating;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "block-directory-downloadable-block-list-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("article", {
    className: "block-directory-downloadable-block-list-item__panel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
    className: "block-directory-downloadable-block-list-item__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_downloadable_block_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: icon,
    onClick: onClick,
    title: title,
    rating: rating,
    ratingCount: ratingCount
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_downloadable_block_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeInstalls: activeInstalls,
    description: description,
    humanizedUpdated: humanizedUpdated
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", {
    className: "block-directory-downloadable-block-list-item__footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_downloadable_block_author_info__WEBPACK_IMPORTED_MODULE_2__["default"], {
    author: author,
    authorBlockCount: authorBlockCount,
    authorBlockRating: authorBlockRating
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockListItem);


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-blocks-list/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-blocks-list/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _downloadable_block_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../downloadable-block-list-item */ "./packages/block-directory/build-module/components/downloadable-block-list-item/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var DOWNLOAD_ERROR_NOTICE_ID = 'block-download-error';
var INSTALL_ERROR_NOTICE_ID = 'block-install-error';

function DownloadableBlocksList(_ref) {
  var items = _ref.items,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref$onHover,
      children = _ref.children,
      downloadAndInstallBlock = _ref.downloadAndInstallBlock;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      role: "list",
      className: "block-directory-downloadable-blocks-list"
    }, items && items.map(function (item) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_downloadable_block_list_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: item.id,
        className: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["getBlockMenuDefaultClassName"])(item.id),
        icons: item.icons,
        onClick: function onClick() {
          downloadAndInstallBlock(item);
          onHover(null);
        },
        onFocus: function onFocus() {
          return onHover(item);
        },
        onMouseEnter: function onMouseEnter() {
          return onHover(item);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(null);
        },
        onBlur: function onBlur() {
          return onHover(null);
        },
        item: item
      });
    }), children)
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch, props) {
  var _dispatch = dispatch('core/block-directory'),
      installBlock = _dispatch.installBlock,
      downloadBlock = _dispatch.downloadBlock;

  var _dispatch2 = dispatch('core/notices'),
      createErrorNotice = _dispatch2.createErrorNotice,
      removeNotice = _dispatch2.removeNotice;

  var _dispatch3 = dispatch('core/block-editor'),
      removeBlocks = _dispatch3.removeBlocks;

  var onSelect = props.onSelect;
  return {
    downloadAndInstallBlock: function downloadAndInstallBlock(item) {
      var onDownloadError = function onDownloadError() {
        createErrorNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Block previews can’t load.'), {
          id: DOWNLOAD_ERROR_NOTICE_ID,
          actions: [{
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Retry'),
            onClick: function onClick() {
              removeNotice(DOWNLOAD_ERROR_NOTICE_ID);
              downloadBlock(item, onSuccess, onDownloadError);
            }
          }]
        });
      };

      var onSuccess = function onSuccess() {
        var createdBlock = onSelect(item);

        var onInstallBlockError = function onInstallBlockError() {
          createErrorNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Block previews can\'t install.'), {
            id: INSTALL_ERROR_NOTICE_ID,
            actions: [{
              label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Retry'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                installBlock(item, lodash__WEBPACK_IMPORTED_MODULE_1__["noop"], onInstallBlockError);
              }
            }, {
              label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Remove'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                removeBlocks(createdBlock.clientId);
                Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["unregisterBlockType"])(item.name);
              }
            }]
          });
        };

        installBlock(item, lodash__WEBPACK_IMPORTED_MODULE_1__["noop"], onInstallBlockError);
      };

      downloadBlock(item, onSuccess, onDownloadError);
    }
  };
}))(DownloadableBlocksList));


/***/ }),

/***/ "./packages/block-directory/build-module/components/downloadable-blocks-panel/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-directory/build-module/components/downloadable-blocks-panel/index.js ***!
  \*********************************************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _downloadable_blocks_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../downloadable-blocks-list */ "./packages/block-directory/build-module/components/downloadable-blocks-list/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function DownloadableBlocksPanel(_ref) {
  var downloadableItems = _ref.downloadableItems,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      hasPermission = _ref.hasPermission,
      isLoading = _ref.isLoading,
      isWaiting = _ref.isWaiting,
      debouncedSpeak = _ref.debouncedSpeak;

  if (!hasPermission) {
    debouncedSpeak(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No blocks found in your library. Please contact your site administrator to install new blocks.'));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No blocks found in your library.'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Please contact your site administrator to install new blocks.'));
  }

  if (isLoading || isWaiting) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null));
  }

  if (!downloadableItems.length) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No blocks found in your library.'));
  }

  var resultsFoundMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
  debouncedSpeak(resultsFoundMessage);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No blocks found in your library. These blocks can be downloaded and installed:')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_downloadable_blocks_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withSpokenMessages"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, _ref2) {
  var filterValue = _ref2.filterValue;

  var _select = select('core/block-directory'),
      getDownloadableBlocks = _select.getDownloadableBlocks,
      hasInstallBlocksPermission = _select.hasInstallBlocksPermission,
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var hasPermission = hasInstallBlocksPermission();
  var downloadableItems = hasPermission ? getDownloadableBlocks(filterValue) : [];
  var isLoading = isRequestingDownloadableBlocks();
  return {
    downloadableItems: downloadableItems,
    hasPermission: hasPermission,
    isLoading: isLoading
  };
})])(DownloadableBlocksPanel));


/***/ }),

/***/ "./packages/block-directory/build-module/index.js":
/*!********************************************************!*\
  !*** ./packages/block-directory/build-module/index.js ***!
  \********************************************************/
/*! exports provided: DownloadableBlocksPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./packages/block-directory/build-module/store/index.js");
/* harmony import */ var _components_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/downloadable-blocks-panel */ "./packages/block-directory/build-module/components/downloadable-blocks-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadableBlocksPanel", function() { return _components_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * Internal dependencies
 */




/***/ }),

/***/ "./packages/block-directory/build-module/store/actions.js":
/*!****************************************************************!*\
  !*** ./packages/block-directory/build-module/store/actions.js ***!
  \****************************************************************/
/*! exports provided: fetchDownloadableBlocks, receiveDownloadableBlocks, setInstallBlocksPermission, downloadBlock, installBlock, uninstallBlock, addInstalledBlockType, removeInstalledBlockType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDownloadableBlocks", function() { return fetchDownloadableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDownloadableBlocks", function() { return receiveDownloadableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInstallBlocksPermission", function() { return setInstallBlocksPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBlock", function() { return downloadBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installBlock", function() { return installBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uninstallBlock", function() { return uninstallBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstalledBlockType", function() { return addInstalledBlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInstalledBlockType", function() { return removeInstalledBlockType; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-directory/build-module/store/controls.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(downloadBlock),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(installBlock),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uninstallBlock);

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns an action object used in signalling that the downloadable blocks have been requested and is loading.
 *
 * @return {Object} Action object.
 */

function fetchDownloadableBlocks() {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS'
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks have been updated.
 *
 * @param {Array} downloadableBlocks Downloadable blocks.
 * @param {string} filterValue Search string.
 *
 * @return {Object} Action object.
 */

function receiveDownloadableBlocks(downloadableBlocks, filterValue) {
  return {
    type: 'RECEIVE_DOWNLOADABLE_BLOCKS',
    downloadableBlocks: downloadableBlocks,
    filterValue: filterValue
  };
}
/**
 * Returns an action object used in signalling that the user does not have permission to install blocks.
 *
 @param {boolean} hasPermission User has permission to install blocks.
 *
 * @return {Object} Action object.
 */

function setInstallBlocksPermission(hasPermission) {
  return {
    type: 'SET_INSTALL_BLOCKS_PERMISSION',
    hasPermission: hasPermission
  };
}
/**
 * Action triggered to download block assets.
 *
 * @param {Object} item The selected block item
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 */

function downloadBlock(item, onSuccess, onError) {
  var registeredBlocks;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function downloadBlock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (item.assets.length) {
            _context.next = 3;
            break;
          }

          throw new Error('Block has no assets');

        case 3:
          _context.next = 5;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_2__["loadAssets"])(item.assets);

        case 5:
          registeredBlocks = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["getBlockTypes"])();

          if (!registeredBlocks.length) {
            _context.next = 10;
            break;
          }

          onSuccess(item);
          _context.next = 11;
          break;

        case 10:
          throw new Error('Unable to get block types');

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _context.next = 17;
          return onError(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 13]]);
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function installBlock(_ref, onSuccess, onError) {
  var id, name, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function installBlock$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref.id, name = _ref.name;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: '__experimental/block-directory/install',
            data: {
              slug: id
            },
            method: 'POST'
          });

        case 4:
          response = _context2.sent;

          if (!(response.success === false)) {
            _context2.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context2.next = 9;
          return addInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          onError(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 12]]);
}
/**
 * Action triggered to uninstall a block plugin.
 *
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function uninstallBlock(_ref2, onSuccess, onError) {
  var id, name, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uninstallBlock$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref2.id, name = _ref2.name;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: '__experimental/block-directory/uninstall',
            data: {
              slug: id
            },
            method: 'DELETE'
          });

        case 4:
          response = _context3.sent;

          if (!(response.success === false)) {
            _context3.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context3.next = 9;
          return removeInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          onError(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 12]]);
}
/**
 * Returns an action object used to add a newly installed block type.
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function addInstalledBlockType(item) {
  return {
    type: 'ADD_INSTALLED_BLOCK_TYPE',
    item: item
  };
}
/**
 * Returns an action object used to remove a newly installed block type.
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function removeInstalledBlockType(item) {
  return {
    type: 'REMOVE_INSTALLED_BLOCK_TYPE',
    item: item
  };
}


/***/ }),

/***/ "./packages/block-directory/build-module/store/controls.js":
/*!*****************************************************************!*\
  !*** ./packages/block-directory/build-module/store/controls.js ***!
  \*****************************************************************/
/*! exports provided: select, dispatch, apiFetch, loadAssets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiFetch", function() { return apiFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAssets", function() { return loadAssets; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);




var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(loadAssets);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Calls a selector using the current state.
 *
 * @param {string} storeName    Store name.
 * @param {string} selectorName Selector name.
 * @param {Array}  args         Selector arguments.
 *
 * @return {Object} Control descriptor.
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
/**
 * Calls a dispatcher using the current state.
 *
 * @param {string} storeName      Store name.
 * @param {string} dispatcherName Dispatcher name.
 * @param {Array}  args           Selector arguments.
 *
 * @return {Object} Control descriptor.
 */

function dispatch(storeName, dispatcherName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'DISPATCH',
    storeName: storeName,
    dispatcherName: dispatcherName,
    args: args
  };
}
/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
 *
 * @return {Object} Control descriptor.
 */

function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
}
/**
 * Loads JavaScript
 *
 * @param {Array}    asset   The url for the JavaScript.
 * @param {Function} onLoad  Callback function on success.
 * @param {Function} onError Callback function on failure.
 */

var loadScript = function loadScript(asset, onLoad, onError) {
  if (!asset) {
    return;
  }

  var existing = document.querySelector("script[src=\"".concat(asset.src, "\"]"));

  if (existing) {
    existing.parentNode.removeChild(existing);
  }

  var script = document.createElement('script');
  script.src = typeof asset === 'string' ? asset : asset.src;
  script.onload = onLoad;
  script.onerror = onError;
  document.body.appendChild(script);
};
/**
 * Loads CSS file.
 *
 * @param {*} asset the url for the CSS file.
 */


var loadStyle = function loadStyle(asset) {
  if (!asset) {
    return;
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = typeof asset === 'string' ? asset : asset.src;
  document.body.appendChild(link);
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URL for the assets.
 *
 * @return {Object} Control descriptor.
 */


function loadAssets(assets) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function loadAssets$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            type: 'LOAD_ASSETS',
            assets: assets
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
var controls = {
  SELECT: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["createRegistryControl"])(function (registry) {
    return function (_ref) {
      var _registry$select;

      var storeName = _ref.storeName,
          selectorName = _ref.selectorName,
          args = _ref.args;
      return (_registry$select = registry.select(storeName))[selectorName].apply(_registry$select, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(args));
    };
  }),
  DISPATCH: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["createRegistryControl"])(function (registry) {
    return function (_ref2) {
      var _registry$dispatch;

      var storeName = _ref2.storeName,
          dispatcherName = _ref2.dispatcherName,
          args = _ref2.args;
      return (_registry$dispatch = registry.dispatch(storeName))[dispatcherName].apply(_registry$dispatch, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(args));
    };
  }),
  API_FETCH: function API_FETCH(_ref3) {
    var request = _ref3.request;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, request));
  },
  LOAD_ASSETS: function LOAD_ASSETS(_ref4) {
    var assets = _ref4.assets;
    return new Promise(function (resolve, reject) {
      if (Array.isArray(assets)) {
        var scriptsCount = 0;
        Object(lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(assets, function (asset) {
          if (asset.match(/\.js$/) !== null) {
            scriptsCount++;
            loadScript(asset, function () {
              scriptsCount--;

              if (scriptsCount === 0) {
                return resolve(scriptsCount);
              }
            }, reject);
          } else {
            loadStyle(asset);
          }
        });
      } else {
        loadScript(assets.editor_script, function () {
          return resolve(0);
        }, reject);
        loadStyle(assets.style);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (controls);


/***/ }),

/***/ "./packages/block-directory/build-module/store/index.js":
/*!**************************************************************!*\
  !*** ./packages/block-directory/build-module/store/index.js ***!
  \**************************************************************/
/*! exports provided: storeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeConfig", function() { return storeConfig; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./packages/block-directory/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./packages/block-directory/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/block-directory/build-module/store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./packages/block-directory/build-module/store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./packages/block-directory/build-module/store/controls.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






/**
 * Module Constants
 */

var MODULE_KEY = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(MODULE_KEY, storeConfig);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./packages/block-directory/build-module/store/reducer.js":
/*!****************************************************************!*\
  !*** ./packages/block-directory/build-module/store/reducer.js ***!
  \****************************************************************/
/*! exports provided: downloadableBlocks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadableBlocks", function() { return downloadableBlocks; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




/**
 * WordPress dependencies
 */

/**
 * Reducer returning an array of downloadable blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var downloadableBlocks = function downloadableBlocks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    results: {},
    hasPermission: true,
    filterValue: undefined,
    isRequestingDownloadableBlocks: true,
    installedBlockTypes: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        isRequestingDownloadableBlocks: true
      });

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        results: Object.assign({}, state.results, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.filterValue, action.downloadableBlocks)),
        hasPermission: true,
        isRequestingDownloadableBlocks: false
      });

    case 'SET_INSTALL_BLOCKS_PERMISSION':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        items: action.hasPermission ? state.items : [],
        hasPermission: action.hasPermission
      });

    case 'ADD_INSTALLED_BLOCK_TYPE':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        installedBlockTypes: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.installedBlockTypes), [action.item])
      });

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        installedBlockTypes: state.installedBlockTypes.filter(function (blockType) {
          return blockType.name !== action.item.name;
        })
      });
  }

  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  downloadableBlocks: downloadableBlocks
}));


/***/ }),

/***/ "./packages/block-directory/build-module/store/resolvers.js":
/*!******************************************************************!*\
  !*** ./packages/block-directory/build-module/store/resolvers.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-directory/build-module/store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/block-directory/build-module/store/actions.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  getDownloadableBlocks:
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getDownloadableBlocks(filterValue) {
    var results, blocks;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getDownloadableBlocks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (filterValue) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDownloadableBlocks"])(filterValue);

          case 5:
            _context.next = 7;
            return Object(_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
              path: "__experimental/block-directory/search?term=".concat(filterValue)
            });

          case 7:
            results = _context.sent;
            blocks = results.map(function (result) {
              return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapKeys"])(result, function (value, key) {
                return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["camelCase"])(key);
              });
            });
            _context.next = 11;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["receiveDownloadableBlocks"])(blocks, filterValue);

          case 11:
            _context.next = 18;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            if (!(_context.t0.code === 'rest_user_cannot_view')) {
              _context.next = 18;
              break;
            }

            _context.next = 18;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setInstallBlocksPermission"])(false);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, getDownloadableBlocks, null, [[2, 13]]);
  }),
  hasInstallBlocksPermission:
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function hasInstallBlocksPermission() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function hasInstallBlocksPermission$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Object(_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
              path: "__experimental/block-directory/search?term="
            });

          case 3:
            _context2.next = 5;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setInstallBlocksPermission"])(true);

          case 5:
            _context2.next = 12;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.code === 'rest_user_cannot_view')) {
              _context2.next = 12;
              break;
            }

            _context2.next = 12;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setInstallBlocksPermission"])(false);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, hasInstallBlocksPermission, null, [[0, 7]]);
  })
});


/***/ }),

/***/ "./packages/block-directory/build-module/store/selectors.js":
/*!******************************************************************!*\
  !*** ./packages/block-directory/build-module/store/selectors.js ***!
  \******************************************************************/
/*! exports provided: isRequestingDownloadableBlocks, getDownloadableBlocks, hasInstallBlocksPermission, getInstalledBlockTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingDownloadableBlocks", function() { return isRequestingDownloadableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadableBlocks", function() { return getDownloadableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasInstallBlocksPermission", function() { return hasInstallBlocksPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 *
 * @return {Array} Downloadable blocks
 */

function isRequestingDownloadableBlocks(state) {
  return state.downloadableBlocks.isRequestingDownloadableBlocks;
}
/**
 * Returns the available uninstalled blocks
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks
 */

function getDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks.results[filterValue]) {
    return [];
  }

  return state.downloadableBlocks.results[filterValue];
}
/**
 * Returns true if user has permission to install blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} User has permission to install blocks.
 */

function hasInstallBlocksPermission(state) {
  return state.downloadableBlocks.hasPermission;
}
/**
 * Returns the block types that have been installed on the server.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

function getInstalledBlockTypes(state) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(state, ['downloadableBlocks', 'installedBlockTypes'], []);
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

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

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