// Apresentação de slides
const banners = ["img/banner1.jpg", "img/banner2.png", "img/banner3.jpg"];
let i = 0, c = document.getElementById("imgBanner"), ctx = c.getContext("2d"), img = new Image(), interval;

// Ajusta o canvas para o tamanho da tela
const resize = () => (c.width = innerWidth, c.height = innerHeight);
addEventListener("resize", resize); resize();

// Função de transição de fade entre imagens
const fade = next => {
  let a = 0, s = 0.02, f = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalAlpha = 1; ctx.drawImage(img, 0, 0, c.width, c.height);
    ctx.globalAlpha = a; ctx.drawImage(next, 0, 0, c.width, c.height);
    if ((a += s) >= 1) clearInterval(f), img = next;
  }, 16);
};

// Inicia o slideshow, se ainda não estiver rodando
const start = () => {
  if (interval) return; // Evita múltiplos intervals
  interval = setInterval(() => {
    let n = new Image();
    n.src = banners[(i = (i + 1) % banners.length)];
    n.onload = () => fade(n);
  }, 7500);
};

// Para o slideshow ao sair da aba
const stop = () => {
  clearInterval(interval);
  interval = null;
};

// Inicia o slideshow ao carregar a página
document.addEventListener("visibilitychange", () =>
  document.hidden ? stop() : start()
);

// Carrega a primeira imagem
img.src = banners[i];
img.onload = () => {
  ctx.drawImage(img, 0, 0, c.width, c.height);
  start();
};



//Validação de formulário

// Elementos
const el = id => document.getElementById(id);
const [nome, email, psw, pswRepeat] = ["cadastroNome", "cadastroEmail", "password", "cadastroSenha"].map(el);
const [letter, capital, number, length] = ["letter", "capital", "number", "length"].map(el);
const [signInBtn, loginButton, emailInput, passwordInput] = ["signInBtn", "logInBtn", "logInEmail", "logInPsw"].map(el);
const [nomeMsg, emailMsg, matchPsw] = ["matchNome", "matchEmail", "matchPsw"].map(el);

// Expressões regulares para validação
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

// Desativa campos inicialmente
window.addEventListener('DOMContentLoaded', () => [psw, pswRepeat, signInBtn, loginButton].forEach(el => el.disabled = true));

// Funções utilitárias
const isValidEmail = val => emailRegex.test(val);
const isValidName = val => nameRegex.test(val);

// Validação de senha
const toggleRule = (el, valid) => {
  el.classList.toggle("valid", valid);
    el.classList.toggle("invalid", !valid);
};

// Atualiza as regras de senha
const updatePasswordRules = () => {
    const val = psw.value;
    toggleRule(letter, /[a-z]/.test(val));
    toggleRule(capital, /[A-Z]/.test(val));
    toggleRule(number, /\d/.test(val));
    toggleRule(length, val.length >= 8);
};

// Atualiza o botão de cadastro
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

// Verifica se as senhas coincidem
const checkPasswordMatch = () => {
    const match = psw.value === pswRepeat.value && psw.value.length >= 8;
    matchPsw.textContent = match ? "As senhas coincidem" : "As senhas não coincidem.";
    matchPsw.style.color = match ? "green" : "red";
    updateSignInButton();
};

// Verifica se o email e a senha estão corretos
const checkLoginInputs = () => {
    loginButton.disabled = !(isValidEmail(emailInput.value.trim()) && passwordInput.value.trim().length);
};

// Eventos
nome.addEventListener("keyup", () => validateField(nome, nomeMsg, isValidName, "Nome válido", "O nome não pode conter números ou caracteres especiais."));
email.addEventListener("keyup", () => validateField(email, emailMsg, isValidEmail, "E-mail válido", "O e-mail deverá conter @"));

// Adiciona evento de foco e desfoco para limpar mensagens
["blur"].forEach(evt => {
    nome.addEventListener(evt, () => nomeMsg.textContent = "");
    email.addEventListener(evt, () => emailMsg.textContent = "");
});

// Adiciona evento de foco e desfoco para limpar mensagens
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