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
        var EntityViewModel = (function (_super) {
            __extends(EntityViewModel, _super);
            function EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, entityTypeName, entityId) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!entityRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityRepository"));
                }
                if (!entityTypeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeName"));
                }
                _super.call(this);
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
            EntityViewModel.prototype.Init = function () {
                this.EntityType = this._entityTypeRepository.GetByName(this._entityTypeName);
                if (!this.EntityType) {
                    this._location.url(DynamicData.Config.Routes.home());
                    return;
                }
                this.Entity = this._entityId || this._entityId === 0 ?
                    this._entityRepository.GetById(this.EntityType, this._entityId) :
                    new DynamicData.Core.Entity(this.EntityType);
                if (!this.Entity) {
                    this._location.url(DynamicData.Config.Routes.home());
                    return;
                }
                this.Model = this.Model || {};
                this._appBarStatus.Detail();
                this._appBarStatus.IsDeleteDisabled = !this.Entity.HasValidId;
                angular.copy(this.Entity.Fields, this.Model);
            };
            EntityViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.entity(this.EntityType.Name));
            };
            EntityViewModel.prototype.Delete = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Delete");
                var entity = this.Entity;
                if (entity) {
                    this._entityRepository.BulkDelete(entity.Type, [entity.Id]);
                }
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Save");
                angular.copy(this.Model, this.Entity.Fields);
                this._entityRepository.CreateOrUpdate(this.Entity);
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Refresh");
                this.Init();
            };
            return EntityViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.EntityViewModel = EntityViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
