module DynamicData.ViewModels {

    "use strict";

    export class TemplatesViewModel extends BaseViewModel {

        private _location: ng.ILocationService;
        private _mdDialog: ng.material.IDialogService;
        private _appBarStatus: Core.IAppBarStatus;
        private _entityTypeRepository: Data.IEntityTypeRepository;
        private _templateRepository: Data.ITemplateRepository;

        Types: Core.IEntityType[];
        EditTemplate: string;
        QuickViewTemplate: string;
        SelectedType: Core.IEntityType;

        constructor(
            scope: UI.Controllers.ITemplatesScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            appBarStatus: Core.IAppBarStatus,
            entityTypeRepository: Data.IEntityTypeRepository,
            templateRepository: Data.ITemplateRepository) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!mdDialog) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
            }

            if (!entityTypeRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
            }

            if (!templateRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
            }

            super();

            this._location = location;
            this._mdDialog = mdDialog;
            this._appBarStatus = appBarStatus;
            this._entityTypeRepository = entityTypeRepository;
            this._templateRepository = templateRepository;

            scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
            scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
            scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            scope.$on("AppBarScope::save", this.Save.bind(this));

            this.Init();
        }

        private Init(): void {

            this.Types = this._entityTypeRepository
                .GetAll()
                .sort((t1: Core.IEntityType, t2: Core.IEntityType) => t1.Name > t2.Name ? 1 : t1.Name < t2.Name ? -1 : 0);
        }

        Add(): void {

            Core.Trace.Message(`${templatesViewModelName}.Add`);

            this._location.url(Config.Routes.typeCreate());
        }

        SelectType(type: Core.IEntityType): void {

            this.SelectedType = !type ? null : type;
            this._appBarStatus.IsDeleteDisabled = !type ? true : false;
            this.LoadSelectedType();
        }

        Cancel(): void {

            Core.Trace.Message(`${templatesViewModelName}.Cancel`);

            this._location.url(Config.Routes.home());
        }

        PromptDelete(): void {

            Core.Trace.Message(`${templatesViewModelName}.PromptDelete`);

            if (!this.SelectedType) {
                return;
            }

            var confirm: ng.material.IConfirmDialog = this._mdDialog.confirm()
                .title("Confirmation")
                .textContent(`Are you sure you want to reset templates for ${this.SelectedType.Name}. This action cannot be undone.`)
                .ariaLabel("Delete Confirmation")
                .ok("Yes")
                .cancel("No");

            this._mdDialog
                .show(confirm)
                .then(this.Delete.bind(this))
                .catch(() => { });
        }

        Delete(e: any): void {

            Core.Trace.Message(`${templatesViewModelName}.Delete`);

            this._templateRepository.Delete(this.SelectedType.Name);

            this.LoadSelectedType();
        }

        Refresh(): void {

            Core.Trace.Message(`${templatesViewModelName}.Refresh`);

            this.SelectedType = null;
            this.Init();
        }

        Save(): void {

            Core.Trace.Message(`${templatesViewModelName}.Save`);

            this._templateRepository.Save(this.SelectedType.Name, {
                edit: this.EditTemplate,
                quickView: this.QuickViewTemplate
            });

            this.Init();
        }

        private LoadSelectedType(): void {

            if (!this.SelectedType) {
                this.QuickViewTemplate = "";
                this.EditTemplate = "";
            }

            this._templateRepository
                .GetByName(this.SelectedType.Name)
                .then(((template: Core.IEntityTemplate) => {

                    this.EditTemplate = template.edit;
                    this.QuickViewTemplate = template.quickView;

                }).bind(this))
                .catch((() => {

                    this.EditTemplate = "Unable to retrieve template";
                    this.QuickViewTemplate = "Unable to retrieve template";

                }).bind(this));
        }
    }
}