const loginForm = document.getElementById("botaoexcluircontaconfirmar");
loginForm.addEventListener("click", async (e) => {
  try {
    const response = await fetch(
      `http://localhost:4500/usuarios/${usuario.id}`,
      {
        method: "DELETE",
      }
    );
    alert("Conta excluida com sucesso!");
    localStorage.removeItem("usuarioLogado");
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