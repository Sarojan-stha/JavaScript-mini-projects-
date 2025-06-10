let random= null;
let computer = null;
let result = null;
let wins=0;
let looses=0;
let score = 0;

const displayResult = document.getElementById("result");
const displayScoreBoard = document.getElementById("scoreBoard");

const displayUserMove = document.getElementById("userMove");
const displayCompMove = document.getElementById("computerMove");

const choices = ['rock','paper','scissors'];

function playComputer(){
    random = choices[Math.floor(Math.random()*3)];
    console.log(random);
    return random;
}


function play(user){
    computer = playComputer();
    checkResult(user,computer);
    updateScore();
    console.log(result);
    displayUserMove.textContent = `Player:${user}`;
    displayCompMove.textContent = `Computer:${random}`;
    displayResult.textContent = result;
    displayScoreBoard.textContent = `Wins:${wins} Looses:${looses} score:${score}`
    console.log(`wins = ${wins} looses = ${looses} scores =  ${score}`);
}

function checkResult(user,computer){
    if(user ===  computer){
        result = "IT'S A TIE!!!!";
    }
    else{
        switch(user){
            case "rock":
               result = (computer === "scissors") ? "YOU WIN":"YOU LOOSE";
               break;

            case "paper":
                result = (computer === "rock") ? "YOU WIN":"YOU LOOSE";
                break;

            case "scissors":
                result = (computer === "paper") ? "YOU WIN":"YOU LOOSE";  
                break;
        }
    }
}

function reset(){
    wins=0;
    looses=0;
    score = 0;
    console.log(`wins = ${wins} looses = ${looses} scores =  ${score}`);
    displayResult.textContent = " ";
    displayScoreBoard.textContent = `Wins = ${wins} Losses = ${looses} Score = ${score}`;


}
function updateScore(){
    if(result === "YOU WIN"){
        wins++;
    }
    else if(result === "YOU LOOSE"){
        looses++;
    }
    score = wins-looses;
}