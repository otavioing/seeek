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
                const postspadrao = await fetch(`http://localhost:4500/posts/usuario/${userId.id}`);
                const dadosPostspadrao = await postspadrao.json();
                post = dadosPostspadrao[0];
                if (post) {
                    const mainImagensUser = document.getElementById('mainImagensUser');
                    mainImagensUser.innerHTML = ''; // Limpa o conteúdo anterior
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
            }

        } else {
            console.error("Nenhum dado de usuário foi retornado pela API.");
        }
        
    } catch (erro) {
        console.error("Erro ao carregar usuário:", erro.message);
    }
}




carregarUsuario();

// if (dados.length === 0) {
//     window.location.href = 'erroaoencontrarusuario.html';
//     return;    
// }
// // Exibe os dados na página
// document.getElementById('nomedousuario').textContent = usuario.nome;
// document.getElementById('nomecompleto').textContent = `@${usuario.nome_de_usuario}`;