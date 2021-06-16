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

const COLOR = Object.values(COLORS).slice(0, 16)

const FONT = [
  "13535353535",
  "083535313",
  "08351115313",
  "0811161611113",
  "081111311113",
  "081115111511113",
  "021625362715",
  "11726352617",
  "1351717115",
  "01017171535",
  "1111536163616",
  "017122",
  "0241816",
  "0242626",
  "1111511129",
  "01161116122",
  "040",
  "01171711516",
  "1111511129",
  "11115351115351115",
  "13527253616",
  "111171616171115",
  "1262725111535",
  "0116131",
  "011617171816",
  "011817171616",
  "111161636161115",
  "091636114",
  "0251617",
  "016321",
  "03316",
  "021617171617",
  "13511151115111535",
  "12717171635",
  "13715351735",
  "13716271535",
  "111151115371715",
  "13517371535",
  "1171735111535",
  "13717171715",
  "135111535111535",
  "1351115371715",
  "09115114",
  "091151617",
  "021616181815",
  "08313313",
  "11818161617",
  "1371621416",
  "0116111511151825",
  "09251115351115",
  "082626111535",
  "0925171825",
  "08261115111526",
  "0835261825",
  "0835261717",
  "092517111535",
  "0811151115351115",
  "0836171635",
  "0836171626",
  "0811152611151115",
  "0817171825",
  "08353511151115",
  "0826111511151115",
  "09251115111526",
  "092511153517",
  "091611152725",
  "08261115261115",
  "0925191526",
  "0836171716",
  "0811151115111625",
  "08111511153616",
  "08111511153535",
  "08111617161115",
  "081115371526",
  "0837151735",
  "12617171726",
  "11817171815",
  "012717171625",
  "011611129",
  "03235",
  "0118129",
  "13511153511151115",
  "135111526111535",
  "012517171825",
  "12611151115111535",
  "13517261735",
  "13517261717",
  "01251717111535",
  "1111511153511151115",
  "13617171635",
  "13617171626",
  "1111511152611151115",
  "11717171735",
  "13535111511151115",
  "1261115111511151115",
  "012511151115111526",
  "1351115351717",
  "0116111511152725",
  "13511152611151115",
  "012517371526",
  "13617171716",
  "1111511151115111625",
  "11115111511153616",
  "11115111511153535",
  "1111511161611151115",
  "111151115371535",
  "13716161735",
  "012616271725",
  "011717171716",
  "12717261626",
  "0101535115",
  "09161116114",
  "17171717171",
  "1111111121111121111111211111211111111",
  "115117111311111311252",
  "015223212321313252",
  "113151311131513111313",
  "021744344713",
  "02343113535433",
  "01212353543614",
  "023421223132212433",
  "02353454351113",
  "023452721111131132",
  "015232212321322252",
  "17111311171151171",
  "033517153534",
  "01522321211121232252",
  "031634543614",
  "016111111117",
  "015222312321223252",
  "03163372531312",
  "015436163452",
  "015231312321232252",
  "081116121116110",
  "0813141111141319",
  "0152211121313121112252",
  "1797971",
  "11111111111111111111111111111111111111111",
  "013616431121132212",
  "113131412141211121316",
  "022548171433",
  "0315461612131123",
  "01321316521113122212",
  "0113125112121412141114",
  "01461642131425",
  "041525182813",
  "0113131142131313131213",
  "01481111842",
  "031646141824",
  "01171717131433",
  "031555162714",
  "0112136312141833",
  "024614631832",
  "0116361223171222",
  "14517381533",
  "015817161523",
  "015616171813",
  "031734161842",
  "0112223612164423",
  "01114214121711151231",
  "11215522112111121222221",
  "0111233213131222321222",
  "02431112111212111212122311",
  "0112141133121411331123",
  "1231313221313131433",
  "0221515111112112211",
  "010251213141811",
  "11151124113131142113111",
  "01544515443112",
  "0127121362221613",
  "021213321316231342",
  "01111643112112231522",
  "01451645131432",
  "0211145412151714",
  "0111332111121211152514",
  "021735164425",
  "031517571433",
  "011313131322171523",
  "0155251213123522",
  "02162124211322141221",
  "0155251213141522",
  "0111233213131223131213",
  "0136122336111541",
  "021617252111121223",
  "017381614",
  "09111454121515",
  "01015441111131124",
  "01017252634",
  "01571411151616",
  "042515371714",
  "03155313171523",
  "015517171552",
  "0414642511141213",
  "021654121313131222",
  "031555155514",
  "0244121313161614",
  "02175212171614",
  "015717171352",
  "0212136312171613",
  "012101322161524",
  "01571616242212",
  "02165412141832",
  "0113141217161524",
  "015313121121162424",
  "023615551615",
  "01111113111117161524",
  "02312551615",
  "02171735121415",
  "031555171615",
  "01032052",
  "0157151116152112",
  "03155623411414",
  "051717161434",
  "04151214121413121411",
  "011744171833",
  "015717161524",
  "02251213141819",
  "03155515111113111112",
  "01571411161813",
  "0241151143",
  "0316171213141261",
  "0614111616112225",
  "014516451742",
  "02165412141715",
  "023717171452",
  "014714471443",
  "01511571523",
  "021214121412171613",
  "021115111511151111121222",
  "0117171313121434",
  "015313131313131352",
  "01531317161524",
  "015714471523",
  "0121017161434",
  "08111117161525",
  "0101645111515",
  "018271543",
  "01036271533",
  "03161523251614",
  "03181323231814"
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
  ctx.lineTo(x1, y1);    // Draw a line to (150, 100)
  ctx.stroke();          // Render the path
}

function SPR(n, x, y) {
  const sprite = decode_sprite(n)
  let cursor = 0

  for (let pxl of sprite) {
    if (pxl) {
      PSET(x + cursor, y, 7)
    }

    if (cursor > 6) {
      cursor = 0
      y++
    } else {
      cursor++
    }
  }
}

function RAND(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function decode_sprite(n) {
  const sprite = FONT[n]
  let fill = !!+sprite[0]
  let res = []
  for (let i = 1; i < sprite.length; i++) {
    let val = +sprite[i]
    while (val--) {
      res.push(fill ? 1 : 0)
    }

    fill = !fill
  }
  return res
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
  env.ts = 0
  env.r = 16 * 15 - 1

  update()
}

function update(ts) {
  env.x > 128 ? env.x = 0 : env.x++
  env.y > 128 ? env.y = 0 : env.y++

  if (ts - env.ts > 700) {
    env.ts = ts
    env.r = RAND(0, 16 * 15 - 1)
  }

  draw()
}

function draw() {
  CLS()
  draw_palette()
  PSET(env.x, env.y, 12)
  RECT(10, 10, 60, 60, 1)
  RECT(30, 30, 80, 80, 2)
  SPR(env.r, 10, 100)
  SPR(16 * 7 + 1, 20, 100)
  SPR(16 * 7 + 2, 30, 100)
  requestAnimationFrame(update)
}