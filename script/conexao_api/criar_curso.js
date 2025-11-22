form = document.getElementById("form_criar_curso");



form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

    const tituloCurso = document.getElementById("textoTituloCurso").value;
    const imagemCurso = document.getElementById("enviarImg").files[0];
    const descricaoCurso = document.getElementById("textoDescricaoCurso").value;
    const id_categoria = document.querySelector('input[name="categoria"]:checked')?.value;
    const nivelCurso = document.getElementById("nivelCurso").value;
    const valorCurso = document.getElementById("inputValorCurso").value;
    const quantidadevagas = document.getElementById("inputVagasCurso").value;
    const audiooCurso = document.getElementById("inputAudioCurso").value;
    const legendaCurso = document.getElementById("inputLegendaCurso").value;

    const formData = new FormData();

    formData.append("id_user", userId.id);   // <- se o login salva ID assim
    formData.append("nome_curso", tituloCurso);
    formData.append("imagem_curso", imagemCurso);
    formData.append("descricao_curso", descricaoCurso);
    formData.append("id_categoria", id_categoria);
    formData.append("nivel_curso", nivelCurso);
    formData.append("valor_curso", valorCurso);
    formData.append("quantidade_vagas", quantidadevagas);
    formData.append("audio_curso", audiooCurso);
    formData.append("legenda_curso", legendaCurso);

    try {
        const resposta = await fetch("http://localhost:4500/postscursos", {
            method: "POST",
            body: formData
            // NÃO coloque headers, FormData já define tudo sozinho
        });

        const resultado = await resposta.json();
        console.log(resultado);
        window.location.reload();

    } catch (erro) {
        console.error("Erro ao enviar:", erro);
    }
});
