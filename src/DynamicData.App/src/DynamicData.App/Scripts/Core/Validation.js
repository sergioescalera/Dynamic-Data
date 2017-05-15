var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Validation = (function () {
            function Validation() {
            }
            Validation.EnsureRequired = function (value, label, validateEmptyString) {
                if (validateEmptyString === void 0) { validateEmptyString = true; }
                if (value === undefined || value === null) {
                    throw new Error(DynamicData.Resources.Strings.RequiredFieldMessageFormat(label));
                }
                if (validateEmptyString && value === "") {
                    throw new Error(DynamicData.Resources.Strings.RequiredFieldMessageFormat(label));
                }
            };
            return Validation;
        }());
        Core.Validation = Validation;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
