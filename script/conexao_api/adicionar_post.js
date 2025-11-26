const form = document.getElementById('enviararquivodopost');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const arquivo = document.getElementById('enviarImg').files[0];
  const descricao = document.getElementById('text-new-post').value.trim();
  const titulo = document.getElementById('textoTituloProjeto').value.trim();
  const id_categoria = document.querySelector('input[name="categoria"]:checked')?.value;

  // ⚠ VALIDAÇÕES
  if (!arquivo) {
    // alert("Selecione uma imagem para postar!");
    // reproduzir áudio padrão do site em vez de abrir seletor (substitua o caminho)
    try {
      const audio = new Audio('../audios/error-011-352286.mp3'); // ajuste para o arquivo real
      audio.volume = 0.8;
      await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
    } catch (err) {
      console.log('Erro ao criar/reproduzir áudio:', err);
    }
    abrirnotificacaopost("Selecione uma imagem para postar!");
    return;
  }
  if (!titulo) {
    // alert("Digite um título para o projeto!");
    try {
      const audio = new Audio('../error-011-352286.mp3'); // ajuste para o arquivo real
      audio.volume = 0.8;
      await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
    } catch (err) {
      console.log('Erro ao criar/reproduzir áudio:', err);
    }
    abrirnotificacaopost("Digite um título para o projeto!");
    return;
  }
  if (!descricao) {
    // alert("Digite uma descrição para o projeto!");
    try {
      const audio = new Audio('../error-011-352286.mp3'); // ajuste para o arquivo real
      audio.volume = 0.8;
      await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
    } catch (err) {
      console.log('Erro ao criar/reproduzir áudio:', err);
    }
    abrirnotificacaopost("Digite uma descrição para o projeto!");
    return;
  }
  if (!id_categoria) {
    // alert("Selecione uma categoria!");
    try {
      const audio = new Audio('../error-011-352286.mp3'); // ajuste para o arquivo real
      audio.volume = 0.8;
      await audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
    } catch (err) {
      console.log('Erro ao criar/reproduzir áudio:', err);
    }
    abrirnotificacaopost("Selecione uma categoria!");
    return;
  }

  const formData = new FormData();
  formData.append("arquivo", arquivo);
  formData.append("legenda", descricao);
  formData.append("titulo", titulo);
  formData.append("user_id", usuario.id);
  formData.append("id_categoria", id_categoria);

  try {
    const response = await fetch("http://localhost:4500/posts", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta do servidor:", data);

    if (response.ok) {
      abrirnotificacaopost("Post criado com Sucesso");
      form.reset();
      window.onbeforeunload = null;
    } else {
      alert("Erro ao adicionar projeto: " + data.message);
    }
  } catch (err) {
    alert("Erro na requisição: " + err.message);
    console.log("Erro na requisição:", err);
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
function autoResize(textarea) {
  textarea.style.height = "auto"; // reseta a altura
  textarea.style.height = textarea.scrollHeight + "px"; // ajusta para o conteúdo
}