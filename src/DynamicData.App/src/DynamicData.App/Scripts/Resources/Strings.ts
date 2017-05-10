module DynamicData.Resources {

    "use strict";

    export class Strings {

        static RequiredFieldMessageFormat = (paramName: string) => `'${paramName}' cannot be null or empty.`;
        static RequiredArgumentMessageFormat = (paramName: string) => `Argument cannot be null or empty '${paramName}'.`;
        static DuplicatedEntityTypeMessageFormat = (type: string) => `Duplicated entity type '${type}'.`;
        static MissingEntityTypeMessageFormat = (type: string) => `Entity type '${type}' is missing.`;
        static NotSupportedMessage = "Not supported.";
        static No = "No";
        static Yes = "Yes";
    }
}