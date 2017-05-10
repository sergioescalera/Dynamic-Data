module DynamicData.ViewModels {

    "use strict";

    export class ManageViewModel extends BaseViewModel {

        private _scope: UI.Controllers.IManageScope;
        private _location: ng.ILocationService;
        private _mdDialog: ng.material.IDialogService;
        private _repository: Data.IEntityTypeRepository;

        Types: Core.IEntityType[];
        Selected: any;

        constructor(
            scope: UI.Controllers.IManageScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            repository: Data.IEntityTypeRepository) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!mdDialog) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
            }

            if (!repository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("repository"));
            }

            super();

            this._scope = scope;
            this._location = location;
            this._mdDialog = mdDialog;
            this._repository = repository;

            this.LoadTypes();

            scope.$on("AppBarScope::add", this.Add.bind(this));
            scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
            scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
        }

        Add(): void {

            Core.Trace.Message(`${manageViewModelName}.Add`);

            this._location.url(Config.Routes.typeCreate());
        }

        PromptDelete(): void {

            Core.Trace.Message(`${manageViewModelName}.PromptDelete`);

            var keys: string[] = Object
                .keys(this.Selected)
                .filter((k: string) => !!this.Selected[k]);

            if (keys.length === 0) {
                return;
            }

            var confirm: angular.material.IConfirmDialog = this._mdDialog.confirm()
                .title("Confirmation")
                .textContent("Would you like to delete the selected types?")
                .ariaLabel("Delete Confirmation")
                .ok("Yes")
                .cancel("No");

            this._mdDialog
                .show(confirm)
                .then(this.Delete.bind(this))
                .catch(() => { });
        }

        Delete(e: any): void {

            Core.Trace.Message(`${manageViewModelName}.Delete`);

            var keys: string[] = Object
                .keys(this.Selected)
                .filter((k: string) => !!this.Selected[k]);

            this._repository.BulkDelete(keys);

            this.LoadTypes();
        }

        Refresh(): void {

            Core.Trace.Message(`${manageViewModelName}.Refresh`);

            this.LoadTypes();
        }

        Open(index: number): void {

            Core.Trace.Message(`${manageViewModelName}.Open`);

            var path: string = Config.Routes.type(this.Types[index].Name);

            this._location.url(path);
        }

        private LoadTypes(): void {

            this.Types = this._repository.GetAll();
            this.Selected = {};
        }
    }
}