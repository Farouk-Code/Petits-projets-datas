// @ts-nocheck
let totalSeconds;
let interval;
const form = document.getElementById("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");

const countdown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds =
    totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60;

  countdownDisplay.textContent = `${minutes} : ${seconds}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    console.error("Entrez un nombre !");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countdown, 10);
  }
});
