const buttons = document.querySelectorAll('button')

const rockbutton = document.querySelector('#rockbutton');
const paperbutton = document.querySelector('#paperbutton');
const scissorsbutton = document.querySelector('#scissorsbutton');

const enemyIcon = document.querySelector(".enemyicon");
const playerIcon = document.querySelector(".playericon");

const playerScoreText = document.querySelector(".playerscore");
const enemyScoreText = document.querySelector(".enemyscore");

let playerScoreCount = 0;
let enemyScoreCount = 0;

function updateScore(score) {
    if (score == "player") {
        playerScoreCount++;
        playerScoreText.textContent = "Score: " + playerScoreCount;
    } else if (score == "enemy") {
        enemyScoreCount++;
        enemyScoreText.textContent = "Score: " + enemyScoreCount;
    }
}

function play(e) {
    move = e.target.textContent;

    switch(move) {
        case "🪨":
            move = 0;
            playerIcon.textContent = "🪨";
            break;
        case "📄":
            move = 1;
            playerIcon.textContent = "📄";
            break;
        case "✂️":
            move = 2;
            playerIcon.textContent = "✂️";
            break;
    }

    eMove = Math.floor(Math.random() * 3);

    switch(eMove) {
        case 0:
            enemyIcon.textContent = "🪨";
            break;
        case 1:
            enemyIcon.textContent = "📄";
            break;
        case 2:
            enemyIcon.textContent = "✂️";
            break;
    }

    // 0 -> rock, 1 -> paper, 2 -> scissors

    if (move == 0) {if (eMove == 1) updateScore("enemy"); else if (eMove == 2) {updateScore("player");}}
    else if (move == 1) {if (eMove == 2) updateScore("enemy"); else if (eMove == 0) {updateScore("player");}}
    else if (move == 2) {if (eMove == 0) updateScore("enemy"); else if (eMove == 1) {updateScore("player");}}
}

buttons.forEach((button) => {
    button.addEventListener('click', play);
})