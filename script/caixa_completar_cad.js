var caixa = document.getElementById("formulariocaixaupdate");
const cadastroForm = document.getElementById("formulariocaixaupdate");
cadastroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome_user = document.getElementById("updatenomeuser").value;
  const profissao = document.getElementById("updateprofissao").value;
  const descricao = document.getElementById("updatedescricao").value;
  const foto = document.getElementById("cadastroFoto").files[0];

  const formData = new FormData();
  formData.append("nome_de_usuario", nome_user);
  formData.append("cargo", profissao);
  formData.append("descricao", descricao);
  if (foto) {
    formData.append("foto", foto);
  }

  try {
    const finalResponse = await fetch(
      `http://localhost:4500/usuarios/completar-cadastro/${usuario.id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    const finalData = await finalResponse.json();

    if (finalResponse.ok) {
      alert("cadastro finalizado com sucesso!");
      cadastroForm.reset();
      
    } else {
      alert("Erro ao finalizar cadastro: " + finalData.message);
    }
  } catch (err) {
    alert("Erro ao finalizar cadastro: " + err.message);
  }
});


  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch(`http://localhost:4500/usuarios/verificarcaixa/${usuario.id}`);
      const data = await response.json();
  
      const verificacaoContainer = document.getElementById("confirmation-box");
  
      // Se o cadastro estiver completo, esconda a caixa de verificação
      if (data[0].cadastro_completo === 1) {
        verificacaoContainer.style.display = "none";  // Esconde a caixa
        ''
      } else {
        verificacaoContainer.style.display = "block";  // Exibe a caixa
      }
    } catch (err) {
      console.error("Erro ao buscar dados do usuário:", err);
    }
  });
  
  
