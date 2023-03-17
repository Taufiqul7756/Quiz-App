const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions = document.querySelector(".Questions");
const option_list = document.querySelector(".MyOptions");
const timeCount = document.querySelector(".TimeCount .Seconds");
const timeLine = document.querySelector(".QuestionsHeader .time_lines");
const timeOff = document.querySelector(".QuestionsHeader .TimeLeft");

MyBtn.onclick = () => {
  RulesBox.classList.add("activeInfo");
  console.log("clicked");
};
exitButton.onclick = () => {
  RulesBox.classList.remove("activeInfo");
};

ContinueButton.onclick = () => {
  RulesBox.classList.remove("activeInfo");
  Questions.classList.add("activeQuiz");
  showQuestions(0);
  startTimer(15);

  startTimerLine(0);
};

function startTimerLine(time) {
  counterLine = setInterval(timer, 50);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 319) {
      clearInterval(counterLine);
    }
  }
}
