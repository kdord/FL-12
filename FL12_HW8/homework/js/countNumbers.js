function countNumbers(str) {
  return Object.assign(
    {},
    str.split('').filter(symbol => !isNaN(symbol))
  );
}

countNumbers('erer384jj4444666888jfd123');
