function Ship(name, power) {
  this.name = name;
  this.power = power;
}
Ship.prototype.nameChanger = function () {
  return this.name = this.name + " is fast!";
};












exports.shipModule = Ship;
