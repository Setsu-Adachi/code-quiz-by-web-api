// A start button that when clicked a timer starts and the first question appears.

var questionContainer = document.getElementById("questions");
// id submit
var startBtn = document.getElementById("start");
var timeSpan = document.getElementById("time");
var timeLeft = 20
var index = 0 
var choices = document.getElementById("choices");
var startScreen = document.getElementById("start-screen");

// Click the start button
function startQuiz() {
    startScreen.setAttribute("class", "hide");
    getQuestion();
    timeSpan.textContent = timeLeft
    timer()
}
startBtn.onclick = startQuiz;

// timer // The timer starts and I am presented with a question
function timer() {
    var timerInterval = setInterval(function () {
        if (timeLeft <= 1) {
            clearInterval(timerInterval)
        }
        timeLeft--;
        timeSpan.textContent = timeLeft;
    }, 1000);

}

// display Question 1 // function getQuestion()
// Questions contain buttons for each answer.
// 3-4 buttons 

function getQuestion() {
    var currentQuestion = questions[index];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.questionTitle;
    questionContainer.removeAttribute("class")
for (var i = 0; i < questions[i].choices.length; i++) {
    var button = document.createElement("button");
    button.textContent = currentQuestion.choices [i];
    choices.append(button);
}
}


// When answer is clicked, the next question appears
// check the answer is correct or not

function questionClick(event) {
    console.log(event.target.textContent);
    index ++
    choices.innerHTML = ""
    getQuestion();
    // if (this.value == currentQuestion.answer) {
    // //     time >= 0;

    // }
    // feedbackEl.textContent = "Correct!"; {
    // else (this.value !== currentQuestion.answer)
    //         feedbackEl.textContent = "Wrong";
    // //     }
    // }


    // If the answer clicked was incorrect then subtract time from the clock


    // The quiz should end when all questions are answered or the timer reaches 0.

    function quizEnd() {
        clearInterval(timerId);
    }

    // When the game ends, it should display their score and give the user the ability to save their initials and their score

    function displayHighscore() {
        var finalScore = document.getElementById("final-score");
        var initials = initialsEl.value;
}

    //NOTE:
    // Need Function to dicrease the timer. ( TimeSpan...)


    // Check to see the time is = 0 to stop quiz


    // clearInterval(timerId);
    // if (time <= 0) {
    // //     quizEnd();
    // // }


    // // Func next question

    // currentQuestion++;

    // // 
    // //get the high score

    // function getHighscore() {
    //     var initials = initialsEl();
    // }
}
choices.addEventListener("click", questionClick)