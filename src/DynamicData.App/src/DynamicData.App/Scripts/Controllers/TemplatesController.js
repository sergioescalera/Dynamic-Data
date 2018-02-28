var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var TemplatesController = /** @class */ (function () {
                function TemplatesController(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository) {
                    scope.vm = new DynamicData.ViewModels.TemplatesViewModel(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository);
                    appBarStatus.Detail();
                    appBarStatus.IsNewDisabled = true;
                    appBarStatus.IsDeleteDisabled = true;
                }
                TemplatesController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.templateRepositoryName
                ];
                return TemplatesController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.templatesControllerName, TemplatesController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
