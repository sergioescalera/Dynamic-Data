var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EditEnumController = /** @class */ (function () {
                function EditEnumController(scope, mdDialog, enumRepository, name) {
                    scope.vm = new DynamicData.ViewModels.EditEnumViewModel(scope, mdDialog, enumRepository, name);
                }
                EditEnumController.$inject = [
                    "$scope",
                    "$mdDialog",
                    DynamicData.Data.enumRepositoryName,
                    "name"
                ];
                return EditEnumController;
            }());
            Controllers.EditEnumController = EditEnumController;
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=EditEnumController.js.map