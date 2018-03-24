/**
* Controller module which will be injected in Main module.
*/

angular.module('thinkwikAppController',['ngRoute'])

.controller('thinkwikAppLogin',function($scope, $rootScope, $routeParams, $location, $http, API)
{
    $scope.login = {};

    $scope.doLogin = function (customer)
    {
        API.post('login',
        {
            customer: customer
        }).then(function (results)
        {
            API.toast(results);
            if (results.status == "success")
            {
                $location.path('dashboard');
            }
        });
    };
})

.controller('thinkwikAppSignup',function($scope, $rootScope, $routeParams, $location, $http, API)
{
    $scope.signup = {email:'',password:'',name:'',phone:'',address:''};

    $scope.signUp = function (customer)
    {
        API.post('signUp',
        {
            customer: customer
        }).then(function (results)
        {
            API.toast(results);
            if (results.status == "success")
            {
                $location.path('dashboard');
            }
        });
    };
})

.controller('thinkwikAppLogout',function($scope, $rootScope, $routeParams, $location, $http, API)
{
    $scope.logout = function ()
    {
        API.get('logout').then(function (results)
        {
            API.toast(results);
            $location.path('login');
        });
    }
})