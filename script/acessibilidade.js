document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const barra = document.getElementById('barra-acessibilidade');

  if (usuario && barra && typeof usuario.acessibilidade_ativa !== 'undefined') {
    barra.style.display = usuario.acessibilidade_ativa ? 'block' : 'none';
  }

  // Configuração de fonte
  window.fonteAtual = 100; // 100% = padrão
  const maxFonte = 150;
  const minFonte = 80;

  window.zoommais = function () {
    if (fonteAtual < maxFonte) {
      fonteAtual += 10;
      aplicarZoomFonte();
    }
  };

  window.zoommenos = function () {
    if (fonteAtual > minFonte) {
      fonteAtual -= 10;
      aplicarZoomFonte();
    }
  };

  function aplicarZoomFonte() {
    document.documentElement.style.fontSize = `${fonteAtual}%`;
  }
});