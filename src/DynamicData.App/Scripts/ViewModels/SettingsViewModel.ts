module DynamicData.ViewModels {

    "use strict";

    export class SettingsViewModel extends BaseViewModel {

        private _scope: UI.Controllers.ISettingsScope;
        private _sampleData: Data.ISampleData;
        
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

            this._scope = scope;
            this._sampleData = sampleData;

            scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
            scope.$on("AppBarScope::save", this.Save.bind(this));
        }

        Cancel(): void {

            Core.Trace.Message(`${settingsViewModelName}.Cancel`);
        }

        InstallSampleData(): void {

            var settings: Core.ISettings = Data.storage.Settings;

            this._sampleData.Install();
        }

        Save(): void {

            Core.Trace.Message(`${settingsViewModelName}.Save`);

            Data.storage.Settings = this.Settings;
        }
    }
}