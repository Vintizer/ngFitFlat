// initialize material design js
$.material.init();

(function(){
  angular
    .module('ngFit', ['ngRoute', 'ngFit.exercises', 'ngFit.statistic', 'ngFit.profile', 'ngFit.workout'])
    .config(ngFitConfig)
    .controller('MainCtrl', MainCtrl)
    .controller('AboutCtrl', AboutCtrl);
    function ngFitConfig($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/profile.html',
          controller: 'MainCtrl'
        })
        .when('/index', {
          templateUrl: 'app/main/profile.html',
          controller: 'MainCtrl'
        })
    }

  function MainCtrl ($scope) {
    $scope.title = 'I can see you';
    $scope.name = 'Vintizer';
    $scope.clickFunction = function (name) {
      alert('Hello, ' + name)
    }
  }
  function AboutCtrl ($scope) {
    $scope.title = 'Это наш AboutCtrl scope title'
  }

})();



angular.module('ngFit.contact', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
    when('/contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: 'ContactCtrl'
    })
  })
    .controller('ContactCtrl', ContactCtrl);
    function ContactCtrl ($scope) {
      $scope.title = 'Это наш ContactCtrl scope title'
    }

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
angular.module('ngFit.navbar', ['ngRoute']);

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
angular.module('ngFit.workout', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/workout', {
        templateUrl: 'app/components/workout/workout.html',
        controller: 'WorkoutCtrl'
      })
  })
  .controller('WorkoutCtrl', WorkoutCtrl);
function WorkoutCtrl ($scope) {
  $scope.title = 'Это наш WorkoutCtrl scope title'
}
