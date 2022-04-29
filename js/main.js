let randomWords = ["HeAd", "Paprika", "Knight", "Chemical", "Spoon"]
let answer = "";
let hiddenAnswer = "";
let userAttempts = 9;
let letterNoMatch = 0;

function generateWord() {
    userAttempts = 9;
    document.getElementById("userAttempts").innerHTML = userAttempts;
    disableLetters();
    let letters = document.querySelectorAll(".keyboardLetters");
    for (keyboardLetters of letters) {
        keyboardLetters.classList.remove('no-click');
        keyboardLetters.disabled = false;
    }
    hiddenAnswer = "";
    answer = "";
    answer = randomWords[Math.floor(Math.random() * 5)];
    wordSize = answer.length;
    for (let i = 0; i < wordSize; i++) {
        hiddenAnswer += "_"
    } 
    document.getElementById("hiddenWord").innerHTML = hiddenAnswer;
    document.getElementById("wordGenerator").hidden = true;
}

function lettersClicked(clicked_value, clicked_id) {
    letterNoMatch = 0;
    for (let i = 0; i < wordSize; i++) {
        console.log(i);
        clicked_value == answer.charAt(i).toLowerCase() ? 
        i == 0 ? 
        hiddenAnswer = (hiddenAnswer.slice(0, i).concat(clicked_value).toUpperCase().concat(hiddenAnswer.slice(i + 1, wordSize))):
        hiddenAnswer = (hiddenAnswer.slice(0, i).concat(clicked_value).concat(hiddenAnswer.slice(i + 1, wordSize))) : 
        (letterNoMatch = letterNoMatch + 1), userLoseLife();
    }
    document.getElementById(clicked_id).disabled = true;
    document.getElementById("hiddenWord").innerHTML = hiddenAnswer;
    hiddenAnswer.includes("_") ? "" : (document.getElementById("wordGenerator").hidden = false, disableLetters());
}

function disableLetters() {
    let letters = document.querySelectorAll('.keyboardLetters')
    for (keyboardLetters of letters) {
        keyboardLetters.classList.add("no-click");
    };
}

function userLoseLife() {
    letterNoMatch == wordSize ? (document.getElementById("userAttempts").innerHTML = userAttempts = userAttempts - 1, userNoLives()) : "";
}

function userNoLives() {
    userAttempts == 0 ? (disableLetters(), document.getElementById("wordGenerator").hidden = false) : "";
}