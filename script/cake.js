function desmarcarRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}

function seta() {
    var preco = document.getElementById("divinputpreco");
    
    var setaonElement = document.getElementById("seta"); 

    if (preco.style.display == "none" || preco.style.display == "") {
        preco.style.display = "flex";
    } else {
        preco.style.display = "none";
    }

    if (setaonElement.style.transform == "rotate(180deg)" || setaonElement.style.transform == "") {
        setaonElement.style.transform = "rotate(0deg)";
    } else {
        setaonElement.style.transform = "rotate(180deg)";
    }
}

function setapreco(){

    var preco = document.getElementById("faixadeprecocursos");
    
    var setaonElement = document.getElementById("setapreco"); 

    if (preco.style.display == "none" || preco.style.display == "") {
        preco.style.display = "flex";
    } else {
        preco.style.display = "none";
    }

    if (setaonElement.style.transform == "rotate(180deg)" || setaonElement.style.transform == "") {
        setaonElement.style.transform = "rotate(0deg)";
    } else {
        setaonElement.style.transform = "rotate(180deg)";
    }


}


function abrir() {
    let caixa = document.getElementById("caixa");

    if (caixa.style.display == "none" || caixa.style.display == "") {
        caixa.style.display = "block";
    }

}

//script para alterar o ano atual
let anoatual = document.querySelectorAll(".anoatual");
if (anoatual.length > 0) {
    let dataatual = new Date();
    let ano = dataatual.getFullYear();
    for (let i = 0; i < anoatual.length; i++) {
        anoatual[i].innerHTML = ano;
    }
}

//script para abrir o menu do perfil 
let botaomenuperfil = document.getElementById("abrirmenuperfil");
botaomenuperfil.addEventListener("click", abrirMenu);

function abrirMenu() {
    if(menuperfil.style.left == "125rem" || menuperfil.style.left == "") {
        menuperfil.style.left = "107rem";
       
    }
    else {
       if(menuperfil.style.left = "107rem" || menuperfil.style.left == "") {
        menuperfil.style.left = "125rem";
       }
    }

    
}


