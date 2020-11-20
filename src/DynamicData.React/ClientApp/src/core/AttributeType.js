import { AttributeTypeCode } from './AttributeTypeCode';
import { Validation } from './Validation';

export class AttributeType {

    _name = "";
    _displayName = "";
    _typeCode = 0;
    _enumName = "";

    constructor(name, displayName, typeCode, enumName) {

        this.Name = name;
        this.DisplayName = displayName;
        this.TypeCode = typeCode;
        this.EnumName = enumName;
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

        Validation.EnsureRequired(value, "DisplayName");

        this._displayName = value;
    }

    get TypeCode() {

        return this._typeCode;
    }
    set TypeCode(value) {

        Validation.EnsureRequired(value, "TypeCode");

        this._typeCode = value;
    }

    get EnumName() {

        return this._enumName;
    }
    set EnumName(value) {

        this._enumName = value;
    }

    get TypeCodeName() {

        return AttributeTypeCode[this._typeCode];
    }

    get HtmlInputType() {

        if (this._typeCode === AttributeTypeCode.Email) {
            return "email";
        }

        if (this._typeCode === AttributeTypeCode.Decimal ||
            this._typeCode === AttributeTypeCode.Int ||
            this._typeCode === AttributeTypeCode.Currency) {
            return "number";
        }

        if (this._typeCode === AttributeTypeCode.Time) {
            return "time";
        }

        if (this._typeCode === AttributeTypeCode.Date) {
            return "date";
        }

        if (this._typeCode === AttributeTypeCode.DateTime) {
            return "datetime-local";
        }

        if (this._typeCode === AttributeTypeCode.Url) {
            return "url";
        }

        if (this._typeCode === AttributeTypeCode.Phone) {
            return "tel";
        }

        if (this._typeCode === AttributeTypeCode.Enum) {
            return "select";
        }

        if (this._typeCode === AttributeTypeCode.Boolean) {
            return "checkbox";
        }

        return "text";
    }

    get IsSystemAttribute() {

        return systemAttributes()
            .filter(o => o.Name === this.Name)
            .length > 0;
    }
}

export function systemAttributes() {
    return [
        new AttributeType("CreatedOn", "Created On", AttributeTypeCode.DateTime),
        new AttributeType("ModifiedOn", "Modified On", AttributeTypeCode.DateTime)
    ];
}