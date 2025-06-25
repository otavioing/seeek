document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalPort");
  const modalImage = document.getElementById("modalImage");
  const span = document.querySelector(".close");
  const body = document.body;

  // Abrir o modal ao clicar na divPortifolio
  document.getElementById("gride").addEventListener("click", function (event) {
    const divPort = event.target.closest(".divPortifolio");
    if (!divPort) return;

    const bg = divPort.style.backgroundImage;
    const url = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    modalImage.src = url;

    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  // Fechar ao clicar no botão X
  span.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflowY = "auto";
  });

  // Fechar ao clicar fora do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      body.style.overflowY = "auto";
    }
  });
});