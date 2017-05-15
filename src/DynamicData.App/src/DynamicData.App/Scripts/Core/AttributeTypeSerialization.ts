module DynamicData.Core {

    "use strict";

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
}