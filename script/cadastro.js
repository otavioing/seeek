
// const cadastroForm = document.getElementById('cadastroForm');
// const verificacaoContainer = document.getElementById('verificacaoContainer');
// const verificarCodigoBtn = document.getElementById('verificarCodigoBtn');
// const codigoVerificacaoInput = document.getElementById('codigoVerificacao');

// let codigoGerado = null;
// let dadosTemporarios = {}; // para guardar os dados até verificar

// cadastroForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const nome = document.getElementById('cadastroNome').value;
//   const email = document.getElementById('cadastroEmail').value;
//   const senha = document.getElementById('cadastroSenha').value;

//   // Salva para depois usar na criação
//   dadosTemporarios = { nome, email, senha,};

//   try {
//     const response = await fetch('http://localhost:4500/usuarios/solicitar-criacao', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nome, email, senha })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       alert('Erro ao solicitar verificação: ' + data.message);
//       return;
//     }

//     codigoGerado = data.codigo; // salvar o código enviado
//     verificacaoContainer.style.display = 'block'; // mostra o campo de verificação

//   } catch (err) {
//     alert("Erro: " + err.message);
//   }
// });

// // Verificação do código
// verificarCodigoBtn.addEventListener('click', async () => {
//   const codigoDigitado = codigoVerificacaoInput.value;

//   if (codigoDigitado != codigoGerado) {
//     alert("Código incorreto!");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("nome", dadosTemporarios.nome);
//   formData.append("email", dadosTemporarios.email);
//   formData.append("senha", dadosTemporarios.senha);

//   try {
//     const finalResponse = await fetch('http://localhost:4500/usuarios', {
//       method: 'POST',
//       body: formData
//     });

//     const finalData = await finalResponse.json();

//     if (finalResponse.ok) {
//       alert("Conta criada com sucesso!");
//       cadastroForm.reset();
//       verificacaoContainer.style.display = 'none';
//       codigoVerificacaoInput.value = '';
//       document.getElementById('sign-up-modal').style.display = 'none'; // Esconde o formulário de cadastro
//     } else {
//       alert("Erro ao criar conta: " + finalData.message);
//     }
//   } catch (err) {
//     alert("Erro ao criar conta: " + err.message);
//   }
// });


/*
  Código ajustado para criar o usuário diretamente, sem solicitar código de verificação.
*/

cadastroForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('cadastroNome').value;
  const email = document.getElementById('cadastroEmail').value;
  const senha = document.getElementById('cadastroSenha').value;

  const formData = new FormData();
  formData.append("nome", nome);
  formData.append("email", email);
  formData.append("senha", senha);

  try {
    const response = await fetch('http://localhost:4500/usuarios', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      alert("Conta criada com sucesso!");
      cadastroForm.reset();
      document.getElementById('sign-up-modal').style.display = 'none';
    } else {
      alert("Erro ao criar conta: " + data.message);
    }
  } catch (err) {
    alert("Erro ao criar conta: " + err.message);
  }
});