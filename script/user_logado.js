const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario) {
  document.getElementById(
    "usersite"
  ).innerHTML = `<p id="nome_user">${usuario.nome}</p>
      <button onclick="abrirMenu()">
        <img id="img_user" src="http://localhost:4500${usuario.foto}" alt="User" />
      </button>`;
      document.getElementById("divmeuperfil").innerHTML = `<div class="divmenuperfil">
        <a href="http://localhost:4500/usuario.html?id=${usuario.id}" class="Perf">Meu Perfil</a>
      </div>`;
      document.getElementById("divconfiguracoes").innerHTML = `        <a href="config.html" class="Conf">Configurações</a>
`;
document.getElementById("diventrarsair").innerHTML = `      <button onclick="logout()" id="sairdomenuperfil" class="sairP"> <a class="sairP" href="login.html">Sair</a></button>
`;


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

if (!usuario.acessibilidade_ativa) {
  document.getElementById('barra-acessibilidade').style.display = 'none';
}


function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/login.html";
}
