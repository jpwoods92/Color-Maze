import { mousePos } from './dom_elements'
const startButton = document.getElementById('start-button')
const grid = []
const positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])

function makeGrid () {
  for (let i = 0; i < 10; i++) {
    grid[i] = new Array(10)
  }
}

function placeReds () {
  let i = 0
  while (i < 5) {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    if (!grid[x][y]) {
      grid[x][y] = 'red'
      i++
    }
  }
}

function placeOrange () {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'red') {
      }
    }
  }
}

function animate () {
}

function handleStart () {
  makeGrid()
  placeReds()
  colorGrid()
  animate()
}

startButton.addEventListener('click', handleStart)
document.addEventListener('mousemove',
  (e) => {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
  })
