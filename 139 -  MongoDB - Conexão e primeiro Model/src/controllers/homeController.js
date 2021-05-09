const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Titulo de teste',
    descricao: 'Uma descrição de teste'
})
.then(dados => console.log(dados))
.catch(error => console.error(error));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}