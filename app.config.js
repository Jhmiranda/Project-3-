
angular.module('carInventoryApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/cars', {
        template: '<car-list></car-list>'
      })
      .when('/cars/:carId', {
        template: '<car-detail></car-detail>'
      })
      .otherwise('/cars');
  }]);
