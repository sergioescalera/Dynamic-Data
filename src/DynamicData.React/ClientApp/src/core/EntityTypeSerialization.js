import { AttributeTypeSerialization } from './AttributeTypeSerialization';
import { EntityType } from './EntityType';
import { Trace } from './Trace';

export class EntityTypeSerialization {

    static ToPOCO(type) {

        return {
            Name: type.Name,
            DisplayName: type.DisplayName,
            DisplayPluralName: type.DisplayPluralName,
            Icon: type.Icon,
            Attributes: type.Attributes
                .filter((a) => !a.IsSystemAttribute)
                .map((a) => { return AttributeTypeSerialization.ToPOCO(a); })
        };
    }

    static FromPOCO(poco) {

        const type = new EntityType(poco.Name, poco.DisplayName, poco.DisplayPluralName);

        type.Icon = poco._icon;

        for (let i = 0; i < poco.Attributes.length; i++) {

            try {

                const attribute = AttributeTypeSerialization.FromPOCO(poco.Attributes[i]);

                type.Attributes.push(attribute);

            } catch (e) {

                Trace.Warning(e);
            }
        }

        return type;
    }
}