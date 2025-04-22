window.addEventListener("load", paginacarregada);

// Função para abrir e fechar o menu de hamburguer
function paginacarregada() {

    let botaomenu = document.getElementById("botaoMenu");
    botaomenu.addEventListener("click", abrirMenu);

    function abrirMenu() {
        if (menu.style.left == "-100%" || menu.style.left == "") {
            menu.style.left = "0";
        } else {
            if (menu.style.left = "0" || menu.style.left == "") {
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

    //função para trocar entre Info, Projetos e Cursos na página de usuário
    document.getElementById("ProjetosUser").addEventListener("click", function () {
        document.getElementById("desaparecerInfoUser").style.display = "none";
        document.getElementById("mainImagensUser").style.display = "block";
        document.getElementById("mainImagensUser").style.marginTop = "1.5rem";
        document.getElementById("mainCursosUser").style.display = "none";
        document.getElementById("ProjetosUser").className = "opccaoSelecionada";
        document.getElementById("InfoUser").className = "";
        document.getElementById("informacoesperfil").style.height = "18rem";
        document.getElementById("informacoesperfil").style.boxShadow = "none";
        document.getElementById("editarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("trocarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("CursosUser").className = "";
    });

    document.getElementById("InfoUser").addEventListener("click", function () {
        document.getElementById("desaparecerInfoUser").style.display = "block";
        document.getElementById("mainImagensUser").style.display = "none";
        document.getElementById("mainCursosUser").style.display = "none";
        document.getElementById("ProjetosUser").className = "";
        document.getElementById("InfoUser").className = "opccaoSelecionada";
        document.getElementById("informacoesperfil").style.height = "auto";
        document.getElementById("informacoesperfil").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
        document.getElementById("editarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("trocarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("CursosUser").className = "";
    });


    //função para trocar entre info, projetos do usuário e cursos
    document.getElementById("cursosUser1").addEventListener("click", function () {
        document.getElementById("projetosUser1").style.backgroundColor = "var(--cinzaBaseee)";
        document.getElementById("cursosUser1").style.backgroundColor = "var(--roxobase)";
        document.getElementById("editarUserPerfil").style.backgroundColor = "var(--roxobase)";
        document.getElementById("trocarUserPerfil").style.backgroundColor = "var(--roxobase)";
        document.getElementById("mainImagensUser").style.display = "none";
        document.getElementById("mainCursosUser").style.display = "block";
    });

    document.getElementById("projetosUser1").addEventListener("click", function () {
        document.getElementById("cursosUser1").style.backgroundColor = "var(--cinzaBaseee)";
        document.getElementById("projetosUser1").style.backgroundColor = "var(--azulBase)";
        document.getElementById("editarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("trocarUserPerfil").style.backgroundColor = "var(--azulBase)";
        document.getElementById("mainImagensUser").style.display = "block";
        document.getElementById("mainCursosUser").style.display = "none";
    });

    document.getElementById("CursosUser").addEventListener("click", function () {
        document.getElementById("desaparecerInfoUser").style.display = "none";
        document.getElementById("projetosUser1").style.backgroundColor = "var(--cinzaBaseee)";
        document.getElementById("cursosUser1").style.backgroundColor = "var(--roxobase)";
        document.getElementById("editarUserPerfil").style.backgroundColor = "var(--roxobase)";
        document.getElementById("trocarUserPerfil").style.backgroundColor = "var(--roxobase)";
        document.getElementById("mainImagensUser").style.display = "none";
        document.getElementById("mainCursosUser").style.display = "block";
        document.getElementById("informacoesperfil").style.boxShadow = "none";
        document.getElementById("informacoesperfil").style.height = "18rem";
        document.getElementById("ProjetosUser").className = "";
        document.getElementById("InfoUser").className = "";
        document.getElementById("CursosUser").className = "opccaoSelecionada";
    });


    //função para pular o tipo usuário
    document.getElementById("pularTipoUser").addEventListener("click", function () {
        document.getElementById("cancelarTipoUser").style.display = "flex";
    });


    //função para fechar a aba de adicionar nova img no perfil do usuário    //DETALHE IMPORTANTE!!!!! NÃO FUNCIONA SAPORRA KSKSKSSKSKSKSKSK

    function abrirAba() {
        document.getElementById("adcProjeto").style.display = "flex";
    }

}