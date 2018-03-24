/**
 * Angularjs module initialization
 */

var thinkwikApp = angular.module('thinkwikApp', ['ngRoute', 'thinkwikAppController', 'ngAnimate', 'toaster']);

thinkwikApp.config(['$routeProvider',function ($routeProvider)
{
    /**
    * Configure routes
    */

    $routeProvider.
    when('/login', {
        title: 'Login',
        templateUrl: 'partials/login.html',
        controller: 'thinkwikAppLogin'
    })
    .when('/logout', {
        title: 'Logout',
        templateUrl: 'partials/login.html',
        controller: 'thinkwikAppLogout'
    })
    .when('/signup', {
        title: 'Signup',
        templateUrl: 'partials/signup.html',
        controller: 'thinkwikAppSignup'
    })
    .when('/dashboard', {
        title: 'Dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'thinkwikAppSignup'
    })
    .when('/', {
        title: 'Login',
        templateUrl: 'partials/login.html',
        controller: 'thinkwikAppLogin',
        role: '0'
    })
    .otherwise({
        redirectTo: '/login'
    });
}])
.run(function ($rootScope, $location, API)
{
    /**
    * checking authetication everytime routes changes
    */

    $rootScope.$on("$routeChangeStart", function (event, next, current)
    {
        $rootScope.authenticated = false;
        
        API.get('session').then(function (results)
        {
            if (results.uid)
            {
                $rootScope.authenticated = true;
                $rootScope.uid = results.uid;
                $rootScope.name = results.name;
                $rootScope.email = results.email;
            }
            else
            {
                var nextUrl = next.$$route.originalPath;
                if (nextUrl == '/signup' || nextUrl == '/login') {

                } else {
                    $location.path("/login");
                }
            }
        });
        
//        Enable below code for checking if API gave 404 error and redirect user back to login page
        
//        ,function(err) {
//            console.log(err);
//            API.toast("404 API not found");
//            $location.path("/login");
//        }
    });
});