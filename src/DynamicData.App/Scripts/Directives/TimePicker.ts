module DynamicData.UI.Directives {

    "use strict";

    class TimePicker {

        static $inject = ["$scope"];

        constructor(scope: ITimePickerScope) {

            Core.Trace.Message(`${timePickerName}.constructor`);

            scope.vm = new ViewModels.TimePickerViewModel(scope);
        }
    }

    angular.module(Config.appName)
        .directive("ddTimepicker", () => {

            return <ng.IDirective>{
                restrict: "E",
                controller: TimePicker,
                templateUrl: "html/TimePicker.html",
                scope: {
                    value: "=ngModel"
                }
            };
        });
}