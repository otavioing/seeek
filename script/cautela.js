
// /*-------------------------------- Modo Escuro --------------------------------*/

// function ModoEscuro() {
//   let corpo = document.getElementById("todo");
//   corpo.classList.add("modoEscuro");
//   localStorage.setItem("modo", "escuro");
// }

// function ModoClaro() {
//   let corpo = document.getElementById("todo");
//   corpo.classList.remove("modoEscuro");
//   localStorage.setItem("modo", "claro");
// }

// function MudarModos() {
//   let corpo = document.getElementById("todo");
//   if (corpo.classList.contains("modoEscuro")) {
//     ModoClaro();
//   } else {
//     ModoEscuro();
//   }
// }

// function aplicarModo() {
//   if (localStorage.getItem("modo") === "escuro") {
//     ModoEscuro();
//   } else {
//     ModoClaro(); 
//   }
// }

// /*-------------------------------- Troca de lingua --------------------------------*/
// // (não ta travando)
// function aplicarIdioma() {
//   var idioma = {
//     eng: { 
//       explorarElementoH1: "Explore",
//       explorarHeader: "Explore",
//       cursosHeader: "Courses",
//       vagasHeader: "Jobs",
//       sobreNosHeader: "About Us",
//       explorarMigalha: "Explore",
//       tendenciaMigalha: "trends",
//       PersonalizarFiltro: "Customize the Gallery",
//       AjudaFooter: "Help",
//       TermosFooter: "Terms",
//       AtualizacaoFooter: "Updates",
//       SobreNosFooter: "About Us",
//       ContatoFooter: "Contacts",
//       AvisoFooter: "Alerts",
//       DireitosFooter: "All rights reserved. ©Seek 2024."
//     },
//     es: { 
//       explorarElementoH1: "Explorar",
//       explorarHeader: "Explorar",
//       cursosHeader: "Cursos",
//       vagasHeader: "Empleos",
//       sobreNosHeader: "Sobre Nosotros",
//       explorarMigalha: "Explorar",
//       tendenciaMigalha: "Actualidads",
//       PersonalizarFiltro: "personalizar filtro",
//       AjudaFooter: "Ajuda",
//       TermosFooter: "Termo",
//       AtualizacaoFooter: "Actualización",
//       SobreNosFooter: "Sobre Nosotros",
//       ContatoFooter: "Contactos",
//       AvisoFooter: "Avisos",
//       DireitosFooter: "Todos los derechos reservados. ©Seek 2024."
//     },
//     pt: { 
//       explorarElementoH1: "Explorar",
//       explorarHeader: "Explorar",
//       cursosHeader: "Cursos",
//       vagasHeader: "Vagas",
//       sobreNosHeader: "Sobre Nós",
//       explorarMigalha: "Explorar",
//       tendenciaMigalha: "Tendências",
//       PersonalizarFiltro: "Personalizar a Galeria",
//       AjudaFooter: "Ajuda",
//       TermosFooter: "Termo",
//       AtualizacaoFooter: "Atualização",
//       SobreNosFooter: "Sobre Nós",
//       ContatoFooter: "Contatos",
//       AvisoFooter: "Avisos",
//       DireitosFooter: "Todos os direitos reservados. ©Seek 2024."
//     }
//   };

//   var selectedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
//   document.getElementById('idiomaSelect').value = selectedLanguage;

//   // Atualiza o texto com base no idioma selecionado variando entre pt-br/eng/esp (não ta travando)
//   document.getElementById("ExpH1").innerHTML = idioma[selectedLanguage].explorarElementoH1;
//   document.getElementById("ExpA").innerHTML = idioma[selectedLanguage].explorarHeader;
//   document.getElementById("CurA").innerHTML = idioma[selectedLanguage].cursosHeader;
//   document.getElementById("VagA").innerHTML = idioma[selectedLanguage].vagasHeader;
//   document.getElementById("SobA").innerHTML = idioma[selectedLanguage].sobreNosHeader;

//   document.getElementById("ExpMenu").innerHTML = idioma[selectedLanguage].explorarHeader;
//   document.getElementById("CurMenu").innerHTML = idioma[selectedLanguage].cursosHeader;
//   document.getElementById("VagMenu").innerHTML = idioma[selectedLanguage].vagasHeader;
//   document.getElementById("SobMenu").innerHTML = idioma[selectedLanguage].sobreNosHeader;

//   document.getElementById("ExpA2").innerHTML = idioma[selectedLanguage].explorarMigalha;
//   document.getElementById("TenA").innerHTML = idioma[selectedLanguage].tendenciaMigalha;
//   document.getElementById("PerB").innerHTML = idioma[selectedLanguage].PersonalizarFiltro;

//   document.getElementById("AjuF").innerHTML = idioma[selectedLanguage].AjudaFooter;
//   document.getElementById("TerF").innerHTML = idioma[selectedLanguage].TermosFooter;
//   document.getElementById("AtuF").innerHTML = idioma[selectedLanguage].AtualizacaoFooter;
//   document.getElementById("SobF").innerHTML = idioma[selectedLanguage].SobreNosFooter;
//   document.getElementById("ConT").innerHTML = idioma[selectedLanguage].ContatoFooter;
//   document.getElementById("AviF").innerHTML = idioma[selectedLanguage].AvisoFooter;
//   document.getElementById("DirF").innerHTML = idioma[selectedLanguage].DireitosFooter;
// }

// //essa aqui não deixa perder as configurações de acordo com a escolha do usuario (ta travando)

// window.onload = function() {
//   aplicarModo();
//   aplicarIdioma();
// };

// // essa parte muda o dioma  (não ta travando)

// function TrocaLinguagem(lang) {
//   localStorage.setItem('selectedLanguage', lang);
//   aplicarIdioma(); 
// }



// /*-------------------------------- Troca de lingua Cursos --------------------------------*/



//-------------------------------- Modo Escuro --------------------------------/

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

//-------------------------------- Troca de lingua --------------------------------/
// (não ta travando)
function aplicarIdioma() {
  var idioma = {
    eng: { 
      explorarElementoH1: "Explore",
      explorarHeader: "Explore",
      cursosHeader: "Courses",
      vagasHeader: "Jobs",
      sobreNosHeader: "About Us",
      tendenciaMigalha: "trends",
      PersonalizarFiltro: "Customize the Gallery",
      Perfil:"My profile",
      PerfilConfiguracoes:"Settings",
      PerfilTema:"Theme",
      PerfilSair:" Log out",
      ModalFavoritar: "Favorite",
      ModalFerramentas:"Tools",
      ModalComentarios:"Comments",
      ModalCompartilhar:"Share",
      PortifolioTeste:"Test portfolio",
      PortifolioAutor:"Author",
      ModalPortifolio:"Portfolio prototype",
      ModalAutor:"Creators name • 0 followers",
      AjudaFooter: "Help",
      TermosFooter: "Terms",
      AtualizacaoFooter: "Updates",
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
      tendenciaMigalha: "Actualidads",
      PersonalizarFiltro: "personalizar filtro",
      Perfil:"Mi perfil",
      PerfilConfiguracoes:"Configuraciones",
      PerfilTema:"Tema",
      PerfilSair:"Salir",
      ModalFavoritar: "Favorite",
      ModalFavoritar: "Favorito",
      ModalFerramentas:"Herramientas",
      ModalComentarios:"Comentarios",
      ModalCompartilhar:"Compartir",
      PortifolioTeste:" Portafolio Experimento",
      PortifolioAutor:"Autor",
      ModalPortifolio:" Prototipo del portafolio",
      ModalAutor:"Nombre del creador • 0 seguidores",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Actualización",
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
      tendenciaMigalha: "Tendências",
      PersonalizarFiltro: "Personalizar a Galeria",
      Perfil:"Meu Perfil",
      PerfilConfiguracoes:"Configurações",
      PerfilTema:"Tema",
      PerfilSair:" Sair",
      ModalFavoritar: "Favoritar",
      ModalFerramentas:"Ferramentas",
      ModalComentarios:"Comentários",
      ModalCompartilhar:"Compartilhar",
      PortifolioTeste:"Test portfolio",
      PortifolioAutor:"Author",
      ModalPortifolio:"Protótipo de portifólio",
      ModalAutor:"Nome do criador • 0 seguidores",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Atualização",
      ContatoFooter: "Contatos",
      AvisoFooter: "Avisos",
      DireitosFooter: "Todos os direitos reservados. ©Seek 2024."
    }
  };

  var selectedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
  document.getElementById('idiomaSelect').value = selectedLanguage;{

  // Atualiza o texto com base no idioma selecionado variando entre pt-br/eng/esp (não ta travando)

}


// Header e Footer
  var HeaderExplorar = document.getElementsByClassName("ExpA");
  for (var i = 0; i < HeaderExplorar.length; i++) {
    HeaderExplorar[i].innerHTML = idioma[selectedLanguage].explorarHeader;
  }

  var HeaderCursos = document.getElementsByClassName("CurA");
  for (var i = 0; i < HeaderCursos.length; i++) {
    HeaderCursos[i].innerHTML = idioma[selectedLanguage].cursosHeader;
  }

  
  var HeaderVagas = document.getElementsByClassName("VagA");
  for (var i = 0; i < HeaderVagas.length; i++) {
    HeaderVagas[i].innerHTML = idioma[selectedLanguage].vagasHeader;
  }

  
  var HeaderSobre = document.getElementsByClassName("SobA");
  for (var i = 0; i < HeaderSobre.length; i++) {
    HeaderSobre[i].innerHTML = idioma[selectedLanguage].sobreNosHeader;
  }

  var MenuPerfil = document.getElementsByClassName("Perf");
  for (var i = 0; i < MenuPerfil.length; i++) {
    MenuPerfil[i].innerHTML = idioma[selectedLanguage].Perfil;
  }

  var menuConfiguracao = document.getElementsByClassName("Conf");
  for (var i = 0; i < menuConfiguracao.length; i++) {
    menuConfiguracao[i].innerHTML = idioma[selectedLanguage].PerfilConfiguracoes;
  }

  var menuTema = document.getElementsByClassName("tema");
  for (var i = 0; i < menuTema.length; i++) {
    menuTema[i].innerHTML = idioma[selectedLanguage].PerfilTema;
  }

  var menusair = document.getElementsByClassName("sairP");
  for (var i = 0; i < menusair.length; i++) {
    menusair[i].innerHTML = idioma[selectedLanguage].PerfilSair;
  }

  
  var MigalhaTendencia = document.getElementsByClassName("TenA");
  for (var i = 0; i < MigalhaTendencia.length; i++) {
    MigalhaTendencia[i].innerHTML = idioma[selectedLanguage].tendenciaMigalha;
  }

  
  var PersonalizarBotao = document.getElementsByClassName("PerB");
  for (var i = 0; i < PersonalizarBotao.length; i++) {
    PersonalizarBotao[i].innerHTML = idioma[selectedLanguage].PersonalizarFiltro;
  }

  
  var FooterAjuda = document.getElementsByClassName("AjuF");
  for (var i = 0; i < FooterAjuda.length; i++) {
    FooterAjuda[i].innerHTML = idioma[selectedLanguage].AjudaFooter;
  }

  
  var FooterTermos = document.getElementsByClassName("TerF");
  for (var i = 0; i < FooterTermos.length; i++) {
    FooterTermos[i].innerHTML = idioma[selectedLanguage].TermosFooter;
  }

  
  var FooterAtualizacao = document.getElementsByClassName("AtuF");
  for (var i = 0; i < FooterAtualizacao.length; i++) {
    FooterAtualizacao[i].innerHTML = idioma[selectedLanguage].AtualizacaoFooter;
  }

  
  var FooterContato = document.getElementsByClassName("ConT");
  for (var i = 0; i < FooterContato.length; i++) {
    FooterContato[i].innerHTML = idioma[selectedLanguage].ContatoFooter;
  }

  
  var FooterAvisos = document.getElementsByClassName("AviF");
  for (var i = 0; i < FooterAvisos.length; i++) {
    FooterAvisos[i].innerHTML = idioma[selectedLanguage].AvisoFooter;
  }

  
  var FooterDireitos = document.getElementsByClassName("DirF");
  for (var i = 0; i < FooterDireitos.length; i++) {
    FooterDireitos[i].innerHTML = idioma[selectedLanguage].DireitosFooter;
  }

  //Conteudo das páginas
  // INDEX
  
  var FavoritarModal  = document.getElementsByClassName("modalFa");
  for (var i = 0; i < FavoritarModal.length; i++) {
    FavoritarModal[i].innerHTML = idioma[selectedLanguage].ModalFavoritar;
  }

  var FerramentasModal = document.getElementsByClassName("modalFe");
  for (var i = 0; i < FerramentasModal.length; i++) {
    FerramentasModal[i].innerHTML = idioma[selectedLanguage].ModalFerramentas;
  }

  var FerramentasCompartilhar = document.getElementsByClassName("modalComp");
  for (var i = 0; i < FerramentasCompartilhar.length; i++) {
    FerramentasCompartilhar[i].innerHTML = idioma[selectedLanguage].ModalCompartilhar;
  }

  var ComentariosModal = document.getElementsByClassName("modalCome");
  for (var i = 0; i < ComentariosModal.length; i++) {
    ComentariosModal[i].innerHTML = idioma[selectedLanguage].ModalComentarios;
  }

  var PortifolioGrid = document.getElementsByClassName("PotG");
  for (var i = 0; i < PortifolioGrid.length; i++) {
    PortifolioGrid[i].innerHTML = idioma[selectedLanguage].PortifolioTeste;
  }

  var AutorGrid  = document.getElementsByClassName("AutG");
  for (var i = 0; i < AutorGrid.length; i++) {
    AutorGrid[i].innerHTML = idioma[selectedLanguage].PortifolioAutor;
  }

  var PortfolioModal  = document.getElementsByClassName("PotMG");
  for (var i = 0; i < PortfolioModal.length; i++) {
    PortfolioModal[i].innerHTML = idioma[selectedLanguage].ModalPortifolio;
  }

  var AutorModal  = document.getElementsByClassName("AutMG");
  for (var i = 0; i < AutorModal.length; i++) {
    AutorModal[i].innerHTML = idioma[selectedLanguage].ModalAutor;
  }


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



//-------------------------------- Troca de lingua Cursos --------------------------------/