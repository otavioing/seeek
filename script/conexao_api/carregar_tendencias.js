async function carregarsectionsTendencias() {
  const resposta = await fetch(`${ip_api}/tendencias`);
  const tendencias = await resposta.json();
  const container = document.getElementById("containersectionstendencias");
  container.innerHTML = "";

  for (const tendencia of tendencias) {
    const section = document.createElement("section");
    section.classList.add("carrossel-tendencias");

    section.innerHTML = `
      <h4>${tendencia.nome_categoria} - 
        <span class="Tmproj">${tendencia.total_posts} projetos</span>
        <span class="idcategoriapost" style="display:none;">${tendencia.id_categoria}</span>
      </h4>

      <button class="seta-esquerda" onclick="moverEsq(this)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div class="containerpoststendencias carrossel-tend"></div>
    `;

    container.appendChild(section);

    const idCategoria = tendencia.id_categoria;
    const divPosts = section.querySelector(".containerpoststendencias");

    const respPosts = await fetch(`${ip_api}/tendencias/${idCategoria}`);
    const posts = await respPosts.json();

    posts.forEach((post) => {
      const imagem = post.imagens?.[0] || "img/placeholder.png";

      const item = document.createElement("div");
      item.classList.add("carrossel-tend-item");

      item.innerHTML = `
        <img src="${imagem}" alt="${post.titulo}" />
      `;

      divPosts.appendChild(item);
    });
  }
}


carregarsectionsTendencias();
