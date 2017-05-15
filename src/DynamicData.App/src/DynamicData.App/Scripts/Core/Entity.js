var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Entity = (function () {
            function Entity(type, id) {
                if (id === void 0) { id = null; }
                Core.Validation.EnsureRequired(type, "type");
                this._type = type;
                this._fields = {};
                this.Id = id;
            }
            Object.defineProperty(Entity.prototype, "Type", {
                get: function () {
                    return this._type;
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "Fields", {
                get: function () {
                    return this._fields;
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "HasValidId", {
                get: function () {
                    return angular.isNumber(this.Id);
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            return Entity;
        }());
        Core.Entity = Entity;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
