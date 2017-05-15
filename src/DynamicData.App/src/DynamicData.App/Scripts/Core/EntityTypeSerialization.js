var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var EntityTypeSerialization = (function () {
            function EntityTypeSerialization() {
            }
            EntityTypeSerialization.ToPOCO = function (type) {
                return {
                    Name: type.Name,
                    DisplayName: type.DisplayName,
                    DisplayPluralName: type.DisplayPluralName,
                    Icon: type.Icon,
                    Attributes: type.Attributes.map(function (a) { return Core.AttributeTypeSerialization.ToPOCO(a); })
                };
            };
            EntityTypeSerialization.FromPOCO = function (poco) {
                var type = new Core.EntityType(poco.Name, poco.DisplayName, poco.DisplayPluralName);
                type.Icon = poco._icon;
                for (var i = 0; i < poco.Attributes.length; i++) {
                    try {
                        var attribute = Core.AttributeTypeSerialization.FromPOCO(poco.Attributes[i]);
                        type.Attributes.push(attribute);
                    }
                    catch (e) {
                        Core.Trace.Warning(e);
                    }
                }
                return type;
            };
            return EntityTypeSerialization;
        }());
        Core.EntityTypeSerialization = EntityTypeSerialization;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
