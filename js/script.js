jQuery(document).ready(function($){
    $('.letter').click(function(event) {
        alert($(this).html());
    });

    $('.letter').on( "mayus", function( event) {
        $(this).html($(this).html().toUpperCase())
    });

    $('.letter').on( "minus", function( event) {
        $(this).html($(this).html().toLowerCase())
    });

});



var key = $('.key'), x = 0, y = 0, x1 = 0, y2 = 0, time = 0, keypulse = "", keyresp = "", mayus = false;

var ball   = document.querySelector('#ball');
var keyboard = document.querySelector('.keyboard');

var maxX = keyboard.clientWidth  - ball.clientWidth;
var maxY = keyboard.clientHeight - ball.clientHeight;

function handleOrientation(event) {
    if ((event.beta > x1) && ( x < 300 )) {
        x +=  5;
    }else if ( x > 50){
        x -= 5;
    }

    if ((event.gamma > y2) && ( y < 800)) {
        y +=  5;
    }else if ( y > 50){
        y -= 5;
    }

    ball.style.top  = x + "px";
    ball.style.left = y + "px";
    x1 = event.beta;
    y2 = event.gamma;

    var collides = key.overlaps('#ball');
    $('#ball')[collides.hits.length ? 'addClass' : 'removeClass']('over');
    key.removeClass('under');
    $(collides.targets).addClass('under');
    keypulse = "";
    keypulse = $(collides.targets).html();

    if ((keypulse != "") && (keypulse != undefined)) {
        keyresp = keypulse;
    }
}

window.addEventListener('deviceorientation', handleOrientation);
setTimeout("temporizador()", 2000);
function temporizador(){
    if (keyresp == keypulse) {
        switch (keypulse) {
            //mayus
            case "↑":{
                if (mayus) {
                    $('.letter').trigger("mayus");
                } else {
                    $('.letter').trigger("minus");
                }
                mayus = !mayus;
                break;
            }

            //backspace
            case "←":{
                var str = $('#input').val();
                str = str.substring(0, str.length);
                $('#input').val(str);
                break;
            }

            //enter
            case "↵":{

                break;
            }

            default:{
                var str = $('#input').val();
                str += keyresp;
                $('#input').val(str);
            }
        }
    }
    setTimeout("temporizador()", 2000);
}
