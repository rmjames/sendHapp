'use strict';

var app = angular
  .module('sendHappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/completePurchase', {
        templateUrl: 'views/completePurchase.html',
        controller: 'mainCtrl'
      })
      .when('/detailProduct', {
        templateUrl: 'views/detailProduct.html',
        controller: 'MainCtrl'
      })
      .when('/friendsList', {
        templateUrl: 'views/friendsList.html',
        controller: 'MainCtrl'
      })
      .when('/purchase', {
        templateUrl: 'views/purchase.html',
        controller: 'MainCtrl'
      })
      .when('/setting', {
        templateUrl: 'views/setting.html',
        controller: 'MainCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'MainCtrl'
      })
      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
