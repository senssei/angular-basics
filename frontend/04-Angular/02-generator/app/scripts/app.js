'use strict';

/**
 * @ngdoc overview
 * @name 02GeneratorApp
 * @description
 * # 02GeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('02GeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
