const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");

let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector(`.${tag}-container`);
  const span = document.querySelector(`.${tag}-container > span`);

  if (valid) {
    // @ts-ignore
    container.classList.remove("error");
    // @ts-ignore
    span.textContent = message;
  } else {
    // @ts-ignore
    container.classList.add("error");
    // @ts-ignore
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "pseudo",
      "Le pseudo doit contenir entre 3 et 20 caractères",
      false
    );
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne peut pas contenir de caractères spéciaux",
      false
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errorDisplay("email", "", true);
    email = value;
  } else {
    errorDisplay("email", "Le mail n'est pas valide !", false);
    email = null;
  }
};

const passwordChecker = (value) => {
  if (!value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/)) {
    errorDisplay(
      "password",
      "Minimum 8 caractères avec une minuscule, une majuscule, un chiffre et un caractère spécial",
      false
    );
    // @ts-ignore
    progressBar.classList.add("progressRed");
    // @ts-ignore
    progressBar.classList.remove("progressBlue");
    // @ts-ignore
    progressBar.classList.remove("progressGreen");
    password = null;
  } else if (value.length < 12) {
    // @ts-ignore
    progressBar.classList.add("progressRed");
    // @ts-ignore
    progressBar.classList.remove("progressGreen");
    // @ts-ignore
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    // @ts-ignore
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) {
    confirmPasswordChecker(confirmPass);
  }
};

const confirmPasswordChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passes sont différents", false);
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

for (const input of inputs) {
  input.addEventListener("input", (e) => {
    // @ts-ignore
    switch (e.target.id) {
      case "pseudo":
        // @ts-ignore
        pseudoChecker(e.target.value);
        break;

      case "email":
        // @ts-ignore
        emailChecker(e.target.value);
        break;

      case "password":
        // @ts-ignore
        passwordChecker(e.target.value);
        break;

      case "confirm":
        // @ts-ignore
        confirmPasswordChecker(e.target.value);
        break;

      default:
        null;
        break;
    }
  });
}

// @ts-ignore
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const date = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(date);
    // @ts-ignore
    progressBar.classList = "";
    for (const input of inputs) {
      // @ts-ignore
      input.value = "";
    }
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
  } else {
    console.log("Formulaire non valide/");
  }
});
