const form = document.getElementById('enviararquivodopost');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const arquivo = document.getElementById('enviarImg').files[0];
  const descricao = document.getElementById('text-new-post').value;
  const user_id = usuario.id;

  const formData = new FormData();
  formData.append("arquivo", arquivo);
  formData.append("legenda", descricao);
  formData.append("user_id", user_id);

  try {
    const response = await fetch("http://localhost:4500/posts", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta do servidor:", data);
  } catch (err) {
    alert("Erro na requisição: " + err.message);
    console.log("Erro na requisição:", err);
  }
});

console.log("Script de adicionar projeto carregado.");