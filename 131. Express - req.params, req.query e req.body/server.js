const express  =  require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome" >
            Outro campo: <input type="text" name="aqui outro campo" >
            <button>Olá mundo</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/teste/:idUsuarios?/:parametro?',(req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('Iniciando servidor na porta 3000');
    console.log('http://localhost:3000');
});