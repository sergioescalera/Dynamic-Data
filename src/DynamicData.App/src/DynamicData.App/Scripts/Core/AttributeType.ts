module DynamicData.Core {

    "use strict";

    export class AttributeType implements IAttributeType {

        private _name: string;
        private _displayName: string;
        private _typeCode: AttributeTypeCode;
        private _enumName: string;

        constructor(name: string, displayName: string, typeCode: AttributeTypeCode, enumName?: string) {

            this.Name = name;
            this.DisplayName = displayName;
            this.TypeCode = typeCode;
            this.EnumName = enumName;
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

            Validation.EnsureRequired(value, "DisplayName");

            this._displayName = value;
        }

        get TypeCode(): AttributeTypeCode {

            return this._typeCode;
        }
        set TypeCode(value: AttributeTypeCode) {

            Validation.EnsureRequired(value, "TypeCode");

            this._typeCode = value;
        }

        get EnumName(): string {

            return this._enumName;
        }
        set EnumName(value: string) {

            this._enumName = value;
        }

        get TypeCodeName(): string {

            return AttributeTypeCode[this._typeCode];
        }
    }
}