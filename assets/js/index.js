const page = document.querySelector("body");
const container1 = document.querySelector(".main-container");
const container2 = document.querySelector(".thank");
const btn = document.querySelector(".btn-submit");
const score = document.querySelectorAll(".score");
const span = document.querySelector(".span-selected");
if (page) {
  score.forEach((element) => {
    element.addEventListener("click", (event) => {
      score.forEach((element) => {
        element.classList.remove("action");
      });
      event.target.classList.add("action");
      let myScore = event.target.value;
      span.innerHTML = `You selected out of ${myScore}`;
    });
  });

  btn.addEventListener("click", () => {
    container1.classList.add("hidden");
    container2.classList.remove("hidden");
  });
}
