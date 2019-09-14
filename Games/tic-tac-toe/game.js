class Game {
  constructor (name) {
    this.name = name;
  }
}

class ExtendedGame extends Game {
  constructor (name, alt) {
    super (name);
    this.alt = alt;
  }
}


function Game (name) {
  this.name = name;
}

Game.prototype.sing = function () {

}

function ExtendedGame (name, alt) {
  Game.call(this, name);
  this.alt = alt;
}

ExtendedGame.prototype = Object.create({}, Game.prototype);
ExtendedGame.prototype.constructor = ExtendedGame;