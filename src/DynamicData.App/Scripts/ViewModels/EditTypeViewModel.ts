module DynamicData.ViewModels {

    "use strict";

    export class EditTypeViewModel extends BaseViewModel {

        private _entityTypeRepository: Data.IEntityTypeRepository;
        private _scope: UI.Controllers.IEditTypeScope;
        private _location: ng.ILocationService;
        private _mdToast: ng.material.IToastService;
        private _mdDialog: ng.material.IDialogService;
        private _appBarStatus: Core.IAppBarStatus;
        private _entityTypeName: string;
        private _model: any;

        EntityType: Core.IEntityType;
        IsNew: boolean;
        TypeCodeOptions: any[];
        SelectedAttributes: Object;

        ValidationDialogIsHidden: boolean;

        get Model(): any {

            if (!this._model) {
                
                if (!this.EntityType) {
                    
                    this._model = {
                        Attributes: [
                            {
                                TypeCode: Core.AttributeTypeCode.String
                            }
                        ]
                    };

                } else {

                    this._model = Core.EntityTypeSerialization.ToPOCO(this.EntityType);
                }
                
                this._model.Attributes.forEach((a: any) => a.Options = []);
            }

            return this._model;
        }

        constructor(
            scope: UI.Controllers.IEditTypeScope,
            location: ng.ILocationService,
            mdToast: ng.material.IToastService,
            mdDialog: ng.material.IDialogService,
            appBarStatus: Core.IAppBarStatus,
            entityTypeRepository: Data.IEntityTypeRepository,
            entityTypeName: string) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!mdToast) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdToast"));
            }

            if (!mdDialog) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
            }

            if (!appBarStatus) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
            }

            if (!entityTypeRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
            }

            super();

            this._scope = scope;
            this._location = location;
            this._mdToast = mdToast;
            this._mdDialog = mdDialog;
            this._appBarStatus = appBarStatus;
            this._entityTypeRepository = entityTypeRepository;
            this._entityTypeName = entityTypeName;

            this.Init();

            scope.$on("AppBarScope::add", this.Add.bind(this));
            scope.$on("AppBarScope::delete", this.Delete.bind(this));
            scope.$on("AppBarScope::save", this.Save.bind(this));
            scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
            scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
        }

        private Init(): void {

            this._model = null;
            this.IsNew = !this._entityTypeName;
            this.EntityType = this.IsNew ? null : this._entityTypeRepository.GetByName(this._entityTypeName);
            this.SelectedAttributes = {};

            if (!this.IsNew && !this.EntityType) {

                this._location.url(Config.Routes.manage());
                return;
            }

            this._appBarStatus.Detail();

            this.TypeCodeOptions = Object
                .keys(Core.AttributeTypeCode)
                .filter((key: string) => isNaN(parseInt(key)))
                .map((key: string) => {
                    return {
                        name: key,
                        value: Core.AttributeTypeCode[key]
                    };
                });

            if (this._scope.TypeForm && this._scope.TypeForm.$dirty) {

                this._scope.TypeForm.$setPristine();
            }
        }

        Add(): void {

            Core.Trace.Message(`${editTypeViewModelName}.Add`);

            this.Model.Attributes.push({
                TypeCode: Core.AttributeTypeCode.String
            });
        }

        Delete(): void {

            Core.Trace.Message(`${editTypeViewModelName}.Delete`);

            let attributes: any[] = this.Model.Attributes;

            for (let i: number = attributes.length - 1; i >= 0; i--) {

                if (!!this.SelectedAttributes[i.toString()]) {

                    attributes.splice(i, 1);
                }
            }

            if (attributes.length === 0) {
                this.Add();
            }

            this.SelectedAttributes = {};
        }

        Save(): void {

            Core.Trace.Message(`${editTypeViewModelName}.Save`);

            let exit: boolean = true;

            if (this._scope.TypeForm.$valid) {

                let type: Core.IEntityType;

                try {

                    type = Core.EntityTypeSerialization.FromPOCO(this.Model);

                } catch (e) {

                    Core.Trace.Warning(e);
                }

                let result: Data.IDataActionResult;

                if (this.IsNew && !!type) {

                    result = this._entityTypeRepository.Create(type);

                } else if (!!type) {

                    result = this._entityTypeRepository.Update(type);
                }

            } else {

                exit = false;

                this.SetFormDirty();

                this._mdToast.show(
                    this._mdToast.simple()
                        .textContent("Please enter all required data.")
                        .position("top right")
                        .hideDelay(5000)
                );
            }

            if (exit) {

                this._location.url(Config.Routes.manage());
            }
        }

        Cancel(): void {

            Core.Trace.Message(`${editTypeViewModelName}.Cancel`);

            this._location.url(Config.Routes.manage());
        }

        Refresh(): void {

            Core.Trace.Message(`${editTypeViewModelName}.Refresh`);

            this.Init();
        }

        EditEnum(attribute: Core.IAttributeType): void {

            let options: ng.material.IDialogOptions = {
                controller: UI.Controllers.EditEnumController,
                templateUrl: "html/EditEnum.html",
                parent: angular.element(document.body),
                resolve: {
                    name: () => attribute.EnumName
                }
            };

            this._mdDialog.show(options)
                .then((name) => {
                    debugger;
                    attribute.EnumName = name;
                }, () => {
                    console.log("Edit Enum was canceled.");
                });
        }

        private SetFormDirty(): void {

            let keys: string[] = Object
                .keys(this._scope.TypeForm)
                .filter((k: string) => k.indexOf("$") !== 0);

            keys.forEach((key: string) => {

                let field: ng.INgModelController = this._scope.TypeForm[key];

                if (field.$valid) {
                    return;
                }

                if (!field.$dirty) {
                    field.$setDirty();
                }
                if (field.$untouched) {
                    field.$setTouched();
                }
            });
        }
    }
}