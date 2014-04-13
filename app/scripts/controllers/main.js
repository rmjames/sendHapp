'use strict';

angular.module('sendHappApp')
  .controller('login', function ($scope) {
    $scope.auth = auth.login('twitter');
 });
