"use strict";

module.exports = PessoaService;

PessoaService.$inject = ["Restangular"];
function PessoaService(Restangular) {
    var basePath = "cliente";

    return {
        listAll: listAll,
        get: get,
        save: save,
        remove: remove,
    };

    function listAll(params) {
        return Restangular.one(basePath)
            .get(params)
            .then(Restangular.stripRestangular);
    }

    function get(id) {
        return Restangular.one(basePath, id).get();
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
