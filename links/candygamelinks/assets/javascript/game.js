
var wordBank = ['babyruth', 'butterfinger', 'lollipop', 'snickers', 'candycorn', 'almondjoy', 'milkyway', 'payday'];
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var badWorking = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;


function reset() {
	//RandomFormula
	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;

	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters = [];
	badWorking = [];
	doubleWord = ['a', 'b', 'c',
		'd', 'e', 'f',
		'g', 'h', 'i',
		'j', 'k', 'l',
		'm', 'n', 'o',
		'p', 'q', 'r',
		's', 't', 'u',
		'v', 'w', 'x',
		'y', 'z'];
	test = false;
	startGame();
}
function startGame() {
	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = chosenWord.split('');
	numBlanks = lettersInWord.length;

	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters = [];
	badWorking = [];
	doubleWord = ['a', 'b', 'c',
		'd', 'e', 'f',
		'g', 'h', 'i',
		'j', 'k', 'l',
		'm', 'n', 'o',
		'p', 'q', 'r',
		's', 't', 'u',
		'v', 'w', 'x',
		'y', 'z'];

	for (var i = 0; i < numBlanks; i++) {
		badWorking.push('_');
		document.getElementById('wordToGuess').innerHTML = badWorking;
	}

	document.getElementById('wordToGuess').innerHTML = badWorking.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;

	console.log(chosenWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(badWorking);
}

function compareLetters(userKey) {
	console.log('WORKING!');
	if (chosenWord.indexOf(userKey) > -1) {

		for (var i = 0; i < numBlanks; i++) {
		
			if (lettersInWord[i] === userKey) {
				rightGuessCounter++;
				badWorking[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = badWorking.join('_');
			}
		}
		console.log(badWorking);
	}
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('wrongGuesses').innerHTML = wrongLetters;

		console.log('Wrong Letters = ' + wrongLetters);
		console.log('Guesses left are ' + guessesLeft);
	}



}
function winLose() {
	if (rightGuessCounter === numBlanks) {
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		alert('SWEET!You Win');
		reset();
	}
	else if (guessesLeft === 0) {
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('NOT SO SWEET-You Lose!');
		reset();
	}
}

startGame();
//I have no clue what this snippet is<<<<<<<<<<<<<<//
document.onkeyup = function (event) {
	test = true;
	var letterGuessed = event.key;
	for (var i = 0; i < doubleWord.length; i++) {
		if (letterGuessed === doubleWord[i] && test === true) {
			var spliceDword = doubleWord.splice(i, 1);
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}

}