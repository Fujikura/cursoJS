function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor da chave
        writable: false, //define se pode ou não alterar valor
        configurable: false //define se pode apagar, configurar a chave
    });

    // Object.defineProperties(this,{
    //     nome:{
    //         enumerable: true, //mostra a chave
    //         value: nome, //valor da chave
    //         writable: true, //define se pode ou não alterar valor
    //         configurable: true //define se pode apagar, configurar a chave
    //     },
    //     preco:{
    //         enumerable: true, //mostra a chave
    //         value: preco, //valor da chave
    //         writable: true, //define se pode ou não alterar valor
    //         configurable: true //define se pode apagar, configurar a chave
    //     }
    // });
}

const p1 = new Produto('Camiseta', 14.50, 4);
console.log(p1);

//console.log(Object.keys(p1)); mostra as chaves do objeto;

//itera sobre as chaves e exibe as chaves
// for(let chave in p1){
//     console.log(chave);
// }