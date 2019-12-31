function makeNumber(str) {
  return str
    .split('')
    .filter(symbol => !isNaN(symbol))
    .join('');
}
makeNumber('erer384jjjfd123');
