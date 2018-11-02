const startButton = document.getElementById('start-button')

class Grid {
  constructor () {
    this.grid = []
    this.positions = Object.freeze([[-1, 1], [-1, 0], [-1, -1], [1, 0], [1, -1], [1, 1], [0, 1], [0, -1]])
    this.makeGrid()
    this.placeRed()
    this.placeOrange()
    this.placeBlue()
    this.placeGreen()
    this.renderMaze()
  }

  makeGrid () {
    for (let i = 0; i < 20; i++) {
      this.grid[i] = new Array(20)
      this.grid[i].fill(null)
    }
  }

  placeRed () {
    let i = 0
    while (i < 50) {
      let posX = Math.floor(Math.random() * 20)
      let posY = Math.floor(Math.random() * 20)
      if (this.grid[posX][posY] === null) {
        this.grid[posX][posY] = `red row-${posX} col-${posY}`
        i++
      }
    }
  }

  placeOrange () {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] && this.grid[i][j].slice(0, 3) === ('red')) {
          this.positions.forEach((subArray) => {
            let posX = i + subArray[0]
            let posY = j + subArray[1]
            if (this.grid[posX] && this.grid[posX][posY] === null) {
              this.grid[posX][posY] = `orange row-${posX} col-${posY}`
            } else if (this.grid[posX] && this.grid[posX][posY]) {
              if (this.grid[posX][posY].slice(0, 6) === 'orange') {
                this.grid[posX][posY] = `dark-orange row-${posX} col-${posY}`
              }
            }
          })
        }
      }
    }
  }

  placeBlue () {
    let placed = false
    while (!placed) {
      let posX = Math.floor(Math.random() * 20)
      let posY = Math.floor(Math.random() * 20)
      if (this.grid[posX][posY] === null) {
        this.grid[posX][posY] = `blue row-${posX} col-${posY}`
        placed = true
      }
    }
  }

  placeGreen () {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === null) {
          this.grid[i][j] = `green row-${i} col-${j}`
        }
      }
    }
  }

  renderMaze () {
    this.grid.forEach((array) => {
      array.forEach((color) => {
        let newBlock = document.createElement('div')
        newBlock.className = `${color}`
        let endPoint = document.getElementById('end-point')
        let container = document.getElementById('block-container')
        container.insertBefore(newBlock, endPoint)
      })
    })
  }
}

function selectRandomStartPos (grid) {
  while (true) {
    let posX = Math.floor(Math.random() * 20)
    let posY = Math.floor(Math.random() * 20)
    if (grid.grid[posX][posY] === `green row-${posX} col-${posY}`) {
      return [posX, posY]
    }
  }
}
let coordinates, newGrid, currentDiv

function handleStart () {
  newGrid = new Grid()
  coordinates = selectRandomStartPos(newGrid)
  let startName = `green row-${coordinates[0]} col-${coordinates[1]}`
  currentDiv = document.getElementsByClassName(startName)[0]
  currentDiv.className = startName + ' ' + 'active'
}

function makeNewClassName (coordinates) {
  let cDNLength = currentDiv.className.length
  currentDiv.className = currentDiv.className.slice(0, cDNLength - 7)
  let newDivClassName = `row-${coordinates[0]} col-${coordinates[1]}`
  currentDiv = document.getElementsByClassName(newDivClassName)[0]
  currentDiv.className += ' ' + 'active'
}

function winGame () {
  let board = document.getElementsByTagName('div')
  board = Array.from(board)
  board.forEach((div) => {
    div.className.concat(' active')
  })
}

function handleMovement (e) {
  if (e.keyCode === 37) {
    if (newGrid.grid[coordinates[0]][coordinates[1] - 1] !== undefined) {
      coordinates[1] -= 1
      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {
        winGame()
      }
      makeNewClassName(coordinates)
    }
  } else if (e.keyCode === 38) {
    if (newGrid.grid[coordinates[0] - 1][coordinates[1]] !== undefined) {
      coordinates[0] -= 1
      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {
        winGame()
      }
      makeNewClassName(coordinates)
    }
  } else if (e.keyCode === 39) {
    if (newGrid.grid[coordinates[0]][coordinates[1] + 1] !== undefined) {
      coordinates[1] += 1
      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {
        winGame()
      }
      makeNewClassName(coordinates)
    }
  } else if (e.keyCode === 40) {
    if (newGrid.grid[coordinates[0] + 1][coordinates[1]] !== undefined) {
      coordinates[0] += 1
      if (newGrid.grid[coordinates[0]][coordinates[1]].slice(0, 4) === 'blue') {
        winGame()
      }
      makeNewClassName(coordinates)
    }
  }
}

startButton.addEventListener('click', handleStart)
document.addEventListener('keydown', handleMovement, false)
