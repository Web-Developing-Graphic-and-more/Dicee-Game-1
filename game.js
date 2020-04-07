
// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
function firstDice() {
  if (randomNumber1 === 6) {
    document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
  } else if (randomNumber1 === 5) {
    document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
  } else if (randomNumber1 === 4) {
    document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 3) {
    document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 2) {
    document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 1) {
    document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
  }
}


// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
function secondDice() {
  if (randomNumber2 === 6) {
    document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
  } else if (randomNumber2 === 5) {
    document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
  } else if (randomNumber2 === 4) {
    document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 3) {
    document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 2) {
    document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 1) {
    document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
  }
}

// Result
function result() {
  var score1 = randomNumber1;
  var score2 = randomNumber2;
  if (score1 === score2) {
    document.querySelector("h1").innerHTML = "Draw!"
  } else if (score1 < score2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (score1 > score2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
}

// Load when refresh function
window.onload = function loadDice() {
  firstDice();
  secondDice();
  result();
}
