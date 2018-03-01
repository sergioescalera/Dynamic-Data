module DynamicData.Core {

    "use strict";

    export class EntityTypeSerialization {

        static ToPOCO(type: IEntityType): any {

            return {
                Name: type.Name,
                DisplayName: type.DisplayName,
                DisplayPluralName: type.DisplayPluralName,
                Icon: type.Icon,
                Attributes: type.Attributes
                    .filter((a: IAttributeType) => !a.IsSystemAttribute)
                    .map((a: IAttributeType) => { return AttributeTypeSerialization.ToPOCO(a); })
            };
        }

        static FromPOCO(poco: any): IEntityType {

            var type: IEntityType = new EntityType(poco.Name, poco.DisplayName, poco.DisplayPluralName);

            type.Icon = poco._icon;

            for (var i: number = 0; i < poco.Attributes.length; i++) {

                try {

                    var attribute: IAttributeType = AttributeTypeSerialization.FromPOCO(poco.Attributes[i]);

                    type.Attributes.push(attribute);

                } catch (e) {

                    Core.Trace.Warning(e);
                }
            }

            return type;
        }
    }
}