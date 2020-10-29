module DynamicData.UI.Controllers {

    "use strict";

    export interface ITemplatesScope extends ng.IScope {
        vm: ViewModels.TemplatesViewModel;
    }

    class TemplatesController {

        static $inject = [
            "$scope",
            "$location",
            "$mdDialog",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName,
            Data.templateRepositoryName
        ];

        constructor(
            scope: ITemplatesScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            appBarStatus: Core.IAppBarStatus,
            entityTypeRepository: Data.IEntityTypeRepository,
            templateRepository: Data.ITemplateRepository) {

            scope.vm = new ViewModels.TemplatesViewModel(
                scope,
                location,
                mdDialog,
                appBarStatus,
                entityTypeRepository,
                templateRepository);

            appBarStatus.Detail();
            appBarStatus.IsNewDisabled = true;
            appBarStatus.IsDeleteDisabled = true;
        }
    }

    angular.module(Config.appName)
        .controller(templatesControllerName, TemplatesController);
}