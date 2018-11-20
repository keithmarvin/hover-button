$('#button').mouseover(
  function() {
    $('#button').css("background", "#d73c1e");
    $('#shadow').css("background", "#a5240b");
  });
$('#button').mouseout(
  function() {
    $('#button').css("background", "#00aeef");
    $('#shadow').css("background", "#1e79d7");
  });

function mousedown() {
  $('#button').css({
    "top": "13px",
    "left": "13px"
  })
}

function mouseup() {
  $('#button').css({
    "top": "10px",
    "left": "10px"
  })
}
//Animation