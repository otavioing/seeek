// --------------------------- Conexão com o backend para login --------------------------- //
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("logInEmail").value;
  const senha = document.getElementById("logInPsw").value;

  try {
    const response = await fetch("http://localhost:4500/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }), 
    });

    const data = await response.json();

    if (response.ok && data.usuario && data.token) {
      // Escolha só os dados que você quer salvar
      const usuarioSeguro = {
        id: data.usuario.id,
        tema: data.usuario.tema,
        tema: data.usuario.tema,
        token: data.token
      };

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSeguro));
      window.location.href = "/index.html";
    } else {
      alert("Email ou senha inválidos.");
    }
  } catch (err) {
    alert("Erro na requisição: " + err.message);
  }
});

// --------------------------- Fim da conexão com o backend -------------------------- //

// --------------------------- Banner com slideshow --------------------------- //


// Lista de imagens para o slideshow
const banners = ["img/banner1.jpg", "img/banner2.png", "img/banner3.jpg"];

// Variáveis de controle
let i = 0;
const c = document.getElementById("imgBanner");
const ctx = c.getContext("2d");
let img = new Image();
let interval;

// Ajusta o canvas ao tamanho da tela
const resize = () => {
  c.width = innerWidth;
  c.height = innerHeight;
};
window.addEventListener("resize", resize);
resize();

// Função de transição com fade entre imagens
const fade = next => {
  let a = 0, s = 0.02;
  const f = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalAlpha = 1;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    ctx.globalAlpha = a;
    ctx.drawImage(next, 0, 0, c.width, c.height);
    a += s;
    if (a >= 1) {
      clearInterval(f);
      img = next;
    }
  }, 16); // Aproximadamente 60 FPS
};

// Inicia o slideshow
const start = () => {
  if (interval) return; // Já está rodando
  interval = setInterval(() => {
    const nextImage = new Image();
    i = (i + 1) % banners.length;
    nextImage.src = banners[i];
    nextImage.onload = () => fade(nextImage);
  }, 7500); // Tempo entre trocas de imagem
};

// Para o slideshow
const stop = () => {
  clearInterval(interval);
  interval = null;
};

// Pausa/resume o slideshow ao mudar a visibilidade da aba
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stop();
  } else {
    start();
  }
});

// Carrega a primeira imagem e inicia o slideshow
img.src = banners[i];
img.onload = () => {
  ctx.drawImage(img, 0, 0, c.width, c.height);
  start();
};



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