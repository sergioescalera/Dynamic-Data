module DynamicData.ViewModels {

    "use strict";

    export class SettingsViewModel extends BaseViewModel {

        private _scope: UI.Controllers.ISettingsScope;
        private _sampleData: Data.ISampleData;
        private _installSampleData: boolean;

        constructor(scope: UI.Controllers.ISettingsScope,
            repository: Data.IEntityTypeRepository,
            sampleData: Data.ISampleData) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!repository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("repository"));
            }

            if (!sampleData) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
            }

            super();

            if (!repository.GetAll().length && this.Settings.IsSampleDataInstalled) {

                this.Settings.IsSampleDataInstalled = false;
            }

            this._scope = scope;
            this._sampleData = sampleData;

            scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
            scope.$on("AppBarScope::save", this.Save.bind(this));
            scope.$watch("vm.Settings.IsSampleDataInstalled", this.IsSampleDataInstalledChanged.bind(this));
        }

        Cancel(): void {

            Core.Trace.Message(`${settingsViewModelName}.Cancel`);
        }

        IsSampleDataInstalledChanged(newValue: boolean, oldValue: boolean): void {

            if (newValue === true && oldValue === false) {

                this._installSampleData = true;
            }
        }

        Save(): void {

            Core.Trace.Message(`${settingsViewModelName}.Save`);

            Data.storage.Settings = this.Settings;

            if (this._installSampleData) {
                this._sampleData.Install();
            }
        }
    }
}