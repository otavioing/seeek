// Script para a janela modal
var modal = document.getElementById("modalPort");
var imgs = document.querySelectorAll(".portImg");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        modalImage.src = this.src;
        modal.style.display = "block";
        body.style.overflow = "hidden";
    }
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

