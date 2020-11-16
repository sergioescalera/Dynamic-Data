export class Strings {

    static RequiredFieldMessageFormat = (paramName) => `'${paramName}' cannot be null or empty.`;
    static RequiredArgumentMessageFormat = (paramName) => `Argument cannot be null or empty '${paramName}'.`;
    static DuplicatedEntityTypeMessageFormat = (type) => `Duplicated entity type '${type}'.`;
    static MissingEntityTypeMessageFormat = (type) => `Entity type '${type}' is missing.`;
    static NotSupportedMessage = "Not supported.";
    static SystemAttributeSerializationMessageFormat = (name) => `Unable to serialize a System Attribute ${name}.`;
    static No = "No";
    static Yes = "Yes";
}