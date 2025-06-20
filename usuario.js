const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

async function carregarUsuario() {
    try {
        const resposta = await fetch(`http://localhost:4500/usuarios/verificartipo/${userId.id}`);
        const data = await resposta.json();
        
        if (data && data.length > 0) {
            const userData = data[0];
            let usuario;

            if (userData.tipo === 'padrao') {
                const respostaPadrao = await fetch(`http://localhost:4500/usuarios/padrao/${userId.id}`);
                const dataPadrao = await respostaPadrao.json();
                usuario = dataPadrao[0];
                // alert("Usuário do tipo " + userData.tipo + " carregado com sucesso!");
                document.getElementById('nomedousuario').textContent = usuario.nome;
                document.getElementById('nomecompleto').textContent = `@${usuario.nome_de_usuario}`;
                document.getElementById('imgdeperfildouser').src = usuario.foto;
                document.getElementById('imagemdefundodoperfil').src = usuario.banner;
                document.getElementById('descricaouser').textContent = usuario.descricao;
                document.getElementById('quantidadedepost').textContent = usuario.total_posts;
                const postspadrao = await fetch(`http://localhost:4500/posts/usuario/${userId.id}`);
                const dadosPostspadrao = await postspadrao.json();
                post = dadosPostspadrao[0];
                if (post) {
                    const mainImagensUser = document.getElementById('mainImagensUser');
                    mainImagensUser.innerHTML = '<div class="buttonUser"><a href="adicionarProjeto.html"><button><img src="img/lupa+.svg" alt=""><p>Adicionar Projeto</p></button></a></div>'; // Limpa o conteúdo anterior
                    dadosPostspadrao.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.className = 'imgsUser';
                        postElement.innerHTML = `
                        <img src="${post.imagem}" alt="Post Image">`;
                        mainImagensUser.appendChild(postElement);
                    });

                }else {
                    console.error("Nenhum post encontrado para o usuário padrão.");
                    document.getElementById('mainImagensUser').innerHTML = `<div class="buttonUser"><a href="adicionarProjeto.html"><button><img src="img/lupa+.svg" alt=""><p>Adicionar Projeto</p></button></a></div>`;
                }
                    

            } else if (userData.tipo === 'empresa') {
                const respostaEmpresa = await fetch(`http://localhost:4500/usuarios/empresas/${userId.id}`);
                const dataEmpresa = await respostaEmpresa.json();
                usuario = dataEmpresa[0];
                // alert("Usuário do tipo " + userData.tipo + " carregado com sucesso!");
                document.getElementById('nomedousuario').textContent = usuario.nome;
                document.getElementById('nomecompleto').textContent = `@${usuario.nome_de_usuario}`;
                document.getElementById('imgdeperfildouser').src = usuario.foto;
                document.getElementById('imagemdefundodoperfil').src = usuario.banner;
                document.getElementById('descricaouser').textContent = usuario.descricao;
                document.getElementById('quantidadedepost').textContent = usuario.total_posts;
                const postsempresa = await fetch(`http://localhost:4500/posts/usuario/${userId.id}`);
                const dadosPostsempresa = await postsempresa.json();
                post = dadosPostsempresa[0];
                if (post) {
                    const mainImagensUser = document.getElementById('mainImagensUser');
                    mainImagensUser.innerHTML = '<div class="buttonUser"><a href="adicionarProjeto.html"><button><img src="img/lupa+.svg" alt=""><p>Adicionar Projeto</p></button></a></div>'; // Limpa o conteúdo anterior
                    dadosPostsempresa.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.className = 'imgsUser';
                        postElement.innerHTML = `
                        <img src="${post.imagem}" alt="Post Image">`;
                        mainImagensUser.appendChild(postElement);
                    });

                }else {
                    console.error("Nenhum post encontrado para o usuário padrão.");
                    document.getElementById('mainImagensUser').innerHTML = `<div class="buttonUser"><a href="adicionarProjeto.html"><button><img src="img/lupa+.svg" alt=""><p>Adicionar Projeto</p></button></a></div>`;
                }
            }

        } else {
            console.error("Nenhum dado de usuário foi retornado pela API.");
        }
        
    } catch (erro) {
        console.error("Erro ao carregar usuário:", erro.message);
    }
}

document.getElementById('inputImagembannerPerfil').addEventListener('change', async function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('foto', file);

    try {
        const response = await fetch(`http://localhost:4500/usuarios/update-fotobanner/${userId.id}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            // Atualize a imagem do banner na página, se necessário
            const result = await response.json();
            if (result.bannerUrl) {
                document.getElementById('imagemdefundodoperfil').src = result.bannerUrl;
                window.location.reload(); // Recarrega a página para refletir as mudanças
            }
        } else {
            console.error('Erro ao enviar imagem do banner');
        }
    } catch (error) {
        console.error('Erro ao enviar imagem do banner:', error);
    }
});

document.getElementById('inputImagemPerfilUser').addEventListener('change', async function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('foto', file);

    try {
        const response = await fetch(`http://localhost:4500/usuarios/update-foto/${userId.id}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            // Atualize a imagem do perfil na página, se necessário
            const result = await response.json();
            if (result.perfilUrl) {
                document.getElementById('imagemdefundodoperfil').src = result.perfilUrl;
                window.location.reload(); // Recarrega a página para refletir as mudanças
            }
        } else {
            console.error('Erro ao enviar imagem do perfil');
        }
    } catch (error) {
        console.error('Erro ao enviar imagem do perfil:', error);
    }
});



carregarUsuario();