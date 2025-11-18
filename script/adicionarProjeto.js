const form = document.getElementById('enviararquivodopost');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const arquivo = document.getElementById('enviarImg').files[0];
  const descricao = document.getElementById('text-new-post').value;
  const titulo = document.getElementById('textoTituloProjeto').value;
  const user_id = usuario.id;
  const id_categoria = document.querySelector('input[name="categoria"]:checked')?.value;
  alert(categoria); 

  const formData = new FormData();
  formData.append("arquivo", arquivo);
  formData.append("legenda", descricao);
  formData.append("titulo", titulo);
  formData.append("user_id", user_id);
  formData.append("id_categoria", id_categoria);

  try {
    const response = await fetch("http://localhost:4500/posts", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta do servidor:", data);
    if (response.ok) {
      abrirnotificacaopostenviado();
      form.reset(); // Limpa os campos do formulário
      window.onbeforeunload = null; // Impede recarregamento automático, se houver
    } else {
      alert("Erro ao adicionar projeto: " + data.message);
    }
  } catch (err) {
    alert("Erro na requisição: " + err.message);
    console.log("Erro na requisição:", err);
  }
});


function abrirnotificacaopostenviado() {
  let notificacao = document.getElementById("caixadenotificacaopostrealizadocomsucesso");

  notificacao.style.top = "0rem";
  setTimeout(() => {
    notificacao.style.top = "-10rem";
  }, 3000);
}
// <div id="caixadenotificacaopostrealizadocomsucesso" class="caixadenotificacaorealizadocomsucesso">
//  <h2>Post enviado com sucesso!</h2>
//  <p>Seu conteúdo foi publicado e já pode ser visualizado por outros usuários.</p>
// </div>

function autoResize(textarea) {
  textarea.style.height = "auto"; // reseta a altura
  textarea.style.height = textarea.scrollHeight + "px"; // ajusta para o conteúdo
}