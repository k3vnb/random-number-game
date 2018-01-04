(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = exports.Ship = function Ship(name, power) {
  _classCallCheck(this, Ship);

  this.name = name;
  this.power = power;
};

var Game = exports.Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.win = '';
    this.one = [];
    this.oneName = '';
    this.two = [];
    this.twoName = '';
  }

  _createClass(Game, [{
    key: 'randomNumber',
    value: function randomNumber() {
      return Math.floor(Math.random() * 10);
    }
  }, {
    key: 'checkWin',
    value: function checkWin() {
      if (this.one === this.two) {
        console.log(1);
        var output = ['fall', 'fall'];
        return output;
      } else if (this.one > this.two) {
        console.log(2);
        var _output = ['pass', 'fall'];
        return _output;
      } else if (this.one < this.two) {
        console.log(3);
        var _output2 = ['fall', 'pass'];
        return _output2;
      }
    }
  }, {
    key: 'run',
    value: function run(stuff) {
      var fightOutput = stuff;

      if (fightOutput[0] === 'fall') {
        if (fightOutput[1] === 'fall') {
          this.win = 'No one goes home tonight';
        } else {
          this.win = this.twoName;
        }
      } else if (fightOutput[0] === 'pass') {
        this.win = this.oneName;
      }
    }
  }]);

  return Game;
}();

exports.shipModule = Ship;
exports.gameModule = Game;

},{}],2:[function(require,module,exports){
'use strict';

var Game = require('../js/backend.js').gameModule;
var Ship = require('../js/backend.js').shipModule;

$(function () {
  $('form').submit(function () {
    event.preventDefault();
    var nameOne = $('#name-one-input').val();
    var nameTwo = $('#name-two-input').val();
    var bored = new Game();
    var ship1 = new Ship(nameOne, bored.randomNumber());
    var ship2 = new Ship(nameTwo, bored.randomNumber());
    bored.one = ship1.power;
    bored.two = ship2.power;
    bored.oneName = ship1.name;
    bored.twoName = ship2.name;
    bored.run(bored.checkWin());
    $('.name-spot-1').empty().append(nameOne + '<br>' + ship1.power);
    $('.name-spot-2').empty().append(nameTwo + '<br>' + ship2.power);
    $('#win-div').empty().show().append("And the winner is " + bored.win + ".  Congratulations. Give them some money");
  });
});

},{"../js/backend.js":1}]},{},[2]);
