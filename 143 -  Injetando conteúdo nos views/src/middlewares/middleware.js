exports.middlewareGobal = (req, res, next) =>{
    next();
}

exports.meuSegundoMiddleware = (req, res, next) => {
    console.log('Segundo middleware');
    next();
}