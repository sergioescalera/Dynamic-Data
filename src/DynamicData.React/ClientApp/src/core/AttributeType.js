import { AttributeTypeCode } from './AttributeTypeCode';
import { Validation } from './Validation';

/** Class representing an attribute type. */
export class AttributeType {

    _name = "";
    _displayName = "";
    _typeCode = 0;
    _enumName = "";

    /**
     * Creates an instance of the AttributeType class.
     * @param {string} name
     * @param {string} displayName
     * @param {number} typeCode
     * @param {string} enumName
     */
    constructor(name, displayName, typeCode, enumName) {

        this.Name = name;
        this.DisplayName = displayName;
        this.TypeCode = typeCode;
        this.EnumName = enumName;
    }

    /**
     * Gets the name of the attribute.
     * @returns {string} */
    get Name() {

        return this._name;
    }
    /**
     * Sets the name of the attribute.
     * @param {string} value */
    set Name(value) {

        Validation.EnsureRequired(value, "Name");

        this._name = value;
    }

    /**
     * Gets the display name of the attribute.
     * @returns {string} */
    get DisplayName() {

        return this._displayName;
    }
    /**
     * Sets the display name of the attribute.
     * @param {string} value */
    set DisplayName(value) {

        Validation.EnsureRequired(value, "DisplayName");

        this._displayName = value;
    }

    /** 
     *  Gets the type code of the attribute.
     *  @returns {number} */
    get TypeCode() {

        return this._typeCode;
    }
    /**
     * Sets the type code of the attribute.
     * @param {number} value */
    set TypeCode(value) {

        Validation.EnsureRequired(value, "TypeCode");

        this._typeCode = value;
    }

    /**
     * Gets the enum name of the attribute.
     * The type code should be equal to 13.
     * @returns {string} */
    get EnumName() {

        return this._enumName;
    }
    /**
     * Sets the enum name of the attribute.
     * @param {string} value */
    set EnumName(value) {

        this._enumName = value;
    }

    /**
     * Gets the type code name of the attribute.
     * @returns {number} */
    get TypeCodeName() {

        return AttributeTypeCode[this._typeCode];
    }

    /**
     * Gets the HTML input type of the attribute.
     * @returns {number} */
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

    /**
     * Gets a value indicating whether the attribute is a system attribute.
     * @returns {number} */
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