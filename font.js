const fs = require('fs')
const data = fs.readFileSync('./font.txt')

let f = data.toString().split('\n').map(line => line.split('').map(Number))

const encode = list => {
  let c = 1
  let code = list[0].toString()
  for (let i = 1; i < list.length; i++) {
    let prev = list[i - 1]
    let curr = list[i]
    if (curr === prev) {
      c++
    } else {
      code += c
      c = 1
    }
  }

  return code + c
}

function decode(sprite) {
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

let font = []
for (let row = 32; row < 481; row += 32) {
  for (let col = 0; col < 512; col += 32) {
    let s = new Array(8 * 5).fill(0)
    let i = 0
    for (let x = 0; x < 32; x += 4) {
      for (let y = 0; y < 32; y += 4) {
        if (f[row + x][col + y]) s[i] = 1
        i++
      }
    }
    font.push(encode(s)) // TODO: fix 3x5
  }
}

const rune = list => {
  list = decode(list)
  let c = 0
  let s = ''
  let a = []
  for (let i = 0; i < list.length; i++) {
    s += list[i] ? '•' : ' '
    if (++c == 7) {
      i++
      c = 0
      a.push(s)
      s = ''
    }
  }

  return a.join('\n')
}

// console.log(rune(font[2]))
// console.log(rune(font[16 * 7 + 1]))
// console.log(rune(font[16 * 7 + 2]))
// console.log(rune(font[16 * 7 + 3]))
// console.log(rune(font[16 * 15 - 1]))

// fs.writeFileSync('./font_encoded.json', JSON.stringify(font))