let dummy = {
  health: 100,
  name: 'Rock Howard',
  hits: 0,
  isAlive: true,
  hitState: ['blocking', 'counterhit', 'guardbreak'],
  animation: ['assets/rock-idle.gif', 'assets/rock-fall.gif'],
}
let player = {
  health: 100,
  name: 'Terry Bogard',
  hits: 0,
  isAlive: true,
  hitState: ['blocking', 'counterhit', 'guardbreak'],
  animation: ['assets/terry-idle.gif', 'assets/terry-punch.gif', 'assets/terry-kick.gif', 'assets/terry-burnKnuckle.gif', 'assets/terry-win3.gif'],
  animationHeight: ['140px', , , , '280px'],
  animationLeft: ['150px', , , , '120px'],
}

drawUI()

function punch() {
  //document.getElementById('terry-sprite').setAttribute('src', player.animation[1]); 
  dummy.health--;
  dummy.hits++;
  drawUI();
}

function kick() {
  //document.getElementById('terry-sprite').setAttribute('src', player.animation[2]);
  dummy.health = dummy.health - 5;
  dummy.hits++;
  drawUI();
}

function burnKnuckle() {
  //document.getElementById('terry-sprite').setAttribute('src', player.animation[3]);
  dummy.health = dummy.health - 10;
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
  drawUI();
}
