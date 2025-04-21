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