"use strict";

var PAGE = {
    pageNumber: 1,
    size: 1000,
};

var _ = require("lodash");

module.exports = SelectDirective;

SelectDirective.$inject = [];
function SelectDirective() {
    return {
        restrict: "E",
        template:
            '<select class="form-control" ng-options="item as item[vm.label] for item in vm.content track by item.id" ng-model="ngModel">' +
            '<option value="">Selecione</option>' +
            "</select>",
        scope: {
            ngModel: "=",
        },
        bindToController: {
            metodo: "=",
            label: "@",
        },
        controller: SelectController,
        controllerAs: "vm",
    };
}

SelectController.$inject = [];
function SelectController() {
    var vm = this;

    vm.metodo(PAGE).then(function (response) {
        vm.content = _.mapKeys(response.content, "id");
    });
}
