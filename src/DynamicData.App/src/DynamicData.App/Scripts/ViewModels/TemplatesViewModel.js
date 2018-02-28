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
        var TemplatesViewModel = /** @class */ (function (_super) {
            __extends(TemplatesViewModel, _super);
            function TemplatesViewModel(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository) {
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
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!templateRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
                }
                _this = _super.call(this) || this;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._entityTypeRepository = entityTypeRepository;
                _this._templateRepository = templateRepository;
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                _this.Init();
                return _this;
            }
            TemplatesViewModel.prototype.Init = function () {
                this.Types = this._entityTypeRepository
                    .GetAll()
                    .sort(function (t1, t2) { return t1.Name > t2.Name ? 1 : t1.Name < t2.Name ? -1 : 0; });
            };
            TemplatesViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            TemplatesViewModel.prototype.SelectType = function (type) {
                this.SelectedType = !type ? null : type;
                this._appBarStatus.IsDeleteDisabled = !type ? true : false;
                this.LoadSelectedType();
            };
            TemplatesViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.home());
            };
            TemplatesViewModel.prototype.PromptDelete = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".PromptDelete");
                if (!this.SelectedType) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Are you sure you want to reset templates for " + this.SelectedType.Name + ". This action cannot be undone.")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            TemplatesViewModel.prototype.Delete = function (e) {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Delete");
                this._templateRepository.Delete(this.SelectedType.Name);
                this.LoadSelectedType();
            };
            TemplatesViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Refresh");
                this.SelectedType = null;
                this.Init();
            };
            TemplatesViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Save");
                this._templateRepository.Save(this.SelectedType.Name, {
                    edit: this.EditTemplate,
                    quickView: this.QuickViewTemplate
                });
                this.Init();
            };
            TemplatesViewModel.prototype.LoadSelectedType = function () {
                var _this = this;
                if (!this.SelectedType) {
                    this.QuickViewTemplate = "";
                    this.EditTemplate = "";
                }
                this._templateRepository
                    .GetByName(this.SelectedType.Name)
                    .then((function (template) {
                    _this.EditTemplate = template.edit;
                    _this.QuickViewTemplate = template.quickView;
                }).bind(this))
                    .catch((function () {
                    _this.EditTemplate = "Unable to retrieve template";
                    _this.QuickViewTemplate = "Unable to retrieve template";
                }).bind(this));
            };
            return TemplatesViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.TemplatesViewModel = TemplatesViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
