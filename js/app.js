var app = angular.module('route', [
  'ngRoute'
]);
 
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'MainCtrl'
      }).
      when('/bill', {
        templateUrl: 'pages/bil.html',
        controller: 'BillCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);