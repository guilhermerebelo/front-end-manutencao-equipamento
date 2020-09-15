var angular = require("angular");

module.exports = angular
    .module("app.cadastro", [
        require('./manutencao/manutencao.module'),
        require('./servico/servico.module'),
        // require('./visao-geral-servicos/visao-geral-servicos.module'),
        require('./pessoa/pessoa.module')
    ])
    .directive("mePage", require("./page.directive")).name;
