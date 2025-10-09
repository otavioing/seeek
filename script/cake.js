




function toggleFiltro() {
  const filtro = document.getElementById("filtroflutuante");
  const largura = window.innerWidth;

  if (largura <= 550) {
    // mobile pequeno: usa animação por top
    filtro.style.top = (filtro.style.top === "0%") ? "-200%" : "0%";
  } else if (largura > 550 && largura <= 1200) {
    // tablet/médio: abre/fecha por display
    filtro.style.display = (filtro.style.display === "block") ? "none" : "block";
  } else {
    // desktop: sidebar fixa → sempre visível
    filtro.style.display = "block";
    filtro.style.top = ""; // limpa se veio do mobile
  }
}

// Adiciona o evento a todos os botões de filtro
document.querySelectorAll(
  ".botaofiltrarcursosmedia, .botaofiltrarcursosmedia1200px, .botaotestparafecharofiltro"
).forEach(btn => {
  btn.addEventListener("click", toggleFiltro);
});

// Garante comportamento correto ao redimensionar
window.addEventListener("resize", () => {
  const filtro = document.getElementById("filtroflutuante");
  const largura = window.innerWidth;

  if (largura > 1200) {
    filtro.style.display = "block";
    filtro.style.top = ""; // limpa caso tenha vindo do mobile
  } else if (largura <= 550) {
    filtro.style.top = "-200%";
    filtro.style.display = ""; // limpa display se tiver vindo do tablet
  } else {
    filtro.style.display = "none";
    filtro.style.top = ""; // limpa top se tiver vindo do mobile
  }
});

// funçao para abrir os comentários do madal

function abrirComentarios(){
    
    let comentarios = document.getElementById("comentariomodal");
    let barradivisoria = document.getElementById("barradivisoriamodal");

    // Alternar o display de comentarios
    if (comentarios.style.display === "none" || comentarios.style.display === "") {
        comentarios.style.display = "flex";
    } else {
        comentarios.style.display = "none";
    }

    // Alternar o display de barradivisoria
    if (barradivisoria.style.display === "none" || barradivisoria.style.display === "") {
        barradivisoria.style.display = "flex";
    } else {
        barradivisoria.style.display = "none";
    }
}



function ativarbarra(){

    let barra = document.getElementById("barra");
    let botaobarra = document.getElementById("botaobarra");

    botaobarra.style.display = "none";
    barra.style.display = "flex";

}

function desativarbarra(){

    let barra = document.getElementById("barra");
    let botaobarra = document.getElementById("botaobarra");

    botaobarra.style.display = "flex";
    barra.style.display = "none";

}



function desativaeativavlibras(){
    let vlibras = document.getElementById("ativaredasativarvlibras");

    if (vlibras.style.display == "block") {
        vlibras.style.display = "none";
    }
    else {
        // Verifica se o estilo de exibição é "none" ou está vazio, e então define para "block"
        if (vlibras.style.display == "none" || vlibras.style.display == "") {
            vlibras.style.display = "block";
        }
    }
}

// Código de puxar as duas barras de acessibilidade

const barraAcessibilidade = document.getElementById("barra-acessibilidade")
const barra = document.getElementById("barra")


let MovimentoX, MovimentoY, Arrastado = false
let barraAtual = null


function PegarPosicaoAntiga() {
    let posicaoSalva = JSON.parse(localStorage.getItem("posicaoBarra"))
    if (posicaoSalva) {
        barraAcessibilidade.style.left = posicaoSalva.left + "px"
        barraAcessibilidade.style.top = posicaoSalva.top + "px"
        barra.style.left = posicaoSalva.left + "px"
        barra.style.top = posicaoSalva.top + "px"
    }
}

function salvarPosicao(left, top) {
    localStorage.setItem("posicaoBarra", JSON.stringify({ left, top }))
}

function iniciarArraste(event, elemento) {
    Arrastado = true
    barraAtual = elemento
    MovimentoX = event.clientX - barraAtual.offsetLeft
    MovimentoY = event.clientY - barraAtual.offsetTop
    barraAtual.style.cursor = "grabbing"
}

document.addEventListener("mousedown", (event) => {
    if (event.target.closest("#barra-acessibilidade")) {
        iniciarArraste(event, barraAcessibilidade)
    } else if (event.target.closest("#barra")) {
        iniciarArraste(event, barra)
    }
});

document.addEventListener("mousemove", (event) => {
    if (Arrastado && barraAtual) {
        let novoX = event.clientX - MovimentoX
        let novoY = event.clientY - MovimentoY

        barraAcessibilidade.style.left = novoX + "px"
        barraAcessibilidade.style.top = novoY + "px"
        barra.style.left = novoX + "px"
        barra.style.top = novoY + "px"

        salvarPosicao(novoX, novoY)
    }
});

document.addEventListener("mouseup", () => {
    Arrastado = false
    if (barraAtual) {
        barraAtual.style.cursor = "grab"
    }
    barraAtual = null
})

window.addEventListener('load', function() 
{ PegarPosicaoAntiga() })



//Fim da ação de pegar e mover a barra de acessibilidade

function abrirnotificacao(){
    let notificacao = document.getElementById("caixadenotificacaofazerlogin");
  
    // notificacao.style.display = "block";
    notificacao.style.top = "0rem";
  }
  
  function fecharnotificacao(){
    let notificacao = document.getElementById("caixadenotificacaofazerlogin");
  
    notificacao.style.top = "-10rem";
  }

