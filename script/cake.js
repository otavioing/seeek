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

function setapreco() {

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

function abrircaixaflutuantecursos() {
    let caixaflutuante = document.querySelector(".caixaflutuante");
    let corpo = document.querySelector("body");
    let html = document.querySelector("html");

    if (caixaflutuante.style.display === "none" || caixaflutuante.style.display === "") {
        caixaflutuante.style.display = "flex";
        corpo.style.overflow = "hidden";
        html.style.overflow = "hidden";
    } else {
        caixaflutuante.style.display = "none";
        corpo.style.overflow = "auto";
        html.style.overflow = "auto";
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
// botaomenuperfil.addEventListener("click", abrirMenu);   não apagar essa linha de código 
let botaomenuperfil = document.getElementById("abrirmenuperfil");

function abrirMenu() {
    if (menuperfil.style.right == "-50%" || menuperfil.style.right == "") {
        menuperfil.style.right = "0%";
        menuperfil.style.display = "flex";
    }
    else {
        if (menuperfil.style.right = "0%" || menuperfil.style.right == "") {
            menuperfil.style.right = "-50%";
            menuperfil.style.display = "none";
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

//script para desmarcar os radios ao clicar neles
const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        if (this.checked) {
            const wasChecked = this.dataset.checked === "true";
            if (wasChecked) {
                this.checked = false;
                this.dataset.checked = "false";
            } else {
                radios.forEach(r => r.dataset.checked = "false");
                this.dataset.checked = "true";
            }
        }
    });
});

//script para abrir e fechar o filtro futuante da aba cursos


function abrirfiltro() {

let filtro = document.getElementById("filtroflutuante");

if (filtro.style.display == "block") {
    filtro.style.display = "none";
}
else {
    if (filtro.style.display = "none" || filtro.style.display == "") {
        filtro.style.display = "block";
    }

}

// funçao para abrir os comentários do madal

// function abrirComentarios() {

//     let comentarios = document.getElementById("comentariomodal");
//     let barradivisoria = document.getElementById("barradivisoriamodal");
    
//     if (comentarios.style.display == "none") {
//         comentarios.style.display = "flex";
//     }else {
//         if (comentarios.style.display == "flex" || comentarios.style.display == "") {
//             comentarios.style.display = "none";
//         }
//     }

//     if (barradivisoria.style.display == "none") {
//         barradivisoria.style.display = "flex";
//     }else {
//         if (barradivisoria.style.display == "flex" || barradivisoria.style.display == "") {
//             barradivisoria.style.display = "none";
//         }
//     }
// }


}
