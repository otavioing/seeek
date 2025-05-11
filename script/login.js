const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("logInEmail").value;
  const senha = document.getElementById("logInPsw").value;

  try {
    const response = await fetch("http://localhost:4500/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok && data.usuario) {
      // Escolha só os dados que você quer salvar
      const usuarioSeguro = {
        id: data.usuario.id,
        nome: data.usuario.nome,
        foto: data.usuario.foto,
        tema: data.usuario.tema,
        acessibilidade_ativa: data.usuario.acessibilidade_ativa,
      };

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSeguro));
      window.location.href = "/index.html";
    } else {
      alert("Email ou senha inválidos.");
    }
  } catch (err) {
    alert("Erro na requisição: " + err.message);
  }
});
