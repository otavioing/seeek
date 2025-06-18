const userId = JSON.parse(localStorage.getItem("usuarioLogado"));
async function carregarUsuario() {
    try {
        const resposta = await fetch(`http://localhost:4500/usuarios/verificartipo/${userId.id}`);
        const data = await response.json();
        
        if (data && data.length > 0) {
            const userData = data[0]; // Fica mais fácil de ler

            // Caso 1: O usuário é do tipo 'padrao'
            if (userData.tipo === 'padrao') {
                const resposta = await fetch(`http://localhost:4500/usuarios/${userId.id}`);
                const data = await response.json();
                usuario = data[0];


            // Caso 2: O usuário é do tipo 'empresa'
            } else if (userData.tipo === 'empresa') {
                const resposta = await fetch(`http://localhost:4500/usuarios/${userId.id}`);
                const data = await response.json();
                usuario = data[0];

                
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