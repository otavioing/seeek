// const params = new URLSearchParams(window.location.search);
// const idUsuario = params.get('id');

// async function carregarUsuario() {
//     try {
//         const resposta = await fetch(`http://localhost:4500/usuarios/${idUsuario}`);
//         const dados = await resposta.json();
//         const usuario = dados[0];

//         if (dados.length === 0) {
//             window.location.href = 'erroaoencontrarusuario.html';
//             return;
//         }

//         // Exibe os dados na página
//         document.getElementById('nomedousuario').textContent = usuario.nome;
//         document.getElementById('nomecompleto').textContent = usuario.nome_completo;
//         document.getElementById('imgdeperfildouser').src = `http://localhost:4500${usuario.foto}`;
//         document.getElementById('imagemdefundodoperfil').src = `http://localhost:4500${usuario.banner}`;
//         document.getElementById('descricaouser').textContent = usuario.descricao;
//         document.getElementById('instagram').href = `https://www.instagram.com/${usuario.instagram}/`;
//         document.getElementById('twitter').href = `https://x.com/${usuario.x_twitter}/`;
        
//     } catch (erro) {
//         console.error("Erro ao carregar usuário:", erro.message);
//     }
// }


// carregarUsuario();
