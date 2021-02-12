import { Strings } from './Resources';
import { Validation } from './Validation';

/** Class representing an entity */
export class Entity {

    _type;
    _fields = {};

    /**
     * Creates an instance of the Entity class.
     * @param {EntityType} type The entity type.
     * @param {string} id The entity's unique identifier.
     */
    constructor(type, id = null) {

        Validation.EnsureRequired(type, "type");

        this._type = type;
        this._fields = {};

        this.Id = id;
    }

    /** 
     *  Get or set the unique identifier.
     *  @returns {number} */
    Id = null;

    /** 
     *  Gets the entity type.
     *  @returns {EntityType} */
    get Type() {

        return this._type;
    }
    /**
     * Sets the entity type.
     * @param {EntityType} value */
    set Type(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    /** 
     *  Gets object that store entity's field values.
     *  @returns {Object} */
    get Fields() {

        return this._fields;
    }
    set Fields(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    /** 
     *  Returns true if the Id field value is a finite number (not null).
     *  @returns {boolean} */
    get HasValidId() {

        const id = this.Id;

        return typeof id === "number" && isNaN(id) === false && isFinite(id);
    }
    set HasValidId(value) {

        throw new Error(Strings.NotSupportedMessage);
    }
}