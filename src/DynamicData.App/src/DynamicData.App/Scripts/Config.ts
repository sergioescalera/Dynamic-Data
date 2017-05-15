module DynamicData.Config {

    "use strict";

    export class RouteParameters {

        static entityType = ":entityType";
        static entityId = ":entityId";
    }

    export class Routes {

        static home = () => "/home";

        static homeWithType = (entityType?: string) => {

            var route: string = `/home/${RouteParameters.entityType}`;

            if (!angular.isUndefined(entityType)) {
                route = route.replace(Config.RouteParameters.entityType, entityType);
            }

            return route;
        };

        static profile = () => "/profile";

        static settings = () => "/settings";

        static manage = () => "/manage";

        static typeCreate = () => "/type";

        static type = (entityType?: string) => {

            var route: string = `/type/${RouteParameters.entityType}`;

            if (!angular.isUndefined(entityType)) {

                route = route.replace(Config.RouteParameters.entityType, entityType);
            }

            return route;
        };

        static entityCreate = (entityType?: string) => {

            var route: string = `/entity/${RouteParameters.entityType}`;

            if (!angular.isUndefined(entityType)) {

                route = route.replace(Config.RouteParameters.entityType, entityType);
            }

            return route;
        };

        static entity = (entityType?: string, entityId?: string) => {

            var route: string = `/entity/${RouteParameters.entityType}/${RouteParameters.entityId}`;

            if (!angular.isUndefined(entityType)) {
                route = route.replace(Config.RouteParameters.entityType, entityType);
            }

            if (!angular.isUndefined(entityId)) {

                route = route.replace(Config.RouteParameters.entityId, entityId);
            }

            return route;
        };

        static templates = () => "/templates";
    }

    export var appName: string = `${DynamicData.namespace}.App`;

    var module: ng.IModule = angular.module(appName, [
        "ngRoute",
        "ngResource",
        "ngMaterial",
        "ngMessages",
        "ngSanitize"
    ]);

    function init($routeProvider: any, $compileProvider: any): void {

        Core.Trace.Message(`${namespace}.init`);

        $compileProvider.preAssignBindingsEnabled(true);

        $routeProvider
            .when(Routes.home(), {
                controller: UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
            .when(Routes.homeWithType(), {
                controller: UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
            .when(Routes.profile(), {
                controller: UI.Controllers.profileControllerName,
                templateUrl: "html/Profile.html"
            })
            .when(Routes.settings(), {
                controller: UI.Controllers.settingsControllerName,
                templateUrl: "html/Settings.html"
            })
            .when(Routes.manage(), {
                controller: UI.Controllers.manageControllerName,
                templateUrl: "html/Manage.html"
            })
            .when(Routes.typeCreate(), {
                controller: UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
            .when(Routes.type(), {
                controller: UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
            .when(Routes.entityCreate(), {
                controller: UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
            .when(Routes.entity(), {
                controller: UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
            .when(Routes.templates(), {
                controller: UI.Controllers.templatesControllerName,
                templateUrl: "html/Templates.html"
            })
            .otherwise({
                redirectTo: Routes.home
            });
    }

    module.config(init);
}