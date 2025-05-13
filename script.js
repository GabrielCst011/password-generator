function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]<>/?";

  let characters = "";
  if (includeUpper) characters += upper;
  if (includeLower) characters += lower;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters === "") {
    alert("Selecione pelo menos uma opção.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência!");
}
