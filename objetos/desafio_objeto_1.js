//data
//Atributos: dia, mes e ano
//Método: exibir -> "dia/mes/ano"

const data = {
    dia: 28,
    mes: 02,
    ano: 2021, 
     exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(data.exibir());

//resposta do professor:

const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }

};

nascimento.dia = 11;

console.log(nascimento.exibir());
console.log(nascimento.mes);

