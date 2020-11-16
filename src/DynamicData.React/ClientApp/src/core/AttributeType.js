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