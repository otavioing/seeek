//script para fazer o botão de voltar ao topo da página funcionar

const btnScrollTop = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnScrollTop.classList.add("show-btn-scroll-top");
  } else {
    btnScrollTop.classList.remove("show-btn-scroll-top");
  }
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// script para fazer os inputs type radio serem desmarcados ao clicar neles

function desmarcarRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}


//script para fazer aparecer a caixa para inserir o tempo/meses da vaga
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


// script para abrir a caixaflutuante da aba vagas
function abrircaixaflutuantevagas() {
    let caixa = document.getElementById("caixa");

    if (caixa.style.display == "none" || caixa.style.display == "") {
        caixa.style.display = "block";
    }

}


// script para fechar a caixaflutuante da aba vagas
function fecharcaixaflutuantevagas() {
    let caixa = document.getElementById("caixa");

    if (caixa.style.display == "block") {
        caixa.style.display = "none";
    }
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


