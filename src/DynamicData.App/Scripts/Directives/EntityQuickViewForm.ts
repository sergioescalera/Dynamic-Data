module DynamicData.UI.Directives {

    "use strict";

    export interface IEntityQuickViewFormScope extends ng.IScope {
        entity: Core.Entity;
        open(): void;
        format(value: any, typeCode?: Core.AttributeTypeCode): string;
    }

    class EntityQuickViewForm {

        static $inject = [
            "$scope",
            "$templateCache",
            Data.templateRepositoryName
        ];

        TemplateUrl: string;

        constructor(
            scope: IEntityQuickViewFormScope,
            templateCache: ng.ITemplateCacheService,
            templateRepository: Data.ITemplateRepository) {

            Core.Trace.Message(`${entityQuickViewFormName}.constructor`);

            templateRepository
                .GetByName(scope.entity.Type.Name)
                .then((template) => {

                    let templateName = `quick-view-${scope.entity.Type.Name}`;

                    templateCache.put(templateName, template.quickView);

                    this.TemplateUrl = templateName;
                });
        }
    }

    angular.module(Config.appName)
        .directive("entityQuickViewForm", [
            "$compile",
            Data.templateRepositoryName,
            ($compile: ng.ICompileService, templateRepository: Data.ITemplateRepository) => {

                return {
                    template: `<div ng-include="vm.TemplateUrl"></div>`,
                    restrict: "E",
                    controller: EntityQuickViewForm,
                    controllerAs: "vm",
                    scope: {
                        entity: "=",
                        open: "&"
                    }
                } as ng.IDirective;
            }]);
}