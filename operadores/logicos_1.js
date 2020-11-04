// essa variável está dizendo que duas condições são verdadeiras

//let temDinheiro = true;
//let estaEnsolarado = true;

//let resultadoE = "Vai pro shopping?";
//resultadoE += temDinheiro && estaEnsolarado;
//console.log(resultadoE);


//essa variável está negando e a outra afirmando. então a resposta será falso.
//let temDinheiro = false;
//let estaEnsolarado = true;

//let resultadoE = "vai pro shopping?";
//resultadoE += temDinheiro && estaEnsolarado;
//console.log(resultadoE);

let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (AND) - Vai pro shopping?";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = "#2 (OR) - vai pro shopping?";
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

console.log(true ^ false); // ^ é ou exclusivo
console.log (true !== true); //true
console.log (true !== false); //true
console.log(false !== true); //true
console.log(false !== false); // false

console.log('Não verdadeiro:' + !true); // false
console.log('Não falso:' + !false); // true

