var DynamicData;
(function (DynamicData) {
    var Resources;
    (function (Resources) {
        "use strict";
        var Strings = /** @class */ (function () {
            function Strings() {
            }
            Strings.RequiredFieldMessageFormat = function (paramName) { return "'" + paramName + "' cannot be null or empty."; };
            Strings.RequiredArgumentMessageFormat = function (paramName) { return "Argument cannot be null or empty '" + paramName + "'."; };
            Strings.DuplicatedEntityTypeMessageFormat = function (type) { return "Duplicated entity type '" + type + "'."; };
            Strings.MissingEntityTypeMessageFormat = function (type) { return "Entity type '" + type + "' is missing."; };
            Strings.NotSupportedMessage = "Not supported.";
            Strings.SystemAttributeSerializationMessageFormat = function (name) { return "Unable to serialize a System Attribute " + name + "."; };
            Strings.No = "No";
            Strings.Yes = "Yes";
            return Strings;
        }());
        Resources.Strings = Strings;
    })(Resources = DynamicData.Resources || (DynamicData.Resources = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=Strings.js.map