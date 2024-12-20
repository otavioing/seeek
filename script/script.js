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

// Script para redirecionar para a página principal
function login(event) {
    event.preventDefault();
    window.location.href = "index.html?login=true";
}

let loginEmail = document.getElementById("loginEmail");
let loginPsw = document.getElementById("loginPsw");
let email = document.getElementById("email");
let psw = document.getElementById("password");
let pswRepeat = document.getElementById("pswRepeat");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let logInBtn = document.getElementById("logInBtn");
let signInBtn = document.getElementById("signInBtn");

psw.disabled = true;
pswRepeat.disabled = true;
logInBtn.disabled = true;
signInBtn.disabled = true;

function checkLogin(){
    if(loginEmail.value != "" && loginPsw.value != ""){
        logInBtn.disabled = false;
    }
}

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
