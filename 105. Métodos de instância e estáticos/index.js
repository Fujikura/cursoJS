class ControleRemoto{

    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //método de instancia
    aumentaVolume(){
        this.volume += 2;
    }

    //método de instancia
    diminuiVolume(){
        this.volume -= 2;
    }

    //método estatico
    static trocaPilha(){
        console.log('Ok, vou trocar');
    }
}

c1 = new ControleRemoto('Lg');
c1.aumentaVolume();
c1.aumentaVolume();
c1.aumentaVolume();
console.log(c1.volume);

ControleRemoto.trocaPilha();