async function carregarCursosPaginaUsuarios() {
    const userId = JSON.parse(localStorage.getItem("usuarioLogado"));


    const resposta = await fetch(`http://localhost:4500/postscursos/listarporusuario/${userId.id}`);
    const cursos = await resposta.json();
    const container = document.getElementById("mainCursosUser");
    container.innerHTML = "";
    cursos.forEach((curso) => {
        const div = document.createElement("div");
        div.className = "cursosDoUser";
        div.innerHTML = `
          <h2 class="NomC">${curso.nome_curso}</h2>
          <div class="imgDescPreco">
            <img src="${curso.imagem_curso}" alt="Imagem do curso" />
            <div class="descPreco">
              <p>
                ${curso.descricao_curso || 'Descrição não disponível.'}
              </p>
              <div class="precoCursoUser">
                <h3 class="precoC">${curso.valor_curso}</h3>
                <h4>40<span class="UsoH">horas</span></h4>
              </div>
            </div>
          </div>
          <div class="pessoasLike">
            <div class="likePessoas">
              <div class="likeepessoas1">
                <div class="likeUser">
                  <img src="img/like.svg" alt="likes do curso" />
                  <p>89%</p>
                </div>
                <div class="pessoasUser">
                  <img src="img/circle.svg" alt="pessoas do curso" />
                  <p>1000</p>
                </div>
              </div>
              <img src="img/heart.svg" alt="" />
            </div>
          </div>
    `;

        container.appendChild(div);
    });

}

carregarCursosPaginaUsuarios();