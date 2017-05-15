module DynamicData.Core {

    "use strict";

    export class EntityType implements IEntityType {

        private _name: string;
        private _displayName: string;
        private _displayPluralName: string;
        private _icon: string;
        private _attributes: AttributeType[];

        constructor(name: string, displayName: string, displayPluralName: string) {

            this.Name = name;
            this.DisplayName = displayName;
            this.DisplayPluralName = displayPluralName;
        }

        get Name(): string {

            return this._name;
        }
        set Name(value: string) {

            Validation.EnsureRequired(value, "Name");

            this._name = value;
        }

        get DisplayName(): string {

            return this._displayName;
        }
        set DisplayName(value: string) {

            Validation.EnsureRequired(value, "Display Name");

            this._displayName = value;
        }

        get DisplayPluralName(): string {

            return this._displayPluralName;
        }
        set DisplayPluralName(value: string) {

            Validation.EnsureRequired(value, "Display Plural Name");

            this._displayPluralName = value;
        }

        get Icon(): string {

            return this._icon;
        }
        set Icon(value: string) {

            this._icon = value;
        }

        get Attributes(): IAttributeType[] {

            if (!this._attributes) {

                this._attributes = [];
            }

            return this._attributes;
        }
        set Attributes(value: IAttributeType[]) {
            throw new Error(Resources.Strings.NotSupportedMessage);
        }

        AddAttribute(attribute: IAttributeType): boolean {

            if (!attribute) {
                return false;
            }

            var found: IAttributeType = this.GetAttribute(attribute.Name);

            if (!!found) {
                return false;
            }

            this.Attributes.push(attribute);
        }

        DeleteAttribute(name: string): boolean {

            var found: IAttributeType = this.GetAttribute(name);

            if (!found) {
                return false;
            }

            var attributes: IAttributeType[] = this.Attributes;
            var index: number = attributes.indexOf(found);

            attributes.splice(index, 1);

            return true;
        }

        GetAttribute(name: string): IAttributeType {

            if (!name) {
                return null;
            }

            var filter: IAttributeType[] = this.Attributes.filter((a: AttributeType) => a.Name === name);

            return !!filter && !!filter.length ? filter[0] : null;
        }

        IsValid(): boolean {

            return this.NameIsValid() && !!this.DisplayName && !!this.DisplayPluralName && this.Attributes.length > 0;
        }

        private NameIsValid(): boolean {

            return angular.isDefined(this._name)
                && angular.isString(this._name)
                && this._name !== null
                && this._name !== ""
                && this._name !== "undefined"
                && /^[a-zA-Z_]+$/.test(this._name);
        }
    }
}