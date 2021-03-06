'use strict';

angular.module('reqrentApp')
  .controller('InvoiceCtrl', function ($scope, Invoiceservice) {

  	// $scope.invoiceList = [];  //empty array for the invoiceList
    $scope.invoiceList = Invoiceservice.list;

  	$scope.bill = {};  //empty object to save bills

    $scope.total = 0;

    $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    $scope.people = $scope.peoples[0];

    $scope.addBill = function() {               //addBill function adds a bill to the invoice list.	
  		Invoiceservice.addBill($scope.bill);
      $scope.bill={};
      $scope.focusBox();
      // $scope.people = $scope.people[0];
      $scope.total = Invoiceservice.total();
     
      console.log($scope.people);
      console.log($scope.total);
  	};

  	$scope.focusBox = function () {                                      //function selects and scrolls to the textfield so you don't have to use your mouse
  		var scrollToElement = document.getElementById("selectorBlock")
  		var focusOnElement = document.getElementById("text");
  		focusOnElement.focus();
  		scrollToElement.scrollIntoView();
  	};

  });
