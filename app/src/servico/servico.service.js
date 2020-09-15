"use strict";

module.exports = ServicoService;

ServicoService.$inject = ["Restangular"];
function ServicoService(Restangular) {
    var basePath = "servico";

    return {
        listAll: listAll,
        get: get,
        save: save,
        remove: remove,
        getProximoNumeroServico: getProximoNumeroServico,
    };

    function listAll(params) {
        return Restangular.one(basePath)
            .get(params)
            .then(Restangular.stripRestangular);
    }

    function get(id) {
        return Restangular.one(basePath, id).get();
    }

    function getProximoNumeroServico() {
        return Restangular.one(basePath).one("proximo-numero-servico").get();
    }

    function save(entity) {
        return entity.id
            ? Restangular.all(basePath).customPUT(entity, entity.id)
            : Restangular.all(basePath).post(entity);
    }

    function remove(id) {
        return Restangular.all(basePath).customDELETE(id);
    }
}
