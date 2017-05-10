var DynamicData;
(function (DynamicData) {
    var Config;
    (function (Config) {
        "use strict";
        var RouteParameters = (function () {
            function RouteParameters() {
            }
            RouteParameters.entityType = ":entityType";
            RouteParameters.entityId = ":entityId";
            return RouteParameters;
        }());
        Config.RouteParameters = RouteParameters;
        var Routes = (function () {
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
            Routes.type = function (entityType) {
                var route = "/type/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.entityCreate = function (entityType) {
                var route = "/entity/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.entity = function (entityType, entityId) {
                var route = "/entity/" + RouteParameters.entityType + "/" + RouteParameters.entityId;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                if (!angular.isUndefined(entityId)) {
                    route = route.replace(Config.RouteParameters.entityId, entityId);
                }
                return route;
            };
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
        module.config(function init($routeProvider /*ng.route.IRouteProvider*/) {
            DynamicData.Core.Trace.Message(Config.namespace + ".init");
            $routeProvider
                .when(Routes.home(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
                .when(Routes.homeWithType(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
                .when(Routes.profile(), {
                controller: DynamicData.UI.Controllers.profileControllerName,
                templateUrl: "html/Profile.html"
            })
                .when(Routes.settings(), {
                controller: DynamicData.UI.Controllers.settingsControllerName,
                templateUrl: "html/Settings.html"
            })
                .when(Routes.manage(), {
                controller: DynamicData.UI.Controllers.manageControllerName,
                templateUrl: "html/Manage.html"
            })
                .when(Routes.typeCreate(), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
                .when(Routes.type(), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
                .when(Routes.entityCreate(), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
                .when(Routes.entity(), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
                .when(Routes.templates(), {
                controller: DynamicData.UI.Controllers.templatesControllerName,
                templateUrl: "html/Templates.html"
            })
                .otherwise({
                redirectTo: Routes.home
            });
        });
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));
