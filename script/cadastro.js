// // Cadastro
// const cadastroForm = document.getElementById('cadastroForm');
// cadastroForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const nome = document.getElementById('cadastroNome').value;
//     const email = document.getElementById('cadastroEmail').value;
//     const senha = document.getElementById('cadastroSenha').value;

//     try {
//         const response = await fetch('http://localhost:4500/usuarios', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ nome, email, senha })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert('Cadastro realizado com sucesso!');
//             cadastroForm.reset();
//         } else {
//             alert('Erro no cadastro: ' + (data.message || ''));
//         }
//     } catch (err) {
//         alert('Erro na requisição: ' + err.message);
//     }
// });

    // Cadastro
    const cadastroForm = document.getElementById('cadastroForm');
    cadastroForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("nome", document.getElementById('cadastroNome').value);
      formData.append("email", document.getElementById('cadastroEmail').value);
      formData.append("senha", document.getElementById('cadastroSenha').value);
      formData.append("foto", document.getElementById('cadastroFoto').files[0]);

      try {
        const response = await fetch('http://localhost:4500/usuarios', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          cadastroForm.reset();
        } else {
          alert('Erro no cadastro: ' + (data.message || ''));
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message);
      }
    });

/* <form class="sign-up-container" id="cadastroForm">

<p id="matchEmail"></p>
<input type="email" id="cadastroEmail" name="email" class="modalInput" placeholder="Email" required>

<input type="text" id="cadastroNome" name="nome" class="modalInput" placeholder="Nome" required>

<input type="password" id="password" name="password" class="modalInput" placeholder="Senha"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>

<div id="aviso">
    <p id="letter" class="invalid">Uma ou mais letra(s) <b>minúscula(s)</b></p>
    <p id="capital" class="invalid">Uma ou mais letras(s) <b>maiúscula(s)</b></p>
    <p id="number" class="invalid">Um ou mais <b>número(s)</b></p>
    <p id="length" class="invalid">Mínimo de <b>8 (oito) caracteres</b></p>
</div>

<input type="password" id="cadastroSenha" name="pswRepeat" class="modalInput"
    placeholder="Repitir Senha" required>
<p id="matchPsw"></p>

<input type="file" id="cadastroFoto" accept="image/*" required>

<input id="signInBtn" class="form-btn" type="submit" value="Cadastrar">
</form> */