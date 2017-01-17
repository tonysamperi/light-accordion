var app = angular.module("myApp", ["lightAccordion"])
    .controller('introController', function ($scope) {
        $scope.angularLoaded = "Yeah, man!";

        $scope.angularLoaded = "YES";

        $scope.accordionOpened1 = true;
        $scope.accordionOpened2 = false;
    });