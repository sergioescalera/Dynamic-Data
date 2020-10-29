module DynamicData.Data {

    "use strict";

    export enum DataActionError {
        Unknown = -1,
        None = 0,
        NotFound = 1,
        Duplicate = 2
    }

    export interface IDataActionResult {
        Success: boolean;
        Error: DataActionError;
    }

    class DataActionResult implements IDataActionResult {
        Success: boolean;
        Error: DataActionError;

        constructor(error?: DataActionError) {

            this.Success = !error;
            this.Error = error || DataActionError.None;
        }
    }

    export class DataActionResults {

        static success: IDataActionResult = new DataActionResult();
        static notFound: IDataActionResult = new DataActionResult(DataActionError.NotFound);
        static duplicate: IDataActionResult = new DataActionResult(DataActionError.Duplicate);
    }
}