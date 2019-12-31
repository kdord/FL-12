function isLeapYear(d) {
  console.log(Object.prototype.toString.call(d) === '[object Date]');
  let year = new Date(d).getFullYear();
  return new Date(year, 1, 29).getDate() === 29;
}
