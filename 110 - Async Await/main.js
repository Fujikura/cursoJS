function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string'){
            reject(new Error('BAD VALUE'));
            return;
        } 

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1', rand(0,3));
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand(0,3));
        console.log(fase2);
        const fase3 = await esperaAi(1000, rand(0,3));
        console.log(fase3);
    }catch(erro){
        console.log(erro);
    }
}

executa();

// esperaAi('Fase 1', rand(0,3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 2', rand(0,3));
//     })
//     .then(resposta =>{
//         console.log(resposta);
//         return esperaAi('Fase 3', rand(0,3))
//     })
//     .then(resposta =>{
//         console.log(resposta);
//         return resposta;
//     })
//     .then(fase => {
//         console.log('Terminamos na ' + fase);
//     })
//     .catch(erro =>{
//         console.error(erro);
//     });