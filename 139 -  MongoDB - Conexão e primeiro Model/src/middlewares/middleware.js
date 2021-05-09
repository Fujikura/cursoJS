exports.meuPrimeiroMiddleware = (req, res, next) =>{

    if(req.body.cliente){
        console.log()
        console.log(`Você postou o cliente ${req.body.cliente}`);
        console.log()
    }

    next();
}

exports.meuSegundoMiddleware = (req, res, next) => {
    console.log('Segundo middleware');
    next();
}