'use strict';

$(document).ready(function() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  $('#add-canvas').click(clickAddCanvas);
  $('#colors').on('click', '.box', clickBox);
  $('#canvas').on('mouseenter', '.tiny', enterTiny);
});

var colors = [];
var timer;
var index = 0;

function enterTiny() {
  var color = $('#selected').css('background-color');
  $(this).css('background-color', color);
}

function clickAddCanvas() {
  var size = $('#canvas-size').val() * 1;
  for (var i = 0; i < size; i++) {
    var $tiny = $('<div>');
    $tiny.addClass('tiny');
    $('#canvas').append($tiny);
  }
}

function clickBox() {
  $('#selected').css('background-color', $(this).css('background-color'));
}

function clickStart() {
  colors = $('.box').toArray().map(function(e) {
    return $(e).css('background-color');
  });
  index = 0;
  clearInterval(timer);
  timer = setInterval(looping, 250);
}

function clickStop() {
  clearInterval(timer);
}

function looping() {
  var color = colors[index];
  $('body').css('background-color', color);
  if (index < colors.length) {
    index++;
  } else {
    index = 0;
  }
}

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
