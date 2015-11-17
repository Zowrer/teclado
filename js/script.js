var box = '#ball', drag = $('.ball'), drop = $('.key');

var x=0;
var y=0;

var x1=0;
var y2=0;

var ball   = document.querySelector('#ball');
var garden = document.querySelector('.keyboard');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {


  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if ((event.beta >  x1) && ( x< 300 )) { x+=  5}
  else
	if (x >50)
		{ x -=5};

  if ((event.gamma >  y2) && (y< 800)) { y+=  5}
  else
	if (y > 50)
	{ y -= 5};

  // To make computation easier we shift the range of
  // // x and y to [0,180]
  // x += 90;
  // y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = x + "px";
  ball.style.left = y + "px";

   x1 = event.beta;
   y2 = event.gamma;

  /*** :plugin specific code ***/

  var collides = drop.overlaps(box);
  $(box)[collides.hits.length ? 'addClass' : 'removeClass']('over');
  drop.removeClass('under');
  $(collides.targets).addClass('under');
  /*** plugin specific code: ***/
}

window.addEventListener('deviceorientation', handleOrientation);
