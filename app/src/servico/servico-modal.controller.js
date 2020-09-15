"use-scrict";

module.exports = ServicoModalController;

var Swal = require("sweetalert2");

ServicoModalController.$inject = [
    "$uibModalInstance",
    "me.components.ServicoService",
    "me.components.PessoaService",
    "Loader",
    "id",
];
function ServicoModalController($uibModalInstance, ServicoService,  PessoaService, Loader, id) {
    var vm = this;

    vm.PessoaService = PessoaService

    vm.cancel = cancel;
    vm.save = save;
    vm.remove = remove;

    init();

    function init() {
        vm.title = !id ? "Adicionar" : "Editar";
        vm.isEdit = !!id;

        if (id) {
            load(id);
        } else {
            getProximoNumeroServico();
            vm.servico = {
                situacao: "PENDENTE",
            };
        }
    }

    function getProximoNumeroServico() {
        ServicoService.getProximoNumeroServico().then(function (numeroServico) {
            vm.numeroServico = numeroServico;
        });
    }

    function load(id) {
        var promise = ServicoService.get(id).then(loading);
        Loader.addPromise(promise);
    }

    function loading(data) {
        vm.servico = data;
        vm.numeroServico = data.id;
    }

    function save() {
        var promise = ServicoService.save(vm.servico)
            .then(messageSaving)
            .then(cancel);
        Loader.addPromise(promise);
    }

    function messageSaving() {
        Swal.fire({ title: "Salvo com sucesso!", icon: "success" });
    }

    function cancel() {
        $uibModalInstance.dismiss("close");
    }

    function remove() {
        Swal.fire({
            title: "Deseja realmente excluir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
        }).then(removing);
    }

    function removing(result) {
        if (result.value) {
            var promise = ServicoService.remove(id)
                .then(messageRemoving)
                .then(cancel);
            Loader.addPromise(promise);
        }
    }

    function messageRemoving() {
        Swal.fire({ title: "Excluído com sucesso!", icon: "success" });
    }
}
