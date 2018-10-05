angular
.module('app')
.component('footer', {
    controller: 'FooterController',
    templateUrl: '/components/footer/template.html',
    bindToController: true //required for $scope to work
})
.controller('FooterController',function($scope, UserFactory){
    $scope.user = UserFactory;
});