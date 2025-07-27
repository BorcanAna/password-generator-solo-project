const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/";

let passwordGenerator = document.getElementById("password-generate");
let passwordFields = document.querySelectorAll(".create-password");

function generatePassword(length = 12) {
  let password = "";
  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }
  return password;
}

passwordGenerator.addEventListener("click", function () {
  passwordFields.forEach(field => {
      field.textContent = generatePassword(12); // Poți modifica lungimea parolei aici
  });
});