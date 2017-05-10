module DynamicData.UI.Directives {

    "use strict";

    export interface ITypeQuickViewFormScope extends ng.IScope {
        type: Core.EntityType;
        open(): void;
    }

    class TypeQuickViewForm {

        static $inject = ["$scope"];

        constructor(scope: ITypeQuickViewFormScope) {

            Core.Trace.Message(`${typeQuickViewFormName}.constructor`);
        }
    }

    angular.module("DynamicData.App")
        .directive("typeQuickViewForm", () => {

            return <ng.IDirective>{
                restrict: "E",
                controller: TypeQuickViewForm,
                templateUrl: "html/TypeQuickViewForm.html",
                scope: {
                    type: "=",
                    open: "&"
                }
            };
        });
}