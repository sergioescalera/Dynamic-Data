var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EditTypeController = /** @class */ (function () {
                function EditTypeController(scope, routeParams, location, mdToast, mdDialog, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.editTypeControllerName + ".constructor");
                    var type = routeParams.entityType;
                    scope.vm = new DynamicData.ViewModels.EditTypeViewModel(scope, location, mdToast, mdDialog, appBarStatus, repository, type);
                }
                EditTypeController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    "$mdToast",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName
                ];
                return EditTypeController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.editTypeControllerName, EditTypeController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=EditTypeController.js.map