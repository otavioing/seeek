document.addEventListener("DOMContentLoaded", function () {
  const userId = JSON.parse(localStorage.getItem("usuarioLogado"));
  let modoEdicaoPosts = false;

  async function excluirPost(postId, cardElement) {
    const confirmar = window.confirm("Deseja excluir este post?");
    if (!confirmar) return;

    try {
      const resposta = await fetch(`${ip_api}/posts/${postId}`, {
        method: "DELETE",
      });

      if (!resposta.ok) {
        const erro = await resposta.json().catch(() => ({}));
        throw new Error(erro.message || "Não foi possível excluir o post.");
      }

      cardElement.remove();

      const contadorPosts = document.getElementById("quantidadedepost");
      if (contadorPosts) {
        const totalAtual = Math.max(0, Number(contadorPosts.textContent) - 1);
        contadorPosts.textContent = String(totalAtual);
      }
    } catch (erro) {
      console.error("Erro ao excluir post:", erro.message);
      alert(erro.message);
    }
  }

  function atualizarVisibilidadeBotoesExcluir() {
    document.querySelectorAll(".botao-excluir-post").forEach((botao) => {
      botao.style.display = modoEdicaoPosts ? "flex" : "none";
    });
  }

  async function carregarUsuario() {
    try {
      const resposta = await fetch(
        `${ip_api}/usuarios/verificartipo/${userId.id}`
      );
      const data = await resposta.json();

      if (!data || data.length === 0) {
        console.error("Nenhum dado de usuário foi retornado.");
        return;
      }

      const userData = data[0];

      const endpoint =
        userData.tipo === "padrao" ? "padrao" : "empresas";

      const respostaUsuario = await fetch(
        `${ip_api}/usuarios/${endpoint}/${userId.id}`
      );
      const usuario = await respostaUsuario.json();

      // 🎯 Dados do perfil
      document.getElementById("nomedousuario").textContent = usuario.nome;
      document.getElementById("nomecompleto").textContent =
        `@${usuario.nome_de_usuario ?? "user"}`;
      document.getElementById("imgdeperfildouser").src = usuario.foto;
      document.getElementById("imagemdefundodoperfil").src =
        usuario.banner ?? "";
      document.getElementById("numerodepessoasquesegue").textContent =
        usuario.total_seguindo;
      document.getElementById("nomerodeseguidores").textContent =
        usuario.total_seguidores;
      document.getElementById("descricaouser").textContent =
        usuario.descricao ?? "";
      document.getElementById("quantidadedepost").textContent =
        usuario.total_posts;

      // 📸 Posts
      const respostaPosts = await fetch(
        `${ip_api}/posts/usuario/${userId.id}`
      );
      const dadosPosts = await respostaPosts.json();

      const mainImagensUser = document.getElementById("mainImagensUser");

      mainImagensUser.innerHTML = `
  <div class="buttonUser">
    <a href="adicionarProjeto.html">
      <button>
        <img src="img/lupa+.svg" alt="">
        <p>Adicionar Projeto</p>
      </button>
    </a>
  </div>
`;

      if (dadosPosts && dadosPosts.length > 0) {
        dadosPosts.forEach((post) => {
          const imagem = post.imagens?.[0] || "img/placeholder.png";

          const postElement = document.createElement("div");
          postElement.className = "imgsUser";
          postElement.style.position = "relative";
          postElement.style.overflow = "hidden";
          postElement.dataset.postId = post.id;

          postElement.innerHTML = `
      <button type="button" class="botao-excluir-post" aria-label="Excluir post">
        <img src="img/icones/lixeira.svg" alt="Excluir post">
      </button>
      <img src="${imagem}" alt="Post Image">
    `;

          const botaoExcluir = postElement.querySelector(".botao-excluir-post");
          botaoExcluir.style.display = modoEdicaoPosts ? "flex" : "none";
          botaoExcluir.style.position = "absolute";
          botaoExcluir.style.top = "0.75rem";
          botaoExcluir.style.right = "0.75rem";
          botaoExcluir.style.zIndex = "2";
          botaoExcluir.style.border = "none";
          botaoExcluir.style.borderRadius = "999px";
          botaoExcluir.style.padding = "0.45rem";
          botaoExcluir.style.background = "rgba(0, 0, 0, 0.6)";
          botaoExcluir.style.cursor = "pointer";
          botaoExcluir.style.alignItems = "center";
          botaoExcluir.style.justifyContent = "center";
          botaoExcluir.style.backdropFilter = "blur(4px)";

          const iconeLixeira = botaoExcluir.querySelector("img");
          iconeLixeira.style.width = "18px";
          iconeLixeira.style.height = "18px";

          botaoExcluir.addEventListener("click", async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await excluirPost(post.id, postElement);
          });

          mainImagensUser.appendChild(postElement);
        });

        atualizarVisibilidadeBotoesExcluir();
      }
    } catch (erro) {
      console.error("Erro ao carregar usuário:", erro.message);
    }
  }

  const botaoEditarPerfil = document.getElementById("editarUserPerfil");
  if (botaoEditarPerfil) {
    botaoEditarPerfil.addEventListener("click", function () {
      modoEdicaoPosts = !modoEdicaoPosts;
      atualizarVisibilidadeBotoesExcluir();
    });
  }

  carregarUsuario();
});