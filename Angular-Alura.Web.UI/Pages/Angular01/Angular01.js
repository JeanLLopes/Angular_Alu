
var app = angular.module("App", []);

app.controller('Angular01Controller', function ($scope) {
    $scope.total = 0;

    $scope.Contador = function () {
        $scope.total++;
    }
})