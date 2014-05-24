'use strict';

angular.module('reqrentApp')
  .controller('InvoiceCtrl', function ($scope) {

  	$scope.invoiceList = [];

  	$scope.bill = {};

    $scope.addBill = function() {
  		$scope.invoiceList.push($scope.bill);
  		$scope.bill = {};
  		console.log($scope.invoiceList);
  	}

  });
