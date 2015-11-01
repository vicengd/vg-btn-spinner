angular.module('app', ['ionic', 'controllers', 'vgBtnSpinner']);

angular.module('controllers', [])
.controller('myCtrl', ['$scope', '$timeout', '$ionicPopup', function ($scope, $timeout, $ionicPopup) {
  $scope.fnStart = function() {
    //$timeout is for demo purposes. In production use $http.get, $http.jsonp, ....
    var promise = $timeout(function() {}, 2000);
    return promise;
  }

  $scope.fnEnd = function() {
    $ionicPopup.alert({
        title: 'Alert',
        template: 'Finished!'
      });
  }
}]);

