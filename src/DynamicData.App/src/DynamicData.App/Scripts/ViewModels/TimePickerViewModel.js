var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var TimePickerViewModel = (function () {
            function TimePickerViewModel(scope) {
                this.Options = [];
                var multiplier = 4;
                var count = 24 * multiplier;
                for (var i = 0; i < count; i++) {
                    var min = i * 60 / multiplier;
                    var m = moment("01/01/2000", "MM/DD/YYYY").add({ minutes: min });
                    this.Options.push(m.format("HH:mm"));
                }
            }
            return TimePickerViewModel;
        }());
        ViewModels.TimePickerViewModel = TimePickerViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
