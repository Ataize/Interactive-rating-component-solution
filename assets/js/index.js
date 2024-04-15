const page = document.querySelector("body");
const container1 = document.querySelector(".request");
const container2 = document.querySelector(".thank");
const btn = document.querySelector(".btn-submit");
const score = document.querySelectorAll(".score input");
const span = document.querySelector(".span-selected");
if (page) {
  score.forEach((element) => {
    element.addEventListener("click", (event) => {
      let pai = event.target;
      console.log(pai);
      // pai.classList.toggle("action");
      pai.classList.remove("action");
      pai.classList.add("action");
      let myScore = event.target.value;
      console.log(myScore);
      span.innerHTML = `You selected ${myScore} out of 5`;
    });
  });
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    container1.classList.add("hidden");
    container2.classList.remove("hidden");
    console.log("botão clicado");
  });
}
