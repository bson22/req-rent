'use strict';

angular.module('reqrentApp')
  .controller('InvoiceCtrl', function ($scope) {

  	$scope.invoiceList = [];

  	$scope.bill = {};

    $scope.addBill = function() {
  		$scope.invoiceList.push($scope.bill);
  		$scope.bill={};
  		$scope.focusBox();

  		console.log($scope.invoiceList); //for debugging
  	}

  	$scope.focusBox = function () {
  		var scrollToElement = document.getElementById("selector")
  		var focusOnElement = document.getElementById("text");
  		focusOnElement.focus();
  		scrollToElement.scrollIntoView();
  	};

  });
