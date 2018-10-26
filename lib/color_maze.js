import { mousePos } from './dom_elements'
const startButton = document.getElementById('start-button')
const grid = []
const positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])

function makeGrid () {
  for (let i = 0; i < 10; i++) {
    grid[i] = new Array(10)
    grid[i].fill(null)
  }
}

function placeReds () {
  let i = 0
  while (i < 5) {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    if (grid[x][y] === null) {
      grid[x][y] = 'red'
      i++
    }
  }
}

function placeOrange () {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'red') {
        positions.forEach((subArray) => {
          let posX = i + subArray[0]
          let posY = j + subArray[1]
          if (grid[posX][posY] === null) {
            grid[posX][posY] = 'orange'
          }
        })
      }
    }
  }
}

function placeBlue () {
  let placed = false
  while (!placed) {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    if (grid[x][y] === null) {
      grid[x][y] = 'blue'
      placed = true
    }
  }
}

function placeGreen () {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === null) {
        grid[i][j] = 'green'
      }
    }
  }
}

function handleStart () {
  makeGrid()
  placeReds()
  placeOrange()
  placeBlue()
  placeGreen()
}

startButton.addEventListener('click', handleStart)
document.addEventListener('mousemove',
  (e) => {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
  })
