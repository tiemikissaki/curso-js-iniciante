// funcao: 2 parametros -> console.log(+)
// funcao: 2 parametros -> console.log(-)

//nome da funcao (3, 4) soma
//...(31, 98)

//....(11, 7) subtração
//....(19, 52)

let a = 3;
let b = 4;
let c = 31;
let d = 98;

function somar (a , b)   {

    console.log(`somar:  ${a + b}`)
    
 }

 function somar (c , d)   {

    console.log(`somar: ${c + d}`)
 }


somar (a , b)
somar (c , d)

let a1 = 11
let b1 = 7
let c1 = 19
let d1 = 52

function subtrair(a1, b1) {
    console.log(`${a1 - b1}`)
}

function subtrair(c1, d1) {
    console.log(c1 - d1)
}

subtrair (a1, b1)
subtrair (c1, d1)    

// resposta do professor:

function somar (n1, n2) {
    console.log(n1 + n2);
}
somar (3, 4);
somar (31,98);


function subtrair (k, l) {
    console.log(k - l);
}
subtrair (11, 7);
subtrair (19,52);

function qualEhOSeuNome(nome) {
    return `Meu nome é ${nome}`
}


const meuNome = qualEhOSeuNome('Priscilla')
console.log(meuNome)


function somarEDividi(n1, n2) {
   const soma = n1 + n2;
   const divide = soma / 2;

   return divide
}

const resultado = somarEDividi(10, 2)
console.log(resultado)