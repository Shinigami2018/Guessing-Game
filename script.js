'use strict';
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
let secretNumber = getRandomInt(20);
console.log(secretNumber);
let score = 20;
let highscore = 0;
// let currentscore = 0;
let checking = function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number';
        }
        else if (guess !== secretNumber) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        // else if (guess > secretNumber) {
        //     document.querySelector('.message').textContent = 'Too High';
        //     score--;
        //     document.querySelector('.score').textContent = score;
        // }
        // else if (guess < secretNumber) {
        //     document.querySelector('.message').textContent = 'Too low';
        //     score--;
        //     document.querySelector('.score').textContent = score;
        // }
        else {
            document.querySelector('.message').textContent = 'Correct Number!!!!!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;

            highscore = highscore < score ? score : highscore;

            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.number').style.width = '30rem'
            // currentscore = score;
            // if (highscore === undefined) {
            //     highscore = currentscore;
            //     document.querySelector('.highscore').textContent = highscore;
            // }
            // if (score > highscore) {
            //     highscore = score;
            //     document.querySelector('.highscore').textContent = highscore;
            // }
            // else {
            //     document.querySelector('.highscore').textContent = highscore;
            // }
        }
    }
    else {
        document.querySelector('.message').textContent = "GAME OVER"
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = score - 1;
    }

};
document.querySelector('.check').addEventListener('click', checking);
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = getRandomInt(20);
    console.log(secretNumber);
    score = 20;
    // currentscore = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter')
        checking();
})

