var angular = require("angular");

module.exports = angular
    .module("app.manutencao", [])
    .factory("me.components.ManutencaoService", require("./manutencao.service"))
    .controller(
        "me.components.ManutencaoModalController",
        require("./manutencao-modal.controller")
    )
    .service(
        "me.components.ManutencaoModalService",
        require("./manutencao-modal.service")
    )
    .directive("meMovimentacao", require("./movimentacao.directive"))
    .directive("meManutencao", require("./manutencao.directive")).name;
