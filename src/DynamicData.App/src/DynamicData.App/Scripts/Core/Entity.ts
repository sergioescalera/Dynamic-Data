module DynamicData.Core {

    "use strict";

    export class Entity implements IEntity {

        private _type: IEntityType;
        private _fields: Object;

        Id: number;

        get Type(): IEntityType {

            return this._type;
        }
        set Type(value: IEntityType) {
            throw new Error(Resources.Strings.NotSupportedMessage);
        }

        get Fields(): Object {

            return this._fields;
        }
        set Fields(value: Object) {
            throw new Error(Resources.Strings.NotSupportedMessage);
        }

        get HasValidId(): boolean {

            return angular.isNumber(this.Id);
        }
        set HasValidId(value: boolean) {
            throw new Error(Resources.Strings.NotSupportedMessage);
        }

        constructor(type: IEntityType, id: number = null) {

            Validation.EnsureRequired(type, "type");
            
            this._type = type;
            this._fields = {};

            this.Id = id;
        }
    }
}