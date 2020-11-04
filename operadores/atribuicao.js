let x = 10;
x = x + 6; // x será 10 + 6 = 16
x = x - 1; // x será 16 - 1 = 15 . então o x será substituido pelo anterior

let y = 20;
y += 10; // y = y + 10; colocando += é uma atribuição aditiva da variável
y -= 2; //  y = y - 2; atribuição negativa
y *= 2; // y = y * 2; atribuição multiplicativa
y /= 4; // y = y / 4; atribuição divisiva
y %= 3; // y = y % 3; modulo 
// toda numero dividido por 2 será igual zero  2% == 0
console.log( 2%2 == 0)


console.log(x);
console.log(y);

// string 
let w = 'texto';
w += ', mais texto'; // está adicionando 'texto, mais texto'
w += '!!!'; // adicionando 'texto, mais texto !!!'

console.log(w);