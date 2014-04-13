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
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/connectSpotify', {
        templateUrl: 'views/connectSpotify.html',
        controller: 'mainCtrl'
      })
      .when('/finish', {
        templateUrl: 'views/finish.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quantity', {
        templateUrl: 'views/quantity.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
