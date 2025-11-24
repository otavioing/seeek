// script para fazer o botão de voltar ao topo da página funcionar

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


//script para fazer aparecer a caixa para inserir o tempo/meses do curso
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



// script para fazer aparecer a faixa de preço dos cursos
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

//script para abrir e fechar a caixa flutuante cursos
async function abrircaixaflutuantecursos(id) {
  // let caixaflutuante = document.querySelector(".caixaflutuante");
  // let corpo = document.querySelector("body");
  // let html = document.querySelector("html");

  // if (caixaflutuante.style.display === "none" || caixaflutuante.style.display === "") {
  //     caixaflutuante.style.display = "flex";
  //     corpo.style.overflow = "hidden";
  //     html.style.overflow = "hidden";
  // } else {
  //     caixaflutuante.style.display = "none";
  //     corpo.style.overflow = "auto";
  //     html.style.overflow = "auto";
  // }
  const resposta = await fetch(`http://localhost:4500/postscursos/${id}`);
  const cursos = await resposta.json();
  const container = document.getElementById("caixaflutuante");
  container.innerHTML = "";
  cursos.forEach((curso) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
        <div>
          <button
            id="botaofecharcaixaflutuantecursos"
            onclick="fecharcaixaflutuantecursos()"
          ><img src="img/icon X.svg" alt="Letra X"></button>
          <img src="${curso.imagem_curso}" alt="imagem teste do curso" />
        </div>

        <div class="informacoescaixaflutuantecursos">
          <div class="nomedocursoedoautor">
            <h2 class="NomC">Curso de design</h2>
            <p>Um curso feito por ${curso.nome_usuario}</p>
          </div>
          <div class="valordocursoetempo">
            <h2 class="precoC">${curso.valor_curso}</h2>
            <p>Tempo: <span style="color: red;"> Precisa colocar essa pergunta na hora de criar o curso</span></p>
          </div>
        </div>
        <p id="descricaodacaixaflutuantecursos">Breve descrição do curso</p>
        <div class="infocursoscaixaflutuante">
          <div class="infosobreocurso">
            <div class="iconssobresocurso">
              <img src="../img/estrela.svg" alt="estrela" />
              <img src="../img/cinema.svg" alt="take" />
              <img src="../img/perfilcursos.svg" alt="silhueta de uma pessoa" />
              <img src="../img/like.svg" alt="joia" />
              <img src="../img/som.svg" alt="alto falante " />
              <img src="../img/legenda.svg" alt="legenda" />
            </div>
            <div class="infosobreocursolegendas">
              <p>Level: ${curso.nivel_curso}</p>
              <p>15 módulos(50min)</p>
              <p>20.000 estudantes</p>
              <p>89% reviews positivas</p>
              <p>Audio: ${curso.audio_curso}</p>
              <p>CC: ${curso.legenda_curso}</p>
            </div>
          </div>

          <div class="assinarcursocaixaflutuante">
            <button id="idassinarcursocaixaflutuante">Assinar</button>
          </div>
        </div>
        <div class="botaomaisinfocursoscaixaflutuante">
          <a href="infocursos.html" id="botaoinscrever">Mais informações</a>
        </div>
    `;

    container.style.display = "flex";

    container.appendChild(div);
  });
}

function fecharcaixaflutuantecursos() {
  let caixaflutuante = document.getElementById("caixaflutuante");

  caixaflutuante.style.display = "none";

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