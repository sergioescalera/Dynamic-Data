export class EntityTypeSettingsRepository {

    _storage;

    constructor(storage) {

        if (!storage) {
            throw new Error(Strings.RequiredArgumentMessageFormat("storage"));
        }

        this._storage = storage;
    }

    GetByName(typeName) {

        const settings = this._storage.GetTypeSettings(typeName);

        return new Promise((resolve) => {

            resolve(settings || {
                SortBy: "CreatedOn",
                SortByDescending: true
            });
        });
    }

    Save(typeName, settings) {

        this._storage.SetTypeSettings(typeName, settings);
    }
}