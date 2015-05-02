app.controller('FuncionariosController', function($scope) {
    $scope.funcionarios = [
        { nome: 'Jose' },
        { nome: 'Meninao' },
        { nome: 'Jean' },
        { nome: 'Maria' }
        
    ];

    //PODEMOS SETAR UM VALOR INICIAL PARA O mostrar
    $scope.mostrar = false;
});