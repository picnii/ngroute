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
      when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'AboutCtrl'
      }).
      when('/products', {
        templateUrl: 'pages/products.html',
        controller: 'ProductCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);