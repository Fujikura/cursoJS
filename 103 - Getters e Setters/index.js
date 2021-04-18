//criar propriedade privada
const _velocidade = Symbol('velocidade');


class Carro{

    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const fusca = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    fusca.acelerar();
}
fusca.velocidade = 80;
//console.log(fusca.velocidade);


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Marcio', 'Fujikura');
p1.nomeCompleto = "Márcio Fujikura";
console.log(p1.nome);
console.log(p1.sobrenome);