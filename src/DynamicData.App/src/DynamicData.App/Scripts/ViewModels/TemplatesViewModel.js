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
        var TemplatesViewModel = (function (_super) {
            __extends(TemplatesViewModel, _super);
            function TemplatesViewModel(scope, location, mdDialog, entityTypeRepository, templateRepository) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!templateRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
                }
                _super.call(this);
                this._location = location;
                this._mdDialog = mdDialog;
                this._entityTypeRepository = entityTypeRepository;
                this._templateRepository = templateRepository;
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                this.Init();
            }
            TemplatesViewModel.prototype.Init = function () {
                this.Types = this._entityTypeRepository
                    .GetAll()
                    .sort(function (t1, t2) { return t1.Name > t2.Name ? 1 : t1.Name < t2.Name ? -1 : 0; });
            };
            TemplatesViewModel.prototype.SelectType = function (type) {
                this.SelectedType = !type ? null : type;
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
