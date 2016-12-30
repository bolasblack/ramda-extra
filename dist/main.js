(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["ramda"], factory);
	else if(typeof exports === 'object')
		exports["ramda-extra"] = factory(require("ramda"));
	else
		root["ramda-extra"] = factory(root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);


// :: String | Number -> a -> {k: v} | [a] -> {k: v} | [a]
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.curry(function (prop, val, obj) {
  if (__WEBPACK_IMPORTED_MODULE_0_ramda___default.a.is(Number, prop)) {
    var snapshot = void 0;
    if (obj && typeof obj.slice === 'function') {
      snapshot = obj.slice(0);
    } else {
      snapshot = [];
    }
    snapshot[prop] = val;
    return snapshot;
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.assoc(prop, val, obj);
  }
});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);


// :: {k, v} | [a] -> [k] | [Number]
/* harmony default export */ exports["a"] = function (obj) {
  return Array.isArray(obj) ? __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.range(0, obj.length) : __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.keys(obj);
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assoc__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce_obj_indexed__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__re_arg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "assoc", function() { return __WEBPACK_IMPORTED_MODULE_0__assoc__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "assocPath", function() { return __WEBPACK_IMPORTED_MODULE_1__assoc_path__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "reduceObjIndexed", function() { return __WEBPACK_IMPORTED_MODULE_2__reduce_obj_indexed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "reArg", function() { return __WEBPACK_IMPORTED_MODULE_3__re_arg__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "indexes", function() { return __WEBPACK_IMPORTED_MODULE_4__indexes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "call", function() { return __WEBPACK_IMPORTED_MODULE_5__call__["a"]; });









/* harmony default export */ exports["default"] = {
  assoc: __WEBPACK_IMPORTED_MODULE_0__assoc__["a" /* default */],
  assocPath: __WEBPACK_IMPORTED_MODULE_1__assoc_path__["a" /* default */],
  reduceObjIndexed: __WEBPACK_IMPORTED_MODULE_2__reduce_obj_indexed__["a" /* default */],
  reArg: __WEBPACK_IMPORTED_MODULE_3__re_arg__["a" /* default */],
  indexes: __WEBPACK_IMPORTED_MODULE_4__indexes__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_5__call__["a" /* default */]
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc__ = __webpack_require__(1);



// :: [String | Number] -> a -> {k: v} | [a] -> {k: v} | [a]
var assocPath = __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.curry(function (path, val, obj) {
  if (path.length === 0) return obj;
  if (path.length === 1) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(path, val, obj);
  var key = path[0];
  var container = obj == null ? __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.is(Number, key) ? [] : {} : obj;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(key, assocPath(path.slice(1), val, container[key]), container);
});

/* harmony default export */ exports["a"] = assocPath;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);


// :: (*... -> a) -> *... -> a
/* harmony default export */ exports["a"] = function (fn) {
       for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
       }

       return args.length > 0 ? fn.apply(null, args) : __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.nAry(fn.length, function () {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                     args[_key2] = arguments[_key2];
              }

              return fn.apply(null, args);
       });
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



// :: [Number] -> (a, b, c, *... -> d) -> (a, *..., c, b -> d)
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.curry(function (argOrder, fn) {
  return __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.nAry(argOrder.length, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newArgs = argOrder.reduce(function (newArgs, targetPos, sourcePos) {
      newArgs[targetPos] = args[sourcePos];
      return newArgs;
    }, []);
    return fn.apply(undefined, _toConsumableArray(newArgs));
  });
});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexes__ = __webpack_require__(2);



// :: ((a, v, k) -> a) -> a -> {k: v} -> a
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.curry(function (iteratee, initial, data) {
  return __WEBPACK_IMPORTED_MODULE_0_ramda___default.a.reduce(function (memo, key) {
    return iteratee(memo, data[key], key);
  }, initial, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__indexes__["a" /* default */])(data));
});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }
/******/ ]);
});
//# sourceMappingURL=main.js.map