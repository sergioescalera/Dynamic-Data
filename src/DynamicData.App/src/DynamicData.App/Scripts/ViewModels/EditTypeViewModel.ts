﻿module DynamicData.ViewModels {

    "use strict";

    export class EditTypeViewModel extends BaseViewModel {

        private _entityTypeRepository: Data.IEntityTypeRepository;
        private _scope: UI.Controllers.IEditTypeScope;
        private _location: ng.ILocationService;
        private _mdToast: ng.material.IToastService;
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

                this._model = !this.EntityType ? {
                    Attributes: [{
                        TypeCode: Core.AttributeTypeCode.String
                    }]
                } : Core.EntityTypeSerialization.ToPOCO(this.EntityType);
            }

            return this._model;
        }

        constructor(
            scope: UI.Controllers.IEditTypeScope,
            location: ng.ILocationService,
            mdToast: ng.material.IToastService,
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
            this.ValidationDialogIsHidden = true;

            if (!this.IsNew && !this.EntityType) {

                this._location.url(Config.Routes.manage());
                return;
            }

            this._appBarStatus.Detail();

            this.TypeCodeOptions = [
                Core.AttributeTypeCode.Boolean,
                Core.AttributeTypeCode.Date,
                Core.AttributeTypeCode.DateTime,
                Core.AttributeTypeCode.Decimal,
                Core.AttributeTypeCode.Email,
                Core.AttributeTypeCode.Int,
                Core.AttributeTypeCode.Phone,
                Core.AttributeTypeCode.String,
                Core.AttributeTypeCode.Text,
                Core.AttributeTypeCode.Url,
                Core.AttributeTypeCode.Currency,
                Core.AttributeTypeCode.Time
            ].map((value: number) => {
                return {
                    name: Core.AttributeTypeCode[value],
                    value: value
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

            var attributes: any[] = this.Model.Attributes;

            for (var i: number = attributes.length - 1; i >= 0; i--) {

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

            var exit: boolean = true;

            if (this._scope.TypeForm.$valid) {

                var type: Core.IEntityType;

                try {

                    type = Core.EntityTypeSerialization.FromPOCO(this.Model);

                } catch (e) {

                    Core.Trace.Warning(e);
                }

                var result: Data.IDataActionResult;

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

        private SetFormDirty(): void {

            var keys: string[] = Object
                .keys(this._scope.TypeForm)
                .filter((k: string) => k.indexOf("$") !== 0);

            keys.forEach((key: string) => {

                var field: ng.INgModelController = this._scope.TypeForm[key];

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