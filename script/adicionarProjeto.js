// Adicionar Projeto - Script para gerenciamento de imagens

document.addEventListener("DOMContentLoaded", function () {
  const inputImagem = document.getElementById("enviarImg");
  const containerfoto = document.getElementById("botaoAdcImgg");
  const containerinputs = document.getElementById("containerinputs");
  const divLimiteAlta = document.getElementById("LimiteImagem");
  const divLimiteBaixa = document.getElementById("LimiteImagemBaixa");
  let galeryContainer = null;
  let arquivosArmazenados = [];

  function mostrarErroAlta() {
    divLimiteAlta.style.display = "block";
    setTimeout(() => {
      divLimiteAlta.style.display = "none";
    }, 3000);
  }

  function mostrarErroBaixa() {
    divLimiteBaixa.style.display = "block";
    setTimeout(() => {
      divLimiteBaixa.style.display = "none";
    }, 3000);
  }

  inputImagem.addEventListener("change", function () {
    const arquivo = this.files[0];
    if (arquivo) {
      if (arquivosArmazenados.length >= 5) {
        mostrarErroAlta();
        this.value = "";
        return;
      }

      const leitor = new FileReader();
      leitor.onload = function (e) {
        const imgTemp = new Image();
        imgTemp.onload = function () {
          // Verificar resolução mínima (400x400)
          if (imgTemp.width < 400 || imgTemp.height < 400) {
            mostrarErroBaixa();
            inputImagem.value = "";
            return;
          }

          // Verificar resolução máxima HD (1280x720)
          if (imgTemp.width > 1280 || imgTemp.height > 720) {
            mostrarErroAlta();
            inputImagem.value = "";
            return;
          }

          if (!galeryContainer) {
            galeryContainer = document.createElement("div");
            galeryContainer.className = "galeria-imagens";
            containerinputs.classList.add("com-galeria");
            containerfoto.appendChild(galeryContainer);
          }
          arquivosArmazenados.push(arquivo);

          const containerImg = document.createElement("div");
          containerImg.className = "container-imagem";
          containerImg.dataset.index = arquivosArmazenados.length - 1;

          const img = document.createElement("img");
          img.src = e.target.result;

          const btnRemover = document.createElement("button");
          btnRemover.type = "button";
          btnRemover.className = "btn-remover-imagem";
          btnRemover.innerHTML = "✕";
          btnRemover.addEventListener("click", function (e) {
            e.preventDefault();
            const index = containerImg.dataset.index;
            arquivosArmazenados.splice(index, 1);
            containerImg.remove();

            const labelAdcImg = document.querySelector('.labelAdcImg');
            if (arquivosArmazenados.length < 5) {
              labelAdcImg.style.opacity = "1";
              labelAdcImg.style.pointerEvents = "auto";
              labelAdcImg.style.cursor = "pointer";
            }

            if (galeryContainer.children.length === 0) {
              galeryContainer.remove();
              galeryContainer = null;
              containerinputs.classList.remove("com-galeria");
              inputImagem.value = "";
              arquivosArmazenados = [];
            }
          });

          containerImg.appendChild(img);
          containerImg.appendChild(btnRemover);
          galeryContainer.appendChild(containerImg);
          inputImagem.value = "";

          const labelAdcImg = document.querySelector('.labelAdcImg');
          if (arquivosArmazenados.length >= 5) {
            labelAdcImg.style.opacity = "0.5";
            labelAdcImg.style.pointerEvents = "none";
            labelAdcImg.style.cursor = "not-allowed";
          } else {
            labelAdcImg.style.opacity = "1";
            labelAdcImg.style.pointerEvents = "auto";
            labelAdcImg.style.cursor = "pointer";
          }
        };
        imgTemp.src = e.target.result;
      };
      leitor.readAsDataURL(arquivo);
    }
  });

  Object.defineProperty(window, 'arquivosArmazenados', {
    get: function() {
      return arquivosArmazenados;
    },
    set: function(value) {
      arquivosArmazenados = value;
    }
  });
});

// Fim da funcionalidade de gerenciamento de imagens
