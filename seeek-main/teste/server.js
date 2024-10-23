const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/traduzir', async (req, res) => {
    const { texto, linguaAlvo } = req.body;

    const apiKey = 'b560b55e-dff8-4de6-8d13-7b18152d9097';
    const url = 'https://api-free.deepl.com/v2/translate';

    const params = new URLSearchParams({
        auth_key: apiKey,
        text: texto,
        target_lang: linguaAlvo
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params
        });

        const data = await response.json();
        res.json(data.translations[0].text);
    } catch (error) {
        console.error('Erro ao traduzir:', error);
        res.status(500).json({ message: 'Erro ao traduzir' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
