var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeType = (function () {
            function AttributeType(name, displayName, typeCode) {
                this.Name = name;
                this.DisplayName = displayName;
                this.TypeCode = typeCode;
            }
            Object.defineProperty(AttributeType.prototype, "Name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "Name");
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "DisplayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "DisplayName");
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "TypeCode", {
                get: function () {
                    return this._typeCode;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "TypeCode");
                    this._typeCode = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "TypeCodeName", {
                get: function () {
                    return Core.AttributeTypeCode[this._typeCode];
                },
                enumerable: true,
                configurable: true
            });
            return AttributeType;
        }());
        Core.AttributeType = AttributeType;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
