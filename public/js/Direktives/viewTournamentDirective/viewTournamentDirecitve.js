var module = angular.module('directives');

module.directive('viewTournament', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/viewTournament.html',
        scope: {
            viewTournament: '='
        },
        controller: function ($scope) {
            $scope.allTeams = [];
            $scope.allParticipants = [];
            if ($scope.viewTournament.tournamenttype === 'team') {
                _.each($scope.viewTournament.participants, function (team) {
                    $scope.allTeams.push(team);
                });
            } else {
                _.each($scope.viewTournament.participants, function (participant) {
                    $scope.allParticipants.push(participant);
                });
            }
        }
    }
});