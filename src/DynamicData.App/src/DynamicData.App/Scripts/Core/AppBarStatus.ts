module DynamicData.Core {

    "use strict";

    class AppBarStatus implements IAppBarStatus {

        IsNewDisabled: boolean;
        IsRefreshDisabled: boolean;
        IsDeleteDisabled: boolean;
        IsSaveDisabled: boolean;
        IsCancelDisabled: boolean;

        Detail(): void {

            this.IsNewDisabled = false;
            this.IsRefreshDisabled = false;
            this.IsDeleteDisabled = false;
            this.IsSaveDisabled = false;
            this.IsCancelDisabled = false;
        }

        Master(): void {

            this.IsNewDisabled = false;
            this.IsRefreshDisabled = false;
            this.IsDeleteDisabled = false;
            this.IsSaveDisabled = true;
            this.IsCancelDisabled = true;
        }
    }

    angular.module(Config.appName)
        .factory(appBarStatusName, () => new AppBarStatus());
}