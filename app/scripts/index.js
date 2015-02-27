//Declare Variables
  var firebaseURL = "https://battleshipit.firebaseio.com/",
      fb          = new Firebase(firebaseURL),
      gamesURL    = new Firebase(firebaseURL + 'games/'),
      createGame,
      array       = ['', '', '', '', '', '', '', '', '', ''],
      board       = [array, array, array, array, array, array, array, array, array, array],
      player1     = 'Soviet Union',
      player2     = 'United States',
      playerTurn,
      index;


//Begin Functions
  //createGame
    $('#newGame').on('click', function(event){
      event.preventDefault();
      createBoard(board);


    });
  //createBoard ===== think about using using .oneClick() or .unbind()
    function createBoard(board) {
    var $table = $('<table class="gameBoard" ></table>')              //Created table to append too
    board.forEach(function (createRow) {                              //For Each item in the board array and create a row for it
      var $tr = $('<tr></tr>');                                       //created table rows in table
      createRow.forEach(function (createTd){                          //For Each table row create a TD
        $tr.append('<td class="createTd">' + createTd + '</td>')      //Nested loop going through every '' within the array
      });
    $table.append($tr);                                               //Append the created Td's to the table
    });
    $('board').append($table);                                        //Append the tbale to the the actual game board
  }

    //createGame
  //addPlayer

  //appendDataToPage
  //pullDataFromFirbase
  //findCellIndex
  //turnCount


function init(){
  $('#submit-player').on('click', function(){
    var thisplayersname = $('.playerName').val();
    gamesURL.push({"name" : thisplayersname});
  });
}

gamesURL.once("value", function(snapshot){
  console.log(snapshot.val());
});