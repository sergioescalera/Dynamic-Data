module DynamicData.ViewModels {

    "use strict";

    export class TimePickerViewModel {

        Options: string[];

        constructor(scope: UI.Directives.ITimePickerScope) {
            
            this.Options = [];

            var multiplier = 4;
            var count = 24 * multiplier;
            for (var i: number = 0; i < count; i++) {
                var min: number = i * 60 / multiplier;
                var m: moment.Moment = moment("01/01/2000", "MM/DD/YYYY").add({ minutes: min });
                this.Options.push(m.format("HH:mm"));
            }
        }
    }
}