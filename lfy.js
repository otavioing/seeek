window.addEventListener('load', paginacarregada); 

function paginacarregada() {



    let botaomenu = document.getElementById("botaoMenu");
    botaomenu.addEventListener("click", abrirMenu);

    function abrirMenu() {
        if(menu.style.right == "-100%" || menu.style.right == "") {
            menu.style.right = "0";
        } else {
           if(menu.style.right = "0" || menu.style.right == "") {
            menu.style.right = "-100%";
           }
        }
        
    }

}