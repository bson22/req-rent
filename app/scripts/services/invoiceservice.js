'use strict';

angular.module('reqrentApp')
  .service('Invoiceservice', function Invoiceservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
   var invoiceList = [];

   var addBill =  function (bill) {
   		invoiceList.unshift(bill);
   };

   // Anythouhing returned in this object is available outside the service.
   return { 
   	addBill: addBill,
   	list: invoiceList
   };

});
