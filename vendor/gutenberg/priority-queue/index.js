this["wp"] = this["wp"] || {}; this["wp"]["priorityQueue"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/priority-queue/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/priority-queue/build-module/index.js":
/*!*******************************************************!*\
  !*** ./packages/priority-queue/build-module/index.js ***!
  \*******************************************************/
/*! exports provided: createQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueue", function() { return createQueue; });
var requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Creates a context-aware queue that only executes
 * the last task of a given context.
 *
 * @example
 *```js
 * import { createQueue } from '@wordpress/priority-queue';
 *
 * const queue = createQueue();
 *
 * // Context objects.
 * const ctx1 = {};
 * const ctx2 = {};
 *
 * // For a given context in the queue, only the last callback is executed.
 * queue.add( ctx1, () => console.log( 'This will be printed first' ) );
 * queue.add( ctx2, () => console.log( 'This won\'t be printed' ) );
 * queue.add( ctx2, () => console.log( 'This will be printed second' ) );
 *```
 *
 * @return {Object} Queue object with `add` and `flush` methods.
 */

var createQueue = function createQueue() {
  var waitingList = [];
  var elementsMap = new WeakMap();
  var isRunning = false;

  var runWaitingList = function runWaitingList(deadline) {
    do {
      if (waitingList.length === 0) {
        isRunning = false;
        return;
      }

      var nextElement = waitingList.shift();
      elementsMap.get(nextElement)();
      elementsMap.delete(nextElement);
    } while (deadline && deadline.timeRemaining && deadline.timeRemaining() > 0);

    requestIdleCallback(runWaitingList);
  };

  var add = function add(element, item) {
    if (!elementsMap.has(element)) {
      waitingList.push(element);
    }

    elementsMap.set(element, item);

    if (!isRunning) {
      isRunning = true;
      requestIdleCallback(runWaitingList);
    }
  };

  var flush = function flush(element) {
    if (!elementsMap.has(element)) {
      return false;
    }

    elementsMap.delete(element);
    var index = waitingList.indexOf(element);
    waitingList.splice(index, 1);
    return true;
  };

  return {
    add: add,
    flush: flush
  };
};


/***/ })

/******/ });
//# sourceMappingURL=index.js.map