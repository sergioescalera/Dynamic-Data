var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var EntityQuickViewForm = /** @class */ (function () {
                function EntityQuickViewForm(scope) {
                    DynamicData.Core.Trace.Message(Directives.entityQuickViewFormName + ".constructor");
                    scope.format = this.Format.bind(this);
                }
                EntityQuickViewForm.prototype.Format = function (value, typeCode) {
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Boolean || typeof value === "boolean") {
                        return !value ? DynamicData.Resources.Strings.No : DynamicData.Resources.Strings.Yes;
                    }
                    if (!angular.isDefined(value)) {
                        return "";
                    }
                    if (value === null) {
                        return "";
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Date) {
                        return moment(value).format("MMM DD YYYY");
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.DateTime) {
                        return moment(value).format("MMM DD YYYY hh:mm A");
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Time) {
                        return moment(value).format("hh:mm A");
                    }
                    if (moment.isDate(value)) {
                        return moment(value).format("MMM DD YYYY");
                    }
                    return value.toString();
                };
                EntityQuickViewForm.$inject = ["$scope"];
                return EntityQuickViewForm;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("entityQuickViewForm", [
                "$compile",
                DynamicData.Data.templateRepositoryName,
                function ($compile, templateRepository) {
                    return {
                        compile: function EntityQuickViewFormResolver(tElement, tAttrs) {
                            return function (scope, element) {
                                templateRepository
                                    .GetByName(scope.entity.Type.Name)
                                    .then(function GetByNameCompleted(template) {
                                    tElement.html(template.quickView);
                                    var compiled = $compile(tElement.html())(scope);
                                    element.html(compiled);
                                });
                            };
                        },
                        restrict: "E",
                        controller: EntityQuickViewForm,
                        scope: {
                            entity: "=",
                            open: "&"
                        }
                    };
                }
            ]);
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
