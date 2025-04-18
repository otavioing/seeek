// Banner da página de login
let banners = ["img/banner1.jpg", "img/banner2.png", "img/banner3.jpg"];
let indiceBanner = 0;

function trocarBanner() {
    const imgBanner = document.getElementById("imgBanner");
    if (imgBanner && banners.length > 0) {
        imgBanner.style.opacity = 0.2;
        setTimeout(() => {
            imgBanner.src = banners[indiceBanner];
            indiceBanner = (indiceBanner + 1) % banners.length;
            imgBanner.style.opacity = 1;
        }, 500);
    }
}

trocarBanner();
setInterval(trocarBanner, 7500);


// Sistema de login
let email = document.getElementById("cadastroEmail");
let nome = document.getElementById("cadastroNome");
let psw = document.getElementById("password");
let pswRepeat = document.getElementById("cadastroSenha");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let signInBtn = document.getElementById("signInBtn");

psw.disabled = true;
pswRepeat.disabled = true;
logInBtn.disabled = true;
signInBtn.disabled = true;

// Checar se os campos de login estão preenchidos
const emailInput = document.getElementById('logInEmail');
const passwordInput = document.getElementById('logInPsw');
const loginButton = document.getElementById('logInBtn');

function isValidEmail(email) {
  // Regex simples para validar formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkInputs() {
  const email = emailInput.value.trim(); //trim: remove espaços em branco no início e no fim
  const password = passwordInput.value.trim();

  // Verifica se o e-mail é válido e a senha não está vazia
  const emailOk = isValidEmail(email);
  const passwordOk = password.length > 0;

  loginButton.disabled = !(emailOk && passwordOk);
}

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

window.addEventListener('DOMContentLoaded', () => {
  loginButton.disabled = true;
});

psw.onfocus = function(){
    document.getElementById("aviso").style.display = "block";
}

psw.onblur = function(){
    document.getElementById("aviso").style.display = "none";
}

// Função de checar se a senha bate com os requisitos
psw.onkeyup = function(){
    var lowerCaseLetters = /[a-z]/g;
    letter.classList.toggle("valid", psw.value.match(lowerCaseLetters));
    letter.classList.toggle("invalid", !psw.value.match(lowerCaseLetters));
    
    var upperCaseLetters = /[A-Z]/g;
    capital.classList.toggle("valid", psw.value.match(upperCaseLetters));
    capital.classList.toggle("invalid", !psw.value.match(upperCaseLetters));
    
    var numbers = /[0-9]/g;
    number.classList.toggle("valid", psw.value.match(numbers));
    number.classList.toggle("invalid", !psw.value.match(numbers));
    
    length.classList.toggle("valid", psw.value.length >= 8);
    length.classList.toggle("invalid", psw.value.length < 8);
    
    checkMatch();
}

pswRepeat.onkeyup = function(){
    checkMatch();
}

email.onkeyup = function(){
    validateEmail();
}

let emailMessage = document.getElementById("matchEmail"); // Mensagem para e-mail

// Verificar se o nome não há nenhum caracter especial


// Sistema se o e-mail está inserido corretamente
function validateEmail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(email.value)){
        emailMessage.textContent = "E-mail válido";
        emailMessage.style.color = "green";
        psw.disabled = false;
        pswRepeat.disabled = false;
    }else{
        emailMessage.textContent = "O e-mail deverá conter @";
        emailMessage.style.color = "red";
        psw.disabled = true;
        pswRepeat.disabled = true;
    }
}

let matchPsw = document.getElementById("matchPsw"); // Mensagem para verificar se as senha coincidem

// Sistema para verificar se as senhas coincidem
function checkMatch(){
    if(psw.value == pswRepeat.value && pswRepeat.value != ""){
        matchPsw.textContent = "As senhas coincidem";
        matchPsw.style.color = "green";
        signInBtn.disabled = false;
    }else{
        matchPsw.textContent = "As senhas não coincidem.";
        matchPsw.style.color = "red";
        signInBtn.disabled = true;
    }
}
