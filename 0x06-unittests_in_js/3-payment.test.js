const { spy } = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = spy(Utils, 'calculateNumber');
  });
  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should return the correct total amount', () => {
    const result = sendPaymentRequestToApi(100, 20);
    expect(result).to.equal(120);
  });

  // Test the function call to Utils.calculateNumber using spies

  it('should use Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
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
    sendPaymentRequestToApi(100, 20, 'INVALID');
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.false;
  });
});
