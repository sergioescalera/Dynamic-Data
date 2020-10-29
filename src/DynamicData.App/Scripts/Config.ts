declare var app_version: string;
declare var user_name: string;
declare var user_email: string;

module DynamicData.Config {

    "use strict";

    export class RouteParameters {

        static entityType: string = ":entityType";
        static entityId: string = ":entityId";
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

        static type = (entityType: string) => `/type/${entityType}`;

        static entityCreate = (entityType: string) => `/entity/${entityType}`;

        static entity = (entityType: string, entityId: string) => `/entity/${entityType}/${entityId}`;

        static templates = () => "/templates";
    }

    export var appName: string = `${DynamicData.namespace}.App`;

    var module = angular.module(appName, [
        "ngRoute",
        "ngResource",
        "ngMaterial",
        "ngMessages",
        "ngSanitize"
    ]);

    function init($routeProvider: any, $compileProvider: any): void {

        Core.Trace.Message(`${namespace}.init`);

        $routeProvider
            .when(Routes.home(), {
                controller: UI.Controllers.dashboardControllerName,
                templateUrl: `html/Dashboard.html?v=${app_version}`
            })
            .when(Routes.homeWithType(), {
                controller: UI.Controllers.dashboardControllerName,
                templateUrl: `html/Dashboard.html?v=${app_version}`
            })
            .when(Routes.profile(), {
                controller: UI.Controllers.profileControllerName,
                templateUrl: `html/Profile.html?v=${app_version}`
            })
            .when(Routes.settings(), {
                controller: UI.Controllers.settingsControllerName,
                templateUrl: `html/Settings.html?v=${app_version}`
            })
            .when(Routes.manage(), {
                controller: UI.Controllers.manageControllerName,
                templateUrl: `html/Manage.html?v=${app_version}`
            })
            .when(Routes.typeCreate(), {
                controller: UI.Controllers.editTypeControllerName,
                templateUrl: `html/EditType.html?v=${app_version}`
            })
            .when(Routes.type(RouteParameters.entityType), {
                controller: UI.Controllers.editTypeControllerName,
                templateUrl: `html/EditType.html?v=${app_version}`
            })
            .when(Routes.entityCreate(RouteParameters.entityType), {
                controller: UI.Controllers.entityControllerName,
                templateUrl: `html/Entity.html?v=${app_version}`
            })
            .when(Routes.entity(RouteParameters.entityType, RouteParameters.entityId), {
                controller: UI.Controllers.entityControllerName,
                templateUrl: `html/Entity.html?v=${app_version}`
            })
            .when(Routes.templates(), {
                controller: UI.Controllers.templatesControllerName,
                templateUrl: `html/Templates.html?v=${app_version}`
            })
            .otherwise({
                redirectTo: Routes.home
            });
    }

    module.config(init);
}