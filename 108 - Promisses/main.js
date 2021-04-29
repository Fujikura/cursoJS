function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(new Error('BAD VALUE'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com BD', rand(1,3))
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(error => {
        console.error(error);
    });

    console.log('Isso será exibido antes de qualquer um Promisse');