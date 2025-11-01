function abrirModal() {
  document.getElementById("container_enviar_email_recuperacao").style.display =
    "block";
}

function fecharModal() {
  let containerEmail = document.getElementById(
    "container_enviar_email_recuperacao"
  );
  let containerCodigo = document.getElementById(
    "container_enviar_codigo_recuperacao"
  );

  containerEmail.style.display = "none";
  containerCodigo.style.display = "none";
}

async function enviarCodigo() {
  const email = document.getElementById("emailRec").value;
  const msg = document.getElementById("mensagemRecEmail"); // modal de email

  try {
    const res = await fetch("http://localhost:4500/usuarios/recuperar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const dados = await res.json();

    if (res.ok) {
      msg.innerText = dados.message;

      document.getElementById("container_enviar_email_recuperacao").style.display = "none";
      document.getElementById("container_enviar_codigo_recuperacao").style.display = "flex"; // modal do código
    } else {
      msg.innerText = dados.message || "Erro ao enviar código.";
    }
  } catch (err) {
    console.error(err);
    msg.innerText = "Erro na requisição.";
  }
}

async function atualizarSenha() {
  const email = document.getElementById("emailRec").value;
  const codigo = document.getElementById("codigo").value;
  const novaSenha = document.getElementById("novaSenha").value;
  const msg = document.getElementById("mensagemRecCodigo"); // modal do código

  try {
    const res = await fetch("http://localhost:4500/usuarios/atualizar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, codigo, novaSenha }),
    });

    const dados = await res.json();

    if (res.ok) {
      msg.innerText = dados.message;
      setTimeout(() => {
        document.getElementById("container_enviar_codigo_recuperacao").style.display = "none";
        document.getElementById("container_enviar_email_recuperacao").style.display = "flex"; // volta modal do email
      }, 2000);
    } else {
      msg.innerText = dados.message;
    }
  } catch (err) {
    console.error(err);
    msg.innerText = "Erro na requisição.";
  }
}
