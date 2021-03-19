let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
    x:8*box,
    y:8*box
}

function createBG() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0,0,16*box,16*box)   
}
function createSnake() {
    snake.forEach(element => {
        context.fillStyle = "green"
        context.fillRect(element.x, element.y, box, box)
    });
}

createBG()
createSnake()