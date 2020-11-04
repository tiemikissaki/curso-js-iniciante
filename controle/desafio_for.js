//# 
//##
//###
//####
//#####
//######

let linha = '';
//utilizar o laço com número
for (let i = 1; i <= 6; i++) {
    linha += '#'
    console.log(linha);       
}

linha = '';
//não utilizar o laço com número 
for(; linha != '######';) {
    linha += '#'
    console.log(linha);     
}

//ou pode ser assim:
for(let s = '#'; S !='######'; s +='#') {
    console.log(s);
}



//linha = '';
// array -> foreach 

//let array = [ '#', '#', '#', '#', '#', '#' ];

//array.forEach((value, index)=>{
    //linha += value
    //console.log(linha);
//})

//let element = ''
//for (let i = 0; i < array.length; i++) {
    //element += array[i];
   // console.log(element)
//}