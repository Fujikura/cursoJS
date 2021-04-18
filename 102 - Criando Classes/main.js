
// classe criada utilizando class
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
}

//classe utilizando Função Construtora e prototype
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Márcio', 'Fujikura');
console.log(p1);

const p2 = new Pessoa2('Vinicius', 'Fujikura');
console.log(p2);