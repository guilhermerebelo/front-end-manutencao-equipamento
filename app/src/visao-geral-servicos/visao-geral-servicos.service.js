"use strict";

module.exports = Service;

Service.$inject = ["Restangular"];
function Service(Restangular) {
    var basePath = "manutencao-equipamento";

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
