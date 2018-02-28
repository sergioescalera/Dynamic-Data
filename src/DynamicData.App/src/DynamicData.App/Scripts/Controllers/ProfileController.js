var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ProfileController = /** @class */ (function () {
                function ProfileController(scope, appBarStatus) {
                    DynamicData.Core.Trace.Message(Controllers.profileControllerName + ".constructor");
                }
                ProfileController.$inject = [
                    "$scope",
                    DynamicData.Core.appBarStatusName
                ];
                return ProfileController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.profileControllerName, ProfileController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
