var angular = require("angular");

module.exports = angular
    .module("app.servico", [])
    .factory("me.components.ServicoService", require("./servico.service"))
    .controller(
        "me.components.ServicoModalController",
        require("./servico-modal.controller")
    )
    .service(
        "me.components.ServicoModalService",
        require("./servico-modal.service")
    )
    .directive("meServico", require("./servico.directive")).name;
