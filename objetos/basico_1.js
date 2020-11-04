const numeros = [10, 20, 30];
const produto = {
    nome: 'Caneta', 
    preco: 9.99,
    desconto: 0.2,
};

console.log(numeros[0]);//verifica o indice dentro da array
console.log(produto['nome']);//verifica o objeto dentro de uma chave na array.
console.log(produto['preco']);
console.log(produto['desconto']);

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);

console.log(typeof produto);// verifica que é um objeto.