var modal = document.getElementById("modalPort");
var divPort = document.querySelectorAll(".divPortifolio");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

window.addEventListener('load', function() 
{const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const isLogin = urlParams.get('login');

    console.log('carregou', urlParams, isLogin)

    if (isLogin) {
        document.getElementById('user-box').style.display = 'block';
    }
})

for (let i = 0; i < divPort.length; i++) {
    divPort[i].addEventListener("click", function () {
        var img = this.querySelector(".portImg");
        if (img) {
            modalImage.src = img.src;
            modal.style.display = "block";
            body.style.overflow = "hidden";
        }
    });
}

span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
// Função para selecionar o tipo de usuário, caixinha de usuario pra escolher conta empresarial ou padrao.
// type = 'default' ou 'enterprise'
function selectUserType(type) {
    console.log(type);
    // Exibe a caixa de confirmação
    document.getElementById("user-selection").style.display = "none";
    if (type === 'default') {
        document.getElementById("confirmation-box").style.display = "block";
    }
    if (type === 'enterprise') {
        console.log('entrou')
        document.getElementById("enterprise-confirmation-box").style.display = "block";
    }
}

// Fecha o modal de confirmação de usuário
function onCloseDialog() {
    document.getElementById("confirmation-box").style.display = "none";
    document.getElementById("enterprise-confirmation-box").style.display = "none";
    document.getElementById("user-box").style.display = "none";
    window.location.href = "index.html";
}

function onRegisterEnterprise() {
    // codigo para registrar usuario empresarial
    onCloseDialog();
}


