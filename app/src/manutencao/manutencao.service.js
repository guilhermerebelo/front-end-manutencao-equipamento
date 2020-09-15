"use strict";

module.exports = ManutencaoService;

ManutencaoService.$inject = ["Restangular"];
function ManutencaoService(Restangular) {
    var basePath = "movimentacao";

    return {
        listAll: listAll,
        get: get,
        save: save,
        remove: remove
    };

    function listAll(params) {
        return Restangular.one(basePath).get(params);
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
