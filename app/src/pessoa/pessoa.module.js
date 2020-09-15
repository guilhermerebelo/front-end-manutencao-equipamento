var angular = require("angular");

module.exports = angular
    .module("app.pessoa", [])
    .factory("me.components.PessoaService", require("./pessoa.service"))
    .controller(
        "me.components.PessoaModalController",
        require("./pessoa-modal.controller")
    )
    .service(
        "me.components.PessoaModalService",
        require("./pessoa-modal.service")
    )
    .directive("mePessoa", require("./pessoa.directive")).name;
