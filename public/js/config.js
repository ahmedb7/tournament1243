(function () {
    "use strict";
    var module = angular.module('config', []);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                label: "Startseite",
                url: "/",
                templateUrl: "./html/views/home/home.html",
                controller: "MainController"
            })

            .state("tournament", {
                label: "Turniere",
                url: "/tournament",
                templateUrl: "./html/views/tournament/tournament.html",
                controller: "addTournamentController"
            });
    });
}());