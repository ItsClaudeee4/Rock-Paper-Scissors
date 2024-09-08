const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const winLose = document.getElementById("winLose");
const playerScore = document.getElementById("playeScore");
const computerScore = document.getElementById("computerScore");
const btn = document.getElementById("btn");
let results = "";
let pScore = 0;
let cScore = 0;

const rps = [rock, paper, scissors];
rps.forEach((e) => {
  e.addEventListener("click", () => {
    const player = e.id;
    const computer = rps[Math.floor(Math.random() * 3)].id;
    if (player === computer) {
      results = "MID";
    } else {
      switch (player) {
        case "rock":
          results = computer === "paper" ? "HMAR" : "CHABA ZID";
          break;
        case "paper":
          results = computer === "rock" ? "CHABA ZID" : "HMAR";
          break;
        case "scissors":
          results = computer === "rock" ? "HMAR" : "CHABA ZID";
          break;
        case "scissors":
          results = computer === "paper" ? "CHABA ZID" : "HMAR";
          break;
      }
    }
    playerChoice.innerHTML = " PLAYER: " + player;
    computerChoice.innerHTML = " COMPUTER: " + computer;
    winLose.innerHTML = results;
    winLose.classList.remove("greenTag");
    winLose.classList.remove("redTag");
    switch (results) {
      case "CHABA ZID":
        winLose.classList.add("greenTag");
        pScore = pScore + 1;
        playerScore.innerHTML = pScore;
        break;
      case "HMAR":
        winLose.classList.add("redTag");
        cScore = cScore + 1;
        computerScore.innerHTML = cScore;
        break;
    }
  });
});
function restart() {
  pScore = 0;
  cScore = 0;
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  winLose.innerHTML = "";
}
