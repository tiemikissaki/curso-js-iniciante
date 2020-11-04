const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100;
numeros.push(6);//adiciona o objeto numa array


console.log(numeros.join(' - '));//juntar todos os elementos em uma string
console.log(numeros);
console.log(numeros.includes(10));//vai verificar se é true ou false
console.log(numeros.includes(6));
console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));// quando o index dá -1, significa que não encontrou o elemento.


const numeros2 = numeros.concat(7, 8, 9);//gera uma nova array
console.log(numeros2);

