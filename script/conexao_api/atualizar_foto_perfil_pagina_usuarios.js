document.addEventListener("DOMContentLoaded", function () {
  const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

  document
    .getElementById("inputImagemPerfilUser")
    .addEventListener("change", async function (event) {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("foto", file);

      try {
        const response = await fetch(
          `http://localhost:4500/usuarios/update-foto/${userId.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );

        if (response.ok) {
          // Atualize a imagem do perfil na página, se necessário
          const result = await response.json();
          if (result.perfilUrl) {
            document.getElementById("imagemdefundodoperfil").src =
              result.perfilUrl;
            window.location.reload(); // Recarrega a página para refletir as mudanças
          }
        } else {
          console.error("Erro ao enviar imagem do perfil");
        }
      } catch (error) {
        console.error("Erro ao enviar imagem do perfil:", error);
      }
    });
});
