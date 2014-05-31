'use strict';

describe('Service: Invoiceservice', function () {

  // load the service's module
  beforeEach(module('reqrentApp'));

  // instantiate service
  var Invoiceservice;
  beforeEach(inject(function (_Invoiceservice_) {
    Invoiceservice = _Invoiceservice_;
  }));

  it('should do something', function () {
    expect(!!Invoiceservice).toBe(true);
  });

});
