const spanSelected = document.querySelector(".span-selected");
function updateScore(score) {
  // Remove a classe 'selected' de todas as pontuações
  const scores = document.querySelectorAll(".score");

  scores.forEach((scoreItem) => {
    scoreItem.classList.remove("action");
  });

  // Adiciona a classe selected a pontuação clicada:
  const selectedScore = document.getElementById(`score${score}`);

  selectedScore.classList.add("action");

  spanSelected.textContent = score;
}

function myScore(event) {
  const container1 = document.querySelector(".request");
  const container2 = document.querySelector(".thank");
  event.preventDefault();

  // Esconde a classe "container1" e exibe a classe "container2"
  container1.classList.add("hidden");
  container2.classList.remove("hidden");
}
