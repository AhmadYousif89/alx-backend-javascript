const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .callsFake((type, a, b) => a + b);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
