var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Trace = /** @class */ (function () {
            function Trace() {
            }
            Trace.ConsoleSupport = function () {
                return typeof console !== undefinedstr &&
                    typeof console.log !== undefinedstr &&
                    typeof console.warn !== undefinedstr &&
                    typeof console.error !== undefinedstr;
            };
            Trace.Message = function (message) {
                if (!Trace.ConsoleSupport()) {
                    return;
                }
                console.log(message);
            };
            Trace.Warning = function (message) {
                if (!Trace.ConsoleSupport()) {
                    return;
                }
                console.warn(message);
            };
            return Trace;
        }());
        Core.Trace = Trace;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
