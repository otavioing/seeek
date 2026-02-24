// --------------------------- Início do banner com slideshow --------------------------- //

const banners = [
  "img/banner1.jpg",
  "img/banner2.png",
  "img/banner3.jpg"
];

const c = document.getElementById("imgBanner");
const ctx = c.getContext("2d");

// Configurações
const SLIDE_DURATION = 7500; // tempo da imagem parada
const FADE_DURATION = 800;   // duração do fade

let images = [];
let currentIndex = 0;
let currentImage = null;
let nextImage = null;

let lastSwitchTime = 0;
let isFading = false;
let fadeStartTime = 0;
let running = false;


// --------------------------- Resize Responsivo --------------------------- //

const resize = () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  drawCurrent();
};

window.addEventListener("resize", resize);


// --------------------------- Draw Helpers --------------------------- //

const drawImage = (image, alpha = 1) => {
  ctx.globalAlpha = alpha;
  ctx.drawImage(image, 0, 0, c.width, c.height);
};

const drawCurrent = () => {
  if (!currentImage) return;
  ctx.clearRect(0, 0, c.width, c.height);
  drawImage(currentImage, 1);
};


// --------------------------- Easing Suave --------------------------- //

const easeInOut = t => {
  return t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2;
};


// --------------------------- Loop Principal --------------------------- //

const loop = (now) => {
  if (!running) return;

  if (!lastSwitchTime) lastSwitchTime = now;

  const elapsed = now - lastSwitchTime;

  // Hora de iniciar fade
  if (!isFading && elapsed >= SLIDE_DURATION) {
    isFading = true;
    fadeStartTime = now;
    nextImage = images[(currentIndex + 1) % images.length];
  }

  ctx.clearRect(0, 0, c.width, c.height);

  if (isFading) {
    const fadeElapsed = now - fadeStartTime;
    let progress = fadeElapsed / FADE_DURATION;

    if (progress >= 1) {
      // Finaliza fade
      progress = 1;
      isFading = false;
      currentIndex = (currentIndex + 1) % images.length;
      currentImage = nextImage;
      lastSwitchTime = now;
    }

    const eased = easeInOut(progress);

    drawImage(currentImage, 1);
    drawImage(nextImage, eased);

  } else {
    drawImage(currentImage, 1);
  }

  requestAnimationFrame(loop);
};


// --------------------------- Controle --------------------------- //

const start = () => {
  if (running) return;
  running = true;
  lastSwitchTime = 0;
  requestAnimationFrame(loop);
};

const stop = () => {
  running = false;
};


// --------------------------- Controle de Visibilidade --------------------------- //

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stop();
  } else {
    start();
  }
});


// --------------------------- Pré-carregamento --------------------------- //

const preloadImages = () => {
  return Promise.all(
    banners.map(src => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });
    })
  );
};


// --------------------------- Inicialização --------------------------- //

resize();

preloadImages().then(loaded => {
  images = loaded;
  currentImage = images[0];
  drawCurrent();
  start();
});

// --------------------------- Fim do banner com slideshow --------------------------- //



// --------------------------- Validação de formulário de login e cadastro --------------------------- //
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


// --------------------------- Fim da validação de formulário de login e cadastro --------------------------- //