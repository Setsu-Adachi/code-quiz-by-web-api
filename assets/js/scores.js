function printHighscores () {
    var finalScores = JSON.parse(window.localStorage.getItem("Highscores"))
}






function clearHighscore() {
window.localStorage.removeItem("Highscores")
}

document.getElementById("#clear").onclick = clearHighscore;
