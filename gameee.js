var target=0;
var guess=[]

function generateRandNum(){
    target = Math.floor(Math.random() * 100 + 1);
}

var prevGuess=0;
function updatePrevGuess(){
    prevGuess=guess[guess.length-1];

}
function inputValidator(){
    guess.push($("#number.input").value());
}
updatePrevGuess();

var repeat=false;
