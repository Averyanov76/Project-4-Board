const board = document.querySelector('#board')
const colors = ['#FF0000', '#FF0033', '#FF0099', '#FF9000', '#3300FF', '#FF9900']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 25px ${color}`
} 

function removeColor(element) { 
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
} 

function getRandomColor () {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}