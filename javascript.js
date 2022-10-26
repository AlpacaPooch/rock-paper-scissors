let choice = Math.floor(Math.random() * 3);
function getComputerChoice () {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return choice = 'Rock';
    }
    else if (choice == 1) {
        return choice = 'Paper';
    }
    else return choice = 'Scissors';
}
// player selects rock paper or scissors
// store player input in variable
// computer selects option
// store computer option in variable
// compare rock paper scissors
//compare each rps
// print

let userChoice = 'var';
function capitialize () {
    userChoice = userChoice.toLowerCase();
    let start = userChoice.slice(0, 1);
    start = start.toUpperCase();
    let end = userChoice.slice(1);
    userChoice = `${start}${end}`;
    return userChoice;
}
let compchoice = 'a';
let playerPTS = 0;
let compPTS = 0;
function game () {
    compchoice = getComputerChoice();
    computerChoice.textContent = ` Computer chose ${compchoice}!`

    if (capitialize() == compchoice) {
        winner.textContent = 'tie';
    }
    else if (capitialize() == 'Rock' && compchoice == 'Paper') {
        winner.textContent = `You lose, ${compchoice} beats ${capitialize()}.`;
        compPTS++;
    }
    else if (capitialize() == 'Scissors' && compchoice == 'Rock') {
        winner.textContent = `You lose, ${compchoice} beats ${capitialize()}.`;
        compPTS++;
    }
    else if (capitialize() == 'Paper' && compchoice == 'Scissors') {
        winner.textContent = `You lose, ${compchoice} beats ${capitialize()}.`;
        compPTS++
    }
    else if (capitialize() == 'Paper' && compchoice == 'Rock') {
        winner.textContent = `You win, ${capitialize()} beats ${compchoice}.`;
        playerPTS++;
    }
    else if (capitialize() == 'Scissors' && compchoice == 'Paper') {
        winner.textContent = `You win, ${capitialize()} beats ${compchoice}.`;
        playerPTS++;
    }
    else if (capitialize() == 'Rock' && compchoice == 'Scissors') {
        winner.textContent = `You win, ${capitialize()} beats ${compchoice}.`;
        playerPTS++;
    }
    player.textContent = `Player Points: ${playerPTS}`;
    computer.textContent = `Computer Points: ${compPTS}`;
}
let playagain = 'dog';
function play () {
    let played = false;
        getComputerChoice();
        game();
    if (playerPTS > compPTS){
        winner.textContent = `Player wins with ${playerPTS} vs ${compPTS}.`;
}
    else if (compPTS > playerPTS){
        winner.textContent = `Player loses with ${playerPTS} vs ${compPTS}.`;
    }
    else winner.textContent = 'tie game.'
}


const player = document.querySelector('.playerPoints');
const computer = document.querySelector('.computerPoints');
const winner = document.querySelector('.winner');
const computerChoice = document.querySelector('.computerChoice');

//player.forEach((points) => {
 //   points.textContent(playerPTS);
//})



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', (e) => {
    userChoice = e.target.getAttribute('class');
    
    capitialize();
    getComputerChoice();
    game();
    

    
});
});