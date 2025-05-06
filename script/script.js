const banners = ["img/banner1.jpg", "img/banner2.png", "img/banner3.jpg"];
let indice = 0;
const canvas = document.getElementById("imgBanner");
const ctx = canvas.getContext("2d");

// Redimensiona o canvas para preencher a tela
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Faz fade entre imagens
function fadeToImage(newImg) {
  let alpha = 0;
  const step = 0.02;

  const fadeInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = alpha;
    ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
    alpha += step;
    if (alpha >= 1) {
      clearInterval(fadeInterval);
      currentImg = newImg;
    }
  }, 16); // Aproximadamente 60fps
}

let currentImg = new Image();
currentImg.src = banners[indice];
currentImg.onload = () => {
  ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
  setInterval(() => {
    indice = (indice + 1) % banners.length;
    const nextImg = new Image();
    nextImg.src = banners[indice];
    nextImg.onload = () => {
      fadeToImage(nextImg);
    };
  }, 7500);
};

// Elementos
const el = id => document.getElementById(id);
const [nome, email, psw, pswRepeat] = ["cadastroNome", "cadastroEmail", "password", "cadastroSenha"].map(el);
const [letter, capital, number, length] = ["letter", "capital", "number", "length"].map(el);
const [signInBtn, loginButton, emailInput, passwordInput] = ["signInBtn", "logInBtn", "logInEmail", "logInPsw"].map(el);
const [nomeMsg, emailMsg, matchPsw] = ["matchNome", "matchEmail", "matchPsw"].map(el);

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

// Desativa campos inicialmente
window.addEventListener('DOMContentLoaded', () => [psw, pswRepeat, signInBtn, loginButton].forEach(el => el.disabled = true));

// Funções utilitárias
const isValidEmail = val => emailRegex.test(val);
const isValidName = val => nameRegex.test(val);

const toggleRule = (el, valid) => {
  el.classList.toggle("valid", valid);
    el.classList.toggle("invalid", !valid);
};

const updatePasswordRules = () => {
    const val = psw.value;
    toggleRule(letter, /[a-z]/.test(val));
    toggleRule(capital, /[A-Z]/.test(val));
    toggleRule(number, /\d/.test(val));
    toggleRule(length, val.length >= 8);
};

const updateSignInButton = () => {
    const valid = isValidName(nome.value) && isValidEmail(email.value) && psw.value === pswRepeat.value && psw.value.length >= 8;
    signInBtn.disabled = !valid;
};

// Validação de nome, email e senha
const validateField = (input, msgEl, validator, successMsg, errorMsg) => {
    const valid = validator(input.value);
    msgEl.textContent = valid ? successMsg : errorMsg;
    msgEl.style.color = valid ? "green" : "red";
    const enable = isValidName(nome.value) && isValidEmail(email.value);
    psw.disabled = pswRepeat.disabled = !enable;
    updateSignInButton();
};

const checkPasswordMatch = () => {
    const match = psw.value === pswRepeat.value && psw.value.length >= 8;
    matchPsw.textContent = match ? "As senhas coincidem" : "As senhas não coincidem.";
    matchPsw.style.color = match ? "green" : "red";
    updateSignInButton();
};

const checkLoginInputs = () => {
    loginButton.disabled = !(isValidEmail(emailInput.value.trim()) && passwordInput.value.trim().length);
};

// Eventos
nome.addEventListener("keyup", () => validateField(nome, nomeMsg, isValidName, "Nome válido", "O nome não pode conter números ou caracteres especiais."));
email.addEventListener("keyup", () => validateField(email, emailMsg, isValidEmail, "E-mail válido", "O e-mail deverá conter @"));

["blur"].forEach(evt => {
    nome.addEventListener(evt, () => nomeMsg.textContent = "");
    email.addEventListener(evt, () => emailMsg.textContent = "");
});

psw.addEventListener("focus", () => el("aviso").style.display = "block");
psw.addEventListener("blur", () => el("aviso").style.display = "none");

psw.addEventListener("keyup", () => {
    updatePasswordRules();
    checkPasswordMatch();
});
pswRepeat.addEventListener("keyup", checkPasswordMatch);

["input"].forEach(evt => {
    emailInput.addEventListener(evt, checkLoginInputs);
    passwordInput.addEventListener(evt, checkLoginInputs);
});