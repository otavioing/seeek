
/*-------------------------------- Modo Escuro --------------------------------*/

function ModoEscuro() {
  let corpo = document.getElementById("todo");
  corpo.classList.add("modoEscuro");
  localStorage.setItem("modo", "escuro");
}

function ModoClaro() {
  let corpo = document.getElementById("todo");
  corpo.classList.remove("modoEscuro");
  localStorage.setItem("modo", "claro");
}

function MudarModos() {
  let corpo = document.getElementById("todo");
  if (corpo.classList.contains("modoEscuro")) {
    ModoClaro();
  } else {
    ModoEscuro();
  }
}

function aplicarModo() {
  if (localStorage.getItem("modo") === "escuro") {
    ModoEscuro();
  } else {
    ModoClaro(); 
  }
}

/*-------------------------------- Troca de lingua --------------------------------*/
// (não ta travando)
function aplicarIdioma() {
  var idioma = {
    eng: { 
      explorarElementoH1: "Explore",
      explorarHeader: "Explore",
      cursosHeader: "Courses",
      vagasHeader: "Jobs",
      sobreNosHeader: "About Us",
      explorarMigalha: "Explore",
      tendenciaMigalha: "trends",
      PersonalizarFiltro: "Customize the Gallery",
      AjudaFooter: "Help",
      TermosFooter: "Terms",
      AtualizacaoFooter: "Updates",
      SobreNosFooter: "About Us",
      ContatoFooter: "Contacts",
      AvisoFooter: "Alerts",
      DireitosFooter: "All rights reserved. ©Seek 2024."
    },
    es: { 
      explorarElementoH1: "Explorar",
      explorarHeader: "Explorar",
      cursosHeader: "Cursos",
      vagasHeader: "Empleos",
      sobreNosHeader: "Sobre Nosotros",
      explorarMigalha: "Explorar",
      tendenciaMigalha: "Actualidads",
      PersonalizarFiltro: "personalizar filtro",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Actualización",
      SobreNosFooter: "Sobre Nosotros",
      ContatoFooter: "Contactos",
      AvisoFooter: "Avisos",
      DireitosFooter: "Todos los derechos reservados. ©Seek 2024."
    },
    pt: { 
      explorarElementoH1: "Explorar",
      explorarHeader: "Explorar",
      cursosHeader: "Cursos",
      vagasHeader: "Vagas",
      sobreNosHeader: "Sobre Nós",
      explorarMigalha: "Explorar",
      tendenciaMigalha: "Tendências",
      PersonalizarFiltro: "Personalizar a Galeria",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Atualização",
      SobreNosFooter: "Sobre Nós",
      ContatoFooter: "Contatos",
      AvisoFooter: "Avisos",
      DireitosFooter: "Todos os direitos reservados. ©Seek 2024."
    }
  };

  var selectedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
  document.getElementById('idiomaSelect').value = selectedLanguage;

  // Atualiza o texto com base no idioma selecionado variando entre pt-br/eng/esp (não ta travando)
  document.getElementById("ExpH1").innerHTML = idioma[selectedLanguage].explorarElementoH1;
  document.getElementById("ExpA").innerHTML = idioma[selectedLanguage].explorarHeader;
  document.getElementById("CurA").innerHTML = idioma[selectedLanguage].cursosHeader;
  document.getElementById("VagA").innerHTML = idioma[selectedLanguage].vagasHeader;
  document.getElementById("SobA").innerHTML = idioma[selectedLanguage].sobreNosHeader;

  document.getElementById("ExpMenu").innerHTML = idioma[selectedLanguage].explorarHeader;
  document.getElementById("CurMenu").innerHTML = idioma[selectedLanguage].cursosHeader;
  document.getElementById("VagMenu").innerHTML = idioma[selectedLanguage].vagasHeader;
  document.getElementById("SobMenu").innerHTML = idioma[selectedLanguage].sobreNosHeader;

  document.getElementById("ExpA2").innerHTML = idioma[selectedLanguage].explorarMigalha;
  document.getElementById("TenA").innerHTML = idioma[selectedLanguage].tendenciaMigalha;
  document.getElementById("PerB").innerHTML = idioma[selectedLanguage].PersonalizarFiltro;

  document.getElementById("AjuF").innerHTML = idioma[selectedLanguage].AjudaFooter;
  document.getElementById("TerF").innerHTML = idioma[selectedLanguage].TermosFooter;
  document.getElementById("AtuF").innerHTML = idioma[selectedLanguage].AtualizacaoFooter;
  document.getElementById("SobF").innerHTML = idioma[selectedLanguage].SobreNosFooter;
  document.getElementById("ConT").innerHTML = idioma[selectedLanguage].ContatoFooter;
  document.getElementById("AviF").innerHTML = idioma[selectedLanguage].AvisoFooter;
  document.getElementById("DirF").innerHTML = idioma[selectedLanguage].DireitosFooter;
}

//essa aqui não deixa perder as configurações de acordo com a escolha do usuario (ta travando)

window.onload = function() {
  aplicarModo();
  aplicarIdioma();
};

// essa parte muda o dioma  (não ta travando)

function TrocaLinguagem(lang) {
  localStorage.setItem('selectedLanguage', lang);
  aplicarIdioma(); 
}



/*-------------------------------- Troca de lingua Cursos --------------------------------*/



