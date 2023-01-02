function test() {
  console.log("testing");
}

//reset button

$("#reset").click(function () {
  scoreB = 0;
  scoreR = 0;
  document.getElementById("redP").innerHTML = scoreR;
  document.getElementById("blueP").innerHTML = scoreB;
  save();
});

//main scoreboard
var scoreB = +localStorage.getItem("score1");
var scoreR = +localStorage.getItem("score2");
document.getElementById("blueP").innerHTML = scoreB;
document.getElementById("redP").innerHTML = scoreR;

$("#blue").click(function () {
  scoreB = scoreB + 1;
  document.getElementById("blueP").innerHTML = scoreB;
  save();
});

$("#red").click(function () {
  scoreR = scoreR + 1;
  document.getElementById("redP").innerHTML = scoreR;
  save();
});

//-1 buttons

$("#-B").click(function () {
  scoreB = scoreB - 1;
  document.getElementById("blueP").innerHTML = scoreB;
  if (scoreB < 0) {
    scoreB = 0;
  }
  document.getElementById("blueP").innerHTML = scoreB;
});

$("#-R").click(function () {
  scoreR = scoreR - 1;
  document.getElementById("redP").innerHTML = scoreR;
  if (scoreR < 0) {
    scoreR = 0;
  }
  document.getElementById("redP").innerHTML = scoreR;
});

//full screen

$("#fullScreen").click(function () {
  console.log("fullscreen");
});

//color buttons
var color1 = new Boolean(true);
var color2 = new Boolean(false);
var colorT1;
var colorT2;

if (localStorage.getItem("colorT1") == null) {
  colorT1 = "#0d6efd";
  save();
}

if (localStorage.getItem("colorT2") == null) {
  colorT2 = "#dc3545";
  save();
}

document.getElementById("team1b").style.backgroundColor = "#0d6efd";
document.getElementById("team1b").style.borderColor = "#0d6efd";
document.getElementById("team1b").style.color = "white";
document.getElementById("team2b").style.backgroundColor = "transparent";
document.getElementById("team2b").style.color = "black";
document.getElementById("team2b").style.borderColor = "gray";

$("#team1b").click(function () {
  color1 = Boolean(true);
  color2 = Boolean(false);
  document.getElementById("team1b").style.backgroundColor = "#0d6efd";
  document.getElementById("team1b").style.borderColor = "#0d6efd";
  document.getElementById("team1b").style.color = "white";
  document.getElementById("team2b").style.backgroundColor = "transparent";
  document.getElementById("team2b").style.color = "black";
  document.getElementById("team2b").style.borderColor = "gray";
});

$("#team2b").click(function () {
  color1 = Boolean(false);
  color2 = Boolean(true);
  document.getElementById("team2b").style.backgroundColor = "#0d6efd";
  document.getElementById("team2b").style.borderColor = "#0d6efd";
  document.getElementById("team2b").style.color = "white";
  document.getElementById("team1b").style.backgroundColor = "transparent";
  document.getElementById("team1b").style.color = "black";
  document.getElementById("team1b").style.borderColor = "gray";
});

$("#resetTeamColorB").click(function () {
  document.getElementById("blue").style.backgroundColor = "#0d6efd";
  document.getElementById("blue").style.borderColor = "#0d6efd";
  document.getElementById("red").style.backgroundColor = "#dc3545";
  document.getElementById("red").style.borderColor = "#dc3545";
  colorT1 = "#0d6efd";
  colorT2 = "#dc3545";
  save();
});

//coloring blue

$("#cblue").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#0d6efd";
    document.getElementById("blue").style.borderColor = "#0d6efd";
    colorT1 = "#0d6efd";
    save();
  }
});

$("#purple").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "purple";
    document.getElementById("blue").style.borderColor = "purple";
    colorT1 = "purple";
    save();
  }
});

$("#pink").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "hotpink";
    document.getElementById("blue").style.borderColor = "hotpink";
    colorT1 = "hotpink";
    save();
  }
});

$("#cred").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#dc3545";
    document.getElementById("blue").style.borderColor = "#dc3545";
    colorT1 = "#dc3545";
    save();
  }
});

$("#orange").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "darkorange";
    document.getElementById("blue").style.borderColor = "darkorange";
    colorT1 = "darkorange";
    save();
  }
});

$("#yellow").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#ffc107";
    document.getElementById("blue").style.borderColor = "#ffc107";
    colorT1 = "#ffc107";
    save();
  }
});

$("#lime").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "lime";
    document.getElementById("blue").style.borderColor = "lime";
    colorT1 = "lime";
    save();
  }
});

$("#green").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "#198754";
    document.getElementById("blue").style.borderColor = "#198754";
    colorT1 = "#198754";
    save();
  }
});

$("#gray").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "gray";
    document.getElementById("blue").style.borderColor = "gray";
    colorT1 = "gray";
    save();
  }
});

$("#dark").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "black";
    document.getElementById("blue").style.borderColor = "black";
    colorT1 = "black";
    save();
  }
});

$("#brown").click(function () {
  flip = 0;
  document.getElementById("picker").style.display = "none";
  if (color1 == true) {
    document.getElementById("blue").style.backgroundColor = "brown";
    document.getElementById("blue").style.borderColor = "brown";
    colorT1 = "brown";
    save();
  }
});

//coloring red

$("#cblue").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#0d6efd";
    document.getElementById("red").style.borderColor = "#0d6efd";
    colorT2 = "#0d6efd";
    save();
  }
});

$("#purple").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "purple";
    document.getElementById("red").style.borderColor = "purple";
    colorT2 = "purple";
    save();
  }
});

$("#pink").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "hotpink";
    document.getElementById("red").style.borderColor = "hotpink";
    colorT2 = "hotpink";
    save();
  }
});

$("#cred").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#dc3545";
    document.getElementById("red").style.borderColor = "#dc3545";
    colorT2 = "#dc3545";
    save();
  }
});

$("#orange").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "darkorange";
    document.getElementById("red").style.borderColor = "darkorange";
    colorT2 = "darkorange";
    save();
  }
});

$("#yellow").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#ffc107";
    document.getElementById("red").style.borderColor = "#ffc107";
    colorT2 = "#ffc107";
    save();
  }
});

$("#lime").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "lime";
    document.getElementById("red").style.borderColor = "lime";
    colorT2 = "lime";
    save();
  }
});

$("#green").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "#198754";
    document.getElementById("red").style.borderColor = "#198754";
    colorT2 = "#198754";
    save();
  }
});

$("#gray").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "gray";
    document.getElementById("red").style.borderColor = "gray";
    colorT2 = "gray";
    save();
  }
});

$("#dark").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "black";
    document.getElementById("red").style.borderColor = "black";
    colorT2 = "black";
    save();
  }
});

$("#brown").click(function () {
  if (color2 == true) {
    document.getElementById("red").style.backgroundColor = "brown";
    document.getElementById("red").style.borderColor = "brown";
    colorT2 = "brown";
    save();
  }
});

//custom button

var flip = 0;

$("#custom").click(function () {
  if (flip == 0) {
    document.getElementById("picker").style.display = "block";
    flip = 1;
  } else {
    document.getElementById("picker").style.display = "none";
    flip = 0;
  }
});

//saving colors

function save() {
  localStorage.setItem("colorT1", colorT1);
  localStorage.setItem("colorT2", colorT2);
  localStorage.setItem("score1", scoreB);
  localStorage.setItem("score2", scoreR);
  console.log(scoreB, scoreR);
}
