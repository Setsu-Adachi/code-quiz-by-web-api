// A start button that when clicked a timer starts and the first question appears.


// id submit
var startBtn = document.getElementById("start");
var timeSpan = document.getElementById("time");
var timeLeft = 3

// Click the start button
function startQuiz() {
    timeSpan.textContent = timeLeft
    timer()
}
// startBtn.onclick = startQuiz;

// timer // The timer starts and I am presented with a question
function timer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeSpan.textContent = timeLeft;
    }, 1000);
    if (timeLeft <= 0) {
        clearInterval(timerInterval)
    }
}


// display Question 1 // function getQuestion()
// Questions contain buttons for each answer.
// 3-4 buttons 


function getQuestion() {
    var currentQuestion = questions[questions];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
}


// When answer is clicked, the next question appears
// check the answer is correct or not

function questionClick() {
    if (this.value == currentQuestion.answer) {
        time >= 0;

    }
    feedbackEl.textContent = "Correct!"; {
    // else (this.value !== currentQuestion.answer)
    //         feedbackEl.textContent = "Wrong";
    //     }
    }


    // If the answer clicked was incorrect then subtract time from the clock


    // The quiz should end when all questions are answered or the timer reaches 0.

    function quizEnd() {
        clearInterval(timerId);
    }

    // When the game ends, it should display their score and give the user the ability to save their initials and their score

    function displayHighscore() {
        var initials = initialsEl.value;
}

    //NOTE:
    // Need Function to dicrease the timer. ( TimeSpan...)


    // Check to see the time is = 0 to stop quiz


    clearInterval(timerId);
    if (time <= 0) {
        quizEnd();
    }


    // Func next question

    currentQuestion++;

    // 
    //get the high score

    function getHighscore() {
        var initials = initialsEl();
    }
}