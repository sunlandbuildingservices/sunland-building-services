angular
.module('app')
.component('services', {
    controller: 'WorkController',
    templateUrl: '/components/services/template.html',
    bindToController: true //required for $scope to work
})
.controller('ServicesController',function($scope, UserFactory){
    $scope.user = UserFactory;
});