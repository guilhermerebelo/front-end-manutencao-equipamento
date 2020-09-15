"use strict";

module.exports = MainController;

MainController.$inject = ["Loader"];
function MainController(Loader) {
    var vm = this;
    vm.loader = Loader.getPromise();
}
