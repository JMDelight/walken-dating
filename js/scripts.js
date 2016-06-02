$(function() {
  $('#survey').submit(function(event) {
  event.preventDefault();
  $('.chris1').hide();

  $('.chris2').hide();

  $('.chris3').hide();
  $("div.result").hide();

  var name = $('input#name').val();
  var score1 = parseInt($('select#venues1').val());
  var score2 = parseInt($('select#venues2').val());
  var score3 = parseInt($('input:radio[name=flavor]:checked').val());

  if ( !name ) {
    alert("Please enter a name.")
  } else {
    var total = score1 + score2 + score3;
    if (total < 4) {
      $('.chris1').show();
    } else if (total < 7) {
      $('.chris2').show();
    } else {
      $('.chris3').show();
    }
  }
  $("div.result").show();
});
});
