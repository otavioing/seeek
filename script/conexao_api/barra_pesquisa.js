
document.getElementById('inputpesquisar').addEventListener('input', async function () {
    const input = document.getElementById('inputpesquisar').value;
    const listaResultados = document.getElementById('listaResultados');


    if (input.length === 0) {
        listaResultados.innerHTML = '';
        listaResultados.style.display = 'none';
        return;
    }


    const resposta = await fetch(`http://localhost:4500/usuarios/buscar-usuario-por-nome/${input}`);
    const resultado = await resposta.json();
    if (resultado.length === 0) {
        listaResultados.innerHTML = '<li>Nenhum resultado encontrado</li>';
        return;
    }else{
        listaResultados.style.display = 'block';
    
        listaResultados.innerHTML = '';
    
        resultado.forEach((usuario) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="perfil-usuario.html?id=${usuario.id}">${usuario.nome}</a>`;
            listaResultados.appendChild(li);
        });
    }



});