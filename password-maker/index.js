// @ts-nocheck
const generateButton = document.getElementById("generate-button");
const lowercaseButton = document.getElementById("lowercase");
const uppercaseButton = document.getElementById("uppercase");
const numbersButton = document.getElementById("numbers");
const symbolsButton = document.getElementById("symbols");
const passwordLength = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "?§,;.:ù%¨§-_@#";

function generatePassword() {
  const data = [];
  let password = "";

  lowercaseButton.checked ? data.push(...dataLowercase) : null;
  uppercaseButton.checked ? data.push(...dataUppercase) : null;
  numbersButton.checked ? data.push(...dataNumbers) : null;
  symbolsButton.checked ? data.push(...dataSymbols) : null;

  if (data.length === 0) {
    alert("Il faut séléctionner une option !");
    return;
  }

  for (let i = 0; i < passwordLength.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passse";
  }, 2000);
}

generateButton?.addEventListener("click", generatePassword);
