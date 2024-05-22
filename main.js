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
  x: 395,
  y: 75,
  r: 40,
  h: 50,
  color: "green",
};

let circle3 = {
  x: 215,
  y: 525,
  r: 40,
  h: 50,
  color: "green",
};

let circle4 = {
  x: 635,
  y: 445,
  r: 40,
  h: 50,
  color: "green",
};

let circle5 = {
  x: 521,
  y: 157,
  r: 40,
  h: 50,
  color: "green",
};

let rect1 = {
  x: 500,
  y: 475,
  w: 50,
  h: 70,
  color: "red",
};

let rect2 = {
  x: 223,
  y: 245,
  w: 50,
  h: 70,
  color: "red",
};

let rect3 = {
  x: 660,
  y: 289,
  w: 50,
  h: 70,
  color: "red",
};

let rect4 = {
  x: 75,
  y: 433,
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

  // Constrain Rectangles
  rect1.x = constrain(rect1.x, 0, cnv.width - rect1.w);
  rect1.y = constrain(rect1.y, 0, cnv.height - rect1.h);
  rect2.x = constrain(rect2.x, 0, cnv.width - rect2.w);
  rect2.y = constrain(rect2.y, 0, cnv.height - rect2.h);
  rect3.x = constrain(rect3.x, 0, cnv.width - rect3.w);
  rect3.y = constrain(rect3.y, 0, cnv.height - rect3.h);
  rect4.x = constrain(rect4.x, 0, cnv.width - rect4.w);
  rect4.y = constrain(rect4.y, 0, cnv.height - rect4.h);
  rect5.x = constrain(rect4.x, 0, cnv.width - rect5.w);
  rect5.y = constrain(rect5.y, 0, cnv.height - rect5.h);

  // Constrain Circles
  circle1.x = constrain(circle1.x, 0, cnv.width - circle1.r);
  circle1.y = constrain(circle1.y, 0, cnv.height - circle1.h);
  circle2.x = constrain(circle2.x, 0, cnv.width - circle2.r);
  circle2.y = constrain(circle2.y, 0, cnv.height - circle2.h);
  circle3.x = constrain(circle3.x, 0, cnv.width - circle3.r);
  circle3.y = constrain(circle3.y, 0, cnv.height - circle3.h);
  circle4.x = constrain(circle4.x, 0, cnv.width - circle4.r);
  circle4.y = constrain(circle4.y, 0, cnv.height - circle4.h);
  circle5.x = constrain(circle5.x, 0, cnv.width - circle5.r);
  circle5.y = constrain(circle5.y, 0, cnv.height - circle5.h);
}

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Rect 1
  ctx.strokeStyle = rect1.color;
  ctx.strokeRect(rect1.x, rect1.y, rect1.w, rect1.h);
  // Draw Rect 2
  ctx.strokeStyle = rect2.color;
  ctx.strokeRect(rect2.x, rect2.y, rect2.w, rect2.h);
  // Draw Rect 3
  ctx.strokeStyle = rect3.color;
  ctx.strokeRect(rect3.x, rect3.y, rect3.w, rect3.h);
  // Draw Rect 4
  ctx.strokeStyle = rect4.color;
  ctx.strokeRect(rect4.x, rect4.y, rect4.w, rect4.h);
  // Draw Rect 5
  ctx.strokeStyle = rect5.color;
  ctx.strokeRect(rect5.x, rect5.y, rect5.w, rect5.h);

  // Draw Circle 1
  ctx.strokeStyle = circle1.color;
  ctx.beginPath();
  ctx.arc(circle1.x, circle1.y, circle1.r, 0, 2 * Math.PI);
  ctx.stroke();
  // Draw Circle 2
  ctx.strokeStyle = circle2.color;
  ctx.beginPath();
  ctx.arc(circle2.x, circle2.y, circle2.r, 0, 2 * Math.PI);
  ctx.stroke();
  // Draw Circle 3
  ctx.strokeStyle = circle3.color;
  ctx.beginPath();
  ctx.arc(circle3.x, circle3.y, circle3.r, 0, 2 * Math.PI);
  ctx.stroke();
  // Draw Circle 4
  ctx.strokeStyle = circle4.color;
  ctx.beginPath();
  ctx.arc(circle4.x, circle4.y, circle4.r, 0, 2 * Math.PI);
  ctx.stroke();
  // Draw Circle 5
  ctx.strokeStyle = circle5.color;
  ctx.beginPath();
  ctx.arc(circle5.x, circle5.y, circle5.r, 0, 2 * Math.PI);
  ctx.stroke();
}
