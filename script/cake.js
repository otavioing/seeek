function desmarcarRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
}

function seta() {
    var preco = document.getElementById("divinputpreco");
    
    var setaonElement = document.getElementById("seta"); 

    if (preco.style.display == "none" || preco.style.display == "") {
        preco.style.display = "flex";
    } else {
        preco.style.display = "none";
    }

    if (setaonElement.style.transform == "rotate(180deg)" || setaonElement.style.transform == "") {
        setaonElement.style.transform = "rotate(0deg)";
    } else {
        setaonElement.style.transform = "rotate(180deg)";
    }
}

function setapreco(){

    var preco = document.getElementById("faixadeprecocursos");
    
    var setaonElement = document.getElementById("setapreco"); 

    if (preco.style.display == "none" || preco.style.display == "") {
        preco.style.display = "flex";
    } else {
        preco.style.display = "none";
    }

    if (setaonElement.style.transform == "rotate(180deg)" || setaonElement.style.transform == "") {
        setaonElement.style.transform = "rotate(0deg)";
    } else {
        setaonElement.style.transform = "rotate(180deg)";
    }


}

