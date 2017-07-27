module DynamicData.UI.Controllers {

    "use strict";

    export interface IManageScope extends ng.IScope {
        vm: ViewModels.ManageViewModel;
    }

    class ManageController {

        static $inject = [
            "$scope",
            "$location",
            "$mdDialog",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName
        ];

        constructor(
            scope: IManageScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            appBarStatus: Core.IAppBarStatus,
            repository: Data.IEntityTypeRepository) {

            Core.Trace.Message(`${manageControllerName}.constructor`);

            scope.vm = new ViewModels.ManageViewModel(scope, location, mdDialog, appBarStatus, repository);

            appBarStatus.Master();

        }

    }

    angular.module(Config.appName)
        .controller(manageControllerName, ManageController);
}