var DynamicData;
(function (DynamicData) {
    var Config;
    (function (Config) {
        "use strict";
        var RouteParameters = /** @class */ (function () {
            function RouteParameters() {
            }
            RouteParameters.entityType = ":entityType";
            RouteParameters.entityId = ":entityId";
            return RouteParameters;
        }());
        Config.RouteParameters = RouteParameters;
        var Routes = /** @class */ (function () {
            function Routes() {
            }
            Routes.home = function () { return "/home"; };
            Routes.homeWithType = function (entityType) {
                var route = "/home/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.profile = function () { return "/profile"; };
            Routes.settings = function () { return "/settings"; };
            Routes.manage = function () { return "/manage"; };
            Routes.typeCreate = function () { return "/type"; };
            Routes.type = function (entityType) { return "/type/" + entityType; };
            Routes.entityCreate = function (entityType) { return "/entity/" + entityType; };
            Routes.entity = function (entityType, entityId) { return "/entity/" + entityType + "/" + entityId; };
            Routes.templates = function () { return "/templates"; };
            return Routes;
        }());
        Config.Routes = Routes;
        Config.appName = DynamicData.namespace + ".App";
        var module = angular.module(Config.appName, [
            "ngRoute",
            "ngResource",
            "ngMaterial",
            "ngMessages",
            "ngSanitize"
        ]);
        function init($routeProvider, $compileProvider) {
            DynamicData.Core.Trace.Message(Config.namespace + ".init");
            $compileProvider.preAssignBindingsEnabled(true);
            $routeProvider
                .when(Routes.home(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html?v=" + app_version
            })
                .when(Routes.homeWithType(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html?v=" + app_version
            })
                .when(Routes.profile(), {
                controller: DynamicData.UI.Controllers.profileControllerName,
                templateUrl: "html/Profile.html?v=" + app_version
            })
                .when(Routes.settings(), {
                controller: DynamicData.UI.Controllers.settingsControllerName,
                templateUrl: "html/Settings.html?v=" + app_version
            })
                .when(Routes.manage(), {
                controller: DynamicData.UI.Controllers.manageControllerName,
                templateUrl: "html/Manage.html?v=" + app_version
            })
                .when(Routes.typeCreate(), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html?v=" + app_version
            })
                .when(Routes.type(RouteParameters.entityType), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html?v=" + app_version
            })
                .when(Routes.entityCreate(RouteParameters.entityType), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html?v=" + app_version
            })
                .when(Routes.entity(RouteParameters.entityType, RouteParameters.entityId), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html?v=" + app_version
            })
                .when(Routes.templates(), {
                controller: DynamicData.UI.Controllers.templatesControllerName,
                templateUrl: "html/Templates.html?v=" + app_version
            })
                .otherwise({
                redirectTo: Routes.home
            });
        }
        module.config(init);
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=Config.js.map