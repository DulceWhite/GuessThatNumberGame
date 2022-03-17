//Guess That Number

// Message to be used throughout project/file
const enterNumText = `Please enter number greater than zero.`;

//For starting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number that the user will guess
let randomNum;

// For storing the number of attempts the user has left
let attempts; 

//For storing the user's guess
let guess;

// for storing the user's response to play again or not play again
let playAgain;

//for storing tries
let tries= 0;

//Stating alert
alert(`Welcome to "Guess That Number!" Please click "OK" to start the game`);

//Game restarts as long as restartGame has a value of true

while (restartGame){
    // Ask user to enter a number to set the upper limit for the random num that will be created
    rangeNum = prompt(`Please enter a maximum number for the range.`);
    
    //Using parseInt to attempt to convert the user's response to a number value
    rangeNum = parseInt(rangeNum);

    // Verify the user's entry for a range number is a number greater than 0 (note: all numbers positive or negative have boolean value  of true except for Zero which has a default value boolean of false. ALso NaN has a default boolean value of false)

    while(!rangeNum || rangeNum <1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    //create rhe random number using the range number entered by the user

    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    //Prompt user to set a  number of attempts allowed (aka guesses)
    attempts = parseInt(prompt(`Please enter the number of attempts allowed.`));
  
    //Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or less than the range they set
    while (!attempts || attempts < 1 || attempts > rangeNum){
        attempts = parseInt(prompt(`Please enter a number form 1 to ${rangeNum}`));
    }

    //ask the user to enter a guess in the range they set

    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);
  
    //Continues looping until the user guesses the correct number or runs out of attempts (NOTE; Lopps until break keyword is run)
   
    while (true){
        
        //Displays the number when a code word is enter
        if (guess === `Open Sesame`) {
            alert(`The number is ${randomNum}`);
            //Prompts the user to enter another guess
            guess = prompt(`Please enter a guess form 1 to ${rangeNum}. You have ${attempts} attempts left.`);
            
        }
        // Tries convert teh user's guess into a number
        guess = parseInt(guess);
        //Verifies the use's guess is a number greater than zero and less than or equal to the range they set
        
        while(!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}.`));
        }
        
      
        //Removes an attempt
        
        attempts--;
        tries = tries +1;
        
        //Checks if user guessed correctly. If so the game ends.

        if (guess === randomNum){
            alert(`CONGRATULATIONS!! YOU GUESSED THE CORRECT NUMBER: ${randomNum}. And only took ${tries} attempt (s).`);
            tries =0;
            break;

            //checks if the user has any attempts left, then the game ends and the number is display to the user
        } else if ( attempts === 0 ){
            alert(`Sorry, but you have run out of attempts: (The number was ${randomNum})`);
            tries=0;
            break;
           
            //checks if user's guess was too low and prompt user to guess again so
        } else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} left.`);
            //the only other possibility is the user's enter is too high so the user is prompted again
        } else{
            guess = prompt(`Too high!. You have ${attempts} left.`);
            
        }
    } ;  
    // Prompts user with option to play again
    playAgain = prompt(`Would you like to play again? \n Y for yes and N for no.`);

    //Loop continues until user submits a valid response
    while (true){
        //Check if the users's answers is no (aka N or n)
        if (playAgain.toUpperCase() === `N`){
            // alert the users that the game is over and the game is not restarting
            alert(`Thank you for playing!!`);
            restartGame = false;
            break;
            //Checks if the user's answer is yes (aka Y or y)
        } else if (playAgain.toUpperCase() === `Y`){
            break;
        }else{
            playAgain = prompt(`Please enter Y or N.`);
        }
    };



};