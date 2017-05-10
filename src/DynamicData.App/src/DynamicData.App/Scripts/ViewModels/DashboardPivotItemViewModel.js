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
        var DashboardPivotItemViewModel = (function (_super) {
            __extends(DashboardPivotItemViewModel, _super);
            function DashboardPivotItemViewModel(scope, location, mdDialog, entityRepository, entityTypeSettingsRepository, type) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
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
                _super.call(this);
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                this._scope = scope;
                this._location = location;
                this._mdDialog = mdDialog;
                this._entityRepository = entityRepository;
                this._entityTypeSettingsRepository = entityTypeSettingsRepository;
                this.Type = type;
                this.Init();
                scope.$watch("vm.TypeSettings.SortBy", this.Sort.bind(this));
                scope.$watch("vm.TypeSettings.SortByDescending", this.Sort.bind(this));
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
