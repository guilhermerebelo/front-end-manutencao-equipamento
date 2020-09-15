"use strict";

var ENUMS = [
    //sexo
    new tipoEnum("SEXO", "FEMININO", "Feminino"),
    new tipoEnum("SEXO", "MASCULINO", "Masculino"),
    
    //SituacaoServico
    new tipoEnum("SITUACAO_SERVICO", "PENDENTE", "Pendente"),
    new tipoEnum("SITUACAO_SERVICO", "EM_EXECUCAO", "Em execução"),
    new tipoEnum("SITUACAO_SERVICO", "FINALIZADO", "Finalizado"),
    new tipoEnum("SITUACAO_SERVICO", "INTERROMPIDO", "Interrompido")
];

function tipoEnum(tipoEnum, key, descricao) {
    this.tipoEnum = tipoEnum;
    this.key = key;
    this.descricao = descricao;
}

var _ = require("lodash");

module.exports = directive;

directive.$inject = [];
function directive() {
    return {
        restrict: "E",
        template: "<span>{{vm.tipoEnum[0].descricao}}</span>",
        scope: {},
        bindToController: {
            enum: "=",
            tipo: "@"
        },
        controller: controller,
        controllerAs: "vm"
    };
}

controller.$inject = [];
function controller() {
    var vm = this;

    vm.tipoEnum = _.chain(ENUMS)
        .filter(function (value) {
            return value.tipoEnum === vm.tipo;
        })
        .filter(function (value) {
            return value.key === vm.enum;
        })
        .value();
}
