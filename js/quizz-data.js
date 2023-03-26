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
  ["¿Qué número no tiene un numérico propio", "2", "0", "94", "0"],
  [
    "¿Cómo se llama también el perímetro de un círculo",
    "Radio",
    "Arista",
    "Circunferencia",
    "Circunferencia",
  ],
  ["¿Cuántos segundos hay en un día?", "10 000", "100 000", "86 400", "86 400"],
  [
    "¿Quiénes fueron los primeros en usar números negativos?",
    "Los egipcios",
    "Los griegos",
    "Los chinos",
    "Los chinos",
  ],
  ["¿Qué número se considera un 'número mágico'?", "9", "99", "999", "9"],
  [
    "¿Qué día es el día de Pi?",
    "14 de marzo",
    "1 de enero",
    "San Fermín",
    "14 de marzo",
  ],
  [
    "¿Qué imagen se puede ver también en tres dimensiones?",
    "Un holograma",
    "Una maqueta",
    "Avatar, el sentido del agua",
    "Un holograma",
  ],
];

let geoArray = [
  [
    "¿Cuál es el país más pequeño del mundo?",
    "España",
    "Murcia",
    "Estado del Vaticano",
    "Estado del Vaticano",
  ],
  ["¿Qué país tiene más habitantes?", "Rusia", "China", "Andorra", "China"],
  [
    "¿Cuál es la montaña más alta del mundo?",
    "Monte Everest",
    "Teide",
    "Guadarrama",
    "Monte Everest",
  ],
  ["¿Cuál es el río más largo del mundo?", "Amazonas", "Nilo", "Tajo", "Nilo"],
  [
    "¿De dónde son los osos polares?",
    "Polo Norte",
    "Polo Sur",
    "Noruega",
    "Polo Norte",
  ],
  ["¿Cuántos mares existen en la Tierra?", "10", "60", "100", "60"],
  ["¿Qué río pasa por más países?", "Danubio", "Nilo", "Amazonas", "Danubio"],
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
  // [
  //   "¿De quién es la canción Hey Jude?",
  //   "Los Beatles",
  //   "Rolling Stones",
  //   "Michael Jackson",
  //   "Los Beatles",
  // ],
  // [
  //   "¿De quién es la canción Hey Jude?",
  //   "Los Beatles",
  //   "Rolling Stones",
  //   "Michael Jackson",
  //   "Los Beatles",
  // ],
  // [
  //   "¿Qué cantante americana ha ganado un Oscar por la canción 'Shallow'?",
  //   "Beyoncé",
  //   "Lady Gaga",
  //   "Masiel",
  //   "Lady Gaga",
  // ],
  // [
  //   "¿A qué cantante se le conoce como El Sol de México?",
  //   "Luis Miguel",
  //   "Chavela Vargas",
  //   "Julieta Venegas",
  //   "Luis Miguel",
  // ],
  // [
  //   "¿Cuál es el nombre de pila del compositor clásico Vivaldi?",
  //   "Antonio",
  //   "Verdi",
  //   "Miguel",
  //   "Antonio",
  // ],
  // [
  //   "¿Quién compuso la balada 'Tears in heaven'?",
  //   "Bon Jovi",
  //   "Eric Clapton",
  //   "Shakira",
  //   "Eric Clapton",
  // ],
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
const noAnswerMessage = document.querySelector("#no-answer-message");

function printQuizz() {
  lastQuestion();

  document.querySelectorAll(".answer-radio").forEach((element) => {
    if ((element.checked = true)) {
      element.checked = false;
    }
  });

  if (Game.currentLevel === 1) {
    randomIndex = Math.floor(Math.random() * infoArray.length);
    questionInfo = infoArray[randomIndex][0];
    answer1Info = infoArray[randomIndex][1];
    answer2Info = infoArray[randomIndex][2];
    answer3Info = infoArray[randomIndex][3];
    correctAnswer = infoArray[randomIndex][4];

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
  Game.checkEnoughQuestions();

  continueButton.style.visibility = "hidden";
  skipButton.style.visibility = "hidden";
  submitButton.style.visibility = "hidden";
  cantSkipMessage.style.visibility = "hidden";
  noAnswerMessage.style.visibility = "hidden";
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

function checkIfWin() {
  if (Game.currentLevel === 1 && Game.quizzScore === 0) {
    Game.backSound.pause();
    Game.backSound.currentTime = 0;
    Game.winScreen();
  } else if (
    Game.currentLevel === 2 &&
    Game.mathsScore === 0 &&
    Game.geoScore === 0 &&
    Game.musicScore === 0
  ) {
    Game.backSound.pause();
    Game.winScreen();
  }
}
function continueGame() {
  if (Game.musicScore !== 0 || Game.geoScore !== 0 || Game.mathsScore !== 0) {
    Game.backSound.play();
  }

  if (Game.currentLevel === 1) {
    Game.atQuizz = false;
    quizzBox.style.visibility = "hidden";
    continueButton.style.visibility = "hidden";
    correctMessage.style.visibility = "hidden";
    wrongMessage.style.visibility = "hidden";
    cantSkipMessage.style.visibility = "hidden";
    noAnswerMessage.style.visibility = "hidden";
  } else if (Game.currentLevel === 2 && Game.musicQuizz === true) {
    quizzAudio.pause();
    Game.atQuizz = false;
    quizzBox.style.visibility = "hidden";
    continueButton.style.visibility = "hidden";
    correctMessage.style.visibility = "hidden";
    wrongMessage.style.visibility = "hidden";
    cantSkipMessage.style.visibility = "hidden";
    noAnswerMessage.style.visibility = "hidden";
    Game.musicQuizz = false;
    Game.croacTimer = 0;
  } else if (Game.currentLevel === 2 && Game.musicQuizz === false) {
    Game.atQuizz = false;
    quizzBox.style.visibility = "hidden";
    continueButton.style.visibility = "hidden";
    correctMessage.style.visibility = "hidden";
    wrongMessage.style.visibility = "hidden";
    cantSkipMessage.style.visibility = "hidden";
    noAnswerMessage.style.visibility = "hidden";
    Game.croacTimer = 0;
  }
  checkIfWin();
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

  firstLevelLegendInfo.innerText = `${Game.quizzScore} preguntas`;

  if (Game.musicScore === 1) {
    musicLegendInfo.innerText = ` ${Game.musicScore} pregunta`;
  } else {
    musicLegendInfo.innerText = ` ${Game.musicScore} preguntas`;
  }

  if (Game.mathsScore === 1) {
    mathsLegendInfo.innerText = ` ${Game.mathsScore} pregunta`;
  } else {
    mathsLegendInfo.innerText = ` ${Game.mathsScore} preguntas`;
  }

  if (Game.geoScore === 1) {
    geoLegendInfo.innerText = ` ${Game.geoScore} pregunta`;
  } else {
    geoLegendInfo.innerText = ` ${Game.geoScore} preguntas`;
  }
}

function lastQuestion() {
  if (Game.currentLevel === 1) {
    if (Game.quizzScore === Game.quizzObjects.length) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
      Game.noSkipSound.play();
    }
  } else if (Game.currentLevel === 2) {
    if (
      // Game.atQuizz === true &&
      Game.typeOfQuestion === "maths" &&
      Game.mathsScore === Game.mathQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
      Game.noSkipSound.play();
    } else if (
      // Game.atQuizz === true &&
      Game.typeOfQuestion === "geo" &&
      Game.geoScore === Game.geoQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
      Game.noSkipSound.play();
    } else if (
      // Game.atQuizz === true &&
      Game.typeOfQuestion === "music" &&
      Game.musicScore === Game.musicQuizzObjects.length
    ) {
      document.querySelector("#cant-skip-message").style.visibility = "visible";
      Game.noSkipSound.play();
    }
  }
}

function getResult(event) {
  event.preventDefault();
  Game.noSkipSound.pause();
  Game.noSkipSound.currentTime = 0;
  if (!answer1.checked && !answer2.checked && !answer3.checked) {
    document.querySelector("#no-answer-message").style.visibility = "visible";
  } else {
    if (answer1.checked && answer1Info === correctAnswer) {
      document.querySelector("#correct-answer-message").style.visibility =
        "visible";
      Game.correctSound.play();
      skipButton.style.visibility = "hidden";
      submitButton.style.visibility = "hidden";
      continueButton.style.visibility = "visible";
      if (
        (document.querySelector("#no-answer-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#no-answer-message").style.visibility =
          "hidden";
      }
      changeScores();
      printScore();
      if (
        (document.querySelector("#cant-skip-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#cant-skip-message").style.visibility =
          "hidden";
      }
    } else if (answer2.checked && answer2Info === correctAnswer) {
      document.querySelector("#correct-answer-message").style.visibility =
        "visible";
      Game.correctSound.play();
      skipButton.style.visibility = "hidden";
      submitButton.style.visibility = "hidden";
      continueButton.style.visibility = "visible";
      if (
        (document.querySelector("#no-answer-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#no-answer-message").style.visibility =
          "hidden";
      }
      changeScores();
      printScore();
      if (
        (document.querySelector("#cant-skip-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#cant-skip-message").style.visibility =
          "hidden";
      }
    } else if (answer3.checked && answer3Info === correctAnswer) {
      document.querySelector("#correct-answer-message").style.visibility =
        "visible";
      Game.correctSound.play();
      skipButton.style.visibility = "hidden";
      submitButton.style.visibility = "hidden";
      continueButton.style.visibility = "visible";
      if (
        (document.querySelector("#no-answer-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#no-answer-message").style.visibility =
          "hidden";
      }
      changeScores();
      printScore();
      if (
        (document.querySelector("#cant-skip-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#cant-skip-message").style.visibility =
          "hidden";
      }
    } else {
      document.querySelector("#wrong-answer-message").style.visibility =
        "visible";
      Game.wrongSound.play();
      skipButton.style.visibility = "hidden";
      submitButton.style.visibility = "hidden";
      continueButton.style.visibility = "visible";
      Game.lifes--;
      if (
        (document.querySelector("#no-answer-message").style.visibility =
          "visible")
      ) {
        document.querySelector("#no-answer-message").style.visibility =
          "hidden";
      }
    }
  }
}
