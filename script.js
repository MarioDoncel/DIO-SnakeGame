let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let box = 32
let snake = []
    snake[0] = {
        x:8*box,
        y:8*box
    }
let direction = "right"
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

function playGame() {
    createBG()
    createSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    switch (direction) {
        case "right":
            snakeX += box
            break;
        case "left":
            snakeX -= box
            break;
        case "down":
            snakeY += box
            break;
        case "up":
            snakeY -= box
            break;
        default:
            break;
    }
    snake.pop()
    let newHead = {
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead)
}
let game = setInterval(playGame, 100)

