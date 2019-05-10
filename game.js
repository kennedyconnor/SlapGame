let health = 100;

drawHealth()

function punch() {
  health--;
  drawHealth();
}

function kick() {
  health = health - 5;
  drawHealth();
}

function burnKnuckle() {
  health = health - 10;
  drawHealth();
}

function drawHealth() {
  document.getElementById('health').innerText = 'Rock Health: ' + health;
}