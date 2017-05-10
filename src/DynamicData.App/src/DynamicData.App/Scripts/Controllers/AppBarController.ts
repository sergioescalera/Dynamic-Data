module DynamicData.UI.Controllers {

    "use strict";

    interface IAppBarScope extends ng.IScope {
        fire(eventName: string): void;
        goTo(url: string): void;
        status: Core.IAppBarStatus;
    }

    class AppBarController {

        static $inject = [
            "$scope",
            "$rootScope",
            "$location",
            Core.appBarStatusName
        ];

        private _location: ng.ILocationService;
        private _rootScope: ng.IScope;

        constructor(
            scope: IAppBarScope,
            rootScope: ng.IScope,
            location: ng.ILocationService,
            status: Core.IAppBarStatus) {

            scope.fire = this.Fire.bind(this);
            scope.goTo = this.GoTo.bind(this);
            scope.status = status;

            this._rootScope = rootScope;
            this._location = location;
        }

        Fire(cmdName: string): void {

            Core.Trace.Message(`${appBarControllerName}.Fire(${cmdName})`);

            this._rootScope.$broadcast(`AppBarScope::${cmdName}`);
        }
        GoTo(url: string): void {

            Core.Trace.Message(`${appBarControllerName}.GoTo(${url})`);

            var event: ng.IAngularEvent = this._rootScope.$broadcast(`AppBarScope::goTo`);

            if (event.defaultPrevented) {

                return;
            }

            this._location.url(url);
        }
    }

    angular.module(Config.appName)
        .controller(appBarControllerName, AppBarController);
}