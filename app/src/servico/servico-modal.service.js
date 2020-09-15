"use-scrict";

module.exports = ServicoModalService;

ServicoModalService.$inject = ["$uibModal"];
function ServicoModalService($uibModal) {
    return {
        open: open,
    };

    function open(idServico) {
        return $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: require("./servico-modal.html"),
            controller: "me.components.ServicoModalController",
            controllerAs: "vm",
            size: "lg",
            resolve: {
                id: function () {
                    return idServico;
                },
            },
        }).closed;
    }
}
