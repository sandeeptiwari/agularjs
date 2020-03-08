(function() {
    'use strict';

    angular.module('angulartest', [
        'ui.router'
    ])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
        });
})();
