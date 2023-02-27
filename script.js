const pwEl = document.querySelector("#pw");
const copyEl = document.querySelector("#copy");
const lengthEl = document.querySelector("#length");
const upperCaseEl = document.querySelector("#upperCase");
const lowerCaseEl = document.querySelector("#lowerCase");
const numberEl = document.querySelector("#number");
const specialEl = document.querySelector("#special");
const generatePwdBtnEl = document.querySelector("#generatePwd");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specials = "!@#$%^&*()_-+=";

const randomUpper = () => {
  return upperLetters[Math.floor(Math.random() * 26)];
};
const randomLower = () => {
  return lowerLetters[Math.floor(Math.random() * 26)];
};
const randomNumber = () => {
  return numbers[Math.floor(Math.random() * 10) ];
};
const randomSpecial = () => {
  return specials[Math.floor(Math.random() * 14)];
};
const getPassword = () => {
//   const length = lengthEl.value;
  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    const x = getX();
    password = password + x;
  }
  pwEl.textContent = password;
};

function getX() {
  const xs = [];
  if (upperCaseEl.checked) {
    xs.push(randomUpper());
  }
  if (lowerCaseEl.checked) {
    xs.push(randomLower());
  }
  if (numberEl.checked) {
    xs.push(randomNumber());
  }
  if (specialEl.checked) {
    xs.push(randomSpecial());
    }
    if (xs.length === 0) return '';
    return xs[Math.floor(Math.random() * xs.length)];
}
generatePwdBtnEl.addEventListener('click', getPassword);
// console.log(randomLower());