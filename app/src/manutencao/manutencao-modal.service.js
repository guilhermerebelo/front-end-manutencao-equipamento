"use-scrict";

module.exports = ManutencaoModalService;

ManutencaoModalService.$inject = ["$uibModal"];
function ManutencaoModalService($uibModal) {
    return {
        open: open,
    };

    function open(servico, idManutencao) {
        return $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: require("./Manutencao-modal.html"),
            controller: "me.components.ManutencaoModalController",
            controllerAs: "vm",
            size: "lg",
            resolve: {
                id: function () {
                    return idManutencao;
                },
                servico: function () {
                    return servico;
                },
            },
        }).closed;
    }
}
