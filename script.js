var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;

var isOver = false;

mineBuild();

function mineBuild() {
    var row = Math.floor(Math.random() * 6 + 1);
    var col = Math.floor(Math.random() * 6 + 1);
    mine = row + "" + col;
    p1 = (row - 1) + "" + (col - 1);
    p2 = (row - 1) + "" + col;
    p3 = (row - 1) + "" + (col + 1);
    p4 = row + "" + (col - 1);
    p5 = row + "" + (col + 1);
    p6 = (row + 1) + "" + (col - 1);
    p7 = (row + 1) + "" + col;
    p8 = (row + 1) + "" + (col + 1);

}

function userPress(cellbtn) {
    if (isOver == false) {
        var pressCell = cellbtn.id;
        if (pressCell == mine) {
            cellbtn.style.backgroundColor = "red";
            cellbtn.innerText = "BOOM";
            gameOverDisplay();
            gameOverSound();
            
        }
        else if (
            pressCell == p1 ||
            pressCell == p2 ||
            pressCell == p3 ||
            pressCell == p4 ||
            pressCell == p5 ||
            pressCell == p6 ||
            pressCell == p7 ||
            pressCell == p8
        )
         
        {
            cellbtn.style.backgroundColor = "red";
            playClick();
        } else {
            cellbtn.style.backgroundColor = "teal";
            playClick();
        }
        timePlayed();
    }
}

function playClick() {
    document.getElementById("clickSound").play();
}

function gameOverSound() {
    document.getElementById("overSound").play();
}

function gameOverDisplay() {
    isOver = true;
    for (var index = 0; index < 36; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "red";
    }
    document.getElementById("32").innerText = "G";
    document.getElementById("33").innerText = "A";
    document.getElementById("34").innerText = "M";
    document.getElementById("35").innerText = "E";

    document.getElementById("42").innerText = "O";
    document.getElementById("43").innerText = "V";
    document.getElementById("44").innerText = "E";
    document.getElementById("45").innerText = "R";
}
function gameWinDisplay() {
    for (var index = 0; index < 36; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "teal";
    }
    document.getElementById("32").innerText = "G";
    document.getElementById("33").innerText = "A";
    document.getElementById("34").innerText = "M";
    document.getElementById("35").innerText = "E";

    document.getElementById("42").innerText = "W";
    document.getElementById("43").innerText = "I";
    document.getElementById("44").innerText = "N";
}
// function timePlayed() {
//     var count = document.getElementById("timeplayed").innerText;
//     var finalcount = +count + 1;
//     console.log(count);
//     document.getElementById("timeplayed").innerText = finalcount;
//     if (finalcount == 35) {
//         gameWinDisplay();
//     }
// }
