 angular.module('login')
 .controller('login', function($scope) {
 	$scope.auth = auth.login('twitter');
 })



var auth = new FirebaseSimpleLogin(login, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
  } else {
    // user is logged out
  }
});

