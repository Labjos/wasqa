
const div1 = document.querySelector('#localizador')

div1.addEventListener('mouseover', function() {
    this.style.color = randomColor()
})


function random(number) {
    return Math.floor(Math.random() * (number + 1))
}

function randomColor() {
    
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')'
}

