let a = 7
let b = 94
let c = 0

// depois da troca .... a = 94 e b = 7
console.log ("A:" +a)
console.log ("B:" +b)

c = a
a = b
b = c

console.log ("A:" +a)
console.log ("B:" +b)

// ou array
let arr = [a, b] = [b, a]
console.log(arr)

// arr é variável de guardar informações