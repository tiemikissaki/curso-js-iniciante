console.log(!6 > 4); // false
console.log(!!true); //dupla negação true
console.log(!!false);// dupla negação false

//console.log(!!'Texto!'); dupla negação o resultado é true

console.log(!!"Texto!"); // true
console.log(!! " "); // true quando a string está vazia. e quando não tem texto  "" é considerado false.

//todos os numeros são convertidos para true que é diferente de zero. Se for exigido pela conversão de true or false na negação.
console.log(!!1); // true
console.log(!!0); // o zero avalia para false
console.log(!!-1); // true
console.log(!! -0.00001); // true
