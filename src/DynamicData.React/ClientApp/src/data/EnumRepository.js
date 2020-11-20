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

    GetByName(name) {

        const enums = this.GetAll();

        const filtered = enums.filter((t) => t.Name === name);

        return filtered.length ? filtered[0] : null;
    }

    Save(name, displayName, values) {

        const enums = this.GetAll();

        const filtered = enums.filter((t) => t.Name === name);

        if (filtered.length > 0) {
            filtered[0].DisplayName = displayName;
            filtered[0].Name = name;
            filtered[0].Values = values;
        } else {
            enums.push({
                DisplayName: displayName,
                Name: name,
                Values: values,
            });
        }

        this._storage.Enums = enums;
    }
}