let inpCreating = document.getElementById("creating-pass");
let copy = document.getElementById("copy");
let massageCopy = document.querySelector(".massage-copy");
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
copy.addEventListener("click", () => {
  if (inpCreating.value !== "") {
    copyPass();
    massageCopy.innerText = "Copy";
    massageCopy.classList.add("show-massage-copy");
    setTimeout(() => {
      massageCopy.classList.add("hidden-massage-copy");
    }, 2000);
    setTimeout(() => {
      massageCopy.classList.remove("show-massage-copy");
      massageCopy.classList.remove("hidden-massage-copy");
    }, 2500);
  } else {
    massageCopy.innerText = "Empty";
    massageCopy.classList.add("show-massage-copy");
    massageCopy.classList.remove("massage-copy");
    massageCopy.classList.add("error-massage");
    setTimeout(() => {
      massageCopy.classList.add("hidden-massage-copy");
    }, 2000);
    setTimeout(() => {
      massageCopy.classList.add("massage-copy");
      massageCopy.classList.remove("error-massage");
      massageCopy.classList.remove("show-massage-copy");
      massageCopy.classList.remove("hidden-massage-copy");
    }, 2500);
  };
});
