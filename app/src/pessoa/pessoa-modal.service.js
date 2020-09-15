"use-scrict";

module.exports = PessoaModalService;

PessoaModalService.$inject = ["$uibModal"];
function PessoaModalService($uibModal) {
    return {
        open: open,
    };

    function open(idPessoa) {
        return $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: require("./pessoa-modal.html"),
            controller: "me.components.PessoaModalController",
            controllerAs: "vm",
            size: "lg",
            resolve: {
                id: function () {
                    return idPessoa;
                },
            },
        }).closed;
    }
}
