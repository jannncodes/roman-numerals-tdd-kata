console.log('hereQ')
const numerals = [
  { value: 1, numeral: 'I' },
];

const romanNumerals = integer => {
  let romanNumeral = '';
  numerals.forEach(item => {
    for (; integer >= item.value; integer -= item.value) {
      romanNumeral += item.numeral;
    }
  });
  console.log('here',romanNumeral)
  return romanNumeral;
};

module.exports = {
  romanNumerals,
};
