import { Strings } from "../core/Resources";

export class EnumRepository {

    _storage;

    constructor(storage) {
        
        if (!storage) {
            throw new Error(Strings.RequiredArgumentMessageFormat("storage"));
        }

        this._storage = storage;
    }

    GetAll() {

        return this._storage.Enums;
    }

    New() {

        return { Name: '', DisplayName: '', Values: [] };
    }

    GetByName(enumName) {

        if (!enumName) {
            return null;
        }

        const enums = this.GetAll();

        const filtered = enums.filter((t) => t.Name === enumName);

        return filtered.length ? filtered[0] : null;
    }

    Upsert(item) {

        if (!item) {
            throw new Error(Strings.RequiredArgumentMessageFormat("item"));
        }

        const enums = this.GetAll();
        
        const found = enums.find((t) => t.Name === item.Name);

        if (found) {
            found.DisplayName = item.DisplayName;
            found.Values = item.Values;
        } else {
            enums.push({
                DisplayName: item.DisplayName,
                Name: item.Name,
                Values: item.Values,
            });
        }

        this._storage.Enums = enums;
    }
}