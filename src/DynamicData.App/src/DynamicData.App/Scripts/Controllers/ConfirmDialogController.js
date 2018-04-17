var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ConfirmDialogController = /** @class */ (function () {
                function ConfirmDialogController(scope, mdPanelRef) {
                    scope.title = "Abc";
                    scope.message = "Xyz";
                    this._mdPanelRef = mdPanelRef;
                }
                ConfirmDialogController.$inject = [
                    "$scope"
                ];
                return ConfirmDialogController;
            }());
            Controllers.ConfirmDialogController = ConfirmDialogController;
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=ConfirmDialogController.js.map