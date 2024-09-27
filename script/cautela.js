
/*-------------------------------- Modo Escuro --------------------------------*/

function ModoEscuro() {
    let corpo = document.getElementById("todo");
    corpo.classList.add("modoEscuro");
}
function ModoClaro (){
    let todo = document.getElementById("todo");
    todo.classList.remove("modoEscuro")
}


/*-------------------------------- Troca de lingua --------------------------------*/


function TrocaLinguagem (lang){
   
        location.hash = lang;
        location.reload();
    }


    function MudarLingua(lang) {
        location.hash = lang;
        location.reload();
      }
      
      window.onload = function() {
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
            AjudaFooter:"Help",
            TermosFooter:"Terms",
            AtualizacaoFooter:"Updates",
            SobreNosFooter:"About Us",
            ContatoFooter:"Contacts ",
            AvisoFooter:"Alerts",
            DireitosFooter:"All rights reserved. ©Seek 2024."
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
            AjudaFooter:"Ajuda",
            TermosFooter:"Termo",
            AtualizacaoFooter:"Actualización",
            SobreNosFooter:"Sobre Nosotros",
            ContatoFooter:"Contactos",
            AvisoFooter:"Avisos",
            DireitosFooter:"Todos los derechos reservados. ©Seek 2024."

        },
          pt: { 
            explorarElementoH1: "Explorar",
            explorarHeader: "Explorar",
            cursosHeader: "Cursos",
            vagasHeader: "Vagas",
            sobreNosHeader: "Sobre Nós",
            explorarMigalha: "Explorar",
            tendenciaMigalha: "Tendências",
            PersonalizarFiltro:" Personalizar a Galeria ",
            AjudaFooter:"Ajuda",
            TermosFooter:"Termo",
            AtualizacaoFooter:"Atualização",
            SobreNosFooter:"Sobre Nós",
            ContatoFooter:"Contatos",
            AvisoFooter:"Avisos",
            DireitosFooter:"Todos os direitos reservados. ©Seek 2024."
          }
        };
      
        if (window.location.hash) {
          var lang = window.location.hash.substring(1);
          if (idioma[lang]) {
            document.getElementById("ExpH1").innerHTML = idioma[lang].explorarElementoH1;
            document.getElementById("ExpA").innerHTML = idioma[lang].explorarHeader;
            document.getElementById("CurA").innerHTML = idioma[lang].cursosHeader;
            document.getElementById("VagA").innerHTML = idioma[lang].vagasHeader;
            document.getElementById("SobA").innerHTML = idioma[lang].sobreNosHeader;

            document.getElementById("ExpMenu").innerHTML = idioma[lang].explorarHeader;
            document.getElementById("CurMenu").innerHTML = idioma[lang].cursosHeader;
            document.getElementById("VagMenu").innerHTML = idioma[lang].vagasHeader;
            document.getElementById("SobMenu").innerHTML = idioma[lang].sobreNosHeader;

            document.getElementById("ExpA2").innerHTML = idioma[lang].explorarMigalha;
            document.getElementById("TenA").innerHTML = idioma[lang].tendenciaMigalha;
            document.getElementById("PerB").innerHTML = idioma[lang].PersonalizarFiltro;
            
            document.getElementById("AjuF").innerHTML = idioma[lang].AjudaFooter;
            document.getElementById("TerF").innerHTML = idioma[lang].TermosFooter;
            document.getElementById("AtuF").innerHTML = idioma[lang].AtualizacaoFooter;
            document.getElementById("SobF").innerHTML = idioma[lang].SobreNosFooter;
            document.getElementById("ConT").innerHTML = idioma[lang].ContatoFooter;
            document.getElementById("AviF").innerHTML = idioma[lang].AvisoFooter;


            document.getElementById("DirF").innerHTML = idioma[lang].DireitosFooter;
           
            
          }
        }
      }

      function mudarteste(){
       document.getElementById("InpPes").placeholder = "Novo texto do placeholder"
      }
