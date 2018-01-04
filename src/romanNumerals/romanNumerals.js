const numerals = [
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX'},
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];

const romanNumerals = integer => {
  let romanNumeral = '';
  numerals.forEach(item => {
    for (; integer >= item.value; integer -= item.value) {
      romanNumeral += item.numeral;
    }
  });
  return romanNumeral;
};

module.exports = {
  romanNumerals,
};
