module DynamicData.Data {

    "use strict";

    export interface IEntityTypeSettingsRepository {
        GetByName(name: string): angular.IPromise<Core.IEntityTypeSettings>;
        Save(name: string, template: Core.IEntityTypeSettings): void;
    }

    class EntityTypeSettingsRepository implements IEntityTypeSettingsRepository {

        private _q: ng.IQService;

        constructor(q: ng.IQService) {

            this._q = q;
        }

        GetByName(typeName: string): angular.IPromise<Core.IEntityTypeSettings> {

            var settings: Core.IEntityTypeSettings = storage.GetTypeSettings(typeName);

            var deferred: ng.IDeferred<Core.IEntityTypeSettings> = this._q.defer<Core.IEntityTypeSettings>();

            deferred.resolve(settings || {
                SortBy: "CreatedOn",
                SortByDescending: true
            });

            return deferred.promise;
        }

        Save(typeName: string, settings: Core.IEntityTypeSettings): void {

            storage.SetTypeSettings(typeName, settings);
        }
    }

    angular.module(Config.appName)
        .factory(entityTypeSettingsRepositoryName, [
            "$q",
            ($q: ng.IQService) => new EntityTypeSettingsRepository($q)]);
}