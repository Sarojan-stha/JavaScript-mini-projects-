let random= null;
let computer = null;
let result = null;

const choices = ['rock','paper','scissors'];

function playComputer(){
    random = choices[Math.floor(Math.random()*3)];
    console.log(random);
    return random;
}


function play(user){
    computer = playComputer();
    checkResult(user,computer);
    console.log(result);
}

function checkResult(user,computer){
    if(user ===  computer){
        result = "IT'S A TIE!!!!";
    }
    else{
        switch(user){
            case "rock":
               result = (user === "scissors") ? "YOU WIN":"YOU LOOSE";
               break;

            case "paper":
                result = (user === "rock") ? "YOU WIN":"YOU LOOSE";
                break;

            case "scissors":
                result = (user === "paper") ? "YOU WIN":"YOU LOOSE";  
                break;
        }
    }
}

