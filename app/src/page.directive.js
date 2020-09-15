"use strict";

var _ = require('lodash');

var MENUS = {
    SERVICO: {
        key: 'SERVICO',
        descricao: 'Serviço',
        directive: '<me-servico></me-servico>',
        active: true
    },
    MANUTENCAO: {
        key: 'MANUTENCAO',
        descricao: 'Manutenção',
        directive: '<me-manutencao></me-manutencao>',
        active: false
    },
    PESSOA: {
        key: 'PESSOA',
        descricao: 'Cliente',
        directive: '<me-pessoa></me-pessoa>',
        active: false
    }
}

var Swal = require("sweetalert2");

module.exports = PageDirective;

PageDirective.$inject = [];
function PageDirective() {
    return {
        restrict: "E",
        template: require("./page.directive.html"),
        scope: {},
        bindToController: {},
        controller: PageController,
        controllerAs: "vm",
    };
}

PageController.$inject = ["$scope", "Loader", "$state", "$uibModal"];
function PageController($scope, Loader, $state, $uibModal) {
    var vm = this;

    vm.selectMenu = MENUS['SERVICO'];

    vm.menus = MENUS;
    vm.setMenu = setMenu;

    function setMenu(selectMenu) {
        vm.selectMenu = selectMenu;

        _.forEach(vm.menus, function(menu) {
            menu.active = vm.selectMenu.key === menu.key;
        })
    }
}
