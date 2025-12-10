document.addEventListener("DOMContentLoaded", async () => {
  const userId = JSON.parse(localStorage.getItem("usuarioLogado")).id;

  // pega todos os forms de notificação
  const forms = document.querySelectorAll("form[data-pref]");

  // busca TODAS as preferências do usuário só 1 vez
  const resposta = await fetch(`http://localhost:4500/usuarios/preferencias-privacidade/${userId}`);
  const prefs = await resposta.json();

  forms.forEach(form => {
    const prefName = form.dataset.pref;
    const pref = prefs.find(p => p.nome_privacidade === prefName);

    if (pref) {
      const radio = form.querySelector(`input[name="visibilidade"][value="${pref.preferencia}"]`);
      if (radio) radio.checked = true;
    }

    // evento para atualizar no banco quando mudar
    form.addEventListener("change", async () => {
      const novaPreferencia = form.visibilidade.value;

      await fetch(`http://localhost:4500/usuarios/preferencias-privacidade/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_privacidade: prefName,
          preferencia: Number(novaPreferencia)
        })
      });

    });
  });
});
