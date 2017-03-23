$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches"));

  if (height >= 76) {
    $('#tall-ride').show();
    $('#medium-ride').show();
    $('#short-ride').show();
  } else if (height >=63) {
    $('#medium-ride').show();
    $('#short-ride').show();
  } else {
    $('#short-ride').show();
  }
});
