document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const barra = document.getElementById('barra-acessibilidade');

  if (usuario && barra && typeof usuario.acessibilidade_ativa !== 'undefined') {
    barra.style.display = usuario.acessibilidade_ativa ? 'block' : 'none';
  }

  // Configuração de fonte
  window.fonteAtual = 100; // 100% = padrão
  const maxFonte = 150;
  const minFonte = 80;

  window.zoommais = function () {
    if (fonteAtual < maxFonte) {
      fonteAtual += 10;
      aplicarZoomFonte();
    }
  };

  window.zoommenos = function () {
    if (fonteAtual > minFonte) {
      fonteAtual -= 10;
      aplicarZoomFonte();
    }
  };

  function aplicarZoomFonte() {
    document.documentElement.style.fontSize = `${fonteAtual}%`;
  }
});



// ativar e desativar barra de acessibilidade
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

// ativar e desativar vlibras
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