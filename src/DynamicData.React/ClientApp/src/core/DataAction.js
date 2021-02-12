export class DataActionError {
    static Unknown = -1;
    static None = 0;
    static NotFound = 1;
    static Duplicate = 2;
}

/** Class representing a data action result */
export class DataActionResult {

    Success = true;
    Error = null;

    /**
     * Creates an instance of the DataActionResult class
     * @param {Error} error
     */
    constructor(error = null) {

        this.Success = !error;
        this.Error = error || DataActionError.None;
    }

    /** 
     *  Gets the error message
     *  @returns {string}
     */
    get ErrorMessage() {

        if (Error === DataActionError.NotFound) {
            return "Item not found";
        }

        if (Error === DataActionError.NotFound) {
            return "Duplicated item";
        }

        return "";
    }
}

export class DataActionResults {

    static success = new DataActionResult();
    static notFound = new DataActionResult(DataActionError.NotFound);
    static duplicate = new DataActionResult(DataActionError.Duplicate);
}