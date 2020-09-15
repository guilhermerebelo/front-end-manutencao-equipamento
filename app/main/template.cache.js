"use-strict";

module.exports = templateCache;

templateCache.$inject = ["$templateCache"];
function templateCache($templateCache) {
    $templateCache.put(
        "uib/template/pagination/pagination.html",
        '<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="page-item pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" class=\'page-link\' uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n' +
            '<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="page-item pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" class=\'page-link\' uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n' +
            '<li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="page-item pagination-page"><a href ng-click="selectPage(page.number, $event)" class=\'page-link\' ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n' +
            '<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="page-item pagination-next"><a href ng-click="selectPage(page + 1, $event)" class=\'page-link\' ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n' +
            '<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="page-item pagination-last"><a href ng-click="selectPage(totalPages, $event)" class=\'page-link\' ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n' +
            ""
    );
}
