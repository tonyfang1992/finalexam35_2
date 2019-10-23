

const outcome = document.getElementById('hexoutcome')
const Convert = document.getElementById('Convert')
const change = document.getElementById('change')
const r = document.getElementById('r')
const g = document.getElementById('g')
const b = document.getElementById('b')


//轉換成十六進位制
function transToHex(rgb) {
  var hex = Number(rgb).toString(16);
  //須符合Hex色碼格式
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return transToHex(r) + transToHex(g) + transToHex(b);
}

function isPositiveInteger(s) {//是否為正整數+0
  var re = /^\d+$/;
  return re.test(s)
}

//
Convert.addEventListener('click', (event) => {
  event.preventDefault()
  const getR = document.getElementById('RGB_R')
  const Rvalue = getR.value
  const getG = document.getElementById('RGB_G')
  const Gvalue = getG.value
  const getB = document.getElementById('RGB_B')
  const Bvalue = getB.value


  if (isPositiveInteger(Rvalue) && Rvalue < 256 && isPositiveInteger(Gvalue) && Gvalue < 256 && isPositiveInteger(Bvalue) && Bvalue < 256) {

    rgb2hex()
  }
  else {
    alert("請輸入0到255之間的整數")
  }

})
function rgb2hex() {
  let RGBcontentHTML = ''
  let xR00contentHTML = ''
  let x0G0contentHTML = ''
  let x00BcontentHTML = ''
  const getR = document.getElementById('RGB_R')
  const Rvalue = getR.value
  const getG = document.getElementById('RGB_G')
  const Gvalue = getG.value
  const getB = document.getElementById('RGB_B')
  const Bvalue = getB.value

  X = rgbToHex(Rvalue, Gvalue, Bvalue)
  change.setAttribute("placeholder", `${X}`)

  RGBcontentHTML += ` <img src="http://singlecolorimage.com/get/${X}/100x100">`
  outcome.innerHTML = RGBcontentHTML

  const xR00 = rgbToHex(Rvalue, 0, 0)
  const x0G0 = rgbToHex(0, Gvalue, 0)
  const x00B = rgbToHex(0, 0, Bvalue)

  xR00contentHTML += ` <img src="http://singlecolorimage.com/get/${xR00}/100x100">`
  r.innerHTML = xR00contentHTML
  x0G0contentHTML += ` <img src="http://singlecolorimage.com/get/${x0G0}/100x100">`
  g.innerHTML = x0G0contentHTML
  x00BcontentHTML += ` <img src="http://singlecolorimage.com/get/${x00B}/100x100">`
  b.innerHTML = x00BcontentHTML
}