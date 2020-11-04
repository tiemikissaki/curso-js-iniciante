let a;
let b = 7;
let c = null; // ou pode ser nill
let d = 0;

console.log(a, b, c); // undefined 7 null
console.log(a + b); // NaN que é o not a number
console.log(b + c); // 7 + null que será zero, então será 7 + 0 = 7
console.log(b + c + 1);
console.log(b + d + 1);

