var canvas = document.getElementById('canvas')
var palette = document.getElementById('palette')
var indicator = document.getElementById('indicator')
var blueviolet = document.getElementById('blueviolet')
var red = document.getElementById('red')
var orange = document.getElementById('orange')
var yellow = document.getElementById('yellow')
var green = document.getElementById('green')

for (var i = 0; i < 841; i++) {
    var pixel = document.createElement('div')
    pixel.classList.add('pixel')
    canvas.appendChild(pixel)
    pixel.addEventListener('click', paintPixel)
    }

function paintPixel(event) {
    event.target.style.backgroundColor = indicator.style.backgroundColor
  
}

blueviolet.addEventListener('click', getColor)
red.addEventListener('click', getColor)
orange.addEventListener('click', getColor)
yellow.addEventListener('click', getColor)
green.addEventListener('click', getColor)

//how does the event thing in the parentheses work and when do I need it?
function getColor(event) {
    indicator.style.backgroundColor = event.target.id

}

