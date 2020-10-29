module DynamicData.UI.Filters {

    "use strict";

    angular.module(Config.appName)
        .filter("format", [
            () => {

                return (value: any, typeCode?: Core.AttributeTypeCode) => {

                    if (typeCode === Core.AttributeTypeCode.Boolean || typeof value === "boolean") {

                        return !value ? Resources.Strings.No : Resources.Strings.Yes;
                    }

                    if (_.isUndefined(value) || _.isNull(value)) {

                        return "";
                    }

                    if (typeCode === Core.AttributeTypeCode.Date) {

                        return moment(value).format("MMM DD YYYY");
                    }

                    if (typeCode === Core.AttributeTypeCode.DateTime) {

                        return moment(value).format("MMM DD YYYY hh:mm A");
                    }

                    if (typeCode === Core.AttributeTypeCode.Time) {

                        return moment(value).format("hh:mm A");
                    }

                    if (moment.isDate(value)) {

                        return moment(value).format("MMM DD YYYY");
                    }

                    return value.toString();
                };
            }]);
}