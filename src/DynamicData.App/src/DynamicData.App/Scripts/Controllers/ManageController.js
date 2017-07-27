var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ManageController = (function () {
                function ManageController(scope, location, mdDialog, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.manageControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.ManageViewModel(scope, location, mdDialog, appBarStatus, repository);
                    appBarStatus.Master();
                }
                ManageController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName
                ];
                return ManageController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.manageControllerName, ManageController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
