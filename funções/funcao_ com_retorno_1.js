function sempreRetornaUm() {
    return 1;

}

let valor = sempreRetornaUm() + 999;
console.log(valor);



function textoOuNumero(retornaTexto){
    if(retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}
// ou pode ser assim, sem o else:
function textoOuNumero(retornaTexto){
    if(retornaTexto) {
        return "Sou um texto!";
    } 
        return 123;
    }



 // ou pode ser usado de forma mais simples e de uma única linha:

 function textoOuNumero(retornaTexto) {
    return retornaTexto ? "Sou um texto!" : 123;
 }

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));