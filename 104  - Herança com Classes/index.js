class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, wiffi){
        super(nome);
        this.wiffi = wiffi;
    }

    ligar(){
        console.log('Você alterou o método ligar');
    }
}

const t1 = new Tablet('Tablet', true);
console.log(t1.ligado);