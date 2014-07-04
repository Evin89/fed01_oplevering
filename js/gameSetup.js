var interval = null;
$(document).ready(function () {
    $('#startBtn')
        .one('click', showStory)
//        .one('click', showClassField)
        .one('click', showField);
    $('#classField').on('click', '.char', setClass);
});

var $playField = $('#playField');
var enemyBlock = '<div class="enemy"></div>';

function showStory(e) {
    e.preventDefault();

    var naam = $('#name').val(),
        txt = "Welkom " + naam + "! Blijkbaar wil jij je krachten meten in de arena! ",
        $el = $('#storyField'),
        txtLen = txt.length,
        timeOut,
        char = 0;

    $el.text('|');

    (function typeIt() {
        var tellStory = Math.round(Math.random() * (200 - 30)) + 30;
        timeOut = setTimeout(function () {
            char++;
            var type = txt.substring(0, char);

            $el.text(type + '|');

            typeIt();
            if (char == txtLen) {
                $el.text($el.text().slice(0, -1)); // remove the '|'
                clearTimeout(timeOut);

            }
        }, tellStory);
    }());

}

//function showClassField() {
//    $('#classField')
//        .append(
//            '<div class="class">' +
//                '<h1>Kies je klasse</h1>' +
//                '<div class="char dwarf">' +
//                '<img src="images/dwarf.png" class="dwarf"/>' +
//                '</div>' +
//                '</div>')
//}

function setClass() {
    console.log('er is op een klas geklikt');
}

function showField() {
    $('#playField').show("slow", addPlayer);
}

function addPlayer() {
    $playField
        .append('<div id="player">' + '</div>');

    addEnemies();
}

var enemies =  setInterval(function addEnemies(){

    $playField.append(enemyBlock);

    var $enemy =  $('#playField').children('div.enemy');

    var min = 0;
    var max = 30;
//    var rand = Math.floor(Math.random()*(max-min)*20+min);
    var rand = Math.floor(Math.random() * 20) * 20;
    console.log(rand);
    $enemy.css('left', rand);

    moveEnemy($enemy);

}, 5000);

function moveEnemy($enemy) {
    console.log('enemies closing in on the goal!');

    var $player = $playField.children('div#player');

    $player.css('background-color', 'yellow');

    $enemy.animate({
        top: "+=500"
//        height: "25px"
    }, 10000, function () {
        var $enemyX = $enemy.position().left;
        var $enemyY = $enemy.position().top;
        var $playerY = $player.position().top;
        var $playerX = $player.position().left;

        console.log('$enemyX= ' + $enemyX, '$enemyY= ' + $enemyY);
        console.log('playerX= ' + $playerX, 'playerY= ' + $playerY);

        if ($enemyX == ($playerX + 280)) {
            console.log('!BOOOM!');

            $enemy.remove();
        } else {
            $enemy.animate({
                top: "+=50"
            });
            $enemy.remove();
        }
    });


//    if ($enemy.position = $player.position){
//        console.log('!BOOOM!');
//    }
}

//function checkPosition ($enemy){
//
//}

