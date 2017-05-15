module DynamicData.UI.Directives {

    "use strict";

    class FieldEditor {

        static $inject = ["$scope"];

        constructor(scope: IFieldEditorScope) {

            Core.Trace.Message(`${fieldEditorName}.constructor`);

            scope.vm = new ViewModels.FieldEditorViewModel(scope);
        }
    }

    angular.module(Config.appName)
        .directive("ddEditor", () => {

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