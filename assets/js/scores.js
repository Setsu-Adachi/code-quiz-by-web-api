var finalScore = document.getElementById("final-score");
var highscores = document.getElementById("highscores");



function printHighscores () {
    var finalScores = JSON.parse(window.localStorage.getItem("Highscores"))
}






function clearHighscore() {
    var clearHighscore = document.getElementById("clear").onclick
window.localStorage.removeItem("Highscores")
}

