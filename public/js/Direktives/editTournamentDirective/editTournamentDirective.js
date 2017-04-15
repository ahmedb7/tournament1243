var module = angular.module('directives');

module.directive('editTournament', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/editTournament.html',
        scope: {
            editTournament: "="
        },
        controller: function ($scope) {

        }
    }
});
