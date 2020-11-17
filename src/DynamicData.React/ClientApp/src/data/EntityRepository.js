import { Strings } from './core/Resources';
import { DataActionResults } from './core/DataAction';

export class EntityRepository {

    _entityTypeRepository;
    _storage;

    constructor(storage, entityTypeRepository) {

        if (!storage) {
            throw new Error(Strings.RequiredArgumentMessageFormat("storage"));
        }

        if (!entityTypeRepository) {
            throw new Error(Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
        }

        this._entityTypeRepository = entityTypeRepository;
        this._storage = storage;
    }

    GetByType(type) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const valid = this.ValidateType(type);

        if (!valid) {
            return null;
        }

        return this._storage.GetEntities(type) || [];
    }

    GetById(type, entityId) {

        const entities = this.GetByType(type);

        if (!entities) {
            return null;
        }

        if (entityId > entities.length) {
            return null;
        }

        return entities[entityId];
    }

    CreateOrUpdate(entity) {

        if (!entity) {
            throw new Error(Strings.RequiredArgumentMessageFormat("entity"));
        }

        if (entity.HasValidId) {

            return this.Update(entity);

        } else {

            return this.Create(entity);
        }
    }

    BulkDelete(type, identifiers) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const entities = this.GetByType(type);

        if (!entities) {
            return;
        }

        const results = [];

        identifiers
            .sort((a, b) => b - a)
            .forEach((id) => {

                if (id < entities.length) {

                    entities.splice(id, 1);

                    results.push(DataActionResults.success);

                } else {

                    results.push(DataActionResults.notFound);
                }
            });

        if (results.filter((r) => r.Success).length > 0) {
            this._storage.SetEntities(type, entities);
        }

        return results;
    }

    Create(entity) {

        if (!entity) {
            throw new Error(Strings.RequiredArgumentMessageFormat("entity"));
        }

        const entities = this.GetByType(entity.Type);

        if (!entities) {
            return DataActionResults.notFound;
        }

        entities.push(entity);

        const now = new Date();

        entity.Fields.CreatedOn = now;
        entity.Fields.ModifiedOn = now;
        entity.Id = entities.length - 1;

        this._storage.SetEntities(entity.Type, entities);

        return DataActionResults.success;
    }

    Update(entity) {

        if (!entity) {
            throw new Error(Strings.RequiredArgumentMessageFormat("entity"));
        }

        const entities = this.GetByType(entity.Type);

        if (!entities) {
            return DataActionResults.notFound;
        }

        if (entity.Id > entities.length) {
            return DataActionResults.notFound;
        }

        const now = new Date();

        entity.Fields.ModifiedOn = now;

        entities[entity.Id] = entity;

        this._storage.SetEntities(entity.Type, entities);

        return DataActionResults.success;
    }

    ValidateType(type) {

        return !!this._entityTypeRepository.GetByName(type.Name);
    }
}