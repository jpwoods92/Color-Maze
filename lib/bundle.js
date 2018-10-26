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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/color_maze.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/color_maze.js":
/*!***************************!*\
  !*** ./lib/color_maze.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_elements */ \"./lib/dom_elements.js\");\n\nconst startButton = document.getElementById('start-button')\nconst grid = []\nconst positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])\n\nfunction makeGrid () {\n  for (let i = 0; i < 10; i++) {\n    grid[i] = new Array(10)\n    grid[i].fill(null)\n  }\n}\n\nfunction placeReds () {\n  let i = 0\n  while (i < 5) {\n    let x = Math.floor(Math.random() * 10)\n    let y = Math.floor(Math.random() * 10)\n    if (grid[x][y] === null) {\n      grid[x][y] = 'red'\n      i++\n    }\n  }\n}\n\nfunction placeOrange () {\n  for (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[i].length; j++) {\n      if (grid[i][j] === 'red') {\n        positions.forEach((subArray) => {\n          let posX = i + subArray[0]\n          let posY = j + subArray[1]\n          if (grid[posX][posY] === null) {\n            grid[posX][posY] = 'orange'\n          }\n        })\n      }\n    }\n  }\n}\n\nfunction placeBlue () {\n  let placed = false\n  while (!placed) {\n    let x = Math.floor(Math.random() * 10)\n    let y = Math.floor(Math.random() * 10)\n    if (grid[x][y] === null) {\n      grid[x][y] = 'blue'\n      placed = true\n    }\n  }\n}\n\nfunction placeGreen () {\n  for (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[i].length; j++) {\n      if (grid[i][j] === null) {\n        grid[i][j] = 'green'\n      }\n    }\n  }\n}\n\nfunction handleStart () {\n  makeGrid()\n  placeReds()\n  placeOrange()\n  placeBlue()\n  placeGreen()\n}\n\nstartButton.addEventListener('click', handleStart)\ndocument.addEventListener('mousemove',\n  (e) => {\n    _dom_elements__WEBPACK_IMPORTED_MODULE_0__[\"mousePos\"].x = e.clientX\n    _dom_elements__WEBPACK_IMPORTED_MODULE_0__[\"mousePos\"].y = e.clientY\n  })\n\n\n//# sourceURL=webpack:///./lib/color_maze.js?");

/***/ }),

/***/ "./lib/dom_elements.js":
/*!*****************************!*\
  !*** ./lib/dom_elements.js ***!
  \*****************************/
/*! exports provided: canvas, mousePos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mousePos\", function() { return mousePos; });\nconst canvas = document.getElementById('background')\nconst mousePos = {x: 0, y: 0}\n\n\n//# sourceURL=webpack:///./lib/dom_elements.js?");

/***/ })

/******/ });