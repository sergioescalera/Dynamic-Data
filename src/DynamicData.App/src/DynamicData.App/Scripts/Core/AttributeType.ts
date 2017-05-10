module DynamicData.Core {

    "use strict";

    export interface IAttributeType {
        Name: string;
        DisplayName: string;
        TypeCode: AttributeTypeCode;
    }

    export class AttributeType implements IAttributeType {

        private _name: string;
        private _displayName: string;
        private _typeCode: AttributeTypeCode;

        constructor(name: string, displayName: string, typeCode: AttributeTypeCode) {

            this.Name = name;
            this.DisplayName = displayName;
            this.TypeCode = typeCode;
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

        get TypeCodeName(): string {

            return AttributeTypeCode[this._typeCode];
        }
    }

    export class AttributeTypeSerialization {

        static FromPOCO(poco: any): IAttributeType {

            return new AttributeType(poco.Name, poco.DisplayName, poco.TypeCode);
        }

        static ToPOCO(attribute: IAttributeType): any {

            return {
                Name: attribute.Name,
                DisplayName: attribute.DisplayName,
                TypeCode: attribute.TypeCode
            };
        }
    }

    export enum AttributeTypeCode {
        Boolean = 1,
        Date = 2,
        DateTime = 3,
        Decimal = 4,
        Email = 5,
        Int = 6,
        Phone = 7,
        String = 8,
        Text = 9,
        Url = 10,
        Currency = 11,
        Time = 12,
    }
}