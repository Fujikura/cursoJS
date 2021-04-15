// Array são valores por referencias;

//const nomes = ['Eduardo', 'Maria', 'Joana']; //array literal

//usando construtor
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';
delete nomes[2]; //delete usado para deletar valor da posição, mas mantém os indices

// referencia do array nomes para o novo
//qualquer alteração em qualquer array irá alterar o outro
const novo = nomes;
//remove um elemento do array novo refletindo no array nomes
//por referenncia
novo.pop();
console.log(nomes);
//faz uma copia do array nomes para o novo2
const novo2 = [...nomes];
console.log(novo2);

//pegar o tamanho do array
console.log('Tamanho array nomes: ', nomes.length);

//pop remove ultimo indice do array e retorna o valor removido
const removido = nomes.pop();
console.log(nomes, removido);

//shift remove primeiro indice e retorna o valor removido
const removido2 = nomes.shift();
console.log(nomes, removido2);

//adiciona elemento no fim do array
nomes.push('João');
nomes.push('José');
console.log(nomes);

//unshift adiciona valor no item zero organizando os indices para 0, 1, 2, 3......
nomes.unshift('Vinicius');
nomes.unshift('Patricia');
console.log(nomes);

//pega os valores entre o indice 1 até o indice 3
//com valor negativo ex: -1 remove o ultimo elemento;
const novo3 = nomes.slice(1, 3);
console.log(novo3);

//separar nome em array
const nomecompleto = 'Luiz Otavio Miranda';
const nomeseparado = nomecompleto.split(' ');
console.log(nomeseparado);

//join uni os elementos do array em string pelo separador
const nomeseparado2 = [ 'Luiz', 'Otavio', 'Miranda' ];
const nomecompleto2 = nomeseparado2.join(' ');
console.log(nomecompleto2);