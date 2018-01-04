export class Ship{
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}
export class Game{
  constructor(one, two) {
    this.one = one;
    this.two = two;
  }
  checkType() {
    if (this.one === this.two) {
      console.log(1);
      const output = ['fall', 'fall'];
      return output;
    } else if (this.one > this.two) {
      console.log(2);
      const output = ['pass', 'fall'];
      return output;
    } else if (this.one < this.two) {
      console.log(2);
      const output = ['fall', 'pass'];
      return output;
    }
  };
}


exports.shipModule = Ship;
exports.gameModule = Game;
