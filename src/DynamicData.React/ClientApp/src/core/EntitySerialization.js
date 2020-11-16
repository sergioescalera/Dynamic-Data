import { Entity } from './Entity';
import { AttributeTypeCode } from './AttributeTypeCode';

export class EntitySerialization {

    static FromPOCO(type, id, poco) {

        const entity = new Entity(type, id);

        const keys = Object.keys(poco);

        keys.forEach((key) => {

            const attribute = entity.Type.GetAttribute(key);

            if (!!attribute) {
                entity.Fields[key] = EntitySerialization.ParseField(attribute, poco[key]);
            }
        });

        return entity;
    }

    static ParseField(type, value) {

        switch (type.TypeCode) {

            case AttributeTypeCode.Boolean:
                if (typeof value === "boolean") {
                    return value;
                }
                break;
            case AttributeTypeCode.Currency:
            case AttributeTypeCode.Decimal:
            case AttributeTypeCode.Int:
                if (typeof value === "number") {
                    return value;
                }
                break;
            case AttributeTypeCode.Date:
            case AttributeTypeCode.DateTime:
            case AttributeTypeCode.Time:
                if (typeof value === "object" && value !== null &&
                    typeof value.getMonth === 'function') {
                    return value;
                }
                if (typeof value === "string") {
                    return new Date(value);
                }
                break;
            case AttributeTypeCode.Email:
            case AttributeTypeCode.Phone:
            case AttributeTypeCode.String:
            case AttributeTypeCode.Text:
            case AttributeTypeCode.Url:
            case AttributeTypeCode.Enum:
                if (typeof value === "string") {
                    return value;
                }
                break;
            default:
                return null;
        }
    }
}