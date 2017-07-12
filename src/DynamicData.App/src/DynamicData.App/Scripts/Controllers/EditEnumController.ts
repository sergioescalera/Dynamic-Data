module DynamicData.UI.Controllers {

    "use strict";

    export interface IEditEnumScope extends ng.IScope {
        vm: ViewModels.EditEnumViewModel;
    }

    export class EditEnumController {

        static $inject = [
            "$scope",
            "$mdDialog",
            Data.enumRepositoryName,
            "name"
        ];

        constructor(
            scope: IEditEnumScope,
            mdDialog: ng.material.IDialogService,
            enumRepository: Data.IEnumRepository,
            name: string) {
            
            scope.vm = new ViewModels.EditEnumViewModel(scope, mdDialog, enumRepository, name);
        }
    }
}