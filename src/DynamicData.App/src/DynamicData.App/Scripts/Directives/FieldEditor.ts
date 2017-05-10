module DynamicData.UI.Directives {

    "use strict";

    export interface IFieldEditorScope extends ng.IScope {
        attribute: Core.AttributeType;
        value?: any;
        vm: ViewModels.FieldEditorViewModel;
    }

    class FieldEditor {

        static $inject = ["$scope"];

        constructor(scope: IFieldEditorScope) {

            Core.Trace.Message(`${fieldEditorName}.constructor`);

            scope.vm = new ViewModels.FieldEditorViewModel(scope);
        }
    }

    angular.module(Config.appName)
        .directive("editor", () => {

            return <ng.IDirective>{
                restrict: "E",
                controller: FieldEditor,
                templateUrl: "html/FieldEditor.html",
                scope: {
                    attribute: "=",
                    value: "="
                }
            };
        });
}