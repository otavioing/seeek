    // // Login
    // const loginForm = document.getElementById('loginForm');
    // loginForm.addEventListener('submit', async (e) => {
    //   e.preventDefault();

    //   const email = document.getElementById('logInEmail').value;
    //   const senha = document.getElementById('logInPsw').value;

    //   try {
    //     const response = await fetch('http://localhost:4500/usuarios/login', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ email, senha })
    //     });

    //     const data = await response.json();

    //     if (response.ok && data.usuario) {
    //       alert('Login realizado! Bem-vindo, ' + data.usuario.nome);
    //       window.location.href = "/index.html";
    //     } else {
    //       alert('Email ou senha inválidos.');
    //     }
    //   } catch (err) {
        //     alert('Erro na requisição: ' + err.message);
        //   }
        // });
        
        //     <form id="loginForm" class="formLogin">
        //     <input type="email" name="email" class="modalInput" id="logInEmail" placeholder="Email" required>
        //     <input type="password" name="password" class="modalInput" id="logInPsw" placeholder="Senha" required>
        //     <input class="form-btn" id="logInBtn" type="submit" value="Entrar">
        // </form>

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('logInEmail').value;
      const senha = document.getElementById('logInPsw').value;

      try {
        const response = await fetch('http://localhost:4500/usuarios/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (response.ok && data.usuario) {
          // Salvar no localStorage e redirecionar
          localStorage.setItem("usuarioLogado", JSON.stringify(data.usuario));
          window.location.href = "/index.html";
        } else {
          alert('Email ou senha inválidos.');
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message);
      }
    });
