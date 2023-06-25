// Variables
const snake = document.querySelector('.div-snake');
const lotterynumber = document.querySelector('.lottery-number');
const button = document.querySelector('.dice button');
let currentPosition = 1;

// Images
snake.innerHTML += `<img class="snake snake1" src="asset/images/4276963_2255319-removebg-preview.png">
                    <img class="snake snake2" src="asset/images/4276963_2255319-removebg-preview.png">
                    <img class="snake snake3" src="asset/images/4276963_2255319-removebg-preview.png">
                    <img class="snake snake4" src="asset/images/4276963_2255319-removebg-preview.png">
                    <img class="ladder ladder1" src="asset/images/1779041-removebg-preview.png">
                    <img class="ladder ladder2" src="asset/images/1779041-removebg-preview.png">`;

const body = document.querySelector('.bx-body');

// Game execution part
function lottery() {
    // random counter
    let random = Math.floor(Math.random() * 6) + 1;
    lotterynumber.innerHTML = random;
    currentPosition += random;
    // Find character position
    let row = Math.floor((currentPosition - 1) / 10);
    let col = (currentPosition - 1) % 10;
    if (row % 2 == 1) {
        col = 9 - col;
    }

    // Advancement and retreat conditions
    if (currentPosition === 13) {
        currentPosition = 53;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }else if (currentPosition === 35){
        currentPosition = 16;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }else if (currentPosition === 38){
        currentPosition = 79;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }else if (currentPosition === 65){
        currentPosition = 44;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }else if (currentPosition === 72){
        currentPosition = 51;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }
    else if (currentPosition === 98){
        currentPosition = 77;
        row = Math.floor((currentPosition - 1) / 10);
        col = (currentPosition - 1) % 10;
        if (row % 2 == 1) {
            col = 9 - col;
        }
    }

    // Character movement
    body.style.top = `${row * 50}px`;
    body.style.left = `${col * 63}px`;

    // condition to win
    if (currentPosition === 100) {
        alert(random);
        alert("شما برنده شدید");
        location.reload();
    }else if (currentPosition > 100){
        alert('لطفا دوباره تاس بندازید');
    }
}

// choose lottery
button.addEventListener('click', lottery);