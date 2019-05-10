let health = 100;
let pName = '';
let hits = 0;

drawUI()

function punch() {
  health--;
  hits++;
  drawUI();
}

function kick() {
  health = health - 5;
  hits++;
  drawUI();
}

function burnKnuckle() {
  health = health - 10;
  hits++;
  drawUI();
}

function drawUI() {
  if (health >= 0) {
    document.getElementById('health').innerText = 'Rock Howard: ' + health;
    document.getElementById('hits').innerText = 'Hits: ' + hits;
  }
  if (health == 0) {
    document.getElementById('rock-sprite').setAttribute('src', 'assets/rock-fall.gif');
  }

}