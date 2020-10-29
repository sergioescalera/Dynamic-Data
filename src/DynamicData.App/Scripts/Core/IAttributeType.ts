module DynamicData.Core {

    "use strict";

    export interface IAttributeType {
        Name: string;
        DisplayName: string;
        TypeCode: AttributeTypeCode;
        EnumName?: string;
        IsSystemAttribute: boolean;
    }
}