var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeTypeSerialization = (function () {
            function AttributeTypeSerialization() {
            }
            AttributeTypeSerialization.FromPOCO = function (poco) {
                return new Core.AttributeType(poco.Name, poco.DisplayName, poco.TypeCode);
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
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
