module DynamicData.ViewModels {

    "use strict";

    export class DashboardPivotItemViewModel extends BaseViewModel {

        private _scope: UI.Controllers.IDashboardPivotItemScope;
        private _location: ng.ILocationService;
        private _mdDialog: ng.material.IDialogService;
        private _appBarStatus: Core.IAppBarStatus;
        private _entityRepository: Data.IEntityRepository;
        private _entityTypeSettingsRepository: Data.IEntityTypeSettingsRepository;

        Entities: Core.IEntity[];
        Type: Core.IEntityType;
        Selected: any;
        SortByOptions: Core.IAttributeType[];
        TypeSettings: Core.IEntityTypeSettings;

        constructor(
            scope: UI.Controllers.IDashboardPivotItemScope,
            location: ng.ILocationService,
            mdDialog: ng.material.IDialogService,
            appBarStatus: Core.IAppBarStatus,
            entityRepository: Data.IEntityRepository,
            entityTypeSettingsRepository: Data.IEntityTypeSettingsRepository,
            type: Core.IEntityType) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!mdDialog) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
            }

            if (!appBarStatus) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
            }

            if (!entityRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("repository"));
            }

            if (!entityTypeSettingsRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeSettingsRepository"));
            }

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            super();

            appBarStatus.Master();

            scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));

            this._scope = scope;
            this._location = location;
            this._mdDialog = mdDialog;
            this._appBarStatus = appBarStatus;
            this._entityRepository = entityRepository;
            this._entityTypeSettingsRepository = entityTypeSettingsRepository;

            this.Type = type;

            this.Init();

            scope.$watch("vm.TypeSettings.SortBy", this.Sort.bind(this));
            scope.$watch("vm.TypeSettings.SortByDescending", this.Sort.bind(this));
        }

        private Init(): void {

            this.Selected = {};
            this.SortByOptions = this.Type.Attributes.sort((a: Core.IAttributeType, b: Core.IAttributeType) => {

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
        }

        Add(): void {

            Core.Trace.Message(`${dashboardViewModelName}.Add`);

            this._location.url(Config.Routes.entityCreate(this.Type.Name));
        }

        Open(index: number): void {

            this._location.url(Config.Routes.entity(this.Type.Name, index.toString()));
        }

        PromptDelete(): void {

            Core.Trace.Message(`${dashboardPivotItemViewModelName}.PromptDelete`);

            var keys: string[] = Object
                .keys(this.Selected)
                .filter((k: string) => !!this.Selected[k]);

            if (keys.length === 0) {
                return;
            }

            var confirm: ng.material.IConfirmDialog = this._mdDialog.confirm()
                .title("Confirmation")
                .textContent(`Are you sure you want to delete the selected ${this.Type.DisplayPluralName}? This action cannot be undone.`)
                .ariaLabel("Delete Confirmation")
                .ok("Yes")
                .cancel("No");

            this._mdDialog
                .show(confirm)
                .then(this.Delete.bind(this))
                .catch(() => { });
        }

        Delete(): void {

            Core.Trace.Message(`${dashboardPivotItemViewModelName}.Delete`);

            var indexes: number[] = Object
                .keys(this.Selected)
                .filter((k: string) => !!this.Selected[k])
                .map((k: string) => parseInt(k));

            this._entityRepository.BulkDelete(this.Type, indexes);

            this.Init();
        }

        Sort(): void {

            var array: Core.IEntity[] = this._entityRepository.GetByType(this.Type);

            var sortBy: string = this.TypeSettings.SortBy;
            var asc: number = this.TypeSettings.SortByDescending ? -1 : 1;

            if (!!sortBy) {

                array = array.sort((e1: Core.IEntity, e2: Core.IEntity) => {

                    var v1: any = this.DefaultIfNotDefined(e1, sortBy);
                    var v2: any = this.DefaultIfNotDefined(e2, sortBy);

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
        }

        EnableDeletion(): void {

            var keys: string[] = Object
                .keys(this.Selected)
                .filter((k: string) => !!this.Selected[k]);

            this._appBarStatus.IsDeleteDisabled = keys.length === 0;
        }

        private SetSettings(value: Core.IEntityTypeSettings): void {

            this.TypeSettings = value;
        }

        private DefaultIfNotDefined(entity: Core.IEntity, fieldName: string): any {

            var attribute: Core.IAttributeType[] = this.Type
                .Attributes
                .filter((o: Core.IAttributeType) => o.Name === fieldName);

            var isString: boolean = attribute[0].TypeCode === Core.AttributeTypeCode.Email
                || attribute[0].TypeCode === Core.AttributeTypeCode.Phone
                || attribute[0].TypeCode === Core.AttributeTypeCode.String
                || attribute[0].TypeCode === Core.AttributeTypeCode.Text
                || attribute[0].TypeCode === Core.AttributeTypeCode.Url;

            var value: any = entity.Fields[fieldName];

            var dfault: any = isString ? "" : null;

            return angular.isDefined(value) ? value : dfault;
        }
    }
}