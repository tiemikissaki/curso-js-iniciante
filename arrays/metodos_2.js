const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2);//vai excluir o elemento dentro do indice (1 (onde vai iniciar), 1(quantidade de elemento que irá excluir))
console.log(numeros);

//remove o ultimo elemento para o primeiro
console.log(numeros.pop());//está excluindo o ultimo
console.log(numeros.pop());// exclui de novo o ultimo que será o antepenultimo.
console.log(numeros); // e a array vai diminuir e terá somente 4 elemento.

