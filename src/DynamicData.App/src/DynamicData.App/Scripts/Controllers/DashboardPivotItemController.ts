module DynamicData.UI.Controllers {

    "use strict";

    export interface IDashboardPivotItemScope extends ng.IScope {
        vm: ViewModels.DashboardPivotItemViewModel;
        type: Core.EntityType;
    }

    class DashboardPivotItemController {

        static $inject = [
            "$scope",
            "$location",
            "$mdDialog",
            Data.entityRepositoryName,
            Data.entityTypeSettingsRepositoryName
        ];

        constructor(
            scope: IDashboardPivotItemScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            entityRepository: Data.IEntityRepository,
            entityTypeSettingsRepository: Data.IEntityTypeSettingsRepository) {

            Core.Trace.Message(`${dashboardPivotItemControllerName}.constructor`);

            scope.vm = new ViewModels.DashboardPivotItemViewModel(
                scope,
                location,
                mdDialog,
                entityRepository,
                entityTypeSettingsRepository,
                scope.type);
        }
    }

    angular.module(Config.appName)
        .controller(dashboardPivotItemControllerName, DashboardPivotItemController);
}