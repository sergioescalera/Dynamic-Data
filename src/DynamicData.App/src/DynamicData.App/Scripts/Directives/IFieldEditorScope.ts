module DynamicData.UI.Directives {

    "use strict";
    
    export interface IFieldEditorScope extends ng.IScope {
        attribute: Core.AttributeType;
        value?: any;
        vm: ViewModels.FieldEditorViewModel;
    }
}