var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AppBarStatus = (function () {
            function AppBarStatus() {
            }
            AppBarStatus.prototype.Detail = function () {
                this.IsNewDisabled = false;
                this.IsRefreshDisabled = false;
                this.IsDeleteDisabled = false;
                this.IsSaveDisabled = false;
                this.IsCancelDisabled = false;
            };
            AppBarStatus.prototype.Master = function () {
                this.IsNewDisabled = false;
                this.IsRefreshDisabled = false;
                this.IsDeleteDisabled = true;
                this.IsSaveDisabled = true;
                this.IsCancelDisabled = true;
            };
            return AppBarStatus;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Core.appBarStatusName, function () { return new AppBarStatus(); });
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
