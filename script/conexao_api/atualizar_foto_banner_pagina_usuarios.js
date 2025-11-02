document.addEventListener("DOMContentLoaded", function () {
  const userId = JSON.parse(localStorage.getItem("usuarioLogado"));

  document
    .getElementById("inputImagembannerPerfil")
    .addEventListener("change", async function (event) {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("foto", file);

      try {
        const response = await fetch(
          `http://localhost:4500/usuarios/update-fotobanner/${userId.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );

        if (response.ok) {
          // Atualize a imagem do banner na página, se necessário
          const result = await response.json();
          if (result.bannerUrl) {
            document.getElementById("imagemdefundodoperfil").src =
              result.bannerUrl;
            window.location.reload(); // Recarrega a página para refletir as mudanças
          }
        } else {
          console.error("Erro ao enviar imagem do banner");
        }
      } catch (error) {
        console.error("Erro ao enviar imagem do banner:", error);
      }
    });
});
