let count = 0;

const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");

btnIncrease.addEventListener("click", () => {
  count++;
  document.getElementById("count").innerHTML = count;
});

btnDecrease.addEventListener("click", () => {
  count--;
  document.getElementById("count").innerHTML = count;
});
