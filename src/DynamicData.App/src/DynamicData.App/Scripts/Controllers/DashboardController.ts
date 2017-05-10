module DynamicData.UI.Controllers {

    "use strict";

    export interface IDashboardScope extends ng.IScope {
        vm: ViewModels.DashboardViewModel;
    }

    interface IDashboardRouteParamsService extends ng.route.IRouteParamsService {
        entityType?: string;
    }

    class DashboardController {

        static $inject = [
            "$scope",
            "$routeParams",
            "$location",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName,
            Data.sampleDataName
        ];

        constructor(
            scope: IDashboardScope,
            routeParams: IDashboardRouteParamsService,
            location: ng.ILocationService,
            appBarStatus: Core.IAppBarStatus,
            repository: Data.IEntityTypeRepository,
            sampleData: Data.ISampleData) {

            var entityType: string = routeParams.entityType;

            Core.Trace.Message(`${dashboardControllerName}.constructor ${entityType}`);

            scope.vm = new ViewModels.DashboardViewModel(
                scope,
                location,
                repository,
                sampleData,
                entityType);

            appBarStatus.Master();
        }
    }

    angular.module(Config.appName)
        .controller(dashboardControllerName, DashboardController);
}