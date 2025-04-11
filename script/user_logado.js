    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {
      document.getElementById("usersite").innerHTML = `<p id="nome_user">${usuario.nome}</p>
      <button onclick="abrirMenu()">
        <img id="img_user" src="http://localhost:4500${usuario.foto}" alt="User" />
      </button>`;

     } // else {
    //   window.location.href = "/index.html"; // se não estiver logado
    // }

    function logout() {
      localStorage.removeItem("usuarioLogado");
      window.location.href = "/login.html";
    }
