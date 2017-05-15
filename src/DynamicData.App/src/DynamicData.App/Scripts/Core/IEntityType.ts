module DynamicData.Core {

    "use strict";

    export interface IEntityType {
        Name: string;
        DisplayName: string;
        DisplayPluralName: string;
        Icon: string;
        Attributes: IAttributeType[];

        AddAttribute(attribute: IAttributeType): boolean;
        DeleteAttribute(name: string): boolean;
        GetAttribute(name: string): IAttributeType;

        IsValid(): boolean;
    }
}