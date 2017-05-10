var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var SettingsController = (function () {
                function SettingsController(scope, appBarStatus, repository, sampleData) {
                    DynamicData.Core.Trace.Message(Controllers.settingsControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.SettingsViewModel(scope, repository, sampleData);
                    this.AppBar(appBarStatus);
                }
                SettingsController.prototype.AppBar = function (appBar) {
                    appBar.IsNewDisabled = true;
                    appBar.IsRefreshDisabled = false;
                    appBar.IsDeleteDisabled = true;
                    appBar.IsSaveDisabled = false;
                    appBar.IsCancelDisabled = false;
                };
                SettingsController.$inject = [
                    "$scope",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.sampleDataName
                ];
                return SettingsController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.settingsControllerName, SettingsController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
