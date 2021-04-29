const express  =  require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome" >
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato');
});

app.listen(3000, () => {
    console.log('Iniciando servidor na porta 3000');
    console.log('http://localhost:3000');
});