module DynamicData.Data {

    "use strict";

    export interface IEntityRepository {

        GetByType(type: Core.IEntityType): Core.IEntity[];
        GetById(type: Core.IEntityType, entityId: number): Core.IEntity;
        CreateOrUpdate(entity: Core.IEntity): IDataActionResult;
        BulkDelete(type: Core.IEntityType, identifiers: number[]): IDataActionResult[];
    }

    class EntityRepository implements IEntityRepository {

        private _entityTypeRepository: Data.IEntityTypeRepository;

        constructor(entityTypeRepository: Data.IEntityTypeRepository) {

            if (!entityTypeRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
            }

            this._entityTypeRepository = entityTypeRepository;
        }

        GetByType(type: Core.IEntityType): Core.IEntity[] {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            var valid: boolean = this.ValidateType(type);

            if (!valid) {
                return null;
            }

            return storage.GetEntities(type) || [];
        }

        GetById(type: Core.IEntityType, entityId: number): Core.IEntity {

            var entities: Core.IEntity[] = this.GetByType(type);

            if (!entities) {
                return null;
            }

            if (entityId > entities.length) {
                return null;
            }

            return entities[entityId];
        }

        CreateOrUpdate(entity: Core.IEntity): IDataActionResult {

            if (!entity) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entity"));
            }

            if (entity.HasValidId) {

                return this.Update(entity);

            } else {

                return this.Create(entity);
            }
        }

        BulkDelete(type: Core.IEntityType, identifiers: number[]): IDataActionResult[] {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            var entities: Core.IEntity[] = this.GetByType(type);

            if (!entities) {
                return;
            }

            var results: IDataActionResult[] = [];

            identifiers
                .sort((a: number, b: number) => b - a)
                .forEach((id: number) => {

                    if (id < entities.length) {

                        entities.splice(id, 1);

                        results.push(DataActionResults.success);

                    } else {

                        results.push(DataActionResults.notFound);
                    }
                });

            if (results.filter((r: IDataActionResult) => r.Success).length > 0) {
                Data.storage.SetEntities(type, entities);
            }

            return results;
        }

        private Create(entity: Core.IEntity): IDataActionResult {

            if (!entity) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entity"));
            }

            var entities: Core.IEntity[] = this.GetByType(entity.Type);

            if (!entities) {
                return DataActionResults.notFound;
            }

            entities.push(entity);

            let now = moment().toDate();

            entity.Fields.CreatedOn = now;
            entity.Fields.ModifiedOn = now;
            entity.Id = entities.length - 1;

            storage.SetEntities(entity.Type, entities);

            return DataActionResults.success;
        }

        private Update(entity: Core.IEntity): IDataActionResult {

            if (!entity) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entity"));
            }

            var entities: Core.IEntity[] = this.GetByType(entity.Type);

            if (!entities) {
                return DataActionResults.notFound;
            }

            if (entity.Id > entities.length) {
                return DataActionResults.notFound;
            }
            
            let now = moment().toDate();

            entity.Fields.ModifiedOn = now;
            
            entities[entity.Id] = entity;

            storage.SetEntities(entity.Type, entities);

            return DataActionResults.success;
        }

        private ValidateType(type: Core.IEntityType): boolean {

            return !!this._entityTypeRepository.GetByName(type.Name);
        }
    }

    angular.module(Config.appName)
        .factory(entityRepositoryName, [
            entityTypeRepositoryName,
            (entityTypeRepository: Data.IEntityTypeRepository) => new EntityRepository(entityTypeRepository
            )]);
}