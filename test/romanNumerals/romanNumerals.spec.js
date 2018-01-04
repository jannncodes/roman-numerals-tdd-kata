const expect = require('chai').expect;
const romanNumerals = require('../../src/romanNumerals/romanNumerals').romanNumerals;

describe('romanNumerals', () => {
  it('converts 1 to the Roman numeral I', () => {
    expect(romanNumerals(1)).to.eq('I');
  });

  it('converts 2 to the Roman numeral II', () => {
    expect(romanNumerals(2)).to.eq('II');
  });

  it('converts 3 to the Roman numeral III', () => {
    expect(romanNumerals(3)).to.eq('III');
  });

  it('converts 4 to the Roman numeral IV', () => {
    expect(romanNumerals(4)).to.eq('IV');
  });

  it('converts 5 to the Roman numeral V', () => {
    expect(romanNumerals(5)).to.eq('V');
  });

  it('converts 6 to the Roman numeral VI', () => {
    expect(romanNumerals(6)).to.eq('VI');
  });

  it('converts 9 to the Roman numeral IX', () => {
    expect(romanNumerals(9)).to.eq('IX');
  });

  it('converts 10 to the Roman numeral X', () => {
    expect(romanNumerals(10)).to.eq('X');
  });
});
