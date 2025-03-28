let num = 266219;
let prod = 1;

for ( let i = 0; i < num.toString().length; i++) {
  prod *= parseInt(num.toString()[i]);
}

console.log(prod);

console.log(prod ** 3);
console.log ();

let prime = '123';
let result = parseInt(prime)
console.log(typeof prime);
console.log(typeof result);