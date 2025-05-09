
angular.module('carInventoryApp')
  .component('carList', {
    templateUrl: 'app/car-list/car-list.template.html',
    controller: function CarListController($http) {
      var self = this;
      self.orderProp = 'year';
      $http.get('data/cars.json').then(function(response) {
        self.cars = response.data;
      });
    }
  });
