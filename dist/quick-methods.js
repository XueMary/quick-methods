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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);






/* harmony default export */ __webpack_exports__["default"] = ({
  ..._String__WEBPACK_IMPORTED_MODULE_0__["default"],
  ..._Number__WEBPACK_IMPORTED_MODULE_1__["default"],
  ..._Base__WEBPACK_IMPORTED_MODULE_2__["default"],
  ..._Dom__WEBPACK_IMPORTED_MODULE_3__["default"],
  ..._Array__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["default"] = ({
  ..._price__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 加 ¥
function formatPrice(price, symbol = "¥ ") {
  return symbol + filterPrice(price)
}

// 元转成分
function filterPriceToFen(price, symbol) {
  if(price===undefined){
    return '0'
  }
  if(typeof price !== 'string'){
    price = String(price)
  }
  if(symbol!==undefined){
    price = price.replace(symbol, '')
  }
  return Number(price * 100).toFixed(0);
}

// 分转成元
//小数位为0直接显示整数，有一位显示一位，有多位显示两位
function filterPrice(data) {
  if(typeof data === 'string'){
    data = Number(data)
  }
  if (typeof data !== 'number' || isNaN(data) === true) {
    console.error('Please enter number type')
    return '0'
  }
  var yuan = Number(data / 100);
  var fixed0 = yuan.toFixed(0);
  var fixed1 = yuan.toFixed(1);
  var fixed2 = yuan.toFixed(2);

  if (Number(fixed0) == Number(fixed1) && Number(fixed1) == Number(fixed2)) {
    return fixed0;
  } else if (Number(fixed0) != Number(fixed1) && Number(fixed1) == Number(fixed2)) {
    return fixed1;
  } else {
    return fixed2;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  formatPrice,
  filterPrice,
  filterPriceToFen
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function debounce(fn, time) {
  let t = new Date().getTime();
  let first = true;

  return async function() {
    let newTime = new Date().getTime()
    if (newTime - t > time || first) {
      first = false;
      await fn(...arguments);
      t = newTime;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  debounce
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["default"] = ({
  bindScroll: _scroll__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function loadFn(fn) {
  let loading = false;
  async function load() {
    if (loading === true) {
      return true;
    }
    loading = true;
    await fn(...arguments);
    loading = false;
  }
  return load;
}

async function scrollShare(el, fn, busy = false, diff = 100) {
  if(busy===true){
    return 
  }
  let height = el.offsetHeight;
  let scrollTop = el.scrollTop;

  let wrap = el.children[0];
  let wrapHeight = wrap.offsetHeight;
  let diffHeight = wrapHeight - height;
  if (diffHeight - scrollTop <= diff) {
    await fn(...arguments);
  }  
}

function scrollHandle(sm = 20) {
  return _Base__WEBPACK_IMPORTED_MODULE_0__["default"].debounce(loadFn(scrollShare), sm);
}
let bindScroll = scrollHandle();

/* harmony default export */ __webpack_exports__["default"] = (bindScroll);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObject", function() { return getObject; });
function getObject(option, value, key = 'label'){
  let obj = null
  option.some(item=>{
    if(item[key]===value){
      obj = item
      return true
    }
  })
  return obj
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getObject
});

/***/ })
/******/ ])["default"];
});