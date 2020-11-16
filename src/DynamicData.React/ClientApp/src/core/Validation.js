import { Strings } from './Resources';

export class Validation {

    static EnsureRequired(value, label, validateEmptyString = true) {

        if (value === undefined || value === null) {
            throw new Error(Strings.RequiredFieldMessageFormat(label));
        }

        if (validateEmptyString && value === "") {
            throw new Error(Strings.RequiredFieldMessageFormat(label));
        }
    }
}