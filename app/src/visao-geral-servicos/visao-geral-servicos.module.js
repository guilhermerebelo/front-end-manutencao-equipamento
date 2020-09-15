var angular = require("angular");

module.exports = angular
    .module("app.visao-geral-servicos", [])
    .factory("VisaoGeralServicosService", require("./visao-geral-servicos.service"))
    .controller("ModalController", require("./modal.controller"))
    .directive("page", require("./visao-geral-servicos.directive")).name;
