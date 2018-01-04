export class Ship{
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}
export class Game{
  constructor() {
    this.win = '';
    this.one = [];
    this.oneName = '';
    this.two = [];
    this.twoName = '';
  }
  randomNumber(){
    return Math.floor(Math.random()*10);
  };
  checkWin() {
    if (this.one === this.two) {
      console.log(1);
      const output = ['fall', 'fall'];
      return output;
    } else if (this.one > this.two) {
      console.log(2);
      const output = ['pass', 'fall'];
      return output;
    } else if (this.one < this.two) {
      console.log(3);
      const output = ['fall', 'pass'];
      return output;
    }
  };
  run(stuff) {
    const fightOutput = stuff;

    if (fightOutput[0] === 'fall') {
      if (fightOutput[1] === 'fall') {
        this.win = 'No one goes home tonight';
      } else {
        this.win = this.twoName;
      }
    }else if (fightOutput[0] === 'pass' ) {
      this.win = this.oneName;
    }
  };
}


exports.shipModule = Ship;
exports.gameModule = Game;
