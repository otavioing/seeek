function criarheader() {
    const header = document.getElementById('header');
    header.innerHTML = `
    <button aria-label="botão menu de hamburguer" class="botaoMenu" id="botaoMenu">
      <span class="linha1"></span>
      <span class="linha2"></span>
      <span class="linha3"></span>
    </button>
    <div class="logosite">
      <a class="logosite" href="index.html"><img src="img/logo.svg" alt="Logo Seek" /></a>
    </div>
    <div class="userhover">
      <button>
        <img id="img_useres" onclick="abrirMenu()" src="img/user2.svg" alt="perfil menu" />
      </button>
    </div>
    <nav class="navsite">
      <div id="headerexplurar">
        <a href="index.html" class="nav-link ExpA">Explorar</a>
      </div>
      <div id="headercursos">
        <a href="cursos.html" class="nav-link CurA">Cursos</a>
      </div>
      <div id="headervagas">
        <a href="vagas.html" class="nav-link VagA">Vagas</a>
      </div>
      <div class="sobrenoss">
        <a href="sobre.html" class="nav-link SobA">Sobre Nós</a>
      </div>
    </nav>
    <div class="pesquisasite">
      <input type="text" placeholder="Pesquisar" class="Pesquisar" id="inputpesquisar"/>
      <a href=""><img src="img/search2.svg" alt="Lupa" /></a>

      <ul id="listaResultados" class="listaResultados">

      </ul>
    </div>
    <div id="usersite" class="usersite">
      <!-- <a href=""><img src="img/bell2.svg" alt="Sino" /></a> -->
      <p id="nome_user"></p>
      <button onclick="abrirMenu()">
        <img id="img_user" src="img/user2.svg" alt="User" />
      </button>
    </div>
    <nav class="hamburguer" id="menu">
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer nav-link" href="index.html">
          <span class="ExpA">Explorar </span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer nav-link" href="cursos.html">
          <span class="CurA">Cursos </span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer nav-link" href="vagas.html">
          <span class="VagA">Vagas</span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer nav-link" href="sobre.html"><span class="SobA">Sobre Nós</span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer" href="ajuda.html">
          <span class="AjuF">Ajuda</span>
        </a>
      </div>
      <div class="bordasuperior"></div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer" href="avisos.html" class="SobA"><span class="AviF">Avisos</span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer" href="avisos.html">
          <span class="AtuF">Atualizações </span></a>
      </div>
      <div class="itemsdomenu">
        <a class="botoesmenuhamburguer" href="sobre.html#contatosobre">
          <span class="Conf">Contato </span></a>
      </div>

      <div class="itemsdomenu">
        <select aria-label="Idioma" name="Idioma" id="idiomaSelect" onchange="TrocaLinguagem(this.value)">
          <option value="pt">Português</option>
          <option value="eng">English</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="fr">Français</option>
        </select>
      </div>
      <div class="bordasuperior"></div>

      <div class="divredessociais">
        <a href="https://www.linkedin.com/in/seek-artes-9a676733a/"><img src="img/Linkedin.svg"
            alt="Logo Linkedin" /></a>
        <button><img src="img/whatsapp.svg" alt="Logo whatsapp" /></button>
        <a href="https://www.instagram.com/seek.oficial/"><img src="img/instagram.svg" alt="Logo instagram" /></a>
      </div>
      <div class="bordasuperior"></div>

      <div class="direitosautoraismenu">
        <p class="DirF">
          Todos os direitos reservados. ©Seek <span class="anoatual"></span>.
        </p>
      </div>
    </nav>

    <div id="menuperfil" class="menuperfil">
      <div id="divmeuperfil" class="divmenuperfil">
        <a onclick="abrirnotificacao()" class="Perf">Meu Perfil</a>
      </div>
      <div id="divconfiguracoes" class="divmenuperfil">
        <a class="Conf" onclick="abrirnotificacao()">Configurações</a>
      </div>
      <div class="botaomodoescuro">
        <label for=""><img src="img/lua.png" alt="Lua" /></label>
        <div class="checkbox-con">
          <input onclick="MudarModos()" id="checkbox" type="checkbox" />
        </div>
        <label for=""><img src="img/sol.png" alt="Sol" /></label>
      </div>
      <div id="diventrarsair" class="divmenuperfil">
        <button id="sairdomenuperfil" class="sairP"><a href="login.html"><span
              class="LoginPerfil">Login</span></a></button>
      </div>
    </div>
    `;
};

criarheader();
