

function Special(player, isComeback) {
  this.playerIndex = player.indexNum;
  this.heroNumber = player.heroNumber;
  this.x = player.x;
  this.y = player.y;
  this.l = 70;
  this.w = 25;
  this.speed = player.speed * 2;
  this.damage = player.rangeAttack;
  this.toDelete = false;
  this.isComeBack = isComeback;
  this.dir = 1;
  this.time = 0;
  console.log(player + ' ' + isComeback);
  this.isComebackCheck = function() {
    if (isComeback) {
    } else {
      player.power -= player.rangeCost;
    }
  }
  this.isComebackCheck();

  //use the special attack in the correct direction
  if (player.indexNum === 0) {
    this.dir = 1;
  } else {
    this.dir = -1;
  }

  this.show = function() {
    image(heroSprites[this.heroNumber].range,this.x-100,this.y-180);
    this.time ++;
  }

  this.move = function() {
    if (this.heroNumber===1) {
      this.throw();
    }
    this.x += this.dir * this.speed;
  }

  this.throw = function() {
    this.y += this.time/8;
  }

  this.comeBack = function(hitPlayer) {
    if ((this.heroNumber===3||this.heroNumber===4) && this.isComeBack === false) {
      var special = new Special(hitPlayer, true);
      special.damage = 0;
      special.speed *= 1.5;
      special.heroNumber = this.heroNumber;
      specials.push(special);
    }
  }

}
