module DynamicData.UI.Directives {

    "use strict";

    class FieldEditor {

        static $inject = ["$scope", Data.enumRepositoryName];

        constructor(scope: IFieldEditorScope, enumRepository: Data.IEnumRepository) {

            Core.Trace.Message(`${fieldEditorName}.constructor`);

            scope.vm = new ViewModels.FieldEditorViewModel(scope, enumRepository);
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