/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// PLAYER ZERO
var currentScore0 = document.querySelector(".player-0-panel .player-current-score");
var playerZero = document.querySelector(".player-0-panel");
var playerZeroScoreDisplay = document.querySelector("#score-0"); // This is the total score showing
var playerZeroTotal = 0;

// PLAYER ONE
var currentScore1 = document.querySelector(".player-1-panel .player-current-score");
var playerOne = document.querySelector(".player-1-panel");
var playerOneScoreDisplay = document.querySelector("#score-1"); // This is the total score showing
var playerOneTotal = 0;

// GLOBAL
var  dice = document.querySelector(".dice");
var  roll = document.querySelector(".btn-roll");
var hold = document.querySelector(".btn-hold");
const newGame = document.querySelector(".btn-new");
var holdingScore = 0;
var turn = true;
var winningScore = 100;
gameFinish = true;


init();


newGame.addEventListener('click', init);


function init() {
    roll.innerHTML = "Roll dice";
    hold.innerHTML = "Hold";

    holdingScore = 0;
    turn = true;
    winningScore = 100;
    gameFinish = true;
    playerOneTotal = 0;
    playerZeroTotal = 0;
    currentScore0.innerHTML = 0;
    currentScore1.innerHTML = 0;
    playerZeroScoreDisplay.innerHTML = 0;
    playerOneScoreDisplay.innerHTML = 0;
    playerZero.classList.add("active");

    roll.addEventListener('click', rollDice);
    hold.addEventListener('click', holdScore);

}

function rollDice() {
        var generateRandomNumber = Math.floor(Math.random() * 6) + 1;
        dice.src = "dice-" + generateRandomNumber + ".png";
        holdingScore += generateRandomNumber;
        rotate();
        if(generateRandomNumber === 1) {
            holdingScore = 0;
            if(playerZero.classList.contains("active")) 
            {
                playerZero.classList.toggle("active");
                playerOne.classList.toggle("active");
                // playerZero.classList.remove("active");
                // playerOne.classList.add("active");
                currentScore0.innerHTML = 0;
                turn = false;
            } 
            else 
            {
                playerOne.classList.toggle("active");
                playerZero.classList.toggle("active");
                // playerOne.classList.remove("active");   
                // playerZero.classList.add("active");
                currentScore1.innerHTML = 0;
            }
        }
    
        if(playerZero.classList.contains("active")) 
        {
            currentScore0.innerHTML = holdingScore;
        } 
        else 
        {
            currentScore1.innerHTML = holdingScore;
        }
    }


function holdScore() {
        if(playerZero.classList.contains("active"))
        {
            playerZeroTotal += holdingScore;
            
            currentScore0.innerHTML = 0;
            playerZero.classList.remove("active");
            playerOne.classList.add("active");
    
            if (playerZeroTotal >= winningScore) {
                playerOne.classList.remove("active");
                playerZero.classList.remove("active");
    
                playerZeroScoreDisplay.innerHTML = "WINNER!!!";
                gameFinish = !gameFinish;
    
            } else {
                playerZeroScoreDisplay.innerHTML = playerZeroTotal;
            }
        }
        else
        {
            playerOneTotal += holdingScore;
            
            currentScore1.innerHTML = 0;
            playerOne.classList.remove("active");
            playerZero.classList.add("active");
    
            if (playerOneTotal >= winningScore) {
                playerOne.classList.remove("active");
                playerZero.classList.remove("active");
        
                playerOneScoreDisplay.innerHTML = "WINNER!!!";
                gameFinish = !gameFinish;
    
            } else {
                playerOneScoreDisplay.innerHTML = playerOneTotal;
            }
        }
    
        if(!gameFinish) {
            roll.innerHTML = "Thanks for playing";
            hold.innerHTML = "";
            roll.removeEventListener("click", rollDice);
            hold.removeEventListener("click", rollDice);
        }
    
        holdingScore = 0;
}


var diceTurn = true;

function rotate() {
    var pos = 0;
    var id = setInterval(frame, .3);
    function frame() {
        if (pos == 180) {
            diceTurn = !diceTurn;
            clearInterval(id);
        } else {
            pos+=2;
            if(diceTurn) {
                dice.style.transform = "rotate(" + pos + "deg)";
            } else {
                dice.style.transform = "rotate(-" + pos + "deg)";
            }
            
        }
    }
}