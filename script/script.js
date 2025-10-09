//script para abrir e fechar o menu do perfil 
let botaomenuperfil = document.getElementById("abrirmenuperfil");

function abrirMenu() {
    if (menuperfil.style.right == "-50%" || menuperfil.style.right == "") {
        menuperfil.style.right = "0%";
        menuperfil.style.display = "flex";
    }
    else {
        if (menuperfil.style.right = "0%" || menuperfil.style.right == "") {
            menuperfil.style.right = "-50%";
            menuperfil.style.display = "none";
        }

    }
}


// codigo para abrir notificação de fazer login
function abrirnotificacao(){
    let notificacao = document.getElementById("caixadenotificacaofazerlogin");
  
    // notificacao.style.display = "block";
    notificacao.style.top = "0rem";
  }
  
  function fecharnotificacao(){
    let notificacao = document.getElementById("caixadenotificacaofazerlogin");
  
    notificacao.style.top = "-10rem";
  }



