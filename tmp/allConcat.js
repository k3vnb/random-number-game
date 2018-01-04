const Game = require('../js/backend.js').gameModule;
const Ship = require('../js/backend.js').shipModule;

$(function() {
  $('form').submit(function() {
    event.preventDefault();
    const nameOne = $('#name-one-input').val();
    const nameTwo = $('#name-two-input').val();
    const bored = new Game();
    const ship1 = new Ship(nameOne, bored.randomNumber());
    const ship2 = new Ship(nameTwo, bored.randomNumber());
    bored.one = ship1.power;
    bored.two = ship2.power;
    bored.oneName = ship1.name;
    bored.twoName = ship2.name;
    bored.run(bored.checkWin());
    // $('.name-spot-1').html(" ");
    // $('.name-spot-2').html(" ");
    // $('#win-div').hide().html(" ");
  });
    $('.name-spot-1').append(nameOne + '<br>' + ship1.power);
    $('.name-spot-2').append(nameTwo + '<br>' + ship2.power);
    $('#win-div').show().append("And the winner is " + bored.win + ".  Congratulations. Give them some money");
  });








});
