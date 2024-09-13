function ModoEscuro() {
    let corpo = document.getElementById("todo");
    corpo.classList.add("modoEscuro");
}
function ModoClaro (){
    let todo = document.getElementById("todo");
    todo.classList.remove("modoEscuro")
}

function TrocaLinguagem (lang){
   
        location.hash = lang;
        location.reload();
    }

var idioma = {

eng: { 
}

}

if (window.location.hash) {
    var lang = window.location.hash.substring(1); 
    if (language[lang]) {
        document.getElementById("siteContent").textContent = language[lang].welcome;
    }
}
