// function drawCircle(x, y, r, color) {
//   ctx.fillStyle = color;
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, 2 * Math.PI);
//   ctx.fill();
// }

// function drawRect(x, y, w, h, color) {
//   ctx.strokeStyle = color;
//   ctx.strokeRect(x, y, w, h);
// }

function constrain(val, low, high) {
  if (val < low) {
    return low;
  } else if (val > high) {
    return high;
  } else {
    return val;
  }
}
