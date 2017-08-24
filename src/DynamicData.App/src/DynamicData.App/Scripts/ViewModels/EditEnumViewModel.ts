module DynamicData.ViewModels {

    "use strict";

    export class EditEnumViewModel {

        private _mdDialog: ng.material.IDialogService;
        private _enumRepository: Data.IEnumRepository;

        DisplayName: string;
        Text: string;
        Item: Core.IEnum;
        Enums: Core.IEnum[];
        FilteredEnums: Core.IEnum[];
        Options: string[];
        State: string;

        constructor(
            scope: UI.Controllers.IEditEnumScope,
            mdDialog: ng.material.IDialogService,
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
            this.FilteredEnums = this.Enums;
            this.Item = this.Enums.filter((o: Core.IEnum) => o.Name === name)[0] || null;

            scope.$watch("vm.Item", this.LoadEnum.bind(this));
        }

        Ok(): void {
            if (!this.Text) {
                return;
            }

            this._enumRepository.Save(this.Text, this.DisplayName, this.Options);
            this.Reload(this.Text);
            this.View();
        }

        Done(): void {
            if (!this.Item.Name) {
                return;
            }
            this._mdDialog.hide(this.Item.Name);
        }

        Cancel(): void {
            this._mdDialog.cancel();
        }


        Filter(): void {
            this.FilteredEnums = this.Enums.filter((o: Core.IEnum) => o.Name.toLowerCase().indexOf(this.Text.toLowerCase()) >= 0);
        }

        View(): void {
            this.DisplayName = this.Item.DisplayName;
            this.Options = this.Item.Values;
            this.Text = this.Item.Name;
            this.State = "View";
        }

        Edit(): void {
            this.State = "Edit";
            this.DisplayName = this.Item.DisplayName;
            this.Options = this.Item.Values;
            this.Text = this.Item.Name;
        }

        Select(): void {
            this.DisplayName = "";
            this.Options = [];
            this.Text = "";
            this.State = "Select";
        }

        New(): void {
            this.DisplayName = "";
            this.Options = [];
            this.Text = "";
            this.State = "New";
        }

        SelectEnum(): void {
            var selectedItems: Core.IEnum[] = this.Enums.filter((o: Core.IEnum) => o.Name.toLowerCase() == this.Text.toLowerCase());
            if (selectedItems.length > 0 && selectedItems[0] != null) {
                this.DisplayName = selectedItems[0].DisplayName;
                this.Options = selectedItems[0].Values;
            }
        }

        SelectState(): void {
            switch (this.State) {
                case "New":
                    this.New();
                    break;
                case "Select":
                    this.Select();
                    break;
                case "Edit":
                    this.Edit();
                    break;
                default:
                    this.View();
                    break;
            }
        }

        private LoadEnum(): void {
            if (!this.Item) {
                this.Action = "Select";
                this.Select();
            } else {
                this.View();
            }
        }

        private Reload(name:string): void {
            this.Enums = this._enumRepository.GetAll();
            this.FilteredEnums = this.Enums;
            this.Item = this.Enums.filter((o: Core.IEnum) => o.Name === name)[0] || null;
        }
    }
}