//              0    1    2   3   4    5 
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3]);// o array é uma estrutura com índice que inicia com zero
console.log(notas[5]); 
console.log(notas[600]); // undefined, pois não tem indice 600 na estrutura do array e só vai até o indice 5.

notas[4] = 8.7;

console.log(notas);//no indice 4, será modificável para 8.7


//vai verificar se array é true ou false.
let x = 3;
let y = [];

console.log(Array.isArray(y));