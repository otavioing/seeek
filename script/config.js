const loginForm = document.getElementById("formexcluirconta");
loginForm.addEventListener("submit", async (e) => {
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
