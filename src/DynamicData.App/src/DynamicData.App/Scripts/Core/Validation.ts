module DynamicData.Core {

    "use strict";

    export class Validation {

        static EnsureRequired(value: any, label: string, validateEmptyString: boolean = true): void {

            if (value === undefined || value === null) {
                throw new Error(Resources.Strings.RequiredFieldMessageFormat(label));
            }

            if (validateEmptyString && typeof value === "string" && value === "") {
                throw new Error(Resources.Strings.RequiredFieldMessageFormat(label));
            }
        }
    }
}