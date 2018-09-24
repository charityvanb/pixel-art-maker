var canvas = document.getElementById('canvas')

for (var i = 0; i < 841; i++) {
    var pixel = document.createElement('div')
    // Then pixel isn't available elsewhere
    pixel.classList.add('pixel')
    canvas.appendChild(pixel)
    }

for (var i = 0; i < 841; i++) {
    pixel[i].addEventListener('click', turnRed)
}

function turnRed(event) {
    event.target.style.backgroundColor === 'red'
}

var palette = document.getElementById('palette')


//make an array of colors and iterate through
// do that thing from the udemy lecture to change them

// differentiate between the palette and canvas divs