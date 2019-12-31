function isLeapYear(d) {
  let year = new Date(d).getFullYear();
  if (isNaN(year)) {
    return 'Invalid Date';
  }
  return new Date(year, 1, 29).getDate() === 29
    ? `${year} is a leap year`
    : `${year} is not a leap year`;
}

isLeapYear('2200-01-15 13:00:00');
