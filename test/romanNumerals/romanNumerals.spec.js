const expect = require('chai').expect;
const romanNumerals = require('../../src/romanNumerals/romanNumerals').romanNumerals;

describe('romanNumerals', () => {
  it('converts numbers to Roman numberals', () => {
    expect(romanNumerals(1)).to.eq('I');
  });
});
