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
        var DashboardPivotItemViewModel = /** @class */ (function (_super) {
            __extends(DashboardPivotItemViewModel, _super);
            function DashboardPivotItemViewModel(scope, location, mdDialog, appBarStatus, entityRepository, entityTypeSettingsRepository, type) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!entityTypeSettingsRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeSettingsRepository"));
                }
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                _this = _super.call(this) || this;
                appBarStatus.Master();
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                _this._scope = scope;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._entityRepository = entityRepository;
                _this._entityTypeSettingsRepository = entityTypeSettingsRepository;
                _this.Type = type;
                _this.Init();
                scope.$watch("vm.TypeSettings.SortBy", _this.Sort.bind(_this));
                scope.$watch("vm.TypeSettings.SortByDescending", _this.Sort.bind(_this));
                return _this;
            }
            DashboardPivotItemViewModel.prototype.Init = function () {
                this.Selected = {};
                this.SortByOptions = this.Type.Attributes.sort(function (a, b) {
                    if (a.Name < b.Name) {
                        return -1;
                    }
                    if (a.Name > b.Name) {
                        return 1;
                    }
                    return 0;
                });
                this.TypeSettings = { SortBy: "", SortByDescending: false };
                this._entityTypeSettingsRepository
                    .GetByName(this.Type.Name)
                    .then(this.SetSettings.bind(this))
                    .then(this.Sort.bind(this));
            };
            DashboardPivotItemViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.entityCreate(this.Type.Name));
            };
            DashboardPivotItemViewModel.prototype.Open = function (index) {
                this._location.url(DynamicData.Config.Routes.entity(this.Type.Name, index.toString()));
            };
            DashboardPivotItemViewModel.prototype.PromptDelete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.dashboardPivotItemViewModelName + ".PromptDelete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                if (keys.length === 0) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Are you sure you want to delete the selected " + this.Type.DisplayPluralName + "? This action cannot be undone.")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            DashboardPivotItemViewModel.prototype.Delete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.dashboardPivotItemViewModelName + ".Delete");
                var indexes = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; })
                    .map(function (k) { return parseInt(k); });
                this._entityRepository.BulkDelete(this.Type, indexes);
                this.Init();
            };
            DashboardPivotItemViewModel.prototype.Sort = function () {
                var _this = this;
                var array = this._entityRepository.GetByType(this.Type);
                var sortBy = this.TypeSettings.SortBy;
                var asc = this.TypeSettings.SortByDescending ? -1 : 1;
                if (!!sortBy) {
                    array = array.sort(function (e1, e2) {
                        var v1 = _this.DefaultIfNotDefined(e1, sortBy);
                        var v2 = _this.DefaultIfNotDefined(e2, sortBy);
                        if (v1 < v2) {
                            return -1 * asc;
                        }
                        if (v1 > v2) {
                            return 1 * asc;
                        }
                        return 0;
                    });
                }
                this.Entities = array;
                this._entityTypeSettingsRepository.Save(this.Type.Name, this.TypeSettings);
            };
            DashboardPivotItemViewModel.prototype.EnableDeletion = function () {
                var _this = this;
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                this._appBarStatus.IsDeleteDisabled = keys.length === 0;
            };
            DashboardPivotItemViewModel.prototype.SetSettings = function (value) {
                this.TypeSettings = value;
            };
            DashboardPivotItemViewModel.prototype.DefaultIfNotDefined = function (entity, fieldName) {
                var attribute = this.Type
                    .Attributes
                    .filter(function (o) { return o.Name === fieldName; });
                var isString = attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Email
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Phone
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.String
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Text
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Url;
                var value = entity.Fields[fieldName];
                var dfault = isString ? "" : null;
                return angular.isDefined(value) ? value : dfault;
            };
            return DashboardPivotItemViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.DashboardPivotItemViewModel = DashboardPivotItemViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=DashboardPivotItemViewModel.js.map