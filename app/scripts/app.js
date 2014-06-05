'use strict';

angular
  .module('reqrentApp', ['ui.router'])
  	.config(function ($stateProvider, $urlRouterProvider) {
  		$urlRouterProvider.otherwise('/');

  		$stateProvider.state('main', {
  			url: '/',
  			templateUrl: 'views/main.html',
  			controller: 'InvoiceCtrl'
  		})
        .state ('about', {
  			url: '/about',
  			templateUrl: 'views/AboutUs.html'
      })
        .state ('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      });
  	});
