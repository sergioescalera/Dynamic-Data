var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var SettingsViewModel = /** @class */ (function (_super) {
            __extends(SettingsViewModel, _super);
            function SettingsViewModel(scope, repository, sampleData) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _this = _super.call(this) || this;
                if (!repository.GetAll().length && _this.Settings.IsSampleDataInstalled) {
                    _this.Settings.IsSampleDataInstalled = false;
                }
                _this._scope = scope;
                _this._sampleData = sampleData;
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                scope.$watch("vm.Settings.IsSampleDataInstalled", _this.IsSampleDataInstalledChanged.bind(_this));
                return _this;
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
//# sourceMappingURL=SettingsViewModel.js.map