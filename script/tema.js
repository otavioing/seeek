//-------------------------------- Modo Escuro --------------------------------/

function ModoEscuro() {
  let corpo = document.getElementById("todo");
  corpo.classList.add("modoEscuro");
  localStorage.setItem("modo", "escuro");
}

function ModoClaro() {
  let corpo = document.getElementById("todo");
  corpo.classList.remove("modoEscuro");
  localStorage.setItem("modo", "claro");
}
// Primeiro tenta buscar o usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// Se existir, então salva o tema
if (usuarioLogado) {
  localStorage.setItem("modo", usuarioLogado.tema);
}

// Depois define as funções normalmente
function MudarModos() {
  let corpo = document.getElementById("todo");

  if (corpo.classList.contains("modoEscuro")) {
    ModoClaro();
    atualizarTemaNoBanco("claro");

    // atualiza o select
    document.getElementById("temaSelectConfig").value = "claro";
  } else {
    ModoEscuro();
    atualizarTemaNoBanco("escuro");

    // atualiza o select
    document.getElementById("temaSelectConfig").value = "escuro";
  }
}

function TrocaTema(valor) {
  if (valor === "escuro") {
    ModoEscuro();
    atualizarTemaNoBanco("escuro");
  } else {
    ModoClaro();
    atualizarTemaNoBanco("claro");
  }

  // Sincroniza checkbox se existir
  const checkbox = document.getElementById("checkbox");
  if (checkbox) {
    checkbox.checked = valor !== "escuro";
  }
}



function atualizarTemaNoBanco(novoTema) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    console.error("Usuário não está logado.");
    return;
  }

  fetch("http://localhost:4500/usuarios/atualizar-tema", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: usuario.id,
      tema: novoTema
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Tema atualizado:", data);

    // Atualizar localStorage também
    usuario.tema = novoTema;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    localStorage.setItem("modo", novoTema);

  })
  .catch(err => {
    console.error("Erro ao atualizar tema:", err);
  });
}


function aplicarModo() {
  const modo = localStorage.getItem("modo");

  if (modo === "escuro") {
    ModoEscuro();
  } else {
    ModoClaro();
  }

  // select mostra o modo atual
  // document.getElementById("temaSelectConfig").value = modo;

  // checkbox também sincroniza
  const checkbox = document.getElementById("checkbox");
  if (checkbox) {
    checkbox.checked = modo !== "escuro";
  }
}


// aplica o modo quando a página carregar
aplicarModo();

