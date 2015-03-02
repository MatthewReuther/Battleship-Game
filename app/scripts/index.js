//Declare Variables
var firebaseURL = "https://battleshipit.firebaseio.com/",
    fb          = new Firebase(firebaseURL),
    gamesURL    = new Firebase(firebaseURL + 'games/'),
    createGame,
    board       = [['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', ''],
                   ['', '', '', '', '', '', '', '', '', '']],
    player1,
    player2     = 'United States',
    playerTurn,
    index,
    myDingy     = 'D',
    battleShip  = 'BS',
    carrier     = 'AC',
    Destroyer   = 'DE',
    Sub         = 'SU',
    shipVertical,
    clickTr;

// var currentGameRef = fb.child(uuid);

$('#submit-player').on('click', function() {
  event.preventDefault();
  var thisplayersname = $('.playerName').val(),
      uuid  = $('table').data('uuid');
    gamesURL.push({"player1board": board, "player2board": board, "player1name" : thisplayersname, "player2name": "", "player1turn" : "", "player2turn" : ""});
          createBoard(board);
    console.log("uuid");

});


$('#flipShipVertically').on('click', function() {
  shipVertical = 'true';
  console.log(shipVertical);
  $(this).css("background-color", "lime");
  $('#flipShipHorizontally').css("background-color", '');
})

$('#flipShipHorizontally').on('click', function() {
  shipVertical = 'false';
  console.log(shipVertical);
  $(this).css("background-color", "lime");
  $('#flipShipVertically').css("background-color", '');
})

gamesURL.once("value", function(snapshot){
  var games = (snapshot.val());


  Object.keys(games).forEach(function (uuid) {
    $('.board').attr("data-uuid", uuid);

  });
});

function createBoard(board) {
  $('#board').html('');

  var $table = $('<table class="gameBoard" ></table>')              //Created table to append too
  board.forEach(function (createRow) {                              //For Each item in the board array and create a row for it
    var $tr = $('<tr></tr>');                                       //created table rows in table
    createRow.forEach(function (createTd){                          //For Each table row create a TD
      $tr.append('<td class="createTd">' + createTd + '</td>')      //Nested loop going through every '' within the array
    });
  $table.append($tr);                                               //Append the created Td's to the table
  });
  $('.board').append($table);
  clickHandlerForGameBoard();                                       //Append the tbale to the the actual game board
};

function clickHandlerForGameBoard() {

  $('td').on('click', function() {

    var ericsDingy = ($('td').index(this));
    var clickTr = $(this).closest('tr').index();
    board[clickTr].splice($(this).index(), myDingy.length, myDingy);
    console.log($('td').index(this), $(this).closest('tr').index());
    var xCoordinates =  $('td').index(this);
    var yCoordinates = $(this).closest('tr').index();


    if (shipVertical === 'false') {
    //The for loop for the horizontal placement
      for (var i=0; i < 3; i++) {
        //var shipIndex = ($(this).index() + i);
        board[clickTr].splice($(this).index() + i, 1, myDingy);
      };

      createBoard(board);
    } else {

      //The for loop for the vertical placement
      for (var i=0; i < 3; i++) {
        board[clickTr].splice($(this).index(), 1, myDingy);
        clickTr = clickTr + 1;
      };
      createBoard(board);
    };
  });
}
