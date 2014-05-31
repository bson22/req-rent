'use strict';

angular.module('reqrentApp')
  .controller('InvoiceCtrl', function ($scope, Invoiceservice) {

  	// $scope.invoiceList = [];  //empty array for the invoiceList
    $scope.invoiceList = Invoiceservice.list;

  	$scope.bill = {};  //empty object to save bills

    $scope.addBill = function() {               //addBill function adds a bill to the invoice list.	
  		Invoiceservice.addBill($scope.bill);
      $scope.bill={};
  		$scope.focusBox();

      console.log($scope.invoiceList);
  	}

  	$scope.focusBox = function () {                                      //function selects and scrolls to the textfield so you don't have to use your mouse
  		var scrollToElement = document.getElementById("selector")
  		var focusOnElement = document.getElementById("text");
  		focusOnElement.focus();
  		scrollToElement.scrollIntoView();
  	};

  });
