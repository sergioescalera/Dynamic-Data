import { systemAttributes } from './AttributeType';
import { Strings } from './Resources';
import { Validation } from './Validation';

export class EntityType {

    _name = "";
    _displayName = "";
    _displayPluralName = "";
    _icon = "";
    _attributes = [];

    constructor(name, displayName, displayPluralName) {

        this.Name = name;
        this.DisplayName = displayName;
        this.DisplayPluralName = displayPluralName;
    }

    get Name() {

        return this._name;
    }
    set Name(value) {

        Validation.EnsureRequired(value, "Name");

        this._name = value;
    }

    get DisplayName() {

        return this._displayName;
    }
    set DisplayName(value) {

        Validation.EnsureRequired(value, "Display Name");

        this._displayName = value;
    }

    get DisplayPluralName() {

        return this._displayPluralName;
    }
    set DisplayPluralName(value) {

        Validation.EnsureRequired(value, "Display Plural Name");

        this._displayPluralName = value;
    }

    get Icon() {

        return this._icon;
    }
    set Icon(value) {

        this._icon = value;
    }

    get Attributes() {

        if (!this._attributes) {

            this._attributes = systemAttributes();
        }

        return this._attributes;
    }
    set Attributes(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    AddAttribute(attribute) {

        if (!attribute) {
            return false;
        }

        const found = this.GetAttribute(attribute.Name);

        if (!!found) {
            return false;
        }

        this.Attributes.push(attribute);
    }

    DeleteAttribute(name) {

        const found = this.GetAttribute(name);

        if (!found) {
            return false;
        }

        const attributes = this.Attributes;
        const index = attributes.indexOf(found);

        attributes.splice(index, 1);

        return true;
    }

    GetAttribute(name) {

        if (!name) {
            return null;
        }

        const attributes = this.Attributes;
        const filter = attributes.filter((a) => a.Name === name);

        return !!filter && !!filter.length ? filter[0] : null;
    }

    IsValid() {

        return this.NameIsValid() && !!this.DisplayName && !!this.DisplayPluralName && this.Attributes.length > 0;
    }

    NameIsValid() {

        const name = this._name;

        return typeof name === "string"
            && name !== null
            && name !== ""
            && name !== "undefined"
            && /^[a-zA-Z_]+$/.test(name);
    }
}