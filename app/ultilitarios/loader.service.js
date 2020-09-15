"use strict";

module.exports = directive;

directive.$inject = ["promiseTracker"];
function directive(promiseTracker) {
    var loadingTracker = promiseTracker();
    return {
        addPromise: addPromise,
        getPromise: getPromise
    };

    function addPromise(promise) {
        loadingTracker.addPromise(promise);
    }

    function getPromise() {
        return loadingTracker;
    }
}
