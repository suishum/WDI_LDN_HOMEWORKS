/* global describe, it */
/* eslint-disable no-undef */

const chai  = window.chai;
const expect = chai.expect;

describe('removeBlank', () => {
  it('should remove all empty values EXCEPT 0 from an array', () => {
    expect(removeBlank([0, NaN, undefined, false, '', null, 'Kevin'])).to.deep.equal([0, 'Kevin']);
  });
  it('should be able to handle complex data types', () => {
    expect(removeBlank([0,[],{}])).to.deep.equal([0,[],{}]);
  });
});

describe('beginsWith', () => {
  it('should return array only with strings beginning with given value', () => {
    expect(beginsWith('C', ['Cow', 'Bell', 'Curry'])).to.deep.equal(['Cow', 'Curry']);
  });
  it('should return array only with strings beginning with given value - case insensitive', () => {
    expect(beginsWith('S', ['Bell', 'sandwich', 'Salt'])).to.deep.equal(['sandwich', 'Salt']);
  });
});

describe('randomElement', () => {
  it('should return a random element from an array', () => {
    expect(randomElement(['red', 'green', 'blue'])).to.be.oneOf(['red', 'green', 'blue']);
  });
});

describe('factorialise', () => {
  it('should return the factorial of a given number', () => {
    expect(factorialise(5)).to.equal(120);
    expect(factorialise(10)).to.equal(3628800);
    expect(factorialise(20)).to.equal(2432902008176640000);
  });
});

describe('secondLowestSecondHighest', () => {
  it('should return the second highest and second lowest numbers of an array', () => {
    expect(secondLowestSecondHighest([99,2000,-93,40,-761115,11])).to.deep.equal([-93,99]);
  });
});

describe('coins', () => {
  it('should return the coins needed to make up the price supplied', () => {
    expect(coins(1.50)).to.deep.equal([100, 50]);
  });
  it('should use the smallest number of coins possible', () => {
    expect(coins(1.99)).to.deep.equal([100, 50, 20, 20, 5, 2, 2]);
    expect(coins(2.88)).to.deep.equal([100, 100, 50, 20, 10, 5, 2, 1]);
  });
});

describe('sortUpper', () => {
  it('should return a sorted array of strings with lower case letters removed', () => {
    expect(sortUpper(['aThnR', 'BrMTQ', 'oopq'])).to.deep.equal(['', 'BMTQ', 'TR']);
  });
});
