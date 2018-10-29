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
    for (let i = 0; i < 10; i++) {
      this.grid[i] = new Array(10)
      this.grid[i].fill(null)
    }
  }

  placeRed () {
    let i = 0
    while (i < 5) {
      let x = Math.floor(Math.random() * 10)
      let y = Math.floor(Math.random() * 10)
      if (this.grid[x][y] === null) {
        this.grid[x][y] = 'red'
        i++
      }
    }
  }

  placeOrange () {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === 'red') {
          this.positions.forEach((subArray) => {
            let posX = i + subArray[0]
            let posY = j + subArray[1]
            if (this.grid[posX] && this.grid[posX][posY] === null) {
              this.grid[posX][posY] = 'orange'
            }
          })
        }
      }
    }
  }

  placeBlue () {
    let placed = false
    while (!placed) {
      let x = Math.floor(Math.random() * 10)
      let y = Math.floor(Math.random() * 10)
      if (this.grid[x][y] === null) {
        this.grid[x][y] = 'blue'
        placed = true
      }
    }
  }

  placeGreen () {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === null) {
          this.grid[i][j] = 'green'
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

function handleStart () {
  return new Grid()
}

startButton.addEventListener('click', handleStart)
