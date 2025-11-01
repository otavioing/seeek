document.addEventListener("DOMContentLoaded", function () {

function isTokenValido(token) {
  try {
    const partes = token.split(".");
    if (partes.length !== 3) return false; // token inválido

    const payload = JSON.parse(atob(partes[1]));
    const agora = Math.floor(Date.now() / 1000); // tempo atual em segundos

    return payload.exp && payload.exp > agora;
  } catch (e) {
    console.error("Erro ao validar token:", e);
    return false;
  }
}

function pegarTokenJWT() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (!usuarioLogado) return null;

  try {
    const dados = JSON.parse(usuarioLogado);
    const token = dados?.token;

    if (!token || !isTokenValido(token)) {
      localStorage.removeItem("usuarioLogado");
      return null;
    }

    return token;
  } catch (e) {
    console.error("Erro ao processar usuarioLogado:", e);
    localStorage.removeItem("usuarioLogado");
    return null;
  }
}

function verificarLogin() {
  const token = pegarTokenJWT();
  if (!token) {
    console.error("Token inválido ou expirado");
  }
}

verificarLogin();

}); 