// jshint esversion: 6
class Item {
  constructor(name) {
    this.name = name;
  }
}

class Weapon extends Item {
  constructor(name, damage) {
    super(name);
    this.damage = damage;
  }
}

class Food extends Item {
  constructor(name, energy) {
    super(name);
    this.energy = energy;
  }
}

class Player {
  constructor(name, health, strength, speed) {
    this._pack = [];
    this._maxHealth = health;
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;
  }

  getPack() {
    return this._pack;
  }

  getMaxHealth() {
    return this._maxHealth;
  }

  checkPack() {
    let playerPack = this._pack;
    console.log('Contents: ');
    for (let i in playerPack.length) {
      console.log(playerPack[i] + ", ");
    }
  }

  takeItem(item) {
    let packContents = this._pack;
    if (packContents.length >=3) {
      console.log('Your pack is full.');
      return false;
    } else {
      packContents.push(item);
      console.log(this.name + ' picked up ' + item.name);
      return true;
    }
  }

  discardItem(item) {
    let itemIndex = this._pack.indexOf(item);

    if (itemIndex !== -1) {
      this._pack.splice(itemIndex, 1);
      console.log(this.name + ' ' + item.name + ' was discarded.');
      return true;
    } else {
      console.log(item.name + ' nothing was discarded since the item could not be found.');
      return false;
    }
  }

  equip(itemToEquip) {
    let itemIndex = this._pack.indexOf(itemToEquip);
    let equipped = this.equipped;
    let _pack = this._pack;

    if (!equipped && _pack.includes(itemToEquip) && itemToEquip instanceof Weapon) {
      this.equipped = itemToEquip;
      this._pack.splice(itemIndex, 1);
    } else if (equipped && _pack.includes(itemToEquip) && itemToEquip instanceof Weapon) {
      let tempItem = this.equipped;
      this.equipped = itemToEquip;
      this._pack.splice(itemIndex, 1);
      this._pack.push(tempItem);
    }
  }

  eat(itemToEat) {
    let energyCount = itemToEat.energy;

    if (this._pack.includes(itemToEat) && itemToEat instanceof Food) {
      this._pack.splice(this._pack.indexOf(itemToEat), 1);
      this.health = this.health + energyCount;

      if (this.health > this.getMaxHealth()) {
        this.health = this._maxHealth;
      }
    }
  }

  useItem(item) {
    if (item instanceof Weapon) {
      this.equip(item);
    } else if (item instanceof Food) {
      this.eat(item);
    }
  }

  equippedWith() {
    if (!this.equipped) {
      console.log('No weapon equipped');
      return false;
    } else {
      console.log(this.name + ' has ' + this.equipped + ' equipped.');
      return this.equipped.name;
    }
  }
}




class Zombie {
  constructor(health, strength, speed) {
    this._maxHealth = health;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
  }
}

class FastZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}

class StrongZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}

class RangedZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}

class ExplodingZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}


/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
//   var player = new Player("Joan", 500, 30, 70);
//   var zombie = new Zombie(40, 50, 20);
//   var charger = new FastZombie(175, 25, 60);
//   var tank = new StrongZombie(250, 100, 15);
//   var spitter = new RangedZombie(150, 20, 20);
//   var boomer = new ExplodingZombie(50, 15, 10);

//   var shovel = new Weapon("shovel", 15);
//   var sandwich = new Food("sandwich", 30);
//   var chainsaw = new Weapon("chainsaw", 25);

//   player.takeItem(shovel);
//   player.takeItem(sandwich);
//   player.takeItem(chainsaw);
//   player.discardItem(new Weapon("scythe", 21));
//   player.discardItem(shovel);
//   player.checkPack();
//   player.takeItem(shovel);
//   player.checkPack();

//   player.equippedWith();
//   player.useItem(chainsaw);
//   player.equippedWith();
//   player.checkPack();

//   player.useItem(shovel);
//   player.equippedWith();
//   player.checkPack();

//   player.health = 487;
//   console.log("Before health: " + player.health);
//   player.useItem(sandwich);
//   console.log("After health: " + player.health);
//   player.checkPack();
}

// runGame();
