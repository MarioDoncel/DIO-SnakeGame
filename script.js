let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let box = 32
let snake = []
    snake[0] = {
        x:8*box,
        y:8*box
    }
let direction = "right"
let food = {
    x:Math.floor(Math.random()*15+1)*box,
    y:Math.floor(Math.random()*15+1)*box
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
function drawFood() {
    context.fillStyle = 'orange'
    context.fillRect(food.x,food.y,box,box)  
}

// Direction control
function changeDirection(event) {
    if (event.keyCode == 37 && direction != 'right') direction ="left"
    if (event.keyCode == 39 && direction != 'left') direction ="right"
    if (event.keyCode == 40 && direction != 'up') direction ="down"
    if (event.keyCode == 38 && direction != 'down') direction ="up"
}
document.addEventListener('keydown', changeDirection)

function playGame() {
    // If head hit body GAME OVER
    for (let index = 1; index < snake.length; index++) {
        let snakeBody = snake[index];
        let snakeHead = snake[0]

        if(snakeHead.x == snakeBody.x && snakeHead.y == snakeBody.y) {
            clearInterval(game)
            alert(`GAME OVER ='(
                Recarregue a página para jogar novamente!`)
        }
        
    }

    // Dinamica de tela infinita
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0
    if(snake[0].x < 0*box && direction == "left") snake[0].x = 16*box
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0
    if(snake[0].y < 0*box && direction == "up") snake[0].y = 16*box

    createBG()
    createSnake()
    drawFood()
    // Initial position
    let snakeX = snake[0].x
    let snakeY = snake[0].y

    // Moviment direction
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

    if(snakeX != food.x || snakeY != food.y) {
        // Delete snake in the last position
    snake.pop()
    } else {
        // When snake eat food, create a new food
        food.x = Math.floor(Math.random()*15+1)*box
        food.y = Math.floor(Math.random()*15+1)*box
    }
    
}


let game = setInterval(playGame, 100)

