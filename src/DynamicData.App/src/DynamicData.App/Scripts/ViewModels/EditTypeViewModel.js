var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EditTypeViewModel = (function (_super) {
            __extends(EditTypeViewModel, _super);
            function EditTypeViewModel(scope, location, mdToast, mdDialog, appBarStatus, entityTypeRepository, entityTypeName) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdToast) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdToast"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                _super.call(this);
                this._scope = scope;
                this._location = location;
                this._mdToast = mdToast;
                this._mdDialog = mdDialog;
                this._appBarStatus = appBarStatus;
                this._entityTypeRepository = entityTypeRepository;
                this._entityTypeName = entityTypeName;
                this.Init();
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$on("AppBarScope::delete", this.Delete.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            }
            Object.defineProperty(EditTypeViewModel.prototype, "Model", {
                get: function () {
                    if (!this._model) {
                        this._model = !this.EntityType ? {
                            Attributes: [{
                                    TypeCode: DynamicData.Core.AttributeTypeCode.String
                                }]
                        } : DynamicData.Core.EntityTypeSerialization.ToPOCO(this.EntityType);
                        this._model.Attributes.forEach(function (a) { return a.Options = []; });
                    }
                    return this._model;
                },
                enumerable: true,
                configurable: true
            });
            EditTypeViewModel.prototype.Init = function () {
                this._model = null;
                this.IsNew = !this._entityTypeName;
                this.EntityType = this.IsNew ? null : this._entityTypeRepository.GetByName(this._entityTypeName);
                this.SelectedAttributes = {};
                if (!this.IsNew && !this.EntityType) {
                    this._location.url(DynamicData.Config.Routes.manage());
                    return;
                }
                this._appBarStatus.Detail();
                this.TypeCodeOptions = Object
                    .keys(DynamicData.Core.AttributeTypeCode)
                    .filter(function (key) { return isNaN(parseInt(key)); })
                    .map(function (key) {
                    return {
                        name: key,
                        value: DynamicData.Core.AttributeTypeCode[key]
                    };
                });
                if (this._scope.TypeForm && this._scope.TypeForm.$dirty) {
                    this._scope.TypeForm.$setPristine();
                }
            };
            EditTypeViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Add");
                this.Model.Attributes.push({
                    TypeCode: DynamicData.Core.AttributeTypeCode.String
                });
            };
            EditTypeViewModel.prototype.Delete = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Delete");
                var attributes = this.Model.Attributes;
                for (var i = attributes.length - 1; i >= 0; i--) {
                    if (!!this.SelectedAttributes[i.toString()]) {
                        attributes.splice(i, 1);
                    }
                }
                if (attributes.length === 0) {
                    this.Add();
                }
                this.SelectedAttributes = {};
            };
            EditTypeViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Save");
                var exit = true;
                if (this._scope.TypeForm.$valid) {
                    var type;
                    try {
                        type = DynamicData.Core.EntityTypeSerialization.FromPOCO(this.Model);
                    }
                    catch (e) {
                        DynamicData.Core.Trace.Warning(e);
                    }
                    var result;
                    if (this.IsNew && !!type) {
                        result = this._entityTypeRepository.Create(type);
                    }
                    else if (!!type) {
                        result = this._entityTypeRepository.Update(type);
                    }
                }
                else {
                    exit = false;
                    this.SetFormDirty();
                    this._mdToast.show(this._mdToast.simple()
                        .textContent("Please enter all required data.")
                        .position("top right")
                        .hideDelay(5000));
                }
                if (exit) {
                    this._location.url(DynamicData.Config.Routes.manage());
                }
            };
            EditTypeViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.manage());
            };
            EditTypeViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Refresh");
                this.Init();
            };
            EditTypeViewModel.prototype.EditEnum = function (attribute) {
                var options = {
                    controller: DynamicData.UI.Controllers.EditEnumController,
                    templateUrl: "html/EditEnum.html",
                    parent: angular.element(document.body),
                    resolve: {
                        name: function () { return attribute.EnumName; }
                    }
                };
                this._mdDialog.show(options)
                    .then(function (name) {
                    debugger;
                    attribute.EnumName = name;
                }, function () {
                    console.log("Edit Enum was canceled.");
                });
            };
            EditTypeViewModel.prototype.SetFormDirty = function () {
                var _this = this;
                var keys = Object
                    .keys(this._scope.TypeForm)
                    .filter(function (k) { return k.indexOf("$") !== 0; });
                keys.forEach(function (key) {
                    var field = _this._scope.TypeForm[key];
                    if (field.$valid) {
                        return;
                    }
                    if (!field.$dirty) {
                        field.$setDirty();
                    }
                    if (field.$untouched) {
                        field.$setTouched();
                    }
                });
            };
            return EditTypeViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.EditTypeViewModel = EditTypeViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
