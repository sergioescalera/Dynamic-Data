import { AttributeType } from './AttributeType';
import { Strings } from './Resources';

export class AttributeTypeSerialization {

    static FromPOCO(poco) {

        return new AttributeType(poco.Name, poco.DisplayName, poco.TypeCode, poco.EnumName || null);
    }

    static ToPOCO(attribute) {

        if (attribute.IsSystemAttribute) {
            throw new Error(Strings.SystemAttributeSerializationMessageFormat(attribute.Name));
        }

        return {
            Name: attribute.Name,
            DisplayName: attribute.DisplayName,
            TypeCode: attribute.TypeCode,
            EnumName: attribute.EnumName
        };
    }
}