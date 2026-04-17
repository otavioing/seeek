const params = new URLSearchParams(window.location.search);
const idPost = params.get("idpost");


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
let usuario_id = null;
const usuarioLogadoPosts = JSON.parse(localStorage.getItem("usuarioLogado"));

const botaoEditarModal = document.querySelector(".botaoEditar");
if (botaoEditarModal) {
    botaoEditarModal.addEventListener("click", (event) => {
        event.preventDefault();
        if (!postSelecionadoId) return;

        window.location.href = `editar_projeto.html?idpost=${postSelecionadoId}`;
    });
}

function atualizarVisibilidadeBotaoEditar(idDonoPost) {
    const botaoEditarPost = document.querySelector(".botaoEditar");
    if (!botaoEditarPost) return;

    const ehDonoDoPost =
        Number(usuarioLogadoPosts?.id) === Number(idDonoPost);

    botaoEditarPost.style.display = ehDonoDoPost ? "block" : "none";
}

async function carregarPosts() {
    const resposta = await fetch(`${ip_api}/posts`);
    const posts = await resposta.json();
    const container = document.getElementById("gride");
    container.innerHTML = "";

    posts.forEach((post) => {
        const imagem = post.imagens?.[0] || "img/placeholder.png";

        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
          <div class="divPortifolio" 
          style="background-image: url('${imagem}'); background-size: cover; background-position: center;">
        
        <div class="portHover">
          <div class="portHoverInt">
            <h3 class="PotMG">${post.titulo}</h3>
            <div class="SalvarPort">
              <button><img src="img/Arrow 7.svg" /> <span class="SalM">Salvar</span></button>
            </div>
          </div>

          <div class="PotH">
            <div class="AutorP">
              <h3 class="AutG">${post.user.nome}</h3>
              <p>${post.total_seguidores} <span class="SegG">seguidores</span></p>
            </div>
            <div class="PerfAv">
              <img src="${post.user.foto}" alt="Perfil" />
              <div class="PLike">
                <p class="like">${post.total_likes}</p>
                <img src="img/Vector.svg" alt="Like" />
              </div>
            </div>
          </div>
        </div>
      </div>
        `;

        div.addEventListener("click", async () => {
            postSelecionadoId = post.id;
            usuario_id = post.user.id;
            atualizarVisibilidadeBotaoEditar(post.user.id);

            await atualizarLikeInfo();

            document.getElementById("perfilPort").onclick = () => {
                window.location.href = `perfil.html?id=${usuario_id}`;
            };

            document.getElementById("modalImage").src = imagem;

            document.querySelector(".nomedousuariomodal h2").textContent =
                post.titulo || "Título do portfólio";

            document.querySelector(".AutMG").textContent =
                `${post.user.nome} • ${post.total_seguidores} seguidores`;

            document.querySelector(".PotMG").textContent =
                post.titulo || "Portfólio";

            document.querySelector(".imagemusuariomodal img").src =
                post.user.foto || "img/iconeperfil.svg";

            document.querySelector(".logocomentario img").src =
                post.user.foto || "img/iconeperfil.svg";

            document.querySelector("#comentariomodal .comentario").textContent =
                post.legenda || "Descrição";

            document.querySelector(".Nome").textContent =
                post.user.nome;

            document.querySelector(".NomeTitu").textContent =
                post.titulo;

            document.querySelector(".comentarioDesc").textContent =
                post.legenda;

            document.getElementById("modalPort").style.display = "block";

            document.getElementById("botaocompartilharpost").onclick = () => {
                const link = `https://seeek.netlify.app/index.html?idpost=${post.id}`;

                navigator.clipboard.writeText(link)
                    .then(() => alert("Link copiado!"))
                    .catch(err => console.error("Erro ao copiar: ", err));
            };
        });

        container.appendChild(div);
    });
}

carregarPosts();


async function atualizarLikeInfo() {

    // Verifica se o usuário já curtiu o post
    const respostaLike = await fetch(
        `${ip_api}/posts/verifica-like/${userId.id}/${postSelecionadoId}`
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
        `${ip_api}/posts/likes/${postSelecionadoId}`
    );
    const totalData = await respostaTotal.json();

    numeroTotalLikes.innerText = totalData[0]?.total_likes || 0;

    return {
        liked: likeData?.liked || false,
        total_likes: totalData[0]?.total_likes || 0
    };
}


async function inserirLike() {
    const resposta = await fetch(`${ip_api}/posts/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId.id, postId: postSelecionadoId }),
    });
    await atualizarLikeInfo();
    return resposta.json();

}

