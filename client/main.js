'use strict';

$(document).ready(function() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);

});

function addColor() {
  var color = $('#color').val();
  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');

  $('#colors').append($box);
}

function addRandom() {
  var num = parseInt($('#quantity').val());
  for (var i = 0; i < num; i++) {
    var $box = $('<div>');
    $box.css('background-color',
             'rgb(' + randomColor(256) +
             ', ' + randomColor(256) +
             ', ' + randomColor(256) +
             ')');
    $box.addClass('box');

    $('#colors').append($box);
  }
}

function randomColor(max) {
  return Math.floor(Math.random() * max);
}
