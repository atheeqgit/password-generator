const outputEl = document.getElementById("output");
const lengthEl = document.getElementById("length");
const UpperCaseEl = document.getElementById("UpperCase");
const lowerCaseEl = document.getElementById("lowerCase");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");
const generateBtn = document.getElementById("button");

const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=--{}[]:|?><~*-+/";

generateBtn.addEventListener("click", () => {
  generatePassword();
});

function generatePassword() {
  const len = lengthEl.value;
  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  outputEl.value = password;
}

function getNumbers() {
  //console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getUpperAlphabets() {
  return upperAlphabets[Math.floor(Math.random() * upperAlphabets.length)];
}

function getLowerAlphabets() {
  return lowerAlphabets[Math.floor(Math.random() * lowerAlphabets.length)];
}

function generateX() {
  const xs = [];

  if (UpperCaseEl.checked) {
    xs.push(getUpperAlphabets());
  }
  if (lowerCaseEl.checked) {
    xs.push(getLowerAlphabets());
  }
  if (numbersEl.checked) {
    xs.push(getNumbers());
  }
  if (symbolsEl.checked) {
    xs.push(getSymbols());
  }

  if (xs.length == 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

const copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");

  if (!outputEl.value) {
    return;
  }

  textarea.value = outputEl.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert(`${outputEl.value} PASSWORD is copied succesfully`);
});
