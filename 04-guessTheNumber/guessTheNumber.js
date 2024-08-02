let randomNumber = Math.round(Math.random() * 100 + 1);

let guessInput = document.querySelector('#guessField');
let submitButton = document.querySelector("#subt");
let guessSlot = document.querySelector(".guesses");
let remainingGuesses = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startAgain = document.querySelector(".startAgain");

startAgain.style.display = 'none';

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        let guess = guessInput.value;
        console.log(guess)
        guessValidate(guess);
    })
}


function guessValidate(guess){
    //
    if(guess < 1){
        alert(`Please Enter a number Greater Than 1`);
    } else if(guess > 100){
        alert(`Please Enter a number less or eqaul to 100`);
    } else if(isNaN(guess)){
        alert(`please Enter a valid Number`);
    } else{
        prevGuess.push(guess);
        if(numGuess == 10){
            displayMessage(`Game Over, Random number was: ${randomNumber}`);
            displayGuess(guess);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //
    if(guess == randomNumber){
        displayMessage(`You Guessed it Right!`);
        endGame();
    } else if(guess > randomNumber){
        displayMessage(`Given Number is too high!!`);
    } else if(guess < randomNumber){
        displayMessage(`Given Number is too low!!`);
    }
}

function displayGuess(guess){
    // 
    guessInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainingGuesses.innerHTML--;
}

function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    startAgain.style.display = 'flex'
    startGame();

}

function startGame(){

    startAgain.addEventListener('click', function(){
        guessInput.removeAttribute('disabled', '');
        prevGuess = [];
        numGuess = 1;
        lowOrHi.innerHTML = '';
        guessSlot.innerHTML = '';
        remainingGuesses.innerHTML = '10';
        startAgain.style.display = 'none';
    })

}
