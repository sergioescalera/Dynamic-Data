var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EnumRepository = /** @class */ (function () {
            function EnumRepository() {
            }
            EnumRepository.prototype.GetAll = function () {
                return Data.storage.Enums;
            };
            EnumRepository.prototype.GetByName = function (name) {
                var enums = this.GetAll();
                var filtered = enums.filter(function (t) { return t.Name === name; });
                return filtered.length ? filtered[0] : null;
            };
            EnumRepository.prototype.Save = function (name, displayName, values) {
                var enums = this.GetAll();
                var filtered = enums.filter(function (t) { return t.Name === name; });
                if (filtered.length > 0) {
                    filtered[0].DisplayName = displayName;
                    filtered[0].Name = name;
                    filtered[0].Values = values;
                }
                else {
                    enums.push({
                        DisplayName: displayName,
                        Name: name,
                        Values: values,
                    });
                }
                Data.storage.Enums = enums;
            };
            return EnumRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.enumRepositoryName, function () { return new EnumRepository(); });
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
