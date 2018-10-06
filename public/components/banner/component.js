angular
.module('app')
.component('banner',{
    controller: 'BannerController',
    templateUrl: '/components/banner/template.html',
    bindToController: true
})
.controller('BannerController', function($scope, UserFactory,){
    $scope.user = Userfactory;
})