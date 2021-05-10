exports.middlewareGobal = (req, res, next) =>{
    next();
}

exports.checkCsrfErro = (erro, req, res, next) => {
    if(erro){
        return res.render('404');
    }

    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}