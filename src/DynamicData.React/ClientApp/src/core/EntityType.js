import { systemAttributes } from './AttributeType';
import { Strings } from './Resources';
import { Validation } from './Validation';

/** Class representing an entity type. */
export class EntityType {

    _name = "";
    _displayName = "";
    _displayPluralName = "";
    _icon = "";
    _attributes = [];

    /**
     * Creates an instance of the EntityType class.
     * @param {string} name
     * @param {string} displayName
     * @param {string} displayPluralName
     */
    constructor(name, displayName, displayPluralName) {

        this.Name = name;
        this.DisplayName = displayName;
        this.DisplayPluralName = displayPluralName;
    }

    /** 
     *  Gets the entity type name.
     *  @returns {string}. */
    get Name() {

        return this._name;
    }
    /**
     * Sets the entity type name.
     * @param {string} value */
    set Name(value) {

        Validation.EnsureRequired(value, "Name");

        this._name = value;
    }

    /** 
     *  Gets the entity type display name.
     *  @returns {string} */
    get DisplayName() {

        return this._displayName;
    }
    /**
     * Sets the entity type display name.
     * @param {string} value */
    set DisplayName(value) {

        Validation.EnsureRequired(value, "Display Name");

        this._displayName = value;
    }

    /**
     *  Gets the entity type display name.
     *  @returns {string} */
    get DisplayPluralName() {

        return this._displayPluralName;
    }
    /**
     * Sets the entity type display name.
     * @param {string} value */
    set DisplayPluralName(value) {

        Validation.EnsureRequired(value, "Display Plural Name");

        this._displayPluralName = value;
    }


    /**
     *  Gets the entity type icon.
     *  @returns {string} */
    get Icon() {

        return this._icon;
    }
    /**
     * Sets the entity type icon.
     * @param {string} value */
    set Icon(value) {

        this._icon = value;
    }

    /**
     *  Gets the entity type attribute collection.
     *  @returns {AttributeType[]} */
    get Attributes() {

        if (!this._attributes) {

            this._attributes = systemAttributes();
        }

        return this._attributes;
    }
    set Attributes(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    /**
     * Adds an attribute to the attribute collection.
     * @param {AttributeType} attribute
     */
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

    /**
     * Removes an attribute from the attribute collection.
     * @param {string} name
     */
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

    /**
     * Finds an attribute by its name.
     * @param {string} name
     */
    GetAttribute(name) {

        if (!name) {
            return null;
        }

        const attributes = this.Attributes;
        const filter = attributes.filter((a) => a.Name === name);

        return !!filter && !!filter.length ? filter[0] : null;
    }

    /**
     * Returns true if the entity type is valid, false otherwise.
     * @returns {boolean}
     * */
    IsValid() {

        return this.NameIsValid() && !!this.DisplayName && !!this.DisplayPluralName && this.Attributes.length > 0;
    }

    /**
     * Returns true if the name of the entity type is valid, false otherwise.
     * @returns {boolean}
     * */
    NameIsValid() {

        const name = this._name;

        return typeof name === "string"
            && name !== null
            && name !== ""
            && name !== "undefined"
            && /^[a-zA-Z_]+$/.test(name);
    }
}