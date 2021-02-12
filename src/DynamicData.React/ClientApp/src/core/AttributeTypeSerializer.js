import { AttributeType } from './AttributeType';
import { Strings } from './Resources';

/** Class that handles attribute type serialization. */
export class AttributeTypeSerializer {

    /**
     * Converts a plain object to an AttributeType instance.
     * @param {Object} obj Plain object with the following properties: Name, DisplayName, TypeCode, EnumName.
     */
    FromPlainObject(obj) {

        return new AttributeType(
            obj.Name,
            obj.DisplayName,
            obj.TypeCode,
            obj.EnumName || null);
    }

    /**
     * Converts an AttributeType instance to plain object.
     * @param {AttributeType} attribute instance of AttributeType class.
     */
    ToPlainObject(attribute) {

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