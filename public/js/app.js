//Firebase Hosting 
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxJLZyK2jXy3vzkjFvJkefu7sm9Ryv9fw",
    authDomain: "sunland-building-services.firebaseapp.com",
    databaseURL: "https://sunland-building-services.firebaseio.com",
    projectId: "sunland-building-services",
    storageBucket: "sunland-building-services.appspot.com",
    messagingSenderId: "923772014824"
  };
  firebase.initializeApp(config);

console.log('app.js file is loading');

angular
.module('app', ['ui.router','firebase', 'ui.bootstrap', 'ui.grid', 'ui-notification', 'app.home', 'app.admin'])
.config(function($urlRouterProvider, NotificationProvider){
    $urlRouterProvider.otherwise('/');

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 50,
        startRight: 40,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'bottom'
    });
})
// Below is the beginner way to configure application variables
// When you are ready for various environments:
// https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/
.constant('config', {
    //see components/user/components.js
    defaultState: 'home',
    defaultAdminState: 'admin.users'
})

//07202018 moves all of the js from the /home and /admin folders to this js file. 
//home
angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
});

//admin
angular
.module('app.admin',[])
.config(function($stateProvider){
    $stateProvider
});