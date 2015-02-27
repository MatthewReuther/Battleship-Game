$(document).ready(init);

var firebaseURL = "https://battleshipit.firebaseio.com/",
             fb = new Firebase(firebaseURL),
      gamesURL  = new Firebase(firebaseURL + 'games/');

function init(){
  $('#submit-player').on('click', function(){
    var thisplayersname = $('.playerName').val();
    gamesURL.push({"name" : thisplayersname});
  });
}

gamesURL.once("value", function(snapshot){
  console.log(snapshot.val());
});