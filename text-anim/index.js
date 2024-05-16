const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let worldIndex = 0;
let letterIndex = 0;

const creatLetter = () => {
  const letter = document.createElement("span");
  target?.appendChild(letter);

  letter.textContent = array[worldIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (worldIndex >= array.length) {
      worldIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[worldIndex].length) {
      creatLetter();
      letterIndex++;
      loop();
    } else {
      worldIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 100);
};

loop();
