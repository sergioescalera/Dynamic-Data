var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityTypeSettingsRepository = /** @class */ (function () {
            function EntityTypeSettingsRepository(q) {
                this._q = q;
            }
            EntityTypeSettingsRepository.prototype.GetByName = function (typeName) {
                var settings = Data.storage.GetTypeSettings(typeName);
                var deferred = this._q.defer();
                deferred.resolve(settings || {
                    SortBy: "CreatedOn",
                    SortByDescending: true
                });
                return deferred.promise;
            };
            EntityTypeSettingsRepository.prototype.Save = function (typeName, settings) {
                Data.storage.SetTypeSettings(typeName, settings);
            };
            return EntityTypeSettingsRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityTypeSettingsRepositoryName, [
            "$q",
            function ($q) { return new EntityTypeSettingsRepository($q); }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=EntityTypeSettingsRepository.js.map