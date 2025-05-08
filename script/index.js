
window.addEventListener('load', function() 
{const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const isLogin = urlParams.get('login');
    
    console.log('carregou', urlParams, isLogin)
    
    if (isLogin) {
        document.getElementById('user-box').style.display = 'block';
    }
})



// Função para abrir o modal com a imagem do portifólio
var modal = document.getElementById("modalPort");
var divPort = document.querySelectorAll(".divPortifolio");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

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
    body.style.overflowY = "auto";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}

// Função para mostrar a área de pesquisa
document.addEventListener("DOMContentLoaded", function () {
    const buttonFiltro = document.querySelector(".buttonFiltro");
    const areaDePesquisa = document.querySelector(".areaDePesquisa");
    const closeSearchArea = document.querySelector(".closeSearchArea");

    buttonFiltro.addEventListener("click", () => {
        areaDePesquisa.classList.toggle("active");
        body.style.overflow = "hidden";
    });

    // Fecha ao clicar fora da área de pesquisa
    document.addEventListener("click", (event) => {
        if (!areaDePesquisa.contains(event.target) && !buttonFiltro.contains(event.target)) {
            areaDePesquisa.classList.remove("active");
            body.style.overflowY = "auto";
        }
    });

    // Fecha a área de pesquisa ao clicar no botão de fechar
    closeSearchArea.addEventListener("click", () => {
        areaDePesquisa.classList.remove("active");
        body.style.overflowY = "auto";
    });
});

// Função para mover o scroll horizontalmente a página de tendências
function moverDir(button) {
    // Encontrar o carrossel relacionado ao botão clicado
    var carrossel = button.parentElement.querySelector('.carrossel-tend');
    
    // Definir uma fração da largura do carrossel para mover (exemplo: 1/3 da largura)
    var parte = carrossel.clientWidth / 3;
    
    // Mover para a direita, rolando para a próxima parte
    carrossel.scrollBy({ left: parte, behavior: 'smooth' });
}

function moverEsq(button) {
    // Encontrar o carrossel relacionado ao botão clicado
    var carrossel = button.parentElement.querySelector('.carrossel-tend');
    
    // Definir uma fração da largura do carrossel para mover (exemplo: 1/3 da largura)
    var parte = carrossel.clientWidth / 3;
    
    // Mover para a esquerda, rolando para a parte anterior
    carrossel.scrollBy({ left: -parte, behavior: 'smooth' });
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
    let notificacao = document.getElementById("caixadenotificacaocompletarcadastro");
    notificacao.style.top = "0rem";
    setTimeout(() => {
        notificacao.style.top = "-10rem";
    }, 3000);
}

function fecharnotificacao(){
    let notificacao = document.getElementById("caixadenotificacaocompletarcadastro");
    notificacao.style.top = "-10rem";
}

function onRegisterEnterprise() {
    // codigo para registrar usuario empresarial
    onCloseDialog();
}

document.getElementById("preview").style.display = "none";

const input = document.getElementById("cadastroFoto");
const preview = document.getElementById("preview");

input.addEventListener("change", function () {
const file = this.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function () {
preview.src = reader.result;
document.getElementById("preview").style.display = "flex";
document.getElementById("labeladdfoto").style.display = "none";
};
reader.readAsDataURL(file);
}
});