(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["quick-methods"] = factory();
	else
		root["quick-methods"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



console.log(_String__WEBPACK_IMPORTED_MODULE_0__["default"].insertAtCursor)
/* harmony default export */ __webpack_exports__["default"] = ({
  ..._String__WEBPACK_IMPORTED_MODULE_0__["default"],
  ..._Number__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _insertAtCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["default"] = ({
  copy: _copy__WEBPACK_IMPORTED_MODULE_0__["default"],
  insertAtCursor: _insertAtCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// 常用与点击按钮复制文本 
/**
 * 
 * @param {string} string 
 */
function copy(string) {

  if (typeof string !== 'string') {
    console.error('Please enter a string parameter')
    return false
  }

  let input = null
  input = document.getElementById('quick-input-select')

  if (input === null) {
    input = document.createElement('input')
    input.type = 'text'
    input.id = 'quick-input-select'
  }

  input.style.left = "-1000px";
  input.style.position = "absolute";

  document.body.appendChild(input)

  input.value = string
  input.select()
  if (document.execCommand) {
    return document.execCommand('copy')
  } else {
    console.error('Current browsers do not support exeCommand, please use chrome')
  }
  return false
}

/* harmony default export */ __webpack_exports__["default"] = (copy);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// 常用与点击按钮复制文本 
/**
 * 
 * @param {eleemnt} element 
 * @param {string} target 
 * @param {string} value 
 */
function insertAtCursor(element, target, value) {
  if (element.selectionStart || element.selectionStart === 0) {
    var startPos = element.selectionStart;
    var endPos = element.selectionEnd;
    var diff = endPos - startPos;
    target =
      target.substring(0, startPos) +
      value +
      target.substring(endPos, target.length);

    setTimeout(() => {
      element.focus();
      var point = endPos + value.length - diff;
      element.setSelectionRange(point, point);
    });
  } else {
    target += value;
    element.focus();
  }
  return target;
}

/* harmony default export */ __webpack_exports__["default"] = (insertAtCursor);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import numeration from './numeration'

/* harmony default export */ __webpack_exports__["default"] = ({
  // ...numeration
});

/***/ })
/******/ ])["default"];
});