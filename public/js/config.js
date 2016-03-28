function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise("/");

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $stateProvider
    .state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "views/common/content.html"
    })
    .state('page1', {
      url: "/page1",
      templateUrl: "/page1",
      data: { pageTitle: 'Page 1 Example view' }
    })
    .state('page2', {
      url: "/page2",
      templateUrl: "/page2",
      data: { pageTitle: 'Page 2 Example view' }
    })
}

angular
  .module('inspinia')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
