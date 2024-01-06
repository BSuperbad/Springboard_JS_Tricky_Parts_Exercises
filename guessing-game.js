function guessingGame() {
    const randomNum = Math.floor(Math.random()* 100);
    let gameOver = false;
    let count = 1;
    

    return function guess(guessedNum){
        if (gameOver) return 'The game is over, you already won!';
        if(guessedNum === randomNum){
            gameOver = true;
            return `You win! You found ${randomNum} in ${count} guesses.`;
        }
        if(guessedNum < randomNum) {
            count ++;
            return `${guessedNum} is too low!`;
           
        } 
        if(guessedNum > randomNum) {
            count ++;
            return `${guessedNum} is too high!`;
            
        }


    }
   


}

module.exports = { guessingGame };
