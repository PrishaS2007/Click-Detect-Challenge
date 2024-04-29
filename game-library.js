// function drawCircle(x, y, r, h, color) {
//   ctx.fillStyle = player1.color;
//   ctx.beginPath();
//   ctx.arc(player1.x, player1.y, player1.r, 0, 2 * Math.PI);
//   ctx.fill();
// }

// function drawRect() {
//   ctx.strokeStyle = player2.color;
//   ctx.strokeRect(player2.x, player2.y, player2.w, player2.h);
// }

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawRect(x, y, w, h, color) {
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, w, h);
}
