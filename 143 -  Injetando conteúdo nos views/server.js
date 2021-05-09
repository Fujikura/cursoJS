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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
    secret: "adfafdkfdkjfdka wrr refe rerer a3()",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }


});

app.use(sessionOptions);
app.use(flash());

app.use(middlewareGobal);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.on('pronto', () => {    
    app.listen(3000, () => {
        console.log('Iniciando servidor na porta 3000');
        console.log('http://localhost:3000');
    });
});