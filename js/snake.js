const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// constants
const CELL_SIZE = 20;
const GRID_WIDTH = canvas.width / CELL_SIZE;
const GRID_HEIGHT = canvas.height / CELL_SIZE;

// state
let snake = [{x: 10, y: 10}]; // initial position of the snake
let direction = 'right'; // initial direction of the snake
let apple = {x: 15, y: 15}; // position of the apple

// draw a cell on the canvas
function drawCell(x, y) {
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

// draw the snake on the canvas
function drawSnake() {
  ctx.fillStyle = 'green';
  snake.forEach(cell => drawCell(cell.x, cell.y));
}

// draw the apple on the canvas
function drawApple() {
  ctx.fillStyle = 'red';
  drawCell(apple.x, apple.y);
}

// move the snake in the current direction
function moveSnake() {
  // remove the last cell of the snake
  snake.pop();

  // add a new cell at the front of the snake in the current direction
  let head = snake[0];
  let newCell;
  switch (direction) {
    case 'up':
      newCell = {x: head.x, y: head.y - 1};
      break;
    case 'down':
      newCell = {x: head.x, y: head.y + 1};
      break;
    case 'left':
      newCell = {x: head.x - 1, y: head.y};
      break;
    case 'right':
      newCell = {x: head.x + 1, y: head.y};
      break;
  }
  snake.unshift(newCell);
}

// check if the snake has collided with itself or the walls
function checkCollision() {
  let head = snake[0];
  // check if the snake has collided with itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  // check if the snake has collided with the walls
  if (head.x < 0 || head.x >= GRID_WIDTH || head.y < 0 || head.y >= GRID_HEIGHT) {
    return true;
  }
  return false;
}

// check if
