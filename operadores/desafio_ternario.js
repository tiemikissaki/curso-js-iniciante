const a = 8;
const b = 4;
const operacao = "+"; // + - * /

const resultado = operacao == "+" ? a+b : 
            operacao == "-" ? a-b :
            operacao == "*" ? a*b : 
            operacao == "/" ? a/b :'não é uma operação válida, escolha um dos operadores válidos "+, -, *, /"';
    
    

console.log(resultado);