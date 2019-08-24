//Create array of Halloween words    
var words_array = ["pumpkin", "witch", "spooky", "trick", "ghost", "zombie", "scarecrow", "candy", "treat", "jackolantern", "october", "vampire", "costume", "boo", "broomstick", "mummies", "scary", "haunted", "bat", "skeleton", "scary", "monsters", "goblin"];

//Create array to hold randomly chosen word
var random_word = [];

//Create a variable to hold halloween word
var halloween_word;

//Call function to generate a random word for user
word_generator();

//Create array for all the guessed words & wrong guesses
var guessed = [];
var wrong_guess = [];

//variables to keep track of wins, losses, and number of guesses
var numOfGuesses = 12;
var numWin = 0;
var numLoss = 0;

document.getElementById("guesses-remaining").innerHTML = ("Number of guesses remaining: " + numOfGuesses);
document.getElementById("wins").innerHTML = ("Win: " + numWin);
document.getElementById("losses").innerHTML = ("Loss: " + numLoss);

// Randomly chooses a choice from the options array. This is the word the user is guessing.
function word_generator() {
    halloween_word = words_array[Math.floor(Math.random() * words_array.length)];

    for (i = 0; i < halloween_word.length; i++) {
        random_word.push('_');
        document.getElementById("word-display").innerHTML = random_word.join(' ');
    }
    console.log(halloween_word);
    return (halloween_word);

}
console.log(halloween_word);
console.log(random_word);



// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userChoiceText = event.key;

    //Check to see if user already guessed the letter

    if (guessed.includes(userChoiceText.toLowerCase())) {;
    } else if (halloween_word.includes(userChoiceText.toLowerCase())) {
        //record the letter into array that contains all letters entered by the user
        guessed.push(userChoiceText.toLowerCase());
        console.log(guessed);


        //Check through the halloween_word to see if user guessed it right
        for (i = 0; i < halloween_word.length; i++) {
            if (userChoiceText.toLowerCase() == halloween_word.charAt(i)) {
                random_word.splice(i, 1, userChoiceText);
                document.getElementById("word-display").innerHTML = random_word.join(' ');
                if (!random_word.includes('_') && numOfGuesses > 0) {
                    console.log("You Win!");
                    console.log("Press the button to reload the page");
                    numWin++;
                    document.getElementById("wins").innerHTML = ("Win: " + numWin);
                    newGame();
                }
            }
        }


    }
    //When the user input is not part of the word
    else {
        guessed.push(userChoiceText.toLowerCase());
        wrong_guess.push(userChoiceText.toLowerCase());
        document.getElementById("user-guess").innerHTML = ("Guessed letters: " + wrong_guess);
        console.log(wrong_guess);
        numOfGuesses--;
        document.getElementById("guesses-remaining").innerHTML = ("Number of guesses remaining: " + numOfGuesses);
        if (random_word.includes('_') && numOfGuesses == 0) {
            console.log("You LOSE!");
            console.log("Press the button to start a new game");
            numLoss++;
            document.getElementById("losses").innerHTML = ("Loss: " + numLoss);
            newGame();
        }
    }

    //function for new game
    function newGame() {
        guessed.length = 0;
        random_word.length = 0;
        wrong_guess.length = 0;
        console.log(guessed);
        console.log(random_word);
        console.log(wrong_guess);
        document.getElementById("user-guess").innerHTML = "";
        word_generator();
        numOfGuesses = 12;
        document.getElementById("guesses-remaining").innerHTML = ("Number of guesses remaining: " + numOfGuesses);

    }


};