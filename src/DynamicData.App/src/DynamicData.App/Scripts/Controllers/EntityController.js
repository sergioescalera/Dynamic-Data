var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EntityController = (function () {
                function EntityController(scope, routeParams, location, appBarStatus, entityTypeRepository, entityRepository) {
                    DynamicData.Core.Trace.Message(Controllers.entityControllerName + ".constructor");
                    var type = routeParams.entityType;
                    var id = routeParams.entityId ? parseInt(routeParams.entityId) : null;
                    scope.vm = new DynamicData.ViewModels.EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, type, id);
                }
                EntityController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.entityRepositoryName
                ];
                return EntityController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.entityControllerName, EntityController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
