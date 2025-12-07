function abrirComentarios() {
    let comentarios = document.getElementById("comentariomodal");
    let barradivisoria = document.getElementById("barradivisoriamodal");

    // Alternar o display de comentarios
    if (
        comentarios.style.display === "none" ||
        comentarios.style.display === ""
    ) {
        comentarios.style.display = "flex";
    } else {
        comentarios.style.display = "none";
    }

    // Alternar o display de barradivisoria
    if (
        barradivisoria.style.display === "none" ||
        barradivisoria.style.display === ""
    ) {
        barradivisoria.style.display = "flex";
    } else {
        barradivisoria.style.display = "none";
    }
}

// Função para carregar os posts do servidor

let postSelecionadoId = null;


async function carregarPosts() {
    const resposta = await fetch("http://localhost:4500/posts");
    const posts = await resposta.json();
    const container = document.getElementById("gride");
    container.innerHTML = "";
    posts.forEach((post) => {
        const div = document.createElement("div");
        div.className = "post";
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
        div.addEventListener("click", async () => {
            postSelecionadoId = post.id;
            await atualizarLikeInfo();
            document.getElementById("modalImage").src = post.imagem;
            document.querySelector(".nomedousuariomodal h2").textContent =
                post.titulo || "Título do portfólio";
            document.querySelector(
                ".AutMG"
            ).textContent = `${post.nome} • 0 seguidores`;
            document.querySelector(".PotMG ").textContent =
                post.titulo || "Portfólio teste";
            document.querySelector(".imagemusuariomodal img ").src =
                post.foto_perfil || "img/iconeperfil.svg";
            document.querySelector(".logocomentario img").src =
                post.foto_perfil || "img/iconeperfil.svg";
            document.querySelector("#comentariomodal .comentario").textContent =
                post.legenda || "Descrição do portfólio";
            document.querySelector(".Nome").textContent =
                post.nome || "Nome do usuário";
            document.querySelector(".NomeTitu").textContent =
                post.titulo || "Título do portfólio";
            document.querySelector(".comentarioDesc").textContent =
                post.legenda || "Descrição do portfólio";
            document.getElementById("modalPort").style.display = "block";
        });
        container.appendChild(div);
    });
}

carregarPosts();

const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

async function atualizarLikeInfo() {

    // Verifica se o usuário já curtiu o post
    const respostaLike = await fetch(
        `http://localhost:4500/posts/verifica-like/${userId.id}/${postSelecionadoId}`
    );
    const likeData = await respostaLike.json();

    var imagemCoracao = document.getElementById("imagemcoracao");
    if (likeData) {
        imagemCoracao.src = "img/coracaop.svg";
    } else {
        imagemCoracao.src = "img/coracao.svg";
    }

    // Busca o total de likes do post
    var numeroTotalLikes = document.getElementById("nomerolikespost");
    const respostaTotal = await fetch(
        `http://localhost:4500/posts/likes/${postSelecionadoId}`
    );
    const totalData = await respostaTotal.json();

    numeroTotalLikes.innerText = totalData[0]?.total_likes || 0;

    return {
        liked: likeData?.liked || false,
        total_likes: totalData[0]?.total_likes || 0
    };
}


async function inserirLike() {
    const resposta = await fetch(`http://localhost:4500/posts/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId.id, postId: postSelecionadoId }),
    });
    await atualizarLikeInfo();
    return resposta.json();

}

