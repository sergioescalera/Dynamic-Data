module DynamicData.UI.Directives {

    "use strict";

    export interface IEntityQuickViewFormScope extends ng.IScope {
        entity: Core.Entity;
        open(): void;
        format(value: any, typeCode?: Core.AttributeTypeCode): string;
    }

    class EntityQuickViewForm {

        static $inject = ["$scope"];

        constructor(scope: IEntityQuickViewFormScope) {

            Core.Trace.Message(`${entityQuickViewFormName}.constructor`);

            scope.format = this.Format.bind(this);
        }

        Format(value: any, typeCode?: Core.AttributeTypeCode): string {

            if (typeCode === Core.AttributeTypeCode.Boolean || typeof value === "boolean") {

                return !value ? Resources.Strings.No : Resources.Strings.Yes;
            }

            if (!angular.isDefined(value)) {

                return "";
            }

            if (value === null) {

                return "";
            }

            if (typeCode === Core.AttributeTypeCode.Date) {

                return moment(value).format("MMM DD YYYY");
            }

            if (typeCode === Core.AttributeTypeCode.DateTime) {

                return moment(value).format("MMM DD YYYY hh:mm A");
            }

            if (typeCode === Core.AttributeTypeCode.Time) {

                return moment(value).format("hh:mm A");
            }

            if (moment.isDate(value)) {

                return moment(value).format("MMM DD YYYY");
            }

            return value.toString();
        }
    }

    angular.module(Config.appName)
        .directive("entityQuickViewForm", [
            "$compile",
            Data.templateRepositoryName,
            ($compile: ng.ICompileService, templateRepository: Data.ITemplateRepository) => {

                return <ng.IDirective>{
                    compile: function EntityQuickViewFormResolver(tElement: JQuery, tAttrs: ng.IAttributes): Function {

                        return (scope: IEntityQuickViewFormScope, element: any) => {

                            templateRepository
                                .GetByName(scope.entity.Type.Name)
                                .then(function GetByNameCompleted(template: Core.IEntityTemplate): void {

                                    tElement.html(template.quickView);

                                    var compiled: JQuery = $compile(tElement.html())(scope);

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
            }]);
}