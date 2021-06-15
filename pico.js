let ctx

const COLORS = {
  0: '#000000', //	Black
  1: '#1d2b53', //	Dark blue
  2: '#7e2553', //	Dark magenta
  3: '#008751', //	Dark green
  4: '#ab5236', //	Brown
  5: '#5f574f', //	Dark gray
  6: '#c2c3c7', //	Light gray
  7: '#fff1e8', //	White
  8: '#ff004d', //	Red
  9: '#ffa300', //	Yellow-orange
  10: '#ffec27', //	Yellow
  11: '#00e436', //	Green
  12: '#29adff', //	Cyan
  13: '#83769c', //	Indigo
  14: '#ff77a8', //	Pink
  15: '#ffccaa', //	Peach
  128: '#291814', //	Ultra dark brown
  129: '#111d35', //	Midnight dark blue
  130: '#422136', //	Dark maroon
  131: '#125359', //	Ultra dark green
  132: '#742f29', //	Dark brown
  133: '#49333b', //	Dark purple
  134: '#a28879', //	Dark saturated tan
  135: '#f3ef7d', //	Bright yellow
  136: '#be1250', //	Dark red
  137: '#ff6c24', //	Orange
  138: '#a8e72e', //	Green-yellow
  139: '#00b543', //	Dark green
  140: '#065ab5', //	Blue
  141: '#754665', //	Purple
  142: '#ff6e59', //	Red-pink
  143: '#ff9d81', //	Red-peach
}

const COLOR = [
  '#000000', '#1d2b53',
  '#7e2553', '#008751',
  '#ab5236', '#5f574f',
  '#c2c3c7', '#fff1e8',
  '#ff004d', '#ffa300',
  '#ffec27', '#00e436',
  '#29adff', '#83769c',
  '#ff77a8', '#ffccaa'
]

function CLS() {
  ctx.clearRect(0, 0, 128, 128);
}

function PSET(x, y, col = 7) {
  ctx.fillStyle = COLOR[col]
  ctx.fillRect(x, y, 1, 1);
}

function PGET(x, y) {
  // TODO: get pixel data? color?
}

function RECT(x0, y0, x1, y1, col = 7) {
  ctx.strokeStyle = COLOR[col]
  ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
}

function RECTFILL(x0, y0, x1, y1, col = 7) {
  ctx.fillStyle = COLOR[col]
  ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
}

function CIRC(x, y, r, col = 7) {
  ctx.strokeStyle = COLOR[col]
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}
function CIRCFILL(x, y, r, col = 7) {
  ctx.fillStyle = COLOR[col]
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
function LINE(x0, y0, x1, y1, col = 7) {
  ctx.strokeStyle = COLOR[col]
  ctx.beginPath();       // Start a new path
  ctx.moveTo(x0, y0);    // Move the pen to (30, 50)
  ctx.lineTo(x1, y1);  // Draw a line to (150, 100)
  ctx.stroke();          // Render the path
}

function draw_palette() {
  RECT(104, 2, 126, 24)
  let i = 0
  let s = 5
  for (let y = 3; y < 23; y += s) {
    for (let x = 105; x < 125; x += s) {
      RECTFILL(x, y, x + s, y + s, i++)
    }
  }
}

const env = {}

function init() {
  const canvas = document.getElementById('canvas');
  // @ts-ignore
  ctx = canvas.getContext('2d');
  ctx.scale(5, 5);
  env.x = 0
  env.y = 0

  update()
}

function update() {
  env.x > 128 ? env.x = 0 : env.x++
  env.y > 128 ? env.y = 0 : env.y++

  draw()
}

function draw() {
  // const { x, y } = _
  CLS()
  draw_palette()
  PSET(env.x, env.y, 12)
  RECT(10, 10, 60, 60, 1)
  RECT(30, 30, 80, 80, 2)
  // LINE(10, 120, x, y, 9)
  // CIRCFILL(y - ~~(x / 2), x, 3, 3)
  requestAnimationFrame(update)
}