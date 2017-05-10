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
                    return AttributeTypeCode[this._typeCode];
                },
                enumerable: true,
                configurable: true
            });
            return AttributeType;
        }());
        Core.AttributeType = AttributeType;
        var AttributeTypeSerialization = (function () {
            function AttributeTypeSerialization() {
            }
            AttributeTypeSerialization.FromPOCO = function (poco) {
                return new AttributeType(poco.Name, poco.DisplayName, poco.TypeCode);
            };
            AttributeTypeSerialization.ToPOCO = function (attribute) {
                return {
                    Name: attribute.Name,
                    DisplayName: attribute.DisplayName,
                    TypeCode: attribute.TypeCode
                };
            };
            return AttributeTypeSerialization;
        }());
        Core.AttributeTypeSerialization = AttributeTypeSerialization;
        (function (AttributeTypeCode) {
            AttributeTypeCode[AttributeTypeCode["Boolean"] = 1] = "Boolean";
            AttributeTypeCode[AttributeTypeCode["Date"] = 2] = "Date";
            AttributeTypeCode[AttributeTypeCode["DateTime"] = 3] = "DateTime";
            AttributeTypeCode[AttributeTypeCode["Decimal"] = 4] = "Decimal";
            AttributeTypeCode[AttributeTypeCode["Email"] = 5] = "Email";
            AttributeTypeCode[AttributeTypeCode["Int"] = 6] = "Int";
            AttributeTypeCode[AttributeTypeCode["Phone"] = 7] = "Phone";
            AttributeTypeCode[AttributeTypeCode["String"] = 8] = "String";
            AttributeTypeCode[AttributeTypeCode["Text"] = 9] = "Text";
            AttributeTypeCode[AttributeTypeCode["Url"] = 10] = "Url";
            AttributeTypeCode[AttributeTypeCode["Currency"] = 11] = "Currency";
            AttributeTypeCode[AttributeTypeCode["Time"] = 12] = "Time";
        })(Core.AttributeTypeCode || (Core.AttributeTypeCode = {}));
        var AttributeTypeCode = Core.AttributeTypeCode;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
