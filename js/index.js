window.onload = () => {
  // document.querySelector("#lifes").style.visibility = "hidden";
  // document.querySelector("#level-one-legend-questionmark").style.visibility =
  //   "hidden";
  // document.querySelector("#level-two-legend-questionmark").style.visibility =
  //   "hidden";

  document.querySelector("#sound-button").onclick = () => {
    let soundbutton = document.querySelector("#sound-button");
    if (Game.playing === true) {
      Game.playing = false;
      soundbutton.src = "images/mutebutton.png";
      Game.mute();
    } else if (Game.playing === false) {
      Game.playing = true;
      soundbutton.src = "images/soundbutton.png";
      Game.sound();
    }
  };
  Game.gameIntro();

  document.getElementById("start-button").onclick = () => {
    Game.init();
  };
};
