let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

update_score_element();

function playGame(playerMove) {
  const cpu_move = pickComputerMove();

  let result = " ";

  if (playerMove === "scissors") {
    if (cpu_move === "rock") {
      result = "YOU LOSE";
    } else if (cpu_move === "paper") {
      result = "YOU WIN";
    } else if (cpu_move === "scissors") {
      result = "TIE";
    }
  } else if (playerMove === "paper") {
    if (cpu_move === "rock") {
      result = "YOU WIN";
    } else if (cpu_move === "paper") {
      result = "TIE";
    } else if (cpu_move === "scissors") {
      result = "YOU LOSE";
    }
  } else if (playerMove === "rock") {
    if (cpu_move === "rock") {
      result = "TIE";
    } else if (cpu_move === "paper") {
      result = "YOU LOSE";
    } else if (cpu_move === "scissors") {
      result = "YOU WIN";
    }
  }

  if (result === "YOU WIN") {
    score.wins += 1;
  } else if (result === "YOU LOSE") {
    score.losses += 1;
  } else if (result === "TIE") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  update_score_element();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
      <img class="emoji" src="${playerMove}-emoji.png" alt="" />
      <img class="emoji" src="${cpu_move}-emoji.png" alt="" />
      Computer`;
}
function reset_score_element() {
  document.querySelector(".js-moves").innerHTML = "selct a move";
  document.querySelector(".js-result").innerHTML = " ";
}

function update_score_element() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let cpu_move = " ";

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    cpu_move = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    cpu_move = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    cpu_move = "scissors";
  }

  return cpu_move;
}
