const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

//calcular a média do aluno e mostrar o status aprovado, reprovado, recuperação
//aprovado >=7 ; recuperação >= 4  ; reprovado < 4

function minimo(n1, n2) {
    return n1  <= n2 ? n1: n2;
}
function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1){
        return (n2 + n3) / 2

    }else if(menorNota === n2) {
        return (n1 + n3) / 2;

    }else {
        return (n1 + n2) / 2;
    }
}


function mediaParaStatus(media) {
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


function media2(notas) {
    if( Array.isArray(notas) ) {

        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];            
        }
        return soma / notas.length
    }else{
        console.log("Error")
    }
    
}
console.log(media2([7, 7, 7, 7, 7]))
const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}`);

    
