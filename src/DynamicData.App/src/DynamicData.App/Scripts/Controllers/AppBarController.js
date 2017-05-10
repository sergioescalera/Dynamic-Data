var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var AppBarController = (function () {
                function AppBarController(scope, rootScope, location, status) {
                    scope.fire = this.Fire.bind(this);
                    scope.goTo = this.GoTo.bind(this);
                    scope.status = status;
                    this._rootScope = rootScope;
                    this._location = location;
                }
                AppBarController.prototype.Fire = function (cmdName) {
                    DynamicData.Core.Trace.Message(Controllers.appBarControllerName + ".Fire(" + cmdName + ")");
                    this._rootScope.$broadcast("AppBarScope::" + cmdName);
                };
                AppBarController.prototype.GoTo = function (url) {
                    DynamicData.Core.Trace.Message(Controllers.appBarControllerName + ".GoTo(" + url + ")");
                    var event = this._rootScope.$broadcast("AppBarScope::goTo");
                    if (event.defaultPrevented) {
                        return;
                    }
                    this._location.url(url);
                };
                AppBarController.$inject = [
                    "$scope",
                    "$rootScope",
                    "$location",
                    DynamicData.Core.appBarStatusName
                ];
                return AppBarController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.appBarControllerName, AppBarController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
