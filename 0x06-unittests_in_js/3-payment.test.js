const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

// describe('sendPaymentRequestToApi', () => {
//   it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
//     const bigBrother = sinon.spy(Utils);

//     sendPaymentRequestToApi(100, 20);
//     expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
//     expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
//     bigBrother.calculateNumber.restore();
//   });
// });

describe('Test sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(() => {
    calculateNumberSpy.restore();
  });

  // Test the function call to Utils.calculateNumber using spies

  it('should use Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(80, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 80, 20)).to.be.true;
  });

  it('should handle decimal numbers correctly', () => {
    sendPaymentRequestToApi(10.7, 4.3);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 10.7, 4.3)).to.be.true;
  });

  it('should handle negative numbers correctly', () => {
    sendPaymentRequestToApi(-10, -20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', -10, -20)).to.be.true;
  });

  // Test the function result
  it('should return the correct total amount', () => {
    const result = sendPaymentRequestToApi(80, 20);
    expect(result).to.equal(100);
  });

  it('should round the result correctly', () => {
    const result = sendPaymentRequestToApi(10.2, 4.8);
    expect(result).to.equal(15);
  });

  it('should handle negative numbers', () => {
    const result = sendPaymentRequestToApi(-50, 20);
    expect(result).to.equal(-30);
  });

  // Test with invalid type

  it('should throw an error if the type is invalid', () => {
    sendPaymentRequestToApi(80, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('INVALID', 80, 20)).to.be.false;
  });
});
