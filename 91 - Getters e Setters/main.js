function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this,'estoque', {
        enumerable: true, //mostra a chave
        configurable: false, //define se pode apagar, configurar a chave

        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Valor inválido');
            }
            estoque = valor;
        }
    });
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },

        set nome(valor){
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 14.50, 1000);
// //p1.estoque = 50000;
// console.log(p1.estoque);

const p2 = criaProduto('Caneca');
p2.nome = "Calça Masculina"
console.log(p2.nome);