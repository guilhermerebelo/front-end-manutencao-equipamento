"use strict";

module.exports = directive;

directive.$inject = [];
function directive() {
    return {
        require: "ngModel",
        link: function ($scope, $element, $attr, $ngModelCtrl) {
            $ngModelCtrl.$formatters.length = 0;
            $ngModelCtrl.$parsers.length = 0;
        }
    };
}
