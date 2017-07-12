module DynamicData.ViewModels {

    "use strict";

    export class EntityViewModel extends BaseViewModel {

        private _entityTypeRepository: Data.IEntityTypeRepository;
        private _entityRepository: Data.IEntityRepository;
        private _location: ng.ILocationService;
        private _appBarStatus: Core.IAppBarStatus;
        private _entityTypeName: string;
        private _entityId: number;

        EntityType: Core.IEntityType;
        Entity: Core.IEntity;
        Model: Object;

        constructor(
            scope: UI.Controllers.IEntityScope,
            location: ng.ILocationService,
            appBarStatus: Core.IAppBarStatus,
            entityTypeRepository: Data.IEntityTypeRepository,
            entityRepository: Data.IEntityRepository,
            entityTypeName: string,
            entityId?: number) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!appBarStatus) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
            }

            if (!entityTypeRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
            }

            if (!entityRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityRepository"));
            }

            if (!entityTypeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeName"));
            }

            super();

            this._location = location;
            this._appBarStatus = appBarStatus;
            this._entityTypeRepository = entityTypeRepository;
            this._entityRepository = entityRepository;
            this._entityTypeName = entityTypeName;
            this._entityId = entityId;

            this.Init();

            scope.$on("AppBarScope::add", this.Add.bind(this));
            scope.$on("AppBarScope::delete", this.Delete.bind(this));
            scope.$on("AppBarScope::save", this.Save.bind(this));
            scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
            scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
        }

        private Init(): void {

            this.EntityType = this._entityTypeRepository.GetByName(this._entityTypeName);

            if (!this.EntityType) {

                this._location.url(Config.Routes.home());
                return;
            }

            this.Entity = this._entityId || this._entityId === 0 ?
                this._entityRepository.GetById(this.EntityType, this._entityId) :
                new Core.Entity(this.EntityType);

            if (!this.Entity) {

                this._location.url(Config.Routes.home());
                return;
            }

            this.Model = this.Model || {};

            this._appBarStatus.Detail();
            this._appBarStatus.IsDeleteDisabled = !this.Entity.HasValidId;

            angular.copy(this.Entity.Fields, this.Model);
        }

        Add(): void {

            Core.Trace.Message(`${entityViewModelName}.Add`);

            this._location.url(Config.Routes.entity(this.EntityType.Name));
        }

        Delete(): void {

            Core.Trace.Message(`${entityViewModelName}.Delete`);

            var entity: Core.IEntity = this.Entity;

            if (entity) {
                this._entityRepository.BulkDelete(entity.Type, [entity.Id]);
            }

            this._location.url(Config.Routes.homeWithType(this.EntityType.Name));
        }

        Save(): void {
            
            Core.Trace.Message(`${entityViewModelName}.Save`);

            angular.copy(this.Model, this.Entity.Fields);

            this._entityRepository.CreateOrUpdate(this.Entity);

            this._location.url(Config.Routes.homeWithType(this.EntityType.Name));
        }

        Cancel(): void {

            Core.Trace.Message(`${entityViewModelName}.Cancel`);

            this._location.url(Config.Routes.homeWithType(this.EntityType.Name));
        }

        Refresh(): void {

            Core.Trace.Message(`${entityViewModelName}.Refresh`);

            this.Init();
        }
    }
}