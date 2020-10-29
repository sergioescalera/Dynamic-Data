module DynamicData.UI.Controllers {

    "use strict";

    interface IProfileScope extends ng.IScope {
    }

    class ProfileController {

        static $inject = [
            "$scope",
            Core.appBarStatusName
        ];

        constructor(scope: IProfileScope, appBarStatus: Core.IAppBarStatus) {

            Core.Trace.Message(`${profileControllerName}.constructor`);
        }
    }

    angular.module(Config.appName)
        .controller(profileControllerName, ProfileController);
}