module DynamicData.Data {

    "use strict";

    export interface IEntityTypeRepository {

        GetAll(): Core.IEntityType[];
        GetByName(entityTypeName: string): Core.IEntityType;
        BulkCreate(types: Core.IEntityType[]): IDataActionResult[];
        BulkDelete(types: string[]): IDataActionResult[];
        Create(type: Core.IEntityType): IDataActionResult;
        Update(type: Core.IEntityType): IDataActionResult;
    }

    class EntityTypeRepository implements IEntityTypeRepository {

        GetAll(): Core.IEntityType[] {

            return Data.storage.Types;
        }

        GetByName(entityTypeName: string): Core.IEntityType {

            let types: Core.IEntityType[] = this.GetAll();

            let filtered: Core.IEntityType[] = types.filter((t: Core.IEntityType) => t.Name === entityTypeName);

            return filtered.length ? filtered[0] : null;
        }

        BulkCreate(types: Core.IEntityType[]): IDataActionResult[] {

            if (!types) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("types"));
            }

            let storedTypes: Core.IEntityType[] = this.GetAll();
            let results: IDataActionResult[] = [];

            for (let i: number = 0; i < types.length; i++) {

                let type: Core.IEntityType = types[i];

                if (storedTypes.filter((t: Core.IEntityType) => t.Name === type.Name).length > 0) {

                    Core.Trace.Warning(Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));

                    results.push(DataActionResults.duplicate);

                } else {

                    storedTypes.push(type);

                    results.push(DataActionResults.success);
                }
            }

            if (results.filter((o: IDataActionResult) => o.Success).length > 0) {
                Data.storage.Types = storedTypes;
            }

            return results;
        }

        BulkDelete(types: string[]): IDataActionResult[] {

            if (!types) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("types"));
            }

            let storedTypes: Core.IEntityType[] = this.GetAll();
            let results: IDataActionResult[] = [];

            types.forEach((name: string) => {

                let filter: Core.IEntityType[] = storedTypes.filter((t: Core.IEntityType) => t.Name === name);

                if (filter.length > 0) {

                    let index: number = storedTypes.indexOf(filter[0]);

                    Data.storage.DeleteEntities(name);
                    Data.storage.DeleteTemplate(name);
                    Data.storage.DeleteTypeSettings(name);

                    storedTypes.splice(index, 1);

                    results.push(DataActionResults.success);
                } else {

                    Core.Trace.Warning(Resources.Strings.MissingEntityTypeMessageFormat(name));

                    results.push(DataActionResults.notFound);
                }
            });

            if (results.filter((o: IDataActionResult) => o.Success).length > 0) {
                Data.storage.Types = storedTypes;
            }

            return results;
        }

        Create(type: Core.IEntityType): IDataActionResult {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            let types: Core.IEntityType[] = this.GetAll();

            let filtered: Core.IEntityType[] = types.filter((t: Core.IEntityType) => t.Name === type.Name);

            if (filtered.length > 0) {

                Core.Trace.Warning(Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));

                return DataActionResults.duplicate;

            } else {

                types.push(type);

                Data.storage.Types = types;

                return DataActionResults.success;
            }
        }

        Update(type: Core.IEntityType): IDataActionResult {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            let types: Core.IEntityType[] = this.GetAll();

            let filtered: Core.IEntityType[] = types.filter((t: Core.IEntityType) => t.Name === type.Name);

            if (filtered.length === 0) {

                Core.Trace.Warning(Resources.Strings.MissingEntityTypeMessageFormat(type.Name));

                return DataActionResults.notFound;
            }

            let index: number = types.indexOf(filtered[0]);

            types[index] = type;

            Data.storage.Types = types;

            return DataActionResults.success;
        }
    }

    angular.module(Config.appName)
        .factory(entityTypeRepositoryName, () => new EntityTypeRepository());
}