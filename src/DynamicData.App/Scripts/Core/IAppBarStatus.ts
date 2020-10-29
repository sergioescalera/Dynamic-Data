module DynamicData.Core {

    "use strict";
    
    export interface IAppBarStatus {

        IsNewDisabled: boolean;
        IsRefreshDisabled: boolean;
        IsDeleteDisabled: boolean;
        IsSaveDisabled: boolean;
        IsCancelDisabled: boolean;

        Detail(): void;
        Master(): void;
    }
}