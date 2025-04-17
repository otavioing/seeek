const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail", // ou outro serviço de email
    auth: {
        user: "seek.arts.ink@gmail.com", 
        pass: "jbvc jwgl dbfv ubxu"
    }
});

const enviarEmailRecuperacao = async (destinatario, codigo) => {
    const info = await transporter.sendMail({
        from: '"Seek App" <seek.arts.ink@gmail.com>',
        to: destinatario,
        subject: "Recuperação de Senha - Seek",
        text: `Seu código de recuperação é: ${codigo}`,
        html: `<p>Seu código de recuperação é: <b>${codigo}</b></p>`
    });

    console.log("Email enviado:", info.messageId);
};

module.exports = { enviarEmailRecuperacao };
