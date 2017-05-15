module DynamicData.ViewModels {

    "use strict";

    export class FieldEditorViewModel extends BaseViewModel {

        Checked: boolean;
        Text: string;
        Date: Date;
        Time: string;

        _scope: UI.Directives.IFieldEditorScope;

        constructor(scope: UI.Directives.IFieldEditorScope) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            super();

            this._scope = scope;

            scope.$watch("value", this.UpdateUI.bind(this));
            scope.$watch("vm.Checked", this.UpdateValue.bind(this));
            scope.$watch("vm.Text", this.UpdateValue.bind(this));
            scope.$watch("vm.Date", this.UpdateDateValue.bind(this));
            scope.$watch("vm.Time", this.UpdateTimeValue.bind(this));
            scope.$watch("vm.Value", this.UpdateValue.bind(this));
        }

        get RenderAsInputText(): boolean {

            return [
                Core.AttributeTypeCode.Email,
                Core.AttributeTypeCode.Phone,
                Core.AttributeTypeCode.String,
                Core.AttributeTypeCode.Url,
                Core.AttributeTypeCode.Decimal,
                Core.AttributeTypeCode.Int,
                Core.AttributeTypeCode.Currency,
            ].indexOf(this._scope.attribute.TypeCode) >= 0;
        }

        get RenderAsDatePicker(): boolean {

            return [
                Core.AttributeTypeCode.Date,
                Core.AttributeTypeCode.DateTime
            ].indexOf(this._scope.attribute.TypeCode) >= 0;
        }

        get RenderAsToggleSwitch(): boolean {

            return this._scope.attribute.TypeCode === Core.AttributeTypeCode.Boolean;
        }

        get RenderAsTextArea(): boolean {

            return this._scope.attribute.TypeCode === Core.AttributeTypeCode.Text;
        }

        get RenderAsTimePicker(): boolean {

            return [
                Core.AttributeTypeCode.DateTime,
                Core.AttributeTypeCode.Time
            ].indexOf(this._scope.attribute.TypeCode) >= 0;
        }

        get DisplayName(): string {

            return this._scope.attribute.DisplayName;
        }

        get InputType(): string {

            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Email) {
                return "email";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Phone) {
                return "tel";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.String) {
                return "text";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Url) {
                return "url";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Decimal) {
                return "number";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Int) {
                return "number";
            }
            if (this._scope.attribute.TypeCode === Core.AttributeTypeCode.Currency) {
                return "number";
            }
        }

        private UpdateUI(newValue: any, oldValue: any): void {

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
        }

        private UpdateValue(newValue: any, oldValue: any): void {

            if (newValue === oldValue) {
                return;
            }

            if (this.RenderAsInputText) {

                this._scope.value = newValue;

            } else if (this.RenderAsTextArea) {

                this._scope.value = newValue;

            } else if (this.RenderAsToggleSwitch) {

                this._scope.value = !!newValue;
            }
        }

        private UpdateDateValue(newValue: any, oldValue: any): void {

            if (newValue === oldValue) {
                return;
            }

            if (this.RenderAsDatePicker && this.RenderAsTimePicker) {

                this._scope.value = this.CombineDateAndTime(newValue, this._scope.value);

            } else if (this.RenderAsDatePicker) {

                this._scope.value = newValue;
            }
        }

        private UpdateTimeValue(newValue: any, oldValue: any): void {

            if (newValue === oldValue) {
                return;
            }

            var time = moment(`${moment().format("MM/DD/YYYY")} ${(newValue || "00:00")}`, "MM/DD/YYYY HH:mm");

            if (this.RenderAsDatePicker && this.RenderAsTimePicker) {

                this._scope.value = this.CombineDateAndTime(this._scope.value, time.toDate());

            } else if (this.RenderAsTimePicker) {

                this._scope.value = time.toDate();
            }
        }

        private CombineDateAndTime(date: Date, time: Date): Date {

            if (!!date && !!time) {

                return new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds());
            }

            return date || time;
        }
    }
}