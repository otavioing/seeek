const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`http://localhost:4500/usuarios/${usuario.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${usuario.token}`
      }
    });    
    const data = await response.json();

    if (Array.isArray(data) && data.length === 1) {
      
      //header
      document.getElementById("nome_user").innerHTML = data[0].nome;
      document.getElementById("img_user").src = data[0].foto;
      document.getElementById("img_useres").src = data[0].foto;
      // fim do header

      // menu perfil
      document.getElementById("divmeuperfil").innerHTML = `<a href="usuario.html" class="Perf">Meu Perfil</a>`;
      document.getElementById("divconfiguracoes").innerHTML = `<a href="config.html" class="Conf">Configurações</a>`;
      document.getElementById("diventrarsair").innerHTML = `<button onclick="logout()" id="sairdomenuperfil" class="sairP"> <a class="sairP" href="login.html">Sair</a></button>`;
      // fim do menu perfil

      // barra de acessibilidade
      if (data[0].acessibilidade_ativa === 1) {
        document.getElementById('barra-acessibilidade').style.display = 'block';
      }else{
        document.getElementById('barra-acessibilidade').style.display = 'none';
      }
      // fim da barra de acessibilidade
    } else {
     console.error("Usuário não encontrado ou dados inválidos.");


    }
  } catch (error) {
  console.error("Erro ao buscar dados do usuário:", error);
}

});


if (!usuario.acessibilidade_ativa) {
  document.getElementById('barra-acessibilidade').style.display = 'none';
}


function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/login.html";
}
