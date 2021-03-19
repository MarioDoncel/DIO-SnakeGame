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
function changeDirection(event) {
    if (event.keyCode == 37 && direction != 'right') direction ="left"
    if (event.keyCode == 39 && direction != 'left') direction ="right"
    if (event.keyCode == 40 && direction != 'up') direction ="down"
    if (event.keyCode == 38 && direction != 'down') direction ="up"
}

document.addEventListener('keydown', changeDirection)

function playGame() {
    
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0
    if(snake[0].x < 0*box && direction == "left") snake[0].x = 16*box
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0
    if(snake[0].y < 0*box && direction == "up") snake[0].y = 16*box

    createBG()
    createSnake()

    // Initial position
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
    
    let newPosition = {
        x:snakeX,
        y:snakeY
    }

    // Add snake in new position
    snake.unshift(newPosition)
    // Delete snake in the last position
    snake.pop()

    
}


let game = setInterval(playGame, 100)

