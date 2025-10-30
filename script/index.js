document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalPort");
  const modalImage = document.getElementById("modalImage");
  const span = document.querySelector(".close");
  const body = document.body;

  // Abrir o modal ao clicar na divPortifolio
  document.getElementById("gride").addEventListener("click", function (event) {
    const divPort = event.target.closest(".divPortifolio");
    if (!divPort) return;

    const bg = divPort.style.backgroundImage;
    const url = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    modalImage.src = url;

    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  // Fechar ao clicar no botão X
  span.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflowY = "auto";
  });

  // Fechar ao clicar fora do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      body.style.overflowY = "auto";
    }
  });
});




// funçao para abrir os comentários do madal

function abrirComentarios() {

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

// Função para carregar os posts do servidor

async function carregarPosts() {
  const resposta = await fetch('http://localhost:4500/posts');
  const posts = await resposta.json();
  const container = document.getElementById('gride');
  container.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
          <div class="divPortifolio" id="filho" 
          style="background-image: url('${post.imagem}'); background-size: cover; background-position: center;">
        
        <div class="portHover">
          <div class="portHoverInt">
            <h3 class="PotMG">${post.titulo}</h3>
            <div class="SalvarPort">
              <button><img src="img/Arrow 7.svg" alt="seta" /> <span class="SalM">Salvar</span></button>
            </div>
          </div>

          <div class="PotH">
            <div class="AutorP">
              <h3 class="AutG">${post.nome}</h3>
              <p>9.900 <span class="SegG">seguidores</span></p>
            </div>
            <div class="PerfAv">
              <img id="fotododonodopost" src="${post.foto_perfil}" alt="Perfil" />
              <div class="PLike">
                <p class="like">99%</p>
                <img src="img/Vector.svg" alt="Like" />
              </div>
            </div>
          </div>
        </div>
        
      </div>

   

    `;
    div.addEventListener("click", () => {
      document.getElementById("modalImage").src = post.imagem;
      document.querySelector(".nomedousuariomodal h2").textContent = post.titulo || "Título do portfólio";
      document.querySelector(".AutMG").textContent = `${post.nome} • 0 seguidores`;
      document.querySelector(".PotMG ").textContent = post.titulo || "Portfólio teste";
      document.querySelector(".imagemusuariomodal img ").src = post.foto_perfil || "img/iconeperfil.svg";
      document.querySelector(".logocomentario img").src = post.foto_perfil || "img/iconeperfil.svg";
      document.querySelector("#comentariomodal .comentario").textContent = post.legenda || "Descrição do portfólio";
      document.querySelector(".Nome").textContent = post.nome || "Nome do usuário";
      document.querySelector(".NomeTitu").textContent = post.titulo || "Título do portfólio";
       document.querySelector(".comentarioDesc").textContent = post.legenda || "Descrição do portfólio";
      document.getElementById("modalPort").style.display = "block";
    });

    container.appendChild(div);
  });
}



carregarPosts();carregarPosts();

// Adicionar novo projeto

  function adicionarlist() {
    const container = document.querySelector('.listadeadicao');
    container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
  }