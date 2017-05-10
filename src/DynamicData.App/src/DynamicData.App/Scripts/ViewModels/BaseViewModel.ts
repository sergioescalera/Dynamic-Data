module DynamicData.ViewModels {

    "use strict";

    export class BaseViewModel {

        Settings: Core.ISettings;

        constructor(settings?: Core.ISettings) {

            this.Settings = settings || Data.storage.Settings;
        }
    }
}