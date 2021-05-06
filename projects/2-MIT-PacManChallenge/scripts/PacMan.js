// pacmanPos is the PacMan image Position variable - it is set to 0 initially
var pacmanPos = 0;

// ghostPos is the Ghost Image Position variable - it is set to -250 inttialy to load out of page content
var ghostPos = -250;

var running;

//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man and Ghost need to turn around. 
let pageWidth = window.innerWidth;

//This array contains all the PacMan movement images
const pacArray = [
  ['./img/PacMan1.png', './img/PacMan2.png'],
  ['./img/PacMan3.png', './img/PacMan4.png'],
];

//This array contains all the Ghost movement images
const ghostArray = [
  ['./img/Ghost1.png', './img/Ghost2.png'],
  ['./img/Ghost3.png', './img/Ghost4.png']
];

// this variable defines what direction should characters go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which characters image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click and it runs every 100 ms. Every time it is called, it updates the PacMan and the Ghost images, positions and directions on the screen.
function Run() {
  let pacman = document.getElementById('PacMan');
  let ghost = document.getElementById('Ghost');
  let pacmanWidth = pacman.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, pacmanWidth, pacmanPos, pageWidth);
  pacman.src = pacArray[direction][focus];
  ghost.src = ghostArray[direction][focus];
  if (direction) {
    pacmanPos -= 20;
    pacman.style.left = pacmanPos + 'px';
    ghost.style.left = ghostPos + pacmanPos + 'px';
  } else {
    pacmanPos += 20;
    pacman.style.left = pacmanPos + 'px';
    ghost.style.left = ghostPos + pacmanPos + 'px';
  }
  running = setTimeout(Run,120);
}

function stopRun(){
    clearTimeout(running);
    let pacman = document.getElementById('PacMan');
    pacman.setAttribute('onclick', 'Run(); this.onclick = null;');
}

// This function determines the direction of PacMan based on screen edge detection. Ghost just Follows PacMan
function checkPageBounds(direction, pacmanWidth, pacmanPos, pageWidth) {
  if (direction === 0 && pacmanPos + pacmanWidth >= pageWidth) {
            direction = 1;
  } else if (direction === 1 && pacmanPos < 0) {
            direction = 0;
  }

  return direction;
}