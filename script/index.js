var modal = document.getElementById("modalPort");
var divPort = document.querySelectorAll(".divPortifolio");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

for (let i = 0; i < divPort.length; i++){
    divPort[i].addEventListener("click", function() {
        var img = this.querySelector(".portImg");
        if(img){
            modalImage.src = img.src;
            modal.style.display = "block";
            body.style.overflow = "hidden";
        }
    });
}

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
// Função para selecionar o tipo de usuário, caixinha de usuario pra escolher conta empresarial ou padrao.
function selectUserType(type) {
    // Exibe a caixa de confirmação
    document.getElementById("user-selection").style.display = "none";
    document.getElementById("confirmation-box").style.display = "block";

    


    // Define o tipo de usuário selecionado
    document.getElementById("user-type").textContent = type;
}

