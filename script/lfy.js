
function paginacarregada() {



    let botaomenu = document.getElementById("botaoMenu");
    botaomenu.addEventListener("click", abrirMenu);

    function abrirMenu() {
        if(menu.style.left == "-100%" || menu.style.left == "") {
            menu.style.left = "0";
        } else {
           if(menu.style.left = "0" || menu.style.left == "") {
            menu.style.left = "-100%";
           }
        }
        
    }

}