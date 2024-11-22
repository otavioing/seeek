
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
// sript para trocar a lingua do site
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
      ModalContratar:"Hire",
      ModalFavoritar: "Favorite",
      ModalFerramentas:"Tools",
      ModalComentarios:"Comments",
      ModalCompartilhar:"Share",
      PortifolioTeste:"Test portfolio",
      portSalvar:"save",
      PortifolioAutor:"Author",
      ModalPortifolio:"Portfolio prototype",
      ModalAutor:"Creators name • 0 followers",
      AjudaFooter: "Help",
      TermosFooter: "Terms",
      AtualizacaoFooter: "Updates",
      ContatoFooter: "Contacts",
      AvisoFooter: "Alerts",
      DireitosFooter: "All rights reserved. ©Seek 2024.",

      PesquisarPlace:"Search",
      CidadePlace:"Enter the city name",
      CargoPlace:"User's role",
      NomePlace:"UserName",

      SobrePrincipaltexto: "Our intention with Seek is to give visibility and greater opportunities to visual artists, as well as to provide increased contact with companieslooking for professionals with their skills.",
      SobreSubPrincipalTexto: "We also offer access to an education platform, allowing artists and other professionals to improve and stand out in the job market.",
      EquipeSob:"Team",
      ContatoEquipe:"If you need any further information about us or the website, please contact us through our social media channels.",

      OpçãoSim:"Yes",
      OpçãoNão:"No",
      Pergunta1:"Do you want everyone to see your profile in the search area?",
      Pergunta2:"Do you want everyone to see your projects in the search area?",
      Pergunta3:"Do you want everyone to see your courses in the search area?",
      Pergunta4:"Do you want everyone to see your email?",
      Pergunta5:"Do you want to receive a summary of your notifications by email?",
      Pergunta6:"Do you want to receive an immediate notification of contract requests?",
      Pergunta7:"Do you want to receive an immediate notification when someone requests to join a team?",
      Pergunta8:"Do you want to receive notification when there are offers/discounts?",
      Pergunta9:"Do you want to receive notification when there are offers/discounts?",
      Pergunta10:"Block adult content?",
      Pergunta11:"Do not allow third parties to embed your content on other sites?",
      PrivacidadeConf: "Privacy",
      NotificacoesConf: "Notifications",
      InfoUsuConf: "User Information",
      EmailConf: "Email/Password",
      configuracoes:"Settings",
      CidadeConf:"City/Country",
      Cargo:"Role/Position",
      PerfilURL:"Profile URL",
      EmailSeu:"Your email",
      Senha:"Password",
      NomeUsuario:"Username",
      SalvarConf:"Save Changes",

      FiltarGeral: "Filter",
      TiposCurso: "Types of courses",
      DesignCursos: "Design",
      IlustracaoCursos: "Illustration",
      FotografiaCursos: "Photography",
      PrecoCursos: "Price",
      FixoCursos: "Fixed",
      MensalCursos: "Monthly",
      Faixadepreco: "Price Range",
      DuracaoCursos: "Duration",
      IndefinidaCursos: "Undefined",
      TempoEmHorasCursos: "Time in hours",
      LocalCursos: "Location",
      PresencialCursos: "In-person",
      Homeoffice: "Home office",
      AplicarGeral: "Apply",
      LimparGeral: "Clear Filter",
      NomeCurso: "Course Name",
      PrecodecadaCurso: "$16.00/month",

    
      CampoDeCriaçãoVagas: "Creation Fields",
      HabilidadesVagas: "Skills",
      NomeDasVagas: "Job Title",
      HorasAtrasVagas: "11 hours ago",
      EnviarPropostaVagas: "Submit Proposal",
      MaisInformaçõesVagas: "More Information",

      AvisosTextoPrincipal: "The site is still under development, the page notices on Seek will not change until we can deliver a great experience to everyone, and achieve our goal of making Seek a place everyone can use without worries and enjoy its functionalities, and that meets the teaching expectations, and visibility for those who don't have it. We are in the second version of Seek for the second semester of IT, so there will be big changes in the coming semesters.",
      AvisosServidores: "Seek servers working",
      AvisosPortifolios: "Portfolios in modal windows",
      AvisosAparência: "New site appearance",
      AvisoResponsivo: "Responsive site for mobiles and tablets",

      AjudaPortifolio: "Portfolios",
      AjudaUsuario: "User",
      AjudaCursoseVagas: "Courses/Jobs",
      CadastroGeral: "Registration",
      AjudaTextoUsuario: "Starting with the user part, you can configure your account as you like and even change its type, choosing an account type for teachers, or the default (artists), or company.",
      AjudaTextoPortifolio: "Starting with the user part, you can configure your account as you like and even change its type, choosing an account type for teachers, or the default (artists), or company.",
      AjudaCursoseVagasTexto: "Similar to the portfolio, you can access the course or job by clicking on its cover, and if you want more information, just click on 'more information' to see better the job or course specifications, as well as being able to access the courses you want via the search bar or menu by going to 'courses' or 'jobs'.",
      AjudaCadastroGeral: "On the login/registration page, use your main or preferred email to access the site if you want, otherwise just click on the arrow in the top right corner to access the site as anonymous."
      
      

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
      ModalContratar:"Contratar",
      ModalFavoritar: "Favorite",
      ModalFavoritar: "Favorito",
      ModalFerramentas:"Herramientas",
      ModalComentarios:"Comentarios",
      ModalCompartilhar:"Compartir",
      PortifolioTeste:" Portafolio Experimento",
      portSalvar:"ahorrar",
      PortifolioAutor:"Autor",
      ModalPortifolio:" Prototipo del portafolio",
      ModalAutor:"Nombre del creador • 0 seguidores",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Actualización",
      ContatoFooter: "Contactos",
      AvisoFooter: "Avisos",
      DireitosFooter: "Todos los derechos reservados. ©Seek 2024.",

      PesquisarPlace:"Buscar",
      CidadePlace:"Escribe el nombre de la ciudad",
      CargoPlace:"Cargodelusuario",
      NomePlace:"Nombre del Usuario",

      SobrePrincipaltexto: "Nuestra intención con Seek es dar visibilidad y mayores oportunidades a los artistas visuales, además de proporcionar un mayor contacto con empresas que buscan profesionales con sus capacidades",
      SobreSubPrincipalTexto: "También ofrecemos acceso a una plataforma de educación, permitiendo que artistas y otros profesionales puedan mejorar y destacarse en el mercado laboral.",
      EquipeSob: "Equipo",
      ContatoEquipe: "Si necesita más información sobre nosotros o sobre el sitio, contáctenos a través de nuestras redes sociales.",

      OpçãoSim: "Sí",
      OpçãoNão: "No",
      Pergunta1: "¿Desea que todos puedan ver su perfil en el área de búsqueda?",
      Pergunta2: "¿Desea que todos puedan ver sus proyectos en el área de búsqueda?",
      Pergunta3: "¿Desea que todos puedan ver sus cursos en el área de búsqueda?",
      Pergunta4: "¿Desea que todos puedan ver su correo electrónico?",
      Pergunta5: "¿Desea recibir un resumen de sus notificaciones por correo electrónico?",
      Pergunta6: "¿Desea recibir una notificación inmediata de solicitudes de contrato?",
      Pergunta7: "¿Desea recibir una notificación inmediata cuando alguien solicite unirse a un equipo?",
      Pergunta8: "¿Desea recibir notificación cuando haya ofertas/descuentos?",
      Pergunta9: "¿Desea recibir notificación cuando haya ofertas/descuentos?",
      Pergunta10: "¿Bloquear contenido para adultos?",
      Pergunta11: "¿No permitir que terceros incorporen su contenido en otros sitios?",
      PrivacidadeConf: "Privacidad",
      NotificacoesConf: "Notificaciones",
      InfoUsuConf: "Información del Usuario",
      EmailConf: "Email/Contraseña",
      configuracoes: "Configuraciones",
      CidadeConf: "Ciudad/País",
      Cargo: "Cargo",
      PerfilURL: "URL del perfil",
      EmailSeu: "Su correo electrónico",
      Senha: "Contraseña",
      NomeUsuario: "Nombre de Usuario",
      SalvarConf: "Guardar Cambios",

      FiltarGeral: "Filtrar",
      TiposCurso: "Tipos de cursos",
      DesignCursos: "Diseño",
      IlustracaoCursos: "Ilustración",
      FotografiaCursos: "Fotografía",
      PrecoCursos: "Precio",
      FixoCursos: "Fijo",
      MensalCursos: "Mensual",
      Faixadepreco: "Rango de Precio",
      DuracaoCursos: "Duración",
      IndefinidaCursos: "Indefinida",
      TempoEmHorasCursos: "Tiempo en horas",
      LocalCursos: "Ubicación",
      PresencialCursos: "Presencial",
      Homeoffice: "Home office",
      AplicarGeral: "Aplicar",
      LimparGeral: "Limpiar Filtro",
      NomeCurso: "Nombre del Curso",
      PrecodecadaCurso: "€12,00/mes",

    
      CampoDeCriaçãoVagas: "Campos de Creación",
      HabilidadesVagas: "Habilidades",
      NomeDasVagas: "Nombre de la vacante",
      HorasAtrasVagas: "Hace 11 horas",
      EnviarPropostaVagas: "Enviar propuesta",
      MaisInformaçõesVagas: "Más información",

      AvisosTextoPrincipal: "El sitio todavía está en desarrollo, los avisos de las páginas de Seek no cambiarán hasta que podamos entregar una excelente experiencia a todos, y lograr nuestro objetivo de hacer de Seek un lugar que todos puedan usar sin preocupaciones y disfrutar de sus funcionalidades, y que cumpla con las expectativas de enseñanza, y visibilidad para aquellos que no la tienen. Estamos en la segunda versión de Seek para el segundo semestre de TI, por lo que habrá grandes cambios en los próximos semestres.",
      AvisosServidores: "Servidores de Seek funcionando",
      AvisosPortifolios: "Portafolios en ventanas modales",
      AvisosAparência: "Nueva apariencia del sitio",
      AvisoResponsivo: "Sitio responsivo para móviles y tabletas",

      AjudaPortifolio: "Portafolios",
      AjudaUsuario: "Usuario",
      AjudaCursoseVagas: "Cursos/Vacantes",
      CadastroGeral: "Registro",
      AjudaTextoUsuario: "Comenzando por la parte del usuario, puedes configurar tu cuenta como desees e incluso cambiar su tipo, eligiendo un tipo de cuenta para profesores, o la predeterminada (artistas), o empresa.",
      AjudaTextoPortifolio: "Comenzando por la parte del usuario, puedes configurar tu cuenta como desees e incluso cambiar su tipo, eligiendo un tipo de cuenta para profesores, o la predeterminada (artistas), o empresa.",
      AjudaCursoseVagasTexto: "Similar al portafolio, puedes acceder al curso o vacante haciendo clic en su portada, y si quieres más información, simplemente haz clic en 'más información' para ver mejor las especificaciones de la vacante o del curso, además de poder acceder a los cursos que desees a través de la barra de búsqueda o del menú yendo a 'cursos' o 'vacantes'.",
      AjudaCadastroGeral: "En la página de inicio/sesión, usa tu correo principal o de preferencia para acceder al sitio si deseas, de lo contrario simplemente haz clic en la flecha en la esquina superior derecha para acceder al sitio como anónimo."
      
      


    },

      it: {
      explorarElementoH1: "Esplora",
      explorarHeader: "Esplora",
      cursosHeader: "Corsi",
      vagasHeader: "Offerte di lavoro",
      sobreNosHeader: "Chi siamo",
      tendenciaMigalha: "Tendenze",
      PersonalizarFiltro: "Personalizza la Galleria",
      Perfil: "Il mio Profilo",
      PerfilConfiguracoes: "Impostazioni",
      PerfilTema: "Tema",
      PerfilSair: "Esci",
      ModalContratar: "Assumere",
      ModalFavoritar: "Preferiti",
      ModalFerramentas: "Strumenti",
      ModalComentarios: "Commenti",
      ModalCompartilhar: "Condividi",
      PortifolioTeste: "Portfolio di prova",
      portSalvar: "Salvare",
      PortifolioAutor: "Autore",
      ModalPortifolio: "Prototipo di portfolio",
      ModalAutor: "Nome del creatore • 0 follower",
      AjudaFooter: "Aiuto",
      TermosFooter: "Termini",
      AtualizacaoFooter: "Aggiornamento",
      ContatoFooter: "Contatti",
      AvisoFooter: "Avvisi",
      DireitosFooter: "Tutti i diritti riservati. ©Seek 2024.",

      PesquisarPlace: "Cerca",
      CidadePlace: "Inserisci il nome della tua città",
      CargoPlace: "PosizioneUtente",
      NomePlace: "Nome dell'Utente",

      SobrePrincipaltexto: "La nostra intenzione con Seek è dare visibilità e maggiori opportunità agli artisti visivi, oltre a favorire un maggiore contatto con le aziende che cercano professionisti con le loro capacità",
      SobreSubPrincipalTexto: "Offriamo anche accesso a una piattaforma educativa, consentendo ad artisti e altri professionisti di migliorarsi e distinguersi nel mercato del lavoro.",
      EquipeSob: "Squadra",
      ContatoEquipe: "Se hai bisogno di ulteriori informazioni su di noi o sul sito, contattaci attraverso i nostri social media.",

      OpçãoSim: "Sì",
      OpçãoNão: "No",
      Pergunta1: "Vuoi che tutti possano vedere il tuo profilo nell'area di ricerca?",
      Pergunta2: "Vuoi che tutti possano vedere i tuoi progetti nell'area di ricerca?",
      Pergunta3: "Vuoi che tutti possano vedere i tuoi corsi nell'area di ricerca?",
      Pergunta4: "Vuoi che tutti possano vedere la tua email?",
      Pergunta5: "Vuoi ricevere un riepilogo delle tue notifiche via email?",
      Pergunta6: "Vuoi ricevere una notifica immediata per richieste di contratto?",
      Pergunta7: "Vuoi ricevere una notifica immediata quando qualcuno chiede di partecipare a un team?",
      Pergunta8: "Vuoi ricevere notifiche quando ci sono offerte/sconti?",
      Pergunta9: "Vuoi ricevere notifiche quando ci sono offerte/sconti?",
      Pergunta10: "Bloccare contenuti per adulti?",
      Pergunta11: "Non consentire a terzi di incorporare il tuo contenuto in altri siti?",
      PrivacidadeConf: "Privacy",
      NotificacoesConf: "Notifiche",
      InfoUsuConf: "Informazioni Utente",
      EmailConf: "Email/Password",
      configuracoes: "Impostazioni",
      CidadeConf: "Città/Paese",
      Cargo: "Posizione",
      PerfilURL: "URL del profilo",
      EmailSeu: "La tua email",
      Senha: "Password",
      NomeUsuario: "Nome Utente",
      SalvarConf: "Salva Modifiche",

      FiltarGeral: "Filtra",
      TiposCurso: "Tipi di corsi",
      DesignCursos: "Design",
      IlustracaoCursos: "Illustrazione",
      FotografiaCursos: "Fotografia",
      PrecoCursos: "Prezzo",
      FixoCursos: "Fisso",
      MensalCursos: "Mensile",
      Faixadepreco: "Fascia di Prezzo",
      DuracaoCursos: "Durata",
      IndefinidaCursos: "Indefinita",
      TempoEmHorasCursos: "Tempo in ore",
      LocalCursos: "Località",
      PresencialCursos: "In presenza",
      Homeoffice: "Lavoro da casa",
      AplicarGeral: "Applica",
      LimparGeral: "Pulisci Filtro",
      NomeCurso: "Nome del Corso",
      PrecodecadaCurso: "€23,00/mese",

      CampoDeCriaçãoVagas: "Campi di Creazione",
      HabilidadesVagas: "Competenze",

      NomeDasVagas: "Nome della posizione",
      HorasAtrasVagas: "11 ore fa",
      EnviarPropostaVagas: "Invia proposta",
      MaisInformaçõesVagas: "Maggiori informazioni",

      AvisosTextoPrincipal: "Il sito è ancora in fase di sviluppo, gli avvisi delle pagine di Seek non cambieranno fino a quando non saremo in grado di offrire a tutti un'esperienza eccellente, e raggiungere il nostro obiettivo di rendere Seek un luogo dove tutti possano utilizzare senza preoccupazioni e godere delle sue funzionalità, e soddisfare le aspettative di insegnamento e visibilità per coloro che non ne hanno. Siamo nella seconda versione di Seek per il secondo semestre di SI quindi ci saranno grandi cambiamenti nei prossimi semestri.",
      AvisosServidores: "Server di Seek funzionanti",
      AvisosPortifolios: "portfolio in finestre modal",
      AvisosAparência: "Nuovo aspetto del sito",
      AvisoResponsivo: "Sito responsivo per cellulari e tablet",

      AjudaPortifolio: "Portfolio",
      AjudaUsuario: "Utente",
      AjudaCursoseVagas: "Corsi/Offerte di lavoro",
      CadastroGeral: "Registrazione",
      AjudaTextoUsuario: "A partire dalla parte utente, puoi configurare il tuo account come preferisci e anche modificare il tipo, scegliendo tra un account per insegnanti, l'account standard (artisti) o aziendale.",
      AjudaTextoPortifolio: "A partire dalla parte utente, puoi configurare il tuo account come preferisci e anche modificare il tipo, scegliendo tra un account per insegnanti, l'account standard (artisti) o aziendale.",
      AjudaCursoseVagasTexto: "Simile al portfolio, puoi accedere al corso o all'offerta di lavoro facendo clic sulla copertina, e se desideri ulteriori informazioni, basta fare clic su 'maggiori informazioni' per vedere meglio le specifiche dell'offerta o del corso. Inoltre, puoi anche accedere ai corsi che desideri attraverso la barra di ricerca o il menu andando su 'corsi' o 'offerte di lavoro'.",
      AjudaCadastroGeral: "Nella pagina di accesso/registrazione, utilizza la tua email principale o preferita per poter accedere al sito se lo desideri, altrimenti basta fare clic sulla freccia in alto a destra per accedere al sito come anonimo."

   
    },

    fr: {
      explorarElementoH1: "Explorer",
      explorarHeader: "Explorer",
      cursosHeader: "Cours",
      vagasHeader: "Offres d'emploi",
      sobreNosHeader: "À propos de nous",
      tendenciaMigalha: "Tendances",
      PersonalizarFiltro: "Personnaliser la Galerie",
      Perfil: "Mon Profil",
      PerfilConfiguracoes: "Paramètres",
      PerfilTema: "Thème",
      PerfilSair: "Déconnexion",
      ModalContratar: "Recruter",
      ModalFavoritar: "Ajouter aux favoris",
      ModalFerramentas: "Outils",
      ModalComentarios: "Commentaires",
      ModalCompartilhar: "Partager",
      PortifolioTeste: "Test portfolio",
      portSalvar: "Enregistrer",
      PortifolioAutor: "Auteur",
      ModalPortifolio: "Prototype de portfolio",
      ModalAutor: "Nom du créateur • 0 abonnés",
      AjudaFooter: "Aide",
      TermosFooter: "Termes",
      AtualizacaoFooter: "Mise à jour",
      ContatoFooter: "Contacts",
      AvisoFooter: "Avis",
      DireitosFooter: "Tous droits réservés. ©Seek 2024.",

      PesquisarPlace: "Rechercher",
      CidadePlace: "Entrez le nom de votre ville",
      CargoPlace: "PosteUtilisateur",
      NomePlace: "Nom de l'Utilisateur",

      SobrePrincipaltexto: "Notre intention avec Seek est de donner visibilité et plus d'opportunités aux artistes visuels, tout en facilitant un plus grand contact avec les entreprises qui recherchent des professionnels avec leurs compétences",
      SobreSubPrincipalTexto: "Nous offrons également l'accès à une plateforme éducative, permettant aux artistes et autres professionnels de s'améliorer et de se démarquer sur le marché du travail.",
      EquipeSob: "Équipe",
      ContatoEquipe: "Si vous avez besoin de plus d'informations sur nous ou sur le site, contactez-nous via nos réseaux sociaux.",

      OpçãoSim: "Oui",
      OpçãoNão: "Non",
      Pergunta1: "Souhaitez-vous que tout le monde puisse voir votre profil dans la zone de recherche?",
      Pergunta2: "Souhaitez-vous que tout le monde puisse voir vos projets dans la zone de recherche?",
      Pergunta3: "Souhaitez-vous que tout le monde puisse voir vos cours dans la zone de recherche?",
      Pergunta4: "Souhaitez-vous que tout le monde puisse voir votre email?",
      Pergunta5: "Souhaitez-vous recevoir un résumé de vos notifications par email?",
      Pergunta6: "Souhaitez-vous recevoir une notification immédiate des demandes de contrat?",
      Pergunta7: "Souhaitez-vous recevoir une notification immédiate lorsque quelqu'un demande à rejoindre une équipe?",
      Pergunta8: "Souhaitez-vous recevoir des notifications lorsqu'il y a des offres/remises?",
      Pergunta9: "Souhaitez-vous recevoir des notifications lorsqu'il y a des offres/remises?",
      Pergunta10: "Bloquer le contenu pour adultes?",
      Pergunta11: "Ne pas permettre à des tiers d'incorporer votre contenu sur d'autres sites?",
      PrivacidadeConf: "Confidentialité",
      NotificacoesConf: "Notifications",
      InfoUsuConf: "Informations de l'Utilisateur",
      EmailConf: "Email/Mot de passe",
      configuracoes: "Paramètres",
      CidadeConf: "Ville/Pays",
      Cargo: "Poste",
      PerfilURL: "URL du profil",
      EmailSeu: "Votre email",
      Senha: "Mot de passe",
      NomeUsuario: "Nom d'utilisateur",
      SalvarConf: "Enregistrer les modifications",

      FiltarGeral: "Filtrer",
      TiposCurso: "Types de cours",
      DesignCursos: "Design",
      IlustracaoCursos: "Illustration",
      FotografiaCursos: "Photographie",
      PrecoCursos: "Prix",
      FixoCursos: "Fixe",
      MensalCursos: "Mensuel",
      Faixadepreco: "Plage de prix",
      DuracaoCursos: "Durée",
      IndefinidaCursos: "Indéfinie",
      TempoEmHorasCursos: "Temps en heures",
      LocalCursos: "Local",
      PresencialCursos: "En présentiel",
      Homeoffice: "Télétravail",
      AplicarGeral: "Appliquer",
      LimparGeral: "Effacer le filtre",
      NomeCurso: "Nom du cours",
      PrecodecadaCurso: "23,00 €/mois",

      CampoDeCriaçãoVagas: "Champs de Création",
      HabilidadesVagas: "Compétences",

      NomeDasVagas: "Nom du poste",
      HorasAtrasVagas: "il y a 11 heures",
      EnviarPropostaVagas: "Envoyer une proposition",
      MaisInformaçõesVagas: "Plus d'informations",

      AvisosTextoPrincipal: "Le site est encore en développement, les avis des pages de Seek ne changeront pas jusqu'à ce que nous puissions offrir à tous une excellente expérience, et atteindre notre objectif de faire de Seek un lieu où tout le monde peut utiliser sans soucis et profiter de ses fonctionnalités, et répondre aux attentes d'enseignement et de visibilité pour ceux qui n'en ont pas. Nous sommes dans la deuxième version de Seek pour le deuxième semestre de SI, donc il y aura de grands changements dans les prochains semestres.",
      AvisosServidores: "Serveurs de Seek en fonctionnement",
      AvisosPortifolios: "portfolios dans des fenêtres modales",
      AvisosAparência: "Nouvelle apparence du site",
      AvisoResponsivo: "Site responsive pour mobiles et tablettes",

      AjudaPortifolio: "Portfolios",
      AjudaUsuario: "Utilisateur",
      AjudaCursoseVagas: "Cours/offres d'emploi",
      CadastroGeral: "Inscription",
      AjudaTextoUsuario: "En commençant par la partie utilisateur, vous pouvez configurer votre compte comme vous le souhaitez et même en modifier le type, en choisissant un type de compte pour enseignants, ou le type standard (artistes), ou entreprise.",
      AjudaTextoPortifolio: "En commençant par la partie utilisateur, vous pouvez configurer votre compte comme vous le souhaitez et même en modifier le type, en choisissant un type de compte pour enseignants, ou le type standard (artistes), ou entreprise.",
      AjudaCursoseVagasTexto: "Comme pour le portfolio, vous pouvez accéder au cours ou à l'offre en cliquant sur sa couverture, et si vous souhaitez plus d'informations, il suffit de cliquer sur 'plus d'informations' pour mieux voir les spécifications de l'offre ou du cours. Vous pouvez également accéder aux cours que vous souhaitez via la barre de recherche ou le menu en allant sur 'cours' ou 'offres d'emploi'.",
      AjudaCadastroGeral: "Sur la page de connexion/inscription, utilisez votre email principal ou préféré pour pouvoir accéder au site si vous le souhaitez, sinon il suffit de cliquer sur la flèche en haut à droite pour accéder au site en tant qu'anonyme."

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
      ModalContratar: "Contratar",
      ModalFavoritar: "Favoritar",
      ModalFerramentas:"Ferramentas",
      ModalComentarios:"Comentários",
      ModalCompartilhar:"Compartilhar",
      PortifolioTeste:"Teste portfolio",
      portSalvar:"salvar",
      PortifolioAutor:"Author",
      ModalPortifolio:"Protótipo de portifólio",
      ModalAutor:"Nome do criador • 0 seguidores",
      AjudaFooter: "Ajuda",
      TermosFooter: "Termo",
      AtualizacaoFooter: "Atualização",
      ContatoFooter: "Contatos",
      AvisoFooter: "Avisos",
      DireitosFooter: "Todos os direitos reservados. ©Seek 2024.",

      PesquisarPlace:"Pesquisar",
      CidadePlace:"Digite o nome da sua cidade ",
      CargoPlace:"CargodoUsuario",
      NomePlace:"Nome do Usuario",

      SobrePrincipaltexto: "Nossa intenção com o Seek é dar visibilidade e maiores oportunidades aos artistas visuais, além de proporcionar um maior contato com empresas que buscam profissionais com suas capacidades",
      SobreSubPrincipalTexto: "Também oferecemos acesso a uma plataforma de educação, permitindo que artistas e outros profissionais possam se aprimorar e se destacar no mercado de trabalho.",
      EquipeSob:"Equipe",
      ContatoEquipe:"Caso precise de mais alguma informação sobre nós ou sobre o site, entre em contato conosco através das nossas redes sociais.",

      OpçãoSim:"Sim",
      OpçãoNão:"Não",
      Pergunta1:"Deseja que todos possam ver seu perfil na área de busca ?",
      Pergunta2:"Deseja que todos possam ver seus projetos na área de busca ?",
      Pergunta3:"Deseja que todos possam ver seus cursos na área de busca ?",
      Pergunta4:"Deseja que todos possam ver seu email ?",
      Pergunta5:"Deseja receber um resumo das suas notificações por e-mail?",
      Pergunta6:"Deseja receber uma notificação imediata de solicitação de contrato?",
      Pergunta7:"Deseja receber uma notificação imediata quando solicitarem para participar de uma equipe ?",
      Pergunta8:"Deseja receber notificação quando ouver ofertas/descontos?",
      Pergunta9:"Deseja receber notificação quando ouver ofertas/descontos?",
      Pergunta10:"Bloquear conteúdo adulto?",
      Pergunta11:"Não permitir que terceiros incorporem seu conteúdo em outros sites?",
      PrivacidadeConf: "Privacidede",
      NotificacoesConf: "Notificações",
      InfoUsuConf: "Informações Usuário",
      EmailConf: "Email/Senha",
      configuracoes:"Configurações",
      CidadeConf:"Cidade/País",
      Cargo:"Cargo",
      PerfilURL:"URL do perfil",
      EmailSeu:"Seu e-mail",
      Senha:"Senha",
      NomeUsuario:"Nome de Usuário",
      SalvarConf:"Salvar Alterações",

      FiltarGeral:"Filtrar",
      TiposCurso:"Tipos de cursos",
      DesignCursos:"Design",
      IlustracaoCursos:"Ilustração",
      FotografiaCursos:"Fotografia",
      PrecoCursos:"Preço",
      FixoCursos:"Fixo",
      MensalCursos:"Mensal",
      Faixadepreco: "Faixa de Preço",
      DuracaoCursos: "Duração",
      IndefinidaCursos: "Indefinida",
      TempoEmHorasCursos: "Tempo em horas",
      LocalCursos:"Local",
      PresencialCursos:"Presencial",
      Homeoffice:"Home office",
      AplicarGeral:"Aplicar",
      LimparGeral:"Limpar Filto",
      NomeCurso:"Nome do Curso",
      PrecodecadaCurso:"R$23,00/mês",

      CampoDeCriaçãoVagas:"Campos de Criação",
      HabilidadesVagas:"Habilidades",

      NomeDasVagas:"Nome da vaga",
      HorasAtrasVagas: "11 horas atrás",
      EnviarPropostaVagas: "Enviar proposta",
      MaisInformaçõesVagas: "Mais informações",

      AvisosTextoPrincipal:"O site ainda está em desenvolvimento, os avisos das páginas do Seek não mudara até que consiguemos entregar a todos uma ótima experiência, e que possamos atingir o nosso objetivo de que o seek seja um lugar para que todos possam usar sem preocupações e desfrutar das suas funcionalidades, e que atenda as expectativas de ensino, e visibilidade para aqueles que não possuem. Estamos na segunda versão do Seek para o segundo semestre de SI então háveram grandes mudanças nos póximos semestres.",
      AvisosServidores:"Servidores do seek funcionando",
      AvisosPortifolios:"portifolios em janelas modal",
      AvisosAparência:"Nova aparência do site",
      AvisoResponsivo:"Site responsivo para celulares e tablets",

      AjudaPortifolio:"Portfólios",
      AjudaUsuario:"Usuário",
      AjudaCursoseVagas:"Cursos/vagas",
      CadastroGeral:"Cadastro",
      AjudaTextoUsuario:"Começando pela parte do usuário, você pode configurar sua conta da forma como quiser e até podendo alterar o tipo dela, podendo selecionar um tipo de conta para professores,ou a padrão(artistas), ou empresa.",
      AjudaTextoPortifolio:"Começando pela parte do usuário, você pode configurar sua conta da forma como quiser e até podendo alterar o tipo dela, podendo selecionar um tipo de conta para professores,ou a padrão(artistas), ou empresa.",
      AjudaCursoseVagasTexto:"Semelhante ao portfólio, você pode acesar o curso ou vaga ao clicar na sua capa, e caso queira mais informações, é só clicar em “mais informações” para poder ver melhor as especificações da vaga, ou do curso, além também poder acesar os cursos que você queira pela barra de pesquisa ou pelo menu inddo em “cursos” ou “vagas”",
      AjudaCadastroGeral:"Na página de entra/cadastro, você utiliza seu e-mail principal ou de preferência para poder acesar o site caso queira, do contrário é só clicar na seta no canto superior direito para acessar o site como anônimo",


    }
  };

  var selectedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
  document.getElementById('idiomaSelect').value = selectedLanguage;{

  // Atualiza o texto com base no idioma selecionado variando entre pt-br/eng/esp (não ta travando)

}


// Header e Footer

//PlaceholderComeço

  var PesquisarPlaceholder = document.getElementsByClassName("Pesquisar")
  for (var i = 0; i < PesquisarPlaceholder.length; i++) {
    PesquisarPlaceholder[i].placeholder = idioma[selectedLanguage].PesquisarPlace;
  }

  var CidadePlaceholder = document.getElementsByClassName("CidadeForm")
  for (var i = 0; i < CidadePlaceholder.length; i++) {
    CidadePlaceholder[i].placeholder = idioma[selectedLanguage].CidadePlace;
  }

  var  CargoPlaceholder= document.getElementsByClassName("CargoForm")
  for (var i = 0; i < CargoPlaceholder.length; i++) {
    CargoPlaceholder[i].placeholder = idioma[selectedLanguage].CargoPlace;
  }

  var NomePlaceholder= document.getElementsByClassName("NomeForm")
  for (var i = 0; i <NomePlaceholder .length; i++) {
    NomePlaceholder[i].placeholder = idioma[selectedLanguage].NomePlace;
  }


//Placeholder Fim
  
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
  // BotC
  var ContratarModal  = document.getElementsByClassName("BotC");
  for (var i = 0; i < ContratarModal.length; i++) {
    ContratarModal[i].innerHTML = idioma[selectedLanguage].ModalContratar;
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

  
  var PortifolioSalvar = document.getElementsByClassName("PotS");
  for (var i = 0; i < PortifolioSalvar.length; i++) {
    PortifolioSalvar[i].innerHTML = idioma[selectedLanguage].portSalvar;
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

  //Conteudo das páginas
  // Sobre Nós

  var Sobretexto1  = document.getElementsByClassName("SobT");
  for (var i = 0; i < Sobretexto1.length; i++) {
    Sobretexto1[i].innerHTML = idioma[selectedLanguage].SobrePrincipaltexto;
  }

  var Sobretexto2  = document.getElementsByClassName("SobT1");
  for (var i = 0; i < Sobretexto2.length; i++) {
    Sobretexto2[i].innerHTML = idioma[selectedLanguage].SobreSubPrincipalTexto;
  }

  var EquipeSobre  = document.getElementsByClassName("Eqp");
  for (var i = 0; i < EquipeSobre.length; i++) {
    EquipeSobre[i].innerHTML = idioma[selectedLanguage].EquipeSob;
  }


  var ContatoSobre  = document.getElementsByClassName("ConTI");
  for (var i = 0; i < ContatoSobre.length; i++) {
    ContatoSobre[i].innerHTML = idioma[selectedLanguage].ContatoEquipe;
  }

  var SimOP  = document.getElementsByClassName("OS");
  for (var i = 0; i < SimOP.length; i++) {
    SimOP[i].innerHTML = idioma[selectedLanguage].OpçãoSim;
  }

  var NaoOP  = document.getElementsByClassName("ON");
  for (var i = 0; i < NaoOP.length; i++) {
    NaoOP[i].innerHTML = idioma[selectedLanguage].OpçãoNão;
  }

  var Perg1  = document.getElementsByClassName("Pper1");
  for (var i = 0; i < Perg1.length; i++) {
    Perg1[i].innerHTML = idioma[selectedLanguage].Pergunta1;
  }

  var Perg2  = document.getElementsByClassName("Pper2");
  for (var i = 0; i < Perg2.length; i++) {
    Perg2[i].innerHTML = idioma[selectedLanguage].Pergunta2;
  }

  var Perg3  = document.getElementsByClassName("Pper3");
  for (var i = 0; i < Perg3.length; i++) {
    Perg3[i].innerHTML = idioma[selectedLanguage].Pergunta3;
  }

  var Perg4  = document.getElementsByClassName("Pper4");
  for (var i = 0; i < Perg4.length; i++) {
    Perg4[i].innerHTML = idioma[selectedLanguage].Pergunta4;
  }

  var Perg5  = document.getElementsByClassName("Pper5");
  for (var i = 0; i < Perg5.length; i++) {
    Perg5[i].innerHTML = idioma[selectedLanguage].Pergunta5;
  }

  var Perg6  = document.getElementsByClassName("Pper6");
  for (var i = 0; i < Perg6.length; i++) {
    Perg6[i].innerHTML = idioma[selectedLanguage].Pergunta6;
  }

  var Perg7  = document.getElementsByClassName("Pper7");
  for (var i = 0; i < Perg7.length; i++) {
    Perg7[i].innerHTML = idioma[selectedLanguage].Pergunta7;
  }

  var Perg8  = document.getElementsByClassName("Pper8");
  for (var i = 0; i < Perg8.length; i++) {
    Perg8[i].innerHTML = idioma[selectedLanguage].Pergunta8;
  }

  var Perg9  = document.getElementsByClassName("Pper9");
  for (var i = 0; i < Perg9.length; i++) {
    Perg9[i].innerHTML = idioma[selectedLanguage].Pergunta9;
  }

  var Perg10  = document.getElementsByClassName("Pper10");
  for (var i = 0; i < Perg10.length; i++) {
    Perg10[i].innerHTML = idioma[selectedLanguage].Pergunta10;
  }

  var Perg11  = document.getElementsByClassName("Pper11");
  for (var i = 0; i < Perg11.length; i++) {
    Perg11[i].innerHTML = idioma[selectedLanguage].Pergunta11;
  }

  var Privacidade  = document.getElementsByClassName("PriM");
  for (var i = 0; i < Privacidade.length; i++) {
    Privacidade[i].innerHTML = idioma[selectedLanguage].PrivacidadeConf;
  }

  var Notificacoes  = document.getElementsByClassName("NotM");
  for (var i = 0; i < Notificacoes.length; i++) {
    Notificacoes[i].innerHTML = idioma[selectedLanguage].NotificacoesConf;
  }

  var InfoUsu  = document.getElementsByClassName("InfM");
  for (var i = 0; i < InfoUsu.length; i++) {
    InfoUsu[i].innerHTML = idioma[selectedLanguage].InfoUsuConf;
  }

  var Email  = document.getElementsByClassName("EmaM");
  for (var i = 0; i < Email.length; i++) {
    Email[i].innerHTML = idioma[selectedLanguage].EmailConf;
  }

  var Confi  = document.getElementsByClassName("ConM");
  for (var i = 0; i < Confi.length; i++) {
    Confi[i].innerHTML = idioma[selectedLanguage].configuracoes;
  }

  var Cidadeperf  = document.getElementsByClassName("CidP");
  for (var i = 0; i < Cidadeperf.length; i++) {
    Cidadeperf[i].innerHTML = idioma[selectedLanguage].CidadeConf;
  }

  var CargoPerf  = document.getElementsByClassName("Carg");
  for (var i = 0; i < CargoPerf.length; i++) {
    CargoPerf[i].innerHTML = idioma[selectedLanguage].Cargo;
  }

  var PerfilUrlPerf  = document.getElementsByClassName("Url");
  for (var i = 0; i < PerfilUrlPerf.length; i++) {
    PerfilUrlPerf[i].innerHTML = idioma[selectedLanguage].PerfilURL;
  }

  var SeuEmail  = document.getElementsByClassName("SEma");
  for (var i = 0; i < SeuEmail.length; i++) {
    SeuEmail[i].innerHTML = idioma[selectedLanguage].EmailSeu;
  }

  var SenhaPerf  = document.getElementsByClassName("Senh");
  for (var i = 0; i < SenhaPerf.length; i++) {
    SenhaPerf[i].innerHTML = idioma[selectedLanguage].Senha;
  }

  var usuarioPerf  = document.getElementsByClassName("Nome");
  for (var i = 0; i < usuarioPerf.length; i++) {
    usuarioPerf[i].innerHTML = idioma[selectedLanguage].NomeUsuario;
  }

  var Salvarasconf  = document.getElementsByClassName("ConSA");
  for (var i = 0; i < Salvarasconf.length; i++) {
    Salvarasconf[i].innerHTML = idioma[selectedLanguage].SalvarConf;
  }

  //Conteudo das páginas
  // Cursos

  var FiltrarCursos = document.getElementsByClassName("FilC");
  for (var i = 0; i < FiltrarCursos.length; i++) {
    FiltrarCursos[i].innerHTML = idioma[selectedLanguage].FiltarGeral;
  }

  var  TiposDoCurso = document.getElementsByClassName("TDCC");
  for (var i = 0; i < TiposDoCurso.length; i++) {
    TiposDoCurso[i].innerHTML = idioma[selectedLanguage].TiposCurso;
  }

  var DesignDoCursos= document.getElementsByClassName("DisC");
  for (var i = 0; i < DesignDoCursos.length; i++) {
    DesignDoCursos[i].innerHTML = idioma[selectedLanguage].DesignCursos;
  }

  var  IlustracaoDoCursos = document.getElementsByClassName("IluC");
  for (var i = 0; i < IlustracaoDoCursos.length; i++) {
    IlustracaoDoCursos[i].innerHTML = idioma[selectedLanguage].IlustracaoCursos;
  }

  var FotografiaDoCursos = document.getElementsByClassName("FotC");
  for (var i = 0; i < FotografiaDoCursos.length; i++) {
    FotografiaDoCursos[i].innerHTML = idioma[selectedLanguage].FotografiaCursos;
  }

  var  PrecoDoCursos = document.getElementsByClassName("PreC");
  for (var i = 0; i < PrecoDoCursos.length; i++) {
    PrecoDoCursos[i].innerHTML = idioma[selectedLanguage].PrecoCursos;
  }

  var FixoDoCursos = document.getElementsByClassName("FixC");
  for (var i = 0; i < FixoDoCursos.length; i++) {
    FixoDoCursos[i].innerHTML = idioma[selectedLanguage].FixoCursos;
  }

  var MensalDoCursos  = document.getElementsByClassName("MenC");
  for (var i = 0; i < MensalDoCursos.length; i++) {
    MensalDoCursos[i].innerHTML = idioma[selectedLanguage].MensalCursos;
  }

  var FaixadeprecoCursos = document.getElementsByClassName("FaiC");
  for (var i = 0; i < FaixadeprecoCursos.length; i++) {
    FaixadeprecoCursos[i].innerHTML = idioma[selectedLanguage].Faixadepreco;
  }

  var DuracaoDoCursos = document.getElementsByClassName("DurC");
  for (var i = 0; i < DuracaoDoCursos.length; i++) {
    DuracaoDoCursos[i].innerHTML = idioma[selectedLanguage].DuracaoCursos;
  }

  var IndefinidaDoCursos = document.getElementsByClassName("IndC");
  for (var i = 0; i < IndefinidaDoCursos.length; i++) {
    IndefinidaDoCursos[i].innerHTML = idioma[selectedLanguage].IndefinidaCursos;
  }

  var TempoEmHorasDoCursos = document.getElementsByClassName("TEMC");
  for (var i = 0; i < TempoEmHorasDoCursos.length; i++) {
    TempoEmHorasDoCursos[i].innerHTML = idioma[selectedLanguage].TempoEmHorasCursos;
  }

  var LocalDoCursos  = document.getElementsByClassName("LocC");
  for (var i = 0; i < LocalDoCursos.length; i++) {
    LocalDoCursos[i].innerHTML = idioma[selectedLanguage].LocalCursos;
  }

  var  PresencialDoCursos = document.getElementsByClassName("PresC");
  for (var i = 0; i < PresencialDoCursos.length; i++) {
    PresencialDoCursos[i].innerHTML = idioma[selectedLanguage].PresencialCursos;
  }

  var HomeofficeCursos= document.getElementsByClassName("HOC");
  for (var i = 0; i < HomeofficeCursos.length; i++) {
    HomeofficeCursos[i].innerHTML = idioma[selectedLanguage].Homeoffice;
  }

  var  AplicarNoGeral = document.getElementsByClassName("AplG");
  for (var i = 0; i < AplicarNoGeral.length; i++) {
    AplicarNoGeral[i].innerHTML = idioma[selectedLanguage].AplicarGeral;
  }

  var LimparNoGeral= document.getElementsByClassName("LCG");
  for (var i = 0; i < LimparNoGeral.length; i++) {
    LimparNoGeral[i].innerHTML = idioma[selectedLanguage].LimparGeral;
  }

  var  NomeDoCurso = document.getElementsByClassName("NomC");
  for (var i = 0; i < NomeDoCurso.length; i++) {
    NomeDoCurso[i].innerHTML = idioma[selectedLanguage].NomeCurso;
  }

  var PrecodecadaCursoDoCurso= document.getElementsByClassName("precoC");
  for (var i = 0; i < PrecodecadaCursoDoCurso.length; i++) {
    PrecodecadaCursoDoCurso[i].innerHTML = idioma[selectedLanguage].PrecodecadaCurso;
  }

  //Conteúdo das Páginas
  //Vagas

  var NomeDasVagasVagas= document.getElementsByClassName("NomV");
  for (var i = 0; i < NomeDasVagasVagas.length; i++) {
    NomeDasVagasVagas[i].innerHTML = idioma[selectedLanguage].NomeDasVagas;
  }


  
  var HorasAtrasVagasVagas= document.getElementsByClassName("HAV");
  for (var i = 0; i < HorasAtrasVagasVagas.length; i++) {
    HorasAtrasVagasVagas[i].innerHTML = idioma[selectedLanguage].HorasAtrasVagas;
  }

  var EnviarPropostaVagasVagas= document.getElementsByClassName("EPV");
  for (var i = 0; i < EnviarPropostaVagasVagas.length; i++) {
    EnviarPropostaVagasVagas[i].innerHTML = idioma[selectedLanguage].EnviarPropostaVagas;
  }

  var MaisInformaçõesVagasVagas= document.getElementsByClassName("MaIV");
  for (var i = 0; i < MaisInformaçõesVagasVagas.length; i++) {
    MaisInformaçõesVagasVagas[i].innerHTML = idioma[selectedLanguage].MaisInformaçõesVagas;
  }

  
  var CampoDeCriaçãoVagasVagas= document.getElementsByClassName("CDCV");
  for (var i = 0; i < CampoDeCriaçãoVagasVagas.length; i++) {
    CampoDeCriaçãoVagasVagas[i].innerHTML = idioma[selectedLanguage].CampoDeCriaçãoVagas;
  }

  var HabilidadesVagasVagas= document.getElementsByClassName("HabV");
  for (var i = 0; i < HabilidadesVagasVagas.length; i++) {
    HabilidadesVagasVagas[i].innerHTML = idioma[selectedLanguage].HabilidadesVagas;
  }

  //Conteúdo das Páginas
  //Avisos



  var AvisosTextoPrincipalAvisos= document.getElementsByClassName("TextA1");
  for (var i = 0; i < AvisosTextoPrincipalAvisos.length; i++) {
    AvisosTextoPrincipalAvisos[i].innerHTML = idioma[selectedLanguage].AvisosTextoPrincipal;
  }

  var AvisosServidoresAvisos= document.getElementsByClassName("AtuA1");
  for (var i = 0; i < AvisosServidoresAvisos.length; i++) {
    AvisosServidoresAvisos[i].innerHTML = idioma[selectedLanguage].AvisosServidores;
  }

  var AvisosPortifoliosAvisos= document.getElementsByClassName("AtuA2");
  for (var i = 0; i < AvisosPortifoliosAvisos.length; i++) {
    AvisosPortifoliosAvisos[i].innerHTML = idioma[selectedLanguage].AvisosPortifolios;
  }

  
  var AvisosAparênciaAvisos= document.getElementsByClassName("AtuA3");
  for (var i = 0; i < AvisosAparênciaAvisos.length; i++) {
    AvisosAparênciaAvisos[i].innerHTML = idioma[selectedLanguage].AvisosAparência;
  }

  var AvisoResponsivoAvisos= document.getElementsByClassName("AtuA4");
  for (var i = 0; i < AvisoResponsivoAvisos.length; i++) {
    AvisoResponsivoAvisos[i].innerHTML = idioma[selectedLanguage].AvisoResponsivo;
  }

  // Conteudo das paginas
  // Ajuda

  var AjudaUsuarioAjuda= document.getElementsByClassName("UsuA");
  for (var i = 0; i < AjudaUsuarioAjuda.length; i++) {
    AjudaUsuarioAjuda[i].innerHTML = idioma[selectedLanguage].AjudaUsuario;
  }


  var AjudaPortifolioAjuda = document.getElementsByClassName("PortAj");
  for (var i = 0; i < AjudaPortifolioAjuda.length; i++) {
    AjudaPortifolioAjuda[i].innerHTML = idioma[selectedLanguage].AjudaPortifolio;
  }

  var AjudaCursoseVagasAjuda = document.getElementsByClassName("CeVA");
  for (var i = 0; i < AjudaCursoseVagasAjuda.length; i++) {
    AjudaCursoseVagasAjuda[i].innerHTML = idioma[selectedLanguage].AjudaCursoseVagas;
  }

  var CadastroGeralGeral= document.getElementsByClassName("CadA");
  for (var i = 0; i < CadastroGeralGeral.length; i++) {
    CadastroGeralGeral[i].innerHTML = idioma[selectedLanguage].CadastroGeral;
  }

  var AjudaTextoUsuarioAjuda= document.getElementsByClassName("TexUA");
  for (var i = 0; i < AjudaTextoUsuarioAjuda.length; i++) {
    AjudaTextoUsuarioAjuda[i].innerHTML = idioma[selectedLanguage].AjudaTextoUsuario;
  }

  var AjudaTextoPortifolioAjuda= document.getElementsByClassName("TexPA");
  for (var i = 0; i < AjudaTextoPortifolioAjuda.length; i++) {
    AjudaTextoPortifolioAjuda[i].innerHTML = idioma[selectedLanguage].AjudaTextoPortifolio;
  }

  var AjudaCursoseVagasTextoAjuda= document.getElementsByClassName("TexCeVA");
  for (var i = 0; i < AjudaCursoseVagasTextoAjuda.length; i++) {
    AjudaCursoseVagasTextoAjuda[i].innerHTML = idioma[selectedLanguage].AjudaCursoseVagasTexto;
  }

  var AjudaCadastroGeralAjuda= document.getElementsByClassName("CadAT");
  for (var i = 0; i < AjudaCadastroGeralAjuda.length; i++) {
    AjudaCadastroGeralAjuda[i].innerHTML = idioma[selectedLanguage].AjudaCadastroGeral;
  }


}
//essa aqui não deixa perder as configurações de acordo com a escolha do usuario (ta travando)

// window.onload = function() {
//   aplicarModo();
//   aplicarIdioma();
// };

// essa parte muda o dioma  (não ta travando)

function TrocaLinguagem(lang) {
  localStorage.setItem('selectedLanguage', lang);
  aplicarIdioma(); 
}



//-------------------------------- Troca de lingua Cursos --------------------------------//