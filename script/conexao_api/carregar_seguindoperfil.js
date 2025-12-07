async function carregarSeguindo() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const listaResultados = document.getElementById('listaseguindo');


    const resposta = await fetch(`http://localhost:4500/usuarios/lista-seguindo/${id}`);
    const resultado = await resposta.json();
    if (resultado.length === 0) {
        listaResultados.innerHTML = '<li><a>Nenhum resultado encontrado</a></li>';
        return;
    }else{
        listaResultados.style.display = 'block';
        listaResultados.innerHTML = '';
        resultado.forEach((usuario) => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${usuario.foto}" alt="foto de perfil do usuario" class="imagemusuariolista"/> <a href="perfil.html?id=${usuario.id}"  class="nomeusuariolista">${usuario.nome}</a>`;
            listaResultados.appendChild(li);
        });
    }

};

carregarSeguindo();