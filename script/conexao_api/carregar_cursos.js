async function carregarCursos() {
    const resposta = await fetch("http://localhost:4500/postscursos");
    const cursos = await resposta.json();
    const container = document.getElementById("containercursos");
    container.innerHTML = "";
    cursos.forEach((curso) => {
        const div = document.createElement("div");
        div.className = "posts";
        div.innerHTML = `
              <button onclick="abrircaixaflutuantecursos(${curso.id})" class="botaocaixacursos">
            <div class="cursos">
              <img class="capa_curso" src="${curso.imagem_curso}" alt="imagem do curso" />
              <div class="informacoescursos">
                <div class="nomedocursoedoautor">
                  <h2 class="NomC">${curso.nome_curso}</h2>
                  <p>${curso.nome_usuario}</p>
                </div>
                <div class="valordocursoebotaofavorito">
                  <p class="precoC">${curso.valor_curso}</p>
                  <img src="img/heart.svg" alt="imagem teste do curso" />
                </div>
              </div>
            </div>
          </button>
    `;

        container.appendChild(div);
    });
}

carregarCursos();