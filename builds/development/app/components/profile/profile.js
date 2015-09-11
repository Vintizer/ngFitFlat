angular.module('ngFit.profile', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/profile', {
        templateUrl: 'app/components/profile/profile.html',
        controller: 'ProfileCtrl'
      })
  })
  .controller('ProfileCtrl', ProfileCtrl);
function ProfileCtrl ($scope) {
  $scope.title = 'Это наш ProfileCtrl scope title'
}