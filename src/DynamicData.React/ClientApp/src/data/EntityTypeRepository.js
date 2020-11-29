import { AttributeTypeCode } from '../core/AttributeTypeCode';
import { DataActionResults } from '../core/DataAction';
import { Strings } from '../core/Resources';
import { Trace } from '../core/Trace';

export class EntityTypeRepository {

    _storage;

    constructor(storage) {

        if (!storage) {
            throw new Error(Strings.RequiredArgumentMessageFormat("storage"));
        }

        this._storage = storage;
    }

    New() {

        return {
            Name: '',
            DisplayName: '',
            DisplayPluralName: '',
            Attributes: [
                {
                    Name: '',
                    DisplayName: '',
                    TypeCode: AttributeTypeCode.String,
                    EnumName: ''
                }
            ]
        };
    }

    GetAll() {

        return this._storage.Types;
    }

    GetByName(entityTypeName) {

        if (!entityTypeName) {
            return null;
        }

        const types = this.GetAll();

        const filtered = types.filter((t) => t.Name === entityTypeName);

        return filtered[0] || null;
    }

    BulkCreate(types) {

        if (!types) {
            throw new Error(Strings.RequiredArgumentMessageFormat("types"));
        }

        const storedTypes = this.GetAll();
        const results = [];

        for (let i = 0; i < types.length; i++) {

            const type = types[i];

            if (storedTypes.filter((t) => t.Name === type.Name).length > 0) {

                Trace.Warning(Strings.DuplicatedEntityTypeMessageFormat(type.Name));

                results.push(DataActionResults.duplicate);

            } else {

                storedTypes.push(type);

                results.push(DataActionResults.success);
            }
        }

        if (results.filter((o) => o.Success).length > 0) {
            this._storage.Types = storedTypes;
        }

        return results;
    }

    BulkDelete(types) {

        if (!types) {
            throw new Error(Strings.RequiredArgumentMessageFormat("types"));
        }

        const storedTypes = this.GetAll();
        const results = [];

        types.forEach((name) => {

            const filter = storedTypes.filter((t) => t.Name === name);

            if (filter.length > 0) {

                const index = storedTypes.indexOf(filter[0]);

                this._storage.DeleteEntities(name);
                this._storage.DeleteTemplate(name);
                this._storage.DeleteTypeSettings(name);

                storedTypes.splice(index, 1);

                results.push(DataActionResults.success);
            } else {

                Trace.Warning(Strings.MissingEntityTypeMessageFormat(name));

                results.push(DataActionResults.notFound);
            }
        });

        if (results.filter((o) => o.Success).length > 0) {
            this._storage.Types = storedTypes;
        }

        return results;
    }

    Create(type) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const types = this.GetAll();

        const filtered = types.filter((t) => t.Name === type.Name);

        if (filtered.length > 0) {

            Trace.Warning(Strings.DuplicatedEntityTypeMessageFormat(type.Name));

            return DataActionResults.duplicate;

        } else {

            types.push(type);

            this._storage.Types = types;

            return DataActionResults.success;
        }
    }

    Update(type) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const types = this.GetAll();

        const filtered = types.filter((t) => t.Name === type.Name);

        if (filtered.length === 0) {

            Trace.Warning(Strings.MissingEntityTypeMessageFormat(type.Name));

            return DataActionResults.notFound;
        }

        let index = types.indexOf(filtered[0]);

        types[index] = type;

        this._storage.Types = types;

        return DataActionResults.success;
    }
}