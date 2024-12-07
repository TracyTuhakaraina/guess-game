//GLOBAL VARIABLES
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector("button.guess");
const letterInput = document.querySelector("input.letter");
const wordProgressElement = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesText = document.querySelector("p span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again.hide");
//Global variable as starting word before fetching words from hosted file
const word = "magnolia";

//Write a Function to Add Placeholders for Each Letter
const updatewordProgress = function (word) {
    const placeholders = [];
    for (const letter of word) {
        placeholders.push("⚫");
    }
    wordProgressElement.innerText = placeholders.join("");
};

updatewordProgress(word);

//Add an Event Listener for the Button
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});

