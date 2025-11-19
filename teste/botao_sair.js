document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
});