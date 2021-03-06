﻿module DynamicData.Core {

    "use strict";

    export class AttributeTypeSerialization {

        static FromPOCO(poco: any): IAttributeType {

            return new AttributeType(poco.Name, poco.DisplayName, poco.TypeCode, poco.EnumName || null);
        }

        static ToPOCO(attribute: IAttributeType): any {

            if (attribute.IsSystemAttribute) {
                throw new Error(Resources.Strings.SystemAttributeSerializationMessageFormat(attribute.Name));
            }

            return {
                Name: attribute.Name,
                DisplayName: attribute.DisplayName,
                TypeCode: attribute.TypeCode,
                EnumName: attribute.EnumName
            };
        }
    }
}