var angular = require("angular");

module.exports = angular
    .module("app.ultilitarios", [])
    .filter("cpfMask", require("./mask-cpf.directive"))
    .service("Loader", require("../ultilitarios/loader.service"))
    .directive("dateFormat", require("./date-format.directive"))
    .directive("meRenderDirective", require("./render-directive"))
    .directive("meSelect", require("./select.directive"))
    .directive("displayEnum", require("./display-enum.directive")).name;
