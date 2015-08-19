'use strict';

angular.module('sfe.pullToRefresher').run(['$templateCache', function($templateCache) {

    $templateCache.put('angular-pull-to-refresher.tpl.html',
        '<div class="ptr">\n' +
        '   <i class="fa fa-arrow-down"></i>\n' +
        '   <div class="loading">\n' +
        '       <span class="l1"></span>\n' +
        '       <span class="l2"></span>\n' +
        '       <span class="l3"></span>\n' +
        '   </div>\n' +
        '</div>\n'
    );

}]);