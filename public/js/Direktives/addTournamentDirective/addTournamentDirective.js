var module = angular.module('directives');

module.directive('addTournament', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/addTournament.html',
        scope: {
            tournaments: "=",
            addTournament: "=",
            state: "="
        },
        controller: function ($scope) {
            $scope.isVisible = false;

            $scope.createTournament = function () {
                $scope.isVisible = true;
            };

            $scope.cancelCreateTournament = function () {
                $scope.addTournament = {};
                $scope.isVisible = false;
            };

            $scope.save = function () {
                $scope.addTournament.state = "edit";
                console.log($scope.addTournament);
                $scope.tournaments.push($scope.addTournament);
                $scope.addTournament = {};
            }
        }
    }
});