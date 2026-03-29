document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

    async function carregarUsuario() {
        try {
            // 🔎 Verifica tipo do usuário
            const resposta = await fetch(`${ip_api}/usuarios/verificartipo/${id}`);
            const data = await resposta.json();

            if (!data || data.length === 0) {
                console.error("Nenhum dado de usuário foi retornado.");
                return;
            }

            const userData = data[0];

            if (!userData.tipo) {
                window.location.href = "erroaoencontrarusuario.html";
                return;
            }

            // 🔥 Define endpoint dinamicamente
            const endpoint = userData.tipo === "padrao" ? "padrao" : "empresas";

            const respostaUsuario = await fetch(`${ip_api}/usuarios/${endpoint}/${id}`);
            const usuario = await respostaUsuario.json();

            // 🎯 Preenche dados do perfil
            document.getElementById("nomedousuario").textContent = usuario.nome;
            document.getElementById("nomecompleto").textContent = `@${usuario.nome_de_usuario ?? "user"}`;
            document.getElementById("imgdeperfildouser").src = usuario.foto;
            document.getElementById("imagemdefundodoperfil").src = usuario.banner ?? "";
            document.getElementById("descricaouser").textContent = usuario.descricao ?? "";
            document.getElementById("numerodepessoasquesegue").textContent = usuario.total_seguindo;
            document.getElementById("nomerodeseguidores").textContent = usuario.total_seguidores;
            document.getElementById("quantidadedepost").textContent = usuario.total_posts;

            // 📸 Carregar posts
            const respostaPosts = await fetch(`${ip_api}/posts/usuario/${id}`);
            const dadosPosts = await respostaPosts.json();

            const mainImagensUser = document.getElementById("mainImagensUser");
            mainImagensUser.innerHTML = "";

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
            } else {
                mainImagensUser.innerHTML = `
        <div class="buttonUser">
            <p>Este usuário não possui posts.</p>
        </div>`;
            }

            // 👥 Verificar se está seguindo
            const verificarseguindo = await fetch(
                `${ip_api}/usuarios/verificarsesegue/${userId.id}/${id}`
            );
            const dadosVerificarseguindo = await verificarseguindo.json();

            document.getElementById("botaoseguir").textContent =
                dadosVerificarseguindo.segue ? "Seguindo" : "Seguir";

        } catch (erro) {
            console.error("Erro ao carregar usuário:", erro.message);
        }
    }

    // 🔘 Botão seguir / deixar de seguir
    document
        .getElementById("SeguirUserPerfil")
        .addEventListener("click", async function () {
            try {
                const resposta = await fetch(
                    `${ip_api}/usuarios/seguir-usuario/${userId.id}/${id}`,
                    { method: "POST" }
                );

                const data = await resposta.json();

                document.getElementById("botaoseguir").textContent =
                    data.seguindo ? "Seguindo" : "Seguir";

            } catch (erro) {
                console.error("Erro ao seguir usuário:", erro);
            }
        });

    carregarUsuario();
});