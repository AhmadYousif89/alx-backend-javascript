const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });

  // Test the function call to Utils.calculateNumber using spies

  it('should use Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(80, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 80, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 100')).to.be.true;
  });

  it('should handle decimal numbers correctly', () => {
    sendPaymentRequestToApi(10.7, 4.3);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 10.7, 4.3)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 15')).to.be.true;
  });

  it('should handle negative numbers correctly', () => {
    sendPaymentRequestToApi(-10, -20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', -10, -20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: -30')).to.be.true;
  });

  // Test the function result
  it('should return the correct total amount', () => {
    const result = sendPaymentRequestToApi(80, 20);
    expect(result).to.equal(100);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 100')).to.be.true;
  });

  it('should round the result correctly', () => {
    const result = sendPaymentRequestToApi(10.2, 4.8);
    expect(result).to.equal(15);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 15')).to.be.true;
  });

  it('should handle negative numbers', () => {
    const result = sendPaymentRequestToApi(-50, 20);
    expect(result).to.equal(-30);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: -30')).to.be.true;
  });
});
