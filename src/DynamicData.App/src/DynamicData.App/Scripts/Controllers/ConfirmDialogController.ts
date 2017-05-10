module DynamicData.UI.Controllers {

    "use strict";

    export interface IConfirmDialogScope extends ng.IScope {
        title: string;
        message: string;
    }

    export class ConfirmDialogController {

        static $inject = [
            "$scope"
        ];

        private _mdPanelRef: ng.material.IPanelRef;

        constructor(scope: IConfirmDialogScope, mdPanelRef: ng.material.IPanelRef) {

            scope.title = "Abc";
            scope.message = "Xyz";

            this._mdPanelRef = mdPanelRef;
        }
    }
}