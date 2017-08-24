var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EditEnumViewModel = (function () {
            function EditEnumViewModel(scope, mdDialog, enumRepository, name) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!enumRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("enumRepository"));
                }
                this._mdDialog = mdDialog;
                this._enumRepository = enumRepository;
                this.Enums = enumRepository.GetAll();
                this.FilteredEnums = this.Enums;
                this.Item = this.Enums.filter(function (o) { return o.Name === name; })[0] || null;
                scope.$watch("vm.Item", this.LoadEnum.bind(this));
            }
            EditEnumViewModel.prototype.Ok = function () {
                if (!this.Text) {
                    return;
                }
                this._enumRepository.Save(this.Text, this.DisplayName, this.Options);
                this.Reload(this.Text);
                this.View();
            };
            EditEnumViewModel.prototype.Done = function () {
                if (!this.Item.Name) {
                    return;
                }
                this._mdDialog.hide(this.Item.Name);
            };
            EditEnumViewModel.prototype.Cancel = function () {
                this._mdDialog.cancel();
            };
            EditEnumViewModel.prototype.Filter = function () {
                var _this = this;
                this.FilteredEnums = this.Enums.filter(function (o) { return o.Name.toLowerCase().indexOf(_this.Text.toLowerCase()) >= 0; });
            };
            EditEnumViewModel.prototype.View = function () {
                this.DisplayName = this.Item.DisplayName;
                this.Options = this.Item.Values;
                this.Text = this.Item.Name;
                this.State = "View";
            };
            EditEnumViewModel.prototype.Edit = function () {
                this.State = "Edit";
                this.DisplayName = this.Item.DisplayName;
                this.Options = this.Item.Values;
                this.Text = this.Item.Name;
            };
            EditEnumViewModel.prototype.Select = function () {
                this.DisplayName = "";
                this.Options = [];
                this.Text = "";
                this.State = "Select";
            };
            EditEnumViewModel.prototype.New = function () {
                this.DisplayName = "";
                this.Options = [];
                this.Text = "";
                this.State = "New";
            };
            EditEnumViewModel.prototype.SelectEnum = function () {
                var _this = this;
                var selectedItems = this.Enums.filter(function (o) { return o.Name.toLowerCase() == _this.Text.toLowerCase(); });
                if (selectedItems.length > 0 && selectedItems[0] != null) {
                    this.DisplayName = selectedItems[0].DisplayName;
                    this.Options = selectedItems[0].Values;
                }
            };
            EditEnumViewModel.prototype.SelectState = function () {
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
            };
            EditEnumViewModel.prototype.LoadEnum = function () {
                if (!this.Item) {
                    this.Action = "Select";
                    this.Select();
                }
                else {
                    this.View();
                }
            };
            EditEnumViewModel.prototype.Reload = function (name) {
                this.Enums = this._enumRepository.GetAll();
                this.FilteredEnums = this.Enums;
                this.Item = this.Enums.filter(function (o) { return o.Name === name; })[0] || null;
            };
            return EditEnumViewModel;
        }());
        ViewModels.EditEnumViewModel = EditEnumViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
