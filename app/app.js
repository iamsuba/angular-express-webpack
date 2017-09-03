import angular from 'angular';
import style from './style.css'
import uiRouter from 'angular-ui-router';
import subpageApp from './pages/subpage/subpage.controller';
import subpageTpl from './pages/subpage/subpage.html';

angular
    .module('caApp', [
        uiRouter
        , 'subpageApp'
    ])
    .config(function(
        $stateProvider
        , $urlRouterProvider
    ) {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('subpage', {
                url: '/',
                template: subpageTpl,
                controller: 'subpageCtrl',
                controllerAs: 'vm'
            });
    })
    .controller('caCtrl', function(
        $scope
    ) {
        $scope.appName = "MyWebApp";
    });