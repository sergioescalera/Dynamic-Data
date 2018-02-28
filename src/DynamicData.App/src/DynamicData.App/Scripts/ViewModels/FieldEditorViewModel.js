var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var FieldEditorViewModel = /** @class */ (function (_super) {
            __extends(FieldEditorViewModel, _super);
            function FieldEditorViewModel(scope, enumRepository) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!enumRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("enumRepository"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                if (_this.RenderAsOptionSet) {
                    var enumeration = enumRepository.GetByName(_this._scope.attribute.EnumName);
                    _this.Values = enumeration ? enumeration.Values : [];
                }
                scope.$watch("value", _this.UpdateUI.bind(_this));
                scope.$watch("vm.Checked", _this.UpdateValue.bind(_this));
                scope.$watch("vm.Text", _this.UpdateValue.bind(_this));
                scope.$watch("vm.Date", _this.UpdateDateValue.bind(_this));
                scope.$watch("vm.Time", _this.UpdateTimeValue.bind(_this));
                return _this;
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
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsOptionSet", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Enum;
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
                if (this.RenderAsOptionSet && newValue !== this.Text) {
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
                if (this.RenderAsToggleSwitch) {
                    this._scope.value = !!newValue;
                }
                else {
                    this._scope.value = newValue;
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
