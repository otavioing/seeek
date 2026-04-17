const formEditarProjeto = document.getElementById("formEditarProjeto");
const campoTitulo = document.getElementById("textoTituloProjeto");
const campoDescricao = document.getElementById("text-new-post");
const galeriaImagens = document.getElementById("previewImagensExistentes");

const paramsEdicaoPost = new URLSearchParams(window.location.search);
const idPostParaEditar = paramsEdicaoPost.get("idpost");

function abrirnotificacaopost(mensagem) {
  const notificacao = document.getElementById("notificacao");
  const mensagemnotificacao = document.getElementById("textonotificacao");
  if (!notificacao || !mensagemnotificacao) return;

  mensagemnotificacao.innerHTML = mensagem;
  notificacao.style.opacity = "1";

  setTimeout(() => {
    notificacao.style.opacity = "0";
  }, 3000);
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function preencherFormulario(post) {
  campoTitulo.value = post.titulo || "";
  campoDescricao.value = post.legenda || post.descricao || "";
  autoResize(campoTitulo);
  autoResize(campoDescricao);

  const categoria = String(post.id_categoria || "");
  if (categoria) {
    const inputCategoria = document.querySelector(
      `input[name="categoria"][value="${categoria}"]`
    );
    if (inputCategoria) inputCategoria.checked = true;
  }

  galeriaImagens.innerHTML = "";
  const imagens = Array.isArray(post.imagens) ? post.imagens : [];

  if (!imagens.length) {
    galeriaImagens.innerHTML = '<p style="color: var(--cinzaEscuro);">Este projeto não possui imagens.</p>';
    return;
  }

  imagens.forEach((src) => {
    const containerImg = document.createElement("div");
    containerImg.className = "container-imagem";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagem atual do projeto";

    containerImg.appendChild(img);
    galeriaImagens.appendChild(containerImg);
  });
}

async function carregarPostParaEdicao() {
  if (!idPostParaEditar) {
    abrirnotificacaopost("Post inválido para edição.");
    return;
  }

  try {
    const respostaPost = await fetch(`${ip_api}/posts/${idPostParaEditar}`);

    if (respostaPost.ok) {
      const data = await respostaPost.json();
      const post = Array.isArray(data) ? data[0] : data;
      if (post) {
        preencherFormulario(post);
        return;
      }
    }

    const respostaTodosPosts = await fetch(`${ip_api}/posts`);
    if (!respostaTodosPosts.ok) {
      throw new Error("Não foi possível carregar os dados do post.");
    }

    const todosPosts = await respostaTodosPosts.json();
    const post = todosPosts.find((item) => String(item.id) === String(idPostParaEditar));

    if (!post) {
      throw new Error("Post não encontrado.");
    }

    preencherFormulario(post);
  } catch (erro) {
    console.error("Erro ao carregar post para edição:", erro);
    abrirnotificacaopost(erro.message || "Erro ao carregar o post.");
  }
}

formEditarProjeto.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titulo = campoTitulo.value.trim();
  const descricao = campoDescricao.value.trim();
  const idCategoria = document.querySelector('input[name="categoria"]:checked')?.value;

  if (!titulo) {
    abrirnotificacaopost("Digite um título para o projeto!");
    return;
  }

  if (!descricao) {
    abrirnotificacaopost("Digite uma descrição para o projeto!");
    return;
  }

  if (!idCategoria) {
    abrirnotificacaopost("Selecione uma categoria!");
    return;
  }

  try {
    const resposta = await fetch(`${ip_api}/posts/${idPostParaEditar}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descricao,
        titulo,
        id_categoria: Number(idCategoria),
      }),
    });

    const data = await resposta.json().catch(() => ({}));

    if (!resposta.ok) {
      throw new Error(data.message || "Não foi possível atualizar o post.");
    }

    abrirnotificacaopost("Projeto atualizado com sucesso!");
  } catch (erro) {
    console.error("Erro ao atualizar projeto:", erro);
    abrirnotificacaopost(erro.message || "Erro ao atualizar projeto.");
  }
});

carregarPostParaEdicao();
