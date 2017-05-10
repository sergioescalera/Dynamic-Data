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
        var ManageViewModel = (function (_super) {
            __extends(ManageViewModel, _super);
            function ManageViewModel(scope, location, mdDialog, repository) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                _super.call(this);
                this._scope = scope;
                this._location = location;
                this._mdDialog = mdDialog;
                this._repository = repository;
                this.LoadTypes();
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            }
            ManageViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            ManageViewModel.prototype.PromptDelete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".PromptDelete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                if (keys.length === 0) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Would you like to delete the selected types?")
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
            ManageViewModel.prototype.LoadTypes = function () {
                this.Types = this._repository.GetAll();
                this.Selected = {};
            };
            return ManageViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.ManageViewModel = ManageViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
