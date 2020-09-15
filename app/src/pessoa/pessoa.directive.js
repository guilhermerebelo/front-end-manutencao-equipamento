"use strict";

var Swal = require("sweetalert2");

module.exports = PessoaDirective;

PessoaDirective.$inject = [];
function PessoaDirective() {
    return {
        restrict: "E",
        template: require("./pessoa.directive.html"),
        scope: {},
        bindToController: {},
        controller: PessoaController,
        controllerAs: "vm"
    };
}

PessoaController.$inject = [
    "$scope",
    "me.components.PessoaService",
    "me.components.PessoaModalService",
    "Loader",
    "$state"
];
function PessoaController($scope, PessoaService, PessoaModalService, Loader, $state) {
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

        var promise = PessoaService.listAll(vm.pageable).then(listing);
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
                var promise = PessoaService.remove(id)
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
        PessoaModalService.open(id).then(listAll);
    }
}
