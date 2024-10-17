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


//script para abrir e fechar a caixa flutuante cursos

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".botaocaixacursos");
    buttons.forEach(button => {
        button.addEventListener("click", abrircaixaflutuantecursos);
    });
});

function abrircaixaflutuantecursos() {
    var caixaflutuante = document.querySelector(".caixaflutuante");
    
    if (caixaflutuante.style.display === "none" || caixaflutuante.style.display === "") {
        caixaflutuante.style.display = "flex";
    } else {
        caixaflutuante.style.display = "none";
    }
}

//script para trocar o id do botão de acordo com o clique

let listaconfig = document.getElementById("listaconfig");
if (listaconfig) {
    let botoeslist = listaconfig.querySelectorAll("button");
    let quantitotal = botoeslist.length;
    for (let g = 0; g < quantitotal; g++) {
        botoeslist[g].addEventListener("click", alterarcategoria);
    }
    function alterarcategoria() {
        for (let i = 0; i < quantitotal; i++) {
            botoeslist[i].id = "";
        }
        this.id = "selecionado";
    }
}

//script para abrir o menu do perfil 
botaomenuperfil.addEventListener("click", abrirMenu);
let botaomenuperfil = document.getElementById("abrirmenuperfil");

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

//script para fazer a barra lateral da aba de configurações funcinar
function privacidade() {
    let privacidade = document.getElementById("privacidadeconfig");
    let notificacao = document.getElementById("notificacoesconfig");
    let infouser = document.getElementById("informacoesousuario");

    notificacao.style.display = "none";
    infouser.style.display = "none";
    privacidade.style.display = "flex";
}

function notificaacoes() {
    let privacidade = document.getElementById("privacidadeconfig");
    let notificacao = document.getElementById("notificacoesconfig");
    let infouser = document.getElementById("informacoesousuario");

    privacidade.style.display = "none";
    infouser.style.display = "none";
    notificacao.style.display = "flex";
}

function informacoesuser() {
    let privacidade = document.getElementById("privacidadeconfig");
    let notificacao = document.getElementById("notificacoesconfig");
    let infouser = document.getElementById("informacoesousuario");

    privacidade.style.display = "none";
    notificacao.style.display = "none";
    infouser.style.display = "flex";
}