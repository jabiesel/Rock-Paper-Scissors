let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " beats " + computerChoice + ". You win! 😎";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " loses to " + computerChoice + ". You lose! 🥲"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 400);

}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " vs " + computerChoice + ". It's a draw! 👀"
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('grey-glow')}, 400);


}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;

    }
}

function main(){
rock_div.addEventListener('click', function(){
    game("Rock");
})

paper_div.addEventListener('click', function(){
    game("Paper");
})

scissors_div.addEventListener('click', function(){
    game("Scissors");
})
}

main();