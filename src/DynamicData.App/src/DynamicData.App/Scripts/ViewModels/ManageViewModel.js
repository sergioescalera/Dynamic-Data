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
        var ManageViewModel = /** @class */ (function (_super) {
            __extends(ManageViewModel, _super);
            function ManageViewModel(scope, location, mdDialog, appBarStatus, repository) {
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
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._repository = repository;
                _this.LoadTypes();
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                return _this;
            }
            ManageViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            ManageViewModel.prototype.PromptDelete = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".PromptDelete");
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Do you confirm that you want to delete the selected types?")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            ManageViewModel.prototype.Delete = function (e) {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Delete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                this._repository.BulkDelete(keys);
                this.LoadTypes();
            };
            ManageViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Refresh");
                this.LoadTypes();
            };
            ManageViewModel.prototype.Open = function (index) {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Open");
                var path = DynamicData.Config.Routes.type(this.Types[index].Name);
                this._location.url(path);
            };
            ManageViewModel.prototype.EnableDeletion = function () {
                var _this = this;
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                this._appBarStatus.IsDeleteDisabled = keys.length === 0;
            };
            ManageViewModel.prototype.LoadTypes = function () {
                this.Types = this._repository.GetAll();
                this.Selected = {};
            };
            return ManageViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.ManageViewModel = ManageViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=ManageViewModel.js.map