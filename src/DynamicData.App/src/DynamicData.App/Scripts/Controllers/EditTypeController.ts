module DynamicData.UI.Controllers {

    "use strict";

    export interface IEditTypeScope extends ng.IScope {
        vm: ViewModels.EditTypeViewModel;
        TypeForm: ng.IFormController;
    }

    interface IEditTypeRouteParamsService extends ng.route.IRouteParamsService {
        entityType?: string;
    }

    class EditTypeController {

        static $inject = [
            "$scope",
            "$routeParams",
            "$location",
            "$mdToast",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName
        ];

        constructor(
            scope: IEditTypeScope,
            routeParams: IEditTypeRouteParamsService,
            location: ng.ILocationService,
            mdToast: ng.material.IToastService,
            appBarStatus: Core.IAppBarStatus,
            repository: Data.IEntityTypeRepository) {

            Core.Trace.Message(`${editTypeControllerName}.constructor`);

            var type: string = routeParams.entityType;

            scope.vm = new ViewModels.EditTypeViewModel(scope, location, mdToast, appBarStatus, repository, type);
        }
    }

    angular.module(Config.appName)
        .controller(editTypeControllerName, EditTypeController);
}