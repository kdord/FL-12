let a = prompt('Please, enter number a');
let b = prompt('Please, enter number b');
let c = prompt('Please, enter number c');
const TWO = 2;
const FOUR = 4;
let d = b * b - FOUR * a * c;
if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {

  if (d < 0) {
    console.log('no results');
  } else if (d === 0) {
    let x = Math.floor(-b / (TWO * a));
    console.log('x = ' + x);
  } else {
    let x1 = Math.floor((-b + Math.sqrt(d)) / (TWO * a));
    let x2 = Math.floor((-b - Math.sqrt(d)) / (TWO * a));
    console.log('x1 = ' + x1 + ' x2 = ' + x2);
  }
} else {
  console.log('Invalid input data');
}
