
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

// Size of each cell in pixels
const gridSize = 20;
// How many cells fit in the canvas
const tileCount = canvas.width / gridSize;

// Game state
let snake;
let velocity;
let food;
let score;
let gameOver;
let loopId;

// Initialize or reset the game
function resetGame() {
  if (loopId) {
    clearInterval(loopId);
  }
  loopId = setInterval(gameLoop, 100); // run game loop every 100 ms
}

function gameLoop() {
  if (gameOver) return;

  update();
  draw();
}

function update() {
}

function draw() {
  // Clear the canvas
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw food
  ctx.fillStyle = "#e91e63";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function endGame() {
  gameOver = true;
}

// Random food position not on the snake
function randomFoodPosition() {
}

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  // Prevent the page from scrolling with arrow keys
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
  }
  
});

// Restart button
restartBtn.addEventListener("click", () => {
  resetGame();
});

// Start the game for the first time
resetGame();
