async function realizarTraducao() {
    const texto = document.getElementById('textoEntrada').value;
    const linguaAlvo = 'EN'; // Por exemplo, 'EN' para inglês

    try {
        const response = await fetch('http://localhost:3000/traduzir', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ texto: texto, linguaAlvo: linguaAlvo })
        });

        const traducao = await response.json();
        document.getElementById('resultadoTraducao').textContent = traducao;
    } catch (error) {
        console.error('Erro ao realizar a tradução:', error);
    }
}

