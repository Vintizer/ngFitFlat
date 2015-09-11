angular.module('ngFit.statistic', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/statistic', {
        templateUrl: 'app/components/statistic/statistic.html',
        controller: 'StatisticCtrl'
      })
  })
  .controller('StatisticCtrl', StatisticCtrl);
function StatisticCtrl ($scope) {
  $scope.title = 'Это наш StatisticCtrl scope title'
}