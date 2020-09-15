"use strict";

var Swal = require("sweetalert2");

module.exports = ServicoDirective;

ServicoDirective.$inject = [];
function ServicoDirective() {
    return {
        restrict: "E",
        template: require("./servico.directive.html"),
        scope: {},
        bindToController: {},
        controller: ServicoController,
        controllerAs: "vm"
    };
}

ServicoController.$inject = [
    "$scope",
    "me.components.ServicoService",
    "me.components.ServicoModalService",
    "Loader",
    "$state"
];
function ServicoController($scope, ServicoService, ServicoModalService, Loader, $state) {
    var vm = this;
    vm.pageNumber = 1;
    vm.pessoas = [];

    vm.listAll = listAll;
    vm.remove = remove;
    vm.openModal = openModal;

    listAll();

    function listAll() {
        vm.pageable = {
            filter: vm.filter,
            pageNumber: vm.pageNumber
        };

        var promise = ServicoService.listAll(vm.pageable).then(listing);
        Loader.addPromise(promise);
    }

    function listing(data) {
        vm.pageNumber = data.pageable.pageNumber + 1;
        vm.totalElements = data.totalElements;
        vm.content = data.content;
    }

    function remove(id) {
        Swal.fire({
            title: "Deseja realmente excluir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não"
        }).then(function (result) {
            if (result.value) {
                var promise = ServicoService.remove(id)
                    .then(messageRemoving)
                    .then(listAll);
                Loader.addPromise(promise);
            }
        });
    }

    function messageRemoving() {
        Swal.fire({ title: "Excluído com sucesso!", icon: "success" });
    }

    function openModal(id) {
        ServicoModalService.open(id).then(listAll);
    }
}
