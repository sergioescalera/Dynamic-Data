var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var TypeQuickViewForm = /** @class */ (function () {
                function TypeQuickViewForm(scope) {
                    DynamicData.Core.Trace.Message(Directives.typeQuickViewFormName + ".constructor");
                }
                TypeQuickViewForm.$inject = ["$scope"];
                return TypeQuickViewForm;
            }());
            angular.module("DynamicData.App")
                .directive("typeQuickViewForm", function () {
                return {
                    restrict: "E",
                    controller: TypeQuickViewForm,
                    templateUrl: "html/TypeQuickViewForm.html",
                    scope: {
                        type: "=",
                        open: "&"
                    }
                };
            });
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
