module DynamicData.Core {

    "use strict";

    export class EntitySerialization {

        static FromPOCO(type: IEntityType, id: number, poco: Object): IEntity {

            var entity: IEntity = new Entity(type, id);

            var keys: string[] = Object.keys(poco);

            keys.forEach((key: string) => {

                var attribute: IAttributeType = entity.Type.GetAttribute(key);

                if (!!attribute) {
                    entity.Fields[key] = EntitySerialization.ParseField(attribute, poco[key]);
                }
            });

            return entity;
        }

        private static ParseField(type: IAttributeType, value: any): any {

            switch (type.TypeCode) {

                case AttributeTypeCode.Boolean:
                    if (typeof value === "boolean") {
                        return value;
                    }
                case AttributeTypeCode.Currency:
                case AttributeTypeCode.Decimal:
                case AttributeTypeCode.Int:
                    if (angular.isNumber(value)) {
                        return value;
                    }
                case AttributeTypeCode.Date:
                case AttributeTypeCode.DateTime:
                case AttributeTypeCode.Time:
                    if (angular.isDate(value)) {
                        return value;
                    }
                    if (angular.isString(value)) {
                        return moment(value).toDate();
                    }
                case AttributeTypeCode.Email:
                case AttributeTypeCode.Phone:
                case AttributeTypeCode.String:
                case AttributeTypeCode.Text:
                case AttributeTypeCode.Url:
                    if (angular.isString(value)) {
                        return value;
                    }
                default:
                    return null;
            }
        }
    }
}