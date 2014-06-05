'use strict';

angular.module('reqrentApp')
  .service('Invoiceservice', function Invoiceservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
   var invoiceList = [];

   // var numOfPeople = document.getElementById("selector");

   // var optionVal = parseInt(numOfPeople.options[numOfPeople.selectedIndex].text);

   var addBill =  function (bill) {
   		invoiceList.unshift(bill);
   };

  var total = function () {
    console.log('service total was called')
    var totalSum = 0;

    for (var i = 0; i < invoiceList.length; i++) {
      var bill = invoiceList[i];
      totalSum += bill.price;
    }

    return totalSum;
  };

   // Anythouhing returned in this object is available outside the service.
   return { 
   	addBill: addBill,
   	list: invoiceList,
    total: total
   };

});
