'use strict';

describe('Controller: ActiveClassCtrl', function () {

  // load the controller's module
  beforeEach(module('reqrentApp'));

  var ActiveClassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActiveClassCtrl = $controller('ActiveClassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
