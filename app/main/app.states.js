"use strict";

module.exports = stateConfig;

stateConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function stateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("page", {
        url: "/",
        views: {
            main: {
                template: "<me-page></me-page>",
            },
        },
    });
}
