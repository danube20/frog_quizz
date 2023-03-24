let infoArray = [
  ["Cuántos elementos forman la tabla periódica?", "118", "210", "94", "118"],
  [
    "¿De qué país es originario el queso brie?",
    "España",
    "Francia",
    "Turquía",
    "Francia",
  ],
  [
    "¿Qué fruto seco lleva en su interior un Ferrero Rocher?",
    "Almendra",
    "Anacardo",
    "Avellana",
    "Avellana",
  ],
  [
    "¿Qué planeta es el que se encuentra más cerca del sol?",
    "Marte",
    "Aries",
    "Mercurio",
    "Mercurio",
  ],
];

let mathsArray = [
  [
    "mathsCuántos elementos forman la tabla periódica?",
    "118",
    "210",
    "94",
    "118",
  ],
  [
    "maths¿De qué país es originario el queso brie?",
    "España",
    "Francia",
    "Turquía",
    "Francia",
  ],
  [
    "maths¿Qué fruto seco lleva en su interior un Ferrero Rocher?",
    "Almendra",
    "Anacardo",
    "Avellana",
    "Avellana",
  ],
  [
    "maths¿Qué planeta es el que se encuentra más cerca del sol?",
    "Marte",
    "Aries",
    "Mercurio",
    "Mercurio",
  ],
];

let geoArray = [
  [
    "geoCuántos elementos forman la tabla periódica?",
    "118",
    "210",
    "94",
    "118",
  ],
  [
    "geo¿De qué país es originario el queso brie?",
    "España",
    "Francia",
    "Turquía",
    "Francia",
  ],
  [
    "geo¿Qué fruto seco lleva en su interior un Ferrero Rocher?",
    "Almendra",
    "Anacardo",
    "Avellana",
    "Avellana",
  ],
  [
    "geo¿Qué planeta es el que se encuentra más cerca del sol?",
    "Marte",
    "Aries",
    "Mercurio",
    "Mercurio",
  ],
];

let musicArray = [
  [
    "musicCuántos elementos forman la tabla periódica?",
    "118",
    "210",
    "94",
    "118",
  ],
  [
    "music¿De qué país es originario el queso brie?",
    "España",
    "Francia",
    "Turquía",
    "Francia",
  ],
  [
    "music¿Qué fruto seco lleva en su interior un Ferrero Rocher?",
    "Almendra",
    "Anacardo",
    "Avellana",
    "Avellana",
  ],
  [
    "music¿Qué planeta es el que se encuentra más cerca del sol?",
    "Marte",
    "Aries",
    "Mercurio",
    "Mercurio",
  ],
];

let randomIndex = undefined;
let questionInfo = undefined;
let answer1Info = undefined;
let answer2Info = undefined;
let answer3Info = undefined;
let correctAnswer = undefined;
let answer1 = undefined;
let answer2 = undefined;
let answer3 = undefined;
const quizzBox = document.querySelector("#quizz-box");
const skipButton = document.querySelector("#skip-button");
const submitButton = document.querySelector("#submit-button");
const continueButton = document.querySelector("#continue-button");
const correctMessage = document.querySelector("#correct-answer-message");
const wrongMessage = document.querySelector("#wrong-answer-message");

function printQuizz() {
  if (Game.currentLevel === 1) {
    randomIndex = Math.floor(Math.random() * infoArray.length);
    questionInfo = infoArray[randomIndex][0];
    answer1Info = infoArray[randomIndex][1];
    answer2Info = infoArray[randomIndex][2];
    answer3Info = infoArray[randomIndex][3];
    correctAnswer = infoArray[randomIndex][4];
    // console.log(`correct: ${correctAnswer}`);

    let question = document.querySelector("#question");
    answer1 = document.querySelector("#answer1");
    answer2 = document.querySelector("#answer2");
    answer3 = document.querySelector("#answer3");
    let answer1Text = document.querySelector("#answer1Text");
    let answer2Text = document.querySelector("#answer2Text");
    let answer3Text = document.querySelector("#answer3Text");

    question.innerText = questionInfo;
    answer1Text.innerText = answer1Info;
    answer2Text.innerText = answer2Info;
    answer3Text.innerText = answer3Info;
  }

  if (Game.currentLevel === 2) {
    if (Game.mathQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * infoArray.length);
      questionInfo = mathsArray[randomIndex][0];
      answer1Info = mathsArray[randomIndex][1];
      answer2Info = mathsArray[randomIndex][2];
      answer3Info = mathsArray[randomIndex][3];
      correctAnswer = mathsArray[randomIndex][4];
      // console.log(`correct: ${correctAnswer}`);

      let question = document.querySelector("#question");
      answer1 = document.querySelector("#answer1");
      answer2 = document.querySelector("#answer2");
      answer3 = document.querySelector("#answer3");
      let answer1Text = document.querySelector("#answer1Text");
      let answer2Text = document.querySelector("#answer2Text");
      let answer3Text = document.querySelector("#answer3Text");

      question.innerText = questionInfo;
      answer1Text.innerText = answer1Info;
      answer2Text.innerText = answer2Info;
      answer3Text.innerText = answer3Info;
    } else if (Game.geoQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * infoArray.length);
      questionInfo = geoArray[randomIndex][0];
      answer1Info = geoArray[randomIndex][1];
      answer2Info = geoArray[randomIndex][2];
      answer3Info = geoArray[randomIndex][3];
      correctAnswer = geoArray[randomIndex][4];
      // console.log(`correct: ${correctAnswer}`);

      let question = document.querySelector("#question");
      answer1 = document.querySelector("#answer1");
      answer2 = document.querySelector("#answer2");
      answer3 = document.querySelector("#answer3");
      let answer1Text = document.querySelector("#answer1Text");
      let answer2Text = document.querySelector("#answer2Text");
      let answer3Text = document.querySelector("#answer3Text");

      question.innerText = questionInfo;
      answer1Text.innerText = answer1Info;
      answer2Text.innerText = answer2Info;
      answer3Text.innerText = answer3Info;
    } else if (Game.musicQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * infoArray.length);
      questionInfo = musicArray[randomIndex][0];
      answer1Info = musicArray[randomIndex][1];
      answer2Info = musicArray[randomIndex][2];
      answer3Info = musicArray[randomIndex][3];
      correctAnswer = musicArray[randomIndex][4];
      // console.log(`correct: ${correctAnswer}`);

      let question = document.querySelector("#question");
      answer1 = document.querySelector("#answer1");
      answer2 = document.querySelector("#answer2");
      answer3 = document.querySelector("#answer3");
      let answer1Text = document.querySelector("#answer1Text");
      let answer2Text = document.querySelector("#answer2Text");
      let answer3Text = document.querySelector("#answer3Text");

      question.innerText = questionInfo;
      answer1Text.innerText = answer1Info;
      answer2Text.innerText = answer2Info;
      answer3Text.innerText = answer3Info;
    }
  }
}

function skipQuestion(event) {
  quizzBox.style.visibility = "hidden";
  Game.atQuizz = false;
  printScore();

  continueButton.style.visibility = "hidden";
  skipButton.style.visibility = "hidden";
  submitButton.style.visibility = "hidden";
  if (Game.notEnoughQuizz === true) {
    Game.gameOver();
  }
}

function continueGame() {
  Game.atQuizz = false;
  quizzBox.style.visibility = "hidden";
  continueButton.style.visibility = "hidden";
  correctMessage.style.visibility = "hidden";
  wrongMessage.style.visibility = "hidden";
}

window.addEventListener("load", () => {
  skipButton.addEventListener("click", skipQuestion);
  submitButton.addEventListener("click", getResult);
  continueButton.addEventListener("click", continueGame);
});

function printScore() {
  let legendInfo = document.querySelector("#quizz-legend-text");
  legendInfo.innerText = `= ${Game.quizzScore} preguntas`;
}

function getResult(event) {
  event.preventDefault();
  skipButton.style.visibility = "hidden";
  submitButton.style.visibility = "hidden";
  continueButton.style.visibility = "visible";
  if (answer1.checked && answer1Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    Game.quizzScore--;
    printScore();
  } else if (answer2.checked && answer2Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    Game.quizzScore--;
    printScore();
  } else if (answer3.checked && answer3Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    Game.quizzScore--;
    printScore();
  } else {
    document.querySelector("#wrong-answer-message").style.visibility =
      "visible";
    Game.lifes--;
  }
}
