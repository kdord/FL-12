function pipe(num) {
  let result = num;
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
}

function addOne(x) {
  return x + 1;
}
console.log(pipe(1, addOne, addOne));
