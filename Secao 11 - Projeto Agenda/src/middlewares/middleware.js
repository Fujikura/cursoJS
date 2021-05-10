exports.middlewareGobal = (req, res, next) =>{
    next();
}

exports.meuSegundoMiddleware = (req, res, next) => {
    console.log('Segundo middleware');
    next();
}

exports.checkCsrfErro = (erro, req, res, next) => {
    if(erro && 'EBADCSRFTOKEN' === erro.code){
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}