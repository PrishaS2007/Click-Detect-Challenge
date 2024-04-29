// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let circle1 = {
  x: 175,
  y: 175,
  r: 40,
  h: 50,
  color: "green",
};

let player2 = {
  x: 500,
  y: 175,
  w: 50,
  h: 70,
  color: "red",
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // DRAWING
  drawFrame();

  requestAnimationFrame(draw);
}

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Player 1 (Green Circle)
  drawCircle(175, 175, 40, "green");
  drawCircle(500, 500, 40, "green");
  drawCircle(600, 200, 40, "green");
  drawCircle(100, 400, 40, "green");

  // Draw Player 2 (Red Rectangle)
  drawRect(500, 175, 50, 70, "red");
  drawRect(200, 195, 50, 70, "red");
  drawRect(100, 115, 50, 70, "red");
  drawRect(700, 395, 50, 70, "red");
}
