var colors = [];
var correctColor;
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
const body = document.querySelector("body");

init();

function init() {
	// mode buttons event listeners
	modeButtonsListener();
	squaresListener();
	reset();
}

// hardBtn.addEventListener("click", function() {
// 	messageDisplay.textContent = "";
// 	// add background color when hard button clicked
// 	hardBtn.classList.add("selected")
// 	// remove background color when hard button clicked
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	correctColor = pickColor();
// 	colorDisplay.textContent = correctColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

// easyBtn.addEventListener("click", function() {
// 	messageDisplay.textContent = "";
// 	// remove background color when easy button clicked
// 	hardBtn.classList.remove("selected")
// 	// add background color when easy button clicked
// 	easyBtn.classList.add("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	correctColor = pickColor();
// 	colorDisplay.textContent = correctColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
});

// colorDisplay.textContent = correctColor;


function changeColors (color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match all colors
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var colorArr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		colorArr.push(randomColor());
	}
	// retun array
	return colorArr;
}

function randomColor() {
	// pick a red from 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	// pick a new random color from array
	correctColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = correctColor;
	// change colors of sqaures
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	body.style.backgroundColor = "#003066";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

function modeButtonsListener() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		});
	}
}

function squaresListener() {
	for (var i = 0; i < squares.length; i++) {

		//click listeners to squares
		squares[i].addEventListener("click", function(evt) {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			// compare color to pickedColor
			if(clickedColor === correctColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(correctColor);
				body.style.backgroundColor = correctColor;
				h1.style.backgroundColor = correctColor;
			} else {
				this.style.backgroundColor = "#003066"
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}