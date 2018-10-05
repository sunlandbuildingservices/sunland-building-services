angular
.module('app')
.component('navigation',{
    controller: 'NavigationController',
    templateUrl: 'components/navigation/template.html',
    bindToController: true
})
.controller('NavigationController', function($scope, UserFactory,){
    $scope.user = Userfactory;
})