"use strict";

var angular = require("angular");

require("./style.css");
require("angular-promise-tracker");
require("angular-ui-router");
require("angular-ui-bootstrap");
require("ng-mask");

module.exports = angular
    .module("app", [
        "ui.router",
        "ui.bootstrap",
        "ajoslin.promise-tracker",
        "ngMask",
        require("../src/index"),
        require("../ultilitarios"),
        require("restangular"),
    ])
    .config(require("./restangular.config"))
    .config(require("./app.states"))
    .run(require("./template.cache"))
    .controller("app.MainController", require("./main.controller")).name;
