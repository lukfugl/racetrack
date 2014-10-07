angular.module('RaceTrack')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

  }]);