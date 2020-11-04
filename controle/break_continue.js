//break
for(let i = 1; i <= 5; i++) {
    if( i === 3) {
        console.log(i + " Ferias");
        break;
    }
    console.log(i + " Dia normal");
}
console.log("/**********************************************/")


const diasSemana = function(dia){
    switch (dia) {        
        case 1:
            console.log('Segunda')
            break;
        case 2:
            console.log('Terça')
            break;
        case 3:
            console.log('Quarta')
            break;
        case 4:
            console.log('Quinta')
            break;
        case 5:
            console.log('Sexta')
            break;
        case 6:
            console.log('Sabado')
            break;
        case 7:
            console.log('Domingo')
            break;
    
        default:
            console.log('Dia invalido')
            break;
    }
 
}

//continue
for(let i = 1; i < 8; i++) {
    if(i === 6 || i === 7) {
        console.log('Fim de semana:');
        diasSemana(i)
        continue;
    }
    diasSemana(i)
}

diasSemana(6)