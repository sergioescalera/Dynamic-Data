var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityTypeRepository = /** @class */ (function () {
            function EntityTypeRepository() {
            }
            EntityTypeRepository.prototype.GetAll = function () {
                return Data.storage.Types;
            };
            EntityTypeRepository.prototype.GetByName = function (entityTypeName) {
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === entityTypeName; });
                return filtered.length ? filtered[0] : null;
            };
            EntityTypeRepository.prototype.BulkCreate = function (types) {
                if (!types) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("types"));
                }
                var storedTypes = this.GetAll();
                var results = [];
                for (var i = 0; i < types.length; i++) {
                    var type = types[i];
                    if (storedTypes.filter(function (t) { return t.Name === type.Name; }).length > 0) {
                        DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));
                        results.push(Data.DataActionResults.duplicate);
                    }
                    storedTypes.push(type);
                    results.push(Data.DataActionResults.success);
                }
                if (results.filter(function (o) { return o.Success; }).length > 0) {
                    Data.storage.Types = storedTypes;
                }
                return results;
            };
            EntityTypeRepository.prototype.BulkDelete = function (types) {
                if (!types) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("types"));
                }
                var storedTypes = this.GetAll();
                var results = [];
                types.forEach(function (name) {
                    var filter = storedTypes.filter(function (t) { return t.Name === name; });
                    if (filter.length > 0) {
                        var index = storedTypes.indexOf(filter[0]);
                        Data.storage.DeleteEntities(name);
                        Data.storage.DeleteTemplate(name);
                        Data.storage.DeleteTypeSettings(name);
                        storedTypes.splice(index, 1);
                        results.push(Data.DataActionResults.success);
                    }
                    else {
                        DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.MissingEntityTypeMessageFormat(name));
                        results.push(Data.DataActionResults.notFound);
                    }
                });
                if (results.filter(function (o) { return o.Success; }).length > 0) {
                    Data.storage.Types = storedTypes;
                }
                return results;
            };
            EntityTypeRepository.prototype.Create = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === type.Name; });
                if (filtered.length > 0) {
                    DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));
                    return Data.DataActionResults.duplicate;
                }
                types.push(type);
                Data.storage.Types = types;
                return Data.DataActionResults.success;
            };
            EntityTypeRepository.prototype.Update = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === type.Name; });
                if (filtered.length === 0) {
                    DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.MissingEntityTypeMessageFormat(type.Name));
                    return Data.DataActionResults.notFound;
                }
                var index = types.indexOf(filtered[0]);
                types[index] = type;
                Data.storage.Types = types;
                return Data.DataActionResults.success;
            };
            return EntityTypeRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityTypeRepositoryName, function () { return new EntityTypeRepository(); });
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
