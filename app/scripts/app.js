'use strict';

/**
 * @ngdoc overview
 * @name angularSportStoreAppApp
 * @description
 * # angularSportStoreAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularSportStoreAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'sportsStore',
    'sportsStoreAdmin',
  ])



.config(function($routeProvider) {
  $routeProvider
    .when('/complete', {
      templateUrl: 'views/thankYou.html'
    })
    .when('/placeorder', {
      templateUrl: 'views/placeOrder.html'
    })
    .when('/checkout', {
      templateUrl: 'views/checkoutSummary.html'
    })
    .when('/products', {
      templateUrl: 'views/productList.html',
      controller: 'productListCtrl'
    })
    .when('/login', {
      templateUrl: 'views/adminLogin.html',
      controller: 'authUrlCtrl'
    })
    .when('/main', {
      templateUrl: 'views/adminMain.html',
    })
    .otherwise({
      redirectTo: '/login'
    });
});
