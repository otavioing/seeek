// Script para a janela modal
var modal = document.getElementById("modalPort");
var imgs = document.getElementsByClassName("portImg");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        var style = window.getComputedStyle(this);
        var imgSrc = style.backgroundImage.slice(5, -2);
        modalImage.src = imgSrc;
        modal.style.display = "block";
        body.style.overflow = "hidden";
    }
}

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}