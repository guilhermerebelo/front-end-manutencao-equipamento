"use strict";

var Swal = require("sweetalert2");

module.exports = MovimentacaoDirective;

MovimentacaoDirective.$inject = [];
function MovimentacaoDirective() {
    return {
        restrict: "E",
        template: require("./manutencao.directive.html"),
        scope: {},
        bindToController: {},
        controller: MovimentacaoController,
        controllerAs: "vm",
    };
}

MovimentacaoController.$inject = [
    "$scope",
    "me.components.ServicoService",
    "me.components.ManutencaoModalService",
    "Loader",
    "$state",
];
function MovimentacaoController(
    $scope,
    ServicoService,
    ManutencaoModalService,
    Loader,
    $state
) {
    var vm = this;
    vm.pageNumber = 1;
    vm.pessoas = [];

    vm.listAll = listAll;
    vm.remove = remove;
    vm.adicionarMovimentacao = adicionarMovimentacao;
    vm.voltarParaEsseState = voltarParaEsseState;

    listAll();

    function listAll() {
        vm.pageable = {
            filter: vm.filter,
            manutencao: true,
            pageNumber: vm.pageNumber,
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
            cancelButtonText: "Não",
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

    function adicionarMovimentacao(servico) {
        vm.servico = servico;
    }

    function voltarParaEsseState() {
        vm.servico = null;
        listAll();
    }
}
