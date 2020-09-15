"use strict";

var Swal = require("sweetalert2");

module.exports = directive;

directive.$inject = [];
function directive() {
    return {
        restrict: "E",
        template: require("./page.directive.html"),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: "vm"
    };
}

controller.$inject = [
    "$scope",
    "CadastroService",
    "Loader",
    "$state",
    "$uibModal"
];
function controller($scope, CadastroService, Loader, $state, $uibModal) {
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

        var promise = CadastroService.listAll(vm.pageable).then(listing);
        Loader.addPromise(promise);
    }

    function listing(data) {
        vm.pageNumber = data.pageable.pageNumber + 1;
        vm.totalElements = data.totalElements;
        vm.pessoas = data.content;
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
                var promise = CadastroService.remove(id)
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
        $uibModal
            .open({
                ariaLabelledBy: "modal-title",
                ariaDescribedBy: "modal-body",
                template: require("./modal.html"),
                controller: "ModalController",
                controllerAs: "vm",
                size: "lg",
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            })
            .closed.then(listAll);
    }
}
