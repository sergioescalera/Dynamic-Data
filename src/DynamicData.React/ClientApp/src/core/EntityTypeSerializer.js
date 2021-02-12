import { AttributeTypeSerializer } from './AttributeTypeSerializer';
import { EntityType } from './EntityType';
import { Trace } from './Trace';

/** Class that handles entity type serialization. */
export class EntityTypeSerializer {

    /**
     * Converts a plain object to an EntityType instance
     * @param {Object} obj
     */
    FromPlainObject(obj) {

        const type = new EntityType(obj.Name, obj.DisplayName, obj.DisplayPluralName);
        const serializer = new AttributeTypeSerializer();

        type.Icon = obj._icon;

        for (let i = 0; i < obj.Attributes.length; i++) {

            try {

                const attribute = serializer.FromPlainObject(obj.Attributes[i]);

                type.Attributes.push(attribute);

            } catch (e) {

                Trace.Warning(e);
            }
        }

        return type;
    }

    /**
     * Converts an EntityType instance to plain object
     * @param {EntityType} type
     */
    ToPlainObject(type) {

        const serializer = new AttributeTypeSerializer();

        return {
            Name: type.Name,
            DisplayName: type.DisplayName,
            DisplayPluralName: type.DisplayPluralName,
            Icon: type.Icon,
            Attributes: type.Attributes
                .filter((a) => !a.IsSystemAttribute)
                .map((a) => { return serializer.ToPlainObject(a); })
        };
    }
}