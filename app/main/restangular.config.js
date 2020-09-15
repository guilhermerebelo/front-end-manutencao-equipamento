"use-strict";

var Swal = require("sweetalert2");

module.exports = function (RestangularProvider) {
    RestangularProvider.setBaseUrl("http://localhost:8080/api");

    //interceptor
    RestangularProvider.setErrorInterceptor(function (response) {
        if (response.status == 400) {
            Swal.fire({
                title: response.data.message,
                icon: "error"
            });
        }

        if (response.status == 500) {
            Swal.fire({
                title: response.data.message || "Ocorreu um erro interno",
                icon: "error"
            });
        }

        return true;
    });
};
