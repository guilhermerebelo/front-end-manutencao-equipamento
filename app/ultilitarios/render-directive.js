"use strict";

module.exports = RenderDirective;

RenderDirective.$inject = ["$compile"];
function RenderDirective($compile) {
    return {
        restrict: "E",
        replace: true,
        link: function ($scope, $element, $attribute) {
            $scope.$watch($attribute.directive, render);

            function render() {
                var html = $compile($scope.$eval($attribute.directive))($scope);
                $element.html(html);
            }
        },
    };
}
