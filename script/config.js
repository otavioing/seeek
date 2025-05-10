document.addEventListener('DOMContentLoaded', function () {
  
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

//começo da parte de acessibilidade

document.getElementById(usuario.acessibilidade_ativa ? 'barraacessibilidadevisivel' : 'barraacessibilidadeinvisivel').checked = true;


// Adiciona o listener para atualizar a escolha
document.querySelectorAll('input[name="barraacessibilidade"]').forEach((input) => {
  input.addEventListener('change', async () => {
    const novoValor = input.value === 'true';

    try {
      // Envia para o backend
      await fetch('http://localhost:4500/usuarios/atualizar-acessibilidade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: usuario.id,
          acessibilidade_ativa: novoValor
        })
      });

      // Atualiza localmente
      usuario.acessibilidade_ativa = novoValor;
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      // Mostra ou oculta a barra de acessibilidade imediatamente
      document.getElementById('barra-acessibilidade').style.display = novoValor ? 'block' : 'none';
    } catch (erro) {
      console.error("Erro ao atualizar acessibilidade:", erro);
    }
  });
});
});

//fim da parte de acessibilidade

// Código para o form de editar perfil

fetch(`http://localhost:4500/usuarios/${usuario.id}`)
.then(response => response.json())
   .then(data => {

   const user = data[0]; // <- Aqui está o segredo!

    console.log("Usuário recebido:", user);

         document.getElementById("CidadeForm").value = user.cidade_pais || "";
         document.getElementById("CargoForm").value = user.cargo || "";
         document.getElementById("NomeForm").value = user.nome || "";
         document.getElementById("EmailForm").value = user.email || "";
         document.getElementById("SenhaForm").value = ""; // segurança: não mostrar senha
         document.getElementById("URLForm").value = `http://localhost:4500/usuario.html?id=${usuario.id}`;   // ajuste se tiver campo real para URL
     })
      .catch(error => {
              console.error("Erro ao buscar dados do usuário:", error);
           });

// fim do código de editar perfil

// Código para o botão de excluir conta


const loginForm = document.getElementById("botaoexcluircontaconfirmar");
loginForm.addEventListener("click", async (e) => {
  try {
    const response = await fetch('http://localhost:4500/usuarios/solicitar-exclusao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: usuario.nome,
        senha: usuario.senha,
        email: usuario.email
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert('Erro ao solicitar verificação: ' + data.message);
      return;
    }

    codigoGerado = data.codigo; // salvar o código enviado
    verificacaoContainer.style.display = 'block'; // mostra o campo de verificação

  } catch (err) {
    alert("Erro: " + err.message);
  }
});

const verificarCodigoBtn = document.getElementById('verificarCodigoBtn');
const codigoVerificacaoInput = document.getElementById('codigoVerificacao');
verificarCodigoBtn.addEventListener('click', async () => {
  const codigoDigitado = codigoVerificacaoInput.value;

  if (codigoDigitado != codigoGerado) {
    alert("Código incorreto!");
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:4500/usuarios/${usuario.id}`,
      {
        method: "DELETE",
      }
    );
    alert("Conta excluida com sucesso!");
    localStorage.removeItem("usuarioLogado");
    let notificacao = document.getElementById("caixadenotificacaoexcluirconta");

    notificacao.style.top = "-10rem";
  } catch (err) {
    alert("Erro na requisição: " + err.message);
  }
});


function abrirnotificacaoexcluirconta(){
  let notificacao = document.getElementById("caixadenotificacaoexcluirconta");

  // notificacao.style.display = "block";
  notificacao.style.top = "0rem";
}

function cancelarnotificacaoexcluirconta(){
  let notificacao = document.getElementById("caixadenotificacaoexcluirconta");

  notificacao.style.top = "-10rem";
}

//fim do código de excluir conta


