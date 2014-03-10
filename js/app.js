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
        templateUrl: 'pages/bill.html',
        controller: 'BillCtrl'
      }).
      when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);