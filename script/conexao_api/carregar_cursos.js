// =============================
// CARREGAR TODOS OS CURSOS
// =============================

async function carregarCursos() {

    const resposta = await fetch(`${ip_api}/postscursos`);
    const cursos = await resposta.json();

    renderizarCursos(cursos);
}


// =============================
// RENDERIZAR CURSOS NA TELA
// =============================

function renderizarCursos(cursos) {

    const container = document.getElementById("containercursos");
    container.innerHTML = "";

    cursos.forEach((curso) => {

        const div = document.createElement("div");
        div.className = "posts";

        div.innerHTML = `
        <button class="botaocaixacursos">
            <div class="cursos">

              <img class="capa_curso" src="${curso.imagem_curso}" alt="imagem do curso" />

              <div class="informacoescursos">

                <div class="nomedocursoedoautor">
                  <h2 class="NomC">${curso.nome_curso}</h2>
                  <p>${curso.nome_usuario || ""}</p>
                </div>

                <div class="valordocursoebotaofavorito">
                  <p class="precoC">${curso.valor_curso}</p>
                  <img src="img/heart.svg" alt="favorito"/>
                </div>

              </div>

            </div>
        </button>
        `;

        container.appendChild(div);

    });

}


// =============================
// APLICAR FILTRO
// =============================

async function aplicarFiltro() {

    let url = `${ip_api}/postscursos`;

    // -----------------
    // CATEGORIA
    // -----------------

    if (document.getElementById("radio1").checked) {
        url = `${ip_api}/postscursos/listarporcategoria/2`;
    }

    if (document.getElementById("radio2").checked) {
        url = `${ip_api}/postscursos/listarporcategoria/1`;
    }

    if (document.getElementById("radio3").checked) {
        url = `${ip_api}/postscursos/listarporcategoria/3`;
    }

    // -----------------
    // PREÇO
    // -----------------

    if (document.getElementById("radio4").checked) {
        url = `${ip_api}/postscursos/listarporpagamento/gratuito`;
    }

    if (document.getElementById("radio5").checked) {
        url = `${ip_api}/postscursos/listarporpagamento/pago`;
    }

    // -----------------
    // IDIOMA
    // -----------------

    if (document.getElementById("idiomaport").checked) {
        url = `${ip_api}/postscursos/listarporidioma/portugues`;
    }

    if (document.getElementById("idiomaing").checked) {
        url = `${ip_api}/postscursos/listarporidioma/ingles`;
    }

    if (document.getElementById("idiomaesp").checked) {
        url = `${ip_api}/postscursos/listarporidioma/espanhol`;
    }

    try {

        const resposta = await fetch(url);
        const cursos = await resposta.json();

        renderizarCursos(cursos);

    } catch (erro) {

        console.error("Erro ao aplicar filtro:", erro);

    }

}


// =============================
// LIMPAR FILTROS
// =============================

function desmarcarRadio() {

    const radios = document.querySelectorAll("input[type='radio']");

    radios.forEach((radio) => {
        radio.checked = false;
    });

    carregarCursos();
}


// =============================
// EVENTO BOTÃO APLICAR
// =============================

document.querySelector(".AplG").addEventListener("click", function (e) {

    e.preventDefault();

    aplicarFiltro();

});


// =============================
// INICIAR PÁGINA
// =============================

carregarCursos();