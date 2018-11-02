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

eval("const startButton = document.getElementById('start-button')\n\nclass Grid {\n  constructor () {\n    this.grid = []\n    this.positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])\n    this.makeGrid()\n    this.placeRed()\n    this.placeOrange()\n    this.placeBlue()\n    this.placeGreen()\n    this.renderMaze()\n  }\n\n  makeGrid () {\n    for (let i = 0; i < 20; i++) {\n      this.grid[i] = new Array(20)\n      this.grid[i].fill(null)\n    }\n  }\n\n  placeRed () {\n    let i = 0\n    while (i < 50) {\n      let posX = Math.floor(Math.random() * 20)\n      let posY = Math.floor(Math.random() * 20)\n      if (this.grid[posX][posY] === null) {\n        this.grid[posX][posY] = `red row-${posX} col-${posY}`\n        i++\n      }\n    }\n  }\n\n  placeOrange () {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] && this.grid[i][j].slice(0, 3) === ('red')) {\n          this.positions.forEach((subArray) => {\n            let posX = i + subArray[0]\n            let posY = j + subArray[1]\n            if (this.grid[posX] && this.grid[posX][posY] === null) {\n              this.grid[posX][posY] = `orange row-${posX} col-${posY}`\n            } else if (this.grid[posX] && this.grid[posX][posY]) {\n              if (this.grid[posX][posY].slice(0, 6) === 'orange') {\n                this.grid[posX][posY] = `dark-orange row-${posX} col-${posY}`\n              }\n            }\n          })\n        }\n      }\n    }\n  }\n\n  placeBlue () {\n    let placed = false\n    while (!placed) {\n      let posX = Math.floor(Math.random() * 20)\n      let posY = Math.floor(Math.random() * 20)\n      if (this.grid[posX][posY] === null) {\n        this.grid[posX][posY] = `blue row-${posX} col-${posY}`\n        placed = true\n      }\n    }\n  }\n\n  placeGreen () {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] === null) {\n          this.grid[i][j] = `green row-${i} col-${j}`\n        }\n      }\n    }\n  }\n\n  renderMaze () {\n    this.grid.forEach((array) => {\n      array.forEach((color) => {\n        let newBlock = document.createElement('div')\n        newBlock.className = `${color}`\n        let endPoint = document.getElementById('end-point')\n        let container = document.getElementById('block-container')\n        container.insertBefore(newBlock, endPoint)\n      })\n    })\n  }\n}\n\nfunction selectRandomStartPos (grid) {\n  while (true) {\n    let posX = Math.floor(Math.random() * 20)\n    let posY = Math.floor(Math.random() * 20)\n    if (grid.grid[posX][posY] === `green row-${posX} col-${posY}`) {\n      return [posX, posY]\n    }\n  }\n}\nlet coordinates, newGrid, currentDiv\n\nfunction handleStart () {\n  newGrid = new Grid()\n  coordinates = selectRandomStartPos(newGrid)\n  let startName = `green row-${coordinates[0]} col-${coordinates[1]}`\n  currentDiv = document.getElementsByClassName(startName)[0]\n  currentDiv.className = startName + ' ' + 'active'\n}\n\nfunction makeNewClassName (coordinates) {\n  let cDNLength = currentDiv.className.length\n  currentDiv.className = currentDiv.className.slice(0, cDNLength - 7)\n  let newDivClassName = `row-${coordinates[0]} col-${coordinates[1]}`\n  currentDiv = document.getElementsByClassName(newDivClassName)[0]\n  currentDiv.className += ' ' + 'active'\n}\n\nfunction winGame () {\n  let board = document.getElementsByTagName('div')\n  board = Array.from(board)\n  board.forEach((div) => {\n    div.className.concat(' active')\n  })\n}\n\nfunction handleMovement (e) {\n  if (e.keyCode === 37) {\n    if (newGrid.grid[coordinates[0]][coordinates[1] - 1] !== undefined) {\n      coordinates[1] -= 1\n      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {\n        winGame()\n      }\n      makeNewClassName(coordinates)\n    }\n  } else if (e.keyCode === 38) {\n    if (newGrid.grid[coordinates[0] - 1][coordinates[1]] !== undefined) {\n      coordinates[0] -= 1\n      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {\n        winGame()\n      }\n      makeNewClassName(coordinates)\n    }\n  } else if (e.keyCode === 39) {\n    if (newGrid.grid[coordinates[0]][coordinates[1] + 1] !== undefined) {\n      coordinates[1] += 1\n      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {\n        winGame()\n      }\n      makeNewClassName(coordinates)\n    }\n  } else if (e.keyCode === 40) {\n    if (newGrid.grid[coordinates[0] + 1][coordinates[1]] !== undefined) {\n      coordinates[0] += 1\n      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {\n        winGame()\n      }\n      makeNewClassName(coordinates)\n    }\n  }\n}\n\nstartButton.addEventListener('click', handleStart)\ndocument.addEventListener('keydown', handleMovement, false)\n\n\n//# sourceURL=webpack:///./lib/color_maze.js?");

/***/ })

/******/ });