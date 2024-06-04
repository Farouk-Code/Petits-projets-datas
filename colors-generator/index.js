// @ts-nocheck
let red = 0;
let green = 0;
let blue = 0;

const body = document.querySelector("body");
const colorDisplay = document.querySelector(".container > p");

const getColor = () => {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  colorDisplay.textContent = `rgb(${red}, ${green}, ${blue})`;
};

setInterval(getColor, 1500);
