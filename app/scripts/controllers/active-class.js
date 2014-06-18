'use strict';

angular.module('reqrentApp')
  .controller('ActiveClassCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
    	return viewLocation === $location.path();
    };
  });
