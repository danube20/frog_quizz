function printQuizz() {
  let questionInfo = "2+2";
  let answer1Info = "1";
  let answer2Info = "2";
  let answer3Info = "4";
  let correctAnswer = "4";
  let question = document.querySelector("#question");
  let answer1 = document.querySelector("#answer1");
  let answer2 = document.querySelector("#answer2");
  let answer3 = document.querySelector("#answer3");
  let answer1Text = document.querySelector("#answer1Text");
  let answer2Text = document.querySelector("#answer2Text");
  let answer3Text = document.querySelector("#answer3Text");

  question.innerText = questionInfo;
  answer1Text.innerText = answer1Info;
  answer2Text.innerText = answer2Info;
  answer3Text.innerText = answer3Info;
}

function skipQuestion(event) {
  const quizzBox = document.querySelector("#quizz-box");
  quizzBox.style.visibility = "hidden";
  Game.quizzScore -= 1;
  Game.atQuizz = false;
  printScore();

}

window.addEventListener("load", () => {
  const skipButton = document.querySelector("#skip-button");
  skipButton.addEventListener("click", skipQuestion);
});

function printScore() {
  let legendInfo = document.querySelector("#quizz-legend-text");
  legendInfo.innerText = `= ${Game.quizzScore}`;
}
