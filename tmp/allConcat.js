var Ship = require('../js/backend.js').shipModule;

$(function() {
  var ship1 = new Ship("Griffin");
  var ship2 = new Ship("kevin");
  console.log(ship1.nameChanger());
  console.log(ship2.nameChanger());
});
