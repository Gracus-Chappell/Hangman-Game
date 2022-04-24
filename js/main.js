let randomWords = ["HeAd", "Paprika", "Knight", "Chemical", "Spoon"]
let answer = "";
let hiddenAnswer = "";

function generateWord() {
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

function buttonLetters(clicked_value, clicked_id) {
    for (let i = 0; i < wordSize; i++) {
        console.log(i);
        clicked_value == answer.charAt(i).toLowerCase() ? 
        i == 0 ? 
        hiddenAnswer = (hiddenAnswer.slice(0, i).concat(clicked_value).toUpperCase().concat(hiddenAnswer.slice(i + 1, wordSize))):
        hiddenAnswer = (hiddenAnswer.slice(0, i).concat(clicked_value).concat(hiddenAnswer.slice(i + 1, wordSize))) : 
        console.log("No!");
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