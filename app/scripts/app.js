'use strict';

angular
  .module('reqrentApp', ['ui.router'])
  	.config(function ($stateProvider, $urlRouterProvider) {
  		$urlRouterProvider.otherwise('/');

  		$stateProvider.state('main', {
  			url: '/',
  			templateUrl: 'views/main.html',
  			controller: 'InvoiceCtrl'
  			// resolve: {

  			// }

  		// }).state ("", {
  		// 	url: "",
  		// 	templateUrl: "",
  		// 	controller: "",
  		// 	resolve: {

	  	//	}
  		});
  	});
