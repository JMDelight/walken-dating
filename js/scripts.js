$(function() {
  $('#survey').submit(function(event) {
  event.preventDefault();

  var name = $('input#name').val();
  var score1 = parseInt($('select#venues1').val());
  var score2 = parseInt($('select#venues2').val());
  var score3 = parseInt($('input:radio[name=flavor]:checked').val());

  if ( !name ) {
    alert("Please enter a name.")
  } else {
    var total = score1 + score2 + score3;
    if (total < 4) {
      alert("You get Happy Christopher Walken")
    } else if (total < 7) {
      alert("You get so-so Christopher Walken")
    } else {
      alert("You get villian Christopher Walken")
    }
  }
});
});
