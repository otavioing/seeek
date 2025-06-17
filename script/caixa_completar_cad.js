// escolher tipo de conta
const formpadrao = document.getElementById("escolheruserpadrao");
const formempresa = document.getElementById("escolheruserempresa");

formpadrao.addEventListener("submit", async (e) => {

  const tipo = "padrao"

  try{
        const finalResponse = await fetch(
      `http://localhost:4500/usuarios/atualizar-tipo/${usuario.id}`,
      {
        method: "PUT",
         headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({tipo})}
    );
  }catch{
    alert("Erro ao escolher tipo de cadastro: " + err.message);
  }

});

formempresa.addEventListener("submit", async (e) => {

  const tipo = "empresa"

  try{
        const finalResponse = await fetch(
      `http://localhost:4500/usuarios/atualizar-tipo/${usuario.id}`,
      {
        method: "PUT",
         headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({tipo})}
    );
  }catch{
    alert("Erro ao escolher tipo de cadastro: " + err.message);
  }

});

//fim do escolher tipo de conta

//completar cadastro empresa

const cadastroFormempresa = document.getElementById("completarcadastroempresa");
cadastroFormempresa.addEventListener("submit", async (e) => {

  const razaosocial = document.getElementById("razaosocial").value;
  const nomefantasia = document.getElementById("nomefantasia").value;
  const telefonedaempresa = document.getElementById("telefonedaempresa").value;
  const categoriadaempresa = document.getElementById("categoriadaempresa").value;
  const nomerodefuncionarios = document.getElementById("nomerodefuncionarios").value;
  const cnpjdaempresa = document.getElementById("cnpjdaempresa").value;
  const descricaodaempresa = document.getElementById("descricaodaempresa").value;
  const endereco_completo = "teste"; // Atualize conforme necessário

  const dadosEmpresa = {
    razao_social: razaosocial,
    nome_fantasia: nomefantasia,
    cnpj: cnpjdaempresa,
    telefone_comercial: telefonedaempresa,
    categoria_negocio: categoriadaempresa,
    numero_funcionarios: nomerodefuncionarios,
    endereco_completo: endereco_completo,
    descricao: descricaodaempresa
  };

  try {
    const finalResponse = await fetch(
      `http://localhost:4500/empresa/${usuario.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosEmpresa)
      }
    );

    const finalData = await finalResponse.json();

    if (finalResponse.ok) {
      const completarCadastroResponse = await fetch(
        `http://localhost:4500/usuarios/completarcoluna-cadastro/${usuario.id}`,
        {
          method: "PUT"
        }
      );

      if (completarCadastroResponse.ok) {
        alert("Cadastro finalizado com sucesso!");
      } else {
        const erro = await completarCadastroResponse.json();
      }
    } else {
    }
  } catch (err) {
  }
});



//fim do completar cadastro empresa

//completar cadastro usuario padrao

// Remova a variável 'caixa', ela não é usada e 'cadastroForm' já faz o que você precisa.
const cadastroForm = document.getElementById("formulariocaixaupdate");

cadastroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 1. Crie um objeto JavaScript simples com os dados
  const dadosDoFormulario = {
    nome_de_usuario: document.getElementById("updatenomeuser").value,
    profissao: document.getElementById("updateprofissao").value,
    descricao: document.getElementById("updatedescricao").value,
    usuario_id: usuario.id
  };

  try {
    const finalResponse = await fetch(
      `http://localhost:4500/usuarios/completar-cadastro-padrao/`,
      {
        method: "PUT",
        // 2. Adicione os cabeçalhos (headers) corretos para JSON
        headers: {
          'Content-Type': 'application/json'
        },
        // 3. Envie o objeto convertido para string JSON
        body: JSON.stringify(dadosDoFormulario)
      }
    );

    const finalData = await finalResponse.json();

    if (finalResponse.ok) {
      alert("Cadastro finalizado com sucesso!");
      cadastroForm.reset();
    } else {
      alert("Erro ao finalizar cadastro: " + finalData.message);
    }
  } catch (err) {
    // O erro que você está vendo provavelmente vem daqui,
    // com a mensagem que o servidor envia.
    alert("Erro ao finalizar cadastro: " + err.message);
  }
});

// Fim do completar cadastro usuario padrao




    document.addEventListener("DOMContentLoaded", async () => {
    try {
        // ATENÇÃO: Garanta que a variável 'usuario' e seu 'id' estejam disponíveis aqui.
        // Por exemplo, ela pode ter sido definida em um script antes deste.
        if (typeof usuario === 'undefined' || !usuario.id) {
            console.error("Variável 'usuario' ou 'usuario.id' não encontrada.");
            return; // Para a execução se não houver ID
        }

        const response = await fetch(`http://localhost:4500/usuarios/verificarcaixatipo/${usuario.id}`);
        const data = await response.json();

        // Pega os elementos da página
        const verificacaoContainer = document.getElementById("user-selection");
        const caixausuariopadrao = document.getElementById("confirmation-box");
        const caixausuarioempresa = document.getElementById("enterprise-confirmation-box");

        // --- LÓGICA CORRIGIDA ---

        // Primeiro, verifica se a API retornou dados válidos
        if (data && data.length > 0) {
            const userData = data[0]; // Fica mais fácil de ler

            // Caso 1: O usuário ainda NÃO escolheu um tipo
            if (userData.tipo === null) {
                verificacaoContainer.style.display = "block";  // Mostra a caixa de seleção
                caixausuariopadrao.style.display = "none";    // Esconde a de perfil padrão
                caixausuarioempresa.style.display = "none"; // Esconde a de perfil empresa

            // Caso 2: O usuário é do tipo 'padrao'
            } else if (userData.tipo === 'padrao') {
                verificacaoContainer.style.display = "none";    // Esconde a caixa de seleção
                caixausuariopadrao.style.display = "block";   // Mostra a de perfil padrão
                caixausuarioempresa.style.display = "none";   // Esconde a de perfil empresa

            // Caso 3: O usuário é do tipo 'empresa'
            } else if (userData.tipo === 'empresa') {
                verificacaoContainer.style.display = "none";    // Esconde a caixa de seleção
                caixausuariopadrao.style.display = "none";    // Esconde a de perfil padrão
                caixausuarioempresa.style.display = "block";  // Mostra a de perfil empresa
            }

        } else {
            console.error("Nenhum dado de usuário foi retornado pela API.");
            // Você pode querer mostrar uma mensagem de erro para o usuário aqui
        }

    } catch (err) {
        console.error("Erro ao buscar ou processar dados do usuário:", err);
    }
});

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch(`http://localhost:4500/usuarios/verificarcaixa/${usuario.id}`);
      const data = await response.json();
  
        const verificacaoContainer = document.getElementById("user-selection");
        const caixausuariopadrao = document.getElementById("confirmation-box");
        const caixausuarioempresa = document.getElementById("enterprise-confirmation-box");
  
      // Se o cadastro estiver completo, esconda a caixa de verificação
      if (data[0].cadastro_completo === 1) {
        verificacaoContainer.style.display = "none";  // Esconde a caixa
        caixausuariopadrao.style.display = "none";
        caixausuarioempresa.style.display = "none";
      } else {
      }
    } catch (err) {
      console.error("Erro ao buscar dados do usuário:", err);
    }
  });
  
