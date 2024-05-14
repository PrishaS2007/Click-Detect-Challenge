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

let circle2 = {
  x: 115,
  y: 145,
  r: 40,
  h: 50,
  color: "green",
};

let circle3 = {
  x: 215,
  y: 105,
  r: 40,
  h: 50,
  color: "green",
};

let circle4 = {
  x: 345,
  y: 145,
  r: 40,
  h: 50,
  color: "green",
};

let circle5 = {
  x: 121,
  y: 157,
  r: 40,
  h: 50,
  color: "green",
};

let rect1 = {
  x: 500,
  y: 175,
  w: 50,
  h: 70,
  color: "red",
};

let rect2 = {
  x: 423,
  y: 245,
  w: 50,
  h: 70,
  color: "red",
};

let rect3 = {
  x: 360,
  y: 189,
  w: 50,
  h: 70,
  color: "red",
};

let rect4 = {
  x: 475,
  y: 133,
  w: 50,
  h: 70,
  color: "red",
};

let rect5 = {
  x: 399,
  y: 225,
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
}
