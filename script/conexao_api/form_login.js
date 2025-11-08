document.addEventListener("DOMContentLoaded", function () {
  // --------------------------- Conexão com o backend para login --------------------------- //
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const botao = document.getElementById("logInBtn");
    botao.disabled = true;
    botao.innerHTML = `<div class="loader"></div>`;

    const email = document.getElementById("logInEmail").value;
    const senha = document.getElementById("logInPsw").value;

    try {
      const response = await fetch("http://localhost:4500/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok && data.usuario && data.token) {
        // Escolha só os dados que você quer salvar
        const usuarioSeguro = {
          id: data.usuario.id,
          tema: data.usuario.tema,
          tema: data.usuario.tema,
          token: data.token,
        };

        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSeguro));
        window.location.href = "/index.html";
      } else {
        alert("Email ou senha inválidos.");
        const botao = document.getElementById("logInBtn");
        botao.disabled = true;
        botao.innerHTML = `Entrar`;
      }
    } catch (err) {
      alert("Erro na requisição: " + err.message);
    }
  });

  // --------------------------- Fim da conexão com o backend -------------------------- //
});
