document.addEventListener("DOMContentLoaded", function () {
  const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

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

          postElement.innerHTML = `
      <img src="${imagem}" alt="Post Image">
    `;

          mainImagensUser.appendChild(postElement);
        });
      }
    } catch (erro) {
      console.error("Erro ao carregar usuário:", erro.message);
    }
  }

  carregarUsuario();
});