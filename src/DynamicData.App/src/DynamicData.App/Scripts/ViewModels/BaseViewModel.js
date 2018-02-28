var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var BaseViewModel = /** @class */ (function () {
            function BaseViewModel(settings) {
                this.Settings = settings || DynamicData.Data.storage.Settings;
            }
            return BaseViewModel;
        }());
        ViewModels.BaseViewModel = BaseViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
