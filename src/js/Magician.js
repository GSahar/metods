import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }
}
