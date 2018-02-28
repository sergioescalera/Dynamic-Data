var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeTypeSerialization = /** @class */ (function () {
            function AttributeTypeSerialization() {
            }
            AttributeTypeSerialization.FromPOCO = function (poco) {
                return new Core.AttributeType(poco.Name, poco.DisplayName, poco.TypeCode, poco.EnumName || null);
            };
            AttributeTypeSerialization.ToPOCO = function (attribute) {
                return {
                    Name: attribute.Name,
                    DisplayName: attribute.DisplayName,
                    TypeCode: attribute.TypeCode,
                    EnumName: attribute.EnumName
                };
            };
            return AttributeTypeSerialization;
        }());
        Core.AttributeTypeSerialization = AttributeTypeSerialization;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
