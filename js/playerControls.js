$("body").keydown(function (e) {

    var $player = $("#player");

    var $playerY = $player.position().top;
    var $playerX = $player.position().left;

//    console.log('playerX= '+$playerX, 'playerY= '+$playerY);

    if (e.keyCode == 37) { // left
        console.log('left');
        if ($playerX > -280) {
            $player.animate({
                left: "-=20"
            });
        }
    }
    else if (e.keyCode >= 39) { // right
        console.log('right');
        if ($playerX < 265) {
            $player.animate({
                left: "+=20"
            });
        }
    }


});