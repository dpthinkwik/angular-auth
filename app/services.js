/**
* APi factory
*/

thinkwikApp.factory("API", ['$http', 'toaster', function ($http, toaster)
{
    var apiBase = 'api/v1/';

    var dataObj = {};
    
    dataObj.toast = function (data)
    {
        toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
    }
    
    dataObj.get = function (q)
    {
        return $http.get(apiBase + q).then(function (results)
        {
            return results.data;
        });
    };

    dataObj.post = function (q, object)
    {
        return $http.post(apiBase + q, object).then(function (results)
        {
            return results.data;
        });
    };

    dataObj.put = function (q, object)
    {
        return $http.put(apiBase + q, object).then(function (results)
        {
            return results.data;
        });
    };

    dataObj.delete = function (q)
    {
        return $http.delete(apiBase + q).then(function (results)
        {
            return results.data;
        });
    };

    return dataObj;
}]);