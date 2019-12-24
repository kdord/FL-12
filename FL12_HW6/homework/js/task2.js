let a = prompt('Please, enter length of the first side');
let b = prompt('Please, enter length of the second side');
let c = prompt('Please, enter length of the third side');

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  if (a + b > c || b + c > a || c + a > b) {
    if (a === b && b === c) {
      console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
      console.log('Isosceles triangle');
    } else {
      console.log('Scalene triangle');
    }
  } else {
    console.log('Triangle doesn’t exist');
  }
} else {
  console.log('input values should be ONLY numbers');
}
