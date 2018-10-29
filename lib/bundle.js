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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const startButton = document.getElementById('start-button')\n\nclass Grid {\n  constructor () {\n    this.grid = []\n    this.positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])\n    this.makeGrid()\n    this.placeRed()\n    this.placeOrange()\n    this.placeBlue()\n    this.placeGreen()\n    this.renderMaze()\n  }\n\n  makeGrid () {\n    for (let i = 0; i < 10; i++) {\n      this.grid[i] = new Array(10)\n      this.grid[i].fill(null)\n    }\n  }\n\n  placeRed () {\n    let i = 0\n    while (i < 5) {\n      let x = Math.floor(Math.random() * 10)\n      let y = Math.floor(Math.random() * 10)\n      if (this.grid[x][y] === null) {\n        this.grid[x][y] = 'red'\n        i++\n      }\n    }\n  }\n\n  placeOrange () {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] === 'red') {\n          this.positions.forEach((subArray) => {\n            let posX = i + subArray[0]\n            let posY = j + subArray[1]\n            if (this.grid[posX] && this.grid[posX][posY] === null) {\n              this.grid[posX][posY] = 'orange'\n            }\n          })\n        }\n      }\n    }\n  }\n\n  placeBlue () {\n    let placed = false\n    while (!placed) {\n      let x = Math.floor(Math.random() * 10)\n      let y = Math.floor(Math.random() * 10)\n      if (this.grid[x][y] === null) {\n        this.grid[x][y] = 'blue'\n        placed = true\n      }\n    }\n  }\n\n  placeGreen () {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] === null) {\n          this.grid[i][j] = 'green'\n        }\n      }\n    }\n  }\n\n  renderMaze () {\n    this.grid.forEach((array) => {\n      array.forEach((color) => {\n        let newBlock = document.createElement('div')\n        newBlock.className = `${color}`\n        let endPoint = document.getElementById('end-point')\n        let container = document.getElementById('block-container')\n        container.insertBefore(newBlock, endPoint)\n      })\n    })\n  }\n}\n\nfunction handleStart () {\n  return new Grid()\n}\n\nstartButton.addEventListener('click', handleStart)\n\n\n//# sourceURL=webpack:///./lib/color_maze.js?");

/***/ })

/******/ });