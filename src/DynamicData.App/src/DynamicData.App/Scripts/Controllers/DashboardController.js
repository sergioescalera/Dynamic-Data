var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var DashboardController = (function () {
                function DashboardController(scope, routeParams, location, appBarStatus, repository, sampleData) {
                    var entityType = routeParams.entityType;
                    DynamicData.Core.Trace.Message(Controllers.dashboardControllerName + ".constructor " + entityType);
                    scope.vm = new DynamicData.ViewModels.DashboardViewModel(scope, location, repository, sampleData, entityType);
                    appBarStatus.Master();
                }
                DashboardController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.sampleDataName
                ];
                return DashboardController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.dashboardControllerName, DashboardController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
