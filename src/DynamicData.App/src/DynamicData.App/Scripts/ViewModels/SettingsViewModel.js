var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var SettingsViewModel = (function (_super) {
            __extends(SettingsViewModel, _super);
            function SettingsViewModel(scope, repository, sampleData) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _super.call(this);
                if (!repository.GetAll().length && this.Settings.IsSampleDataInstalled) {
                    this.Settings.IsSampleDataInstalled = false;
                }
                this._scope = scope;
                this._sampleData = sampleData;
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                scope.$watch("vm.Settings.IsSampleDataInstalled", this.IsSampleDataInstalledChanged.bind(this));
            }
            SettingsViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.settingsViewModelName + ".Cancel");
            };
            SettingsViewModel.prototype.IsSampleDataInstalledChanged = function (newValue, oldValue) {
                if (newValue === true && oldValue === false) {
                    this._installSampleData = true;
                }
            };
            SettingsViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.settingsViewModelName + ".Save");
                DynamicData.Data.storage.Settings = this.Settings;
                if (this._installSampleData) {
                    this._sampleData.Install();
                }
            };
            return SettingsViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.SettingsViewModel = SettingsViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
