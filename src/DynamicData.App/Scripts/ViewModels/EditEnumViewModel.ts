module DynamicData.ViewModels {

    "use strict";

    export class EditEnumViewModel {

        private _mdDialog: ng.material.IDialogService;
        private _enumRepository: Data.IEnumRepository;

        DisplayName: string;
        Text: string;
        Item: Core.IEnum;
        Enums: Core.IEnum[];
        Options: string[];
        SeparatorKeys: number[];

        constructor(
            scope: UI.Controllers.IEditEnumScope,
            mdDialog: ng.material.IDialogService,
            mdConstant,
            enumRepository: Data.IEnumRepository,
            name: string) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!mdDialog) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
            }

            if (!enumRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("enumRepository"));
            }
            
            this._mdDialog = mdDialog;
            this._enumRepository = enumRepository;
            
            this.Enums = enumRepository.GetAll();
            this.Item = this.Enums.filter((o: Core.IEnum) => o.Name === name)[0] || null;

            this.SeparatorKeys = [mdConstant.KEY_CODE.ENTER, mdConstant.KEY_CODE.COMMA];

            scope.$watch("vm.Item", this.LoadEnum.bind(this));
        }

        Ok(): void {

            if (!this.Text) {
                return;
            }

            this._enumRepository.Save(this.Text, this.DisplayName, this.Options);

            this._mdDialog.hide(this.Text);
        }

        Cancel(): void {

            this._mdDialog.cancel();
        }

        private LoadEnum(): void {
            
            if (!this.Item) {
                this.DisplayName = "";
                this.Options = [];
                this.Text = "";
            } else {
                this.DisplayName = this.Item.DisplayName;
                this.Options = this.Item.Values;
            }
        }
    }
}