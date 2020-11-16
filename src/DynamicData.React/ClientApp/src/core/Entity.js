import { Strings } from './Resources';
import { Validation } from './Validation';

export class Entity {

    _type;
    _fields = {};

    Id = null;

    get Type() {

        return this._type;
    }
    set Type(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    get Fields() {

        return this._fields;
    }
    set Fields(value) {
        throw new Error(Strings.NotSupportedMessage);
    }

    get HasValidId() {

        const id = this.Id;

        return typeof id === "number" && isNaN(id) === false && isFinite(id);
    }
    set HasValidId(value) {

        throw new Error(Strings.NotSupportedMessage);
    }

    constructor(type, id = null) {

        Validation.EnsureRequired(type, "type");

        this._type = type;
        this._fields = {};

        this.Id = id;
    }
}