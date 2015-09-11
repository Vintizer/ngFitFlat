angular.module('ngFit.exercises', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/exercises', {
        templateUrl: 'app/components/exercises/exercises.html',
        controller: 'ExercisesCtrl'
      })
  })
  .controller('ExercisesCtrl', ExercisesCtrl);
function ExercisesCtrl ($scope) {
  $scope.title = 'Это наш ExercisesCtrl scope title'
}