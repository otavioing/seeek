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