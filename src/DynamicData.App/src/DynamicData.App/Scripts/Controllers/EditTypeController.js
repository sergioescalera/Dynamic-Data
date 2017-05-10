var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EditTypeController = (function () {
                function EditTypeController(scope, routeParams, location, mdToast, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.editTypeControllerName + ".constructor");
                    var type = routeParams.entityType;
                    scope.vm = new DynamicData.ViewModels.EditTypeViewModel(scope, location, mdToast, appBarStatus, repository, type);
                }
                EditTypeController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    "$mdToast",
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
