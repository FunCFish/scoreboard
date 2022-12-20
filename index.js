//reset button

$('#reset').click(function() {
    scoreB = 0
    scoreR = 0
    document.getElementById("redP").innerHTML = scoreR;
    document.getElementById("blueP").innerHTML = scoreB;
});

//main scoreboard

var scoreR = 0
document.getElementById("redP").innerHTML = scoreR;

var scoreB = 0
document.getElementById("blueP").innerHTML = scoreB;

$('#blue').click(function() {
    scoreB = scoreB + 1
    document.getElementById("blueP").innerHTML = scoreB;
});

$('#red').click(function() {
    scoreR = scoreR + 1
    document.getElementById("redP").innerHTML = scoreR;
});

//-1 buttons

$('#-B').click(function() {
    scoreB = scoreB - 1
    document.getElementById("blueP").innerHTML = scoreB;    
    if (scoreB < 0) {scoreB = 0}
    document.getElementById("blueP").innerHTML = scoreB; 
});

$('#-R').click(function() {
    scoreR = scoreR - 1
    document.getElementById("redP").innerHTML = scoreR;
    if (scoreR < 0) {scoreR = 0}
    document.getElementById("redP").innerHTML = scoreR;
});