let dummy = {
  health: 100,
  name: 'Rock Howard',
  hits: 0,
  isAlive: true,
  hitStates: [],
  animation: ['assets/rock-idle.gif', 'assets/rock-fall.gif'],
}

let player = {
  health: 100,
  name: 'Terry Bogard',
  hits: 0,
  isAlive: true,
  hitStates: [],
  animation: ['assets/terry-idle.gif', 'assets/terry-punch.gif', 'assets/terry-kick.gif', 'assets/terry-burnKnuckle.gif', 'assets/terry-win3.gif'],
  animationHeight: ['140px', , , , '280px'],
  animationLeft: ['150px', , , , '120px'],
}

let hitStates = {
  block: { name: 'blocking', modifier: -1, description: 'Look out for chip damage' },
  counterhit: { name: 'counterhit', modifier: 2, description: 'Stop pressing buttons' },
  guardcrush: { name: 'guardcrush', modifier: 5, description: 'Knock knock!' }

}

function addHitState(x) {
  let hitStates = ['block', 'counterhit', 'guardcrush']
  dummy.hitStates.push(hitStates[x]);
}

drawUI()

function hit(x) {
  let hitDamage = [1, 5, 10] //[punch, kick, burn knuckle]
  dummy.health -= hitDamage[x] + addMods();
  dummy.hits++;
  drawUI();
}



function drawUI() {
  if (dummy.health > 0) {
    document.getElementById('health').innerText = 'Health: ' + dummy.health;
    document.getElementById('hits').innerText = 'Hits: ' + dummy.hits;
    document.getElementById('name').innerText = 'Dummy: ' + dummy.name;
  }
  if (dummy.health <= 0 && dummy.isAlive) {
    document.getElementById('health').innerText = 'Health: ' + 0;
    document.getElementById('rock-sprite').setAttribute('src', dummy.animation[1]);
    document.getElementById('terry-sprite').setAttribute('src', player.animation[4]);
    document.getElementById('terry-sprite').style.height = player.animationHeight[4];
    document.getElementById('terry-sprite').style.left = player.animationLeft[4];
    document.getElementById('hits').innerText = 'Hits: ' + dummy.hits;
    dummy.isAlive = false;
  }

}

function reset() {
  dummy.health = 100;
  dummy.isAlive = true;
  dummy.hits = 0;
  document.getElementById('rock-sprite').setAttribute('src', dummy.animation[0]);
  document.getElementById('terry-sprite').setAttribute('src', player.animation[0]);
  document.getElementById('terry-sprite').style.height = player.animationHeight[0];
  document.getElementById('terry-sprite').style.left = player.animationLeft[0];
  dummy.hitStates = [];
  drawUI();
}

function addMods() {
  let damageMod = 0;
  for (let i = 0; i < dummy.hitStates.length; i++) {
    // if (dummy.hitStates[i] == 'block') { damageMod += hitStates.block.modifier }
    // if (dummy.hitStates[i] == 'counterhit') { damageMod += 2 }
    // if (dummy.hitStates[i] == 'guardcrush') { damageMod += 5 }
    damageMod += hitStates[dummy.hitStates[i]].modifier;
  }
  return damageMod;

}