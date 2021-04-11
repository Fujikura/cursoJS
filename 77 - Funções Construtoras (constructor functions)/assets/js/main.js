//Função construtora -> constroi objetos
//Construtora -> Pessoa(new);

function Pessoa(nome, sobrenome){

    //atributo privado
    const id = 1030;

    //atributos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    //metodo publico
    this.metodo = () => {
        console.log(id + ': ' + this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Márcio', 'Fujikura');
const p2 = new Pessoa('João', 'Silva')

p1.metodo();