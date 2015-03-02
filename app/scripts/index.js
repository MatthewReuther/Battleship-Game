//Declare Variables
  var firebaseURL = "https://battleshipit.firebaseio.com/",
      fb          = new Firebase(firebaseURL),
      gamesURL    = new Firebase(firebaseURL + 'games/'),
      createGame,
      // array       = ['', '', '', '', '', '', '', '', '', ''],
      // array1      = ['', '', '', '', '', '', '', '', '', ''],
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
      xCoordinates,
      yCoordinates,
      myDingy     = 'D';

  // var currentGameRef = fb.child(uuid);


// function init() {
$('#submit-player').on('click', function() {
  event.preventDefault();
  var thisplayersname = $('.playerName').val(),
      uuid  = $('table').data('uuid');
    gamesURL.push({"player1board": board, "player2board": board, "player1name" : thisplayersname, "player2name": "", "player1turn" : "", "player2turn" : ""});
    createBoard(board);
    console.log("uuid");
    // console.log(snapshot.val());
});
// }

    gamesURL.once("value", function(snapshot){
      var games = (snapshot.val());


      Object.keys(games).forEach(function (uuid) {
        $('.board').attr("data-uuid", uuid);
        // console.log(games[uuid]);
      });
    });


    //   //     if (games[uuid].isOver === false) {
    //   // // load unfinished game
    //         createBoard(games[uuid].board);
    //         player = games[uuid].whoseTurn;
    //         $('table').attr("data-uuid", uuid);
        // });
// });
// };      // console.log(Object.keys().name);

//Begin Functions
  //createGame
  //   $('#newGame').on('click', function(event){
  //     event.preventDefault();
  //     createBoard(board);


  //   });
  // //createBoard ===== think about using using .oneClick() or .unbind()
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

  //createGame
  //addPlayer

  //appendDataToPage
  //pullDataFromFirbase
  //findCellIndex
  //turnCount

var clickTr;

  function clickHandlerForGameBoard() {

  $('td').on('click', function() {
  var ericsDingy = ($('td').index(this));
  $(this).append(myDingy);
  //$('.board').add(myDingy);
  var clickTr = $(this).closest('tr').index();
  //board[clickTr].splice($(this).index(), myDingy.length, myDingy);
  //console.log($('td').index(this), $(this).closest('tr').index());
  //var xCoordinates =  $('td').index(this);
  //var yCoordinates = $(this).closest('tr').index();


      // for (var i=0; i < 3; i++) {
      //   var shipIndex = ($(this).index() + i);
      //   board[clickTr].splice($(this).index() + i, 1, myDingy);      //This is what is horrizontally appending by the x coordinate
      // };


      // for (var i=0; i < 3; i++) {
      // //   board[clickTr].splice($(this).index() + i, 1, myDingy);      //This is what is horrizontally appending by the x coordinate
      // //   console.log(clickTr);
      // };
      for (var i=0; i < 3; i++) {
        board[clickTr].splice($(this).index(), 1, myDingy);      //This is what is horrizontally appending by the x coordinate
        clickTr = clickTr + 1;
        console.log(clickTr);
      };
      createBoard(board);


    });
  }

        // clickTr = clickTr + 1;         ////to make ships vertical


