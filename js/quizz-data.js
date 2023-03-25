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
  [
    "¿Cuál es la lengua más hablada del mundo?",
    "Español",
    "Chino mandarín",
    "Inglés",
    "Chino mandarín",
  ],
  ["¿En qué ciudad murió Lady Di?", "Londres", "Bristol", "París", "París"],
  [
    "¿Cuál es el río más largo de España?",
    "Gualdalquivir",
    "Tajo",
    "Ebro",
    "Tajo",
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
    "Qué canción suena?",
    "Physical",
    "Levitating",
    "Let's go!",
    "Levitating",
    "mp3",
    new Audio("./sounds/quizz/levitating.mp3"),
  ],
  [
    "¿Qué canción suena?",
    "Yellow Submarine",
    "Help",
    "Don't stop me now",
    "Yellow Submarine",
    "mp3",
    new Audio("./sounds/quizz/yellowsubmarine.mp3"),
  ],
  [
    "¿Qué canción suena?",
    "Titanic",
    "I will always love you",
    "My heart will go on",
    "My heart will go on",
    "mp3",
    new Audio("./sounds/quizz/titanic.mp3"),
  ],
  [
    "¿De quién es la canción Hey Jude?",
    "Los Beatles",
    "Rolling Stones",
    "Michael Jackson",
    "Los Beatles",
  ],
];

let dataForMp3Array = [
  [
    "Qué canción suena?",
    "Physical",
    "Levitating",
    "Let's go!",
    "Levitating",
    "mp3",
    new Audio("./sounds/quizz/levitating.mp3"),
  ],
  [
    "¿Qué canción suena?",
    "Yellow Submarine",
    "Help",
    "Don't stop me now",
    "Yellow Submarine",
    "mp3",
    new Audio("./sounds/quizz/yellowsubmarine.mp3"),
  ],
  [
    "¿Qué canción suena?",
    "Titanic",
    "I will always love you",
    "My heart will go on",
    "My heart will go on",
    "mp3",
    new Audio("./sounds/quizz/titanic.mp3"),
  ],
];

let quizzAudio = undefined;
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
const cantSkipMessage = document.querySelector("#cant-skip-message");

// function adaptateMusicArray() {
//   if (Game.playing === false) {
//     for (let i = 0; i <= musicArray.length; i++) {
//       let arrayChecked = musicArray[i];
//       for (let j = 0; j <= arrayChecked.length; j++) {
//         if (musicArray[i][j] === "mp3") {
//           musicArray.splice(i, 1);
//         }
//       }
//     }
//   } else if (Game.playing === true) {
//     for (let i = 0; i <= dataForMp3Array.length; i++)
//       if (!musicArray.includes(dataForMp3Array[i])) {
//         musicArray.push(dataForMp3Array[i]);
//       }
//   }
// }

// musicArray.forEach((question, i) => {
//   if (question.includes("mp3")) {
//     musicArray.splice(i, 1);
// }
// });

// else if (Game.playing === true) {
//   for (let i = 0; i <= dataForMp3Array.length; i++) {
//     if (!musicArray.includes(dataForMp3Array[i])) {
//       musicArray.push(dataForMp3Array[i]);
//     }
//   }
// }

function printQuizz() {
  lastQuestion();
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
    infoArray.splice(randomIndex, 1);
  }

  if (Game.currentLevel === 2) {
    if (Game.mathQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * mathsArray.length);
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
      mathsArray.splice(randomIndex, 1);
    } else if (Game.geoQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * geoArray.length);
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
      geoArray.splice(randomIndex, 1);
    } else if (Game.musicQuizzCollision()) {
      randomIndex = Math.floor(Math.random() * musicArray.length);
      questionInfo = musicArray[randomIndex][0];
      answer1Info = musicArray[randomIndex][1];
      answer2Info = musicArray[randomIndex][2];
      answer3Info = musicArray[randomIndex][3];
      correctAnswer = musicArray[randomIndex][4];
      // console.log(`correct: ${correctAnswer}`);
      if (musicArray[randomIndex].includes("mp3")) {
        quizzAudio = musicArray[randomIndex][6];
        (Game.musicQuizz = true), Game.backSound.pause();
        quizzAudio.play();
      }
    }
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
    musicArray.splice(randomIndex, 1);
  }
}

function skipQuestion(event) {
  quizzBox.style.visibility = "hidden";
  Game.atQuizz = false;
  printScore();

  continueButton.style.visibility = "hidden";
  skipButton.style.visibility = "hidden";
  submitButton.style.visibility = "hidden";
  cantSkipMessage.style.visibility = "hidden";
  if (Game.notEnoughQuizz === true) {
    Game.gameOver();
  }
}

function changeScores() {
  if (Game.currentLevel === 1) {
    Game.quizzScore--;
  } else if (Game.currentLevel === 2) {
    if (Game.typeOfQuestion === "maths" && Game.mathsScore > 0) {
      Game.mathsScore--;
    } else if (Game.typeOfQuestion === "geo" && Game.geoScore > 0) {
      Game.geoScore--;
    } else if (Game.typeOfQuestion === "music" && Game.musicScore > 0) {
      Game.musicScore--;
    }
  }
}
function continueGame() {
  if (Game.currentLevel === 1) {
    Game.atQuizz = false;
    quizzBox.style.visibility = "hidden";
    continueButton.style.visibility = "hidden";
    correctMessage.style.visibility = "hidden";
    wrongMessage.style.visibility = "hidden";
    cantSkipMessage.style.visibility = "hidden";
  } else if (Game.currentLevel === 2 && Game.musicQuizz === true) {
    quizzAudio.pause();
    Game.backSound.play();
    Game.atQuizz = false;
    quizzBox.style.visibility = "hidden";
    continueButton.style.visibility = "hidden";
    correctMessage.style.visibility = "hidden";
    wrongMessage.style.visibility = "hidden";
    cantSkipMessage.style.visibility = "hidden";
    Game.musicQuizz = false;
  }
}

window.addEventListener("load", () => {
  skipButton.addEventListener("click", skipQuestion);
  submitButton.addEventListener("click", getResult);
  continueButton.addEventListener("click", continueGame);
});

function printScore() {
  let firstLevelLegendInfo = document.querySelector(
    "#firstlevel-quizz-legend-text"
  );
  let musicLegendInfo = document.querySelector("#music-quizz-legend-text");
  let geoLegendInfo = document.querySelector("#geo-quizz-legend-text");
  let mathsLegendInfo = document.querySelector("#maths-quizz-legend-text");
  firstLevelLegendInfo.innerText = `= ${Game.quizzScore} preguntas`;
  musicLegendInfo.innerText = `= ${Game.musicScore} preguntas`;
  geoLegendInfo.innerText = `= ${Game.geoScore} preguntas`;
  mathsLegendInfo.innerText = `= ${Game.mathsScore} preguntas`;
}

function lastQuestion() {
  if (Game.currentLevel === 1) {
    if (Game.quizzScore === Game.quizzObjects.length) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
    }
  } else if (Game.currentLevel === 2) {
    if (
      Game.atQuizz === true &&
      Game.typeOfQuestion === "maths" &&
      Game.mathsScore === Game.mathQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
    } else if (
      Game.atQuizz === true &&
      Game.typeOfQuestion === "geo" &&
      Game.geoScore === Game.geoQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
    } else if (
      Game.atQuizz === true &&
      Game.typeOfQuestion === "music" &&
      Game.musicScore === Game.musicQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
    }
  }
}

function getResult(event) {
  event.preventDefault();
  skipButton.style.visibility = "hidden";
  submitButton.style.visibility = "hidden";
  continueButton.style.visibility = "visible";
  if (answer1.checked && answer1Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    changeScores();
    printScore();
  } else if (answer2.checked && answer2Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    changeScores();

    printScore();
  } else if (answer3.checked && answer3Info === correctAnswer) {
    document.querySelector("#correct-answer-message").style.visibility =
      "visible";
    changeScores();
    printScore();
  } else if (!answer1.checked && answer2.checked && answer3.checked) {
    document.querySelector("#non-answer-message").style.visibility = "visible";
  } else {
    document.querySelector("#wrong-answer-message").style.visibility =
      "visible";
    Game.lifes--;
  }
}
