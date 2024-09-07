window.addEventListener('load', paginacarregada); 

function setaon() {
    var setaElement = document.getElementById("seta"); 
    var preco = document.getElementById("preco");
    var setaonElement = document.getElementById("setaon"); 

    if (preco.style.display == "flex" || preco.style.display == "") {
        preco.style.display = "none";
    } else {
        preco.style.display = "flex";
    }

    if (setaonElement.style.display == "flex" || setaonElement.style.display == "") {
        setaonElement.style.display = "none";
    } else {
        setaonElement.style.display = "flex";
    }

    document.getElementById('setaoff').style.display = "flex";
}

function setaoff() {
    var setaElement = document.getElementById("seta");
    var preco = document.getElementById("preco"); 
    var setaonElement = document.getElementById("setaon"); 
    var setaoffElement = document.getElementById("setaoff");

    if (preco.style.display == "flex" || preco.style.display == "") {
        preco.style.display = "none";
    } else {
        preco.style.display = "flex";
    }

    if (setaoffElement.style.display == "flex" || setaoffElement.style.display == "") {
        setaoffElement.style.display = "none";
    } else {
        setaoffElement.style.display = "flex";
    }

    document.getElementById('setaon').style.display = "flex";
}



