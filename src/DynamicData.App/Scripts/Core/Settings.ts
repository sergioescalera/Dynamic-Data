module DynamicData.Core {

    "use strict";

    export interface ISettings {

        IsDebugEnabled: boolean;
        IsTraceEnabled: boolean;
        CurrentEntityType?: string;
    }
}