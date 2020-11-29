export class DataActionError {
    static Unknown = -1;
    static None = 0;
    static NotFound = 1;
    static Duplicate = 2;
}

export class DataActionResult {
    Success = true;
    Error = null;

    constructor(error = null) {

        this.Success = !error;
        this.Error = error || DataActionError.None;
    }

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