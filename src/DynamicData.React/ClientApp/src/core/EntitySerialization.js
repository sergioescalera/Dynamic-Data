import { Entity } from './Entity';
import { AttributeTypeCode } from './AttributeTypeCode';

export function isDateObj(value) {

    return value instanceof Date;
}

export function isString(value) {

    return typeof value === "string";
}


export function isBoolean(value) {

    return typeof value === "boolean";
}

export function isNumber(value) {

    return typeof value === "number";
}

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

    static ParseField(attr, value) {

        switch (attr.TypeCode) {

            case AttributeTypeCode.Boolean:
                if (isBoolean(value)) {
                    return value;
                }
                break;
            case AttributeTypeCode.Currency:
            case AttributeTypeCode.Decimal:
            case AttributeTypeCode.Int:
                if (isNumber(value)) {
                    return value;
                }
                break;
            case AttributeTypeCode.Date:
            case AttributeTypeCode.DateTime:
                if (isDateObj(value)) {
                    return value;
                }
                if (isString(value)) {
                    return new Date(value);
                }
                break;
            case AttributeTypeCode.Time:
            case AttributeTypeCode.Email:
            case AttributeTypeCode.Phone:
            case AttributeTypeCode.String:
            case AttributeTypeCode.Text:
            case AttributeTypeCode.Url:
            case AttributeTypeCode.Enum:
                if (isString(value)) {
                    return value;
                }
                break;
            default:
                return null;
        }
    }
}