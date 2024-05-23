// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseX;
let mouseY;
let mousePressed = false;

// Circle Array
let circle = [];
for (let n = 1; n <= 7; n++) {
  circle.push(randomCircle());
}

// Rectangle Array
let rectangle = [];
for (let n = 1; n <= 10; n++) {
  rectangle.push(randomRect());
}

window.addEventListener("load", draw);

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

 for (let i = 0; i < circle.length; i++) {
     moveCircle(circle[i]);
     drawCircle(circle[i]);
  }

  for (let i = 0; i < rectangle.length; i++) {
      moveRectangle(rectangle[i]);
      drawRectangle(rectangle[i]);
   }
  
 requestAnimationFrame(draw);
}

function drawCircle(circle) {
  ctx.lineWidth = 4;
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
  ctx.fill();
}
 
function moveCircle(circle) {
  circle.y += circle.ys
  circle.x += circle.xs

  // Check for Collisions
  if (circle.x - circle.r < 0 || circle.x + circle.r > cnv.width) {
    circle.xs = -circle.xs;
  }

  if (circle.y - circle.r < 0 || circle.y + circle.r > cnv.height) {
    circle.ys = -circle.ys;
  }
}

function randomCircle() {
  return {
       x: randomInt(0, cnv.width),
       y: randomInt(0, cnv.height),
       r: randomInt(30, 60),
       xs: randomInt(1, 3),
       ys: randomInt(1, 3)
   }
}


function drawRectangle(rect) {
  ctx.strokeStyle = "red";
  ctx.strokeRect(rect.x, rect.y, rect.sx, rect.sy)
}

function moveRectangle(rect) {
  rect.y += rect.ys
  rect.x += rect.xs

  // Check for collisions 
  if (rect.y > cnv.height || rect.y < 0) {
    rect.y -= rect.y
  }

  if (rect.x > cnv.width || rect.x < 0) {
    rect.x -= rect.x
  }
}

function randomRect() {
  return {
      x: randomInt(0, cnv.width),
      y: randomInt(0, cnv.height),
      r: randomInt(10, 50),
      xs: randomInt(1, 3),
      ys: randomInt(1, 3),
      sx: randomInt(20, 60),
      sy: randomInt(30, 45)
  }
}

// Event Listeners and Handlers 
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

requestAnimationFrame(draw);

function mousedownHandler(event) {
  window.addEventListener("load", draw);
  mousePressed = true;
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;

  // Check for Clicked Circle
  for (let i = 0; i < circle.length; i++) {
      let circle = circle[i];
      let distance = Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2);
  
      if (mousePressed && distance <= circle.r) {
          circle.splice(i, 1);
      }

      if (circle.length === 0) {
          return location.reload(alert("Game Over - You Win!"));
      } 
  }  

 
  // Check for Cliked Rectangle
  for (let i = 0; i < rectangle.length; i++) {
      let rectangle = rectangle[i];
      if (mouseX >= rectangle.x &&
          mouseX <= rectangle.x + rectangle.sx &&
          mouseY >= rectangle.y &&
          mouseY <= rectangle.y + rectangle.sy) {
          return location.reload(alert("Game Over - You LOSE!")); 
      }
  } 
}
  
function mouseupHandler() {
  mousePressed = false;
}