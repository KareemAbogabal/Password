let inpCreating = document.getElementById("creating-pass");
let copy = document.getElementById("copy");
let option = document.querySelectorAll(".boxs");
let range = document.getElementById("range");
let rangNum = document.getElementById("rang-num");
let btnCreating = document.getElementById("btn-creating");

range.addEventListener("input", () => {
  rangNum.innerText = range.value;
});

let characters = {
  uppercase: "ABCDEFGHIJKLMNOBQRSTUVWXYZ",
  lowercase: "abcdefghijklmnobqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-`;:?<>,./=",
};

let getPassword = () => {
  let strongPassword = "";
  let randomPassword = "";
  let passWordLegnth = range.value;
  option.forEach(option => {
    if (option.checked) {
      strongPassword += characters[option.id];
    };
  });
  for (let i = 0; i < passWordLegnth; i++) {
    randomPassword += strongPassword[Math.floor(Math.random() * strongPassword.length)];
  };
  inpCreating.value = randomPassword;
};

let copyPass = () => {
  navigator.clipboard.writeText(inpCreating.value);
};

btnCreating.addEventListener("click", getPassword);
copy.addEventListener("click", copyPass);