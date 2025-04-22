const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // ou outro serviço de email
  auth: {
    user: "seek.arts.ink@gmail.com",
    pass: "jbvc jwgl dbfv ubxu",
  },
});

const enviarEmailRecuperacao = async (destinatario, nome, codigo) => {
  const info = await transporter.sendMail({
    from: '"Seek App" <seek.arts.ink@gmail.com>',
    to: destinatario,
    subject: "Recuperação de Senha - Seek",
    text: `Seu código de recuperação é: ${codigo}`,
    html: `
    <style>
        main{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .conteudo{
            width: 600px;
            background-color: #c3c1c1;
            padding: 1rem;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
         
        }
        .logo img{
            width: 40%;
        }
        .titulodotexto{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
<main>

    <div class="conteudo">
        <div class="logo">
            <img src="https://seeek.netlify.app/img/logo.svg" alt="logo seek">
        </div>

        <div class="texto">
            <div class="titulodotexto">
                <h1>Olá ${nome}</h1>
            </div>
            <p>Você solicitou a recuperação de senha da sua conta, aqui esta seu codigo de recuperação</p>

            <h2><b>${codigo}</b></h2>

            <p>Se você não solicitou a recuperação de senha, desconsidere este e-mail <br> Se você não conseguir redefinir sua senha, entre em contato com o suporte.</p>
            <p>Atenciosamente, <br> Equipe Seek</p>
            

        </div>
    </div>

</main>
    `,
  });

  console.log("Email de recuperacao de conta enviado:", info.messageId);
};

const enviaremailcriacao = async (email, nome, codigo) => {
  const info = await transporter.sendMail({
    from: '"Seek App" <seek.arts.ink@gmail.com>',
    to: email,
    subject: "Confirme sua Conta no Seek",
    text: `Seu código de recuperação é: ${codigo}`,
    html: `
    <style>
        main{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .conteudo{
            width: 600px;
            background-color: #c3c1c1;
            padding: 1rem;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
         
        }
        .logo img{
            width: 40%;
        }
        .titulodotexto{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
<main>

    <div class="conteudo">
        <div class="logo">
            <img src="https://seeek.netlify.app/img/logo.svg" alt="logo seek">
        </div>

        <div class="texto">
            <div class="titulodotexto">
                <h1>Olá ${nome}</h1>
            </div>
            <p>Seja bem-vindo(a) ao Seek! 🎉 <br>
Para finalizar o processo de criação da sua conta, precisamos confirmar seu e-mail.</p>

            <h2><b>Seu código de verificação é: ${codigo}</b></h2>

            <p>Digite esse código no site para ativar sua conta e começar a aproveitar tudo o que o Seek oferece!
 <br> Se você não solicitou a criação desta conta, basta ignorar este e-mail.</p>
            <p>Atenciosamente, <br> Equipe Seek</p>
            

        </div>
    </div>

</main>
    `,
  });

  console.log("Email de criação de conta enviado:", info.messageId);
};

const enviaremailexclusao = async (email, nome, codigo) => {
  const info = await transporter.sendMail({
    from: '"Seek App" <seek.arts.ink@gmail.com>',
    to: email,
    subject: "Confirmação de Exclusão da Sua Conta Seek",
    text: `Seu código de recuperação é: ${codigo}`,
    html: `
    <style>
        main{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .conteudo{
            width: 600px;
            background-color: #c3c1c1;
            padding: 1rem;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
         
        }
        .logo img{
            width: 40%;
        }
        .titulodotexto{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
<main>

    <div class="conteudo">
        <div class="logo">
            <img src="https://seeek.netlify.app/img/logo.svg" alt="logo seek">
        </div>

        <div class="texto">
            <div class="titulodotexto">
                <h1>Olá ${nome}</h1>
            </div>
            <p>Recebemos sua solicitação para excluir sua conta do Seek. <br> Para garantir a segurança dos seus dados, precisamos confirmar essa ação com um código de verificação.</p>

            <h2><b>Seu código de verificação é: ${codigo}</b></h2>

            <p>Se você não solicitou a exclusão da sua conta, altere sua senha imediatamente <br> Se você não conseguir redefinir sua senha, entre em contato com o suporte.</p>
            <p>Atenciosamente, <br> Equipe Seek</p>
            

        </div>
    </div>

</main>
    `,
  });

  console.log("Email de criação de conta enviado:", info.messageId);
};

module.exports = {
  enviarEmailRecuperacao,
  enviaremailcriacao,
  enviaremailexclusao,
};
