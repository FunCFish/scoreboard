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

//color buttons
var color1 = new Boolean(true);
var color2 = new Boolean(false);

document.getElementById("team1b").style.backgroundColor = "#0d6efd";
document.getElementById("team1b").style.borderColor = "#0d6efd";
document.getElementById("team1b").style.color = "white";
document.getElementById("team2b").style.backgroundColor = "transparent";
document.getElementById("team2b").style.color = "black";
document.getElementById("team2b").style.borderColor = "gray";

$('#team1b').click(function() {
    color1 = Boolean(true);
    color2 = Boolean(false)
        document.getElementById("team1b").style.backgroundColor = "#0d6efd";
        document.getElementById("team1b").style.borderColor = "#0d6efd";
        document.getElementById("team1b").style.color = "white";
        document.getElementById("team2b").style.backgroundColor = "transparent";
        document.getElementById("team2b").style.color = "black";
        document.getElementById("team2b").style.borderColor = "gray";
})

$('#team2b').click(function() {
    color1 = Boolean(false)
    color2 = Boolean(true)
        document.getElementById("team2b").style.backgroundColor = "#0d6efd";
        document.getElementById("team2b").style.borderColor = "#0d6efd";
        document.getElementById("team2b").style.color = "white";
        document.getElementById("team1b").style.backgroundColor = "transparent";
        document.getElementById("team1b").style.color = "black";
        document.getElementById("team1b").style.borderColor = "gray";
})


//coloring blue

$('#cblue').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#0d6efd";
    document.getElementById("blue").style.borderColor = "#0d6efd";
}});

$('#purple').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "purple";
    document.getElementById("blue").style.borderColor = "purple";
}});

$('#pink').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "hotpink";
    document.getElementById("blue").style.borderColor = "hotpink";
}});

$('#cred').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#dc3545";
    document.getElementById("blue").style.borderColor = "#dc3545";
}})

$('#orange').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "darkorange";
    document.getElementById("blue").style.borderColor = "darkorange";
}})

$('#yellow').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#ffc107";
    document.getElementById("blue").style.borderColor = "#ffc107";
}});

$('#lime').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "lime";
    document.getElementById("blue").style.borderColor = "lime";
}})

$('#green').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#198754";
    document.getElementById("blue").style.borderColor = "#198754";
}})

$('#gray').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "gray";
    document.getElementById("blue").style.borderColor = "gray";
}})

$('#dark').click(function() {
    if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "black";
    document.getElementById("blue").style.borderColor = "black";
}})

//coloring red

$('#cblue').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#0d6efd";
    document.getElementById("red").style.borderColor = "#0d6efd";
}});

$('#purple').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "purple";
    document.getElementById("red").style.borderColor = "purple";
}});

$('#pink').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "hotpink";
    document.getElementById("red").style.borderColor = "hotpink";
}});

$('#cred').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#dc3545";
    document.getElementById("red").style.borderColor = "#dc3545";
}})

$('#orange').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "darkorange";
    document.getElementById("red").style.borderColor = "darkorange";
}})

$('#yellow').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#ffc107";
    document.getElementById("red").style.borderColor = "#ffc107";
}});

$('#lime').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "lime";
    document.getElementById("red").style.borderColor = "lime";
}})

$('#green').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#198754";
    document.getElementById("red").style.borderColor = "#198754";
}})

$('#gray').click(function() {
    if (color1 == true) {
    document.getElementById("red").style.backgroundColor = "gray";
    document.getElementById("red").style.borderColor = "gray";
}})

$('#dark').click(function() {
    if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "black";
    document.getElementById("red").style.borderColor = "black";
}})