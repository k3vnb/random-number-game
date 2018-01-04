const Game = require('../js/backend.js').gameModule;
const Ship = require('../js/backend.js').shipModule;
const f = 'fall';
const p = 'pass';
describe('Ship', function() {

  it('test inputs fall fall', function() {
    const ship1 = new Ship('one', 0)
    const ship2 = new Ship('two', 0)
    const game = new Game(ship1.power, ship2.power)
    expect(game.checkType()).toEqual([f, f]);
  });
  it('test inputs pass fall', function() {
    const ship1 = new Ship('one', 1)
    const ship2 = new Ship('two', 0)
    console.log(ship1, ship2);
    const game = new Game(ship1.power, ship2.power)
    expect(game.checkType()).toEqual([p, f]);
  });
  it('test inputs fall pass', function() {
    const ship1 = new Ship('one', 0)
    const ship2 = new Ship('two', 1)
    console.log(ship1, ship2);
    const game = new Game(ship1.power, ship2.power)
    expect(game.checkType()).toEqual([f, p]);
  });
});
