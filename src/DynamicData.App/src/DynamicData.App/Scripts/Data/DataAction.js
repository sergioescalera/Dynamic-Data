var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        (function (DataActionError) {
            DataActionError[DataActionError["Unknown"] = -1] = "Unknown";
            DataActionError[DataActionError["None"] = 0] = "None";
            DataActionError[DataActionError["NotFound"] = 1] = "NotFound";
            DataActionError[DataActionError["Duplicate"] = 2] = "Duplicate";
        })(Data.DataActionError || (Data.DataActionError = {}));
        var DataActionError = Data.DataActionError;
        var DataActionResult = (function () {
            function DataActionResult(error) {
                this.Success = !error;
                this.Error = error || DataActionError.None;
            }
            return DataActionResult;
        }());
        var DataActionResults = (function () {
            function DataActionResults() {
            }
            DataActionResults.success = new DataActionResult();
            DataActionResults.notFound = new DataActionResult(DataActionError.NotFound);
            DataActionResults.duplicate = new DataActionResult(DataActionError.Duplicate);
            return DataActionResults;
        }());
        Data.DataActionResults = DataActionResults;
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
