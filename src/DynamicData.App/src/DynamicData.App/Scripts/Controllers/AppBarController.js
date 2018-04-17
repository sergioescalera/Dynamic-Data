var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var AppBarController = /** @class */ (function () {
                function AppBarController(scope, rootScope, location, mdSidenav, status) {
                    var _this = this;
                    scope.fire = this.Fire.bind(this);
                    scope.goTo = this.GoTo.bind(this);
                    scope.toggleSidenav = this.ToggleSidenav.bind(this);
                    scope.status = status;
                    this._rootScope = rootScope;
                    this._location = location;
                    this._mdSidenav = mdSidenav;
                    scope.$on("$routeChangeSuccess", function () {
                        _this._mdSidenav("sidenav").close();
                    });
                }
                AppBarController.prototype.$onInit = function () {
                };
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
                AppBarController.prototype.ToggleSidenav = function () {
                    this._mdSidenav("sidenav").toggle();
                };
                AppBarController.$inject = [
                    "$scope",
                    "$rootScope",
                    "$location",
                    "$mdSidenav",
                    DynamicData.Core.appBarStatusName
                ];
                return AppBarController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.appBarControllerName, AppBarController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=AppBarController.js.map