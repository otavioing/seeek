function abrirModal() {
    document.getElementById("modal-recuperacao").style.display = "block";
  }

  function fecharModal() {
    document.getElementById("modal-recuperacao").style.display = "none";
    document.getElementById("mensagemRec").innerText = "";
    document.getElementById("codigoContainer").style.display = "none";
  }

  async function enviarCodigo() {
    const email = document.getElementById("emailRec").value;

    const res = await fetch("http://localhost:4500/usuarios/recuperar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const dados = await res.json();
    const msg = document.getElementById("mensagemRec");

    if (res.ok) {
      localStorage.setItem("codigoRecuperacao", dados.codigo); // apenas para teste
      localStorage.setItem("emailRec", email);
      msg.innerText = "Código enviado para seu email.";
      document.getElementById("codigoContainer").style.display = "block";
    } else {
      msg.innerText = dados.message;
    }
  }

  async function atualizarSenha() {
    const codigo = document.getElementById("codigo").value;
    const novaSenha = document.getElementById("novaSenha").value;
    const codigoCorreto = localStorage.getItem("codigoRecuperacao");
    const email = localStorage.getItem("emailRec");
    const msg = document.getElementById("mensagemRec");

    if (codigo !== codigoCorreto) {
      msg.innerText = "Código incorreto!";
      return;
    }

    const res = await fetch("http://localhost:4500/usuarios/atualizar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, novaSenha })
    });

    const dados = await res.json();

    if (res.ok) {
      msg.innerText = "Senha atualizada com sucesso!";
      localStorage.removeItem("codigoRecuperacao");
      localStorage.removeItem("emailRec");
      setTimeout(fecharModal, 2000);
    } else {
      msg.innerText = dados.message;
    }
  }

