const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario) {
  document.getElementById(
    "usersite"
  ).innerHTML = `<p id="nome_user">${usuario.nome}</p>
      <button onclick="abrirMenu()">
        <img id="img_user" src="http://localhost:4500${usuario.foto}" alt="User" />
      </button>`;

  document.getElementById("menuperfil").innerHTML = `<div class="divmenuperfil">
        <a href="usuario.html" class="Perf">Meu Perfil</a>
      </div>
       <div class="divmenuperfil">
        <a href="config.html" class="Conf">Configurações</a>
      </div>
      <div class="botaomodoescuro">
        <label for=""><img src="img/lua.png" alt="Lua" /></label>
        <div class="checkbox-con">
          <input onclick="MudarModos()" id="checkbox" type="checkbox" checked />
        </div>
        <label for=""><img src="img/sol.png" alt="Sol" /></label>
      </div>
      <button onclick="logout()" id="sairdomenuperfil" class="sairP"><a href="login.html" style="color: red;">Sair</a></button>
      </div>
`

  document.getElementById("fotodeperfiluser").innerHTML = `<img src=${usuario.foto} alt="logo do usuário">`
  document.getElementById("infoUserContratar").innerHTML =`
  <h1>${usuario.nome}</h1>
                        <p>@${usuario.nome_completo}</p>
                        <p class="cidadeepais"> <span class="UsoCP">cidade e país</span></p>
                        <div class="seguirUser2">
                            <button class="botaoSelecionadoUser" id="editarUserPerfil"> <span class="UsoE">Editar
                                </span></button>
                        </div>
                        <button id="trocarUserPerfil"> <span class="UsoTU">Trocar de Usuário</span></button>
  `
;
} // else {
//   window.location.href = "/index.html"; // se não estiver logado
// }

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/login.html";
}
