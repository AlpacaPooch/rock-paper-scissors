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

let userChoice = 'var'
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
    console.log(compchoice)

    if (capitialize() == compchoice) {
        console.log('tie');
    }
    else if (capitialize() == 'Rock' && compchoice == 'Paper') {
        console.log(`You lose, ${compchoice} beats ${capitialize()}.`)
        compPTS++;
    }
    else if (capitialize() == 'Scissors' && compchoice == 'Rock') {
        console.log(`You lose, ${compchoice} beats ${capitialize()}.`);
        compPTS++;
    }
    else if (capitialize() == 'Paper' && compchoice == 'Scissors') {
        console.log(`You lose, ${compchoice} beats ${capitialize()}.`);
        compPTS++
    }
    else if (capitialize() == 'Paper' && compchoice == 'Rock') {
        console.log(`You win, ${capitialize()} beats ${compchoice}.`);
        playerPTS++;
    }
    else if (capitialize() == 'Scissors' && compchoice == 'Paper') {
        console.log(`You win, ${capitialize()} beats ${compchoice}.`);
        playerPTS++;
    }
    else if (capitialize() == 'Rock' && compchoice == 'Scissors') {
        console.log(`You win, ${capitialize()} beats ${compchoice}.`);
        playerPTS++;
    }
}

let playagain = 'dog';
function play () {
    let played = false;
    for (let i = 1; i <= 5; i++) {
        userChoice = prompt('Enter Rock Paper or Sissors');
        getComputerChoice();
        game();
    }
    if (playerPTS > compPTS){
        console.log(`Player wins with ${playerPTS} vs ${compPTS}.`);
}
    else if (compPTS > playerPTS){
        console.log(`Player loses with ${playerPTS} vs ${compPTS}.`);
    }
    else console.log('tie game.')
}
play();


