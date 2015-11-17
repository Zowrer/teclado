var box = '#ball', drag = $('.drag'), drop = $('.key');

var ball   = document.querySelector('#ball');
var garden = document.querySelector('.keyboard');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;
  var y = event.gamma;

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";

  /*** :plugin specific code ***/

  var collides = drop.overlaps(box);
  $(box)[collides.hits.length ? 'addClass' : 'removeClass']('over');
  drop.removeClass('under');
  $(collides.targets).addClass('under');
  /*** plugin specific code: ***/
}

window.addEventListener('deviceorientation', handleOrientation);
