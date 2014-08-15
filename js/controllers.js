'use strict';

myApp.controller("MyCtrl1" ,function ($scope, UtilSrvc) {
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("Amy");
});

myApp.controller("MyCtrl2" ,function ($scope) {

});

// you may add more controllers below
// var controller = module.controller('MapCtrl', function($scope) {
//   $scope.myMarkers = [
//       {
//          "latitude":33.22,
//          "longitude":35.33
//       },
//       ...
//   ];

//   $scope.center = {
//       latitude: 33.895497,
//       longitude: 35.480347,
//   };

//   $scope.zoom = 13;
//   $scope.markers = $scope.myMarkers;
//   $scope.fit = true;
// });