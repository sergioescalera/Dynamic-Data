var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var FieldEditor = (function () {
                function FieldEditor(scope, enumRepository) {
                    DynamicData.Core.Trace.Message(Directives.fieldEditorName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.FieldEditorViewModel(scope, enumRepository);
                }
                FieldEditor.$inject = ["$scope", DynamicData.Data.enumRepositoryName];
                return FieldEditor;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("ddEditor", function () {
                return {
                    restrict: "E",
                    controller: FieldEditor,
                    templateUrl: "html/FieldEditor.html",
                    scope: {
                        attribute: "=",
                        value: "="
                    }
                };
            });
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
