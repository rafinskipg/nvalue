'use strict';

angular.module('squareApp')
  .controller('MainCtrl', function ($scope) {
    $scope.power = 2;
    $scope.createpower  = function (power) {
      return function (by) {
        return Math.pow(by,power);
      };
    };
    
    $scope.setPower = function (powah) {
      $scope.power = powah;
      $scope.calculus = $scope.createpower(powah);
    };

    $scope.calculus = $scope.createpower($scope.power);

    $scope.numbers =  [ 0 , 1,  2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  });
