const lengthInput = document.getElementById("passLength");
const symbolCheckbox = document.getElementById("symbol");
const numberCheckbox = document.getElementById("number");
const lowerCheckbox = document.getElementById("lower");
const upperCheckbox = document.getElementById("upper");
const btn = document.getElementById("btn");
const p = document.getElementById("priklad");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  let number = "1234567890";
  let symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";

  let message = "";
  if (
    !symbolCheckbox.checked &&
    !numberCheckbox.checked &&
    !lowerCheckbox.checked &&
    !upperCheckbox.checked
  ) {
    message = "Zaškrtni";
  }
  if (!lengthInput.value) {
    message += " Zadej cislo";
  }

  if (message) {
    alert(message);
    return;
  }

  let charset = "";
  if (symbolCheckbox.checked) {
    charset += symbol;
  }
  if (numberCheckbox.checked) {
    charset += number;
  }
  if (upperCheckbox.checked) {
    charset += upper;
  }
  if (lowerCheckbox.checked) {
    charset += lower;
  }
  let password = "";
  for (let i = 0; i < lengthInput.value; i++) {
    let character = Math.floor(Math.random() * charset.length);
    password += charset.substring(character, character + 1);
  }

  p.textContent = password;
  asynWriteToClipboard(password);
  console.log(password);
});

const asynWriteToClipboard = async (password) => {
  await navigator.clipboard.writeText(password);
  alert("Heslo bylo zkopírováno");
};
