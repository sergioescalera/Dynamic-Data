var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var DashboardPivotItemController = /** @class */ (function () {
                function DashboardPivotItemController(scope, location, mdDialog, appBarStatus, entityRepository, entityTypeSettingsRepository) {
                    DynamicData.Core.Trace.Message(Controllers.dashboardPivotItemControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.DashboardPivotItemViewModel(scope, location, mdDialog, appBarStatus, entityRepository, entityTypeSettingsRepository, scope.type);
                }
                DashboardPivotItemController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityRepositoryName,
                    DynamicData.Data.entityTypeSettingsRepositoryName
                ];
                return DashboardPivotItemController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.dashboardPivotItemControllerName, DashboardPivotItemController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
