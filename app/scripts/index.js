'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var firstPlayer,
    secondPlayer,
    playerName,
    moves           = 0;


//Set first play to X
var currentPlayer = "X";

//Funcation that allows player one to go first with an X then player two is an O
function changePlayer(){
  if( currentPlayer  === "X" )
      currentPlayer = "O";
  else
      currentPlayer = "X";
}

//Created an event listener on click of Table TD that appeneds first player(currentplayer)
//an X then flips to an O on next players turn and unbide allows players to not click in an clciked area already.
$('td').on('click', function(event){
  moves = moves +1;
  $(this).append( currentPlayer );
  $(this).unbind("click");
  logVal(currentPlayer);
  changePlayer();



});


//Create player 1 (x) and player 2 (o)
$('#submit-player').on('click', function(event){
  event.preventDefault();
  playerName = $('.playerName').val();
  assignPlayer();
  console.log(firstPlayer);
  console.log(secondPlayer);
});

//Function to check the status of firstPlayer & secondPlayer
function assignPlayer() {
  if (firstPlayer === undefined) {
    firstPlayer = playerName;
    } else {
    secondPlayer = playerName;
  };
};

//Scoring function that tracks the moves of players 1 & 2
function logVal(currentPlayer) {
  //Winning Within Rows

  //Top Row Win
  if (($('#A1').text() === currentPlayer && $('#A2').text() === currentPlayer && $('#A3').text() === currentPlayer)){
        alert('YOU WIN!');
    }
  //Middle Row Win
    else if (($('#B1').text() === currentPlayer && $('#B2').text() === currentPlayer && $('#B3').text() === currentPlayer)) {
      alert('YOU WIN!');
    }
  //Bottom Row Win
    else if (($('#C1').text() === currentPlayer && $('#C2').text() === currentPlayer && $('#C3').text() === currentPlayer)) {
      alert('YOU WIN!');
    }

  //Winning Within Columns

  //Left Column Win
    else if (($('#A1').text() === currentPlayer && $('#B1').text() === currentPlayer && $('#C1').text() === currentPlayer)) {
      alert('YOU WIN!');
    }
  //Middle Column Win
    else if (($('#A2').text() === currentPlayer && $('#B2').text() === currentPlayer && $('#C2').text() === currentPlayer)) {
      alert('YOU WIN!');
    }
  //Right Column Win
    else if (($('#A3').text() === currentPlayer && $('#B3').text() === currentPlayer && $('#C3').text() === currentPlayer)) {
      alert('YOU WIN!');
    }

  //Winning Diagonally

  //Top-Left to Bottom-Right
    else if (($('#A1').text() === currentPlayer && $('#B2').text() === currentPlayer && $('#C3').text() === currentPlayer)) {
      alert('YOU WIN!');
    }
  //Bottom-Left to Top-Right
    else if (($('#C1').text() === currentPlayer && $('#B2').text() === currentPlayer && $('#A3').text() === currentPlayer)) {
      alert('YOU WIN!');
    }
    else if (moves === 9) {
      alert('Cats Game')
    }
};

//Start a New Game
$('#newGame').on('click', function () {
	location.reload();
	});



