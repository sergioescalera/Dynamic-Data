module DynamicData.UI.Controllers {

    "use strict";

    export interface IEditEnumScope extends ng.IScope {
        vm: ViewModels.EditEnumViewModel;
    }

    export class EditEnumController {

        static $inject = [
            "$scope",
            "$mdDialog",
            "$mdConstant",
            Data.enumRepositoryName,
            "name"
        ];

        constructor(
            scope: IEditEnumScope,
            mdDialog: ng.material.IDialogService,
            mdConstant,
            enumRepository: Data.IEnumRepository,
            name: string) {
            
            scope.vm = new ViewModels.EditEnumViewModel(scope, mdDialog, mdConstant, enumRepository, name);
        }
    }
}