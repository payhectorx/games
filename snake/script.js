
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
const snakeWidth = 10;
let sx = (canvas.width/2-5) + (snakeWidth/2);

const snakeHeight = 10;
let ssx = (canvas.height/2-5) + (snakeHeight/2);

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
  let psy = 0
  let psx = 0
  let even = true;
  const colorA = "#16ec7aff";
  const colorB = "#1f7848ff";
  for (let index = 0; index <10; index++) {
    if (even == true){
      ctx.fillStyle = colorA;
    }else{
      ctx.fillStyle = colorB;
    }
    
    ctx.fillRect(sx + psx, ssx + psy, 10, 10);
    psx += 10;
    even = !even
  }
  ctx.fillStyle = "#ff0000ff";
  ctx.fillRect(100, 100, 10, 10) 
             ctx.fillStyle = "#ff0000ff";
  ctx.fillRect(canvas.width-(Math.random() * canvas.width- 10), canvas.height-(Math.random() * canvas.height-10), 10, 10);
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
  switch (e.key) {
    case "ArrowRight":
      sx += 10;
    break;

    case "ArrowLeft":
      sx -= 10;
      break;

    case "ArrowDown":
      ssx += 10;
      break;

          case "ArrowUp":
      ssx -= 10;
      break;

          case "r":
  
          break;




    default:
      console.log(10 + (Math.random() * 90))
      console.log(Math.round(5.2))
     break;
  }
  
});

// Restart button
restartBtn.addEventListener("click", () => {
  resetGame();
});

// Start the game for the first time
resetGame();
