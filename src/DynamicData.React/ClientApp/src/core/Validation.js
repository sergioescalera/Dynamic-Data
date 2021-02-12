import { Strings } from './Resources';

/**
 * Validation helper class
 * */
export class Validation {

    /**
     * Throws an error if value is null or undefined.
     * Throws if value is the empty string and validateEmptyString is true.
     * @param {any} value
     * @param {string} label
     * @param {boolean} validateEmptyString
     */
    static EnsureRequired(value, label, validateEmptyString = true) {

        if (value === undefined || value === null) {
            throw new Error(Strings.RequiredFieldMessageFormat(label));
        }

        if (validateEmptyString && value === "") {
            throw new Error(Strings.RequiredFieldMessageFormat(label));
        }
    }
}