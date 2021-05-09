require('dotenv').config();

const express  =  require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => {
        console.log('conectei a base de dados');
        app.emit('pronto');
    })
    .catch((error) => {
        console.error(error);
    });

const routes = require('./routes');
const path = require('path');
const {meuPrimeiroMiddleware, meuSegundoMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(meuPrimeiroMiddleware);
app.use(meuSegundoMiddleware);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.on('pronto', () => {    
    app.listen(3000, () => {
        console.log('Iniciando servidor na porta 3000');
        console.log('http://localhost:3000');
    });
});