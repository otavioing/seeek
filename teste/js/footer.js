function criarFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `    <div class="linksfooter">
      <div class="infofooter">
        <a href="ajuda.html" class="AjuF">Ajuda</a>
        <a href="avisos.html#atualizacoesss" class="AtuF">Atualizações</a>
      </div>

      <div class="infofooter">
        <a href="sobre.html" class="SobA">Sobre Nós</a>
        <a href="sobre.html#contatosobre" class="ConT">Contato</a>
      </div>
      <div class="infofooter">
        <a href="avisos.html" class="AviF">Avisos</a>

        <select aria-label="Idioma" name="Idioma" id="idiomaSelect" onchange="TrocaLinguagem(this.value)">
          <option value="pt">Português</option>
          <option value="eng">English</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <div class="infofooter">
        <img src="img/logoSeekk 3@2x.png" alt="Logo Seek" />
      </div>
    </div>

    <div class="direitosautorais">
      <p class="DirF"> Todos os direitos reservados. ©Seek .</p>
      <span id="anoatual" class="anoatual"></span>
    </div>`;
    document.body.appendChild(footer);
};

criarFooter();