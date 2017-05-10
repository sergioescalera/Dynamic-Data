module DynamicData.UI.Controllers {

    "use strict";

    export interface ISettingsScope extends ng.IScope {
        vm: ViewModels.SettingsViewModel;
        SettingsForm: ng.IFormController;
    }

    class SettingsController {

        static $inject = [
            "$scope",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName,
            Data.sampleDataName
        ];

        constructor(scope: ISettingsScope,
            appBarStatus: Core.IAppBarStatus,
            repository: Data.IEntityTypeRepository,
            sampleData: Data.ISampleData) {

            Core.Trace.Message(`${settingsControllerName}.constructor`);

            scope.vm = new ViewModels.SettingsViewModel(scope, repository, sampleData);

            this.AppBar(appBarStatus);
        }

        AppBar(appBar: Core.IAppBarStatus): void {

            appBar.IsNewDisabled = true;
            appBar.IsRefreshDisabled = false;
            appBar.IsDeleteDisabled = true;
            appBar.IsSaveDisabled = false;
            appBar.IsCancelDisabled = false;
        }
    }

    angular.module(Config.appName)
        .controller(settingsControllerName, SettingsController);
}