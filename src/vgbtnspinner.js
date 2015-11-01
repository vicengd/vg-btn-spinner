(function () {
  'use strict';
  angular.module('vgBtnSpinner', ['ionic'])
  .directive('vgBtnSpinner', [function () {
    return {
      restrict: 'E',
      scope: {
        icon: '@',
        text: '@',
        vgclass: '@',
        loadingData: '=',
        fnonstart : '&fnOnStart',
        fnonend : '&fnOnEnd'
      },
      template: '<div class="{{vgclass}}"><ion-spinner ng-show="loadingData" icon="{{icon}}" class="spinner-default"></ion-spinner><button ng-show="!loadingData" class="button" ng-click="doClick()">{{text}}</button></div>',
      link: function (scope, element, attrs) {
        scope.doClick = function() {
          scope.loadingData = true;
          var promise = scope.fnonstart();
          promise.then(function(){
            scope.loadingData = false;
            scope.fnonend();
          });
        }
      }
    };
  }]);
})();