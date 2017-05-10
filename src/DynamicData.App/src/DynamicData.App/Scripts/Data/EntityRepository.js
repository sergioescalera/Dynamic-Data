var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityRepository = (function () {
            function EntityRepository(entityTypeRepository) {
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                this._entityTypeRepository = entityTypeRepository;
            }
            EntityRepository.prototype.GetByType = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var valid = this.ValidateType(type);
                if (!valid) {
                    return null;
                }
                return Data.storage.GetEntities(type) || [];
            };
            EntityRepository.prototype.GetById = function (type, entityId) {
                var entities = this.GetByType(type);
                if (!entities) {
                    return null;
                }
                if (entityId > entities.length) {
                    return null;
                }
                return entities[entityId];
            };
            EntityRepository.prototype.CreateOrUpdate = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                if (entity.HasValidId) {
                    return this.Update(entity);
                }
                else {
                    return this.Create(entity);
                }
            };
            EntityRepository.prototype.BulkDelete = function (type, identifiers) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var entities = this.GetByType(type);
                if (!entities) {
                    return;
                }
                var results = [];
                identifiers
                    .sort(function (a, b) { return b - a; })
                    .forEach(function (id) {
                    if (id < entities.length) {
                        entities.splice(id, 1);
                        results.push(Data.DataActionResults.success);
                    }
                    else {
                        results.push(Data.DataActionResults.notFound);
                    }
                });
                if (results.filter(function (r) { return r.Success; }).length > 0) {
                    Data.storage.SetEntities(type, entities);
                }
                return results;
            };
            EntityRepository.prototype.Create = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                var entities = this.GetByType(entity.Type);
                if (!entities) {
                    return Data.DataActionResults.notFound;
                }
                entities.push(entity);
                entity.Id = entities.length - 1;
                Data.storage.SetEntities(entity.Type, entities);
                return Data.DataActionResults.success;
            };
            EntityRepository.prototype.Update = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                var entities = this.GetByType(entity.Type);
                if (!entities) {
                    return Data.DataActionResults.notFound;
                }
                if (entity.Id > entities.length) {
                    return Data.DataActionResults.notFound;
                }
                entities[entity.Id] = entity;
                Data.storage.SetEntities(entity.Type, entities);
                return Data.DataActionResults.success;
            };
            EntityRepository.prototype.ValidateType = function (type) {
                return !!this._entityTypeRepository.GetByName(type.Name);
            };
            return EntityRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityRepositoryName, [
            Data.entityTypeRepositoryName,
            function (entityTypeRepository) { return new EntityRepository(entityTypeRepository); }]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
