var app = angular.module('Funcionarios', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/Bem-Vindo.tpl.html'
    });

    $routeProvider.when('/Funcionarios', {
        templateUrl: 'partials/Funcionarios.tpl.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
})