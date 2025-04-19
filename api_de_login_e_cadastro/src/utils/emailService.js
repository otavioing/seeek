const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail", // ou outro serviço de email
    auth: {
        user: "seek.arts.ink@gmail.com", 
        pass: "jbvc jwgl dbfv ubxu"
    }
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
    `
    });

    console.log("Email de recuperacao de conta enviado:", info.messageId);
};

const enviaremailcriacao = async (email, nome, codigo) => {
    const info = await transporter.sendMail({
        from: '"Seek App" <seek.arts.ink@gmail.com>',
        to: email,
        subject: "Recuperação de Senha - Seek",
        text: `Seu código de recuperação é: ${codigo}`,
        html: `<p>Olá <strong>${nome}</strong>,</p>
            <p>Você solicitou a criação de uma conta no Seek.</p>
            <p>Seu código de verificação é:</p>
            <h2>${codigo}</h2>
            <p>Se você não solicitou isso, pode ignorar este e-mail.</p>
            <p>Abraços,<br/>Equipe Seek</p>`,
    });

    console.log("Email de criação de conta enviado:", info.messageId);
};

module.exports = { enviarEmailRecuperacao, enviaremailcriacao };
