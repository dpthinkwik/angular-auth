/**
* Password compare validation directive
*/

thinkwikApp.directive('comparePassword', [function ()
{
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control)
        {
            var checker = function ()
            {
                var e1 = scope.$eval(attrs.ngModel); 
 
                var e2 = scope.$eval(attrs.comparePassword);
                if(e2!=null)
                return e1 == e2;
            };
            scope.$watch(checker, function (n)
            {
                control.$setValidity("passwordNoMatch", n);
            });
        }
    };
}]);
