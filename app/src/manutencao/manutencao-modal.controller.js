"use-scrict";

module.exports = ManutencaoModalController;

var Swal = require("sweetalert2");

ManutencaoModalController.$inject = [
    "$uibModalInstance",
    "me.components.ManutencaoService",
    "Loader",
    "servico",
    "id",
];
function ManutencaoModalController(
    $uibModalInstance,
    ManutencaoService,
    Loader,
    servico,
    id
) {
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
            vm.movimentacao = {
                servico: servico
            };
        }
    }

    function load() {
        var promise = ManutencaoService.get(id).then(loading);
        Loader.addPromise(promise);
    }

    function loading(data) {
        vm.movimentacao = data;
    }

    function save() {
        var promise = ManutencaoService.save(vm.movimentacao)
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
            var promise = ManutencaoService.remove(id)
                .then(messageRemoving)
                .then(cancel);
            Loader.addPromise(promise);
        }
    }

    function messageRemoving() {
        Swal.fire({ title: "Excluído com sucesso!", icon: "success" });
    }
}
