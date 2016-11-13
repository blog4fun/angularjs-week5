(function() {
    'use strict';

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ["SignUpService"];

    function SignUpController(SignUpService) {
        var signupCtrl = this;
        signupCtrl.invalidItem = false;
        signupCtrl.saved = false;

        signupCtrl.submit = function() {
            var item = SignUpService.getMenuItem(signupCtrl.user.menuitem);
            if (item === null) {
                signupCtrl.invalidItem = true;
                signupCtrl.saved = false;
                return;
            }
            SignUpService.saveUserInfo(signupCtrl.user, item);
            signupCtrl.invalidItem = false;
            signupCtrl.saved = true;
        };
    }
})();