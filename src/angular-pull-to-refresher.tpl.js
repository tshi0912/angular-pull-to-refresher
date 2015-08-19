angular.module('sfe.pullToRefresher').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('angular-pull-to-refresher.tpl.html',
    "<div class=\"ptr\">\r" +
    "\n" +
    "    <i class=\"fa fa-arrow-down\"></i>\r" +
    "\n" +
    "    <div class=\"loading\">\r" +
    "\n" +
    "        <span class=\"l1\"></span>\r" +
    "\n" +
    "        <span class=\"l2\"></span>\r" +
    "\n" +
    "        <span class=\"l3\"></span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-transclude class=\"ptr-content\"></div>\r" +
    "\n"
  );

}]);
