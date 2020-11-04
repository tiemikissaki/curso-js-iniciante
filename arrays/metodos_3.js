const numeros = [10, 20, 30];
//vai percorrer todos os numeros dentro da array
//numeros.forEach
    
function praCadaElemento(elemento, indice, array) {
console.log(elemento, indice, array);
} 

numeros.forEach(praCadaElemento);

 numeros.forEach(function(el) {
     console.log(el);
 });

 numeros.forEach(function(_, i) { // quer mostrar somente o indice
    console.log(i);
});


//for(let n of numeros) {
    //console.log(n);
//}

//for (let i = 0  < numeros.lengt; i++) {
 // console.log(numeros[i]);   
//}