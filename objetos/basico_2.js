let preco = 10;
const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto); //this referencia a si mesmo o objeto dentro do atributo produto.
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto()); 