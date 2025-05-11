const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`http://localhost:4500/usuarios/${usuario.id}`);
    const data = await response.json();

    if (Array.isArray(data) && data.length === 1) {
      console.log("Usuário encontrado:", data[0]);
      //header
      document.getElementById("nome_user").innerHTML = data[0].nome;
      document.getElementById("img_user").src = data[0].foto;
      document.getElementById("img_useres").src = data[0].foto;
      // fim do header
      // menu perfil
      document.getElementById("divmeuperfil").innerHTML = `<div class="divmenuperfil"><a href="http://localhost:4500/usuario.html?id=${usuario.id}" class="Perf">Meu Perfil</a></div>`;
      document.getElementById("divconfiguracoes").innerHTML = `<a href="config.html" class="Conf">Configurações</a>`;
      document.getElementById("diventrarsair").innerHTML = `<button onclick="logout()" id="sairdomenuperfil" class="sairP"> <a class="sairP" href="login.html">Sair</a></button>`;
      // fim do menu perfil
    } else {
     console.log("Usuário não encontrado ou dados inválidos.");


    }
  } catch (error) {
  console.log("Erro ao buscar dados do usuário:", error);
  alert("Você não está logado", error);
}

});


if (!usuario.acessibilidade_ativa) {
  document.getElementById('barra-acessibilidade').style.display = 'none';
}


function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/login.html";
}
