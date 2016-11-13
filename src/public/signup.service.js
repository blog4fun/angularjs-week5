(function() {
    "use strict";

    angular.module('public')
        .constant('ApiPath', 'https://ntduong-angularjs-w5.herokuapp.com')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ["$http", "ApiPath"];

    function SignUpService($http, ApiPath) {
        var service = this;

        service.getMenuItem = function(shortName) {
            return $http({
                method: 'GET',
                url: ApiPath + '/menu_items/' + shortName + ".json"
            }).then(function(response) {
                return response.data;
            }).catch(function(error) {
                console.log("No such menu number exists!");
                return null;
            });
        };

        var registered = false;
        var userInfo = null;
        var menuItem = null;

        service.saveUserInfo = function(info, item) {
            userInfo = info;
            registered = true;
            menuItem = item;
        };

        service.getUserInfo = function() {
            if (registered) {
                return userInfo;
            }
            return null;
        };
        service.isRegistered = function() {
            return registered;
        };

        service.getRegisteredItem = function() {
            return menuItem;
        };
    }
})();