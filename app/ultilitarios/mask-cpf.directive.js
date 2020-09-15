"use strict";

module.exports = filter;

filter.$inject = [];
function filter() {
    return function (cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };
}
