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
        var FieldEditorViewModel = (function (_super) {
            __extends(FieldEditorViewModel, _super);
            function FieldEditorViewModel(scope) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                _super.call(this);
                this._scope = scope;
                scope.$watch("value", this.UpdateUI.bind(this));
                scope.$watch("vm.Checked", this.UpdateValue.bind(this));
                scope.$watch("vm.Text", this.UpdateValue.bind(this));
                scope.$watch("vm.Date", this.UpdateDateValue.bind(this));
                scope.$watch("vm.Time", this.UpdateTimeValue.bind(this));
                scope.$watch("vm.Value", this.UpdateValue.bind(this));
            }
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsInputText", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.Email,
                        DynamicData.Core.AttributeTypeCode.Phone,
                        DynamicData.Core.AttributeTypeCode.String,
                        DynamicData.Core.AttributeTypeCode.Url,
                        DynamicData.Core.AttributeTypeCode.Decimal,
                        DynamicData.Core.AttributeTypeCode.Int,
                        DynamicData.Core.AttributeTypeCode.Currency,
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsDatePicker", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.Date,
                        DynamicData.Core.AttributeTypeCode.DateTime
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsToggleSwitch", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Boolean;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsTextArea", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Text;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsTimePicker", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.DateTime,
                        DynamicData.Core.AttributeTypeCode.Time
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "DisplayName", {
                get: function () {
                    return this._scope.attribute.DisplayName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "InputType", {
                get: function () {
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Email) {
                        return "email";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Phone) {
                        return "tel";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.String) {
                        return "text";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Url) {
                        return "url";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Decimal) {
                        return "number";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Int) {
                        return "number";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Currency) {
                        return "number";
                    }
                },
                enumerable: true,
                configurable: true
            });
            FieldEditorViewModel.prototype.UpdateUI = function (newValue, oldValue) {
                if (this.RenderAsInputText && newValue !== this.Text) {
                    this.Text = newValue;
                }
                if (this.RenderAsTextArea && newValue !== this.Text) {
                    this.Text = newValue;
                }
                if (this.RenderAsToggleSwitch && newValue !== this.Checked) {
                    this.Checked = !!newValue;
                }
                if (this.RenderAsDatePicker && !moment(newValue).isSame(this.Date)) {
                    this.Date = newValue;
                }
                if (this.RenderAsTimePicker && moment(newValue).format("HH:mm") !== this.Time) {
                    this.Time = moment(newValue).format("HH:mm");
                }
            };
            FieldEditorViewModel.prototype.UpdateValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsInputText) {
                    this._scope.value = newValue;
                }
                else if (this.RenderAsTextArea) {
                    this._scope.value = newValue;
                }
                else if (this.RenderAsToggleSwitch) {
                    this._scope.value = !!newValue;
                }
            };
            FieldEditorViewModel.prototype.UpdateDateValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsDatePicker && this.RenderAsTimePicker) {
                    this._scope.value = this.CombineDateAndTime(newValue, this._scope.value);
                }
                else if (this.RenderAsDatePicker) {
                    this._scope.value = newValue;
                }
            };
            FieldEditorViewModel.prototype.UpdateTimeValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                var time = moment(moment().format("MM/DD/YYYY") + " " + (newValue || "00:00"), "MM/DD/YYYY HH:mm");
                if (this.RenderAsDatePicker && this.RenderAsTimePicker) {
                    this._scope.value = this.CombineDateAndTime(this._scope.value, time.toDate());
                }
                else if (this.RenderAsTimePicker) {
                    this._scope.value = time.toDate();
                }
            };
            FieldEditorViewModel.prototype.CombineDateAndTime = function (date, time) {
                if (!!date && !!time) {
                    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
                }
                return date || time;
            };
            return FieldEditorViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.FieldEditorViewModel = FieldEditorViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
