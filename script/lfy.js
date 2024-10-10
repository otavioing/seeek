window.addEventListener("load", paginacarregada);

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

    // Função para selecionar o tipo de usuário, caixinha de usuario pra escolher conta empresarial ou padrao.
function selectUserType(type) {
    // Exibe a caixa de confirmação
    document.getElementById("user-selection").style.display = "none";
    document.getElementById("confirmation-box").style.display = "block";

    // Define o tipo de usuário selecionado
    document.getElementById("user-type").textContent = type;
}

// Função para cancelar e voltar à seleção de usuário
function goBack() {
    document.getElementById("confirmation-box").style.display = "none";
    document.getElementById("user-selection").style.display = "block";
}

// Função para confirmar a seleção
function confirmSelection() {
    const userType = document.getElementById("user-type").textContent;
    alert(`Você confirmou como: Usuário ${userType}`);
    // Aqui você pode adicionar lógica para prosseguir com o cadastro ou redirecionar
}

// Função para confirmar a seleção
function confirmSelection() {
    const userType = document.getElementById("user-type").textContent;
    alert(`Você confirmou como: Usuário ${userType}`);
    
    // Esconder a caixa de confirmação
    document.getElementById("confirmation-box").style.display = "none";
    


    // Aqui no futuro vou  adicionar outras ações, como redirecionar o usuário ou finalizar o cadastro.
}
}