
angular.module('carInventoryApp')
  .component('carDetail', {
    templateUrl: 'app/car-detail/car-detail.template.html',
    controller: ['$routeParams', '$http', function CarDetailController($routeParams, $http) {
      var self = this;
      $http.get('data/cars.json').then(function(response) {
        self.car = response.data.find(c => c.id === $routeParams.carId);
      });
    }]
  });
