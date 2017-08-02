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
                this._mdDialog.hide(this.Text);
            };
            EditEnumViewModel.prototype.Cancel = function () {
                this._mdDialog.cancel();
            };
            EditEnumViewModel.prototype.Filter = function () {
                var _this = this;
                this.FilteredEnums = this.Enums.filter(function (o) { return o.Name.toLowerCase().indexOf(_this.Text.toLowerCase()) >= 0; });
            };
            EditEnumViewModel.prototype.Clear = function () {
                this.Item = null;
                this.DisplayName = "";
                this.Options = [];
                this.Text = "";
                this.New = true;
                this.FilteredEnums = this.Enums;
            };
            EditEnumViewModel.prototype.LoadEnum = function () {
                if (!this.Item) {
                    this.DisplayName = "";
                    this.Options = [];
                    this.Text = "";
                    this.New = true;
                }
                else {
                    this.DisplayName = this.Item.DisplayName;
                    this.Options = this.Item.Values;
                    this.Text = this.Item.Name;
                    this.New = false;
                }
            };
            return EditEnumViewModel;
        }());
        ViewModels.EditEnumViewModel = EditEnumViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
