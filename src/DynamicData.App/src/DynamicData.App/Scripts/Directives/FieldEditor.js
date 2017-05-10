var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var FieldEditor = (function () {
                function FieldEditor(scope) {
                    DynamicData.Core.Trace.Message(Directives.fieldEditorName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.FieldEditorViewModel(scope);
                }
                FieldEditor.$inject = ["$scope"];
                return FieldEditor;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("editor", function () {
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
