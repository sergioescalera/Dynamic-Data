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
        var DashboardViewModel = /** @class */ (function (_super) {
            __extends(DashboardViewModel, _super);
            function DashboardViewModel(scope, location, repository, sampleData, entityTypeName) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                _this._location = location;
                _this._repository = repository;
                _this._sampleData = sampleData;
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$watch("vm.SelectedIndex", _this.SelectedIndexChanged.bind(_this));
                _this.Init(entityTypeName);
                return _this;
            }
            DashboardViewModel.prototype.Init = function (entityTypeName) {
                this.Types = this._repository.GetAll();
                if (!entityTypeName && this.Settings.CurrentEntityType) {
                    this._location.url(DynamicData.Config.Routes.homeWithType(this.Settings.CurrentEntityType));
                }
                else if (entityTypeName) {
                    var filter = this.Types.filter(function (t) { return t.Name === entityTypeName; });
                    if (!filter.length) {
                        this._location.url(DynamicData.Config.Routes.home());
                    }
                    else {
                        this.SelectedIndex = this.Types.indexOf(filter[0]);
                    }
                }
                else {
                    this.SelectedIndex = 0;
                }
            };
            DashboardViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".Add");
                var type = this.Types[this.SelectedIndex];
                this._location.url(DynamicData.Config.Routes.entityCreate(type.Name));
            };
            DashboardViewModel.prototype.InstallSampleData = function () {
                var settings = DynamicData.Data.storage.Settings;
                this._sampleData.Install();
                if (!settings.IsSampleDataInstalled) {
                    settings.IsSampleDataInstalled = true;
                    DynamicData.Data.storage.Settings = settings;
                }
                this.Init();
            };
            DashboardViewModel.prototype.SelectedIndexChanged = function (newValue, oldValue) {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".SelectionChanged(" + newValue + ", " + oldValue + ")");
                if (newValue === oldValue) {
                    return;
                }
                if (newValue >= 0 && newValue < this.Types.length) {
                    var currentEntityType = this.Types[newValue].Name;
                    this.Settings.CurrentEntityType = currentEntityType;
                    DynamicData.Data.storage.Settings = this.Settings;
                    this._location.url(DynamicData.Config.Routes.homeWithType(currentEntityType));
                }
            };
            return DashboardViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.DashboardViewModel = DashboardViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
