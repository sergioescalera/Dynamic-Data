var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var TimePicker = /** @class */ (function () {
                function TimePicker(scope) {
                    DynamicData.Core.Trace.Message(Directives.timePickerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.TimePickerViewModel(scope);
                }
                TimePicker.$inject = ["$scope"];
                return TimePicker;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("ddTimepicker", function () {
                return {
                    restrict: "E",
                    controller: TimePicker,
                    templateUrl: "html/TimePicker.html",
                    scope: {
                        value: "=ngModel"
                    }
                };
            });
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
