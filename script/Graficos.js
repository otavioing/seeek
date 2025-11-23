let grafico;

async function carregarDados() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const resposta = await fetch(`http://localhost:4500/estatisticas/categoriasusadasporusuario/${usuario.id}`);
  const dados = await resposta.json();
  console.log(dados);

  const labels = dados.map(item => item.nome_categoria);
  const valores = dados.map(item => item.total_usos);

  const ctx = document.getElementById('pizzaCanvas').getContext('2d');

  if (grafico) {
    grafico.data.labels = labels;
    grafico.data.datasets[0].data = valores;
    grafico.update();
  } else {
    grafico = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Categorias',
          data: valores,
          backgroundColor: [
            '#B72AF0', // Ilustração
            '#2B63F0', // Futurista
            '#32A2ED', // Abstrato
            '#722BF0', // Design
            '#9966ff', // Identidade Visual
            '#00008b'  // Foto
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false 
          }
        }
      }
    });
  }


  const ul = document.getElementById('minhaLegenda');
  ul.innerHTML = ''; 

  const legenda = grafico.data.labels;
  const cores = grafico.data.datasets[0].backgroundColor;

  legenda.forEach((nome, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span style="display:inline-block;width:12px;height:12px;background-color:${cores[i]};margin-right:8px;border-radius:3px;"></span>${nome}`;
    ul.appendChild(li);
  });
}

carregarDados();
setInterval(carregarDados, 5000);