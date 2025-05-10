document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const barra = document.getElementById('barra-acessibilidade');
  
    if (usuario && barra && typeof usuario.acessibilidade_ativa !== 'undefined') {
      barra.style.display = usuario.acessibilidade_ativa ? 'block' : 'none';
    }
  });
  