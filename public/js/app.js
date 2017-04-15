/**
 * Created by Michael on 13.02.2016.
 */
var module = angular.module('egswiss_tournament', ["ui.router", "directives", "controllers", "config"]);

module.controller('MainController', function ($scope, $state) {


    $scope.changeState = function () {
        $state.go('tournament');
    };

    $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        console.log("stateChangeSuccess");
        console.dir(event);
        console.dir(toState);
        console.dir(toParams);
        console.dir(fromState);
        console.dir(fromParams);
    });


    $scope.tournaments = [
        {
            id: 1,
            organisator: {
                name: "Jonney",
                id: 16
            },
            creationDate: "02.02.2016",
            date: "20.03.2016",
            game: "League of Legends",
            title: "Das erste grosse LOL Turnier auf EGSwiss!!!",
            description: "Ein kleines erstes LOL Turnier auf EGSwiss. Alle Sind herzlich eingeladen mitzuspielen!",
            participantCount: 4,                /*anzahl teilnehmer*/
            tournamenttype: "team",
            randomAllocation: false,            /*false: custom allocation by organisator*/
            price: "NO PRICE IN THIS TEST",
            editable: false,
            participants: [
                {
                    id: 1,
                    name: "EGS",
                    members: [
                        {
                            id: 1,
                            name: "John"
                        },
                        {
                            id: 2,
                            name: "Peter"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "TGW",
                    members: [
                        {
                            id: 3,
                            name: "Trish"
                        },
                        {
                            id: 4,
                            name: "hensi"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            organisator: {
                id: 10,
                name: "Google"
            },
            creationDate: "04.02.2016",
            date: "24.03.2016",
            game: "League of Legends",
            title: "Das erste kleine tournier (1 vs 1) !!!",
            description: "1 vs 1 LOL. join us!",
            participantCount: 2,                /*anzahl teilnehmer*/
            tournamenttype: "single",
            randomAllocation: true,             /*false: custom allocation by organisator*/
            price: "NO PRICE IN THIS TEST",
            editable: false,
            participants: [
                {
                    id: 5,
                    name: "Fabiennaa"
                },
                {
                    id: 6,
                    name: "blublu"
                }
            ]
        }
    ];

});