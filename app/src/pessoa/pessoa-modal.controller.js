"use-scrict";

module.exports = PessoaModalController;

var Swal = require("sweetalert2");

PessoaModalController.$inject = ["$uibModalInstance", "me.components.PessoaService", "Loader", "id"];
function PessoaModalController($uibModalInstance, PessoaService, Loader, id) {
    var vm = this;

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
            vm.cliente = {};
        }
    }

    function load(id) {
        var promise = PessoaService.get(id).then(loading);
        Loader.addPromise(promise);
    }

    function loading(data) {
        vm.cliente = data;
    }

    function save() {
        vm.cliente.cpf = vm.cliente.cpf.replace(/\.|-/gm, "");
        var promise = PessoaService.save(vm.cliente)
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
            cancelButtonText: "Não"
        }).then(removing);
    }

    function removing(result) {
        if (result.value) {
            var promise = PessoaService.remove(id)
                .then(messageRemoving)
                .then(cancel);
            Loader.addPromise(promise);
        }
    }

    function messageRemoving() {
        Swal.fire({ title: "Excluído com sucesso!", icon: "success" });
    }
}
