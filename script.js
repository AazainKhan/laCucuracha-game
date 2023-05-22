/*
        Author: Aazain Khan
        Date: March 28, 2023
*/

var bug = document.getElementById('bug');
var playArea = document.getElementById('play-area');
var scoreSection = document.getElementById('scoreSection');
var resetScore = document.getElementById('resetScore');
var score = parseInt(scoreSection.innerText.slice(-1));
var time = 1800;
var interval = setInterval(setPosition, time);


window.addEventListener("load", setupPage);
function setupPage() {
    setPosition();
}

bug.addEventListener('click', addScore);
function addScore() {
    clearInterval(interval);
    time -= 100;
    interval = setInterval(setPosition, time);
    score++;
    scoreSection.innerText = "SCORE: " + score.toString();
    bug.style.visibility = "hidden";
}

resetScore.addEventListener('click', resetScoreToZero);
function resetScoreToZero() {
    score = 0;
    scoreSection.innerText = "SCORE: " + score.toString();
    resetSpeedToOriginal();
}

function setPosition() {
    var top = Math.floor(Math.random() * (playArea.clientHeight - bug.clientHeight));
    var left = Math.floor(Math.random() * (playArea.clientWidth - bug.clientHeight));
    bug.style.marginTop = top + "px";
    bug.style.marginLeft = left + "px";
    bug.style.visibility = "visible";
}

resetSpeed.addEventListener('click', resetSpeedToOriginal);
function resetSpeedToOriginal() {
    clearInterval(interval);
    time = 1300;
    interval = setInterval(setPosition, time);
}

