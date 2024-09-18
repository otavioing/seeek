// Sistema de validação de senha
var psw = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Função quando o usuário clica dentro do campo de senha
psw.onfocus = function() {
    document.getElementById("aviso").style.display = "block";
}

// Funçao quando o usuário clica fora do campo de senha
psw.onblur = function() {
    document.getElementById("aviso").style.display = "none";
}

// Função quando o usuário começa a digitar
psw.onkeyup = function() {
    // Validar letras minúsculas
    var lowerCaseLetters = /[a-z]/g;
    if(psw.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validar letras maiúsculas
    var upperCaseLetters = /[A-Z]/g;
    if(psw.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validar números
    var numbers = /[0-9]/g;
    if(psw.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validar número de caracteres
    if(psw.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

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
setInterval(trocarBanner, 8000);

//Script para redirecionar para a página principal
function login(event) {
    event.preventDefault();
    window.location.href = "index.html";
}