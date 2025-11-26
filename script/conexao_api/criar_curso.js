const form = document.getElementById("form_criar_curso");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

    const tituloCurso = document.getElementById("textoTituloCurso").value.trim();
    const imagemCurso = document.getElementById("enviarImg").files[0];
    const descricaoCurso = document.getElementById("textoDescricaoCurso").value.trim();
    const id_categoria = document.querySelector('input[name="categoria"]:checked')?.value;
    const nivelCurso = document.getElementById("nivelCurso").value;
    const valorCurso = document.getElementById("inputValorCurso").value;
    const quantidadevagas = document.getElementById("inputVagasCurso").value;
    const audioCurso = document.getElementById("inputAudioCurso").value;
    const legendaCurso = document.getElementById("inputLegendaCurso").value;

    // ⚠ VALIDAÇÕES
    if (!tituloCurso) {
        // alert("Digite o nome do curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Digite o nome do curso!");
        return;
    }

    if (!imagemCurso) {
        // alert("Adicione uma imagem ao curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Adicione uma imagem ao curso!");
        return;
    }

    if (!descricaoCurso) {
        // alert("Digite uma descrição para o curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Digite uma descrição para o curso!");
        return;
    }

    if (!id_categoria) {
        // alert("Selecione uma categoria do curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Selecione uma categoria do curso!");
        return;
    }

    if (nivelCurso === "nadaselecionado") {
        // alert("Selecione um nível para o curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Selecione um nível para o curso!");
        return;
    }

    if (valorCurso === "nadaselecionado") {
        // alert("Selecione o tipo de preço do curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Selecione o tipo de preço do curso!");
        return;
    }

    if (!quantidadevagas || quantidadevagas < 1) {
        // alert("Defina a quantidade de vagas (mínimo 1)!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Defina a quantidade de vagas (mínimo 1)!");
        return;
    }

    if (audioCurso === "nadaselecionado") {
        // alert("Selecione o áudio do curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Selecione o áudio do curso!");
        return;
    }

    if (legendaCurso === "nadaselecionado") {
        // alert("Selecione a legenda do curso!");
        try {
            const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
            audio.volume = 0.8;
            await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        } catch (err) {
            console.log('Erro ao criar/reproduzir áudio:', err);
        }
        abrirnotificacaopost("Selecione a legenda do curso!");
        return;
    }

    const formData = new FormData();
    formData.append("id_user", userId.id);
    formData.append("nome_curso", tituloCurso);
    formData.append("imagem_curso", imagemCurso);
    formData.append("descricao_curso", descricaoCurso);
    formData.append("id_categoria", id_categoria);
    formData.append("nivel_curso", nivelCurso);
    formData.append("valor_curso", valorCurso);
    formData.append("quantidade_vagas", quantidadevagas);
    formData.append("audio_curso", audioCurso);
    formData.append("legenda_curso", legendaCurso);

    try {
        const resposta = await fetch("http://localhost:4500/postscursos", {
            method: "POST",
            body: formData,
        });

        const resultado = await resposta.json();
        console.log("Resposta do servidor:", resultado);

        if (resposta.ok) {
            alert("Curso criado com sucesso!");
            form.reset();
        } else {
            alert("Erro ao criar curso: " + resultado.message);
        }

    } catch (erro) {
        console.error("Erro ao enviar:", erro);
        alert("Erro de comunicação com o servidor!");
    }
});


function abrirnotificacaopost(mensagem) {
    let notificacao = document.getElementById("notificacao");
    let mensagemnotificacao = document.getElementById("textonotificacao");
    mensagemnotificacao.innerHTML = mensagem;

    notificacao.style.opacity = "1";
    setTimeout(() => {
        notificacao.style.opacity = "0";
    }, 3000);
}