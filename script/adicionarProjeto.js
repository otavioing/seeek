// Adicionar Projeto - Script para gerenciamento de imagens

document.addEventListener("DOMContentLoaded", function () {
      const inputImagem = document.getElementById("enviarImg");
      const containerfoto = document.getElementById("botaoAdcImgg");
      const containerinputs = document.getElementById("containerinputs");
      const divLimite = document.getElementById("LimiteImagem");
      let galeryContainer = null;
      let arquivosArmazenados = [];

      function mostrarErro() {
        divLimite.style.display = "block";
        setTimeout(() => {
          divLimite.style.display = "none";
        }, 3000); 
      }

      inputImagem.addEventListener("change", function () {
        const arquivo = this.files[0];
        if (arquivo) {
        if (arquivosArmazenados.length >= 5) {
            mostrarErro();
            this.value = "";
            return;
          }
      const leitor = new FileReader();
      leitor.onload = function (e) {
      const imgTemp = new Image();
      imgTemp.onload = function () {

        // Mudar os valores de 1280 e 720 para os limites desejados
        
        if (imgTemp.width > 1280 || imgTemp.height > 720) {
          mostrarErro();
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

      // Expor o array globalmente
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