
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const userId = JSON.parse(localStorage.getItem("usuarioLogado"));




    async function carregarUsuario() {
        try {
            const resposta = await fetch(
                `http://localhost:4500/usuarios/verificartipo/${id}`
            );
            const data = await resposta.json();

            if (data && data.length > 0) {
                const userData = data[0];
                let usuario;

                if (userData.tipo === "padrao") {
                    const respostaPadrao = await fetch(
                        `http://localhost:4500/usuarios/padrao/${id}`
                    );
                    const dataPadrao = await respostaPadrao.json();
                    usuario = dataPadrao[0];
                    document.getElementById("nomedousuario").textContent = usuario.nome;
                    document.getElementById(
                        "nomecompleto"
                    ).textContent = `@${usuario.nome_de_usuario}`;
                    document.getElementById("imgdeperfildouser").src = usuario.foto;
                    document.getElementById("imagemdefundodoperfil").src = usuario.banner;
                    document.getElementById("descricaouser").textContent =
                        usuario.descricao;
                    document.getElementById("numerodepessoasquesegue").textContent =
                        usuario.total_seguindo;
                    document.getElementById("nomerodeseguidores").textContent =
                        usuario.total_seguidores;
                    document.getElementById("quantidadedepost").textContent =
                        usuario.total_posts;
                    const postspadrao = await fetch(
                        `http://localhost:4500/posts/usuario/${id}`
                    );
                    const dadosPostspadrao = await postspadrao.json();
                    post = dadosPostspadrao[0];
                    if (post) {
                        const mainImagensUser = document.getElementById("mainImagensUser");
                        dadosPostspadrao.forEach((post) => {
                            const postElement = document.createElement("div");
                            postElement.className = "imgsUser";
                            postElement.innerHTML = `
                        <img src="${post.imagem}" alt="Post Image">`;
                            mainImagensUser.appendChild(postElement);
                        });
                    } else {
                        console.error("Nenhum post encontrado para o usuário padrão.");
                        document.getElementById(
                            "mainImagensUser"
                        ).innerHTML = `<div class="buttonUser"><p> Este usuário não possui posts.</p></div>`;
                    }
                    const verificarseguindo = await fetch(
                        `http://localhost:4500/usuarios/verificarsesegue/${userId.id}/${id}`
                    );
                    const dadosVerificarseguindo = await verificarseguindo.json();
                    const estaSeguindo = dadosVerificarseguindo.segue;
                    if (estaSeguindo) {
                        document.getElementById("botaoseguir").innerHTML = "Seguindo";
                    } else {
                        document.getElementById("botaoseguir").innerHTML = "Seguir";
                    }
                } else if (userData.tipo === "empresa") {
                    const respostaEmpresa = await fetch(
                        `http://localhost:4500/usuarios/empresas/${id}`
                    );
                    const dataEmpresa = await respostaEmpresa.json();
                    usuario = dataEmpresa[0];
                    // alert("Usuário do tipo " + userData.tipo + " carregado com sucesso!");
                    document.getElementById("nomedousuario").textContent = usuario.nome;
                    document.getElementById(
                        "nomecompleto"
                    ).textContent = `@${usuario.nome_de_usuario}`;
                    document.getElementById("imgdeperfildouser").src = usuario.foto;
                    document.getElementById("imagemdefundodoperfil").src = usuario.banner;
                    document.getElementById("numerodepessoasquesegue").textContent =
                        usuario.total_seguindo;
                    document.getElementById("nomerodeseguidores").textContent =
                        usuario.total_seguidores;
                    document.getElementById("descricaouser").textContent =
                        usuario.descricao;
                    document.getElementById("quantidadedepost").textContent =
                        usuario.total_posts;
                    const postsempresa = await fetch(
                        `http://localhost:4500/posts/usuario/${id}`
                    );
                    const dadosPostsempresa = await postsempresa.json();
                    post = dadosPostsempresa[0];
                    if (post) {
                        const mainImagensUser = document.getElementById("mainImagensUser");
                        dadosPostsempresa.forEach((post) => {
                            const postElement = document.createElement("div");
                            postElement.className = "imgsUser";
                            postElement.innerHTML = `
                        <img src="${post.imagem}" alt="Post Image">`;
                            mainImagensUser.appendChild(postElement);
                        });
                    } else {
                        console.alert("Nenhum post encontrado para o usuário padrão.");
                        document.getElementById(
                            "mainImagensUser"
                        ).innerHTML = `<div class="buttonUser"><p> Este usuário não possui posts.</p></div>`;
                    }
                }
            } else {
                console.error("Nenhum dado de usuário foi retornado pela API.");
            }
        } catch (erro) {
            console.error("Erro ao carregar usuário:", erro.message);
        }
    }

    document.getElementById("SeguirUserPerfil").addEventListener("click", async function () {
        const resposta = await fetch(`http://localhost:4500/usuarios/seguir-usuario/${userId.id}/${id}`, {
            method: "POST",
        });
        const data = await resposta.json();
        document.getElementById("botaoseguir").textContent = data.seguindo ? "Seguindo" : "Seguir";
        
    });

    carregarUsuario();

});


