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